!(function () {
  function e(t) {
    return (
      (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }),
      e(t)
    )
  }
  function t(e, t) {
    var r = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e)
      ;(t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        r.push.apply(r, n))
    }
    return r
  }
  function r(e) {
    for (var r = 1; r < arguments.length; r++) {
      var o = null != arguments[r] ? arguments[r] : {}
      r % 2
        ? t(Object(o), !0).forEach(function (t) {
            n(e, t, o[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : t(Object(o)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            })
    }
    return e
  }
  function n(t, r, n) {
    var o
    return (
      (o = (function (t, r) {
        if ('object' != e(t) || !t) return t
        var n = t[Symbol.toPrimitive]
        if (void 0 !== n) {
          var o = n.call(t, r || 'default')
          if ('object' != e(o)) return o
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === r ? String : Number)(t)
      })(r, 'string')),
      (r = 'symbol' == e(o) ? o : String(o)) in t
        ? Object.defineProperty(t, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[r] = n),
      t
    )
  }
  function o() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ o =
      function () {
        return r
      }
    var t,
      r = {},
      n = Object.prototype,
      a = n.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      c = u.iterator || '@@iterator',
      l = u.asyncIterator || '@@asyncIterator',
      s = u.toStringTag || '@@toStringTag'
    function p(e, t, r) {
      return (
        Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      p({}, '')
    } catch (t) {
      p = function (e, t, r) {
        return (e[t] = r)
      }
    }
    function f(e, t, r, n) {
      var o = t && t.prototype instanceof b ? t : b,
        a = Object.create(o.prototype),
        u = new V(n || [])
      return (i(a, '_invoke', { value: j(e, r, u) }), a)
    }
    function d(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    r.wrap = f
    var y = 'suspendedStart',
      h = 'suspendedYield',
      v = 'executing',
      m = 'completed',
      x = {}
    function b() {}
    function g() {}
    function w() {}
    var P = {}
    p(P, c, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      k = _ && _(_(I([])))
    k && k !== n && a.call(k, c) && (P = k)
    var L = (w.prototype = b.prototype = Object.create(P))
    function S(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        p(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function O(t, r) {
      function n(o, i, u, c) {
        var l = d(t[o], t, i)
        if ('throw' !== l.type) {
          var s = l.arg,
            p = s.value
          return p && 'object' == e(p) && a.call(p, '__await')
            ? r.resolve(p.__await).then(
                function (e) {
                  n('next', e, u, c)
                },
                function (e) {
                  n('throw', e, u, c)
                }
              )
            : r.resolve(p).then(
                function (e) {
                  ;((s.value = e), u(s))
                },
                function (e) {
                  return n('throw', e, u, c)
                }
              )
        }
        c(l.arg)
      }
      var o
      i(this, '_invoke', {
        value: function (e, t) {
          function a() {
            return new r(function (r, o) {
              n(e, t, r, o)
            })
          }
          return (o = o ? o.then(a, a) : a())
        }
      })
    }
    function j(e, r, n) {
      var o = y
      return function (a, i) {
        if (o === v) throw new Error('Generator is already running')
        if (o === m) {
          if ('throw' === a) throw i
          return { value: t, done: !0 }
        }
        for (n.method = a, n.arg = i; ; ) {
          var u = n.delegate
          if (u) {
            var c = E(u, n)
            if (c) {
              if (c === x) continue
              return c
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (o === y) throw ((o = m), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          o = v
          var l = d(e, r, n)
          if ('normal' === l.type) {
            if (((o = n.done ? m : h), l.arg === x)) continue
            return { value: l.arg, done: n.done }
          }
          'throw' === l.type && ((o = m), (n.method = 'throw'), (n.arg = l.arg))
        }
      }
    }
    function E(e, r) {
      var n = r.method,
        o = e.iterator[n]
      if (o === t)
        return (
          (r.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((r.method = 'return'), (r.arg = t), E(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'),
              (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          x
        )
      var a = d(o, e.iterator, r.arg)
      if ('throw' === a.type) return ((r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), x)
      var i = a.arg
      return i
        ? i.done
          ? ((r[e.resultName] = i.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            x)
          : i
        : ((r.method = 'throw'),
          (r.arg = new TypeError('iterator result is not an object')),
          (r.delegate = null),
          x)
    }
    function T(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function N(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function V(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(T, this), this.reset(!0))
    }
    function I(r) {
      if (r || '' === r) {
        var n = r[c]
        if (n) return n.call(r)
        if ('function' == typeof r.next) return r
        if (!isNaN(r.length)) {
          var o = -1,
            i = function e() {
              for (; ++o < r.length; ) if (a.call(r, o)) return ((e.value = r[o]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(e(r) + ' is not iterable')
    }
    return (
      (g.prototype = w),
      i(L, 'constructor', { value: w, configurable: !0 }),
      i(w, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = p(w, s, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === g || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), p(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(L)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      S(O.prototype),
      p(O.prototype, l, function () {
        return this
      }),
      (r.AsyncIterator = O),
      (r.async = function (e, t, n, o, a) {
        void 0 === a && (a = Promise)
        var i = new O(f(e, t, n, o), a)
        return r.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      S(L),
      p(L, s, 'Generator'),
      p(L, c, function () {
        return this
      }),
      p(L, 'toString', function () {
        return '[object Generator]'
      }),
      (r.keys = function (e) {
        var t = Object(e),
          r = []
        for (var n in t) r.push(n)
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var n = r.pop()
              if (n in t) return ((e.value = n), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (r.values = I),
      (V.prototype = {
        constructor: V,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(N),
            !e)
          )
            for (var r in this)
              't' === r.charAt(0) && a.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var r = this
          function n(n, o) {
            return (
              (u.type = 'throw'),
              (u.arg = e),
              (r.next = n),
              o && ((r.method = 'next'), (r.arg = t)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              u = i.completion
            if ('root' === i.tryLoc) return n('end')
            if (i.tryLoc <= this.prev) {
              var c = a.call(i, 'catchLoc'),
                l = a.call(i, 'finallyLoc')
              if (c && l) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              } else if (c) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r]
            if (n.tryLoc <= this.prev && a.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var o = n
              break
            }
          }
          o &&
            ('break' === e || 'continue' === e) &&
            o.tryLoc <= t &&
            t <= o.finallyLoc &&
            (o = null)
          var i = o ? o.completion : {}
          return (
            (i.type = e),
            (i.arg = t),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), x) : this.complete(i)
          )
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            x
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), N(r), x)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var n = r.completion
              if ('throw' === n.type) {
                var o = n.arg
                N(r)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: I(e), resultName: r, nextLoc: n }),
            'next' === this.method && (this.arg = t),
            x
          )
        }
      }),
      r
    )
  }
  function a(e, t, r, n, o, a, i) {
    try {
      var u = e[a](i),
        c = u.value
    } catch (l) {
      return void r(l)
    }
    u.done ? t(c) : Promise.resolve(c).then(n, o)
  }
  function i(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (n, o) {
        var i = e.apply(t, r)
        function u(e) {
          a(i, n, o, u, c, 'next', e)
        }
        function c(e) {
          a(i, n, o, u, c, 'throw', e)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-403fb186.js',
      './index-legacy-62a49047.js',
      './index-legacy-d4b804d0.js',
      './vue-legacy-7e5c1e5b.js'
    ],
    function (e, t) {
      'use strict'
      var n, a, u, c, l, s, p, f, d, y, h, v, m, x, b, g, w, P, _, k, L, S, O, j
      return {
        setters: [
          function (e) {
            ;((n = e.g), (a = e.h))
          },
          function (e) {
            ;((u = e.a), (c = e.h))
          },
          function (e) {
            ;((l = e.h), (s = e._))
          },
          function (e) {
            ;((p = e.y),
              (f = e.r),
              (d = e.R),
              (y = e.b),
              (h = e.d),
              (v = e.a8),
              (m = e.f),
              (x = e.h),
              (b = e.N),
              (g = e.H),
              (w = e.L),
              (P = e.M),
              (_ = e.u),
              (k = e.G),
              (L = e.K),
              (S = e.i),
              (O = e.F),
              (j = e.a0))
          }
        ],
        execute: function () {
          var t = document.createElement('style')
          ;((t.textContent =
            '.option-content[data-v-6c25db13]{display:flex;flex-direction:column;width:100%}.option-description[data-v-6c25db13]{font-size:12px;color:#909399;margin-top:4px}\n'),
            document.head.appendChild(t))
          var E = { class: 'option-content' },
            T = { class: 'option-description' },
            N = { key: 0, style: { 'margin-top': '10px' } },
            V = p({
              __name: 'ProxySelector',
              props: {
                modelValue: {
                  type: Object,
                  default: function () {
                    return {}
                  }
                },
                padCodes: {
                  type: Array,
                  default: function () {
                    return []
                  }
                },
                isBatch: { type: Boolean, default: !1 }
              },
              emits: ['update:modelValue'],
              setup: function (e, t) {
                var s = t.emit,
                  p = e,
                  V = s,
                  I = l().t,
                  C = f('specified'),
                  G = f(''),
                  F = f([]),
                  D = f(''),
                  B = d({
                    account: '',
                    password: '',
                    ip: '',
                    port: 0,
                    proxyType: 'proxy',
                    proxyName: 'socks5',
                    proxyId: '',
                    groupName: '',
                    batchProxies: [],
                    name: ''
                  }),
                  U = (function () {
                    var e = i(
                      o().mark(function e() {
                        var t
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), u())
                                case 3:
                                  ;((t = e.sent), (F.value = t || []), (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取代理分组列表失败:', e.t0))
                                case 10:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  A = function (e, t) {
                    t
                      ? ((B.account = t.auth_method || ''),
                        (B.password = t.password || ''),
                        (B.ip = t.server_address || ''),
                        (B.port = t.server_port || 8080),
                        (B.proxyType = (t.mode || 'proxy').toLowerCase()),
                        (B.proxyName = (t.proxy_type || 'socks5').toLowerCase()),
                        (B.proxyId = t.id),
                        (B.name = t.name),
                        V('update:modelValue', r(r({}, B), {}, { radioType: C.value })))
                      : ((B.account = ''),
                        (B.password = ''),
                        (B.ip = ''),
                        (B.port = 0),
                        (B.proxyType = 'proxy'),
                        (B.proxyName = 'socks5'),
                        (B.proxyId = ''),
                        (B.name = ''),
                        V('update:modelValue', r(r({}, B), {}, { radioType: C.value })))
                  },
                  R = (function () {
                    var e = i(
                      o().mark(function e(t) {
                        var n, a, i, u
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((B.account = ''),
                                    (B.password = ''),
                                    (B.ip = ''),
                                    (B.port = 0),
                                    (B.proxyType = 'proxy'),
                                    (B.proxyName = 'socks5'),
                                    (B.proxyId = ''),
                                    (B.name = ''),
                                    t)
                                  ) {
                                    e.next = 11
                                    break
                                  }
                                  return (
                                    V('update:modelValue', r(r({}, B), {}, { radioType: C.value })),
                                    e.abrupt('return')
                                  )
                                case 11:
                                  if (
                                    ((e.prev = 11),
                                    !(a =
                                      null ===
                                        (n = F.value.find(function (e) {
                                          return e.name === t
                                        })) || void 0 === n
                                        ? void 0
                                        : n.name))
                                  ) {
                                    e.next = 34
                                    break
                                  }
                                  return ((B.groupName = a), (e.prev = 15), (e.next = 18), c(a))
                                case 18:
                                  ;((i = e.sent),
                                    (u = i) &&
                                      ((B.account = u.auth_method || ''),
                                      (B.password = u.password || ''),
                                      (B.ip = u.server_address || ''),
                                      (B.port = u.server_port || 8080),
                                      (B.proxyType = (u.mode || 'proxy').toLowerCase()),
                                      (B.proxyName = (u.proxy_type || 'socks5').toLowerCase()),
                                      (B.proxyId = u.id),
                                      (B.name = u.name)),
                                    (e.next = 33))
                                  break
                                case 23:
                                  ;((e.prev = 23),
                                    (e.t0 = e.catch(15)),
                                    (B.account = ''),
                                    (B.password = ''),
                                    (B.ip = ''),
                                    (B.port = 0),
                                    (B.proxyType = 'proxy'),
                                    (B.proxyName = 'socks5'),
                                    (B.proxyId = ''),
                                    (B.name = ''))
                                case 33:
                                  V('update:modelValue', r(r({}, B), {}, { radioType: C.value }))
                                case 34:
                                  e.next = 39
                                  break
                                case 36:
                                  ;((e.prev = 36),
                                    (e.t1 = e.catch(11)),
                                    console.error('获取随机代理失败:', e.t1))
                                case 39:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [11, 36],
                            [15, 23]
                          ]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Y = (function () {
                    var e = i(
                      o().mark(function e(t) {
                        var n, i, u, c
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((B.account = ''),
                                    (B.password = ''),
                                    (B.ip = ''),
                                    (B.port = 0),
                                    (B.proxyType = 'proxy'),
                                    (B.proxyName = 'socks5'),
                                    (B.proxyId = ''),
                                    t)
                                  ) {
                                    e.next = 10
                                    break
                                  }
                                  return (
                                    V('update:modelValue', r(r({}, B), {}, { radioType: C.value })),
                                    e.abrupt('return')
                                  )
                                case 10:
                                  if (
                                    ((e.prev = 10),
                                    !(i =
                                      null ===
                                        (n = F.value.find(function (e) {
                                          return e.name === t
                                        })) || void 0 === n
                                        ? void 0
                                        : n.name))
                                  ) {
                                    e.next = 21
                                    break
                                  }
                                  if (
                                    ((B.groupName = i),
                                    !((u = p.padCodes ? p.padCodes.length : 0) > 0))
                                  ) {
                                    e.next = 21
                                    break
                                  }
                                  return ((e.next = 18), a({ group_name: i, count: u }))
                                case 18:
                                  ;((c = e.sent),
                                    (B.batchProxies = c || []),
                                    V(
                                      'update:modelValue',
                                      r(
                                        r({}, B),
                                        {},
                                        { batchProxies: B.batchProxies, radioType: C.value }
                                      )
                                    ))
                                case 21:
                                  e.next = 26
                                  break
                                case 23:
                                  ;((e.prev = 23),
                                    (e.t0 = e.catch(10)),
                                    console.error('获取批量随机代理失败:', e.t0))
                                case 26:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[10, 23]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                return (
                  y(function () {
                    U()
                  }),
                  h(
                    function () {
                      return p.modelValue.proxyId
                    },
                    function (e) {
                      G.value = e
                    }
                  ),
                  h(C, function (e) {
                    ;((G.value = ''),
                      (D.value = ''),
                      (B.account = ''),
                      (B.password = ''),
                      (B.ip = ''),
                      (B.port = 0),
                      (B.proxyType = 'proxy'),
                      (B.proxyName = 'socks5'),
                      (B.proxyId = ''),
                      (B.groupName = ''),
                      V('update:modelValue', r(r({}, B), {}, { radioType: C.value })))
                  }),
                  function (t, r) {
                    var o = v('el-radio'),
                      a = v('el-radio-group'),
                      i = v('el-form-item'),
                      u = v('CPaginationSelect'),
                      c = v('el-option'),
                      l = v('el-select'),
                      s = v('el-alert')
                    return (
                      m(),
                      x('div', null, [
                        b(
                          i,
                          { label: _(I)('instanceProxySelector.proxyType') },
                          {
                            default: g(function () {
                              return [
                                b(
                                  a,
                                  {
                                    modelValue: C.value,
                                    'onUpdate:modelValue':
                                      r[0] ||
                                      (r[0] = function (e) {
                                        return (C.value = e)
                                      })
                                  },
                                  {
                                    default: g(function () {
                                      return [
                                        b(
                                          o,
                                          { label: 'specified' },
                                          {
                                            default: g(function () {
                                              return [
                                                w(
                                                  P(_(I)('instanceProxySelector.specifiedProxy')),
                                                  1
                                                )
                                              ]
                                            }),
                                            _: 1
                                          }
                                        ),
                                        e.isBatch
                                          ? L('', !0)
                                          : (m(),
                                            k(
                                              o,
                                              {
                                                key: 0,
                                                'data-radio-type': 'random',
                                                label: 'random'
                                              },
                                              {
                                                default: g(function () {
                                                  return [
                                                    w(
                                                      P(_(I)('instanceProxySelector.randomProxy')),
                                                      1
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              }
                                            )),
                                        e.isBatch
                                          ? (m(),
                                            k(
                                              o,
                                              {
                                                key: 1,
                                                'data-radio-type': 'batchrandom',
                                                label: 'batchrandom'
                                              },
                                              {
                                                default: g(function () {
                                                  return [
                                                    w(
                                                      P(_(I)('instanceProxySelector.randomProxy')),
                                                      1
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              }
                                            ))
                                          : L('', !0)
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
                        'specified' === C.value
                          ? (m(),
                            k(
                              i,
                              { key: 0, label: _(I)('instanceProxySelector.selectProxy') },
                              {
                                default: g(function () {
                                  return [
                                    b(
                                      u,
                                      {
                                        modelValue: G.value,
                                        'onUpdate:modelValue':
                                          r[1] ||
                                          (r[1] = function (e) {
                                            return (G.value = e)
                                          }),
                                        api: _(n),
                                        'value-key': 'id',
                                        'label-key': 'name',
                                        placeholder: _(I)(
                                          'instanceProxySelector.pleaseSelectProxy'
                                        ),
                                        immediate: !0,
                                        onChange: A,
                                        getItemLabel: function (e) {
                                          return (
                                            e.name +
                                            '(国家：' +
                                            (e.country_code || '--') +
                                            '，分组：' +
                                            (e.group_name || '--') +
                                            ')'
                                          )
                                        },
                                        'use-custom-slot': !0
                                      },
                                      {
                                        default: g(function (e) {
                                          var t = e.item
                                          return [
                                            S('div', E, [
                                              S('span', null, P(t.name), 1),
                                              S(
                                                'span',
                                                T,
                                                P(
                                                  _(I)('instanceProxySelector.proxyDescription', {
                                                    country: t.country_code || '--',
                                                    group: t.group_name || '--'
                                                  })
                                                ),
                                                1
                                              )
                                            ])
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['modelValue', 'api', 'placeholder', 'getItemLabel']
                                    )
                                  ]
                                }),
                                _: 1
                              },
                              8,
                              ['label']
                            ))
                          : L('', !0),
                        'random' === C.value
                          ? (m(),
                            k(
                              i,
                              { key: 1, label: _(I)('instanceProxySelector.group') },
                              {
                                default: g(function () {
                                  return [
                                    b(
                                      l,
                                      {
                                        modelValue: D.value,
                                        'onUpdate:modelValue':
                                          r[2] ||
                                          (r[2] = function (e) {
                                            return (D.value = e)
                                          }),
                                        clearable: '',
                                        placeholder: _(I)(
                                          'instanceProxySelector.pleaseSelectProxyGroup'
                                        ),
                                        filterable: '',
                                        onChange: R,
                                        style: { width: '100%' }
                                      },
                                      {
                                        default: g(function () {
                                          return [
                                            (m(!0),
                                            x(
                                              O,
                                              null,
                                              j(F.value, function (e) {
                                                return (
                                                  m(),
                                                  k(
                                                    c,
                                                    { key: e.uuid, label: e.name, value: e.name },
                                                    null,
                                                    8,
                                                    ['label', 'value']
                                                  )
                                                )
                                              }),
                                              128
                                            ))
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
                          : L('', !0),
                        'batchrandom' === C.value
                          ? (m(),
                            k(
                              i,
                              { key: 2, label: _(I)('instanceProxySelector.group') },
                              {
                                default: g(function () {
                                  return [
                                    b(
                                      l,
                                      {
                                        modelValue: D.value,
                                        'onUpdate:modelValue':
                                          r[3] ||
                                          (r[3] = function (e) {
                                            return (D.value = e)
                                          }),
                                        clearable: '',
                                        placeholder: _(I)(
                                          'instanceProxySelector.pleaseSelectProxyGroup'
                                        ),
                                        filterable: '',
                                        onChange: Y,
                                        style: { width: '100%' }
                                      },
                                      {
                                        default: g(function () {
                                          return [
                                            (m(!0),
                                            x(
                                              O,
                                              null,
                                              j(F.value, function (e) {
                                                return (
                                                  m(),
                                                  k(
                                                    c,
                                                    { key: e.uuid, label: e.name, value: e.name },
                                                    null,
                                                    8,
                                                    ['label', 'value']
                                                  )
                                                )
                                              }),
                                              128
                                            ))
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['modelValue', 'placeholder']
                                    ),
                                    B.batchProxies && B.batchProxies.length > 0
                                      ? (m(),
                                        x('div', N, [
                                          b(
                                            s,
                                            {
                                              title: _(I)(
                                                'instanceProxySelector.obtainedRandomProxies',
                                                { count: B.batchProxies.length }
                                              ),
                                              type: 'success',
                                              closable: !1,
                                              'show-icon': ''
                                            },
                                            null,
                                            8,
                                            ['title']
                                          )
                                        ]))
                                      : L('', !0)
                                  ]
                                }),
                                _: 1
                              },
                              8,
                              ['label']
                            ))
                          : L('', !0)
                      ])
                    )
                  }
                )
              }
            })
          e('P', s(V, [['__scopeId', 'data-v-6c25db13']]))
        }
      }
    }
  )
})()
