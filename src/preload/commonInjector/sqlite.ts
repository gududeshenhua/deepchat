// sqlite.js
class SQLiteManager {
  constructor() {}

  /**
   * 创建表
   * @param {string} tableName - 表名
   * @param {string} schema - 表结构定义
   */
  async createTable(tableName, schema) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').createTable(
        tableName,
        schema
      )
      console.log(`Table ${tableName} created successfully`)
    } catch (error) {
      console.error(`Failed to create table ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 修改表结构
   * @param {string} tableName - 表名
   * @param {string} schema - 新的表结构定义
   */
  async modifyTable(tableName, schema) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').modifyTable(
        tableName,
        schema
      )
      console.log(`Table ${tableName} modified successfully`)
    } catch (error) {
      console.error(`Failed to modify table ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 插入数据
   * @param {string} tableName - 表名
   * @param {Object} data - 要插入的数据对象
   * @returns {number} 插入的行的ID
   */
  async insert(tableName, data) {
    try {
      const rowId = await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').insert(
        tableName,
        data
      )
      console.log(`Data inserted into ${tableName} with ID:`, rowId)
      return rowId
    } catch (error) {
      console.error(`Failed to insert data into ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 批量插入数据
   * @param {string} tableName - 表名
   * @param {Array} dataArray - 要插入的数据数组
   */
  async batchInsert(tableName, dataArray) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').batchInsert(
        tableName,
        dataArray
      )
      console.log(`Batch inserted ${dataArray.length} records into ${tableName}`)
    } catch (error) {
      console.error(`Failed to batch insert into ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 查询数据
   * @param {string} sql - SQL查询语句
   * @param {Array} params - 查询参数
   * @returns {Array} 查询结果数组
   */
  async query(sql, params = []) {
    try {
      const results = await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').query(
        sql,
        params
      )
      console.log(`Query executed, returned ${results.length} records`)
      return results
    } catch (error) {
      console.error('Query failed:', error)
      throw error
    }
  }

  /**
   * 更新或插入数据（根据主键）
   * @param {string} tableName - 表名
   * @param {Array} data - 要更新的数据数组
   * @param {string} primaryKey - 主键字段名，默认为'id'
   */
  async updateAllInsert(tableName, data, primaryKey = 'id') {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').updateAllInsert(
        tableName,
        data,
        primaryKey
      )
      console.log(`Update/Insert completed for ${tableName}`)
    } catch (error) {
      console.error(`Failed to update/insert into ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 更新全表数据，覆盖所有现有数据
   * @param {string} tableName - 表名
   * @param {Array} data - 要更新的数据数组
   */
  async updateAll(tableName, data) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').updateAll(
        tableName,
        data
      )
      console.log(`Update all data completed for ${tableName}`)
    } catch (error) {
      console.error(`Failed to update all data in ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 修改单条数据
   * @param {string} tableName - 表名
   * @param {Object} idObj - 主键对象，如 {id: 1}
   * @param {Object} updates - 要更新的字段对象
   * @returns {boolean} 是否成功更新
   */
  async updateFieldsById(tableName, idObj, updates) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'customSqlitePresenter'
      ).updateFieldsById(tableName, idObj, updates)
      console.log(`Update fields by ID in ${tableName}:`, success)
      return success
    } catch (error) {
      console.error(`Failed to update fields in ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 根据主键删除单条数据
   * @param {string} tableName - 表名
   * @param {Object} idObj - 主键对象，如 {id: 1}
   */
  async deleteById(tableName, idObj) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').deleteById(
        tableName,
        idObj
      )
      console.log(`Deleted record from ${tableName}`)
    } catch (error) {
      console.error(`Failed to delete from ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 获取表中所有数据
   * @param {string} tableName - 表名
   * @returns {Array} 表中所有数据
   */
  async getAllData(tableName) {
    try {
      const data =
        await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').getAllData(
          tableName
        )
      console.log(`Retrieved ${data.length} records from ${tableName}`)
      return data
    } catch (error) {
      console.error(`Failed to get all data from ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 删除表
   * @param {string} tableName - 表名
   */
  async dropTable(tableName) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').dropTable(tableName)
      console.log(`Table ${tableName} dropped successfully`)
    } catch (error) {
      console.error(`Failed to drop table ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 清空表
   * @param {string} tableName - 表名
   */
  async truncateTable(tableName) {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').truncateTable(
        tableName
      )
      console.log(`Table ${tableName} truncated successfully`)
    } catch (error) {
      console.error(`Failed to truncate table ${tableName}:`, error)
      throw error
    }
  }

  /**
   * 关闭数据库连接
   */
  async close() {
    try {
      await globalThis.PresenterFactory.usePresenter('customSqlitePresenter').close()
      console.log('SQLite connection closed')
    } catch (error) {
      console.error('Failed to close SQLite connection:', error)
      throw error
    }
  }
}

export default SQLiteManager
