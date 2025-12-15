// excel.js
const ExcelJS = require('exceljs')
const path = require('path')
const fs = require('fs')

export class ExcelHelper {
  workbook: any
  loaded: boolean
  templatePath: string | null
  constructor(templatePath = null) {
    // 每个实例独立 workbook（并发安全）
    this.workbook = new ExcelJS.Workbook()
    this.loaded = false

    if (templatePath) {
      if (!path.isAbsolute(templatePath)) {
        throw new Error('模板路径必须是绝对路径')
      }

      if (!fs.existsSync(templatePath)) {
        throw new Error('Excel 模板文件不存在')
      }

      this.templatePath = templatePath
    } else {
      this.templatePath = null
    }
  }

  /**
   * 加载模板（如果有）
   */
  async load() {
    if (this.templatePath) {
      await this.workbook.xlsx.readFile(this.templatePath)
    }
    this.loaded = true
  }

  /**
   * 新建 Sheet（无模板时必用）
   */
  createSheet(sheetName, columns = []) {
    this._checkLoaded()

    const sheet = this.workbook.addWorksheet(sheetName)

    if (columns.length) {
      sheet.columns = columns.map((col: any) => ({
        header: col.header,
        key: col.key,
        width: col.width || 20
      }))
    }

    return sheet
  }
  /**
   * 按行批量填充（二维数组）
   * @param sheetName
   * @param startRow 模板中数据起始行（通常是示例行）
   * @param rows 二维数组
   * @param duplicate 是否复制模板行
   */
  fillByRows(sheetName, startRow, rows = [], duplicate = true) {
    this._checkLoaded()

    const sheet = this.workbook.getWorksheet(sheetName)
    if (!sheet) {
      throw new Error(`Sheet 不存在：${sheetName}`)
    }

    if (!rows.length) return

    // 1️⃣ 复制模板行（保留样式）
    if (duplicate && rows.length > 1) {
      sheet.duplicateRow(startRow, rows.length - 1, true)
    }

    // 2️⃣ 填充数据
    rows.forEach((rowData: any, index) => {
      const row = sheet.getRow(startRow + index)
      rowData.forEach((value, colIndex) => {
        row.getCell(colIndex + 1).value = value
      })
      row.commit?.()
    })
  }

  /**
   * 填充数据（按单元格）
   */
  fillByCell(sheetName, cellMap = {}) {
    this._checkLoaded()

    const sheet = this.workbook.getWorksheet(sheetName)
    if (!sheet) {
      throw new Error(`Sheet 不存在：${sheetName}`)
    }

    Object.keys(cellMap).forEach((cell) => {
      sheet.getCell(cell).value = cellMap[cell]
    })
  }

  /**
   * 填充数据（按 key，占位符 {{key}}）
   */
  fillByKey(sheetName, data = {}) {
    this._checkLoaded()

    const sheet = this.workbook.getWorksheet(sheetName)
    if (!sheet) {
      throw new Error(`Sheet 不存在：${sheetName}`)
    }

    sheet.eachRow((row) => {
      row.eachCell((cell) => {
        if (typeof cell.value === 'string') {
          Object.keys(data).forEach((key) => {
            const reg = new RegExp(`{{\\s*${key}\\s*}}`, 'g')
            cell.value = cell.value.replace(reg, data[key])
          })
        }
      })
    })
  }

  /**
   * 追加一行
   */
  appendRow(sheetName, rowData) {
    this._checkLoaded()

    const sheet = this.workbook.getWorksheet(sheetName)
    if (!sheet) {
      throw new Error(`Sheet 不存在：${sheetName}`)
    }

    sheet.addRow(rowData)
  }

  /**
   * 保存
   */
  async saveAs(outputPath) {
    this._checkLoaded()

    const dir = path.dirname(outputPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    await this.workbook.xlsx.writeFile(outputPath)
    return outputPath
  }

  /**
   * 生成 Buffer（不落盘）
   */
  async toBuffer() {
    this._checkLoaded()
    return await this.workbook.xlsx.writeBuffer()
  }

  _checkLoaded() {
    if (!this.loaded) {
      throw new Error('请先调用 load()')
    }
  }
}
