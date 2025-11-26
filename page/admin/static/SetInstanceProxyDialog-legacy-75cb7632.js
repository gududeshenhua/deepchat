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
      var a = null != arguments[r] ? arguments[r] : {}
      r % 2
        ? t(Object(a), !0).forEach(function (t) {
            n(e, t, a[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : t(Object(a)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            })
    }
    return e
  }
  function n(t, r, n) {
    var a
    return (
      (a = (function (t, r) {
        if ('object' != e(t) || !t) return t
        var n = t[Symbol.toPrimitive]
        if (void 0 !== n) {
          var a = n.call(t, r || 'default')
          if ('object' != e(a)) return a
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === r ? String : Number)(t)
      })(r, 'string')),
      (r = 'symbol' == e(a) ? a : String(a)) in t
        ? Object.defineProperty(t, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[r] = n),
      t
    )
  }
  function a() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ a =
      function () {
        return r
      }
    var t,
      r = {},
      n = Object.prototype,
      o = n.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      l = u.iterator || '@@iterator',
      c = u.asyncIterator || '@@asyncIterator',
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
      var a = t && t.prototype instanceof b ? t : b,
        o = Object.create(a.prototype),
        u = new C(n || [])
      return (i(o, '_invoke', { value: O(e, r, u) }), o)
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
      v = 'suspendedYield',
      h = 'executing',
      m = 'completed',
      x = {}
    function b() {}
    function g() {}
    function w() {}
    var L = {}
    p(L, l, function () {
      return this
    })
    var P = Object.getPrototypeOf,
      _ = P && P(P(V([])))
    _ && _ !== n && o.call(_, l) && (L = _)
    var k = (w.prototype = b.prototype = Object.create(L))
    function T(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        p(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function j(t, r) {
      function n(a, i, u, l) {
        var c = d(t[a], t, i)
        if ('throw' !== c.type) {
          var s = c.arg,
            p = s.value
          return p && 'object' == e(p) && o.call(p, '__await')
            ? r.resolve(p.__await).then(
                function (e) {
                  n('next', e, u, l)
                },
                function (e) {
                  n('throw', e, u, l)
                }
              )
            : r.resolve(p).then(
                function (e) {
                  ;((s.value = e), u(s))
                },
                function (e) {
                  return n('throw', e, u, l)
                }
              )
        }
        l(c.arg)
      }
      var a
      i(this, '_invoke', {
        value: function (e, t) {
          function o() {
            return new r(function (r, a) {
              n(e, t, r, a)
            })
          }
          return (a = a ? a.then(o, o) : o())
        }
      })
    }
    function O(e, r, n) {
      var a = y
      return function (o, i) {
        if (a === h) throw new Error('Generator is already running')
        if (a === m) {
          if ('throw' === o) throw i
          return { value: t, done: !0 }
        }
        for (n.method = o, n.arg = i; ; ) {
          var u = n.delegate
          if (u) {
            var l = I(u, n)
            if (l) {
              if (l === x) continue
              return l
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (a === y) throw ((a = m), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          a = h
          var c = d(e, r, n)
          if ('normal' === c.type) {
            if (((a = n.done ? m : v), c.arg === x)) continue
            return { value: c.arg, done: n.done }
          }
          'throw' === c.type && ((a = m), (n.method = 'throw'), (n.arg = c.arg))
        }
      }
    }
    function I(e, r) {
      var n = r.method,
        a = e.iterator[n]
      if (a === t)
        return (
          (r.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((r.method = 'return'), (r.arg = t), I(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'),
              (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          x
        )
      var o = d(a, e.iterator, r.arg)
      if ('throw' === o.type) return ((r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), x)
      var i = o.arg
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
    function N(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function E(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function C(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(N, this), this.reset(!0))
    }
    function V(r) {
      if (r || '' === r) {
        var n = r[l]
        if (n) return n.call(r)
        if ('function' == typeof r.next) return r
        if (!isNaN(r.length)) {
          var a = -1,
            i = function e() {
              for (; ++a < r.length; ) if (o.call(r, a)) return ((e.value = r[a]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(e(r) + ' is not iterable')
    }
    return (
      (g.prototype = w),
      i(k, 'constructor', { value: w, configurable: !0 }),
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
          (e.prototype = Object.create(k)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      T(j.prototype),
      p(j.prototype, c, function () {
        return this
      }),
      (r.AsyncIterator = j),
      (r.async = function (e, t, n, a, o) {
        void 0 === o && (o = Promise)
        var i = new j(f(e, t, n, a), o)
        return r.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      T(k),
      p(k, s, 'Generator'),
      p(k, l, function () {
        return this
      }),
      p(k, 'toString', function () {
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
      (r.values = V),
      (C.prototype = {
        constructor: C,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(E),
            !e)
          )
            for (var r in this)
              't' === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
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
          function n(n, a) {
            return (
              (u.type = 'throw'),
              (u.arg = e),
              (r.next = n),
              a && ((r.method = 'next'), (r.arg = t)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              u = i.completion
            if ('root' === i.tryLoc) return n('end')
            if (i.tryLoc <= this.prev) {
              var l = o.call(i, 'catchLoc'),
                c = o.call(i, 'finallyLoc')
              if (l && c) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              } else if (l) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r]
            if (n.tryLoc <= this.prev && o.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var a = n
              break
            }
          }
          a &&
            ('break' === e || 'continue' === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null)
          var i = a ? a.completion : {}
          return (
            (i.type = e),
            (i.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), x) : this.complete(i)
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
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), E(r), x)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var n = r.completion
              if ('throw' === n.type) {
                var a = n.arg
                E(r)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: V(e), resultName: r, nextLoc: n }),
            'next' === this.method && (this.arg = t),
            x
          )
        }
      }),
      r
    )
  }
  function o(e, t, r, n, a, o, i) {
    try {
      var u = e[o](i),
        l = u.value
    } catch (c) {
      return void r(c)
    }
    u.done ? t(l) : Promise.resolve(l).then(n, a)
  }
  function i(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (n, a) {
        var i = e.apply(t, r)
        function u(e) {
          o(i, n, a, u, l, 'next', e)
        }
        function l(e) {
          o(i, n, a, u, l, 'throw', e)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './element-legacy-e7b6e573.js',
      './index-legacy-31ac821a.js',
      './ProxySelector-legacy-4a8af67d.js',
      './permission-legacy-825f1a25.js',
      './index-legacy-d4b804d0.js',
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-403fb186.js',
      './index-legacy-62a49047.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, t) {
      'use strict'
      var n, o, u, l, c, s, p, f, d, y, v, m, x, b, g, w, L, P, _, k, T, j, O, I
      return {
        setters: [
          function (e) {
            ;((n = e.x), (o = e.y), (u = e.E))
          },
          function (e) {
            ;((l = e.g), (c = e.s), (s = e.u))
          },
          function (e) {
            p = e.P
          },
          function (e) {
            f = e.c
          },
          function (e) {
            ;((d = e.h), (y = e._))
          },
          function (e) {
            ;((v = e.y),
              (m = e.r),
              (x = e.d),
              (b = e.b),
              (g = e.a8),
              (w = e.f),
              (L = e.G),
              (P = e.H),
              (_ = e.N),
              (k = e.L),
              (T = e.M),
              (j = e.u),
              (O = e.h),
              (I = e.K))
          },
          null,
          null,
          null
        ],
        execute: function () {
          var t = document.createElement('style')
          ;((t.textContent =
            '.dialog-footer[data-v-81dda3bf]{display:flex;justify-content:flex-end}.is-refreshing[data-v-81dda3bf]{animation:rotate-81dda3bf 1s linear infinite}@keyframes rotate-81dda3bf{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n'),
            document.head.appendChild(t))
          var N = { key: 0 },
            E = v({
              __name: 'SetInstanceProxyDialog',
              props: {
                visible: { type: Boolean, default: !1 },
                rowData: {
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
              emits: ['update:visible', 'success'],
              setup: function (e, t) {
                var y = t.emit,
                  v = d().t,
                  E = e,
                  C = y
                m([])
                var V = m(!1),
                  S = m(!1),
                  U = m({
                    account: '',
                    password: '',
                    ip: '',
                    port: 0,
                    proxyType: 'proxy',
                    proxyName: 'socks5',
                    proxyId: '',
                    groupName: '',
                    name: '',
                    radioType: 'specified'
                  }),
                  D = m({
                    account: '',
                    password: '',
                    ip: '',
                    port: 0,
                    enable: !0,
                    padCodes: [],
                    bypassPackageList: [],
                    proxyType: 'proxy',
                    proxyName: 'socks5',
                    bypassIpList: [],
                    bypassDomainList: [],
                    sUoT: !0,
                    proxyTemplateName: '',
                    proxyId: '',
                    name: ''
                  }),
                  B = m(!1),
                  G = function () {
                    E.padCodes && E.padCodes.length > 0
                      ? (D.value.padCodes = E.padCodes)
                      : E.rowData && E.rowData.padCode && (D.value.padCodes = [E.rowData.padCode])
                  }
                x(
                  function () {
                    return E.visible
                  },
                  function (e) {
                    e && G()
                  }
                )
                var F = (function () {
                  var e = i(
                    a().mark(function e() {
                      var t
                      return a().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((V.value = !0),
                                  (S.value = !0),
                                  (e.prev = 2),
                                  !D.value.padCodes || 1 != D.value.padCodes.length)
                                ) {
                                  e.next = 8
                                  break
                                }
                                return ((e.next = 6), l({ instance_ids: [D.value.padCodes[0]] }))
                              case 6:
                                ;(t = e.sent).instances &&
                                  t.instances.length > 0 &&
                                  t.instances.forEach(function (e) {
                                    if (e.instance_id == D.value.padCodes[0]) {
                                      var t = JSON.parse(e.proxy_info)
                                      ;((U.value = {
                                        account: t.account || '',
                                        password: t.password || '',
                                        ip: t.ip || '',
                                        port: t.port || 8080,
                                        proxyType: t.proxyType || 'proxy',
                                        proxyName: t.proxyName || 'socks5',
                                        proxyId: t.proxyId || '',
                                        name: t.name || '',
                                        groupName: '',
                                        radioType: 'specified'
                                      }),
                                        (D.value.account = t.account || ''),
                                        (D.value.password = t.password || ''),
                                        (D.value.ip = t.ip || ''),
                                        (D.value.port = t.port || 8080),
                                        (D.value.proxyType = t.proxyType || 'proxy'),
                                        (D.value.proxyName = t.proxyName || 'socks5'),
                                        (D.value.proxyTemplateName = t.proxyTemplateName || ''),
                                        (D.value.proxyId = t.proxyId),
                                        (D.value.name = t.name || ''))
                                    }
                                  })
                              case 8:
                                e.next = 13
                                break
                              case 10:
                                ;((e.prev = 10),
                                  (e.t0 = e.catch(2)),
                                  console.error('获取代理列表失败:', e.t0))
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (V.value = !1),
                                  setTimeout(function () {
                                    S.value = !1
                                  }, 1e3),
                                  e.finish(13)
                                )
                              case 17:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[2, 10, 13, 17]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
                ;(x(
                  U,
                  function (e) {
                    ;((D.value.account = e.account || ''),
                      (D.value.password = e.password || ''),
                      (D.value.ip = e.ip || ''),
                      (D.value.port = e.port || 8080),
                      (D.value.proxyType = (e.proxyType || 'proxy').toLowerCase()),
                      (D.value.proxyName = (e.proxyName || 'socks5').toLowerCase()),
                      (D.value.proxyTemplateName = e.proxyId ? ''.concat(e.proxyId) : ''),
                      (D.value.proxyId = e.proxyId || ''),
                      (D.value.name = e.name || ''))
                  },
                  { deep: !0 }
                ),
                  b(
                    i(
                      a().mark(function e() {
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(G(), F())
                              case 2:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                  ))
                var A = function () {
                    C('update:visible', !1)
                  },
                  J = (function () {
                    var e = i(
                      a().mark(function e() {
                        var t, n, o, l, p, f, d
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (['proxy', 'vpn'].includes(D.value.proxyType)) {
                                    e.next = 4
                                    break
                                  }
                                  return (
                                    u.error(v('instanceList.setInstanceProxyInvalidType')),
                                    e.abrupt('return')
                                  )
                                case 4:
                                  if (['socks5', 'http-relay'].includes(D.value.proxyName)) {
                                    e.next = 8
                                    break
                                  }
                                  return (
                                    u.error(v('instanceList.setInstanceProxyInvalidTypeName')),
                                    e.abrupt('return')
                                  )
                                case 8:
                                  if (
                                    ((e.prev = 8),
                                    'specified' !== U.value.radioType &&
                                      'random' !== U.value.radioType)
                                  ) {
                                    e.next = 21
                                    break
                                  }
                                  return ((e.next = 12), c(D.value))
                                case 12:
                                  return (
                                    (t = e.sent),
                                    (n = D.value.padCodes.map(function (e) {
                                      return {
                                        instance_id: e,
                                        update_data: {
                                          instance_name: e,
                                          proxy_info: JSON.stringify(D.value)
                                        }
                                      }
                                    })),
                                    (e.next = 16),
                                    s(n)
                                  )
                                case 16:
                                  ;(C('success', t), A(), (e.next = 41))
                                  break
                                case 21:
                                  if (!(U.value.batchProxies && U.value.batchProxies.length > 0)) {
                                    e.next = 40
                                    break
                                  }
                                  if (
                                    ((o = U.value.batchProxies),
                                    (l = E.padCodes.length),
                                    !(o.length < l))
                                  ) {
                                    e.next = 28
                                    break
                                  }
                                  throw (
                                    u.error(
                                      v('instanceBatch.insufficientProxy', {
                                        required: l,
                                        available: o.length
                                      })
                                    ),
                                    new Error(v('instanceBatch.insufficientProxiesKey'))
                                  )
                                case 28:
                                  return (
                                    (p = E.padCodes.map(
                                      (function () {
                                        var e = i(
                                          a().mark(function e(t, n) {
                                            var i, u, l, p
                                            return a().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (i = o[n % o.length]),
                                                      (u = {
                                                        account: i.auth_method || '',
                                                        password: i.password || '',
                                                        ip: i.server_address || '',
                                                        port: i.server_port || 8080,
                                                        proxyType: (
                                                          i.mode || 'proxy'
                                                        ).toLowerCase(),
                                                        proxyName: (
                                                          i.proxy_type || 'socks5'
                                                        ).toLowerCase(),
                                                        proxyTemplateName: '',
                                                        proxyId: i.id || '',
                                                        name: i.name || '',
                                                        enable: !0
                                                      }),
                                                      (l = r({ padCodes: [t] }, u)),
                                                      (e.next = 5),
                                                      c(l)
                                                    )
                                                  case 5:
                                                    return (
                                                      (p = e.sent),
                                                      (e.next = 8),
                                                      s([
                                                        {
                                                          instance_id: t,
                                                          update_data: {
                                                            instance_name: t,
                                                            proxy_info: JSON.stringify(u),
                                                            status: 'hasInit'
                                                          }
                                                        }
                                                      ])
                                                    )
                                                  case 8:
                                                    return e.abrupt('return', {
                                                      padCode: t,
                                                      success:
                                                        !p.data.failList ||
                                                        0 === p.data.failList.length,
                                                      error:
                                                        p.data.failList &&
                                                        p.data.failList.length > 0
                                                          ? p.data.failList[0].errMsg
                                                          : null
                                                    })
                                                  case 9:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            }, e)
                                          })
                                        )
                                        return function (t, r) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )),
                                    (e.next = 31),
                                    Promise.all(p)
                                  )
                                case 31:
                                  if (
                                    ((f = e.sent),
                                    !(
                                      (d = f.filter(function (e) {
                                        return !e.success
                                      })).length > 0
                                    ))
                                  ) {
                                    e.next = 36
                                    break
                                  }
                                  throw (
                                    u({
                                      message: h(
                                        'div',
                                        { style: 'text-align: left;' },
                                        d.map(function (e) {
                                          return h(
                                            'div',
                                            { style: 'color: red; margin-bottom: 4px;' },
                                            ''.concat(e.padCode, ': ').concat(e.error)
                                          )
                                        })
                                      ),
                                      type: 'error',
                                      duration: 5e3
                                    }),
                                    new Error('部分实例开机失败')
                                  )
                                case 36:
                                  ;(C('success', {}), A(), (e.next = 41))
                                  break
                                case 40:
                                  u.error(v('instanceBatch.operationFailed'))
                                case 41:
                                  e.next = 46
                                  break
                                case 43:
                                  ;((e.prev = 43),
                                    (e.t0 = e.catch(8)),
                                    console.error('setInstanceProxy error:', e.t0))
                                case 46:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[8, 43]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (t, r) {
                  var a = g('el-input'),
                    i = g('el-form-item'),
                    u = g('el-icon'),
                    l = g('el-input-number'),
                    c = g('el-switch'),
                    s = g('el-option'),
                    d = g('el-select'),
                    y = g('el-form'),
                    h = g('el-button'),
                    m = g('el-dialog')
                  return (
                    w(),
                    L(
                      m,
                      {
                        title: j(v)('instanceList.setInstanceProxyTitle'),
                        'model-value': e.visible,
                        'onUpdate:modelValue': A,
                        width: '500px'
                      },
                      {
                        footer: P(function () {
                          return [
                            _(
                              h,
                              { onClick: A },
                              {
                                default: P(function () {
                                  return [k(T(j(v)('instanceList.setInstanceProxyCancel')), 1)]
                                }),
                                _: 1
                              }
                            ),
                            _(
                              h,
                              { type: 'primary', onClick: J },
                              {
                                default: P(function () {
                                  return [k(T(j(v)('instanceList.setInstanceProxyConfirm')), 1)]
                                }),
                                _: 1
                              }
                            )
                          ]
                        }),
                        default: P(function () {
                          return [
                            _(
                              y,
                              { model: D.value, 'label-width': '120px' },
                              {
                                default: P(function () {
                                  return [
                                    _(
                                      p,
                                      {
                                        isBatch: E.isBatch,
                                        'pad-codes': E.padCodes,
                                        modelValue: U.value,
                                        'onUpdate:modelValue':
                                          r[0] ||
                                          (r[0] = function (e) {
                                            return (U.value = e)
                                          })
                                      },
                                      null,
                                      8,
                                      ['isBatch', 'pad-codes', 'modelValue']
                                    ),
                                    'specified' == U.value.radioType ||
                                    'random' == U.value.radioType
                                      ? (w(),
                                        O('div', N, [
                                          _(
                                            i,
                                            {
                                              label: j(v)(
                                                'instanceList.setInstanceProxyAccountLabel'
                                              )
                                            },
                                            {
                                              default: P(function () {
                                                return [
                                                  _(
                                                    a,
                                                    {
                                                      modelValue: D.value.account,
                                                      'onUpdate:modelValue':
                                                        r[1] ||
                                                        (r[1] = function (e) {
                                                          return (D.value.account = e)
                                                        }),
                                                      placeholder: j(v)(
                                                        'instanceList.setInstanceProxyAccountPlaceholder'
                                                      )
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'placeholder']
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          j(f)(['proxy:password'])
                                            ? (w(),
                                              L(
                                                i,
                                                {
                                                  key: 0,
                                                  label: j(v)(
                                                    'instanceList.setInstanceProxyPasswordLabel'
                                                  )
                                                },
                                                {
                                                  default: P(function () {
                                                    return [
                                                      _(
                                                        a,
                                                        {
                                                          placeholder: j(v)(
                                                            'instanceList.setInstanceProxyPasswordPlaceholder'
                                                          ),
                                                          modelValue: D.value.password,
                                                          'onUpdate:modelValue':
                                                            r[3] ||
                                                            (r[3] = function (e) {
                                                              return (D.value.password = e)
                                                            }),
                                                          type: B.value ? 'text' : 'password',
                                                          autocomplete: 'new-password'
                                                        },
                                                        {
                                                          suffix: P(function () {
                                                            return [
                                                              _(
                                                                u,
                                                                {
                                                                  style: { cursor: 'pointer' },
                                                                  onClick:
                                                                    r[2] ||
                                                                    (r[2] = function (e) {
                                                                      return (B.value = !B.value)
                                                                    })
                                                                },
                                                                {
                                                                  default: P(function () {
                                                                    return [
                                                                      B.value
                                                                        ? (w(), L(j(n), { key: 0 }))
                                                                        : (w(), L(j(o), { key: 1 }))
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
                                                        ['placeholder', 'modelValue', 'type']
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['label']
                                              ))
                                            : I('', !0),
                                          _(
                                            i,
                                            {
                                              label: j(v)('instanceList.setInstanceProxyPortLabel')
                                            },
                                            {
                                              default: P(function () {
                                                return [
                                                  _(
                                                    l,
                                                    {
                                                      modelValue: D.value.port,
                                                      'onUpdate:modelValue':
                                                        r[4] ||
                                                        (r[4] = function (e) {
                                                          return (D.value.port = e)
                                                        }),
                                                      min: 1,
                                                      max: 65535
                                                    },
                                                    null,
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
                                          _(
                                            i,
                                            {
                                              label: j(v)(
                                                'instanceList.setInstanceProxyEnableLabel'
                                              )
                                            },
                                            {
                                              default: P(function () {
                                                return [
                                                  _(
                                                    c,
                                                    {
                                                      modelValue: D.value.enable,
                                                      'onUpdate:modelValue':
                                                        r[5] ||
                                                        (r[5] = function (e) {
                                                          return (D.value.enable = e)
                                                        })
                                                    },
                                                    null,
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
                                          _(
                                            i,
                                            {
                                              label: j(v)('instanceList.setInstanceProxyTypeLabel')
                                            },
                                            {
                                              default: P(function () {
                                                return [
                                                  _(
                                                    d,
                                                    {
                                                      modelValue: D.value.proxyType,
                                                      'onUpdate:modelValue':
                                                        r[6] ||
                                                        (r[6] = function (e) {
                                                          return (D.value.proxyType = e)
                                                        })
                                                    },
                                                    {
                                                      default: P(function () {
                                                        return [
                                                          _(s, { label: 'proxy', value: 'proxy' }),
                                                          _(s, { label: 'vpn', value: 'vpn' })
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
                                          _(
                                            i,
                                            {
                                              label: j(v)(
                                                'instanceList.setInstanceProxyTypeNameLabel'
                                              )
                                            },
                                            {
                                              default: P(function () {
                                                return [
                                                  _(
                                                    d,
                                                    {
                                                      modelValue: D.value.proxyName,
                                                      'onUpdate:modelValue':
                                                        r[7] ||
                                                        (r[7] = function (e) {
                                                          return (D.value.proxyName = e)
                                                        })
                                                    },
                                                    {
                                                      default: P(function () {
                                                        return [
                                                          _(s, {
                                                            label: 'socks5',
                                                            value: 'socks5'
                                                          }),
                                                          _(s, {
                                                            label: 'http-relay',
                                                            value: 'http-relay'
                                                          })
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
                                          _(
                                            i,
                                            {
                                              label: j(v)('instanceList.setInstanceProxyUdpLabel')
                                            },
                                            {
                                              default: P(function () {
                                                return [
                                                  _(
                                                    c,
                                                    {
                                                      modelValue: D.value.sUoT,
                                                      'onUpdate:modelValue':
                                                        r[8] ||
                                                        (r[8] = function (e) {
                                                          return (D.value.sUoT = e)
                                                        })
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue']
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          )
                                        ]))
                                      : I('', !0)
                                  ]
                                }),
                                _: 1
                              },
                              8,
                              ['model']
                            )
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['title', 'model-value']
                    )
                  )
                }
              }
            })
          e('default', y(E, [['__scopeId', 'data-v-81dda3bf']]))
        }
      }
    }
  )
})()
