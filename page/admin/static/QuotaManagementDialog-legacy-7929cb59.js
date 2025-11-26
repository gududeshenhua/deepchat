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
  function t() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ t =
      function () {
        return n
      }
    var r,
      n = {},
      a = Object.prototype,
      o = a.hasOwnProperty,
      u =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      c = i.iterator || '@@iterator',
      l = i.asyncIterator || '@@asyncIterator',
      s = i.toStringTag || '@@toStringTag'
    function f(e, t, r) {
      return (
        Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      f({}, '')
    } catch (r) {
      f = function (e, t, r) {
        return (e[t] = r)
      }
    }
    function m(e, t, r, n) {
      var a = t && t.prototype instanceof _ ? t : _,
        o = Object.create(a.prototype),
        i = new V(n || [])
      return (u(o, '_invoke', { value: S(e, r, i) }), o)
    }
    function d(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = m
    var p = 'suspendedStart',
      h = 'suspendedYield',
      v = 'executing',
      y = 'completed',
      g = {}
    function _() {}
    function b() {}
    function x() {}
    var w = {}
    f(w, c, function () {
      return this
    })
    var M = Object.getPrototypeOf,
      q = M && M(M(C([])))
    q && q !== a && o.call(q, c) && (w = q)
    var L = (x.prototype = _.prototype = Object.create(w))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function E(t, r) {
      function n(a, u, i, c) {
        var l = d(t[a], t, u)
        if ('throw' !== l.type) {
          var s = l.arg,
            f = s.value
          return f && 'object' == e(f) && o.call(f, '__await')
            ? r.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, c)
                },
                function (e) {
                  n('throw', e, i, c)
                }
              )
            : r.resolve(f).then(
                function (e) {
                  ;((s.value = e), i(s))
                },
                function (e) {
                  return n('throw', e, i, c)
                }
              )
        }
        c(l.arg)
      }
      var a
      u(this, '_invoke', {
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
    function S(e, t, n) {
      var a = p
      return function (o, u) {
        if (a === v) throw new Error('Generator is already running')
        if (a === y) {
          if ('throw' === o) throw u
          return { value: r, done: !0 }
        }
        for (n.method = o, n.arg = u; ; ) {
          var i = n.delegate
          if (i) {
            var c = $(i, n)
            if (c) {
              if (c === g) continue
              return c
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (a === p) throw ((a = y), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          a = v
          var l = d(e, t, n)
          if ('normal' === l.type) {
            if (((a = n.done ? y : h), l.arg === g)) continue
            return { value: l.arg, done: n.done }
          }
          'throw' === l.type && ((a = y), (n.method = 'throw'), (n.arg = l.arg))
        }
      }
    }
    function $(e, t) {
      var n = t.method,
        a = e.iterator[n]
      if (a === r)
        return (
          (t.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = r), $(e, t), 'throw' === t.method)) ||
            ('return' !== n &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          g
        )
      var o = d(a, e.iterator, t.arg)
      if ('throw' === o.type) return ((t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), g)
      var u = o.arg
      return u
        ? u.done
          ? ((t[e.resultName] = u.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = r)),
            (t.delegate = null),
            g)
          : u
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          g)
    }
    function O(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function j(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function V(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(O, this), this.reset(!0))
    }
    function C(t) {
      if (t || '' === t) {
        var n = t[c]
        if (n) return n.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            u = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = r), (e.done = !0), e)
            }
          return (u.next = u)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (b.prototype = x),
      u(L, 'constructor', { value: x, configurable: !0 }),
      u(x, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = f(x, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), f(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(L)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      k(E.prototype),
      f(E.prototype, l, function () {
        return this
      }),
      (n.AsyncIterator = E),
      (n.async = function (e, t, r, a, o) {
        void 0 === o && (o = Promise)
        var u = new E(m(e, t, r, a), o)
        return n.isGeneratorFunction(t)
          ? u
          : u.next().then(function (e) {
              return e.done ? e.value : u.next()
            })
      }),
      k(L),
      f(L, s, 'Generator'),
      f(L, c, function () {
        return this
      }),
      f(L, 'toString', function () {
        return '[object Generator]'
      }),
      (n.keys = function (e) {
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
      (n.values = C),
      (V.prototype = {
        constructor: V,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(j),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var t = this
          function n(n, a) {
            return (
              (i.type = 'throw'),
              (i.arg = e),
              (t.next = n),
              a && ((t.method = 'next'), (t.arg = r)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var u = this.tryEntries[a],
              i = u.completion
            if ('root' === u.tryLoc) return n('end')
            if (u.tryLoc <= this.prev) {
              var c = o.call(u, 'catchLoc'),
                l = o.call(u, 'finallyLoc')
              if (c && l) {
                if (this.prev < u.catchLoc) return n(u.catchLoc, !0)
                if (this.prev < u.finallyLoc) return n(u.finallyLoc)
              } else if (c) {
                if (this.prev < u.catchLoc) return n(u.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < u.finallyLoc) return n(u.finallyLoc)
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
          var u = a ? a.completion : {}
          return (
            (u.type = e),
            (u.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), g) : this.complete(u)
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
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), j(r), g)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var n = r.completion
              if ('throw' === n.type) {
                var a = n.arg
                j(r)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            g
          )
        }
      }),
      n
    )
  }
  function r(e, t, r, n, a, o, u) {
    try {
      var i = e[o](u),
        c = i.value
    } catch (l) {
      return void r(l)
    }
    i.done ? t(c) : Promise.resolve(c).then(n, a)
  }
  function n(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (a, o) {
        var u = e.apply(t, n)
        function i(e) {
          r(u, a, o, i, c, 'next', e)
        }
        function c(e) {
          r(u, a, o, i, c, 'throw', e)
        }
        i(void 0)
      })
    }
  }
  System.register(
    ['./index-legacy-d4b804d0.js', './element-legacy-e7b6e573.js', './vue-legacy-7e5c1e5b.js'],
    function (e, r) {
      'use strict'
      var a, o, u, i, c, l, s, f, m, d, p, h, v, y, g, _, b, x
      return {
        setters: [
          function (e) {
            ;((a = e.q), (o = e.h), (u = e._))
          },
          function (e) {
            i = e.E
          },
          function (e) {
            ;((c = e.y),
              (l = e.r),
              (s = e.e),
              (f = e.d),
              (m = e.a8),
              (d = e.f),
              (p = e.G),
              (h = e.H),
              (v = e.N),
              (y = e.L),
              (g = e.M),
              (_ = e.h),
              (b = e.i),
              (x = e.K))
          }
        ],
        execute: function () {
          var r = document.createElement('style')
          function w(e) {
            return a({ url: '/quotas/'.concat(e), method: 'get', baseURL: '/cpyservice' })
          }
          function M(e) {
            return a({ url: '/quotas/', method: 'post', data: e, baseURL: '/cpyservice' })
          }
          function q(e, t) {
            return a({ url: '/quotas/'.concat(e), method: 'put', data: t, baseURL: '/cpyservice' })
          }
          ;((r.textContent =
            '.quota-management-dialog .el-descriptions[data-v-5f7c3512],.quota-management-dialog .el-form-item[data-v-5f7c3512]{margin-bottom:20px}\n'),
            document.head.appendChild(r))
          var L = { key: 0 },
            k = { key: 1, style: { 'text-align': 'center', padding: '20px' } },
            E = { style: { 'font-size': '12px', color: '#909399', 'margin-top': '5px' } },
            S = { style: { 'font-size': '12px', color: '#909399', 'margin-top': '5px' } },
            $ = c({
              __name: 'QuotaManagementDialog',
              props: {
                visible: { type: Boolean, default: !1 },
                user: { default: null },
                mode: { default: 'view' }
              },
              emits: ['update:visible', 'success'],
              setup: function (e, r) {
                var a = r.emit,
                  u = o().t,
                  c = e,
                  $ = a,
                  O = l(c.visible),
                  j = l(!1),
                  V = l(),
                  C = l(null),
                  I = l({
                    max_instances: 0,
                    max_concurrent_sessions: 0,
                    max_launches_override: 0,
                    concurrency_multiplier: 200,
                    user_id: ''
                  }),
                  G = {
                    max_instances: [
                      {
                        required: !0,
                        message: u('quotaManagement.enterMaxInstances'),
                        trigger: 'blur'
                      },
                      {
                        type: 'number',
                        min: 0,
                        message: u('quotaManagement.maxInstancesMin'),
                        trigger: 'blur'
                      }
                    ],
                    max_concurrent_sessions: [
                      {
                        required: !0,
                        message: u('quotaManagement.enterMaxConcurrentSessions'),
                        trigger: 'blur'
                      },
                      {
                        type: 'number',
                        min: 0,
                        message: u('quotaManagement.maxConcurrentSessionsMin'),
                        trigger: 'blur'
                      }
                    ],
                    max_launches_override: [
                      {
                        type: 'number',
                        min: 0,
                        message: u('quotaManagement.maxLaunchesOverrideMin'),
                        trigger: 'blur'
                      }
                    ],
                    concurrency_multiplier: [
                      {
                        required: !0,
                        message: u('quotaManagement.enterConcurrencyMultiplier'),
                        trigger: 'blur'
                      },
                      {
                        type: 'number',
                        min: 1,
                        message: u('quotaManagement.concurrencyMultiplierMin'),
                        trigger: 'blur'
                      }
                    ],
                    user_id: [
                      { required: !0, message: u('quotaManagement.enterUserId'), trigger: 'blur' }
                    ]
                  },
                  N = s(function () {
                    switch (c.mode) {
                      case 'view':
                        return u('quotaManagement.viewQuota')
                      case 'create':
                        return u('quotaManagement.createQuota')
                      case 'edit':
                        return u('quotaManagement.editQuota')
                      default:
                        return u('quotaManagement.quotaManagement')
                    }
                  })
                ;(f(
                  function () {
                    return c.visible
                  },
                  function (e) {
                    ;((O.value = e),
                      e &&
                        (('view' === c.mode && c.user) || ('edit' === c.mode && c.user)
                          ? F()
                          : 'create' === c.mode && U()))
                  }
                ),
                  f(O, function (e) {
                    $('update:visible', e)
                  }))
                var P = function () {
                    ;((O.value = !1), U())
                  },
                  U = function () {
                    var e
                    ;((I.value = {
                      max_instances: 0,
                      max_concurrent_sessions: 0,
                      max_launches_override: 0,
                      concurrency_multiplier: 200,
                      user_id: ''
                    }),
                      null === (e = V.value) || void 0 === e || e.clearValidate())
                  },
                  F = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (c.user) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.prev = 2), (e.next = 5), w(c.user.id))
                                case 5:
                                  ;((r = e.sent),
                                    (C.value = r),
                                    'edit' === c.mode &&
                                      (I.value = {
                                        max_instances: r.max_instances,
                                        max_concurrent_sessions: r.max_concurrent_sessions,
                                        max_launches_override: r.max_launches_override || 0,
                                        concurrency_multiplier: r.concurrency_multiplier,
                                        user_id: r.user_id
                                      }),
                                    (e.next = 14))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(2)),
                                    console.error('获取配额数据失败:', e.t0),
                                    i.error(u('quotaManagement.getQuotaFailed')))
                                case 14:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[2, 10]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  T = function () {
                    ;($('update:visible', !1), $('success'))
                  },
                  Q = (function () {
                    var e = n(
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (V.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.next = 4), V.value.validate())
                                case 4:
                                  if (e.sent) {
                                    e.next = 7
                                    break
                                  }
                                  return e.abrupt('return')
                                case 7:
                                  if (((j.value = !0), (e.prev = 8), 'create' !== c.mode)) {
                                    e.next = 15
                                    break
                                  }
                                  return ((e.next = 12), M(I.value))
                                case 12:
                                  ;(i.success(u('quotaManagement.createSuccess')), (e.next = 20))
                                  break
                                case 15:
                                  if ('edit' !== c.mode || !c.user) {
                                    e.next = 20
                                    break
                                  }
                                  return (
                                    (I.value.max_launches_override =
                                      I.value.max_concurrent_sessions *
                                      I.value.concurrency_multiplier),
                                    (e.next = 19),
                                    q(c.user.id, I.value)
                                  )
                                case 19:
                                  i.success(u('quotaManagement.updateSuccess'))
                                case 20:
                                  ;((O.value = !1), $('success'), (e.next = 28))
                                  break
                                case 24:
                                  ;((e.prev = 24),
                                    (e.t0 = e.catch(8)),
                                    console.error('操作失败:', e.t0),
                                    i.error(u('quotaManagement.operationFailed')))
                                case 28:
                                  return ((e.prev = 28), (j.value = !1), e.finish(28))
                                case 31:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[8, 24, 28, 31]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (e, t) {
                  var r = m('el-descriptions-item'),
                    n = m('el-tag'),
                    a = m('el-descriptions'),
                    o = m('el-empty'),
                    u = m('el-input-number'),
                    i = m('el-form-item'),
                    c = m('el-input'),
                    l = m('el-form'),
                    s = m('el-button'),
                    f = m('el-dialog')
                  return (
                    d(),
                    p(
                      f,
                      {
                        modelValue: O.value,
                        'onUpdate:modelValue':
                          t[3] ||
                          (t[3] = function (e) {
                            return (O.value = e)
                          }),
                        title: N.value,
                        width: '600px',
                        'before-close': P
                      },
                      {
                        footer: h(function () {
                          return [
                            v(
                              s,
                              { onClick: P },
                              {
                                default: h(function () {
                                  return [y(g(e.$t('common.cancel')), 1)]
                                }),
                                _: 1
                              }
                            ),
                            'view' === e.mode
                              ? (d(),
                                p(
                                  s,
                                  { key: 0, type: 'primary', onClick: T },
                                  {
                                    default: h(function () {
                                      return [y(g(e.$t('common.confirm')), 1)]
                                    }),
                                    _: 1
                                  }
                                ))
                              : (d(),
                                p(
                                  s,
                                  { key: 1, type: 'primary', onClick: Q, loading: j.value },
                                  {
                                    default: h(function () {
                                      return [
                                        y(
                                          g(
                                            'create' === e.mode
                                              ? e.$t('common.create')
                                              : e.$t('common.save')
                                          ),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                ))
                          ]
                        }),
                        default: h(function () {
                          return [
                            'view' === e.mode
                              ? (d(),
                                _('div', L, [
                                  C.value
                                    ? (d(),
                                      p(
                                        a,
                                        { key: 0, column: 1, border: '' },
                                        {
                                          default: h(function () {
                                            return [
                                              v(
                                                r,
                                                { label: e.$t('quotaManagement.userId') },
                                                {
                                                  default: h(function () {
                                                    return [y(g(C.value.user_id), 1)]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['label']
                                              ),
                                              v(
                                                r,
                                                {
                                                  label: e.$t(
                                                    'quotaManagement.maxConcurrentSessions'
                                                  )
                                                },
                                                {
                                                  default: h(function () {
                                                    return [
                                                      y(g(C.value.max_concurrent_sessions), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['label']
                                              ),
                                              v(
                                                r,
                                                {
                                                  label: e.$t('quotaManagement.maxLaunchesOverride')
                                                },
                                                {
                                                  default: h(function () {
                                                    return [
                                                      y(
                                                        g(
                                                          C.value.total_launch_quota ||
                                                            e.$t('quotaManagement.notSet')
                                                        ),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['label']
                                              ),
                                              v(
                                                r,
                                                {
                                                  label: e.$t(
                                                    'quotaManagement.concurrencyMultiplier'
                                                  )
                                                },
                                                {
                                                  default: h(function () {
                                                    return [y(g(C.value.concurrency_multiplier), 1)]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['label']
                                              ),
                                              v(
                                                r,
                                                {
                                                  label: e.$t('quotaManagement.remainingLaunches')
                                                },
                                                {
                                                  default: h(function () {
                                                    return [
                                                      C.value.available_launches > 0
                                                        ? (d(),
                                                          p(
                                                            n,
                                                            {
                                                              key: 0,
                                                              type: 'success',
                                                              size: 'small'
                                                            },
                                                            {
                                                              default: h(function () {
                                                                return [
                                                                  y(
                                                                    g(C.value.available_launches),
                                                                    1
                                                                  )
                                                                ]
                                                              }),
                                                              _: 1
                                                            }
                                                          ))
                                                        : (d(),
                                                          p(
                                                            n,
                                                            { key: 1, type: 'info', size: 'small' },
                                                            {
                                                              default: h(function () {
                                                                return [
                                                                  y(
                                                                    g(C.value.available_launches),
                                                                    1
                                                                  )
                                                                ]
                                                              }),
                                                              _: 1
                                                            }
                                                          ))
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
                                        }
                                      ))
                                    : (d(),
                                      _('div', k, [
                                        v(
                                          o,
                                          { description: e.$t('quotaManagement.noQuotaData') },
                                          null,
                                          8,
                                          ['description']
                                        )
                                      ]))
                                ]))
                              : (d(),
                                p(
                                  l,
                                  {
                                    key: 1,
                                    ref_key: 'quotaFormRef',
                                    ref: V,
                                    model: I.value,
                                    rules: G,
                                    'label-width': '140px'
                                  },
                                  {
                                    default: h(function () {
                                      return [
                                        v(
                                          i,
                                          {
                                            label: e.$t('quotaManagement.maxConcurrentSessions'),
                                            prop: 'max_concurrent_sessions'
                                          },
                                          {
                                            default: h(function () {
                                              return [
                                                v(
                                                  u,
                                                  {
                                                    modelValue: I.value.max_concurrent_sessions,
                                                    'onUpdate:modelValue':
                                                      t[0] ||
                                                      (t[0] = function (e) {
                                                        return (I.value.max_concurrent_sessions = e)
                                                      }),
                                                    min: 0,
                                                    placeholder: e.$t(
                                                      'quotaManagement.enterMaxConcurrentSessions'
                                                    ),
                                                    style: { width: '100%' }
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
                                        v(
                                          i,
                                          {
                                            label: e.$t('quotaManagement.concurrencyMultiplier'),
                                            prop: 'concurrency_multiplier'
                                          },
                                          {
                                            default: h(function () {
                                              return [
                                                v(
                                                  u,
                                                  {
                                                    modelValue: I.value.concurrency_multiplier,
                                                    'onUpdate:modelValue':
                                                      t[1] ||
                                                      (t[1] = function (e) {
                                                        return (I.value.concurrency_multiplier = e)
                                                      }),
                                                    min: 1,
                                                    placeholder: e.$t(
                                                      'quotaManagement.enterConcurrencyMultiplier'
                                                    ),
                                                    style: { width: '100%' }
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                ),
                                                b(
                                                  'div',
                                                  E,
                                                  g(
                                                    e.$t('quotaManagement.concurrencyMultiplierTip')
                                                  ),
                                                  1
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        v(
                                          i,
                                          {
                                            label: e.$t('quotaManagement.maxLaunchesOverride'),
                                            prop: 'max_launches_override'
                                          },
                                          {
                                            default: h(function () {
                                              return [
                                                v(
                                                  c,
                                                  {
                                                    value:
                                                      I.value.max_concurrent_sessions *
                                                      I.value.concurrency_multiplier,
                                                    disabled: '',
                                                    style: { width: '100%' }
                                                  },
                                                  null,
                                                  8,
                                                  ['value']
                                                ),
                                                b(
                                                  'div',
                                                  S,
                                                  g(e.$t('quotaManagement.maxLaunchesOverrideTip')),
                                                  1
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        'create' === e.mode
                                          ? (d(),
                                            p(
                                              i,
                                              {
                                                key: 0,
                                                label: e.$t('quotaManagement.userId'),
                                                prop: 'user_id'
                                              },
                                              {
                                                default: h(function () {
                                                  return [
                                                    v(
                                                      c,
                                                      {
                                                        modelValue: I.value.user_id,
                                                        'onUpdate:modelValue':
                                                          t[2] ||
                                                          (t[2] = function (e) {
                                                            return (I.value.user_id = e)
                                                          }),
                                                        type: 'number',
                                                        placeholder: e.$t(
                                                          'quotaManagement.enterUserId'
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
                                            ))
                                          : x('', !0)
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['model']
                                ))
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
          e('Q', u($, [['__scopeId', 'data-v-5f7c3512']]))
        }
      }
    }
  )
})()
