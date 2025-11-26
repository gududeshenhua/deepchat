System.register(['./vue-legacy-7e5c1e5b.js'], function (e, r) {
  'use strict'
  var t
  return {
    setters: [
      function (e) {
        t = e.a
      }
    ],
    execute: function () {
      ;(e('u', function () {
        var e = t().proxy
        return function () {
          return (
            (t = (r = e).to),
            (n = r.url),
            (o = r.replace),
            (u = r.$router),
            void (t && u
              ? u[o ? 'replace' : 'push'](t)
              : n && (o ? location.replace(n) : (location.href = n)))
          )
          var r, t, n, o, u
        }
      }),
        e('r', { to: [String, Object], url: String, replace: Boolean }))
    }
  }
})
