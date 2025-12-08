import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { usePresenter } from '@/composables/usePresenter'

/**
 * Setup Store - 前端setup数据管理
 * 参考主程序SetupPresenter实现，提供key-value增删改查功能
 */
export const useSetupStore = defineStore('setup', () => {
  const setupP = usePresenter('setupPresenter')

  // 响应式数据存储当前setup数据
  const setupData = ref<Record<string, unknown>>({})

  const openDownloadDirectory = async (): Promise<void> => {
    console.log('Open download directory')
    await setupP.openDownloadDirectory()
  }
  /**
   * 选择下载目录
   */
  const selectDownloadDirectory = async (): Promise<string | null> => {
    const dir = await setupP.selectDownloadDirectory()
    if (dir) {
      setupData.value['download-directory'] = dir
      return dir
    }
    return null
  }
  /**
   * 从主程序同步数据到前端store
   */
  const syncFromMain = async () => {
    try {
      const data = await setupP.getAllValues()
      setupData.value = data || {}
    } catch (error) {
      console.error('[Setup Store] Failed to sync data from main:', error)
    }
  }

  /**
   * Get value by custom key
   * @param key Custom key
   * @returns Value or undefined if key doesn't exist
   */
  const getValue = async <T>(key: string): Promise<T | undefined> => {
    try {
      const value = await setupP.getValue<T>(key)
      return value
    } catch (error) {
      console.error(`[Setup Store] Failed to get value for key ${key}:`, error)
      return undefined
    }
  }

  /**
   * Set value with custom key
   * @param key Custom key
   * @param value Custom value
   */
  const setValue = async <T>(key: string, value: T): Promise<void> => {
    try {
      await setupP.setValue(key, value)
      // debugger
      // 更新本地数据
      setupData.value = { ...setupData.value, [key]: value }
    } catch (error) {
      console.error(`[Setup Store] Failed to set value for key ${key}:`, error)
    }
  }

  /**
   * Delete value by custom key
   * @param key Custom key to delete
   */
  const deleteValue = async (key: string): Promise<void> => {
    try {
      await setupP.deleteValue(key)
      // 更新本地数据
      const { [key]: _, ...rest } = setupData.value
      setupData.value = rest
    } catch (error) {
      console.error(`[Setup Store] Failed to delete value for key ${key}:`, error)
    }
  }

  /**
   * Check if key exists
   * @param key Custom key
   * @returns Boolean indicating if key exists
   */
  const hasKey = async (key: string): Promise<boolean> => {
    try {
      return await setupP.hasKey(key)
    } catch (error) {
      console.error(`[Setup Store] Failed to check existence for key ${key}:`, error)
      return false
    }
  }

  /**
   * Get all keys in the store
   * @returns Array of all keys
   */
  const getAllKeys = async (): Promise<string[]> => {
    try {
      return await setupP.getAllKeys()
    } catch (error) {
      console.error('[Setup Store] Failed to get all keys:', error)
      return []
    }
  }

  /**
   * Get all key-value pairs
   * @returns Object containing all key-value pairs
   */
  const getAllValues = async (): Promise<Record<string, unknown>> => {
    try {
      const values = await setupP.getAllValues()
      setupData.value = values || {}
      return values
    } catch (error) {
      console.error('[Setup Store] Failed to get all values:', error)
      return {}
    }
  }

  /**
   * Clear all data in the store
   */
  const clearAll = async (): Promise<void> => {
    try {
      await setupP.clearAll()
      setupData.value = {}
    } catch (error) {
      console.error('[Setup Store] Failed to clear all data:', error)
    }
  }

  /**
   * Get the global setup data (read-only)
   * @returns Current global setup data
   */
  const getGlobalSetupData = async (): Promise<Readonly<Record<string, unknown>>> => {
    try {
      return await setupP.getGlobalSetupData()
    } catch (error) {
      console.error('[Setup Store] Failed to get global setup data:', error)
      return {}
    }
  }

  /**
   * Get store size (number of keys)
   * @returns Number of keys in the store
   */
  const getSize = async (): Promise<number> => {
    try {
      return await setupP.getSize()
    } catch (error) {
      console.error('[Setup Store] Failed to get store size:', error)
      return 0
    }
  }

  /**
   * Get store file path
   * @returns Full path to the store file
   */
  const getStorePath = async (): Promise<string> => {
    try {
      return await setupP.getStorePath()
    } catch (error) {
      console.error('[Setup Store] Failed to get store path:', error)
      return ''
    }
  }

  // 计算属性：当前setup数据的响应式版本
  const currentSetupData = computed(() => setupData.value)

  // 计算属性：当前keys列表
  const keys = computed(() => Object.keys(setupData.value))

  // 计算属性：store大小
  const size = computed(() => Object.keys(setupData.value).length)

  return {
    // 数据
    setupData: currentSetupData,
    keys,
    size,
    selectDownloadDirectory,
    // 操作方法
    syncFromMain,
    getValue,
    setValue,
    deleteValue,
    hasKey,
    getAllKeys,
    getAllValues,
    clearAll,
    getGlobalSetupData,
    getSize,
    getStorePath,
    openDownloadDirectory
  }
})
