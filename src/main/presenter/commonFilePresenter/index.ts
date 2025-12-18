// Electron main-process file manager class
// Supports: read / write / modify / delete
// Supports JSON, TXT, JS, Excel, Word (using simple fs read as Buffer)
// If absolute path → use directly
// If relative path → use scriptsDirPath

const { app, dialog } = require('electron')
const fs = require('fs')
const path = require('path')
// const isDev = require('electron-is-dev');
import { is } from '@electron-toolkit/utils'
import { ICommonFilePresenter } from '@shared/presenter'
const mammoth = require('mammoth')
import pdfParse from 'pdf-parse-new'
const ExcelJS = require('exceljs')

const mime = {
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.xls': 'application/vnd.ms-excel',
  '.doc': 'application/msword'
}

export class commonFileManager implements ICommonFilePresenter {
  private tempFileDirPath: string
  constructor() {
    this.tempFileDirPath = is.dev
      ? path.join(app.getAppPath(), 'resources', 'tempFile')
      : path.join(process.resourcesPath, 'app.asar.unpacked', 'resources', 'tempFile')

    this.ensureBaseDir()
  }

  // Ensure temp directory exists
  async ensureBaseDir() {
    try {
      await fs.promises.mkdir(this.tempFileDirPath, { recursive: true })
    } catch (err) {
      console.error('创建目录失败:', err)
    }
  }

  // Determine path: absolute → use directly; otherwise use tempFile dir
  resolvePath(inputPath) {
    if (!inputPath) return null
    const isAbsolute = path.isAbsolute(inputPath)
    return isAbsolute ? inputPath : path.join(this.tempFileDirPath, inputPath)
  }

