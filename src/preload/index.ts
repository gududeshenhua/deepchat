import {
  clipboard,
  contextBridge,
  nativeImage,
  webUtils,
  webFrame,
  ipcRenderer,
  shell
} from 'electron'
import { exposeElectronAPI } from '@electron-toolkit/preload'
import { ScriptInjector } from './script-injector'
// Cache variables
let cachedWindowId: number | undefined = undefined
let cachedWebContentsId: number | undefined = undefined
// console.log('Preload: Initialized----------------')
// Custom APIs for renderer
const api = {
  copyText: (text: string) => {
    clipboard.writeText(text)
  },
  copyImage: (image: string) => {
    const img = nativeImage.createFromDataURL(image)
    clipboard.writeImage(img)
  },
  getPathForFile: (file: File) => {
    return webUtils.getPathForFile(file)
  },
  getWindowId: () => {
    if (cachedWindowId !== undefined) {
      return cachedWindowId
    }
    cachedWindowId = ipcRenderer.sendSync('get-window-id')
    return cachedWindowId
  },
  getWebContentsId: () => {
    if (cachedWebContentsId !== undefined) {
      return cachedWebContentsId
    }
    cachedWebContentsId = ipcRenderer.sendSync('get-web-contents-id')
    return cachedWebContentsId
  },
  openExternal: (url: string) => {
    return shell.openExternal(url)
  }
}
globalThis.api = api
exposeElectronAPI()
// window.electron只能在render里面拿到
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Preload: Failed to expose API via contextBridge:', error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
// globalThis.api = api
// window.mama = '132132'
const scriptInjector = new ScriptInjector(api)
scriptInjector.listenHotReload()
console.log('Preload: DOMContentLoaded')
console.log(window)
window.addEventListener('DOMContentLoaded', async () => {
  // console.log('Preload: DOMContentLoaded',window.location.href)
  cachedWebContentsId = ipcRenderer.sendSync('get-web-contents-id')
  cachedWindowId = ipcRenderer.sendSync('get-window-id')
  console.log(
    'Preload: Initialized with WebContentsId:',
    cachedWebContentsId,
    'WindowId:',
    cachedWindowId
  )
  // await scriptInjector.loadScriptsFromMain()
  // scriptInjector.injectScripts()
  // scriptInjector.initCommonJS()
  webFrame.setVisualZoomLevelLimits(1, 1) // Disable trackpad zooming
  webFrame.setZoomFactor(1)
})
