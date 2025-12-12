import { ScriptItem } from '@shared/types'
import { ipcRenderer, webFrame, contextBridge } from 'electron'
import path from 'path'
import { matchUrlWithExclude } from '@shared/utils'
import fs from 'fs'
import { PresenterFactory } from './commonInjector/persenterFactory'
import HiddenWebContentsManager from './commonInjector/hideWebCon'
import LoggerManager from './commonInjector/logger'
import TabManager from './commonInjector/tab'
import SetupManager from './commonInjector/setup'
import SQLiteManager from './commonInjector/sqlite'
import MessageCenter from './commonInjector/messageCenter'
export class ScriptInjector {
  private scriptList: ScriptItem[] = []
  private scriptsPath = ''
  // private iframeMap: Record<string, HTMLIFrameElement> = {} // 存储每个脚本的 iframe
  private sandboxes: Record<string, any> = {}
  private originUrl: string = ''
  private api: any
  // private commonJSDirPath = ''
  constructor(api: any) {
    this.api = api
    // this.listenHotReload()
    this.initCommonJS()
  }

  transClassToObj(Manager: any) {
    const manager = new Manager()
    const proto = Object.getPrototypeOf(manager)
    const methodNames = Object.getOwnPropertyNames(proto).filter(
      (name) => name !== 'constructor' && typeof manager[name] === 'function'
    )
    const api: Record<string, (...args: any[]) => any> = {}
    for (const name of methodNames) {
      api[name] = manager[name].bind(manager)
    }
    return api
  }

  async initCommonJS() {
    console.log('init common js')
    // console.log(globalThis.PresenterFactory)
    contextBridge.exposeInMainWorld('PresenterFactory', PresenterFactory)
    contextBridge.exposeInMainWorld(
      'HiddenWebContentsManager',
      this.transClassToObj(HiddenWebContentsManager)
    )
    contextBridge.exposeInMainWorld('LoggerManager', this.transClassToObj(LoggerManager))
    contextBridge.exposeInMainWorld('SQLiteManager', this.transClassToObj(SQLiteManager))
    contextBridge.exposeInMainWorld('TabManager', this.transClassToObj(TabManager))
    contextBridge.exposeInMainWorld('SetupManager', this.transClassToObj(SetupManager))
    contextBridge.exposeInMainWorld('MessageCenter', this.transClassToObj(MessageCenter))
    // this.commonJSDirPath = await ipcRenderer.invoke(
    //   'presenter:call',
    //   'scriptPresenter',
    //   'getCommonJSDirPath'
    // )
    // let comonjs = ['persenterFactory.js', 'hideWebCon.js', 'logger.js','setUp.js','sqlite.js','tab.js']
    // // let commonjs = []
    // comonjs.forEach(async (file) => {
    //   // await require(path.join(this.commonJSDirPath, file))
    //   const filePath = path.join(this.commonJSDirPath, file)
    //   const code = fs.readFileSync(filePath, 'utf8')

    //   // 转为 Blob URL
    //   const blobURL = URL.createObjectURL(
    //     new Blob([code], { type: 'text/javascript' })
    //   )

    //   webFrame.executeJavaScript(`
    //     (function() {
    //       // document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(e => e.remove());
    //       // console.log("删除CSP")
    //       // setTimeout(() => {
    //       const s = document.createElement("script");
    //       s.src = "${blobURL}";
    //       s.type = "text/javascript";
    //       document.head.appendChild(s);
    //       console.log("[公用脚本] 注入脚本 blob:", "${filePath}");
    //       // },2000)
    //     })();
    //   `)
    // })
  }

  async loadScriptsFromMain() {
    this.scriptList = await ipcRenderer.invoke('presenter:call', 'scriptPresenter', 'getAllScripts')
    this.scriptsPath = await ipcRenderer.invoke(
      'presenter:call',
      'scriptPresenter',
      'getScriptPath'
    )
    // ['presenterFactory.js','hideWebCoon.js','common.js'].forEach((file) => {
    //   require(path.join(this.commonJSDirPath, file))
    // })
  }

  getOriginUrlFromArguments() {
    const args = process.argv
    for (const arg of args) {
      if (arg.startsWith('--originUrl=')) {
        return decodeURIComponent(arg.replace('--originUrl=', ''))
      }
    }
    return null
  }

  matchUrl(url: string, patterns: string[]) {
    return matchUrlWithExclude(url, patterns)
    // return patterns.some((p) => new RegExp('^' + p.replace(/\*/g, '.*') + '$').test(url))
  }

  /** 卸载单个脚本 */
  private unloadScript(name: string) {
    delete this.sandboxes[name]
  }

  /** 注入单个脚本 */
  private injectScript(script: ScriptItem) {
    const url = this.getOriginUrlFromArguments() || this.originUrl || window.location.href
    console.log('originUrl', url)
    console.log('Url', window.location.href)
    // const url = this.getOriginUrlFromArguments()
    // debugger;
    if (!url) return
    if (!script.enabled) {
      this.unloadScript(script.name + '-' + url)
      return
    }
    if (!this.matchUrl(url, script.match)) return
    if (this.sandboxes[script.name + '-' + url]) return

    try {
      const filePath = path.join(this.scriptsPath, script.entry)
      // const code = fs.readFileSync(filePath, 'utf-8')
      // 创建 iframe
      // this.runInSandbox(code, script.name)
      this.sandboxes[script.name + '-' + url] = true
      // require(filePath)
      // 注入 script 标签
      // 转换为 URL
      const code = fs.readFileSync(filePath, 'utf8')

      // 转为 Blob URL
      const blobURL = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }))
      webFrame.executeJavaScript(`
        (function() {
          const s = document.createElement("script");
          s.src = "${blobURL}";
          s.type = "text/javascript";
          document.head.appendChild(s);
          console.log("[ScriptInjector] 注入脚本 blob:", "${filePath}");
        })();
      `)
      console.log('[ScriptInjector] 注入脚本:', script.name)
    } catch (err) {
      console.error('[ScriptInjector] 注入失败:', script.name, err)
    }
  }

  /** 注入所有脚本 */
  injectScripts() {
    this.scriptList.forEach((script) => this.injectScript(script))
  }

  /** 监听热加载 */
  listenHotReload() {
    ipcRenderer.on(
      'scripts:reload-now',
      async (_, options: { reload?: boolean; originUrl?: string; tabId?: string }) => {
        console.log(options)
        console.log(this.api.getWebContentsId())
        if (options && options?.tabId && this.api.getWebContentsId() !== options.tabId) return
        console.log('[ScriptInjector] 🔥 热加载触发')
        if (options && options.originUrl) {
          this.originUrl = options.originUrl
        }
        // if (options && options.reload) {
        //   location.reload()
        // }
        // 不再 location.reload()，直接卸载禁用脚本
        await this.loadScriptsFromMain()
        this.injectScripts()
      }
    )
  }
}
