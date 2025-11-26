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
          return t({ url: '/proxies/groups', method: 'GET', baseURL: '/cpyservice' })
        },
        b: function (e, r) {
          return t({ url: '/groups/'.concat(e), method: 'PUT', data: r, baseURL: '/cpyservice' })
        },
        c: function (e) {
          return t({ url: '/proxies/groups', method: 'POST', data: e, baseURL: '/cpyservice' })
        },
        d: function (e) {
          return t({ url: '/proxies/groups/'.concat(e), method: 'DELETE', baseURL: '/cpyservice' })
        },
        e: function (e) {
          return t({ url: '/groups/', method: 'POST', data: e, baseURL: '/cpyservice' })
        },
        f: function (e) {
          return t({ url: '/groups/'.concat(e), method: 'DELETE', baseURL: '/cpyservice' })
        },
        g: function () {
          return t({ url: '/groups/', method: 'GET', baseURL: '/cpyservice' })
        },
        h: function (e) {
          return t({
            url: '/user/customproxy/'.concat(e, '/next'),
            method: 'GET',
            baseURL: '/cpyservice'
          })
        },
        u: function (e, r) {
          return t({
            url: '/proxies/groups/'.concat(e),
            method: 'PUT',
            data: r,
            baseURL: '/cpyservice'
          })
        }
      })
    }
  }
})
