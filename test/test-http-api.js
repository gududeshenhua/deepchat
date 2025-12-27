// 示例：外部应用如何使用HTTP API调用本应用的方法
// 使用 Node.js 示例

// const http = require('http')
import http from 'http'

// 调用HTTP API的通用函数
async function callHttpApi(presenterName, methodName, args = []) {
  const postData = JSON.stringify({
    presenterName,
    methodName,
    args
  })

  const options = {
    hostname: 'localhost',
    port: 9000,
    path: '/api/call',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    })

    req.on('error', (e) => {
      reject(e)
    })

    req.write(postData)
    req.end()
  })
}

// 获取服务状态
async function getApiStatus() {
  return new Promise((resolve, reject) => {
    http
      .get('http://localhost:9000/api/status', (res) => {
        let data = ''

        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          try {
            resolve(JSON.parse(data))
          } catch (e) {
            reject(e)
          }
        })
      })
      .on('error', (e) => {
        reject(e)
      })
  })
}

// 示例用法
async function example() {
  try {
    // 检查API服务状态
    console.log('检查API服务状态...')
    const status = await getApiStatus()
    console.log('API状态:', status)

    // // 调用setupPresenter的getValue方法
    // console.log('\n调用 getValue 方法...')
    // const result = await callHttpApi('setupPresenter', 'getValue', ['download-directory'])
    // console.log('获取下载目录:', result)

    // // 调用setupPresenter的setValue方法
    // console.log('\n调用 setValue 方法...')
    // const setResult = await callHttpApi('setupPresenter', 'setValue', ['test-key', 'test-value'])
    // console.log('设置值结果:', setResult)

    // // 再次获取值以验证
    // console.log('\n再次获取测试值...')
    // const getResult = await callHttpApi('setupPresenter', 'getValue', ['test-key'])
    // console.log('获取测试值:', getResult)

    // 测试设置Cookie
    console.log('\n测试设置 Cookie...')
    const cookieData =
      'W3siZG9tYWluIjoiIiwiZXhwaXJhdGlvbkRhdGUiOjE3OTgxOTUxODQuNjYyOTgzLCJob3N0T25seSI6dHJ1ZSwiaHR0cE9ubHkiOmZhbHNlLCJuYW1lIjoiYmNlLWF1dGgtdHlwZSIsInBhdGgiOiIvIiwic2FtZVNpdGUiOiJsYXgiLCJzZWN1cmUiOmZhbHNlLCJzZXNzaW9uIjpmYWxzZSwic3RvcmVJZCI6bnVsbCwidmFsdWUiOiJCQ0lBIn0seyJkb21haW4iOiIiLCJleHBpcmF0aW9uRGF0ZSI6MTc5ODE5NTE4NC42NjI5MTgsImhvc3RPbmx5Ijp0cnVlLCJodHRwT25seSI6dHJ1ZSwibmFtZSI6ImJjZS1zZXNzaW9uaWQiLCJwYXRoIjoiLyIsInNhbWVTaXRlIjoibGF4Iiwic2VjdXJlIjpmYWxzZSwic2Vzc2lvbiI6ZmFsc2UsInN0b3JlSWQiOm51bGwsInZhbHVlIjoiOTgyYTJkZWQwNDIwNDJjMTlmN2U0MzdlYjlkZjYyNjEifSx7ImRvbWFpbiI6IiIsImV4cGlyYXRpb25EYXRlIjoxNzk4MTk1MTQ2LjY2Mjg1NywiaG9zdE9ubHkiOnRydWUsImh0dHBPbmx5IjpmYWxzZSwibmFtZSI6ImlkYWFzLWRlZmF1bHQtdXJsIiwicGF0aCI6Ii8iLCJzYW1lU2l0ZSI6ImxheCIsInNlY3VyZSI6ZmFsc2UsInNlc3Npb24iOmZhbHNlLCJzdG9yZUlkIjpudWxsLCJ2YWx1ZSI6IlwiaHR0cDovLzEwLjkyLjExNS4yMzM6ODA4MFwiIn0seyJkb21haW4iOiIiLCJleHBpcmF0aW9uRGF0ZSI6MTc5ODE5NTE4NC42NjI3MzMsImhvc3RPbmx5Ijp0cnVlLCJodHRwT25seSI6ZmFsc2UsIm5hbWUiOiJpZGFhcy1jc3JmdG9rZW4iLCJwYXRoIjoiLyIsInNhbWVTaXRlIjoibGF4Iiwic2VjdXJlIjpmYWxzZSwic2Vzc2lvbiI6ZmFsc2UsInN0b3JlSWQiOm51bGwsInZhbHVlIjoiODU5NWY4NDExNzRiNGM4OWFmNmY1YmI0Zjg4OTgxOWYifSx7ImRvbWFpbiI6IiIsImV4cGlyYXRpb25EYXRlIjoxNzk4MTk1MTg0LjY2MzEwNCwiaG9zdE9ubHkiOnRydWUsImh0dHBPbmx5IjpmYWxzZSwibmFtZSI6ImJjZS1sb2dpbi1kaXNwbGF5LW5hbWUiLCJwYXRoIjoiLyIsInNhbWVTaXRlIjoibGF4Iiwic2VjdXJlIjpmYWxzZSwic2Vzc2lvbiI6ZmFsc2UsInN0b3JlSWQiOm51bGwsInZhbHVlIjoiYWRtaW4ifSx7ImRvbWFpbiI6IiIsImV4cGlyYXRpb25EYXRlIjoxNzk4MTk1MTg0LjY2MjYwMSwiaG9zdE9ubHkiOnRydWUsImh0dHBPbmx5IjpmYWxzZSwibmFtZSI6ImlkYWFzLXByb2plY3QtaWQiLCJwYXRoIjoiLyIsInNhbWVTaXRlIjoibGF4Iiwic2VjdXJlIjpmYWxzZSwic2Vzc2lvbiI6ZmFsc2UsInN0b3JlSWQiOm51bGwsInZhbHVlIjoiMTQ4ZGJiMTAwMDVlMTFlYTkzOWM3ZGY4OTkxYWQwZTcifSx7ImRvbWFpbiI6IiIsImV4cGlyYXRpb25EYXRlIjoxNzk4MTk1MTg0LjY2Mjc5NSwiaG9zdE9ubHkiOnRydWUsImh0dHBPbmx5IjpmYWxzZSwibmFtZSI6ImlkYWFzLXByb2plY3QtbmFtZSIsInBhdGgiOiIvIiwic2FtZVNpdGUiOiJsYXgiLCJzZWN1cmUiOmZhbHNlLCJzZXNzaW9uIjpmYWxzZSwic3RvcmVJZCI6bnVsbCwidmFsdWUiOiJkZW5nIn0seyJkb21haW4iOiIiLCJleHBpcmF0aW9uRGF0ZSI6MTc5ODE5NTE4NC42NjI2NjEsImhvc3RPbmx5Ijp0cnVlLCJodHRwT25seSI6dHJ1ZSwibmFtZSI6ImlkYWFzLXNlc3Npb25pZCIsInBhdGgiOiIvIiwic2FtZVNpdGUiOiJsYXgiLCJzZWN1cmUiOmZhbHNlLCJzZXNzaW9uIjpmYWxzZSwic3RvcmVJZCI6bnVsbCwidmFsdWUiOiI5ODJhMmRlZDA0MjA0MmMxOWY3ZTQzN2ViOWRmNjI2MSJ9XQ=='
    const targetUrl = 'https://www.baidu.com'
    const setCookieResult = await callHttpApi('apiPresenter', 'setCookie', [cookieData, targetUrl])
    console.log('设置 Cookie 结果:', setCookieResult)

    // 测试执行JavaScript
    console.log('\n测试执行 JavaScript...')
    const jsCode = 'document.title'
    // const windowId = null; // 使用当前激活窗口
    const jsResult = await callHttpApi('apiPresenter', 'executeJavaScript', [jsCode])
    console.log('执行 JavaScript 结果:', jsResult)
  } catch (error) {
    console.error('错误:', error.message)
  }
}

// 运行示例
example()
