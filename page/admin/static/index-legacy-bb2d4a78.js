!(function () {
  function e(e, t) {
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
  function t(t) {
    for (var r = 1; r < arguments.length; r++) {
      var a = null != arguments[r] ? arguments[r] : {}
      r % 2
        ? e(Object(a), !0).forEach(function (e) {
            n(t, e, a[e])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
          : e(Object(a)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
    }
    return t
  }
  function n(e, t, n) {
    var a
    return (
      (a = (function (e, t) {
        if ('object' != r(e) || !e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var a = n.call(e, t || 'default')
          if ('object' != r(a)) return a
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(t, 'string')),
      (t = 'symbol' == r(a) ? a : String(a)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    )
  }
  function r(e) {
    return (
      (r =
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
      r(e)
    )
  }
  function a() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ a =
      function () {
        return t
      }
    var e,
      t = {},
      n = Object.prototype,
      u = n.hasOwnProperty,
      l =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      o = 'function' == typeof Symbol ? Symbol : {},
      i = o.iterator || '@@iterator',
      s = o.asyncIterator || '@@asyncIterator',
      c = o.toStringTag || '@@toStringTag'
    function f(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      f({}, '')
    } catch (e) {
      f = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function d(e, t, n, r) {
      var a = t && t.prototype instanceof _ ? t : _,
        u = Object.create(a.prototype),
        o = new I(r || [])
      return (l(u, '_invoke', { value: U(e, n, o) }), u)
    }
    function m(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    t.wrap = d
    var p = 'suspendedStart',
      v = 'suspendedYield',
      g = 'executing',
      h = 'completed',
      y = {}
    function _() {}
    function b() {}
    function w() {}
    var x = {}
    f(x, i, function () {
      return this
    })
    var k = Object.getPrototypeOf,
      M = k && k(k(L([])))
    M && M !== n && u.call(M, i) && (x = M)
    var C = (w.prototype = _.prototype = Object.create(x))
    function V(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function S(e, t) {
      function n(a, l, o, i) {
        var s = m(e[a], e, l)
        if ('throw' !== s.type) {
          var c = s.arg,
            f = c.value
          return f && 'object' == r(f) && u.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, o, i)
                },
                function (e) {
                  n('throw', e, o, i)
                }
              )
            : t.resolve(f).then(
                function (e) {
                  ;((c.value = e), o(c))
                },
                function (e) {
                  return n('throw', e, o, i)
                }
              )
        }
        i(s.arg)
      }
      var a
      l(this, '_invoke', {
        value: function (e, r) {
          function u() {
            return new t(function (t, a) {
              n(e, r, t, a)
            })
          }
          return (a = a ? a.then(u, u) : u())
        }
      })
    }
    function U(t, n, r) {
      var a = p
      return function (u, l) {
        if (a === g) throw new Error('Generator is already running')
        if (a === h) {
          if ('throw' === u) throw l
          return { value: e, done: !0 }
        }
        for (r.method = u, r.arg = l; ; ) {
          var o = r.delegate
          if (o) {
            var i = $(o, r)
            if (i) {
              if (i === y) continue
              return i
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === p) throw ((a = h), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = g
          var s = m(t, n, r)
          if ('normal' === s.type) {
            if (((a = r.done ? h : v), s.arg === y)) continue
            return { value: s.arg, done: r.done }
          }
          'throw' === s.type && ((a = h), (r.method = 'throw'), (r.arg = s.arg))
        }
      }
    }
    function $(t, n) {
      var r = n.method,
        a = t.iterator[r]
      if (a === e)
        return (
          (n.delegate = null),
          ('throw' === r &&
            t.iterator.return &&
            ((n.method = 'return'), (n.arg = e), $(t, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'),
              (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          y
        )
      var u = m(a, t.iterator, n.arg)
      if ('throw' === u.type) return ((n.method = 'throw'), (n.arg = u.arg), (n.delegate = null), y)
      var l = u.arg
      return l
        ? l.done
          ? ((n[t.resultName] = l.value),
            (n.next = t.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
            (n.delegate = null),
            y)
          : l
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          y)
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
    function I(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(O, this), this.reset(!0))
    }
    function L(t) {
      if (t || '' === t) {
        var n = t[i]
        if (n) return n.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            l = function n() {
              for (; ++a < t.length; ) if (u.call(t, a)) return ((n.value = t[a]), (n.done = !1), n)
              return ((n.value = e), (n.done = !0), n)
            }
          return (l.next = l)
        }
      }
      throw new TypeError(r(t) + ' is not iterable')
    }
    return (
      (b.prototype = w),
      l(C, 'constructor', { value: w, configurable: !0 }),
      l(w, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = f(w, c, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), f(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(C)),
          e
        )
      }),
      (t.awrap = function (e) {
        return { __await: e }
      }),
      V(S.prototype),
      f(S.prototype, s, function () {
        return this
      }),
      (t.AsyncIterator = S),
      (t.async = function (e, n, r, a, u) {
        void 0 === u && (u = Promise)
        var l = new S(d(e, n, r, a), u)
        return t.isGeneratorFunction(n)
          ? l
          : l.next().then(function (e) {
              return e.done ? e.value : l.next()
            })
      }),
      V(C),
      f(C, c, 'Generator'),
      f(C, i, function () {
        return this
      }),
      f(C, 'toString', function () {
        return '[object Generator]'
      }),
      (t.keys = function (e) {
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
      (t.values = L),
      (I.prototype = {
        constructor: I,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(j),
            !t)
          )
            for (var n in this)
              't' === n.charAt(0) && u.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (t) {
          if (this.done) throw t
          var n = this
          function r(r, a) {
            return (
              (o.type = 'throw'),
              (o.arg = t),
              (n.next = r),
              a && ((n.method = 'next'), (n.arg = e)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var l = this.tryEntries[a],
              o = l.completion
            if ('root' === l.tryLoc) return r('end')
            if (l.tryLoc <= this.prev) {
              var i = u.call(l, 'catchLoc'),
                s = u.call(l, 'finallyLoc')
              if (i && s) {
                if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
                if (this.prev < l.finallyLoc) return r(l.finallyLoc)
              } else if (i) {
                if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
              } else {
                if (!s) throw new Error('try statement without catch or finally')
                if (this.prev < l.finallyLoc) return r(l.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && u.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
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
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = e),
            y
          )
        }
      }),
      t
    )
  }
  function u(e, t, n, r, a, u, l) {
    try {
      var o = e[u](l),
        i = o.value
    } catch (s) {
      return void n(s)
    }
    o.done ? t(i) : Promise.resolve(i).then(r, a)
  }
  function l(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (r, a) {
        var l = e.apply(t, n)
        function o(e) {
          u(l, r, a, o, i, 'next', e)
        }
        function i(e) {
          u(l, r, a, o, i, 'throw', e)
        }
        o(void 0)
      })
    }
  }
  System.register(
    [
      './element-legacy-e7b6e573.js',
      './index-legacy-d4b804d0.js',
      './index-legacy-ba7ec4d0.js',
      './useTableHeightFit-legacy-f881449c.js',
      './vue-legacy-7e5c1e5b.js',
      './QuotaManagementDialog-legacy-7929cb59.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, n) {
      'use strict'
      var u,
        o,
        i,
        s,
        c,
        f,
        d,
        m,
        p,
        v,
        g,
        h,
        y,
        _,
        b,
        w,
        x,
        k,
        M,
        C,
        V,
        S,
        U,
        $,
        O,
        j,
        I,
        L,
        q,
        E,
        T,
        P,
        N,
        F,
        R,
        D,
        A,
        K,
        z,
        B,
        G,
        Q,
        H,
        J,
        Y,
        W,
        X,
        Z,
        ee,
        te,
        ne
      return {
        setters: [
          function (e) {
            ;((u = e.x),
              (o = e.y),
              (i = e.E),
              (s = e.J),
              (c = e.K),
              (f = e.e),
              (d = e.k),
              (m = e.G))
          },
          function (e) {
            ;((p = e.h), (v = e.t), (g = e.v), (h = e.w), (y = e._), (_ = e.f))
          },
          function (e) {
            ;((b = e.c),
              (w = e.q),
              (x = e.a),
              (k = e.b),
              (M = e.u),
              (C = e.d),
              (V = e.e),
              (S = e.f),
              (U = e.r),
              ($ = e.i),
              (O = e.h))
          },
          function (e) {
            j = e.u
          },
          function (e) {
            ;((I = e.y),
              (L = e.r),
              (q = e.R),
              (E = e.a8),
              (T = e.f),
              (P = e.G),
              (N = e.H),
              (F = e.N),
              (R = e.L),
              (D = e.M),
              (A = e.u),
              (K = e.d),
              (z = e.ag),
              (B = e.I),
              (G = e.h),
              (Q = e.a0),
              (H = e.F),
              (J = e.A),
              (Y = e.ar),
              (W = e.as),
              (X = e.i),
              (Z = e.b),
              (ee = e.Q),
              (te = e.K))
          },
          function (e) {
            ne = e.Q
          },
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.image-row[data-v-93c375a8]{transition:all .3s ease}.image-row.dragging[data-v-93c375a8]{opacity:.5;background-color:#f0f9eb}.image-row.dragging .el-icon-rank[data-v-93c375a8]:before{color:#67c23a}.stats-container[data-v-e785553f],.user-management[data-v-2a4e9338]{padding:20px}.operation-column[data-v-2a4e9338]{z-index:1000;position:relative;background:white}\n'),
            document.head.appendChild(n))
          var re = I({
              __name: 'AddUserDialog',
              props: { visible: { type: Boolean, default: !1 } },
              emits: ['update:visible', 'success'],
              setup: function (e, t) {
                var n = t.emit,
                  r = p().t,
                  s = n,
                  c = L({
                    username: '',
                    password: '',
                    user_alias: '',
                    ak: '',
                    sk: '',
                    xhost: 'openapi-hk.armcloud.net',
                    sec_code: ''
                  }),
                  f = q({
                    username: [
                      {
                        required: !0,
                        message: r('userManagement.usernameRequired'),
                        trigger: 'blur'
                      }
                    ],
                    password: [
                      {
                        required: !0,
                        message: r('userManagement.passwordRequired'),
                        trigger: 'blur'
                      }
                    ],
                    user_alias: [
                      {
                        required: !0,
                        message: r('userManagement.userAliasRequired'),
                        trigger: 'blur'
                      }
                    ],
                    ak: [
                      { required: !0, message: r('userManagement.appKeyRequired'), trigger: 'blur' }
                    ],
                    sk: [
                      {
                        required: !0,
                        message: r('userManagement.appSecretRequired'),
                        trigger: 'blur'
                      }
                    ],
                    xhost: [
                      { required: !0, message: r('userManagement.xhostRequired'), trigger: 'blur' }
                    ],
                    sec_code: [
                      {
                        required: !0,
                        message: r('userManagement.secCodeRequired'),
                        trigger: 'blur'
                      }
                    ]
                  }),
                  d = L(),
                  m = L('password'),
                  v = L('password'),
                  g = L('password'),
                  h = L(!1),
                  y = function () {
                    m.value = 'password' === m.value ? 'text' : 'password'
                  },
                  _ = function () {
                    v.value = 'password' === v.value ? 'text' : 'password'
                  },
                  w = function () {
                    g.value = 'password' === g.value ? 'text' : 'password'
                  },
                  x = (function () {
                    var e = l(
                      a().mark(function e() {
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  d.value.validate(
                                    (function () {
                                      var e = l(
                                        a().mark(function e(t) {
                                          return a().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (!t) {
                                                      e.next = 17
                                                      break
                                                    }
                                                    return (
                                                      (h.value = !0),
                                                      (e.prev = 2),
                                                      (e.next = 5),
                                                      b(c.value)
                                                    )
                                                  case 5:
                                                    ;(s('update:visible', !1),
                                                      s('success'),
                                                      i.success(
                                                        r('userManagement.createUserSuccess')
                                                      ),
                                                      (e.next = 14))
                                                    break
                                                  case 10:
                                                    ;((e.prev = 10),
                                                      (e.t0 = e.catch(2)),
                                                      console.error(e.t0),
                                                      i.error(r('userManagement.createUserFailed')))
                                                  case 14:
                                                    return (
                                                      (e.prev = 14),
                                                      (h.value = !1),
                                                      e.finish(14)
                                                    )
                                                  case 17:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            },
                                            e,
                                            null,
                                            [[2, 10, 14, 17]]
                                          )
                                        })
                                      )
                                      return function (t) {
                                        return e.apply(this, arguments)
                                      }
                                    })()
                                  )
                                )
                              case 2:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (t, n) {
                  var a = E('el-input'),
                    l = E('el-form-item'),
                    i = E('el-icon'),
                    s = E('el-form'),
                    p = E('el-button'),
                    b = E('el-dialog')
                  return (
                    T(),
                    P(
                      b,
                      {
                        'model-value': e.visible,
                        title: A(r)('userManagement.addUserDialogTitle'),
                        width: '500px',
                        'onUpdate:modelValue':
                          n[8] ||
                          (n[8] = function (e) {
                            return t.$emit('update:visible', e)
                          })
                      },
                      {
                        footer: N(function () {
                          return [
                            F(
                              p,
                              {
                                onClick:
                                  n[7] ||
                                  (n[7] = function (e) {
                                    return t.$emit('update:visible', !1)
                                  })
                              },
                              {
                                default: N(function () {
                                  return [R(D(A(r)('common.cancel')), 1)]
                                }),
                                _: 1
                              }
                            ),
                            F(
                              p,
                              { type: 'primary', onClick: x, loading: h.value },
                              {
                                default: N(function () {
                                  return [R(D(A(r)('common.save')), 1)]
                                }),
                                _: 1
                              },
                              8,
                              ['loading']
                            )
                          ]
                        }),
                        default: N(function () {
                          return [
                            F(
                              s,
                              {
                                ref_key: 'formRef',
                                ref: d,
                                model: c.value,
                                rules: f,
                                'label-width': '100px'
                              },
                              {
                                default: N(function () {
                                  return [
                                    F(
                                      l,
                                      { label: A(r)('userManagement.username'), prop: 'username' },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.username,
                                                'onUpdate:modelValue':
                                                  n[0] ||
                                                  (n[0] = function (e) {
                                                    return (c.value.username = e)
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
                                    F(
                                      l,
                                      { label: A(r)('userManagement.password'), prop: 'password' },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.password,
                                                'onUpdate:modelValue':
                                                  n[1] ||
                                                  (n[1] = function (e) {
                                                    return (c.value.password = e)
                                                  }),
                                                type: m.value
                                              },
                                              {
                                                suffix: N(function () {
                                                  return [
                                                    F(
                                                      i,
                                                      { style: { cursor: 'pointer' }, onClick: y },
                                                      {
                                                        default: N(function () {
                                                          return [
                                                            'password' === m.value
                                                              ? (T(), P(A(u), { key: 0 }))
                                                              : (T(), P(A(o), { key: 1 }))
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
                                              ['modelValue', 'type']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['label']
                                    ),
                                    F(
                                      l,
                                      {
                                        label: A(r)('userManagement.userAlias'),
                                        prop: 'user_alias'
                                      },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.user_alias,
                                                'onUpdate:modelValue':
                                                  n[2] ||
                                                  (n[2] = function (e) {
                                                    return (c.value.user_alias = e)
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
                                    F(
                                      l,
                                      { label: A(r)('userManagement.appKey'), prop: 'ak' },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.ak,
                                                'onUpdate:modelValue':
                                                  n[3] ||
                                                  (n[3] = function (e) {
                                                    return (c.value.ak = e)
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
                                    F(
                                      l,
                                      { label: A(r)('userManagement.appSecret'), prop: 'sk' },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.sk,
                                                'onUpdate:modelValue':
                                                  n[4] ||
                                                  (n[4] = function (e) {
                                                    return (c.value.sk = e)
                                                  }),
                                                type: v.value
                                              },
                                              {
                                                suffix: N(function () {
                                                  return [
                                                    F(
                                                      i,
                                                      { style: { cursor: 'pointer' }, onClick: _ },
                                                      {
                                                        default: N(function () {
                                                          return [
                                                            'password' === v.value
                                                              ? (T(), P(A(u), { key: 0 }))
                                                              : (T(), P(A(o), { key: 1 }))
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
                                              ['modelValue', 'type']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['label']
                                    ),
                                    F(
                                      l,
                                      { label: A(r)('userManagement.xhost') },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.xhost,
                                                'onUpdate:modelValue':
                                                  n[5] ||
                                                  (n[5] = function (e) {
                                                    return (c.value.xhost = e)
                                                  }),
                                                disabled: ''
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
                                    F(
                                      l,
                                      { label: A(r)('userManagement.secCode'), prop: 'sec_code' },
                                      {
                                        default: N(function () {
                                          return [
                                            F(
                                              a,
                                              {
                                                modelValue: c.value.sec_code,
                                                'onUpdate:modelValue':
                                                  n[6] ||
                                                  (n[6] = function (e) {
                                                    return (c.value.sec_code = e)
                                                  }),
                                                type: g.value
                                              },
                                              {
                                                suffix: N(function () {
                                                  return [
                                                    F(
                                                      i,
                                                      { style: { cursor: 'pointer' }, onClick: w },
                                                      {
                                                        default: N(function () {
                                                          return [
                                                            'password' === g.value
                                                              ? (T(), P(A(u), { key: 0 }))
                                                              : (T(), P(A(o), { key: 1 }))
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
                                              ['modelValue', 'type']
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
                              ['model', 'rules']
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
            ae = ['onDragstart', 'onDrop'],
            ue = (function (e) {
              return (Y('data-v-93c375a8'), (e = e()), W(), e)
            })(function () {
              return X(
                'i',
                {
                  class: 'el-icon-rank',
                  style: { 'margin-right': '10px', cursor: 'move', 'font-size': '16px' }
                },
                null,
                -1
              )
            }),
            le = I({
              __name: 'UserMetaInfoDialog',
              props: {
                visible: { type: Boolean, default: !1 },
                userId: { type: [String, Number], required: !0 }
              },
              emits: ['update:visible', 'success'],
              setup: function (e, n) {
                var u = n.emit,
                  o = p().t,
                  f = e,
                  d = u,
                  m = L({
                    group_id: 0,
                    group_name: '',
                    specificationCode: '',
                    cluster_name: '',
                    quotas: {},
                    padlist: '',
                    user_defaults: '',
                    user_alias: '',
                    images: [],
                    id: 0,
                    user_id: 0,
                    created_at: '',
                    active: !0
                  }),
                  y = q({
                    user_alias: [
                      {
                        required: !0,
                        message: o('userManagement.userAliasRequired'),
                        trigger: 'blur'
                      }
                    ],
                    specificationCode: [
                      {
                        required: !0,
                        message: o('userManagement.specCodeRequired'),
                        trigger: 'blur'
                      }
                    ],
                    cluster_name: [
                      {
                        required: !0,
                        message: o('userManagement.clusterNameRequired'),
                        trigger: 'blur'
                      }
                    ],
                    group_name: [
                      {
                        required: !0,
                        message: o('userManagement.groupNameRequired'),
                        trigger: 'blur'
                      }
                    ]
                  }),
                  _ = L(),
                  b = L(!1),
                  w = (function () {
                    var e = l(
                      a().mark(function e() {
                        var n, u, l
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), h({ user_id: f.userId }))
                                case 3:
                                  if (
                                    ((n = e.sent),
                                    (u = n.find(function (e) {
                                      return e.user_id === f.userId
                                    })) ||
                                      (u = {
                                        user_id: f.userId,
                                        group_id: 0,
                                        group_name: '',
                                        specificationCode: '',
                                        cluster_name: '',
                                        user_defaults: '',
                                        user_alias: '',
                                        images: [],
                                        active: !0
                                      }),
                                    u.images)
                                  )
                                    if ('string' == typeof u.images)
                                      try {
                                        ;((l = JSON.parse(u.images)),
                                          (u.images = Object.keys(l).map(function (e) {
                                            return { label: e, value: l[e] }
                                          })))
                                      } catch (a) {
                                        ;(console.error('解析images失败', a), (u.images = []))
                                      }
                                    else
                                      Array.isArray(u.images.ids)
                                        ? (u.images = u.images.ids.map(function (e) {
                                            return {
                                              label: e.label,
                                              value: e.value,
                                              version: e.version
                                            }
                                          }))
                                        : 'object' !== r(u.images) ||
                                          Array.isArray(u.images) ||
                                          (u.images = Object.keys(u.images).map(function (e) {
                                            return { label: e, value: u.images[e] }
                                          }))
                                  else u.images = []
                                  ;((m.value = t(t({}, m.value), u)), (e.next = 14))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    i.error(o('userManagement.fetchUserMetaFailed')))
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
                  x = (function () {
                    var e = l(
                      a().mark(function e() {
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  _.value.validate(
                                    (function () {
                                      var e = l(
                                        a().mark(function e(t) {
                                          var n
                                          return a().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (!t) {
                                                      e.next = 23
                                                      break
                                                    }
                                                    if (
                                                      ((b.value = !0),
                                                      (e.prev = 2),
                                                      (n = {
                                                        specificationCode:
                                                          m.value.specificationCode,
                                                        cluster_name: m.value.cluster_name,
                                                        user_alias: m.value.user_alias,
                                                        group_name: m.value.group_name,
                                                        images: { ids: m.value.images }
                                                      }),
                                                      !m.value.user_id)
                                                    ) {
                                                      e.next = 9
                                                      break
                                                    }
                                                    return ((e.next = 7), v(f.userId, n))
                                                  case 7:
                                                    e.next = 11
                                                    break
                                                  case 9:
                                                    return ((e.next = 11), g(n))
                                                  case 11:
                                                    ;(d('update:visible', !1),
                                                      d('success'),
                                                      i.success(
                                                        o('userManagement.saveUserMetaSuccess')
                                                      ),
                                                      (e.next = 20))
                                                    break
                                                  case 16:
                                                    ;((e.prev = 16),
                                                      (e.t0 = e.catch(2)),
                                                      console.error(e.t0),
                                                      i.error(
                                                        o('userManagement.saveUserMetaFailed')
                                                      ))
                                                  case 20:
                                                    return (
                                                      (e.prev = 20),
                                                      (b.value = !1),
                                                      e.finish(20)
                                                    )
                                                  case 23:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            },
                                            e,
                                            null,
                                            [[2, 16, 20, 23]]
                                          )
                                        })
                                      )
                                      return function (t) {
                                        return e.apply(this, arguments)
                                      }
                                    })()
                                  )
                                )
                              case 2:
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
                  k = function () {
                    m.value.images.push({ label: '', value: '' })
                  },
                  M = L(null),
                  C = function () {
                    M.value = null
                  }
                return (
                  K(
                    function () {
                      return f.visible
                    },
                    function (e) {
                      e && w()
                    },
                    { immediate: !0 }
                  ),
                  function (t, n) {
                    var r = E('el-input'),
                      a = E('el-form-item'),
                      u = E('el-icon'),
                      l = E('el-button'),
                      i = E('el-form'),
                      f = E('el-dialog'),
                      d = z('loading')
                    return (
                      T(),
                      P(
                        f,
                        {
                          'model-value': e.visible,
                          title: A(o)('userManagement.userConfigInfoTitle'),
                          width: '600px',
                          'onUpdate:modelValue':
                            n[6] ||
                            (n[6] = function (e) {
                              return t.$emit('update:visible', e)
                            })
                        },
                        {
                          footer: N(function () {
                            return [
                              F(
                                l,
                                {
                                  onClick:
                                    n[5] ||
                                    (n[5] = function (e) {
                                      return t.$emit('update:visible', !1)
                                    })
                                },
                                {
                                  default: N(function () {
                                    return [R(D(A(o)('common.cancel')), 1)]
                                  }),
                                  _: 1
                                }
                              ),
                              F(
                                l,
                                { type: 'primary', onClick: x, loading: b.value },
                                {
                                  default: N(function () {
                                    return [R(D(A(o)('common.save')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading']
                              )
                            ]
                          }),
                          default: N(function () {
                            return [
                              B(
                                (T(),
                                P(
                                  i,
                                  {
                                    ref_key: 'formRef',
                                    ref: _,
                                    model: m.value,
                                    rules: y,
                                    'label-width': '120px'
                                  },
                                  {
                                    default: N(function () {
                                      return [
                                        F(
                                          a,
                                          {
                                            label: A(o)('userManagement.userAlias'),
                                            prop: 'user_alias'
                                          },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  r,
                                                  {
                                                    modelValue: m.value.user_alias,
                                                    'onUpdate:modelValue':
                                                      n[0] ||
                                                      (n[0] = function (e) {
                                                        return (m.value.user_alias = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: A(o)(
                                                      'userManagement.enterUserAlias'
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
                                        F(
                                          a,
                                          {
                                            label: A(o)('userManagement.groupName'),
                                            prop: 'group_name'
                                          },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  r,
                                                  {
                                                    modelValue: m.value.group_name,
                                                    'onUpdate:modelValue':
                                                      n[1] ||
                                                      (n[1] = function (e) {
                                                        return (m.value.group_name = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: A(o)(
                                                      'userManagement.enterGroupName'
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
                                        F(
                                          a,
                                          {
                                            label: A(o)('userManagement.specCode'),
                                            prop: 'specificationCode'
                                          },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  r,
                                                  {
                                                    modelValue: m.value.specificationCode,
                                                    'onUpdate:modelValue':
                                                      n[2] ||
                                                      (n[2] = function (e) {
                                                        return (m.value.specificationCode = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: A(o)(
                                                      'userManagement.enterSpecCode'
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
                                        F(
                                          a,
                                          {
                                            label: A(o)('userManagement.clusterName'),
                                            prop: 'cluster_name'
                                          },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  r,
                                                  {
                                                    modelValue: m.value.cluster_name,
                                                    'onUpdate:modelValue':
                                                      n[3] ||
                                                      (n[3] = function (e) {
                                                        return (m.value.cluster_name = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: A(o)(
                                                      'userManagement.enterClusterName'
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
                                        F(
                                          a,
                                          { label: A(o)('userManagement.imageSelection') },
                                          {
                                            default: N(function () {
                                              return [
                                                (T(!0),
                                                G(
                                                  H,
                                                  null,
                                                  Q(m.value.images, function (e, t) {
                                                    return (
                                                      T(),
                                                      G(
                                                        'div',
                                                        {
                                                          key: t,
                                                          class: J([
                                                            'image-row',
                                                            { dragging: M.value === t }
                                                          ]),
                                                          style: {
                                                            'margin-bottom': '10px',
                                                            display: 'flex',
                                                            'align-items': 'center'
                                                          },
                                                          draggable: 'true',
                                                          onDragstart: function (e) {
                                                            return (function (e, t) {
                                                              e.dataTransfer &&
                                                                ((e.dataTransfer.effectAllowed =
                                                                  'move'),
                                                                (M.value = t))
                                                            })(e, t)
                                                          },
                                                          onDragover:
                                                            n[4] ||
                                                            (n[4] = function (e) {
                                                              return (
                                                                (t = e).preventDefault(),
                                                                void (
                                                                  t.dataTransfer &&
                                                                  (t.dataTransfer.dropEffect =
                                                                    'move')
                                                                )
                                                              )
                                                              var t
                                                            }),
                                                          onDrop: function (e) {
                                                            return (function (e, t) {
                                                              if (
                                                                (e.preventDefault(),
                                                                null !== M.value && M.value !== t)
                                                              ) {
                                                                var n = m.value.images[M.value]
                                                                ;(m.value.images.splice(M.value, 1),
                                                                  m.value.images.splice(t, 0, n),
                                                                  (M.value = t))
                                                              }
                                                            })(e, t)
                                                          },
                                                          onDragend: C
                                                        },
                                                        [
                                                          ue,
                                                          F(
                                                            r,
                                                            {
                                                              modelValue: e.label,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.label = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: A(o)(
                                                                'userManagement.enterImageName'
                                                              ),
                                                              style: {
                                                                'margin-right': '10px',
                                                                flex: '1'
                                                              }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          ),
                                                          F(
                                                            r,
                                                            {
                                                              modelValue: e.value,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.value = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: A(o)(
                                                                'userManagement.enterImageId'
                                                              ),
                                                              style: {
                                                                'margin-right': '10px',
                                                                flex: '1'
                                                              }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          ),
                                                          F(
                                                            r,
                                                            {
                                                              modelValue: e.version,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.version = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: A(o)(
                                                                'userManagement.enterImageVersion'
                                                              ),
                                                              style: {
                                                                'margin-right': '10px',
                                                                flex: '1'
                                                              }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          ),
                                                          F(
                                                            l,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  m.value.images.splice(e, 1)
                                                                })(t)
                                                              },
                                                              type: 'danger',
                                                              circle: ''
                                                            },
                                                            {
                                                              default: N(function () {
                                                                return [
                                                                  F(u, null, {
                                                                    default: N(function () {
                                                                      return [F(A(c))]
                                                                    }),
                                                                    _: 1
                                                                  })
                                                                ]
                                                              }),
                                                              _: 2
                                                            },
                                                            1032,
                                                            ['onClick']
                                                          )
                                                        ],
                                                        42,
                                                        ae
                                                      )
                                                    )
                                                  }),
                                                  128
                                                )),
                                                F(
                                                  l,
                                                  { onClick: k, type: 'primary' },
                                                  {
                                                    default: N(function () {
                                                      return [
                                                        F(u, null, {
                                                          default: N(function () {
                                                            return [F(A(s))]
                                                          }),
                                                          _: 1
                                                        }),
                                                        R(D(A(o)('userManagement.addImage')), 1)
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
                                          ['label']
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['model', 'rules']
                                )),
                                [[d, b.value]]
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
                )
              }
            }),
            oe = y(le, [['__scopeId', 'data-v-93c375a8']]),
            ie = I({
              __name: 'VirtualNumbersStatsDrawer',
              props: { visible: { type: Boolean }, userId: {} },
              emits: ['update:visible'],
              setup: function (e, n) {
                var r = n.emit,
                  u = p().t,
                  o = e,
                  s = r,
                  c = L({ total_count: 0, active_count: 0, inactive_count: 0 }),
                  f = L(!1),
                  d = function () {
                    var e = new Date(),
                      t = new Date()
                    return (
                      t.setMonth(t.getMonth() - 1),
                      { start_time: t.toISOString(), end_time: e.toISOString() }
                    )
                  },
                  m = (function () {
                    var e = l(
                      a().mark(function e() {
                        var n, r, l
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (o.userId) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return (
                                    (f.value = !0),
                                    (e.prev = 3),
                                    (n = d()),
                                    (r = t({ user_id: o.userId }, n)),
                                    (e.next = 8),
                                    w(r)
                                  )
                                case 8:
                                  ;((l = e.sent), (c.value = l.length ? l[0] : {}), (e.next = 16))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(3)),
                                    console.error(e.t0),
                                    i.error(u('userManagement.getStatsFailed')))
                                case 16:
                                  return ((e.prev = 16), (f.value = !1), e.finish(16))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 12, 16, 19]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  v = function () {
                    s('update:visible', !1)
                  }
                return (
                  K(
                    function () {
                      return o.visible
                    },
                    function (e) {
                      e && m()
                    },
                    { immediate: !0 }
                  ),
                  function (e, t) {
                    var n = E('el-descriptions-item'),
                      r = E('el-descriptions'),
                      a = E('el-drawer'),
                      l = z('loading')
                    return (
                      T(),
                      P(
                        a,
                        {
                          modelValue: o.visible,
                          'onUpdate:modelValue':
                            t[0] ||
                            (t[0] = function (e) {
                              return (o.visible = e)
                            }),
                          title: A(u)('userManagement.virtualNumbersStatsTitle'),
                          direction: 'rtl',
                          size: '500px',
                          'before-close': v
                        },
                        {
                          default: N(function () {
                            return [
                              B(
                                (T(),
                                G('div', null, [
                                  F(
                                    r,
                                    {
                                      title: A(u)('userManagement.statsInfo'),
                                      column: 1,
                                      border: ''
                                    },
                                    {
                                      default: N(function () {
                                        return [
                                          F(
                                            n,
                                            { label: A(u)('userManagement.totalCount') },
                                            {
                                              default: N(function () {
                                                return [R(D(c.value.total_requested || '0'), 1)]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          F(
                                            n,
                                            { label: A(u)('userManagement.activeCount') },
                                            {
                                              default: N(function () {
                                                return [R(D(c.value.total_active || '0'), 1)]
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          F(
                                            n,
                                            { label: A(u)('userManagement.receivedSmsCount') },
                                            {
                                              default: N(function () {
                                                return [R(D(c.value.total_completed || '0'), 1)]
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
                                ])),
                                [[l, f.value]]
                              )
                            ]
                          }),
                          _: 1
                        },
                        8,
                        ['modelValue', 'title']
                      )
                    )
                  }
                )
              }
            }),
            se = y(ie, [['__scopeId', 'data-v-e785553f']]),
            ce = { class: 'user-management' },
            fe = I({
              __name: 'index',
              setup: function (e) {
                var n = p().t,
                  r = L([]),
                  u = L(!1),
                  o = L(!1),
                  s = L(!1),
                  c = L(!1),
                  v = L(!1),
                  g = L(!1),
                  h = L(''),
                  y = L({ user_id: '', username: '', is_admin: !1, can_upload: !1 }),
                  b = L(!1),
                  w = L(!1),
                  I = L(),
                  q = L(null),
                  K = L(!1),
                  Q = L('view'),
                  H = L(null),
                  J = L({ owl_access_key: '', owl_secret_key: '' }),
                  Y = {
                    owl_access_key: [
                      { required: !1, message: n('userManagement.enterAccessKey'), trigger: 'blur' }
                    ],
                    owl_secret_key: [
                      { required: !1, message: n('userManagement.enterSecretKey'), trigger: 'blur' }
                    ]
                  },
                  W = L({ username: '', is_admin: null, is_reseller: null }),
                  X = L({ page: 1, pageSize: 10, total: 0 }),
                  ae = [
                    { text: n('userManagement.adminUser'), value: !0 },
                    { text: n('userManagement.regularUser'), value: !1 }
                  ],
                  ue = [
                    { text: n('userManagement.isReseller'), value: !0 },
                    { text: n('userManagement.notReseller'), value: !1 }
                  ],
                  le = j(),
                  ie = le.cTable,
                  fe = le.maxHeight,
                  de = le.handleGetTableHeight,
                  me = (function () {
                    var e = l(
                      a().mark(function e() {
                        var t, n
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (u.value = !0),
                                    (e.prev = 1),
                                    (t = {
                                      skip: 10 * (X.value.page - 1),
                                      limit: X.value.pageSize
                                    }),
                                    W.value.username.trim() &&
                                      (t.username = W.value.username.trim()),
                                    null !== W.value.is_admin && (t.is_admin = W.value.is_admin),
                                    null !== W.value.is_reseller &&
                                      (t.is_reseller = W.value.is_reseller),
                                    (e.next = 8),
                                    x(t)
                                  )
                                case 8:
                                  ;((n = e.sent),
                                    (r.value = n.items),
                                    (X.value.total = n.total),
                                    (e.next = 16))
                                  break
                                case 13:
                                  ;((e.prev = 13), (e.t0 = e.catch(1)), console.error(e.t0))
                                case 16:
                                  return ((e.prev = 16), (u.value = !1), e.finish(16))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 13, 16, 19]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  pe = (function () {
                    var e = l(
                      a().mark(function e(r) {
                        var u
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!r) {
                                    e.next = 15
                                    break
                                  }
                                  return ((e.prev = 1), (e.next = 4), k(r.id))
                                case 4:
                                  ;((u = e.sent),
                                    (y.value = t(t({}, u), {}, { user_id: u.id })),
                                    (e.next = 13))
                                  break
                                case 8:
                                  return (
                                    (e.prev = 8),
                                    (e.t0 = e.catch(1)),
                                    console.error(e.t0),
                                    i.error(n('userManagement.getUserDetailFailed')),
                                    e.abrupt('return')
                                  )
                                case 13:
                                  e.next = 16
                                  break
                                case 15:
                                  y.value = {
                                    user_id: '',
                                    username: '',
                                    is_admin: !1,
                                    can_upload: !1
                                  }
                                case 16:
                                  o.value = !0
                                case 17:
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
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ve = (function () {
                    var e = l(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((c.value = !0), (e.prev = 1), (e.next = 4), M(y.value))
                                case 4:
                                  ;((o.value = !1),
                                    i.success(n('userManagement.saveSuccess')),
                                    me(),
                                    (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(1)),
                                    console.error(e.t0),
                                    i.error(n('userManagement.saveFailed')))
                                case 13:
                                  return ((e.prev = 13), (c.value = !1), e.finish(13))
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
                  ge = (function () {
                    var e = l(
                      a().mark(function e(t) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    m.confirm(
                                      n('userManagement.confirmUpgradeToReseller'),
                                      n('userManagement.confirmUpgradeTitle'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        cancelButtonText: n('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), C(t, { is_reseller: !0 }))
                                case 5:
                                  ;(i.success(n('userManagement.upgradeSuccess')),
                                    me(),
                                    (e.next = 12))
                                  break
                                case 9:
                                  ;((e.prev = 9), (e.t0 = e.catch(0)), console.error(e.t0))
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
                  he = function () {
                    ;((H.value = null), (Q.value = 'create'), (K.value = !0))
                  },
                  ye = function () {
                    ;((K.value = !1), me())
                  },
                  _e = (function () {
                    var e = l(
                      a().mark(function e() {
                        var t
                        return a().wrap(
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
                                  if (q.value) {
                                    e.next = 10
                                    break
                                  }
                                  return (
                                    i.error(n('userManagement.noUserSelected')),
                                    e.abrupt('return')
                                  )
                                case 10:
                                  if (
                                    ((w.value = !0),
                                    (e.prev = 11),
                                    (t = {}),
                                    J.value.owl_access_key &&
                                      (t.owl_access_key = J.value.owl_access_key),
                                    J.value.owl_secret_key &&
                                      (t.owl_secret_key = J.value.owl_secret_key),
                                    0 !== Object.keys(t).length)
                                  ) {
                                    e.next = 18
                                    break
                                  }
                                  return (
                                    i.warning(n('userManagement.fillAtLeastOneKeyField')),
                                    e.abrupt('return')
                                  )
                                case 18:
                                  return ((e.next = 20), V(q.value.id, t))
                                case 20:
                                  ;(i.success(n('userManagement.setOwlKeysSuccess')),
                                    me(),
                                    xe(),
                                    (e.next = 29))
                                  break
                                case 25:
                                  ;((e.prev = 25),
                                    (e.t0 = e.catch(11)),
                                    console.error('设置代理密钥失败:', e.t0),
                                    i.error(n('userManagement.setOwlKeysFailed')))
                                case 29:
                                  return ((e.prev = 29), (w.value = !1), e.finish(29))
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
                  be = f(function () {
                    ;((X.value.page = 1), me())
                  }, 500),
                  we = function (e) {
                    ;(e.is_admin ? (W.value.is_admin = e.is_admin[0]) : (W.value.is_admin = null),
                      e.is_reseller
                        ? (W.value.is_reseller = e.is_reseller[0])
                        : (W.value.is_reseller = null),
                      (X.value.page = 1),
                      me())
                  },
                  xe = function () {
                    var e
                    ;((b.value = !1),
                      (q.value = null),
                      null === (e = I.value) || void 0 === e || e.resetFields(),
                      (J.value = { owl_access_key: '', owl_secret_key: '' }))
                  },
                  ke = (function () {
                    var e = l(
                      a().mark(function e(t) {
                        var r
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), S(t.username))
                                case 3:
                                  ;((r = e.sent),
                                    m.alert(
                                      ''
                                        .concat(r, '<br/>')
                                        .concat(n('userManagement.secCodeWarning')),
                                      n('userManagement.viewSecCode'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        type: 'warning',
                                        dangerouslyUseHTMLString: !0
                                      }
                                    ),
                                    (e.next = 11))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    i.error(n('userManagement.getSecCodeFailed')))
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
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Me = (function () {
                    var e = l(
                      a().mark(function e(t) {
                        var r, u
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    m.prompt(
                                      n('userManagement.enterNewSecCode'),
                                      n('userManagement.resetSecCode'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        cancelButtonText: n('common.cancel'),
                                        inputPattern: /^.{6,}$/,
                                        inputErrorMessage: n('userManagement.secCodeLengthError')
                                      }
                                    )
                                  )
                                case 3:
                                  return ((r = e.sent), (u = r.value), (e.next = 7), U(t.id, u))
                                case 7:
                                  ;(i.success(n('userManagement.resetSecCodeSuccess')),
                                    (e.next = 13))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      'close' !== e.t0 &&
                                      (console.error(e.t0),
                                      i.error(n('userManagement.resetSecCodeFailed'))))
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
                  Ce = (function () {
                    var e = l(
                      a().mark(function e(t) {
                        var r
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    m.confirm(
                                      n('userManagement.confirmSwitchUser'),
                                      n('userManagement.switchUser'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        cancelButtonText: n('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), $(t))
                                case 5:
                                  ;((r = e.sent), _().changeUser(r.access_token), (e.next = 13))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      'close' !== e.t0 &&
                                      (console.error(e.t0),
                                      i.error(n('userManagement.switchUserFailed'))))
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
                  Ve = (function () {
                    var e = l(
                      a().mark(function e(t) {
                        var r, u
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (r = !t.can_create_instances),
                                    (u = n(r ? 'userManagement.enable' : 'userManagement.disable')),
                                    (e.next = 5),
                                    m.confirm(
                                      n('userManagement.confirmToggleInstanceCreation', {
                                        action: u,
                                        username: t.username
                                      }),
                                      n('userManagement.toggleInstanceCreation'),
                                      {
                                        confirmButtonText: n('common.confirm'),
                                        cancelButtonText: n('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 5:
                                  return ((e.next = 7), O(t.id, { can_create_instances: r }))
                                case 7:
                                  ;(i.success(n('userManagement.toggleInstanceCreationSuccess')),
                                    me(),
                                    (e.next = 14))
                                  break
                                case 11:
                                  ;((e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      'close' !== e.t0 &&
                                      (console.error(e.t0),
                                      i.error(n('userManagement.toggleInstanceCreationFailed'))))
                                case 14:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 11]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                return (
                  Z(function () {
                    ;(me(), de(), window.addEventListener('resize', de))
                  }),
                  ee(function () {
                    window.removeEventListener('resize', de)
                  }),
                  function (e, t) {
                    var n = E('el-button'),
                      a = E('el-input'),
                      l = E('PageBanner'),
                      i = E('el-table-column'),
                      f = E('el-tag'),
                      m = E('el-icon'),
                      p = E('el-dropdown-item'),
                      _ = E('el-dropdown-menu'),
                      x = E('el-dropdown'),
                      k = E('el-table'),
                      M = E('el-pagination'),
                      C = E('el-form-item'),
                      V = E('el-form'),
                      S = E('el-dialog'),
                      U = z('loading')
                    return (
                      T(),
                      G('div', ce, [
                        F(
                          l,
                          { title: '' },
                          {
                            extra: N(function () {
                              return [
                                F(
                                  a,
                                  {
                                    modelValue: W.value.username,
                                    'onUpdate:modelValue':
                                      t[1] ||
                                      (t[1] = function (e) {
                                        return (W.value.username = e)
                                      }),
                                    placeholder: e.$t('userManagement.searchPlaceholder'),
                                    style: { width: '300px', 'margin-right': '10px' },
                                    clearable: '',
                                    onInput: A(be)
                                  },
                                  {
                                    append: N(function () {
                                      return [
                                        F(
                                          n,
                                          {
                                            onClick:
                                              t[0] ||
                                              (t[0] = function () {
                                                ;((W.value.username = ''), A(be)())
                                              })
                                          },
                                          {
                                            default: N(function () {
                                              return [R(D(e.$t('userManagement.clearSearch')), 1)]
                                            }),
                                            _: 1
                                          }
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue', 'placeholder', 'onInput']
                                ),
                                F(
                                  n,
                                  {
                                    type: 'primary',
                                    onClick:
                                      t[2] ||
                                      (t[2] = function (e) {
                                        return (s.value = !0)
                                      })
                                  },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('userManagement.addUser')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                F(
                                  n,
                                  { type: 'success', onClick: he },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('quotaManagement.createQuota')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                F(
                                  n,
                                  { icon: 'RefreshRight', onClick: me },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('userManagement.refresh')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        B(
                          (T(),
                          P(
                            k,
                            {
                              ref_key: 'cTable',
                              ref: ie,
                              data: r.value,
                              style: { width: '100%', 'margin-top': '20px' },
                              'max-height': A(fe),
                              onFilterChange: we
                            },
                            {
                              default: N(function () {
                                return [
                                  F(
                                    i,
                                    { prop: 'id', label: e.$t('userManagement.userId') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  F(
                                    i,
                                    { prop: 'username', label: e.$t('userManagement.username') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  F(
                                    i,
                                    {
                                      prop: 'is_admin',
                                      label: e.$t('userManagement.admin'),
                                      'column-key': 'is_admin',
                                      filters: ae,
                                      'filter-multiple': !1
                                    },
                                    {
                                      default: N(function (t) {
                                        var n = t.row
                                        return [
                                          F(
                                            f,
                                            { type: n.is_admin ? 'success' : 'info' },
                                            {
                                              default: N(function () {
                                                return [
                                                  R(
                                                    D(
                                                      n.is_admin
                                                        ? e.$t('userManagement.yes')
                                                        : e.$t('userManagement.no')
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
                                  F(
                                    i,
                                    {
                                      prop: 'is_reseller',
                                      label: e.$t('userManagement.reseller'),
                                      'column-key': 'is_reseller',
                                      filters: ue,
                                      'filter-multiple': !1
                                    },
                                    {
                                      default: N(function (t) {
                                        var n = t.row
                                        return [
                                          F(
                                            f,
                                            { type: n.is_reseller ? 'success' : 'info' },
                                            {
                                              default: N(function () {
                                                return [
                                                  R(
                                                    D(
                                                      n.is_reseller
                                                        ? e.$t('userManagement.yes')
                                                        : e.$t('userManagement.no')
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
                                  F(
                                    i,
                                    {
                                      prop: 'can_create_instances',
                                      label: e.$t('userManagement.instanceCreationPermission')
                                    },
                                    {
                                      default: N(function (t) {
                                        var n = t.row
                                        return [
                                          F(
                                            f,
                                            { type: n.can_create_instances ? 'success' : 'danger' },
                                            {
                                              default: N(function () {
                                                return [
                                                  R(
                                                    D(
                                                      n.can_create_instances
                                                        ? e.$t('userManagement.enable')
                                                        : e.$t('userManagement.disable')
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
                                  F(
                                    i,
                                    {
                                      prop: 'quota.max_launches_override',
                                      label: e.$t('userManagement.maxLaunchesOverride'),
                                      width: '120'
                                    },
                                    {
                                      default: N(function (e) {
                                        var t,
                                          n = e.row
                                        return [
                                          R(
                                            D(
                                              (null === (t = n.quota) || void 0 === t
                                                ? void 0
                                                : t.max_launches_override) || '-'
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
                                  F(
                                    i,
                                    {
                                      label: e.$t('userManagement.operations'),
                                      width: '500',
                                      fixed: 'right',
                                      'class-name': 'operation-column'
                                    },
                                    {
                                      default: N(function (t) {
                                        var r = t.row
                                        return [
                                          F(
                                            n,
                                            {
                                              type: 'primary',
                                              link: '',
                                              onClick: function (e) {
                                                return pe(r)
                                              }
                                            },
                                            {
                                              default: N(function () {
                                                return [R(D(e.$t('userManagement.edit')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          F(
                                            n,
                                            {
                                              type: r.can_create_instances ? 'danger' : 'success',
                                              link: '',
                                              onClick: function (e) {
                                                return Ve(r)
                                              }
                                            },
                                            {
                                              default: N(function () {
                                                return [
                                                  R(
                                                    D(
                                                      r.can_create_instances
                                                        ? e.$t(
                                                            'userManagement.disableInstanceCreation'
                                                          )
                                                        : e.$t(
                                                            'userManagement.enableInstanceCreation'
                                                          )
                                                    ),
                                                    1
                                                  )
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['type', 'onClick']
                                          ),
                                          F(
                                            n,
                                            {
                                              type: 'primary',
                                              link: '',
                                              onClick: function (e) {
                                                return (
                                                  (t = r),
                                                  (q.value = t),
                                                  (b.value = !0),
                                                  void (J.value = {
                                                    owl_access_key: t.owl_access_key || '',
                                                    owl_secret_key: t.owl_secret_key || ''
                                                  })
                                                )
                                                var t
                                              }
                                            },
                                            {
                                              default: N(function () {
                                                return [R(D(e.$t('userManagement.setOwlKeys')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          F(
                                            n,
                                            {
                                              type: 'info',
                                              link: '',
                                              onClick: function (e) {
                                                return (
                                                  (t = r),
                                                  (H.value = t),
                                                  (Q.value = 'view'),
                                                  void (K.value = !0)
                                                )
                                                var t
                                              }
                                            },
                                            {
                                              default: N(function () {
                                                return [R(D(e.$t('quotaManagement.viewQuota')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          F(
                                            n,
                                            {
                                              type: 'warning',
                                              link: '',
                                              onClick: function (e) {
                                                return (
                                                  (t = r),
                                                  (H.value = t),
                                                  (Q.value = 'edit'),
                                                  void (K.value = !0)
                                                )
                                                var t
                                              }
                                            },
                                            {
                                              default: N(function () {
                                                return [R(D(e.$t('quotaManagement.editQuota')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          F(
                                            x,
                                            null,
                                            {
                                              dropdown: N(function () {
                                                return [
                                                  F(
                                                    _,
                                                    null,
                                                    {
                                                      default: N(function () {
                                                        return [
                                                          F(
                                                            p,
                                                            {
                                                              onClick: function (e) {
                                                                return (
                                                                  (t = r.id),
                                                                  (h.value = t),
                                                                  void (v.value = !0)
                                                                )
                                                                var t
                                                              }
                                                            },
                                                            {
                                                              default: N(function () {
                                                                return [
                                                                  R(
                                                                    D(
                                                                      e.$t(
                                                                        'userManagement.userConfigInfo'
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
                                                          F(
                                                            p,
                                                            {
                                                              onClick: function () {
                                                                ;((h.value = r.id), (g.value = !0))
                                                              }
                                                            },
                                                            {
                                                              default: N(function () {
                                                                return [
                                                                  R(
                                                                    D(
                                                                      e.$t(
                                                                        'userManagement.virtualNumbersStats'
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
                                                          r.is_reseller
                                                            ? te('', !0)
                                                            : (T(),
                                                              P(
                                                                p,
                                                                {
                                                                  key: 0,
                                                                  onClick: function (e) {
                                                                    return ge(r.id)
                                                                  }
                                                                },
                                                                {
                                                                  default: N(function () {
                                                                    return [
                                                                      R(
                                                                        D(
                                                                          e.$t(
                                                                            'userManagement.upgradeToReseller'
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
                                                              )),
                                                          F(
                                                            p,
                                                            {
                                                              onClick: function (e) {
                                                                return ke(r)
                                                              }
                                                            },
                                                            {
                                                              default: N(function () {
                                                                return [
                                                                  R(
                                                                    D(
                                                                      e.$t(
                                                                        'userManagement.viewSecCode'
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
                                                          F(
                                                            p,
                                                            {
                                                              onClick: function (e) {
                                                                return Me(r)
                                                              }
                                                            },
                                                            {
                                                              default: N(function () {
                                                                return [
                                                                  R(
                                                                    D(
                                                                      e.$t(
                                                                        'userManagement.resetSecCode'
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
                                                          F(
                                                            p,
                                                            {
                                                              onClick: function (e) {
                                                                return Ce(r.id)
                                                              }
                                                            },
                                                            {
                                                              default: N(function () {
                                                                return [
                                                                  R(
                                                                    D(
                                                                      e.$t(
                                                                        'userManagement.switchUser'
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
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1024
                                                  )
                                                ]
                                              }),
                                              default: N(function () {
                                                return [
                                                  F(
                                                    n,
                                                    {
                                                      style: {
                                                        'margin-top': '3px',
                                                        'margin-left': '10px'
                                                      },
                                                      type: 'primary',
                                                      link: ''
                                                    },
                                                    {
                                                      default: N(function () {
                                                        return [
                                                          R(D(e.$t('userManagement.more')), 1),
                                                          F(
                                                            m,
                                                            { class: 'el-icon--right' },
                                                            {
                                                              default: N(function () {
                                                                return [F(A(d))]
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
                                              _: 2
                                            },
                                            1024
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
                          [[U, u.value]]
                        ),
                        F(
                          M,
                          {
                            'current-page': X.value.page,
                            'onUpdate:currentPage':
                              t[3] ||
                              (t[3] = function (e) {
                                return (X.value.page = e)
                              }),
                            'page-size': X.value.pageSize,
                            'onUpdate:pageSize':
                              t[4] ||
                              (t[4] = function (e) {
                                return (X.value.pageSize = e)
                              }),
                            total: X.value.total,
                            layout: 'total, sizes, prev, pager, next',
                            'page-sizes': [10, 20, 50, 100],
                            onCurrentChange: me,
                            onSizeChange: me,
                            style: { 'margin-top': '20px', 'text-align': 'right' }
                          },
                          null,
                          8,
                          ['current-page', 'page-size', 'total']
                        ),
                        F(
                          S,
                          {
                            modelValue: o.value,
                            'onUpdate:modelValue':
                              t[8] ||
                              (t[8] = function (e) {
                                return (o.value = e)
                              }),
                            title: e.$t('userManagement.userInfo'),
                            width: '500px'
                          },
                          {
                            footer: N(function () {
                              return [
                                F(
                                  n,
                                  {
                                    onClick:
                                      t[7] ||
                                      (t[7] = function (e) {
                                        return (o.value = !1)
                                      })
                                  },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                F(
                                  n,
                                  { type: 'primary', onClick: ve, loading: c.value },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('userManagement.save')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: N(function () {
                              return [
                                F(
                                  V,
                                  { model: y.value, 'label-width': '100px' },
                                  {
                                    default: N(function () {
                                      return [
                                        F(
                                          C,
                                          { label: e.$t('userManagement.username') },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  a,
                                                  {
                                                    modelValue: y.value.username,
                                                    'onUpdate:modelValue':
                                                      t[5] ||
                                                      (t[5] = function (e) {
                                                        return (y.value.username = e)
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
                                        F(
                                          C,
                                          { label: e.$t('userManagement.password') },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  a,
                                                  {
                                                    modelValue: y.value.password,
                                                    'onUpdate:modelValue':
                                                      t[6] ||
                                                      (t[6] = function (e) {
                                                        return (y.value.password = e)
                                                      }),
                                                    type: 'password'
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
                        F(
                          se,
                          {
                            visible: g.value,
                            'onUpdate:visible':
                              t[9] ||
                              (t[9] = function (e) {
                                return (g.value = e)
                              }),
                            'user-id': h.value
                          },
                          null,
                          8,
                          ['visible', 'user-id']
                        ),
                        F(
                          re,
                          {
                            visible: s.value,
                            'onUpdate:visible':
                              t[10] ||
                              (t[10] = function (e) {
                                return (s.value = e)
                              }),
                            onSuccess: me
                          },
                          null,
                          8,
                          ['visible']
                        ),
                        F(
                          oe,
                          {
                            visible: v.value,
                            'user-id': h.value,
                            'onUpdate:visible':
                              t[11] ||
                              (t[11] = function (e) {
                                return (v.value = e)
                              }),
                            onSuccess: me
                          },
                          null,
                          8,
                          ['visible', 'user-id']
                        ),
                        F(
                          S,
                          {
                            modelValue: b.value,
                            'onUpdate:modelValue':
                              t[14] ||
                              (t[14] = function (e) {
                                return (b.value = e)
                              }),
                            title: e.$t('userManagement.setOwlKeys'),
                            width: '500px'
                          },
                          {
                            footer: N(function () {
                              return [
                                F(
                                  n,
                                  { onClick: xe },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                F(
                                  n,
                                  { type: 'primary', onClick: _e, loading: w.value },
                                  {
                                    default: N(function () {
                                      return [R(D(e.$t('userManagement.save')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: N(function () {
                              return [
                                F(
                                  V,
                                  {
                                    ref_key: 'owlKeysFormRef',
                                    ref: I,
                                    model: J.value,
                                    rules: Y,
                                    'label-width': '120px'
                                  },
                                  {
                                    default: N(function () {
                                      return [
                                        F(
                                          C,
                                          {
                                            label: e.$t('userManagement.accessKey'),
                                            prop: 'owl_access_key'
                                          },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  a,
                                                  {
                                                    modelValue: J.value.owl_access_key,
                                                    'onUpdate:modelValue':
                                                      t[12] ||
                                                      (t[12] = function (e) {
                                                        return (J.value.owl_access_key = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'userManagement.enterAccessKey'
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
                                        F(
                                          C,
                                          {
                                            label: e.$t('userManagement.secretKey'),
                                            prop: 'owl_secret_key'
                                          },
                                          {
                                            default: N(function () {
                                              return [
                                                F(
                                                  a,
                                                  {
                                                    modelValue: J.value.owl_secret_key,
                                                    'onUpdate:modelValue':
                                                      t[13] ||
                                                      (t[13] = function (e) {
                                                        return (J.value.owl_secret_key = e)
                                                      }),
                                                    type: 'password',
                                                    placeholder: e.$t(
                                                      'userManagement.enterSecretKey'
                                                    ),
                                                    'show-password': ''
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
                        F(
                          ne,
                          {
                            visible: K.value,
                            mode: Q.value,
                            user: H.value,
                            'onUpdate:visible':
                              t[15] ||
                              (t[15] = function (e) {
                                return (K.value = e)
                              }),
                            onSuccess: ye
                          },
                          null,
                          8,
                          ['visible', 'mode', 'user']
                        )
                      ])
                    )
                  }
                )
              }
            })
          e('default', y(fe, [['__scopeId', 'data-v-2a4e9338']]))
        }
      }
    }
  )
})()
