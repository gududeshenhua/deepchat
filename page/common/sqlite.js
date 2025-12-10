// sqlite.js
;(function (global) {
  class SQLiteManager {
    constructor() {
      this.sqlitePresenter = global.PresenterFactory.usePresenter('customSqlitePresenter')
      this._initialized = true
    }

    /**
     * 创建表
     * @param {string} tableName - 表名
     * @param {string} schema - 表结构定义
     */
    async createTable(tableName, schema) {
      try {
        await this.sqlitePresenter.createTable(tableName, schema)
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
        await this.sqlitePresenter.modifyTable(tableName, schema)
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
        const rowId = await this.sqlitePresenter.insert(tableName, data)
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
        await this.sqlitePresenter.batchInsert(tableName, dataArray)
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
        const results = await this.sqlitePresenter.query(sql, params)
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
        await this.sqlitePresenter.updateAllInsert(tableName, data, primaryKey)
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
        await this.sqlitePresenter.updateAll(tableName, data)
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
        const success = await this.sqlitePresenter.updateFieldsById(tableName, idObj, updates)
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
        await this.sqlitePresenter.deleteById(tableName, idObj)
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
        const data = await this.sqlitePresenter.getAllData(tableName)
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
        await this.sqlitePresenter.dropTable(tableName)
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
        await this.sqlitePresenter.truncateTable(tableName)
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
      if (this._initialized) {
        try {
          await this.sqlitePresenter.close()
          this._initialized = false
          console.log('SQLite connection closed')
        } catch (error) {
          console.error('Failed to close SQLite connection:', error)
          throw error
        }
      }
    }

    /**
     * 示例：创建学生表并操作数据
     */
    async demoStudentOperations() {
      try {
        // 创建学生表
        const studentSchema = `
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          age INTEGER,
          major TEXT,
          address TEXT,
          maritalStatus TEXT,
          graduated BOOLEAN DEFAULT 0
        `
        await this.createTable('students', studentSchema)

        // 插入单个学生
        // const studentId = await this.insert('students', {
        //   name: '张三',
        //   age: 20,
        //   major: '计算机科学',
        //   address: '北京市',
        //   maritalStatus: 'single',
        //    graduated: false ? 1 : 0
        // })

        // 批量插入学生
        // const students = [
        //   {
        //     name: '李四',
        //     age: 22,
        //     major: '软件工程',
        //     address: '上海市',
        //     maritalStatus: 'single',
        //      graduated: false ? 1 : 0
        //   },
        //   {
        //     name: '王五',
        //     age: 21,
        //     major: '人工智能',
        //     address: '深圳市',
        //     maritalStatus: 'single',
        //      graduated: false ? 1 : 0
        //   }
        // ]
        // await this.batchInsert('students', students)

        // // 查询所有学生
        // const allStudents = await this.getAllData('students')
        // console.log('All students:', allStudents)

        // // // 自定义查询
        // const csStudents = await this.query(
        //   'SELECT * FROM students WHERE major = ?',
        //   ['计算机科学']
        // )
        // console.log('Computer Science students:', csStudents)

        // 更新学生信息
        // await this.updateFieldsById('students', { id: "4" }, {
        //   age: 21,
        //   graduated: 0
        // })

        // 删除学生
        await this.deleteById('students', { id: 4 })

        console.log('Demo operations completed successfully')
      } catch (error) {
        console.error('Demo operations failed:', error)
        throw error
      }
    }
  }

  // 实例化并暴露
  global.SQLiteManager = new SQLiteManager()
})(globalThis)
