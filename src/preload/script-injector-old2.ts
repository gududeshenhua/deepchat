import { ScriptItem } from '@shared/types'
import {  ipcRenderer } from 'electron'
import path from 'path'

export class ScriptInjector {
  private scriptList = []
  private scriptsPath = ''
  constructor() {
    this.listenHotReload()

    // window.addEventListener('DOMContentLoaded', async () => {
    //   await this.loadScriptsFromMain()
    //   this.injectScripts()
    // })
  }

  async loadScriptsFromMain() {
    this.scriptList = await ipcRenderer.invoke('presenter:call','scriptPresenter', 'getAllScripts')
    this.scriptsPath = await ipcRenderer.invoke('presenter:call','scriptPresenter', 'getScriptPath')
  }

  matchUrl(url, patterns) {
    return patterns.some(p => new RegExp('^' + p.replace(/\*/g, '.*') + '$').test(url))
  }

  injectScripts() {
    const url = window.location.href
    console.log('[ScriptInjector] 当前URL:', url)
    this.scriptList.forEach((script: ScriptItem) => {
      if (!script.enabled) return
      if (!this.matchUrl(url, script.match)) return
      if (window[`__script_${script.name}`]) return

      window[`__script_${script.name}`] = true

      try {
        const filePath = path.join(this.scriptsPath, script.entry)
        console.log('[ScriptInjector] 注入:', script.name)
        console.log('[ScriptInjector] 注入路径:', filePath)
        require(filePath)
      } catch (err) {
        console.error('[ScriptInjector] 注入失败:', script.name, err)
      }
    })
  }

  listenHotReload() {
    ipcRenderer.on('scripts:reload-now', async (_,options:{reload?:boolean}) => {
      console.log('[ScriptInjector] 🔥 热加载触发')
      // debugger
      if(options&&options.reload) {
        // debugger
        location.reload()
      }
      await this.loadScriptsFromMain()
      this.injectScripts()
    })
  }
}
