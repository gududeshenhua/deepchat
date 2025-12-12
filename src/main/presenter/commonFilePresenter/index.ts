// Electron main-process file manager class
// Supports: read / write / modify / delete
// Supports JSON, TXT, JS, Excel, Word (using simple fs read as Buffer)
// If absolute path → use directly
// If relative path → use scriptsDirPath

const { app } = require('electron')
const fs = require('fs')
const path = require('path')
// const isDev = require('electron-is-dev');
import { is } from '@electron-toolkit/utils'
import { ICommonFilePresenter } from '@shared/presenter'

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

      // Word / Excel / other binary files → read buffer
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
