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
      a = o.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      l = u.iterator || '@@iterator',
      c = u.asyncIterator || '@@asyncIterator',
      s = u.toStringTag || '@@toStringTag'
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
        a = Object.create(o.prototype),
        u = new F(n || [])
      return (i(a, '_invoke', { value: k(t, r, u) }), a)
    }
    function d(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    n.wrap = h
    var p = 'suspendedStart',
      v = 'suspendedYield',
      y = 'executing',
      g = 'completed',
      m = {}
    function b() {}
    function w() {}
    function x() {}
    var L = {}
    f(L, l, function () {
      return this
    })
    var _ = Object.getPrototypeOf,
      E = _ && _(_(N([])))
    E && E !== o && a.call(E, l) && (L = E)
    var j = (x.prototype = b.prototype = Object.create(L))
    function B(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        f(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function S(e, r) {
      function n(o, i, u, l) {
        var c = d(e[o], e, i)
        if ('throw' !== c.type) {
          var s = c.arg,
            f = s.value
          return f && 'object' == t(f) && a.call(f, '__await')
            ? r.resolve(f.__await).then(
                function (t) {
                  n('next', t, u, l)
                },
                function (t) {
                  n('throw', t, u, l)
                }
              )
            : r.resolve(f).then(
                function (t) {
                  ;((s.value = t), u(s))
                },
                function (t) {
                  return n('throw', t, u, l)
                }
              )
        }
        l(c.arg)
      }
      var o
      i(this, '_invoke', {
        value: function (t, e) {
          function a() {
            return new r(function (r, o) {
              n(t, e, r, o)
            })
          }
          return (o = o ? o.then(a, a) : a())
        }
      })
    }
    function k(t, e, n) {
      var o = p
      return function (a, i) {
        if (o === y) throw new Error('Generator is already running')
        if (o === g) {
          if ('throw' === a) throw i
          return { value: r, done: !0 }
        }
        for (n.method = a, n.arg = i; ; ) {
          var u = n.delegate
          if (u) {
            var l = O(u, n)
            if (l) {
              if (l === m) continue
              return l
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (o === p) throw ((o = g), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          o = y
          var c = d(t, e, n)
          if ('normal' === c.type) {
            if (((o = n.done ? g : v), c.arg === m)) continue
            return { value: c.arg, done: n.done }
          }
          'throw' === c.type && ((o = g), (n.method = 'throw'), (n.arg = c.arg))
        }
      }
    }
    function O(t, e) {
      var n = e.method,
        o = t.iterator[n]
      if (o === r)
        return (
          (e.delegate = null),
          ('throw' === n &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = r), O(t, e), 'throw' === e.method)) ||
            ('return' !== n &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          m
        )
      var a = d(o, t.iterator, e.arg)
      if ('throw' === a.type) return ((e.method = 'throw'), (e.arg = a.arg), (e.delegate = null), m)
      var i = a.arg
      return i
        ? i.done
          ? ((e[t.resultName] = i.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
            (e.delegate = null),
            m)
          : i
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          m)
    }
    function G(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function P(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function F(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(G, this), this.reset(!0))
    }
    function N(e) {
      if (e || '' === e) {
        var n = e[l]
        if (n) return n.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var o = -1,
            i = function t() {
              for (; ++o < e.length; ) if (a.call(e, o)) return ((t.value = e[o]), (t.done = !1), t)
              return ((t.value = r), (t.done = !0), t)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(t(e) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      i(j, 'constructor', { value: x, configurable: !0 }),
      i(x, 'constructor', { value: w, configurable: !0 }),
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
          (t.prototype = Object.create(j)),
          t
        )
      }),
      (n.awrap = function (t) {
        return { __await: t }
      }),
      B(S.prototype),
      f(S.prototype, c, function () {
        return this
      }),
      (n.AsyncIterator = S),
      (n.async = function (t, e, r, o, a) {
        void 0 === a && (a = Promise)
        var i = new S(h(t, e, r, o), a)
        return n.isGeneratorFunction(e)
          ? i
          : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
      }),
      B(j),
      f(j, s, 'Generator'),
      f(j, l, function () {
        return this
      }),
      f(j, 'toString', function () {
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
      (n.values = N),
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
            this.tryEntries.forEach(P),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
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
            var i = this.tryEntries[o],
              u = i.completion
            if ('root' === i.tryLoc) return n('end')
            if (i.tryLoc <= this.prev) {
              var l = a.call(i, 'catchLoc'),
                c = a.call(i, 'finallyLoc')
              if (l && c) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              } else if (l) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r]
            if (n.tryLoc <= this.prev && a.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var o = n
              break
            }
          }
          o &&
            ('break' === t || 'continue' === t) &&
            o.tryLoc <= e &&
            e <= o.finallyLoc &&
            (o = null)
          var i = o ? o.completion : {}
          return (
            (i.type = t),
            (i.arg = e),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(i)
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
            var r = this.tryEntries[e]
            if (r.finallyLoc === t) return (this.complete(r.completion, r.afterLoc), P(r), m)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e]
            if (r.tryLoc === t) {
              var n = r.completion
              if ('throw' === n.type) {
                var o = n.arg
                P(r)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: N(t), resultName: e, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            m
          )
        }
      }),
      n
    )
  }
  function r(t, e, r, n, o, a, i) {
    try {
      var u = t[a](i),
        l = u.value
    } catch (c) {
      return void r(c)
    }
    u.done ? e(l) : Promise.resolve(l).then(n, o)
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
      var o, a, i, u, l, c, s, f, h, d, p, v, y, g
      return {
        setters: [
          function (t) {
            o = t.n
          },
          function (t) {
            ;((a = t.h), (i = t._))
          },
          function (t) {
            u = t.E
          },
          function (t) {
            ;((l = t.y),
              (c = t.r),
              (s = t.a8),
              (f = t.f),
              (h = t.G),
              (d = t.H),
              (p = t.N),
              (v = t.L),
              (y = t.M),
              (g = t.u))
          },
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '.dialog-footer[data-v-96007063]{display:flex;justify-content:flex-end;gap:10px}\n'),
            document.head.appendChild(n))
          var m = l({
            __name: 'BatchUpdateGpsDialog',
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
            setup: function (t, n) {
              var i = n.emit,
                l = a().t,
                m = t,
                b = i,
                w = c({ longitude: '', latitude: '', altitude: '' }),
                x = c(!1),
                L = function () {
                  b('update:visible', !1)
                },
                _ = (function () {
                  var t,
                    n =
                      ((t = e().mark(function t() {
                        var r, n
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (w.value.longitude) {
                                    t.next = 3
                                    break
                                  }
                                  return (
                                    u.warning(l('instanceBatch.enterLongitude')),
                                    t.abrupt('return')
                                  )
                                case 3:
                                  if (w.value.latitude) {
                                    t.next = 6
                                    break
                                  }
                                  return (
                                    u.warning(l('instanceBatch.enterLatitude')),
                                    t.abrupt('return')
                                  )
                                case 6:
                                  return (
                                    (x.value = !0),
                                    (t.prev = 7),
                                    (r = {
                                      padCodes: m.padCodes,
                                      longitude: parseFloat(w.value.longitude),
                                      latitude: parseFloat(w.value.latitude),
                                      altitude: w.value.altitude
                                        ? parseFloat(w.value.altitude)
                                        : void 0
                                    }),
                                    (t.next = 11),
                                    o(r)
                                  )
                                case 11:
                                  ;(200 === (n = t.sent).code
                                    ? (u.success(l('instanceBatch.batchSetGpsSuccess')),
                                      b('success'),
                                      L())
                                    : u.error(n.msg || l('instanceBatch.gpsSettingFailed')),
                                    (t.next = 19))
                                  break
                                case 15:
                                  ;((t.prev = 15),
                                    (t.t0 = t.catch(7)),
                                    console.error(t.t0),
                                    u.error(l('instanceBatch.setGpsFailed')))
                                case 19:
                                  return ((t.prev = 19), (x.value = !1), t.finish(19))
                                case 22:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[7, 15, 19, 22]]
                        )
                      })),
                      function () {
                        var e = this,
                          n = arguments
                        return new Promise(function (o, a) {
                          var i = t.apply(e, n)
                          function u(t) {
                            r(i, o, a, u, l, 'next', t)
                          }
                          function l(t) {
                            r(i, o, a, u, l, 'throw', t)
                          }
                          u(void 0)
                        })
                      })
                  return function () {
                    return n.apply(this, arguments)
                  }
                })()
              return function (e, r) {
                var n = s('el-input'),
                  o = s('el-form-item'),
                  a = s('el-form'),
                  i = s('el-button'),
                  u = s('el-dialog')
                return (
                  f(),
                  h(
                    u,
                    {
                      'model-value': t.visible,
                      title: g(l)('instanceBatch.batchUpdateGpsTitle'),
                      width: '500px',
                      'before-close': L
                    },
                    {
                      footer: d(function () {
                        return [
                          p(
                            i,
                            { onClick: L },
                            {
                              default: d(function () {
                                return [v(y(g(l)('instanceBatch.cancel')), 1)]
                              }),
                              _: 1
                            }
                          ),
                          p(
                            i,
                            { type: 'primary', onClick: _, loading: x.value },
                            {
                              default: d(function () {
                                return [v(y(g(l)('instanceBatch.confirm')), 1)]
                              }),
                              _: 1
                            },
                            8,
                            ['loading']
                          )
                        ]
                      }),
                      default: d(function () {
                        return [
                          p(
                            a,
                            { 'label-width': '100px' },
                            {
                              default: d(function () {
                                return [
                                  p(
                                    o,
                                    { label: g(l)('instanceBatch.longitudeLabel'), required: '' },
                                    {
                                      default: d(function () {
                                        return [
                                          p(
                                            n,
                                            {
                                              modelValue: w.value.longitude,
                                              'onUpdate:modelValue':
                                                r[0] ||
                                                (r[0] = function (t) {
                                                  return (w.value.longitude = t)
                                                }),
                                              placeholder: g(l)(
                                                'instanceBatch.longitudePlaceholder'
                                              ),
                                              style: { width: '100%' }
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
                                  p(
                                    o,
                                    { label: g(l)('instanceBatch.latitudeLabel'), required: '' },
                                    {
                                      default: d(function () {
                                        return [
                                          p(
                                            n,
                                            {
                                              modelValue: w.value.latitude,
                                              'onUpdate:modelValue':
                                                r[1] ||
                                                (r[1] = function (t) {
                                                  return (w.value.latitude = t)
                                                }),
                                              placeholder: g(l)(
                                                'instanceBatch.latitudePlaceholder'
                                              ),
                                              style: { width: '100%' }
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
                                  p(
                                    o,
                                    { label: g(l)('instanceBatch.altitudeLabel') },
                                    {
                                      default: d(function () {
                                        return [
                                          p(
                                            n,
                                            {
                                              modelValue: w.value.altitude,
                                              'onUpdate:modelValue':
                                                r[2] ||
                                                (r[2] = function (t) {
                                                  return (w.value.altitude = t)
                                                }),
                                              placeholder: g(l)(
                                                'instanceBatch.altitudePlaceholder'
                                              ),
                                              style: { width: '100%' }
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
                            }
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
          t('default', i(m, [['__scopeId', 'data-v-96007063']]))
        }
      }
    }
  )
})()
