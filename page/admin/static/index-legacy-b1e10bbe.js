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
      i = a.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      s = c.asyncIterator || '@@asyncIterator',
      l = c.toStringTag || '@@toStringTag'
    function d(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      d({}, '')
    } catch (n) {
      d = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, r) {
      var a = t && t.prototype instanceof k ? t : k,
        i = Object.create(a.prototype),
        c = new j(r || [])
      return (o(i, '_invoke', { value: E(e, n, c) }), i)
    }
    function p(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    r.wrap = f
    var v = 'suspendedStart',
      g = 'suspendedYield',
      h = 'executing',
      m = 'completed',
      y = {}
    function k() {}
    function w() {}
    function x() {}
    var C = {}
    d(C, u, function () {
      return this
    })
    var b = Object.getPrototypeOf,
      _ = b && b(b(O([])))
    _ && _ !== a && i.call(_, u) && (C = _)
    var V = (x.prototype = k.prototype = Object.create(C))
    function S(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function L(t, n) {
      function r(a, o, c, u) {
        var s = p(t[a], t, o)
        if ('throw' !== s.type) {
          var l = s.arg,
            d = l.value
          return d && 'object' == e(d) && i.call(d, '__await')
            ? n.resolve(d.__await).then(
                function (e) {
                  r('next', e, c, u)
                },
                function (e) {
                  r('throw', e, c, u)
                }
              )
            : n.resolve(d).then(
                function (e) {
                  ;((l.value = e), c(l))
                },
                function (e) {
                  return r('throw', e, c, u)
                }
              )
        }
        u(s.arg)
      }
      var a
      o(this, '_invoke', {
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
    function E(e, t, r) {
      var a = v
      return function (i, o) {
        if (a === h) throw new Error('Generator is already running')
        if (a === m) {
          if ('throw' === i) throw o
          return { value: n, done: !0 }
        }
        for (r.method = i, r.arg = o; ; ) {
          var c = r.delegate
          if (c) {
            var u = T(c, r)
            if (u) {
              if (u === y) continue
              return u
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === v) throw ((a = m), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = h
          var s = p(e, t, r)
          if ('normal' === s.type) {
            if (((a = r.done ? m : g), s.arg === y)) continue
            return { value: s.arg, done: r.done }
          }
          'throw' === s.type && ((a = m), (r.method = 'throw'), (r.arg = s.arg))
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
      var i = p(a, e.iterator, t.arg)
      if ('throw' === i.type) return ((t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), y)
      var o = i.arg
      return o
        ? o.done
          ? ((t[e.resultName] = o.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            y)
          : o
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          y)
    }
    function z(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function P(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function j(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(z, this), this.reset(!0))
    }
    function O(t) {
      if (t || '' === t) {
        var r = t[u]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            o = function e() {
              for (; ++a < t.length; ) if (i.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (o.next = o)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      o(V, 'constructor', { value: x, configurable: !0 }),
      o(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = d(x, l, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), d(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(V)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      S(L.prototype),
      d(L.prototype, s, function () {
        return this
      }),
      (r.AsyncIterator = L),
      (r.async = function (e, t, n, a, i) {
        void 0 === i && (i = Promise)
        var o = new L(f(e, t, n, a), i)
        return r.isGeneratorFunction(t)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next()
            })
      }),
      S(V),
      d(V, l, 'Generator'),
      d(V, u, function () {
        return this
      }),
      d(V, 'toString', function () {
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
      (r.values = O),
      (j.prototype = {
        constructor: j,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
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
              (c.type = 'throw'),
              (c.arg = e),
              (t.next = r),
              a && ((t.method = 'next'), (t.arg = n)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var o = this.tryEntries[a],
              c = o.completion
            if ('root' === o.tryLoc) return r('end')
            if (o.tryLoc <= this.prev) {
              var u = i.call(o, 'catchLoc'),
                s = i.call(o, 'finallyLoc')
              if (u && s) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
              } else if (u) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
              } else {
                if (!s) throw new Error('try statement without catch or finally')
                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
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
          var o = a ? a.completion : {}
          return (
            (o.type = e),
            (o.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), y) : this.complete(o)
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
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), P(n), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                P(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, r) {
          return (
            (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            y
          )
        }
      }),
      r
    )
  }
  function n(e, t, n, r, a, i, o) {
    try {
      var c = e[i](o),
        u = c.value
    } catch (s) {
      return void n(s)
    }
    c.done ? t(u) : Promise.resolve(u).then(r, a)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (a, i) {
        var o = e.apply(t, r)
        function c(e) {
          n(o, a, i, c, u, 'next', e)
        }
        function u(e) {
          n(o, a, i, c, u, 'throw', e)
        }
        c(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './usePagination-legacy-5b27e706.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, n) {
      'use strict'
      var a, i, o, c, u, s, l, d, f, p, v, g, h, m, y, k, w, x, C, b, _, V, S, L, E, T, z, P
      return {
        setters: [
          function (e) {
            ;((a = e.q), (i = e._), (o = e.h), (c = e.m), (u = e.n))
          },
          function (e) {
            ;((s = e.E), (l = e.I), (d = e.G))
          },
          function (e) {
            f = e.u
          },
          function (e) {
            ;((p = e.r),
              (v = e.b),
              (g = e.Q),
              (h = e.a8),
              (m = e.f),
              (y = e.h),
              (k = e.N),
              (w = e.H),
              (x = e.G),
              (C = e.u),
              (b = e.K),
              (_ = e.F),
              (V = e.a0),
              (S = e.L),
              (L = e.M),
              (E = e.i),
              (T = e.ay),
              (z = e.A),
              (P = e.B))
          },
          null
        ],
        execute: function () {
          var j = document.createElement('style')
          function O(e) {
            return a({ url: '/aigen/', method: 'POST', data: e, baseURL: '/cpyservice' })
          }
          function D(e) {
            return a({ url: '/aigen/', method: 'GET', params: e, baseURL: '/cpyservice' })
          }
          function I(e) {
            return a({ url: '/aigen/' + e.task_id, method: 'DELETE', baseURL: '/cpyservice' })
          }
          function U(e) {
            return a({ url: '/aigen/retry/' + e, method: 'POST', baseURL: '/cpyservice' })
          }
          ;((j.textContent =
            '.video-container[data-v-223775dc]{padding:20px}.w-full[data-v-223775dc]{width:100%}.task-list[data-v-223775dc]{max-height:calc(100vh - 300px);padding:10px;overflow-y:auto}.task-item[data-v-223775dc]{padding:15px;border:1px solid #ebeef5;border-radius:4px;margin-bottom:10px;transition:all .3s}.task-item[data-v-223775dc]:hover{box-shadow:0 2px 12px rgba(0,0,0,.1)}.task-success[data-v-223775dc]{border-color:#67c23a}.task-failed[data-v-223775dc]{border-color:#f56c6c}.task-info[data-v-223775dc]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.task-id[data-v-223775dc]{font-weight:700}.task-status[data-v-223775dc]{display:flex;align-items:center}.status-tag[data-v-223775dc]{position:relative;overflow:hidden}.task-theme[data-v-223775dc]{margin:5px 0;font-size:14px;color:#606266}.task-created-at[data-v-223775dc]{margin:5px 15px;font-size:14px;color:#909399}.task-progress[data-v-223775dc]{margin:10px 0}.task-progress-inline[data-v-223775dc]{display:inline-block;margin-left:8px;font-size:12px;color:#409eff}.task-link[data-v-223775dc]{margin-bottom:10px}.task-actions[data-v-223775dc]{margin-top:10px}.task-actions .el-button[data-v-223775dc]{margin-right:10px}.no-tasks[data-v-223775dc]{text-align:center;color:#909399;padding:20px}.card-header[data-v-223775dc]{display:flex;justify-content:space-between;align-items:center}\n'),
            document.head.appendChild(j))
          var N = { class: 'video-container' },
            F = { style: { 'font-size': '12px', 'font-weight': '400' } },
            G = { class: 'card-header' },
            M = { class: 'task-list' },
            R = { class: 'task-info' },
            B = { class: 'task-id' },
            A = { key: 0, class: 'task-created-at' },
            Y = { class: 'task-status' },
            H = { key: 1 },
            q = { key: 0, class: 'task-theme' },
            K = { key: 1, class: 'task-actions' },
            Q = { key: 2, class: 'task-actions' },
            J = { key: 0, class: 'no-tasks' },
            W = {
              class: 'pagination-container',
              style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'center' }
            },
            X = {
              __name: 'index',
              setup: function (e) {
                var a = T(function () {
                    return u(
                      function () {
                        return n.import('./UploadOssDialog-legacy-ba1bd450.js')
                      },
                      void 0
                    )
                  }),
                  i = o().t,
                  j = p('')
                ;(p('1:1'), p('1024 x 1024'))
                var X = p(!1),
                  Z = p([]),
                  $ = f({
                    currentPage: 1,
                    pageSize: 10,
                    layout: 'total, sizes, prev, pager, next, jumper'
                  }),
                  ee = $.paginationData,
                  te = ($.handleCurrentChange, $.handleSizeChange, null),
                  ne = p(!1),
                  re = p({ fileUrl: '', fileName: '', fileMd5: '' }),
                  ae = function () {
                    ;(te && clearInterval(te),
                      (te = setInterval(function () {
                        ie(ee.currentPage, ee.pageSize)
                      }, 6e3)))
                  }
                ;(v(
                  r(
                    t().mark(function e() {
                      return t().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 2), ie(ee.currentPage, ee.pageSize))
                            case 2:
                              ae()
                            case 3:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                ),
                  g(function () {
                    te && (clearInterval(te), (te = null))
                  }))
                var ie = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n,
                          r,
                          a,
                          o,
                          c,
                          u,
                          s = arguments
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = s.length > 0 && void 0 !== s[0] ? s[0] : 1),
                                    (r = s.length > 1 && void 0 !== s[1] ? s[1] : 10),
                                    (e.prev = 2),
                                    (e.next = 5),
                                    D({ page: n, page_size: r })
                                  )
                                case 5:
                                  ;((a = e.sent),
                                    (o = a.tasks || a.data || []),
                                    (c = a.total_tasks || a.count || o.length),
                                    (ee.total = c),
                                    (u = o.map(function (e) {
                                      if (
                                        (e.theme ||
                                          (e.theme = e.prompt || i('aiVideoCreation.unknownTheme')),
                                        (e.status = e.status ? e.status.toLowerCase() : 'unknown'),
                                        'completed' === e.status
                                          ? (e.status = 'success')
                                          : 'pending' === e.status && (e.status = 'pending'),
                                        'running' === e.status && e.created_at)
                                      ) {
                                        var t = new Date(e.created_at),
                                          n = (new Date().getTime() - t.getTime() - 288e5) / 1e3,
                                          r = Math.min(99, Math.floor((n / 900) * 100))
                                        e.fakeProgress = r > 0 ? r : 0
                                      }
                                      if ('success' !== e.status)
                                        if (e.created_at) {
                                          var a = new Date(e.created_at),
                                            o = new Date().getTime() - a.getTime()
                                          e.isCanDelete = o > 324e5
                                        } else e.isCanDelete = !1
                                      return e
                                    })),
                                    (Z.value = u),
                                    (e.next = 16))
                                  break
                                case 13:
                                  ;((e.prev = 13),
                                    (e.t0 = e.catch(2)),
                                    console.error('获取任务列表失败', e.t0))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[2, 13]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  oe = function (e) {
                    ;(ie(e, ee.pageSize), ae())
                  },
                  ce = function (e) {
                    ;((ee.currentPage = 1), ie(1, e), ae())
                  },
                  ue = [
                    { value: 'anime', label: i('aiVideoCreation.anime') },
                    { value: 'liveaction', label: i('aiVideoCreation.liveaction') },
                    { value: 'pets', label: i('aiVideoCreation.pets') },
                    { value: 'scifi', label: i('aiVideoCreation.scifi') },
                    { value: 'fantasy', label: i('aiVideoCreation.fantasy') },
                    { value: 'nature', label: i('aiVideoCreation.nature') }
                  ],
                  se = p('anime'),
                  le = function (e) {
                    switch (e) {
                      case 'success':
                        return 'success'
                      case 'failed':
                        return 'danger'
                      case 'pending':
                        return 'primary'
                      case 'running':
                        return 'warning'
                      default:
                        return 'info'
                    }
                  },
                  de = function (e) {
                    switch (e) {
                      case 'success':
                        return i('aiVideoCreation.success')
                      case 'failed':
                        return i('aiVideoCreation.failed')
                      case 'pending':
                        return i('aiVideoCreation.pending')
                      case 'running':
                        return i('aiVideoCreation.running')
                      case 'revoked':
                        return i('aiVideoCreation.revoked')
                      default:
                        return i('aiVideoCreation.unknown')
                    }
                  },
                  fe = function (e) {
                    return 'running' === e.status && void 0 !== e.fakeProgress
                      ? {
                          background: 'linear-gradient(\n    90deg,\n    #f7e9d4 0%,\n    #f7e9d4 '
                            .concat(e.fakeProgress, '%,\n    #fdf6ec ')
                            .concat(e.fakeProgress, '%,\n    #fdf6ec 100%\n  )')
                        }
                      : {}
                  },
                  pe = function (e) {
                    if (!e) return i('aiVideoCreation.unknownTime')
                    var t = new Date(e),
                      n = new Date(t.getTime() + 288e5),
                      r = n.getFullYear(),
                      a = String(n.getMonth() + 1).padStart(2, '0'),
                      o = String(n.getDate()).padStart(2, '0'),
                      c = String(n.getHours()).padStart(2, '0'),
                      u = String(n.getMinutes()).padStart(2, '0'),
                      s = String(n.getSeconds()).padStart(2, '0')
                    return ''
                      .concat(r, '-')
                      .concat(a, '-')
                      .concat(o, ' ')
                      .concat(c, ':')
                      .concat(u, ':')
                      .concat(s)
                  },
                  ve = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n, r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (j.value.trim()) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    s({
                                      message: i('aiVideoCreation.pleaseEnterCreativeContent'),
                                      type: 'warning'
                                    }),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (e.prev = 3),
                                    (X.value = !0),
                                    (n = {
                                      theme: j.value,
                                      style: se.value,
                                      user: 'abc-123',
                                      prompt: 'string',
                                      storage_target: 'string'
                                    }),
                                    (e.next = 8),
                                    O(n)
                                  )
                                case 8:
                                  if (((r = e.sent), !(r.task_id || r.taskId || r.id))) {
                                    e.next = 19
                                    break
                                  }
                                  return ((ee.currentPage = 1), (e.next = 14), ie(1, ee.pageSize))
                                case 14:
                                  ;(s({
                                    message: i('aiVideoCreation.createTaskSuccess'),
                                    type: 'success'
                                  }),
                                    (j.value = ''),
                                    ae(),
                                    (e.next = 21))
                                  break
                                case 19:
                                  ;(console.error('未获取到任务ID', r),
                                    s({
                                      message: i('aiVideoCreation.createTaskFailed'),
                                      type: 'error'
                                    }))
                                case 21:
                                  e.next = 27
                                  break
                                case 23:
                                  ;((e.prev = 23),
                                    (e.t0 = e.catch(3)),
                                    console.error('创建AI视频失败', e.t0),
                                    s({
                                      message: i('aiVideoCreation.createTaskFailed'),
                                      type: 'error'
                                    }))
                                case 27:
                                  return ((e.prev = 27), (X.value = !1), e.finish(27))
                                case 30:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 23, 27, 30]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ge = (function () {
                    var e = r(
                      t().mark(function e(n) {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                d.confirm(
                                  i('aiVideoCreation.confirmCancelTask'),
                                  i('aiVideoCreation.confirmOperation'),
                                  {
                                    confirmButtonText: i('aiVideoCreation.confirm'),
                                    cancelButtonText: i('aiVideoCreation.cancel'),
                                    type: 'warning'
                                  }
                                )
                                  .then(
                                    r(
                                      t().mark(function e() {
                                        return t().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.prev = 0),
                                                    (e.next = 3),
                                                    I({ task_id: n })
                                                  )
                                                case 3:
                                                  return (
                                                    (ee.currentPage = 1),
                                                    (e.next = 6),
                                                    ie(1, ee.pageSize)
                                                  )
                                                case 6:
                                                  ;(s({
                                                    message: i('aiVideoCreation.taskCancelled'),
                                                    type: 'success'
                                                  }),
                                                    (e.next = 13))
                                                  break
                                                case 9:
                                                  ;((e.prev = 9),
                                                    (e.t0 = e.catch(0)),
                                                    console.error('取消任务失败', e.t0),
                                                    s({
                                                      message: i(
                                                        'aiVideoCreation.cancelTaskFailed'
                                                      ),
                                                      type: 'error'
                                                    }))
                                                case 13:
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
                                  )
                                  .catch(function () {
                                    s({
                                      message: i('aiVideoCreation.operationCancelled'),
                                      type: 'info'
                                    })
                                  })
                              case 1:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  he = (function () {
                    var e = r(
                      t().mark(function e(n) {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                d.confirm(
                                  i('aiVideoCreation.confirmRetryTask'),
                                  i('aiVideoCreation.confirmOperation'),
                                  {
                                    confirmButtonText: i('aiVideoCreation.confirm'),
                                    cancelButtonText: i('aiVideoCreation.cancel'),
                                    type: 'warning'
                                  }
                                )
                                  .then(
                                    r(
                                      t().mark(function e() {
                                        return t().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return ((e.prev = 0), (e.next = 3), U(n))
                                                case 3:
                                                  return (
                                                    s({
                                                      message: i('aiVideoCreation.taskResubmitted'),
                                                      type: 'success'
                                                    }),
                                                    (e.next = 6),
                                                    ie(ee.currentPage, ee.pageSize)
                                                  )
                                                case 6:
                                                  ;(ae(), (e.next = 13))
                                                  break
                                                case 9:
                                                  ;((e.prev = 9),
                                                    (e.t0 = e.catch(0)),
                                                    console.error('重试任务失败', e.t0),
                                                    s({
                                                      message: i('aiVideoCreation.retryTaskFailed'),
                                                      type: 'error'
                                                    }))
                                                case 13:
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
                                  )
                                  .catch(function () {
                                    s({
                                      message: i('aiVideoCreation.operationCancelled'),
                                      type: 'info'
                                    })
                                  })
                              case 1:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  me = function () {
                    ne.value = !1
                  }
                return function (e, t) {
                  var n = h('el-input'),
                    r = h('el-form-item'),
                    o = h('el-option'),
                    u = h('el-select'),
                    d = h('el-collapse-item'),
                    f = h('el-collapse'),
                    p = h('el-button'),
                    v = h('el-form'),
                    g = h('el-card'),
                    T = h('el-col'),
                    O = h('el-icon'),
                    D = h('el-tag'),
                    I = h('el-pagination'),
                    U = h('el-row')
                  return (
                    m(),
                    y('div', N, [
                      k(
                        U,
                        { gutter: 20 },
                        {
                          default: w(function () {
                            return [
                              k(
                                T,
                                { span: 12 },
                                {
                                  default: w(function () {
                                    return [
                                      k(g, null, {
                                        default: w(function () {
                                          return [
                                            k(v, null, {
                                              default: w(function () {
                                                return [
                                                  k(r, null, {
                                                    default: w(function () {
                                                      return [
                                                        k(
                                                          n,
                                                          {
                                                            modelValue: j.value,
                                                            'onUpdate:modelValue':
                                                              t[0] ||
                                                              (t[0] = function (e) {
                                                                return (j.value = e)
                                                              }),
                                                            type: 'textarea',
                                                            autosize: { minRows: 10, maxRows: 15 },
                                                            maxlength: '128',
                                                            'show-word-limit': '',
                                                            placeholder: C(i)(
                                                              'aiVideoCreation.enterYourIdea'
                                                            )
                                                          },
                                                          null,
                                                          8,
                                                          ['modelValue', 'placeholder']
                                                        )
                                                      ]
                                                    }),
                                                    _: 1
                                                  }),
                                                  k(r, null, {
                                                    default: w(function () {
                                                      return [
                                                        k(
                                                          f,
                                                          { 'model-value': '1' },
                                                          {
                                                            default: w(function () {
                                                              return [
                                                                k(
                                                                  d,
                                                                  {
                                                                    title: C(i)(
                                                                      'aiVideoCreation.advancedSettings'
                                                                    ),
                                                                    name: '1'
                                                                  },
                                                                  {
                                                                    default: w(function () {
                                                                      return [
                                                                        k(
                                                                          r,
                                                                          {
                                                                            label: C(i)(
                                                                              'aiVideoCreation.styleSelection'
                                                                            )
                                                                          },
                                                                          {
                                                                            default: w(function () {
                                                                              return [
                                                                                k(
                                                                                  u,
                                                                                  {
                                                                                    modelValue:
                                                                                      se.value,
                                                                                    'onUpdate:modelValue':
                                                                                      t[1] ||
                                                                                      (t[1] =
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return (se.value =
                                                                                            e)
                                                                                        }),
                                                                                    placeholder: C(
                                                                                      i
                                                                                    )(
                                                                                      'aiVideoCreation.pleaseSelectStyle'
                                                                                    )
                                                                                  },
                                                                                  {
                                                                                    default: w(
                                                                                      function () {
                                                                                        return [
                                                                                          (m(),
                                                                                          y(
                                                                                            _,
                                                                                            null,
                                                                                            V(
                                                                                              ue,
                                                                                              function (
                                                                                                e
                                                                                              ) {
                                                                                                return k(
                                                                                                  o,
                                                                                                  {
                                                                                                    key: e.value,
                                                                                                    label:
                                                                                                      e.label,
                                                                                                    value:
                                                                                                      e.value
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  [
                                                                                                    'label',
                                                                                                    'value'
                                                                                                  ]
                                                                                                )
                                                                                              }
                                                                                            ),
                                                                                            64
                                                                                          ))
                                                                                        ]
                                                                                      }
                                                                                    ),
                                                                                    _: 1
                                                                                  },
                                                                                  8,
                                                                                  [
                                                                                    'modelValue',
                                                                                    'placeholder'
                                                                                  ]
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
                                                                  ['title']
                                                                )
                                                              ]
                                                            }),
                                                            _: 1
                                                          }
                                                        )
                                                      ]
                                                    }),
                                                    _: 1
                                                  }),
                                                  k(r, null, {
                                                    default: w(function () {
                                                      return [
                                                        k(
                                                          p,
                                                          {
                                                            type: 'primary',
                                                            class: 'w-full',
                                                            loading: X.value,
                                                            onClick: ve
                                                          },
                                                          {
                                                            default: w(function () {
                                                              return [
                                                                S(
                                                                  L(
                                                                    C(i)(
                                                                      'aiVideoCreation.aiCreation'
                                                                    )
                                                                  ) + ' ',
                                                                  1
                                                                ),
                                                                E(
                                                                  'div',
                                                                  F,
                                                                  L(
                                                                    C(i)(
                                                                      'aiVideoCreation.estimatedTime'
                                                                    )
                                                                  ),
                                                                  1
                                                                )
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
                                                  })
                                                ]
                                              }),
                                              _: 1
                                            })
                                          ]
                                        }),
                                        _: 1
                                      })
                                    ]
                                  }),
                                  _: 1
                                }
                              ),
                              k(
                                T,
                                { span: 12 },
                                {
                                  default: w(function () {
                                    return [
                                      k(g, null, {
                                        header: w(function () {
                                          return [
                                            E('div', G, [
                                              E(
                                                'span',
                                                null,
                                                L(C(i)('aiVideoCreation.taskList')),
                                                1
                                              )
                                            ])
                                          ]
                                        }),
                                        default: w(function () {
                                          return [
                                            E('div', M, [
                                              (m(!0),
                                              y(
                                                _,
                                                null,
                                                V(Z.value, function (e) {
                                                  return (
                                                    m(),
                                                    y(
                                                      'div',
                                                      {
                                                        key: e.id,
                                                        class: z([
                                                          'task-item',
                                                          {
                                                            'task-success': 'success' === e.status,
                                                            'task-failed': 'failed' === e.status
                                                          }
                                                        ])
                                                      },
                                                      [
                                                        E('div', R, [
                                                          E('div', B, [
                                                            E(
                                                              'span',
                                                              null,
                                                              '任务ID: ' + L(e.id),
                                                              1
                                                            ),
                                                            e.created_at
                                                              ? (m(),
                                                                y(
                                                                  'span',
                                                                  A,
                                                                  L(
                                                                    C(i)(
                                                                      'aiVideoCreation.createTime'
                                                                    )
                                                                  ) +
                                                                    ': ' +
                                                                    L(pe(e.created_at)),
                                                                  1
                                                                ))
                                                              : b('', !0)
                                                          ]),
                                                          E('div', Y, [
                                                            k(
                                                              D,
                                                              {
                                                                type: le(e.status),
                                                                class: 'status-tag',
                                                                style: P(fe(e))
                                                              },
                                                              {
                                                                default: w(function () {
                                                                  return [
                                                                    'pending' === e.status ||
                                                                    'running' === e.status
                                                                      ? (m(),
                                                                        x(
                                                                          O,
                                                                          {
                                                                            key: 0,
                                                                            class: 'is-loading'
                                                                          },
                                                                          {
                                                                            default: w(function () {
                                                                              return [k(C(l))]
                                                                            }),
                                                                            _: 1
                                                                          }
                                                                        ))
                                                                      : b('', !0),
                                                                    S(
                                                                      ' ' + L(de(e.status)) + ' ',
                                                                      1
                                                                    ),
                                                                    'running' === e.status &&
                                                                    void 0 !== e.fakeProgress
                                                                      ? (m(),
                                                                        y(
                                                                          'span',
                                                                          H,
                                                                          ' (' +
                                                                            L(e.fakeProgress) +
                                                                            '%) ',
                                                                          1
                                                                        ))
                                                                      : b('', !0)
                                                                  ]
                                                                }),
                                                                _: 2
                                                              },
                                                              1032,
                                                              ['type', 'style']
                                                            )
                                                          ])
                                                        ]),
                                                        e.theme
                                                          ? (m(),
                                                            y(
                                                              'div',
                                                              q,
                                                              L(C(i)('aiVideoCreation.theme')) +
                                                                ': ' +
                                                                L(e.theme),
                                                              1
                                                            ))
                                                          : b('', !0),
                                                        'success' === e.status && e.result_url
                                                          ? (m(),
                                                            y('div', K, [
                                                              k(
                                                                p,
                                                                {
                                                                  size: 'small',
                                                                  onClick: function (t) {
                                                                    var n
                                                                    ;(n = e.result_url)
                                                                      ? window.open(n, '_blank')
                                                                      : s({
                                                                          message: i(
                                                                            'aiVideoCreation.videoLinkEmpty'
                                                                          ),
                                                                          type: 'warning'
                                                                        })
                                                                  }
                                                                },
                                                                {
                                                                  default: w(function () {
                                                                    return [
                                                                      S(
                                                                        L(
                                                                          C(i)(
                                                                            'aiVideoCreation.preview'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                ['onClick']
                                                              ),
                                                              k(
                                                                p,
                                                                {
                                                                  size: 'small',
                                                                  onClick: function (t) {
                                                                    var n
                                                                    ;(n = e.result_url)
                                                                      ? c(n, function () {
                                                                          s({
                                                                            message: i(
                                                                              'aiVideoCreation.linkCopied'
                                                                            ),
                                                                            type: 'success'
                                                                          })
                                                                        })
                                                                      : s({
                                                                          message: i(
                                                                            'aiVideoCreation.videoLinkEmpty'
                                                                          ),
                                                                          type: 'warning'
                                                                        })
                                                                  }
                                                                },
                                                                {
                                                                  default: w(function () {
                                                                    return [
                                                                      S(
                                                                        L(
                                                                          C(i)(
                                                                            'aiVideoCreation.copyLink'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                ['onClick']
                                                              ),
                                                              k(
                                                                p,
                                                                {
                                                                  size: 'small',
                                                                  onClick: function (t) {
                                                                    var n
                                                                    ;(n = e.md5)
                                                                      ? c(n, function () {
                                                                          s({
                                                                            message: i(
                                                                              'aiVideoCreation.md5Copied'
                                                                            ),
                                                                            type: 'success'
                                                                          })
                                                                        })
                                                                      : s({
                                                                          message: i(
                                                                            'aiVideoCreation.md5Empty'
                                                                          ),
                                                                          type: 'warning'
                                                                        })
                                                                  },
                                                                  disabled: !e.md5
                                                                },
                                                                {
                                                                  default: w(function () {
                                                                    return [
                                                                      S(
                                                                        L(
                                                                          C(i)(
                                                                            'aiVideoCreation.copyMD5'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                ['onClick', 'disabled']
                                                              ),
                                                              k(
                                                                p,
                                                                {
                                                                  size: 'small',
                                                                  onClick: function (t) {
                                                                    return (function (e, t) {
                                                                      if (e) {
                                                                        ;((re.value.fileUrl = e),
                                                                          (re.value.fileMd5 =
                                                                            t || ''))
                                                                        try {
                                                                          var n = new URL(e)
                                                                              .pathname,
                                                                            r = n.substring(
                                                                              n.lastIndexOf('/') + 1
                                                                            )
                                                                          re.value.fileName =
                                                                            r || 'video.mp4'
                                                                        } catch (a) {
                                                                          re.value.fileName =
                                                                            'video.mp4'
                                                                        }
                                                                        ne.value = !0
                                                                      } else
                                                                        s({
                                                                          message: i(
                                                                            'aiVideoCreation.videoLinkEmpty'
                                                                          ),
                                                                          type: 'warning'
                                                                        })
                                                                    })(e.result_url, e.md5)
                                                                  }
                                                                },
                                                                {
                                                                  default: w(function () {
                                                                    return [
                                                                      S(
                                                                        L(
                                                                          C(i)(
                                                                            'aiVideoCreation.uploadToCloud'
                                                                          )
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
                                                            ]))
                                                          : b('', !0),
                                                        ('running' !== e.status &&
                                                          'success' !== e.status) ||
                                                        e.isCanDelete
                                                          ? (m(),
                                                            y('div', Q, [
                                                              k(
                                                                p,
                                                                {
                                                                  size: 'small',
                                                                  onClick: function (t) {
                                                                    return ge(e.task_id)
                                                                  }
                                                                },
                                                                {
                                                                  default: w(function () {
                                                                    return [
                                                                      S(
                                                                        L(
                                                                          C(i)(
                                                                            'aiVideoCreation.cancelTask'
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                ['onClick']
                                                              ),
                                                              'failed' === e.status ||
                                                              'revoked' === e.status
                                                                ? (m(),
                                                                  x(
                                                                    p,
                                                                    {
                                                                      key: 0,
                                                                      size: 'small',
                                                                      onClick: function (t) {
                                                                        return he(e.task_id)
                                                                      }
                                                                    },
                                                                    {
                                                                      default: w(function () {
                                                                        return [
                                                                          S(
                                                                            L(
                                                                              C(i)(
                                                                                'aiVideoCreation.retryTask'
                                                                              )
                                                                            ),
                                                                            1
                                                                          )
                                                                        ]
                                                                      }),
                                                                      _: 2
                                                                    },
                                                                    1032,
                                                                    ['onClick']
                                                                  ))
                                                                : b('', !0)
                                                            ]))
                                                          : b('', !0)
                                                      ],
                                                      2
                                                    )
                                                  )
                                                }),
                                                128
                                              )),
                                              0 === Z.value.length
                                                ? (m(),
                                                  y(
                                                    'div',
                                                    J,
                                                    L(C(i)('aiVideoCreation.noTasks')),
                                                    1
                                                  ))
                                                : b('', !0)
                                            ]),
                                            E('div', W, [
                                              k(
                                                I,
                                                {
                                                  'current-page': C(ee).currentPage,
                                                  'onUpdate:currentPage':
                                                    t[2] ||
                                                    (t[2] = function (e) {
                                                      return (C(ee).currentPage = e)
                                                    }),
                                                  'page-size': C(ee).pageSize,
                                                  'onUpdate:pageSize':
                                                    t[3] ||
                                                    (t[3] = function (e) {
                                                      return (C(ee).pageSize = e)
                                                    }),
                                                  'page-sizes': C(ee).pageSizes,
                                                  total: C(ee).total,
                                                  layout: C(ee).layout,
                                                  onCurrentChange: oe,
                                                  onSizeChange: ce
                                                },
                                                null,
                                                8,
                                                [
                                                  'current-page',
                                                  'page-size',
                                                  'page-sizes',
                                                  'total',
                                                  'layout'
                                                ]
                                              )
                                            ])
                                          ]
                                        }),
                                        _: 1
                                      })
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
                      ne.value
                        ? (m(),
                          x(
                            C(a),
                            {
                              key: 0,
                              visible: ne.value,
                              'onUpdate:visible':
                                t[4] ||
                                (t[4] = function (e) {
                                  return (ne.value = e)
                                }),
                              'file-url': re.value.fileUrl,
                              'file-name': re.value.fileName,
                              'file-md5': re.value.fileMd5,
                              onSuccess: me
                            },
                            null,
                            8,
                            ['visible', 'file-url', 'file-name', 'file-md5']
                          ))
                        : b('', !0)
                    ])
                  )
                }
              }
            }
          e('default', i(X, [['__scopeId', 'data-v-223775dc']]))
        }
      }
    }
  )
})()
