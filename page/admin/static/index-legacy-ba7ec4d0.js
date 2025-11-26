System.register(['./index-legacy-d4b804d0.js'], function (e, t) {
  'use strict'
  var r
  return {
    setters: [
      function (e) {
        r = e.q
      }
    ],
    execute: function () {
      e({
        a: function (e) {
          return r({ url: '/admin/users/', method: 'get', params: e, baseURL: '/cpyservice' })
        },
        b: function (e) {
          return r({ url: '/admin/users/'.concat(e), method: 'get', baseURL: '/cpyservice' })
        },
        c: function (e) {
          return r({ url: '/users/register', method: 'post', data: e, baseURL: '/cpyservice' })
        },
        d: function (e, t) {
          return r({
            url: '/admin/users/'.concat(e, '/reseller_status'),
            method: 'put',
            data: t,
            baseURL: '/cpyservice'
          })
        },
        e: function (e, t) {
          return r({
            url: '/admin/users/'.concat(e, '/owl_keys'),
            method: 'patch',
            data: t,
            baseURL: '/cpyservice'
          })
        },
        f: function (e) {
          return r({
            url: '/admin/users/sec_code',
            method: 'get',
            params: { username: e },
            baseURL: '/cpyservice'
          })
        },
        g: function () {
          return r({ url: '/quotas/me/summary', method: 'get', baseURL: '/cpyservice' })
        },
        h: function (e, t) {
          return r({
            url: '/users/'.concat(e, '/can_create_instances'),
            method: 'patch',
            data: t,
            baseURL: '/cpyservice'
          })
        },
        i: function (e) {
          return r({
            url: '/admin/users/'.concat(e, '/impersonate'),
            method: 'post',
            baseURL: '/cpyservice'
          })
        },
        j: function (e) {
          return r({
            url: '/quotas/me/increment-launch-counter',
            method: 'post',
            data: { increment_by: e },
            baseURL: '/cpyservice'
          })
        },
        q: function (e) {
          return r({
            url: '/virtual-numbers/stats',
            method: 'get',
            params: e,
            baseURL: '/cpyservice'
          })
        },
        r: function (e, t) {
          return r({
            url: '/admin/users/'.concat(e, '/sec_code'),
            method: 'patch',
            data: { new_sec_code: t },
            baseURL: '/cpyservice'
          })
        },
        u: function (e) {
          return r({
            url: '/admin/users/'.concat(e.user_id),
            method: 'put',
            data: e,
            baseURL: '/cpyservice'
          })
        }
      })
    }
  }
})
