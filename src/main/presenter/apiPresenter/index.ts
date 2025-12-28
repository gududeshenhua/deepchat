import { IApiPresenter } from '@shared/presenter'
import { presenter } from '@/presenter'
import { base64DecodeUnicode, getBaseUrl } from '@shared/utils'

export class ApiPresenter implements IApiPresenter {
  /**
   * 设置 Cookie 的方法
   * @param cookieData - Base64 编码的 Cookie 数据
   * @param targetPage - 目标页面 URL
   */
  async setCookie(cookieData: string, targetPage: string): Promise<void> {
    try {
      // 解析 Cookie 数据 (参考 main/index.ts 第73行)
      let cookies = JSON.parse(base64DecodeUnicode(cookieData))
      // 确保 cookies 是数组格式
      if (!Array.isArray(cookies)) {
        cookies = [cookies]
      }

      // 获取当前窗口 (参考 main/index.ts 第69-72行)
      const allWindows = presenter.windowPresenter.getAllWindows()
      const targetWindow = presenter.windowPresenter.getFocusedWindow() || allWindows[0]

      if (!targetWindow) {
        throw new Error('No available window to set cookies')
      }

      console.log('[API Cookie] Setting cookies:', cookies)
      const targetURL = getBaseUrl(targetPage)
      console.log('[API Cookie] Target URL:', targetURL)

      // 设置 Cookie
      const setPromises = cookies.map((cookie: any) =>
        targetWindow.webContents.session.cookies.set({
          url: targetURL || '',
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          sameSite: cookie.sameSite || 'lax',
          secure: cookie.secure,
          expirationDate: cookie.expirationDate
        })
      )

      // 等待所有Promise完成
      await Promise.all(setPromises)
      console.log('[API Cookie] Cookies set successfully')
    } catch (error) {
      console.error('[API Cookie] Failed to set cookies:', error)
      throw error
    }
  }

  /**
   * 执行JavaScript代码注入
   * @param script - 要执行的JavaScript代码
   * @param windowId - 窗口ID，如果未指定则使用当前激活的窗口
   */
  async executeJavaScript(script: string, windowId?: number, tabId?: number): Promise<any> {
    try {
      console.log(
        '[API JS] Executing JavaScript:',
        script.substring(0, 100) + (script.length > 100 ? '...' : '')
      )

      // 获取目标窗口 (参考 main/index.ts 第69-72行)
      let targetWindow
      if (windowId) {
        targetWindow = presenter.windowPresenter.getWindowById(windowId)
      } else {
        const allWindows = presenter.windowPresenter.getAllWindows()
        targetWindow = presenter.windowPresenter.getFocusedWindow() || allWindows[0]
      }

      if (!targetWindow) {
        throw new Error('No available window to execute JavaScript')
      }

      // 获取当前窗口的激活标签页ID (参考 eventbus.ts 第155-157行)
      const windowIdToUse = Number(targetWindow.id)
      let targetTabId
      if (tabId) {
        targetTabId = tabId
      } else {
        const activeTabId = await presenter.tabPresenter.getActiveTabId(windowIdToUse)
        targetTabId = activeTabId
      }

      if (targetTabId === null) {
        throw new Error(`No active tab found in window ${windowIdToUse}`)
      }

      // 获取标签页对应的view (参考 eventbus.ts 第129-131行)
      const tabView = await presenter.tabPresenter.getTab(targetTabId || 1)

      if (!tabView) {
        throw new Error(`Tab with ID ${targetTabId} not found`)
      }

      // 检查webContents是否已销毁
      if (tabView.webContents.isDestroyed()) {
        throw new Error(`WebContents for tab ${targetTabId} is destroyed`)
      }

      // 执行JavaScript代码
      const result = await tabView.webContents.executeJavaScript(script)
      console.log('[API JS] JavaScript executed successfully')
      return result
    } catch (error) {
      console.error('[API JS] Failed to execute JavaScript:', error)
      throw error
    }
  }

