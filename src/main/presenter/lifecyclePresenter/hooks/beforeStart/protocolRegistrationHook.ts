/**
 * Protocol registration hook for init phase
 * Registers deepcdn and imgcache protocols
 */

import { protocol, app, net } from 'electron'
import { LifecycleHook, LifecycleContext } from '@shared/presenter'
import path from 'path'
import fs from 'fs'
import { is } from '@electron-toolkit/utils'
import { LifecyclePhase } from '@shared/lifecycle'
const url = require('url')

/**
 * 注册自定义协议
 * @param {string} protocolName - 协议名，例如 'localhome'
 * @param {object} options - 可选参数
 *        options.basePath - 基础路径，默认为 app.getAppPath()
 *        options.notFoundPage - 404 页面相对路径，默认 'page/404.html'
 */
function registerCustomProtocol(protocolName, options: any = {}) {
  const basePath = options.basePath || app.getAppPath()
  const notFoundPage = options.notFoundPage || 'page/404.html'

  protocol.handle(protocolName, async (request) => {
    try {
      // console.log('registerCustomProtocol', request.url)
      // 提取路径
      let filePath = request.url
        .replace(new RegExp(`^${protocolName}:\\/\\/`), '') // 去掉协议头
        .split(/[?#]/)[0] // 去掉 ? 和 # 参数
        .replace(/^\/+/, '') // 去掉开头多余斜杠
        .replace(/\/+$/, '') // 去掉结尾多余斜杠
      console.log('filePath-------------------', filePath)
      let absolutePath = path.join(basePath, filePath)
      console.log('absolutePath-------------------', absolutePath)
      // fallback to resources/app
      if (!fs.existsSync(absolutePath)) {
        const externalPath = path.join(process.resourcesPath, 'page', filePath)
        if (fs.existsSync(externalPath)) absolutePath = externalPath
      }

      // 404 fallback
      if (!fs.existsSync(absolutePath)) {
        const notFoundPath = path.join(basePath, notFoundPage)
        if (fs.existsSync(notFoundPath)) {
          return await net.fetch(url.pathToFileURL(notFoundPath).toString())
        } else {
          return new Response('404 Page Not Found', { status: 404 })
        }
      }

      // 返回文件
      const fileUrl = url.pathToFileURL(absolutePath).toString()
      return await net.fetch(fileUrl)
    } catch (err) {
      console.error(`Error in ${protocolName} protocol:`, err)
      return new Response('Internal Server Error', { status: 500 })
    }
  })
}

export const protocolRegistrationHook: LifecycleHook = {
  name: 'protocol-registration',
  phase: LifecyclePhase.BEFORE_START,
  priority: 1,
  critical: true,
  execute: async (_context: LifecycleContext) => {
    console.log('protocolRegistrationHook: Registering application protocols')

    // Register 'deepcdn' protocol for loading built-in resources (simulating CDN)
    protocol.handle('deepcdn', (request) => {
      try {
        const filePath = request.url.slice('deepcdn://'.length)
        // Determine resource path based on dev/production environment
        const candidates = is.dev
          ? [path.join(app.getAppPath(), 'resources')]
          : [
              path.join(process.resourcesPath, 'app.asar.unpacked', 'resources'),
              path.join(process.resourcesPath, 'resources'),
              process.resourcesPath
            ]
        const baseResourcesDir =
          candidates.find((p) => fs.existsSync(path.join(p, 'cdn'))) || candidates[0]

        const fullPath = path.join(baseResourcesDir, 'cdn', filePath)

        // Determine MIME type based on file extension
        let mimeType = 'application/octet-stream' // Default type
        if (filePath.endsWith('.js')) {
          mimeType = 'text/javascript'
        } else if (filePath.endsWith('.css')) {
          mimeType = 'text/css'
        } else if (filePath.endsWith('.json')) {
          mimeType = 'application/json'
        } else if (filePath.endsWith('.wasm')) {
          mimeType = 'application/wasm'
        } else if (filePath.endsWith('.data')) {
          mimeType = 'application/octet-stream'
        } else if (filePath.endsWith('.html')) {
          mimeType = 'text/html'
        }

        // Check if file exists
        if (!fs.existsSync(fullPath)) {
          console.warn(`protocolRegistrationHook: deepcdn handler: File not found: ${fullPath}`)
          return new Response(`File not found: ${filePath}`, {
            status: 404,
            headers: { 'Content-Type': 'text/plain' }
          })
        }

        // Read file and return response
        const fileContent = fs.readFileSync(fullPath)
        return new Response(fileContent, {
          headers: { 'Content-Type': mimeType }
        })
      } catch (error: unknown) {
        console.error('protocolRegistrationHook: Error handling deepcdn request:', error)
        const errorMessage = error instanceof Error ? error.message : String(error)
        return new Response(`Server error: ${errorMessage}`, {
          status: 500,
          headers: { 'Content-Type': 'text/plain' }
        })
      }
    })

    // Register 'imgcache' protocol for handling image cache
    protocol.handle('imgcache', (request) => {
      try {
        const filePath = request.url.slice('imgcache://'.length)
        // Images are stored in the images subfolder of user data directory
        const fullPath = path.join(app.getPath('userData'), 'images', filePath)

        // Check if file exists
        if (!fs.existsSync(fullPath)) {
          console.warn(
            `protocolRegistrationHook: imgcache handler: Image file not found: ${fullPath}`
          )
          return new Response(`Image not found: ${filePath}`, {
            status: 404,
            headers: { 'Content-Type': 'text/plain' }
          })
        }

        // Determine MIME type based on file extension
        let mimeType = 'application/octet-stream' // Default type
        if (filePath.endsWith('.png')) {
          mimeType = 'image/png'
        } else if (filePath.endsWith('.gif')) {
          mimeType = 'image/gif'
        } else if (filePath.endsWith('.webp')) {
          mimeType = 'image/webp'
        } else if (filePath.endsWith('.svg')) {
          mimeType = 'image/svg+xml'
        } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
          mimeType = 'image/jpeg'
        } else if (filePath.endsWith('.bmp')) {
          mimeType = 'image/bmp'
        } else if (filePath.endsWith('.ico')) {
          mimeType = 'image/x-icon'
        } else if (filePath.endsWith('.avif')) {
          mimeType = 'image/avif'
        }

        // Read file and return response
        const fileContent = fs.readFileSync(fullPath)
        return new Response(fileContent, {
          headers: { 'Content-Type': mimeType }
        })
      } catch (error: unknown) {
        console.error('protocolRegistrationHook: Error handling imgcache request:', error)
        const errorMessage = error instanceof Error ? error.message : String(error)
        return new Response(`Server error: ${errorMessage}`, {
          status: 500,
          headers: { 'Content-Type': 'text/plain' }
        })
      }
    })

    console.log('protocolRegistrationHook: Application protocols registered successfully')

    // Register 'local' protocol
    // protocol.handle('local', async (request) => {
    //   try {
    //     const filePath = request.url
    //       .replace(/^local:\/\//, '')  // 去掉协议头
    //       .split(/[?#]/)[0]            // 去掉 ? 或 # 参数
    //       .replace(/^\/+/, '')         // 去掉开头多余斜杠
    //       .replace(/\/+$/, '')

    //     let basePath = app.getAppPath()
    //     let absolutePath = path.join(basePath, filePath)

    //     // fallback to external app path
    //     if (!fs.existsSync(absolutePath)) {
    //       const externalPath = path.join(process.resourcesPath, 'app', filePath)
    //       if (fs.existsSync(externalPath)) absolutePath = externalPath
    //     }

    //     // 404 fallback
    //     if (!fs.existsSync(absolutePath)) {
    //       const notFoundPath = path.join(basePath, 'page/404.html')
    //       if (fs.existsSync(notFoundPath)) {
    //         return await net.fetch(url.pathToFileURL(notFoundPath).toString())
    //       } else {
    //         return new Response('404 Page Not Found', { status: 404 })
    //       }
    //     }

    //     const fileUrl = url.pathToFileURL(absolutePath).toString()
    //     return await net.fetch(fileUrl)
    //   } catch (err) {
    //     console.error('Error in local protocol:', err)
    //     return new Response('Internal Server Error', { status: 500 })
    //   }
    // })
    //加载本地文件
    registerCustomProtocol('local')
    //加载框架自带spa
    registerCustomProtocol('home')

    protocol.registerBufferProtocol('json', (request, callback) => {
      console.log('request', request)
      const filePath = path.join(app.getAppPath(), request.url.replace('json://', ''))
      console.log('filePath', filePath)
      if (!fs.existsSync(filePath)) {
        callback({
          statusCode: 404,
          headers: { 'Content-Type': 'text/plain' },
          data: Buffer.from('Not Found')
        })
        return
      }

      const data = fs.readFileSync(filePath)
      let mime = 'text/plain'
      if (filePath.endsWith('.js')) mime = 'application/javascript'
      if (filePath.endsWith('.json')) mime = 'application/json'

      callback({ statusCode: 200, headers: { 'Content-Type': mime }, data })
    })
  }
}
