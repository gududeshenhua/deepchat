import { app, dialog, protocol } from 'electron'
import { LifecycleManager, registerCoreHooks } from './presenter/lifecyclePresenter'
import { getInstance, Presenter } from './presenter'
import { electronApp } from '@electron-toolkit/utils'
import { createHttpServer } from './proxy'
import { parseQueryString, base64DecodeUnicode, getBaseUrl } from '@shared/utils'

// Initialize presenter after ready
let presenter: Presenter

/* ===== 协议注册（保险写法，启动时再写一次） ===== */
const PROTOCOL = 'aiwork'
if (!app.isDefaultProtocolClient(PROTOCOL)) {
  app.setAsDefaultProtocolClient(PROTOCOL) // Windows / Linux
}
/* ===== 必须先抢单例锁，再干任何事 ===== */
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
  process.exit(0) // 保险，防止后续代码继续执行
}

// Set application command line arguments
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required') // Allow video autoplay
app.commandLine.appendSwitch('webrtc-max-cpu-consumption-percentage', '100') // Set WebRTC max CPU usage
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=4096') // Set V8 heap memory size
app.commandLine.appendSwitch('ignore-certificate-errors') // Ignore certificate errors (for dev or specific scenarios)

// Set platform-specific command line arguments
if (process.platform == 'win32') {
  // Windows platform specific parameters (currently commented out)
  // app.commandLine.appendSwitch('in-process-gpu')
  // app.commandLine.appendSwitch('wm-window-animations-disabled')
}
if (process.platform === 'darwin') {
  // macOS platform specific parameters
  app.commandLine.appendSwitch('disable-features', 'DesktopCaptureMacV2,IOSurfaceCapturer')
}

// Initialize lifecycle manager and register core hooks
const lifecycleManager = new LifecycleManager()
registerCoreHooks(lifecycleManager)

/* ===== 解析被协议唤醒时的参数 ===== */
/* ===== 1. 首次启动：从 process.argv 扒协议参数 ===== */
const handleProtocolArgs = (args: string[]) => {
  args.forEach((arg) => {
    if (arg.startsWith(`${PROTOCOL}://`)) {
      console.log('[Protocol] first receive:', arg)
      const params = parseQueryString(arg)
      console.log('[Protocol] page:', params.page)
      lifecycleManager.initialTabUrl = params.page || 'home://chat'
    }
  })
}
handleProtocolArgs(process.argv)

/* ===== 2. 二次唤醒：second-instance 事件 ===== */
app.on('second-instance', (_, argv) => {
  argv.forEach(async (arg) => {
    if (arg.startsWith(`${PROTOCOL}://`)) {
      console.log('[Protocol] second receive:', arg)
      const params = parseQueryString(arg)
      console.log('[Protocol] page:', params.page)
      const allWindows = presenter.windowPresenter.getAllWindows()
      const targetWindow = presenter.windowPresenter.getFocusedWindow() || allWindows[0]
      console.log('[Protocol] windowId:', targetWindow.id)

      const cookies = JSON.parse(base64DecodeUnicode(params.cookie))
      console.log('[Cookie] setCookie:', cookies)
      const headers = JSON.parse(base64DecodeUnicode(params.header))
      console.log('[Header] replaceHeader:', headers)
      const targetURL = getBaseUrl(params.page)
      console.log('[Cookie&Header] url:', getBaseUrl(params.page))

      // 处理 headers（如果存在）
      if (params.header) {
        try {
          // 拦截请求头
          targetWindow.webContents.session.webRequest.onBeforeSendHeaders(
            { urls: [`${targetURL}/*`] }, // 过滤器确保只拦截目标域名,
            (details, callback) => {
              console.log(`[Header][Before] ${details.method} ${details.url}`)
              console.log(
                `[Header][Before] Headers:`,
                JSON.stringify(details.requestHeaders, null, 2)
              )

              // 增量更新
              const updatedHeaders = { ...details.requestHeaders, ...headers }

              console.log(`[Header][After] ${details.method} ${details.url}`)
              console.log(`[Header][After] Headers:`, JSON.stringify(updatedHeaders, null, 2))

              callback({ requestHeaders: updatedHeaders })
            }
          )

          // 记录响应
          targetWindow.webContents.session.webRequest.onCompleted(
            { urls: [`${targetURL}/*`] },
            (details) => {
              console.log(`[Header][Response] ${details.method} ${details.url}`)
              console.log(`[Header][Response] Status: ${details.statusCode}`)
              console.log(`[Header][Response] Headers:`, details.responseHeaders)
            }
          )
        } catch (e) {
          console.error('[Header] parse failed:', e)
        }
      }

      /* ===== 设置 cookie  ===== */
      if (params.cookie) {
        const setPromises = cookies.map((cookie) =>
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
      }
      presenter.tabPresenter.createTab(targetWindow.id, params.page)
    }
  })
})

/* 3. macOS 专属（builder 已自动配好 Info.plist，这里只需监听） */
app.on('open-url', (e, url) => {
  e.preventDefault()
  console.log('[Protocol] macOS open-url:', url)
})

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'local',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      bypassCSP: true,
      stream: true
    }
  }
])
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'home',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      bypassCSP: true,
      stream: true
    }
  }
])
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'json',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      bypassCSP: true,
      stream: true
    }
  }
])

// Start the lifecycle management system instead of using app.whenReady()
app.whenReady().then(async () => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.wefonk.AiWork')
  try {
    console.log('main: Application lifecycle startup')
    await lifecycleManager.start()
    presenter = getInstance(lifecycleManager)
    // 检查本地 IP 是否在白名单里
    if (!(await presenter.whitelistPresenter.checkLocalIP())) {
      return
    }
    // 创建代理接口
    createHttpServer()
    console.log('main: Application lifecycle startup completed successfully')
  } catch (error) {
    console.error('main: Application lifecycle startup failed:', error)
    dialog.showErrorBox(
      'Application startup failed',
      error instanceof Error ? error.message : String(error)
    )
    app.quit() // Serious error, exit the program
  }
})

// Handle window-all-closed event
app.on('window-all-closed', () => {
  if (!presenter) return

  // Check if there are any non-floating-button windows
  const mainWindows = presenter.windowPresenter.getAllWindows()

  if (mainWindows.length === 0) {
    // When only floating button windows exist, quit app on non-macOS platforms
    console.log('main: All main windows closed, requesting shutdown')
    app.quit() // Keep this event to avoid unexpected situations
  }
})
