// IpWhiteManager.js
class IpWhiteManager {
  constructor() {}

  /**
   * 获取本机IP地址列表
   * @returns {Promise<string[]>} 本机IP地址列表
   */
  async getLocalIPs() {
    try {
      // 调用whitelistPresenter中的getLocalIPs方法
      const ips = await globalThis.PresenterFactory.usePresenter('whitelistPresenter').getLocalIPs()
      console.log('Local IPs retrieved successfully:', ips)
      return ips
    } catch (error) {
      console.error('Failed to retrieve local IPs:', error)
      throw error
    }
  }

  /**
   * 检查本机IP是否在白名单中
   * @returns {Promise<boolean>} 检查结果
   */
  async checkLocalIP() {
    try {
      const result =
        await globalThis.PresenterFactory.usePresenter('whitelistPresenter').checkLocalIP()
      console.log('IP whitelist check completed')
      return result
    } catch (error) {
      console.error('Failed to check IP whitelist:', error)
      throw error
    }
  }

  /**
   * 获取IP白名单
   * @returns {Promise<string[]>} IP白名单列表
   */
  async getWhitelist() {
    try {
      const whitelist =
        await globalThis.PresenterFactory.usePresenter('whitelistPresenter').getWhitelist()
      console.log('IP whitelist retrieved successfully')
      return whitelist
    } catch (error) {
      console.error('Failed to retrieve IP whitelist:', error)
      throw error
    }
  }

  /**
   * 添加IP到白名单
   * @param {string} ip - 要添加的IP地址
   * @returns {Promise<string>} 添加的IP地址
   */
  async addIP(ip) {
    try {
      const result = await globalThis.PresenterFactory.usePresenter('whitelistPresenter').addIP(ip)
      console.log(`IP ${ip} added to whitelist successfully`)
      return result
    } catch (error) {
      console.error(`Failed to add IP ${ip} to whitelist:`, error)
      throw error
    }
  }

  /**
   * 从白名单中移除IP
   * @param {string} ip - 要移除的IP地址
   * @returns {Promise<void>}
   */
  async removeIP(ip) {
    try {
      await globalThis.PresenterFactory.usePresenter('whitelistPresenter').removeIP(ip)
      console.log(`IP ${ip} removed from whitelist successfully`)
    } catch (error) {
      console.error(`Failed to remove IP ${ip} from whitelist:`, error)
      throw error
    }
  }
}
export default IpWhiteManager
