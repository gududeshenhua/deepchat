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
  async executeJavaScript(script: string, windowId?: number): Promise<any> {
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

      // 执行JavaScript代码
      const result = await tabView.webContents.executeJavaScript(script)
      console.log('[API JS] JavaScript executed successfully')
      return result
    } catch (error) {
      console.error('[API JS] Failed to execute JavaScript:', error)
      throw error
    }
  }
}
