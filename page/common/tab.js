// tab.js
;(function (global) {
  class TabManager {
    constructor() {
      this.tabs = []
      this.currentTabId = null
      this.tabPresenter = global.PresenterFactory.usePresenter('tabPresenter')
      this._initialized = false // 标记是否完成初始化
      this._initPromise = this._init() // 自动初始化
    }

    // 内部初始化方法
    async _init() {
      const windowId = global.api.getWindowId ? global.api.getWindowId() : 1
      const tabsData = await this.tabPresenter.getWindowTabsData(windowId)

      // 监听 tab 列表更新
      global.electron.ipcRenderer.on('update-window-tabs', (_, windowId, tabsData) => {
        this.updateWindowTabs(windowId, tabsData)
      })

      // 监听 title 变化
      global.electron.ipcRenderer.on('tab:title-updated', (_, data) => {
        const tab = this.tabs.find((t) => t.id === data.tabId)
        if (tab) tab.title = data.title
      })

      // 初始化赋值
      if (tabsData && tabsData.length > 0) {
        this.updateWindowTabs(windowId, tabsData)
      }

      this._initialized = true
    }

    // 确保初始化完成再操作
    async _ensureInitialized() {
      if (!this._initialized) {
        await this._initPromise
      }
    }

    // 更新 tab 列表
    updateWindowTabs(windowId, tabsData) {
      this.tabs = tabsData
      tabsData.forEach((tab) => {
        if (tab.isActive) this.currentTabId = tab.id
      })
      console.log('Current Tab ID:', this.currentTabId)
    }

    // tab 操作
    async actionTab(action, args) {
      await this._ensureInitialized()
      console.log(this.currentTabId, action, args)
      // debugger
      return this.tabPresenter.actionTab(this.currentTabId, action, args)
    }

    // 获取 tabs
    async getTabs() {
      await this._ensureInitialized()
      return this.tabs.slice()
    }

    // 获取当前 tab
    async getCurrentTabId() {
      await this._ensureInitialized()
      return this.currentTabId
    }
  }

  // 实例化并暴露
  global.TabManager = new TabManager()
})(this)
