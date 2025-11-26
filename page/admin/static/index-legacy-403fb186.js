System.register(['./index-legacy-d4b804d0.js'], function (e, r) {
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
        a: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
          return t({
            url: '/user/customproxy/owl/countries',
            method: 'GET',
            params: { proxyType: e },
            baseURL: '/cpyservice'
          })
        },
        b: function (e) {
          return t({
            url: '/user/customproxy/delete',
            method: 'POST',
            data: e,
            baseURL: '/cpyservice'
          })
        },
        c: function (e) {
          return t({
            url: '/user/customproxy/owl',
            method: 'GET',
            params: e,
            baseURL: '/cpyservice'
          })
        },
        d: function () {
          return t({
            url: '/user/customproxy/download-excel-template/',
            method: 'GET',
            responseType: 'blob',
            baseURL: '/cpyservice'
          })
        },
        e: function (e) {
          return t({
            url: '/user/customproxy/delete-by-excel',
            method: 'POST',
            data: e,
            baseURL: '/cpyservice'
          })
        },
        f: function () {
          return t({
            url: '/user/customproxy/owl/traffic-balance',
            method: 'GET',
            baseURL: '/cpyservice'
          })
        },
        g: function (e) {
          return t({ url: '/user/customproxy/', method: 'GET', params: e, baseURL: '/cpyservice' })
        },
        h: function (e) {
          return t({
            url: '/user/customproxy/'.concat(e.group_name, '/batch-next'),
            method: 'GET',
            params: e,
            baseURL: '/cpyservice'
          })
        },
        u: function (e, r) {
          return t({
            url: '/user/customproxy/?group_name='.concat(r),
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: e,
            baseURL: '/cpyservice'
          })
        }
      })
    }
  }
})
