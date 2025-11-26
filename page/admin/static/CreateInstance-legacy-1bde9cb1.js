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
      u =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      l = i.iterator || '@@iterator',
      c = i.asyncIterator || '@@asyncIterator',
      s = i.toStringTag || '@@toStringTag'
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
      var a = t && t.prototype instanceof b ? t : b,
        o = Object.create(a.prototype),
        i = new C(r || [])
      return (u(o, '_invoke', { value: L(e, n, i) }), o)
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
      h = 'suspendedYield',
      m = 'executing',
      y = 'completed',
      g = {}
    function b() {}
    function w() {}
    function x() {}
    var _ = {}
    d(_, l, function () {
      return this
    })
    var I = Object.getPrototypeOf,
      V = I && I(I($([])))
    V && V !== a && o.call(V, l) && (_ = V)
    var k = (x.prototype = b.prototype = Object.create(_))
    function j(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function O(t, n) {
      function r(a, u, i, l) {
        var c = p(t[a], t, u)
        if ('throw' !== c.type) {
          var s = c.arg,
            d = s.value
          return d && 'object' == e(d) && o.call(d, '__await')
            ? n.resolve(d.__await).then(
                function (e) {
                  r('next', e, i, l)
                },
                function (e) {
                  r('throw', e, i, l)
                }
              )
            : n.resolve(d).then(
                function (e) {
                  ;((s.value = e), i(s))
                },
                function (e) {
                  return r('throw', e, i, l)
                }
              )
        }
        l(c.arg)
      }
      var a
      u(this, '_invoke', {
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
    function L(e, t, r) {
      var a = v
      return function (o, u) {
        if (a === m) throw new Error('Generator is already running')
        if (a === y) {
          if ('throw' === o) throw u
          return { value: n, done: !0 }
        }
        for (r.method = o, r.arg = u; ; ) {
          var i = r.delegate
          if (i) {
            var l = E(i, r)
            if (l) {
              if (l === g) continue
              return l
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === v) throw ((a = y), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = m
          var c = p(e, t, r)
          if ('normal' === c.type) {
            if (((a = r.done ? y : h), c.arg === g)) continue
            return { value: c.arg, done: r.done }
          }
          'throw' === c.type && ((a = y), (r.method = 'throw'), (r.arg = c.arg))
        }
      }
    }
    function E(e, t) {
      var r = t.method,
        a = e.iterator[r]
      if (a === n)
        return (
          (t.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = n), E(e, t), 'throw' === t.method)) ||
            ('return' !== r &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          g
        )
      var o = p(a, e.iterator, t.arg)
      if ('throw' === o.type) return ((t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), g)
      var u = o.arg
      return u
        ? u.done
          ? ((t[e.resultName] = u.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            g)
          : u
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          g)
    }
    function P(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function S(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function C(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0))
    }
    function $(t) {
      if (t || '' === t) {
        var r = t[l]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var a = -1,
            u = function e() {
              for (; ++a < t.length; ) if (o.call(t, a)) return ((e.value = t[a]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (u.next = u)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      u(k, 'constructor', { value: x, configurable: !0 }),
      u(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = d(x, s, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (r.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), d(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(k)),
          e
        )
      }),
      (r.awrap = function (e) {
        return { __await: e }
      }),
      j(O.prototype),
      d(O.prototype, c, function () {
        return this
      }),
      (r.AsyncIterator = O),
      (r.async = function (e, t, n, a, o) {
        void 0 === o && (o = Promise)
        var u = new O(f(e, t, n, a), o)
        return r.isGeneratorFunction(t)
          ? u
          : u.next().then(function (e) {
              return e.done ? e.value : u.next()
            })
      }),
      j(k),
      d(k, s, 'Generator'),
      d(k, l, function () {
        return this
      }),
      d(k, 'toString', function () {
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
      (r.values = $),
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
            this.tryEntries.forEach(S),
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
              (i.type = 'throw'),
              (i.arg = e),
              (t.next = r),
              a && ((t.method = 'next'), (t.arg = n)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var u = this.tryEntries[a],
              i = u.completion
            if ('root' === u.tryLoc) return r('end')
            if (u.tryLoc <= this.prev) {
              var l = o.call(u, 'catchLoc'),
                c = o.call(u, 'finallyLoc')
              if (l && c) {
                if (this.prev < u.catchLoc) return r(u.catchLoc, !0)
                if (this.prev < u.finallyLoc) return r(u.finallyLoc)
              } else if (l) {
                if (this.prev < u.catchLoc) return r(u.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < u.finallyLoc) return r(u.finallyLoc)
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
          var u = a ? a.completion : {}
          return (
            (u.type = e),
            (u.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), g) : this.complete(u)
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
            g
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), S(n), g)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                S(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, r) {
          return (
            (this.delegate = { iterator: $(e), resultName: t, nextLoc: r }),
            'next' === this.method && (this.arg = n),
            g
          )
        }
      }),
      r
    )
  }
  function n(e, t, n, r, a, o, u) {
    try {
      var i = e[o](u),
        l = i.value
    } catch (c) {
      return void n(c)
    }
    i.done ? t(l) : Promise.resolve(l).then(r, a)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (a, o) {
        var u = e.apply(t, r)
        function i(e) {
          n(u, a, o, i, l, 'next', e)
        }
        function l(e) {
          n(u, a, o, i, l, 'throw', e)
        }
        i(void 0)
      })
    }
  }
  function a(e, t) {
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
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {}
      t % 2
        ? a(Object(n), !0).forEach(function (t) {
            u(e, t, n[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : a(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
    }
    return e
  }
  function u(t, n, r) {
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
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-d4b804d0.js',
      './index-legacy-635fab6a.js',
      './index-legacy-31ac821a.js',
      './index-legacy-62a49047.js',
      './element-legacy-e7b6e573.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, n) {
      'use strict'
      var a, u, i, l, c, s, d, f, p, v, h, m, y, g, b, w, x, _, I, V, k, j, O, L, E, P, S, C, $
      return {
        setters: [
          function (e) {
            ;((a = e.y),
              (u = e.at),
              (i = e.r),
              (l = e.aq),
              (c = e.aw),
              (s = e.R),
              (d = e.b),
              (f = e.ak),
              (p = e.a8),
              (v = e.f),
              (h = e.h),
              (m = e.i),
              (y = e.M),
              (g = e.N),
              (b = e.H),
              (w = e.F),
              (x = e.a0),
              (_ = e.L),
              (I = e.G))
          },
          function (e) {
            ;((V = e.h), (k = e.f), (j = e.o), (O = e._))
          },
          function (e) {
            ;((L = e.q), (E = e.c))
          },
          function (e) {
            ;((P = e.d), (S = e.f))
          },
          function (e) {
            C = e.g
          },
          function (e) {
            $ = e.E
          },
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.app-container[data-v-8a539c9e]{position:relative;padding:20px;font-family:Microsoft YaHei,sans-serif;display:flex;flex-direction:column;height:100%}.app-container[data-v-8a539c9e] .el-radio{margin-right:10px;margin-bottom:10px}.app-container .app-content[data-v-8a539c9e]{flex:1;overflow-y:auto;padding-bottom:20px}.app-container .footer[data-v-8a539c9e]{flex-shrink:0;padding:20px;background:rgba(0,121,242,.0509803922);border-radius:0 0 8px 8px;border:1px solid rgba(0,121,242,.1);z-index:100}.section[data-v-8a539c9e]{margin-top:20px}\n'),
            document.head.appendChild(n))
          var G = { class: 'app-container' },
            T = { class: 'app-content' },
            N = { class: 'section' },
            U = { class: 'section' },
            B = { class: 'section' },
            D = { class: 'section' },
            F = { class: 'section' },
            z = { class: 'section' },
            A = { class: 'section' },
            q = { class: 'section' },
            M = { style: { display: 'flex', 'align-items': 'center', gap: '20px' } },
            R = { class: 'footer' },
            H = a(
              o(
                o({}, { name: 'createInstance' }),
                {},
                {
                  __name: 'CreateInstance',
                  setup: function (e) {
                    var n = V().t,
                      a = k(),
                      o = u(a).userInfo,
                      O = i('高端真机'),
                      H = i('hot'),
                      Y = i(!1),
                      J = l(),
                      K = c(),
                      Q = j(),
                      W = [
                        { label: '4GB', value: 4 },
                        { label: '16GB', value: 16 },
                        { label: '32GB', value: 32 },
                        { label: '64GB', value: 64 },
                        { label: '128GB', value: 128 },
                        { label: '256GB', value: 256 }
                      ],
                      X = s({
                        clusterCode: '',
                        specificationCode: '',
                        imageId: '',
                        number: 1,
                        storageSize: 32,
                        screenLayoutCode: '',
                        randomADITemplates: !1,
                        realPhoneTemplateId: null,
                        countryCode: 'JP',
                        groupId: 0,
                        note: '',
                        remark: '',
                        local_group_uuid: ''
                      }),
                      Z = i([]),
                      ee = i([]),
                      te = i([]),
                      ne = (function () {
                        var e = r(
                          t().mark(function e() {
                            var n
                            return t().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        o.value.specificationCode &&
                                          (X.specificationCode = o.value.specificationCode),
                                        '' !== o.value.group_id && (X.groupId = o.value.group_id),
                                        o.value.cluster_name &&
                                          (X.clusterCode = o.value.cluster_name),
                                        (e.prev = 3),
                                        (e.next = 6),
                                        P()
                                      )
                                    case 6:
                                      ;(200 === (n = e.sent).code && n.data && n.data.length > 0
                                        ? ((ee.value = n.data.map(function (e) {
                                            return {
                                              label: 'Android '
                                                .concat(e.androidVersion, '_')
                                                .concat(e.imageVersion),
                                              value: e.imageId.toLowerCase(),
                                              version: e.androidVersion
                                            }
                                          })),
                                          (X.imageId = ee.value[0].value),
                                          oe(ee.value[0].version))
                                        : o.value.images &&
                                          ((ee.value = o.value.images.ids),
                                          (X.imageId = o.value.images.ids[0].value),
                                          oe(o.value.images.ids[0].version)),
                                        (e.next = 14))
                                      break
                                    case 10:
                                      ;((e.prev = 10),
                                        (e.t0 = e.catch(3)),
                                        console.error('获取预热镜像失败:', e.t0),
                                        o.value.images &&
                                          ((ee.value = o.value.images.ids),
                                          (X.imageId = o.value.images.ids[0].value),
                                          oe(o.value.images.ids[0].version)))
                                    case 14:
                                    case 'end':
                                      return e.stop()
                                  }
                              },
                              e,
                              null,
                              [[3, 10]]
                            )
                          })
                        )
                        return function () {
                          return e.apply(this, arguments)
                        }
                      })(),
                      re = (function () {
                        var e = r(
                          t().mark(function e() {
                            var n
                            return t().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return ((e.prev = 0), (e.next = 3), C())
                                    case 3:
                                      ;((n = e.sent),
                                        (Z.value = n.map(function (e) {
                                          return { label: e.name, value: e.name, uuid: e.uuid }
                                        })),
                                        Z.value.length > 0 &&
                                          ((X.note = Z.value[0].value),
                                          (X.local_group_uuid = Z.value[0].uuid)),
                                        (e.next = 11))
                                      break
                                    case 8:
                                      ;((e.prev = 8),
                                        (e.t0 = e.catch(0)),
                                        console.error('获取分组列表失败:', e.t0))
                                    case 11:
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
                      ae = function (e) {
                        var t = Z.value.find(function (t) {
                          return t.value === e
                        })
                        t && (X.local_group_uuid = t.uuid)
                      },
                      oe = (function () {
                        var e = r(
                          t().mark(function e(n) {
                            var r
                            return t().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        L({ androidImageVersion: n })
                                      )
                                    case 3:
                                      ;(200 === (r = e.sent).code &&
                                        ((te.value = r.data.map(function (e) {
                                          return {
                                            label: ''.concat(e.brand, ' ').concat(e.model, ' '),
                                            value: e.id
                                          }
                                        })),
                                        te.value.length > 0
                                          ? (X.realPhoneTemplateId = te.value[0].value)
                                          : (X.realPhoneTemplateId = null)),
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
                        return function (t) {
                          return e.apply(this, arguments)
                        }
                      })(),
                      ue = function (e) {
                        var t = ee.value.find(function (t) {
                          return t.value === e
                        })
                        t && t.version && oe(t.version)
                      }
                    ;(d(
                      r(
                        t().mark(function e() {
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (re(), (e.next = 3), ne())
                                case 3:
                                case 'end':
                                  return e.stop()
                              }
                          }, e)
                        })
                      )
                    ),
                      f(function () {}))
                    var ie = (function () {
                      var e = r(
                        t().mark(function e() {
                          var r, a
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!(X.number < 1 || X.number > 100)) {
                                      e.next = 3
                                      break
                                    }
                                    return (
                                      $.error(n('createInstance.quantityValidation')),
                                      e.abrupt('return')
                                    )
                                  case 3:
                                    return ((e.prev = 3), (Y.value = !0), (e.next = 7), E(X))
                                  case 7:
                                    return (
                                      (r = e.sent),
                                      (a = r.data.map(function (e) {
                                        var t
                                        return {
                                          instance_id: null == e ? void 0 : e.padCode,
                                          instance_name: null == e ? void 0 : e.padCode,
                                          group_id:
                                            null === (t = o.value) || void 0 === t
                                              ? void 0
                                              : t.group_id,
                                          os_version: X.imageId,
                                          image: X.imageId,
                                          local_group_uuid: X.local_group_uuid,
                                          note: X.remark || '',
                                          status: 'init'
                                        }
                                      })),
                                      (e.next = 11),
                                      S({ instances: a })
                                    )
                                  case 11:
                                    ;($.success(n('createInstance.createSuccess')),
                                      Q.delVisitedView(K),
                                      Q.delCachedView(K),
                                      J.replace('/instance'),
                                      (e.next = 20))
                                    break
                                  case 17:
                                    ;((e.prev = 17),
                                      (e.t0 = e.catch(3)),
                                      $.error(e.t0.message || n('createInstance.createFailed')))
                                  case 20:
                                    return ((e.prev = 20), (Y.value = !1), e.finish(20))
                                  case 23:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[3, 17, 20, 23]]
                          )
                        })
                      )
                      return function () {
                        return e.apply(this, arguments)
                      }
                    })()
                    return function (e, t) {
                      var n = p('el-radio'),
                        r = p('el-radio-group'),
                        a = p('el-tab-pane'),
                        o = p('el-tabs'),
                        u = p('el-option'),
                        i = p('el-select'),
                        l = p('el-input'),
                        c = p('el-input-number'),
                        s = p('el-button')
                      return (
                        v(),
                        h('div', G, [
                          m('div', T, [
                            m('div', N, [
                              m('h4', null, y(e.$t('createInstance.androidVersion')), 1),
                              g(
                                r,
                                {
                                  modelValue: X.imageId,
                                  'onUpdate:modelValue':
                                    t[0] ||
                                    (t[0] = function (e) {
                                      return (X.imageId = e)
                                    }),
                                  onChange: ue
                                },
                                {
                                  default: b(function () {
                                    return [
                                      (v(!0),
                                      h(
                                        w,
                                        null,
                                        x(ee.value, function (e) {
                                          return (
                                            v(),
                                            I(
                                              n,
                                              { key: e.value, label: e.value, border: '' },
                                              {
                                                default: b(function () {
                                                  return [_(y(e.label), 1)]
                                                }),
                                                _: 2
                                              },
                                              1032,
                                              ['label']
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
                            ]),
                            m('div', U, [
                              m('h4', null, y(e.$t('createInstance.deviceModel')), 1),
                              g(
                                r,
                                {
                                  modelValue: O.value,
                                  'onUpdate:modelValue':
                                    t[1] ||
                                    (t[1] = function (e) {
                                      return (O.value = e)
                                    })
                                },
                                {
                                  default: b(function () {
                                    return [
                                      g(n, { label: '高端真机', value: '高端真机', border: '' })
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            m('div', B, [
                              m('h4', null, y(e.$t('createInstance.productModel')), 1),
                              g(
                                o,
                                {
                                  modelValue: H.value,
                                  'onUpdate:modelValue':
                                    t[3] ||
                                    (t[3] = function (e) {
                                      return (H.value = e)
                                    })
                                },
                                {
                                  default: b(function () {
                                    return [
                                      g(
                                        a,
                                        { label: e.$t('createInstance.hot'), name: 'hot' },
                                        {
                                          default: b(function () {
                                            return [
                                              g(
                                                r,
                                                {
                                                  modelValue: X.realPhoneTemplateId,
                                                  'onUpdate:modelValue':
                                                    t[2] ||
                                                    (t[2] = function (e) {
                                                      return (X.realPhoneTemplateId = e)
                                                    })
                                                },
                                                {
                                                  default: b(function () {
                                                    return [
                                                      (v(!0),
                                                      h(
                                                        w,
                                                        null,
                                                        x(te.value, function (e) {
                                                          return (
                                                            v(),
                                                            I(
                                                              n,
                                                              {
                                                                key: e.value,
                                                                label: e.value,
                                                                border: ''
                                                              },
                                                              {
                                                                default: b(function () {
                                                                  return [_(y(e.label), 1)]
                                                                }),
                                                                _: 2
                                                              },
                                                              1032,
                                                              ['label']
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
                                        },
                                        8,
                                        ['label']
                                      )
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            m('div', D, [
                              m('h4', null, y(e.$t('createInstance.productPackage')), 1),
                              g(
                                r,
                                {
                                  modelValue: X.countryCode,
                                  'onUpdate:modelValue':
                                    t[4] ||
                                    (t[4] = function (e) {
                                      return (X.countryCode = e)
                                    })
                                },
                                {
                                  default: b(function () {
                                    return [
                                      g(
                                        n,
                                        { label: 'JP', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.japan')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'KR', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.korea')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'BR', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.brazil')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'VN', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.vietnam')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'US', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.usa')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'GB', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.uk')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'TH', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.thailand')), 1)]
                                          }),
                                          _: 1
                                        }
                                      ),
                                      g(
                                        n,
                                        { label: 'DE', border: '' },
                                        {
                                          default: b(function () {
                                            return [_(y(e.$t('createInstance.germany')), 1)]
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
                            ]),
                            m('div', F, [
                              m('h4', null, y(e.$t('createInstance.storageSize')), 1),
                              g(
                                r,
                                {
                                  modelValue: X.storageSize,
                                  'onUpdate:modelValue':
                                    t[5] ||
                                    (t[5] = function (e) {
                                      return (X.storageSize = e)
                                    })
                                },
                                {
                                  default: b(function () {
                                    return [
                                      (v(),
                                      h(
                                        w,
                                        null,
                                        x(W, function (e) {
                                          return g(
                                            n,
                                            { key: e.value, label: e.value, border: '' },
                                            {
                                              default: b(function () {
                                                return [_(y(e.label), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['label']
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
                            ]),
                            m('div', z, [
                              m('h4', null, y(e.$t('createInstance.group')), 1),
                              g(
                                i,
                                {
                                  modelValue: X.note,
                                  'onUpdate:modelValue':
                                    t[6] ||
                                    (t[6] = function (e) {
                                      return (X.note = e)
                                    }),
                                  onChange: ae,
                                  placeholder: e.$t('createInstance.selectGroup'),
                                  style: { width: '200px' }
                                },
                                {
                                  default: b(function () {
                                    return [
                                      (v(!0),
                                      h(
                                        w,
                                        null,
                                        x(Z.value, function (e) {
                                          return (
                                            v(),
                                            I(
                                              u,
                                              { key: e.value, label: e.label, value: e.label },
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
                            ]),
                            m('div', A, [
                              m('h4', null, y(e.$t('createInstance.remarkAlias')), 1),
                              g(
                                l,
                                {
                                  modelValue: X.remark,
                                  'onUpdate:modelValue':
                                    t[7] ||
                                    (t[7] = function (e) {
                                      return (X.remark = e)
                                    }),
                                  placeholder: e.$t('createInstance.enterRemark'),
                                  style: { width: '300px' }
                                },
                                null,
                                8,
                                ['modelValue', 'placeholder']
                              )
                            ]),
                            m('div', q, [
                              m('h4', null, y(e.$t('createInstance.quantityPrice')), 1),
                              m('div', M, [
                                g(
                                  c,
                                  {
                                    modelValue: X.number,
                                    'onUpdate:modelValue':
                                      t[8] ||
                                      (t[8] = function (e) {
                                        return (X.number = e)
                                      }),
                                    min: 1,
                                    max: 100,
                                    style: { width: '150px' }
                                  },
                                  null,
                                  8,
                                  ['modelValue']
                                )
                              ])
                            ])
                          ]),
                          m('div', R, [
                            g(
                              s,
                              { type: 'primary', onClick: ie, loading: Y.value },
                              {
                                default: b(function () {
                                  return [_(y(e.$t('createInstance.confirmCreate')), 1)]
                                }),
                                _: 1
                              },
                              8,
                              ['loading']
                            )
                          ])
                        ])
                      )
                    }
                  }
                }
              )
            )
          e('default', O(H, [['__scopeId', 'data-v-8a539c9e']]))
        }
      }
    }
  )
})()
