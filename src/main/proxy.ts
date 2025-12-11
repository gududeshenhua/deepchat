import { createServer, request as requestFun } from 'http'
import { net, session } from 'electron'
// const fs = require("fs").promises;
// const log = require('electron-log');
// import { callScriptFile } from "./tools";

export function createHttpServer() {
  //创建http服务
  const server = createServer(processHttpRequest)
  server.listen(8021, '127.0.0.1', () => {
    console.log('HTTP server running on 8021')
  })
}

async function processHttpRequest(request, response) {
  console.log(request.url)
  //允许跨域访问
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Authorization')
  if (request.method === 'OPTIONS') {
    // 处理预检请求
    response.writeHead(200)
    response.end()
    return
  }
  const url = request.url
  const urlObj = new URL(`http://localhost${url}`)
  const pathname = urlObj.pathname
  // const searchParams = urlObj.searchParams;

  //  // 🚨 1. mock SSE 必须最先处理
  // if (pathname === '/scripts/proxy/mock/sse') {
  //     console.log("mock SSE start");

  //     response.writeHead(200, {
  //         "Content-Type": "text/event-stream; charset=utf-8",
  //         "Cache-Control": "no-cache",
  //         "Connection": "keep-alive",
  //         "Access-Control-Allow-Origin": "*"
  //     });

  //     response.flushHeaders();

  //     let i = 0;
  //     const words = ["准备", "抓取页面", "解析", "生成结论", "完成"];

  //     const timer = setInterval(() => {
  //         if (i < words.length) {
  //             const payload = { index: i, content: words[i] };
  //             response.write(`data: ${JSON.stringify(payload)}\n\n`);
  //             i++;
  //         } else {
  //             clearInterval(timer);
  //             response.end();
  //         }
  //     }, 500);

  //     request.on("close", () => {
  //         clearInterval(timer);
  //         response.end();
  //     });

  //     return; // ← 关键，一定要 return！
  // }
  let bodyContent = ''
  request.on('data', function (chunk) {
    bodyContent += chunk.toString()
  })
  request.on('end', async function () {
    let postData: any = null
    if (bodyContent.length > 0) {
      try {
        postData = JSON.parse(bodyContent)
      } catch (err) {
        console.log('bad json:', bodyContent)
        response.writeHeader(400, { 'Content-Type': 'Application/json' })
        response.end('Bad body:' + bodyContent)
        return
      }
    }
    console.info('request:', url)
    // 代理其他接口
    if (pathname.startsWith('/scripts/proxy')) {
      if (pathname === '/scripts/proxy/sse') {
        try {
          const { url: targetUrl, method, headers, body } = postData || {}
          if (!targetUrl) {
            response.writeHeader(400, { 'Content-Type': 'Application/json' })
            response.end(JSON.stringify({ error: 'missing url' }))
            return
          }
          const origin = new URL(targetUrl).origin
          const cookies = await session.defaultSession.cookies.get({ url: origin })
          const cookieHeader = cookies.map((c) => `${c.name}=${c.value}`).join('; ')
          console.log('cookieHeader:', cookieHeader)
          const req = net.request({ url: targetUrl, method: (method || 'GET').toUpperCase() })
          const mergedHeaders: Record<string, string> = {
            ...(headers || {}),
            Referer: headers?.Referer || origin,
            Cookie: [headers?.Cookie, cookieHeader].filter(Boolean).join('; '),
            Accept: headers?.Accept || 'text/event-stream'
          }
          Object.entries(mergedHeaders).forEach(([k, v]) => {
            if (v) req.setHeader(k, v)
          })
          if (body && method && method.toUpperCase() !== 'GET') {
            req.write(JSON.stringify(body))
          }
          req.on('response', (proxyRes) => {
            console.log('---------sse success-------:', proxyRes)
            const headersOut = {
              'Content-Type':
                proxyRes.headers['content-type'] || 'text/event-stream; charset=utf-8',
              'Cache-Control': 'no-cache',
              Connection: 'keep-alive',
              ...proxyRes.headers
            }
            console.log('headersOut:', headersOut)
            response.writeHead(proxyRes.statusCode || 200, headersOut)
            proxyRes.on('data', (chunk) => {
              try {
                response.write(chunk)
              } catch (_) {}
            })
            proxyRes.on('end', () => {
              try {
                response.end()
              } catch (_) {}
            })
            proxyRes.on('error', () => {
              try {
                response.end()
              } catch (_) {}
            })
          })
          req.on('error', (err) => {
            console.log('---------sse error-------:', err)
            response.writeHeader(500, { 'Content-Type': 'Application/json' })
            response.end(JSON.stringify({ error: String(err) }))
          })
          req.end()
        } catch (err) {
          response.writeHeader(500, { 'Content-Type': 'Application/json' })
          response.end(JSON.stringify({ error: String(err) }))
        }
        return
      } else if (pathname === '/scripts/proxy/http') {
        try {
          const { url: targetUrl, method, headers, body } = postData || {}
          if (!targetUrl) {
            response.writeHeader(400, { 'Content-Type': 'Application/json' })
            response.end(JSON.stringify({ error: 'missing url' }))
            return
          }
          const origin = new URL(targetUrl).origin
          const cookies = await session.defaultSession.cookies.get({ url: origin })
          console.log(
            '%c [ cookies ]-111',
            'font-size:13px; background:pink; color:#bf2c9f;',
            cookies
          )
          const cookieHeader = cookies.map((c) => `${c.name}=${c.value}`).join('; ')
          const mergedHeaders = {
            ...(headers || {}),
            Referer: headers?.Referer || origin,
            Cookie: [headers?.Cookie, cookieHeader].filter(Boolean).join('; ')
          }
          console.log(
            '%c [ mergedHeaders ]-119',
            'font-size:13px; background:pink; color:#bf2c9f;',
            mergedHeaders
          )
          const res = await net.fetch(targetUrl, {
            method: (method || 'GET').toUpperCase(),
            headers: mergedHeaders,
            body:
              method && method.toUpperCase() !== 'GET' && body ? JSON.stringify(body) : undefined
          })
          const ct = res.headers.get('content-type') || 'application/json; charset=utf-8'
          const txt = await res.text()
          response.writeHeader(res.status, { 'Content-Type': ct })
          response.end(txt)
          console.log('---------http success-------:', txt)
        } catch (err) {
          console.log('---------http error-------:', err)
          response.writeHeader(500, { 'Content-Type': 'Application/json' })
          response.end(JSON.stringify({ error: String(err) }))
        }
        return
      } else if (pathname === '/scripts/proxy/sendQuery.js') {
        const curPostData = { ...postData }
        const { department_id, app_id, conversation_id, stream, scriptProxyUrl, query, headers } =
          curPostData
        let data = postData
        data = {
          app_id,
          department_id,
          conversation_id,
          stream,
          query
        }
        const targetUrl = scriptProxyUrl // 目标接口地址
        const proxyRequest = requestFun(
          targetUrl,
          {
            method: request.method,
            headers: headers ? headers : request.headers,
            ...(stream ? { responseType: 'stream' } : {})
          },
          (proxyResponse) => {
            // 将目标接口的响应返回给前端
            response.writeHead(proxyResponse.statusCode, proxyResponse.headers)
            proxyResponse.pipe(response)
          }
        )
        proxyRequest.write(JSON.stringify(data)) // 将请求体写入代理请求
        proxyRequest.end() // 结束代理请求
        return
      } else if (pathname === '/scripts/proxy/mock/sse') {
        // 将请求体转发到目标接口
        // request.pipe(proxyRequest);
        console.log('---------mock sse request-------:', postData)
        response.writeHead(200, {
          'Content-Type': 'text/event-stream; charset=utf-8',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
          'Access-Control-Allow-Origin': '*'
        })
        response.flushHeaders() // 关键：强制推送给 EventSource
        let i = 0
        const words = ['正在准备', '抓取页面信息', '解析要素', '生成结论', '完成']
        const timer = setInterval(() => {
          if (i < words.length) {
            const payload = { index: i, content: words[i] }
            response.write(`data: ${JSON.stringify(payload)}\n\n`)
            i++
          } else {
            clearInterval(timer)
            response.end()
          }
        }, 500)
        request.on('close', () => {
          try {
            clearInterval(timer)
            response.end()
          } catch (_) {}
        })
        return
      }
    }

    // if(pathname.endsWith(".js") && (pathname.startsWith("/scripts/") || pathname.startsWith("/src/data"))){
    //     const params = { ...Object.fromEntries(searchParams), ...(postData || {}) };
    //     const scriptPath = import.meta.env.MODE === 'production' ? `resources/app/${pathname.substring(1)}` : pathname.substring(1);
    //     log.info("scriptPath:", scriptPath);
    //     const result = await callScriptFile(scriptPath, params);
    //     response.writeHeader(result.code, { 'Content-Type': 'Application/json' });
    //     response.end(JSON.stringify(result));
    //     return;
    // }
    response.writeHeader(404, { 'Content-Type': 'text/plain' })
    response.end('Not Found')
  })
}
