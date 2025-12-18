const { BrowserWindow } = require('electron')
import path from 'path'
// import fs from 'fs';
import { presenter } from '@/presenter'
import { eventBus, SendTarget } from '@/eventbus'
import os from 'os'
/**
 * 处理文件下载的事件
 * @param {Event} event 事件对象
 * @param {DownloadItem} item 文件下载对象
 * @param {WebContents} webContents 页面内容
 */
export async function handleFileDownload(_event, item, webContents) {
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
  // 关键：立即设置一个临时路径，阻止默认对话框弹出
  // const tempPath = path.join(os.tmpdir(), filename)
  // item.setSavePath(tempPath)
  item.on('updated', (_event, state) => {
    global.isDownloading = true
    const savePath = item.getSavePath() || filename
    console.log('---- update save path ----', savePath)
    if (state === 'progressing') {
      const receivedBytes = item.getReceivedBytes()
      const totalBytes = item.getTotalBytes()
      const progress = Math.round((receivedBytes / totalBytes) * 100)
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
  item.once('done', async (_event, state) => {
    const savePath = item.getSavePath() || filename
    global.isDownloading = false
    console.log('---- done save path ----', savePath)
    if (state === 'completed') {
      console.info('download completed:', savePath)
      eventBus.sendToRenderer('download-completed', SendTarget.ALL_WINDOWS, {
        downloadId: downloadId,
        filename: name,
        savePath: savePath,
        state: state
      })
      webContents.send('download-completed', {
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

      webContents.send('download-cancelled', {
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

      webContents.send('download-failed', {
        downloadId: downloadId,
        filename: name,
        savePath: savePath,
        state: state
      })
    }
  })

  if (allSetUpData['prompt-save-dialog'] && !(webContents as any).__isHidden) {
    console.log('---- go in prompt save dialog ----')
    const defaultDownloadPath = path.join(
      allSetUpData['download-directory'] || os.homedir() + '/Downloads',
      filename
    )
    console.log('defaultDownloadPath', defaultDownloadPath)

    item.setSaveDialogOptions({
      title: '保存文件',
      defaultPath: defaultDownloadPath
    })
  } else if (
    (allSetUpData['download-directory'] && !allSetUpData['prompt-save-dialog']) ||
    (webContents as any).__isHidden
  ) {
    console.log('---- go in default download  ----')
    const downloadPath = path.join(allSetUpData['download-directory'], filename)
    console.log('downloadPath', downloadPath)
    item.setSavePath(downloadPath)
  } // 如果需要显示保存对话框
  else if (allSetUpData['download-directory']) {
    const downloadPath = path.join(allSetUpData['download-directory'], filename)
    item.setSavePath(downloadPath)
  }

  // 需要弹出对话框：设置临时路径阻止默认对话框
  // const defaultDownloadPath = path.join(
  //   allSetUpData['download-directory'] || os.homedir() + '/Downloads',
  //   filename
  // )
  // // console.log('defaultDownloadPath', defaultDownloadPath)
  // // item.setSaveDialogOptions({
  // //   title: '保存文件',
  // //   defaultPath : defaultDownloadPath
  // // })
  // item.setSavePath(defaultDownloadPath)
  // // 暂停下载，等待用户选择路径
  // // if (!item.isPaused()) {
  // item.pause()
  // // }
  //  console.log('---- pause download ----')
  // const result = await dialog.showSaveDialog(browserWindow, {
  //   title: '保存文件',
  //   defaultPath: path.join(allSetUpData['download-directory'] || '', name),
  //   buttonLabel: '保存',
  //   filters: [{ name: '所有文件', extensions: ['*'] }]
  // })
  // console.log('---- pause download 2 ----',result,item)
  // console.log(item.getState())
  // if (result.canceled) {
  //   // 用户取消了，取消下载
  //   item.cancel()
  //   return
  // }
  // console.log('---- pause download 2 ----')
  // // 设置用户选择的路径
  // // item.setSavePath(result.filePath)
  // // 保存用户选择的最终路径
  // const userSelectedPath = result.filePath

  // // 如果用户选择的路径和默认路径不同，标记需要移动
  // if (userSelectedPath !== defaultDownloadPath) {
  //   // 在 item 上添加自定义属性，记录最终路径
  //   ;(item as any).__finalPath = userSelectedPath
  // }
  // // 恢复下载
  // // if (item.isPaused()) {
  //   item.resume()
  // // }
  // console.log('final path:', userSelectedPath)
  // }
  // 如果有默认下载目录且不需要提示

  // 其他情况使用默认行为
  // console.info('start downloading:', filename)
}
