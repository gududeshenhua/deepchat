System.register(
  ['./element-legacy-e7b6e573.js', './index-legacy-d4b804d0.js', './vue-legacy-7e5c1e5b.js'],
  function (t, n) {
    'use strict'
    var e, a, i, s, u, r, o, c, g, d, l, y, f, p
    return {
      setters: [
        function (t) {
          e = t.I
        },
        function (t) {
          ;((a = t.h), (i = t._))
        },
        function (t) {
          ;((s = t.y),
            (u = t.e),
            (r = t.a8),
            (o = t.f),
            (c = t.G),
            (g = t.H),
            (d = t.N),
            (l = t.u),
            (y = t.K),
            (f = t.L),
            (p = t.M))
        }
      ],
      execute: function () {
        var n = document.createElement('style')
        ;((n.textContent =
          '.is-loading[data-v-c6f4bbf7]{animation:rotate-c6f4bbf7 2s linear infinite}@keyframes rotate-c6f4bbf7{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n'),
          document.head.appendChild(n),
          t(
            'I',
            i(
              s({
                __name: 'InstanceStatusTag',
                props: { status: { type: [String, Number], required: !0 } },
                setup: function (t) {
                  var n = t,
                    i = a().t,
                    s = u(function () {
                      var t = {
                        10: { text: i('instanceStatus.10'), type: 'success', loading: !1 },
                        11: { text: i('instanceStatus.11'), type: 'warning', loading: !0 },
                        12: { text: i('instanceStatus.12'), type: 'warning', loading: !0 },
                        13: { text: i('instanceStatus.13'), type: 'warning', loading: !0 },
                        14: { text: i('instanceStatus.14'), type: 'danger', loading: !1 },
                        15: { text: i('instanceStatus.15'), type: 'info', loading: !1 },
                        16: { text: i('instanceStatus.16'), type: 'warning', loading: !0 },
                        17: { text: i('instanceStatus.17'), type: 'warning', loading: !0 },
                        18: { text: i('instanceStatus.18'), type: 'danger', loading: !1 },
                        19: { text: i('instanceStatus.19'), type: 'warning', loading: !0 },
                        20: { text: i('instanceStatus.20'), type: 'warning', loading: !0 },
                        21: { text: i('instanceStatus.21'), type: 'danger', loading: !1 },
                        22: { text: i('instanceStatus.22'), type: 'danger', loading: !1 },
                        23: { text: i('instanceStatus.23'), type: 'warning', loading: !0 },
                        24: { text: i('instanceStatus.24'), type: 'danger', loading: !1 },
                        25: { text: i('instanceStatus.25'), type: 'info', loading: !1 },
                        26: { text: i('instanceStatus.26'), type: 'warning', loading: !0 }
                      }
                      try {
                        return (
                          t[n.status.toString()] || {
                            text: i('instanceStatus.unknownStatus'),
                            type: 'info',
                            loading: !1
                          }
                        )
                      } catch (e) {
                        return {
                          text: i('instanceStatus.unknownStatus'),
                          type: 'info',
                          loading: !1
                        }
                      }
                    })
                  return function (t, n) {
                    var a = r('el-icon'),
                      i = r('el-tag')
                    return (
                      o(),
                      c(
                        i,
                        { type: s.value.type },
                        {
                          default: g(function () {
                            return [
                              s.value.loading
                                ? (o(),
                                  c(
                                    a,
                                    { key: 0, class: 'is-loading' },
                                    {
                                      default: g(function () {
                                        return [d(l(e))]
                                      }),
                                      _: 1
                                    }
                                  ))
                                : y('', !0),
                              f(' ' + p(s.value.text), 1)
                            ]
                          }),
                          _: 1
                        },
                        8,
                        ['type']
                      )
                    )
                  }
                }
              }),
              [['__scopeId', 'data-v-c6f4bbf7']]
            )
          ))
      }
    }
  }
)
