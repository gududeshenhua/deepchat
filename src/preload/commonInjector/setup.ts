/**
 * Setup Manager - 前端setup数据管理
 * 参考主程序SetupPresenter实现，提供key-value增删改查功能
 */
class SetupManager {
  constructor() {}
  /**
   * 从主程序同步数据到前端
   */
  async syncFromMain() {
    try {
      const data = await globalThis.PresenterFactory.usePresenter('setupPresenter').getAllValues()
      return data
    } catch (error) {
      console.error('[Setup Manager] Failed to sync data from main:', error)
      return {}
    }
  }

  /**
   * Get value by custom key
   * @param {string} key Custom key
   * @returns {*} Value or undefined if key doesn't exist
   */
  async getValue(key) {
    try {
      const value = await globalThis.PresenterFactory.usePresenter('setupPresenter').getValue(key)
      return value
    } catch (error) {
      console.error(`[Setup Manager] Failed to get value for key ${key}:`, error)
      return undefined
    }
  }

  /**
   * Set value with custom key
   * @param {string} key Custom key
   * @param {*} value Custom value
   */
  async setValue(key, value) {
    try {
      await globalThis.PresenterFactory.usePresenter('setupPresenter').setValue(key, value)
      // 更新本地数据
    } catch (error) {
      console.error(`[Setup Manager] Failed to set value for key ${key}:`, error)
    }
  }

  /**
   * Delete value by custom key
   * @param {string} key Custom key to delete
   */
  async deleteValue(key) {
    try {
      await globalThis.PresenterFactory.usePresenter('setupPresenter').deleteValue(key)
    } catch (error) {
      console.error(`[Setup Manager] Failed to delete value for key ${key}:`, error)
    }
  }

  /**
   * Check if key exists
   * @param {string} key Custom key
   * @returns {boolean} Boolean indicating if key exists
   */
  async hasKey(key) {
    try {
      return await globalThis.PresenterFactory.usePresenter('setupPresenter').hasKey(key)
    } catch (error) {
      console.error(`[Setup Manager] Failed to check existence for key ${key}:`, error)
      return false
    }
  }

  /**
   * Get all keys in the store
   * @returns {string[]} Array of all keys
   */
  async getAllKeys() {
    try {
      return await globalThis.PresenterFactory.usePresenter('setupPresenter').getAllKeys()
    } catch (error) {
      console.error('[Setup Manager] Failed to get all keys:', error)
      return []
    }
  }

  /**
   * Get all key-value pairs
   * @returns {Object} Object containing all key-value pairs
   */
  async getAllValues() {
    try {
      const values = await globalThis.PresenterFactory.usePresenter('setupPresenter').getAllValues()
      return values
    } catch (error) {
      console.error('[Setup Manager] Failed to get all values:', error)
      return {}
    }
  }

  /**
   * Clear all data in the store
   */
  async clearAll() {
    try {
      await globalThis.PresenterFactory.usePresenter('setupPresenter').clearAll()
    } catch (error) {
      console.error('[Setup Manager] Failed to clear all data:', error)
    }
  }

  /**
   * Get store size (number of keys)
   * @returns {number} Number of keys in the store
   */
  async getSize() {
    try {
      return await globalThis.PresenterFactory.usePresenter('setupPresenter').getSize()
    } catch (error) {
      console.error('[Setup Manager] Failed to get store size:', error)
      return 0
    }
  }

  /**
   * Get store file path
   * @returns {string} Full path to the store file
   */
  async getStorePath() {
    try {
      return await globalThis.PresenterFactory.usePresenter('setupPresenter').getStorePath()
    } catch (error) {
      console.error('[Setup Manager] Failed to get store path:', error)
      return ''
    }
  }
}
export default SetupManager
