// execl.js
class ExcelManager {
  constructor() {}

  /**
   * 无模板导出
   * @param {Object} options - 导出选项
   * @param {Array} options.sheets - 工作表数据
   * @returns {Promise<Buffer>} Excel文件的Buffer
   */
  async createExcel(options) {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('excelPresenter').createExcel(options)
      console.log('Excel file created successfully without template')
      return result
    } catch (error) {
      console.error('Failed to create Excel file without template:', error)
      throw error
    }
  }

  /**
   * 有模板导出
   * @param {Object} options - 导出选项
   * @param {string} options.templatePath - 模板文件路径
   * @param {Object} options.fill - 填充数据
   * @param {string|'buffer'} options.output - 输出方式
   * @returns {Promise<Buffer|string>} Excel文件的Buffer或文件路径
   */
  async createByTemplate(options) {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('excelPresenter').createByTemplate(options)
      console.log('Excel file created successfully with template')
      return result
    } catch (error) {
      console.error('Failed to create Excel file with template:', error)
      throw error
    }
  }
}

export default ExcelManager
