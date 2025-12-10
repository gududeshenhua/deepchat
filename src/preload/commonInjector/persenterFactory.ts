const { ipcRenderer } = require('electron')

// ========== WebContentsId 缓存 ==========
let cachedWebContentsId: number | null = null

function getWebContentsId() {
  if (cachedWebContentsId !== null) return cachedWebContentsId

  try {
    // 这里假设 main process 已经暴露了 getWebContentsId API
    cachedWebContentsId = ipcRenderer.sendSync('get-web-contents-id')
    return cachedWebContentsId
  } catch (error) {
    console.warn('Failed to get webContentsId:', error)
    return null
  }
}

// ========== 安全序列化函数 ==========
function safeSerialize(obj: any) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (Array.isArray(obj)) return obj.map(safeSerialize)

  const serialized = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (
        typeof value !== 'function' &&
        typeof value !== 'symbol' &&
        typeof value !== 'undefined'
      ) {
        serialized[key] = safeSerialize(value)
      }
    }
  }
  return serialized
}

function toRaw(obj: any) {
  return obj // Vue toRaw 替代
}

// ========== Presenter 代理工厂 ==========
function createPresenterProxy(presenterName: string) {
  return new Proxy(
    {},
    {
      get(_, functionName: string) {
        return (...args) => {
          const rawPayloads: any = args.map((arg) => safeSerialize(toRaw(arg)))
          const webContentsId: number | null = getWebContentsId()
          if (process.env.VITE_LOG_IPC_CALL === '1') {
            console.log(
              `[Renderer IPC] WebContents: ${webContentsId || 'unknown'} -> ${presenterName}.${functionName}`
            )
          }
          return ipcRenderer
            .invoke('presenter:call', presenterName, functionName, ...rawPayloads)
            .catch((e) => {
              console.warn(
                `[Renderer IPC Error] WebContents: ${webContentsId} ${presenterName}.${functionName}`,
                e
              )
              return null
            })
        }
      }
    }
  )
}

// ========== presentersProxy ==========
const presentersProxy: any = new Proxy(
  {},
  {
    get(_, presenterName: string) {
      return createPresenterProxy(presenterName)
    }
  }
)
globalThis.PresenterFactory = {
  usePresenter: (name) => presentersProxy[name]
}
export const PresenterFactory = {
  usePresenter: (name) => presentersProxy[name]
}
// // ========== 对渲染进程暴露 API ==========
// contextBridge.exposeInMainWorld('PresenterFactory', {
//   usePresenter: name => presentersProxy[name]
// });
