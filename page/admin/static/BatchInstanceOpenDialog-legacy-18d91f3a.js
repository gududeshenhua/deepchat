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
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var r =
          null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (null != r) {
          var n,
            a,
            o,
            i,
            s = [],
            c = !0,
            l = !1
          try {
            if (((o = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return
              c = !1
            } else for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
          } catch (e) {
            ;((l = !0), (a = e))
          } finally {
            try {
              if (!c && null != r.return && ((i = r.return()), Object(i) !== i)) return
            } finally {
              if (l) throw a
            }
          }
          return s
        }
      })(e, t) ||
      (function (e, t) {
        if (!e) return
        if ('string' == typeof e) return r(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        'Object' === n && e.constructor && (n = e.constructor.name)
        if ('Map' === n || 'Set' === n) return Array.from(e)
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function r(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
    return n
  }
  function n(e, t) {
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
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {}
      t % 2
        ? n(Object(r), !0).forEach(function (t) {
            o(e, t, r[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : n(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
    }
    return e
  }
  function o(t, r, n) {
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
  function i() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ i =
      function () {
        return r
      }
    var t,
      r = {},
      n = Object.prototype,
      a = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      s = 'function' == typeof Symbol ? Symbol : {},
      c = s.iterator || '@@iterator',
      l = s.asyncIterator || '@@asyncIterator',
      u = s.toStringTag || '@@toStringTag'
    function d(e, t, r) {
      return (
        Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      d({}, '')
    } catch (t) {
      d = function (e, t, r) {
        return (e[t] = r)
      }
    }
    function p(e, t, r, n) {
      var a = t && t.prototype instanceof b ? t : b,
        i = Object.create(a.prototype),
        s = new E(n || [])
      return (o(i, '_invoke', { value: I(e, r, s) }), i)
    }
    function f(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    r.wrap = p
    var y = 'suspendedStart',
      h = 'suspendedYield',
      m = 'executing',
      v = 'completed',
      g = {}
    function b() {}
    function x() {}
    function w() {}
    var P = {}
    d(P, c, function () {
      return this
    })
    var k = Object.getPrototypeOf,
      _ = k && k(k(S([])))
    _ && _ !== n && a.call(_, c) && (P = _)
    var L = (w.prototype = b.prototype = Object.create(P))
    function B(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function O(t, r) {
      function n(o, i, s, c) {
        var l = f(t[o], t, i)
        if ('throw' !== l.type) {
          var u = l.arg,
            d = u.value
          return d && 'object' == e(d) && a.call(d, '__await')
            ? r.resolve(d.__await).then(
                function (e) {
                  n('next', e, s, c)
                },
                function (e) {
                  n('throw', e, s, c)
                }
              )
            : r.resolve(d).then(
                function (e) {
                  ;((u.value = e), s(u))
                },
                function (e) {
                  return n('throw', e, s, c)
                }
              )
        }
        c(l.arg)
      }
      var i
      o(this, '_invoke', {
        value: function (e, t) {
          function a() {
            return new r(function (r, a) {
              n(e, t, r, a)
            })
          }
          return (i = i ? i.then(a, a) : a())
        }
      })
    }
    function I(e, r, n) {
      var a = y
      return function (o, i) {
        if (a === m) throw new Error('Generator is already running')
        if (a === v) {
          if ('throw' === o) throw i
          return { value: t, done: !0 }
        }
        for (n.method = o, n.arg = i; ; ) {
          var s = n.delegate
          if (s) {
            var c = j(s, n)
            if (c) {
              if (c === g) continue
              return c
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (a === y) throw ((a = v), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          a = m
          var l = f(e, r, n)
          if ('normal' === l.type) {
            if (((a = n.done ? v : h), l.arg === g)) continue
            return { value: l.arg, done: n.done }
          }
          'throw' === l.type && ((a = v), (n.method = 'throw'), (n.arg = l.arg))
        }
      }
    }
    function j(e, r) {
      var n = r.method,
        a = e.iterator[n]
      if (a === t)
        return (
          (r.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'),
              (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          g
        )
      var o = f(a, e.iterator, r.arg)
      if ('throw' === o.type) return ((r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), g)
      var i = o.arg
      return i
        ? i.done
          ? ((r[e.resultName] = i.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            g)
          : i
        : ((r.method = 'throw'),
          (r.arg = new TypeError('iterator result is not an object')),
          (r.delegate = null),
          g)
    }
    function A(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function C(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function E(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(A, this), this.reset(!0))
    }
    function S(r) {
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
      (x.prototype = w),
      o(L, 'constructor', { value: w, configurable: !0 }),
      o(w, 'constructor', { value: x, configurable: !0 }),
      (x.displayName = d(w, u, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === x || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), d(e, u, 'GeneratorFunction')),
          (e.prototype = Object.create(L)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      B(O.prototype),
      d(O.prototype, l, function () {
        return this
      }),
      (r.AsyncIterator = O),
      (r.async = function (e, t, n, a, o) {
        void 0 === o && (o = Promise)
        var i = new O(p(e, t, n, a), o)
        return r.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      B(L),
      d(L, u, 'Generator'),
      d(L, c, function () {
        return this
      }),
      d(L, 'toString', function () {
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
      (r.values = S),
      (E.prototype = {
        constructor: E,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(C),
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
          function n(n, a) {
            return (
              (s.type = 'throw'),
              (s.arg = e),
              (r.next = n),
              a && ((r.method = 'next'), (r.arg = t)),
              !!a
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              s = i.completion
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
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), g) : this.complete(i)
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
            g
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), C(r), g)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var n = r.completion
              if ('throw' === n.type) {
                var a = n.arg
                C(r)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: S(e), resultName: r, nextLoc: n }),
            'next' === this.method && (this.arg = t),
            g
          )
        }
      }),
      r
    )
  }
  function s(e, t, r, n, a, o, i) {
    try {
      var s = e[o](i),
        c = s.value
    } catch (l) {
      return void r(l)
    }
    s.done ? t(c) : Promise.resolve(c).then(n, a)
  }
  function c(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (n, a) {
        var o = e.apply(t, r)
        function i(e) {
          s(o, n, a, i, c, 'next', e)
        }
        function c(e) {
          s(o, n, a, i, c, 'throw', e)
        }
        i(void 0)
      })
    }
  }
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-d4b804d0.js',
      './index-legacy-31ac821a.js',
      './index-legacy-ba7ec4d0.js',
      './ProxySelector-legacy-4a8af67d.js',
      './element-legacy-e7b6e573.js',
      './vxe-legacy-cc8d3321.js',
      './index-legacy-403fb186.js',
      './index-legacy-62a49047.js'
    ],
    function (e, r) {
      'use strict'
      var n,
        o,
        s,
        l,
        u,
        d,
        p,
        f,
        y,
        h,
        m,
        v,
        g,
        b,
        x,
        w,
        P,
        k,
        _,
        L,
        B,
        O,
        I,
        j,
        A,
        C,
        E,
        S,
        N,
        V,
        T,
        F,
        z,
        G,
        M
      return {
        setters: [
          function (e) {
            ;((n = e.y),
              (o = e.p),
              (s = e.r),
              (l = e.R),
              (u = e.b),
              (d = e.w),
              (p = e.d),
              (f = e.a8),
              (y = e.f),
              (h = e.G),
              (m = e.H),
              (v = e.i),
              (g = e.N),
              (b = e.L),
              (x = e.M),
              (w = e.u),
              (P = e.K),
              (k = e.I),
              (_ = e.O),
              (L = e.h),
              (B = e.a0),
              (O = e.F),
              (I = e.a7))
          },
          function (e) {
            ;((j = e.q), (A = e.h), (C = e._))
          },
          function (e) {
            ;((E = e.g), (S = e.d), (N = e.c), (V = e.u))
          },
          function (e) {
            ;((T = e.g), (F = e.j))
          },
          function (e) {
            z = e.P
          },
          function (e) {
            ;((G = e.E), (M = e.G))
          },
          null,
          null,
          null
        ],
        execute: function () {
          var r = document.createElement('style')
          function U(e) {
            return j({ url: '/operation-logs/', method: 'post', data: e, baseURL: '/cpyservice' })
          }
          ;((r.textContent =
            '.option-label[data-v-50c96e68]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n'),
            document.head.appendChild(r))
          var D = { class: 'dialog-footer' },
            J = n({
              __name: 'BatchInstanceOpenDialog',
              props: {
                visible: { type: Boolean, default: !1 },
                padCodes: {
                  type: Array,
                  default: function () {
                    return []
                  }
                },
                isApi: { type: Boolean, default: !0 },
                isHideProxy: { type: Boolean, default: !1 }
              },
              emits: ['update:visible', 'success', 'submit'],
              setup: function (e, r) {
                var n = r.emit,
                  j = A().t,
                  C = o('$bus'),
                  J = e,
                  q = n,
                  H = s(),
                  K = s(!1),
                  R = s(!1),
                  Y = l({
                    dns: '8.8.8.8',
                    countryCode: '',
                    androidProp: '',
                    modifyAndroidProp: !1,
                    selectedProxyId: '',
                    isOpenAdb: !1,
                    upgradeImage: !1,
                    imageId: ''
                  }),
                  $ = s(!1),
                  Q = s({
                    account: '',
                    password: '',
                    ip: '',
                    port: 0,
                    proxyType: 'proxy',
                    proxyName: 'socks5',
                    proxyId: '',
                    groupName: ''
                  })
                s([])
                var W = s([]),
                  X = (function () {
                    var e = c(
                      i().mark(function e() {
                        var t
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), S())
                                case 3:
                                  ;(200 === (t = e.sent).code &&
                                    t.data &&
                                    t.data.length > 0 &&
                                    (W.value = t.data.map(function (e) {
                                      return {
                                        label: 'Android '
                                          .concat(e.androidVersion, '_')
                                          .concat(e.imageVersion),
                                        value: e.imageId.toLowerCase(),
                                        version: e.androidVersion
                                      }
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error(j('instanceBatch.fetchImageListFailed'), e.t0))
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
                  Z = s('jp'),
                  ee = {
                    jp: {
                      'persist.sys.locale': 'ja-JP',
                      'persist.sys.timezone': 'Asia/Tokyo',
                      'persist.sys.language': 'ja'
                    },
                    kr: {
                      'persist.sys.locale': 'ko-KR',
                      'persist.sys.timezone': 'Asia/Seoul',
                      'persist.sys.language': 'ko'
                    },
                    br: {
                      'persist.sys.locale': 'pt-BR',
                      'persist.sys.timezone': 'America/Sao_Paulo',
                      'persist.sys.language': 'pt'
                    },
                    vn: {
                      'persist.sys.locale': 'vi-VN',
                      'persist.sys.timezone': 'Asia/Ho_Chi_Minh',
                      'persist.sys.language': 'vi'
                    },
                    us: {
                      'persist.sys.locale': 'en-US',
                      'persist.sys.timezone': 'America/New_York',
                      'persist.sys.language': 'en'
                    },
                    gb: {
                      'persist.sys.locale': 'en-GB',
                      'persist.sys.timezone': 'Europe/London',
                      'persist.sys.language': 'en'
                    },
                    th: {
                      'persist.sys.locale': 'th-TH',
                      'persist.sys.timezone': 'Asia/Bangkok',
                      'persist.sys.language': 'th'
                    },
                    de: {
                      'persist.sys.locale': 'de-DE',
                      'persist.sys.timezone': 'Europe/Berlin',
                      'persist.sys.language': 'de'
                    }
                  },
                  te = function (e) {
                    if ((($.value = !0), Y.modifyAndroidProp))
                      if (e && ee[e])
                        if (Y.selectedProxyId) {
                          var t = a({}, ee[e]),
                            r = Q.value
                          if (r) {
                            t['ro.sys.cloud.proxy.type'] = (r.proxyName || 'socks5').toLowerCase()
                            var n = ''
                              .concat(r.ip || '', '|')
                              .concat(r.port || '', '|')
                              .concat(r.account || '', '|')
                              .concat(r.password || '', '|true')
                            ;((t['ro.sys.cloud.proxy.data'] = n),
                              (t['ro.sys.cloud.proxy.mode'] = (
                                r.proxyType || 'proxy'
                              ).toLowerCase()))
                          }
                          ;(Y.isOpenAdb && (t['persist.sys.cloud.madb_enable'] = '1'),
                            (Y.androidProp = JSON.stringify(t, null, 2)))
                        } else {
                          var o = a({}, ee[e])
                          ;(Y.isOpenAdb && (o['persist.sys.cloud.madb_enable'] = '1'),
                            (Y.androidProp = JSON.stringify(o, null, 2)))
                        }
                      else Y.androidProp = ''
                    setTimeout(function () {
                      $.value = !1
                    }, 500)
                  }
                ;(u(function () {
                  ;(X(),
                    Y.modifyAndroidProp && te('jp'),
                    E({ instance_ids: J.padCodes }).then(function (e) {
                      if (e.instances && Array.isArray(e.instances)) {
                        var t = e.instances.some(function (e) {
                          return 'init' === e.status
                        })
                        R.value = !!t
                      }
                    }))
                }),
                  d(function () {
                    Y.modifyAndroidProp
                      ? te(Z.value)
                      : ((Y.androidProp = ''), (Y.selectedProxyId = ''))
                  }))
                var re = function () {
                  var e
                  ;(q('update:visible', !1),
                    null === (e = H.value) || void 0 === e || e.resetFields())
                }
                p(
                  Q,
                  function (e) {
                    Y.selectedProxyId = e.proxyId
                  },
                  { deep: !0 }
                )
                var ne = (function () {
                    var e = c(
                      i().mark(function e() {
                        var r, n, a, o, s, c, l, u, d, p, f, y, h, m, v
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = { padCodes: J.padCodes }),
                                    Y.dns && (r.dns = Y.dns),
                                    Y.countryCode && (r.countryCode = Y.countryCode),
                                    !Y.modifyAndroidProp || !Y.androidProp)
                                  ) {
                                    e.next = 24
                                    break
                                  }
                                  if (
                                    ((e.prev = 4),
                                    (n = JSON.parse(Y.androidProp)),
                                    !(a = n['ro.sys.cloud.proxy.data']))
                                  ) {
                                    e.next = 15
                                    break
                                  }
                                  if (!((o = a.split('|')).length < 4)) {
                                    e.next = 12
                                    break
                                  }
                                  throw (
                                    G.error(j('instanceBatch.proxyDataFormatError')),
                                    new Error(j('instanceBatch.proxyDataFormatErrorKey'))
                                  )
                                case 12:
                                  if (o[0] && o[1]) {
                                    e.next = 15
                                    break
                                  }
                                  throw (
                                    G.error(j('instanceBatch.proxyIpPortEmpty')),
                                    new Error(j('instanceBatch.proxyIpPortEmptyKey'))
                                  )
                                case 15:
                                  ;((r.androidProp = n), (e.next = 22))
                                  break
                                case 18:
                                  throw (
                                    (e.prev = 18),
                                    (e.t0 = e.catch(4)),
                                    G.error(j('instanceBatch.androidPropFormatError')),
                                    e.t0
                                  )
                                case 22:
                                  e.next = 25
                                  break
                                case 24:
                                  Y.modifyAndroidProp
                                case 25:
                                  if (
                                    (Y.upgradeImage && Y.imageId && (r.imageId = Y.imageId),
                                    J.isApi)
                                  ) {
                                    e.next = 29
                                    break
                                  }
                                  return (q('submit', r), e.abrupt('return'))
                                case 29:
                                  return ((e.next = 31), N(r))
                                case 31:
                                  if (!((s = e.sent).data.failList && s.data.failList.length > 0)) {
                                    e.next = 35
                                    break
                                  }
                                  throw (
                                    G({
                                      message: I(
                                        'div',
                                        { style: 'text-align: left;' },
                                        s.data.failList.map(function (e) {
                                          return I(
                                            'div',
                                            { style: 'color: red; margin-bottom: 4px;' },
                                            ''.concat(e.padCode, ': ').concat(e.errMsg)
                                          )
                                        })
                                      ),
                                      type: 'error',
                                      duration: 5e3
                                    }),
                                    new Error('部分实例开机失败')
                                  )
                                case 35:
                                  if (({}, !Y.androidProp)) {
                                    e.next = 51
                                    break
                                  }
                                  if (
                                    ((e.prev = 37),
                                    (l = JSON.parse(Y.androidProp)),
                                    (u = l['ro.sys.cloud.proxy.data'] || ''),
                                    (d = u.split('|')),
                                    (p = t(d, 4)),
                                    (f = p[0]),
                                    (y = p[1]),
                                    (h = p[2]),
                                    (m = p[3]),
                                    (c = {
                                      account: h || '',
                                      password: m || '',
                                      ip: f || '',
                                      port: y || 8080,
                                      proxyType: (
                                        l['ro.sys.cloud.proxy.mode'] || 'proxy'
                                      ).toLowerCase(),
                                      proxyName: (
                                        l['ro.sys.cloud.proxy.type'] || 'socks5'
                                      ).toLowerCase(),
                                      proxyTemplateName: '',
                                      proxyId: ''
                                    }),
                                    !Y.selectedProxyId && 'xxx.xxx.xx.xx' === f)
                                  ) {
                                    e.next = 46
                                    break
                                  }
                                  return (
                                    (v = r.padCodes.map(function (e) {
                                      return {
                                        instance_id: e,
                                        update_data: {
                                          instance_name: e,
                                          proxy_info: JSON.stringify(c),
                                          status: 'hasInit'
                                        }
                                      }
                                    })),
                                    (e.next = 46),
                                    V(v)
                                  )
                                case 46:
                                  e.next = 51
                                  break
                                case 48:
                                  ;((e.prev = 48),
                                    (e.t1 = e.catch(37)),
                                    console.error('解析androidProp失败:', e.t1))
                                case 51:
                                  return (
                                    (e.prev = 51),
                                    (e.next = 54),
                                    U({
                                      action: 'batchOpenInstance',
                                      details: JSON.stringify(r),
                                      instance: r.padCodes.join(',')
                                    })
                                  )
                                case 54:
                                  e.next = 59
                                  break
                                case 56:
                                  ;((e.prev = 56),
                                    (e.t2 = e.catch(51)),
                                    console.error('日志记录:', e.t2))
                                case 59:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [4, 18],
                            [37, 48],
                            [51, 56]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ae = (function () {
                    var e = c(
                      i().mark(function e() {
                        var t, r, n, o, s
                        return i().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = Q.value.batchProxies),
                                  (r = J.padCodes.length),
                                  !(t.length < r))
                                ) {
                                  e.next = 5
                                  break
                                }
                                throw (
                                  G.error(
                                    j('instanceBatch.insufficientProxy', {
                                      required: r,
                                      available: t.length
                                    })
                                  ),
                                  new Error(j('instanceBatch.insufficientProxiesKey'))
                                )
                              case 5:
                                return (
                                  (n = J.padCodes.map(
                                    (function () {
                                      var e = c(
                                        i().mark(function e(r, n) {
                                          var o, s, c, l, u, d
                                          return i().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (
                                                      ((o = t[n % t.length]),
                                                      (s = { padCodes: [r] }),
                                                      Y.dns && (s.dns = Y.dns),
                                                      Y.countryCode &&
                                                        (s.countryCode = Y.countryCode),
                                                      Y.modifyAndroidProp &&
                                                        (((c = a({}, ee[Z.value]))[
                                                          'ro.sys.cloud.proxy.type'
                                                        ] = (
                                                          o.proxy_type || 'socks5'
                                                        ).toLowerCase()),
                                                        (l = ''
                                                          .concat(o.server_address || '', '|')
                                                          .concat(o.server_port || '', '|')
                                                          .concat(o.auth_method || '', '|')
                                                          .concat(o.password || '', '|true')),
                                                        (c['ro.sys.cloud.proxy.data'] = l),
                                                        (c['ro.sys.cloud.proxy.mode'] = (
                                                          o.mode || 'proxy'
                                                        ).toLowerCase()),
                                                        Y.isOpenAdb &&
                                                          (c['persist.sys.cloud.madb_enable'] =
                                                            '1'),
                                                        (s.androidProp = c)),
                                                      Y.upgradeImage &&
                                                        Y.imageId &&
                                                        (s.imageId = Y.imageId),
                                                      J.isApi)
                                                    ) {
                                                      e.next = 9
                                                      break
                                                    }
                                                    return (q('submit', s), e.abrupt('return'))
                                                  case 9:
                                                    return ((e.next = 11), N(s))
                                                  case 11:
                                                    return (
                                                      (u = e.sent),
                                                      (d = {
                                                        account: o.auth_method || '',
                                                        password: o.password || '',
                                                        ip: o.server_address || '',
                                                        port: o.server_port || 8080,
                                                        proxyType: (
                                                          o.mode || 'proxy'
                                                        ).toLowerCase(),
                                                        proxyName: (
                                                          o.proxy_type || 'socks5'
                                                        ).toLowerCase(),
                                                        proxyTemplateName: '',
                                                        proxyId: o.id || '',
                                                        name: o.name || ''
                                                      }),
                                                      (e.next = 15),
                                                      V([
                                                        {
                                                          instance_id: r,
                                                          update_data: {
                                                            instance_name: r,
                                                            proxy_info: JSON.stringify(d),
                                                            status: 'hasInit'
                                                          }
                                                        }
                                                      ])
                                                    )
                                                  case 15:
                                                    return (
                                                      (e.prev = 15),
                                                      (e.next = 18),
                                                      U({
                                                        action: 'batchOpenInstance',
                                                        details: JSON.stringify(s),
                                                        instance: r
                                                      })
                                                    )
                                                  case 18:
                                                    e.next = 23
                                                    break
                                                  case 20:
                                                    ;((e.prev = 20),
                                                      (e.t0 = e.catch(15)),
                                                      console.error('日志记录:', e.t0))
                                                  case 23:
                                                    return e.abrupt('return', {
                                                      padCode: r,
                                                      success:
                                                        !u.data.failList ||
                                                        0 === u.data.failList.length,
                                                      error:
                                                        u.data.failList &&
                                                        u.data.failList.length > 0
                                                          ? u.data.failList[0].errMsg
                                                          : null
                                                    })
                                                  case 24:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            },
                                            e,
                                            null,
                                            [[15, 20]]
                                          )
                                        })
                                      )
                                      return function (t, r) {
                                        return e.apply(this, arguments)
                                      }
                                    })()
                                  )),
                                  (e.next = 8),
                                  Promise.all(n)
                                )
                              case 8:
                                if (
                                  ((o = e.sent),
                                  !(
                                    (s = o.filter(function (e) {
                                      return !e.success
                                    })).length > 0
                                  ))
                                ) {
                                  e.next = 13
                                  break
                                }
                                throw (
                                  G({
                                    message: I(
                                      'div',
                                      { style: 'text-align: left;' },
                                      s.map(function (e) {
                                        return I(
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
                              case 13:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  oe = (function () {
                    var e = c(
                      i().mark(function e() {
                        var t, r
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (H.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return (
                                    (e.next = 4),
                                    H.value.validate(function (e) {
                                      e || G.error(j('instanceBatch.checkFormData'))
                                    })
                                  )
                                case 4:
                                  if (J.padCodes && 0 !== J.padCodes.length) {
                                    e.next = 7
                                    break
                                  }
                                  return (
                                    G.error(j('instanceBatch.selectInstance')),
                                    e.abrupt('return')
                                  )
                                case 7:
                                  if (!R.value || Y.modifyAndroidProp) {
                                    e.next = 16
                                    break
                                  }
                                  return (
                                    (e.prev = 8),
                                    (e.next = 11),
                                    M.confirm(
                                      j('instanceBatch.firstStartupMessage'),
                                      j('instanceBatch.prompt'),
                                      {
                                        confirmButtonText: j('instanceBatch.confirm'),
                                        cancelButtonText: j('instanceBatch.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 11:
                                  e.next = 16
                                  break
                                case 13:
                                  return ((e.prev = 13), (e.t0 = e.catch(8)), e.abrupt('return'))
                                case 16:
                                  return (
                                    (e.prev = 16),
                                    (K.value = !0),
                                    (e.prev = 18),
                                    (e.next = 21),
                                    T()
                                  )
                                case 21:
                                  if (!(t = e.sent)) {
                                    e.next = 28
                                    break
                                  }
                                  if (((r = t.remaining_launches), !(J.padCodes.length > r))) {
                                    e.next = 28
                                    break
                                  }
                                  return (
                                    G.error(
                                      j('quotaInsufficient', {
                                        remaining: r,
                                        required: J.padCodes.length
                                      })
                                    ),
                                    (K.value = !1),
                                    e.abrupt('return')
                                  )
                                case 28:
                                  e.next = 33
                                  break
                                case 30:
                                  ;((e.prev = 30),
                                    (e.t1 = e.catch(18)),
                                    console.error('获取配额数据失败:', e.t1))
                                case 33:
                                  if (!(Q.value.batchProxies && Q.value.batchProxies.length > 0)) {
                                    e.next = 39
                                    break
                                  }
                                  return ((e.next = 37), ae())
                                case 37:
                                  e.next = 41
                                  break
                                case 39:
                                  return ((e.next = 41), ne())
                                case 41:
                                  return ((e.prev = 41), (e.next = 44), F(J.padCodes.length))
                                case 44:
                                  e.next = 49
                                  break
                                case 46:
                                  ;((e.prev = 46),
                                    (e.t2 = e.catch(41)),
                                    console.error('启动计数器调用失败:', e.t2))
                                case 49:
                                  ;(C.emit('updateQuota'),
                                    G.success(j('instanceBatch.startupSuccess')),
                                    q('success'),
                                    re(),
                                    (e.next = 59))
                                  break
                                case 55:
                                  ;((e.prev = 55),
                                    (e.t3 = e.catch(16)),
                                    console.error(e.t3),
                                    G.error(j('instanceBatch.operationFailed')))
                                case 59:
                                  return ((e.prev = 59), (K.value = !1), e.finish(59))
                                case 62:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [8, 13],
                            [16, 55, 59, 62],
                            [18, 30],
                            [41, 46]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (t, r) {
                  var n = f('el-input'),
                    a = f('el-form-item'),
                    o = f('el-switch'),
                    i = f('el-alert'),
                    s = f('el-option'),
                    c = f('el-select'),
                    l = f('el-form'),
                    u = f('el-button'),
                    d = f('el-dialog')
                  return (
                    y(),
                    h(
                      d,
                      {
                        'model-value': e.visible,
                        title: w(j)('instanceBatch.dialogTitle'),
                        width: '500px',
                        onClose: re
                      },
                      {
                        footer: m(function () {
                          return [
                            v('span', D, [
                              g(
                                u,
                                { onClick: re },
                                {
                                  default: m(function () {
                                    return [b(x(w(j)('instanceBatch.cancel')), 1)]
                                  }),
                                  _: 1
                                }
                              ),
                              g(
                                u,
                                {
                                  type: 'primary',
                                  loading: K.value,
                                  disabled: $.value,
                                  onClick: oe
                                },
                                {
                                  default: m(function () {
                                    return [b(x(w(j)('instanceBatch.confirm')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading', 'disabled']
                              )
                            ])
                          ]
                        }),
                        default: m(function () {
                          return [
                            g(
                              l,
                              { ref_key: 'formRef', ref: H, model: Y, 'label-width': '100px' },
                              {
                                default: m(function () {
                                  return [
                                    g(
                                      a,
                                      { label: w(j)('instanceBatch.dnsLabel') },
                                      {
                                        default: m(function () {
                                          return [
                                            g(
                                              n,
                                              {
                                                modelValue: Y.dns,
                                                'onUpdate:modelValue':
                                                  r[0] ||
                                                  (r[0] = function (e) {
                                                    return (Y.dns = e)
                                                  }),
                                                placeholder: w(j)('instanceBatch.dnsPlaceholder')
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
                                    g(
                                      a,
                                      { label: w(j)('instanceBatch.modifyConfigLabel') },
                                      {
                                        default: m(function () {
                                          return [
                                            g(
                                              o,
                                              {
                                                modelValue: Y.modifyAndroidProp,
                                                'onUpdate:modelValue':
                                                  r[1] ||
                                                  (r[1] = function (e) {
                                                    return (Y.modifyAndroidProp = e)
                                                  })
                                              },
                                              null,
                                              8,
                                              ['modelValue']
                                            ),
                                            Y.modifyAndroidProp
                                              ? (y(),
                                                h(
                                                  i,
                                                  {
                                                    key: 0,
                                                    title: w(j)(
                                                      'instanceBatch.notModifyConfigMessage'
                                                    ),
                                                    type: 'info',
                                                    closable: !1,
                                                    style: { 'margin-top': '10px' }
                                                  },
                                                  null,
                                                  8,
                                                  ['title']
                                                ))
                                              : P('', !0),
                                            !Y.modifyAndroidProp && R.value
                                              ? (y(),
                                                h(
                                                  i,
                                                  {
                                                    key: 1,
                                                    title: w(j)(
                                                      'instanceBatch.firstStartupConfigMessage'
                                                    ),
                                                    type: 'error',
                                                    closable: !1,
                                                    style: { 'margin-top': '10px' }
                                                  },
                                                  null,
                                                  8,
                                                  ['title']
                                                ))
                                              : P('', !0),
                                            Y.modifyAndroidProp || R.value
                                              ? P('', !0)
                                              : (y(),
                                                h(
                                                  i,
                                                  {
                                                    key: 2,
                                                    title: w(j)(
                                                      'instanceBatch.doNotModifyConfigMessage'
                                                    ),
                                                    type: 'error',
                                                    closable: !1,
                                                    style: { 'margin-top': '10px' }
                                                  },
                                                  null,
                                                  8,
                                                  ['title']
                                                ))
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['label']
                                    ),
                                    k(
                                      g(
                                        a,
                                        { label: w(j)('instanceBatch.timezoneLanguageLabel') },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                c,
                                                {
                                                  modelValue: Z.value,
                                                  'onUpdate:modelValue':
                                                    r[2] ||
                                                    (r[2] = function (e) {
                                                      return (Z.value = e)
                                                    }),
                                                  placeholder: w(j)(
                                                    'instanceBatch.timezoneLanguagePlaceholder'
                                                  ),
                                                  onChange: te
                                                },
                                                {
                                                  default: m(function () {
                                                    return [
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.japan'),
                                                          value: 'jp'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.korea'),
                                                          value: 'kr'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.brazil'),
                                                          value: 'br'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.vietnam'),
                                                          value: 'vn'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.usa'),
                                                          value: 'us'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.uk'),
                                                          value: 'gb'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.thailand'),
                                                          value: 'th'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        s,
                                                        {
                                                          label: w(j)('instanceBatch.germany'),
                                                          value: 'de'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['modelValue', 'placeholder']
                                              ),
                                              g(
                                                i,
                                                {
                                                  title: w(j)('instanceBatch.timezoneLanguageInfo'),
                                                  type: 'info',
                                                  closable: !1,
                                                  style: { 'margin-top': '10px' }
                                                },
                                                null,
                                                8,
                                                ['title']
                                              )
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['label']
                                      ),
                                      [[_, Y.modifyAndroidProp]]
                                    ),
                                    k(
                                      g(
                                        z,
                                        {
                                          modelValue: Q.value,
                                          'onUpdate:modelValue':
                                            r[3] ||
                                            (r[3] = function (e) {
                                              return (Q.value = e)
                                            }),
                                          'pad-codes': J.padCodes,
                                          isBatch: ''
                                        },
                                        null,
                                        8,
                                        ['modelValue', 'pad-codes']
                                      ),
                                      [[_, Y.modifyAndroidProp && !e.isHideProxy]]
                                    ),
                                    k(
                                      g(
                                        a,
                                        { label: w(j)('instanceBatch.enableAdbLabel') },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                o,
                                                {
                                                  modelValue: Y.isOpenAdb,
                                                  'onUpdate:modelValue':
                                                    r[4] ||
                                                    (r[4] = function (e) {
                                                      return (Y.isOpenAdb = e)
                                                    })
                                                },
                                                null,
                                                8,
                                                ['modelValue']
                                              ),
                                              g(
                                                i,
                                                {
                                                  title: w(j)('instanceBatch.enableAdbInfo'),
                                                  type: 'info',
                                                  closable: !1,
                                                  style: { 'margin-top': '10px' }
                                                },
                                                null,
                                                8,
                                                ['title']
                                              )
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['label']
                                      ),
                                      [[_, Y.modifyAndroidProp]]
                                    ),
                                    k(
                                      g(
                                        a,
                                        { label: w(j)('instanceBatch.upgradeImageLabel') },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                o,
                                                {
                                                  modelValue: Y.upgradeImage,
                                                  'onUpdate:modelValue':
                                                    r[5] ||
                                                    (r[5] = function (e) {
                                                      return (Y.upgradeImage = e)
                                                    })
                                                },
                                                null,
                                                8,
                                                ['modelValue']
                                              ),
                                              Y.upgradeImage
                                                ? (y(),
                                                  h(
                                                    i,
                                                    {
                                                      key: 0,
                                                      title: w(j)('instanceBatch.upgradeImageInfo'),
                                                      type: 'info',
                                                      closable: !1,
                                                      style: { 'margin-top': '10px' }
                                                    },
                                                    null,
                                                    8,
                                                    ['title']
                                                  ))
                                                : P('', !0)
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['label']
                                      ),
                                      [[_, Y.modifyAndroidProp]]
                                    ),
                                    Y.modifyAndroidProp && Y.upgradeImage
                                      ? (y(),
                                        h(
                                          a,
                                          {
                                            key: 0,
                                            label: w(j)('instanceBatch.imageLabel'),
                                            prop: 'imageId',
                                            rules: [
                                              {
                                                required: !0,
                                                message: w(j)('instanceBatch.selectImage'),
                                                trigger: 'change'
                                              }
                                            ]
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  c,
                                                  {
                                                    modelValue: Y.imageId,
                                                    'onUpdate:modelValue':
                                                      r[6] ||
                                                      (r[6] = function (e) {
                                                        return (Y.imageId = e)
                                                      }),
                                                    placeholder: w(j)(
                                                      'instanceBatch.imagePlaceholder'
                                                    )
                                                  },
                                                  {
                                                    default: m(function () {
                                                      return [
                                                        (y(!0),
                                                        L(
                                                          O,
                                                          null,
                                                          B(W.value, function (e) {
                                                            return (
                                                              y(),
                                                              h(
                                                                s,
                                                                {
                                                                  key: e.value,
                                                                  label: e.label,
                                                                  value: e.value
                                                                },
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
                                                g(
                                                  i,
                                                  {
                                                    title: w(j)('instanceBatch.versionUpgradeOnly'),
                                                    type: 'info',
                                                    closable: !1,
                                                    style: { 'margin-top': '10px' }
                                                  },
                                                  null,
                                                  8,
                                                  ['title']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label', 'rules']
                                        ))
                                      : P('', !0)
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
                      ['model-value', 'title']
                    )
                  )
                }
              }
            })
          e('default', C(J, [['__scopeId', 'data-v-50c96e68']]))
        }
      }
    }
  )
})()
