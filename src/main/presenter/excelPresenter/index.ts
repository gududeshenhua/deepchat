// main/excel/ExcelService.js
import { ExcelHelper } from './excelHelper'
import { IExcelPresenter } from '@shared/presenter'
import { dialog } from 'electron'
export class excelPresenter implements IExcelPresenter {
  /**
   * 无模板导出
   */
  async createExcel({ sheets, output = 'buffer', defaultName = 'export.xlsx' }) {
    const excel = new ExcelHelper() // ⭐ 每次 new，互不影响
    await excel.load()

    sheets.forEach((sheet) => {
      excel.createSheet(sheet.name, sheet.columns)
      if (sheet.rows?.length) {
        excel.appendRow(sheet.name, sheet.rows[0])
        if (sheet.rows.length > 1) {
          excel.workbook.getWorksheet(sheet.name).addRows(sheet.rows.slice(1))
        }
      }
    })
    console.log('output', output)
    console.log('defaultName', defaultName)
    if (output === 'buffer') {
      return await excel.toBuffer()
    }
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: '保存 Excel 文件',
      defaultPath: defaultName,
      filters: [{ name: 'Excel 文件', extensions: ['xlsx'] }]
    })

    if (canceled || !filePath) {
      return null
    }

    return await excel.saveAs(filePath)
  }

  /**
   * 有模板导出
   */
  async createByTemplate({ templatePath, fill, output = 'file', defaultName = 'export.xlsx' }) {
    const excel = new ExcelHelper(templatePath)
    await excel.load()

    if (fill?.byCell) {
      fill.byCell.forEach((item) => {
        excel.fillByCell(item.sheet, item.data)
      })
    }

    if (fill?.byKey) {
      fill.byKey.forEach((item) => {
        excel.fillByKey(item.sheet, item.data)
      })
    }
    console.log(templatePath)
    console.log(fill)
    // ⭐ 新增：byRows
    if (fill?.byRows) {
      fill.byRows.forEach((item) => {
        excel.fillByRows(item.sheet, item.startRow, item.rows, item.duplicate !== false)
      })
    }

    if (output === 'buffer') {
      return await excel.toBuffer()
    }

    const { canceled, filePath } = await dialog.showSaveDialog({
      title: '保存 Excel 文件',
      defaultPath: defaultName,
      filters: [{ name: 'Excel 文件', extensions: ['xlsx'] }]
    })

    if (canceled || !filePath) {
      return null
    }

    return await excel.saveAs(filePath)
  }
}
