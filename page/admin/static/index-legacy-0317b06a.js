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
    var a = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e)
      ;(t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        a.push.apply(a, n))
    }
    return a
  }
  function a(e) {
    for (var a = 1; a < arguments.length; a++) {
      var r = null != arguments[a] ? arguments[a] : {}
      a % 2
        ? t(Object(r), !0).forEach(function (t) {
            n(e, t, r[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : t(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
    }
    return e
  }
  function n(t, a, n) {
    var r
    return (
      (r = (function (t, a) {
        if ('object' != e(t) || !t) return t
        var n = t[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(t, a || 'default')
          if ('object' != e(r)) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === a ? String : Number)(t)
      })(a, 'string')),
      (a = 'symbol' == e(r) ? r : String(r)) in t
        ? Object.defineProperty(t, a, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[a] = n),
      t
    )
  }
  function r() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ r =
      function () {
        return a
      }
    var t,
      a = {},
      n = Object.prototype,
      l = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, a) {
          e[t] = a.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      i = u.iterator || '@@iterator',
      s = u.asyncIterator || '@@asyncIterator',
      c = u.toStringTag || '@@toStringTag'
    function p(e, t, a) {
      return (
        Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      p({}, '')
    } catch (t) {
      p = function (e, t, a) {
        return (e[t] = a)
      }
    }
    function d(e, t, a, n) {
      var r = t && t.prototype instanceof y ? t : y,
        l = Object.create(r.prototype),
        u = new j(n || [])
      return (o(l, '_invoke', { value: V(e, a, u) }), l)
    }
    function f(e, t, a) {
      try {
        return { type: 'normal', arg: e.call(t, a) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    a.wrap = d
    var g = 'suspendedStart',
      m = 'suspendedYield',
      v = 'executing',
      h = 'completed',
      k = {}
    function y() {}
    function b() {}
    function _() {}
    var w = {}
    p(w, i, function () {
      return this
    })
    var x = Object.getPrototypeOf,
      M = x && x(x(O([])))
    M && M !== n && l.call(M, i) && (w = M)
    var C = (_.prototype = y.prototype = Object.create(w))
    function S(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        p(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function T(t, a) {
      function n(r, o, u, i) {
        var s = f(t[r], t, o)
        if ('throw' !== s.type) {
          var c = s.arg,
            p = c.value
          return p && 'object' == e(p) && l.call(p, '__await')
            ? a.resolve(p.__await).then(
                function (e) {
                  n('next', e, u, i)
                },
                function (e) {
                  n('throw', e, u, i)
                }
              )
            : a.resolve(p).then(
                function (e) {
                  ;((c.value = e), u(c))
                },
                function (e) {
                  return n('throw', e, u, i)
                }
              )
        }
        i(s.arg)
      }
      var r
      o(this, '_invoke', {
        value: function (e, t) {
          function l() {
            return new a(function (a, r) {
              n(e, t, a, r)
            })
          }
          return (r = r ? r.then(l, l) : l())
        }
      })
    }
    function V(e, a, n) {
      var r = g
      return function (l, o) {
        if (r === v) throw new Error('Generator is already running')
        if (r === h) {
          if ('throw' === l) throw o
          return { value: t, done: !0 }
        }
        for (n.method = l, n.arg = o; ; ) {
          var u = n.delegate
          if (u) {
            var i = E(u, n)
            if (i) {
              if (i === k) continue
              return i
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (r === g) throw ((r = h), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          r = v
          var s = f(e, a, n)
          if ('normal' === s.type) {
            if (((r = n.done ? h : m), s.arg === k)) continue
            return { value: s.arg, done: n.done }
          }
          'throw' === s.type && ((r = h), (n.method = 'throw'), (n.arg = s.arg))
        }
      }
    }
    function E(e, a) {
      var n = a.method,
        r = e.iterator[n]
      if (r === t)
        return (
          (a.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((a.method = 'return'), (a.arg = t), E(e, a), 'throw' === a.method)) ||
            ('return' !== n &&
              ((a.method = 'throw'),
              (a.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          k
        )
      var l = f(r, e.iterator, a.arg)
      if ('throw' === l.type) return ((a.method = 'throw'), (a.arg = l.arg), (a.delegate = null), k)
      var o = l.arg
      return o
        ? o.done
          ? ((a[e.resultName] = o.value),
            (a.next = e.nextLoc),
            'return' !== a.method && ((a.method = 'next'), (a.arg = t)),
            (a.delegate = null),
            k)
          : o
        : ((a.method = 'throw'),
          (a.arg = new TypeError('iterator result is not an object')),
          (a.delegate = null),
          k)
    }
    function L(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function D(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function j(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(L, this), this.reset(!0))
    }
    function O(a) {
      if (a || '' === a) {
        var n = a[i]
        if (n) return n.call(a)
        if ('function' == typeof a.next) return a
        if (!isNaN(a.length)) {
          var r = -1,
            o = function e() {
              for (; ++r < a.length; ) if (l.call(a, r)) return ((e.value = a[r]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (o.next = o)
        }
      }
      throw new TypeError(e(a) + ' is not iterable')
    }
    return (
      (b.prototype = _),
      o(C, 'constructor', { value: _, configurable: !0 }),
      o(_, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = p(_, c, 'GeneratorFunction')),
      (a.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (a.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, _)
            : ((e.__proto__ = _), p(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(C)),
          e
        )
      }),
      (a.awrap = function (e) {
        return { __await: e }
      }),
      S(T.prototype),
      p(T.prototype, s, function () {
        return this
      }),
      (a.AsyncIterator = T),
      (a.async = function (e, t, n, r, l) {
        void 0 === l && (l = Promise)
        var o = new T(d(e, t, n, r), l)
        return a.isGeneratorFunction(t)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next()
            })
      }),
      S(C),
      p(C, c, 'Generator'),
      p(C, i, function () {
        return this
      }),
      p(C, 'toString', function () {
        return '[object Generator]'
      }),
      (a.keys = function (e) {
        var t = Object(e),
          a = []
        for (var n in t) a.push(n)
        return (
          a.reverse(),
          function e() {
            for (; a.length; ) {
              var n = a.pop()
              if (n in t) return ((e.value = n), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (a.values = O),
      (j.prototype = {
        constructor: j,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(D),
            !e)
          )
            for (var a in this)
              't' === a.charAt(0) && l.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = t)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var a = this
          function n(n, r) {
            return (
              (u.type = 'throw'),
              (u.arg = e),
              (a.next = n),
              r && ((a.method = 'next'), (a.arg = t)),
              !!r
            )
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r],
              u = o.completion
            if ('root' === o.tryLoc) return n('end')
            if (o.tryLoc <= this.prev) {
              var i = l.call(o, 'catchLoc'),
                s = l.call(o, 'finallyLoc')
              if (i && s) {
                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
              } else if (i) {
                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
              } else {
                if (!s) throw new Error('try statement without catch or finally')
                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var n = this.tryEntries[a]
            if (n.tryLoc <= this.prev && l.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var r = n
              break
            }
          }
          r &&
            ('break' === e || 'continue' === e) &&
            r.tryLoc <= t &&
            t <= r.finallyLoc &&
            (r = null)
          var o = r ? r.completion : {}
          return (
            (o.type = e),
            (o.arg = t),
            r ? ((this.method = 'next'), (this.next = r.finallyLoc), k) : this.complete(o)
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
            k
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var a = this.tryEntries[t]
            if (a.finallyLoc === e) return (this.complete(a.completion, a.afterLoc), D(a), k)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var a = this.tryEntries[t]
            if (a.tryLoc === e) {
              var n = a.completion
              if ('throw' === n.type) {
                var r = n.arg
                D(a)
              }
              return r
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, a, n) {
          return (
            (this.delegate = { iterator: O(e), resultName: a, nextLoc: n }),
            'next' === this.method && (this.arg = t),
            k
          )
        }
      }),
      a
    )
  }
  function l(e, t, a, n, r, l, o) {
    try {
      var u = e[l](o),
        i = u.value
    } catch (s) {
      return void a(s)
    }
    u.done ? t(i) : Promise.resolve(i).then(n, r)
  }
  function o(e) {
    return function () {
      var t = this,
        a = arguments
      return new Promise(function (n, r) {
        var o = e.apply(t, a)
        function u(e) {
          l(o, n, r, u, i, 'next', e)
        }
        function i(e) {
          l(o, n, r, u, i, 'throw', e)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-31ac821a.js',
      './index-legacy-62a49047.js',
      './usePagination-legacy-5b27e706.js',
      './index-legacy-d4b804d0.js',
      './InstanceStatusTag-legacy-85e0aeb6.js',
      './element-legacy-e7b6e573.js',
      './BatchInstanceOpenDialog-legacy-18d91f3a.js',
      './script-legacy-0642077e.js',
      './useTableHeightFit-legacy-f881449c.js',
      './vxe-legacy-cc8d3321.js',
      './index-legacy-ba7ec4d0.js',
      './ProxySelector-legacy-4a8af67d.js',
      './index-legacy-403fb186.js'
    ],
    function (e, t) {
      'use strict'
      var n,
        l,
        u,
        i,
        s,
        c,
        p,
        d,
        f,
        g,
        m,
        v,
        h,
        k,
        y,
        b,
        _,
        w,
        x,
        M,
        C,
        S,
        T,
        V,
        E,
        L,
        D,
        j,
        O,
        $,
        P,
        U,
        z,
        I,
        F,
        N,
        R,
        A,
        q,
        G,
        B,
        H,
        K
      return {
        setters: [
          function (e) {
            ;((n = e.y),
              (l = e.at),
              (u = e.r),
              (i = e.R),
              (s = e.d),
              (c = e.a8),
              (p = e.ag),
              (d = e.f),
              (f = e.h),
              (g = e.N),
              (m = e.H),
              (v = e.u),
              (h = e.F),
              (k = e.a0),
              (y = e.K),
              (b = e.i),
              (_ = e.L),
              (w = e.M),
              (x = e.I),
              (M = e.G),
              (C = e.a1),
              (S = e.ay),
              (T = e.e),
              (V = e.b),
              (E = e.aq),
              (L = e.Q))
          },
          function (e) {
            ;((D = e.g), (j = e.q))
          },
          function (e) {
            O = e.g
          },
          function (e) {
            $ = e.u
          },
          function (e) {
            ;((P = e.h), (U = e.f), (z = e._), (I = e.q), (F = e.m), (N = e.n))
          },
          function (e) {
            R = e.I
          },
          function (e) {
            ;((A = e.E), (q = e.e), (G = e.G))
          },
          function (e) {
            B = e.default
          },
          function (e) {
            H = e.g
          },
          function (e) {
            K = e.u
          },
          null,
          null,
          null,
          null
        ],
        execute: function () {
          var Y = document.createElement('style')
          ;((Y.textContent =
            '.instance-selector[data-v-e0117625]{width:100%}.instance-selector-drawer[data-v-e0117625]{padding:20px;height:100%;box-sizing:border-box;position:relative}.search-wrapper[data-v-e0117625]{margin-bottom:20px}.drawer-footer[data-v-e0117625]{position:absolute;bottom:20px;right:20px;left:20px;padding:20px 0}.group-filter-popper{max-height:300px!important;overflow-y:auto!important}[data-v-2cc9b3a0] .el-descriptions{margin-bottom:20px}[data-v-2cc9b3a0] .el-tag{margin-right:5px}.pagination-container[data-v-2cc9b3a0]{margin-top:20px}.error-message-container[data-v-2cc9b3a0]{display:flex;align-items:flex-start}.error-message-text[data-v-2cc9b3a0]{flex:1;color:#f56c6c;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;white-space:pre-wrap;word-break:break-word;margin-right:10px}.task-management[data-v-fe5c8100]{padding:20px}.task-management .task-content[data-v-fe5c8100]{margin-top:20px}.task-management .task-content .search-card[data-v-fe5c8100]{margin-bottom:20px}.task-management .task-content .search-card[data-v-fe5c8100] .el-form-item{margin-bottom:0}.task-management .task-content .table-card[data-v-fe5c8100]{margin-bottom:20px}.task-management .task-content .table-card .pagination-container[data-v-fe5c8100]{margin-top:20px;display:flex;justify-content:flex-end}.task-management .task-content .error-message .error-text[data-v-fe5c8100]{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#f56c6c;font-size:12px}[data-v-fe5c8100] .el-descriptions{margin-bottom:20px}[data-v-fe5c8100] .el-tag{margin-right:5px}\n'),
            document.head.appendChild(Y))
          var W = { class: 'instance-selector' },
            J = { key: 0, class: 'selected-instances' },
            Q = { class: 'instance-selector-drawer' },
            Z = { class: 'search-wrapper' },
            X = {
              class: 'pager-wrapper',
              style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'flex-end' }
            },
            ee = { class: 'drawer-footer', style: { padding: '20px 0', 'text-align': 'right' } },
            te = n({
              __name: 'InstanceSelector',
              props: { modelValue: {} },
              emits: ['update:modelValue', 'change'],
              setup: function (e, t) {
                var n = t.emit,
                  C = P().t,
                  S = U(),
                  T = l(S),
                  V = T.userInfo,
                  E = (T.roles, e),
                  L = n,
                  z = u(!1),
                  I = u([]),
                  F = u([]),
                  N = u(E.modelValue || ''),
                  q = $(),
                  G = (q.tableKey, q.paginationData),
                  B = q.handleCurrentChange,
                  H = q.handleSizeChange,
                  K = u([]),
                  Y = u(!1),
                  te = u([]),
                  ae = u({}),
                  ne = i({ padName: '' }),
                  re = (function () {
                    var e = o(
                      r().mark(function e() {
                        var t
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), O())
                                case 3:
                                  ;((t = e.sent),
                                    (te.value = t.map(function (e) {
                                      return { text: e.name, value: e.uuid }
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error(
                                      C('taskManagement.getInstanceListFailed') + ':',
                                      e.t0
                                    ))
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
                  le = function (e) {
                    ;('group' in e &&
                      (ae.value.local_group_uuid = e.group.length > 0 ? e.group[0] : ''),
                      (G.currentPage = 1),
                      oe())
                  },
                  oe = (function () {
                    var e = o(
                      r().mark(function e() {
                        var t, n, l, o, u, i, s, c
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((Y.value = !0),
                                    (e.prev = 1),
                                    (t = Object.values(ae.value).some(function (e) {
                                      return '' !== e && null != e
                                    })),
                                    (n = []),
                                    !t)
                                  ) {
                                    e.next = 13
                                    break
                                  }
                                  return (
                                    (e.next = 7),
                                    D(
                                      a(
                                        a({}, ae.value),
                                        {},
                                        { page: G.currentPage, page_size: G.pageSize }
                                      )
                                    )
                                  )
                                case 7:
                                  if (0 !== (n = e.sent).total) {
                                    e.next = 13
                                    break
                                  }
                                  return (
                                    (K.value = []),
                                    (G.total = 0),
                                    (Y.value = !1),
                                    e.abrupt('return')
                                  )
                                case 13:
                                  return (
                                    (l = {
                                      groupIds: [V.value.group_id],
                                      page: G.currentPage,
                                      rows: G.pageSize
                                    }),
                                    ne.padName &&
                                      ((o = ne.padName
                                        .split(',')
                                        .map(function (e) {
                                          return e.trim()
                                        })
                                        .filter(function (e) {
                                          return '' !== e
                                        })),
                                      (l.padCodes = o)),
                                    t &&
                                      ((l.padCodes = n.instances.map(function (e) {
                                        return e.instance_id
                                      })),
                                      (l.page = 1)),
                                    (e.next = 18),
                                    j(l)
                                  )
                                case 18:
                                  if (((u = e.sent), (e.prev = 19), !t)) {
                                    e.next = 26
                                    break
                                  }
                                  ;((i = Object.fromEntries(
                                    n.instances.map(function (e) {
                                      return [
                                        e.instance_id,
                                        a(
                                          a({}, e),
                                          {},
                                          {
                                            proxy_info: e.proxy_info ? JSON.parse(e.proxy_info) : {}
                                          }
                                        )
                                      ]
                                    })
                                  )),
                                    u.data.pageData.forEach(function (e) {
                                      i[e.padCode] && (e.record = i[e.padCode])
                                    }),
                                    (G.total = n.total),
                                    (e.next = 32))
                                  break
                                case 26:
                                  return (
                                    (e.next = 28),
                                    D({
                                      instance_ids: u.data.pageData
                                        ? u.data.pageData.map(function (e) {
                                            return e.padCode
                                          })
                                        : []
                                    })
                                  )
                                case 28:
                                  ;((s = e.sent),
                                    (c = Object.fromEntries(
                                      s.instances.map(function (e) {
                                        return [
                                          e.instance_id,
                                          a(
                                            a({}, e),
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
                                    u.data.pageData.forEach(function (e) {
                                      c[e.padCode] && (e.record = c[e.padCode])
                                    }),
                                    (G.total = u.data.total))
                                case 32:
                                  ;((K.value = u.data.pageData || []), (e.next = 38))
                                  break
                                case 35:
                                  ;((e.prev = 35),
                                    (e.t0 = e.catch(19)),
                                    (K.value = u.data.pageData || []))
                                case 38:
                                  e.next = 45
                                  break
                                case 40:
                                  ;((e.prev = 40),
                                    (e.t1 = e.catch(1)),
                                    console.error(
                                      C('taskManagement.getInstanceListFailed') + ':',
                                      e.t1
                                    ),
                                    A.error(C('taskManagement.getInstanceListFailed')),
                                    (K.value = []))
                                case 45:
                                  return ((e.prev = 45), (Y.value = !1), e.finish(45))
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
                  ue = function () {
                    1 === G.currentPage ? oe() : (G.currentPage = 1)
                  },
                  ie = function () {
                    ;((ne.padName = ''), ue())
                  },
                  se = null,
                  ce = function () {
                    ;(clearTimeout(se),
                      (se = setTimeout(function () {
                        ue()
                      }, 500)))
                  },
                  pe = function (e) {
                    ;((I.value = e),
                      (F.value = e.map(function (e) {
                        return e.padCode
                      })))
                  },
                  de = function () {
                    ;((z.value = !0), re(), oe())
                  },
                  fe = function () {
                    z.value = !1
                  },
                  ge = function () {
                    if (0 !== I.value.length) {
                      var e = I.value.map(function (e) {
                        return e.padCode
                      })
                      1 === e.length
                        ? (N.value = e[0])
                        : (N.value = C('taskManagement.selectedCount', { count: e.length }))
                      var t = (e.length, e)
                      ;(L('update:modelValue', t), L('change', t), fe())
                    } else A.warning(C('taskManagement.pleaseSelectInstance'))
                  }
                return (
                  s(
                    function () {
                      return E.modelValue
                    },
                    function (e) {
                      Array.isArray(e)
                        ? 0 === e.length
                          ? (N.value = '')
                          : 1 === e.length
                            ? (N.value = e[0])
                            : (N.value = C('taskManagement.selectedCount', { count: e.length }))
                        : e !== N.value && (N.value = e || '')
                    }
                  ),
                  s(
                    [
                      function () {
                        return G.currentPage
                      },
                      function () {
                        return G.pageSize
                      }
                    ],
                    oe,
                    { immediate: !0 }
                  ),
                  function (e, t) {
                    var a = c('el-button'),
                      n = c('el-input'),
                      r = c('el-tag'),
                      l = c('el-table-column'),
                      o = c('el-table'),
                      u = c('el-pagination'),
                      i = c('el-drawer'),
                      s = p('loading')
                    return (
                      d(),
                      f('div', W, [
                        g(
                          n,
                          {
                            modelValue: N.value,
                            'onUpdate:modelValue':
                              t[0] ||
                              (t[0] = function (e) {
                                return (N.value = e)
                              }),
                            placeholder: v(C)('taskManagement.selectInstance'),
                            readonly: '',
                            onClick: de,
                            style: { cursor: 'pointer' }
                          },
                          {
                            append: m(function () {
                              return [g(a, { onClick: de, icon: 'Search' })]
                            }),
                            _: 1
                          },
                          8,
                          ['modelValue', 'placeholder']
                        ),
                        Array.isArray(E.modelValue) && E.modelValue.length > 0
                          ? (d(),
                            f('div', J, [
                              (d(!0),
                              f(
                                h,
                                null,
                                k(E.modelValue, function (e) {
                                  return (
                                    d(),
                                    M(
                                      r,
                                      {
                                        key: e,
                                        closable: '',
                                        onClose: function (t) {
                                          return (function (e) {
                                            if (Array.isArray(E.modelValue)) {
                                              var t = E.modelValue.filter(function (t) {
                                                return t !== e
                                              })
                                              0 === t.length
                                                ? (N.value = '')
                                                : 1 === t.length
                                                  ? (N.value = t[0])
                                                  : (N.value = C('taskManagement.selectedCount', {
                                                      count: t.length
                                                    }))
                                              var a = (t.length, t)
                                              ;(L('update:modelValue', a), L('change', a))
                                            }
                                          })(e)
                                        },
                                        style: { margin: '2px' }
                                      },
                                      {
                                        default: m(function () {
                                          return [_(w(e), 1)]
                                        }),
                                        _: 2
                                      },
                                      1032,
                                      ['onClose']
                                    )
                                  )
                                }),
                                128
                              ))
                            ]))
                          : y('', !0),
                        g(
                          i,
                          {
                            modelValue: z.value,
                            'onUpdate:modelValue':
                              t[2] ||
                              (t[2] = function (e) {
                                return (z.value = e)
                              }),
                            title: v(C)('taskManagement.instanceSelectorTitle'),
                            size: '60%',
                            direction: 'rtl',
                            'before-close': fe
                          },
                          {
                            default: m(function () {
                              return [
                                b('div', Q, [
                                  b('div', Z, [
                                    g(
                                      n,
                                      {
                                        modelValue: ne.padName,
                                        'onUpdate:modelValue':
                                          t[1] ||
                                          (t[1] = function (e) {
                                            return (ne.padName = e)
                                          }),
                                        modelModifiers: { trim: !0 },
                                        placeholder: v(C)('taskManagement.enterInstanceCode'),
                                        style: { width: '300px', 'margin-right': '10px' },
                                        onInput: ce
                                      },
                                      {
                                        append: m(function () {
                                          return [
                                            g(
                                              a,
                                              { onClick: ie },
                                              {
                                                default: m(function () {
                                                  return [_(w(v(C)('taskManagement.clear')), 1)]
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
                                    g(
                                      a,
                                      { icon: 'RefreshRight', onClick: oe },
                                      {
                                        default: m(function () {
                                          return [_(w(v(C)('taskManagement.refreshInstances')), 1)]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  x(
                                    (d(),
                                    M(
                                      o,
                                      {
                                        data: K.value,
                                        'row-key': 'id',
                                        onSelectionChange: pe,
                                        onFilterChange: le,
                                        'max-height': 'calc(100vh - 300px)',
                                        style: { 'margin-bottom': '20px' }
                                      },
                                      {
                                        default: m(function () {
                                          return [
                                            g(l, { type: 'selection', width: '55' }),
                                            g(
                                              l,
                                              {
                                                prop: 'padCode',
                                                label: v(C)('taskManagement.instanceInfo'),
                                                width: '300'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [
                                                    b(
                                                      'div',
                                                      null,
                                                      w(v(C)('taskManagement.instanceCode')) +
                                                        '：' +
                                                        w(t.padCode),
                                                      1
                                                    ),
                                                    b(
                                                      'div',
                                                      null,
                                                      w(v(C)('taskManagement.instanceSpec')) +
                                                        '：' +
                                                        w(t.padGrade),
                                                      1
                                                    ),
                                                    b('div', null, [
                                                      _(
                                                        w(v(C)('taskManagement.instanceType')) +
                                                          '： ',
                                                        1
                                                      ),
                                                      g(
                                                        r,
                                                        { type: (t.padType, 'info') },
                                                        {
                                                          default: m(function () {
                                                            return [
                                                              _(
                                                                w(
                                                                  'real' === t.padType
                                                                    ? v(C)(
                                                                        'taskManagement.physicalMachine'
                                                                      )
                                                                    : v(C)(
                                                                        'taskManagement.virtualMachine'
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
                                                    b(
                                                      'div',
                                                      null,
                                                      w(v(C)('taskManagement.instanceIp')) +
                                                        '：' +
                                                        w(t.padIp),
                                                      1
                                                    ),
                                                    b(
                                                      'div',
                                                      null,
                                                      w(v(C)('taskManagement.image')) +
                                                        '：' +
                                                        w(t.imageId),
                                                      1
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              l,
                                              {
                                                prop: 'status',
                                                label: v(C)('taskManagement.status')
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [
                                                    g(R, { status: t.padStatus }, null, 8, [
                                                      'status'
                                                    ])
                                                  ]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              l,
                                              {
                                                prop: 'group',
                                                label: v(C)('taskManagement.group'),
                                                'column-key': 'group',
                                                filters: te.value,
                                                'filter-multiple': !1,
                                                'min-width': '150',
                                                'popper-class': 'group-filter-popper'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t,
                                                    a = e.row
                                                  return [
                                                    _(
                                                      w(
                                                        (null === (t = a.record) || void 0 === t
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
                                    [[s, Y.value]]
                                  ),
                                  b('div', X, [
                                    g(
                                      u,
                                      {
                                        layout: v(G).layout,
                                        'page-sizes': v(G).pageSizes,
                                        total: v(G).total,
                                        'page-size': v(G).pageSize,
                                        'current-page': v(G).currentPage,
                                        onSizeChange: v(H),
                                        onCurrentChange: v(B)
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
                                  ]),
                                  b('div', ee, [
                                    g(
                                      a,
                                      { onClick: fe },
                                      {
                                        default: m(function () {
                                          return [_(w(v(C)('taskManagement.cancelSelection')), 1)]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    g(
                                      a,
                                      {
                                        type: 'primary',
                                        onClick: ge,
                                        disabled: 0 === I.value.length
                                      },
                                      {
                                        default: m(function () {
                                          return [
                                            _(
                                              w(v(C)('taskManagement.confirmSelection')) +
                                                ' (' +
                                                w(
                                                  v(C)('taskManagement.selectedCount', {
                                                    count: I.value.length
                                                  })
                                                ) +
                                                ') ',
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['disabled']
                                    )
                                  ])
                                ])
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
            }),
            ae = z(te, [['__scopeId', 'data-v-e0117625']]),
            ne = function (e) {
              return I({
                url: '/airtest/tasks/schedule',
                method: 'post',
                data: e,
                baseURL: '/cpyservice'
              })
            },
            re = function (e) {
              return I({
                url: '/airtest/tasks/schedule-with-data-async',
                method: 'post',
                data: e,
                baseURL: '/cpyservice'
              })
            },
            le = function (e) {
              return I({
                url: '/airtest/tasks/task-queue',
                method: 'get',
                params: e,
                baseURL: '/cpyservice'
              })
            },
            oe = function (e) {
              return I({
                url: '/airtest/tasks/execution-logs',
                method: 'get',
                params: e,
                baseURL: '/cpyservice'
              })
            },
            ue = function (e) {
              return I({
                url: '/airtest/tasks/task-queue/'.concat(e, '/action'),
                method: 'post',
                data: { action: 'cancel' },
                baseURL: '/cpyservice'
              })
            },
            ie = function (e) {
              return I({
                url: '/airtest/tasks/task-queue/'.concat(e, '/action'),
                method: 'post',
                data: { action: 'retry' },
                baseURL: '/cpyservice'
              })
            },
            se = function () {
              return I({
                url: '/airtest/tasks/template/download',
                method: 'get',
                responseType: 'blob',
                baseURL: '/cpyservice'
              })
            },
            ce = function (e) {
              return I({
                url: '/airtest/tasks/schedule-with-excel-async',
                method: 'post',
                data: e,
                headers: { 'Content-Type': 'multipart/form-data' },
                baseURL: '/cpyservice'
              })
            },
            pe = { key: 0 },
            de = { class: 'search-container' },
            fe = { key: 0, class: 'error-message-container' },
            ge = ['title'],
            me = { key: 1, style: { color: '#909399' } },
            ve = {
              class: 'pagination-container',
              style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'flex-end' }
            },
            he = n({
              __name: 'TaskLogDialog',
              props: { modelValue: { type: Boolean, default: !1 }, task: { default: null } },
              emits: ['update:modelValue'],
              setup: function (e, a) {
                var n = a.emit,
                  l = P().t,
                  i = S(function () {
                    return N(
                      function () {
                        return t.import('./ClusterWindowsDialog-legacy-3e9dcaeb.js')
                      },
                      void 0
                    )
                  }),
                  h = e,
                  k = n,
                  T = u(!1),
                  V = u(null),
                  E = u([]),
                  L = u(!1),
                  D = u(!1),
                  j = u([]),
                  O = u([]),
                  $ = u({ instance_id_filter: '' }),
                  U = u({ page: 1, size: 10, total: 0 }),
                  z = null
                ;(s(
                  function () {
                    return h.modelValue
                  },
                  function (e) {
                    ;((T.value = e), e && h.task && ((V.value = h.task), I(), R()))
                  }
                ),
                  s(T, function (e) {
                    k('update:modelValue', e)
                  }))
                var I = function () {
                    ;(($.value.instance_id_filter = ''),
                      (U.value.page = 1),
                      (U.value.size = 10),
                      (U.value.total = 0))
                  },
                  R = (function () {
                    var e = o(
                      r().mark(function e() {
                        var t, a
                        return r().wrap(
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
                                  return (
                                    (L.value = !0),
                                    (e.prev = 3),
                                    (t = {
                                      task_queue_id: V.value.id,
                                      page: U.value.page,
                                      size: U.value.size,
                                      instance_id_filter: $.value.instance_id_filter || void 0
                                    }),
                                    (e.next = 7),
                                    oe(t)
                                  )
                                case 7:
                                  ;((a = e.sent)
                                    ? ((E.value = a.items || []),
                                      (U.value.total = a.total || 0),
                                      (U.value.page = a.page || 1),
                                      (U.value.size = a.size || 10))
                                    : ((E.value = []), (U.value.total = 0)),
                                    (e.next = 17))
                                  break
                                case 11:
                                  ;((e.prev = 11),
                                    (e.t0 = e.catch(3)),
                                    console.error('获取任务日志失败:', e.t0),
                                    (E.value = []),
                                    (U.value.total = 0),
                                    A.error(l('taskManagement.getTaskLogFailed')))
                                case 17:
                                  return ((e.prev = 17), (L.value = !1), e.finish(17))
                                case 20:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 11, 17, 20]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  q = function () {
                    ;(z && clearTimeout(z),
                      (z = setTimeout(function () {
                        ;((U.value.page = 1), R())
                      }, 500)))
                  },
                  G = function (e) {
                    ;((U.value.size = e), (U.value.page = 1), R())
                  },
                  B = function (e) {
                    ;((U.value.page = e), R())
                  },
                  H = function () {
                    ;((T.value = !1), (V.value = null), (E.value = []), I())
                  },
                  K = function (e) {
                    O.value = e
                  },
                  Y = function () {
                    if (0 !== O.value.length) {
                      var e = O.value.map(function (e) {
                        return {
                          padCode: e.instance_id,
                          padStatus: 'SUCCESS' === e.status ? 10 : 0
                        }
                      })
                      ;((j.value = e), (D.value = !0))
                    } else A.warning('请先选择要打开集群窗口的实例')
                  },
                  W = function (e) {
                    return e ? new Date(e).toLocaleString('zh-CN') : '-'
                  },
                  J = function (e) {
                    return (
                      {
                        PENDING: 'info',
                        STARTED: 'primary',
                        SUCCESS: 'success',
                        FAILURE: 'danger',
                        REVOKED: 'warning'
                      }[e] || 'info'
                    )
                  },
                  Q = function (e) {
                    return (
                      {
                        PENDING: l('taskManagement.statusText.PENDING'),
                        STARTED: l('taskManagement.statusText.STARTED'),
                        SUCCESS: l('taskManagement.statusText.SUCCESS'),
                        FAILURE: l('taskManagement.statusText.FAILURE'),
                        REVOKED: l('taskManagement.statusText.REVOKED')
                      }[e] || e
                    )
                  },
                  Z = function (e) {
                    var t = e.mode,
                      a = e.count,
                      n = e.instances
                    1 === t ? X(a) : 2 === t && ee(n)
                  },
                  X = function (e) {
                    var t = j.value.map(function (e) {
                      return e.padCode
                    })
                    ae(t.slice(0, e), e)
                  },
                  ee = function (e) {
                    e.map(function (e) {
                      return e.padCode
                    }).forEach(function (e, t) {
                      te(e, 30 * t)
                    })
                  },
                  te = function (e, t) {
                    var a = '/#/mobile/connect/'.concat(e),
                      n = 'width=800,height=600,left='
                        .concat(t, ',top=')
                        .concat(
                          t,
                          ',toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no'
                        )
                    window.open(a, '_blank_'.concat(e), n)
                  },
                  ae = function (e, t) {
                    var a = ne(),
                      n = re(a, t),
                      r = 0
                    !(function t() {
                      if (r < e.length) {
                        var a = e[r],
                          l = n[r]
                        ;(le(a, l), r++, setTimeout(t, 100))
                      }
                    })()
                  },
                  ne = function () {
                    return { width: window.screen.availWidth, height: window.screen.availHeight }
                  },
                  re = function (e, t) {
                    var a, n
                    t <= 2
                      ? ((a = 1), (n = 2))
                      : t <= 4
                        ? ((a = 2), (n = 2))
                        : t <= 6
                          ? ((a = 2), (n = 3))
                          : t <= 8
                            ? ((a = 2), (n = 4))
                            : ((a = 2), (n = 5))
                    for (
                      var r = Math.floor(e.width / n), l = Math.floor(e.height / a), o = [], u = 0;
                      u < t;
                      u++
                    ) {
                      var i = Math.floor(u / n),
                        s = u % n
                      o.push({ x: s * r, y: i * l + 80 * i, width: r - 20, height: l - 80 })
                    }
                    return o
                  },
                  le = function (e, t) {
                    var a = '/#/mobile/connect/'.concat(e),
                      n = 'width='
                        .concat(t.width, ',height=')
                        .concat(t.height, ',left=')
                        .concat(t.x, ',top=')
                        .concat(
                          t.y,
                          ',fullscreen=yes,toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no'
                        )
                    window.open(a, '_blank_'.concat(e), n)
                  }
                return function (e, t) {
                  var a = c('el-descriptions-item'),
                    n = c('el-tag'),
                    r = c('el-descriptions'),
                    o = c('el-input'),
                    u = c('el-form-item'),
                    s = c('el-button'),
                    h = c('el-form'),
                    k = c('el-table-column'),
                    S = c('el-table'),
                    P = c('el-pagination'),
                    z = c('el-dialog'),
                    I = p('loading')
                  return (
                    d(),
                    M(
                      z,
                      {
                        modelValue: T.value,
                        'onUpdate:modelValue':
                          t[4] ||
                          (t[4] = function (e) {
                            return (T.value = e)
                          }),
                        title: v(l)('taskManagement.taskExecutionLog'),
                        width: '1200px',
                        'before-close': H
                      },
                      {
                        footer: m(function () {
                          return [
                            g(
                              s,
                              { onClick: H },
                              {
                                default: m(function () {
                                  return [_(w(v(l)('taskManagement.close')), 1)]
                                }),
                                _: 1
                              }
                            )
                          ]
                        }),
                        default: m(function () {
                          return [
                            V.value
                              ? (d(),
                                f('div', pe, [
                                  g(
                                    r,
                                    { column: 2, border: '' },
                                    {
                                      default: m(function () {
                                        return [
                                          g(
                                            a,
                                            { label: v(l)('taskManagement.taskName') },
                                            {
                                              default: m(function () {
                                                return [_(w(V.value.task_name), 1)]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          g(
                                            a,
                                            { label: v(l)('taskManagement.status') },
                                            {
                                              default: m(function () {
                                                return [
                                                  g(
                                                    n,
                                                    { type: J(V.value.status) },
                                                    {
                                                      default: m(function () {
                                                        return [_(w(Q(V.value.status)), 1)]
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
                                          )
                                        ]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  b('div', de, [
                                    g(
                                      h,
                                      { model: $.value, 'label-width': '80px', inline: '' },
                                      {
                                        default: m(function () {
                                          return [
                                            g(u, null, {
                                              default: m(function () {
                                                return [
                                                  g(
                                                    o,
                                                    {
                                                      modelValue: $.value.instance_id_filter,
                                                      'onUpdate:modelValue':
                                                        t[0] ||
                                                        (t[0] = function (e) {
                                                          return ($.value.instance_id_filter = e)
                                                        }),
                                                      placeholder: v(l)(
                                                        'taskManagement.instanceIdPlaceholder'
                                                      ),
                                                      clearable: '',
                                                      onKeyup: C(q, ['enter'])
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'placeholder', 'onKeyup']
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            }),
                                            g(u, null, {
                                              default: m(function () {
                                                return [
                                                  g(
                                                    s,
                                                    { icon: 'RefreshRight', onClick: R },
                                                    {
                                                      default: m(function () {
                                                        return [
                                                          _(w(v(l)('taskManagement.refreshLog')), 1)
                                                        ]
                                                      }),
                                                      _: 1
                                                    }
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            }),
                                            g(u, null, {
                                              default: m(function () {
                                                return [
                                                  g(
                                                    s,
                                                    {
                                                      type: 'primary',
                                                      disabled: 0 === O.value.length,
                                                      onClick: Y
                                                    },
                                                    {
                                                      default: m(function () {
                                                        return [
                                                          _(
                                                            w(v(l)('instanceList.clusterWindows')),
                                                            1
                                                          )
                                                        ]
                                                      }),
                                                      _: 1
                                                    },
                                                    8,
                                                    ['disabled']
                                                  )
                                                ]
                                              }),
                                              _: 1
                                            })
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['model']
                                    )
                                  ]),
                                  x(
                                    (d(),
                                    M(
                                      S,
                                      {
                                        data: E.value,
                                        style: { width: '100%' },
                                        'max-height': 400,
                                        border: '',
                                        onSelectionChange: K
                                      },
                                      {
                                        default: m(function () {
                                          return [
                                            g(k, {
                                              type: 'selection',
                                              width: '55',
                                              align: 'center'
                                            }),
                                            g(k, {
                                              prop: 'id',
                                              label: 'ID',
                                              width: '80',
                                              align: 'center'
                                            }),
                                            g(
                                              k,
                                              {
                                                prop: 'instance_id',
                                                label: v(l)('taskManagement.instanceId'),
                                                width: '200',
                                                align: 'center'
                                              },
                                              null,
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              k,
                                              {
                                                prop: 'status',
                                                label: v(l)('taskManagement.status'),
                                                width: '100',
                                                align: 'center'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [
                                                    g(
                                                      n,
                                                      { type: J(t.status), size: 'small' },
                                                      {
                                                        default: m(function () {
                                                          return [_(w(Q(t.status)), 1)]
                                                        }),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ['type']
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              k,
                                              {
                                                prop: 'start_time',
                                                label: v(l)('taskManagement.startTime'),
                                                width: '160',
                                                align: 'center'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [_(w(W(t.start_time)), 1)]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              k,
                                              {
                                                prop: 'end_time',
                                                label: v(l)('taskManagement.endTime'),
                                                width: '160',
                                                align: 'center'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [_(w(W(t.end_time)), 1)]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              k,
                                              {
                                                prop: 'duration',
                                                label: v(l)('taskManagement.durationSeconds'),
                                                width: '120',
                                                align: 'center'
                                              },
                                              null,
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              k,
                                              {
                                                prop: 'error_message',
                                                label: v(l)('taskManagement.errorMessage'),
                                                'min-width': '200',
                                                fixed: 'right'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [
                                                    t.error_message
                                                      ? (d(),
                                                        f('div', fe, [
                                                          b(
                                                            'div',
                                                            {
                                                              class: 'error-message-text',
                                                              title: t.error_message
                                                            },
                                                            w(t.error_message),
                                                            9,
                                                            ge
                                                          ),
                                                          g(
                                                            s,
                                                            {
                                                              link: '',
                                                              type: 'primary',
                                                              size: 'small',
                                                              onClick: function (e) {
                                                                return (
                                                                  (a = t.error_message),
                                                                  void F(a, function () {
                                                                    A.success(
                                                                      l('common.copySuccess')
                                                                    )
                                                                  })
                                                                )
                                                                var a
                                                              }
                                                            },
                                                            {
                                                              default: m(function () {
                                                                return [
                                                                  _(w(v(l)('common.copy')), 1)
                                                                ]
                                                              }),
                                                              _: 2
                                                            },
                                                            1032,
                                                            ['onClick']
                                                          )
                                                        ]))
                                                      : (d(), f('span', me, '-'))
                                                  ]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['label']
                                            ),
                                            g(
                                              k,
                                              {
                                                prop: 'created_at',
                                                label: v(l)('taskManagement.createdAt'),
                                                width: '160',
                                                align: 'center',
                                                fixed: 'right'
                                              },
                                              {
                                                default: m(function (e) {
                                                  var t = e.row
                                                  return [_(w(W(t.created_at)), 1)]
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
                                      ['data']
                                    )),
                                    [[I, L.value]]
                                  ),
                                  b('div', ve, [
                                    g(
                                      P,
                                      {
                                        'current-page': U.value.page,
                                        'onUpdate:currentPage':
                                          t[1] ||
                                          (t[1] = function (e) {
                                            return (U.value.page = e)
                                          }),
                                        'page-size': U.value.size,
                                        'onUpdate:pageSize':
                                          t[2] ||
                                          (t[2] = function (e) {
                                            return (U.value.size = e)
                                          }),
                                        'page-sizes': [10, 20, 50, 100],
                                        total: U.value.total,
                                        layout: 'total, sizes, prev, pager, next, jumper',
                                        onSizeChange: G,
                                        onCurrentChange: B
                                      },
                                      null,
                                      8,
                                      ['current-page', 'page-size', 'total']
                                    )
                                  ])
                                ]))
                              : y('', !0),
                            D.value
                              ? (d(),
                                M(
                                  v(i),
                                  {
                                    key: 1,
                                    visible: D.value,
                                    'onUpdate:visible':
                                      t[3] ||
                                      (t[3] = function (e) {
                                        return (D.value = e)
                                      }),
                                    'selected-instances': j.value,
                                    onConfirm: Z
                                  },
                                  null,
                                  8,
                                  ['visible', 'selected-instances']
                                ))
                              : y('', !0)
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
            }),
            ke = z(he, [['__scopeId', 'data-v-2cc9b3a0']]),
            ye = { class: 'el-upload__text' },
            be = { class: 'el-upload__tip' },
            _e = n({
              __name: 'UploadTaskConfigDialog',
              props: { modelValue: { type: Boolean, default: !1 } },
              emits: ['update:modelValue', 'success'],
              setup: function (e, t) {
                var a = t.emit,
                  n = u(!1),
                  l = u(null),
                  i = function () {
                    n.value = !0
                  },
                  s = function (e) {
                    e ? i() : ((l.value = null), ($.value.boot_params_json = ''))
                  },
                  p = function (e) {
                    ;(delete e.padCodes,
                      (l.value = e),
                      ($.value.boot_params_json = JSON.stringify(e)))
                  },
                  v = P().t,
                  x = e,
                  C = a,
                  S = T({
                    get: function () {
                      return x.modelValue
                    },
                    set: function (e) {
                      return C('update:modelValue', e)
                    }
                  }),
                  E = u(),
                  L = u(),
                  D = u(!1),
                  j = u([]),
                  O = u(!1),
                  $ = u({
                    task_name: '',
                    script_id: null,
                    task_type: 'AIRTEST',
                    auto_assign_account: !0,
                    auto_onoff: !1,
                    boot_params_json: ''
                  }),
                  U = u(),
                  z = {
                    task_name: [
                      {
                        required: !0,
                        message: v('taskManagement.messages.pleaseEnterTaskName'),
                        trigger: 'blur'
                      }
                    ],
                    script_id: [
                      {
                        required: !0,
                        message: v('taskManagement.messages.pleaseEnterScriptId'),
                        trigger: 'change'
                      }
                    ],
                    task_type: [
                      {
                        required: !0,
                        message: v('taskManagement.messages.pleaseSelectTaskType'),
                        trigger: 'change'
                      }
                    ]
                  },
                  I = (function () {
                    var e = o(
                      r().mark(function e() {
                        var t, a
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (O.value = !0),
                                    (t = { page: 1, pageSize: 1e3 }),
                                    (e.next = 5),
                                    H(t)
                                  )
                                case 5:
                                  ;((a = e.sent), (j.value = a.scripts || []), (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取脚本列表失败', e.t0),
                                    A.error(v('taskManagement.getScriptListFailed')))
                                case 13:
                                  return ((e.prev = 13), (O.value = !1), e.finish(13))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 9, 13, 16]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  F = function () {
                    A.warning(v('taskManagement.messages.onlyOneFileAllowed'))
                  },
                  N = function (e) {
                    L.value = e.raw
                  },
                  R = function (e) {
                    ;(A.success(v('taskManagement.messages.uploadSuccess')),
                      (S.value = !1),
                      E.value && E.value.clearFiles(),
                      Y(),
                      C('success'))
                  },
                  q = function (e) {
                    ;(console.error(e),
                      A.error(v('taskManagement.messages.uploadFailed')),
                      E.value && E.value.clearFiles())
                  },
                  G = (function () {
                    var e = o(
                      r().mark(function e() {
                        var t
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (L.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    A.warning(v('taskManagement.messages.selectFileFirst')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return ((e.prev = 3), (e.next = 6), U.value.validate())
                                case 6:
                                  e.next = 12
                                  break
                                case 8:
                                  return (
                                    (e.prev = 8),
                                    (e.t0 = e.catch(3)),
                                    A.warning(v('taskManagement.messages.completeFormFirst')),
                                    e.abrupt('return')
                                  )
                                case 12:
                                  return (
                                    (t = new FormData()).append('file', L.value),
                                    t.append('batch_name', $.value.task_name.toString()),
                                    t.append('script_id', $.value.script_id),
                                    t.append('task_type', $.value.task_type),
                                    t.append('schedule_type', 'Once'),
                                    t.append('auto_onoff', $.value.auto_onoff),
                                    $.value.boot_params_json &&
                                      t.append('boot_params_json', $.value.boot_params_json),
                                    (D.value = !0),
                                    (e.prev = 21),
                                    (e.next = 24),
                                    ce(t)
                                  )
                                case 24:
                                  ;(A.success(v('taskManagement.messages.uploadSuccess')),
                                    (S.value = !1),
                                    E.value && E.value.clearFiles(),
                                    Y(),
                                    C('success'),
                                    (e.next = 35))
                                  break
                                case 31:
                                  ;((e.prev = 31),
                                    (e.t1 = e.catch(21)),
                                    console.error(e.t1),
                                    A.error(v('taskManagement.messages.uploadFailed')))
                                case 35:
                                  return ((e.prev = 35), (D.value = !1), e.finish(35))
                                case 38:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [3, 8],
                            [21, 31, 35, 38]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  K = function () {
                    ;((S.value = !1), E.value && E.value.clearFiles(), (L.value = null), Y())
                  },
                  Y = function () {
                    $.value = {
                      task_name: '',
                      script_id: null,
                      task_type: 'AIRTEST',
                      auto_assign_account: !0,
                      auto_onoff: !1,
                      boot_params_json: ''
                    }
                  }
                return (
                  V(function () {
                    I()
                  }),
                  function (e, t) {
                    var a = c('el-input'),
                      r = c('el-form-item'),
                      o = c('el-option'),
                      u = c('el-select'),
                      v = c('el-switch'),
                      x = c('el-tag'),
                      C = c('el-button'),
                      T = c('upload-filled'),
                      V = c('el-icon'),
                      L = c('el-upload'),
                      P = c('el-form'),
                      I = c('el-dialog')
                    return (
                      d(),
                      M(
                        I,
                        {
                          title: e.$t('taskManagement.uploadTaskConfigDialog'),
                          modelValue: S.value,
                          'onUpdate:modelValue':
                            t[6] ||
                            (t[6] = function (e) {
                              return (S.value = e)
                            }),
                          width: '600px'
                        },
                        {
                          footer: m(function () {
                            return [
                              g(
                                C,
                                {
                                  style: { 'margin-right': '10px' },
                                  type: 'success',
                                  onClick: G,
                                  loading: D.value
                                },
                                {
                                  default: m(function () {
                                    return [_(w(e.$t('taskManagement.uploadToServer')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading']
                              ),
                              g(
                                C,
                                { onClick: K },
                                {
                                  default: m(function () {
                                    return [_(w(e.$t('taskManagement.cancel')), 1)]
                                  }),
                                  _: 1
                                }
                              )
                            ]
                          }),
                          default: m(function () {
                            return [
                              g(
                                P,
                                {
                                  model: $.value,
                                  'label-width': '120px',
                                  rules: z,
                                  ref_key: 'formRef',
                                  ref: U
                                },
                                {
                                  default: m(function () {
                                    return [
                                      g(
                                        r,
                                        {
                                          label: e.$t('taskManagement.createDialog.taskName'),
                                          prop: 'task_name'
                                        },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                a,
                                                {
                                                  modelValue: $.value.task_name,
                                                  'onUpdate:modelValue':
                                                    t[0] ||
                                                    (t[0] = function (e) {
                                                      return ($.value.task_name = e)
                                                    }),
                                                  placeholder: e.$t(
                                                    'taskManagement.createDialog.taskNamePlaceholder'
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
                                      g(
                                        r,
                                        {
                                          label: e.$t('taskManagement.createDialog.script'),
                                          prop: 'script_id'
                                        },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                u,
                                                {
                                                  modelValue: $.value.script_id,
                                                  'onUpdate:modelValue':
                                                    t[1] ||
                                                    (t[1] = function (e) {
                                                      return ($.value.script_id = e)
                                                    }),
                                                  placeholder: e.$t(
                                                    'taskManagement.createDialog.scriptPlaceholder'
                                                  ),
                                                  style: { width: '100%' },
                                                  loading: O.value
                                                },
                                                {
                                                  default: m(function () {
                                                    return [
                                                      (d(!0),
                                                      f(
                                                        h,
                                                        null,
                                                        k(j.value, function (e) {
                                                          return (
                                                            d(),
                                                            M(
                                                              o,
                                                              {
                                                                key: e.id,
                                                                label: ''
                                                                  .concat(e.name, ' (')
                                                                  .concat(e.description, ')'),
                                                                value: e.id
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
                                                ['modelValue', 'placeholder', 'loading']
                                              )
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['label']
                                      ),
                                      g(
                                        r,
                                        {
                                          label: e.$t('taskManagement.createDialog.taskType'),
                                          prop: 'task_type'
                                        },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                u,
                                                {
                                                  modelValue: $.value.task_type,
                                                  'onUpdate:modelValue':
                                                    t[2] ||
                                                    (t[2] = function (e) {
                                                      return ($.value.task_type = e)
                                                    }),
                                                  placeholder: e.$t(
                                                    'taskManagement.createDialog.taskTypePlaceholder'
                                                  ),
                                                  style: { width: '100%' }
                                                },
                                                {
                                                  default: m(function () {
                                                    return [
                                                      g(
                                                        o,
                                                        {
                                                          label: e.$t(
                                                            'taskManagement.taskTypes.PYTHON'
                                                          ),
                                                          value: 'PYTHON'
                                                        },
                                                        null,
                                                        8,
                                                        ['label']
                                                      ),
                                                      g(
                                                        o,
                                                        {
                                                          label: e.$t(
                                                            'taskManagement.taskTypes.AIRTEST'
                                                          ),
                                                          value: 'AIRTEST'
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
                                              )
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['label']
                                      ),
                                      g(
                                        r,
                                        {
                                          label: e.$t(
                                            'taskManagement.createDialog.autoAssignAccount'
                                          )
                                        },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                v,
                                                {
                                                  modelValue: $.value.auto_assign_account,
                                                  'onUpdate:modelValue':
                                                    t[3] ||
                                                    (t[3] = function (e) {
                                                      return ($.value.auto_assign_account = e)
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
                                      g(
                                        r,
                                        { label: e.$t('taskManagement.autoOnOff') },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                v,
                                                {
                                                  modelValue: $.value.auto_onoff,
                                                  'onUpdate:modelValue':
                                                    t[4] ||
                                                    (t[4] = function (e) {
                                                      return ($.value.auto_onoff = e)
                                                    }),
                                                  onChange: s
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
                                      $.value.auto_onoff && l.value
                                        ? (d(),
                                          M(
                                            r,
                                            { key: 0 },
                                            {
                                              default: m(function () {
                                                return [
                                                  g(
                                                    x,
                                                    { type: 'success' },
                                                    {
                                                      default: m(function () {
                                                        return [
                                                          _(
                                                            w(e.$t('taskManagement.bootConfigSet')),
                                                            1
                                                          )
                                                        ]
                                                      }),
                                                      _: 1
                                                    }
                                                  ),
                                                  g(
                                                    C,
                                                    { type: 'text', onClick: i },
                                                    {
                                                      default: m(function () {
                                                        return [
                                                          _(
                                                            w(
                                                              e.$t('taskManagement.editBootConfig')
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
                                            }
                                          ))
                                        : y('', !0),
                                      g(
                                        r,
                                        { label: e.$t('taskManagement.selectFile') },
                                        {
                                          default: m(function () {
                                            return [
                                              g(
                                                L,
                                                {
                                                  ref_key: 'uploadRef',
                                                  ref: E,
                                                  action:
                                                    '/cpyservice/airtest/tasks/schedule-with-excel-async',
                                                  'auto-upload': !1,
                                                  'on-change': N,
                                                  'on-success': R,
                                                  'on-error': q,
                                                  limit: 1,
                                                  drag: '',
                                                  'on-exceed': F,
                                                  accept: '.xlsx'
                                                },
                                                {
                                                  tip: m(function () {
                                                    return [
                                                      b(
                                                        'div',
                                                        be,
                                                        w(e.$t('taskManagement.uploadTip')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  default: m(function () {
                                                    return [
                                                      g(
                                                        V,
                                                        { class: 'el-icon--upload' },
                                                        {
                                                          default: m(function () {
                                                            return [g(T)]
                                                          }),
                                                          _: 1
                                                        }
                                                      ),
                                                      b(
                                                        'div',
                                                        ye,
                                                        w(e.$t('taskManagement.dragOrClick')),
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
                                        ['label']
                                      )
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['model']
                              ),
                              g(
                                B,
                                {
                                  visible: n.value,
                                  'onUpdate:visible':
                                    t[5] ||
                                    (t[5] = function (e) {
                                      return (n.value = e)
                                    }),
                                  'pad-codes': ['ACD-1234567'],
                                  'is-api': !1,
                                  'is-hide-proxy': !0,
                                  onSubmit: p
                                },
                                null,
                                8,
                                ['visible']
                              )
                            ]
                          }),
                          _: 1
                        },
                        8,
                        ['title', 'modelValue']
                      )
                    )
                  }
                )
              }
            }),
            we = { class: 'task-management' },
            xe = n({
              __name: 'index',
              setup: function (e) {
                var t = P().t
                E()
                var n = K(),
                  l = n.cTable,
                  s = n.maxHeight,
                  y = n.handleGetTableHeight,
                  b = i({}),
                  C = i({ page: 1, limit: 10, total: 0 }),
                  S = T(function () {
                    try {
                      return N.value ? JSON.parse(N.value) : {}
                    } catch (e) {
                      return {}
                    }
                  }),
                  D = u([]),
                  j = u(!1),
                  O = u([]),
                  $ = u(!1),
                  U = u(!1),
                  z = u(!1),
                  I = u(),
                  F = i({
                    task_name: '',
                    instance_id: [],
                    script_id: null,
                    schedule_type: 'Once',
                    task_type: 'AIRTEST',
                    task_params: {}
                  }),
                  N = u(''),
                  R = u(!0),
                  Y = u(!0),
                  W = u(!1),
                  J = u(null),
                  Q = u(!1),
                  Z = u(!1),
                  X = u(null),
                  ee = {
                    task_name: [
                      {
                        required: !0,
                        message: t('taskManagement.messages.pleaseEnterTaskName'),
                        trigger: 'blur'
                      }
                    ],
                    instance_id: [
                      {
                        required: !0,
                        message: t('taskManagement.messages.pleaseEnterInstanceId'),
                        trigger: 'blur'
                      }
                    ],
                    script_id: [
                      {
                        required: !0,
                        message: t('taskManagement.messages.pleaseEnterScriptId'),
                        trigger: 'blur'
                      }
                    ],
                    schedule_type: [
                      {
                        required: !0,
                        message: t('taskManagement.messages.pleaseSelectScheduleType'),
                        trigger: 'blur'
                      }
                    ],
                    crontab: [
                      {
                        required: !0,
                        message: t('taskManagement.messages.pleaseEnterCronExpression'),
                        trigger: 'blur'
                      }
                    ],
                    task_type: [
                      {
                        required: !0,
                        message: t('taskManagement.messages.pleaseSelectTaskType'),
                        trigger: 'blur'
                      }
                    ]
                  },
                  te = (function () {
                    var e = o(
                      r().mark(function e() {
                        var a, n
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ($.value = !0),
                                    (e.prev = 1),
                                    (a = { page: 1, pageSize: 1e3 }),
                                    (e.next = 5),
                                    H(a)
                                  )
                                case 5:
                                  ;((n = e.sent) && (O.value = n.scripts || []), (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(1)),
                                    console.error(
                                      t('taskManagement.messages.getScriptListFailed'),
                                      e.t0
                                    ),
                                    A.error(t('taskManagement.messages.getScriptListFailed')))
                                case 13:
                                  return ((e.prev = 13), ($.value = !1), e.finish(13))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 9, 13, 16]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  oe = (function () {
                    var e = o(
                      r().mark(function e() {
                        var n, l
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (j.value = !0),
                                    (e.prev = 1),
                                    (n = a({ page: C.page, size: C.limit }, b)),
                                    (e.next = 5),
                                    le(n)
                                  )
                                case 5:
                                  ;((l = e.sent) &&
                                    ((D.value = l.items || []), (C.total = l.total || 0)),
                                    (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(1)),
                                    console.error(
                                      t('taskManagement.messages.getTaskListFailed'),
                                      e.t0
                                    ),
                                    A.error(t('taskManagement.messages.getTaskListFailed')))
                                case 13:
                                  return ((e.prev = 13), (j.value = !1), e.finish(13))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 9, 13, 16]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ce = q(function () {
                    ;((C.page = 1), oe())
                  }, 500),
                  pe = function (e) {
                    ;((C.limit = e), (C.page = 1), oe())
                  },
                  de = function (e) {
                    ;((C.page = e), oe())
                  },
                  fe = function () {
                    ;((U.value = !0), 0 === O.value.length && te())
                  },
                  ge = (function () {
                    var e = o(
                      r().mark(function e(n) {
                        var l
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((J.value = n),
                                    (W.value = !1),
                                    (z.value = !0),
                                    (e.prev = 3),
                                    (l = a(
                                      a({}, F),
                                      {},
                                      { task_params: a({}, S.value), boot_params: n }
                                    )),
                                    !R.value)
                                  ) {
                                    e.next = 10
                                    break
                                  }
                                  return ((e.next = 8), re(a(a({}, l), {}, { use_configdata: !0 })))
                                case 8:
                                  e.next = 12
                                  break
                                case 10:
                                  return (
                                    (e.next = 12),
                                    re(a(a({}, l), {}, { use_configdata: !1 }))
                                  )
                                case 12:
                                  ;(A.success(t('taskManagement.messages.createSuccess')),
                                    me(),
                                    oe(),
                                    (e.next = 21))
                                  break
                                case 17:
                                  ;((e.prev = 17),
                                    (e.t0 = e.catch(3)),
                                    console.error(t('taskManagement.messages.createFailed'), e.t0),
                                    A.error(t('taskManagement.messages.createFailed')))
                                case 21:
                                  return (
                                    (e.prev = 21),
                                    (z.value = !1),
                                    (W.value = !1),
                                    e.finish(21)
                                  )
                                case 25:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 17, 21, 25]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  me = function () {
                    var e
                    ;((U.value = !1),
                      null === (e = I.value) || void 0 === e || e.resetFields(),
                      (N.value = ''),
                      (Y.value = !0),
                      (J.value = null))
                  },
                  ve = (function () {
                    var e = o(
                      r().mark(function e() {
                        var n
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (I.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.next = 4), I.value.validate())
                                case 4:
                                  if (e.sent) {
                                    e.next = 7
                                    break
                                  }
                                  return e.abrupt('return')
                                case 7:
                                  if (!Y.value) {
                                    e.next = 10
                                    break
                                  }
                                  return ((W.value = !0), e.abrupt('return'))
                                case 10:
                                  if (
                                    ((z.value = !0),
                                    (e.prev = 11),
                                    (n = a(a({}, F), {}, { task_params: S.value })),
                                    !R.value)
                                  ) {
                                    e.next = 18
                                    break
                                  }
                                  return ((e.next = 16), re(n))
                                case 16:
                                  e.next = 20
                                  break
                                case 18:
                                  return ((e.next = 20), ne(n))
                                case 20:
                                  ;(A.success(t('taskManagement.messages.createSuccess')),
                                    me(),
                                    oe(),
                                    (e.next = 29))
                                  break
                                case 25:
                                  ;((e.prev = 25),
                                    (e.t0 = e.catch(11)),
                                    console.error(t('taskManagement.messages.createFailed'), e.t0),
                                    A.error(t('taskManagement.messages.createFailed')))
                                case 29:
                                  return ((e.prev = 29), (z.value = !1), e.finish(29))
                                case 32:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[11, 25, 29, 32]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  he = (function () {
                    var e = o(
                      r().mark(function e(a) {
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    G.confirm(
                                      t('taskManagement.messages.confirmCancel', { id: a.id }),
                                      t('taskManagement.cancel'),
                                      {
                                        confirmButtonText: t('taskManagement.createDialog.confirm'),
                                        cancelButtonText: t('taskManagement.createDialog.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), ue(a.id))
                                case 5:
                                  ;(A.success(t('taskManagement.messages.cancelSuccess')),
                                    oe(),
                                    (e.next = 12))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error(
                                        t('taskManagement.messages.cancelFailed'),
                                        e.t0
                                      ),
                                      A.error(t('taskManagement.messages.cancelFailed'))))
                                case 12:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ye = (function () {
                    var e = o(
                      r().mark(function e(a) {
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    G.confirm(
                                      t('taskManagement.messages.confirmRetry', { id: a.id }),
                                      t('taskManagement.retry'),
                                      {
                                        confirmButtonText: t('taskManagement.createDialog.confirm'),
                                        cancelButtonText: t('taskManagement.createDialog.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), ie(a.id))
                                case 5:
                                  ;(A.success(t('taskManagement.messages.retrySuccess')),
                                    oe(),
                                    (e.next = 12))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error(
                                        t('taskManagement.messages.retryFailed'),
                                        e.t0
                                      ),
                                      A.error(t('taskManagement.messages.retryFailed'))))
                                case 12:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  be = (function () {
                    var e = o(
                      r().mark(function e() {
                        var a, n, l
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), se())
                                case 3:
                                  ;((a = e.sent),
                                    (n = window.URL.createObjectURL(new Blob([a]))),
                                    ((l = document.createElement('a')).href = n),
                                    l.setAttribute('download', 'task_config_template.xlsx'),
                                    document.body.appendChild(l),
                                    l.click(),
                                    document.body.removeChild(l),
                                    window.URL.revokeObjectURL(n),
                                    A.success(t('taskManagement.messages.downloadTemplateSuccess')),
                                    (e.next = 19))
                                  break
                                case 15:
                                  ;((e.prev = 15),
                                    (e.t0 = e.catch(0)),
                                    console.error(
                                      t('taskManagement.messages.downloadTemplateFailed'),
                                      e.t0
                                    ),
                                    A.error(t('taskManagement.messages.downloadTemplateFailed')))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  xe = function () {
                    Q.value = !0
                  },
                  Me = function () {
                    ;((Q.value = !1), oe())
                  }
                return (
                  V(function () {
                    ;(oe(), y(), window.addEventListener('resize', y))
                  }),
                  L(function () {
                    window.removeEventListener('resize', y)
                  }),
                  function (e, t) {
                    var a = c('el-input'),
                      n = c('el-button'),
                      r = c('PageBanner'),
                      o = c('el-table-column'),
                      u = c('el-tag'),
                      i = c('el-table'),
                      y = c('el-pagination'),
                      S = c('el-form-item'),
                      T = c('el-option'),
                      V = c('el-select'),
                      E = c('el-switch'),
                      L = c('el-form'),
                      P = c('el-dialog'),
                      A = p('loading')
                    return (
                      d(),
                      f('div', we, [
                        g(
                          r,
                          { title: '' },
                          {
                            extra: m(function () {
                              return [
                                g(
                                  a,
                                  {
                                    modelValue: b.task_name,
                                    'onUpdate:modelValue':
                                      t[0] ||
                                      (t[0] = function (e) {
                                        return (b.task_name = e)
                                      }),
                                    onInput: v(ce),
                                    placeholder: e.$t('taskManagement.searchPlaceholder'),
                                    clearable: '',
                                    style: { width: '250px', 'margin-right': '10px' }
                                  },
                                  null,
                                  8,
                                  ['modelValue', 'onInput', 'placeholder']
                                ),
                                g(
                                  n,
                                  { icon: 'RefreshRight', onClick: oe },
                                  {
                                    default: m(function () {
                                      return [_(w(e.$t('taskManagement.refresh')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                g(
                                  n,
                                  { type: 'primary', onClick: fe },
                                  {
                                    default: m(function () {
                                      return [_(w(e.$t('taskManagement.createTask')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                g(
                                  n,
                                  { type: 'success', onClick: be },
                                  {
                                    default: m(function () {
                                      return [_(w(e.$t('taskManagement.downloadTemplate')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                g(
                                  n,
                                  { type: 'warning', onClick: xe },
                                  {
                                    default: m(function () {
                                      return [_(w(e.$t('taskManagement.uploadConfig')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        x(
                          (d(),
                          M(
                            i,
                            {
                              ref_key: 'cTable',
                              ref: l,
                              data: D.value,
                              style: { 'margin-top': '20px' },
                              'max-height': v(s)
                            },
                            {
                              default: m(function () {
                                return [
                                  g(
                                    o,
                                    { prop: 'id', label: e.$t('taskManagement.id'), width: '170' },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  g(
                                    o,
                                    {
                                      prop: 'task_name',
                                      label: e.$t('taskManagement.taskName'),
                                      'min-width': '150'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  g(
                                    o,
                                    {
                                      prop: 'status',
                                      label: e.$t('taskManagement.status'),
                                      width: '150'
                                    },
                                    {
                                      default: m(function (e) {
                                        var t,
                                          a = e.row
                                        return [
                                          g(
                                            u,
                                            {
                                              type:
                                                ((t = a.status),
                                                {
                                                  PENDING: 'info',
                                                  STARTED: 'primary',
                                                  SUCCESS: 'success',
                                                  FAILURE: 'danger',
                                                  REVOKED: 'warning'
                                                }[t] || 'info')
                                            },
                                            {
                                              default: m(function () {
                                                return [_(w(a.status.toLowerCase()), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['type']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  g(
                                    o,
                                    {
                                      prop: 'created_at',
                                      label: e.$t('taskManagement.createTime'),
                                      width: '180'
                                    },
                                    {
                                      default: m(function (e) {
                                        var t,
                                          a = e.row
                                        return [
                                          _(
                                            w(
                                              ((t = a.created_at),
                                              t ? new Date(t).toLocaleString('zh-CN') : '')
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
                                  g(
                                    o,
                                    { label: e.$t('taskManagement.operations'), width: '250' },
                                    {
                                      default: m(function (t) {
                                        var a = t.row
                                        return [
                                          g(
                                            n,
                                            {
                                              link: '',
                                              type: 'primary',
                                              size: 'small',
                                              onClick: function (e) {
                                                return ((t = a), (X.value = t), void (Z.value = !0))
                                                var t
                                              }
                                            },
                                            {
                                              default: m(function () {
                                                return [_(w(e.$t('taskManagement.viewLog')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          g(
                                            n,
                                            {
                                              size: 'small',
                                              type: 'warning',
                                              link: '',
                                              onClick: function (e) {
                                                return ye(a)
                                              }
                                            },
                                            {
                                              default: m(function () {
                                                return [_(w(e.$t('taskManagement.retry')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          g(
                                            n,
                                            {
                                              size: 'small',
                                              type: 'danger',
                                              link: '',
                                              onClick: function (e) {
                                                return he(a)
                                              }
                                            },
                                            {
                                              default: m(function () {
                                                return [_(w(e.$t('taskManagement.cancel')), 1)]
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
                          [[A, j.value]]
                        ),
                        g(
                          y,
                          {
                            style: { 'margin-top': '15px' },
                            'current-page': C.page,
                            'onUpdate:currentPage':
                              t[1] ||
                              (t[1] = function (e) {
                                return (C.page = e)
                              }),
                            'page-size': C.limit,
                            'onUpdate:pageSize':
                              t[2] ||
                              (t[2] = function (e) {
                                return (C.limit = e)
                              }),
                            'page-sizes': [10, 20, 50, 100],
                            total: C.total,
                            layout: 'total, sizes, prev, pager, next, jumper',
                            onSizeChange: pe,
                            onCurrentChange: de
                          },
                          null,
                          8,
                          ['current-page', 'page-size', 'total']
                        ),
                        g(
                          P,
                          {
                            modelValue: U.value,
                            'onUpdate:modelValue':
                              t[11] ||
                              (t[11] = function (e) {
                                return (U.value = e)
                              }),
                            title: e.$t('taskManagement.createDialog.title'),
                            width: '600px',
                            'before-close': me
                          },
                          {
                            footer: m(function () {
                              return [
                                g(
                                  n,
                                  { onClick: me },
                                  {
                                    default: m(function () {
                                      return [_(w(e.$t('taskManagement.createDialog.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                g(
                                  n,
                                  { type: 'primary', onClick: ve, loading: z.value },
                                  {
                                    default: m(function () {
                                      return [_(w(e.$t('taskManagement.createDialog.confirm')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: m(function () {
                              return [
                                g(
                                  L,
                                  {
                                    model: F,
                                    rules: ee,
                                    ref_key: 'createFormRef',
                                    ref: I,
                                    'label-width': '100px'
                                  },
                                  {
                                    default: m(function () {
                                      return [
                                        g(
                                          S,
                                          {
                                            label: e.$t('taskManagement.createDialog.taskName'),
                                            prop: 'task_name'
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  a,
                                                  {
                                                    modelValue: F.task_name,
                                                    'onUpdate:modelValue':
                                                      t[3] ||
                                                      (t[3] = function (e) {
                                                        return (F.task_name = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'taskManagement.createDialog.taskNamePlaceholder'
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
                                        g(
                                          S,
                                          {
                                            label: e.$t('taskManagement.createDialog.instanceId'),
                                            prop: 'instance_id'
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  ae,
                                                  {
                                                    modelValue: F.instance_id,
                                                    'onUpdate:modelValue':
                                                      t[4] ||
                                                      (t[4] = function (e) {
                                                        return (F.instance_id = e)
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
                                        g(
                                          S,
                                          {
                                            label: e.$t('taskManagement.createDialog.script'),
                                            prop: 'script_id'
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  V,
                                                  {
                                                    modelValue: F.script_id,
                                                    'onUpdate:modelValue':
                                                      t[5] ||
                                                      (t[5] = function (e) {
                                                        return (F.script_id = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'taskManagement.createDialog.scriptPlaceholder'
                                                    ),
                                                    style: { width: '100%' },
                                                    loading: $.value
                                                  },
                                                  {
                                                    default: m(function () {
                                                      return [
                                                        (d(!0),
                                                        f(
                                                          h,
                                                          null,
                                                          k(O.value, function (e) {
                                                            return (
                                                              d(),
                                                              M(
                                                                T,
                                                                {
                                                                  key: e.id,
                                                                  label: ''
                                                                    .concat(e.name, ' (')
                                                                    .concat(e.description, ')'),
                                                                  value: e.id
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
                                                  ['modelValue', 'placeholder', 'loading']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        g(
                                          S,
                                          {
                                            label: e.$t('taskManagement.createDialog.scheduleType'),
                                            prop: 'schedule_type'
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  V,
                                                  {
                                                    modelValue: F.schedule_type,
                                                    'onUpdate:modelValue':
                                                      t[6] ||
                                                      (t[6] = function (e) {
                                                        return (F.schedule_type = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'taskManagement.createDialog.scheduleTypePlaceholder'
                                                    )
                                                  },
                                                  {
                                                    default: m(function () {
                                                      return [
                                                        g(
                                                          T,
                                                          {
                                                            label: e.$t(
                                                              'taskManagement.scheduleTypes.Once'
                                                            ),
                                                            value: 'Once'
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        g(
                                                          T,
                                                          {
                                                            label: e.$t(
                                                              'taskManagement.scheduleTypes.Daily'
                                                            ),
                                                            value: 'Daily'
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        g(
                                                          T,
                                                          {
                                                            label: e.$t(
                                                              'taskManagement.scheduleTypes.Weekly'
                                                            ),
                                                            value: 'Weekly'
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        g(
                                                          T,
                                                          {
                                                            label: e.$t(
                                                              'taskManagement.scheduleTypes.Monthly'
                                                            ),
                                                            value: 'Monthly'
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
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        g(
                                          S,
                                          {
                                            label: e.$t('taskManagement.createDialog.taskType'),
                                            prop: 'task_type'
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  V,
                                                  {
                                                    modelValue: F.task_type,
                                                    'onUpdate:modelValue':
                                                      t[7] ||
                                                      (t[7] = function (e) {
                                                        return (F.task_type = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'taskManagement.createDialog.taskTypePlaceholder'
                                                    )
                                                  },
                                                  {
                                                    default: m(function () {
                                                      return [
                                                        g(
                                                          T,
                                                          {
                                                            label: e.$t(
                                                              'taskManagement.taskTypes.PYTHON'
                                                            ),
                                                            value: 'PYTHON'
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        g(
                                                          T,
                                                          {
                                                            label: e.$t(
                                                              'taskManagement.taskTypes.AIRTEST'
                                                            ),
                                                            value: 'AIRTEST'
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
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        g(
                                          S,
                                          { label: e.$t('taskManagement.createDialog.taskParams') },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  a,
                                                  {
                                                    type: 'textarea',
                                                    rows: 3,
                                                    modelValue: N.value,
                                                    'onUpdate:modelValue':
                                                      t[8] ||
                                                      (t[8] = function (e) {
                                                        return (N.value = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'taskManagement.createDialog.taskParamsPlaceholder'
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
                                        g(
                                          S,
                                          {
                                            label: e.$t(
                                              'taskManagement.createDialog.autoAssignAccount'
                                            )
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  E,
                                                  {
                                                    modelValue: R.value,
                                                    'onUpdate:modelValue':
                                                      t[9] ||
                                                      (t[9] = function (e) {
                                                        return (R.value = e)
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
                                        g(
                                          S,
                                          { label: e.$t('taskManagement.createDialog.bootConfig') },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  E,
                                                  {
                                                    modelValue: Y.value,
                                                    'onUpdate:modelValue':
                                                      t[10] ||
                                                      (t[10] = function (e) {
                                                        return (Y.value = e)
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
                        g(
                          ke,
                          {
                            modelValue: Z.value,
                            'onUpdate:modelValue':
                              t[12] ||
                              (t[12] = function (e) {
                                return (Z.value = e)
                              }),
                            task: X.value
                          },
                          null,
                          8,
                          ['modelValue', 'task']
                        ),
                        g(
                          B,
                          {
                            visible: W.value,
                            'onUpdate:visible':
                              t[13] ||
                              (t[13] = function (e) {
                                return (W.value = e)
                              }),
                            padCodes: F.instance_id,
                            'is-api': !1,
                            'is-hide-proxy': !0,
                            onSubmit: ge
                          },
                          null,
                          8,
                          ['visible', 'padCodes']
                        ),
                        g(
                          _e,
                          {
                            modelValue: Q.value,
                            'onUpdate:modelValue':
                              t[14] ||
                              (t[14] = function (e) {
                                return (Q.value = e)
                              }),
                            onSuccess: Me
                          },
                          null,
                          8,
                          ['modelValue']
                        )
                      ])
                    )
                  }
                )
              }
            })
          e('default', z(xe, [['__scopeId', 'data-v-fe5c8100']]))
        }
      }
    }
  )
})()
