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
      i =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      u = l.iterator || '@@iterator',
      c = l.asyncIterator || '@@asyncIterator',
      s = l.toStringTag || '@@toStringTag'
    function p(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      p({}, '')
    } catch (n) {
      p = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, r) {
      var a = t && t.prototype instanceof b ? t : b,
        o = Object.create(a.prototype),
        l = new V(r || [])
      return (i(o, '_invoke', { value: j(e, n, l) }), o)
    }
    function d(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    r.wrap = f
    var m = 'suspendedStart',
      v = 'suspendedYield',
      g = 'executing',
      h = 'completed',
      y = {}
    function b() {}
    function w() {}
    function k() {}
    var x = {}
    p(x, u, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      M = _ && _(_(D([])))
    M && M !== a && o.call(M, u) && (x = M)
    var L = (k.prototype = b.prototype = Object.create(x))
    function S(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        p(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function E(t, n) {
      function r(a, i, l, u) {
        var c = d(t[a], t, i)
        if ('throw' !== c.type) {
          var s = c.arg,
            p = s.value
          return p && 'object' == e(p) && o.call(p, '__await')
            ? n.resolve(p.__await).then(
                function (e) {
                  r('next', e, l, u)
                },
                function (e) {
                  r('throw', e, l, u)
                }
              )
            : n.resolve(p).then(
                function (e) {
                  ;((s.value = e), l(s))
                },
                function (e) {
                  return r('throw', e, l, u)
                }
              )
        }
        u(c.arg)
      }
      var a
      i(this, '_invoke', {
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
    function j(e, t, r) {
      var a = m
      return function (o, i) {
        if (a === g) throw new Error('Generator is already running')
        if (a === h) {
          if ('throw' === o) throw i
          return { value: n, done: !0 }
        }
        for (r.method = o, r.arg = i; ; ) {
          var l = r.delegate
          if (l) {
            var u = C(l, r)
            if (u) {
              if (u === y) continue
              return u
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === m) throw ((a = h), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = g
          var c = d(e, t, r)
          if ('normal' === c.type) {
            if (((a = r.done ? h : v), c.arg === y)) continue
            return { value: c.arg, done: r.done }
          }
          'throw' === c.type && ((a = h), (r.method = 'throw'), (r.arg = c.arg))
        }
      }
    }
    function C(e, t) {
      var r = t.method,
        a = e.iterator[r]
      if (a === n)
        return (
          (t.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = n), C(e, t), 'throw' === t.method)) ||
            ('return' !== r &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          y
        )
      var o = d(a, e.iterator, t.arg)
      if ('throw' === o.type) return ((t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), y)
      var i = o.arg
      return i
        ? i.done
          ? ((t[e.resultName] = i.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            y)
          : i
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          y)
    }
    function T(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function F(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function V(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(T, this), this.reset(!0))
    }
    function D(t) {
      if (t || '' === t) {
        var r = t[u]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            i = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (w.prototype = k),
      i(L, 'constructor', { value: k, configurable: !0 }),
      i(k, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = p(k, s, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, k)
            : ((e.__proto__ = k), p(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(L)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      S(E.prototype),
      p(E.prototype, c, function () {
        return this
      }),
      (r.AsyncIterator = E),
      (r.async = function (e, t, n, a, o) {
        void 0 === o && (o = Promise)
        var i = new E(f(e, t, n, a), o)
        return r.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      S(L),
      p(L, s, 'Generator'),
      p(L, u, function () {
        return this
      }),
      p(L, 'toString', function () {
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
      (r.values = D),
      (V.prototype = {
        constructor: V,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(F),
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
            var i = this.tryEntries[a],
              l = i.completion
            if ('root' === i.tryLoc) return r('end')
            if (i.tryLoc <= this.prev) {
              var u = o.call(i, 'catchLoc'),
                c = o.call(i, 'finallyLoc')
              if (u && c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              } else if (u) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
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
          var i = a ? a.completion : {}
          return (
            (i.type = e),
            (i.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), y) : this.complete(i)
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
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), F(n), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                F(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, r) {
          return (
            (this.delegate = { iterator: D(e), resultName: t, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            y
          )
        }
      }),
      r
    )
  }
  function n(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        u = l.value
    } catch (c) {
      return void n(c)
    }
    l.done ? t(u) : Promise.resolve(u).then(r, a)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (a, o) {
        var i = e.apply(t, r)
        function l(e) {
          n(i, a, o, l, u, 'next', e)
        }
        function u(e) {
          n(i, a, o, l, u, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  System.register(
    [
      './script-legacy-0642077e.js',
      './useTableHeightFit-legacy-f881449c.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, n) {
      'use strict'
      var a, o, i, l, u, c, s, p, f, d, m, v, g, h, y, b, w, k, x, _, M, L, S, E, j, C
      return {
        setters: [
          function (e) {
            ;((a = e.g), (o = e.u), (i = e.a), (l = e.d), (u = e.r))
          },
          function (e) {
            c = e.u
          },
          function (e) {
            ;((s = e.h), (p = e._))
          },
          function (e) {
            ;((f = e.E), (d = e.G))
          },
          function (e) {
            ;((m = e.y),
              (v = e.r),
              (g = e.b),
              (h = e.Q),
              (y = e.a8),
              (b = e.ag),
              (w = e.f),
              (k = e.h),
              (x = e.N),
              (_ = e.H),
              (M = e.u),
              (L = e.L),
              (S = e.M),
              (E = e.I),
              (j = e.G),
              (C = e.i))
          },
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.script-management[data-v-8c04b805]{padding:20px}.script-management .toolbar[data-v-8c04b805]{margin-bottom:20px}.script-management .toolbar .el-button[data-v-8c04b805]{margin-right:10px}.script-management .pagination[data-v-8c04b805]{margin-top:20px;display:flex;justify-content:flex-start}.script-management .dialog-footer[data-v-8c04b805]{display:flex;justify-content:flex-start}.script-management .dialog-footer .el-button[data-v-8c04b805]{margin-left:10px}\n'),
            document.head.appendChild(n))
          var T = { class: 'script-management' },
            F = { class: 'pagination' },
            V = { class: 'el-upload__text' },
            D = { class: 'el-upload__tip' },
            I = m({
              __name: 'script',
              setup: function (e) {
                var n = s().t,
                  p = v([]),
                  m = v(!1),
                  I = v([]),
                  O = v(''),
                  z = v({ page: 1, pageSize: 50, total: 0 }),
                  P = v(0),
                  U = c(),
                  G = U.cTable,
                  N = U.maxHeight,
                  B = U.handleGetTableHeight,
                  H = v(!1),
                  R = v(!1),
                  A = v(!1),
                  Y = v(!1),
                  Q = v(!1),
                  q = v(!1),
                  J = v(),
                  K = v(),
                  W = v({ scriptId: '', status: 'approve', remark: '' }),
                  X = v({ scriptId: '', description: '', is_public: !1 }),
                  Z = {
                    pending: {
                      text: n('taskManagement.script.statusText.pending'),
                      type: 'warning'
                    },
                    approved: {
                      text: n('taskManagement.script.statusText.approved'),
                      type: 'success'
                    },
                    rejected: {
                      text: n('taskManagement.script.statusText.rejected'),
                      type: 'danger'
                    }
                  },
                  $ = function (e) {
                    var t
                    return (
                      (null === (t = Z[e.toLowerCase()]) || void 0 === t ? void 0 : t.text) || e
                    )
                  },
                  ee = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r, o
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (m.value = !0),
                                    (e.prev = 1),
                                    P.value++,
                                    (r = {
                                      skip: 10 * (z.value.page - 1),
                                      limit: z.value.pageSize
                                    }),
                                    O.value && (r.name = O.value),
                                    (e.next = 7),
                                    a(r)
                                  )
                                case 7:
                                  ;((o = e.sent),
                                    (p.value = o.scripts || []),
                                    (z.value.total = o.total || 0),
                                    (e.next = 16))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(1)),
                                    console.error(e.t0),
                                    f.error(n('taskManagement.script.messages.fetchListFailed')))
                                case 16:
                                  return ((e.prev = 16), (m.value = !1), e.finish(16))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 12, 16, 19]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  te = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (X.value.scriptId) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    f.warning(
                                      n('taskManagement.script.messages.selectScriptToEdit')
                                    ),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (q.value = !0),
                                    (e.prev = 4),
                                    (e.next = 7),
                                    o(X.value.scriptId, {
                                      description: X.value.description,
                                      is_public: X.value.is_public
                                    })
                                  )
                                case 7:
                                  ;(f.success(n('taskManagement.script.messages.updateSuccess')),
                                    (A.value = !1),
                                    ee(),
                                    (e.next = 16))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(4)),
                                    console.error(e.t0),
                                    f.error(n('taskManagement.script.messages.updateFailed')))
                                case 16:
                                  return ((e.prev = 16), (q.value = !1), e.finish(16))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 12, 16, 19]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ne = null,
                  re = function () {
                    ;(clearTimeout(ne),
                      (ne = setTimeout(function () {
                        ;((z.value.page = 1), ee())
                      }, 500)))
                  },
                  ae = function () {
                    ;((O.value = ''), (z.value.page = 1), ee())
                  },
                  oe = function () {
                    H.value = !0
                  },
                  ie = function (e) {
                    K.value = e.raw
                  },
                  le = function () {
                    f.warning(n('taskManagement.script.messages.onlyOneFileAllowed'))
                  },
                  ue = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (K.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    f.warning(n('taskManagement.script.messages.pleaseSelectFile')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (r = new FormData()).append('file', K.value),
                                    (Y.value = !0),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    i(r)
                                  )
                                case 9:
                                  ;(f.success(n('taskManagement.script.messages.uploadSuccess')),
                                    (H.value = !1),
                                    J.value && J.value.clearFiles(),
                                    ee(),
                                    (e.next = 19))
                                  break
                                case 15:
                                  ;((e.prev = 15),
                                    (e.t0 = e.catch(6)),
                                    console.error(e.t0),
                                    f.error(n('taskManagement.script.messages.uploadFailed')))
                                case 19:
                                  return ((e.prev = 19), (Y.value = !1), e.finish(19))
                                case 22:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[6, 15, 19, 22]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ce = function (e) {
                    ;(f.success(n('taskManagement.script.messages.uploadSuccess')),
                      (H.value = !1),
                      J.value && J.value.clearFiles(),
                      ee())
                  },
                  se = function (e) {
                    ;(console.error(e),
                      f.error(n('taskManagement.script.messages.uploadFailed')),
                      J.value && J.value.clearFiles())
                  },
                  pe = function () {
                    ;((H.value = !1), J.value && J.value.clearFiles(), (K.value = null))
                  },
                  fe = function (e) {
                    I.value = e
                  },
                  de = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    d.confirm(
                                      n('taskManagement.script.messages.confirmDeleteSelected'),
                                      n('taskManagement.script.messages.confirmDeleteTitle'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        cancelButtonText: n('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return (
                                    (r = I.value.map(function (e) {
                                      return l(e.id)
                                    })),
                                    (e.next = 6),
                                    Promise.all(r)
                                  )
                                case 6:
                                  ;(f.success(n('taskManagement.script.messages.deleteSuccess')),
                                    ee(),
                                    (e.next = 14))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    f.error(n('taskManagement.script.messages.deleteFailed')))
                                case 14:
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
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  me = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (W.value.scriptId) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    f.warning(
                                      n('taskManagement.script.messages.selectScriptToReview')
                                    ),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (Q.value = !0),
                                    (e.prev = 4),
                                    (e.next = 7),
                                    u({
                                      scriptId: W.value.scriptId,
                                      action: W.value.status.toLocaleUpperCase(),
                                      remark: W.value.remark
                                    })
                                  )
                                case 7:
                                  ;(f.success(n('taskManagement.script.messages.reviewSuccess')),
                                    (R.value = !1),
                                    ee(),
                                    (e.next = 16))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(4)),
                                    console.error(e.t0),
                                    f.error(n('taskManagement.script.messages.reviewFailed')))
                                case 16:
                                  return ((e.prev = 16), (Q.value = !1), e.finish(16))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 12, 16, 19]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ve = (function () {
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
                                    d.confirm(
                                      n('taskManagement.script.messages.confirmDeleteSingle'),
                                      n('taskManagement.script.messages.confirmDeleteTitle'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        cancelButtonText: n('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), l(r.id))
                                case 5:
                                  ;(f.success(n('taskManagement.script.messages.deleteSuccess')),
                                    ee(),
                                    (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    f.error(n('taskManagement.script.messages.deleteFailed')))
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
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ge = function (e) {
                    ;(P.value++, (z.value.pageSize = e), ee())
                  },
                  he = function (e) {
                    ;(P.value++, (z.value.page = e), ee())
                  }
                return (
                  g(function () {
                    ;(ee(), B(), window.addEventListener('resize', B))
                  }),
                  h(function () {
                    window.removeEventListener('resize', B)
                  }),
                  function (e, t) {
                    var r = y('el-button'),
                      a = y('el-input'),
                      o = y('PageBanner'),
                      i = y('el-table-column'),
                      l = y('el-tag'),
                      u = y('el-table'),
                      c = y('el-pagination'),
                      s = y('UploadFilled'),
                      f = y('el-icon'),
                      d = y('el-upload'),
                      v = y('el-dialog'),
                      g = y('el-radio'),
                      h = y('el-radio-group'),
                      U = y('el-form-item'),
                      B = y('el-form'),
                      K = y('el-switch'),
                      ne = b('loading')
                    return (
                      w(),
                      k('div', T, [
                        x(
                          o,
                          { title: '' },
                          {
                            extra: _(function () {
                              return [
                                x(
                                  a,
                                  {
                                    modelValue: O.value,
                                    'onUpdate:modelValue':
                                      t[0] ||
                                      (t[0] = function (e) {
                                        return (O.value = e)
                                      }),
                                    placeholder: M(n)('taskManagement.script.searchLabel'),
                                    style: { width: '300px', 'margin-right': '10px' },
                                    onInput: re
                                  },
                                  {
                                    append: _(function () {
                                      return [
                                        x(
                                          r,
                                          { onClick: ae },
                                          {
                                            default: _(function () {
                                              return [L(S(M(n)('common.clear')), 1)]
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
                                x(
                                  r,
                                  { icon: 'RefreshRight', onClick: ee },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('common.refresh')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                x(
                                  r,
                                  { type: 'primary', onClick: oe },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('taskManagement.script.uploadBtn')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                x(
                                  r,
                                  { onClick: de, disabled: 0 === I.value.length },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('taskManagement.script.deleteSelected')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['disabled']
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        E(
                          (w(),
                          j(
                            u,
                            {
                              ref_key: 'cTable',
                              ref: G,
                              data: p.value,
                              key: P.value,
                              style: { width: '100%', 'margin-top': '15px' },
                              onSelectionChange: fe,
                              'max-height': M(N)
                            },
                            {
                              default: _(function () {
                                return [
                                  x(i, { type: 'selection', width: '55' }),
                                  x(
                                    i,
                                    {
                                      prop: 'id',
                                      label: M(n)('taskManagement.script.table.id'),
                                      width: '80'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  x(
                                    i,
                                    {
                                      prop: 'name',
                                      label: M(n)('taskManagement.script.table.name')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  x(
                                    i,
                                    {
                                      prop: 'description',
                                      label: M(n)('taskManagement.script.table.description')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  x(
                                    i,
                                    {
                                      prop: 'version',
                                      label: M(n)('taskManagement.script.table.version'),
                                      width: '80'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  x(
                                    i,
                                    {
                                      prop: 'is_public',
                                      label: M(n)('taskManagement.script.table.isPublic'),
                                      width: '100'
                                    },
                                    {
                                      default: _(function (e) {
                                        var t = e.row
                                        return [
                                          x(
                                            l,
                                            { type: t.is_public ? 'success' : 'info' },
                                            {
                                              default: _(function () {
                                                return [
                                                  L(
                                                    S(
                                                      t.is_public
                                                        ? M(n)('common.yes')
                                                        : M(n)('common.no')
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
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  x(
                                    i,
                                    {
                                      prop: 'status',
                                      label: M(n)('taskManagement.script.table.status'),
                                      width: '100'
                                    },
                                    {
                                      default: _(function (e) {
                                        var t,
                                          n,
                                          r = e.row
                                        return [
                                          x(
                                            l,
                                            {
                                              type:
                                                ((t = r.status),
                                                (null === (n = Z[t.toLowerCase()]) || void 0 === n
                                                  ? void 0
                                                  : n.type) || 'info')
                                            },
                                            {
                                              default: _(function () {
                                                return [L(S($(r.status)), 1)]
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
                                  x(
                                    i,
                                    { prop: 'created_at', label: '创建时间', width: '160' },
                                    {
                                      default: _(function (e) {
                                        var t,
                                          n = e.row
                                        return [
                                          L(
                                            S(
                                              ((t = n.created_at),
                                              t ? new Date(t).toLocaleString('zh-CN') : '--')
                                            ),
                                            1
                                          )
                                        ]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  x(
                                    i,
                                    {
                                      label: M(n)('taskManagement.script.table.actions'),
                                      width: '250'
                                    },
                                    {
                                      default: _(function (e) {
                                        var t = e.row
                                        return [
                                          x(
                                            r,
                                            {
                                              type: 'primary',
                                              link: '',
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((X.value = {
                                                    scriptId: e.id,
                                                    description: e.description || '',
                                                    is_public: e.is_public || !1
                                                  }),
                                                    (A.value = !0))
                                                })(t)
                                              }
                                            },
                                            {
                                              default: _(function () {
                                                return [L(S(M(n)('common.edit')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          x(
                                            r,
                                            {
                                              type: 'primary',
                                              link: '',
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((W.value = {
                                                    scriptId: e.id,
                                                    status: 'approve',
                                                    remark: ''
                                                  }),
                                                    (R.value = !0))
                                                })(t)
                                              }
                                            },
                                            {
                                              default: _(function () {
                                                return [
                                                  L(S(M(n)('taskManagement.script.reviewBtn')), 1)
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          x(
                                            r,
                                            {
                                              type: 'danger',
                                              link: '',
                                              onClick: function (e) {
                                                return ve(t)
                                              }
                                            },
                                            {
                                              default: _(function () {
                                                return [L(S(M(n)('common.delete')), 1)]
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
                          [[ne, m.value]]
                        ),
                        C('div', F, [
                          x(
                            c,
                            {
                              'current-page': z.value.page,
                              'onUpdate:currentPage':
                                t[1] ||
                                (t[1] = function (e) {
                                  return (z.value.page = e)
                                }),
                              'page-size': z.value.pageSize,
                              'onUpdate:pageSize':
                                t[2] ||
                                (t[2] = function (e) {
                                  return (z.value.pageSize = e)
                                }),
                              'page-sizes': [10, 20, 50],
                              total: z.value.total,
                              layout: M(n)('common.pagination.layout'),
                              onSizeChange: ge,
                              onCurrentChange: he
                            },
                            null,
                            8,
                            ['current-page', 'page-size', 'total', 'layout']
                          )
                        ]),
                        x(
                          v,
                          {
                            title: M(n)('taskManagement.script.uploadDialog.title'),
                            modelValue: H.value,
                            'onUpdate:modelValue':
                              t[3] ||
                              (t[3] = function (e) {
                                return (H.value = e)
                              }),
                            width: '500px'
                          },
                          {
                            footer: _(function () {
                              return [
                                x(
                                  r,
                                  {
                                    style: { 'margin-left': '10px' },
                                    type: 'success',
                                    onClick: ue,
                                    loading: Y.value
                                  },
                                  {
                                    default: _(function () {
                                      return [
                                        L(
                                          S(M(n)('taskManagement.script.uploadDialog.uploadBtn')),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                ),
                                x(
                                  r,
                                  { onClick: pe },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: _(function () {
                              return [
                                x(
                                  d,
                                  {
                                    ref_key: 'uploadRef',
                                    ref: J,
                                    action: '/cpyservice/airtest/tasks/script/upload',
                                    'auto-upload': !1,
                                    'on-change': ie,
                                    'on-success': ce,
                                    'on-error': se,
                                    limit: 1,
                                    drag: '',
                                    'on-exceed': le,
                                    accept: '.py,.zip'
                                  },
                                  {
                                    default: _(function () {
                                      return [
                                        x(
                                          f,
                                          { class: 'el-icon--upload' },
                                          {
                                            default: _(function () {
                                              return [x(s)]
                                            }),
                                            _: 1
                                          }
                                        ),
                                        C('div', V, [
                                          L(
                                            S(M(n)('taskManagement.script.uploadDialog.dragText')),
                                            1
                                          ),
                                          C(
                                            'em',
                                            null,
                                            S(
                                              M(n)(
                                                'taskManagement.script.uploadDialog.clickToUpload'
                                              )
                                            ),
                                            1
                                          )
                                        ]),
                                        C(
                                          'div',
                                          D,
                                          S(M(n)('taskManagement.script.uploadDialog.fileTip')),
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
                          ['title', 'modelValue']
                        ),
                        x(
                          v,
                          {
                            title: M(n)('taskManagement.script.reviewDialog.title'),
                            modelValue: R.value,
                            'onUpdate:modelValue':
                              t[6] ||
                              (t[6] = function (e) {
                                return (R.value = e)
                              }),
                            width: '500px'
                          },
                          {
                            footer: _(function () {
                              return [
                                x(
                                  r,
                                  {
                                    onClick:
                                      t[5] ||
                                      (t[5] = function (e) {
                                        return (R.value = !1)
                                      })
                                  },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                x(
                                  r,
                                  { type: 'primary', onClick: me, loading: Q.value },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('common.confirm')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: _(function () {
                              return [
                                x(
                                  B,
                                  { model: W.value, 'label-width': '80px' },
                                  {
                                    default: _(function () {
                                      return [
                                        x(
                                          U,
                                          {
                                            label: M(n)(
                                              'taskManagement.script.reviewDialog.statusLabel'
                                            )
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                x(
                                                  h,
                                                  {
                                                    modelValue: W.value.status,
                                                    'onUpdate:modelValue':
                                                      t[4] ||
                                                      (t[4] = function (e) {
                                                        return (W.value.status = e)
                                                      })
                                                  },
                                                  {
                                                    default: _(function () {
                                                      return [
                                                        x(
                                                          g,
                                                          { label: 'approve' },
                                                          {
                                                            default: _(function () {
                                                              return [
                                                                L(
                                                                  S(
                                                                    M(n)(
                                                                      'taskManagement.script.reviewDialog.approve'
                                                                    )
                                                                  ),
                                                                  1
                                                                )
                                                              ]
                                                            }),
                                                            _: 1
                                                          }
                                                        ),
                                                        x(
                                                          g,
                                                          { label: 'reject' },
                                                          {
                                                            default: _(function () {
                                                              return [
                                                                L(
                                                                  S(
                                                                    M(n)(
                                                                      'taskManagement.script.reviewDialog.reject'
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
                          ['title', 'modelValue']
                        ),
                        x(
                          v,
                          {
                            title: M(n)('taskManagement.script.editDialog.title'),
                            modelValue: A.value,
                            'onUpdate:modelValue':
                              t[10] ||
                              (t[10] = function (e) {
                                return (A.value = e)
                              }),
                            width: '500px'
                          },
                          {
                            footer: _(function () {
                              return [
                                x(
                                  r,
                                  {
                                    onClick:
                                      t[9] ||
                                      (t[9] = function (e) {
                                        return (A.value = !1)
                                      })
                                  },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                x(
                                  r,
                                  { type: 'primary', onClick: te, loading: q.value },
                                  {
                                    default: _(function () {
                                      return [L(S(M(n)('common.confirm')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: _(function () {
                              return [
                                x(
                                  B,
                                  { model: X.value, 'label-width': '80px' },
                                  {
                                    default: _(function () {
                                      return [
                                        x(
                                          U,
                                          {
                                            label: M(n)(
                                              'taskManagement.script.editDialog.descriptionLabel'
                                            )
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                x(
                                                  a,
                                                  {
                                                    modelValue: X.value.description,
                                                    'onUpdate:modelValue':
                                                      t[7] ||
                                                      (t[7] = function (e) {
                                                        return (X.value.description = e)
                                                      }),
                                                    type: 'textarea',
                                                    rows: 4,
                                                    placeholder: M(n)(
                                                      'taskManagement.script.editDialog.descriptionPlaceholder'
                                                    ),
                                                    maxlength: '500',
                                                    'show-word-limit': ''
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
                                        x(
                                          U,
                                          {
                                            label: M(n)(
                                              'taskManagement.script.editDialog.publicLabel'
                                            )
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                x(
                                                  K,
                                                  {
                                                    modelValue: X.value.is_public,
                                                    'onUpdate:modelValue':
                                                      t[8] ||
                                                      (t[8] = function (e) {
                                                        return (X.value.is_public = e)
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
                          ['title', 'modelValue']
                        )
                      ])
                    )
                  }
                )
              }
            })
          e('default', p(I, [['__scopeId', 'data-v-8c04b805']]))
        }
      }
    }
  )
})()
