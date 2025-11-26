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
          return t({ url: '/openapi/open/image/queryImageList', method: 'POST', sign: !0, data: e })
        },
        b: function (e) {
          return t({
            url: '/openapi/open/screenLayout/publicList',
            method: 'POST',
            sign: !0,
            data: e
          })
        },
        c: function (e) {
          return t({
            url: '/openapi/open/pad/v2/net/storage/res/create',
            method: 'POST',
            sign: !0,
            data: e
          })
        },
        d: function (e) {
          return t({ url: ''.concat(n, '/list'), method: 'POST', sign: !0, data: e })
        },
        e: function (e) {
          return t({
            url: '/openapi/open/pad/updatePadAndroidProp',
            method: 'POST',
            sign: !0,
            data: e
          })
        },
        l: function (e) {
          return t({ url: '/openapi/open/pad/padProperties', method: 'POST', sign: !0, data: e })
        },
        q: function (e) {
          return t({
            url: '/openapi/open/realPhone/template/list',
            method: 'POST',
            sign: !0,
            data: e
          })
        },
        s: function (e) {
          return t({ url: ''.concat(n, '/net/setDeviceLevel'), method: 'POST', sign: !0, data: e })
        },
        u: function (e) {
          return t({
            url: '/openapi/open/pad/updatePadProperties',
            method: 'POST',
            sign: !0,
            data: e
          })
        }
      })
      var n = '/openapi/open/device'
    }
  }
})
