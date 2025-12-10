// tab.js
;(function (global) {
  class TabManager {
    constructor() {
      // this.tabs = []
      this.windowId = global.api.getWindowId ? global.api.getWindowId() : 1
      this.tabPresenter = global.PresenterFactory.usePresenter('tabPresenter')
      // this._initialized = false // 标记是否完成初始化
      // this._init()
    }

    // 内部初始化方法

    // tab 操作
    async actionTab(action, args) {
      console.log(action, args)
      const tabId = await this.getCurrentTabId()
      // debugger
      this.tabPresenter.actionTab(tabId, action, args)
    }
    
    // 获取 tabs
    async getTabs() {
      const tabsData = await this.tabPresenter.getWindowTabsData(this.windowId)
      return tabsData
    }

    // 获取当前 tab
    async getCurrentTabId() {
      return this.tabPresenter.getActiveTabId(this.windowId)
    }

    // 创建新标签页
    async createTab(url, options = {}) {
      
      try {
        // 获取当前窗口ID
        const windowId = global.api.getWindowId ? global.api.getWindowId() : 1
        // 调用后端的createTab方法
        const tabId = await this.tabPresenter.createTab(windowId, url, options)
        
        return tabId
      } catch (error) {
        console.error('创建标签页时发生错误:', error)
        return null
      }
    }

    // 关闭指定标签页
    async closeTab(tabId) {
      try {
        const result = await this.tabPresenter.closeTab(tabId)
        return result
      } catch (error) {
        console.error('关闭标签页时发生错误:', error)
        return false
      }
    }

    // 关闭当前窗口的所有标签页
    async closeTabs() {
      try {
        const windowId = global.api.getWindowId ? global.api.getWindowId() : 1
        // debugger
        await this.tabPresenter.closeTabs(windowId)
        // debugger
        return true
      } catch (error) {
        console.error('关闭所有标签页时发生错误:', error)
        return false
      }
    }

    // 激活/切换标签页
    async switchTab(tabId) {
      
      try {
        const result = await this.tabPresenter.switchTab(tabId)
        return result
      } catch (error) {
        console.error('切换标签页时发生错误:', error)
        return false
      }
    }


  }

  // 实例化并暴露
  global.TabManager = new TabManager()
})(globalThis)
