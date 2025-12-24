// import { app, ipcMain, IpcMainInvokeEvent } from 'electron'
// import { Server } from 'http'
// import { createServer } from 'https'
import { createServer } from 'http'

// import * as fs from 'fs'
// import * as path from 'path'
import { URL } from 'url'
import { presenter } from './presenter'

interface HTTPCallContext {
  remoteAddress: string
  userAgent: string
  method: string
  url: string
  timestamp: number
}

// HTTP API 服务类
export class HttpApiService {
  private server: any = null
  private port: number = 9000 // 默认端口
  private readonly allowedOrigins: string[] = ['*'] // 可以配置CORS
  private readonly maxPayloadSize: number = 10 * 1024 * 1024 // 10MB

  constructor(port?: number) {
    if (port) {
      this.port = port
    }
  }

  /**
   * 启动HTTP API服务
   */
  async start(): Promise<void> {
    return new Promise((resolve, reject) => {
      // 创建HTTP服务器
      this.server = createServer(this.handleRequest.bind(this))

      this.server.on('error', (err: NodeJS.ErrnoException) => {
        console.error('[HTTP API] Server error:', err)
        reject(err)
      })

      this.server.listen(this.port, 'localhost', () => {
        console.log(`[HTTP API] Server running on http://localhost:${this.port}`)
        console.log(`[HTTP API] API endpoints available for external applications`)
        resolve()
      })
    })
  }

  /**
   * 停止HTTP API服务
   */
  async stop(): Promise<void> {
    if (this.server) {
      return new Promise((resolve) => {
        this.server!.close(() => {
          console.log(`[HTTP API] Server stopped`)
          this.server = null
          resolve()
        })
      })
    }
  }

  /**
   * 处理HTTP请求
   */
  private async handleRequest(req: any, res: any): Promise<void> {
    const startTime = Date.now()
    const context: HTTPCallContext = {
      remoteAddress: req.socket.remoteAddress || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown',
      method: req.method,
      url: req.url,
      timestamp: Date.now()
    }

    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', this.getAllowedOrigin(req.headers.origin))
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    // 处理预检请求
    if (req.method === 'OPTIONS') {
      res.writeHead(200)
      res.end()
      return
    }

    try {
      // 解析URL
      const parsedUrl = new URL(`http://localhost${req.url}`)
      const pathParts = parsedUrl.pathname.split('/').filter((p) => p)

      // 路由处理
      if (pathParts[0] === 'api' && pathParts[1]) {
        if (pathParts[1] === 'call' && req.method === 'POST') {
          await this.handleCallEndpoint(req, res, context)
        } else if (pathParts[1] === 'status' && req.method === 'GET') {
          await this.handleStatusEndpoint(req, res, context)
        } else {
          this.sendErrorResponse(res, 404, 'Endpoint not found')
        }
      } else {
        this.sendErrorResponse(res, 404, 'API endpoint not found')
      }
    } catch (error) {
      console.error(`[HTTP API] Request error:`, error)
      this.sendErrorResponse(res, 500, 'Internal server error')
    } finally {
      const duration = Date.now() - startTime
      console.log(`[HTTP API] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`)
    }
  }

  /**
   * 处理API调用端点
   */
  private async handleCallEndpoint(req: any, res: any, _context: HTTPCallContext): Promise<void> {
    // 检查内容类型
    if (req.headers['content-type'] !== 'application/json') {
      this.sendErrorResponse(res, 400, 'Content-Type must be application/json')
      return
    }

    // 读取请求体
    let body = ''
    req.on('data', (chunk) => {
      if (body.length > this.maxPayloadSize) {
        req.destroy()
        return
      }
      body += chunk.toString()
    })

    req.on('end', async () => {
      try {
        const requestData = JSON.parse(body)
        const { presenterName, methodName, ...payload } = requestData

        if (!presenterName || !methodName) {
          this.sendErrorResponse(res, 400, 'presenterName and methodName are required')
          return
        }

        // 调用对应的presenter方法
        const result = await this.callPresenterMethod(presenterName, methodName, payload.args || [])

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(
          JSON.stringify({
            success: true,
            result,
            request: { presenterName, methodName, args: payload.args || [] }
          })
        )
      } catch (error: any) {
        console.error(`[HTTP API] Call endpoint error:`, error)
        this.sendErrorResponse(res, 400, error.message || 'Invalid request body')
      }
    })
  }

  /**
   * 处理状态端点
   */
  private async handleStatusEndpoint(
    _req: any,
    res: any,
    _context: HTTPCallContext
  ): Promise<void> {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        status: 'running',
        port: this.port,
        uptime: process.uptime(),
        timestamp: Date.now()
      })
    )
  }

  /**
   * 调用presenter方法（映射到现有的IPC调用）
   */
  private async callPresenterMethod(
    presenterName: string,
    methodName: string,
    args: any[]
  ): Promise<any> {
    // 通过名称获取对应的Presenter实例
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calledPresenter: any = presenter[presenterName as keyof typeof presenter]

    if (!calledPresenter) {
      throw new Error(`Presenter "${presenterName}" not found`)
    }

    // 检查方法是否存在且为函数
    if (typeof calledPresenter[methodName] === 'function') {
      // 调用方法并返回结果
      return await calledPresenter[methodName](...args)
    } else {
      throw new Error(`Method "${methodName}" not found or not a function on "${presenterName}"`)
    }
  }

  /**
   * 发送错误响应
   */
  private sendErrorResponse(res: any, statusCode: number, message: string): void {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        success: false,
        error: message
      })
    )
  }

  /**
   * 获取允许的源（CORS）
   */
  private getAllowedOrigin(origin: string | undefined): string {
    if (!origin) return this.allowedOrigins[0] || '*'

    if (this.allowedOrigins.includes('*')) return '*'

    return this.allowedOrigins.includes(origin) ? origin : this.allowedOrigins[0] || '*'
  }

  /**
   * 获取当前服务器状态
   */
  isRunning(): boolean {
    return this.server !== null
  }

  /**
   * 获取服务器端口
   */
  getPort(): number {
    return this.port
  }
}

// 创建全局实例
export const httpApiService = new HttpApiService()
