const { BrowserWindow } = require('electron')
import path from 'path'
// import fs from 'fs';
import { presenter } from '@/presenter'
import { eventBus, SendTarget } from '@/eventbus'
/**
 * 处理文件下载的事件
 * @param {Event} event 事件对象
 * @param {DownloadItem} item 文件下载对象
 * @param {WebContents} webContents 页面内容
 */
export function handleFileDownload(_event, item, webContents) {
  const browserWindow = BrowserWindow.fromWebContents(webContents)
  const originalTitle = webContents.getTitle()
  console.log('originalTitle', originalTitle)
  const allSetUpData: any = presenter.setupPresenter.getAllValues()
  // const notShowModalList = allSetUpData['not-show-modal-list'] || []
  const name = item.getFilename()
  console.log('-----go in download--------')
  const filename = `${Date.now()}-${name}`
  console.log('---- file name ----', name)
  // console.log('---- not list ----', notShowModalList)
  // console.log('---- webContents ----', webContents.id)
  // console.log('---- webContents ----', (webContents as any).__isHidden)
  // console.log(notShowModalList.includes(name))

  // 为每个下载项生成唯一ID
  const downloadId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  if (
    (allSetUpData['download-directory'] && !allSetUpData['prompt-save-dialog']) ||
    (webContents as any).__isHidden
  ) {
    const downloadPath = path.join(allSetUpData['download-directory'], filename)
    console.log('downloadPath', downloadPath)
    item.setSavePath(downloadPath)
  }
  console.info('start downloading:', filename)

  item.on('updated', (_event, state) => {
    global.isDownloading = true
    const savePath = item.getSavePath() || filename
    if (state === 'progressing') {
      const receivedBytes = item.getReceivedBytes()
      const totalBytes = item.getTotalBytes()
      const progress = Math.round((receivedBytes / totalBytes) * 100)
      // if (!browserWindow.isDestroyed()) {
      //     // browserWindow.setTitle(`${originalTitle} - 正在保存文件: ${savePath} (${progress}%)`);
      //     if (notShowModalList.includes(name)) {
      //         // 静默下载的文件下载后删除文件
      //         // fs.unlinkSync(savePath);
      //     }
      // }
      console.log('download-progress', progress)
      // 通知前端下载进度，包含下载ID以便跟踪多个下载
      eventBus.sendToRenderer('download-progress', SendTarget.ALL_WINDOWS, {
        downloadId: downloadId,
        filename: name,
        savePath: savePath,
        progress: progress,
        receivedBytes: receivedBytes,
        totalBytes: totalBytes,
        state: state
      })
    }
  })
  item.once('done', (_event, state) => {
    const savePath = item.getSavePath() || filename
    global.isDownloading = false
    if (state === 'completed') {
      console.info('download completed:', savePath)
      if (!browserWindow.isDestroyed()) {
        // browserWindow.setTitle(`${originalTitle} - 文件已保存至: ${savePath}`);
      }
      // global.downloadFiles.push(downloadObject);

      // 通知前端下载完成，包含下载ID
      eventBus.sendToRenderer('download-completed', SendTarget.ALL_WINDOWS, {
        downloadId: downloadId,
        filename: name,
        savePath: savePath,
        state: state
      })
      webContents.send('file-download-completed', {
        downloadId,
        filename: name,
        savePath: savePath,
        state: state
      })
    } else if (state == 'cancelled') {
      console.info('download cancelled:', filename)
      if (!browserWindow.isDestroyed()) {
        // browserWindow.setTitle(`${originalTitle} - 已取消下载: ${filename}`);
      }

      // 通知前端下载取消，包含下载ID
      eventBus.sendToRenderer('download-cancelled', SendTarget.ALL_WINDOWS, {
        downloadId: downloadId,
        filename: name,
        savePath: savePath,
        state: state
      })
    } else if (!browserWindow.isDestroyed()) {
      console.error('download failed:', state)
      // browserWindow.setTitle(`${originalTitle} - 下载失败: ${state}`);

      // 通知前端下载失败，包含下载ID
      eventBus.sendToRenderer('download-failed', SendTarget.ALL_WINDOWS, {
        downloadId: downloadId,
        filename: name,
        savePath: savePath,
        state: state
      })
    }
  })
}
