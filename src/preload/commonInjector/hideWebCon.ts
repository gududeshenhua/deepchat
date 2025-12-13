import { ipcRenderer } from 'electron'
// hideWebCon.js
class HiddenWebContentsManager {
  // private hiddenWebContentsPresenter: any
  // private _initialized: boolean
  constructor() {
    // this.hiddenWebContentsPresenter = globalThis.PresenterFactory.usePresenter('hideWebConPresenter')
    // this._initialized = true
  }

  /**
   * 创建隐藏的WebContentsView
   * @param {Object} options - 创建选项
   * @param {string} options.url - 加载的URL
   * @param {Object} options.webPreferences - WebPreferences配置
   * @param {boolean} options.visible - 是否可见
   * @returns {Promise<number>} WebContents ID
   */
  async createHiddenWebContents(options) {
    try {
      const id =
        await globalThis.PresenterFactory.usePresenter(
          'hideWebConPresenter'
        ).createHiddenWebContents(options)
      console.log(`Hidden web contents created with ID: ${id}`)
      return id
    } catch (error) {
      console.error('Failed to create hidden web contents:', error)
      throw error
    }
  }

  /**
   * 关闭隐藏的WebContentsView
   * @param {number} id - WebContents ID
   * @returns {Promise<boolean>} 是否成功关闭
   */
  async closeHiddenWebContents(id) {
    try {
      const success =
        await globalThis.PresenterFactory.usePresenter(
          'hideWebConPresenter'
        ).closeHiddenWebContents(id)
      console.log(`Hidden web contents ${id} closed: ${success}`)
      return success
    } catch (error) {
      console.error(`Failed to close hidden web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 根据ID获取WebContentsView实例
   * @param {number} id - WebContents ID
   * @returns {Promise<Object>} WebContentsView实例
   */
  async getHiddenWebContents(id) {
    try {
      const view =
        await globalThis.PresenterFactory.usePresenter('hideWebConPresenter').getHiddenWebContents(
          id
        )
      console.log(`Retrieved hidden web contents: ${id}`)
      return view
    } catch (error) {
      console.error(`Failed to get hidden web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 根据ID获取WebContents状态数据
   * @param {number} id - WebContents ID
   * @returns {Promise<Object>} WebContents状态数据
   */
  async getHiddenWebContentsData(id) {
    try {
      const data =
        await globalThis.PresenterFactory.usePresenter(
          'hideWebConPresenter'
        ).getHiddenWebContentsData(id)
      console.log(`Retrieved hidden web contents data: ${id}`)
      return data
    } catch (error) {
      console.error(`Failed to get hidden web contents data ${id}:`, error)
      throw error
    }
  }

  /**
   * 获取所有隐藏的WebContentsView实例
   * @returns {Promise<Map>} 所有WebContentsView实例的Map
   */
  async getAllHiddenWebContents() {
    try {
      // console.log('in getAllHiddenWebContents----------------')
      // console.log(globalThis)
      // console.log(globalThis.PresenterFactory)
      const webContentsMap =
        await globalThis.PresenterFactory.usePresenter(
          'hideWebConPresenter'
        ).getAllHiddenWebContents()
      console.log(`Retrieved ${webContentsMap} hidden web contents`)
      // debugger;
      // console.log(`Retrieved ${webContentsMap.size} hidden web contents`)
      return webContentsMap
    } catch (error) {
      console.error('Failed to get all hidden web contents:', error)
      throw error
    }
  }

  /**
   * 获取所有隐藏WebContents的状态数据
   * @returns {Promise<Array>} 所有WebContents状态数据的数组
   */
  async getAllHiddenWebContentsData() {
    try {
      const dataArray =
        await globalThis.PresenterFactory.usePresenter(
          'hideWebConPresenter'
        ).getAllHiddenWebContentsData()
      console.log(`Retrieved ${dataArray.length} hidden web contents data`)
      return dataArray
    } catch (error) {
      console.error('Failed to get all hidden web contents data:', error)
      throw error
    }
  }

  // ========== DOM操作相关方法 ==========

  /**
   * 执行脚本代码
   * @param {number} id - WebContents ID
   * @param {string} script - 要执行的JavaScript代码
   * @returns {Promise<any>} 脚本执行结果
   */
  async executeJavaScript(id, script) {
    try {
      const result = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).executeJavaScript(id, script)
      console.log(`Executed JavaScript in web contents ${id}`)
      return result
    } catch (error) {
      console.error(`Failed to execute JavaScript in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 等待页面中出现指定的DOM元素
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @param {number} timeout - 超时时间（毫秒），默认30000
   * @returns {Promise<boolean>} 是否找到元素
   */
  async waitForElement(id, selector, timeout = 30000) {
    try {
      const found = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).waitForElement(id, selector, timeout)
      console.log(`Element ${selector} ${found ? 'found' : 'not found'} in web contents ${id}`)
      return found
    } catch (error) {
      console.error(`Failed to wait for element in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 判定页面是否包含指定的元素
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @returns {Promise<boolean>} 是否包含元素
   */
  async hasElement(id, selector) {
    try {
      const has = await globalThis.PresenterFactory.usePresenter('hideWebConPresenter').hasElement(
        id,
        selector
      )
      console.log(`Element ${selector} ${has ? 'exists' : 'does not exist'} in web contents ${id}`)
      return has
    } catch (error) {
      console.error(`Failed to check element in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 查询指定输入框的内容
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @returns {Promise<string>} 输入框的值
   */
  async getInputValue(id, selector) {
    try {
      const value = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).getInputValue(id, selector)
      console.log(`Retrieved input value from ${selector} in web contents ${id}: ${value}`)
      return value
    } catch (error) {
      console.error(`Failed to get input value from web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 设置输入框的值
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @param {string} value - 要设置的值
   * @returns {Promise<boolean>} 是否成功设置
   */
  async setInputValue(id, selector, value) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).setInputValue(id, selector, value)
      console.log(`Set input value for ${selector} in web contents ${id}: ${success}`)
      return success
    } catch (error) {
      console.error(`Failed to set input value in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 给选择框赋值
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @param {boolean} value - 要设置的值，默认true
   * @returns {Promise<boolean>} 是否成功设置
   */
  async setCheckboxValue(id, selector, value = true) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).setCheckboxValue(id, selector, value)
      console.log(`Set checkbox value for ${selector} in web contents ${id}: ${success}`)
      return success
    } catch (error) {
      console.error(`Failed to set checkbox value in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 点击指定的元素
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @returns {Promise<boolean>} 是否成功点击
   */
  async clickElement(id, selector) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).clickElement(id, selector)
      console.log(`Clicked element ${selector} in web contents ${id}: ${success}`)
      return success
    } catch (error) {
      console.error(`Failed to click element in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 根据文本匹配去点击一个元素
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @param {string} text - 要匹配的文本
   * @returns {Promise<boolean>} 是否成功点击
   */
  async clickElementByText(id, selector, text) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).clickElementByText(id, selector, text)
      console.log(
        `Clicked element ${selector} with text "${text}" in web contents ${id}: ${success}`
      )
      return success
    } catch (error) {
      console.error(`Failed to click element by text in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 根据文本匹配点击元素，并设置间隔时间
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @param {string} text - 要匹配的文本
   * @param {number} time - 间隔时间（毫秒）
   * @returns {Promise<void>}
   */
  async clickElementByTextAndInterval(id, selector, text, time) {
    try {
      await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).clickElementByTextAndInterval(id, selector, text, time)
      console.log(
        `Started interval clicking for element ${selector} with text "${text}" in web contents ${id}`
      )
    } catch (error) {
      console.error(`Failed to start interval clicking in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 提交表单
   * @param {number} id - WebContents ID
   * @param {string} selector - CSS选择器
   * @returns {Promise<boolean>} 是否成功提交
   */
  async submitForm(id, selector) {
    try {
      const success = await globalThis.PresenterFactory.usePresenter(
        'hideWebConPresenter'
      ).submitForm(id, selector)
      console.log(`Submitted form ${selector} in web contents ${id}: ${success}`)
      return success
    } catch (error) {
      console.error(`Failed to submit form in web contents ${id}:`, error)
      throw error
    }
  }

  /**
   * 等待指定时间
   * @param {number} time - 等待时间（毫秒）
   * @returns {Promise<number>} 实际等待的时间
   */
  async sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(time)
      }, time)
    })
  }

  // ========== WebContents通信相关方法 ==========

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
   * 广播消息到所有WebContents
   * @param {any} payload - 消息负载
   * @returns {Promise<number>} 发送成功的WebContents数量
   */
  async broadcastMessage(payload) {
    try {
      const successCount =
        await globalThis.PresenterFactory.usePresenter('hideWebConPresenter').broadcastMessage(
          payload
        )
      console.log(`Broadcast message sent to ${successCount} WebContents`)
      return successCount
    } catch (error) {
      console.error('Failed to broadcast message:', error)
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

  // /**
  //  * 监听重定向完成事件
  //  * @param {function} callback - 重定向完成回调函数
  //  */
  // onRedirectFinished(callback) {
  //   if (typeof callback !== 'function') {
  //     throw new TypeError('Callback must be a function')
  //   }

  //   // 监听来自presenter的消息
  //   const messageHandler = (_event, data) => {
  //     try {
  //       callback(data)
  //     } catch (error) {
  //       console.error('Error in redirect-finished callback:', error)
  //     }
  //   }

  //   // 注册事件监听器
  //   ipcRenderer?.on('redirect-finished', messageHandler)

  //   // 返回取消监听函数
  //   return () => {
  //     ipcRenderer?.removeListener('redirect-finished', messageHandler)
  //   }
  // }

  /**
   * 获取WebContents的通信信息
   * @param {number} webContentsId - WebContents ID
   * @returns {Promise<Object>} 通信信息对象
   */
  async getWebContentsCommunicationInfo(webContentsId) {
    try {
      const info =
        await globalThis.PresenterFactory.usePresenter(
          'hideWebConPresenter'
        ).getWebContentsCommunicationInfo(webContentsId)
      console.log(`Communication info for WebContents ${webContentsId}:`, info)
      return info
    } catch (error) {
      console.error(`Failed to get communication info for WebContents ${webContentsId}:`, error)
      throw error
    }
  }
}

export default HiddenWebContentsManager
