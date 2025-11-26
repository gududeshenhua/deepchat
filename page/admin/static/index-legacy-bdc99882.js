System.register(['./index-legacy-d4b804d0.js'], function (e, n) {
  'use strict'
  var t
  return {
    setters: [
      function (e) {
        t = e.q
      }
    ],
    execute: function () {
      e({
        a: function (e) {
          return t({ url: '/file-center/open/file/cache', method: 'POST', sign: !0, data: e })
        },
        b: function (e) {
          return t({ url: '/file-center/open/file/list', method: 'POST', sign: !0, data: e })
        },
        c: function (e) {
          return t({ url: '/file-center/open/file/batch/del', method: 'POST', sign: !0, data: e })
        },
        f: function (e) {
          return t({ url: '/openapi/open/pad/v3/uploadFile', method: 'POST', sign: !0, data: e })
        }
      })
    }
  }
})