  // Read file (JSON, TXT, JS, DOCX, XLSX — read as text or buffer)
  async fileRead(filePath) {
    try {
      const realPath = this.resolvePath(filePath)
      const ext = path.extname(realPath).toLowerCase()

      // JSON
      if (ext === '.json') {
        const text = await fs.promises.readFile(realPath, 'utf8')
        return { success: true, type: 'json', content: JSON.parse(text) }
      }

      // Text-based files
      if (['.txt', '.js'].includes(ext)) {
        const text = await fs.promises.readFile(realPath, 'utf8')
        return { success: true, type: 'text', content: text }
      }

      // ✅ DOCX → mammoth 提取文本
      if (ext === '.docx') {
        console.log('docx--------------', realPath)
        const result = await mammoth.extractRawText({
          path: realPath
        })

        return {
          success: true,
          type: 'docx-text',
          content: result.value, // 纯文本
          messages: result.messages // 可选：警告信息
        }
      }

      // ✅ PDF → 提取文本
      if (ext === '.pdf') {
        const buffer = await fs.promises.readFile(realPath)
        const pageTexts: string[] = []
        const renderOptions = {
          verbosityLevel: 0 as 0 | 5 | undefined,
          pageTexts,
          normalizeWhitespace: false,
          disableCombineTextItems: false,
          // Custom renderer to collect text by page
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          pagerender: function (pageData: any) {
            // Get text content from current page
            const renderOptions = {
              normalizeWhitespace: false,
              disableCombineTextItems: false
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return pageData.getTextContent(renderOptions).then(function (textContent: any) {
              let lastY: number | null = null
              let text = ''

              // Process text items, try to preserve paragraph structure
              for (const item of textContent.items) {
                if (lastY === null || Math.abs(lastY - item.transform[5]) > 5) {
                  if (text) text += '\n'
                  lastY = item.transform[5]
                } else if (text && !text.endsWith(' ')) {
                  text += ' '
                }
                text += item.str
              }

              // Add current page text to page collection
              pageTexts.push(text)
              return text
            })
          }
        }
        const pdfData = await pdfParse(buffer, renderOptions)

        console.log('pdf--------------', pdfData)

        return {
          success: true,
          type: 'pdf-text',
          content: pdfData.text // 提取的纯文本
          // meta: {
          //   pageCount: result.numpages,
          //   info: result.info
          // }
        }
      }

      // ✅ Excel → 读取sheets和数据
      if (ext === '.xlsx' || ext === '.xls') {
        try {
          const workbook = new ExcelJS.Workbook()
          await workbook.xlsx.readFile(realPath)

          const sheets: any = []
          workbook.eachSheet((worksheet) => {
            const sheetData: any = {
              name: worksheet.name,
              rowCount: worksheet.rowCount,
              columnCount: worksheet.columnCount,
              columns: [],
              rows: []
              // jsonRows: []
            }

            // 获取列信息
            const columns: any = []
            if (worksheet.rowCount > 0) {
              const headerRow = worksheet.getRow(1)
              headerRow.eachCell((cell: any, colNumber: any) => {
                columns.push({
                  header: cell.value,
                  key: colNumber,
                  width: worksheet.getColumn(colNumber).width || 20
                })
              })
              sheetData.columns = columns

              // // 获取行数据（从第二行开始）
              // for (let i = 2; i <= worksheet.rowCount; i++) {
              //   const row = worksheet.getRow(i)
              //   const rowData: any = []
              //   row.eachCell((cell: any) => {
              //     rowData.push(cell.value)
              //   })
              //   sheetData.rows.push(rowData)
              // }
              for (let i = 2; i <= worksheet.rowCount; i++) {
                const row = worksheet.getRow(i)
                const rowData: any[] = []

                for (let col = 1; col <= worksheet.columnCount; col++) {
                  const cell = row.getCell(col)
                  rowData.push(cell.value ?? '') // 空值补 ""
                }

                sheetData.rows.push(rowData)
              }
            }

            sheets.push(sheetData)
          })

          return {
            success: true,
            type: 'excel',
            content: {
              sheets: sheets
            }
          }
        } catch (err) {
          console.error('Excel文件读取失败:', err)
          // 如果Excel读取失败，回退到buffer读取
          const buffer = await fs.promises.readFile(realPath)
          return {
            success: true,
            type: 'buffer',
            mime: mime[ext] || 'application/octet-stream',
            content: buffer.toString('base64')
          }
        }
      }

      // Word / other binary files → read buffer
      const buffer = await fs.promises.readFile(realPath)
      return {
        success: true,
        type: 'buffer',
        mime: mime[ext] || 'application/octet-stream',
        content: buffer.toString('base64')
      }
    } catch (err: any) {
      return { success: false, message: err.message }
    }
  }

  // Write/modify file
  async fileWrite(filePath, data) {
    try {
      const realPath = this.resolvePath(filePath)
      const ext = path.extname(realPath).toLowerCase()

      // JSON
      if (ext === '.json') {
        await fs.promises.writeFile(realPath, JSON.stringify(data, null, 2), 'utf8')
        return { success: true }
      }

      // Text
      if (typeof data === 'string') {
        await fs.promises.writeFile(realPath, data, 'utf8')
        return { success: true }
      }

      // Binary
      if (data?.type === 'base64') {
        const buffer = Buffer.from(data.value, 'base64')
        await fs.promises.writeFile(realPath, buffer)
        return { success: true }
      }

      return { success: false, message: '无法识别的数据格式' }
    } catch (err: any) {
      return { success: false, message: err.message }
    }
  }

  // Delete file
  async fileDelete(filePath) {
    try {
      const realPath = this.resolvePath(filePath)
      await fs.promises.unlink(realPath)
      return { success: true }
    } catch (err: any) {
      return { success: false, message: err.message }
    }
  }

  // Read file as buffer
  async readFileBuffer(
    filePath: string,
    isBase64: boolean = true
  ): Promise<{ success: boolean; buffer?: string; message?: string }> {
    try {
      const realPath = this.resolvePath(filePath)
      const buffer = await fs.promises.readFile(realPath)
      return { success: true, buffer: isBase64 ? buffer.toString('base64') : buffer }
    } catch (err: any) {
      return { success: false, message: err.message }
    }
  }

  // List files in directory with names and extensions
  async listDirectoryFiles(
    dirPath: string
  ): Promise<{
    success: boolean
    files?: Array<{ name: string; ext: string; isDirectory: boolean }>
    message?: string
  }> {
    try {
      const realPath = this.resolvePath(dirPath)
      const entries = await fs.promises.readdir(realPath, { withFileTypes: true })

      const files = entries.map((entry) => ({
        name: entry.name,
        ext: entry.isFile() ? path.extname(entry.name) : '',
        isDirectory: entry.isDirectory()
      }))

      return { success: true, files }
    } catch (err: any) {
      return { success: false, message: err.message }
    }
  }

  // Open dialog to select file or folder and return absolute path
  async selectFileOrFolder(options?: {
    title?: string
    buttonLabel?: string
    selectFolder?: boolean
    selectFile?: boolean
    multiSelections?: boolean
  }): Promise<{
    success: boolean
    path?: string | string[]
    canceled?: boolean
    message?: string
  }> {
    try {
      // Default options
      const dialogOptions = {
        title: options?.title || 'Select File or Folder',
        buttonLabel: options?.buttonLabel || 'Select',
        properties: [] as string[]
      }

      // Set properties based on options
      if (options?.selectFolder) {
        dialogOptions.properties.push('openDirectory')
      }

      if (options?.selectFile) {
        dialogOptions.properties.push('openFile')
      }

      // If neither is specified, allow both
      if (!options?.selectFolder && !options?.selectFile) {
        dialogOptions.properties.push('openFile', 'openDirectory')
      }

      if (options?.multiSelections) {
        dialogOptions.properties.push('multiSelections')
      }

      // Show the dialog
      const result = await dialog.showOpenDialog(dialogOptions)

      if (result.canceled) {
        return { success: true, canceled: true }
      }

      // Return selected paths
      if (options?.multiSelections) {
        return { success: true, path: result.filePaths }
      } else {
        return { success: true, path: result.filePaths[0] }
      }
    } catch (err: any) {
      return { success: false, message: err.message }
    }
  }

  // // Save file (create directory if needed)
  // ipcMain.handle('file:saveToDir', async (_, dirPath, fileName, data) => {
  //   try {
  //     const isAbsolute = path.isAbsolute(dirPath);
  //     const targetDir = isAbsolute
  //       ? dirPath
  //       : path.join(this.tempFileDirPath, dirPath);

  //     await fs.promises.mkdir(targetDir, { recursive: true });
  //     const fullPath = path.join(targetDir, fileName);

  //     await fs.promises.writeFile(fullPath, data, 'utf8');
  //     return { success: true, path: fullPath };
  //   } catch (err) {
  //     return { success: false, message: err.message };
  //   }
  // });
}
