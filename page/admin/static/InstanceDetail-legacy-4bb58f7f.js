!(function () {
  function t(e) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            }),
      t(e)
    )
  }
  function e() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e =
      function () {
        return r
      }
    var n,
      r = {},
      a = Object.prototype,
      o = a.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      c = u.iterator || '@@iterator',
      l = u.asyncIterator || '@@asyncIterator',
      s = u.toStringTag || '@@toStringTag'
    function f(t, e, n) {
      return (
        Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        t[e]
      )
    }
    try {
      f({}, '')
    } catch (n) {
      f = function (t, e, n) {
        return (t[e] = n)
      }
    }
    function d(t, e, n, r) {
      var a = e && e.prototype instanceof w ? e : w,
        o = Object.create(a.prototype),
        u = new P(r || [])
      return (i(o, '_invoke', { value: E(t, n, u) }), o)
    }
    function v(t, e, n) {
      try {
        return { type: 'normal', arg: t.call(e, n) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    r.wrap = d
    var p = 'suspendedStart',
      h = 'suspendedYield',
      y = 'executing',
      g = 'completed',
      m = {}
    function w() {}
    function x() {}
    function b() {}
    var L = {}
    f(L, c, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      k = _ && _(_(G([])))
    k && k !== a && o.call(k, c) && (L = k)
    var S = (b.prototype = w.prototype = Object.create(L))
    function C(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        f(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function j(e, n) {
      function r(a, i, u, c) {
        var l = v(e[a], e, i)
        if ('throw' !== l.type) {
          var s = l.arg,
            f = s.value
          return f && 'object' == t(f) && o.call(f, '__await')
            ? n.resolve(f.__await).then(
                function (t) {
                  r('next', t, u, c)
                },
                function (t) {
                  r('throw', t, u, c)
                }
              )
            : n.resolve(f).then(
                function (t) {
                  ;((s.value = t), u(s))
                },
                function (t) {
                  return r('throw', t, u, c)
                }
              )
        }
        c(l.arg)
      }
      var a
      i(this, '_invoke', {
        value: function (t, e) {
          function o() {
            return new n(function (n, a) {
              r(t, e, n, a)
            })
          }
          return (a = a ? a.then(o, o) : o())
        }
      })
    }
    function E(t, e, r) {
      var a = p
      return function (o, i) {
        if (a === y) throw new Error('Generator is already running')
        if (a === g) {
          if ('throw' === o) throw i
          return { value: n, done: !0 }
        }
        for (r.method = o, r.arg = i; ; ) {
          var u = r.delegate
          if (u) {
            var c = O(u, r)
            if (c) {
              if (c === m) continue
              return c
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === p) throw ((a = g), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = y
          var l = v(t, e, r)
          if ('normal' === l.type) {
            if (((a = r.done ? g : h), l.arg === m)) continue
            return { value: l.arg, done: r.done }
          }
          'throw' === l.type && ((a = g), (r.method = 'throw'), (r.arg = l.arg))
        }
      }
    }
    function O(t, e) {
      var r = e.method,
        a = t.iterator[r]
      if (a === n)
        return (
          (e.delegate = null),
          ('throw' === r &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = n), O(t, e), 'throw' === e.method)) ||
            ('return' !== r &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          m
        )
      var o = v(a, t.iterator, e.arg)
      if ('throw' === o.type) return ((e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), m)
      var i = o.arg
      return i
        ? i.done
          ? ((e[t.resultName] = i.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
            (e.delegate = null),
            m)
          : i
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          m)
    }
    function T(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function I(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function P(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(T, this), this.reset(!0))
    }
    function G(e) {
      if (e || '' === e) {
        var r = e[c]
        if (r) return r.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var a = -1,
            i = function t() {
              for (; ++a < e.length; ) if (o.call(e, a)) return ((t.value = e[a]), (t.done = !1), t)
              return ((t.value = n), (t.done = !0), t)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(t(e) + ' is not iterable')
    }
    return (
      (x.prototype = b),
      i(S, 'constructor', { value: b, configurable: !0 }),
      i(b, 'constructor', { value: x, configurable: !0 }),
      (x.displayName = f(b, s, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor
        return !!e && (e === x || 'GeneratorFunction' === (e.displayName || e.name))
      }),
      (r.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, b)
            : ((t.__proto__ = b), f(t, s, 'GeneratorFunction')),
          (t.prototype = Object.create(S)),
          t
        )
      }),
      (r.awrap = function (t) {
        return { __await: t }
      }),
      C(j.prototype),
      f(j.prototype, l, function () {
        return this
      }),
      (r.AsyncIterator = j),
      (r.async = function (t, e, n, a, o) {
        void 0 === o && (o = Promise)
        var i = new j(d(t, e, n, a), o)
        return r.isGeneratorFunction(e)
          ? i
          : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
      }),
      C(S),
      f(S, s, 'Generator'),
      f(S, c, function () {
        return this
      }),
      f(S, 'toString', function () {
        return '[object Generator]'
      }),
      (r.keys = function (t) {
        var e = Object(t),
          n = []
        for (var r in e) n.push(r)
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop()
              if (r in e) return ((t.value = r), (t.done = !1), t)
            }
            return ((t.done = !0), t)
          }
        )
      }),
      (r.values = G),
      (P.prototype = {
        constructor: P,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(I),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
        },
        stop: function () {
          this.done = !0
          var t = this.tryEntries[0].completion
          if ('throw' === t.type) throw t.arg
          return this.rval
        },
        dispatchException: function (t) {
          if (this.done) throw t
          var e = this
          function r(r, a) {
            return (
              (u.type = 'throw'),
              (u.arg = t),
              (e.next = r),
              a && ((e.method = 'next'), (e.arg = n)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              u = i.completion
            if ('root' === i.tryLoc) return r('end')
            if (i.tryLoc <= this.prev) {
              var c = o.call(i, 'catchLoc'),
                l = o.call(i, 'finallyLoc')
              if (c && l) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              } else if (c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && o.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var a = r
              break
            }
          }
          a &&
            ('break' === t || 'continue' === t) &&
            a.tryLoc <= e &&
            e <= a.finallyLoc &&
            (a = null)
          var i = a ? a.completion : {}
          return (
            (i.type = t),
            (i.arg = e),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), m) : this.complete(i)
          )
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            m
          )
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.finallyLoc === t) return (this.complete(n.completion, n.afterLoc), I(n), m)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.tryLoc === t) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                I(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, r) {
          return (
            (this.delegate = { iterator: G(t), resultName: e, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            m
          )
        }
      }),
      r
    )
  }
  function n(t, e, n, r, a, o, i) {
    try {
      var u = t[o](i),
        c = u.value
    } catch (l) {
      return void n(l)
    }
    u.done ? e(c) : Promise.resolve(c).then(r, a)
  }
  function r(t) {
    return function () {
      var e = this,
        r = arguments
      return new Promise(function (a, o) {
        var i = t.apply(e, r)
        function u(t) {
          n(i, a, o, u, c, 'next', t)
        }
        function c(t) {
          n(i, a, o, u, c, 'throw', t)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-31ac821a.js',
      './function-call-legacy-0193ae7c.js',
      './index-legacy-0fcb45ef.js',
      './function-call-legacy-ae1bc7d7.js',
      './index-legacy-05e48c13.js',
      './index-legacy-7185b9ec.js',
      './index-legacy-d4b804d0.js',
      './use-placeholder-legacy-48aedce4.js',
      './use-route-legacy-d64f6436.js',
      './element-legacy-e7b6e573.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (t, n) {
      'use strict'
      var a, o, i, u, c, l, s, f, d, v, p, h, y, g, m, w, x, b, L, _, k, S, C, j, E, O, T, I, P
      return {
        setters: [
          function (t) {
            ;((a = t.y),
              (o = t.aw),
              (i = t.aq),
              (u = t.r),
              (c = t.b),
              (l = t.f),
              (s = t.h),
              (f = t.G),
              (d = t.H),
              (v = t.L),
              (p = t.u),
              (h = t.K),
              (y = t.N),
              (g = t.M),
              (m = t.i))
          },
          function (t) {
            ;((w = t.c), (x = t.a), (b = t.p), (L = t.g))
          },
          function (t) {
            ;((_ = t.s), (k = t.C), (S = t.a))
          },
          function (t) {
            C = t.w
          },
          function (t) {
            ;((j = t.L), (E = t.a))
          },
          function (t) {
            ;((O = t.C), (T = t.B))
          },
          function (t) {
            I = t.T
          },
          function (t) {
            P = t._
          },
          null,
          null,
          null,
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '@charset "UTF-8";.mobile-instance-detail[data-v-8892d451]{background-color:#f7f8fa;padding-bottom:100px}.mobile-instance-detail .action-buttons[data-v-8892d451]{margin:16px}.mobile-instance-detail .action-buttons .secondary-actions[data-v-8892d451]{margin-top:12px;display:flex;gap:8px}.mobile-instance-detail .action-buttons .secondary-actions .van-button[data-v-8892d451]{flex:1}.mobile-instance-detail .van-grid[data-v-8892d451]{margin:16px 0}.mobile-instance-detail .van-grid[data-v-8892d451] .van-grid-item__content{background-color:#fff}@media (min-width: 821px){.mobile-instance-detail[data-v-8892d451]{display:none}}\n'),
            document.head.appendChild(n),
            C(_))
          var G = { class: 'mobile-instance-detail' },
            N = { key: 2, class: 'action-buttons' },
            z = { class: 'secondary-actions' },
            D = a({
              __name: 'InstanceDetail',
              setup: function (t) {
                var n = o(),
                  a = i(),
                  _ = u(n.params.id),
                  C = u({
                    padCode: _.value,
                    padStatus: 10,
                    padIp: '192.168.1.100',
                    record: { note: '', createTime: new Date().toISOString() }
                  }),
                  P = u(!1),
                  D = u(!1),
                  F = u(!1),
                  B = u(!1)
                u(!1)
                var M = function (t) {
                    return (
                      {
                        10: '运行中',
                        11: '重启中',
                        12: '重置中',
                        13: '升级中',
                        14: '异常',
                        15: '未就绪',
                        16: '备份中',
                        17: '恢复数据中',
                        18: '关机',
                        19: '关机中',
                        20: '开机中',
                        21: '关机失败',
                        22: '开机失败',
                        23: '删除中',
                        24: '删除失败',
                        25: '已删除',
                        26: '克隆中'
                      }[t] || '未知('.concat(t, ')')
                    )
                  },
                  A = function (t) {
                    return t ? ''.concat((t / 1073741824).toFixed(2), ' GB') : '--'
                  },
                  H = (function () {
                    var t = r(
                      e().mark(function t() {
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (D.value = !0),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    new Promise(function (t) {
                                      return setTimeout(t, 1e3)
                                    })
                                  )
                                case 4:
                                  ;(E('正在连接云机...'),
                                    a.push({
                                      name: 'mobileConnectCloudHost',
                                      params: { id: C.value.padCode }
                                    }),
                                    (t.next = 11))
                                  break
                                case 8:
                                  ;((t.prev = 8), (t.t0 = t.catch(1)), E('连接失败'))
                                case 11:
                                  return ((t.prev = 11), (D.value = !1), t.finish(11))
                                case 14:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[1, 8, 11, 14]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })(),
                  U = (function () {
                    var t = r(
                      e().mark(function t() {
                        var n, r
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    S({
                                      title: '确认启动',
                                      message: '确定要启动这个实例吗？',
                                      confirmButtonText: '启动',
                                      cancelButtonText: '取消'
                                    })
                                  )
                                case 2:
                                  return (
                                    (F.value = !0),
                                    (t.prev = 3),
                                    (t.next = 6),
                                    w({ padCodes: [C.value.padCode] })
                                  )
                                case 6:
                                  if (!((n = t.sent).data.failList && n.data.failList.length > 0)) {
                                    t.next = 12
                                    break
                                  }
                                  ;((r = n.data.failList.find(function (t) {
                                    return t.padCode === C.value.padCode
                                  })),
                                    E(r ? ''.concat(r.padCode, ': ').concat(r.errMsg) : '启动失败'),
                                    (t.next = 15))
                                  break
                                case 12:
                                  return (E('实例启动成功'), (t.next = 15), q())
                                case 15:
                                  t.next = 21
                                  break
                                case 17:
                                  ;((t.prev = 17),
                                    (t.t0 = t.catch(3)),
                                    console.error(t.t0),
                                    E('启动失败'))
                                case 21:
                                  return ((t.prev = 21), (F.value = !1), t.finish(21))
                                case 24:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[3, 17, 21, 24]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })(),
                  Y = (function () {
                    var t = r(
                      e().mark(function t() {
                        var n, r
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    S({
                                      title: '确认停止',
                                      message: '确定要停止这个实例吗？',
                                      confirmButtonText: '停止',
                                      cancelButtonText: '取消'
                                    })
                                  )
                                case 2:
                                  return (
                                    (B.value = !0),
                                    (t.prev = 3),
                                    (t.next = 6),
                                    x({ padCodes: [C.value.padCode] })
                                  )
                                case 6:
                                  if (!((n = t.sent).data.failList && n.data.failList.length > 0)) {
                                    t.next = 12
                                    break
                                  }
                                  ;((r = n.data.failList.find(function (t) {
                                    return t.padCode === C.value.padCode
                                  })),
                                    E(r ? ''.concat(r.padCode, ': ').concat(r.errMsg) : '停止失败'),
                                    (t.next = 15))
                                  break
                                case 12:
                                  return (E('实例停止成功'), (t.next = 15), q())
                                case 15:
                                  t.next = 21
                                  break
                                case 17:
                                  ;((t.prev = 17),
                                    (t.t0 = t.catch(3)),
                                    console.error(t.t0),
                                    E('停止失败'))
                                case 21:
                                  return ((t.prev = 21), (B.value = !1), t.finish(21))
                                case 24:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[3, 17, 21, 24]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })(),
                  q = (function () {
                    var t = r(
                      e().mark(function t() {
                        var n, r, o, i, u
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (P.value = !0),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    b({ padCodes: [_.value] })
                                  )
                                case 4:
                                  if (
                                    ((r = t.sent),
                                    !(
                                      (null === (n = r.data) ||
                                      void 0 === n ||
                                      null === (n = n.pageData) ||
                                      void 0 === n
                                        ? void 0
                                        : n.length) > 0
                                    ))
                                  ) {
                                    t.next = 14
                                    break
                                  }
                                  return (
                                    (i = r.data.pageData[0]),
                                    (t.next = 9),
                                    L({ page: 1, pageSize: 1, padCode: _.value })
                                  )
                                case 9:
                                  ;((u = t.sent),
                                    (null === (o = u.data) ||
                                    void 0 === o ||
                                    null === (o = o.data) ||
                                    void 0 === o
                                      ? void 0
                                      : o.length) > 0 && (i.record = u.data.data[0]),
                                    (C.value = i),
                                    (t.next = 16))
                                  break
                                case 14:
                                  ;(E('实例不存在'), a.back())
                                case 16:
                                  t.next = 22
                                  break
                                case 18:
                                  ;((t.prev = 18),
                                    (t.t0 = t.catch(1)),
                                    E('加载失败'),
                                    console.error('加载实例详情失败:', t.t0))
                                case 22:
                                  return ((t.prev = 22), (P.value = !1), t.finish(22))
                                case 25:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[1, 18, 22, 25]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                return (
                  c(function () {
                    q()
                  }),
                  function (t, e) {
                    return (
                      l(),
                      s('div', G, [
                        P.value
                          ? (l(),
                            f(
                              p(j),
                              { key: 0, size: '24px', vertical: '' },
                              {
                                default: d(function () {
                                  return [v('加载中...')]
                                }),
                                _: 1
                              }
                            ))
                          : h('', !0),
                        P.value
                          ? h('', !0)
                          : (l(),
                            f(
                              p(k),
                              { key: 1, title: '基本信息' },
                              {
                                default: d(function () {
                                  var t, e
                                  return [
                                    y(
                                      p(O),
                                      { title: '实例编号', value: C.value.padCode },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      { title: '镜像ID', value: C.value.imageId || '--' },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      { title: '实例规格', value: C.value.deviceLevel || '--' },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      {
                                        title: '屏幕布局编码',
                                        value: C.value.screenLayoutCode || '--'
                                      },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      { title: '状态' },
                                      {
                                        value: d(function () {
                                          return [
                                            y(
                                              p(I),
                                              {
                                                type:
                                                  ((t = C.value.padStatus),
                                                  {
                                                    10: 'success',
                                                    11: 'warning',
                                                    12: 'warning',
                                                    13: 'warning',
                                                    14: 'danger',
                                                    15: 'info',
                                                    16: 'warning',
                                                    17: 'warning',
                                                    18: 'danger',
                                                    19: 'warning',
                                                    20: 'warning',
                                                    21: 'danger',
                                                    22: 'danger',
                                                    23: 'warning',
                                                    24: 'danger',
                                                    25: 'info',
                                                    26: 'warning'
                                                  }[t] || 'default'),
                                                size: 'medium'
                                              },
                                              {
                                                default: d(function () {
                                                  return [v(g(M(C.value.padStatus)), 1)]
                                                }),
                                                _: 1
                                              },
                                              8,
                                              ['type']
                                            )
                                          ]
                                          var t
                                        }),
                                        _: 1
                                      }
                                    ),
                                    y(
                                      p(O),
                                      { title: '物理机状态' },
                                      {
                                        value: d(function () {
                                          return [
                                            1 == C.value.deviceStatus
                                              ? (l(),
                                                f(
                                                  p(I),
                                                  { key: 0, type: 'success' },
                                                  {
                                                    default: d(function () {
                                                      return [v('在线')]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                              : (l(),
                                                f(
                                                  p(I),
                                                  { key: 1, type: 'info' },
                                                  {
                                                    default: d(function () {
                                                      return [v('离线')]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    y(
                                      p(O),
                                      { title: '实例在线状态' },
                                      {
                                        value: d(function () {
                                          return [
                                            1 == C.value.online
                                              ? (l(),
                                                f(
                                                  p(I),
                                                  { key: 0, type: 'success' },
                                                  {
                                                    default: d(function () {
                                                      return [v('在线')]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                              : (l(),
                                                f(
                                                  p(I),
                                                  { key: 1, type: 'info' },
                                                  {
                                                    default: d(function () {
                                                      return [v('离线')]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    y(
                                      p(O),
                                      { title: '实例推流状态' },
                                      {
                                        value: d(function () {
                                          return [
                                            1 == C.value.streamStatus
                                              ? (l(),
                                                f(
                                                  p(I),
                                                  { key: 0, type: 'success' },
                                                  {
                                                    default: d(function () {
                                                      return [v('推流中')]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                              : (l(),
                                                f(
                                                  p(I),
                                                  { key: 1, type: 'info' },
                                                  {
                                                    default: d(function () {
                                                      return [v('空闲')]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    y(
                                      p(O),
                                      { title: 'IP地址', value: C.value.padIp || '--' },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      { title: '存储总容量', value: A(C.value.dataSize) },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      { title: '存储已使用容量', value: A(C.value.dataSizeUsed) },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      { title: '国家', value: C.value.countryCode || '--' },
                                      null,
                                      8,
                                      ['value']
                                    ),
                                    y(
                                      p(O),
                                      {
                                        title: '创建时间',
                                        value:
                                          ((e =
                                            null === (t = C.value.record) || void 0 === t
                                              ? void 0
                                              : t.createTime),
                                          e ? new Date(e).toLocaleString('zh-CN') : '--')
                                      },
                                      null,
                                      8,
                                      ['value']
                                    )
                                  ]
                                }),
                                _: 1
                              }
                            )),
                        P.value
                          ? h('', !0)
                          : (l(),
                            s('div', N, [
                              y(
                                p(T),
                                {
                                  type: 'primary',
                                  size: 'large',
                                  onClick: H,
                                  loading: D.value,
                                  disabled: 10 !== C.value.padStatus
                                },
                                {
                                  default: d(function () {
                                    return [
                                      v(g(10 === C.value.padStatus ? '连接云机' : '实例未运行'), 1)
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading', 'disabled']
                              ),
                              m('div', z, [
                                y(
                                  p(T),
                                  {
                                    type: 'warning',
                                    size: 'small',
                                    onClick: U,
                                    loading: F.value,
                                    disabled:
                                      10 === C.value.padStatus ||
                                      11 === C.value.padStatus ||
                                      21 === C.value.padStatus
                                  },
                                  {
                                    default: d(function () {
                                      return [v(' 启动 ')]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading', 'disabled']
                                ),
                                y(
                                  p(T),
                                  {
                                    type: 'default',
                                    size: 'small',
                                    onClick: Y,
                                    loading: B.value,
                                    disabled:
                                      18 === C.value.padStatus ||
                                      19 === C.value.padStatus ||
                                      21 === C.value.padStatus
                                  },
                                  {
                                    default: d(function () {
                                      return [v(' 停止 ')]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading', 'disabled']
                                )
                              ])
                            ]))
                      ])
                    )
                  }
                )
              }
            })
          t('default', P(D, [['__scopeId', 'data-v-8892d451']]))
        }
      }
    }
  )
})()
