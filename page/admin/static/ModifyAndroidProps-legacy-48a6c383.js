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
        return o
      }
    var r,
      o = {},
      n = Object.prototype,
      i = n.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      s = l.iterator || '@@iterator',
      u = l.asyncIterator || '@@asyncIterator',
      p = l.toStringTag || '@@toStringTag'
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
    function c(e, t, r, o) {
      var n = t && t.prototype instanceof L ? t : L,
        i = Object.create(n.prototype),
        l = new j(o || [])
      return (a(i, '_invoke', { value: N(e, r, l) }), i)
    }
    function f(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    o.wrap = c
    var m = 'suspendedStart',
      y = 'suspendedYield',
      h = 'executing',
      P = 'completed',
      v = {}
    function L() {}
    function g() {}
    function V() {}
    var b = {}
    d(b, s, function () {
      return this
    })
    var w = Object.getPrototypeOf,
      x = w && w(w(S([])))
    x && x !== n && i.call(x, s) && (b = x)
    var _ = (V.prototype = L.prototype = Object.create(b))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function A(t, r) {
      function o(n, a, l, s) {
        var u = f(t[n], t, a)
        if ('throw' !== u.type) {
          var p = u.arg,
            d = p.value
          return d && 'object' == e(d) && i.call(d, '__await')
            ? r.resolve(d.__await).then(
                function (e) {
                  o('next', e, l, s)
                },
                function (e) {
                  o('throw', e, l, s)
                }
              )
            : r.resolve(d).then(
                function (e) {
                  ;((p.value = e), l(p))
                },
                function (e) {
                  return o('throw', e, l, s)
                }
              )
        }
        s(u.arg)
      }
      var n
      a(this, '_invoke', {
        value: function (e, t) {
          function i() {
            return new r(function (r, n) {
              o(e, t, r, n)
            })
          }
          return (n = n ? n.then(i, i) : i())
        }
      })
    }
    function N(e, t, o) {
      var n = m
      return function (i, a) {
        if (n === h) throw new Error('Generator is already running')
        if (n === P) {
          if ('throw' === i) throw a
          return { value: r, done: !0 }
        }
        for (o.method = i, o.arg = a; ; ) {
          var l = o.delegate
          if (l) {
            var s = C(l, o)
            if (s) {
              if (s === v) continue
              return s
            }
          }
          if ('next' === o.method) o.sent = o._sent = o.arg
          else if ('throw' === o.method) {
            if (n === m) throw ((n = P), o.arg)
            o.dispatchException(o.arg)
          } else 'return' === o.method && o.abrupt('return', o.arg)
          n = h
          var u = f(e, t, o)
          if ('normal' === u.type) {
            if (((n = o.done ? P : y), u.arg === v)) continue
            return { value: u.arg, done: o.done }
          }
          'throw' === u.type && ((n = P), (o.method = 'throw'), (o.arg = u.arg))
        }
      }
    }
    function C(e, t) {
      var o = t.method,
        n = e.iterator[o]
      if (n === r)
        return (
          (t.delegate = null),
          ('throw' === o &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = r), C(e, t), 'throw' === t.method)) ||
            ('return' !== o &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
          v
        )
      var i = f(n, e.iterator, t.arg)
      if ('throw' === i.type) return ((t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), v)
      var a = i.arg
      return a
        ? a.done
          ? ((t[e.resultName] = a.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = r)),
            (t.delegate = null),
            v)
          : a
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          v)
    }
    function U(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function E(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function j(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(U, this), this.reset(!0))
    }
    function S(t) {
      if (t || '' === t) {
        var o = t[s]
        if (o) return o.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var n = -1,
            a = function e() {
              for (; ++n < t.length; ) if (i.call(t, n)) return ((e.value = t[n]), (e.done = !1), e)
              return ((e.value = r), (e.done = !0), e)
            }
          return (a.next = a)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (g.prototype = V),
      a(_, 'constructor', { value: V, configurable: !0 }),
      a(V, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = d(V, p, 'GeneratorFunction')),
      (o.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === g || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (o.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, V)
            : ((e.__proto__ = V), d(e, p, 'GeneratorFunction')),
          (e.prototype = Object.create(_)),
          e
        )
      }),
      (o.awrap = function (e) {
        return { __await: e }
      }),
      k(A.prototype),
      d(A.prototype, u, function () {
        return this
      }),
      (o.AsyncIterator = A),
      (o.async = function (e, t, r, n, i) {
        void 0 === i && (i = Promise)
        var a = new A(c(e, t, r, n), i)
        return o.isGeneratorFunction(t)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next()
            })
      }),
      k(_),
      d(_, p, 'Generator'),
      d(_, s, function () {
        return this
      }),
      d(_, 'toString', function () {
        return '[object Generator]'
      }),
      (o.keys = function (e) {
        var t = Object(e),
          r = []
        for (var o in t) r.push(o)
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var o = r.pop()
              if (o in t) return ((e.value = o), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (o.values = S),
      (j.prototype = {
        constructor: j,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(E),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
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
          function o(o, n) {
            return (
              (l.type = 'throw'),
              (l.arg = e),
              (t.next = o),
              n && ((t.method = 'next'), (t.arg = r)),
              !!n
            )
          }
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var a = this.tryEntries[n],
              l = a.completion
            if ('root' === a.tryLoc) return o('end')
            if (a.tryLoc <= this.prev) {
              var s = i.call(a, 'catchLoc'),
                u = i.call(a, 'finallyLoc')
              if (s && u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
              } else if (s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
              } else {
                if (!u) throw new Error('try statement without catch or finally')
                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r]
            if (o.tryLoc <= this.prev && i.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var n = o
              break
            }
          }
          n &&
            ('break' === e || 'continue' === e) &&
            n.tryLoc <= t &&
            t <= n.finallyLoc &&
            (n = null)
          var a = n ? n.completion : {}
          return (
            (a.type = e),
            (a.arg = t),
            n ? ((this.method = 'next'), (this.next = n.finallyLoc), v) : this.complete(a)
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
            v
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.finallyLoc === e) return (this.complete(r.completion, r.afterLoc), E(r), v)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var o = r.completion
              if ('throw' === o.type) {
                var n = o.arg
                E(r)
              }
              return n
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, o) {
          return (
            (this.delegate = { iterator: S(e), resultName: t, nextLoc: o }),
            'next' === this.method && (this.arg = r),
            v
          )
        }
      }),
      o
    )
  }
  function r(e, t, r, o, n, i, a) {
    try {
      var l = e[i](a),
        s = l.value
    } catch (u) {
      return void r(u)
    }
    l.done ? t(s) : Promise.resolve(s).then(o, n)
  }
  System.register(
    [
      './index-legacy-635fab6a.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, o) {
      'use strict'
      var n, i, a, l, s, u, p, d, c, f, m, y, h, P, v, L, g, V, b, w
      return {
        setters: [
          function (e) {
            n = e.u
          },
          function (e) {
            ;((i = e.h), (a = e._))
          },
          function (e) {
            l = e.E
          },
          function (e) {
            ;((s = e.y),
              (u = e.R),
              (p = e.r),
              (d = e.d),
              (c = e.b),
              (f = e.a8),
              (m = e.f),
              (y = e.G),
              (h = e.H),
              (P = e.N),
              (v = e.L),
              (L = e.M),
              (g = e.u),
              (V = e.h),
              (b = e.F),
              (w = e.a0))
          },
          null
        ],
        execute: function () {
          var o = document.createElement('style')
          ;((o.textContent =
            '.prop-item[data-v-4ca93158]{margin-bottom:15px}.prop-item[data-v-4ca93158] .el-input-group__prepend{padding:0;border:none;background:none}.prop-item[data-v-4ca93158] .el-input__wrapper{border-top-left-radius:0;border-bottom-left-radius:0}\n'),
            document.head.appendChild(o))
          var x = s({
            __name: 'ModifyAndroidProps',
            props: {
              visible: { type: Boolean, default: !1 },
              padCode: { type: String, default: '' }
            },
            emits: ['update:visible', 'success'],
            setup: function (e, o) {
              var a = o.emit,
                s = i().t,
                x = e,
                _ = a,
                k = u({
                  padCodes: [],
                  modemPersistPropertiesList: [],
                  modemPropertiesList: [],
                  systemPersistPropertiesList: [],
                  systemPropertiesList: [],
                  settingPropertiesList: [],
                  oaidPropertiesList: []
                }),
                A = p()
              ;(d(
                function () {
                  return x.visible
                },
                function (e) {
                  e &&
                    ((k.padCodes = [x.padCode]),
                    (k.modemPersistPropertiesList = []),
                    (k.modemPropertiesList = []),
                    (k.systemPersistPropertiesList = []),
                    (k.systemPropertiesList = []),
                    (k.settingPropertiesList = []),
                    (k.oaidPropertiesList = []))
                }
              ),
                c(function () {
                  ;((k.padCodes = [x.padCode]),
                    (k.modemPersistPropertiesList = []),
                    (k.modemPropertiesList = []),
                    (k.systemPersistPropertiesList = []),
                    (k.systemPropertiesList = []),
                    (k.settingPropertiesList = []),
                    (k.oaidPropertiesList = []))
                }))
              var N = function () {
                  _('update:visible', !1)
                },
                C = function () {
                  k.modemPersistPropertiesList.push({ propertiesName: '', propertiesValue: '' })
                },
                U = function () {
                  k.modemPropertiesList.push({ propertiesName: '', propertiesValue: '' })
                },
                E = function () {
                  k.systemPersistPropertiesList.push({ propertiesName: '', propertiesValue: '' })
                },
                j = function () {
                  k.systemPropertiesList.push({ propertiesName: '', propertiesValue: '' })
                },
                S = function () {
                  k.settingPropertiesList.push({ propertiesName: '', propertiesValue: '' })
                },
                M = function () {
                  k.oaidPropertiesList.push({ propertiesName: '', propertiesValue: '' })
                },
                O = (function () {
                  var e,
                    o =
                      ((e = t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (A.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.prev = 2), (e.next = 5), n(k))
                                case 5:
                                  ;(l.success(s('instanceList.modifyAndroidPropsSuccess')),
                                    _('success'),
                                    N(),
                                    (e.next = 13))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(2)),
                                    l.error(
                                      e.t0.message || s('instanceList.modifyAndroidPropsFailed')
                                    ))
                                case 13:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[2, 10]]
                        )
                      })),
                      function () {
                        var t = this,
                          o = arguments
                        return new Promise(function (n, i) {
                          var a = e.apply(t, o)
                          function l(e) {
                            r(a, n, i, l, s, 'next', e)
                          }
                          function s(e) {
                            r(a, n, i, l, s, 'throw', e)
                          }
                          l(void 0)
                        })
                      })
                  return function () {
                    return o.apply(this, arguments)
                  }
                })(),
                G = function () {
                  ;((k.padCodes = [x.padCode]),
                    (k.modemPersistPropertiesList = []),
                    (k.modemPropertiesList = []),
                    (k.systemPersistPropertiesList = []),
                    (k.systemPropertiesList = []),
                    (k.settingPropertiesList = []),
                    (k.oaidPropertiesList = []))
                }
              return function (e, t) {
                var r = f('el-alert'),
                  o = f('el-input'),
                  n = f('el-form-item'),
                  i = f('el-button'),
                  a = f('el-form'),
                  l = f('el-drawer')
                return (
                  m(),
                  y(
                    l,
                    {
                      'model-value': x.visible,
                      'onUpdate:modelValue': N,
                      title: g(s)('instanceList.modifyAndroidPropsTitle'),
                      size: '600px'
                    },
                    {
                      footer: h(function () {
                        return [
                          P(
                            i,
                            { onClick: N },
                            {
                              default: h(function () {
                                return [v(L(g(s)('common.cancel')), 1)]
                              }),
                              _: 1
                            }
                          ),
                          P(
                            i,
                            { onClick: G },
                            {
                              default: h(function () {
                                return [v(L(g(s)('common.reset')), 1)]
                              }),
                              _: 1
                            }
                          ),
                          P(
                            i,
                            { type: 'primary', onClick: O },
                            {
                              default: h(function () {
                                return [v(L(g(s)('common.confirm')), 1)]
                              }),
                              _: 1
                            }
                          )
                        ]
                      }),
                      default: h(function () {
                        return [
                          P(
                            r,
                            {
                              title: g(s)('instanceList.modifyAndroidPropsAlert'),
                              type: 'info',
                              closable: !1,
                              style: { 'margin-bottom': '20px' }
                            },
                            null,
                            8,
                            ['title']
                          ),
                          P(
                            a,
                            { ref_key: 'formRef', ref: A, model: k, 'label-width': '150px' },
                            {
                              default: h(function () {
                                return [
                                  P(
                                    n,
                                    {
                                      label: g(s)('instanceList.modifyAndroidPropsInstanceId'),
                                      prop: 'padCodes'
                                    },
                                    {
                                      default: h(function () {
                                        return [
                                          P(
                                            o,
                                            {
                                              modelValue: k.padCodes[0],
                                              'onUpdate:modelValue':
                                                t[0] ||
                                                (t[0] = function (e) {
                                                  return (k.padCodes[0] = e)
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
                                  P(
                                    n,
                                    { label: g(s)('instanceList.modifyAndroidPropsModemPersist') },
                                    {
                                      default: h(function () {
                                        return [
                                          (m(!0),
                                          V(
                                            b,
                                            null,
                                            w(k.modemPersistPropertiesList, function (e, t) {
                                              return (
                                                m(),
                                                V('div', { key: t, class: 'prop-item' }, [
                                                  P(
                                                    o,
                                                    {
                                                      modelValue: e.propertiesValue,
                                                      'onUpdate:modelValue': function (t) {
                                                        return (e.propertiesValue = t)
                                                      },
                                                      modelModifiers: { trim: !0 },
                                                      placeholder: g(s)(
                                                        'instanceList.modifyAndroidPropsPropertyValue'
                                                      ),
                                                      style: { 'margin-bottom': '10px' }
                                                    },
                                                    {
                                                      prepend: h(function () {
                                                        return [
                                                          P(
                                                            o,
                                                            {
                                                              modelValue: e.propertiesName,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.propertiesName = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: g(s)(
                                                                'instanceList.modifyAndroidPropsPropertyName'
                                                              ),
                                                              style: { width: '200px' }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          )
                                                        ]
                                                      }),
                                                      append: h(function () {
                                                        return [
                                                          P(
                                                            i,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  k.modemPersistPropertiesList.splice(
                                                                    e,
                                                                    1
                                                                  )
                                                                })(t)
                                                              },
                                                              icon: 'Delete'
                                                            },
                                                            null,
                                                            8,
                                                            ['onClick']
                                                          )
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      'modelValue',
                                                      'onUpdate:modelValue',
                                                      'placeholder'
                                                    ]
                                                  )
                                                ])
                                              )
                                            }),
                                            128
                                          )),
                                          P(
                                            i,
                                            { onClick: C, type: 'primary', icon: 'Plus' },
                                            {
                                              default: h(function () {
                                                return [
                                                  v(
                                                    L(
                                                      g(s)(
                                                        'instanceList.modifyAndroidPropsAddProperty'
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
                                    ['label']
                                  ),
                                  P(
                                    n,
                                    {
                                      label: g(s)('instanceList.modifyAndroidPropsModemNonPersist')
                                    },
                                    {
                                      default: h(function () {
                                        return [
                                          (m(!0),
                                          V(
                                            b,
                                            null,
                                            w(k.modemPropertiesList, function (e, t) {
                                              return (
                                                m(),
                                                V('div', { key: t, class: 'prop-item' }, [
                                                  P(
                                                    o,
                                                    {
                                                      modelValue: e.propertiesValue,
                                                      'onUpdate:modelValue': function (t) {
                                                        return (e.propertiesValue = t)
                                                      },
                                                      modelModifiers: { trim: !0 },
                                                      placeholder: g(s)(
                                                        'instanceList.modifyAndroidPropsPropertyValue'
                                                      ),
                                                      style: { 'margin-bottom': '10px' }
                                                    },
                                                    {
                                                      prepend: h(function () {
                                                        return [
                                                          P(
                                                            o,
                                                            {
                                                              modelValue: e.propertiesName,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.propertiesName = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: g(s)(
                                                                'instanceList.modifyAndroidPropsPropertyName'
                                                              ),
                                                              style: { width: '200px' }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          )
                                                        ]
                                                      }),
                                                      append: h(function () {
                                                        return [
                                                          P(
                                                            i,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  k.modemPropertiesList.splice(e, 1)
                                                                })(t)
                                                              },
                                                              icon: 'Delete'
                                                            },
                                                            null,
                                                            8,
                                                            ['onClick']
                                                          )
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      'modelValue',
                                                      'onUpdate:modelValue',
                                                      'placeholder'
                                                    ]
                                                  )
                                                ])
                                              )
                                            }),
                                            128
                                          )),
                                          P(
                                            i,
                                            { onClick: U, type: 'primary', icon: 'Plus' },
                                            {
                                              default: h(function () {
                                                return [
                                                  v(
                                                    L(
                                                      g(s)(
                                                        'instanceList.modifyAndroidPropsAddProperty'
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
                                    ['label']
                                  ),
                                  P(
                                    n,
                                    { label: g(s)('instanceList.modifyAndroidPropsSystemPersist') },
                                    {
                                      default: h(function () {
                                        return [
                                          (m(!0),
                                          V(
                                            b,
                                            null,
                                            w(k.systemPersistPropertiesList, function (e, t) {
                                              return (
                                                m(),
                                                V('div', { key: t, class: 'prop-item' }, [
                                                  P(
                                                    o,
                                                    {
                                                      modelValue: e.propertiesValue,
                                                      'onUpdate:modelValue': function (t) {
                                                        return (e.propertiesValue = t)
                                                      },
                                                      modelModifiers: { trim: !0 },
                                                      placeholder: g(s)(
                                                        'instanceList.modifyAndroidPropsPropertyValue'
                                                      ),
                                                      style: { 'margin-bottom': '10px' }
                                                    },
                                                    {
                                                      prepend: h(function () {
                                                        return [
                                                          P(
                                                            o,
                                                            {
                                                              modelValue: e.propertiesName,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.propertiesName = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: g(s)(
                                                                'instanceList.modifyAndroidPropsPropertyName'
                                                              ),
                                                              style: { width: '200px' }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          )
                                                        ]
                                                      }),
                                                      append: h(function () {
                                                        return [
                                                          P(
                                                            i,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  k.systemPersistPropertiesList.splice(
                                                                    e,
                                                                    1
                                                                  )
                                                                })(t)
                                                              },
                                                              icon: 'Delete'
                                                            },
                                                            null,
                                                            8,
                                                            ['onClick']
                                                          )
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      'modelValue',
                                                      'onUpdate:modelValue',
                                                      'placeholder'
                                                    ]
                                                  )
                                                ])
                                              )
                                            }),
                                            128
                                          )),
                                          P(
                                            i,
                                            { onClick: E, type: 'primary', icon: 'Plus' },
                                            {
                                              default: h(function () {
                                                return [
                                                  v(
                                                    L(
                                                      g(s)(
                                                        'instanceList.modifyAndroidPropsAddProperty'
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
                                    ['label']
                                  ),
                                  P(
                                    n,
                                    {
                                      label: g(s)('instanceList.modifyAndroidPropsSystemNonPersist')
                                    },
                                    {
                                      default: h(function () {
                                        return [
                                          (m(!0),
                                          V(
                                            b,
                                            null,
                                            w(k.systemPropertiesList, function (e, t) {
                                              return (
                                                m(),
                                                V('div', { key: t, class: 'prop-item' }, [
                                                  P(
                                                    o,
                                                    {
                                                      modelValue: e.propertiesValue,
                                                      'onUpdate:modelValue': function (t) {
                                                        return (e.propertiesValue = t)
                                                      },
                                                      modelModifiers: { trim: !0 },
                                                      placeholder: g(s)(
                                                        'instanceList.modifyAndroidPropsPropertyValue'
                                                      ),
                                                      style: { 'margin-bottom': '10px' }
                                                    },
                                                    {
                                                      prepend: h(function () {
                                                        return [
                                                          P(
                                                            o,
                                                            {
                                                              modelValue: e.propertiesName,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.propertiesName = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: g(s)(
                                                                'instanceList.modifyAndroidPropsPropertyName'
                                                              ),
                                                              style: { width: '200px' }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          )
                                                        ]
                                                      }),
                                                      append: h(function () {
                                                        return [
                                                          P(
                                                            i,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  k.systemPropertiesList.splice(
                                                                    e,
                                                                    1
                                                                  )
                                                                })(t)
                                                              },
                                                              icon: 'Delete'
                                                            },
                                                            null,
                                                            8,
                                                            ['onClick']
                                                          )
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      'modelValue',
                                                      'onUpdate:modelValue',
                                                      'placeholder'
                                                    ]
                                                  )
                                                ])
                                              )
                                            }),
                                            128
                                          )),
                                          P(
                                            i,
                                            { onClick: j, type: 'primary', icon: 'Plus' },
                                            {
                                              default: h(function () {
                                                return [
                                                  v(
                                                    L(
                                                      g(s)(
                                                        'instanceList.modifyAndroidPropsAddProperty'
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
                                    ['label']
                                  ),
                                  P(
                                    n,
                                    { label: g(s)('instanceList.modifyAndroidPropsSetting') },
                                    {
                                      default: h(function () {
                                        return [
                                          (m(!0),
                                          V(
                                            b,
                                            null,
                                            w(k.settingPropertiesList, function (e, t) {
                                              return (
                                                m(),
                                                V('div', { key: t, class: 'prop-item' }, [
                                                  P(
                                                    o,
                                                    {
                                                      modelValue: e.propertiesValue,
                                                      'onUpdate:modelValue': function (t) {
                                                        return (e.propertiesValue = t)
                                                      },
                                                      modelModifiers: { trim: !0 },
                                                      placeholder: g(s)(
                                                        'instanceList.modifyAndroidPropsPropertyValue'
                                                      ),
                                                      style: { 'margin-bottom': '10px' }
                                                    },
                                                    {
                                                      prepend: h(function () {
                                                        return [
                                                          P(
                                                            o,
                                                            {
                                                              modelValue: e.propertiesName,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.propertiesName = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: g(s)(
                                                                'instanceList.modifyAndroidPropsPropertyName'
                                                              ),
                                                              style: { width: '200px' }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          )
                                                        ]
                                                      }),
                                                      append: h(function () {
                                                        return [
                                                          P(
                                                            i,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  k.settingPropertiesList.splice(
                                                                    e,
                                                                    1
                                                                  )
                                                                })(t)
                                                              },
                                                              icon: 'Delete'
                                                            },
                                                            null,
                                                            8,
                                                            ['onClick']
                                                          )
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      'modelValue',
                                                      'onUpdate:modelValue',
                                                      'placeholder'
                                                    ]
                                                  )
                                                ])
                                              )
                                            }),
                                            128
                                          )),
                                          P(
                                            i,
                                            { onClick: S, type: 'primary', icon: 'Plus' },
                                            {
                                              default: h(function () {
                                                return [
                                                  v(
                                                    L(
                                                      g(s)(
                                                        'instanceList.modifyAndroidPropsAddProperty'
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
                                    ['label']
                                  ),
                                  P(
                                    n,
                                    { label: g(s)('instanceList.modifyAndroidPropsOaid') },
                                    {
                                      default: h(function () {
                                        return [
                                          (m(!0),
                                          V(
                                            b,
                                            null,
                                            w(k.oaidPropertiesList, function (e, t) {
                                              return (
                                                m(),
                                                V('div', { key: t, class: 'prop-item' }, [
                                                  P(
                                                    o,
                                                    {
                                                      modelValue: e.propertiesValue,
                                                      'onUpdate:modelValue': function (t) {
                                                        return (e.propertiesValue = t)
                                                      },
                                                      modelModifiers: { trim: !0 },
                                                      placeholder: g(s)(
                                                        'instanceList.modifyAndroidPropsPropertyValue'
                                                      ),
                                                      style: { 'margin-bottom': '10px' }
                                                    },
                                                    {
                                                      prepend: h(function () {
                                                        return [
                                                          P(
                                                            o,
                                                            {
                                                              modelValue: e.propertiesName,
                                                              'onUpdate:modelValue': function (t) {
                                                                return (e.propertiesName = t)
                                                              },
                                                              modelModifiers: { trim: !0 },
                                                              placeholder: g(s)(
                                                                'instanceList.modifyAndroidPropsPropertyName'
                                                              ),
                                                              style: { width: '200px' }
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              'modelValue',
                                                              'onUpdate:modelValue',
                                                              'placeholder'
                                                            ]
                                                          )
                                                        ]
                                                      }),
                                                      append: h(function () {
                                                        return [
                                                          P(
                                                            i,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  k.oaidPropertiesList.splice(e, 1)
                                                                })(t)
                                                              },
                                                              icon: 'Delete'
                                                            },
                                                            null,
                                                            8,
                                                            ['onClick']
                                                          )
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      'modelValue',
                                                      'onUpdate:modelValue',
                                                      'placeholder'
                                                    ]
                                                  )
                                                ])
                                              )
                                            }),
                                            128
                                          )),
                                          P(
                                            i,
                                            { onClick: M, type: 'primary', icon: 'Plus' },
                                            {
                                              default: h(function () {
                                                return [
                                                  v(
                                                    L(
                                                      g(s)(
                                                        'instanceList.modifyAndroidPropsAddProperty'
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
                    ['model-value', 'title']
                  )
                )
              }
            }
          })
          e('default', a(x, [['__scopeId', 'data-v-4ca93158']]))
        }
      }
    }
  )
})()
