// import { ScriptItem } from '@shared/types'
// import { ipcRenderer } from 'electron'
// import path from 'path'
// import fs from 'fs'
// import vm from 'vm'

// interface RuntimeBinding {
//   context: vm.Context
//   createdElements: Set<HTMLElement>
//   listeners: { el: EventTarget; type: string; fn: Function; options?: any }[]
//   timers: number[]
//   intervals: number[]
// }

// export class ScriptInjector {
//   private scriptList: ScriptItem[] = []
//   private scriptsPath = ''
//   private runtimeMap: Record<string, RuntimeBinding> = {}

//   constructor() {
//     this.listenHotReload()
//   }

//   async loadScriptsFromMain() {
//     // debugger
//     this.scriptList = await ipcRenderer.invoke('presenter:call', 'scriptPresenter', 'getAllScripts')
//     // debugger
//     this.scriptsPath = await ipcRenderer.invoke(
//       'presenter:call',
//       'scriptPresenter',
//       'getScriptPath'
//     )
//   }

//   matchUrl(url: string, patterns: string[]) {
//     return patterns.some((p) => new RegExp('^' + p.replace(/\*/g, '.*') + '$').test(url))
//   }

//   /** ⭐ 创建沙箱 DOM 层代理（可追踪） */
//   private buildDocumentProxy(runtime: RuntimeBinding) {
//     return new Proxy(document, {
//       get(target, prop: string) {
//         const orig = (target as any)[prop]

//         // 追踪 document.createElement
//         if (prop === 'createElement') {
//           return (tag: string) => {
//             const el = document.createElement(tag)
//             runtime.createdElements.add(el)

//             // 拦截 addEventListener（便于卸载）
//             const oldAdd = el.addEventListener
//             el.addEventListener = (type, fn, options) => {
//               runtime.listeners.push({ el, type, fn, options })
//               oldAdd.call(el, type, fn, options)
//             }
//             return el
//           }
//         }

//         if (typeof orig === 'function') return orig.bind(target)
//         return orig
//       }
//     })
//   }

//   /** ⭐ 在 vm 沙箱中执行脚本 */
//   private runInVm(scriptName: string, code: string) {
//     const runtime: RuntimeBinding = {
//       context: {} as any,
//       createdElements: new Set(),
//       listeners: [],
//       timers: [],
//       intervals: []
//     }

//     // 构建沙箱 context
//     const sandbox = {
//       console,
//       document: this.buildDocumentProxy(runtime),
//       window: {}, // 不暴露真实 window（安全）
//       setTimeout: (...args: any[]) => {
//         const id = window.setTimeout(...args)
//         runtime.timers.push(id)
//         return id
//       },
//       clearTimeout: (id: number) => {
//         runtime.timers = runtime.timers.filter((x) => x !== id)
//         return clearTimeout(id)
//       },
//       setInterval: (...args: any[]) => {
//         const id = window.setInterval(...args)
//         runtime.intervals.push(id)
//         return id
//       },
//       clearInterval: (id: number) => {
//         runtime.intervals = runtime.intervals.filter((x) => x !== id)
//         return clearInterval(id)
//       }
//     }

//     runtime.context = vm.createContext(sandbox)

//     try {
//       const script = new vm.Script(code, { filename: scriptName })
//       script.runInContext(runtime.context)

//       this.runtimeMap[scriptName] = runtime
//       console.log('[ScriptInjector] ✔ VM 沙箱已运行脚本:', scriptName)
//     } catch (err) {
//       console.error('[ScriptInjector] ❌ VM 执行失败:', scriptName, err)
//     }
//   }

//   /** ⭐ 自动卸载脚本（事件 + DOM + 定时器） */
//   private unloadScript(name: string) {
//     const rt = this.runtimeMap[name]
//     if (!rt) return

//     // 清理 DOM
//     rt.createdElements.forEach((el) => el.remove())

//     // 清理事件
//     rt.listeners.forEach(({ el, type, fn, options }) => {
//       el.removeEventListener(type, fn, options)
//     })

//     // 清理计时器
//     rt.timers.forEach(clearTimeout)
//     rt.intervals.forEach(clearInterval)

//     delete this.runtimeMap[name]

//     console.log('[ScriptInjector] 🔥 已卸载脚本:', name)
//   }

//   /** ⭐ 注入单个脚本 */
//   private injectScript(script: ScriptItem) {
//     const url = window.location.href
//     // debugger
//     if (!script.enabled) {
//       this.unloadScript(script.name)
//       return
//     }
//     if (!this.matchUrl(url, script.match)) return
//     if (this.runtimeMap[script.name]) return // 已注入

//     const filePath = path.join(this.scriptsPath, script.entry)
//     const code = fs.readFileSync(filePath, 'utf-8')
//     console.log('[ScriptInjector] 🔧 读取脚本:', code)
//     this.runInVm(script.name, code)
//   }

//   /** ⭐ 注入所有脚本 */
//   injectScripts() {
//     // debugger
//     this.scriptList.forEach((script) => this.injectScript(script))
//   }

//   /** ⭐ 热加载 */
//   listenHotReload() {
//     ipcRenderer.on('scripts:reload-now', async () => {
//       console.log('[ScriptInjector] ♻ 热加载触发')

//       await this.loadScriptsFromMain()
//       this.injectScripts()
//     })
//   }
// }
