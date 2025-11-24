// import { ScriptItem } from '@shared/types'
// import { ipcRenderer } from 'electron'
// import fs from 'fs'
// import path from 'path'

// export class ScriptInjector {
//   private scriptList: ScriptItem[] = []
//   private scriptsPath = ''
//   private iframeMap: Record<string, HTMLIFrameElement> = {}

//   constructor() {
//     this.listenHotReload()
//   }

//   async loadScriptsFromMain() {
//     this.scriptList = await ipcRenderer.invoke('presenter:call', 'scriptPresenter', 'getAllScripts')
//     this.scriptsPath = await ipcRenderer.invoke(
//       'presenter:call',
//       'scriptPresenter',
//       'getScriptPath'
//     )
//   }

//   matchUrl(url: string, patterns: string[]) {
//     return patterns.some((p) => new RegExp('^' + p.replace(/\*/g, '.*') + '$').test(url))
//   }

//   /** 创建独立 iframe 沙箱 */
//   private createSandboxIframe(name: string) {
//     if (this.iframeMap[name]) return this.iframeMap[name]

//     const iframe = document.createElement('iframe')
//     iframe.style.display = 'none'

//     // 浏览器警告但不会影响使用
//     iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin')

//     document.body.appendChild(iframe)
//     this.iframeMap[name] = iframe

//     return iframe
//   }
//   buildSandboxWindow(win: any) {
//     const pageWindow = window

//     // 映射常用 API
//     const mapping = {
//       // document: pageWindow.document,
//       // alert: (...args) => pageWindow.alert(...args),
//       // confirm: (...args) => pageWindow.confirm(...args),
//       // prompt: (...args) => pageWindow.prompt(...args),
//       // setTimeout: pageWindow.setTimeout.bind(pageWindow),
//       // setInterval: pageWindow.setInterval.bind(pageWindow),
//       // clearTimeout: pageWindow.clearTimeout.bind(pageWindow),
//       // clearInterval: pageWindow.clearInterval.bind(pageWindow),
//       // fetch: pageWindow.fetch.bind(pageWindow),
//       // XMLHttpRequest: pageWindow.XMLHttpRequest,
//       // location: pageWindow.location,
//       // cookie: pageWindow.document.cookie,
//     }

//     // 将映射注入到 iframe window
//     for (const key in mapping) {
//       try {
//         win[key] = mapping[key]
//       } catch {}
//     }

//     return win
//   }

//   /** 在 iframe 中执行脚本 */
//   private runUserScript(name: string, code: string) {
//     const iframe = this.createSandboxIframe(name)
//     const win: any = iframe.contentWindow

//     if (!win) {
//       console.error('[ScriptInjector] ❌ iframe.contentWindow = null', name)
//       return
//     }

//     // 让 iframe 内部脚本访问主页面 DOM
//     // 注入主页面API
//     this.buildSandboxWindow(win)
//     // 包装执行，让 document 指向页面主 DOM
//     const wrapped = `
//       (function(document){
//         // 为当前脚本创建元素添加 data-script 标记
//         // 保存原始 createElement
//         const _createElement = document.createElement.bind(document);

//         // 覆盖 document.createElement
//         document.createElement = function(tag) {
//           const el = _createElement(tag);
//           el.setAttribute('data-script', '${name}');
//           return el;
//         }
//         ${code}
//       })(window.parent.document)
//     `

//     try {
//       win.eval(wrapped)
//       console.log('[ScriptInjector] ✔ 注入成功:', name)
//     } catch (e) {
//       console.error('[ScriptInjector] ❌ 执行错误:', name, e)
//     }
//   }

//   /** 卸载脚本：删除 iframe 即可清理所有状态 */
//   private unloadScript(name: string) {
//     const iframe = this.iframeMap[name]
//     if (iframe) iframe.remove()
//     delete this.iframeMap[name]

//     // 删除父页面上该脚本创建的 DOM
//     const elements = document.querySelectorAll(`[data-script="${name}"]`)
//     elements.forEach((el) => el.remove())
//   }

//   /** 注入单个脚本 */
//   private injectScript(script: ScriptItem) {
//     const url = window.location.href

//     if (!script.enabled) {
//       this.unloadScript(script.name)
//       return
//     }

//     if (!this.matchUrl(url, script.match)) {
//       this.unloadScript(script.name)
//       return
//     }

//     if (this.iframeMap[script.name]) return

//     try {
//       const fp = path.join(this.scriptsPath, script.entry)
//       const code = fs.readFileSync(fp, 'utf8')
//       this.runUserScript(script.name, code)
//     } catch (e) {
//       console.error('[ScriptInjector] ❌ 注入失败:', script.name, e)
//     }
//   }

//   /** 注入所有脚本 */
//   injectScripts() {
//     this.scriptList.forEach((script) => this.injectScript(script))
//   }

//   /** 热更新 */
//   private listenHotReload() {
//     ipcRenderer.on('scripts:reload-now', async () => {
//       console.log('[ScriptInjector] 🔥 热加载触发')

//       await this.loadScriptsFromMain()

//       // 全部卸载 + 重新加载
//       Object.keys(this.iframeMap).forEach((name) => this.unloadScript(name))
//       this.injectScripts()
//     })
//   }
// }
