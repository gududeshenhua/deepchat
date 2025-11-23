/* eslint-disable @typescript-eslint/no-explicit-any */
import { app } from 'electron'
import fs from 'fs'
import path from 'path'
import { IScriptPresenter } from '@shared/presenter'
import { eventBus, SendTarget } from '@/eventbus'

export interface ScriptItem {
  name: string
  enabled: boolean
  match: string[]
  entry: string
}

export class ScriptPresenter implements IScriptPresenter {
  private configPath: string
  private scriptsDirPath: string
  private scriptList: ScriptItem[] = []

  constructor() {
    this.configPath = path.join(app.getAppPath(), 'resources', 'script', 'config.json')
    this.scriptsDirPath = path.join(app.getAppPath(), 'resources', 'script')
    this.load()
  }

  /** 读取 scripts.json */
  load() {
    try {
      const json = fs.readFileSync(this.configPath, 'utf-8')
      console.log('[ScriptPersenter] 读取 scripts.json 成功')
      console.log('[ScriptPersenter] 读取 scripts.json 内容', json)
      this.scriptList = JSON.parse(json)
    } catch (e) {
      console.error('[ScriptPersenter] 读取 scripts.json 失败', e)
      this.scriptList = []
    }
  }

  /** 保存 scripts.json */
  save() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.scriptList, null, 2))
  }

  getAllScripts() {
    return this.scriptList
  }

  getScriptPath() {
    return this.scriptsDirPath
  }

  updateScript(updated: ScriptItem) {
    const index = this.scriptList.findIndex((item) => item.name === updated.name)
    if (index !== -1) {
      this.scriptList[index] = updated
      this.save()
    }

    eventBus.sendToRenderer('scripts:reload-now', SendTarget.ALL_WINDOWS, {
      reload: updated.enabled ? false : true
    })
  }

  /** ✨ 新增脚本 */
  uploadScript(item: ScriptItem, content: string) {
    try {
      const dirPath = path.join(this.scriptsDirPath, item.name)
      const scriptFilePath = path.join(dirPath, `index.js`)

      // 1. 确保目录存在
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
      }

      // 2. 写入脚本文件
      fs.writeFileSync(scriptFilePath, content, 'utf-8')

      // 3. 写入 config.json
      this.scriptList.push(item)
      this.save()
      eventBus.sendToRenderer('scripts:reload-now', SendTarget.ALL_WINDOWS)
      console.log('[ScriptPresenter] 上传脚本成功:', item.name)
      // return true
    } catch (err) {
      console.error('[ScriptPresenter] 上传脚本失败:', err)
      throw err
    }
  }

  /** 🗑 删除脚本 */
  deleteScript(item: ScriptItem) {
    try {
      const dirPath = path.join(this.scriptsDirPath, item.name)

      // 1. 删除脚本目录（包含 index.js、其他文件）
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true })
      }

      // 2. 从列表移除
      this.scriptList = this.scriptList.filter((s) => s.name !== item.name)
      this.save()
      eventBus.sendToRenderer('scripts:reload-now', SendTarget.ALL_WINDOWS, { reload: true })
      console.log('[ScriptPresenter] 删除脚本成功:', item.name)
      // return true
    } catch (err) {
      console.error('[ScriptPresenter] 删除脚本失败:', err)
      throw err
    }
  }

  // registerIpc() {
  //   ipcMain.handle('scripts:get-all', () => {
  //     return this.getAllScripts()
  //   })
  // }
}
