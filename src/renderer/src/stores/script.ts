import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usePresenter } from '@/composables/usePresenter'
import type { ScriptItem } from '@shared/presenter'

export const useScriptStore = defineStore('script', () => {
  const scriptPresenter = usePresenter('scriptPresenter')
  const scriptList = ref<ScriptItem[]>([])

  /** 获取全部脚本 */
  const getAllScripts = async () => {
    const list = await scriptPresenter.getAllScripts()
    scriptList.value = Array.isArray(list) ? list : []
    return scriptList.value
  }

  /** 新增脚本（写入目录 + 更新config.json） */
  const uploadScript = async (item: ScriptItem, content: string) => {
    await scriptPresenter.uploadScript(item, content)
    return await getAllScripts()
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

  return {
    scriptList,
    getAllScripts,
    uploadScript,
    updateScript,
    deleteScript
  }
})
