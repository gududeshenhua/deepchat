import { ipcRenderer } from 'electron'

class MessageCenter {
  constructor() {
    // this.logPresenter = global.PresenterFactory.usePresenter('logPresenter')
    // this._initialized = false
    // this._init()
  }
  /**
   * 发送消息到指定的WebContents
   * @param {number} targetWebContentsId - 目标WebContents ID
   * @param {any} payload - 消息负载
   * @returns {Promise<boolean>} 是否发送成功
   */
  async sendMessageToWebContents(targetWebContentsId, payload) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).sendMessageToWebContents(targetWebContentsId, payload)
      console.log(`Message sent to WebContents ${targetWebContentsId}: ${success}`)
      return success
    } catch (error) {
      console.error(`Failed to send message to WebContents ${targetWebContentsId}:`, error)
      throw error
    }
  }
  /**
   * 监听来自其他WebContents的消息
   * @param {function} callback - 消息回调函数
   */
  onMessageReceived(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function')
    }

    // 监听来自presenter的消息
    const messageHandler = (_event, data) => {
      try {
        callback(data)
      } catch (error) {
        console.error('Error in message callback:', error)
      }
    }

    // 注册事件监听器
    ipcRenderer?.on('webcontents-receive-message', messageHandler)

    // 返回取消监听函数
    return () => {
      ipcRenderer?.removeListener('webcontents-receive-message', messageHandler)
    }
  }

  /**
   * 监听文件下载完成事件
   * @param {function} callback - 下载完成回调函数
   */
  onFileDownloadCompleted(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function')
    }

    // 监听文件下载完成事件
    const downloadCompletedHandler = (_event, data) => {
      try {
        callback(data)
      } catch (error) {
        console.error('Error in file download completed callback:', error)
      }
    }

    // 注册事件监听器
    ipcRenderer?.on('file-download-completed', downloadCompletedHandler)

    // 返回取消监听函数
    return () => {
      ipcRenderer?.removeListener('file-download-completed', downloadCompletedHandler)
    }
  }
}

export default MessageCenter
