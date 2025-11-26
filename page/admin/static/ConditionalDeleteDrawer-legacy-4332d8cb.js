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
      i =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      c = l.iterator || '@@iterator',
      u = l.asyncIterator || '@@asyncIterator',
      s = l.toStringTag || '@@toStringTag'
    function d(e, t, r) {
      return (
        Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      d({}, '')
    } catch (r) {
      d = function (e, t, r) {
        return (e[t] = r)
      }
    }
    function f(e, t, r, n) {
      var a = t && t.prototype instanceof w ? t : w,
        o = Object.create(a.prototype),
        l = new S(n || [])
      return (i(o, '_invoke', { value: T(e, r, l) }), o)
    }
    function p(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = f
    var h = 'suspendedStart',
      v = 'suspendedYield',
      m = 'executing',
      g = 'completed',
      y = {}
    function w() {}
    function _() {}
    function b() {}
    var D = {}
    d(D, c, function () {
      return this
    })
    var x = Object.getPrototypeOf,
      L = x && x(x(Y([])))
    L && L !== a && o.call(L, c) && (D = L)
    var E = (b.prototype = w.prototype = Object.create(D))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function C(t, r) {
      function n(a, i, l, c) {
        var u = p(t[a], t, i)
        if ('throw' !== u.type) {
          var s = u.arg,
            d = s.value
          return d && 'object' == e(d) && o.call(d, '__await')
            ? r.resolve(d.__await).then(
                function (e) {
                  n('next', e, l, c)
                },
                function (e) {
                  n('throw', e, l, c)
                }
              )
            : r.resolve(d).then(
                function (e) {
                  ;((s.value = e), l(s))
                },
                function (e) {
                  return n('throw', e, l, c)
                }
              )
        }
        c(u.arg)
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
    function T(e, t, n) {
      var a = h
      return function (o, i) {
        if (a === m) throw new Error('Generator is already running')
        if (a === g) {
          if ('throw' === o) throw i
          return { value: r, done: !0 }
        }
        for (n.method = o, n.arg = i; ; ) {
          var l = n.delegate
          if (l) {
            var c = V(l, n)
            if (c) {
              if (c === y) continue
              return c
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (a === h) throw ((a = g), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          a = m
          var u = p(e, t, n)
          if ('normal' === u.type) {
            if (((a = n.done ? g : v), u.arg === y)) continue
            return { value: u.arg, done: n.done }
          }
          'throw' === u.type && ((a = g), (n.method = 'throw'), (n.arg = u.arg))
        }
      }
    }
    function V(e, t) {
      var n = t.method,
        a = e.iterator[n]
      if (a === r)
        return (
          (t.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = r), V(e, t), 'throw' === t.method)) ||
            ('return' !== n &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          y
        )
      var o = p(a, e.iterator, t.arg)
      if ('throw' === o.type) return ((t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), y)
      var i = o.arg
      return i
        ? i.done
          ? ((t[e.resultName] = i.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = r)),
            (t.delegate = null),
            y)
          : i
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          y)
    }
    function j(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function B(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function S(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(j, this), this.reset(!0))
    }
    function Y(t) {
      if (t || '' === t) {
        var n = t[c]
        if (n) return n.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            i = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = r), (e.done = !0), e)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (_.prototype = b),
      i(E, 'constructor', { value: b, configurable: !0 }),
      i(b, 'constructor', { value: _, configurable: !0 }),
      (_.displayName = d(b, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === _ || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, b)
            : ((e.__proto__ = b), d(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(E)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      k(C.prototype),
      d(C.prototype, u, function () {
        return this
      }),
      (n.AsyncIterator = C),
      (n.async = function (e, t, r, a, o) {
        void 0 === o && (o = Promise)
        var i = new C(f(e, t, r, a), o)
        return n.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      k(E),
      d(E, s, 'Generator'),
      d(E, c, function () {
        return this
      }),
      d(E, 'toString', function () {
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
      (n.values = Y),
      (S.prototype = {
        constructor: S,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(B),
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
              (l.type = 'throw'),
              (l.arg = e),
              (t.next = n),
              a && ((t.method = 'next'), (t.arg = r)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              l = i.completion
            if ('root' === i.tryLoc) return n('end')
            if (i.tryLoc <= this.prev) {
              var c = o.call(i, 'catchLoc'),
                u = o.call(i, 'finallyLoc')
              if (c && u) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              } else if (c) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
              } else {
                if (!u) throw new Error('try statement without catch or finally')
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
            var r = this.tryEntries[t]
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), B(r), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var n = r.completion
              if ('throw' === n.type) {
                var a = n.arg
                B(r)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: Y(e), resultName: t, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            y
          )
        }
      }),
      n
    )
  }
  function r(e, t, r, n, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value
    } catch (u) {
      return void r(u)
    }
    l.done ? t(c) : Promise.resolve(c).then(n, a)
  }
  function n(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (a, o) {
        var i = e.apply(t, n)
        function l(e) {
          r(i, a, o, l, c, 'next', e)
        }
        function c(e) {
          r(i, a, o, l, c, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './index-legacy-62a49047.js',
      './index-legacy-31ac821a.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, r) {
      'use strict'
      var a, o, i, l, c, u, s, d, f, p, h, v, m, g, y, w, _, b, D, x, L, E, k, C, T, V
      return {
        setters: [
          function (e) {
            ;((a = e.h), (o = e._))
          },
          function (e) {
            i = e.g
          },
          function (e) {
            ;((l = e.g), (c = e.b), (u = e.r))
          },
          function (e) {
            ;((s = e.E), (d = e.G))
          },
          function (e) {
            ;((f = e.y),
              (p = e.r),
              (h = e.d),
              (v = e.R),
              (m = e.b),
              (g = e.a8),
              (y = e.f),
              (w = e.G),
              (_ = e.H),
              (b = e.i),
              (D = e.N),
              (x = e.u),
              (L = e.h),
              (E = e.F),
              (k = e.a0),
              (C = e.L),
              (T = e.M),
              (V = e.K))
          },
          null
        ],
        execute: function () {
          var r = document.createElement('style')
          ;((r.textContent =
            '.conditional-delete-drawer[data-v-687d70dc]{padding:20px}.conditional-delete-drawer .params-card[data-v-687d70dc]{margin-bottom:20px}.conditional-delete-drawer .action-area[data-v-687d70dc]{margin-bottom:20px;text-align:center}.conditional-delete-drawer .result-card[data-v-687d70dc]{margin-bottom:20px}.conditional-delete-drawer .result-card .result-info[data-v-687d70dc]{margin-bottom:15px}.conditional-delete-drawer .result-card .result-info p[data-v-687d70dc]{margin:5px 0;color:#666}.conditional-delete-drawer .result-card .delete-action[data-v-687d70dc]{margin-top:15px;text-align:center}.conditional-delete-drawer .progress-card .progress-info[data-v-687d70dc]{margin-bottom:15px}.conditional-delete-drawer .progress-card .progress-info p[data-v-687d70dc]{margin:5px 0;color:#666}\n'),
            document.head.appendChild(r))
          var j = { class: 'conditional-delete-drawer' },
            B = { class: 'action-area' },
            S = { class: 'result-info' },
            Y = { class: 'delete-action' },
            M = { class: 'progress-info' },
            O = f({
              __name: 'ConditionalDeleteDrawer',
              props: { modelValue: { type: Boolean } },
              emits: ['update:modelValue', 'success'],
              setup: function (e, r) {
                var o = r.emit,
                  f = a().t,
                  O = e,
                  G = o,
                  P = p(O.modelValue),
                  F = p(!1),
                  H = p(!1)
                h(
                  function () {
                    return O.modelValue
                  },
                  function (e) {
                    P.value = e
                  }
                )
                var N = v({
                    page: 1,
                    page_size: 100,
                    local_group_uuid: '',
                    created_at_start: '',
                    created_at_end: ''
                  }),
                  I = p([]),
                  z = v({
                    visible: !1,
                    totalBatches: 0,
                    currentBatch: 0,
                    deletedCount: 0,
                    percentage: 0,
                    status: 'success'
                  }),
                  U = p([]),
                  q = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), i())
                                case 3:
                                  ;((r = e.sent),
                                    (U.value = r.map(function (e) {
                                      return { uuid: e.uuid, text: e.name, value: e.uuid }
                                    })),
                                    (e.next = 11))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取分组列表失败:', e.t0),
                                    s.error(f('conditionalDeleteDrawer.fetchGroupFailed')))
                                case 11:
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
                  })()
                ;(h(P, function (e) {
                  ;(G('update:modelValue', e), e || A())
                }),
                  m(function () {
                    q()
                  }))
                var A = function () {
                    ;((N.page = 1),
                      (N.page_size = 10),
                      (N.local_group_uuid = ''),
                      (N.created_at_start = ''),
                      (N.created_at_end = ''),
                      (I.value = []),
                      (z.visible = !1))
                  },
                  R = function (e) {
                    I.value.length > 0 || z.visible
                      ? d
                          .confirm(
                            f('conditionalDeleteDrawer.closeConfirmMessage'),
                            f('conditionalDeleteDrawer.closeConfirmTitle'),
                            {
                              confirmButtonText: f('common.confirm'),
                              cancelButtonText: f('common.cancel'),
                              type: 'warning'
                            }
                          )
                          .then(function () {
                            ;(A(), e())
                          })
                          .catch(function () {})
                      : (A(), e())
                  },
                  Z = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r, n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (N.local_group_uuid) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    s.warning(f('conditionalDeleteDrawer.selectGroupWarning')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (F.value = !0),
                                    (e.prev = 4),
                                    (r = {
                                      local_group_uuid: N.local_group_uuid,
                                      page: N.page,
                                      page_size: N.page_size
                                    }),
                                    N.created_at_start && (r.created_at_start = N.created_at_start),
                                    N.created_at_end && (r.created_at_end = N.created_at_end),
                                    (e.next = 10),
                                    l(r)
                                  )
                                case 10:
                                  ;((n = e.sent).instances && n.instances.length > 0
                                    ? ((I.value = n.instances.map(function (e) {
                                        return { padCode: e.instance_id, padStatus: e.padStatus }
                                      })),
                                      s.success(
                                        f('conditionalDeleteDrawer.querySuccess', {
                                          count: I.value.length
                                        })
                                      ))
                                    : ((I.value = []),
                                      s.warning(f('conditionalDeleteDrawer.noMatchingInstances'))),
                                    (e.next = 19))
                                  break
                                case 14:
                                  ;((e.prev = 14),
                                    (e.t0 = e.catch(4)),
                                    console.error('查询失败:', e.t0),
                                    s.error(f('conditionalDeleteDrawer.queryFailed')),
                                    (I.value = []))
                                case 19:
                                  return ((e.prev = 19), (F.value = !1), e.finish(19))
                                case 22:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 14, 19, 22]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  K = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r, n, a, o, i
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (0 !== I.value.length) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    s.warning(f('conditionalDeleteDrawer.noInstancesToDelete')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (e.prev = 3),
                                    (e.next = 6),
                                    d.confirm(
                                      f('conditionalDeleteDrawer.deleteConfirmMessage', {
                                        count: I.value.length
                                      }),
                                      f('conditionalDeleteDrawer.deleteConfirmTitle'),
                                      {
                                        confirmButtonText: f('common.confirm'),
                                        cancelButtonText: f('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 6:
                                  ;((H.value = !0),
                                    (z.visible = !0),
                                    (z.totalBatches = Math.ceil(I.value.length / 200)),
                                    (z.currentBatch = 0),
                                    (z.deletedCount = 0),
                                    (z.percentage = 0),
                                    (z.status = 'success'),
                                    (r = 200),
                                    (n = I.value.length),
                                    (a = 0))
                                case 16:
                                  if (!(a < n)) {
                                    e.next = 42
                                    break
                                  }
                                  return (
                                    (o = I.value.slice(a, a + r)),
                                    (i = o.map(function (e) {
                                      return e.padCode
                                    })),
                                    (z.currentBatch = Math.floor(a / r) + 1),
                                    (e.prev = 20),
                                    (e.next = 23),
                                    c({ padCodes: i })
                                  )
                                case 23:
                                  return (e.sent, (e.next = 26), u({ instance_ids: i }))
                                case 26:
                                  ;((z.deletedCount += o.length),
                                    (z.percentage = Math.round((z.deletedCount / n) * 100)),
                                    s.success(
                                      f('conditionalDeleteDrawer.batchDeleteSuccess', {
                                        batch: z.currentBatch
                                      })
                                    ),
                                    (e.next = 37))
                                  break
                                case 31:
                                  return (
                                    (e.prev = 31),
                                    (e.t0 = e.catch(20)),
                                    console.error(
                                      'Batch '.concat(z.currentBatch, ' deletion failed:'),
                                      e.t0
                                    ),
                                    s.error(
                                      f('conditionalDeleteDrawer.batchDeleteFailed', {
                                        batch: z.currentBatch
                                      })
                                    ),
                                    (z.status = 'exception'),
                                    e.abrupt('break', 42)
                                  )
                                case 37:
                                  return (
                                    (e.next = 39),
                                    new Promise(function (e) {
                                      return setTimeout(e, 1e3)
                                    })
                                  )
                                case 39:
                                  ;((a += r), (e.next = 16))
                                  break
                                case 42:
                                  ;(z.deletedCount === n &&
                                    (s.success(f('conditionalDeleteDrawer.allInstancesDeleted')),
                                    G('success'),
                                    A()),
                                    (e.next = 48))
                                  break
                                case 45:
                                  ;((e.prev = 45),
                                    (e.t1 = e.catch(3)),
                                    'cancel' !== e.t1 && console.error('删除操作取消或出错:', e.t1))
                                case 48:
                                  return ((e.prev = 48), (H.value = !1), e.finish(48))
                                case 51:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [3, 45, 48, 51],
                            [20, 31]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (e, t) {
                  var r = g('el-input-number'),
                    n = g('el-form-item'),
                    a = g('el-option'),
                    o = g('el-select'),
                    i = g('el-date-picker'),
                    l = g('el-form'),
                    c = g('el-card'),
                    u = g('el-button'),
                    s = g('el-progress'),
                    d = g('el-drawer')
                  return (
                    y(),
                    w(
                      d,
                      {
                        modelValue: P.value,
                        'onUpdate:modelValue':
                          t[4] ||
                          (t[4] = function (e) {
                            return (P.value = e)
                          }),
                        title: x(f)('conditionalDeleteDrawer.title'),
                        size: '40%',
                        'before-close': R
                      },
                      {
                        default: _(function () {
                          return [
                            b('div', j, [
                              D(
                                c,
                                {
                                  header: x(f)('conditionalDeleteDrawer.filterConditions'),
                                  class: 'params-card',
                                  shadow: 'never'
                                },
                                {
                                  default: _(function () {
                                    return [
                                      D(
                                        l,
                                        { model: N, 'label-width': '120px' },
                                        {
                                          default: _(function () {
                                            return [
                                              D(
                                                n,
                                                {
                                                  label: x(f)('conditionalDeleteDrawer.deleteCount')
                                                },
                                                {
                                                  default: _(function () {
                                                    return [
                                                      D(
                                                        r,
                                                        {
                                                          modelValue: N.page_size,
                                                          'onUpdate:modelValue':
                                                            t[0] ||
                                                            (t[0] = function (e) {
                                                              return (N.page_size = e)
                                                            }),
                                                          min: 1,
                                                          max: 600,
                                                          placeholder: x(f)(
                                                            'conditionalDeleteDrawer.deleteCountPlaceholder'
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
                                              D(
                                                n,
                                                { label: x(f)('conditionalDeleteDrawer.group') },
                                                {
                                                  default: _(function () {
                                                    return [
                                                      D(
                                                        o,
                                                        {
                                                          modelValue: N.local_group_uuid,
                                                          'onUpdate:modelValue':
                                                            t[1] ||
                                                            (t[1] = function (e) {
                                                              return (N.local_group_uuid = e)
                                                            }),
                                                          placeholder: x(f)(
                                                            'conditionalDeleteDrawer.selectGroup'
                                                          ),
                                                          style: { width: '100%' },
                                                          clearable: ''
                                                        },
                                                        {
                                                          default: _(function () {
                                                            return [
                                                              (y(!0),
                                                              L(
                                                                E,
                                                                null,
                                                                k(U.value, function (e) {
                                                                  return (
                                                                    y(),
                                                                    w(
                                                                      a,
                                                                      {
                                                                        key: e.uuid,
                                                                        label: e.text,
                                                                        value: e.uuid
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
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                },
                                                8,
                                                ['label']
                                              ),
                                              D(
                                                n,
                                                {
                                                  label: x(f)(
                                                    'conditionalDeleteDrawer.createStartTime'
                                                  )
                                                },
                                                {
                                                  default: _(function () {
                                                    return [
                                                      D(
                                                        i,
                                                        {
                                                          modelValue: N.created_at_start,
                                                          'onUpdate:modelValue':
                                                            t[2] ||
                                                            (t[2] = function (e) {
                                                              return (N.created_at_start = e)
                                                            }),
                                                          type: 'datetime',
                                                          placeholder: x(f)(
                                                            'conditionalDeleteDrawer.instanceCreateStartTime'
                                                          ),
                                                          format: 'YYYY-MM-DD HH:mm:ss',
                                                          'value-format': 'YYYY-MM-DDTHH:mm:ss[Z]',
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
                                              D(
                                                n,
                                                {
                                                  label: x(f)(
                                                    'conditionalDeleteDrawer.createEndTime'
                                                  )
                                                },
                                                {
                                                  default: _(function () {
                                                    return [
                                                      D(
                                                        i,
                                                        {
                                                          modelValue: N.created_at_end,
                                                          'onUpdate:modelValue':
                                                            t[3] ||
                                                            (t[3] = function (e) {
                                                              return (N.created_at_end = e)
                                                            }),
                                                          type: 'datetime',
                                                          placeholder: x(f)(
                                                            'conditionalDeleteDrawer.instanceCreateEndTime'
                                                          ),
                                                          format: 'YYYY-MM-DD HH:mm:ss',
                                                          'value-format': 'YYYY-MM-DDTHH:mm:ss[Z]',
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
                                ['header']
                              ),
                              b('div', B, [
                                D(
                                  u,
                                  { type: 'primary', onClick: Z, loading: F.value },
                                  {
                                    default: _(function () {
                                      return [C(T(x(f)('conditionalDeleteDrawer.query')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]),
                              I.value.length > 0
                                ? (y(),
                                  w(
                                    c,
                                    {
                                      key: 0,
                                      header: x(f)('conditionalDeleteDrawer.queryResults'),
                                      class: 'result-card',
                                      shadow: 'never'
                                    },
                                    {
                                      default: _(function () {
                                        return [
                                          b('div', S, [
                                            b(
                                              'p',
                                              null,
                                              T(
                                                x(f)('conditionalDeleteDrawer.foundInstances', {
                                                  count: I.value.length
                                                })
                                              ),
                                              1
                                            ),
                                            b(
                                              'p',
                                              null,
                                              T(
                                                x(f)('conditionalDeleteDrawer.deleteBatches', {
                                                  batches: Math.ceil(I.value.length / 200)
                                                })
                                              ),
                                              1
                                            )
                                          ]),
                                          b('div', Y, [
                                            D(
                                              u,
                                              {
                                                type: 'danger',
                                                onClick: K,
                                                loading: H.value,
                                                disabled: 0 === I.value.length
                                              },
                                              {
                                                default: _(function () {
                                                  return [
                                                    C(
                                                      T(
                                                        x(f)(
                                                          'conditionalDeleteDrawer.batchDelete',
                                                          { count: I.value.length }
                                                        )
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
                                          ])
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['header']
                                  ))
                                : V('', !0),
                              z.visible
                                ? (y(),
                                  w(
                                    c,
                                    {
                                      key: 1,
                                      header: x(f)('conditionalDeleteDrawer.deleteProgress'),
                                      class: 'progress-card'
                                    },
                                    {
                                      default: _(function () {
                                        return [
                                          b('div', M, [
                                            b(
                                              'p',
                                              null,
                                              T(
                                                x(f)('conditionalDeleteDrawer.totalBatches', {
                                                  total: z.totalBatches
                                                })
                                              ),
                                              1
                                            ),
                                            b(
                                              'p',
                                              null,
                                              T(
                                                x(f)('conditionalDeleteDrawer.currentBatch', {
                                                  current: z.currentBatch
                                                })
                                              ),
                                              1
                                            ),
                                            b(
                                              'p',
                                              null,
                                              T(
                                                x(f)('conditionalDeleteDrawer.deletedCount', {
                                                  count: z.deletedCount
                                                })
                                              ),
                                              1
                                            )
                                          ]),
                                          D(
                                            s,
                                            { percentage: z.percentage, status: z.status },
                                            null,
                                            8,
                                            ['percentage', 'status']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['header']
                                  ))
                                : V('', !0)
                            ])
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
          e('default', o(O, [['__scopeId', 'data-v-687d70dc']]))
        }
      }
    }
  )
})()
