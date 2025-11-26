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
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e)
      ;(t &&
        (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, a))
    }
    return n
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {}
      n % 2
        ? t(Object(r), !0).forEach(function (t) {
            a(e, t, r[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : t(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
    }
    return e
  }
  function a(t, n, a) {
    var r
    return (
      (r = (function (t, n) {
        if ('object' != e(t) || !t) return t
        var a = t[Symbol.toPrimitive]
        if (void 0 !== a) {
          var r = a.call(t, n || 'default')
          if ('object' != e(r)) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === n ? String : Number)(t)
      })(n, 'string')),
      (n = 'symbol' == e(r) ? r : String(r)) in t
        ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 })
        : (t[n] = a),
      t
    )
  }
  function r() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ r =
      function () {
        return n
      }
    var t,
      n = {},
      a = Object.prototype,
      o = a.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      u = l.iterator || '@@iterator',
      c = l.asyncIterator || '@@asyncIterator',
      s = l.toStringTag || '@@toStringTag'
    function f(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      f({}, '')
    } catch (t) {
      f = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function p(e, t, n, a) {
      var r = t && t.prototype instanceof b ? t : b,
        o = Object.create(r.prototype),
        l = new E(a || [])
      return (i(o, '_invoke', { value: P(e, n, l) }), o)
    }
    function d(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = p
    var g = 'suspendedStart',
      v = 'suspendedYield',
      m = 'executing',
      h = 'completed',
      y = {}
    function b() {}
    function w() {}
    function x() {}
    var _ = {}
    f(_, u, function () {
      return this
    })
    var M = Object.getPrototypeOf,
      C = M && M(M(L([])))
    C && C !== a && o.call(C, u) && (_ = C)
    var S = (x.prototype = b.prototype = Object.create(_))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function j(t, n) {
      function a(r, i, l, u) {
        var c = d(t[r], t, i)
        if ('throw' !== c.type) {
          var s = c.arg,
            f = s.value
          return f && 'object' == e(f) && o.call(f, '__await')
            ? n.resolve(f.__await).then(
                function (e) {
                  a('next', e, l, u)
                },
                function (e) {
                  a('throw', e, l, u)
                }
              )
            : n.resolve(f).then(
                function (e) {
                  ;((s.value = e), l(s))
                },
                function (e) {
                  return a('throw', e, l, u)
                }
              )
        }
        u(c.arg)
      }
      var r
      i(this, '_invoke', {
        value: function (e, t) {
          function o() {
            return new n(function (n, r) {
              a(e, t, n, r)
            })
          }
          return (r = r ? r.then(o, o) : o())
        }
      })
    }
    function P(e, n, a) {
      var r = g
      return function (o, i) {
        if (r === m) throw new Error('Generator is already running')
        if (r === h) {
          if ('throw' === o) throw i
          return { value: t, done: !0 }
        }
        for (a.method = o, a.arg = i; ; ) {
          var l = a.delegate
          if (l) {
            var u = O(l, a)
            if (u) {
              if (u === y) continue
              return u
            }
          }
          if ('next' === a.method) a.sent = a._sent = a.arg
          else if ('throw' === a.method) {
            if (r === g) throw ((r = h), a.arg)
            a.dispatchException(a.arg)
          } else 'return' === a.method && a.abrupt('return', a.arg)
          r = m
          var c = d(e, n, a)
          if ('normal' === c.type) {
            if (((r = a.done ? h : v), c.arg === y)) continue
            return { value: c.arg, done: a.done }
          }
          'throw' === c.type && ((r = h), (a.method = 'throw'), (a.arg = c.arg))
        }
      }
    }
    function O(e, n) {
      var a = n.method,
        r = e.iterator[a]
      if (r === t)
        return (
          (n.delegate = null),
          ('throw' === a &&
            e.iterator.return &&
            ((n.method = 'return'), (n.arg = t), O(e, n), 'throw' === n.method)) ||
            ('return' !== a &&
              ((n.method = 'throw'),
              (n.arg = new TypeError("The iterator does not provide a '" + a + "' method")))),
          y
        )
      var o = d(r, e.iterator, n.arg)
      if ('throw' === o.type) return ((n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), y)
      var i = o.arg
      return i
        ? i.done
          ? ((n[e.resultName] = i.value),
            (n.next = e.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
            (n.delegate = null),
            y)
          : i
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          y)
    }
    function I(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function z(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function E(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(I, this), this.reset(!0))
    }
    function L(n) {
      if (n || '' === n) {
        var a = n[u]
        if (a) return a.call(n)
        if ('function' == typeof n.next) return n
        if (!isNaN(n.length)) {
          var r = -1,
            i = function e() {
              for (; ++r < n.length; ) if (o.call(n, r)) return ((e.value = n[r]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(e(n) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      i(S, 'constructor', { value: x, configurable: !0 }),
      i(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = f(x, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), f(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(S)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      k(j.prototype),
      f(j.prototype, c, function () {
        return this
      }),
      (n.AsyncIterator = j),
      (n.async = function (e, t, a, r, o) {
        void 0 === o && (o = Promise)
        var i = new j(p(e, t, a, r), o)
        return n.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      k(S),
      f(S, s, 'Generator'),
      f(S, u, function () {
        return this
      }),
      f(S, 'toString', function () {
        return '[object Generator]'
      }),
      (n.keys = function (e) {
        var t = Object(e),
          n = []
        for (var a in t) n.push(a)
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var a = n.pop()
              if (a in t) return ((e.value = a), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (n.values = L),
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
            this.tryEntries.forEach(z),
            !e)
          )
            for (var n in this)
              't' === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var n = this
          function a(a, r) {
            return (
              (l.type = 'throw'),
              (l.arg = e),
              (n.next = a),
              r && ((n.method = 'next'), (n.arg = t)),
              !!r
            )
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r],
              l = i.completion
            if ('root' === i.tryLoc) return a('end')
            if (i.tryLoc <= this.prev) {
              var u = o.call(i, 'catchLoc'),
                c = o.call(i, 'finallyLoc')
              if (u && c) {
                if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return a(i.finallyLoc)
              } else if (u) {
                if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return a(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var a = this.tryEntries[n]
            if (a.tryLoc <= this.prev && o.call(a, 'finallyLoc') && this.prev < a.finallyLoc) {
              var r = a
              break
            }
          }
          r &&
            ('break' === e || 'continue' === e) &&
            r.tryLoc <= t &&
            t <= r.finallyLoc &&
            (r = null)
          var i = r ? r.completion : {}
          return (
            (i.type = e),
            (i.arg = t),
            r ? ((this.method = 'next'), (this.next = r.finallyLoc), y) : this.complete(i)
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
            y
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), z(n), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var a = n.completion
              if ('throw' === a.type) {
                var r = a.arg
                z(n)
              }
              return r
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, n, a) {
          return (
            (this.delegate = { iterator: L(e), resultName: n, nextLoc: a }),
            'next' === this.method && (this.arg = t),
            y
          )
        }
      }),
      n
    )
  }
  function o(e, t, n, a, r, o, i) {
    try {
      var l = e[o](i),
        u = l.value
    } catch (c) {
      return void n(c)
    }
    l.done ? t(u) : Promise.resolve(u).then(a, r)
  }
  function i(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (a, r) {
        var i = e.apply(t, n)
        function l(e) {
          o(i, a, r, l, u, 'next', e)
        }
        function u(e) {
          o(i, a, r, l, u, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-bdc99882.js',
      './usePagination-legacy-5b27e706.js',
      './useTableHeightFit-legacy-f881449c.js',
      './UploadOssDialog-legacy-ba1bd450.js',
      './index-legacy-31ac821a.js',
      './index-legacy-62a49047.js',
      './index-legacy-d4b804d0.js',
      './vue-legacy-7e5c1e5b.js',
      './InstanceStatusTag-legacy-85e0aeb6.js',
      './element-legacy-e7b6e573.js',
      './index-legacy-c5fbf408.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, t) {
      'use strict'
      var a,
        o,
        l,
        u,
        c,
        s,
        f,
        p,
        d,
        g,
        v,
        m,
        h,
        y,
        b,
        w,
        x,
        _,
        M,
        C,
        S,
        k,
        j,
        P,
        O,
        I,
        z,
        E,
        L,
        F,
        T,
        N,
        D,
        U,
        G,
        V,
        q,
        B,
        A,
        R,
        H
      return {
        setters: [
          function (e) {
            ;((a = e.f), (o = e.a), (l = e.b), (u = e.c))
          },
          function (e) {
            c = e.u
          },
          function (e) {
            s = e.u
          },
          function (e) {
            f = e.default
          },
          function (e) {
            ;((p = e.g), (d = e.q))
          },
          function (e) {
            g = e.g
          },
          function (e) {
            ;((v = e.f), (m = e.h), (h = e._))
          },
          function (e) {
            ;((y = e.y),
              (b = e.at),
              (w = e.r),
              (x = e.R),
              (_ = e.d),
              (M = e.a8),
              (C = e.ag),
              (S = e.f),
              (k = e.G),
              (j = e.H),
              (P = e.i),
              (O = e.N),
              (I = e.L),
              (z = e.M),
              (E = e.u),
              (L = e.I),
              (F = e.K),
              (T = e.b),
              (N = e.Q),
              (D = e.h))
          },
          function (e) {
            U = e.I
          },
          function (e) {
            ;((G = e.E), (V = e.G), (q = e.H))
          },
          function (e) {
            ;((B = e.s), (A = e.c), (R = e.u), (H = e.S))
          },
          null
        ],
        execute: function () {
          var t = document.createElement('style')
          ;((t.textContent =
            '.upload-to-instance-drawer[data-v-93a4ecc2]{padding:20px;height:100%;box-sizing:border-box;position:relative}.upload-to-instance-drawer .drawer-footer[data-v-93a4ecc2]{position:absolute;top:20px;right:20px}.search-wrapper[data-v-93a4ecc2]{margin-bottom:20px}.auto-install-wrapper[data-v-93a4ecc2]{display:flex;align-items:center;margin-bottom:20px}.group-filter-popper{max-height:300px!important;overflow-y:auto!important}.dialog-footer[data-v-2451f48b]{display:flex;justify-content:flex-end}.search-wrapper[data-v-07579ff6]{margin-bottom:20px}.search-wrapper[data-v-07579ff6] .el-card__body{padding-bottom:2px}.toolbar-wrapper[data-v-07579ff6]{display:flex;justify-content:space-between;margin-bottom:20px}.table-wrapper[data-v-07579ff6]{margin-bottom:20px}.pager-wrapper[data-v-07579ff6]{margin-top:20px;display:flex;justify-content:flex-start}\n'),
            document.head.appendChild(t))
          var K = { class: 'upload-to-instance-drawer' },
            J = { class: 'drawer-footer', style: { padding: '0 0 20px 0', 'text-align': 'right' } },
            W = { class: 'search-wrapper' },
            Y = { class: 'auto-install-wrapper', style: { 'margin-bottom': '20px' } },
            $ = {
              class: 'pager-wrapper',
              style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'flex-end' }
            },
            Q = y({
              __name: 'UploadToInstanceDrawer',
              props: { visible: { type: Boolean }, fileUniqueId: {} },
              emits: ['update:visible', 'success'],
              setup: function (e, t) {
                var o = t.emit,
                  l = v(),
                  u = b(l),
                  s = u.userInfo,
                  f = (u.roles, m().t),
                  h = e,
                  y = o,
                  F = c(),
                  T = F.tableKey,
                  N = F.paginationData,
                  D = F.handleCurrentChange,
                  q = F.handleSizeChange,
                  B = w([]),
                  A = w(!1),
                  R = w([]),
                  H = w([]),
                  Q = w([]),
                  X = w({}),
                  Z = x({ padName: '' }),
                  ee = (function () {
                    var e = i(
                      r().mark(function e() {
                        var t
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), g())
                                case 3:
                                  ;((t = e.sent),
                                    (Q.value = t.map(function (e) {
                                      return { text: e.name, value: e.uuid }
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取分组列表失败:', e.t0))
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
                  te = (function () {
                    var e = i(
                      r().mark(function e() {
                        var t, a, o, i, l, u, c, g
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((A.value = !0),
                                    (e.prev = 1),
                                    (t = Object.values(X.value).some(function (e) {
                                      return '' !== e && null != e
                                    })),
                                    (a = []),
                                    !t)
                                  ) {
                                    e.next = 13
                                    break
                                  }
                                  return (
                                    (e.next = 7),
                                    p(
                                      n(
                                        n({}, X.value),
                                        {},
                                        { page: N.currentPage, page_size: N.pageSize }
                                      )
                                    )
                                  )
                                case 7:
                                  if (0 !== (a = e.sent).total) {
                                    e.next = 13
                                    break
                                  }
                                  return (
                                    (B.value = []),
                                    (N.total = 0),
                                    (A.value = !1),
                                    e.abrupt('return')
                                  )
                                case 13:
                                  return (
                                    (o = {
                                      groupIds: [s.value.group_id],
                                      page: N.currentPage,
                                      rows: N.pageSize
                                    }),
                                    Z.padName &&
                                      ((i = Z.padName
                                        .split(',')
                                        .map(function (e) {
                                          return e.trim()
                                        })
                                        .filter(function (e) {
                                          return '' !== e
                                        })),
                                      (o.padCodes = i)),
                                    t &&
                                      ((o.padCodes = a.instances.map(function (e) {
                                        return e.instance_id
                                      })),
                                      (o.page = 1)),
                                    (e.next = 18),
                                    d(o)
                                  )
                                case 18:
                                  if (((l = e.sent), (e.prev = 19), !t)) {
                                    e.next = 26
                                    break
                                  }
                                  ;((u = Object.fromEntries(
                                    a.instances.map(function (e) {
                                      return [
                                        e.instance_id,
                                        n(
                                          n({}, e),
                                          {},
                                          {
                                            proxy_info: e.proxy_info ? JSON.parse(e.proxy_info) : {}
                                          }
                                        )
                                      ]
                                    })
                                  )),
                                    l.data.pageData.forEach(function (e) {
                                      u[e.padCode] && (e.record = u[e.padCode])
                                    }),
                                    (N.total = a.total),
                                    (e.next = 32))
                                  break
                                case 26:
                                  return (
                                    (e.next = 28),
                                    p({
                                      instance_ids: l.data.pageData
                                        ? l.data.pageData.map(function (e) {
                                            return e.padCode
                                          })
                                        : []
                                    })
                                  )
                                case 28:
                                  ;((c = e.sent),
                                    (g = Object.fromEntries(
                                      c.instances.map(function (e) {
                                        return [
                                          e.instance_id,
                                          n(
                                            n({}, e),
                                            {},
                                            {
                                              proxy_info: e.proxy_info
                                                ? JSON.parse(e.proxy_info)
                                                : {}
                                            }
                                          )
                                        ]
                                      })
                                    )),
                                    l.data.pageData.forEach(function (e) {
                                      g[e.padCode] && (e.record = g[e.padCode])
                                    }),
                                    (N.total = l.data.total))
                                case 32:
                                  ;((B.value = l.data.pageData || []), (e.next = 38))
                                  break
                                case 35:
                                  ;((e.prev = 35),
                                    (e.t0 = e.catch(19)),
                                    (B.value = l.data.pageData || []))
                                case 38:
                                  e.next = 45
                                  break
                                case 40:
                                  ;((e.prev = 40),
                                    (e.t1 = e.catch(1)),
                                    console.error('获取实例列表失败:', e.t1),
                                    G.error(f('storageManagement.getInstanceListFailed')),
                                    (B.value = []))
                                case 45:
                                  return ((e.prev = 45), (A.value = !1), e.finish(45))
                                case 48:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [1, 40, 45, 48],
                            [19, 35]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ne = function () {
                    1 === N.currentPage ? te() : (N.currentPage = 1)
                  },
                  ae = function () {
                    ;((Z.padName = ''), ne())
                  },
                  re = null,
                  oe = function () {
                    ;(clearTimeout(re),
                      (re = setTimeout(function () {
                        ne()
                      }, 500)))
                  },
                  ie = function (e) {
                    ;((R.value = e),
                      (H.value = e.map(function (e) {
                        return e.padCode
                      })))
                  },
                  le = function (e) {
                    ;('group' in e &&
                      (X.value.local_group_uuid = e.group.length > 0 ? e.group[0] : ''),
                      (N.currentPage = 1),
                      te())
                  },
                  ue = w(0),
                  ce = function () {
                    0 !== R.value.length
                      ? V.prompt(
                          f('storageManagement.enterCustomPath'),
                          f('storageManagement.uploadFile'),
                          {
                            confirmButtonText: f('common.confirm'),
                            cancelButtonText: f('common.cancel'),
                            inputPattern:
                              /^\/((DCIM|Documents|Download|Movies|Music|Pictures)\/)?$/,
                            inputErrorMessage: f('storageManagement.pathFormatError'),
                            inputValue: '/Documents/'
                          }
                        )
                          .then(function (e) {
                            var t = e.value,
                              n = {
                                padCodes: H.value,
                                fileUniqueId: h.fileUniqueId,
                                autoInstall: ue.value,
                                customizeFilePath: t,
                                isAuthorization: !1
                              }
                            a(n)
                              .then(function (e) {
                                ;(G.success(
                                  f('storageManagement.uploadSuccess', { count: R.value.length })
                                ),
                                  y('success'),
                                  se())
                              })
                              .catch(function (e) {
                                ;(console.error('文件上传到实例失败:', e),
                                  G.error(f('storageManagement.uploadToInstanceFailed')))
                              })
                          })
                          .catch(function () {
                            G.info(f('storageManagement.uploadCancelled'))
                          })
                      : G.warning(f('storageManagement.selectInstanceWarning'))
                  },
                  se = function () {
                    y('update:visible', !1)
                  }
                return (
                  _(
                    function () {
                      return h.visible
                    },
                    function (e) {
                      e && ((R.value = []), (H.value = []), ee(), te())
                    }
                  ),
                  _(
                    [
                      function () {
                        return N.currentPage
                      },
                      function () {
                        return N.pageSize
                      }
                    ],
                    te,
                    { immediate: !0 }
                  ),
                  function (e, t) {
                    var n = M('el-button'),
                      a = M('el-input'),
                      r = M('el-alert'),
                      o = M('el-text'),
                      i = M('el-switch'),
                      l = M('el-table-column'),
                      u = M('el-tag'),
                      c = M('el-table'),
                      s = M('el-pagination'),
                      p = M('el-drawer'),
                      d = C('loading')
                    return (
                      S(),
                      k(
                        p,
                        {
                          title: E(f)('storageManagement.uploadFileToInstance'),
                          'model-value': e.visible,
                          'onUpdate:modelValue': se,
                          size: '60%',
                          direction: 'rtl'
                        },
                        {
                          default: j(function () {
                            return [
                              P('div', K, [
                                P('div', J, [
                                  O(
                                    n,
                                    { onClick: se },
                                    {
                                      default: j(function () {
                                        return [I(z(E(f)('common.cancel')), 1)]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  O(
                                    n,
                                    {
                                      type: 'primary',
                                      onClick: ce,
                                      disabled: 0 === R.value.length
                                    },
                                    {
                                      default: j(function () {
                                        return [I(z(E(f)('storageManagement.upload')), 1)]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['disabled']
                                  )
                                ]),
                                P('div', W, [
                                  O(
                                    a,
                                    {
                                      modelValue: Z.padName,
                                      'onUpdate:modelValue':
                                        t[0] ||
                                        (t[0] = function (e) {
                                          return (Z.padName = e)
                                        }),
                                      placeholder: E(f)('storageManagement.enterInstanceCode'),
                                      style: { width: '300px', 'margin-right': '10px' },
                                      onInput: oe
                                    },
                                    {
                                      append: j(function () {
                                        return [
                                          O(
                                            n,
                                            { onClick: ae },
                                            {
                                              default: j(function () {
                                                return [I(z(E(f)('common.clear')), 1)]
                                              }),
                                              _: 1
                                            }
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['modelValue', 'placeholder']
                                  ),
                                  O(
                                    n,
                                    { icon: 'RefreshRight', onClick: te },
                                    {
                                      default: j(function () {
                                        return [I(z(E(f)('common.refresh')), 1)]
                                      }),
                                      _: 1
                                    }
                                  )
                                ]),
                                O(
                                  r,
                                  {
                                    title:
                                      E(f)('storageManagement.supportedPaths') +
                                      '/DCIM/, /Documents/, /Download/, /Movies/, /Music/, /Pictures/',
                                    type: 'info',
                                    'show-icon': '',
                                    closable: !1,
                                    style: { 'margin-bottom': '20px' }
                                  },
                                  null,
                                  8,
                                  ['title']
                                ),
                                P('div', Y, [
                                  O(o, null, {
                                    default: j(function () {
                                      return [I(z(E(f)('storageManagement.autoInstallApp')), 1)]
                                    }),
                                    _: 1
                                  }),
                                  O(
                                    i,
                                    {
                                      modelValue: ue.value,
                                      'onUpdate:modelValue':
                                        t[1] ||
                                        (t[1] = function (e) {
                                          return (ue.value = e)
                                        }),
                                      'active-value': 1,
                                      'inactive-value': 0,
                                      style: { 'margin-left': '10px' }
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  )
                                ]),
                                L(
                                  (S(),
                                  k(
                                    c,
                                    {
                                      key: E(T),
                                      data: B.value,
                                      onSelectionChange: ie,
                                      onFilterChange: le,
                                      'max-height': 'calc(100vh - 300px)',
                                      style: { 'margin-bottom': '20px' }
                                    },
                                    {
                                      default: j(function () {
                                        return [
                                          O(l, { type: 'selection', width: '55' }),
                                          O(
                                            l,
                                            {
                                              prop: 'padCode',
                                              label: E(f)('storageManagement.instanceInfo'),
                                              width: '300'
                                            },
                                            {
                                              default: j(function (e) {
                                                var t = e.row
                                                return [
                                                  P(
                                                    'div',
                                                    null,
                                                    z(E(f)('storageManagement.instanceCode')) +
                                                      '：' +
                                                      z(t.padCode),
                                                    1
                                                  ),
                                                  P(
                                                    'div',
                                                    null,
                                                    z(E(f)('storageManagement.instanceSpec')) +
                                                      '：' +
                                                      z(t.padGrade),
                                                    1
                                                  ),
                                                  P('div', null, [
                                                    I(
                                                      z(E(f)('storageManagement.instanceType')) +
                                                        '： ',
                                                      1
                                                    ),
                                                    O(
                                                      u,
                                                      { type: (t.padType, 'info') },
                                                      {
                                                        default: j(function () {
                                                          return [
                                                            I(
                                                              z(
                                                                'real' === t.padType
                                                                  ? E(f)(
                                                                      'storageManagement.realMachine'
                                                                    )
                                                                  : E(f)(
                                                                      'storageManagement.virtualMachine'
                                                                    )
                                                              ),
                                                              1
                                                            )
                                                          ]
                                                        }),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ['type']
                                                    )
                                                  ]),
                                                  P(
                                                    'div',
                                                    null,
                                                    z(E(f)('storageManagement.instanceIp')) +
                                                      '：' +
                                                      z(t.padIp),
                                                    1
                                                  ),
                                                  P(
                                                    'div',
                                                    null,
                                                    z(E(f)('storageManagement.image')) +
                                                      '：' +
                                                      z(t.imageId),
                                                    1
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          O(
                                            l,
                                            {
                                              prop: 'status',
                                              label: E(f)('storageManagement.status')
                                            },
                                            {
                                              default: j(function (e) {
                                                var t = e.row
                                                return [
                                                  O(U, { status: t.padStatus }, null, 8, ['status'])
                                                ]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          O(
                                            l,
                                            {
                                              prop: 'group',
                                              label: E(f)('storageManagement.group'),
                                              'column-key': 'group',
                                              filters: Q.value,
                                              'filter-multiple': !1,
                                              'min-width': '150',
                                              'popper-class': 'group-filter-popper'
                                            },
                                            {
                                              default: j(function (e) {
                                                var t,
                                                  n = e.row
                                                return [
                                                  I(
                                                    z(
                                                      (null === (t = n.record) || void 0 === t
                                                        ? void 0
                                                        : t.group_name) || '--'
                                                    ),
                                                    1
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label', 'filters']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['data']
                                  )),
                                  [[d, A.value]]
                                ),
                                P('div', $, [
                                  O(
                                    s,
                                    {
                                      layout: E(N).layout,
                                      'page-sizes': E(N).pageSizes,
                                      total: E(N).total,
                                      'page-size': E(N).pageSize,
                                      'current-page': E(N).currentPage,
                                      onSizeChange: E(q),
                                      onCurrentChange: E(D)
                                    },
                                    null,
                                    8,
                                    [
                                      'layout',
                                      'page-sizes',
                                      'total',
                                      'page-size',
                                      'current-page',
                                      'onSizeChange',
                                      'onCurrentChange'
                                    ]
                                  )
                                ])
                              ])
                            ]
                          }),
                          _: 1
                        },
                        8,
                        ['title', 'model-value']
                      )
                    )
                  }
                )
              }
            }),
            X = h(Q, [['__scopeId', 'data-v-93a4ecc2']]),
            Z = { class: 'el-upload__text' },
            ee = y({
              __name: 'ThreeStepUploadDialog',
              props: { visible: { type: Boolean, default: !1 } },
              emits: ['update:visible', 'success'],
              setup: function (e, t) {
                var n = t.emit,
                  a = m().t,
                  l = w(),
                  u = w(),
                  c = x({ file: null }),
                  s = w(null),
                  f = w(!1),
                  p = w(0),
                  d = w(''),
                  g = function (e) {
                    s.value = e.raw
                  },
                  v = function () {
                    s.value = null
                  },
                  h = function () {
                    f.value
                      ? G.warning(a('storageManagement.fileUploadingWarning'))
                      : (n('update:visible', !1), C(), T(), u.value && u.value.clearFiles())
                  },
                  y = function (e) {
                    return new Promise(function (t, n) {
                      var r = new H.ArrayBuffer(),
                        o = new FileReader()
                      ;((o.onload = function (e) {
                        var n
                        r.append(null === (n = e.target) || void 0 === n ? void 0 : n.result)
                        var a = r.end()
                        t(a)
                      }),
                        (o.onerror = function (e) {
                          n(new Error(a('storageManagement.calculateMD5Failed')))
                        }),
                        o.readAsArrayBuffer(e))
                    })
                  },
                  b = function () {
                    G.warning(a('storageManagement.onlyOneFileAllowed'))
                  },
                  _ = (function () {
                    var e = i(
                      r().mark(function e() {
                        var t, i, l, u, c, g
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (s.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    G.error(a('storageManagement.pleaseSelectFile')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (f.value = !0),
                                    (p.value = 0),
                                    (d.value = ''),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    B({ file_name: s.value.name, file_size: s.value.size })
                                  )
                                case 9:
                                  return (
                                    (t = e.sent),
                                    (i = t.upload_id),
                                    (e.next = 13),
                                    L(i, s.value)
                                  )
                                case 13:
                                  return ((e.next = 15), A({ upload_id: i }))
                                case 15:
                                  return (
                                    (l = e.sent),
                                    (u = l.file_md5),
                                    (c = l.download_url),
                                    (g = { fileUrl: c, fileName: s.value.name, fileMd5: u }),
                                    (e.next = 20),
                                    o(g)
                                  )
                                case 20:
                                  ;((d.value = 'success'),
                                    G.success(a('storageManagement.fileUploadSuccess')),
                                    (f.value = !1),
                                    n('success'),
                                    h(),
                                    (e.next = 32))
                                  break
                                case 27:
                                  ;((e.prev = 27),
                                    (e.t0 = e.catch(6)),
                                    console.error('文件上传失败:', e.t0),
                                    (d.value = 'exception'),
                                    G.error(a('storageManagement.fileUploadFailed') + e.t0.message))
                                case 32:
                                  return ((e.prev = 32), (f.value = !1), e.finish(32))
                                case 35:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[6, 27, 32, 35]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  C = function () {
                    ;((c.file = null),
                      (s.value = null),
                      (f.value = !1),
                      (p.value = 0),
                      (d.value = ''))
                  },
                  L = (function () {
                    var e = i(
                      r().mark(function e(t, n) {
                        var a, o, i, l, u, c, s, f
                        return r().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;((a = 1048576), (o = Math.ceil(n.size / a)), (i = 0))
                              case 3:
                                if (!(i < o)) {
                                  e.next = 21
                                  break
                                }
                                return (
                                  (l = i * a),
                                  (u = Math.min(l + a, n.size)),
                                  (c = n.slice(l, u)),
                                  (s = new FormData()).append('upload_id', t),
                                  s.append('chunk_index', i.toString()),
                                  s.append('file', c),
                                  (e.next = 13),
                                  y(c)
                                )
                              case 13:
                                return ((f = e.sent), s.append('chunk_md5', f), (e.next = 17), R(s))
                              case 17:
                                p.value = Math.round(((i + 1) / o) * 100)
                              case 18:
                                ;(i++, (e.next = 3))
                                break
                              case 21:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function (t, n) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  T = function () {
                    ;((s.value = null), (f.value = !1), (p.value = 0), (d.value = ''))
                  }
                return function (t, n) {
                  var r = M('el-icon'),
                    o = M('el-upload'),
                    i = M('el-form-item'),
                    m = M('el-progress'),
                    y = M('el-form'),
                    w = M('el-button'),
                    x = M('el-dialog')
                  return (
                    S(),
                    k(
                      x,
                      {
                        'model-value': e.visible,
                        title: E(a)('storageManagement.uploadFileToCloud'),
                        width: '500px',
                        'before-close': h
                      },
                      {
                        footer: j(function () {
                          return [
                            O(
                              w,
                              { onClick: h },
                              {
                                default: j(function () {
                                  return [I(z(E(a)('common.cancel')), 1)]
                                }),
                                _: 1
                              }
                            ),
                            O(
                              w,
                              {
                                type: 'primary',
                                onClick: _,
                                loading: f.value,
                                disabled: !s.value || f.value
                              },
                              {
                                default: j(function () {
                                  return [
                                    I(
                                      z(
                                        f.value
                                          ? E(a)('storageManagement.uploading')
                                          : E(a)('storageManagement.startUpload')
                                      ),
                                      1
                                    )
                                  ]
                                }),
                                _: 1
                              },
                              8,
                              ['loading', 'disabled']
                            )
                          ]
                        }),
                        default: j(function () {
                          return [
                            O(
                              y,
                              { model: c, 'label-width': '100px', ref_key: 'formRef', ref: l },
                              {
                                default: j(function () {
                                  return [
                                    O(
                                      i,
                                      {
                                        label: E(a)('storageManagement.selectFile'),
                                        prop: 'file',
                                        rules: [
                                          {
                                            required: !0,
                                            message: E(a)('storageManagement.pleaseSelectFile'),
                                            trigger: 'change'
                                          }
                                        ]
                                      },
                                      {
                                        default: j(function () {
                                          return [
                                            O(
                                              o,
                                              {
                                                ref_key: 'uploadRef',
                                                ref: u,
                                                class: 'w-full',
                                                drag: '',
                                                'auto-upload': !1,
                                                'show-file-list': !0,
                                                'on-change': g,
                                                'on-remove': v,
                                                limit: 1,
                                                'on-exceed': b
                                              },
                                              {
                                                default: j(function () {
                                                  return [
                                                    O(
                                                      r,
                                                      { class: 'el-icon--upload' },
                                                      {
                                                        default: j(function () {
                                                          return [O(E(q))]
                                                        }),
                                                        _: 1
                                                      }
                                                    ),
                                                    P(
                                                      'div',
                                                      Z,
                                                      z(E(a)('storageManagement.dragFileOrClick')),
                                                      1
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              },
                                              512
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['label', 'rules']
                                    ),
                                    p.value > 0
                                      ? (S(),
                                        k(
                                          m,
                                          {
                                            key: 0,
                                            percentage: p.value,
                                            status: d.value,
                                            style: { 'margin-top': '20px' }
                                          },
                                          null,
                                          8,
                                          ['percentage', 'status']
                                        ))
                                      : F('', !0)
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
            }),
            te = h(ee, [['__scopeId', 'data-v-2451f48b']]),
            ne = { class: 'app-container' },
            ae = { class: 'pager-wrapper' }
          e(
            'default',
            h(
              y({
                __name: 'index',
                setup: function (e) {
                  var t = m().t,
                    n = c(),
                    a = n.tableKey,
                    r = n.paginationData,
                    o = n.handleCurrentChange,
                    i = n.handleSizeChange,
                    p = s(),
                    d = p.cTable,
                    g = p.maxHeight,
                    v = p.handleGetTableHeight,
                    h = w([]),
                    y = w(!1),
                    b = null,
                    C = x({ fileName: '', page: 1, rows: 10 }),
                    L = function () {
                      ;((y.value = !0),
                        a.value++,
                        l({ fileName: C.fileName || void 0, page: r.currentPage, rows: r.pageSize })
                          .then(function (e) {
                            ;((r.total = e.data.total), (h.value = e.data.pageData || []))
                          })
                          .catch(function (e) {
                            ;(console.error('获取文件列表失败:', e),
                              G.error(t('storageManagement.getFileListFailed')),
                              (h.value = []))
                          })
                          .finally(function () {
                            y.value = !1
                          }))
                    },
                    F = function () {
                      1 === r.currentPage ? L() : (r.currentPage = 1)
                    },
                    U = function () {
                      ;((C.fileName = ''), F())
                    },
                    q = null,
                    B = function () {
                      ;(clearTimeout(q),
                        (q = setTimeout(function () {
                          F()
                        }, 500)))
                    },
                    A = w(!1),
                    R = function () {
                      A.value = !0
                    },
                    H = w(!1),
                    K = function () {
                      H.value = !0
                    },
                    J = function () {
                      L()
                    },
                    W = w(!1),
                    Y = w(''),
                    $ = function () {
                      L()
                    }
                  return (
                    T(function () {
                      ;(L(),
                        v(),
                        window.addEventListener('resize', v),
                        b && clearInterval(b),
                        (b = setInterval(function () {
                          L()
                        }, 6e3)))
                    }),
                    N(function () {
                      ;(window.removeEventListener('resize', v),
                        b && (clearInterval(b), (b = null)))
                    }),
                    _(
                      [
                        function () {
                          return r.currentPage
                        },
                        function () {
                          return r.pageSize
                        }
                      ],
                      L,
                      { immediate: !0 }
                    ),
                    function (e, n) {
                      var l = M('el-button'),
                        c = M('el-input'),
                        s = M('PageBanner'),
                        p = M('el-table-column'),
                        v = M('el-table'),
                        m = M('el-pagination')
                      return (
                        S(),
                        D('div', ne, [
                          O(
                            s,
                            { title: '' },
                            {
                              extra: j(function () {
                                return [
                                  O(
                                    c,
                                    {
                                      modelValue: C.fileName,
                                      'onUpdate:modelValue':
                                        n[0] ||
                                        (n[0] = function (e) {
                                          return (C.fileName = e)
                                        }),
                                      placeholder: E(t)(
                                        'storageManagement.searchFileNamePlaceholder'
                                      ),
                                      style: { width: '300px', 'margin-right': '10px' },
                                      onInput: B
                                    },
                                    {
                                      append: j(function () {
                                        return [
                                          O(
                                            l,
                                            { onClick: U },
                                            {
                                              default: j(function () {
                                                return [
                                                  I(z(E(t)('storageManagement.clearSearch')), 1)
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
                                    ['modelValue', 'placeholder']
                                  ),
                                  O(
                                    l,
                                    { icon: 'RefreshRight', onClick: L },
                                    {
                                      default: j(function () {
                                        return [I(z(E(t)('storageManagement.refresh')), 1)]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  O(
                                    l,
                                    { icon: 'Plus', type: 'primary', onClick: R },
                                    {
                                      default: j(function () {
                                        return [I(z(E(t)('storageManagement.linkUpload')), 1)]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  O(
                                    l,
                                    { icon: 'Upload', type: 'success', onClick: K },
                                    {
                                      default: j(function () {
                                        return [I(z(E(t)('storageManagement.localUpload')), 1)]
                                      }),
                                      _: 1
                                    }
                                  )
                                ]
                              }),
                              _: 1
                            }
                          ),
                          (S(),
                          k(
                            v,
                            {
                              ref_key: 'cTable',
                              ref: d,
                              key: E(a),
                              style: { 'margin-top': '20px' },
                              data: h.value,
                              'max-height': E(g)
                            },
                            {
                              default: j(function () {
                                return [
                                  O(
                                    p,
                                    { prop: 'fileName', label: E(t)('storageManagement.fileName') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  O(
                                    p,
                                    { prop: 'fileSize', label: E(t)('storageManagement.fileSize') },
                                    {
                                      default: j(function (e) {
                                        var t = e.row
                                        return [
                                          I(z((t.fileSize / 1024 / 1024).toFixed(2)) + ' MB ', 1)
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  O(
                                    p,
                                    { prop: 'fileMd5', label: E(t)('storageManagement.fileMd5') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  O(
                                    p,
                                    {
                                      prop: 'createdTime',
                                      label: E(t)('storageManagement.createTime')
                                    },
                                    {
                                      default: j(function (e) {
                                        var t = e.row
                                        return [I(z(new Date(t.createdTime).toLocaleString()), 1)]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  O(
                                    p,
                                    { label: E(t)('storageManagement.operations'), width: '300' },
                                    {
                                      default: j(function (e) {
                                        return [
                                          O(
                                            l,
                                            {
                                              link: '',
                                              type: 'primary',
                                              onClick: function (t) {
                                                return (
                                                  (n = e.row.fileUniqueId),
                                                  (Y.value = n),
                                                  void (W.value = !0)
                                                )
                                                var n
                                              }
                                            },
                                            {
                                              default: j(function () {
                                                return [
                                                  I(
                                                    z(E(t)('storageManagement.uploadToInstance')),
                                                    1
                                                  )
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          O(
                                            l,
                                            {
                                              link: '',
                                              type: 'danger',
                                              onClick: function (n) {
                                                return (
                                                  (a = e.row),
                                                  void V.confirm(
                                                    t('storageManagement.confirmDeleteFile', {
                                                      fileName: a.fileName
                                                    }),
                                                    t('storageManagement.prompt'),
                                                    {
                                                      confirmButtonText: t('common.confirm'),
                                                      cancelButtonText: t('common.cancel'),
                                                      type: 'warning'
                                                    }
                                                  ).then(function () {
                                                    u({ fileUniqueIds: [a.fileUniqueId] })
                                                      .then(function () {
                                                        ;(G.success(
                                                          t('storageManagement.deleteFileSuccess')
                                                        ),
                                                          L())
                                                      })
                                                      .catch(function (e) {
                                                        ;(console.error('删除文件失败:', e),
                                                          G.error(
                                                            t('storageManagement.deleteFileFailed')
                                                          ))
                                                      })
                                                  })
                                                )
                                                var a
                                              }
                                            },
                                            {
                                              default: j(function () {
                                                return [I(z(E(t)('storageManagement.delete')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  )
                                ]
                              }),
                              _: 1
                            },
                            8,
                            ['data', 'max-height']
                          )),
                          O(
                            f,
                            {
                              visible: A.value,
                              'onUpdate:visible':
                                n[1] ||
                                (n[1] = function (e) {
                                  return (A.value = e)
                                }),
                              needUrl: !0,
                              onSuccess: J
                            },
                            null,
                            8,
                            ['visible']
                          ),
                          O(
                            te,
                            {
                              visible: H.value,
                              'onUpdate:visible':
                                n[2] ||
                                (n[2] = function (e) {
                                  return (H.value = e)
                                }),
                              onSuccess: J
                            },
                            null,
                            8,
                            ['visible']
                          ),
                          O(
                            X,
                            {
                              visible: W.value,
                              'onUpdate:visible':
                                n[3] ||
                                (n[3] = function (e) {
                                  return (W.value = e)
                                }),
                              fileUniqueId: Y.value,
                              onSuccess: $
                            },
                            null,
                            8,
                            ['visible', 'fileUniqueId']
                          ),
                          P('div', ae, [
                            O(
                              m,
                              {
                                background: '',
                                layout: E(r).layout,
                                'page-sizes': E(r).pageSizes,
                                total: E(r).total,
                                'page-size': E(r).pageSize,
                                'current-page': E(r).currentPage,
                                onSizeChange: E(i),
                                onCurrentChange: E(o)
                              },
                              null,
                              8,
                              [
                                'layout',
                                'page-sizes',
                                'total',
                                'page-size',
                                'current-page',
                                'onSizeChange',
                                'onCurrentChange'
                              ]
                            )
                          ])
                        ])
                      )
                    }
                  )
                }
              }),
              [['__scopeId', 'data-v-07579ff6']]
            )
          )
        }
      }
    }
  )
})()
