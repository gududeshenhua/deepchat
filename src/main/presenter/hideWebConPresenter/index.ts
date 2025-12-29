/* eslint-disable @typescript-eslint/no-explicit-any */
import { WebContentsView, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
// import { is } from '@electron-toolkit/utils'
// import { eventBus } from '@/eventbus'
import { eventBus, SendTarget } from '@/eventbus'

import { HIDDEN_WEB_CONTENTS_EVENTS } from '@/events'
import {
  HiddenWebContentsData,
  HiddenWebContentsOptions,
  IHiddenWebContentsPresenter,
  ITabPresenter
} from '@shared/presenter'

// 方案 1（简单）：HiddenWebContentsPresenter 作为中转（推荐）
// // tabA send → presenter → tabB dispatch

// ipcMain.on("tab-message", (event, targetTabId, payload) => {
//     const targetTab = this.getTabById(targetTabId);
//     if (targetTab) {
//         targetTab.view.webContents.send("tab-message", payload);
//     }
// });

// renderer 中：

// tab A
// ipcRenderer.send("tab-message", tabBId, { hello: "from A" });

// tab B
// ipcRenderer.on("tab-message", (_, data) => {
//    console.log("recv:", data)
// });
export class HiddenWebContentsPresenter implements IHiddenWebContentsPresenter {
  // 存储隐藏的WebContentsView实例
  private hiddenWebContents: Map<number, WebContentsView> = new Map()
  private hiddenWindows: Map<number, BrowserWindow> = new Map()

  // 存储隐藏WebContents的状态数据
  private hiddenWebContentsState: Map<number, HiddenWebContentsData> = new Map()

  // Tab展示器，用于WebContents ID到Tab ID的映射
  private tabPresenter: ITabPresenter | null = null

  // 通信事件名称
  private readonly COMMUNICATION_EVENTS = {
    SEND_MESSAGE: 'webcontents-send-message',
    RECEIVE_MESSAGE: 'webcontents-receive-message',
    BROADCAST_MESSAGE: 'webcontents-broadcast-message'
  }

  constructor(tabPresenter: ITabPresenter) {
    this.tabPresenter = tabPresenter
    this.initBusHandlers()
    this.initIpcHandlers()
  }

  // /**
  //  * 设置Tab展示器
  //  */
  // setTabPresenter(tabPresenter: ITabPresenter): void {
  //   this.tabPresenter = tabPresenter
  // }

  /**
   * 初始化IPC事件处理器
   */
  private initIpcHandlers(): void {
    // 监听发送消息到指定WebContents的事件
    ipcMain.on(
      this.COMMUNICATION_EVENTS.SEND_MESSAGE,
      async (_event, targetWebContentsId: number, payload: any) => {
        return await this.sendMessageToWebContents(targetWebContentsId, payload)
      }
    )

    // // 监听广播消息到所有WebContents的事件
    // ipcMain.handle(this.COMMUNICATION_EVENTS.BROADCAST_MESSAGE, async (event, payload: any) => {
    //   return await this.broadcastMessage(payload)
    // })
  }

  // 初始化事件总线处理器
  private initBusHandlers(): void {
    // 监听隐藏WebContents相关事件
    eventBus.on(HIDDEN_WEB_CONTENTS_EVENTS.CREATED, (id: number) => {
      // this.logPresenter?.info(`Hidden web contents created: ${id}`)
      console.log(`Hidden web contents created: ${id}`)
    })

    eventBus.on(HIDDEN_WEB_CONTENTS_EVENTS.CLOSED, (id: number) => {
      // this.logPresenter?.info(`Hidden web contents closed: ${id}`)
      console.log(`Hidden web contents closed: ${id}`)
    })
  }

  /**
   * 创建隐藏的WebContentsView
   */
  async createHiddenWebContents(options: HiddenWebContentsOptions): Promise<number> {
    try {
      const view = new WebContentsView({
        webPreferences: {
          preload: join(__dirname, '../preload/index.mjs'),
          sandbox: false,
          // contextIsolation: false,
          // nodeIntegration: true,
          devTools: true,
          ...options.webPreferences
        }
      })

      view.setBorderRadius(0)
      view.setBackgroundColor('#00ffffff')
      view.setVisible(options.visible ?? false)

      // 加载URL

      view.webContents.loadURL(options.url)

      // if (is.dev) {
      //   view.webContents.openDevTools({ mode: 'detach' })
      // }

      // 存储WebContents信息
      const id = view.webContents.id
      ;(view.webContents as any).__isHidden = true
      this.hiddenWebContents.set(id, view)
      this.hiddenWebContentsState.set(id, {
        id,
        url: options.url,
        title: options.url,
        isVisible: options.visible ?? false,
        createdAt: Date.now()
      })

      // 设置WebContents事件监听
      this.setupWebContentsListeners(view.webContents, id)

      // 发送创建事件
      eventBus.sendToMain(HIDDEN_WEB_CONTENTS_EVENTS.CREATED, id)

      // if (options.visible) {
      const win = new BrowserWindow({
        width: options.width || 800,
        height: options.height || 600,
        frame: false,
        show: options.visible ?? false
      })

      win.contentView.addChildView(view)
      this.hiddenWindows.set(view.webContents.id, win) // 存储对应的窗口

      const resizeView = () => {
        const { width, height } = win.getContentBounds()
        view.setBounds({ x: 0, y: 0, width, height })
      }

      resizeView()
      win.on('resize', resizeView)

      // 自动最大化
      // win.maximize()

      // }
      if (options.openDevTools) {
        view.webContents.openDevTools({ mode: 'detach' })
      }
      // this.logPresenter?.info(`Hidden web contents created: ${id}`)
      return id
    } catch (error) {
      // this.logPresenter?.info(`Failed to create hidden web contents:`, error)
      console.error('Failed to create hidden web contents:', error)
      throw error
    }
  }

  /**
   * 关闭隐藏的WebContentsView
   */
  async closeHiddenWebContents(id: number): Promise<boolean> {
    const view = this.hiddenWebContents.get(id)
    if (!view) return false

    try {
      // 移除事件监听
      this.removeWebContentsListeners(view.webContents)

      // 关闭WebContents
      view.webContents.close()
      // 关闭对应的BrowserWindow（如果有的话）
      const win = this.hiddenWindows.get(id)
      if (win && !win.isDestroyed()) {
        win.close()
        this.hiddenWindows.delete(id)
      }

      // 从存储中移除
      this.hiddenWebContents.delete(id)
      this.hiddenWebContentsState.delete(id)

      // 发送关闭事件
      eventBus.sendToMain(HIDDEN_WEB_CONTENTS_EVENTS.CLOSED, id)

      return true
    } catch (error) {
      console.error(`Failed to close hidden web contents ${id}:`, error)
      return false
    }
  }

  /**
   * 根据ID获取WebContentsView实例
   */
  async getHiddenWebContents(id: number): Promise<WebContentsView | undefined> {
    return this.hiddenWebContents.get(id)
  }

  /**
   * 根据ID获取WebContents状态数据
   */
  getHiddenWebContentsData(id: number): HiddenWebContentsData | undefined {
    return this.hiddenWebContentsState.get(id)
  }

  /**
   * 获取所有隐藏的WebContentsView实例
   */
  getAllHiddenWebContents(): any {
    console.log(`getAllHiddenWebContents: ${this.hiddenWebContents}`)
    if (!this.hiddenWebContents) return []

    return Array.from(this.hiddenWebContents.entries()).map(([id, view]) => ({
      id,
      url: view.webContents.getURL(),
      title: view.webContents.getTitle()
    }))
    // return new Map(this.hiddenWebContents)
  }

  /**
   * 获取所有隐藏的WebContentsView实例（完整视图对象）
   */
  getAllHiddenWebContentsViews(): WebContentsView[] {
    return Array.from(this.hiddenWebContents.values())
  }

  /**
   * 根据窗口ID获取该窗口下的隐藏WebContents数据
   * 注意：hiddenWindows是按webContentsID存储的，不是按窗口ID存储的
   * 这个方法遍历所有隐藏WebContents并返回有效数据
   */
  async getWindowHiddenWebContentsData(): Promise<{ webContents: Electron.WebContents }[]> {
    const result: { webContents: Electron.WebContents }[] = []

    // 遍历所有隐藏的WebContentsView
    for (const view of this.hiddenWebContents.values()) {
      if (view && view.webContents && !view.webContents.isDestroyed()) {
        result.push({
          webContents: view.webContents
        })
      }
    }

    return result
  }

  /**
   * 获取所有隐藏WebContents的状态数据
   */
  getAllHiddenWebContentsData(): HiddenWebContentsData[] {
    return Array.from(this.hiddenWebContentsState.values())
  }

  /**
   * 设置WebContents事件监听
   */
  private setupWebContentsListeners(webContents: Electron.WebContents, id: number): void {
    webContents.setWindowOpenHandler(({ url }) => {
      // 使用系统默认浏览器打开链接
      // shell.openExternal(url)
      // 在当前窗口加载URL
      webContents.loadURL(url)
      return { action: 'deny' }
    })

    // webContents.session.webRequest.onBeforeRedirect((details) => {
    //     // 重定向完成
    //    console.log('---------- redirect-finished ----------', details.url, details.redirectURL, details.statusCode)
    //    webContents.send('redirect-finished', {
    //     from: details.url,
    //     to: details.redirectURL,
    //     code: details.statusCode
    //   });
    // });

    // 标题变更
    webContents.on('page-title-updated', (_event, title) => {
      const state = this.hiddenWebContentsState.get(id)
      if (state) {
        state.title = title
      }
    })

    // 页面加载完成
    webContents.on('did-finish-load', () => {
      console.log(`Hidden web contents ${id} finished loading`)
    })

    // 页面加载失败
    webContents.on('did-fail-load', (_event, errorCode, errorDescription) => {
      console.error(`Hidden web contents ${id} failed to load:`, errorCode, errorDescription)
    })

    // WebContents被销毁
    webContents.on('destroyed', () => {
      console.log(`Hidden web contents ${id} destroyed`)
      this.hiddenWebContents.delete(id)
      this.hiddenWebContentsState.delete(id)
    })

    // 导航完成
    webContents.on('did-navigate-in-page', (_event, url) => {
      eventBus.sendToRenderer('scripts:reload-now', SendTarget.ALL_WINDOWS, {
        originUrl: url,
        id
      })
    })
    webContents.on('did-navigate', (_event, url) => {
      eventBus.sendToRenderer('scripts:reload-now', SendTarget.ALL_WINDOWS, {
        originUrl: url,
        id
      })
    })
  }

  /**
   * 移除WebContents事件监听
   */
  private removeWebContentsListeners(webContents: Electron.WebContents): void {
    webContents.removeAllListeners('page-title-updated')
    webContents.removeAllListeners('did-finish-load')
    webContents.removeAllListeners('did-fail-load')
    webContents.removeAllListeners('destroyed')
    webContents.removeAllListeners('did-navigate-in-page')
    webContents.removeAllListeners('did-navigate')
  }

  // ========== DOM操作相关方法 ==========

  /**
   * 等待一段时间
   */
  async sleep(time: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(time)
      }, time)
    })
  }

  /**
   * 执行脚本代码
   */
  async executeJavaScript(id: number, script: string): Promise<any> {
    const view = this.hiddenWebContents.get(id)
    if (!view || view.webContents.isDestroyed()) {
      throw new TypeError(`无效的WebContents ID: ${id}`)
    }
    return await view.webContents.executeJavaScript(script)
  }

  /**
   * 等待页面中出现指定的dom元素
   */
  async waitForElement(id: number, selector: string, timeout = 30000): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")
    const beginTime = Date.now()

    while (true) {
      await this.sleep(500)
      const element = await this.executeJavaScript(id, `document.querySelector('${safeSelector}');`)
      if (element) {
        return true
      }

      const nowTime = Date.now()
      if (nowTime - beginTime > timeout) {
        return false
      }
    }
  }

  /**
   * 判定页面是否包含指定的元素
   */
  async hasElement(id: number, selector: string): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")
    const element = await this.executeJavaScript(id, `document.querySelector('${safeSelector}');`)
    return element != null
  }

  /**
   * 查询指定输入框的内容
   */
  async getInputValue(id: number, selector: string): Promise<string> {
    const safeSelector = selector.replace(/'/g, "\\'")
    const value = await this.executeJavaScript(
      id,
      `document.querySelector('${safeSelector}').value;`
    )
    return value
  }

  /**
   * 设置输入框的值，返回是否有改变
   */
  async setInputValue(id: number, selector: string, value: string): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")
    const safeValue = value.replace(/'/g, "\\'")

    const script = `
    (function write(){
        const input = document.querySelector('${safeSelector}');
        if(input && input.value != '${safeValue}'){
            input.value = '${safeValue}';
            // 触发 input 事件
            let event = new Event('input', { bubbles: true });
            input.dispatchEvent(event);
            return true;
        }
        return false;
    })();
    `

    const result = await this.executeJavaScript(id, script)
    return result
  }

  /**
   * 给选择框赋值，并返回是否修改
   */
  async setCheckboxValue(id: number, selector: string, value = true): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")

    const script = `
    (function(){
        let element = document.querySelector('${safeSelector}');
        if(element && element.checked != ${value}){
            element.click();
            return true;
        }
        return false;
    })();
    `

    const changed = await this.executeJavaScript(id, script)
    return changed
  }

  /**
   * 点击指定的元素
   */
  async clickElement(id: number, selector: string): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")

    const script = `
    (function(){
        let element = document.querySelector('${safeSelector}');
        if(element){
            element.click();
            return true;
        }
        return false;
    })();
    `

    return await this.executeJavaScript(id, script)
  }

  /**
   * 根据文本匹配去点击一个元素
   */
  async clickElementByText(id: number, selector: string, text: string): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")
    const safeText = text.replace(/'/g, "\\'")

    const script = `
    (function(){
        let nodeList = document.querySelectorAll('${safeSelector}');
        let elements = Array.from(nodeList);
        for(let item of elements) {
            if(item.innerText.trim() == '${safeText}'){
                item.click();
                return true;
            }
        }
        return false;
    })();
    `

    return await this.executeJavaScript(id, script)
  }

  /**
   * 根据文本匹配点击元素，并设置间隔时间
   */
  async clickElementByTextAndInterval(
    id: number,
    selector: string,
    text: string,
    time: number
  ): Promise<void> {
    setInterval(async () => {
      await this.clickElementByText(id, selector, text)
    }, time)
  }

  /**
   * 提交表单
   */
  async submitForm(id: number, selector: string): Promise<boolean> {
    const safeSelector = selector.replace(/'/g, "\\'")

    const script = `
    (function(){
        let form = document.querySelector('${safeSelector}');
        if(form){
            form.submit();
            return true;
        }
        return false;
    })();
    `

    return await this.executeJavaScript(id, script)
  }

  // ========== WebContents通信相关方法 ==========

  /**
   * 发送消息到指定的WebContents
   * @param targetWebContentsId 目标WebContents ID
   * @param payload 消息负载
   * @returns 是否发送成功
   */
  async sendMessageToWebContents(targetWebContentsId: number, payload: any): Promise<boolean> {
    try {
      console.log(`Sending message to WebContents ${targetWebContentsId}:`)
      if (!this.tabPresenter) {
        console.warn('TabPresenter not available, cannot send message')
        return false
      }
      // || this.hiddenWebContents.get(targetWebContentsId)?.webContents.id
      // 获取目标WebContents对应的Tab ID
      const tabId = this.tabPresenter.getTabIdByWebContentsId(targetWebContentsId)
      if (!tabId) {
        const hiddenId = this.hiddenWebContents.get(targetWebContentsId)?.webContents.id
        if (hiddenId) {
          eventBus.sendToHiddenWebCon(hiddenId, this.COMMUNICATION_EVENTS.RECEIVE_MESSAGE, {
            // fromWebContentsId: targetWebContentsId,
            payload,
            timestamp: Date.now()
          })
        } else {
          console.warn(`No tab found for WebContents ID: ${targetWebContentsId}`)
          return false
        }
      } else {
        // 使用eventBus发送消息到指定Tab
        eventBus.sendToTab(tabId, this.COMMUNICATION_EVENTS.RECEIVE_MESSAGE, {
          // fromWebContentsId: targetWebContentsId,
          payload,
          timestamp: Date.now()
        })
      }

      console.log(`Message sent to WebContents ${targetWebContentsId} (Tab ${tabId})`)
      return true
    } catch (error) {
      console.error(`Failed to send message to WebContents ${targetWebContentsId}:`, error)
      return false
    }
  }

  /**
   * 广播消息到所有WebContents
   * @param payload 消息负载
   * @returns 发送成功的WebContents数量
   */
  async broadcastMessage(payload: any): Promise<number> {
    try {
      if (!this.tabPresenter) {
        console.warn('TabPresenter not available, cannot broadcast message')
        return 0
      }

      let successCount = 0
      const broadcastData = {
        payload,
        timestamp: Date.now(),
        from: 'broadcast'
      }

      // 遍历所有隐藏的WebContents
      for (const [webContentsId, view] of this.hiddenWebContents) {
        if (view && !view.webContents.isDestroyed()) {
          try {
            // 获取对应的Tab ID
            const tabId = this.tabPresenter.getTabIdByWebContentsId(webContentsId)
            if (tabId) {
              // 发送消息到该Tab
              eventBus.sendToTab(tabId, this.COMMUNICATION_EVENTS.RECEIVE_MESSAGE, broadcastData)
              successCount++
            }
          } catch (error) {
            console.error(`Failed to broadcast to WebContents ${webContentsId}:`, error)
          }
        }
      }

      console.log(`Broadcast message sent to ${successCount} WebContents`)
      return successCount
    } catch (error) {
      console.error('Failed to broadcast message:', error)
      return 0
    }
  }
}
