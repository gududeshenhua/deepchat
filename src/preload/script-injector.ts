import { ScriptItem } from '@shared/types'
import { ipcRenderer } from 'electron'
import path from 'path'
import { matchUrlWithExclude } from '@shared/utils'
export class ScriptInjector {
  private scriptList: ScriptItem[] = []
  private scriptsPath = ''
  // private iframeMap: Record<string, HTMLIFrameElement> = {} // 存储每个脚本的 iframe
  private sandboxes: Record<string, any> = {}
  private originUrl: string = ''
  private api: any
  constructor(api: any) {
    this.api = api
    // this.listenHotReload()
  }

  async loadScriptsFromMain() {
    this.scriptList = await ipcRenderer.invoke('presenter:call', 'scriptPresenter', 'getAllScripts')
    this.scriptsPath = await ipcRenderer.invoke(
      'presenter:call',
      'scriptPresenter',
      'getScriptPath'
    )
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
