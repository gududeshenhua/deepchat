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
      u = 'function' == typeof Symbol ? Symbol : {},
      c = u.iterator || '@@iterator',
      l = u.asyncIterator || '@@asyncIterator',
      f = u.toStringTag || '@@toStringTag'
    function s(t, e, r) {
      return (
        Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
        t[e]
      )
    }
    try {
      s({}, '')
    } catch (r) {
      s = function (t, e, r) {
        return (t[e] = r)
      }
    }
    function p(t, e, r, n) {
      var o = e && e.prototype instanceof b ? e : b,
        i = Object.create(o.prototype),
        u = new F(n || [])
      return (a(i, '_invoke', { value: S(t, r, u) }), i)
    }
    function h(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    n.wrap = p
    var y = 'suspendedStart',
      v = 'suspendedYield',
      d = 'executing',
      m = 'completed',
      g = {}
    function b() {}
    function w() {}
    function x() {}
    var L = {}
    s(L, c, function () {
      return this
    })
    var j = Object.getPrototypeOf,
      O = j && j(j(C([])))
    O && O !== o && i.call(O, c) && (L = O)
    var _ = (x.prototype = b.prototype = Object.create(L))
    function E(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function P(e, r) {
      function n(o, a, u, c) {
        var l = h(e[o], e, a)
        if ('throw' !== l.type) {
          var f = l.arg,
            s = f.value
          return s && 'object' == t(s) && i.call(s, '__await')
            ? r.resolve(s.__await).then(
                function (t) {
                  n('next', t, u, c)
                },
                function (t) {
                  n('throw', t, u, c)
                }
              )
            : r.resolve(s).then(
                function (t) {
                  ;((f.value = t), u(f))
                },
                function (t) {
                  return n('throw', t, u, c)
                }
              )
        }
        c(l.arg)
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
    function S(t, e, n) {
      var o = y
      return function (i, a) {
        if (o === d) throw new Error('Generator is already running')
        if (o === m) {
          if ('throw' === i) throw a
          return { value: r, done: !0 }
        }
        for (n.method = i, n.arg = a; ; ) {
          var u = n.delegate
          if (u) {
            var c = k(u, n)
            if (c) {
              if (c === g) continue
              return c
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (o === y) throw ((o = m), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          o = d
          var l = h(t, e, n)
          if ('normal' === l.type) {
            if (((o = n.done ? m : v), l.arg === g)) continue
            return { value: l.arg, done: n.done }
          }
          'throw' === l.type && ((o = m), (n.method = 'throw'), (n.arg = l.arg))
        }
      }
    }
    function k(t, e) {
      var n = e.method,
        o = t.iterator[n]
      if (o === r)
        return (
          (e.delegate = null),
          ('throw' === n &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = r), k(t, e), 'throw' === e.method)) ||
            ('return' !== n &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          g
        )
      var i = h(o, t.iterator, e.arg)
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
    function G(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function N(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function F(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(G, this), this.reset(!0))
    }
    function C(e) {
      if (e || '' === e) {
        var n = e[c]
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
      a(_, 'constructor', { value: x, configurable: !0 }),
      a(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = s(x, f, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor
        return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name))
      }),
      (n.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, x)
            : ((t.__proto__ = x), s(t, f, 'GeneratorFunction')),
          (t.prototype = Object.create(_)),
          t
        )
      }),
      (n.awrap = function (t) {
        return { __await: t }
      }),
      E(P.prototype),
      s(P.prototype, l, function () {
        return this
      }),
      (n.AsyncIterator = P),
      (n.async = function (t, e, r, o, i) {
        void 0 === i && (i = Promise)
        var a = new P(p(t, e, r, o), i)
        return n.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next()
            })
      }),
      E(_),
      s(_, f, 'Generator'),
      s(_, c, function () {
        return this
      }),
      s(_, 'toString', function () {
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
      (n.values = C),
      (F.prototype = {
        constructor: F,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(N),
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
              (u.type = 'throw'),
              (u.arg = t),
              (e.next = n),
              o && ((e.method = 'next'), (e.arg = r)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              u = a.completion
            if ('root' === a.tryLoc) return n('end')
            if (a.tryLoc <= this.prev) {
              var c = i.call(a, 'catchLoc'),
                l = i.call(a, 'finallyLoc')
              if (c && l) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
              } else if (c) {
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
            if (r.finallyLoc === t) return (this.complete(r.completion, r.afterLoc), N(r), g)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e]
            if (r.tryLoc === t) {
              var n = r.completion
              if ('throw' === n.type) {
                var o = n.arg
                N(r)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: C(t), resultName: e, nextLoc: n }),
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
      var u = t[i](a),
        c = u.value
    } catch (l) {
      return void r(l)
    }
    u.done ? e(c) : Promise.resolve(c).then(n, o)
  }
  function n(t) {
    return function () {
      var e = this,
        n = arguments
      return new Promise(function (o, i) {
        var a = t.apply(e, n)
        function u(t) {
          r(a, o, i, u, c, 'next', t)
        }
        function c(t) {
          r(a, o, i, u, c, 'throw', t)
        }
        u(void 0)
      })
    }
  }
  function o(t, e) {
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
  function i(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? o(Object(r), !0).forEach(function (e) {
            a(t, e, r[e])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : o(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
    }
    return t
  }
  function a(e, r, n) {
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
      './index-legacy-62a49047.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (t, r) {
      'use strict'
      var o, a, u, c, l, f, s, p, h, y, v, d, m, g, b, w, x, L, j, O
      return {
        setters: [
          function (t) {
            o = t.u
          },
          function (t) {
            a = t.g
          },
          function (t) {
            u = t.h
          },
          function (t) {
            c = t.E
          },
          function (t) {
            ;((l = t.y),
              (f = t.r),
              (s = t.R),
              (p = t.b),
              (h = t.d),
              (y = t.a8),
              (v = t.f),
              (d = t.G),
              (m = t.H),
              (g = t.N),
              (b = t.L),
              (w = t.M),
              (x = t.u),
              (L = t.h),
              (j = t.F),
              (O = t.a0))
          },
          null
        ],
        execute: function () {
          t(
            'default',
            l(
              i(
                i({}, { name: 'ModifyNoteDialog' }),
                {},
                {
                  __name: 'ModifyGroupDialog',
                  props: {
                    visible: { type: Boolean, default: !1 },
                    padCode: { type: String, default: '' }
                  },
                  emits: ['update:visible', 'success'],
                  setup: function (t, r) {
                    var i = r.emit,
                      l = u().t,
                      _ = t,
                      E = i,
                      P = f(!0),
                      S = s({ note: '' }),
                      k = s({
                        note: [
                          {
                            required: !0,
                            message: l('instanceList.pleaseSelectGroup'),
                            trigger: 'change'
                          }
                        ]
                      }),
                      G = f([]),
                      N = (function () {
                        var t = n(
                          e().mark(function t() {
                            var r
                            return e().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return ((t.prev = 0), (t.next = 3), a())
                                    case 3:
                                      ;((r = t.sent), (G.value = r || []), (t.next = 11))
                                      break
                                    case 7:
                                      ;((t.prev = 7),
                                        (t.t0 = t.catch(0)),
                                        console.error(l('instanceList.fetchGroupListFailed'), t.t0),
                                        c.error(l('instanceList.fetchGroupListFailed')))
                                    case 11:
                                    case 'end':
                                      return t.stop()
                                  }
                              },
                              t,
                              null,
                              [[0, 7]]
                            )
                          })
                        )
                        return function () {
                          return t.apply(this, arguments)
                        }
                      })()
                    ;(p(function () {
                      N()
                    }),
                      h(
                        function () {
                          return _.visible
                        },
                        function (t) {
                          ;((P.value = t), t && (S.note = ''))
                        }
                      ))
                    var F = function () {
                        ;((P.value = !1), E('update:visible', !1))
                      },
                      C = f(),
                      T = (function () {
                        var t = n(
                          e().mark(function t() {
                            return e().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return ((t.prev = 0), (t.next = 3), C.value.validate())
                                    case 3:
                                      t.next = 8
                                      break
                                    case 5:
                                      return ((t.prev = 5), (t.t0 = t.catch(0)), t.abrupt('return'))
                                    case 8:
                                      return (
                                        (t.prev = 8),
                                        { padCode: _.padCode, note: S.note },
                                        (t.next = 12),
                                        o([
                                          {
                                            instance_id: _.padCode,
                                            update_data: {
                                              instance_name: _.padCode,
                                              local_group_uuid: S.note
                                            }
                                          }
                                        ])
                                      )
                                    case 12:
                                      ;(c.success(l('instanceList.modifyGroupSuccess')),
                                        E('success'),
                                        F(),
                                        (t.next = 21))
                                      break
                                    case 17:
                                      ;((t.prev = 17),
                                        (t.t1 = t.catch(8)),
                                        console.error(t.t1),
                                        c.error(l('instanceList.modifyGroupFailed')))
                                    case 21:
                                    case 'end':
                                      return t.stop()
                                  }
                              },
                              t,
                              null,
                              [
                                [0, 5],
                                [8, 17]
                              ]
                            )
                          })
                        )
                        return function () {
                          return t.apply(this, arguments)
                        }
                      })()
                    return function (t, e) {
                      var r = y('el-option'),
                        n = y('el-select'),
                        o = y('el-form-item'),
                        i = y('el-form'),
                        a = y('el-button'),
                        u = y('el-dialog')
                      return (
                        v(),
                        d(
                          u,
                          {
                            'model-value': P.value,
                            title: x(l)('instanceList.modifyGroup'),
                            width: '500px',
                            'before-close': F
                          },
                          {
                            footer: m(function () {
                              return [
                                g(
                                  a,
                                  { onClick: F },
                                  {
                                    default: m(function () {
                                      return [b(w(x(l)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                g(
                                  a,
                                  { type: 'primary', onClick: T },
                                  {
                                    default: m(function () {
                                      return [b(w(x(l)('common.confirm')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: m(function () {
                              return [
                                g(
                                  i,
                                  {
                                    ref_key: 'formRef',
                                    ref: C,
                                    model: S,
                                    rules: k,
                                    'label-width': '80px'
                                  },
                                  {
                                    default: m(function () {
                                      return [
                                        g(
                                          o,
                                          {
                                            label: x(l)('instanceList.batchModifyGroup'),
                                            prop: 'note'
                                          },
                                          {
                                            default: m(function () {
                                              return [
                                                g(
                                                  n,
                                                  {
                                                    modelValue: S.note,
                                                    'onUpdate:modelValue':
                                                      e[0] ||
                                                      (e[0] = function (t) {
                                                        return (S.note = t)
                                                      }),
                                                    placeholder: x(l)('instanceList.group'),
                                                    style: { width: '100%' }
                                                  },
                                                  {
                                                    default: m(function () {
                                                      return [
                                                        (v(!0),
                                                        L(
                                                          j,
                                                          null,
                                                          O(G.value, function (t) {
                                                            return (
                                                              v(),
                                                              d(
                                                                r,
                                                                {
                                                                  key: t.uuid,
                                                                  label: t.name,
                                                                  value: t.uuid
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
