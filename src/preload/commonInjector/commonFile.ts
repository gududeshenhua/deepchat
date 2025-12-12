// commonFile.js
class CommonFileManager {
  constructor() {}

  /**
   * 读取文件
   * @param {string} filePath - 文件路径
   * @returns {Promise<Object>} 包含文件内容和类型的对象
   */
  async fileRead(filePath) {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('commonFilePresenter').fileRead(filePath)
      console.log(`File ${filePath} read successfully`)
      return result
    } catch (error) {
      console.error(`Failed to read file ${filePath}:`, error)
      throw error
    }
  }

  /**
   * 写入文件
   * @param {string} filePath - 文件路径
   * @param {Object|string} data - 要写入的数据
   * @returns {Promise<Object>} 操作结果
   */
  async fileWrite(filePath, data) {
    try {
      const result = await globalThis.PresenterFactory.usePresenter(
        'commonFilePresenter'
      ).fileWrite(filePath, data)
      console.log(`File ${filePath} written successfully`)
      return result
    } catch (error) {
      console.error(`Failed to write file ${filePath}:`, error)
      throw error
    }
  }

  /**
   * 删除文件
   * @param {string} filePath - 文件路径
   * @returns {Promise<Object>} 操作结果
   */
  async fileDelete(filePath) {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('commonFilePresenter').fileDelete(filePath)
      console.log(`File ${filePath} deleted successfully`)
      return result
    } catch (error) {
      console.error(`Failed to delete file ${filePath}:`, error)
      throw error
    }
  }

  /**
   * 解析文件路径
   * @param {string} inputPath - 输入路径
   * @returns {string|null} 解析后的绝对路径或null
   */
  resolvePath(inputPath) {
    try {
      const result =
        globalThis.PresenterFactory.usePresenter('commonFilePresenter').resolvePath(inputPath)
      console.log(`Path ${inputPath} resolved successfully`)
      return result
    } catch (error) {
      console.error(`Failed to resolve path ${inputPath}:`, error)
      throw error
    }
  }

  /**
   * 确保基础目录存在
   * @returns {Promise<void>}
   */
  async ensureBaseDir() {
    try {
      await globalThis.PresenterFactory.usePresenter('commonFilePresenter').ensureBaseDir()
      console.log('Base directory ensured successfully')
    } catch (error) {
      console.error('Failed to ensure base directory:', error)
      throw error
    }
  }
}
export default CommonFileManager
