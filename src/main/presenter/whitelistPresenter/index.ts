import { dialog, app } from 'electron'
import { ISetupPresenter, IIpWhitelistPresenter } from '@shared/presenter'
import os from 'os'
import { base64Encode, base64Decode } from '@shared/ipCrypto'

// IP 白名单 Presenter
export class IpWhitelistPresenter implements IIpWhitelistPresenter {
  private setupPresenter: ISetupPresenter
  private readonly IP_WHITE_LIST_KEY = 'ip-white-list'

  constructor(setupPresenter: ISetupPresenter) {
    this.setupPresenter = setupPresenter
  }

  async init(): Promise<void> {
    // 初始化时确保 ip-white-list 存在且为数组
    if (!this.setupPresenter.hasKey(this.IP_WHITE_LIST_KEY)) {
      this.setupPresenter.setValue<string[]>(this.IP_WHITE_LIST_KEY, [])
    }
  }

  // 添加 IP（编码为 Base64 存储）
  async addIP(ipString: string): Promise<string> {
    const encodedIP = base64Encode(ipString)
    const currentList = this.setupPresenter.getValue<string[]>(this.IP_WHITE_LIST_KEY) || []

    // 避免重复添加
    if (!currentList.includes(encodedIP)) {
      currentList.push(encodedIP)
      this.setupPresenter.setValue<string[]>(this.IP_WHITE_LIST_KEY, currentList)
    }

    return ipString
  }

  getLocalIPs(): string[] {
    const interfaces: any = os.networkInterfaces()
    const ips: string[] = []
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          ips.push(iface.address)
        }
      }
    }
    return ips
  }
  // btoa('192.168.1.10')
  async removeIP(ip: string): Promise<void> {
    const encodedIP = base64Encode(ip)
    const currentList = this.setupPresenter.getValue<string[]>(this.IP_WHITE_LIST_KEY) || []
    const newList = currentList.filter((item: string) => item !== encodedIP)
    this.setupPresenter.setValue<string[]>(this.IP_WHITE_LIST_KEY, newList)
  }

  // 获取白名单列表（解码 Base64）
  async getWhitelist(): Promise<string[]> {
    const encodedList = this.setupPresenter.getValue<string[]>(this.IP_WHITE_LIST_KEY) || []
    return encodedList.map((encodedIP: string) => base64Decode(encodedIP))
  }

  // 判断当前机器 IP 是否在白名单里
  async checkLocalIP(): Promise<boolean> {
    const allowedIPs = await this.getWhitelist()
    const localIPs = this.getLocalIPs()

    let isValid = false
    for (const ip of localIPs) {
      if (allowedIPs.includes(ip)) {
        isValid = true
        break
      }
    }

    // 如果不在白名单中或者ip白名单不为空，则弹出警告并退出应用
    if (!isValid && allowedIPs.length > 0) {
      dialog.showErrorBox(
        '访问被拒绝',
        `当前 IP 地址 (${localIPs.join(', ')}) 不允许访问。\n应用即将关闭。`
      )
      setTimeout(() => app.exit(1), 1000)
      return false
    }

    return true
  }

  // 销毁资源
  destroy(): void {
    // 白名单 Presenter 不需要特殊清理
  }
}
