import Database from 'better-sqlite3-multiple-ciphers'
import path from 'path'
import fs from 'fs'
import { ICustomSQLitePresenter } from '@shared/presenter'
import { app } from 'electron'

/**
 * 导入模式枚举
 */
export enum ImportMode {
  INCREMENT = 'increment', // 增量导入
  OVERWRITE = 'overwrite' // 覆盖导入
}
const dbDir = path.join(app.getPath('userData'), 'ai_db')

export class CustomSqlitePresenter implements ICustomSQLitePresenter {
  private db!: Database.Database
  private dbPath: string
  constructor(password?: string) {
    this.dbPath = path.join(dbDir, 'ai-browser.db')
    try {
      // 确保数据库目录存在
      const dbDir = path.dirname(this.dbPath)
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true })
      }

      // 初始化数据库连接
      this.db = new Database(this.dbPath)
      this.db.pragma('journal_mode = WAL')

      if (password) {
        this.db.pragma(`cipher='sqlcipher'`)
        this.db.pragma(`key='${password}'`)
      }

      // 尝试执行一个简单的查询来验证数据库是否正常
      this.db.prepare('SELECT 1').get()

      // 初始化版本表
      this.initVersionTable()
    } catch (error) {
      console.error('Database initialization failed:', error)

      // 如果数据库已经打开，先关闭它
      if (this.db) {
        try {
          this.db.close()
        } catch (closeError) {
          console.error('Error closing database:', closeError)
        }
      }

      // 重新创建一个新的数据库
      this.db = new Database(this.dbPath)
      this.db.pragma('journal_mode = WAL')

      if (password) {
        this.db.pragma(`cipher='sqlcipher'`)
        this.db.pragma(`key='${password}'`)
      }

      // 重新初始化数据库
      this.initVersionTable()
    }
  }

  private initVersionTable() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS orderReviewTable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        major TEXT,
        address TEXT,
        maritalStatus TEXT,
        graduated BOOLEAN
      )
    `)
  }

  /** 创建表 */
  public createTable(tableName: string, schema: string): void {
    const row = this.db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?")
      .get(tableName)

    if (!row) {
      const createSql = `CREATE TABLE ${tableName} (${schema})`
      console.info(createSql)
      this.db.prepare(createSql).run()
    } else {
      this.modifyTable(tableName, schema)
    }
  }

  /** 修改表结构 */
  private modifyTable(tableName: string, schema: string): void {
    const columns = this.db.prepare(`PRAGMA table_info(${tableName})`).all()
    const newColumns = schema.split(',').map((col) => {
      const [name, type] = col.trim().split(' ')
      return { name, type }
    })

    const addColumns = newColumns.filter(
      (newCol) => !columns.some((col: any) => col.name === newCol.name)
    )
    addColumns.forEach((col) => {
      const alterSql = `ALTER TABLE ${tableName} ADD COLUMN ${col.name} ${col.type}`
      this.db.prepare(alterSql).run()
    })

    const dropOrModifyColumns = columns.filter(
      (col: any) => !newColumns.some((newCol) => newCol.name === col.name)
    )

    if (dropOrModifyColumns.length > 0) {
      const tempTable = `${tableName}_temp`
      const createTempSql = `CREATE TABLE ${tempTable} (${schema})`
      const copyDataSql = `INSERT INTO ${tempTable} SELECT ${columns.map((c: any) => c.name).join(', ')} FROM ${tableName}`
      this.db.transaction(() => {
        this.db.prepare(createTempSql).run()
        this.db.prepare(copyDataSql).run()
        this.db.prepare(`DROP TABLE ${tableName}`).run()
        this.db.prepare(`ALTER TABLE ${tempTable} RENAME TO ${tableName}`).run()
      })()
    }
  }

  /** 插入数据 */
  public insert(tableName: string, data: Record<string, any>): number {
    const columns = Object.keys(data).join(', ')
    const placeholders = Object.keys(data)
      .map(() => '?')
      .join(', ')
    const stmt = this.db.prepare(`INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`)
    const info = stmt.run(...Object.values(data))
    return info.lastInsertRowid as number
  }

  /** 批量插入数据 */
  public batchInsert(tableName: string, dataArray: Record<string, any>[]): void {
    if (!dataArray.length) return
    const columns = Object.keys(dataArray[0]).join(', ')
    const placeholders = Object.keys(dataArray[0])
      .map(() => '?')
      .join(', ')
    const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`
    const stmt = this.db.prepare(sql)
    const insertMany = this.db.transaction((rows: Record<string, any>[]) => {
      for (const data of rows) stmt.run(...Object.values(data))
    })
    insertMany(dataArray)
  }

  /** 更新或插入数据（根据主键） */
  public updateAllInsert(
    tableName: string,
    data: Record<string, any>[],
    primaryKey: string = 'id'
  ): void {
    if (!data.length) return
    const columns = Object.keys(data[0])
    const updateColumns = columns.map((col) => `${col}=?`).join(', ')
    const stmtUpdate = this.db.prepare(
      `UPDATE ${tableName} SET ${updateColumns} WHERE ${primaryKey}=?`
    )
    const stmtInsert = this.db.prepare(
      `INSERT INTO ${tableName} (${columns.join(',')}) VALUES (${columns.map(() => '?').join(',')})`
    )
    const transaction = this.db.transaction(() => {
      for (const item of data) {
        const values = Object.values(item)
        const primaryKeyValue = item[primaryKey]
        const info = stmtUpdate.run(...values, primaryKeyValue)
        if (info.changes === 0) {
          stmtInsert.run(...values)
        }
      }
    })
    transaction()
  }

  /** 查询数据 */
  public query(sql: string, params: any[] = []): any[] {
    return this.db.prepare(sql).all(...params)
  }

  /** 更新全表数据，覆盖所有现有数据 */
  public updateAll(tableName: string, data: Record<string, any>[]): void {
    if (!Array.isArray(data)) {
      throw new Error('Data must be an array of objects.')
    }

    if (data.length === 0) {
      // 如果没有数据，清空表
      this.truncateTable(tableName)
      return
    }

    // 使用事务确保数据一致性
    const transaction = this.db.transaction(() => {
      // 删除表中的所有现有数据
      this.truncateTable(tableName)

      // 插入新数据
      this.batchInsert(tableName, data)
    })

    transaction()
  }

  /** 删除表 */
  public dropTable(tableName: string): void {
    this.db.prepare(`DROP TABLE IF EXISTS ${tableName}`).run()
  }

  /** 清空表 */
  public truncateTable(tableName: string): void {
    this.db.prepare(`DELETE FROM ${tableName}`).run()
  }

  /** 修改单条数据 */
  public updateFieldsById(
    tableName: string,
    idObj: Record<string, any>,
    updates: Record<string, any>
  ): boolean {
    const fields = Object.keys(updates)
    const idKey = Object.keys(idObj)[0]
    const idValue = idObj[idKey]
    const updateSQL = `UPDATE ${tableName} SET ${fields.map((f) => `${f}=?`).join(', ')} WHERE ${idKey}=?`
    const stmt = this.db.prepare(updateSQL)
    const info = stmt.run(...fields.map((f) => updates[f]), idValue)
    return info.changes > 0
  }

  /** 根据主键删除单条数据 */
  public deleteById(tableName: string, idObj: Record<string, any>): void {
    const key = Object.keys(idObj)[0]
    const value = idObj[key]
    this.db.prepare(`DELETE FROM ${tableName} WHERE ${key}=?`).run(value)
  }

  /** 获取表中所有数据 */
  public getAllData(tableName: string): any[] {
    return this.db.prepare(`SELECT * FROM ${tableName} ORDER BY id DESC`).all()
  }

  // 关闭数据库连接
  public close() {
    this.db.close()
  }
}
