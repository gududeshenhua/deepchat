import { ScriptItem } from '@shared/types'
import { ipcRenderer } from 'electron'
import path from 'path'

export class ScriptInjector {
  private scriptList: ScriptItem[] = []
  private scriptsPath = ''
  // private iframeMap: Record<string, HTMLIFrameElement> = {} // 存储每个脚本的 iframe
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
      // const code = fs.readFileSync(filePath, 'utf-8')

      // 创建 iframe
      // this.runInSandbox(code, script.name)
      this.sandboxes[script.name] = true
      require(filePath)
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
      if (options && options.reload) {
        location.reload()
      }
      // 不再 location.reload()，直接卸载禁用脚本
      await this.loadScriptsFromMain()
      this.injectScripts()
    })
  }
}
