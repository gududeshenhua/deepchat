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
      u = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      s = 'function' == typeof Symbol ? Symbol : {},
      l = s.iterator || '@@iterator',
      i = s.asyncIterator || '@@asyncIterator',
      c = s.toStringTag || '@@toStringTag'
    function d(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      d({}, '')
    } catch (t) {
      d = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, r) {
      var a = t && t.prototype instanceof y ? t : y,
        u = Object.create(a.prototype),
        s = new T(r || [])
      return (o(u, '_invoke', { value: S(e, n, s) }), u)
    }
    function p(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = f
    var m = 'suspendedStart',
      g = 'suspendedYield',
      v = 'executing',
      b = 'completed',
      h = {}
    function y() {}
    function w() {}
    function U() {}
    var _ = {}
    d(_, l, function () {
      return this
    })
    var x = Object.getPrototypeOf,
      M = x && x(x(P([])))
    M && M !== r && u.call(M, l) && (_ = M)
    var C = (U.prototype = y.prototype = Object.create(_))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function V(t, n) {
      function r(a, o, s, l) {
        var i = p(t[a], t, o)
        if ('throw' !== i.type) {
          var c = i.arg,
            d = c.value
          return d && 'object' == e(d) && u.call(d, '__await')
            ? n.resolve(d.__await).then(
                function (e) {
                  r('next', e, s, l)
                },
                function (e) {
                  r('throw', e, s, l)
                }
              )
            : n.resolve(d).then(
                function (e) {
                  ;((c.value = e), s(c))
                },
                function (e) {
                  return r('throw', e, s, l)
                }
              )
        }
        l(i.arg)
      }
      var a
      o(this, '_invoke', {
        value: function (e, t) {
          function u() {
            return new n(function (n, a) {
              r(e, t, n, a)
            })
          }
          return (a = a ? a.then(u, u) : u())
        }
      })
    }
    function S(e, n, r) {
      var a = m
      return function (u, o) {
        if (a === v) throw new Error('Generator is already running')
        if (a === b) {
          if ('throw' === u) throw o
          return { value: t, done: !0 }
        }
        for (r.method = u, r.arg = o; ; ) {
          var s = r.delegate
          if (s) {
            var l = L(s, r)
            if (l) {
              if (l === h) continue
              return l
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === m) throw ((a = b), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = v
          var i = p(e, n, r)
          if ('normal' === i.type) {
            if (((a = r.done ? b : g), i.arg === h)) continue
            return { value: i.arg, done: r.done }
          }
          'throw' === i.type && ((a = b), (r.method = 'throw'), (r.arg = i.arg))
        }
      }
    }
    function L(e, n) {
      var r = n.method,
        a = e.iterator[r]
      if (a === t)
        return (
          (n.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((n.method = 'return'), (n.arg = t), L(e, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'),
              (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          h
        )
      var u = p(a, e.iterator, n.arg)
      if ('throw' === u.type) return ((n.method = 'throw'), (n.arg = u.arg), (n.delegate = null), h)
      var o = u.arg
      return o
        ? o.done
          ? ((n[e.resultName] = o.value),
            (n.next = e.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
            (n.delegate = null),
            h)
          : o
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          h)
    }
    function I(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function B(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function T(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(I, this), this.reset(!0))
    }
    function P(n) {
      if (n || '' === n) {
        var r = n[l]
        if (r) return r.call(n)
        if ('function' == typeof n.next) return n
        if (!isNaN(n.length)) {
          var a = -1,
            o = function e() {
              for (; ++a < n.length; ) if (u.call(n, a)) return ((e.value = n[a]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (o.next = o)
        }
      }
      throw new TypeError(e(n) + ' is not iterable')
    }
    return (
      (w.prototype = U),
      o(C, 'constructor', { value: U, configurable: !0 }),
      o(U, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = d(U, c, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, U)
            : ((e.__proto__ = U), d(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(C)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      k(V.prototype),
      d(V.prototype, i, function () {
        return this
      }),
      (n.AsyncIterator = V),
      (n.async = function (e, t, r, a, u) {
        void 0 === u && (u = Promise)
        var o = new V(f(e, t, r, a), u)
        return n.isGeneratorFunction(t)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next()
            })
      }),
      k(C),
      d(C, c, 'Generator'),
      d(C, l, function () {
        return this
      }),
      d(C, 'toString', function () {
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
      (n.values = P),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(B),
            !e)
          )
            for (var n in this)
              't' === n.charAt(0) && u.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
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
              (s.type = 'throw'),
              (s.arg = e),
              (n.next = r),
              a && ((n.method = 'next'), (n.arg = t)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var o = this.tryEntries[a],
              s = o.completion
            if ('root' === o.tryLoc) return r('end')
            if (o.tryLoc <= this.prev) {
              var l = u.call(o, 'catchLoc'),
                i = u.call(o, 'finallyLoc')
              if (l && i) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
              } else if (l) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
              } else {
                if (!i) throw new Error('try statement without catch or finally')
                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
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
          var o = a ? a.completion : {}
          return (
            (o.type = e),
            (o.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), h) : this.complete(o)
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
            h
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), B(n), h)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                B(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: P(e), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = t),
            h
          )
        }
      }),
      n
    )
  }
  function u(e, t, n, r, a, u, o) {
    try {
      var s = e[u](o),
        l = s.value
    } catch (i) {
      return void n(i)
    }
    s.done ? t(l) : Promise.resolve(l).then(r, a)
  }
  function o(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (r, a) {
        var o = e.apply(t, n)
        function s(e) {
          u(o, r, a, s, l, 'next', e)
        }
        function l(e) {
          u(o, r, a, s, l, 'throw', e)
        }
        s(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './useTableHeightFit-legacy-f881449c.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-62a49047.js',
      './QuotaManagementDialog-legacy-7929cb59.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, t) {
      'use strict'
      var r, u, s, l, i, c, d, f, p, m, g, v, b, h, y, w, U, _, x, M, C, k, V, S, L, I, B, T, P, F
      return {
        setters: [
          function (e) {
            ;((r = e.q), (u = e.h), (s = e._), (l = e.P))
          },
          function (e) {
            i = e.u
          },
          function (e) {
            ;((c = e.G), (d = e.E), (f = e.e))
          },
          function (e) {
            ;((p = e.y),
              (m = e.r),
              (g = e.R),
              (v = e.d),
              (b = e.a8),
              (h = e.f),
              (y = e.G),
              (w = e.H),
              (U = e.N),
              (_ = e.L),
              (x = e.M),
              (M = e.u),
              (C = e.b),
              (k = e.h),
              (V = e.a0),
              (S = e.F),
              (L = e.i),
              (I = e.ag),
              (B = e.I),
              (T = e.Q))
          },
          function (e) {
            P = e.g
          },
          function (e) {
            F = e.Q
          },
          null
        ],
        execute: function () {
          var t = document.createElement('style')
          function j(e) {
            return r({
              url: '/resellers/sub-users/',
              method: 'get',
              params: e,
              baseURL: '/cpyservice'
            })
          }
          function D(e) {
            return r({
              url: '/resellers/sub-users/',
              method: 'post',
              data: e,
              baseURL: '/cpyservice'
            })
          }
          function O(e, t) {
            return r({
              url: '/resellers/sub-users/reset-password/'.concat(e),
              method: 'put',
              data: t,
              baseURL: '/cpyservice'
            })
          }
          function R(e, t) {
            return r({
              url: '/resellers/sub-users/'.concat(e, '/quota'),
              method: 'put',
              data: t,
              baseURL: '/cpyservice'
            })
          }
          function E(e) {
            return r({
              url: '/resellers/transfer-group/'
                .concat(e.group_uuid, '/to-sub-user/')
                .concat(e.sub_user_id),
              method: 'put',
              baseURL: '/cpyservice'
            })
          }
          function z(e, t) {
            return r({
              url: '/resellers/sub-users/'.concat(e, '/status'),
              method: 'put',
              data: t,
              baseURL: '/cpyservice'
            })
          }
          function q(e, t) {
            return r({
              url: '/users/'.concat(e, '/can_create_instances'),
              method: 'patch',
              data: t,
              baseURL: '/cpyservice'
            })
          }
          ;((t.textContent =
            '.cursor-pointer[data-v-cf590988]{cursor:pointer}.el-select-dropdown__item[data-v-451ea376]{display:flex;justify-content:space-between;align-items:center}.device-management-container[data-v-f0d80637]{padding:20px}.filter-container[data-v-f0d80637]{margin-bottom:20px}.batch-operations[data-v-f0d80637]{border-top:1px solid #ebeef5;padding-top:20px}.batch-operations .el-button[data-v-f0d80637]{margin:0 10px}.device-unbind-container[data-v-b6c762db]{padding:20px}.filter-container[data-v-b6c762db]{margin-bottom:20px}.batch-operations[data-v-b6c762db]{border-top:1px solid #ebeef5;padding-top:20px}.batch-operations .el-button[data-v-b6c762db]{margin:0 10px}.filter-container[data-v-e8d079e8]{margin-bottom:20px}.app-container[data-v-e8d079e8]{padding:20px}\n'),
            document.head.appendChild(t))
          var G = p({
              __name: 'CreateUserDialog',
              props: { modelValue: { type: Boolean }, title: {} },
              emits: ['update:modelValue', 'success'],
              setup: function (e, t) {
                var n = t.emit,
                  r = u().t,
                  s = e,
                  l = n,
                  i = m(!1),
                  d = m()
                m(!1)
                var f = m(!1),
                  p = g({
                    username: '',
                    password: '',
                    user_alias: '',
                    sec_code: '',
                    phone: '',
                    xhost: 'openapi-hk.armcloud.net'
                  }),
                  C = {
                    username: [
                      {
                        required: !0,
                        message: r('subUserManagement.usernameRequired'),
                        trigger: 'blur'
                      }
                    ],
                    password: [
                      {
                        required: !0,
                        message: r('subUserManagement.passwordRequired'),
                        trigger: 'blur'
                      },
                      { min: 6, message: r('subUserManagement.passwordMinLength'), trigger: 'blur' }
                    ],
                    user_alias: [
                      {
                        required: !0,
                        message: r('subUserManagement.userAliasRequired'),
                        trigger: 'blur'
                      }
                    ],
                    phone: [
                      {
                        required: !0,
                        message: r('subUserManagement.phoneRequired'),
                        trigger: 'blur'
                      },
                      {
                        pattern: /^1[3-9]\d{9}$/,
                        message: r('subUserManagement.phoneFormatError'),
                        trigger: 'blur'
                      }
                    ]
                  }
                ;(v(
                  function () {
                    return s.modelValue
                  },
                  function (e) {
                    ;((i.value = e), e && k())
                  }
                ),
                  v(i, function (e) {
                    l('update:modelValue', e)
                  }))
                var k = function () {
                    ;(d.value && d.value.resetFields(),
                      Object.assign(p, {
                        username: '',
                        password: '',
                        user_alias: '',
                        sec_code: '',
                        phone: '',
                        xhost: 'openapi-hk.armcloud.net'
                      }))
                  },
                  V = function (e) {
                    e()
                  },
                  S = function () {
                    i.value = !1
                  },
                  L = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t, n
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (d.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return (
                                    (f.value = !0),
                                    (e.prev = 3),
                                    (e.next = 6),
                                    d.value.validate()
                                  )
                                case 6:
                                  return (
                                    {
                                      addDTOList: [
                                        {
                                          customerAccount: p.username,
                                          customerName: p.user_alias,
                                          customerTel: p.phone || ''
                                        }
                                      ]
                                    },
                                    (t = {
                                      username: p.username,
                                      password: p.password,
                                      phone_number: p.phone,
                                      user_alias: p.user_alias,
                                      sec_code: p.sec_code || void 0,
                                      xhost: p.xhost
                                    }),
                                    (e.next = 10),
                                    D(t)
                                  )
                                case 10:
                                  return (
                                    (n = e.sent),
                                    (i.value = !1),
                                    (e.next = 14),
                                    c.alert(
                                      r('subUserManagement.createSuccessMessage', {
                                        username: p.username,
                                        password: n.password
                                      }),
                                      r('subUserManagement.createSuccess'),
                                      {
                                        confirmButtonText: r('subUserManagement.confirmButton'),
                                        type: 'success',
                                        showClose: !1,
                                        dangerouslyUseHTMLString: !1
                                      }
                                    )
                                  )
                                case 14:
                                  return (
                                    (e.prev = 14),
                                    (e.next = 17),
                                    c.confirm(
                                      r('subUserManagement.confirmPasswordSave'),
                                      r('subUserManagement.confirmPasswordSaveTitle'),
                                      {
                                        confirmButtonText: r('subUserManagement.savedContinue'),
                                        cancelButtonText: r('subUserManagement.backToView'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 17:
                                  ;(k(), (i.value = !1), l('success'), (e.next = 27))
                                  break
                                case 22:
                                  return (
                                    (e.prev = 22),
                                    (e.t0 = e.catch(14)),
                                    (e.next = 26),
                                    c.alert(
                                      r('subUserManagement.passwordInfoMessage', {
                                        username: p.username,
                                        password: n.password
                                      }),
                                      r('subUserManagement.passwordInfo'),
                                      {
                                        confirmButtonText: r('subUserManagement.savedButton'),
                                        type: 'warning',
                                        showClose: !1,
                                        dangerouslyUseHTMLString: !1
                                      }
                                    )
                                  )
                                case 26:
                                  l('success')
                                case 27:
                                  e.next = 31
                                  break
                                case 29:
                                  ;((e.prev = 29), (e.t1 = e.catch(3)))
                                case 31:
                                  return ((e.prev = 31), (f.value = !1), e.finish(31))
                                case 34:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [3, 29, 31, 34],
                            [14, 22]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (e, t) {
                  var n = b('el-input'),
                    a = b('el-form-item'),
                    u = b('el-form'),
                    o = b('el-button'),
                    s = b('el-dialog')
                  return (
                    h(),
                    y(
                      s,
                      {
                        title: e.title,
                        modelValue: i.value,
                        'onUpdate:modelValue':
                          t[4] ||
                          (t[4] = function (e) {
                            return (i.value = e)
                          }),
                        width: '500px',
                        'before-close': V
                      },
                      {
                        footer: w(function () {
                          return [
                            U(
                              o,
                              { onClick: S },
                              {
                                default: w(function () {
                                  return [_(x(M(r)('subUserManagement.cancelButton')), 1)]
                                }),
                                _: 1
                              }
                            ),
                            U(
                              o,
                              { type: 'primary', loading: f.value, onClick: L },
                              {
                                default: w(function () {
                                  return [_(x(M(r)('subUserManagement.confirmButton')), 1)]
                                }),
                                _: 1
                              },
                              8,
                              ['loading']
                            )
                          ]
                        }),
                        default: w(function () {
                          return [
                            U(
                              u,
                              {
                                ref_key: 'formRef',
                                ref: d,
                                model: p,
                                rules: C,
                                'label-width': '100px'
                              },
                              {
                                default: w(function () {
                                  return [
                                    U(
                                      a,
                                      {
                                        label: M(r)('subUserManagement.usernameLabel'),
                                        prop: 'username'
                                      },
                                      {
                                        default: w(function () {
                                          return [
                                            U(
                                              n,
                                              {
                                                modelValue: p.username,
                                                'onUpdate:modelValue':
                                                  t[0] ||
                                                  (t[0] = function (e) {
                                                    return (p.username = e)
                                                  }),
                                                placeholder: M(r)(
                                                  'subUserManagement.usernamePlaceholder'
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
                                    U(
                                      a,
                                      {
                                        label: M(r)('subUserManagement.userAliasLabel'),
                                        prop: 'user_alias'
                                      },
                                      {
                                        default: w(function () {
                                          return [
                                            U(
                                              n,
                                              {
                                                modelValue: p.user_alias,
                                                'onUpdate:modelValue':
                                                  t[1] ||
                                                  (t[1] = function (e) {
                                                    return (p.user_alias = e)
                                                  }),
                                                placeholder: M(r)(
                                                  'subUserManagement.userAliasPlaceholder'
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
                                    U(
                                      a,
                                      {
                                        label: M(r)('subUserManagement.phoneLabel'),
                                        prop: 'phone'
                                      },
                                      {
                                        default: w(function () {
                                          return [
                                            U(
                                              n,
                                              {
                                                modelValue: p.phone,
                                                'onUpdate:modelValue':
                                                  t[2] ||
                                                  (t[2] = function (e) {
                                                    return (p.phone = e)
                                                  }),
                                                placeholder: M(r)(
                                                  'subUserManagement.phonePlaceholder'
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
                                    U(
                                      a,
                                      {
                                        label: M(r)('subUserManagement.secCodeLabel'),
                                        prop: 'sec_code'
                                      },
                                      {
                                        default: w(function () {
                                          return [
                                            U(
                                              n,
                                              {
                                                modelValue: p.sec_code,
                                                'onUpdate:modelValue':
                                                  t[3] ||
                                                  (t[3] = function (e) {
                                                    return (p.sec_code = e)
                                                  }),
                                                placeholder: M(r)(
                                                  'subUserManagement.secCodePlaceholder'
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
                  )
                }
              }
            }),
            A = p({
              __name: 'ResetPasswordDialog',
              props: { modelValue: { type: Boolean }, title: {}, userId: {}, username: {} },
              emits: ['update:modelValue', 'success'],
              setup: function (e, t) {
                var r = t.emit,
                  s = u().t,
                  l = e,
                  i = r,
                  f = m(!1),
                  p = m(!1),
                  C = m(!1),
                  k = m(),
                  V = g({ new_password: '' }),
                  S = {
                    new_password: [
                      {
                        required: !0,
                        message: s('subUserManagement.newPasswordRequired'),
                        trigger: 'blur'
                      },
                      { min: 6, message: s('subUserManagement.passwordMinLength'), trigger: 'blur' }
                    ]
                  }
                ;(v(
                  function () {
                    return l.modelValue
                  },
                  function (e) {
                    ;((f.value = e), e && L())
                  }
                ),
                  v(f, function (e) {
                    i('update:modelValue', e)
                  }))
                var L = function () {
                    ;(k.value && k.value.resetFields(), (V.new_password = ''), (C.value = !1))
                  },
                  I = function (e) {
                    V.new_password
                      ? c
                          .confirm(
                            s('subUserManagement.closeConfirmUnsaved'),
                            s('subUserManagement.tip'),
                            {
                              confirmButtonText: s('subUserManagement.confirmButton'),
                              cancelButtonText: s('subUserManagement.cancelButton'),
                              type: 'warning'
                            }
                          )
                          .then(function () {
                            ;(L(), e ? e() : (f.value = !1))
                          })
                          .catch(function () {})
                      : (L(), e ? e() : (f.value = !1))
                  },
                  B = function () {
                    I()
                  },
                  T = (function () {
                    var e = o(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (k.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.next = 4), k.value.validate())
                                case 4:
                                  if (e.sent) {
                                    e.next = 7
                                    break
                                  }
                                  return e.abrupt('return')
                                case 7:
                                  if (l.userId) {
                                    e.next = 10
                                    break
                                  }
                                  return (
                                    d.error(s('subUserManagement.userIdRequired')),
                                    e.abrupt('return')
                                  )
                                case 10:
                                  return (
                                    (p.value = !0),
                                    (e.prev = 11),
                                    (e.next = 14),
                                    O(l.userId, n({}, V))
                                  )
                                case 14:
                                  ;(d.success(s('subUserManagement.resetPasswordSuccess')),
                                    L(),
                                    (f.value = !1),
                                    i('success'),
                                    (e.next = 24))
                                  break
                                case 20:
                                  ;((e.prev = 20),
                                    (e.t0 = e.catch(11)),
                                    console.error('重置密码失败:', e.t0),
                                    d.error(s('subUserManagement.resetPasswordFailed')))
                                case 24:
                                  return ((e.prev = 24), (p.value = !1), e.finish(24))
                                case 27:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[11, 20, 24, 27]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (e, t) {
                  var n = b('el-input'),
                    r = b('el-form-item'),
                    a = b('el-form'),
                    u = b('el-button'),
                    o = b('el-dialog')
                  return (
                    h(),
                    y(
                      o,
                      {
                        title: e.title,
                        modelValue: f.value,
                        'onUpdate:modelValue':
                          t[1] ||
                          (t[1] = function (e) {
                            return (f.value = e)
                          }),
                        width: '400px',
                        'before-close': I
                      },
                      {
                        footer: w(function () {
                          return [
                            U(
                              u,
                              { onClick: B },
                              {
                                default: w(function () {
                                  return [_(x(M(s)('subUserManagement.cancelButton')), 1)]
                                }),
                                _: 1
                              }
                            ),
                            U(
                              u,
                              { type: 'primary', loading: p.value, onClick: T },
                              {
                                default: w(function () {
                                  return [_(x(M(s)('subUserManagement.confirmButton')), 1)]
                                }),
                                _: 1
                              },
                              8,
                              ['loading']
                            )
                          ]
                        }),
                        default: w(function () {
                          return [
                            U(
                              a,
                              {
                                ref_key: 'formRef',
                                ref: k,
                                model: V,
                                rules: S,
                                'label-width': '100px'
                              },
                              {
                                default: w(function () {
                                  return [
                                    U(
                                      r,
                                      {
                                        label: M(s)('subUserManagement.newPasswordLabel'),
                                        prop: 'new_password'
                                      },
                                      {
                                        default: w(function () {
                                          return [
                                            U(
                                              n,
                                              {
                                                modelValue: V.new_password,
                                                'onUpdate:modelValue':
                                                  t[0] ||
                                                  (t[0] = function (e) {
                                                    return (V.new_password = e)
                                                  }),
                                                type: C.value ? 'text' : 'password',
                                                placeholder: M(s)(
                                                  'subUserManagement.newPasswordPlaceholder'
                                                ),
                                                'show-password': ''
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'type', 'placeholder']
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
                  )
                }
              }
            }),
            N = s(A, [['__scopeId', 'data-v-cf590988']]),
            Q = { style: { float: 'left' } },
            $ = p({
              __name: 'TransferGroupDialog',
              props: {
                modelValue: { type: Boolean, default: !1 },
                title: { type: String, default: '转让分组' },
                userId: { type: String, required: !0 },
                username: { type: String, required: !0 }
              },
              emits: ['update:modelValue', 'success'],
              setup: function (e, t) {
                var n = t.emit,
                  r = u().t,
                  s = e,
                  l = n,
                  i = m(!1),
                  c = m(!1),
                  f = m(!1),
                  p = m(),
                  I = m([]),
                  B = g({ group_uuid: '' }),
                  T = {
                    group_uuid: [
                      {
                        required: !0,
                        message: r('subUserManagement.selectGroupRequired'),
                        trigger: 'change'
                      }
                    ]
                  }
                ;(v(
                  function () {
                    return s.modelValue
                  },
                  function (e) {
                    ;((i.value = e), e && (F(), (B.group_uuid = '')))
                  }
                ),
                  v(i, function (e) {
                    l('update:modelValue', e)
                  }))
                var F = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (f.value = !0), (e.next = 4), P())
                                case 4:
                                  ;((t = e.sent), (I.value = t.items || t), (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取分组列表失败:', e.t0),
                                    d.error(r('subUserManagement.getGroupListFailed')))
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
                  j = (function () {
                    var e = o(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (p.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.prev = 2), (e.next = 5), p.value.validate())
                                case 5:
                                  if (e.sent) {
                                    e.next = 8
                                    break
                                  }
                                  return e.abrupt('return')
                                case 8:
                                  return (
                                    (c.value = !0),
                                    (e.next = 11),
                                    E({ group_uuid: B.group_uuid, sub_user_id: s.userId })
                                  )
                                case 11:
                                  ;((i.value = !1), l('success'), (e.next = 19))
                                  break
                                case 15:
                                  ;((e.prev = 15),
                                    (e.t0 = e.catch(2)),
                                    console.error('转让分组失败:', e.t0),
                                    d.error(r('subUserManagement.transferGroupFailed')))
                                case 19:
                                  return ((e.prev = 19), (c.value = !1), e.finish(19))
                                case 22:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[2, 15, 19, 22]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  D = function () {
                    p.value && p.value.resetFields()
                  }
                return (
                  C(function () {
                    i.value = s.modelValue
                  }),
                  function (t, n) {
                    var a = b('el-option'),
                      u = b('el-select'),
                      o = b('el-form-item'),
                      s = b('el-form'),
                      l = b('el-button'),
                      d = b('el-dialog')
                    return (
                      h(),
                      y(
                        d,
                        {
                          title: e.title,
                          modelValue: i.value,
                          'onUpdate:modelValue':
                            n[2] ||
                            (n[2] = function (e) {
                              return (i.value = e)
                            }),
                          width: '500px',
                          onClose: D
                        },
                        {
                          footer: w(function () {
                            return [
                              U(
                                l,
                                {
                                  onClick:
                                    n[1] ||
                                    (n[1] = function (e) {
                                      return (i.value = !1)
                                    })
                                },
                                {
                                  default: w(function () {
                                    return [_(x(M(r)('subUserManagement.cancelButton')), 1)]
                                  }),
                                  _: 1
                                }
                              ),
                              U(
                                l,
                                { type: 'primary', loading: c.value, onClick: j },
                                {
                                  default: w(function () {
                                    return [_(x(M(r)('subUserManagement.confirmButton')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading']
                              )
                            ]
                          }),
                          default: w(function () {
                            return [
                              U(
                                s,
                                {
                                  ref_key: 'formRef',
                                  ref: p,
                                  model: B,
                                  rules: T,
                                  'label-width': '100px'
                                },
                                {
                                  default: w(function () {
                                    return [
                                      U(
                                        o,
                                        {
                                          label: M(r)('subUserManagement.selectGroupLabel'),
                                          prop: 'group_uuid'
                                        },
                                        {
                                          default: w(function () {
                                            return [
                                              U(
                                                u,
                                                {
                                                  modelValue: B.group_uuid,
                                                  'onUpdate:modelValue':
                                                    n[0] ||
                                                    (n[0] = function (e) {
                                                      return (B.group_uuid = e)
                                                    }),
                                                  placeholder: M(r)(
                                                    'subUserManagement.selectGroupPlaceholder'
                                                  ),
                                                  filterable: '',
                                                  style: { width: '100%' },
                                                  loading: f.value
                                                },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      (h(!0),
                                                      k(
                                                        S,
                                                        null,
                                                        V(I.value, function (e) {
                                                          return (
                                                            h(),
                                                            y(
                                                              a,
                                                              {
                                                                key: e.uuid,
                                                                label: e.name,
                                                                value: e.uuid
                                                              },
                                                              {
                                                                default: w(function () {
                                                                  return [
                                                                    L('span', Q, x(e.name), 1)
                                                                  ]
                                                                }),
                                                                _: 2
                                                              },
                                                              1032,
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
                    )
                  }
                )
              }
            }),
            H = s($, [['__scopeId', 'data-v-451ea376']])
          function Y(e) {
            return r({
              url: '/openapi/open/subCustomer/resource/masterCustomer/pageList',
              method: 'post',
              data: e,
              sign: !0
            })
          }
          function J(e) {
            return r({
              url: '/openapi/open/subCustomer/resource/allocate',
              method: 'post',
              data: e,
              sign: !0
            })
          }
          function K(e) {
            return r({
              url: '/openapi/open/subCustomer/resource/list',
              method: 'post',
              data: e,
              sign: !0
            })
          }
          function W(e) {
            return r({
              url: '/openapi/open/subCustomer/resource/unbind',
              method: 'post',
              data: e,
              sign: !0
            })
          }
          var X = { class: 'device-management-container' },
            Z = { class: 'filter-container' },
            ee = {
              class: 'batch-operations',
              style: { 'margin-top': '20px', 'text-align': 'center' }
            },
            te = p({
              __name: 'DeviceManagementDrawer',
              props: {
                modelValue: { type: Boolean },
                userId: {},
                username: {},
                selectedDeviceIds: {
                  default: function () {
                    return []
                  }
                }
              },
              emits: ['update:modelValue', 'success'],
              setup: function (e, t) {
                var r = t.emit,
                  s = u().t,
                  l = e,
                  i = r,
                  f = m(!1),
                  p = m(!1),
                  C = m([]),
                  k = m(0),
                  V = m([]),
                  S = g({ page: 1, rows: 10, deviceCode: '', netStorageResFlag: 1 })
                ;(v(
                  function () {
                    return l.modelValue
                  },
                  function (e) {
                    ;((f.value = e), e && T())
                  }
                ),
                  v(f, function (e) {
                    i('update:modelValue', e)
                  }))
                var T = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t, r
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (p.value = !0),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    Y(n(n({}, S), {}, { netStorageResFlag: S.netStorageResFlag }))
                                  )
                                case 4:
                                  ;(200 === (t = e.sent).code
                                    ? ((C.value = t.data.pageData || []),
                                      (k.value =
                                        (null === (r = t.data) || void 0 === r
                                          ? void 0
                                          : r.total) || 0))
                                    : d.error(t.msg || s('subUserManagement.getDeviceListFailed')),
                                    (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(1)),
                                    console.error('获取板卡列表失败:', e.t0),
                                    d.error(s('subUserManagement.getDeviceListFailed')))
                                case 12:
                                  return ((e.prev = 12), (p.value = !1), e.finish(12))
                                case 15:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 8, 12, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  P = function (e) {
                    V.value = e
                  },
                  F = function () {
                    ;((S.page = 1), T())
                  },
                  j = function () {
                    ;((S.page = 1), (S.deviceCode = ''), (S.netStorageResFlag = void 0), T())
                  },
                  D = function (e) {
                    ;((S.rows = e), (S.page = 1), T())
                  },
                  O = function (e) {
                    ;((S.page = e), T())
                  },
                  R = (function () {
                    var e = o(
                      a().mark(function e(t) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    c.confirm(
                                      s('subUserManagement.confirmAllocateSingle', {
                                        deviceCode: t.deviceCode,
                                        username: l.username
                                      }),
                                      s('subUserManagement.confirmAllocateTitle'),
                                      {
                                        confirmButtonText: s('subUserManagement.confirmButton'),
                                        cancelButtonText: s('subUserManagement.cancelButton'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return (
                                    (e.next = 5),
                                    J({
                                      subCustomerId: parseInt(l.userId),
                                      allocateDeviceIds: [t.deviceId]
                                    })
                                  )
                                case 5:
                                  ;(d.success(s('subUserManagement.allocateSuccess')),
                                    i('success'),
                                    T(),
                                    (e.next = 13))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error('板卡授权失败:', e.t0),
                                      d.error(s('subUserManagement.allocateFailed'))))
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
                  E = (function () {
                    var e = o(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (0 !== V.value.length) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    d.warning(s('subUserManagement.selectDevicesFirst')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (e.prev = 3),
                                    (e.next = 6),
                                    c.confirm(
                                      s('subUserManagement.confirmBatchAllocate', {
                                        count: V.value.length,
                                        username: l.username
                                      }),
                                      s('subUserManagement.confirmBatchAllocateTitle'),
                                      {
                                        confirmButtonText: s('subUserManagement.confirmButton'),
                                        cancelButtonText: s('subUserManagement.cancelButton'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 6:
                                  return (
                                    (e.next = 8),
                                    J({
                                      subCustomerId: parseInt(l.userId),
                                      allocateDeviceIds: V.value.map(function (e) {
                                        return e.deviceId
                                      })
                                    })
                                  )
                                case 8:
                                  ;(d.success(
                                    s('subUserManagement.batchAllocateSuccess', {
                                      count: V.value.length
                                    })
                                  ),
                                    i('success'),
                                    (V.value = []),
                                    T(),
                                    (e.next = 17))
                                  break
                                case 14:
                                  ;((e.prev = 14),
                                    (e.t0 = e.catch(3)),
                                    'cancel' !== e.t0 &&
                                      (console.error('批量授权失败:', e.t0),
                                      d.error(s('subUserManagement.batchAllocateFailed'))))
                                case 17:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 14]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  z = function (e) {
                    ;((V.value = []), e())
                  }
                return function (e, t) {
                  var n = b('el-input'),
                    r = b('el-form-item'),
                    a = b('el-button'),
                    u = b('el-form'),
                    o = b('el-table-column'),
                    l = b('el-tag'),
                    i = b('el-table'),
                    c = b('el-pagination'),
                    d = b('el-drawer'),
                    m = I('loading')
                  return (
                    h(),
                    y(
                      d,
                      {
                        title: M(s)('subUserManagement.deviceManagementTitle', {
                          username: e.username
                        }),
                        modelValue: f.value,
                        'onUpdate:modelValue':
                          t[3] ||
                          (t[3] = function (e) {
                            return (f.value = e)
                          }),
                        direction: 'rtl',
                        size: '50%',
                        'before-close': z,
                        class: 'device-management-drawer'
                      },
                      {
                        default: w(function () {
                          return [
                            L('div', X, [
                              L('div', Z, [
                                U(
                                  u,
                                  { model: S, inline: '' },
                                  {
                                    default: w(function () {
                                      return [
                                        U(
                                          r,
                                          { label: M(s)('subUserManagement.deviceCodeLabel') },
                                          {
                                            default: w(function () {
                                              return [
                                                U(
                                                  n,
                                                  {
                                                    modelValue: S.deviceCode,
                                                    'onUpdate:modelValue':
                                                      t[0] ||
                                                      (t[0] = function (e) {
                                                        return (S.deviceCode = e)
                                                      }),
                                                    placeholder: M(s)(
                                                      'subUserManagement.deviceCodePlaceholder'
                                                    ),
                                                    clearable: '',
                                                    style: { width: '200px' },
                                                    onChange: F
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
                                        U(r, null, {
                                          default: w(function () {
                                            return [
                                              U(
                                                a,
                                                { type: 'primary', onClick: F },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(
                                                        x(M(s)('subUserManagement.searchButton')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              U(
                                                a,
                                                { onClick: j },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(x(M(s)('subUserManagement.resetButton')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
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
                              B(
                                (h(),
                                y(
                                  i,
                                  {
                                    ref: 'deviceTable',
                                    data: C.value,
                                    fit: '',
                                    'highlight-current-row': '',
                                    style: { width: '100%', 'margin-top': '20px' },
                                    height: '400',
                                    onSelectionChange: P
                                  },
                                  {
                                    default: w(function () {
                                      return [
                                        U(o, { type: 'selection', width: '55' }),
                                        U(
                                          o,
                                          {
                                            label: M(s)('subUserManagement.deviceIdLabel'),
                                            prop: 'deviceId',
                                            width: '100',
                                            align: 'center'
                                          },
                                          null,
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          o,
                                          {
                                            label: M(s)('subUserManagement.deviceCodeLabel'),
                                            prop: 'deviceCode',
                                            'min-width': '200'
                                          },
                                          null,
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          o,
                                          {
                                            label: M(s)('subUserManagement.deviceTypeLabel'),
                                            width: '120',
                                            align: 'center'
                                          },
                                          {
                                            default: w(function (e) {
                                              var t = e.row
                                              return [
                                                U(
                                                  l,
                                                  {
                                                    type:
                                                      1 === t.netStorageResFlag
                                                        ? 'success'
                                                        : 'primary'
                                                  },
                                                  {
                                                    default: w(function () {
                                                      return [
                                                        _(
                                                          x(
                                                            1 === t.netStorageResFlag
                                                              ? M(s)(
                                                                  'subUserManagement.networkStorageDevice'
                                                                )
                                                              : M(s)(
                                                                  'subUserManagement.localDevice'
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
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          o,
                                          {
                                            label: M(s)(
                                              'subUserManagement.deviceCreatePadStatusLabel'
                                            ),
                                            width: '120',
                                            align: 'center'
                                          },
                                          {
                                            default: w(function (e) {
                                              var t = e.row
                                              return [
                                                U(
                                                  l,
                                                  {
                                                    type:
                                                      1 === t.deviceCreatePadStatus
                                                        ? 'success'
                                                        : 'warning'
                                                  },
                                                  {
                                                    default: w(function () {
                                                      return [
                                                        _(
                                                          x(
                                                            1 === t.deviceCreatePadStatus
                                                              ? M(s)(
                                                                  'subUserManagement.deviceCreatePadStatusCreated'
                                                                )
                                                              : M(s)(
                                                                  'subUserManagement.deviceCreatePadStatusNotCreated'
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
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          o,
                                          {
                                            label: M(s)('subUserManagement.operation'),
                                            width: '120',
                                            align: 'center'
                                          },
                                          {
                                            default: w(function (e) {
                                              var t = e.row
                                              return [
                                                U(
                                                  a,
                                                  {
                                                    link: '',
                                                    type: 'primary',
                                                    onClick: function (e) {
                                                      return R(t)
                                                    }
                                                  },
                                                  {
                                                    default: w(function () {
                                                      return [
                                                        _(
                                                          x(
                                                            M(s)(
                                                              'subUserManagement.authorizeButton'
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
                                [[m, p.value]]
                              ),
                              U(
                                c,
                                {
                                  'current-page': S.page,
                                  'onUpdate:currentPage':
                                    t[1] ||
                                    (t[1] = function (e) {
                                      return (S.page = e)
                                    }),
                                  'page-size': S.rows,
                                  'onUpdate:pageSize':
                                    t[2] ||
                                    (t[2] = function (e) {
                                      return (S.rows = e)
                                    }),
                                  'page-sizes': [10, 20, 50, 100],
                                  total: k.value,
                                  layout: 'total, sizes, prev, pager, next, jumper',
                                  onSizeChange: D,
                                  onCurrentChange: O,
                                  style: { 'margin-top': '20px', 'text-align': 'right' }
                                },
                                null,
                                8,
                                ['current-page', 'page-size', 'total']
                              ),
                              L('div', ee, [
                                U(
                                  a,
                                  { type: 'primary', disabled: 0 === V.value.length, onClick: E },
                                  {
                                    default: w(function () {
                                      return [
                                        _(x(M(s)('subUserManagement.batchAuthorizeButton')), 1)
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
                      ['title', 'modelValue']
                    )
                  )
                }
              }
            }),
            ne = s(te, [['__scopeId', 'data-v-f0d80637']]),
            re = { class: 'device-unbind-container' },
            ae = { class: 'filter-container' },
            ue = {
              class: 'batch-operations',
              style: { 'margin-top': '20px', 'text-align': 'center' }
            },
            oe = p({
              __name: 'DeviceUnbindDrawer',
              props: { modelValue: { type: Boolean }, userId: {}, username: {} },
              emits: ['update:modelValue', 'success'],
              setup: function (e, t) {
                var n = t.emit,
                  r = u().t,
                  s = e,
                  l = n,
                  i = m(!1),
                  f = m(!1),
                  p = m([]),
                  C = m(0),
                  k = m([]),
                  V = g({ page: 1, rows: 10, deviceCode: '', netStorageResFlag: 1 })
                ;(v(
                  function () {
                    return s.modelValue
                  },
                  function (e) {
                    ;((i.value = e), e && S())
                  }
                ),
                  v(i, function (e) {
                    l('update:modelValue', e)
                  }))
                var S = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t, n
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (f.value = !0),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    K({
                                      subCustomerId: parseInt(s.userId),
                                      deviceCode: V.deviceCode,
                                      netStorageResFlag: V.netStorageResFlag
                                    })
                                  )
                                case 4:
                                  ;(200 === (t = e.sent).code
                                    ? ((p.value = t.data || []),
                                      (C.value =
                                        (null === (n = t.data) || void 0 === n
                                          ? void 0
                                          : n.length) || 0))
                                    : d.error(t.msg || r('subUserManagement.getDeviceListFailed')),
                                    (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(1)),
                                    console.error('获取板卡列表失败:', e.t0),
                                    d.error(r('subUserManagement.getDeviceListFailed')))
                                case 12:
                                  return ((e.prev = 12), (f.value = !1), e.finish(12))
                                case 15:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 8, 12, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  T = function (e) {
                    k.value = e
                  },
                  P = function () {
                    ;((V.page = 1), S())
                  },
                  F = function () {
                    ;((V.page = 1), (V.deviceCode = ''), (V.netStorageResFlag = void 0), S())
                  },
                  j = function (e) {
                    ;((V.rows = e), (V.page = 1), S())
                  },
                  D = function (e) {
                    ;((V.page = e), S())
                  },
                  O = (function () {
                    var e = o(
                      a().mark(function e(t) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    c.confirm(
                                      r('subUserManagement.confirmUnbindSingle', {
                                        username: s.username,
                                        deviceCode: t.deviceCode
                                      }),
                                      r('subUserManagement.confirmUnbind'),
                                      {
                                        confirmButtonText: r('subUserManagement.confirmButton'),
                                        cancelButtonText: r('subUserManagement.cancelButton'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return (
                                    (e.next = 5),
                                    W({
                                      subCustomerId: parseInt(s.userId),
                                      unbindDeviceIds: [t.deviceId]
                                    })
                                  )
                                case 5:
                                  ;(d.success(r('subUserManagement.unbindSuccess')),
                                    l('success'),
                                    S(),
                                    (e.next = 13))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error('板卡解绑失败:', e.t0),
                                      d.error(r('subUserManagement.unbindFailed'))))
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
                  R = (function () {
                    var e = o(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (0 !== k.value.length) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    d.warning(r('subUserManagement.selectDevicesFirst')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (e.prev = 3),
                                    (e.next = 6),
                                    c.confirm(
                                      r('subUserManagement.confirmBatchUnbind', {
                                        count: k.value.length,
                                        username: s.username
                                      }),
                                      r('subUserManagement.confirmBatchUnbindTitle'),
                                      {
                                        confirmButtonText: r('subUserManagement.confirmButton'),
                                        cancelButtonText: r('subUserManagement.cancelButton'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 6:
                                  return (
                                    (e.next = 8),
                                    W({
                                      subCustomerId: parseInt(s.userId),
                                      unbindDeviceIds: k.value.map(function (e) {
                                        return e.deviceId
                                      })
                                    })
                                  )
                                case 8:
                                  ;(d.success(
                                    r('subUserManagement.batchUnbindSuccess', {
                                      count: k.value.length
                                    })
                                  ),
                                    l('success'),
                                    (k.value = []),
                                    S(),
                                    (e.next = 17))
                                  break
                                case 14:
                                  ;((e.prev = 14),
                                    (e.t0 = e.catch(3)),
                                    'cancel' !== e.t0 &&
                                      (console.error('批量解绑失败:', e.t0),
                                      d.error(r('subUserManagement.batchUnbindFailed'))))
                                case 17:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 14]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  E = function (e) {
                    ;((k.value = []), e())
                  }
                return function (e, t) {
                  var n = b('el-input'),
                    a = b('el-form-item'),
                    u = b('el-button'),
                    o = b('el-form'),
                    s = b('el-table-column'),
                    l = b('el-tag'),
                    c = b('el-table'),
                    d = b('el-pagination'),
                    m = b('el-drawer'),
                    g = I('loading')
                  return (
                    h(),
                    y(
                      m,
                      {
                        title: M(r)('subUserManagement.deviceUnbindTitle', {
                          username: e.username
                        }),
                        modelValue: i.value,
                        'onUpdate:modelValue':
                          t[3] ||
                          (t[3] = function (e) {
                            return (i.value = e)
                          }),
                        direction: 'rtl',
                        size: '50%',
                        'before-close': E,
                        class: 'device-unbind-drawer'
                      },
                      {
                        default: w(function () {
                          return [
                            L('div', re, [
                              L('div', ae, [
                                U(
                                  o,
                                  { model: V, inline: '' },
                                  {
                                    default: w(function () {
                                      return [
                                        U(
                                          a,
                                          { label: M(r)('subUserManagement.deviceCodeLabel') },
                                          {
                                            default: w(function () {
                                              return [
                                                U(
                                                  n,
                                                  {
                                                    modelValue: V.deviceCode,
                                                    'onUpdate:modelValue':
                                                      t[0] ||
                                                      (t[0] = function (e) {
                                                        return (V.deviceCode = e)
                                                      }),
                                                    placeholder: M(r)(
                                                      'subUserManagement.deviceCodePlaceholder'
                                                    ),
                                                    clearable: '',
                                                    style: { width: '200px' },
                                                    onChange: P
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
                                        U(a, null, {
                                          default: w(function () {
                                            return [
                                              U(
                                                u,
                                                { type: 'primary', onClick: P },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(
                                                        x(M(r)('subUserManagement.searchButton')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              U(
                                                u,
                                                { onClick: F },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(x(M(r)('subUserManagement.resetButton')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
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
                              B(
                                (h(),
                                y(
                                  c,
                                  {
                                    ref: 'deviceTable',
                                    data: p.value,
                                    fit: '',
                                    'highlight-current-row': '',
                                    style: { width: '100%', 'margin-top': '20px' },
                                    height: '400',
                                    onSelectionChange: T
                                  },
                                  {
                                    default: w(function () {
                                      return [
                                        U(s, { type: 'selection', width: '55' }),
                                        U(
                                          s,
                                          {
                                            label: M(r)('subUserManagement.deviceIdLabel'),
                                            prop: 'deviceId',
                                            width: '100',
                                            align: 'center'
                                          },
                                          null,
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          s,
                                          {
                                            label: M(r)('subUserManagement.deviceCodeLabel'),
                                            prop: 'deviceCode',
                                            'min-width': '200'
                                          },
                                          null,
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          s,
                                          {
                                            label: M(r)('subUserManagement.deviceTypeLabel'),
                                            width: '120',
                                            align: 'center'
                                          },
                                          {
                                            default: w(function (e) {
                                              var t = e.row
                                              return [
                                                U(
                                                  l,
                                                  {
                                                    type:
                                                      1 === t.netStorageResFlag
                                                        ? 'success'
                                                        : 'primary'
                                                  },
                                                  {
                                                    default: w(function () {
                                                      return [
                                                        _(
                                                          x(
                                                            1 === t.netStorageResFlag
                                                              ? M(r)(
                                                                  'subUserManagement.networkStorageDevice'
                                                                )
                                                              : M(r)(
                                                                  'subUserManagement.localDevice'
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
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        U(
                                          s,
                                          {
                                            label: M(r)('subUserManagement.operation'),
                                            width: '120',
                                            align: 'center'
                                          },
                                          {
                                            default: w(function (e) {
                                              var t = e.row
                                              return [
                                                U(
                                                  u,
                                                  {
                                                    link: '',
                                                    type: 'danger',
                                                    onClick: function (e) {
                                                      return O(t)
                                                    }
                                                  },
                                                  {
                                                    default: w(function () {
                                                      return [
                                                        _(
                                                          x(M(r)('subUserManagement.unbindButton')),
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
                                  ['data']
                                )),
                                [[g, f.value]]
                              ),
                              U(
                                d,
                                {
                                  'current-page': V.page,
                                  'onUpdate:currentPage':
                                    t[1] ||
                                    (t[1] = function (e) {
                                      return (V.page = e)
                                    }),
                                  'page-size': V.rows,
                                  'onUpdate:pageSize':
                                    t[2] ||
                                    (t[2] = function (e) {
                                      return (V.rows = e)
                                    }),
                                  'page-sizes': [10, 20, 50, 100],
                                  total: C.value,
                                  layout: 'total, sizes, prev, pager, next, jumper',
                                  onSizeChange: j,
                                  onCurrentChange: D,
                                  style: { 'margin-top': '20px', 'text-align': 'right' }
                                },
                                null,
                                8,
                                ['current-page', 'page-size', 'total']
                              ),
                              L('div', ue, [
                                U(
                                  u,
                                  { type: 'danger', disabled: 0 === k.value.length, onClick: R },
                                  {
                                    default: w(function () {
                                      return [_(x(M(r)('subUserManagement.batchUnbindButton')), 1)]
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
                      ['title', 'modelValue']
                    )
                  )
                }
              }
            }),
            se = s(oe, [['__scopeId', 'data-v-b6c762db']]),
            le = { class: 'app-container' },
            ie = p({
              __name: 'index',
              setup: function (e) {
                var t = u().t,
                  r = i(),
                  s = r.cTable,
                  p = r.maxHeight,
                  v = r.handleGetTableHeight,
                  V = m([]),
                  S = m(!1),
                  L = m(0),
                  P = g({ page: 1, page_size: 20, keyword: '' }),
                  D = m(!1),
                  O = m(!1),
                  E = m(!1),
                  A = m(!1),
                  Q = m(!1),
                  $ = m(!1)
                m(!1)
                var Y = m(''),
                  J = m(''),
                  K = m(!1),
                  W = m('view'),
                  X = m(null),
                  Z = m(),
                  ee = g({ instance_limit: 0, storage_limit: 0, bandwidth_limit: 0 }),
                  te = { active: 'success', disabled: 'info', suspended: 'danger' },
                  re = {
                    active: t('subUserManagement.active'),
                    disabled: t('subUserManagement.disabled'),
                    suspended: t('subUserManagement.suspended')
                  },
                  ae = (function () {
                    var e = o(
                      a().mark(function e() {
                        var r
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((S.value = !0), (e.prev = 1), (e.next = 4), j(n({}, P)))
                                case 4:
                                  ;((r = e.sent),
                                    (V.value = r.items),
                                    (L.value = r.total),
                                    (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(1)),
                                    console.error('获取子用户列表失败:', e.t0),
                                    d.error(t('subUserManagement.getSubUserListFailed')))
                                case 13:
                                  return ((e.prev = 13), (S.value = !1), e.finish(13))
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
                  })()
                f(function () {
                  ;((P.page = 1), ae())
                }, 1e3)
                var ue = function () {
                    D.value = !0
                  },
                  oe = function () {
                    ae()
                  },
                  ie = function () {
                    ae()
                  },
                  ce = (function () {
                    var e = o(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), R(Y.value, ee))
                                case 3:
                                  ;(d.success(t('subUserManagement.setQuotaSuccess')),
                                    (E.value = !1),
                                    ae(),
                                    (e.next = 12))
                                  break
                                case 8:
                                  ;((e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    console.error('设置配额失败:', e.t0),
                                    d.error(t('subUserManagement.setQuotaFailed')))
                                case 12:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  de = function () {
                    ;(d.success(t('subUserManagement.transferGroupSuccess')), (A.value = !1), ae())
                  },
                  fe = (function () {
                    var e = o(
                      a().mark(function e(n) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    c.confirm(
                                      t('subUserManagement.confirmEnableUser', {
                                        username: n.username
                                      }),
                                      t('subUserManagement.confirmEnableTitle'),
                                      {
                                        confirmButtonText: t('subUserManagement.confirm'),
                                        cancelButtonText: t('subUserManagement.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), z(n.id, { user_status: 'active' }))
                                case 5:
                                  ;(d.success(t('subUserManagement.enableUserSuccess')),
                                    ae(),
                                    (e.next = 12))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error('启用用户失败:', e.t0),
                                      d.error(t('subUserManagement.enableUserFailed'))))
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
                  pe = (function () {
                    var e = o(
                      a().mark(function e(n) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    c.confirm(
                                      t('subUserManagement.confirmDisableUser', {
                                        username: n.username
                                      }),
                                      t('subUserManagement.confirmDisableTitle'),
                                      {
                                        confirmButtonText: t('subUserManagement.confirm'),
                                        cancelButtonText: t('subUserManagement.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), z(n.id, { user_status: 'disabled' }))
                                case 5:
                                  ;(d.success(t('subUserManagement.disableUserSuccess')),
                                    ae(),
                                    (e.next = 12))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error('停用用户失败:', e.t0),
                                      d.error(t('subUserManagement.disableUserFailed'))))
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
                  me = (function () {
                    var e = o(
                      a().mark(function e(n) {
                        var r, u
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (r = !n.can_create_instances),
                                    (u = t(
                                      r
                                        ? 'userManagement.enableInstanceCreation'
                                        : 'userManagement.disableInstanceCreation'
                                    )),
                                    (e.next = 5),
                                    c.confirm(
                                      t('userManagement.confirmToggleInstanceCreation', {
                                        action: u
                                      }),
                                      t('userManagement.toggleInstanceCreation'),
                                      {
                                        confirmButtonText: t('common.confirm'),
                                        cancelButtonText: t('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 5:
                                  return ((e.next = 7), q(n.id, { can_create_instances: r }))
                                case 7:
                                  ;(d.success(
                                    t(
                                      r
                                        ? 'userManagement.enableInstanceCreationSuccess'
                                        : 'userManagement.disableInstanceCreationSuccess'
                                    )
                                  ),
                                    ae(),
                                    (e.next = 14))
                                  break
                                case 11:
                                  ;((e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error('切换实例创建权限失败:', e.t0),
                                      d.error(
                                        newPermission
                                          ? t('userManagement.enableInstanceCreationFailed')
                                          : t('userManagement.disableInstanceCreationFailed')
                                      )))
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
                  })(),
                  ge = function () {
                    ;(d.success(t('subUserManagement.deviceAllocateSuccess')), (Q.value = !1), ae())
                  },
                  ve = function () {
                    ;(d.success(t('subUserManagement.deviceUnbindSuccess')), ($.value = !1), ae())
                  },
                  be = function () {
                    ;((K.value = !1), ae())
                  }
                return (
                  C(function () {
                    ;(ae(), v(), window.addEventListener('resize', v))
                  }),
                  T(function () {
                    window.removeEventListener('resize', v)
                  }),
                  function (e, n) {
                    var r = b('el-button'),
                      a = b('el-table-column'),
                      u = b('el-tag'),
                      o = b('el-table'),
                      i = b('el-pagination'),
                      c = b('el-input-number'),
                      d = b('el-form-item'),
                      f = b('el-form'),
                      m = b('el-dialog'),
                      g = I('loading')
                    return (
                      h(),
                      k('div', le, [
                        U(
                          l,
                          { title: '' },
                          {
                            extra: w(function () {
                              return [
                                U(
                                  r,
                                  {
                                    'ml-2': '',
                                    icon: 'RefreshRight',
                                    onClick:
                                      n[0] ||
                                      (n[0] = function () {
                                        ;((P.page = 1), ae())
                                      })
                                  },
                                  {
                                    default: w(function () {
                                      return [_(x(M(t)('subUserManagement.refresh')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                U(
                                  r,
                                  { type: 'primary', onClick: ue },
                                  {
                                    default: w(function () {
                                      return [_(x(M(t)('subUserManagement.createSubUser')), 1)]
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
                          (h(),
                          y(
                            o,
                            {
                              ref_key: 'cTable',
                              ref: s,
                              data: V.value,
                              fit: '',
                              'highlight-current-row': '',
                              style: { width: '100%', 'margin-top': '20px' },
                              'max-height': M(p)
                            },
                            {
                              default: w(function () {
                                return [
                                  U(
                                    a,
                                    {
                                      label: M(t)('subUserManagement.id'),
                                      prop: 'id',
                                      width: '80',
                                      align: 'center'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  U(
                                    a,
                                    { label: M(t)('subUserManagement.username'), prop: 'username' },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  U(
                                    a,
                                    {
                                      label: M(t)('subUserManagement.status'),
                                      width: '100',
                                      align: 'center'
                                    },
                                    {
                                      default: w(function (e) {
                                        var t = e.row
                                        return [
                                          U(
                                            u,
                                            { type: te[t.user_status] },
                                            {
                                              default: w(function () {
                                                return [_(x(re[t.user_status]), 1)]
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
                                  U(
                                    a,
                                    {
                                      prop: 'can_create_instances',
                                      label: e.$t('userManagement.instanceCreationPermission'),
                                      width: '140',
                                      align: 'center'
                                    },
                                    {
                                      default: w(function (t) {
                                        var n = t.row
                                        return [
                                          U(
                                            u,
                                            { type: n.can_create_instances ? 'success' : 'danger' },
                                            {
                                              default: w(function () {
                                                return [
                                                  _(
                                                    x(
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
                                  U(
                                    a,
                                    {
                                      prop: 'quota.max_launches_override',
                                      label: e.$t('userManagement.maxLaunchesOverride'),
                                      width: '120'
                                    },
                                    {
                                      default: w(function (e) {
                                        var t,
                                          n = e.row
                                        return [
                                          _(
                                            x(
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
                                  U(
                                    a,
                                    {
                                      label: M(t)('subUserManagement.createTime'),
                                      align: 'center'
                                    },
                                    {
                                      default: w(function (e) {
                                        var t,
                                          n = e.row
                                        return [
                                          _(
                                            x(
                                              ((t = n.created_at),
                                              new Date(t).toLocaleString('zh-CN'))
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
                                  U(
                                    a,
                                    {
                                      label: M(t)('subUserManagement.operations'),
                                      width: '450',
                                      align: 'center'
                                    },
                                    {
                                      default: w(function (n) {
                                        var a = n.row
                                        return [
                                          U(
                                            r,
                                            {
                                              link: '',
                                              type: 'primary',
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((Y.value = e.sub_ids),
                                                    (J.value = e.username),
                                                    (Q.value = !0))
                                                })(a)
                                              }
                                            },
                                            {
                                              default: w(function () {
                                                return [
                                                  _(x(M(t)('subUserManagement.deviceAllocate')), 1)
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          U(
                                            r,
                                            {
                                              link: '',
                                              type: 'warning',
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((Y.value = e.sub_ids),
                                                    (J.value = e.username),
                                                    ($.value = !0))
                                                })(a)
                                              },
                                              style: { 'margin-left': '8px' }
                                            },
                                            {
                                              default: w(function () {
                                                return [
                                                  _(x(M(t)('subUserManagement.deviceUnbind')), 1)
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          'active' === a.user_status
                                            ? (h(),
                                              y(
                                                r,
                                                {
                                                  key: 0,
                                                  link: '',
                                                  type: 'warning',
                                                  onClick: function (e) {
                                                    return pe(a)
                                                  }
                                                },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(x(M(t)('subUserManagement.disableUser')), 1)
                                                    ]
                                                  }),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick']
                                              ))
                                            : (h(),
                                              y(
                                                r,
                                                {
                                                  key: 1,
                                                  link: '',
                                                  type: 'success',
                                                  onClick: function (e) {
                                                    return fe(a)
                                                  }
                                                },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(x(M(t)('subUserManagement.enableUser')), 1)
                                                    ]
                                                  }),
                                                  _: 2
                                                },
                                                1032,
                                                ['onClick']
                                              )),
                                          U(
                                            r,
                                            {
                                              link: '',
                                              type: 'info',
                                              onClick: function (e) {
                                                return (
                                                  (t = a),
                                                  (X.value = t),
                                                  (W.value = 'view'),
                                                  void (K.value = !0)
                                                )
                                                var t
                                              },
                                              style: { 'margin-left': '8px' }
                                            },
                                            {
                                              default: w(function () {
                                                return [_(x(e.$t('quotaManagement.viewQuota')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          U(
                                            r,
                                            {
                                              link: '',
                                              type: 'warning',
                                              onClick: function (e) {
                                                return (
                                                  (t = a),
                                                  (X.value = t),
                                                  (W.value = 'edit'),
                                                  void (K.value = !0)
                                                )
                                                var t
                                              },
                                              style: { 'margin-left': '8px' }
                                            },
                                            {
                                              default: w(function () {
                                                return [_(x(e.$t('quotaManagement.editQuota')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          U(
                                            r,
                                            {
                                              type: a.can_create_instances ? 'danger' : 'success',
                                              link: '',
                                              onClick: function (e) {
                                                return me(a)
                                              },
                                              style: { 'margin-left': '8px' }
                                            },
                                            {
                                              default: w(function () {
                                                return [
                                                  _(
                                                    x(
                                                      a.can_create_instances
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
                          [[g, S.value]]
                        ),
                        U(
                          i,
                          {
                            'current-page': P.page,
                            'onUpdate:currentPage':
                              n[1] ||
                              (n[1] = function (e) {
                                return (P.page = e)
                              }),
                            'page-size': P.page_size,
                            'onUpdate:pageSize':
                              n[2] ||
                              (n[2] = function (e) {
                                return (P.page_size = e)
                              }),
                            'page-sizes': [10, 20, 50, 100],
                            total: L.value,
                            layout: 'total, sizes, prev, pager, next, jumper',
                            onSizeChange:
                              n[3] ||
                              (n[3] = function () {
                                ;((P.page = 1), ae())
                              }),
                            onCurrentChange: ae,
                            style: { 'margin-top': '20px', 'text-align': 'right' }
                          },
                          null,
                          8,
                          ['current-page', 'page-size', 'total']
                        ),
                        U(
                          G,
                          {
                            modelValue: D.value,
                            'onUpdate:modelValue':
                              n[4] ||
                              (n[4] = function (e) {
                                return (D.value = e)
                              }),
                            title: M(t)('subUserManagement.createUserDialogTitle'),
                            onSuccess: oe
                          },
                          null,
                          8,
                          ['modelValue', 'title']
                        ),
                        U(
                          N,
                          {
                            modelValue: O.value,
                            'onUpdate:modelValue':
                              n[5] ||
                              (n[5] = function (e) {
                                return (O.value = e)
                              }),
                            title: ''
                              .concat(M(t)('subUserManagement.resetPasswordDialogTitle'), ' - ')
                              .concat(J.value),
                            'user-id': Y.value,
                            username: J.value,
                            onSuccess: ie
                          },
                          null,
                          8,
                          ['modelValue', 'title', 'user-id', 'username']
                        ),
                        U(
                          m,
                          {
                            title: M(t)('subUserManagement.setQuotaDialogTitle'),
                            modelValue: E.value,
                            'onUpdate:modelValue':
                              n[10] ||
                              (n[10] = function (e) {
                                return (E.value = e)
                              }),
                            width: '400px'
                          },
                          {
                            footer: w(function () {
                              return [
                                U(
                                  r,
                                  {
                                    onClick:
                                      n[9] ||
                                      (n[9] = function (e) {
                                        return (E.value = !1)
                                      })
                                  },
                                  {
                                    default: w(function () {
                                      return [_(x(M(t)('subUserManagement.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                U(
                                  r,
                                  { type: 'primary', onClick: ce },
                                  {
                                    default: w(function () {
                                      return [_(x(M(t)('subUserManagement.confirm')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: w(function () {
                              return [
                                U(
                                  f,
                                  {
                                    ref_key: 'quotaFormRef',
                                    ref: Z,
                                    model: ee,
                                    'label-width': '100px'
                                  },
                                  {
                                    default: w(function () {
                                      return [
                                        U(
                                          d,
                                          { label: M(t)('subUserManagement.instanceQuota') },
                                          {
                                            default: w(function () {
                                              return [
                                                U(
                                                  c,
                                                  {
                                                    modelValue: ee.instance_limit,
                                                    'onUpdate:modelValue':
                                                      n[6] ||
                                                      (n[6] = function (e) {
                                                        return (ee.instance_limit = e)
                                                      }),
                                                    min: 1,
                                                    max: 1e3
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
                                        U(
                                          d,
                                          { label: M(t)('subUserManagement.storageQuota') },
                                          {
                                            default: w(function () {
                                              return [
                                                U(
                                                  c,
                                                  {
                                                    modelValue: ee.storage_limit,
                                                    'onUpdate:modelValue':
                                                      n[7] ||
                                                      (n[7] = function (e) {
                                                        return (ee.storage_limit = e)
                                                      }),
                                                    min: 1,
                                                    max: 1e4
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
                                        U(
                                          d,
                                          { label: M(t)('subUserManagement.bandwidthQuota') },
                                          {
                                            default: w(function () {
                                              return [
                                                U(
                                                  c,
                                                  {
                                                    modelValue: ee.bandwidth_limit,
                                                    'onUpdate:modelValue':
                                                      n[8] ||
                                                      (n[8] = function (e) {
                                                        return (ee.bandwidth_limit = e)
                                                      }),
                                                    min: 1,
                                                    max: 1e3
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
                        ),
                        U(
                          H,
                          {
                            modelValue: A.value,
                            'onUpdate:modelValue':
                              n[11] ||
                              (n[11] = function (e) {
                                return (A.value = e)
                              }),
                            title: ''
                              .concat(M(t)('subUserManagement.transferGroupDialogTitle'), ' - ')
                              .concat(J.value),
                            'user-id': Y.value,
                            username: J.value,
                            onSuccess: de
                          },
                          null,
                          8,
                          ['modelValue', 'title', 'user-id', 'username']
                        ),
                        U(
                          ne,
                          {
                            modelValue: Q.value,
                            'onUpdate:modelValue':
                              n[12] ||
                              (n[12] = function (e) {
                                return (Q.value = e)
                              }),
                            'user-id': Y.value,
                            username: J.value,
                            onSuccess: ge
                          },
                          null,
                          8,
                          ['modelValue', 'user-id', 'username']
                        ),
                        U(
                          se,
                          {
                            modelValue: $.value,
                            'onUpdate:modelValue':
                              n[13] ||
                              (n[13] = function (e) {
                                return ($.value = e)
                              }),
                            'user-id': Y.value,
                            username: J.value,
                            onSuccess: ve
                          },
                          null,
                          8,
                          ['modelValue', 'user-id', 'username']
                        ),
                        U(
                          F,
                          {
                            visible: K.value,
                            'onUpdate:visible':
                              n[14] ||
                              (n[14] = function (e) {
                                return (K.value = e)
                              }),
                            user: X.value,
                            mode: W.value,
                            onSuccess: be
                          },
                          null,
                          8,
                          ['visible', 'user', 'mode']
                        )
                      ])
                    )
                  }
                )
              }
            })
          e('default', s(ie, [['__scopeId', 'data-v-e8d079e8']]))
        }
      }
    }
  )
})()
