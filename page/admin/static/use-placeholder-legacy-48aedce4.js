System.register(['./index-legacy-0fcb45ef.js', './vue-legacy-7e5c1e5b.js'], function (e, n) {
  'use strict'
  var t, u, r, i, c, o, a, f, s
  return {
    setters: [
      function (e) {
        ;((t = e.Q), (u = e.R), (r = e.S), (i = e.o))
      },
      function (e) {
        ;((c = e.r), (o = e.b), (a = e.n), (f = e.d), (s = e.N))
      }
    ],
    execute: function () {
      e('u', function (e, t) {
        var u = n(e, !0)
        return function (e) {
          return s(
            'div',
            {
              class: t('placeholder'),
              style: { height: u.value ? ''.concat(u.value, 'px') : void 0 }
            },
            [e()]
          )
        }
      })
      var n = function (e, n) {
        var s = c(),
          v = function () {
            s.value = i(e).height
          }
        return (
          o(function () {
            if ((a(v), n)) for (var e = 1; e <= 3; e++) setTimeout(v, 100 * e)
          }),
          t(function () {
            return a(v)
          }),
          f([u, r], v),
          s
        )
      }
    }
  }
})
