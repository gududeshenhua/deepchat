// hideWebCon.js
;(function (global) {
  class HiddenWebContentsManager {
    constructor() {
      this.hiddenWebContentsPresenter = global.PresenterFactory.usePresenter('hideWebConPresenter')
      this._initialized = true
    }

    /**
     * 创建隐藏的WebContentsView
     * @param {Object} options - 创建选项
     * @param {string} options.url - 加载的URL
     * @param {Object} options.webPreferences - WebPreferences配置
     * @param {boolean} options.visible - 是否可见
     * @returns {Promise<number>} WebContents ID
     */
    async createHiddenWebContents(options) {
      try {
        const id = await this.hiddenWebContentsPresenter.createHiddenWebContents(options)
        console.log(`Hidden web contents created with ID: ${id}`)
        return id
      } catch (error) {
        console.error('Failed to create hidden web contents:', error)
        throw error
      }
    }

    /**
     * 关闭隐藏的WebContentsView
     * @param {number} id - WebContents ID
     * @returns {Promise<boolean>} 是否成功关闭
     */
    async closeHiddenWebContents(id) {
      try {
        const success = await this.hiddenWebContentsPresenter.closeHiddenWebContents(id)
        console.log(`Hidden web contents ${id} closed: ${success}`)
        return success
      } catch (error) {
        console.error(`Failed to close hidden web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 根据ID获取WebContentsView实例
     * @param {number} id - WebContents ID
     * @returns {Promise<Object>} WebContentsView实例
     */
    async getHiddenWebContents(id) {
      try {
        const view = await this.hiddenWebContentsPresenter.getHiddenWebContents(id)
        console.log(`Retrieved hidden web contents: ${id}`)
        return view
      } catch (error) {
        console.error(`Failed to get hidden web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 根据ID获取WebContents状态数据
     * @param {number} id - WebContents ID
     * @returns {Promise<Object>} WebContents状态数据
     */
    async getHiddenWebContentsData(id) {
      try {
        const data = await this.hiddenWebContentsPresenter.getHiddenWebContentsData(id)
        console.log(`Retrieved hidden web contents data: ${id}`)
        return data
      } catch (error) {
        console.error(`Failed to get hidden web contents data ${id}:`, error)
        throw error
      }
    }

    /**
     * 获取所有隐藏的WebContentsView实例
     * @returns {Promise<Map>} 所有WebContentsView实例的Map
     */
    async getAllHiddenWebContents() {
      try {
        const webContentsMap = await this.hiddenWebContentsPresenter.getAllHiddenWebContents()
        console.log(`Retrieved ${webContentsMap.size} hidden web contents`)
        return webContentsMap
      } catch (error) {
        console.error('Failed to get all hidden web contents:', error)
        throw error
      }
    }

    /**
     * 获取所有隐藏WebContents的状态数据
     * @returns {Promise<Array>} 所有WebContents状态数据的数组
     */
    async getAllHiddenWebContentsData() {
      try {
        const dataArray = await this.hiddenWebContentsPresenter.getAllHiddenWebContentsData()
        console.log(`Retrieved ${dataArray.length} hidden web contents data`)
        return dataArray
      } catch (error) {
        console.error('Failed to get all hidden web contents data:', error)
        throw error
      }
    }

    // ========== DOM操作相关方法 ==========

    /**
     * 执行脚本代码
     * @param {number} id - WebContents ID
     * @param {string} script - 要执行的JavaScript代码
     * @returns {Promise<any>} 脚本执行结果
     */
    async executeJavaScript(id, script) {
      try {
        const result = await this.hiddenWebContentsPresenter.executeJavaScript(id, script)
        console.log(`Executed JavaScript in web contents ${id}`)
        return result
      } catch (error) {
        console.error(`Failed to execute JavaScript in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 等待页面中出现指定的DOM元素
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @param {number} timeout - 超时时间（毫秒），默认30000
     * @returns {Promise<boolean>} 是否找到元素
     */
    async waitForElement(id, selector, timeout = 30000) {
      try {
        const found = await this.hiddenWebContentsPresenter.waitForElement(id, selector, timeout)
        console.log(`Element ${selector} ${found ? 'found' : 'not found'} in web contents ${id}`)
        return found
      } catch (error) {
        console.error(`Failed to wait for element in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 判定页面是否包含指定的元素
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @returns {Promise<boolean>} 是否包含元素
     */
    async hasElement(id, selector) {
      try {
        const has = await this.hiddenWebContentsPresenter.hasElement(id, selector)
        console.log(`Element ${selector} ${has ? 'exists' : 'does not exist'} in web contents ${id}`)
        return has
      } catch (error) {
        console.error(`Failed to check element in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 查询指定输入框的内容
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @returns {Promise<string>} 输入框的值
     */
    async getInputValue(id, selector) {
      try {
        const value = await this.hiddenWebContentsPresenter.getInputValue(id, selector)
        console.log(`Retrieved input value from ${selector} in web contents ${id}: ${value}`)
        return value
      } catch (error) {
        console.error(`Failed to get input value from web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 设置输入框的值
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @param {string} value - 要设置的值
     * @returns {Promise<boolean>} 是否成功设置
     */
    async setInputValue(id, selector, value) {
      try {
        const success = await this.hiddenWebContentsPresenter.setInputValue(id, selector, value)
        console.log(`Set input value for ${selector} in web contents ${id}: ${success}`)
        return success
      } catch (error) {
        console.error(`Failed to set input value in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 给选择框赋值
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @param {boolean} value - 要设置的值，默认true
     * @returns {Promise<boolean>} 是否成功设置
     */
    async setCheckboxValue(id, selector, value = true) {
      try {
        const success = await this.hiddenWebContentsPresenter.setCheckboxValue(id, selector, value)
        console.log(`Set checkbox value for ${selector} in web contents ${id}: ${success}`)
        return success
      } catch (error) {
        console.error(`Failed to set checkbox value in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 点击指定的元素
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @returns {Promise<boolean>} 是否成功点击
     */
    async clickElement(id, selector) {
      try {
        const success = await this.hiddenWebContentsPresenter.clickElement(id, selector)
        console.log(`Clicked element ${selector} in web contents ${id}: ${success}`)
        return success
      } catch (error) {
        console.error(`Failed to click element in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 根据文本匹配去点击一个元素
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @param {string} text - 要匹配的文本
     * @returns {Promise<boolean>} 是否成功点击
     */
    async clickElementByText(id, selector, text) {
      try {
        const success = await this.hiddenWebContentsPresenter.clickElementByText(id, selector, text)
        console.log(`Clicked element ${selector} with text "${text}" in web contents ${id}: ${success}`)
        return success
      } catch (error) {
        console.error(`Failed to click element by text in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 根据文本匹配点击元素，并设置间隔时间
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @param {string} text - 要匹配的文本
     * @param {number} time - 间隔时间（毫秒）
     * @returns {Promise<void>}
     */
    async clickElementByTextAndInterval(id, selector, text, time) {
      try {
        await this.hiddenWebContentsPresenter.clickElementByTextAndInterval(id, selector, text, time)
        console.log(`Started interval clicking for element ${selector} with text "${text}" in web contents ${id}`)
      } catch (error) {
        console.error(`Failed to start interval clicking in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 提交表单
     * @param {number} id - WebContents ID
     * @param {string} selector - CSS选择器
     * @returns {Promise<boolean>} 是否成功提交
     */
    async submitForm(id, selector) {
      try {
        const success = await this.hiddenWebContentsPresenter.submitForm(id, selector)
        console.log(`Submitted form ${selector} in web contents ${id}: ${success}`)
        return success
      } catch (error) {
        console.error(`Failed to submit form in web contents ${id}:`, error)
        throw error
      }
    }

    /**
     * 等待指定时间
     * @param {number} time - 等待时间（毫秒）
     * @returns {Promise<number>} 实际等待的时间
     */
    async sleep(time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(time)
        }, time)
      });
    }

    
  }

  // 实例化并暴露
  global.HiddenWebContentsManager = new HiddenWebContentsManager()
})(this)