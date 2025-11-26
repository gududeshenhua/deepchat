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
      l =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      i = u.iterator || '@@iterator',
      c = u.asyncIterator || '@@asyncIterator',
      d = u.toStringTag || '@@toStringTag'
    function s(e, t, r) {
      return (
        Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      s({}, '')
    } catch (r) {
      s = function (e, t, r) {
        return (e[t] = r)
      }
    }
    function f(e, t, r, n) {
      var a = t && t.prototype instanceof b ? t : b,
        o = Object.create(a.prototype),
        u = new T(n || [])
      return (l(o, '_invoke', { value: L(e, r, u) }), o)
    }
    function p(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = f
    var v = 'suspendedStart',
      h = 'suspendedYield',
      g = 'executing',
      m = 'completed',
      y = {}
    function b() {}
    function w() {}
    function x() {}
    var _ = {}
    s(_, i, function () {
      return this
    })
    var S = Object.getPrototypeOf,
      k = S && S(S(j([])))
    k && k !== a && o.call(k, i) && (_ = k)
    var C = (x.prototype = b.prototype = Object.create(_))
    function I(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        s(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function M(t, r) {
      function n(a, l, u, i) {
        var c = p(t[a], t, l)
        if ('throw' !== c.type) {
          var d = c.arg,
            s = d.value
          return s && 'object' == e(s) && o.call(s, '__await')
            ? r.resolve(s.__await).then(
                function (e) {
                  n('next', e, u, i)
                },
                function (e) {
                  n('throw', e, u, i)
                }
              )
            : r.resolve(s).then(
                function (e) {
                  ;((d.value = e), u(d))
                },
                function (e) {
                  return n('throw', e, u, i)
                }
              )
        }
        i(c.arg)
      }
      var a
      l(this, '_invoke', {
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
    function L(e, t, n) {
      var a = v
      return function (o, l) {
        if (a === g) throw new Error('Generator is already running')
        if (a === m) {
          if ('throw' === o) throw l
          return { value: r, done: !0 }
        }
        for (n.method = o, n.arg = l; ; ) {
          var u = n.delegate
          if (u) {
            var i = V(u, n)
            if (i) {
              if (i === y) continue
              return i
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (a === v) throw ((a = m), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          a = g
          var c = p(e, t, n)
          if ('normal' === c.type) {
            if (((a = n.done ? m : h), c.arg === y)) continue
            return { value: c.arg, done: n.done }
          }
          'throw' === c.type && ((a = m), (n.method = 'throw'), (n.arg = c.arg))
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
      var l = o.arg
      return l
        ? l.done
          ? ((t[e.resultName] = l.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = r)),
            (t.delegate = null),
            y)
          : l
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          y)
    }
    function E(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function A(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function T(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(E, this), this.reset(!0))
    }
    function j(t) {
      if (t || '' === t) {
        var n = t[i]
        if (n) return n.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            l = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = r), (e.done = !0), e)
            }
          return (l.next = l)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      l(C, 'constructor', { value: x, configurable: !0 }),
      l(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = s(x, d, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), s(e, d, 'GeneratorFunction')),
          (e.prototype = Object.create(C)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      I(M.prototype),
      s(M.prototype, c, function () {
        return this
      }),
      (n.AsyncIterator = M),
      (n.async = function (e, t, r, a, o) {
        void 0 === o && (o = Promise)
        var l = new M(f(e, t, r, a), o)
        return n.isGeneratorFunction(t)
          ? l
          : l.next().then(function (e) {
              return e.done ? e.value : l.next()
            })
      }),
      I(C),
      s(C, d, 'Generator'),
      s(C, i, function () {
        return this
      }),
      s(C, 'toString', function () {
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
      (n.values = j),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(A),
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
              (u.type = 'throw'),
              (u.arg = e),
              (t.next = n),
              a && ((t.method = 'next'), (t.arg = r)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var l = this.tryEntries[a],
              u = l.completion
            if ('root' === l.tryLoc) return n('end')
            if (l.tryLoc <= this.prev) {
              var i = o.call(l, 'catchLoc'),
                c = o.call(l, 'finallyLoc')
              if (i && c) {
                if (this.prev < l.catchLoc) return n(l.catchLoc, !0)
                if (this.prev < l.finallyLoc) return n(l.finallyLoc)
              } else if (i) {
                if (this.prev < l.catchLoc) return n(l.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < l.finallyLoc) return n(l.finallyLoc)
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
            var r = this.tryEntries[t]
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), A(r), y)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var n = r.completion
              if ('throw' === n.type) {
                var a = n.arg
                A(r)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: j(e), resultName: t, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            y
          )
        }
      }),
      n
    )
  }
  function r(e, t, r, n, a, o, l) {
    try {
      var u = e[o](l),
        i = u.value
    } catch (c) {
      return void r(c)
    }
    u.done ? t(i) : Promise.resolve(i).then(n, a)
  }
  function n(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (a, o) {
        var l = e.apply(t, n)
        function u(e) {
          r(l, a, o, u, i, 'next', e)
        }
        function i(e) {
          r(l, a, o, u, i, 'throw', e)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './index-legacy-635fab6a.js',
      './vue-legacy-7e5c1e5b.js',
      './element-legacy-e7b6e573.js',
      './useTableHeightFit-legacy-f881449c.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, r) {
      'use strict'
      var a,
        o,
        l,
        u,
        i,
        c,
        d,
        s,
        f,
        p,
        v,
        h,
        g,
        m,
        y,
        b,
        w,
        x,
        _,
        S,
        k,
        C,
        I,
        M,
        L,
        V,
        E,
        A,
        T,
        j,
        z,
        G,
        P,
        D
      return {
        setters: [
          function (e) {
            ;((a = e._), (o = e.h))
          },
          function (e) {
            ;((l = e.a), (u = e.b), (i = e.q), (c = e.c), (d = e.d), (s = e.s))
          },
          function (e) {
            ;((f = e.y),
              (p = e.aq),
              (v = e.R),
              (h = e.r),
              (g = e.b),
              (m = e.a8),
              (y = e.f),
              (b = e.G),
              (w = e.H),
              (x = e.N),
              (_ = e.L),
              (S = e.h),
              (k = e.a0),
              (C = e.F),
              (I = e.ar),
              (M = e.as),
              (L = e.i),
              (V = e.Q),
              (E = e.ag),
              (A = e.u),
              (T = e.M),
              (j = e.I),
              (z = e.K))
          },
          function (e) {
            ;((G = e.E), (P = e.G))
          },
          function (e) {
            D = e.u
          },
          null
        ],
        execute: function () {
          var r = document.createElement('style')
          ;((r.textContent =
            '.image-select-popper .el-select-dropdown__item[data-v-64151014]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px}[data-v-64151014] .el-form-item__content .el-select{width:100%}.card-manager[data-v-0ed587bf]{padding:20px;position:relative}.operation-column[data-v-0ed587bf]{z-index:1000;position:relative;background:white}\n'),
            document.head.appendChild(r))
          var F = (function (e) {
              return (I('data-v-64151014'), (e = e()), M(), e)
            })(function () {
              return L(
                'div',
                { style: { 'font-size': '12px', color: '#999', 'margin-top': '5px' } },
                [
                  _(' 国家编码(具体查看: '),
                  L(
                    'a',
                    { href: 'https://chahuo.com/country-code-lookup.html', target: '_blank' },
                    'https://chahuo.com/country-code-lookup.html'
                  ),
                  _(') ')
                ],
                -1
              )
            }),
            U = f({
              __name: 'CreateNetStorageInstance',
              props: { visible: { type: Boolean, default: !1 } },
              emits: ['update:visible', 'success'],
              setup: function (e, r) {
                var a = r.emit,
                  o = e,
                  d = a,
                  s = p(),
                  f = v({
                    clusterCode: 'ZEG4669661',
                    specificationCode: 'R422-4',
                    imageId: '',
                    number: 1,
                    storageSize: 32,
                    screenLayoutCode: '',
                    randomADITemplates: !1,
                    realPhoneTemplateId: null,
                    countryCode: 'SG',
                    groupId: 0
                  }),
                  I = [
                    { label: '4GB', value: 4 },
                    { label: '16GB', value: 16 },
                    { label: '32GB', value: 32 },
                    { label: '64GB', value: 64 },
                    { label: '128GB', value: 128 },
                    { label: '256GB', value: 256 }
                  ],
                  M = h([]),
                  L = h([]),
                  V = h([]),
                  E = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), l({}))
                                case 3:
                                  ;(200 === (r = e.sent).code &&
                                    ((M.value = r.data.records.map(function (e) {
                                      return {
                                        label:
                                          e.imageName +
                                          ''
                                            .concat(
                                              e.romVersion ? '('.concat(e.romVersion, ')') : ''
                                            )
                                            .concat(
                                              e.imageDesc ? '('.concat(e.imageDesc, ')') : ''
                                            ),
                                        value: e.imageId
                                      }
                                    })),
                                    M.value.unshift({
                                      label: 'img-25080826717(android13)',
                                      value: 'img-25080826717'
                                    }),
                                    M.value.unshift({
                                      label: 'img-25080662530(android14)',
                                      value: 'img-25080662530'
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取镜像列表失败:', e.t0))
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
                  A = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), u({}))
                                case 3:
                                  ;(200 === (r = e.sent).code &&
                                    (L.value = r.data.map(function (e) {
                                      return {
                                        label:
                                          e.code +
                                          '('
                                            .concat(e.screenWidth, 'x')
                                            .concat(e.screenHigh, ' | ')
                                            .concat(e.pixelDensity, 'dpi | ')
                                            .concat(e.screenRefreshRate, 'fps)'),
                                        value: e.code
                                      }
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取屏幕布局列表失败:', e.t0))
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
                  T = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), i({}))
                                case 3:
                                  ;(200 === (r = e.sent).code &&
                                    (V.value = r.data.map(function (e) {
                                      return {
                                        label: ''
                                          .concat(e.brand, ' ')
                                          .concat(e.model, ' (')
                                          .concat(e.androidImageVersion, ')'),
                                        value: e.id
                                      }
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取ADI模板列表失败:', e.t0))
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
                  })()
                g(function () {
                  ;(E(), A(), T())
                })
                var j = h(),
                  z = v({
                    clusterCode: [{ required: !0, message: '请输入集群编码', trigger: 'blur' }],
                    specificationCode: [
                      { required: !0, message: '请输入规格代码', trigger: 'blur' }
                    ],
                    imageId: [{ required: !0, message: '请输入镜像ID', trigger: 'blur' }],
                    number: [
                      { required: !0, message: '请输入实例数量', trigger: 'blur' },
                      {
                        type: 'number',
                        min: 1,
                        max: 100,
                        message: '实例数量必须在1-100之间',
                        trigger: 'blur'
                      }
                    ],
                    storageSize: [{ required: !0, message: '请选择存储大小', trigger: 'change' }],
                    screenLayoutCode: [
                      {
                        validator: function (e, t, r) {
                          f.randomADITemplates || f.realPhoneTemplateId || t
                            ? r()
                            : r(new Error('请选择屏幕布局编码'))
                        },
                        trigger: 'change'
                      }
                    ]
                  }),
                  P = function () {
                    d('update:visible', !1)
                  },
                  D = (function () {
                    var e = n(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (j.value) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt('return')
                              case 2:
                                return (
                                  (e.next = 4),
                                  j.value.validate(
                                    (function () {
                                      var e = n(
                                        t().mark(function e(r) {
                                          return t().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (!r) {
                                                      e.next = 13
                                                      break
                                                    }
                                                    return ((e.prev = 1), (e.next = 4), c(f))
                                                  case 4:
                                                    ;(G.success('实例创建成功'),
                                                      d('success'),
                                                      P(),
                                                      s.push('/instance'),
                                                      (e.next = 13))
                                                    break
                                                  case 10:
                                                    ;((e.prev = 10),
                                                      (e.t0 = e.catch(1)),
                                                      G.error(e.t0.message || '创建失败'))
                                                  case 13:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            },
                                            e,
                                            null,
                                            [[1, 10]]
                                          )
                                        })
                                      )
                                      return function (t) {
                                        return e.apply(this, arguments)
                                      }
                                    })()
                                  )
                                )
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
                  U = function () {
                    var e
                    null === (e = j.value) || void 0 === e || e.resetFields()
                  }
                return function (e, t) {
                  var r = m('el-input'),
                    n = m('el-form-item'),
                    a = m('el-option'),
                    l = m('el-select'),
                    u = m('el-input-number'),
                    i = m('el-switch'),
                    c = m('el-form'),
                    d = m('el-button'),
                    s = m('el-drawer')
                  return (
                    y(),
                    b(
                      s,
                      {
                        'model-value': o.visible,
                        'onUpdate:modelValue': P,
                        title: '创建网存实例',
                        size: '500px'
                      },
                      {
                        footer: w(function () {
                          return [
                            x(
                              d,
                              { onClick: P },
                              {
                                default: w(function () {
                                  return [_('取消')]
                                }),
                                _: 1
                              }
                            ),
                            x(
                              d,
                              { onClick: U },
                              {
                                default: w(function () {
                                  return [_('重置')]
                                }),
                                _: 1
                              }
                            ),
                            x(
                              d,
                              { type: 'primary', onClick: D },
                              {
                                default: w(function () {
                                  return [_('确定')]
                                }),
                                _: 1
                              }
                            )
                          ]
                        }),
                        default: w(function () {
                          return [
                            x(
                              c,
                              {
                                ref_key: 'formRef',
                                ref: j,
                                model: f,
                                'label-width': '120px',
                                rules: z
                              },
                              {
                                default: w(function () {
                                  return [
                                    x(
                                      n,
                                      { label: '集群编码', prop: 'clusterCode' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              r,
                                              {
                                                disabled: '',
                                                modelValue: f.clusterCode,
                                                'onUpdate:modelValue':
                                                  t[0] ||
                                                  (t[0] = function (e) {
                                                    return (f.clusterCode = e)
                                                  }),
                                                placeholder: '请输入集群编码'
                                              },
                                              null,
                                              8,
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '规格代码', prop: 'specificationCode' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              r,
                                              {
                                                disabled: '',
                                                modelValue: f.specificationCode,
                                                'onUpdate:modelValue':
                                                  t[1] ||
                                                  (t[1] = function (e) {
                                                    return (f.specificationCode = e)
                                                  }),
                                                placeholder: '请输入规格代码'
                                              },
                                              null,
                                              8,
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '镜像ID', prop: 'imageId' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              l,
                                              {
                                                modelValue: f.imageId,
                                                'onUpdate:modelValue':
                                                  t[2] ||
                                                  (t[2] = function (e) {
                                                    return (f.imageId = e)
                                                  }),
                                                placeholder: '请选择镜像',
                                                style: { width: '100%' },
                                                'popper-class': 'image-select-popper'
                                              },
                                              {
                                                default: w(function () {
                                                  return [
                                                    (y(!0),
                                                    S(
                                                      C,
                                                      null,
                                                      k(M.value, function (e) {
                                                        return (
                                                          y(),
                                                          b(
                                                            a,
                                                            {
                                                              key: e.value,
                                                              label: e.label,
                                                              value: e.value,
                                                              title: e.label
                                                            },
                                                            null,
                                                            8,
                                                            ['label', 'value', 'title']
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
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '实例数量', prop: 'number' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              u,
                                              {
                                                modelValue: f.number,
                                                'onUpdate:modelValue':
                                                  t[3] ||
                                                  (t[3] = function (e) {
                                                    return (f.number = e)
                                                  }),
                                                min: 1,
                                                max: 100,
                                                'controls-position': 'right',
                                                style: { width: '100%' }
                                              },
                                              null,
                                              8,
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '存储大小(GB)', prop: 'storageSize' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              l,
                                              {
                                                modelValue: f.storageSize,
                                                'onUpdate:modelValue':
                                                  t[4] ||
                                                  (t[4] = function (e) {
                                                    return (f.storageSize = e)
                                                  }),
                                                placeholder: '请选择存储大小',
                                                style: { width: '100%' }
                                              },
                                              {
                                                default: w(function () {
                                                  return [
                                                    (y(),
                                                    S(
                                                      C,
                                                      null,
                                                      k(I, function (e) {
                                                        return x(
                                                          a,
                                                          {
                                                            key: e.value,
                                                            label: e.label,
                                                            value: e.value
                                                          },
                                                          null,
                                                          8,
                                                          ['label', 'value']
                                                        )
                                                      }),
                                                      64
                                                    ))
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
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '屏幕布局编码', prop: 'screenLayoutCode' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              l,
                                              {
                                                modelValue: f.screenLayoutCode,
                                                'onUpdate:modelValue':
                                                  t[5] ||
                                                  (t[5] = function (e) {
                                                    return (f.screenLayoutCode = e)
                                                  }),
                                                placeholder: '请选择屏幕布局',
                                                style: { width: '100%' },
                                                clearable: ''
                                              },
                                              {
                                                default: w(function () {
                                                  return [
                                                    (y(!0),
                                                    S(
                                                      C,
                                                      null,
                                                      k(L.value, function (e) {
                                                        return (
                                                          y(),
                                                          b(
                                                            a,
                                                            {
                                                              key: e.value,
                                                              label: e.label,
                                                              value: e.value
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
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '随机ADI模板' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              i,
                                              {
                                                modelValue: f.randomADITemplates,
                                                'onUpdate:modelValue':
                                                  t[6] ||
                                                  (t[6] = function (e) {
                                                    return (f.randomADITemplates = e)
                                                  })
                                              },
                                              null,
                                              8,
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: 'ADI模板ID', prop: 'realPhoneTemplateId' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              l,
                                              {
                                                modelValue: f.realPhoneTemplateId,
                                                'onUpdate:modelValue':
                                                  t[7] ||
                                                  (t[7] = function (e) {
                                                    return (f.realPhoneTemplateId = e)
                                                  }),
                                                placeholder: '请选择ADI模板',
                                                style: { width: '100%' },
                                                clearable: ''
                                              },
                                              {
                                                default: w(function () {
                                                  return [
                                                    (y(!0),
                                                    S(
                                                      C,
                                                      null,
                                                      k(V.value, function (e) {
                                                        return (
                                                          y(),
                                                          b(
                                                            a,
                                                            {
                                                              key: e.value,
                                                              label: e.label,
                                                              value: e.value
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
                                              ['modelValue']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '国家编码', prop: 'countryCode' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              r,
                                              {
                                                modelValue: f.countryCode,
                                                'onUpdate:modelValue':
                                                  t[8] ||
                                                  (t[8] = function (e) {
                                                    return (f.countryCode = e)
                                                  }),
                                                placeholder: '请输入国家编码'
                                              },
                                              null,
                                              8,
                                              ['modelValue']
                                            ),
                                            F
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    x(
                                      n,
                                      { label: '分组ID', prop: 'groupId' },
                                      {
                                        default: w(function () {
                                          return [
                                            x(
                                              u,
                                              {
                                                modelValue: f.groupId,
                                                'onUpdate:modelValue':
                                                  t[9] ||
                                                  (t[9] = function (e) {
                                                    return (f.groupId = e)
                                                  }),
                                                min: 0,
                                                'controls-position': 'right',
                                                style: { width: '100%' }
                                              },
                                              null,
                                              8,
                                              ['modelValue']
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
                              ['model', 'rules']
                            )
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['model-value']
                    )
                  )
                }
              }
            }),
            O = a(U, [['__scopeId', 'data-v-64151014']]),
            B = { class: 'card-manager' },
            N = f({
              __name: 'CardManager',
              setup: function (e) {
                var r = o().t,
                  a = D(),
                  l = a.cTable,
                  u = a.maxHeight,
                  i = a.handleGetTableHeight,
                  c = h([]),
                  f = h(!0),
                  p = h(!1),
                  v = h({ page: 1, pageSize: 10, total: 0 }),
                  k = h(0),
                  C = h(''),
                  I = null
                h({})
                var M = h(''),
                  F = h([]),
                  U = h([])
                h(!1)
                var N = (function () {
                    var e = n(
                      t().mark(function e() {
                        var r, n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (f.value = !0),
                                    (e.prev = 1),
                                    (r = { page: v.value.page, rows: v.value.pageSize }),
                                    C.value && (r.deviceCode = C.value),
                                    M.value && (r.padAllocationStatus = M.value),
                                    (e.next = 7),
                                    d(r)
                                  )
                                case 7:
                                  ;((n = e.sent),
                                    (c.value = n.data.pageData),
                                    (v.value.total = n.data.total),
                                    (e.next = 15))
                                  break
                                case 12:
                                  ;((e.prev = 12), (e.t0 = e.catch(1)), console.error(e.t0))
                                case 15:
                                  return ((e.prev = 15), (f.value = !1), e.finish(15))
                                case 18:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 12, 15, 18]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  R = function (e) {
                    ;(k.value++, (v.value.page = e), N())
                  },
                  q = function () {
                    ;(I && clearTimeout(I),
                      (I = setTimeout(function () {
                        ;((v.value.page = 1), N())
                      }, 1e3)))
                  },
                  H = function () {
                    ;((C.value = ''),
                      (M.value = ''),
                      (v.value.page = 1),
                      l.value && l.value.clearFilter(['padAllocationStatus']),
                      N())
                  },
                  Y = function (e) {
                    ;((v.value.page = 1),
                      (C.value = ''),
                      'padAllocationStatus' in e &&
                        (M.value =
                          e.padAllocationStatus.length > 0 ? e.padAllocationStatus[0] : ''),
                      N())
                  }
                ;(g(function () {
                  ;(N(),
                    (F.value = [
                      { text: r('cardManager.deleteFailed'), value: -2 },
                      { text: r('cardManager.allocationFailed'), value: -1 },
                      { text: r('cardManager.notAllocated'), value: 0 },
                      { text: r('cardManager.allocating'), value: 1 },
                      { text: r('cardManager.allocated'), value: 2 },
                      { text: r('cardManager.deleting'), value: 3 }
                    ]),
                    window.addEventListener('resize', i, !0),
                    i())
                }),
                  V(function () {
                    window.removeEventListener('resize', i, !0)
                  }))
                var K = function () {
                  0 !== U.value.length
                    ? P.confirm(
                        r('cardManager.batchSetSpecConfirm', { count: U.value.length }),
                        r('cardManager.confirmSetSpec'),
                        {
                          confirmButtonText: r('common.confirm'),
                          cancelButtonText: r('common.cancel'),
                          type: 'warning'
                        }
                      )
                        .then(
                          n(
                            t().mark(function e() {
                              var n
                              return t().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (n = U.value.map(function (e) {
                                            return e.deviceCode
                                          })),
                                          (e.next = 4),
                                          s({ deviceCodes: n, deviceLevel: 'R422-4' })
                                        )
                                      case 4:
                                        ;(G.success(r('cardManager.setSpecSuccess')),
                                          (U.value = []),
                                          N(),
                                          (e.next = 13))
                                        break
                                      case 9:
                                        ;((e.prev = 9),
                                          (e.t0 = e.catch(0)),
                                          console.error(e.t0),
                                          G.error(r('cardManager.setSpecFailed')))
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
                          G.info(r('common.operationCancelled'))
                        })
                    : G.warning(r('cardManager.selectCardsFirst'))
                }
                return function (e, t) {
                  var n = m('el-button'),
                    a = m('el-input'),
                    o = m('PageBanner'),
                    i = m('el-table-column'),
                    d = m('el-tag'),
                    s = m('el-table'),
                    h = m('el-pagination'),
                    g = E('loading')
                  return (
                    y(),
                    S('div', B, [
                      x(
                        o,
                        { title: '' },
                        {
                          extra: w(function () {
                            return [
                              x(
                                a,
                                {
                                  modelValue: C.value,
                                  'onUpdate:modelValue':
                                    t[0] ||
                                    (t[0] = function (e) {
                                      return (C.value = e)
                                    }),
                                  placeholder: A(r)('cardManager.searchPlaceholder'),
                                  style: { width: '300px', 'margin-right': '10px' },
                                  onInput: q,
                                  clearable: ''
                                },
                                {
                                  append: w(function () {
                                    return [
                                      x(
                                        n,
                                        { onClick: H },
                                        {
                                          default: w(function () {
                                            return [_(T(A(r)('cardManager.clear')), 1)]
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
                                n,
                                { type: 'primary', onClick: K },
                                {
                                  default: w(function () {
                                    return [_(T(A(r)('cardManager.batchSetSpec')), 1)]
                                  }),
                                  _: 1
                                }
                              ),
                              x(
                                n,
                                { icon: 'RefreshRight', onClick: N },
                                {
                                  default: w(function () {
                                    return [_(T(A(r)('cardManager.refresh')), 1)]
                                  }),
                                  _: 1
                                }
                              )
                            ]
                          }),
                          _: 1
                        }
                      ),
                      j(
                        (y(),
                        b(
                          s,
                          {
                            ref_key: 'cTable',
                            ref: l,
                            data: c.value,
                            key: k.value,
                            style: { width: '100%', 'margin-top': '20px' },
                            'max-height': A(u),
                            onFilterChange: Y,
                            onSelectionChange:
                              t[1] ||
                              (t[1] = function (e) {
                                return (U.value = e)
                              })
                          },
                          {
                            default: w(function () {
                              return [
                                x(i, { type: 'selection', width: '55' }),
                                x(
                                  i,
                                  { prop: 'id', label: A(r)('cardManager.cardInfo'), width: '300' },
                                  {
                                    default: w(function (e) {
                                      var t = e.row
                                      return [
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.cardId')) + '：' + T(t.id),
                                          1
                                        ),
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.cardCode')) + '：' + T(t.deviceCode),
                                          1
                                        ),
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.instanceSpec')) +
                                            '：' +
                                            T(t.deviceLevel),
                                          1
                                        ),
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.cardIp')) + '：' + T(t.deviceIp),
                                          1
                                        ),
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.cardCbs')) + '：' + T(t.cbsInfo),
                                          1
                                        ),
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.macAddress')) +
                                            '：' +
                                            T(t.macAddress),
                                          1
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
                                    prop: 'idc',
                                    label: A(r)('cardManager.externalInfo'),
                                    width: '300'
                                  },
                                  {
                                    default: w(function (e) {
                                      var t = e.row
                                      return [
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.belongCluster')) +
                                            '：' +
                                            T(t.clusterCode),
                                          1
                                        ),
                                        L(
                                          'div',
                                          null,
                                          T(A(r)('cardManager.belongServer')) +
                                            '：' +
                                            T(t.armServerCode),
                                          1
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
                                  { prop: 'deviceStatus', label: A(r)('cardManager.cardStatus') },
                                  {
                                    default: w(function (e) {
                                      var t = e.row
                                      return [
                                        x(
                                          d,
                                          { type: 1 === t.deviceStatus ? 'success' : 'info' },
                                          {
                                            default: w(function () {
                                              return [
                                                _(
                                                  T(
                                                    1 === t.deviceStatus
                                                      ? A(r)('cardManager.online')
                                                      : A(r)('cardManager.offline')
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
                                  { prop: 'createBy', label: A(r)('cardManager.creator') },
                                  null,
                                  8,
                                  ['label']
                                ),
                                x(
                                  i,
                                  { prop: 'createTime', label: A(r)('cardManager.createTime') },
                                  null,
                                  8,
                                  ['label']
                                ),
                                x(
                                  i,
                                  {
                                    prop: 'padAllocationStatus',
                                    label: A(r)('cardManager.instanceAllocationStatus'),
                                    width: '150',
                                    filters: F.value,
                                    'filter-multiple': !1,
                                    'column-key': 'padAllocationStatus'
                                  },
                                  {
                                    default: w(function (e) {
                                      var t = e.row
                                      return [
                                        -2 === t.padAllocationStatus
                                          ? (y(),
                                            b(
                                              d,
                                              { key: 0, type: 'danger' },
                                              {
                                                default: w(function () {
                                                  return [_(T(A(r)('cardManager.deleteFailed')), 1)]
                                                }),
                                                _: 1
                                              }
                                            ))
                                          : -1 === t.padAllocationStatus
                                            ? (y(),
                                              b(
                                                d,
                                                { key: 1, type: 'danger' },
                                                {
                                                  default: w(function () {
                                                    return [
                                                      _(T(A(r)('cardManager.allocationFailed')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ))
                                            : 0 === t.padAllocationStatus
                                              ? (y(),
                                                b(
                                                  d,
                                                  { key: 2, type: 'info' },
                                                  {
                                                    default: w(function () {
                                                      return [
                                                        _(T(A(r)('cardManager.notAllocated')), 1)
                                                      ]
                                                    }),
                                                    _: 1
                                                  }
                                                ))
                                              : 1 === t.padAllocationStatus
                                                ? (y(),
                                                  b(
                                                    d,
                                                    { key: 3, type: 'warning' },
                                                    {
                                                      default: w(function () {
                                                        return [
                                                          _(T(A(r)('cardManager.allocating')), 1)
                                                        ]
                                                      }),
                                                      _: 1
                                                    }
                                                  ))
                                                : 2 === t.padAllocationStatus
                                                  ? (y(),
                                                    b(
                                                      d,
                                                      { key: 4, type: 'success' },
                                                      {
                                                        default: w(function () {
                                                          return [
                                                            _(T(A(r)('cardManager.allocated')), 1)
                                                          ]
                                                        }),
                                                        _: 1
                                                      }
                                                    ))
                                                  : 3 === t.padAllocationStatus
                                                    ? (y(),
                                                      b(
                                                        d,
                                                        { key: 5, type: 'warning' },
                                                        {
                                                          default: w(function () {
                                                            return [
                                                              _(T(A(r)('cardManager.deleting')), 1)
                                                            ]
                                                          }),
                                                          _: 1
                                                        }
                                                      ))
                                                    : z('', !0)
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
                          ['data', 'max-height']
                        )),
                        [[g, f.value]]
                      ),
                      f.value
                        ? z('', !0)
                        : (y(),
                          b(
                            h,
                            {
                              key: 0,
                              'current-page': v.value.page,
                              'onUpdate:currentPage':
                                t[2] ||
                                (t[2] = function (e) {
                                  return (v.value.page = e)
                                }),
                              'page-size': v.value.pageSize,
                              'onUpdate:pageSize':
                                t[3] ||
                                (t[3] = function (e) {
                                  return (v.value.pageSize = e)
                                }),
                              'page-sizes': [10, 20, 50, 100],
                              total: v.value.total,
                              layout: 'total, sizes, prev, pager, next, jumper',
                              onSizeChange:
                                t[4] ||
                                (t[4] = function () {
                                  ;(k.value++, (v.value.page = 1), N())
                                }),
                              onCurrentChange: R,
                              style: { 'margin-top': '20px', 'text-align': 'right' }
                            },
                            null,
                            8,
                            ['current-page', 'page-size', 'total']
                          )),
                      x(
                        O,
                        {
                          visible: p.value,
                          'onUpdate:visible':
                            t[5] ||
                            (t[5] = function (e) {
                              return (p.value = e)
                            }),
                          onSuccess: N
                        },
                        null,
                        8,
                        ['visible']
                      )
                    ])
                  )
                }
              }
            })
          e('default', a(N, [['__scopeId', 'data-v-0ed587bf']]))
        }
      }
    }
  )
})()
