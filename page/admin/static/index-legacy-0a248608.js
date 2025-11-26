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
      o = Object.prototype,
      i = o.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      u = l.iterator || '@@iterator',
      c = l.asyncIterator || '@@asyncIterator',
      s = l.toStringTag || '@@toStringTag'
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
    function d(e, t, n, r) {
      var o = t && t.prototype instanceof b ? t : b,
        i = Object.create(o.prototype),
        l = new C(r || [])
      return (a(i, '_invoke', { value: O(e, n, l) }), i)
    }
    function p(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    r.wrap = d
    var h = 'suspendedStart',
      g = 'suspendedYield',
      m = 'executing',
      v = 'completed',
      y = {}
    function b() {}
    function w() {}
    function x() {}
    var E = {}
    f(E, u, function () {
      return this
    })
    var j = Object.getPrototypeOf,
      S = j && j(j(I([])))
    S && S !== o && i.call(S, u) && (E = S)
    var L = (x.prototype = b.prototype = Object.create(E))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function _(t, n) {
      function r(o, a, l, u) {
        var c = p(t[o], t, a)
        if ('throw' !== c.type) {
          var s = c.arg,
            f = s.value
          return f && 'object' == e(f) && i.call(f, '__await')
            ? n.resolve(f.__await).then(
                function (e) {
                  r('next', e, l, u)
                },
                function (e) {
                  r('throw', e, l, u)
                }
              )
            : n.resolve(f).then(
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
      var o
      a(this, '_invoke', {
        value: function (e, t) {
          function i() {
            return new n(function (n, o) {
              r(e, t, n, o)
            })
          }
          return (o = o ? o.then(i, i) : i())
        }
      })
    }
    function O(e, t, r) {
      var o = h
      return function (i, a) {
        if (o === m) throw new Error('Generator is already running')
        if (o === v) {
          if ('throw' === i) throw a
          return { value: n, done: !0 }
        }
        for (r.method = i, r.arg = a; ; ) {
          var l = r.delegate
          if (l) {
            var u = T(l, r)
            if (u) {
              if (u === y) continue
              return u
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (o === h) throw ((o = v), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          o = m
          var c = p(e, t, r)
          if ('normal' === c.type) {
            if (((o = r.done ? v : g), c.arg === y)) continue
            return { value: c.arg, done: r.done }
          }
          'throw' === c.type && ((o = v), (r.method = 'throw'), (r.arg = c.arg))
        }
      }
    }
    function T(e, t) {
      var r = t.method,
        o = e.iterator[r]
      if (o === n)
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
      var i = p(o, e.iterator, t.arg)
      if ('throw' === i.type) return ((t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), y)
      var a = i.arg
      return a
        ? a.done
          ? ((t[e.resultName] = a.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            y)
          : a
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          y)
    }
    function P(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function V(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function C(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0))
    }
    function I(t) {
      if (t || '' === t) {
        var r = t[u]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var o = -1,
            a = function e() {
              for (; ++o < t.length; ) if (i.call(t, o)) return ((e.value = t[o]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (a.next = a)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      a(L, 'constructor', { value: x, configurable: !0 }),
      a(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = f(x, s, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), f(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(L)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      k(_.prototype),
      f(_.prototype, c, function () {
        return this
      }),
      (r.AsyncIterator = _),
      (r.async = function (e, t, n, o, i) {
        void 0 === i && (i = Promise)
        var a = new _(d(e, t, n, o), i)
        return r.isGeneratorFunction(t)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next()
            })
      }),
      k(L),
      f(L, s, 'Generator'),
      f(L, u, function () {
        return this
      }),
      f(L, 'toString', function () {
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
      (r.values = I),
      (C.prototype = {
        constructor: C,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(V),
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
          function r(r, o) {
            return (
              (l.type = 'throw'),
              (l.arg = e),
              (t.next = r),
              o && ((t.method = 'next'), (t.arg = n)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              l = a.completion
            if ('root' === a.tryLoc) return r('end')
            if (a.tryLoc <= this.prev) {
              var u = i.call(a, 'catchLoc'),
                c = i.call(a, 'finallyLoc')
              if (u && c) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return r(a.finallyLoc)
              } else if (u) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < a.finallyLoc) return r(a.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var o = r
              break
            }
          }
          o &&
            ('break' === e || 'continue' === e) &&
            o.tryLoc <= t &&
            t <= o.finallyLoc &&
            (o = null)
          var a = o ? o.completion : {}
          return (
            (a.type = e),
            (a.arg = t),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), y) : this.complete(a)
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
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), V(n), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var o = r.arg
                V(n)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, r) {
          return (
            (this.delegate = { iterator: I(e), resultName: t, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            y
          )
        }
      }),
      r
    )
  }
  function n(e, t, n, r, o, i, a) {
    try {
      var l = e[i](a),
        u = l.value
    } catch (c) {
      return void n(c)
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (o, i) {
        var a = e.apply(t, r)
        function l(e) {
          n(a, o, i, l, u, 'next', e)
        }
        function u(e) {
          n(a, o, i, l, u, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  function o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var n =
          null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (null != n) {
          var r,
            o,
            i,
            a,
            l = [],
            u = !0,
            c = !1
          try {
            if (((i = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return
              u = !1
            } else for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
          } catch (e) {
            ;((c = !0), (o = e))
          } finally {
            try {
              if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return
            } finally {
              if (c) throw o
            }
          }
          return l
        }
      })(e, t) ||
      (function (e, t) {
        if (!e) return
        if ('string' == typeof e) return i(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        'Object' === n && e.constructor && (n = e.constructor.name)
        if ('Map' === n || 'Set' === n) return Array.from(e)
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function i(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  System.register(
    [
      './hellocloudlogo-1-legacy-5aa6cf0a.js',
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-d4b804d0.js',
      './validate-legacy-7af8d5ea.js',
      './index-legacy-911baf4a.js',
      './index-legacy-9ebda059.js',
      './index-legacy-05e48c13.js',
      './index-legacy-0fcb45ef.js',
      './function-call-legacy-ae1bc7d7.js',
      './element-legacy-e7b6e573.js',
      './vxe-legacy-cc8d3321.js',
      './use-route-legacy-d64f6436.js'
    ],
    function (e, n) {
      'use strict'
      var i,
        a,
        l,
        u,
        c,
        s,
        f,
        d,
        p,
        h,
        g,
        m,
        v,
        y,
        b,
        w,
        x,
        E,
        j,
        S,
        L,
        k,
        _,
        O,
        T,
        P,
        V,
        C,
        I,
        F,
        A,
        B,
        G,
        N
      return {
        setters: [
          function (e) {
            i = e._
          },
          function (e) {
            ;((a = e.y),
              (l = e.N),
              (u = e.aq),
              (c = e.r),
              (s = e.R),
              (f = e.m),
              (d = e.f),
              (p = e.h),
              (h = e.i),
              (g = e.H),
              (m = e.u),
              (v = e.G),
              (y = e.K),
              (b = e.L),
              (w = e.M),
              (x = e.ar),
              (E = e.as))
          },
          function (e) {
            ;((j = e.j), (S = e.f), (L = e.k), (k = e._))
          },
          function (e) {
            _ = e.a
          },
          null,
          function (e) {
            O = e.F
          },
          function (e) {
            T = e.B
          },
          function (e) {
            ;((P = e.c), (V = e.u), (C = e.n), (I = e.t), (F = e.p), (A = e.F), (B = e.w))
          },
          function (e) {
            ;((G = e.u), (N = e.a))
          },
          null,
          null,
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '@charset "UTF-8";.mobile-login-container[data-v-e81d7425]{min-height:100vh;width:100%;background:linear-gradient(135deg,#ffd100 0%,#ffb347 100%)}.mobile-login-container .login-content[data-v-e81d7425]{padding:80px 20px 40px}.mobile-login-container .login-content .login-logo[data-v-e81d7425]{text-align:center;margin-bottom:40px}.mobile-login-container .login-content .login-logo img[data-v-e81d7425]{width:120px;margin-bottom:16px}.mobile-login-container .login-content .login-logo h2[data-v-e81d7425]{color:#fff;font-size:20px;font-weight:500;margin:0}.mobile-login-container .login-content .van-form[data-v-e81d7425]{background:white;border-radius:12px;padding:20px 0;box-shadow:0 4px 12px rgba(0,0,0,.1)}.mobile-login-container .login-content .login-switch[data-v-e81d7425]{text-align:center;margin:20px 0}.mobile-login-container .login-content .login-tip[data-v-e81d7425]{text-align:center;margin-top:30px}.mobile-login-container .login-content .login-tip p[data-v-e81d7425]{color:rgba(255,255,255,.8);font-size:14px;margin:0}@media (min-width: 821px){.mobile-login-container[data-v-e81d7425]{display:none}}\n'),
            document.head.appendChild(n))
          var q = o(P('form'), 2),
            U = q[0],
            z = q[1],
            D = {
              colon: Boolean,
              disabled: Boolean,
              readonly: Boolean,
              required: [Boolean, String],
              showError: Boolean,
              labelWidth: C,
              labelAlign: String,
              inputAlign: String,
              scrollToError: Boolean,
              scrollToErrorPosition: String,
              validateFirst: Boolean,
              submitOnEnter: I,
              showErrorMessage: I,
              errorMessageAlign: String,
              validateTrigger: { type: [String, Array], default: 'onBlur' }
            },
            M = a({
              name: U,
              props: D,
              emits: ['submit', 'failed'],
              setup: function (e, t) {
                var n = t.emit,
                  r = t.slots,
                  o = V(A),
                  i = o.children,
                  a = o.linkChildren,
                  u = function (e) {
                    return e
                      ? i.filter(function (t) {
                          return e.includes(t.name)
                        })
                      : i
                  },
                  c = function (t) {
                    return 'string' == typeof t
                      ? (function (e) {
                          var t = i.find(function (t) {
                            return t.name === e
                          })
                          return t
                            ? new Promise(function (e, n) {
                                t.validate().then(function (t) {
                                  t ? n(t) : e()
                                })
                              })
                            : Promise.reject()
                        })(t)
                      : e.validateFirst
                        ? ((n = t),
                          new Promise(function (e, t) {
                            var r = []
                            u(n)
                              .reduce(function (e, t) {
                                return e.then(function () {
                                  if (!r.length)
                                    return t.validate().then(function (e) {
                                      e && r.push(e)
                                    })
                                })
                              }, Promise.resolve())
                              .then(function () {
                                r.length ? t(r) : e()
                              })
                          }))
                        : (function (e) {
                            return new Promise(function (t, n) {
                              var r = u(e)
                              Promise.all(
                                r.map(function (e) {
                                  return e.validate()
                                })
                              ).then(function (e) {
                                ;(e = e.filter(Boolean)).length ? n(e) : t()
                              })
                            })
                          })(t)
                    var n
                  },
                  s = function (e, t) {
                    i.some(function (n) {
                      return n.name === e && (n.$el.scrollIntoView(t), !0)
                    })
                  },
                  f = function () {
                    return i.reduce(function (e, t) {
                      return (void 0 !== t.name && (e[t.name] = t.formValue.value), e)
                    }, {})
                  },
                  d = function () {
                    var t = f()
                    c()
                      .then(function () {
                        return n('submit', t)
                      })
                      .catch(function (r) {
                        n('failed', { values: t, errors: r })
                        var o = e.scrollToError,
                          i = e.scrollToErrorPosition
                        o && r[0].name && s(r[0].name, i ? { block: i } : void 0)
                      })
                  },
                  p = function (e) {
                    ;(F(e), d())
                  }
                return (
                  a({ props: e }),
                  G({
                    submit: d,
                    validate: c,
                    getValues: f,
                    scrollToField: s,
                    resetValidation: function (e) {
                      ;('string' == typeof e && (e = [e]),
                        u(e).forEach(function (e) {
                          e.resetValidation()
                        }))
                    },
                    getValidationStatus: function () {
                      return i.reduce(function (e, t) {
                        return ((e[t.name] = t.getValidationStatus()), e)
                      }, {})
                    }
                  }),
                  function () {
                    var e
                    return l('form', { class: z(), onSubmit: p }, [
                      null == (e = r.default) ? void 0 : e.call(r)
                    ])
                  }
                )
              }
            }),
            R = B(M),
            Y = function (e) {
              return (x('data-v-e81d7425'), (e = e()), E(), e)
            },
            $ = { class: 'mobile-login-container' },
            H = { class: 'login-content' },
            K = Y(function () {
              return h(
                'div',
                { class: 'login-logo' },
                [h('img', { src: i, alt: '云手机管理平台' }), h('h2', null, '云手机管理平台')],
                -1
              )
            }),
            W = { style: { margin: '32px 16px' } },
            J = Y(function () {
              return h('div', { class: 'login-tip' }, [h('p', null, '稳定 · 弹性 · 省钱')], -1)
            }),
            Q = a({
              __name: 'index',
              setup: function (e) {
                var n = u(),
                  o = c(null),
                  i = c(!1),
                  a = c(!0),
                  x = c(!0),
                  E = c(60),
                  k = c(null),
                  P = c(!1),
                  V = s({ username: '', password: '', verificationCode: '', code: '' }),
                  C = function () {
                    ;(j('pc'), (window.location.href = '/'))
                  },
                  I = function (e) {
                    return '' === e
                      ? ((P.value = !1), '请输入用户名')
                      : _(e)
                        ? ((P.value = !0), !0)
                        : ((P.value = !1), '用户名不正确')
                  },
                  F = (function () {
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
                                    (i.value = !0),
                                    (r = new FormData()).append('grant_type', 'password'),
                                    r.append('username', V.username),
                                    a.value
                                      ? r.append('password', V.password)
                                      : r.append('password', V.verificationCode),
                                    (e.next = 8),
                                    S().login(r)
                                  )
                                case 8:
                                  ;(N({ type: 'success', message: '登录成功', duration: 1500 }),
                                    setTimeout(function () {
                                      n.push({ path: '/mobile/instance' })
                                    }, 1500),
                                    (e.next = 15))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(0)),
                                    console.error('登录失败', e.t0))
                                case 15:
                                  return ((e.prev = 15), (i.value = !1), e.finish(15))
                                case 18:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 12, 15, 18]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  A = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!localStorage.getItem('loginCodeacquireTime')) {
                                    e.next = 7
                                    break
                                  }
                                  if (
                                    !(
                                      Date.now() -
                                        Number(localStorage.getItem('loginCodeacquireTime')) <
                                      6e4
                                    )
                                  ) {
                                    e.next = 6
                                    break
                                  }
                                  return (
                                    N({
                                      type: 'warning',
                                      message: '发送次数过多，请稍后再试！',
                                      duration: 2e3
                                    }),
                                    e.abrupt('return')
                                  )
                                case 6:
                                  localStorage.removeItem('loginCodeacquireTime')
                                case 7:
                                  if (!0 === (n = I(V.username))) {
                                    e.next = 11
                                    break
                                  }
                                  return (
                                    N({ type: 'fail', message: n, duration: 2e3 }),
                                    e.abrupt('return')
                                  )
                                case 11:
                                  return (
                                    (e.prev = 11),
                                    (e.next = 14),
                                    L({
                                      kind: 'mobile',
                                      destination: V.username,
                                      scene: 'login',
                                      role: 'user'
                                    })
                                  )
                                case 14:
                                  ;((x.value = !1),
                                    (E.value = 60),
                                    localStorage.setItem(
                                      'loginCodeacquireTime',
                                      String(Date.now())
                                    ),
                                    (k.value = setInterval(function () {
                                      ;(E.value--,
                                        E.value <= 0 && (clearInterval(k.value), (x.value = !0)))
                                    }, 1e3)),
                                    N({
                                      type: 'success',
                                      message: '验证码发送成功',
                                      duration: 1500
                                    }),
                                    (e.next = 25))
                                  break
                                case 21:
                                  ;((e.prev = 21),
                                    (e.t0 = e.catch(11)),
                                    console.error('验证码发送失败', e.t0),
                                    N({ type: 'fail', message: '验证码发送失败', duration: 2e3 }))
                                case 25:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[11, 21]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return (
                  f(function () {
                    k.value && clearInterval(k.value)
                  }),
                  function (e, t) {
                    return (
                      d(),
                      p('div', $, [
                        h('div', H, [
                          K,
                          l(
                            m(R),
                            { ref_key: 'loginFormRef', ref: o, onSubmit: F },
                            {
                              default: g(function () {
                                return [
                                  l(
                                    m(O),
                                    {
                                      modelValue: V.username,
                                      'onUpdate:modelValue':
                                        t[0] ||
                                        (t[0] = function (e) {
                                          return (V.username = e)
                                        }),
                                      name: 'username',
                                      label: '用户名',
                                      placeholder: '请输入用户名',
                                      rules: [{ required: !0, message: '请输入用户名' }],
                                      clearable: ''
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  a.value
                                    ? (d(),
                                      v(
                                        m(O),
                                        {
                                          key: 0,
                                          modelValue: V.password,
                                          'onUpdate:modelValue':
                                            t[1] ||
                                            (t[1] = function (e) {
                                              return (V.password = e)
                                            }),
                                          type: 'password',
                                          name: 'password',
                                          label: '密码',
                                          placeholder: '请输入密码',
                                          rules: [
                                            { required: !0, message: '请输入密码' },
                                            { min: 8, max: 20, message: '密码长度8-20位' }
                                          ],
                                          clearable: ''
                                        },
                                        null,
                                        8,
                                        ['modelValue']
                                      ))
                                    : y('', !0),
                                  a.value
                                    ? y('', !0)
                                    : (d(),
                                      v(
                                        m(O),
                                        {
                                          key: 1,
                                          modelValue: V.verificationCode,
                                          'onUpdate:modelValue':
                                            t[2] ||
                                            (t[2] = function (e) {
                                              return (V.verificationCode = e)
                                            }),
                                          name: 'verificationCode',
                                          label: '验证码',
                                          placeholder: '请输入验证码',
                                          rules: [{ required: !0, message: '请输入验证码' }],
                                          maxlength: '7',
                                          clearable: ''
                                        },
                                        {
                                          button: g(function () {
                                            return [
                                              l(
                                                m(T),
                                                {
                                                  size: 'small',
                                                  type: 'primary',
                                                  disabled: !P.value || !x.value,
                                                  onClick: A
                                                },
                                                {
                                                  default: g(function () {
                                                    return [
                                                      b(
                                                        w(
                                                          x.value
                                                            ? '获取验证码'
                                                            : ''.concat(E.value, '秒后重新获取')
                                                        ),
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
                                        },
                                        8,
                                        ['modelValue']
                                      )),
                                  h('div', W, [
                                    l(
                                      m(T),
                                      {
                                        round: '',
                                        block: '',
                                        type: 'primary',
                                        'native-type': 'submit',
                                        loading: i.value,
                                        'loading-text': '登录中...'
                                      },
                                      {
                                        default: g(function () {
                                          return [b(' 登录 ')]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['loading']
                                    )
                                  ])
                                ]
                              }),
                              _: 1
                            },
                            512
                          ),
                          J,
                          h('div', { class: 'login-tip', style: { 'margin-top': '60px' } }, [
                            h('p', { onClick: C }, '切换桌面版')
                          ])
                        ])
                      ])
                    )
                  }
                )
              }
            })
          e('default', k(Q, [['__scopeId', 'data-v-e81d7425']]))
        }
      }
    }
  )
})()
