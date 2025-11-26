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
        return n
      }
    var r,
      n = {},
      o = Object.prototype,
      i = o.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      l = c.asyncIterator || '@@asyncIterator',
      s = c.toStringTag || '@@toStringTag'
    function f(t, e, r) {
      return (
        Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        t[e]
      )
    }
    try {
      f({}, '')
    } catch (r) {
      f = function (t, e, r) {
        return (t[e] = r)
      }
    }
    function h(t, e, r, n) {
      var o = e && e.prototype instanceof b ? e : b,
        i = Object.create(o.prototype),
        c = new N(n || [])
      return (a(i, '_invoke', { value: P(t, r, c) }), i)
    }
    function p(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    n.wrap = h
    var d = 'suspendedStart',
      y = 'suspendedYield',
      v = 'executing',
      m = 'completed',
      g = {}
    function b() {}
    function w() {}
    function x() {}
    var j = {}
    f(j, u, function () {
      return this
    })
    var O = Object.getPrototypeOf,
      E = O && O(O(G([])))
    E && E !== o && i.call(E, u) && (j = E)
    var L = (x.prototype = b.prototype = Object.create(j))
    function C(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        f(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function _(e, r) {
      function n(o, a, c, u) {
        var l = p(e[o], e, a)
        if ('throw' !== l.type) {
          var s = l.arg,
            f = s.value
          return f && 'object' == t(f) && i.call(f, '__await')
            ? r.resolve(f.__await).then(
                function (t) {
                  n('next', t, c, u)
                },
                function (t) {
                  n('throw', t, c, u)
                }
              )
            : r.resolve(f).then(
                function (t) {
                  ;((s.value = t), c(s))
                },
                function (t) {
                  return n('throw', t, c, u)
                }
              )
        }
        u(l.arg)
      }
      var o
      a(this, '_invoke', {
        value: function (t, e) {
          function i() {
            return new r(function (r, o) {
              n(t, e, r, o)
            })
          }
          return (o = o ? o.then(i, i) : i())
        }
      })
    }
    function P(t, e, n) {
      var o = d
      return function (i, a) {
        if (o === v) throw new Error('Generator is already running')
        if (o === m) {
          if ('throw' === i) throw a
          return { value: r, done: !0 }
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate
          if (c) {
            var u = S(c, n)
            if (u) {
              if (u === g) continue
              return u
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (o === d) throw ((o = m), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          o = v
          var l = p(t, e, n)
          if ('normal' === l.type) {
            if (((o = n.done ? m : y), l.arg === g)) continue
            return { value: l.arg, done: n.done }
          }
          'throw' === l.type && ((o = m), (n.method = 'throw'), (n.arg = l.arg))
        }
      }
    }
    function S(t, e) {
      var n = e.method,
        o = t.iterator[n]
      if (o === r)
        return (
          (e.delegate = null),
          ('throw' === n &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = r), S(t, e), 'throw' === e.method)) ||
            ('return' !== n &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          g
        )
      var i = p(o, t.iterator, e.arg)
      if ('throw' === i.type) return ((e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), g)
      var a = i.arg
      return a
        ? a.done
          ? ((e[t.resultName] = a.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
            (e.delegate = null),
            g)
          : a
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          g)
    }
    function k(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function A(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function N(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(k, this), this.reset(!0))
    }
    function G(e) {
      if (e || '' === e) {
        var n = e[u]
        if (n) return n.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var o = -1,
            a = function t() {
              for (; ++o < e.length; ) if (i.call(e, o)) return ((t.value = e[o]), (t.done = !1), t)
              return ((t.value = r), (t.done = !0), t)
            }
          return (a.next = a)
        }
      }
      throw new TypeError(t(e) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      a(L, 'constructor', { value: x, configurable: !0 }),
      a(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = f(x, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor
        return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name))
      }),
      (n.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, x)
            : ((t.__proto__ = x), f(t, s, 'GeneratorFunction')),
          (t.prototype = Object.create(L)),
          t
        )
      }),
      (n.awrap = function (t) {
        return { __await: t }
      }),
      C(_.prototype),
      f(_.prototype, l, function () {
        return this
      }),
      (n.AsyncIterator = _),
      (n.async = function (t, e, r, o, i) {
        void 0 === i && (i = Promise)
        var a = new _(h(t, e, r, o), i)
        return n.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next()
            })
      }),
      C(L),
      f(L, s, 'Generator'),
      f(L, u, function () {
        return this
      }),
      f(L, 'toString', function () {
        return '[object Generator]'
      }),
      (n.keys = function (t) {
        var e = Object(t),
          r = []
        for (var n in e) r.push(n)
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop()
              if (n in e) return ((t.value = n), (t.done = !1), t)
            }
            return ((t.done = !0), t)
          }
        )
      }),
      (n.values = G),
      (N.prototype = {
        constructor: N,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(A),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
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
          function n(n, o) {
            return (
              (c.type = 'throw'),
              (c.arg = t),
              (e.next = n),
              o && ((e.method = 'next'), (e.arg = r)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              c = a.completion
            if ('root' === a.tryLoc) return n('end')
            if (a.tryLoc <= this.prev) {
              var u = i.call(a, 'catchLoc'),
                l = i.call(a, 'finallyLoc')
              if (u && l) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
              } else if (u) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r]
            if (n.tryLoc <= this.prev && i.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var o = n
              break
            }
          }
          o &&
            ('break' === t || 'continue' === t) &&
            o.tryLoc <= e &&
            e <= o.finallyLoc &&
            (o = null)
          var a = o ? o.completion : {}
          return (
            (a.type = t),
            (a.arg = e),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), g) : this.complete(a)
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
            g
          )
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e]
            if (r.finallyLoc === t) return (this.complete(r.completion, r.afterLoc), A(r), g)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e]
            if (r.tryLoc === t) {
              var n = r.completion
              if ('throw' === n.type) {
                var o = n.arg
                A(r)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: G(t), resultName: e, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            g
          )
        }
      }),
      n
    )
  }
  function r(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value
    } catch (l) {
      return void r(l)
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o)
  }
  function n(t, e) {
    var r = Object.keys(t)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t)
      ;(e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        r.push.apply(r, n))
    }
    return r
  }
  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? n(Object(r), !0).forEach(function (e) {
            i(t, e, r[e])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : n(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
    }
    return t
  }
  function i(e, r, n) {
    var o
    return (
      (o = (function (e, r) {
        if ('object' != t(e) || !e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var o = n.call(e, r || 'default')
          if ('object' != t(o)) return o
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === r ? String : Number)(e)
      })(r, 'string')),
      (r = 'symbol' == t(o) ? o : String(o)) in e
        ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[r] = n),
      e
    )
  }
  System.register(
    [
      './index-legacy-31ac821a.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (t, n) {
      'use strict'
      var i, a, c, u, l, s, f, h, p, d, y, v, m, g, b, w
      return {
        setters: [
          function (t) {
            i = t.e
          },
          function (t) {
            a = t.h
          },
          function (t) {
            c = t.E
          },
          function (t) {
            ;((u = t.y),
              (l = t.r),
              (s = t.R),
              (f = t.d),
              (h = t.a8),
              (p = t.f),
              (d = t.G),
              (y = t.H),
              (v = t.N),
              (m = t.L),
              (g = t.M),
              (b = t.u),
              (w = t.i))
          },
          null
        ],
        execute: function () {
          var n = { style: { 'margin-top': '5px', 'font-size': '12px', color: '#999' } }
          t(
            'default',
            u(
              o(
                o({}, { name: 'ExecuteAdbCommandDialog' }),
                {},
                {
                  __name: 'ExecuteAdbCommandDialog',
                  props: {
                    visible: { type: Boolean, default: !1 },
                    padCodes: {
                      type: Array,
                      default: function () {
                        return []
                      }
                    }
                  },
                  emits: ['update:visible', 'success'],
                  setup: function (t, o) {
                    var u = o.emit,
                      x = a().t,
                      j = t,
                      O = u,
                      E = l(!0),
                      L = l(!1),
                      C = s({ scriptContent: '' }),
                      _ = s({
                        scriptContent: [
                          {
                            required: !0,
                            message: x('executeAdbCommand.enterAdbCommand'),
                            trigger: 'blur'
                          }
                        ]
                      })
                    f(
                      function () {
                        return j.visible
                      },
                      function (t) {
                        ;((E.value = t), t && (C.scriptContent = ''))
                      }
                    )
                    var P = function () {
                        ;((E.value = !1), O('update:visible', !1))
                      },
                      S = l(),
                      k = (function () {
                        var t,
                          n =
                            ((t = e().mark(function t() {
                              var r
                              return e().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return ((t.prev = 0), (t.next = 3), S.value.validate())
                                      case 3:
                                        t.next = 8
                                        break
                                      case 5:
                                        return (
                                          (t.prev = 5),
                                          (t.t0 = t.catch(0)),
                                          t.abrupt('return')
                                        )
                                      case 8:
                                        if (0 !== j.padCodes.length) {
                                          t.next = 11
                                          break
                                        }
                                        return (
                                          c.warning(
                                            x('instanceBatch.executeAdbCommand.selectInstance')
                                          ),
                                          t.abrupt('return')
                                        )
                                      case 11:
                                        return (
                                          (L.value = !0),
                                          (t.prev = 12),
                                          (r = {
                                            padCodes: j.padCodes,
                                            scriptContent: C.scriptContent
                                          }),
                                          (t.next = 16),
                                          i(r)
                                        )
                                      case 16:
                                        ;(c.success(
                                          x('instanceBatch.executeAdbCommand.submitSuccess')
                                        ),
                                          O('success'),
                                          P(),
                                          (t.next = 25))
                                        break
                                      case 21:
                                        ;((t.prev = 21),
                                          (t.t1 = t.catch(12)),
                                          console.error(t.t1),
                                          c.error(
                                            x('instanceBatch.executeAdbCommand.submitFailed')
                                          ))
                                      case 25:
                                        return ((t.prev = 25), (L.value = !1), t.finish(25))
                                      case 28:
                                      case 'end':
                                        return t.stop()
                                    }
                                },
                                t,
                                null,
                                [
                                  [0, 5],
                                  [12, 21, 25, 28]
                                ]
                              )
                            })),
                            function () {
                              var e = this,
                                n = arguments
                              return new Promise(function (o, i) {
                                var a = t.apply(e, n)
                                function c(t) {
                                  r(a, o, i, c, u, 'next', t)
                                }
                                function u(t) {
                                  r(a, o, i, c, u, 'throw', t)
                                }
                                c(void 0)
                              })
                            })
                        return function () {
                          return n.apply(this, arguments)
                        }
                      })()
                    return function (t, e) {
                      var r = h('el-input'),
                        o = h('el-form-item'),
                        i = h('el-form'),
                        a = h('el-button'),
                        c = h('el-dialog')
                      return (
                        p(),
                        d(
                          c,
                          {
                            'model-value': E.value,
                            title: b(x)('instanceBatch.executeAdbCommand.title'),
                            width: '600px',
                            'before-close': P
                          },
                          {
                            footer: y(function () {
                              return [
                                v(
                                  a,
                                  { onClick: P },
                                  {
                                    default: y(function () {
                                      return [m(g(b(x)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                v(
                                  a,
                                  { type: 'primary', loading: L.value, onClick: k },
                                  {
                                    default: y(function () {
                                      return [m(g(b(x)('common.execute')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: y(function () {
                              return [
                                v(
                                  i,
                                  {
                                    ref_key: 'formRef',
                                    ref: S,
                                    model: C,
                                    rules: _,
                                    'label-width': '100px'
                                  },
                                  {
                                    default: y(function () {
                                      return [
                                        v(
                                          o,
                                          {
                                            label: b(x)('instanceBatch.executeAdbCommand.label'),
                                            prop: 'scriptContent'
                                          },
                                          {
                                            default: y(function () {
                                              return [
                                                v(
                                                  r,
                                                  {
                                                    modelValue: C.scriptContent,
                                                    'onUpdate:modelValue':
                                                      e[0] ||
                                                      (e[0] = function (t) {
                                                        return (C.scriptContent = t)
                                                      }),
                                                    type: 'textarea',
                                                    rows: 4,
                                                    placeholder: b(x)(
                                                      'instanceBatch.executeAdbCommand.placeholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                ),
                                                w(
                                                  'div',
                                                  n,
                                                  g(
                                                    b(x)('instanceBatch.executeAdbCommand.example')
                                                  ),
                                                  1
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
                }
              )
            )
          )
        }
      }
    }
  )
})()
