System.register(['./vue-legacy-7e5c1e5b.js', './index-legacy-d4b804d0.js'], function (e, n) {
  'use strict'
  var t, o, i, u, r, c
  return {
    setters: [
      function (e) {
        ;((t = e.ap), (o = e.R), (i = e.r), (u = e.d))
      },
      function (e) {
        ;((r = e.x), (c = e.y))
      }
    ],
    execute: function () {
      var n = e(
          'D',
          (function (e) {
            return ((e[(e.Mobile = 0)] = 'Mobile'), (e[(e.Desktop = 1)] = 'Desktop'), e)
          })(n || {})
        ),
        a = 'closed'
      e(
        'u',
        t('app', function () {
          var e = o({ opened: r() !== a, withoutAnimation: !1 }),
            t = i(n.Desktop)
          return (
            u(
              function () {
                return e.opened
              },
              function (e) {
                return (function (e) {
                  c(e ? 'opened' : a)
                })(e)
              }
            ),
            {
              device: t,
              sidebar: e,
              toggleSidebar: function (n) {
                ;((e.opened = !e.opened), (e.withoutAnimation = n))
              },
              closeSidebar: function (n) {
                ;((e.opened = !1), (e.withoutAnimation = n))
              },
              toggleDevice: function (e) {
                t.value = e
              }
            }
          )
        })
      )
    }
  }
})
