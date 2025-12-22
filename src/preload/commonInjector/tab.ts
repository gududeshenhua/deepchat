// tab.js
class TabManager {
  constructor() {}

  // 内部初始化方法

  // tab 操作
  async actionTab(action, args) {
    console.log(action, args)
    const tabId = await this.getCurrentTabId()
    // debugger
    globalThis.PresenterFactory.usePresenter('tabPresenter').actionTab(tabId, action, args)
  }

  // 获取 tabs
  async getTabs() {
    const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
    const tabsData =
      await globalThis.PresenterFactory.usePresenter('tabPresenter').getWindowTabsData(windowId)
    return tabsData
  }

  // 获取当前 tab
  async getCurrentTabId() {
    const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
    return globalThis.PresenterFactory.usePresenter('tabPresenter').getActiveTabId(windowId)
  }

  // 创建新标签页
  async createTab(url, options = {}) {
    try {
      // 获取当前窗口ID
      const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
      // 调用后端的createTab方法
      const tabId = await globalThis.PresenterFactory.usePresenter('tabPresenter').createTab(
        windowId,
        url,
        options
      )

      return tabId
    } catch (error) {
      console.error('创建标签页时发生错误:', error)
      return null
    }
  }

  // 关闭指定标签页
  async closeTab(tabId) {
    try {
      const result = await globalThis.PresenterFactory.usePresenter('tabPresenter').closeTab(tabId)
      return result
    } catch (error) {
      console.error('关闭标签页时发生错误:', error)
      return false
    }
  }

  // 关闭当前窗口的所有标签页
  async closeTabs() {
    try {
      const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
      // debugger
      await globalThis.PresenterFactory.usePresenter('tabPresenter').closeTabs(windowId)
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
      const result = await globalThis.PresenterFactory.usePresenter('tabPresenter').switchTab(tabId)
      return result
    } catch (error) {
      console.error('切换标签页时发生错误:', error)
      return false
    }
  }

  // 打开右侧边栏
  async openRightSidebar(url) {
    try {
      const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
      const result = await globalThis.PresenterFactory.usePresenter(
        'tabPresenter'
      ).openRightSidebar(windowId, url)
      return result
    } catch (error) {
      console.error('打开右侧边栏时发生错误:', error)
      return false
    }
  }

  // 关闭右侧边栏
  async closeRightSidebar() {
    try {
      const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
      const result =
        await globalThis.PresenterFactory.usePresenter('tabPresenter').closeRightSidebar(windowId)
      return result
    } catch (error) {
      console.error('关闭右侧边栏时发生错误:', error)
      return false
    }
  }

  // 切换右侧边栏
  async toggleRightSidebar(url) {
    try {
      const windowId = globalThis.api.getWindowId ? globalThis.api.getWindowId() : 1
      const result = await globalThis.PresenterFactory.usePresenter(
        'tabPresenter'
      ).toggleRightSidebar(windowId, url)
      return result
    } catch (error) {
      console.error('切换右侧边栏时发生错误:', error)
      return false
    }
  }
}

export default TabManager
