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
      var r = Object.getOwnPropertySymbols(e)
      ;(t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r))
    }
    return n
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var a = null != arguments[n] ? arguments[n] : {}
      n % 2
        ? t(Object(a), !0).forEach(function (t) {
            r(e, t, a[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : t(Object(a)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            })
    }
    return e
  }
  function r(t, n, r) {
    var a
    return (
      (a = (function (t, n) {
        if ('object' != e(t) || !t) return t
        var r = t[Symbol.toPrimitive]
        if (void 0 !== r) {
          var a = r.call(t, n || 'default')
          if ('object' != e(a)) return a
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === n ? String : Number)(t)
      })(n, 'string')),
      (n = 'symbol' == e(a) ? a : String(a)) in t
        ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (t[n] = r),
      t
    )
  }
  function a() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ a =
      function () {
        return n
      }
    var t,
      n = {},
      r = Object.prototype,
      i = r.hasOwnProperty,
      l =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      o = 'function' == typeof Symbol ? Symbol : {},
      u = o.iterator || '@@iterator',
      c = o.asyncIterator || '@@asyncIterator',
      s = o.toStringTag || '@@toStringTag'
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
    function d(e, t, n, r) {
      var a = t && t.prototype instanceof x ? t : x,
        i = Object.create(a.prototype),
        o = new V(r || [])
      return (l(i, '_invoke', { value: j(e, n, o) }), i)
    }
    function m(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = d
    var p = 'suspendedStart',
      v = 'suspendedYield',
      h = 'executing',
      g = 'completed',
      y = {}
    function x() {}
    function b() {}
    function w() {}
    var _ = {}
    f(_, u, function () {
      return this
    })
    var P = Object.getPrototypeOf,
      L = P && P(P(T([])))
    L && L !== r && i.call(L, u) && (_ = L)
    var M = (w.prototype = x.prototype = Object.create(_))
    function E(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function k(t, n) {
      function r(a, l, o, u) {
        var c = m(t[a], t, l)
        if ('throw' !== c.type) {
          var s = c.arg,
            f = s.value
          return f && 'object' == e(f) && i.call(f, '__await')
            ? n.resolve(f.__await).then(
                function (e) {
                  r('next', e, o, u)
                },
                function (e) {
                  r('throw', e, o, u)
                }
              )
            : n.resolve(f).then(
                function (e) {
                  ;((s.value = e), o(s))
                },
                function (e) {
                  return r('throw', e, o, u)
                }
              )
        }
        u(c.arg)
      }
      var a
      l(this, '_invoke', {
        value: function (e, t) {
          function i() {
            return new n(function (n, a) {
              r(e, t, n, a)
            })
          }
          return (a = a ? a.then(i, i) : i())
        }
      })
    }
    function j(e, n, r) {
      var a = p
      return function (i, l) {
        if (a === h) throw new Error('Generator is already running')
        if (a === g) {
          if ('throw' === i) throw l
          return { value: t, done: !0 }
        }
        for (r.method = i, r.arg = l; ; ) {
          var o = r.delegate
          if (o) {
            var u = O(o, r)
            if (u) {
              if (u === y) continue
              return u
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === p) throw ((a = g), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = h
          var c = m(e, n, r)
          if ('normal' === c.type) {
            if (((a = r.done ? g : v), c.arg === y)) continue
            return { value: c.arg, done: r.done }
          }
          'throw' === c.type && ((a = g), (r.method = 'throw'), (r.arg = c.arg))
        }
      }
    }
    function O(e, n) {
      var r = n.method,
        a = e.iterator[r]
      if (a === t)
        return (
          (n.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((n.method = 'return'), (n.arg = t), O(e, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'),
              (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          y
        )
      var i = m(a, e.iterator, n.arg)
      if ('throw' === i.type) return ((n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), y)
      var l = i.arg
      return l
        ? l.done
          ? ((n[e.resultName] = l.value),
            (n.next = e.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
            (n.delegate = null),
            y)
          : l
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          y)
    }
    function S(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function C(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function V(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(S, this), this.reset(!0))
    }
    function T(n) {
      if (n || '' === n) {
        var r = n[u]
        if (r) return r.call(n)
        if ('function' == typeof n.next) return n
        if (!isNaN(n.length)) {
          var a = -1,
            l = function e() {
              for (; ++a < n.length; ) if (i.call(n, a)) return ((e.value = n[a]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (l.next = l)
        }
      }
      throw new TypeError(e(n) + ' is not iterable')
    }
    return (
      (b.prototype = w),
      l(M, 'constructor', { value: w, configurable: !0 }),
      l(w, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = f(w, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), f(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(M)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      E(k.prototype),
      f(k.prototype, c, function () {
        return this
      }),
      (n.AsyncIterator = k),
      (n.async = function (e, t, r, a, i) {
        void 0 === i && (i = Promise)
        var l = new k(d(e, t, r, a), i)
        return n.isGeneratorFunction(t)
          ? l
          : l.next().then(function (e) {
              return e.done ? e.value : l.next()
            })
      }),
      E(M),
      f(M, s, 'Generator'),
      f(M, u, function () {
        return this
      }),
      f(M, 'toString', function () {
        return '[object Generator]'
      }),
      (n.keys = function (e) {
        var t = Object(e),
          n = []
        for (var r in t) n.push(r)
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop()
              if (r in t) return ((e.value = r), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (n.values = T),
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
            this.tryEntries.forEach(C),
            !e)
          )
            for (var n in this)
              't' === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
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
          function r(r, a) {
            return (
              (o.type = 'throw'),
              (o.arg = e),
              (n.next = r),
              a && ((n.method = 'next'), (n.arg = t)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var l = this.tryEntries[a],
              o = l.completion
            if ('root' === l.tryLoc) return r('end')
            if (l.tryLoc <= this.prev) {
              var u = i.call(l, 'catchLoc'),
                c = i.call(l, 'finallyLoc')
              if (u && c) {
                if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
                if (this.prev < l.finallyLoc) return r(l.finallyLoc)
              } else if (u) {
                if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < l.finallyLoc) return r(l.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var a = r
              break
            }
          }
          a &&
            ('break' === e || 'continue' === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null)
          var l = a ? a.completion : {}
          return (
            (l.type = e),
            (l.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), y) : this.complete(l)
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
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), C(n), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                C(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = t),
            y
          )
        }
      }),
      n
    )
  }
  function i(e, t, n, r, a, i, l) {
    try {
      var o = e[i](l),
        u = o.value
    } catch (c) {
      return void n(c)
    }
    o.done ? t(u) : Promise.resolve(u).then(r, a)
  }
  function l(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (r, a) {
        var l = e.apply(t, n)
        function o(e) {
          i(l, r, a, o, u, 'next', e)
        }
        function u(e) {
          i(l, r, a, o, u, 'throw', e)
        }
        o(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './usePagination-legacy-5b27e706.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, t) {
      'use strict'
      var r, i, o, u, c, s, f, d, m, p, v, h, g, y, x, b, w, _, P, L, M, E, k, j, O, S, C, V, T
      return {
        setters: [
          function (e) {
            ;((r = e.q), (i = e._), (o = e.h))
          },
          function (e) {
            u = e.u
          },
          function (e) {
            ;((c = e.e), (s = e.E))
          },
          function (e) {
            ;((f = e.r),
              (d = e.R),
              (m = e.b),
              (p = e.d),
              (v = e.Q),
              (h = e.a8),
              (g = e.ag),
              (y = e.f),
              (x = e.h),
              (b = e.i),
              (w = e.N),
              (_ = e.u),
              (P = e.H),
              (L = e.n),
              (M = e.L),
              (E = e.M),
              (k = e.G),
              (j = e.F),
              (O = e.a0),
              (S = e.B),
              (C = e.I),
              (V = e.A),
              (T = e.K))
          },
          null
        ],
        execute: function () {
          var t = document.createElement('style')
          function z(e) {
            return r({ url: '/mail/prefix/apply', method: 'POST', data: e, baseURL: '/cpyservice' })
          }
          function A() {
            return r({ url: '/mail/prefix/list', method: 'GET', baseURL: '/cpyservice' })
          }
          function F(e) {
            return r({
              url: '/mail/address/generate',
              method: 'POST',
              data: e,
              baseURL: '/cpyservice'
            })
          }
          function R(e) {
            return r({
              url: '/mail/receive?all=' + e.filter,
              method: 'POST',
              data: e,
              baseURL: '/cpyservice'
            })
          }
          function U(e) {
            return r({ url: '/mail/list', method: 'GET', params: e, baseURL: '/cpyservice' })
          }
          function H(e) {
            return r({ url: '/mail/read', method: 'POST', data: e, baseURL: '/cpyservice' })
          }
          ;((t.textContent =
            '.email-container[data-v-48510ff8]{padding:20px}.header-actions[data-v-48510ff8]{margin-bottom:20px;text-align:right;display:flex;justify-content:flex-end}.card-header[data-v-48510ff8]{display:flex;justify-content:space-between;align-items:center}.mail-actions[data-v-48510ff8]{display:flex;align-items:center;gap:10px}.email-menu[data-v-48510ff8]{border:none}.email-menu .el-menu-item[data-v-48510ff8]{height:auto;line-height:normal;padding:12px 20px}.unread-mail[data-v-48510ff8]{font-weight:700}.no-data[data-v-48510ff8]{display:flex;justify-content:center;align-items:center;height:100%;min-height:200px}.no-data[data-v-48510ff8] .el-empty__image{width:100px;height:100px}.no-data[data-v-48510ff8] .el-empty__description{font-size:14px;color:#909399}.subject-text[data-v-48510ff8]{display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mail-detail[data-v-48510ff8]{padding:20px;height:100%;box-sizing:border-box;overflow-y:auto}.mail-header h2[data-v-48510ff8]{margin-top:0;margin-bottom:20px}.mail-info[data-v-48510ff8]{background-color:#f5f7fa;padding:15px;border-radius:4px;margin-bottom:20px}.mail-info p[data-v-48510ff8]{margin:5px 0}.mail-content[data-v-48510ff8]{line-height:1.6;word-wrap:break-word;word-break:break-word;white-space:pre-wrap;overflow-wrap:break-word;max-width:100%}\n'),
            document.head.appendChild(t))
          var N = { class: 'email-container' },
            D = { class: 'header-actions' },
            G = { style: { 'margin-right': '20px' } },
            I = { class: 'card-header' },
            Y = { style: { display: 'flex', 'align-items': 'center', gap: '10px' } },
            q = { key: 1, class: 'no-data' },
            B = {
              class: 'pager-wrapper',
              style: { padding: '10px', display: 'flex', 'justify-content': 'flex-end' }
            },
            K = { class: 'card-header' },
            Q = { class: 'mail-actions' },
            Z = { class: 'mail-list' },
            J = { class: 'dialog-footer' },
            W = { key: 0, class: 'mail-detail' },
            X = { class: 'mail-header' },
            $ = { class: 'mail-info' },
            ee = { class: 'mail-content' },
            te = ['innerHTML'],
            ne = {
              __name: 'index',
              setup: function (e) {
                var t = o().t,
                  r = f(!1),
                  i = f(!1),
                  ne = f(!1),
                  re = f(!1),
                  ae = f(''),
                  ie = f('all'),
                  le = f([]),
                  oe = f([]),
                  ue = f(null),
                  ce = f([]),
                  se = f(500),
                  fe = f(500)
                f(0)
                var de = u(),
                  me = de.paginationData,
                  pe = de.handleCurrentChange,
                  ve = de.handleSizeChange,
                  he = d({ createdAfter: null }),
                  ge = f(''),
                  ye = f(null),
                  xe = d({ existingPrefix: '', newPrefix: '', emailAddress: '' }),
                  be = {
                    emailAddress: [
                      {
                        required: !0,
                        message: t('emailManagement.inputEmailLengthRequired'),
                        trigger: 'blur'
                      },
                      {
                        type: 'number',
                        min: 6,
                        max: 9,
                        message: t('emailManagement.emailLengthRange'),
                        trigger: 'blur'
                      }
                    ]
                  },
                  we = f(),
                  _e = (function () {
                    var e = l(
                      a().mark(function e() {
                        var n
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((r.value = !0), (e.prev = 1), (e.next = 4), A())
                                case 4:
                                  ;((n = e.sent), (ce.value = n || []), (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(1)),
                                    console.error(t('emailManagement.getPrefixListFailed'), e.t0),
                                    s.error(t('emailManagement.getPrefixListFailed')))
                                case 12:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 8]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Pe = function () {
                    ;((xe.existingPrefix = ''),
                      (xe.newPrefix = ''),
                      (xe.emailAddress = ''),
                      we.value && we.value.resetFields())
                  },
                  Le = function (e) {
                    e && (xe.newPrefix = '')
                  },
                  Me = function () {
                    we.value &&
                      we.value.validate(
                        (function () {
                          var e = l(
                            a().mark(function e(n) {
                              var i
                              return a().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!n) {
                                          e.next = 27
                                          break
                                        }
                                        if (((re.value = !0), (e.prev = 2), !xe.newPrefix)) {
                                          e.next = 8
                                          break
                                        }
                                        return ((e.next = 6), z({ prefix: xe.newPrefix }))
                                      case 6:
                                        e.next = 11
                                        break
                                      case 8:
                                        if (xe.existingPrefix) {
                                          e.next = 11
                                          break
                                        }
                                        return (
                                          s.warning(t('emailManagement.selectOrInputPrefix')),
                                          e.abrupt('return')
                                        )
                                      case 11:
                                        return (
                                          (i = xe.newPrefix || xe.existingPrefix),
                                          (e.next = 14),
                                          F({ prefix: i, length: parseInt(xe.emailAddress) })
                                        )
                                      case 14:
                                        ;(s.success(t('emailManagement.applyEmailSuccess')),
                                          (r.value = !1),
                                          Pe(),
                                          Ee(),
                                          (e.next = 24))
                                        break
                                      case 20:
                                        ;((e.prev = 20),
                                          (e.t0 = e.catch(2)),
                                          console.error(
                                            t('emailManagement.applyEmailFailed'),
                                            e.t0
                                          ),
                                          s.error(
                                            t('emailManagement.applyEmailFailed') +
                                              (e.t0.message || t('emailManagement.unknownError'))
                                          ))
                                      case 24:
                                        return ((e.prev = 24), (re.value = !1), e.finish(24))
                                      case 27:
                                      case 'end':
                                        return e.stop()
                                    }
                                },
                                e,
                                null,
                                [[2, 20, 24, 27]]
                              )
                            })
                          )
                          return function (t) {
                            return e.apply(this, arguments)
                          }
                        })()
                      )
                  },
                  Ee = (function () {
                    var e = l(
                      a().mark(function e() {
                        var r, i
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (r = { page: me.currentPage, page_size: me.pageSize }),
                                    he.createdAfter && (r.start_time = he.createdAfter),
                                    (e.next = 5),
                                    U(r)
                                  )
                                case 5:
                                  ;((i = e.sent),
                                    (le.value = (i.addresses || []).map(function (e) {
                                      return n(
                                        n({}, e),
                                        {},
                                        { unread_count: void 0, all_count: void 0 }
                                      )
                                    })),
                                    void 0 !== i.total && (me.total = i.total),
                                    le.value.length > 0 &&
                                      !ae.value &&
                                      ((ae.value = le.value[0].full_address), Se()),
                                    setTimeout(Ae, 100),
                                    (e.next = 16))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(0)),
                                    console.error(t('emailManagement.getEmailListFailed'), e.t0),
                                    s.error(t('emailManagement.getEmailListFailed')))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 12]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ke = function () {
                    ;((me.currentPage = 1), Ee())
                  },
                  je = function () {
                    ;(ye.value && clearTimeout(ye.value),
                      (ye.value = setTimeout(function () {
                        ge.value.trim() && Oe(ge.value.trim())
                      }, 300)))
                  },
                  Oe = function (e) {
                    ;((ae.value = e), Se())
                  },
                  Se = (function () {
                    var e = l(
                      a().mark(function e() {
                        var n, r, i
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (ae.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return (
                                    (ne.value = !0),
                                    (e.prev = 3),
                                    (e.next = 6),
                                    R({ email_address: ae.value, filter: 'unread' != ie.value })
                                  )
                                case 6:
                                  ;((n = e.sent),
                                    (r = n.emails || []),
                                    (oe.value = r),
                                    void 0 !== n.email_count &&
                                      -1 !==
                                        (i = le.value.findIndex(function (e) {
                                          return e.full_address === ae.value
                                        })) &&
                                      ('unread' === ie.value
                                        ? (le.value[i].unread_count = n.email_count || 0)
                                        : (le.value[i].all_count = n.email_count || 0)),
                                    setTimeout(Ae, 100),
                                    (e.next = 17))
                                  break
                                case 13:
                                  ;((e.prev = 13),
                                    (e.t0 = e.catch(3)),
                                    console.error(t('emailManagement.getMailListFailed'), e.t0),
                                    s.error(t('emailManagement.getMailListFailed')))
                                case 17:
                                  return ((e.prev = 17), (ne.value = !1), e.finish(17))
                                case 20:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 13, 17, 20]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Ce = function () {
                    Se()
                  },
                  Ve = (function () {
                    var e = l(
                      a().mark(function e(n) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (ue.value = n),
                                    (i.value = !0),
                                    (e.prev = 2),
                                    (e.next = 5),
                                    H({ mail_uid: n.mail_uid })
                                  )
                                case 5:
                                  ;((n.isRead = !0), (e.next = 11))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(2)),
                                    console.error(t('emailManagement.markMailAsReadFailed'), e.t0))
                                case 11:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[2, 8]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Te = function () {
                    if (ae.value) {
                      var e = le.value.find(function (e) {
                        return e.full_address === ae.value
                      })
                      return e ? e.all_count : void 0
                    }
                  },
                  ze = function () {
                    if (ae.value) {
                      var e = le.value.find(function (e) {
                        return e.full_address === ae.value
                      })
                      return e ? e.unread_count : void 0
                    }
                  },
                  Ae = c(function () {
                    L(function () {
                      var e = document.querySelector('.email-list-card')
                      if (e) {
                        var t,
                          n = e.getBoundingClientRect().top + 190,
                          r =
                            (null === (t = document.getElementById('app')) || void 0 === t
                              ? void 0
                              : t.clientHeight) || window.innerHeight
                        se.value = r - n
                      }
                      var a = document.querySelector('.mail-list-card')
                      if (a) {
                        var i,
                          l = a.getBoundingClientRect().top + 120,
                          o =
                            (null === (i = document.getElementById('app')) || void 0 === i
                              ? void 0
                              : i.clientHeight) || window.innerHeight
                        fe.value = o - l
                      }
                    })
                  }, 100)
                return (
                  m(function () {
                    ;(Ee(),
                      window.addEventListener('resize', Ae),
                      setTimeout(Ae, 100),
                      p(
                        function () {
                          return me.currentPage
                        },
                        function () {
                          Ee()
                        }
                      ),
                      p(
                        function () {
                          return me.pageSize
                        },
                        function () {
                          ;((me.currentPage = 1), Ee())
                        }
                      ))
                  }),
                  v(function () {
                    window.removeEventListener('resize', Ae)
                  }),
                  function (e, n) {
                    var a = h('el-alert'),
                      l = h('el-button'),
                      o = h('el-input'),
                      u = h('el-date-picker'),
                      c = h('el-menu-item'),
                      s = h('el-menu'),
                      f = h('el-empty'),
                      d = h('el-pagination'),
                      m = h('el-card'),
                      p = h('el-col'),
                      v = h('el-radio-button'),
                      L = h('el-badge'),
                      z = h('el-radio-group'),
                      A = h('el-table-column'),
                      F = h('el-table'),
                      R = h('el-row'),
                      U = h('el-option'),
                      H = h('el-select'),
                      de = h('el-form-item'),
                      ye = h('el-input-number'),
                      Ee = h('el-form'),
                      Ae = h('el-dialog'),
                      Fe = h('el-drawer'),
                      Re = g('loading')
                    return (
                      y(),
                      x('div', N, [
                        b('div', D, [
                          b('div', G, [
                            w(
                              a,
                              {
                                title: _(t)('emailManagement.tip'),
                                type: 'warning',
                                'show-icon': '',
                                closable: !1
                              },
                              null,
                              8,
                              ['title']
                            )
                          ]),
                          w(
                            l,
                            { type: 'primary', onClick: _e, style: { 'vertical-align': 'middle' } },
                            {
                              default: P(function () {
                                return [M(E(_(t)('emailManagement.addEmail')), 1)]
                              }),
                              _: 1
                            }
                          )
                        ]),
                        w(
                          R,
                          { gutter: 20 },
                          {
                            default: P(function () {
                              return [
                                w(
                                  p,
                                  { span: 8 },
                                  {
                                    default: P(function () {
                                      return [
                                        w(
                                          m,
                                          { class: 'email-list-card' },
                                          {
                                            header: P(function () {
                                              return [
                                                b('div', I, [
                                                  b(
                                                    'span',
                                                    null,
                                                    E(_(t)('emailManagement.emailList')),
                                                    1
                                                  ),
                                                  b('div', Y, [
                                                    w(
                                                      o,
                                                      {
                                                        modelValue: ge.value,
                                                        'onUpdate:modelValue':
                                                          n[0] ||
                                                          (n[0] = function (e) {
                                                            return (ge.value = e)
                                                          }),
                                                        placeholder: _(t)(
                                                          'emailManagement.searchEmailPlaceholder'
                                                        ),
                                                        clearable: '',
                                                        style: { width: '150px' },
                                                        onInput: je
                                                      },
                                                      null,
                                                      8,
                                                      ['modelValue', 'placeholder']
                                                    ),
                                                    w(
                                                      u,
                                                      {
                                                        modelValue: he.createdAfter,
                                                        'onUpdate:modelValue':
                                                          n[1] ||
                                                          (n[1] = function (e) {
                                                            return (he.createdAfter = e)
                                                          }),
                                                        type: 'datetime',
                                                        placeholder: _(t)(
                                                          'emailManagement.createdAfterPlaceholder'
                                                        ),
                                                        format: 'YYYY-MM-DD HH:mm:ss',
                                                        'value-format': 'YYYY-MM-DDTHH:mm:ss[Z]',
                                                        onChange: ke,
                                                        style: { width: '150px' }
                                                      },
                                                      null,
                                                      8,
                                                      ['modelValue', 'placeholder']
                                                    )
                                                  ])
                                                ])
                                              ]
                                            }),
                                            default: P(function () {
                                              return [
                                                b(
                                                  'div',
                                                  {
                                                    class: 'email-list',
                                                    style: S({
                                                      maxHeight: se.value + 'px',
                                                      overflowY: 'auto'
                                                    })
                                                  },
                                                  [
                                                    le.value.length > 0
                                                      ? (y(),
                                                        k(
                                                          s,
                                                          {
                                                            key: 0,
                                                            'default-active': ae.value,
                                                            class: 'email-menu'
                                                          },
                                                          {
                                                            default: P(function () {
                                                              return [
                                                                (y(!0),
                                                                x(
                                                                  j,
                                                                  null,
                                                                  O(le.value, function (e) {
                                                                    return (
                                                                      y(),
                                                                      k(
                                                                        c,
                                                                        {
                                                                          key: e.full_address,
                                                                          index: e.full_address,
                                                                          onClick: function (t) {
                                                                            return Oe(
                                                                              e.full_address
                                                                            )
                                                                          }
                                                                        },
                                                                        {
                                                                          default: P(function () {
                                                                            return [
                                                                              b(
                                                                                'span',
                                                                                null,
                                                                                E(e.full_address),
                                                                                1
                                                                              )
                                                                            ]
                                                                          }),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        ['index', 'onClick']
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
                                                          ['default-active']
                                                        ))
                                                      : (y(),
                                                        x('div', q, [
                                                          w(
                                                            f,
                                                            {
                                                              description: _(t)(
                                                                'emailManagement.noEmailData'
                                                              )
                                                            },
                                                            null,
                                                            8,
                                                            ['description']
                                                          )
                                                        ]))
                                                  ],
                                                  4
                                                ),
                                                b('div', B, [
                                                  w(
                                                    d,
                                                    {
                                                      layout: 'total, prev, pager, next',
                                                      'page-sizes': _(me).pageSizes,
                                                      total: _(me).total,
                                                      'page-size': _(me).pageSize,
                                                      'current-page': _(me).currentPage,
                                                      onSizeChange: _(ve),
                                                      onCurrentChange: _(pe)
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      'page-sizes',
                                                      'total',
                                                      'page-size',
                                                      'current-page',
                                                      'onSizeChange',
                                                      'onCurrentChange'
                                                    ]
                                                  )
                                                ])
                                              ]
                                            }),
                                            _: 1
                                          }
                                        )
                                      ]
                                    }),
                                    _: 1
                                  }
                                ),
                                w(
                                  p,
                                  { span: 16 },
                                  {
                                    default: P(function () {
                                      return [
                                        w(
                                          m,
                                          { class: 'mail-list-card' },
                                          {
                                            header: P(function () {
                                              return [
                                                b('div', K, [
                                                  b(
                                                    'span',
                                                    null,
                                                    E(ae.value) +
                                                      ' ' +
                                                      E(_(t)('emailManagement.mailListTitle')),
                                                    1
                                                  ),
                                                  b('div', Q, [
                                                    w(
                                                      z,
                                                      {
                                                        modelValue: ie.value,
                                                        'onUpdate:modelValue':
                                                          n[2] ||
                                                          (n[2] = function (e) {
                                                            return (ie.value = e)
                                                          }),
                                                        size: 'small',
                                                        onChange: Ce
                                                      },
                                                      {
                                                        default: P(function () {
                                                          return [
                                                            w(
                                                              L,
                                                              {
                                                                value: Te(),
                                                                max: 99,
                                                                type: (Te(), 'info')
                                                              },
                                                              {
                                                                default: P(function () {
                                                                  return [
                                                                    w(
                                                                      v,
                                                                      { label: 'all' },
                                                                      {
                                                                        default: P(function () {
                                                                          return [
                                                                            M(
                                                                              E(
                                                                                _(t)(
                                                                                  'emailManagement.all'
                                                                                )
                                                                              ),
                                                                              1
                                                                            )
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
                                                              ['value', 'type']
                                                            ),
                                                            w(
                                                              L,
                                                              {
                                                                value: ze(),
                                                                max: 99,
                                                                type: (ze(), 'warning')
                                                              },
                                                              {
                                                                default: P(function () {
                                                                  return [
                                                                    w(
                                                                      v,
                                                                      { label: 'unread' },
                                                                      {
                                                                        default: P(function () {
                                                                          return [
                                                                            M(
                                                                              E(
                                                                                _(t)(
                                                                                  'emailManagement.unread'
                                                                                )
                                                                              ),
                                                                              1
                                                                            )
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
                                                              ['value', 'type']
                                                            )
                                                          ]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['modelValue']
                                                    ),
                                                    w(
                                                      l,
                                                      {
                                                        size: 'small',
                                                        onClick: Se,
                                                        loading: ne.value
                                                      },
                                                      {
                                                        default: P(function () {
                                                          return [
                                                            M(E(_(t)('emailManagement.refresh')), 1)
                                                          ]
                                                        }),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['loading']
                                                    )
                                                  ])
                                                ])
                                              ]
                                            }),
                                            default: P(function () {
                                              return [
                                                b('div', Z, [
                                                  C(
                                                    (y(),
                                                    k(
                                                      F,
                                                      {
                                                        data: oe.value,
                                                        style: { width: '100%' },
                                                        onRowClick: Ve,
                                                        'max-height': fe.value
                                                      },
                                                      {
                                                        default: P(function () {
                                                          return [
                                                            w(
                                                              A,
                                                              {
                                                                prop: 'subject',
                                                                label:
                                                                  _(t)('emailManagement.subject'),
                                                                'show-overflow-tooltip': ''
                                                              },
                                                              {
                                                                default: P(function (e) {
                                                                  return [
                                                                    b(
                                                                      'span',
                                                                      {
                                                                        class: V([
                                                                          {
                                                                            'unread-mail':
                                                                              !e.row.isRead
                                                                          },
                                                                          'subject-text'
                                                                        ])
                                                                      },
                                                                      E(e.row.subject),
                                                                      3
                                                                    )
                                                                  ]
                                                                }),
                                                                _: 1
                                                              },
                                                              8,
                                                              ['label']
                                                            ),
                                                            w(
                                                              A,
                                                              {
                                                                prop: 'from_address',
                                                                label:
                                                                  _(t)('emailManagement.sender'),
                                                                width: '200'
                                                              },
                                                              null,
                                                              8,
                                                              ['label']
                                                            ),
                                                            w(
                                                              A,
                                                              {
                                                                prop: 'date',
                                                                label: _(t)('emailManagement.time'),
                                                                width: '180'
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
                                                      ['data', 'max-height']
                                                    )),
                                                    [[Re, ne.value]]
                                                  )
                                                ])
                                              ]
                                            }),
                                            _: 1
                                          }
                                        )
                                      ]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        w(
                          Ae,
                          {
                            modelValue: r.value,
                            'onUpdate:modelValue':
                              n[7] ||
                              (n[7] = function (e) {
                                return (r.value = e)
                              }),
                            title: _(t)('emailManagement.applyEmail'),
                            width: '500px',
                            onClose: Pe
                          },
                          {
                            footer: P(function () {
                              return [
                                b('span', J, [
                                  w(
                                    l,
                                    {
                                      onClick:
                                        n[6] ||
                                        (n[6] = function (e) {
                                          return (r.value = !1)
                                        })
                                    },
                                    {
                                      default: P(function () {
                                        return [M(E(_(t)('emailManagement.cancel')), 1)]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  w(
                                    l,
                                    { type: 'primary', onClick: Me, loading: re.value },
                                    {
                                      default: P(function () {
                                        return [M(E(_(t)('emailManagement.confirm')), 1)]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['loading']
                                  )
                                ])
                              ]
                            }),
                            default: P(function () {
                              return [
                                w(
                                  Ee,
                                  {
                                    model: xe,
                                    rules: be,
                                    ref_key: 'prefixFormRef',
                                    ref: we,
                                    'label-width': '100px'
                                  },
                                  {
                                    default: P(function () {
                                      return [
                                        w(
                                          de,
                                          {
                                            label: _(t)('emailManagement.existingPrefix'),
                                            prop: 'existingPrefix'
                                          },
                                          {
                                            default: P(function () {
                                              return [
                                                w(
                                                  H,
                                                  {
                                                    modelValue: xe.existingPrefix,
                                                    'onUpdate:modelValue':
                                                      n[3] ||
                                                      (n[3] = function (e) {
                                                        return (xe.existingPrefix = e)
                                                      }),
                                                    placeholder: _(t)(
                                                      'emailManagement.selectExistingPrefix'
                                                    ),
                                                    style: { width: '100%' },
                                                    clearable: '',
                                                    onChange: Le
                                                  },
                                                  {
                                                    default: P(function () {
                                                      return [
                                                        (y(!0),
                                                        x(
                                                          j,
                                                          null,
                                                          O(ce.value, function (e) {
                                                            return (
                                                              y(),
                                                              k(
                                                                U,
                                                                { key: e, label: e, value: e },
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
                                        ),
                                        w(
                                          de,
                                          {
                                            label: _(t)('emailManagement.orNew'),
                                            prop: 'newPrefix'
                                          },
                                          {
                                            default: P(function () {
                                              return [
                                                w(
                                                  o,
                                                  {
                                                    modelValue: xe.newPrefix,
                                                    'onUpdate:modelValue':
                                                      n[4] ||
                                                      (n[4] = function (e) {
                                                        return (xe.newPrefix = e)
                                                      }),
                                                    placeholder: _(t)(
                                                      'emailManagement.inputNewPrefix'
                                                    ),
                                                    disabled: !!xe.existingPrefix
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder', 'disabled']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          de,
                                          {
                                            label: _(t)('emailManagement.emailLength'),
                                            prop: 'emailAddress'
                                          },
                                          {
                                            default: P(function () {
                                              return [
                                                w(
                                                  ye,
                                                  {
                                                    modelValue: xe.emailAddress,
                                                    'onUpdate:modelValue':
                                                      n[5] ||
                                                      (n[5] = function (e) {
                                                        return (xe.emailAddress = e)
                                                      }),
                                                    min: 6,
                                                    max: 9,
                                                    placeholder: _(t)(
                                                      'emailManagement.inputEmailLength'
                                                    ),
                                                    type: 'number'
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
                                        )
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
                          ['modelValue', 'title']
                        ),
                        w(
                          Fe,
                          {
                            modelValue: i.value,
                            'onUpdate:modelValue':
                              n[8] ||
                              (n[8] = function (e) {
                                return (i.value = e)
                              }),
                            title: _(t)('emailManagement.mailDetail'),
                            direction: 'rtl',
                            size: '60%',
                            'destroy-on-close': !1
                          },
                          {
                            default: P(function () {
                              return [
                                ue.value
                                  ? (y(),
                                    x('div', W, [
                                      b('div', X, [
                                        b('h2', null, E(ue.value.subject), 1),
                                        b('div', $, [
                                          b('p', null, [
                                            b(
                                              'strong',
                                              null,
                                              E(_(t)('emailManagement.sender')) + ':',
                                              1
                                            ),
                                            M(' ' + E(ue.value.from_address), 1)
                                          ]),
                                          b('p', null, [
                                            b(
                                              'strong',
                                              null,
                                              E(_(t)('emailManagement.time')) + ':',
                                              1
                                            ),
                                            M(' ' + E(ue.value.date), 1)
                                          ]),
                                          b('p', null, [
                                            b(
                                              'strong',
                                              null,
                                              E(_(t)('emailManagement.recipient')) + ':',
                                              1
                                            ),
                                            M(' ' + E(ue.value.to_address), 1)
                                          ])
                                        ])
                                      ]),
                                      b('div', ee, [
                                        b('div', { innerHTML: ue.value.body }, null, 8, te)
                                      ])
                                    ]))
                                  : T('', !0)
                              ]
                            }),
                            _: 1
                          },
                          8,
                          ['modelValue', 'title']
                        )
                      ])
                    )
                  }
                )
              }
            }
          e('default', i(ne, [['__scopeId', 'data-v-48510ff8']]))
        }
      }
    }
  )
})()
