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
   * 读取文件Buffer
   * @param {string} filePath - 文件路径
   * @returns {Promise<Buffer>} 文件Buffer
   */
  async readFileBuffer(filePath, isBase64 = false) {
    try {
      const result = await globalThis.PresenterFactory.usePresenter(
        'commonFilePresenter'
      ).readFileBuffer(filePath, isBase64)
      console.log(`File ${filePath} buffer read successfully`)
      // 根据接口定义，需要返回整个result对象而不是仅仅buffer
      return result
    } catch (error) {
      console.error(`Failed to read file ${filePath} buffer:`, error)
      throw error
    }
  }

  /**
   * 列出目录中的文件
   * @param {string} dirPath - 目录路径
   * @returns {Promise<{ success: boolean; files?: Array<{ name: string; ext: string; isDirectory: boolean }>; message?: string }>} 文件列表
   */
  async listDirectoryFiles(dirPath) {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('commonFilePresenter').listDirectoryFiles(
          dirPath
        )
      console.log(`Directory ${dirPath} files listed successfully`)
      // 根据接口定义，直接返回result对象
      return result
    } catch (error) {
      console.error(`Failed to list directory ${dirPath} files:`, error)
      throw error
    }
  }

  /**
   * 打开对话框选择文件或文件夹
   * @param {Object} options - 选择选项
   * @param {string} [options.title] - 对话框标题
   * @param {string} [options.buttonLabel] - 按钮标签
   * @param {boolean} [options.selectFolder] - 是否选择文件夹
   * @param {boolean} [options.selectFile] - 是否选择文件
   * @param {boolean} [options.multiSelections] - 是否允许多选
   * @returns {Promise<{ success: boolean; path?: string | string[]; canceled?: boolean; message?: string }>} 选择结果
   */
  async selectFileOrFolder(options) {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('commonFilePresenter').selectFileOrFolder(
          options
        )
      console.log('File or folder selection completed')
      return result
    } catch (error) {
      console.error('Failed to select file or folder:', error)
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
