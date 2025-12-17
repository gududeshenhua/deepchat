import { dialog, app } from 'electron'
import { ICustomSQLitePresenter } from '@shared/presenter'
import os from 'os'
import { IIpWhitelistPresenter } from '@shared/presenter'
// 工具函数：判断字符串是否为 Base64
// function isBase64(str: string): boolean {
//   try {
//     return Buffer.from(str, 'base64').toString('base64') === str
//   } catch {
//     return false
//   }
// }

// 获取本机 IP 列表
// function

// IP 白名单 Presenter
export class IpWhitelistPresenter implements IIpWhitelistPresenter {
  private sqlitePresenter: ICustomSQLitePresenter
  private tableName: string = 'ip_whitelist'

  constructor(sqlitePresenter: ICustomSQLitePresenter) {
    this.sqlitePresenter = sqlitePresenter
    this.init()
  }

  async init(): Promise<void> {
    // 使用 SQLitePresenter 创建表
    await this.sqlitePresenter.createTable(
      this.tableName,
      `
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT NOT NULL
    `
    )
  }

  // 添加 IP（支持普通和 Base64）
  async addIP(ipString: string): Promise<string> {
    let decoded = ipString

    // if (isBase64(ipString)) {
    //   decoded = Buffer.from(ipString, 'base64').toString('utf-8')
    // }

    await this.sqlitePresenter.insert(this.tableName, { ip: decoded })
    return decoded
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

  async removeIP(ip: string): Promise<void> {
    await this.sqlitePresenter.deleteById(this.tableName, { ip })
  }

  async getWhitelist(): Promise<string[]> {
    const rows = await this.sqlitePresenter.getAllData(this.tableName)
    return rows.map((r: any) => r.ip)
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

    if (!isValid) {
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
    // 白名单 Presenter 不需要特殊清理，SQLite 连接由主 Presenter 管理
  }
}
