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
      l =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      c = u.iterator || '@@iterator',
      i = u.asyncIterator || '@@asyncIterator',
      p = u.toStringTag || '@@toStringTag'
    function s(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      s({}, '')
    } catch (n) {
      s = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, r) {
      var a = t && t.prototype instanceof h ? t : h,
        o = Object.create(a.prototype),
        u = new E(r || [])
      return (l(o, '_invoke', { value: T(e, n, u) }), o)
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
      y = 'suspendedYield',
      g = 'executing',
      v = 'completed',
      x = {}
    function h() {}
    function b() {}
    function w() {}
    var M = {}
    s(M, c, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      k = _ && _(_(N([])))
    k && k !== a && o.call(k, c) && (M = k)
    var $ = (w.prototype = h.prototype = Object.create(M))
    function F(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        s(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function C(t, n) {
      function r(a, l, u, c) {
        var i = d(t[a], t, l)
        if ('throw' !== i.type) {
          var p = i.arg,
            s = p.value
          return s && 'object' == e(s) && o.call(s, '__await')
            ? n.resolve(s.__await).then(
                function (e) {
                  r('next', e, u, c)
                },
                function (e) {
                  r('throw', e, u, c)
                }
              )
            : n.resolve(s).then(
                function (e) {
                  ;((p.value = e), u(p))
                },
                function (e) {
                  return r('throw', e, u, c)
                }
              )
        }
        c(i.arg)
      }
      var a
      l(this, '_invoke', {
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
    function T(e, t, r) {
      var a = m
      return function (o, l) {
        if (a === g) throw new Error('Generator is already running')
        if (a === v) {
          if ('throw' === o) throw l
          return { value: n, done: !0 }
        }
        for (r.method = o, r.arg = l; ; ) {
          var u = r.delegate
          if (u) {
            var c = L(u, r)
            if (c) {
              if (c === x) continue
              return c
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === m) throw ((a = v), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = g
          var i = d(e, t, r)
          if ('normal' === i.type) {
            if (((a = r.done ? v : y), i.arg === x)) continue
            return { value: i.arg, done: r.done }
          }
          'throw' === i.type && ((a = v), (r.method = 'throw'), (r.arg = i.arg))
        }
      }
    }
    function L(e, t) {
      var r = t.method,
        a = e.iterator[r]
      if (a === n)
        return (
          (t.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = n), L(e, t), 'throw' === t.method)) ||
            ('return' !== r &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          x
        )
      var o = d(a, e.iterator, t.arg)
      if ('throw' === o.type) return ((t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), x)
      var l = o.arg
      return l
        ? l.done
          ? ((t[e.resultName] = l.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            x)
          : l
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          x)
    }
    function S(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function V(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function E(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(S, this), this.reset(!0))
    }
    function N(t) {
      if (t || '' === t) {
        var r = t[c]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            l = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (l.next = l)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (b.prototype = w),
      l($, 'constructor', { value: w, configurable: !0 }),
      l(w, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = s(w, p, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), s(e, p, 'GeneratorFunction')),
          (e.prototype = Object.create($)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      F(C.prototype),
      s(C.prototype, i, function () {
        return this
      }),
      (r.AsyncIterator = C),
      (r.async = function (e, t, n, a, o) {
        void 0 === o && (o = Promise)
        var l = new C(f(e, t, n, a), o)
        return r.isGeneratorFunction(t)
          ? l
          : l.next().then(function (e) {
              return e.done ? e.value : l.next()
            })
      }),
      F($),
      s($, p, 'Generator'),
      s($, c, function () {
        return this
      }),
      s($, 'toString', function () {
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
      (E.prototype = {
        constructor: E,
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
              (u.type = 'throw'),
              (u.arg = e),
              (t.next = r),
              a && ((t.method = 'next'), (t.arg = n)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var l = this.tryEntries[a],
              u = l.completion
            if ('root' === l.tryLoc) return r('end')
            if (l.tryLoc <= this.prev) {
              var c = o.call(l, 'catchLoc'),
                i = o.call(l, 'finallyLoc')
              if (c && i) {
                if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
                if (this.prev < l.finallyLoc) return r(l.finallyLoc)
              } else if (c) {
                if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
              } else {
                if (!i) throw new Error('try statement without catch or finally')
                if (this.prev < l.finallyLoc) return r(l.finallyLoc)
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
          var l = a ? a.completion : {}
          return (
            (l.type = e),
            (l.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), x) : this.complete(l)
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
            x
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), V(n), x)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                V(n)
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
            x
          )
        }
      }),
      r
    )
  }
  function n(e, t, n, r, a, o, l) {
    try {
      var u = e[o](l),
        c = u.value
    } catch (i) {
      return void n(i)
    }
    u.done ? t(c) : Promise.resolve(c).then(r, a)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (a, o) {
        var l = e.apply(t, r)
        function u(e) {
          n(l, a, o, u, c, 'next', e)
        }
        function c(e) {
          n(l, a, o, u, c, 'throw', e)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './index-legacy-403fb186.js',
      './index-legacy-62a49047.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './useTableHeightFit-legacy-f881449c.js',
      './permission-legacy-825f1a25.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, n) {
      'use strict'
      var a,
        o,
        l,
        u,
        c,
        i,
        p,
        s,
        f,
        d,
        m,
        y,
        g,
        v,
        x,
        h,
        b,
        w,
        M,
        _,
        k,
        $,
        F,
        C,
        T,
        L,
        S,
        V,
        E,
        N,
        j,
        P,
        U,
        G,
        O
      return {
        setters: [
          function (e) {
            ;((a = e.h), (o = e._))
          },
          function (e) {
            ;((l = e.u),
              (u = e.g),
              (c = e.a),
              (i = e.c),
              (p = e.d),
              (s = e.b),
              (f = e.e),
              (d = e.f))
          },
          function (e) {
            m = e.a
          },
          function (e) {
            ;((y = e.E), (g = e.G))
          },
          function (e) {
            ;((v = e.y),
              (x = e.e),
              (h = e.r),
              (b = e.b),
              (w = e.a8),
              (M = e.f),
              (_ = e.G),
              (k = e.H),
              ($ = e.N),
              (F = e.L),
              (C = e.M),
              (T = e.h),
              (L = e.a0),
              (S = e.F),
              (V = e.i),
              (E = e.Q),
              (N = e.ag),
              (j = e.I),
              (P = e.u),
              (U = e.K))
          },
          function (e) {
            G = e.u
          },
          function (e) {
            O = e.c
          },
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.proxy-management[data-v-a5152fc7]{padding:20px}.proxy-management .toolbar[data-v-a5152fc7]{margin-bottom:20px}.proxy-management .toolbar .el-button[data-v-a5152fc7]{margin-right:10px}.proxy-management .pagination[data-v-a5152fc7]{margin-top:20px;display:flex;justify-content:flex-start}.proxy-management .dialog-footer[data-v-a5152fc7]{display:flex;justify-content:flex-start}.proxy-management .dialog-footer .el-button[data-v-a5152fc7]{margin-left:10px}\n'),
            document.head.appendChild(n))
          var B = { class: 'el-upload__text' },
            D = { class: 'el-upload__tip' },
            z = v({
              __name: 'UploadProxyDialog',
              props: { modelValue: { type: Boolean, default: !1 } },
              emits: ['update:modelValue', 'success'],
              setup: function (e, n) {
                var o = n.emit,
                  u = a().t,
                  c = e,
                  i = o,
                  p = x({
                    get: function () {
                      return c.modelValue
                    },
                    set: function (e) {
                      return i('update:modelValue', e)
                    }
                  }),
                  s = h(),
                  f = h(),
                  d = h(!1),
                  g = h([]),
                  v = h({ groupName: '' }),
                  E = h(),
                  N = {
                    groupName: [
                      { required: !0, message: u('proxyManagement.selectGroup'), trigger: 'change' }
                    ]
                  },
                  j = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), m())
                                case 3:
                                  ;((n = e.sent), (g.value = n || []), (e.next = 11))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取代理分组列表失败', e.t0),
                                    y.error(u('proxyManagement.getGroupListFailed')))
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
                  })(),
                  P = function () {
                    y.warning(u('proxyManagement.onlyOneFile'))
                  },
                  U = function (e) {
                    f.value = e.raw
                  },
                  G = function (e) {
                    ;(y.success(u('proxyManagement.uploadSuccess')),
                      (p.value = !1),
                      s.value && s.value.clearFiles(),
                      (v.value.groupName = ''),
                      i('success'))
                  },
                  O = function (e) {
                    ;(console.error(e),
                      y.error(u('proxyManagement.uploadFailed')),
                      s.value && s.value.clearFiles())
                  },
                  z = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (f.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    y.warning(u('proxyManagement.selectFileFirst')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return ((e.prev = 3), (e.next = 6), E.value.validate())
                                case 6:
                                  e.next = 12
                                  break
                                case 8:
                                  return (
                                    (e.prev = 8),
                                    (e.t0 = e.catch(3)),
                                    y.warning(u('proxyManagement.completeFormFirst')),
                                    e.abrupt('return')
                                  )
                                case 12:
                                  return (
                                    (n = new FormData()).append('file', f.value),
                                    v.value.groupName && n.append('group_name', v.value.groupName),
                                    (d.value = !0),
                                    (e.prev = 16),
                                    (e.next = 19),
                                    l(n, v.value.groupName)
                                  )
                                case 19:
                                  ;(y.success(u('proxyManagement.uploadSuccess')),
                                    (p.value = !1),
                                    s.value && s.value.clearFiles(),
                                    (v.value.groupName = ''),
                                    i('success'),
                                    (e.next = 30))
                                  break
                                case 26:
                                  ;((e.prev = 26),
                                    (e.t1 = e.catch(16)),
                                    console.error(e.t1),
                                    y.error(u('proxyManagement.uploadFailed')))
                                case 30:
                                  return ((e.prev = 30), (d.value = !1), e.finish(30))
                                case 33:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [3, 8],
                            [16, 26, 30, 33]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  R = function () {
                    ;((p.value = !1),
                      s.value && s.value.clearFiles(),
                      (f.value = null),
                      (v.value.groupName = ''))
                  }
                return (
                  b(function () {
                    j()
                  }),
                  function (e, t) {
                    var n = w('el-option'),
                      r = w('el-select'),
                      a = w('el-form-item'),
                      o = w('upload-filled'),
                      l = w('el-icon'),
                      u = w('el-upload'),
                      c = w('el-form'),
                      i = w('el-button'),
                      f = w('el-dialog')
                    return (
                      M(),
                      _(
                        f,
                        {
                          title: e.$t('proxyManagement.uploadProxyDialog'),
                          modelValue: p.value,
                          'onUpdate:modelValue':
                            t[1] ||
                            (t[1] = function (e) {
                              return (p.value = e)
                            }),
                          width: '500px'
                        },
                        {
                          footer: k(function () {
                            return [
                              $(
                                i,
                                {
                                  style: { 'margin-right': '10px' },
                                  type: 'success',
                                  onClick: z,
                                  loading: d.value
                                },
                                {
                                  default: k(function () {
                                    return [F(C(e.$t('proxyManagement.uploadToServer')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading']
                              ),
                              $(
                                i,
                                { onClick: R },
                                {
                                  default: k(function () {
                                    return [F(C(e.$t('proxyManagement.cancel')), 1)]
                                  }),
                                  _: 1
                                }
                              )
                            ]
                          }),
                          default: k(function () {
                            return [
                              $(
                                c,
                                {
                                  model: v.value,
                                  'label-width': '120px',
                                  rules: N,
                                  ref_key: 'formRef',
                                  ref: E
                                },
                                {
                                  default: k(function () {
                                    return [
                                      $(
                                        a,
                                        { label: e.$t('proxyManagement.group'), prop: 'groupName' },
                                        {
                                          default: k(function () {
                                            return [
                                              $(
                                                r,
                                                {
                                                  modelValue: v.value.groupName,
                                                  'onUpdate:modelValue':
                                                    t[0] ||
                                                    (t[0] = function (e) {
                                                      return (v.value.groupName = e)
                                                    }),
                                                  placeholder: e.$t('proxyManagement.selectGroup')
                                                },
                                                {
                                                  default: k(function () {
                                                    return [
                                                      (M(!0),
                                                      T(
                                                        S,
                                                        null,
                                                        L(g.value, function (e) {
                                                          return (
                                                            M(),
                                                            _(
                                                              n,
                                                              {
                                                                key: e.uuid,
                                                                label: e.name,
                                                                value: e.name
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
                                      $(
                                        a,
                                        { label: e.$t('proxyManagement.selectFile') },
                                        {
                                          default: k(function () {
                                            return [
                                              $(
                                                u,
                                                {
                                                  ref_key: 'uploadRef',
                                                  ref: s,
                                                  action: '/cpyservice/user/customproxy/',
                                                  'auto-upload': !1,
                                                  'on-change': U,
                                                  'on-success': G,
                                                  'on-error': O,
                                                  limit: 1,
                                                  drag: '',
                                                  'on-exceed': P
                                                },
                                                {
                                                  tip: k(function () {
                                                    return [
                                                      V(
                                                        'div',
                                                        D,
                                                        C(e.$t('proxyManagement.uploadTip')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  default: k(function () {
                                                    return [
                                                      $(
                                                        l,
                                                        { class: 'el-icon--upload' },
                                                        {
                                                          default: k(function () {
                                                            return [$(o)]
                                                          }),
                                                          _: 1
                                                        }
                                                      ),
                                                      V(
                                                        'div',
                                                        B,
                                                        C(e.$t('proxyManagement.dragOrClick')),
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
            R = { class: 'proxy-management' },
            I = { class: 'pagination' },
            Q = { slot: 'tip', class: 'el-upload__tip' },
            A = { class: 'dialog-footer' },
            q = v({
              __name: 'index',
              setup: function (e) {
                var n = a().t,
                  o = h([]),
                  l = h(!1),
                  v = h([]),
                  x = h(''),
                  B = h({ page: 1, pageSize: 50, total: 0 }),
                  D = h(0),
                  q = h([]),
                  H = h(''),
                  Y = G(),
                  K = Y.cTable,
                  J = Y.maxHeight,
                  W = Y.handleGetTableHeight,
                  X = h(!1),
                  Z = h(!1),
                  ee = h(!1),
                  te = h(!1),
                  ne = h(!1),
                  re = h(),
                  ae = h([]),
                  oe = h(!1),
                  le = h({
                    countryCode: 'US',
                    proxyType: 'socks5',
                    rolltime: 30,
                    goodNum: 1,
                    group_name: ''
                  }),
                  ue = {
                    countryCode: [
                      {
                        required: !0,
                        message: n('proxyManagement.selectCountry'),
                        trigger: 'change'
                      }
                    ],
                    proxyType: [
                      {
                        required: !0,
                        message: n('proxyManagement.selectProxyType'),
                        trigger: 'change'
                      }
                    ],
                    rolltime: [
                      {
                        required: !0,
                        message: n('proxyManagement.selectRotationCycle'),
                        trigger: 'change'
                      }
                    ],
                    goodNum: [
                      {
                        required: !0,
                        message: n('proxyManagement.enterCreateQuantity'),
                        trigger: 'blur'
                      }
                    ]
                  }
                h({
                  id: '',
                  proxyName: '',
                  proxyType: '',
                  ip: '',
                  port: 0,
                  username: '',
                  password: ''
                })
                var ce = h(),
                  ie = h(),
                  pe = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), m())
                                case 3:
                                  ;((r = e.sent) &&
                                    (q.value = r.map(function (e) {
                                      return { text: e.name, value: e.name }
                                    })),
                                    (e.next = 11))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取分组列表失败:', e.t0),
                                    y.error(n('proxyManagement.getGroupListFailed')))
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
                  })(),
                  se = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r, a
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (l.value = !0),
                                    (e.prev = 1),
                                    D.value++,
                                    (r = { page: B.value.page, page_size: B.value.pageSize }),
                                    x.value && (r.group_name = x.value),
                                    H.value && (r.group_name = H.value),
                                    (e.next = 8),
                                    u(r)
                                  )
                                case 8:
                                  ;((a = e.sent),
                                    (o.value = a.proxies || []),
                                    (B.value.total = a.total_proxies || 0),
                                    (e.next = 17))
                                  break
                                case 13:
                                  ;((e.prev = 13),
                                    (e.t0 = e.catch(1)),
                                    console.error(e.t0),
                                    y.error(n('proxyManagement.getProxyListFailed')))
                                case 17:
                                  return ((e.prev = 17), (l.value = !1), e.finish(17))
                                case 20:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 13, 17, 20]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  fe = function (e) {
                    ;(e.group_name && e.group_name.length > 0
                      ? (H.value = e.group_name[0])
                      : (H.value = ''),
                      (B.value.page = 1),
                      se())
                  },
                  de = null,
                  me = function () {
                    ;(clearTimeout(de),
                      (de = setTimeout(function () {
                        ;((B.value.page = 1), se())
                      }, 500)))
                  },
                  ye = function () {
                    ;((x.value = ''), (B.value.page = 1), se())
                  },
                  ge = function () {
                    X.value = !0
                  },
                  ve = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((te.value = !0), 0 !== ae.value.length)) {
                                  e.next = 4
                                  break
                                }
                                return ((e.next = 4), xe())
                              case 4:
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
                  xe = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), c(1))
                                case 3:
                                  ;((r = e.sent) && r.data && (ae.value = r.data), (e.next = 11))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取国家列表失败:', e.t0),
                                    y.error(n('proxyManagement.getCountryListFailed')))
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
                  })(),
                  he = function (e) {},
                  be = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (re.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.next = 4), re.value.validate())
                                case 4:
                                  if (e.sent) {
                                    e.next = 7
                                    break
                                  }
                                  return e.abrupt('return')
                                case 7:
                                  return (
                                    (ne.value = !0),
                                    (e.prev = 8),
                                    (r = {
                                      countryCode: le.value.countryCode,
                                      proxyType: le.value.proxyType,
                                      rolltime: le.value.rolltime,
                                      goodNum: le.value.goodNum
                                    }),
                                    le.value.group_name && (r.group_name = le.value.group_name),
                                    (e.next = 13),
                                    i(r)
                                  )
                                case 13:
                                  ;(y.success(n('proxyManagement.createDynamicProxySuccess')),
                                    we(),
                                    se(),
                                    (e.next = 22))
                                  break
                                case 18:
                                  ;((e.prev = 18),
                                    (e.t0 = e.catch(8)),
                                    console.error('创建动态代理失败:', e.t0),
                                    y.error(n('proxyManagement.createDynamicProxyFailed')))
                                case 22:
                                  return ((e.prev = 22), (ne.value = !1), e.finish(22))
                                case 25:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[8, 18, 22, 25]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  we = function () {
                    var e
                    ;((te.value = !1),
                      null === (e = re.value) || void 0 === e || e.resetFields(),
                      (le.value = {
                        countryCode: 'US',
                        proxyType: 'socks5',
                        rolltime: 30,
                        goodNum: 1,
                        group_name: ''
                      }))
                  },
                  Me = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r, a, o, l
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), p())
                                case 3:
                                  ;((r = e.sent),
                                    (a = new Blob([r])),
                                    (o = window.URL.createObjectURL(a)),
                                    ((l = document.createElement('a')).href = o),
                                    (l.download = 'proxy_template.xlsx'),
                                    l.click(),
                                    window.URL.revokeObjectURL(o),
                                    y.success(n('proxyManagement.templateDownloadSuccess')),
                                    (e.next = 18))
                                  break
                                case 14:
                                  ;((e.prev = 14),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    y.error(n('proxyManagement.templateDownloadFailed')))
                                case 18:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 14]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  _e = function () {
                    ;((Z.value = !1), ce.value && ce.value.clearFiles(), (ie.value = null))
                  },
                  ke = function (e) {
                    v.value = e
                  },
                  $e = (function () {
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
                                    g.confirm(
                                      n('proxyManagement.confirmDeleteSelected'),
                                      n('proxyManagement.delete'),
                                      {
                                        confirmButtonText: n('proxyManagement.delete'),
                                        cancelButtonText: n('proxyManagement.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return (
                                    (r = v.value.map(function (e) {
                                      return e.name
                                    })),
                                    (e.next = 6),
                                    s({ names: r })
                                  )
                                case 6:
                                  ;(y.success(n('proxyManagement.deleteSuccess')),
                                    se(),
                                    (e.next = 14))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    y.error(n('proxyManagement.deleteFailed')))
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
                  Fe = function (e) {
                    ie.value = e.raw
                  },
                  Ce = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (ie.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    y.warning(n('proxyManagement.selectFileFirst')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (r = new FormData()).append('file', ie.value),
                                    (ee.value = !0),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    f(r)
                                  )
                                case 9:
                                  ;(y.success(n('proxyManagement.deleteSuccess')),
                                    (Z.value = !1),
                                    ce.value && ce.value.clearFiles(),
                                    se(),
                                    (e.next = 19))
                                  break
                                case 15:
                                  ;((e.prev = 15),
                                    (e.t0 = e.catch(6)),
                                    console.error(e.t0),
                                    y.error(n('proxyManagement.deleteFailed')))
                                case 19:
                                  return ((e.prev = 19), (ee.value = !1), e.finish(19))
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
                  Te = function (e) {
                    ;(y.success(n('proxyManagement.deleteSuccess')),
                      (Z.value = !1),
                      ce.value && ce.value.clearFiles(),
                      se())
                  },
                  Le = function (e) {
                    ;(console.error(e),
                      y.error(n('proxyManagement.deleteFailed')),
                      ce.value && ce.value.clearFiles())
                  },
                  Se = (function () {
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
                                    g.confirm(
                                      n('proxyManagement.confirmDelete'),
                                      n('proxyManagement.delete'),
                                      {
                                        confirmButtonText: n('proxyManagement.delete'),
                                        cancelButtonText: n('proxyManagement.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 3:
                                  return ((e.next = 5), s({ names: [r.name] }))
                                case 5:
                                  ;(y.success(n('proxyManagement.deleteSuccess')),
                                    se(),
                                    (e.next = 13))
                                  break
                                case 9:
                                  ;((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0),
                                    y.error(n('proxyManagement.deleteFailed')))
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
                  Ve = (function () {
                    var e = r(
                      t().mark(function e() {
                        var r, a, o, l, u, c, i, p, s, f, m, v, x, h
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = localStorage.getItem('owlTrafficBalanceLastClick')),
                                    (a = Date.now()),
                                    !r)
                                  ) {
                                    e.next = 8
                                    break
                                  }
                                  if (!((o = a - parseInt(r)) < 6e4)) {
                                    e.next = 8
                                    break
                                  }
                                  return (
                                    (l = Math.ceil((6e4 - o) / 1e3)),
                                    y.warning(n('proxyManagement.waitSeconds', { seconds: l })),
                                    e.abrupt('return')
                                  )
                                case 8:
                                  return (
                                    localStorage.setItem(
                                      'owlTrafficBalanceLastClick',
                                      a.toString()
                                    ),
                                    (oe.value = !0),
                                    (e.prev = 10),
                                    (e.next = 13),
                                    d()
                                  )
                                case 13:
                                  ;((u = e.sent).data
                                    ? ((c = u.data),
                                      (i = c.accumulatedTraffic),
                                      (p = c.remainingTraffic),
                                      (s = c.useTraffic),
                                      (m = (f = function (e) {
                                        return (e / 1024).toFixed(2)
                                      })(i || 0)),
                                      (v = f(p || 0)),
                                      (x = f(s || 0)),
                                      (h = i ? (((s || 0) / i) * 100).toFixed(1) : 0),
                                      g.alert(
                                        '\n        <div style="text-align: left;">\n          <p><strong style="color: #409EFF;">'
                                          .concat(
                                            n('proxyManagement.accumulatedTraffic'),
                                            ':</strong> <span style="color: #409EFF;">'
                                          )
                                          .concat(
                                            m,
                                            ' GB </span></p>\n          <p><strong style="color: #67C23A;">'
                                          )
                                          .concat(
                                            n('proxyManagement.remainingTraffic'),
                                            ':</strong> <span style="color: #67C23A;">'
                                          )
                                          .concat(
                                            v,
                                            ' GB </span></p>\n          <p><strong style="color: #E6A23C;">'
                                          )
                                          .concat(
                                            n('proxyManagement.usedTraffic'),
                                            ':</strong> <span style="color: #E6A23C;">'
                                          )
                                          .concat(x, ' GB (')
                                          .concat(h, ' %)</span></p>\n\n        </div>\n        '),
                                        n('proxyManagement.trafficBalanceQueryTitle'),
                                        {
                                          dangerouslyUseHTMLString: !0,
                                          confirmButtonText: n('proxyManagement.delete')
                                        }
                                      ))
                                    : y.success(n('proxyManagement.trafficBalanceQueryFailed')),
                                    (e.next = 21))
                                  break
                                case 17:
                                  ;((e.prev = 17),
                                    (e.t0 = e.catch(10)),
                                    console.error(e.t0),
                                    y.error(n('proxyManagement.trafficBalanceQueryFailed')))
                                case 21:
                                  return ((e.prev = 21), (oe.value = !1), e.finish(21))
                                case 24:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[10, 17, 21, 24]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Ee = function (e) {
                    ;(D.value++, (B.value.pageSize = e), se())
                  },
                  Ne = function (e) {
                    ;(D.value++, (B.value.page = e), se())
                  }
                return (
                  b(function () {
                    ;(se(), pe(), W(), window.addEventListener('resize', W))
                  }),
                  E(function () {
                    window.removeEventListener('resize', W)
                  }),
                  function (e, t) {
                    var n = w('el-button'),
                      r = w('el-input'),
                      a = w('PageBanner'),
                      u = w('el-table-column'),
                      c = w('el-table'),
                      i = w('el-pagination'),
                      p = w('el-upload'),
                      s = w('el-dialog'),
                      f = w('el-option'),
                      d = w('el-select'),
                      m = w('el-form-item'),
                      g = w('el-input-number'),
                      h = w('el-form'),
                      b = N('loading')
                    return (
                      M(),
                      T('div', R, [
                        $(
                          a,
                          { title: '' },
                          {
                            extra: k(function () {
                              return [
                                $(
                                  r,
                                  {
                                    modelValue: x.value,
                                    'onUpdate:modelValue':
                                      t[0] ||
                                      (t[0] = function (e) {
                                        return (x.value = e)
                                      }),
                                    placeholder: e.$t('proxyManagement.searchPlaceholder'),
                                    style: { width: '300px', 'margin-right': '10px' },
                                    onInput: me
                                  },
                                  {
                                    append: k(function () {
                                      return [
                                        $(
                                          n,
                                          { onClick: ye },
                                          {
                                            default: k(function () {
                                              return [F(C(e.$t('proxyManagement.clearSearch')), 1)]
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
                                $(
                                  n,
                                  { icon: 'RefreshRight', onClick: se },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.refresh')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                $(
                                  n,
                                  { type: 'primary', onClick: ge },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.uploadProxy')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                $(
                                  n,
                                  { type: 'success', onClick: ve },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.createDynamicProxy')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                $(
                                  n,
                                  { onClick: Me },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.downloadTemplate')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                $(
                                  n,
                                  { onClick: $e, disabled: 0 === v.value.length },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.deleteSelected')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['disabled']
                                ),
                                $(
                                  n,
                                  { type: 'primary', onClick: Ve, loading: oe.value },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.trafficBalanceQuery')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        j(
                          (M(),
                          _(
                            c,
                            {
                              ref_key: 'cTable',
                              ref: K,
                              data: o.value,
                              style: { width: '100%', 'margin-top': '15px' },
                              onSelectionChange: ke,
                              onFilterChange: fe,
                              'max-height': P(J)
                            },
                            {
                              default: k(function () {
                                return [
                                  $(u, { type: 'selection', width: '55' }),
                                  $(
                                    u,
                                    { prop: 'id', label: e.$t('proxyManagement.id'), width: '80' },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  $(
                                    u,
                                    {
                                      prop: 'country_code',
                                      label: e.$t('proxyManagement.countryCode')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  $(
                                    u,
                                    {
                                      prop: 'group_name',
                                      label: e.$t('proxyManagement.group'),
                                      'column-key': 'group_name',
                                      filters: q.value,
                                      'filter-multiple': !1
                                    },
                                    null,
                                    8,
                                    ['label', 'filters']
                                  ),
                                  $(
                                    u,
                                    { prop: 'name', label: e.$t('proxyManagement.proxyName') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  $(
                                    u,
                                    { prop: 'mode', label: e.$t('proxyManagement.proxyMode') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  $(
                                    u,
                                    {
                                      prop: 'proxy_type',
                                      label: e.$t('proxyManagement.proxyType')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  $(
                                    u,
                                    {
                                      prop: 'server_port',
                                      label: e.$t('proxyManagement.serverPort'),
                                      width: '80'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  $(
                                    u,
                                    {
                                      prop: 'auth_method',
                                      label: e.$t('proxyManagement.authMethod')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  P(O)(['proxy:password'])
                                    ? (M(),
                                      _(
                                        u,
                                        {
                                          key: 0,
                                          prop: 'password',
                                          label: e.$t('proxyManagement.password')
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ))
                                    : U('', !0),
                                  $(
                                    u,
                                    { label: e.$t('proxyManagement.operations'), width: '150' },
                                    {
                                      default: k(function (t) {
                                        var r = t.row
                                        return [
                                          $(
                                            n,
                                            {
                                              type: 'danger',
                                              link: '',
                                              onClick: function (e) {
                                                return Se(r)
                                              }
                                            },
                                            {
                                              default: k(function () {
                                                return [F(C(e.$t('proxyManagement.delete')), 1)]
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
                          [[b, l.value]]
                        ),
                        V('div', I, [
                          $(
                            i,
                            {
                              'current-page': B.value.page,
                              'onUpdate:currentPage':
                                t[1] ||
                                (t[1] = function (e) {
                                  return (B.value.page = e)
                                }),
                              'page-size': B.value.pageSize,
                              'onUpdate:pageSize':
                                t[2] ||
                                (t[2] = function (e) {
                                  return (B.value.pageSize = e)
                                }),
                              'page-sizes': [10, 20, 50],
                              total: B.value.total,
                              layout: 'total, sizes, prev, pager, next, jumper',
                              onSizeChange: Ee,
                              onCurrentChange: Ne
                            },
                            null,
                            8,
                            ['current-page', 'page-size', 'total']
                          )
                        ]),
                        $(
                          z,
                          {
                            modelValue: X.value,
                            'onUpdate:modelValue':
                              t[3] ||
                              (t[3] = function (e) {
                                return (X.value = e)
                              }),
                            onSuccess: se
                          },
                          null,
                          8,
                          ['modelValue']
                        ),
                        $(
                          s,
                          {
                            title: e.$t('proxyManagement.deleteByExcelDialog'),
                            modelValue: Z.value,
                            'onUpdate:modelValue':
                              t[4] ||
                              (t[4] = function (e) {
                                return (Z.value = e)
                              }),
                            width: '500px'
                          },
                          {
                            footer: k(function () {
                              return [
                                V('span', A, [
                                  $(
                                    n,
                                    { onClick: _e },
                                    {
                                      default: k(function () {
                                        return [F(C(e.$t('proxyManagement.cancel')), 1)]
                                      }),
                                      _: 1
                                    }
                                  )
                                ])
                              ]
                            }),
                            default: k(function () {
                              return [
                                $(
                                  p,
                                  {
                                    ref_key: 'deleteUploadRef',
                                    ref: ce,
                                    action: '/cpyservice/user/customproxy/delete-by-excel',
                                    'auto-upload': !1,
                                    'on-change': Fe,
                                    'on-success': Te,
                                    'on-error': Le,
                                    limit: 1,
                                    'on-exceed': function () {
                                      P(y).warning(e.$t('proxyManagement.onlyOneFile'))
                                    }
                                  },
                                  {
                                    default: k(function () {
                                      return [
                                        $(
                                          n,
                                          { slot: 'trigger', type: 'primary' },
                                          {
                                            default: k(function () {
                                              return [F(C(e.$t('proxyManagement.selectFile')), 1)]
                                            }),
                                            _: 1
                                          }
                                        ),
                                        $(
                                          n,
                                          {
                                            style: { 'margin-left': '10px' },
                                            type: 'success',
                                            onClick: Ce,
                                            loading: ee.value
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                F(C(e.$t('proxyManagement.uploadToServer')), 1)
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['loading']
                                        ),
                                        V('div', Q, C(e.$t('proxyManagement.uploadTip')), 1)
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['on-exceed']
                                )
                              ]
                            }),
                            _: 1
                          },
                          8,
                          ['title', 'modelValue']
                        ),
                        $(
                          s,
                          {
                            title: e.$t('proxyManagement.createDynamicProxyDialog'),
                            modelValue: te.value,
                            'onUpdate:modelValue':
                              t[10] ||
                              (t[10] = function (e) {
                                return (te.value = e)
                              }),
                            width: '600px'
                          },
                          {
                            footer: k(function () {
                              return [
                                $(
                                  n,
                                  { onClick: we },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                $(
                                  n,
                                  { type: 'primary', onClick: be, loading: ne.value },
                                  {
                                    default: k(function () {
                                      return [F(C(e.$t('proxyManagement.create')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: k(function () {
                              return [
                                $(
                                  h,
                                  {
                                    model: le.value,
                                    rules: ue,
                                    ref_key: 'dynamicProxyFormRef',
                                    ref: re,
                                    'label-width': '120px'
                                  },
                                  {
                                    default: k(function () {
                                      return [
                                        $(
                                          m,
                                          {
                                            label: e.$t('proxyManagement.country'),
                                            prop: 'countryCode'
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                $(
                                                  d,
                                                  {
                                                    modelValue: le.value.countryCode,
                                                    'onUpdate:modelValue':
                                                      t[5] ||
                                                      (t[5] = function (e) {
                                                        return (le.value.countryCode = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'proxyManagement.selectCountry'
                                                    ),
                                                    style: { width: '100%' },
                                                    filterable: '',
                                                    onChange: he
                                                  },
                                                  {
                                                    default: k(function () {
                                                      return [
                                                        (M(!0),
                                                        T(
                                                          S,
                                                          null,
                                                          L(ae.value, function (e) {
                                                            return (
                                                              M(),
                                                              _(
                                                                f,
                                                                {
                                                                  key: e.countryCode,
                                                                  label: e.countryName,
                                                                  value: e.countryCode
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
                                        $(
                                          m,
                                          {
                                            label: e.$t('proxyManagement.proxyType'),
                                            prop: 'proxyType'
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                $(
                                                  d,
                                                  {
                                                    modelValue: le.value.proxyType,
                                                    'onUpdate:modelValue':
                                                      t[6] ||
                                                      (t[6] = function (e) {
                                                        return (le.value.proxyType = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'proxyManagement.selectProxyType'
                                                    ),
                                                    style: { width: '100%' }
                                                  },
                                                  {
                                                    default: k(function () {
                                                      return [
                                                        $(f, { label: 'socks5', value: 'socks5' }),
                                                        $(f, { label: 'http', value: 'http' })
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
                                        $(
                                          m,
                                          {
                                            label: e.$t('proxyManagement.ipRotationCycle'),
                                            prop: 'rolltime'
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                $(
                                                  d,
                                                  {
                                                    modelValue: le.value.rolltime,
                                                    'onUpdate:modelValue':
                                                      t[7] ||
                                                      (t[7] = function (e) {
                                                        return (le.value.rolltime = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'proxyManagement.selectRotationCycle'
                                                    ),
                                                    style: { width: '100%' }
                                                  },
                                                  {
                                                    default: k(function () {
                                                      return [
                                                        $(
                                                          f,
                                                          {
                                                            label: '5'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 5
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        $(
                                                          f,
                                                          {
                                                            label: '10'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 10
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        $(
                                                          f,
                                                          {
                                                            label: '15'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 15
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        $(
                                                          f,
                                                          {
                                                            label: '30'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 30
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        $(
                                                          f,
                                                          {
                                                            label: '45'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 45
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        $(
                                                          f,
                                                          {
                                                            label: '60'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 60
                                                          },
                                                          null,
                                                          8,
                                                          ['label']
                                                        ),
                                                        $(
                                                          f,
                                                          {
                                                            label: '90'.concat(
                                                              e.$t('proxyManagement.minutes')
                                                            ),
                                                            value: 90
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
                                        $(
                                          m,
                                          {
                                            label: e.$t('proxyManagement.createQuantity'),
                                            prop: 'goodNum'
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                $(
                                                  g,
                                                  {
                                                    modelValue: le.value.goodNum,
                                                    'onUpdate:modelValue':
                                                      t[8] ||
                                                      (t[8] = function (e) {
                                                        return (le.value.goodNum = e)
                                                      }),
                                                    min: 1,
                                                    max: 100
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
                                        $(
                                          m,
                                          {
                                            label: e.$t('proxyManagement.groupName'),
                                            prop: 'group_name'
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                $(
                                                  r,
                                                  {
                                                    modelValue: le.value.group_name,
                                                    'onUpdate:modelValue':
                                                      t[9] ||
                                                      (t[9] = function (e) {
                                                        return (le.value.group_name = e)
                                                      }),
                                                    placeholder: e.$t(
                                                      'proxyManagement.enterGroupName'
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
          e('default', o(q, [['__scopeId', 'data-v-a5152fc7']]))
        }
      }
    }
  )
})()
