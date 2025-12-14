// main/excel/ExcelService.js
import { ExcelHelper } from './excelHelper'
import { IExcelPresenter } from '@shared/presenter'

export class excelPresenter implements IExcelPresenter {
  /**
   * 无模板导出
   */
  async createExcel({ sheets }) {
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

    return await excel.toBuffer()
  }

  /**
   * 有模板导出
   */
  async createByTemplate({ templatePath, fill, output = 'file' }) {
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

    if (output === 'buffer') {
      return await excel.toBuffer()
    }

    return await excel.saveAs(output)
  }
}
