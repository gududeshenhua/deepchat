!(function () {
  function t(e) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            }),
      t(e)
    )
  }
  function e() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e =
      function () {
        return r
      }
    var n,
      r = {},
      o = Object.prototype,
      a = o.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      c = u.iterator || '@@iterator',
      l = u.asyncIterator || '@@asyncIterator',
      f = u.toStringTag || '@@toStringTag'
    function s(t, e, n) {
      return (
        Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        t[e]
      )
    }
    try {
      s({}, '')
    } catch (n) {
      s = function (t, e, n) {
        return (t[e] = n)
      }
    }
    function d(t, e, n, r) {
      var o = e && e.prototype instanceof g ? e : g,
        a = Object.create(o.prototype),
        u = new N(r || [])
      return (i(a, '_invoke', { value: B(t, n, u) }), a)
    }
    function h(t, e, n) {
      try {
        return { type: 'normal', arg: t.call(e, n) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    r.wrap = d
    var p = 'suspendedStart',
      y = 'suspendedYield',
      v = 'executing',
      b = 'completed',
      m = {}
    function g() {}
    function w() {}
    function x() {}
    var L = {}
    s(L, c, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      O = _ && _(_(T([])))
    O && O !== o && a.call(O, c) && (L = O)
    var j = (x.prototype = g.prototype = Object.create(L))
    function E(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function C(e, n) {
      function r(o, i, u, c) {
        var l = h(e[o], e, i)
        if ('throw' !== l.type) {
          var f = l.arg,
            s = f.value
          return s && 'object' == t(s) && a.call(s, '__await')
            ? n.resolve(s.__await).then(
                function (t) {
                  r('next', t, u, c)
                },
                function (t) {
                  r('throw', t, u, c)
                }
              )
            : n.resolve(s).then(
                function (t) {
                  ;((f.value = t), u(f))
                },
                function (t) {
                  return r('throw', t, u, c)
                }
              )
        }
        c(l.arg)
      }
      var o
      i(this, '_invoke', {
        value: function (t, e) {
          function a() {
            return new n(function (n, o) {
              r(t, e, n, o)
            })
          }
          return (o = o ? o.then(a, a) : a())
        }
      })
    }
    function B(t, e, r) {
      var o = p
      return function (a, i) {
        if (o === v) throw new Error('Generator is already running')
        if (o === b) {
          if ('throw' === a) throw i
          return { value: n, done: !0 }
        }
        for (r.method = a, r.arg = i; ; ) {
          var u = r.delegate
          if (u) {
            var c = S(u, r)
            if (c) {
              if (c === m) continue
              return c
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (o === p) throw ((o = b), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          o = v
          var l = h(t, e, r)
          if ('normal' === l.type) {
            if (((o = r.done ? b : y), l.arg === m)) continue
            return { value: l.arg, done: r.done }
          }
          'throw' === l.type && ((o = b), (r.method = 'throw'), (r.arg = l.arg))
        }
      }
    }
    function S(t, e) {
      var r = e.method,
        o = t.iterator[r]
      if (o === n)
        return (
          (e.delegate = null),
          ('throw' === r &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = n), S(t, e), 'throw' === e.method)) ||
            ('return' !== r &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          m
        )
      var a = h(o, t.iterator, e.arg)
      if ('throw' === a.type) return ((e.method = 'throw'), (e.arg = a.arg), (e.delegate = null), m)
      var i = a.arg
      return i
        ? i.done
          ? ((e[t.resultName] = i.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
            (e.delegate = null),
            m)
          : i
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          m)
    }
    function k(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function P(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function N(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(k, this), this.reset(!0))
    }
    function T(e) {
      if (e || '' === e) {
        var r = e[c]
        if (r) return r.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var o = -1,
            i = function t() {
              for (; ++o < e.length; ) if (a.call(e, o)) return ((t.value = e[o]), (t.done = !1), t)
              return ((t.value = n), (t.done = !0), t)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(t(e) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      i(j, 'constructor', { value: x, configurable: !0 }),
      i(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = s(x, f, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor
        return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name))
      }),
      (r.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, x)
            : ((t.__proto__ = x), s(t, f, 'GeneratorFunction')),
          (t.prototype = Object.create(j)),
          t
        )
      }),
      (r.awrap = function (t) {
        return { __await: t }
      }),
      E(C.prototype),
      s(C.prototype, l, function () {
        return this
      }),
      (r.AsyncIterator = C),
      (r.async = function (t, e, n, o, a) {
        void 0 === a && (a = Promise)
        var i = new C(d(t, e, n, o), a)
        return r.isGeneratorFunction(e)
          ? i
          : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
      }),
      E(j),
      s(j, f, 'Generator'),
      s(j, c, function () {
        return this
      }),
      s(j, 'toString', function () {
        return '[object Generator]'
      }),
      (r.keys = function (t) {
        var e = Object(t),
          n = []
        for (var r in e) n.push(r)
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop()
              if (r in e) return ((t.value = r), (t.done = !1), t)
            }
            return ((t.done = !0), t)
          }
        )
      }),
      (r.values = T),
      (N.prototype = {
        constructor: N,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(P),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
        },
        stop: function () {
          this.done = !0
          var t = this.tryEntries[0].completion
          if ('throw' === t.type) throw t.arg
          return this.rval
        },
        dispatchException: function (t) {
          if (this.done) throw t
          var e = this
          function r(r, o) {
            return (
              (u.type = 'throw'),
              (u.arg = t),
              (e.next = r),
              o && ((e.method = 'next'), (e.arg = n)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              u = i.completion
            if ('root' === i.tryLoc) return r('end')
            if (i.tryLoc <= this.prev) {
              var c = a.call(i, 'catchLoc'),
                l = a.call(i, 'finallyLoc')
              if (c && l) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              } else if (c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && a.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var o = r
              break
            }
          }
          o &&
            ('break' === t || 'continue' === t) &&
            o.tryLoc <= e &&
            e <= o.finallyLoc &&
            (o = null)
          var i = o ? o.completion : {}
          return (
            (i.type = t),
            (i.arg = e),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(i)
          )
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            m
          )
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.finallyLoc === t) return (this.complete(n.completion, n.afterLoc), P(n), m)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.tryLoc === t) {
              var r = n.completion
              if ('throw' === r.type) {
                var o = r.arg
                P(n)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, r) {
          return (
            (this.delegate = { iterator: T(t), resultName: e, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            m
          )
        }
      }),
      r
    )
  }
  function n(t, e, n, r, o, a, i) {
    try {
      var u = t[a](i),
        c = u.value
    } catch (l) {
      return void n(l)
    }
    u.done ? e(c) : Promise.resolve(c).then(r, o)
  }
  function r(t, e) {
    var n = Object.keys(t)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t)
      ;(e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        n.push.apply(n, r))
    }
    return n
  }
  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? r(Object(n), !0).forEach(function (e) {
            a(t, e, n[e])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
    }
    return t
  }
  function a(e, n, r) {
    var o
    return (
      (o = (function (e, n) {
        if ('object' != t(e) || !e) return e
        var r = e[Symbol.toPrimitive]
        if (void 0 !== r) {
          var o = r.call(e, n || 'default')
          if ('object' != t(o)) return o
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === n ? String : Number)(e)
      })(n, 'string')),
      (n = 'symbol' == t(o) ? o : String(o)) in e
        ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (e[n] = r),
      e
    )
  }
  System.register(
    [
      './index-legacy-31ac821a.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (t, r) {
      'use strict'
      var a, i, u, c, l, f, s, d, h, p, y, v, b, m, g, w, x, L
      return {
        setters: [
          function (t) {
            a = t.o
          },
          function (t) {
            ;((i = t.h), (u = t._))
          },
          function (t) {
            c = t.E
          },
          function (t) {
            ;((l = t.y),
              (f = t.r),
              (s = t.d),
              (d = t.b),
              (h = t.a8),
              (p = t.f),
              (y = t.G),
              (v = t.H),
              (b = t.N),
              (m = t.L),
              (g = t.M),
              (w = t.u),
              (x = t.i),
              (L = t.h))
          },
          null
        ],
        execute: function () {
          var r = document.createElement('style')
          ;((r.textContent = '.el-input[data-v-ad60b0fd]{flex:1}\n'), document.head.appendChild(r))
          var _ = { style: { display: 'flex', 'align-items': 'center' } },
            O = { style: { display: 'flex', 'align-items': 'center' } },
            j = { style: { display: 'flex', 'align-items': 'center' } },
            E = { key: 1 },
            C = l(
              o(
                o({}, { name: 'AdbConnectionInfoDialog' }),
                {},
                {
                  __name: 'AdbConnectionInfoDialog',
                  props: {
                    visible: { type: Boolean, default: !1 },
                    padCode: { type: String, default: '' }
                  },
                  emits: ['update:visible', 'success'],
                  setup: function (t, r) {
                    var o = r.emit,
                      u = i().t,
                      l = t,
                      C = o,
                      B = f(!0),
                      S = f(!1),
                      k = f(null)
                    ;(s(
                      function () {
                        return l.visible
                      },
                      function (t) {
                        ;((B.value = t), t && ((k.value = null), P()))
                      }
                    ),
                      d(function () {
                        ;((k.value = null), P())
                      }))
                    var P = (function () {
                        var t,
                          r =
                            ((t = e().mark(function t() {
                              var n, r
                              return e().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (l.padCode) {
                                          t.next = 3
                                          break
                                        }
                                        return (
                                          c.warning(u('instanceBatch.adbInstanceCodeEmpty')),
                                          t.abrupt('return')
                                        )
                                      case 3:
                                        return (
                                          (S.value = !0),
                                          (t.prev = 4),
                                          (n = { padCode: l.padCode, enable: !0 }),
                                          (t.next = 8),
                                          a(n)
                                        )
                                      case 8:
                                        ;((r = t.sent),
                                          (k.value = r.data),
                                          c.success(u('instanceBatch.adbFetchSuccess')),
                                          (t.next = 17))
                                        break
                                      case 13:
                                        ;((t.prev = 13),
                                          (t.t0 = t.catch(4)),
                                          console.error(t.t0),
                                          c.error(u('instanceBatch.adbFetchFailed')))
                                      case 17:
                                        return ((t.prev = 17), (S.value = !1), t.finish(17))
                                      case 20:
                                      case 'end':
                                        return t.stop()
                                    }
                                },
                                t,
                                null,
                                [[4, 13, 17, 20]]
                              )
                            })),
                            function () {
                              var e = this,
                                r = arguments
                              return new Promise(function (o, a) {
                                var i = t.apply(e, r)
                                function u(t) {
                                  n(i, o, a, u, c, 'next', t)
                                }
                                function c(t) {
                                  n(i, o, a, u, c, 'throw', t)
                                }
                                u(void 0)
                              })
                            })
                        return function () {
                          return r.apply(this, arguments)
                        }
                      })(),
                      N = function () {
                        ;((B.value = !1), C('update:visible', !1))
                      },
                      T = function (t) {
                        navigator.clipboard
                          .writeText(t)
                          .then(function () {
                            c.success(u('instanceBatch.adbCopySuccess'))
                          })
                          .catch(function () {
                            c.error(u('instanceBatch.adbCopyFailed'))
                          })
                      }
                    return function (t, e) {
                      var n = h('el-descriptions-item'),
                        r = h('el-input'),
                        o = h('el-button'),
                        a = h('el-tag'),
                        i = h('el-descriptions'),
                        c = h('el-skeleton'),
                        l = h('el-dialog')
                      return (
                        p(),
                        y(
                          l,
                          {
                            'model-value': B.value,
                            title: w(u)('instanceBatch.adbDialogTitle'),
                            width: '600px',
                            'before-close': N
                          },
                          {
                            footer: v(function () {
                              return [
                                b(
                                  o,
                                  { onClick: N },
                                  {
                                    default: v(function () {
                                      return [m(g(w(u)('instanceBatch.adbCloseButton')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: v(function () {
                              return [
                                b(
                                  c,
                                  { loading: S.value, animated: '' },
                                  {
                                    default: v(function () {
                                      return [
                                        k.value
                                          ? (p(),
                                            y(
                                              i,
                                              { key: 0, column: 1, border: '' },
                                              {
                                                default: v(function () {
                                                  return [
                                                    b(
                                                      n,
                                                      {
                                                        label: w(u)('instanceBatch.adbPadCodeLabel')
                                                      },
                                                      {
                                                        default: v(function () {
                                                          return [m(g(k.value.padCode), 1)]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['label']
                                                    ),
                                                    b(
                                                      n,
                                                      {
                                                        label: w(u)(
                                                          'instanceBatch.adbSshCommandLabel'
                                                        )
                                                      },
                                                      {
                                                        default: v(function () {
                                                          return [
                                                            x('div', _, [
                                                              b(
                                                                r,
                                                                {
                                                                  modelValue: k.value.command,
                                                                  'onUpdate:modelValue':
                                                                    e[0] ||
                                                                    (e[0] = function (t) {
                                                                      return (k.value.command = t)
                                                                    }),
                                                                  readonly: ''
                                                                },
                                                                null,
                                                                8,
                                                                ['modelValue']
                                                              ),
                                                              b(
                                                                o,
                                                                {
                                                                  style: { 'margin-left': '10px' },
                                                                  onClick:
                                                                    e[1] ||
                                                                    (e[1] = function (t) {
                                                                      return T(k.value.command)
                                                                    })
                                                                },
                                                                {
                                                                  default: v(function () {
                                                                    return [
                                                                      m(
                                                                        g(
                                                                          w(u)(
                                                                            'instanceBatch.adbCopyButton'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 1
                                                                }
                                                              )
                                                            ])
                                                          ]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['label']
                                                    ),
                                                    b(
                                                      n,
                                                      {
                                                        label: w(u)(
                                                          'instanceBatch.adbConnectionCommandLabel'
                                                        )
                                                      },
                                                      {
                                                        default: v(function () {
                                                          return [
                                                            x('div', O, [
                                                              b(
                                                                r,
                                                                {
                                                                  modelValue: k.value.adb,
                                                                  'onUpdate:modelValue':
                                                                    e[2] ||
                                                                    (e[2] = function (t) {
                                                                      return (k.value.adb = t)
                                                                    }),
                                                                  readonly: ''
                                                                },
                                                                null,
                                                                8,
                                                                ['modelValue']
                                                              ),
                                                              b(
                                                                o,
                                                                {
                                                                  style: { 'margin-left': '10px' },
                                                                  onClick:
                                                                    e[3] ||
                                                                    (e[3] = function (t) {
                                                                      return T(k.value.adb)
                                                                    })
                                                                },
                                                                {
                                                                  default: v(function () {
                                                                    return [
                                                                      m(
                                                                        g(
                                                                          w(u)(
                                                                            'instanceBatch.adbCopyButton'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 1
                                                                }
                                                              )
                                                            ])
                                                          ]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['label']
                                                    ),
                                                    b(
                                                      n,
                                                      { label: w(u)('instanceBatch.adbKeyLabel') },
                                                      {
                                                        default: v(function () {
                                                          return [
                                                            x('div', j, [
                                                              b(
                                                                r,
                                                                {
                                                                  modelValue: k.value.key,
                                                                  'onUpdate:modelValue':
                                                                    e[4] ||
                                                                    (e[4] = function (t) {
                                                                      return (k.value.key = t)
                                                                    }),
                                                                  readonly: ''
                                                                },
                                                                null,
                                                                8,
                                                                ['modelValue']
                                                              ),
                                                              b(
                                                                o,
                                                                {
                                                                  style: { 'margin-left': '10px' },
                                                                  onClick:
                                                                    e[5] ||
                                                                    (e[5] = function (t) {
                                                                      return T(k.value.key)
                                                                    })
                                                                },
                                                                {
                                                                  default: v(function () {
                                                                    return [
                                                                      m(
                                                                        g(
                                                                          w(u)(
                                                                            'instanceBatch.adbCopyButton'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 1
                                                                }
                                                              )
                                                            ])
                                                          ]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['label']
                                                    ),
                                                    b(
                                                      n,
                                                      {
                                                        label: w(u)('instanceBatch.adbStatusLabel')
                                                      },
                                                      {
                                                        default: v(function () {
                                                          return [
                                                            b(
                                                              a,
                                                              {
                                                                type: k.value.enable
                                                                  ? 'success'
                                                                  : 'danger'
                                                              },
                                                              {
                                                                default: v(function () {
                                                                  return [
                                                                    m(
                                                                      g(
                                                                        k.value.enable
                                                                          ? w(u)(
                                                                              'instanceBatch.adbStatusOpen'
                                                                            )
                                                                          : w(u)(
                                                                              'instanceBatch.adbStatusClosed'
                                                                            )
                                                                      ),
                                                                      1
                                                                    )
                                                                  ]
                                                                }),
                                                                _: 1
                                                              },
                                                              8,
                                                              ['type']
                                                            )
                                                          ]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['label']
                                                    ),
                                                    b(
                                                      n,
                                                      {
                                                        label: w(u)(
                                                          'instanceBatch.adbExpireTimeLabel'
                                                        )
                                                      },
                                                      {
                                                        default: v(function () {
                                                          return [m(g(k.value.expireTime), 1)]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['label']
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              }
                                            ))
                                          : (p(),
                                            L('div', E, g(w(u)('instanceBatch.adbNotFound')), 1))
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            _: 1
                          },
                          8,
                          ['model-value', 'title']
                        )
                      )
                    }
                  }
                }
              )
            )
          t('default', u(C, [['__scopeId', 'data-v-ad60b0fd']]))
        }
      }
    }
  )
})()
