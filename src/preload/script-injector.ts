import { ScriptItem } from '@shared/types'
import { ipcRenderer } from 'electron'
import path from 'path'
import fs from 'fs'

export class ScriptInjector {
  private scriptList: ScriptItem[] = []
  private scriptsPath = ''
  private iframeMap: Record<string, HTMLIFrameElement> = {} // 存储每个脚本的 iframe
  private sandboxes: Record<string, any> = {}

  constructor() {
    this.listenHotReload()
  }

  async loadScriptsFromMain() {
    this.scriptList = await ipcRenderer.invoke('presenter:call', 'scriptPresenter', 'getAllScripts')
    this.scriptsPath = await ipcRenderer.invoke(
      'presenter:call',
      'scriptPresenter',
      'getScriptPath'
    )
  }

  matchUrl(url: string, patterns: string[]) {
    return patterns.some((p) => new RegExp('^' + p.replace(/\*/g, '.*') + '$').test(url))
  }

  /** ⭐ 沙箱运行器 */
  runInSandbox(code, scriptName) {
    // 自动构造隔离沙箱
    const sandbox = {
      window: {},
      document,
      console,
      setTimeout,
      clearTimeout
    }

    // with + Proxy 沙箱
    const proxy = new Proxy(sandbox, {
      has: () => true,
      get(target, prop) {
        return prop in target ? target[prop] : undefined
      },
      set(target, prop, val) {
        target[prop] = val
        return true
      }
    })

    const fn = new Function(`
      with (arguments[0]) {
        ${code}
      }
    `)

    fn(proxy)

    this.sandboxes[scriptName] = sandbox
    // 还是要手动清理DOM
    //     ✅ 最佳方案：使用 VM + Proxy Window 构建隔离沙箱（无需修改脚本）

    // 浏览器扩展的 content-script 是运行在：

    // 独立 globalThis

    // 独立 window

    // 但 DOM 是共享的（经过一层代理/包装）

    // 我们可以用 Node.js 的 vm 模块 + 一个 Proxy 包装 window/document 来实现。
  }

  /** 卸载单个脚本 */
  private unloadScript(name: string) {
    delete this.sandboxes[name]
  }

  /** 注入单个脚本 */
  private injectScript(script: ScriptItem) {
    const url = window.location.href
    if (!script.enabled) {
      this.unloadScript(script.name)
      return
    }
    if (!this.matchUrl(url, script.match)) return
    if (this.sandboxes[script.name]) return

    try {
      const filePath = path.join(this.scriptsPath, script.entry)
      const code = fs.readFileSync(filePath, 'utf-8')

      // 创建 iframe
      this.runInSandbox(code, script.name)
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
    ipcRenderer.on('scripts:reload-now', async (_, options: { reload?: boolean }) => {
      console.log('[ScriptInjector] 🔥 热加载触发')

      // 不再 location.reload()，直接卸载禁用脚本
      await this.loadScriptsFromMain()
      this.injectScripts()
    })
  }
}
