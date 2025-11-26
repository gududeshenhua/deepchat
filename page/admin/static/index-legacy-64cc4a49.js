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
        return n
      }
    var r,
      n = {},
      o = Object.prototype,
      a = o.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      l = c.asyncIterator || '@@asyncIterator',
      f = c.toStringTag || '@@toStringTag'
    function s(t, e, r) {
      return (
        Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        t[e]
      )
    }
    try {
      s({}, '')
    } catch (r) {
      s = function (t, e, r) {
        return (t[e] = r)
      }
    }
    function h(t, e, r, n) {
      var o = e && e.prototype instanceof w ? e : w,
        a = Object.create(o.prototype),
        c = new C(n || [])
      return (i(a, '_invoke', { value: O(t, r, c) }), a)
    }
    function p(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    n.wrap = h
    var g = 'suspendedStart',
      d = 'suspendedYield',
      v = 'executing',
      y = 'completed',
      m = {}
    function w() {}
    function b() {}
    function x() {}
    var L = {}
    s(L, u, function () {
      return this
    })
    var E = Object.getPrototypeOf,
      _ = E && E(E(F([])))
    _ && _ !== o && a.call(_, u) && (L = _)
    var j = (x.prototype = w.prototype = Object.create(L))
    function k(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function S(e, r) {
      function n(o, i, c, u) {
        var l = p(e[o], e, i)
        if ('throw' !== l.type) {
          var f = l.arg,
            s = f.value
          return s && 'object' == t(s) && a.call(s, '__await')
            ? r.resolve(s.__await).then(
                function (t) {
                  n('next', t, c, u)
                },
                function (t) {
                  n('throw', t, c, u)
                }
              )
            : r.resolve(s).then(
                function (t) {
                  ;((f.value = t), c(f))
                },
                function (t) {
                  return n('throw', t, c, u)
                }
              )
        }
        u(l.arg)
      }
      var o
      i(this, '_invoke', {
        value: function (t, e) {
          function a() {
            return new r(function (r, o) {
              n(t, e, r, o)
            })
          }
          return (o = o ? o.then(a, a) : a())
        }
      })
    }
    function O(t, e, n) {
      var o = g
      return function (a, i) {
        if (o === v) throw new Error('Generator is already running')
        if (o === y) {
          if ('throw' === a) throw i
          return { value: r, done: !0 }
        }
        for (n.method = a, n.arg = i; ; ) {
          var c = n.delegate
          if (c) {
            var u = N(c, n)
            if (u) {
              if (u === m) continue
              return u
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (o === g) throw ((o = y), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          o = v
          var l = p(t, e, n)
          if ('normal' === l.type) {
            if (((o = n.done ? y : d), l.arg === m)) continue
            return { value: l.arg, done: n.done }
          }
          'throw' === l.type && ((o = y), (n.method = 'throw'), (n.arg = l.arg))
        }
      }
    }
    function N(t, e) {
      var n = e.method,
        o = t.iterator[n]
      if (o === r)
        return (
          (e.delegate = null),
          ('throw' === n &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = r), N(t, e), 'throw' === e.method)) ||
            ('return' !== n &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          m
        )
      var a = p(o, t.iterator, e.arg)
      if ('throw' === a.type) return ((e.method = 'throw'), (e.arg = a.arg), (e.delegate = null), m)
      var i = a.arg
      return i
        ? i.done
          ? ((e[t.resultName] = i.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
            (e.delegate = null),
            m)
          : i
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          m)
    }
    function P(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function G(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function C(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(P, this), this.reset(!0))
    }
    function F(e) {
      if (e || '' === e) {
        var n = e[u]
        if (n) return n.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var o = -1,
            i = function t() {
              for (; ++o < e.length; ) if (a.call(e, o)) return ((t.value = e[o]), (t.done = !1), t)
              return ((t.value = r), (t.done = !0), t)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(t(e) + ' is not iterable')
    }
    return (
      (b.prototype = x),
      i(j, 'constructor', { value: x, configurable: !0 }),
      i(x, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = s(x, f, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor
        return !!e && (e === b || 'GeneratorFunction' === (e.displayName || e.name))
      }),
      (n.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, x)
            : ((t.__proto__ = x), s(t, f, 'GeneratorFunction')),
          (t.prototype = Object.create(j)),
          t
        )
      }),
      (n.awrap = function (t) {
        return { __await: t }
      }),
      k(S.prototype),
      s(S.prototype, l, function () {
        return this
      }),
      (n.AsyncIterator = S),
      (n.async = function (t, e, r, o, a) {
        void 0 === a && (a = Promise)
        var i = new S(h(t, e, r, o), a)
        return n.isGeneratorFunction(e)
          ? i
          : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
      }),
      k(j),
      s(j, f, 'Generator'),
      s(j, u, function () {
        return this
      }),
      s(j, 'toString', function () {
        return '[object Generator]'
      }),
      (n.keys = function (t) {
        var e = Object(t),
          r = []
        for (var n in e) r.push(n)
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop()
              if (n in e) return ((t.value = n), (t.done = !1), t)
            }
            return ((t.done = !0), t)
          }
        )
      }),
      (n.values = F),
      (C.prototype = {
        constructor: C,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(G),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
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
          function n(n, o) {
            return (
              (c.type = 'throw'),
              (c.arg = t),
              (e.next = n),
              o && ((e.method = 'next'), (e.arg = r)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              c = i.completion
            if ('root' === i.tryLoc) return n('end')
            if (i.tryLoc <= this.prev) {
              var u = a.call(i, 'catchLoc'),
                l = a.call(i, 'finallyLoc')
              if (u && l) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              } else if (u) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r]
            if (n.tryLoc <= this.prev && a.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var o = n
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
            var r = this.tryEntries[e]
            if (r.finallyLoc === t) return (this.complete(r.completion, r.afterLoc), G(r), m)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e]
            if (r.tryLoc === t) {
              var n = r.completion
              if ('throw' === n.type) {
                var o = n.arg
                G(r)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: F(t), resultName: e, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            m
          )
        }
      }),
      n
    )
  }
  function r(t, e, r, n, o, a, i) {
    try {
      var c = t[a](i),
        u = c.value
    } catch (l) {
      return void r(l)
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o)
  }
  System.register(
    ['./index-legacy-d4b804d0.js', './element-legacy-e7b6e573.js', './vue-legacy-7e5c1e5b.js'],
    function (t, n) {
      'use strict'
      var o, a, i, c, u, l, f, s, h, p, g, d, v, y, m, w, b, x, L, E
      return {
        setters: [
          function (t) {
            ;((o = t.h), (a = t.a), (i = t._))
          },
          function (t) {
            c = t.E
          },
          function (t) {
            ;((u = t.y),
              (l = t.r),
              (f = t.e),
              (s = t.b),
              (h = t.a8),
              (p = t.f),
              (g = t.G),
              (d = t.H),
              (v = t.N),
              (y = t.h),
              (m = t.a0),
              (w = t.F),
              (b = t.i),
              (x = t.M),
              (L = t.A),
              (E = t.L))
          }
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.language-switch[data-v-5ac9dbc2]{display:inline-block;margin:0 8px}.language-switch .language-trigger[data-v-5ac9dbc2]{display:flex;align-items:center;padding:8px 12px;border-radius:4px;cursor:pointer;transition:background-color .3s}.language-switch .language-trigger .svg-icon[data-v-5ac9dbc2]{font-size:16px;margin-right:6px}.language-switch .language-trigger .language-text[data-v-5ac9dbc2]{font-size:14px;color:#fff}[data-v-5ac9dbc2] .el-dropdown-menu__item.active{color:var(--el-color-primary);background-color:var(--el-color-primary-light-9)}\n'),
            document.head.appendChild(n))
          var _ = { class: 'language-trigger' },
            j = { class: 'language-text' },
            k = u({
              __name: 'index',
              setup: function (t) {
                var n = o(),
                  i = n.t,
                  u = n.locale,
                  k = a(),
                  S = l([
                    { code: 'cmn-Hans-CN', name: '简体中文' },
                    { code: 'ja-JP', name: '日本語' },
                    { code: 'en-US', name: 'English' }
                  ]),
                  O = l(k.language || 'cmn-Hans-CN'),
                  N = f(function () {
                    var t = S.value.find(function (t) {
                      return t.code === O.value
                    })
                    return t ? t.name : '简体中文'
                  }),
                  P = (function () {
                    var t,
                      n =
                        ((t = e().mark(function t(r) {
                          var n, o
                          return e().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (O.value !== r) {
                                    t.next = 2
                                    break
                                  }
                                  return t.abrupt('return')
                                case 2:
                                  try {
                                    ;((u.value = r),
                                      (k.language = r),
                                      (O.value = r),
                                      (o =
                                        (null ===
                                          (n = S.value.find(function (t) {
                                            return t.code === r
                                          })) || void 0 === n
                                          ? void 0
                                          : n.name) || r),
                                      c.success(i('languageChanged', { language: o })),
                                      localStorage.setItem('lang', r))
                                  } catch (e) {
                                    ;(console.error('语言切换失败:', e),
                                      c.error(i('languageChangeFailed')))
                                  }
                                case 3:
                                case 'end':
                                  return t.stop()
                              }
                          }, t)
                        })),
                        function () {
                          var e = this,
                            n = arguments
                          return new Promise(function (o, a) {
                            var i = t.apply(e, n)
                            function c(t) {
                              r(i, o, a, c, u, 'next', t)
                            }
                            function u(t) {
                              r(i, o, a, c, u, 'throw', t)
                            }
                            c(void 0)
                          })
                        })
                    return function (t) {
                      return n.apply(this, arguments)
                    }
                  })()
                return (
                  s(function () {
                    ;(k.language || (k.language = 'cmn-Hans-CN'), (u.value = k.language))
                  }),
                  function (t, e) {
                    var r = h('el-tooltip'),
                      n = h('el-dropdown-item'),
                      o = h('el-dropdown-menu'),
                      a = h('el-dropdown')
                    return (
                      p(),
                      g(
                        a,
                        { trigger: 'click', onCommand: P },
                        {
                          dropdown: d(function () {
                            return [
                              v(o, null, {
                                default: d(function () {
                                  return [
                                    (p(!0),
                                    y(
                                      w,
                                      null,
                                      m(S.value, function (t) {
                                        return (
                                          p(),
                                          g(
                                            n,
                                            {
                                              key: t.code,
                                              command: t.code,
                                              class: L({ active: O.value === t.code })
                                            },
                                            {
                                              default: d(function () {
                                                return [E(x(t.name), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['command', 'class']
                                          )
                                        )
                                      }),
                                      128
                                    ))
                                  ]
                                }),
                                _: 1
                              })
                            ]
                          }),
                          default: d(function () {
                            return [
                              b('div', _, [
                                v(
                                  r,
                                  {
                                    effect: 'dark',
                                    content: t.$t('languageSwitch'),
                                    placement: 'bottom'
                                  },
                                  {
                                    default: d(function () {
                                      return [b('span', j, x(N.value), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['content']
                                )
                              ])
                            ]
                          }),
                          _: 1
                        }
                      )
                    )
                  }
                )
              }
            })
          t('L', i(k, [['__scopeId', 'data-v-5ac9dbc2']]))
        }
      }
    }
  )
})()
