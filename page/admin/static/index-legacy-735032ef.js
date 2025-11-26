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
        return r
      }
    var n,
      r = {},
      a = Object.prototype,
      o = a.hasOwnProperty,
      u =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      i = l.iterator || '@@iterator',
      c = l.asyncIterator || '@@asyncIterator',
      p = l.toStringTag || '@@toStringTag'
    function f(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      f({}, '')
    } catch (n) {
      f = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function s(e, t, n, r) {
      var a = t && t.prototype instanceof x ? t : x,
        o = Object.create(a.prototype),
        l = new P(r || [])
      return (u(o, '_invoke', { value: E(e, n, l) }), o)
    }
    function m(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    r.wrap = s
    var g = 'suspendedStart',
      d = 'suspendedYield',
      h = 'executing',
      v = 'completed',
      y = {}
    function x() {}
    function b() {}
    function w() {}
    var M = {}
    f(M, i, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      k = _ && _(_(N([])))
    k && k !== a && o.call(k, i) && (M = k)
    var G = (w.prototype = x.prototype = Object.create(M))
    function L(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function $(t, n) {
      function r(a, u, l, i) {
        var c = m(t[a], t, u)
        if ('throw' !== c.type) {
          var p = c.arg,
            f = p.value
          return f && 'object' == e(f) && o.call(f, '__await')
            ? n.resolve(f.__await).then(
                function (e) {
                  r('next', e, l, i)
                },
                function (e) {
                  r('throw', e, l, i)
                }
              )
            : n.resolve(f).then(
                function (e) {
                  ;((p.value = e), l(p))
                },
                function (e) {
                  return r('throw', e, l, i)
                }
              )
        }
        i(c.arg)
      }
      var a
      u(this, '_invoke', {
        value: function (e, t) {
          function o() {
            return new n(function (n, a) {
              r(e, t, n, a)
            })
          }
          return (a = a ? a.then(o, o) : o())
        }
      })
    }
    function E(e, t, r) {
      var a = g
      return function (o, u) {
        if (a === h) throw new Error('Generator is already running')
        if (a === v) {
          if ('throw' === o) throw u
          return { value: n, done: !0 }
        }
        for (r.method = o, r.arg = u; ; ) {
          var l = r.delegate
          if (l) {
            var i = T(l, r)
            if (i) {
              if (i === y) continue
              return i
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === g) throw ((a = v), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = h
          var c = m(e, t, r)
          if ('normal' === c.type) {
            if (((a = r.done ? v : d), c.arg === y)) continue
            return { value: c.arg, done: r.done }
          }
          'throw' === c.type && ((a = v), (r.method = 'throw'), (r.arg = c.arg))
        }
      }
    }
    function T(e, t) {
      var r = t.method,
        a = e.iterator[r]
      if (a === n)
        return (
          (t.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = n), T(e, t), 'throw' === t.method)) ||
            ('return' !== r &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          y
        )
      var o = m(a, e.iterator, t.arg)
      if ('throw' === o.type) return ((t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), y)
      var u = o.arg
      return u
        ? u.done
          ? ((t[e.resultName] = u.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            y)
          : u
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          y)
    }
    function C(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function j(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function P(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(C, this), this.reset(!0))
    }
    function N(t) {
      if (t || '' === t) {
        var r = t[i]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            u = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (u.next = u)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (b.prototype = w),
      u(G, 'constructor', { value: w, configurable: !0 }),
      u(w, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = f(w, p, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), f(e, p, 'GeneratorFunction')),
          (e.prototype = Object.create(G)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      L($.prototype),
      f($.prototype, c, function () {
        return this
      }),
      (r.AsyncIterator = $),
      (r.async = function (e, t, n, a, o) {
        void 0 === o && (o = Promise)
        var u = new $(s(e, t, n, a), o)
        return r.isGeneratorFunction(t)
          ? u
          : u.next().then(function (e) {
              return e.done ? e.value : u.next()
            })
      }),
      L(G),
      f(G, p, 'Generator'),
      f(G, i, function () {
        return this
      }),
      f(G, 'toString', function () {
        return '[object Generator]'
      }),
      (r.keys = function (e) {
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
      (r.values = N),
      (P.prototype = {
        constructor: P,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(j),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
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
          function r(r, a) {
            return (
              (l.type = 'throw'),
              (l.arg = e),
              (t.next = r),
              a && ((t.method = 'next'), (t.arg = n)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var u = this.tryEntries[a],
              l = u.completion
            if ('root' === u.tryLoc) return r('end')
            if (u.tryLoc <= this.prev) {
              var i = o.call(u, 'catchLoc'),
                c = o.call(u, 'finallyLoc')
              if (i && c) {
                if (this.prev < u.catchLoc) return r(u.catchLoc, !0)
                if (this.prev < u.finallyLoc) return r(u.finallyLoc)
              } else if (i) {
                if (this.prev < u.catchLoc) return r(u.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < u.finallyLoc) return r(u.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && o.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var a = r
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
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), y) : this.complete(u)
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
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), j(n), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                j(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, r) {
          return (
            (this.delegate = { iterator: N(e), resultName: t, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            y
          )
        }
      }),
      r
    )
  }
  function n(e, t, n, r, a, o, u) {
    try {
      var l = e[o](u),
        i = l.value
    } catch (c) {
      return void n(c)
    }
    l.done ? t(i) : Promise.resolve(i).then(r, a)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (a, o) {
        var u = e.apply(t, r)
        function l(e) {
          n(u, a, o, l, i, 'next', e)
        }
        function i(e) {
          n(u, a, o, l, i, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-62a49047.js',
      './useTableHeightFit-legacy-f881449c.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, n) {
      'use strict'
      var a, o, u, l, i, c, p, f, s, m, g, d, h, v, y, x, b, w, M, _, k, G, L, $, E, T, C, j
      return {
        setters: [
          function (e) {
            ;((a = e.a),
              (o = e.u),
              (u = e.c),
              (l = e.d),
              (i = e.g),
              (c = e.b),
              (p = e.e),
              (f = e.f))
          },
          function (e) {
            s = e.u
          },
          function (e) {
            ;((m = e.h), (g = e._))
          },
          function (e) {
            ;((d = e.E), (h = e.G))
          },
          function (e) {
            ;((v = e.y),
              (y = e.r),
              (x = e.b),
              (b = e.Q),
              (w = e.a8),
              (M = e.ag),
              (_ = e.f),
              (k = e.h),
              (G = e.N),
              (L = e.H),
              ($ = e.L),
              (E = e.M),
              (T = e.I),
              (C = e.G),
              (j = e.u))
          },
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.proxy-group-management[data-v-5d383ef7],.group-management[data-v-d7138a43]{padding:20px}.dialog-footer[data-v-d7138a43]{display:flex;justify-content:flex-end;gap:10px}\n'),
            document.head.appendChild(n))
          var P = { class: 'proxy-group-management' },
            N = v({
              __name: 'ProxyGroupManagement',
              setup: function (e, n) {
                var i = n.expose,
                  c = m().t,
                  p = y([]),
                  f = y(!1),
                  g = y(!1),
                  v = y(null),
                  N = s(),
                  S = N.cTable,
                  V = N.maxHeight,
                  F = N.handleGetTableHeight,
                  O = y({ name: '', alias: '' }),
                  B = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (f.value = !0), (e.next = 4), a())
                                case 4:
                                  ;((n = e.sent), (p.value = n || []), (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    d.error(c('groupManagement.getProxyGroupListFailed')),
                                    console.error(e.t0))
                                case 12:
                                  return ((e.prev = 12), (f.value = !1), e.finish(12))
                                case 15:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 8, 12, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  U = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), !v.value)) {
                                    e.next = 7
                                    break
                                  }
                                  return ((e.next = 4), o(v.value.uuid, O.value))
                                case 4:
                                  ;(d.success(c('groupManagement.proxyGroupUpdateSuccess')),
                                    (e.next = 10))
                                  break
                                case 7:
                                  return ((e.next = 9), u(O.value))
                                case 9:
                                  d.success(c('groupManagement.proxyGroupCreateSuccess'))
                                case 10:
                                  return (
                                    (g.value = !1),
                                    (O.value = { name: '', alias: '' }),
                                    (v.value = null),
                                    (e.next = 15),
                                    B()
                                  )
                                case 15:
                                  e.next = 21
                                  break
                                case 17:
                                  ;((e.prev = 17),
                                    (e.t0 = e.catch(0)),
                                    d.error(
                                      v.value
                                        ? c('groupManagement.proxyGroupUpdateFailed')
                                        : c('groupManagement.proxyGroupCreateFailed')
                                    ),
                                    console.error(e.t0))
                                case 21:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 17]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  z = (function () {
                    var e = r(
                      t().mark(function e(n) {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    h.confirm(
                                      c('groupManagement.confirmDeleteProxyGroup', {
                                        proxyGroupName: n.name
                                      }),
                                      c('groupManagement.confirmDelete'),
                                      {
                                        confirmButtonText: c('groupManagement.confirmButtonText'),
                                        cancelButtonText: c('groupManagement.cancelButtonText'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), l(n.uuid))
                                case 5:
                                  return (
                                    d.success(c('groupManagement.proxyGroupDeleteSuccess')),
                                    (e.next = 8),
                                    B()
                                  )
                                case 8:
                                  e.next = 13
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (d.error(c('groupManagement.proxyGroupDeleteFailed')),
                                      console.error(e.t0)))
                                case 13:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 10]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  D = function () {
                    ;((v.value = null), (O.value = { name: '', alias: '' }), (g.value = !0))
                  }
                ;(x(function () {
                  ;(B(), F(), window.addEventListener('resize', F))
                }),
                  b(function () {
                    window.removeEventListener('resize', F)
                  }))
                return (
                  i({
                    fetchProxyGroupList: function () {
                      B()
                    }
                  }),
                  function (e, t) {
                    var n = w('el-button'),
                      r = w('PageBanner'),
                      a = w('el-table-column'),
                      o = w('el-table'),
                      u = w('el-input'),
                      l = w('el-form-item'),
                      i = w('el-form'),
                      c = w('el-dialog'),
                      s = M('loading')
                    return (
                      _(),
                      k('div', P, [
                        G(
                          r,
                          { title: '' },
                          {
                            extra: L(function () {
                              return [
                                G(
                                  n,
                                  { icon: 'RefreshRight', onClick: B },
                                  {
                                    default: L(function () {
                                      return [$(E(e.$t('groupManagement.refresh')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                G(
                                  n,
                                  { type: 'primary', onClick: D },
                                  {
                                    default: L(function () {
                                      return [$(E(e.$t('groupManagement.createNewProxyGroup')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        T(
                          (_(),
                          C(
                            o,
                            {
                              ref_key: 'cTable',
                              ref: S,
                              data: p.value,
                              style: { width: '100%', 'margin-top': '20px' },
                              'max-height': j(V)
                            },
                            {
                              default: L(function () {
                                return [
                                  G(
                                    a,
                                    { prop: 'name', label: e.$t('groupManagement.proxyGroupName') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  G(
                                    a,
                                    { prop: 'alias', label: e.$t('groupManagement.alias') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  G(
                                    a,
                                    {
                                      prop: 'created_at',
                                      label: e.$t('groupManagement.createTime')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  G(
                                    a,
                                    {
                                      prop: 'updated_at',
                                      label: e.$t('groupManagement.updateTime')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  G(
                                    a,
                                    { label: e.$t('groupManagement.operations'), width: '200' },
                                    {
                                      default: L(function (t) {
                                        return [
                                          G(
                                            n,
                                            {
                                              size: 'small',
                                              onClick: function (e) {
                                                return (
                                                  (n = t.row),
                                                  (v.value = n),
                                                  (O.value = {
                                                    name: n.name,
                                                    alias: n.alias || ''
                                                  }),
                                                  void (g.value = !0)
                                                )
                                                var n
                                              }
                                            },
                                            {
                                              default: L(function () {
                                                return [$(E(e.$t('groupManagement.edit')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          G(
                                            n,
                                            {
                                              size: 'small',
                                              type: 'danger',
                                              onClick: function (e) {
                                                return z(t.row)
                                              }
                                            },
                                            {
                                              default: L(function () {
                                                return [$(E(e.$t('groupManagement.delete')), 1)]
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
                          [[s, f.value]]
                        ),
                        G(
                          c,
                          {
                            title: v.value
                              ? e.$t('groupManagement.editProxyGroup')
                              : e.$t('groupManagement.createProxyGroup'),
                            modelValue: g.value,
                            'onUpdate:modelValue':
                              t[3] ||
                              (t[3] = function (e) {
                                return (g.value = e)
                              }),
                            width: '500px',
                            onClose:
                              t[4] ||
                              (t[4] = function () {
                                ;((O.value = { name: '', alias: '' }), (v.value = null))
                              })
                          },
                          {
                            footer: L(function () {
                              return [
                                G(
                                  n,
                                  {
                                    onClick:
                                      t[2] ||
                                      (t[2] = function (e) {
                                        return (g.value = !1)
                                      })
                                  },
                                  {
                                    default: L(function () {
                                      return [$(E(e.$t('groupManagement.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                G(
                                  n,
                                  { type: 'primary', onClick: U },
                                  {
                                    default: L(function () {
                                      return [$(E(e.$t('groupManagement.confirm')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: L(function () {
                              return [
                                G(
                                  i,
                                  { model: O.value, 'label-width': '80px' },
                                  {
                                    default: L(function () {
                                      return [
                                        G(
                                          l,
                                          { label: e.$t('groupManagement.proxyGroupName') },
                                          {
                                            default: L(function () {
                                              return [
                                                G(
                                                  u,
                                                  {
                                                    modelValue: O.value.name,
                                                    'onUpdate:modelValue':
                                                      t[0] ||
                                                      (t[0] = function (e) {
                                                        return (O.value.name = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: e.$t(
                                                      'groupManagement.enterProxyGroupName'
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
                                        G(
                                          l,
                                          { label: e.$t('groupManagement.alias') },
                                          {
                                            default: L(function () {
                                              return [
                                                G(
                                                  u,
                                                  {
                                                    modelValue: O.value.alias,
                                                    'onUpdate:modelValue':
                                                      t[1] ||
                                                      (t[1] = function (e) {
                                                        return (O.value.alias = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: e.$t('groupManagement.enterAlias')
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
                          ['title', 'modelValue']
                        )
                      ])
                    )
                  }
                )
              }
            }),
            S = g(N, [['__scopeId', 'data-v-5d383ef7']]),
            V = { class: 'group-management' },
            F = v({
              __name: 'index',
              setup: function (e) {
                var n = m().t,
                  a = y([]),
                  o = y(!1),
                  u = y(!1),
                  l = y(null),
                  g = y('group'),
                  v = y(null),
                  P = s(),
                  N = P.cTable,
                  F = P.maxHeight,
                  O = P.handleGetTableHeight,
                  B = y({ name: '' }),
                  U = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (o.value = !0), (e.next = 4), i())
                                case 4:
                                  ;((r = e.sent), (a.value = r || []), (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    d.error(n('groupManagement.getGroupListFailed')),
                                    console.error(e.t0))
                                case 12:
                                  return ((e.prev = 12), (o.value = !1), e.finish(12))
                                case 15:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 8, 12, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  z = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), !l.value)) {
                                    e.next = 7
                                    break
                                  }
                                  return ((e.next = 4), c(l.value.uuid, B.value))
                                case 4:
                                  ;(d.success(n('groupManagement.groupUpdateSuccess')),
                                    (e.next = 10))
                                  break
                                case 7:
                                  return ((e.next = 9), p(B.value))
                                case 9:
                                  d.success(n('groupManagement.groupCreateSuccess'))
                                case 10:
                                  return (
                                    (u.value = !1),
                                    (B.value = { name: '' }),
                                    (l.value = null),
                                    (e.next = 15),
                                    U()
                                  )
                                case 15:
                                  e.next = 21
                                  break
                                case 17:
                                  ;((e.prev = 17),
                                    (e.t0 = e.catch(0)),
                                    d.error(
                                      l.value
                                        ? n('groupManagement.groupUpdateFailed')
                                        : n('groupManagement.groupCreateFailed')
                                    ),
                                    console.error(e.t0))
                                case 21:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 17]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  D = (function () {
                    var e = r(
                      t().mark(function e(r) {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    h.confirm(
                                      n('groupManagement.confirmDeleteGroup', {
                                        groupName: r.name
                                      }),
                                      n('groupManagement.confirmDelete'),
                                      {
                                        confirmButtonText: n('groupManagement.confirmButtonText'),
                                        cancelButtonText: n('groupManagement.cancelButtonText'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), f(r.uuid))
                                case 5:
                                  return (
                                    d.success(n('groupManagement.groupDeleteSuccess')),
                                    (e.next = 8),
                                    U()
                                  )
                                case 8:
                                  e.next = 13
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (d.error(n('groupManagement.groupDeleteFailed')),
                                      console.error(e.t0)))
                                case 13:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 10]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  H = function () {
                    ;((l.value = null), (B.value = { name: '' }), (u.value = !0))
                  },
                  I = function (e) {
                    'group' === e
                      ? U()
                      : 'proxyGroup' === e && v.value && v.value.fetchProxyGroupList()
                  }
                return (
                  x(function () {
                    ;(U(), O(), window.addEventListener('resize', O))
                  }),
                  b(function () {
                    window.removeEventListener('resize', O)
                  }),
                  function (e, t) {
                    var n = w('el-button'),
                      r = w('PageBanner'),
                      i = w('el-table-column'),
                      c = w('el-table'),
                      p = w('el-tab-pane'),
                      f = w('el-tabs'),
                      s = w('el-input'),
                      m = w('el-form-item'),
                      d = w('el-form'),
                      h = w('el-dialog'),
                      y = M('loading')
                    return (
                      _(),
                      k('div', V, [
                        G(
                          f,
                          {
                            modelValue: g.value,
                            'onUpdate:modelValue':
                              t[0] ||
                              (t[0] = function (e) {
                                return (g.value = e)
                              }),
                            class: 'group-tabs',
                            onTabChange: I
                          },
                          {
                            default: L(function () {
                              return [
                                G(
                                  p,
                                  {
                                    label: e.$t('groupManagement.instanceGroupManagement'),
                                    name: 'group'
                                  },
                                  {
                                    default: L(function () {
                                      return [
                                        G(
                                          r,
                                          { title: '' },
                                          {
                                            extra: L(function () {
                                              return [
                                                G(
                                                  n,
                                                  { icon: 'RefreshRight', onClick: U },
                                                  {
                                                    default: L(function () {
                                                      return [
                                                        $(E(e.$t('groupManagement.refresh')), 1)
                                                      ]
                                                    }),
                                                    _: 1
                                                  }
                                                ),
                                                G(
                                                  n,
                                                  { type: 'primary', onClick: H },
                                                  {
                                                    default: L(function () {
                                                      return [
                                                        $(
                                                          E(e.$t('groupManagement.createNewGroup')),
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
                                          }
                                        ),
                                        T(
                                          (_(),
                                          C(
                                            c,
                                            {
                                              ref_key: 'cTable',
                                              ref: N,
                                              data: a.value,
                                              style: { width: '100%', 'margin-top': '20px' },
                                              'max-height': j(F)
                                            },
                                            {
                                              default: L(function () {
                                                return [
                                                  G(
                                                    i,
                                                    {
                                                      prop: 'name',
                                                      label: e.$t('groupManagement.groupName')
                                                    },
                                                    null,
                                                    8,
                                                    ['label']
                                                  ),
                                                  G(
                                                    i,
                                                    {
                                                      prop: 'created_at',
                                                      label: e.$t('groupManagement.createTime')
                                                    },
                                                    null,
                                                    8,
                                                    ['label']
                                                  ),
                                                  G(
                                                    i,
                                                    {
                                                      prop: 'updated_at',
                                                      label: e.$t('groupManagement.updateTime')
                                                    },
                                                    null,
                                                    8,
                                                    ['label']
                                                  ),
                                                  G(
                                                    i,
                                                    {
                                                      label: e.$t('groupManagement.operations'),
                                                      width: '200'
                                                    },
                                                    {
                                                      default: L(function (t) {
                                                        return [
                                                          G(
                                                            n,
                                                            {
                                                              size: 'small',
                                                              onClick: function (e) {
                                                                return (
                                                                  (n = t.row),
                                                                  (l.value = n),
                                                                  (B.value = { name: n.name }),
                                                                  void (u.value = !0)
                                                                )
                                                                var n
                                                              }
                                                            },
                                                            {
                                                              default: L(function () {
                                                                return [
                                                                  $(
                                                                    E(e.$t('groupManagement.edit')),
                                                                    1
                                                                  )
                                                                ]
                                                              }),
                                                              _: 2
                                                            },
                                                            1032,
                                                            ['onClick']
                                                          ),
                                                          G(
                                                            n,
                                                            {
                                                              size: 'small',
                                                              type: 'danger',
                                                              onClick: function (e) {
                                                                return D(t.row)
                                                              }
                                                            },
                                                            {
                                                              default: L(function () {
                                                                return [
                                                                  $(
                                                                    E(
                                                                      e.$t('groupManagement.delete')
                                                                    ),
                                                                    1
                                                                  )
                                                                ]
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
                                          [[y, o.value]]
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                G(
                                  p,
                                  {
                                    label: e.$t('groupManagement.proxyGroupManagement'),
                                    name: 'proxyGroup'
                                  },
                                  {
                                    default: L(function () {
                                      return [G(S, { ref_key: 'proxyGroupRef', ref: v }, null, 512)]
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
                          ['modelValue']
                        ),
                        G(
                          h,
                          {
                            title: l.value
                              ? e.$t('groupManagement.editGroup')
                              : e.$t('groupManagement.createGroup'),
                            modelValue: u.value,
                            'onUpdate:modelValue':
                              t[3] ||
                              (t[3] = function (e) {
                                return (u.value = e)
                              }),
                            width: '500px',
                            onClose:
                              t[4] ||
                              (t[4] = function () {
                                ;((B.value = { name: '' }), (l.value = null))
                              })
                          },
                          {
                            footer: L(function () {
                              return [
                                G(
                                  n,
                                  {
                                    onClick:
                                      t[2] ||
                                      (t[2] = function (e) {
                                        return (u.value = !1)
                                      })
                                  },
                                  {
                                    default: L(function () {
                                      return [$(E(e.$t('groupManagement.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                G(
                                  n,
                                  { type: 'primary', onClick: z },
                                  {
                                    default: L(function () {
                                      return [$(E(e.$t('groupManagement.confirm')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: L(function () {
                              return [
                                G(
                                  d,
                                  { model: B.value, 'label-width': '80px' },
                                  {
                                    default: L(function () {
                                      return [
                                        G(
                                          m,
                                          { label: e.$t('groupManagement.groupName') },
                                          {
                                            default: L(function () {
                                              return [
                                                G(
                                                  s,
                                                  {
                                                    modelValue: B.value.name,
                                                    'onUpdate:modelValue':
                                                      t[1] ||
                                                      (t[1] = function (e) {
                                                        return (B.value.name = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: e.$t(
                                                      'groupManagement.enterGroupName'
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
                          ['title', 'modelValue']
                        )
                      ])
                    )
                  }
                )
              }
            })
          e('default', g(F, [['__scopeId', 'data-v-d7138a43']]))
        }
      }
    }
  )
})()
