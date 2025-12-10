class LoggerManager {
  constructor() {
    // this.logPresenter = global.PresenterFactory.usePresenter('logPresenter')
    // this._initialized = false
    // this._init()
  }
  /**
   * 记录错误级别日志
   * @param {string} message - 日志消息
   * @param {any} [meta] - 附加元数据
   * @returns {Promise<void>}
   */
  async error(message, meta) {
    try {
      if (globalThis.PresenterFactory.usePresenter('logPresenter')) {
        await globalThis.PresenterFactory.usePresenter('logPresenter').error(message, meta)
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
      if (globalThis.PresenterFactory.usePresenter('logPresenter')) {
        await globalThis.PresenterFactory.usePresenter('logPresenter').warn(message, meta)
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
      if (globalThis.PresenterFactory.usePresenter('logPresenter')) {
        await globalThis.PresenterFactory.usePresenter('logPresenter').info(message, meta)
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
      if (globalThis.PresenterFactory.usePresenter('logPresenter')) {
        await globalThis.PresenterFactory.usePresenter('logPresenter').debug(message, meta)
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
      if (globalThis.PresenterFactory.usePresenter('logPresenter')) {
        await globalThis.PresenterFactory.usePresenter('logPresenter').info(message, meta)
      } else {
        console.log(`${message}`, meta || '')
      }
    } catch (error) {
      console.error('LoggerManager.log 调用失败:', error)
    }
  }
}

export default LoggerManager
