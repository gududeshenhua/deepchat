;(function (global) {
  // ========== WebContentsId 缓存 ==========
  var cachedWebContentsId = null

  function getWebContentsId() {
    if (cachedWebContentsId !== null) {
      return cachedWebContentsId
    }
    try {
      cachedWebContentsId = global.api.getWebContentsId()
      return cachedWebContentsId
    } catch (error) {
      console.warn('Failed to get webContentsId:', error)
      return null
    }
  }

  // ========== 安全序列化函数 ==========
  function safeSerialize(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime())
    }

    if (Array.isArray(obj)) {
      return obj.map(function (item) {
        return safeSerialize(item)
      })
    }

    var serialized = {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var value = obj[key]
        if (
          typeof value !== 'function' &&
          typeof value !== 'symbol' &&
          typeof value !== 'undefined'
        ) {
          serialized[key] = safeSerialize(value)
        }
      }
    }
    return serialized
  }

  // Vue toRaw 替代
  function toRaw(obj) {
    return obj
  }

  // ========== Presenter 代理工厂 ==========
  function createPresenterProxy(presenterName) {
    return new Proxy(
      {},
      {
        get: function (_, functionName) {
          return function () {
            var payloads = Array.prototype.slice.call(arguments)
            // debugger
            try {
              var webContentsId = getWebContentsId()

              var rawPayloads = payloads.map(function (e) {
                return safeSerialize(toRaw(e))
              })

              if (global.VITE_LOG_IPC_CALL === '1') {
                console.log(
                  '[Renderer IPC] WebContents:' +
                    (webContentsId || 'unknown') +
                    ' -> ' +
                    presenterName +
                    '.' +
                    functionName
                )
              }

              return global.electron.ipcRenderer
                .invoke('presenter:call', presenterName, functionName, ...rawPayloads)
                .catch(function (e) {
                  console.warn(
                    '[Renderer IPC Error] WebContents:' +
                      webContentsId +
                      ' ' +
                      presenterName +
                      '.' +
                      functionName,
                    e
                  )
                  return null
                })
            } catch (error) {
              console.warn('error on payload serialization', functionName, error)

              return global.electron.ipcRenderer
                .invoke('presenter:call', presenterName, functionName, ...rawPayloads)
                .catch(function (e) {
                  console.warn('error on presenter invoke fallback', functionName, e)
                  return null
                })
            }
          }
        }
      }
    )
  }

  // ========== presentersProxy ==========
  var presentersProxy = new Proxy(
    {},
    {
      get: function (_, presenterName) {
        return createPresenterProxy(presenterName)
      }
    }
  )

  // ========== 对外 API（只暴露一个 PresenterFactory）==========
  global.PresenterFactory = {
    usePresenter: function (name) {
      return presentersProxy[name]
    }
  }
})(this)
