System.register(
  [
    './vue-legacy-7e5c1e5b.js',
    './index-legacy-d4b804d0.js',
    './element-legacy-e7b6e573.js',
    './vxe-legacy-cc8d3321.js'
  ],
  function (e, t) {
    'use strict'
    var n, a, u, l, o, c
    return {
      setters: [
        function (e) {
          ;((n = e.y), (a = e.a8), (u = e.f), (l = e.h), (o = e.N))
        },
        function (e) {
          c = e._
        },
        null,
        null
      ],
      execute: function () {
        var t = document.createElement('style')
        ;((t.textContent =
          '.mobile-layout[data-v-1db6661b]{height:100vh;background-color:#f7f8fa;width:100%;padding:12px;overflow:hidden}\n'),
          document.head.appendChild(t))
        var r = { class: 'mobile-layout' }
        e(
          'default',
          c(
            n({
              __name: 'blanckLayout',
              setup: function (e) {
                return function (e, t) {
                  var n = a('router-view')
                  return (u(), l('div', r, [o(n)]))
                }
              }
            }),
            [['__scopeId', 'data-v-1db6661b']]
          )
        )
      }
    }
  }
)
