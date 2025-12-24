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

    // 调用setupPresenter的getValue方法
    console.log('\n调用 getValue 方法...')
    const result = await callHttpApi('setupPresenter', 'getValue', ['download-directory'])
    console.log('获取下载目录:', result)

    // 调用setupPresenter的setValue方法
    console.log('\n调用 setValue 方法...')
    const setResult = await callHttpApi('setupPresenter', 'setValue', ['test-key', 'test-value'])
    console.log('设置值结果:', setResult)

    // 再次获取值以验证
    console.log('\n再次获取测试值...')
    const getResult = await callHttpApi('setupPresenter', 'getValue', ['test-key'])
    console.log('获取测试值:', getResult)
  } catch (error) {
    console.error('错误:', error.message)
  }
}

// 运行示例
example()
