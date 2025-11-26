System.register(['./index-legacy-d4b804d0.js'], function (t, e) {
  'use strict'
  var r
  return {
    setters: [
      function (t) {
        r = t.q
      }
    ],
    execute: function () {
      ;(t('a', function (t) {
        return r({
          url: '/airtest/tasks/script/upload',
          method: 'post',
          data: t,
          headers: { 'Content-Type': 'multipart/form-data' },
          baseURL: '/cpyservice'
        })
      }),
        t('r', function (t) {
          return r({
            url: '/airtest/tasks/script/'.concat(t.scriptId, '/review?action=').concat(t.action),
            method: 'post',
            data: t,
            baseURL: '/cpyservice'
          })
        }),
        t('d', function (t) {
          return r({
            url: '/airtest/tasks/script/'.concat(t),
            method: 'delete',
            baseURL: '/cpyservice'
          })
        }),
        t('g', function (t) {
          return r({
            url: '/airtest/tasks/script/list',
            method: 'get',
            params: t,
            baseURL: '/cpyservice'
          })
        }),
        t('u', function (t, e) {
          return r({
            url: '/airtest/tasks/script/'.concat(t, '/update_info'),
            method: 'put',
            data: e,
            baseURL: '/cpyservice'
          })
        }))
    }
  }
})
