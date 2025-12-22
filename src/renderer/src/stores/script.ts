import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usePresenter } from '@/composables/usePresenter'
import type { ScriptItem } from '@shared/presenter'

export const useScriptStore = defineStore('script', () => {
  const scriptPresenter = usePresenter('scriptPresenter')
  const tabPresenter = usePresenter('tabPresenter')
  const scriptList = ref<ScriptItem[]>([])

  /** 获取全部脚本 */
  const getAllScripts = async () => {
    const list = await scriptPresenter.getAllScripts()
    scriptList.value = Array.isArray(list) ? list : []
    return scriptList.value
  }

  /** 新增脚本（写入目录 + 更新config.json） */
  const uploadScript = async (item: ScriptItem, content: string) => {
    // debugger
    let res = await scriptPresenter.uploadScript(item, content)
    return res
  }

  /** 更新脚本（启用/禁用） */
  const updateScript = async (item: ScriptItem) => {
    await scriptPresenter.updateScript(item)
    return await getAllScripts()
  }

  /** 删除脚本 */
  const deleteScript = async (item: ScriptItem) => {
    await scriptPresenter.deleteScript(item)
    return await getAllScripts()
  }

  const refreshWindowTabsScript = async (refreshAll?: boolean) => {
    const windowId = window.api.getWindowId()
    tabPresenter.refreshInjectorScriptsTabs(windowId ?? 1, refreshAll ? true : false)
  }

  /** 读取脚本内容 */
  const readScriptContent = async (name: string) => {
    return await scriptPresenter.readScriptContent(name)
  }

  /** 保存脚本内容 */
  const saveScriptContent = async (name: string, content: string) => {
    return await scriptPresenter.saveScriptContent(name, content)
  }

  return {
    scriptList,
    getAllScripts,
    uploadScript,
    updateScript,
    deleteScript,
    refreshWindowTabsScript,
    readScriptContent,
    saveScriptContent
  }
})
