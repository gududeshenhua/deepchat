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
      const cookies = JSON.parse(base64DecodeUnicode(cookieData))

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
          sameSite: cookie.sameSite,
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
}
