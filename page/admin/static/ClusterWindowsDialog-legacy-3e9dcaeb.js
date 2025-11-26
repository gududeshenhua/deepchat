System.register(
  [
    './index-legacy-d4b804d0.js',
    './vue-legacy-7e5c1e5b.js',
    './element-legacy-e7b6e573.js',
    './vxe-legacy-cc8d3321.js'
  ],
  function (e, t) {
    'use strict'
    var l, n, a, u, o, i, r, c, d, s, f, v, m, p
    return {
      setters: [
        function (e) {
          ;((l = e.h), (n = e._))
        },
        function (e) {
          ;((a = e.y),
            (u = e.r),
            (o = e.d),
            (i = e.a8),
            (r = e.f),
            (c = e.G),
            (d = e.H),
            (s = e.N),
            (f = e.L),
            (v = e.M),
            (m = e.u),
            (p = e.K))
        },
        null,
        null
      ],
      execute: function () {
        var t = document.createElement('style')
        ;((t.textContent =
          '.dialog-footer[data-v-407acb48]{display:flex;justify-content:flex-end;gap:10px}\n'),
          document.head.appendChild(t))
        var b = a({
          __name: 'ClusterWindowsDialog',
          props: {
            visible: { type: Boolean, default: !0 },
            selectedInstances: {
              type: Array,
              default: function () {
                return []
              }
            }
          },
          emits: ['update:visible', 'confirm'],
          setup: function (e, t) {
            var n = t.emit,
              a = l().t,
              b = e,
              y = n,
              _ = u(b.visible),
              g = u(1),
              x = u(6)
            o(
              function () {
                return b.visible
              },
              function (e) {
                _.value = e
              }
            )
            var V = function () {
                ;((_.value = !1), y('update:visible', !1))
              },
              w = function () {
                ;(y('confirm', { mode: g.value, count: x.value, instances: b.selectedInstances }),
                  V())
              }
            return function (e, t) {
              var l = i('el-radio'),
                n = i('el-radio-group'),
                u = i('el-form-item'),
                o = i('el-option'),
                b = i('el-select'),
                y = i('el-alert'),
                L = i('el-form'),
                h = i('el-button'),
                C = i('el-dialog')
              return (
                r(),
                c(
                  C,
                  {
                    modelValue: _.value,
                    'onUpdate:modelValue':
                      t[2] ||
                      (t[2] = function (e) {
                        return (_.value = e)
                      }),
                    title: m(a)('instanceList.clusterWindows'),
                    width: '500px',
                    'before-close': V
                  },
                  {
                    footer: d(function () {
                      return [
                        s(
                          h,
                          { onClick: V },
                          {
                            default: d(function () {
                              return [f(v(m(a)('common.cancel')), 1)]
                            }),
                            _: 1
                          }
                        ),
                        s(
                          h,
                          { type: 'primary', onClick: w },
                          {
                            default: d(function () {
                              return [f(v(m(a)('common.confirm')), 1)]
                            }),
                            _: 1
                          }
                        )
                      ]
                    }),
                    default: d(function () {
                      return [
                        s(L, null, {
                          default: d(function () {
                            return [
                              s(
                                u,
                                { label: m(a)('instanceList.windowMode') },
                                {
                                  default: d(function () {
                                    return [
                                      s(
                                        n,
                                        {
                                          modelValue: g.value,
                                          'onUpdate:modelValue':
                                            t[0] ||
                                            (t[0] = function (e) {
                                              return (g.value = e)
                                            })
                                        },
                                        {
                                          default: d(function () {
                                            return [
                                              s(
                                                l,
                                                { label: 1 },
                                                {
                                                  default: d(function () {
                                                    return [f(v(m(a)('instanceList.tiledMode')), 1)]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              s(
                                                l,
                                                { label: 2 },
                                                {
                                                  default: d(function () {
                                                    return [
                                                      f(v(m(a)('instanceList.overlayMode')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              )
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['modelValue']
                                      )
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['label']
                              ),
                              1 === g.value
                                ? (r(),
                                  c(
                                    u,
                                    { key: 0, label: m(a)('instanceList.selectWindowCount') },
                                    {
                                      default: d(function () {
                                        return [
                                          s(
                                            b,
                                            {
                                              modelValue: x.value,
                                              'onUpdate:modelValue':
                                                t[1] ||
                                                (t[1] = function (e) {
                                                  return (x.value = e)
                                                }),
                                              placeholder: m(a)(
                                                'instanceList.windowCountPlaceholder'
                                              )
                                            },
                                            {
                                              default: d(function () {
                                                return [
                                                  s(o, { label: '2', value: 2 }),
                                                  s(o, { label: '4', value: 4 }),
                                                  s(o, { label: '6', value: 6 }),
                                                  s(o, { label: '8', value: 8 }),
                                                  s(o, { label: '10', value: 10 })
                                                ]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['modelValue', 'placeholder']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ))
                                : p('', !0),
                              2 === g.value
                                ? (r(),
                                  c(
                                    y,
                                    {
                                      key: 1,
                                      title: m(a)('instanceList.overlayModeDescription'),
                                      type: 'info',
                                      closable: !1,
                                      style: { 'margin-top': '10px' }
                                    },
                                    null,
                                    8,
                                    ['title']
                                  ))
                                : p('', !0)
                            ]
                          }),
                          _: 1
                        })
                      ]
                    }),
                    _: 1
                  },
                  8,
                  ['modelValue', 'title']
                )
              )
            }
          }
        })
        e('default', n(b, [['__scopeId', 'data-v-407acb48']]))
      }
    }
  }
)
