// logger.js
;(function (global) {
  /**
   * LoggerManager - 日志管理器
   * 提供多级别日志功能，支持 error, warn, info, verbose, debug, silly, log 等日志级别
   */
  class LoggerManager {
    constructor() {
      this.logPresenter = global.PresenterFactory.usePresenter('logPresenter')
      this._initialized = false
      this._init()
    }

    /**
     * 内部初始化方法
     * @private
     */
    async _init() {
      try {
        // 检查日志功能是否可用
        if (this.logPresenter) {
          this._initialized = true
          console.log('LoggerManager 初始化成功')
        } else {
          console.warn('LoggerManager: logPresenter 不可用，将使用控制台日志')
        }
      } catch (error) {
        console.error('LoggerManager 初始化失败:', error)
      }
    }

    /**
     * 记录错误级别日志
     * @param {string} message - 日志消息
     * @param {any} [meta] - 附加元数据
     * @returns {Promise<void>}
     */
    async error(message, meta) {
      try {
        if (this._initialized && this.logPresenter) {
          await this.logPresenter.error(message, meta)
        } else {
          console.error(`[ERROR] ${message}`, meta || '')
        }
      } catch (error) {
        console.error('LoggerManager.error 调用失败:', error)
      }
    }

    /**
     * 记录警告级别日志
     * @param {string} message - 日志消息
     * @param {any} [meta] - 附加元数据
     * @returns {Promise<void>}
     */
    async warn(message, meta) {
      try {
        if (this._initialized && this.logPresenter) {
          await this.logPresenter.warn(message, meta)
        } else {
          console.warn(`[WARN] ${message}`, meta || '')
        }
      } catch (error) {
        console.error('LoggerManager.warn 调用失败:', error)
      }
    }

    /**
     * 记录信息级别日志
     * @param {string} message - 日志消息
     * @param {any} [meta] - 附加元数据
     * @returns {Promise<void>}
     */
    async info(message, meta) {
      try {
        if (this._initialized && this.logPresenter) {
          await this.logPresenter.info(message, meta)
        } else {
          console.info(`[INFO] ${message}`, meta || '')
        }
      } catch (error) {
        console.error('LoggerManager.info 调用失败:', error)
      }
    }


    /**
     * 记录调试级别日志
     * @param {string} message - 日志消息
     * @param {any} [meta] - 附加元数据
     * @returns {Promise<void>}
     */
    async debug(message, meta) {
      try {
        if (this._initialized && this.logPresenter) {
          await this.logPresenter.debug(message, meta)
        } else {
          console.debug(`[DEBUG] ${message}`, meta || '')
        }
      } catch (error) {
        console.error('LoggerManager.debug 调用失败:', error)
      }
    }

   
    /**
     * 记录通用日志
     * @param {string} level - 日志级别
     * @param {string} message - 日志消息
     * @param {any} [meta] - 附加元数据
     * @returns {Promise<void>}
     */
    async log(message, meta) {
      try {
        if (this._initialized && this.logPresenter) {
          await this.logPresenter.info(message, meta)
        } else {
          console.log(`${message}`, meta || '')
        }
      } catch (error) {
        console.error('LoggerManager.log 调用失败:', error)
      }
    }

  }

  // 实例化并暴露
  global.LoggerManager = new LoggerManager()
})(this)