  /**
   * 当页面加载到指定URL时执行JavaScript代码注入
   * @param script - 要执行的JavaScript代码
   * @param targetUrl - 目标页面URL，当页面加载到此URL时执行代码
   * @param windowId - 窗口ID，如果未指定则使用当前激活的窗口
   * @param timeout - 超时时间（毫秒），默认30秒
   */
  async executeJavaScriptWhenUrl(
    script: string,
    targetUrl: string,
    windowId?: number,
    timeout: number = 30000
  ): Promise<any> {
    try {
      console.log(
        '[API JS] Waiting to execute JavaScript on URL:',
        targetUrl,
        'Script:',
        script.substring(0, 100) + (script.length > 100 ? '...' : '')
      )

      // 获取目标窗口 (参考 main/index.ts 第69-72行)
      let targetWindow
      if (windowId) {
        targetWindow = presenter.windowPresenter.getWindowById(windowId)
      } else {
        const allWindows = presenter.windowPresenter.getAllWindows()
        targetWindow = presenter.windowPresenter.getFocusedWindow() || allWindows[0]
      }

      if (!targetWindow) {
        throw new Error('No available window to execute JavaScript')
      }

      // 获取当前窗口的激活标签页ID (参考 eventbus.ts 第155-157行)
      const windowIdToUse = Number(targetWindow.id)
      const activeTabId = await presenter.tabPresenter.getActiveTabId(windowIdToUse)

      if (activeTabId === null) {
        throw new Error(`No active tab found in window ${windowIdToUse}`)
      }

      // 获取标签页对应的view (参考 eventbus.ts 第129-131行)
      const tabView = await presenter.tabPresenter.getTab(activeTabId || 1)

      if (!tabView) {
        throw new Error(`Tab with ID ${activeTabId} not found`)
      }

      // 检查webContents是否已销毁
      if (tabView.webContents.isDestroyed()) {
        throw new Error(`WebContents for tab ${activeTabId} is destroyed`)
      }

      // 返回一个Promise，当页面加载到目标URL时执行JavaScript
      return new Promise((resolve, reject) => {
        // 超时处理
        const timeoutId = setTimeout(() => {
          tabView.webContents.off('did-navigate', urlChangeListener)
          reject(new Error(`Timeout waiting for URL: ${targetUrl}`))
        }, timeout)

        // URL变化监听器
        const urlChangeListener = (_event: Electron.Event, url: string) => {
          console.log('[API JS] Page navigated to URL:', url)

          // 检查当前URL是否与目标URL匹配
          if (url.includes(targetUrl)) {
            clearTimeout(timeoutId)
            tabView.webContents.off('did-navigate', urlChangeListener)

            // 执行JavaScript代码
            tabView.webContents
              .executeJavaScript(script)
              .then((result) => {
                console.log('[API JS] JavaScript executed successfully on URL:', targetUrl)
                resolve(result)
              })
              .catch((error) => {
                console.error('[API JS] Failed to execute JavaScript on URL:', targetUrl, error)
                reject(error)
              })
          }
        }

        // 添加URL变化监听器
        tabView.webContents.on('did-navigate', urlChangeListener)

        // 检查当前页面URL是否已经是目标URL
        if (tabView.webContents.getURL().includes(targetUrl)) {
          clearTimeout(timeoutId)
          tabView.webContents.off('did-navigate', urlChangeListener)

          // 执行JavaScript代码
          tabView.webContents
            .executeJavaScript(script)
            .then((result) => {
              console.log('[API JS] JavaScript executed successfully on current URL:', targetUrl)
              resolve(result)
            })
            .catch((error) => {
              console.error(
                '[API JS] Failed to execute JavaScript on current URL:',
                targetUrl,
                error
              )
              reject(error)
            })
        }
      })
    } catch (error) {
      console.error('[API JS] Failed to execute JavaScript when URL:', error)
      throw error
    }
  }
}
