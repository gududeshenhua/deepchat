System.register(['./vue-legacy-7e5c1e5b.js'], function (e, t) {
  'use strict'
  var r, n, u, a, c
  return {
    setters: [
      function (e) {
        ;((r = e.y), (n = e.aw), (u = e.aq), (a = e.f), (c = e.h))
      }
    ],
    execute: function () {
      e(
        'default',
        r({
          __name: 'index',
          setup: function (e) {
            var t = n()
            return (
              u().replace({ path: '/' + t.params.path, query: t.query }),
              function (e, t) {
                return (a(), c('div'))
              }
            )
          }
        })
      )
    }
  }
})
