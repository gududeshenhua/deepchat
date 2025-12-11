import ElectronStore from 'electron-store'
import { app, dialog, shell } from 'electron'
import path from 'path'
import fs from 'fs'
import { ISetupPresenter } from '@shared/presenter'
// Define setup settings interface
interface ISetupSettings {
  [key: string]: unknown // Allow arbitrary keys for custom key-value storage
}

// Global variable to sync with ElectronStore
// let globalSetupData: ISetupSettings = {}

export class SetupPresenter implements ISetupPresenter {
  private store: ElectronStore<ISetupSettings>
  private userDataPath: string
  private globalSetupData: ISetupSettings = {}
  constructor() {
    this.userDataPath = app.getPath('userData')
    // this.globalSetupData = {}
    // Initialize setup storage
    this.store = new ElectronStore<ISetupSettings>({
      name: 'setup',
      defaults: {
        'isc-username': '',
        'isc-password': '',
        'download-directory': path.join(this.userDataPath, 'setup-downloads'), // Default download directory
        'prompt-save-dialog': true,
        'not-show-modal-list': [],
        'menu-list': [
          { label: '首页', icon: 'mdi:home-outline', url: 'home://chat', visible: true },
          { label: '设置', icon: 'mdi:cog-outline', url: 'home://setup', visible: true },
          { label: '脚本', icon: 'mdi:script-text-outline', url: 'home://script', visible: true }
        ]
      }
    })

    // Initialize global variable with current store data
    this.syncToGlobal()
  }

  /**
   * Sync all data from ElectronStore to global variable
   */
  private syncToGlobal(): void {
    const allData = this.store.store
    this.globalSetupData = { ...allData }
  }

  // Open folder
  async openDownloadDirectory(): Promise<void> {
    const downloadDirectoryPath =
      this.getValue<string>('download-directory') || path.join(this.userDataPath, 'setup-downloads')
    console.log('Open folder', downloadDirectoryPath)
    // If folder doesn't exist, create it first
    if (!fs.existsSync(downloadDirectoryPath)) {
      fs.mkdirSync(downloadDirectoryPath, { recursive: true })
    }

    // Open folder
    await shell.openPath(downloadDirectoryPath)
  }

  async selectDownloadDirectory(): Promise<string | null> {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory']
    })
    if (result.canceled) return null
    return result.filePaths[0] // 返回真实系统路径
  }

  /**
   * Get value by custom key
   * @param key Custom key
   * @returns Value or undefined if key doesn't exist
   */
  getValue<T>(key: string): T | undefined {
    try {
      const value = this.store.get(key) as T
      return value
    } catch (error) {
      console.error(`[Setup] Failed to get value for key ${key}:`, error)
      return undefined
    }
  }

  /**
   * Set value with custom key
   * @param key Custom key
   * @param value Custom value
   */
  setValue<T>(key: string, value: T): void {
    try {
      this.store.set(key, value)
      // Sync to global variable after setting
      this.syncToGlobal()
    } catch (error) {
      console.error(`[Setup] Failed to set value for key ${key}:`, error)
    }
  }

  /**
   * Delete value by custom key
   * @param key Custom key to delete
   */
  deleteValue(key: string): void {
    try {
      this.store.delete(key)
      // Sync to global variable after deletion
      this.syncToGlobal()
    } catch (error) {
      console.error(`[Setup] Failed to delete value for key ${key}:`, error)
    }
  }

  /**
   * Check if key exists
   * @param key Custom key
   * @returns Boolean indicating if key exists
   */
  hasKey(key: string): boolean {
    try {
      return this.store.has(key)
    } catch (error) {
      console.error(`[Setup] Failed to check existence for key ${key}:`, error)
      return false
    }
  }

  /**
   * Get all keys in the store
   * @returns Array of all keys
   */
  getAllKeys(): string[] {
    try {
      const allData = this.store.store
      return Object.keys(allData)
    } catch (error) {
      console.error('[Setup] Failed to get all keys:', error)
      return []
    }
  }

  /**
   * Get all key-value pairs
   * @returns Object containing all key-value pairs
   */
  getAllValues(): ISetupSettings {
    try {
      return { ...this.store.store }
    } catch (error) {
      console.error('[Setup] Failed to get all values:', error)
      return {}
    }
  }

  /**
   * Clear all data in the store
   */
  clearAll(): void {
    try {
      this.store.clear()
      // Sync to global variable after clearing
      this.syncToGlobal()
    } catch (error) {
      console.error('[Setup] Failed to clear all data:', error)
    }
  }

  /**
   * Get the global setup data (read-only)
   * @returns Current global setup data
   */
  getGlobalSetupData(): Readonly<ISetupSettings> {
    return this.globalSetupData
  }

  /**
   * Get store size (number of keys)
   * @returns Number of keys in the store
   */
  getSize(): number {
    try {
      return Object.keys(this.store.store).length
    } catch (error) {
      console.error('[Setup] Failed to get store size:', error)
      return 0
    }
  }

  /**
   * Get store file path
   * @returns Full path to the store file
   */
  getStorePath(): string {
    return path.join(this.userDataPath, 'setup.json')
  }
}
