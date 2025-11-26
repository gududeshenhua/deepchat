System.register(['./index-legacy-d4b804d0.js', './vue-legacy-7e5c1e5b.js'], function (e, t) {
  'use strict'
  var r, n, a, i, c, o, u, s, d
  return {
    setters: [
      function (e) {
        r = e._
      },
      function (e) {
        ;((n = e.a8), (a = e.f), (i = e.h), (c = e.i), (o = e.z), (u = e.N), (s = e.H), (d = e.L))
      }
    ],
    execute: function () {
      var t = document.createElement('style')
      ;((t.textContent =
        '.error-page[data-v-5f207ac3]{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.error-page-svg[data-v-5f207ac3]{width:400px;margin-bottom:50px}\n'),
        document.head.appendChild(t))
      var l = { class: 'error-page' },
        f = { class: 'error-page-svg' }
      e(
        'E',
        r({}, [
          [
            'render',
            function (e, t) {
              var r = n('el-button'),
                v = n('router-link')
              return (
                a(),
                i('div', l, [
                  c('div', f, [o(e.$slots, 'default', {}, void 0, !0)]),
                  u(
                    v,
                    { to: '/' },
                    {
                      default: s(function () {
                        return [
                          u(
                            r,
                            { type: 'primary' },
                            {
                              default: s(function () {
                                return [d('回到首页')]
                              }),
                              _: 1
                            }
                          )
                        ]
                      }),
                      _: 1
                    }
                  )
                ])
              )
            }
          ],
          ['__scopeId', 'data-v-5f207ac3']
        ])
      )
    }
  }
})
