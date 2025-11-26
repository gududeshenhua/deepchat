!(function () {
  function e(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return l(e)
      })(e) ||
      (function (e) {
        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
          return Array.from(e)
      })(e) ||
      i(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function t() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ t =
      function () {
        return n
      }
    var e,
      n = {},
      r = Object.prototype,
      a = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      l = i.iterator || '@@iterator',
      u = i.asyncIterator || '@@asyncIterator',
      c = i.toStringTag || '@@toStringTag'
    function s(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      s({}, '')
    } catch (e) {
      s = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, r) {
      var a = t && t.prototype instanceof y ? t : y,
        i = Object.create(a.prototype),
        l = new A(r || [])
      return (o(i, '_invoke', { value: I(e, n, l) }), i)
    }
    function v(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = f
    var p = 'suspendedStart',
      h = 'suspendedYield',
      m = 'executing',
      g = 'completed',
      b = {}
    function y() {}
    function w() {}
    function x() {}
    var _ = {}
    s(_, l, function () {
      return this
    })
    var k = Object.getPrototypeOf,
      C = k && k(k(z([])))
    C && C !== r && a.call(C, l) && (_ = C)
    var S = (x.prototype = y.prototype = Object.create(_))
    function E(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        s(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function j(e, t) {
      function n(r, o, i, l) {
        var u = v(e[r], e, o)
        if ('throw' !== u.type) {
          var c = u.arg,
            s = c.value
          return s && 'object' == d(s) && a.call(s, '__await')
            ? t.resolve(s.__await).then(
                function (e) {
                  n('next', e, i, l)
                },
                function (e) {
                  n('throw', e, i, l)
                }
              )
            : t.resolve(s).then(
                function (e) {
                  ;((c.value = e), i(c))
                },
                function (e) {
                  return n('throw', e, i, l)
                }
              )
        }
        l(u.arg)
      }
      var r
      o(this, '_invoke', {
        value: function (e, a) {
          function o() {
            return new t(function (t, r) {
              n(e, a, t, r)
            })
          }
          return (r = r ? r.then(o, o) : o())
        }
      })
    }
    function I(t, n, r) {
      var a = p
      return function (o, i) {
        if (a === m) throw new Error('Generator is already running')
        if (a === g) {
          if ('throw' === o) throw i
          return { value: e, done: !0 }
        }
        for (r.method = o, r.arg = i; ; ) {
          var l = r.delegate
          if (l) {
            var u = O(l, r)
            if (u) {
              if (u === b) continue
              return u
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === p) throw ((a = g), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = m
          var c = v(t, n, r)
          if ('normal' === c.type) {
            if (((a = r.done ? g : h), c.arg === b)) continue
            return { value: c.arg, done: r.done }
          }
          'throw' === c.type && ((a = g), (r.method = 'throw'), (r.arg = c.arg))
        }
      }
    }
    function O(t, n) {
      var r = n.method,
        a = t.iterator[r]
      if (a === e)
        return (
          (n.delegate = null),
          ('throw' === r &&
            t.iterator.return &&
            ((n.method = 'return'), (n.arg = e), O(t, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'),
              (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          b
        )
      var o = v(a, t.iterator, n.arg)
      if ('throw' === o.type) return ((n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), b)
      var i = o.arg
      return i
        ? i.done
          ? ((n[t.resultName] = i.value),
            (n.next = t.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
            (n.delegate = null),
            b)
          : i
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          b)
    }
    function L(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function V(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function A(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(L, this), this.reset(!0))
    }
    function z(t) {
      if (t || '' === t) {
        var n = t[l]
        if (n) return n.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var r = -1,
            o = function n() {
              for (; ++r < t.length; ) if (a.call(t, r)) return ((n.value = t[r]), (n.done = !1), n)
              return ((n.value = e), (n.done = !0), n)
            }
          return (o.next = o)
        }
      }
      throw new TypeError(d(t) + ' is not iterable')
    }
    return (
      (w.prototype = x),
      o(S, 'constructor', { value: x, configurable: !0 }),
      o(x, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = s(x, c, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, x)
            : ((e.__proto__ = x), s(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(S)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      E(j.prototype),
      s(j.prototype, u, function () {
        return this
      }),
      (n.AsyncIterator = j),
      (n.async = function (e, t, r, a, o) {
        void 0 === o && (o = Promise)
        var i = new j(f(e, t, r, a), o)
        return n.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      E(S),
      s(S, c, 'Generator'),
      s(S, l, function () {
        return this
      }),
      s(S, 'toString', function () {
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
      (n.values = z),
      (A.prototype = {
        constructor: A,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(V),
            !t)
          )
            for (var n in this)
              't' === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
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
              (l.type = 'throw'),
              (l.arg = t),
              (n.next = r),
              a && ((n.method = 'next'), (n.arg = e)),
              !!a
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              l = i.completion
            if ('root' === i.tryLoc) return r('end')
            if (i.tryLoc <= this.prev) {
              var u = a.call(i, 'catchLoc'),
                c = a.call(i, 'finallyLoc')
              if (u && c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              } else if (u) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
              } else {
                if (!c) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && a.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var o = r
              break
            }
          }
          o &&
            ('break' === e || 'continue' === e) &&
            o.tryLoc <= t &&
            t <= o.finallyLoc &&
            (o = null)
          var i = o ? o.completion : {}
          return (
            (i.type = e),
            (i.arg = t),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), b) : this.complete(i)
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
            b
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), V(n), b)
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
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: z(t), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = e),
            b
          )
        }
      }),
      n
    )
  }
  function n(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        u = l.value
    } catch (c) {
      return void n(c)
    }
    l.done ? t(u) : Promise.resolve(u).then(r, a)
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments
      return new Promise(function (a, o) {
        var i = e.apply(t, r)
        function l(e) {
          n(i, a, o, l, u, 'next', e)
        }
        function u(e) {
          n(i, a, o, l, u, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  function a(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var n =
          null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (null != n) {
          var r,
            a,
            o,
            i,
            l = [],
            u = !0,
            c = !1
          try {
            if (((o = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return
              u = !1
            } else for (; !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
          } catch (e) {
            ;((c = !0), (a = e))
          } finally {
            try {
              if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return
            } finally {
              if (c) throw a
            }
          }
          return l
        }
      })(e, t) ||
      i(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function o(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (!n) {
      if (Array.isArray(e) || (n = i(e)) || (t && e && 'number' == typeof e.length)) {
        n && (e = n)
        var r = 0,
          a = function () {}
        return {
          s: a,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
          },
          e: function (e) {
            throw e
          },
          f: a
        }
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    var o,
      l = !0,
      u = !1
    return {
      s: function () {
        n = n.call(e)
      },
      n: function () {
        var e = n.next()
        return ((l = e.done), e)
      },
      e: function (e) {
        ;((u = !0), (o = e))
      },
      f: function () {
        try {
          l || null == n.return || n.return()
        } finally {
          if (u) throw o
        }
      }
    }
  }
  function i(e, t) {
    if (e) {
      if ('string' == typeof e) return l(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? l(e, t)
            : void 0
      )
    }
  }
  function l(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function u(e, t) {
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
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {}
      t % 2
        ? u(Object(n), !0).forEach(function (t) {
            s(e, t, n[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
    }
    return e
  }
  function s(e, t, n) {
    var r
    return (
      (r = (function (e, t) {
        if ('object' != d(e) || !e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(e, t || 'default')
          if ('object' != d(r)) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(t, 'string')),
      (t = 'symbol' == d(r) ? r : String(r)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    )
  }
  function d(e) {
    return (
      (d =
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
      d(e)
    )
  }
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-d4b804d0.js',
      './app-legacy-7bb8387a.js',
      './element-legacy-e7b6e573.js',
      './validate-legacy-7af8d5ea.js',
      './index-legacy-64cc4a49.js',
      './index-legacy-ba7ec4d0.js'
    ],
    function (n, i) {
      'use strict'
      var l,
        u,
        s,
        f,
        v,
        p,
        h,
        m,
        g,
        b,
        y,
        w,
        x,
        _,
        k,
        C,
        S,
        E,
        j,
        I,
        O,
        L,
        V,
        A,
        z,
        P,
        F,
        T,
        R,
        M,
        q,
        N,
        $,
        B,
        U,
        D,
        W,
        G,
        K,
        Y,
        H,
        J,
        X,
        Q,
        Z,
        ee,
        te,
        ne,
        re,
        ae,
        oe,
        ie,
        le,
        ue,
        ce,
        se,
        de,
        fe,
        ve,
        pe,
        he,
        me,
        ge,
        be,
        ye,
        we,
        xe,
        _e,
        ke,
        Ce,
        Se,
        Ee,
        je,
        Ie,
        Oe
      return {
        setters: [
          function (e) {
            ;((l = e.y),
              (u = e.a8),
              (s = e.f),
              (f = e.h),
              (v = e.i),
              (p = e.N),
              (h = e.H),
              (m = e.T),
              (g = e.G),
              (b = e.J),
              (y = e.u),
              (w = e.av),
              (x = e.z),
              (_ = e.e),
              (k = e.F),
              (C = e.a2),
              (S = e.K),
              (E = e.M),
              (j = e.a0),
              (I = e.A),
              (O = e.at),
              (L = e.au),
              (V = e.aw),
              (A = e.r),
              (z = e.w),
              (P = e.L),
              (F = e.a),
              (T = e.v),
              (R = e.b),
              (M = e.m),
              (q = e.B),
              (N = e.ar),
              ($ = e.as),
              (B = e.aq),
              (U = e.s),
              (D = e.a1),
              (W = e.R),
              (G = e.X),
              (K = e.p),
              (Y = e.n),
              (H = e.d),
              (J = e.I),
              (X = e.O),
              (Q = e.ax))
          },
          function (e) {
            ;((Z = e.b),
              (ee = e.a),
              (te = e._),
              (ne = e.g),
              (re = e.c),
              (ae = e.d),
              (oe = e.e),
              (ie = e.f),
              (le = e.h),
              (ue = e.i),
              (ce = e.j),
              (se = e.u))
          },
          function (e) {
            ;((de = e.u), (fe = e.D))
          },
          function (e) {
            ;((ve = e.q),
              (pe = e.t),
              (he = e.g),
              (me = e.u),
              (ge = e.E),
              (be = e.v),
              (ye = e.e),
              (we = e.w),
              (xe = e.x),
              (_e = e.y),
              (ke = e.z),
              (Ce = e.A),
              (Se = e.B),
              (Ee = e.j))
          },
          function (e) {
            je = e.i
          },
          function (e) {
            Ie = e.L
          },
          function (e) {
            Oe = e.g
          }
        ],
        execute: function () {
          var i = document.createElement('style')
          ;((i.textContent =
            '@charset "UTF-8";.app-scrollbar[data-v-a6c42ade]::-webkit-scrollbar{width:8px;height:8px}.app-scrollbar[data-v-a6c42ade]::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(144,147,153,.333)}.app-scrollbar[data-v-a6c42ade]::-webkit-scrollbar-thumb:hover{background-color:rgba(144,147,153,.467)}.app-scrollbar[data-v-a6c42ade]::-webkit-scrollbar-thumb:active{background-color:rgba(144,147,153,.6)}.app-scrollbar[data-v-a6c42ade]::-webkit-scrollbar-corner{background-color:transparent}.app-main[data-v-a6c42ade]{width:100%;background-color:var(--v3-body-bg-color);display:flex}.app-scrollbar[data-v-a6c42ade]{flex-grow:1;overflow:auto;display:flex;flex-direction:column}.app-scrollbar .app-container-grow[data-v-a6c42ade]{flex-grow:1}.icon[data-v-133039c0]{vertical-align:middle}.svg-icon[data-v-a88b5f36]{min-width:1em;margin-right:12px;font-size:21px}.el-icon[data-v-a88b5f36]{width:1em;margin-right:12px;font-size:18px}.simple-mode.first-level[data-v-a88b5f36] .el-sub-menu .el-sub-menu__icon-arrow{display:none}.simple-mode.first-level[data-v-a88b5f36] .el-sub-menu span{visibility:hidden}[data-v-a88b5f36] .el-menu-item span,[data-v-a88b5f36] .el-sub-menu__title span{display:inline-block;max-width:calc(100% - 20px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}[data-v-a88b5f36] .el-menu:not(.el-menu--collapse) .el-menu-item span,[data-v-a88b5f36] .el-menu:not(.el-menu--collapse) .el-sub-menu__title span{display:inline-block;max-width:calc(100% - 20px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}.layout-logo-container[data-v-6a52bd74]{position:relative;width:100%;height:var(--v3-header-height);line-height:var(--v3-header-height);background-color:var(--v3-header-bg-color)!important;text-align:left;padding-left:15px;overflow:hidden}.layout-logo-container .layout-logo[data-v-6a52bd74]{display:none}.layout-logo-container .layout-logo-text[data-v-6a52bd74]{width:100px;height:auto;vertical-align:middle}.layout-mode-top[data-v-6a52bd74]{height:var(--v3-navigationbar-height);line-height:var(--v3-navigationbar-height)}.collapse .layout-logo[data-v-6a52bd74]{width:32px;height:auto;vertical-align:middle;display:inline-block}.collapse .layout-logo-text[data-v-6a52bd74]{display:none}.el-menu--collapse[data-v-37ca0f4e] .el-sub-menu.is-active .el-sub-menu__title:before,[data-v-37ca0f4e] .el-menu-item.is-active:before{content:"";position:absolute;top:0;left:0;width:var(--0c6ff376);height:100%;background-color:var(--v3-sidebar-menu-tip-line-bg-color);display:none}.has-logo .el-scrollbar[data-v-37ca0f4e]{height:calc(100% - 45px)}.has-logo .scrollbar-body[data-v-37ca0f4e]{height:calc(101% - var(--v3-header-height));border-right:1px solid var(--el-border-color)}.el-scrollbar[data-v-37ca0f4e]{height:101%}.el-scrollbar[data-v-37ca0f4e] .scrollbar-wrapper{overflow-x:hidden!important}.el-scrollbar[data-v-37ca0f4e] .scrollbar-wrapper .el-scrollbar__view{height:100%}.el-scrollbar[data-v-37ca0f4e] .el-scrollbar__bar.is-horizontal{display:none}.el-scrollbar[data-v-37ca0f4e] .el-scrollbar__bar.is-vertical{display:var(--077dd640)}.el-menu[data-v-37ca0f4e]{border:none;min-height:100%;width:100%!important}.el-menu--horizontal[data-v-37ca0f4e]{height:var(--2b245e96)}[data-v-37ca0f4e] .el-menu-item,[data-v-37ca0f4e] .el-sub-menu__title,[data-v-37ca0f4e] .el-sub-menu .el-menu-item,[data-v-37ca0f4e] .el-menu--horizontal .el-menu-item{height:var(--2b245e96);line-height:var(--2b245e96);display:block}[data-v-37ca0f4e] .el-menu-item.is-active,[data-v-37ca0f4e] .el-menu-item:hover,[data-v-37ca0f4e] .el-sub-menu__title.is-active,[data-v-37ca0f4e] .el-sub-menu__title:hover,[data-v-37ca0f4e] .el-sub-menu .el-menu-item.is-active,[data-v-37ca0f4e] .el-sub-menu .el-menu-item:hover,[data-v-37ca0f4e] .el-menu--horizontal .el-menu-item.is-active,[data-v-37ca0f4e] .el-menu--horizontal .el-menu-item:hover{background-color:var(--64305abe);font-weight:700}[data-v-37ca0f4e] .el-menu-item *,[data-v-37ca0f4e] .el-sub-menu__title *,[data-v-37ca0f4e] .el-sub-menu .el-menu-item *,[data-v-37ca0f4e] .el-menu--horizontal .el-menu-item *{vertical-align:middle}.el-menu--collapse[data-v-37ca0f4e]{padding:0}.svg-icon[data-v-03a66814]{font-size:20px}.svg-icon[data-v-03a66814]:focus{outline:none}.result-item[data-v-12ffafc6]{display:flex;align-items:center;height:56px;padding:0 15px;margin-top:8px;border:1px solid var(--el-border-color);border-radius:4px;cursor:pointer}.result-item .svg-icon[data-v-12ffafc6]{min-width:1em;font-size:18px}.result-item .el-icon[data-v-12ffafc6]{width:1em;font-size:18px}.result-item-title[data-v-12ffafc6]{flex:1;margin-left:12px}.search-footer[data-v-5a5bf381]{display:flex;color:var(--el-text-color-secondary);font-size:14px}.search-footer-item[data-v-5a5bf381]{display:flex;align-items:center;margin-right:12px}.search-footer-item .svg-icon[data-v-5a5bf381]{margin-right:5px;padding:2px;font-size:20px;background-color:var(--el-fill-color)}.search-footer-total[data-v-5a5bf381]{margin:0 0 0 auto}.search-modal__private .svg-icon{font-size:18px}.search-modal__private .el-dialog__header{display:none}.search-modal__private .el-dialog__footer{border-top:1px solid var(--el-border-color);padding:var(--el-dialog-padding-primary)}.svg-icon[data-v-52b80258]{font-size:20px}.svg-icon[data-v-52b80258]:focus{outline:none}.navigation-bar[data-v-153854b2]{height:var(--v3-navigationbar-height);overflow:hidden;background:var(--v3-header-bg-color)!important;display:flex;color:#fff;justify-content:space-between}.navigation-bar .nav_item[data-v-153854b2]{cursor:pointer;position:relative;margin-right:30px}.navigation-bar .nav_item[data-v-153854b2]:hover:before{content:"";position:absolute;bottom:-8px;left:20%;width:60%;display:block;height:1px;background:white}.navigation-bar .hamburger[data-v-153854b2]{display:flex;align-items:center;height:100%;padding:0 15px;cursor:pointer}.navigation-bar .breadcrumb[data-v-153854b2]{flex:1}@media screen and (max-width: 576px){.navigation-bar .breadcrumb[data-v-153854b2]{display:none}}.navigation-bar .sidebar[data-v-153854b2]{flex:1;min-width:0px}.navigation-bar .sidebar[data-v-153854b2] .el-menu{background-color:transparent}.navigation-bar .sidebar[data-v-153854b2] .el-sub-menu.is-active .el-sub-menu__title{color:var(--el-menu-active-color)!important}.navigation-bar .right-menu[data-v-153854b2]{margin-right:10px;height:100%;display:flex;align-items:center;color:#606266}.navigation-bar .right-menu .right-menu-item[data-v-153854b2]{padding:0 10px;cursor:pointer;color:#fff}.navigation-bar .right-menu .right-menu-item .right-menu-avatar[data-v-153854b2]{display:flex;align-items:center}.navigation-bar .right-menu .right-menu-item .right-menu-avatar .el-avatar[data-v-153854b2]{margin-right:10px}.navigation-bar .right-menu .right-menu-item .right-menu-avatar span[data-v-153854b2]{font-size:16px}.select-layout-mode[data-v-33bcccfb]{display:flex;justify-content:space-between}.layout-mode[data-v-33bcccfb]{width:60px;flex-grow:0;overflow:hidden;cursor:pointer;border-radius:6px;border:2px solid rgba(0,0,0,0)}.layout-mode[data-v-33bcccfb]:hover,.active[data-v-33bcccfb]{border:2px solid var(--el-color-primary)}.el-header[data-v-33bcccfb]{height:12px}.el-aside[data-v-33bcccfb]{width:16px}.left .el-header[data-v-33bcccfb]{background-color:var(--el-border-color)}.left .el-aside[data-v-33bcccfb]{background-color:var(--el-color-primary)}.left .el-main[data-v-33bcccfb]{background-color:var(--el-fill-color)}.top .el-header[data-v-33bcccfb]{background-color:var(--el-color-primary)}.top .el-main[data-v-33bcccfb]{background-color:var(--el-fill-color)}.left-top .el-header[data-v-33bcccfb]{background-color:var(--el-border-color)}.left-top .el-aside[data-v-33bcccfb]{background-color:var(--el-color-primary)}.left-top .el-main[data-v-33bcccfb]{background-color:var(--el-fill-color)}.setting-container .setting-item .setting-name[data-v-5dc3d300]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.setting-container[data-v-5dc3d300]{padding:20px}.setting-container .setting-item[data-v-5dc3d300]{font-size:14px;color:var(--el-text-color-regular);padding:5px 0;display:flex;justify-content:space-between;align-items:center}.setting-container .el-button[data-v-5dc3d300]{margin-top:40px;width:100%}.scroll-container[data-v-0629210e]{height:100%;user-select:none;display:flex;justify-content:space-between}.scroll-container .arrow[data-v-0629210e]{width:40px;height:100%;cursor:pointer}.scroll-container .arrow.left[data-v-0629210e]{box-shadow:5px 0 5px -6px #ccc}.scroll-container .arrow.right[data-v-0629210e]{box-shadow:-5px 0 5px -6px #ccc}.scroll-container .el-scrollbar[data-v-0629210e]{flex:1;white-space:nowrap}.scroll-container .el-scrollbar .scrollbar-content[data-v-0629210e]{display:inline-block}.scroll-container .screenfull[data-v-0629210e]{width:40px;display:flex;justify-content:center;align-items:center;cursor:pointer}.tags-view-container[data-v-8da4aee4]{height:var(--v3-tagsview-height);width:100%;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.063)}.tags-view-container .tags-view-wrapper .tags-view-item[data-v-8da4aee4]{display:inline-block;position:relative;cursor:pointer;height:26px;line-height:26px;border:1px solid var(--v3-tagsview-tag-border-color);border-radius:var(--v3-tagsview-tag-border-radius);color:var(--v3-tagsview-tag-text-color);background-color:var(--v3-tagsview-tag-bg-color);padding:0 8px;font-size:12px;margin-left:5px;margin-top:4px}.tags-view-container .tags-view-wrapper .tags-view-item[data-v-8da4aee4]:first-of-type{margin-left:5px}.tags-view-container .tags-view-wrapper .tags-view-item[data-v-8da4aee4]:last-of-type{margin-right:5px}.tags-view-container .tags-view-wrapper .tags-view-item.active[data-v-8da4aee4]{background-color:var(--v3-tagsview-tag-active-bg-color);color:var(--v3-tagsview-tag-active-text-color);border-color:var(--v3-tagsview-tag-active-border-color)}.tags-view-container .tags-view-wrapper .tags-view-item.active[data-v-8da4aee4]:before{content:"";background-color:var(--v3-tagsview-tag-active-before-color);display:inline-block;width:8px;height:8px;border-radius:50%;position:relative;margin-right:2px}.tags-view-container .tags-view-wrapper .tags-view-item .el-icon[data-v-8da4aee4]{margin:0 2px;vertical-align:middle;border-radius:50%}.tags-view-container .tags-view-wrapper .tags-view-item .el-icon[data-v-8da4aee4]:hover{background-color:var(--v3-tagsview-tag-icon-hover-bg-color);color:var(--v3-tagsview-tag-icon-hover-color)}.tags-view-container .contextmenu[data-v-8da4aee4]{margin:0;background-color:#fff;z-index:3000;position:absolute;list-style-type:none;padding:5px 0;border-radius:4px;font-size:12px;font-weight:400;color:#333;box-shadow:2px 2px 3px rgba(0,0,0,.19)}.tags-view-container .contextmenu li[data-v-8da4aee4]{margin:0;padding:7px 16px;cursor:pointer}.tags-view-container .contextmenu li[data-v-8da4aee4]:hover{background-color:#eee}.handle-button[data-v-560ea116]{width:48px;height:48px;background-color:var(--v3-rightpanel-button-bg-color);position:fixed;top:var(--0a230261);right:0;border-radius:6px 0 0 6px;z-index:10;cursor:pointer;pointer-events:auto;color:#fff;display:flex;align-items:center;justify-content:center}.app-wrapper[data-v-17d72370]:after{content:"";display:table;clear:both}.app-wrapper[data-v-17d72370]{width:100%}.fixed-header[data-v-17d72370]{position:fixed;top:0;z-index:1002;width:100%}.fixed-header .logo[data-v-17d72370]{width:var(--v3-sidebar-width)}.fixed-header .content[data-v-17d72370]{display:flex;justify-content:space-between}.fixed-header .content .navigation-bar[data-v-17d72370]{flex:1;background:transparent}.layout-header[data-v-17d72370]{background-color:var(--v3-header-bg-color)!important;border-bottom:1px solid var(--v3-header-border-color)}.main-container[data-v-17d72370]{min-height:100%}.app-main[data-v-17d72370]{transition:padding-left .35s;padding-top:var(--v3-navigationbar-height);height:100vh;overflow:auto}.hasTagsView .app-main[data-v-17d72370]{padding-top:var(--v3-header-height)}\n'),
            document.head.appendChild(i))
          var Le = { class: 'app-main' },
            Ve = { class: 'app-scrollbar' },
            Ae = n(
              'A',
              te(
                l({
                  __name: 'AppMain',
                  setup: function (e) {
                    var t = Z()
                    return (
                      ee(),
                      function (e, n) {
                        var r = u('router-view'),
                          a = u('el-backtop')
                        return (
                          s(),
                          f('section', Le, [
                            v('div', Ve, [
                              p(r, null, {
                                default: h(function (e) {
                                  var n = e.Component,
                                    r = e.route
                                  return [
                                    p(
                                      m,
                                      { name: 'el-fade-in', mode: 'out-in' },
                                      {
                                        default: h(function () {
                                          return [
                                            (s(),
                                            g(
                                              w,
                                              { include: y(t).cachedViews },
                                              [
                                                (s(),
                                                g(b(n), {
                                                  key: r.path,
                                                  class: 'app-container-grow'
                                                }))
                                              ],
                                              1032,
                                              ['include']
                                            ))
                                          ]
                                        }),
                                        _: 2
                                      },
                                      1024
                                    )
                                  ]
                                }),
                                _: 1
                              })
                            ]),
                            p(a),
                            p(a, { style: { bottom: '30vh' }, target: '.app-scrollbar' })
                          ])
                        )
                      }
                    )
                  }
                }),
                [['__scopeId', 'data-v-a6c42ade']]
              )
            ),
            ze = l({
              __name: 'index',
              props: { isActive: { type: Boolean, default: !1 } },
              emits: ['toggleClick'],
              setup: function (e, t) {
                var n = t.emit,
                  r = e,
                  a = n,
                  o = function () {
                    a('toggleClick')
                  }
                return function (e, t) {
                  var n = u('el-icon')
                  return (
                    s(),
                    f('div', { onClick: o }, [
                      p(
                        n,
                        { size: 20, class: 'icon' },
                        {
                          default: h(function () {
                            return [
                              r.isActive ? (s(), g(y(ve), { key: 0 })) : (s(), g(y(pe), { key: 1 }))
                            ]
                          }),
                          _: 1
                        }
                      )
                    ])
                  )
                }
              }
            }),
            Pe = te(ze, [['__scopeId', 'data-v-133039c0']]),
            Fe = ['href'],
            Te = l({
              __name: 'SidebarItemLink',
              props: { to: {} },
              setup: function (e) {
                var t = e
                return function (e, n) {
                  var r = u('router-link')
                  return y(je)(t.to)
                    ? (s(),
                      f(
                        'a',
                        { key: 0, href: t.to, target: '_blank', rel: 'noopener' },
                        [x(e.$slots, 'default')],
                        8,
                        Fe
                      ))
                    : (s(),
                      g(
                        r,
                        { key: 1, to: t.to },
                        {
                          default: h(function () {
                            return [x(e.$slots, 'default')]
                          }),
                          _: 3
                        },
                        8,
                        ['to']
                      ))
                }
              }
            })
          function Re(e) {
            if ('string' != typeof e)
              throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
          }
          function Me(e, t) {
            for (var n, r = '', a = 0, o = -1, i = 0, l = 0; l <= e.length; ++l) {
              if (l < e.length) n = e.charCodeAt(l)
              else {
                if (47 === n) break
                n = 47
              }
              if (47 === n) {
                if (o === l - 1 || 1 === i);
                else if (o !== l - 1 && 2 === i) {
                  if (
                    r.length < 2 ||
                    2 !== a ||
                    46 !== r.charCodeAt(r.length - 1) ||
                    46 !== r.charCodeAt(r.length - 2)
                  )
                    if (r.length > 2) {
                      var u = r.lastIndexOf('/')
                      if (u !== r.length - 1) {
                        ;(-1 === u
                          ? ((r = ''), (a = 0))
                          : (a = (r = r.slice(0, u)).length - 1 - r.lastIndexOf('/')),
                          (o = l),
                          (i = 0))
                        continue
                      }
                    } else if (2 === r.length || 1 === r.length) {
                      ;((r = ''), (a = 0), (o = l), (i = 0))
                      continue
                    }
                  t && (r.length > 0 ? (r += '/..') : (r = '..'), (a = 2))
                } else
                  (r.length > 0 ? (r += '/' + e.slice(o + 1, l)) : (r = e.slice(o + 1, l)),
                    (a = l - o - 1))
                ;((o = l), (i = 0))
              } else 46 === n && -1 !== i ? ++i : (i = -1)
            }
            return r
          }
          var qe = {
            resolve: function () {
              for (var e, t = '', n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
                var a
                ;(r >= 0 ? (a = arguments[r]) : (void 0 === e && (e = process.cwd()), (a = e)),
                  Re(a),
                  0 !== a.length && ((t = a + '/' + t), (n = 47 === a.charCodeAt(0))))
              }
              return ((t = Me(t, !n)), n ? (t.length > 0 ? '/' + t : '/') : t.length > 0 ? t : '.')
            },
            normalize: function (e) {
              if ((Re(e), 0 === e.length)) return '.'
              var t = 47 === e.charCodeAt(0),
                n = 47 === e.charCodeAt(e.length - 1)
              return (
                0 !== (e = Me(e, !t)).length || t || (e = '.'),
                e.length > 0 && n && (e += '/'),
                t ? '/' + e : e
              )
            },
            isAbsolute: function (e) {
              return (Re(e), e.length > 0 && 47 === e.charCodeAt(0))
            },
            join: function () {
              if (0 === arguments.length) return '.'
              for (var e, t = 0; t < arguments.length; ++t) {
                var n = arguments[t]
                ;(Re(n), n.length > 0 && (void 0 === e ? (e = n) : (e += '/' + n)))
              }
              return void 0 === e ? '.' : qe.normalize(e)
            },
            relative: function (e, t) {
              if ((Re(e), Re(t), e === t)) return ''
              if ((e = qe.resolve(e)) === (t = qe.resolve(t))) return ''
              for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
              for (var r = e.length, a = r - n, o = 1; o < t.length && 47 === t.charCodeAt(o); ++o);
              for (var i = t.length - o, l = a < i ? a : i, u = -1, c = 0; c <= l; ++c) {
                if (c === l) {
                  if (i > l) {
                    if (47 === t.charCodeAt(o + c)) return t.slice(o + c + 1)
                    if (0 === c) return t.slice(o + c)
                  } else a > l && (47 === e.charCodeAt(n + c) ? (u = c) : 0 === c && (u = 0))
                  break
                }
                var s = e.charCodeAt(n + c)
                if (s !== t.charCodeAt(o + c)) break
                47 === s && (u = c)
              }
              var d = ''
              for (c = n + u + 1; c <= r; ++c)
                (c !== r && 47 !== e.charCodeAt(c)) || (0 === d.length ? (d += '..') : (d += '/..'))
              return d.length > 0
                ? d + t.slice(o + u)
                : ((o += u), 47 === t.charCodeAt(o) && ++o, t.slice(o))
            },
            _makeLong: function (e) {
              return e
            },
            dirname: function (e) {
              if ((Re(e), 0 === e.length)) return '.'
              for (
                var t = e.charCodeAt(0), n = 47 === t, r = -1, a = !0, o = e.length - 1;
                o >= 1;
                --o
              )
                if (47 === (t = e.charCodeAt(o))) {
                  if (!a) {
                    r = o
                    break
                  }
                } else a = !1
              return -1 === r ? (n ? '/' : '.') : n && 1 === r ? '//' : e.slice(0, r)
            },
            basename: function (e, t) {
              if (void 0 !== t && 'string' != typeof t)
                throw new TypeError('"ext" argument must be a string')
              Re(e)
              var n,
                r = 0,
                a = -1,
                o = !0
              if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                if (t.length === e.length && t === e) return ''
                var i = t.length - 1,
                  l = -1
                for (n = e.length - 1; n >= 0; --n) {
                  var u = e.charCodeAt(n)
                  if (47 === u) {
                    if (!o) {
                      r = n + 1
                      break
                    }
                  } else
                    (-1 === l && ((o = !1), (l = n + 1)),
                      i >= 0 &&
                        (u === t.charCodeAt(i) ? -1 === --i && (a = n) : ((i = -1), (a = l))))
                }
                return (r === a ? (a = l) : -1 === a && (a = e.length), e.slice(r, a))
              }
              for (n = e.length - 1; n >= 0; --n)
                if (47 === e.charCodeAt(n)) {
                  if (!o) {
                    r = n + 1
                    break
                  }
                } else -1 === a && ((o = !1), (a = n + 1))
              return -1 === a ? '' : e.slice(r, a)
            },
            extname: function (e) {
              Re(e)
              for (var t = -1, n = 0, r = -1, a = !0, o = 0, i = e.length - 1; i >= 0; --i) {
                var l = e.charCodeAt(i)
                if (47 !== l)
                  (-1 === r && ((a = !1), (r = i + 1)),
                    46 === l ? (-1 === t ? (t = i) : 1 !== o && (o = 1)) : -1 !== t && (o = -1))
                else if (!a) {
                  n = i + 1
                  break
                }
              }
              return -1 === t || -1 === r || 0 === o || (1 === o && t === r - 1 && t === n + 1)
                ? ''
                : e.slice(t, r)
            },
            format: function (e) {
              if (null === e || 'object' !== d(e))
                throw new TypeError(
                  'The "pathObject" argument must be of type Object. Received type ' + d(e)
                )
              return (function (e, t) {
                var n = t.dir || t.root,
                  r = t.base || (t.name || '') + (t.ext || '')
                return n ? (n === t.root ? n + r : n + e + r) : r
              })('/', e)
            },
            parse: function (e) {
              Re(e)
              var t = { root: '', dir: '', base: '', ext: '', name: '' }
              if (0 === e.length) return t
              var n,
                r = e.charCodeAt(0),
                a = 47 === r
              a ? ((t.root = '/'), (n = 1)) : (n = 0)
              for (var o = -1, i = 0, l = -1, u = !0, c = e.length - 1, s = 0; c >= n; --c)
                if (47 !== (r = e.charCodeAt(c)))
                  (-1 === l && ((u = !1), (l = c + 1)),
                    46 === r ? (-1 === o ? (o = c) : 1 !== s && (s = 1)) : -1 !== o && (s = -1))
                else if (!u) {
                  i = c + 1
                  break
                }
              return (
                -1 === o || -1 === l || 0 === s || (1 === s && o === l - 1 && o === i + 1)
                  ? -1 !== l && (t.base = t.name = 0 === i && a ? e.slice(1, l) : e.slice(i, l))
                  : (0 === i && a
                      ? ((t.name = e.slice(1, o)), (t.base = e.slice(1, l)))
                      : ((t.name = e.slice(i, o)), (t.base = e.slice(i, l))),
                    (t.ext = e.slice(o, l))),
                i > 0 ? (t.dir = e.slice(0, i - 1)) : a && (t.dir = '/'),
                t
              )
            },
            sep: '/',
            delimiter: ':',
            win32: null,
            posix: null
          }
          qe.posix = qe
          var Ne = he(qe),
            $e = ['title'],
            Be = ['title'],
            Ue = l({
              __name: 'SidebarItem',
              props: {
                item: {},
                isCollapse: { type: Boolean, default: !1 },
                isTop: { type: Boolean, default: !1 },
                isFirstLevel: { type: Boolean, default: !0 },
                basePath: { default: '' }
              },
              setup: function (e) {
                var t = e,
                  n = _(function () {
                    var e
                    return null === (e = t.item.meta) || void 0 === e ? void 0 : e.alwaysShow
                  }),
                  r = _(function () {
                    var e, n
                    return null !==
                      (e =
                        null === (n = t.item.children) || void 0 === n
                          ? void 0
                          : n.filter(function (e) {
                              var t
                              return !(null !== (t = e.meta) && void 0 !== t && t.hidden)
                            })) && void 0 !== e
                      ? e
                      : []
                  }),
                  a = _(function () {
                    return r.value.length
                  }),
                  o = _(function () {
                    var e = a.value
                    switch (!0) {
                      case e > 1:
                        return null
                      case 1 === e:
                        return r.value[0]
                      default:
                        return c(c({}, t.item), {}, { path: '' })
                    }
                  }),
                  i = function (e) {
                    switch (!0) {
                      case je(e):
                        return e
                      case je(t.basePath):
                        return t.basePath
                      default:
                        return Ne.resolve(t.basePath, e)
                    }
                  }
                return function (e, r) {
                  var a,
                    l = u('SvgIcon'),
                    c = u('el-menu-item'),
                    d = u('sidebar-item', !0),
                    m = u('el-sub-menu')
                  return null !== (a = t.item.meta) && void 0 !== a && a.hidden
                    ? S('', !0)
                    : (s(),
                      f(
                        'div',
                        {
                          key: 0,
                          class: I({
                            'simple-mode': t.isCollapse && !e.isTop,
                            'first-level': t.isFirstLevel
                          })
                        },
                        [
                          n.value || !o.value || o.value.children
                            ? (s(),
                              g(
                                m,
                                { key: 1, index: i(t.item.path), teleported: '' },
                                {
                                  title: h(function () {
                                    var n, r, a
                                    return [
                                      null !== (n = t.item.meta) && void 0 !== n && n.svgIcon
                                        ? (s(),
                                          g(l, { key: 0, name: t.item.meta.svgIcon }, null, 8, [
                                            'name'
                                          ]))
                                        : null !== (r = t.item.meta) && void 0 !== r && r.elIcon
                                          ? (s(),
                                            g(b(t.item.meta.elIcon), { key: 1, class: 'el-icon' }))
                                          : S('', !0),
                                      null !== (a = t.item.meta) && void 0 !== a && a.title
                                        ? (s(),
                                          f(
                                            'span',
                                            { key: 2, title: e.$t(t.item.meta.title) },
                                            E(e.$t(t.item.meta.title)),
                                            9,
                                            Be
                                          ))
                                        : S('', !0)
                                    ]
                                  }),
                                  default: h(function () {
                                    return [
                                      t.item.children
                                        ? (s(!0),
                                          f(
                                            k,
                                            { key: 0 },
                                            j(t.item.children, function (e) {
                                              return (
                                                s(),
                                                g(
                                                  d,
                                                  {
                                                    key: e.path,
                                                    item: e,
                                                    'is-collapse': t.isCollapse,
                                                    'is-first-level': !1,
                                                    'base-path': i(e.path)
                                                  },
                                                  null,
                                                  8,
                                                  ['item', 'is-collapse', 'base-path']
                                                )
                                              )
                                            }),
                                            128
                                          ))
                                        : S('', !0)
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['index']
                              ))
                            : (s(),
                              f(
                                k,
                                { key: 0 },
                                [
                                  o.value.meta
                                    ? (s(),
                                      g(
                                        Te,
                                        { key: 0, to: i(o.value.path) },
                                        {
                                          default: h(function () {
                                            return [
                                              p(
                                                c,
                                                { index: i(o.value.path) },
                                                C(
                                                  {
                                                    default: h(function () {
                                                      return [
                                                        o.value.meta.svgIcon
                                                          ? (s(),
                                                            g(
                                                              l,
                                                              {
                                                                key: 0,
                                                                name: o.value.meta.svgIcon
                                                              },
                                                              null,
                                                              8,
                                                              ['name']
                                                            ))
                                                          : o.value.meta.elIcon
                                                            ? (s(),
                                                              g(b(o.value.meta.elIcon), {
                                                                key: 1,
                                                                class: 'el-icon'
                                                              }))
                                                            : S('', !0)
                                                      ]
                                                    }),
                                                    _: 2
                                                  },
                                                  [
                                                    o.value.meta.title
                                                      ? {
                                                          name: 'title',
                                                          fn: h(function () {
                                                            return [
                                                              v(
                                                                'span',
                                                                { title: e.$t(o.value.meta.title) },
                                                                E(e.$t(o.value.meta.title)),
                                                                9,
                                                                $e
                                                              )
                                                            ]
                                                          }),
                                                          key: '0'
                                                        }
                                                      : void 0
                                                  ]
                                                ),
                                                1032,
                                                ['index']
                                              )
                                            ]
                                          }),
                                          _: 1
                                        },
                                        8,
                                        ['to']
                                      ))
                                    : S('', !0)
                                ],
                                64
                              ))
                        ],
                        2
                      ))
                }
              }
            }),
            De = te(Ue, [['__scopeId', 'data-v-a88b5f36']]),
            We = ['src'],
            Ge = ['src'],
            Ke = l({
              __name: 'index',
              props: { collapse: { type: Boolean, default: !0 } },
              setup: function (e) {
                var t = e,
                  n = ee(),
                  r = O(n).layoutMode
                return function (e, n) {
                  var a = u('router-link')
                  return (
                    s(),
                    f(
                      'div',
                      {
                        class: I([
                          'layout-logo-container',
                          { collapse: t.collapse, 'layout-mode-top': 'top' === y(r) }
                        ])
                      },
                      [
                        p(
                          m,
                          { name: 'layout-logo-fade' },
                          {
                            default: h(function () {
                              return [
                                t.collapse
                                  ? (s(),
                                    g(
                                      a,
                                      { key: 'collapse', to: '/' },
                                      {
                                        default: h(function () {
                                          return [
                                            v(
                                              'img',
                                              {
                                                'w-80': '',
                                                'h-auto': '',
                                                src: y(
                                                  '/admin/static/hellocloudlogo-3-1ead8640.png'
                                                ),
                                                class: 'layout-logo'
                                              },
                                              null,
                                              8,
                                              We
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ))
                                  : (s(),
                                    g(
                                      a,
                                      { key: 'expand', to: '/' },
                                      {
                                        default: h(function () {
                                          return [
                                            v(
                                              'img',
                                              {
                                                'w-80': '',
                                                'h-auto': '',
                                                src:
                                                  'left' !== y(r)
                                                    ? y(
                                                        '/admin/static/hellocloudlogo-2-8457dace.png'
                                                      )
                                                    : y(
                                                        '/admin/static/hellocloudlogo-1-81c0db6b.png'
                                                      ),
                                                class: 'layout-logo-text'
                                              },
                                              null,
                                              8,
                                              Ge
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ))
                              ]
                            }),
                            _: 1
                          }
                        )
                      ],
                      2
                    )
                  )
                }
              }
            }),
            Ye = n('L', te(Ke, [['__scopeId', 'data-v-6a52bd74']])),
            He = { class: 'scrollbar-body' },
            Je = { class: 'footer', 'uno-flex-center': '', 'cursor-pointer': '' },
            Xe = l({
              __name: 'index',
              setup: function (e) {
                L(function (e) {
                  return {
                    '0c6ff376': q.value,
                    '077dd640': N.value,
                    '2b245e96': R.value,
                    '64305abe': M.value
                  }
                })
                var t = ne('--v3-sidebar-menu-bg-color'),
                  n = ne('--v3-sidebar-menu-text-color'),
                  r = ne('--v3-sidebar-menu-active-text-color'),
                  a = V(),
                  o = de(),
                  i = re(),
                  l = ee(),
                  c = O(o),
                  d = c.sidebar,
                  m = c.device,
                  b = O(l),
                  w = b.layoutMode,
                  x = b.showLogo,
                  C = _(function () {
                    var e = a.meta.activeMenu,
                      t = a.path
                    return e || t
                  }),
                  E = function () {
                    o.toggleSidebar(!1)
                  },
                  A = _(function () {
                    return !d.value.opened
                  }),
                  z = _(function () {
                    return 'left' === w.value
                  }),
                  P = _(function () {
                    return 'top' === w.value
                  }),
                  F = _(function () {
                    return m.value === fe.Mobile
                  }),
                  T = _(function () {
                    return z.value && x.value
                  })
                ;(_(function () {
                  return z.value ? t : void 0
                }),
                  _(function () {
                    return z.value ? n : void 0
                  }),
                  _(function () {
                    return z.value ? r : void 0
                  }))
                var R = _(function () {
                    return 'top' !== w.value
                      ? 'var(--v3-sidebar-menu-item-height)'
                      : 'var(--v3-navigationbar-height)'
                  }),
                  M = _(function () {
                    return 'top' !== w.value ? '#0079f20d' : 'transparent'
                  }),
                  q = _(function () {
                    return 'top' !== w.value ? '2px' : '0px'
                  }),
                  N = _(function () {
                    return 'top' === w.value ? 'none' : 'block'
                  })
                return function (e, t) {
                  var n = u('el-menu'),
                    r = u('el-scrollbar')
                  return (
                    s(),
                    f(
                      'div',
                      { class: I({ 'has-logo': T.value }) },
                      [
                        T.value
                          ? (s(), g(Ye, { key: 0, collapse: A.value }, null, 8, ['collapse']))
                          : S('', !0),
                        v('div', He, [
                          p(
                            r,
                            { 'wrap-class': 'scrollbar-wrapper' },
                            {
                              default: h(function () {
                                return [
                                  p(
                                    n,
                                    {
                                      'default-active': C.value,
                                      collapse: A.value && !P.value,
                                      'unique-opened': !0,
                                      'collapse-transition': !1,
                                      mode: P.value && !F.value ? 'horizontal' : 'vertical'
                                    },
                                    {
                                      default: h(function () {
                                        return [
                                          (s(!0),
                                          f(
                                            k,
                                            null,
                                            j(y(i).routes, function (e) {
                                              return (
                                                s(),
                                                g(
                                                  De,
                                                  {
                                                    key: e.path,
                                                    item: e,
                                                    'base-path': e.path,
                                                    'is-collapse': A.value,
                                                    'is-top': P.value
                                                  },
                                                  null,
                                                  8,
                                                  ['item', 'base-path', 'is-collapse', 'is-top']
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
                                    ['default-active', 'collapse', 'mode']
                                  )
                                ]
                              }),
                              _: 1
                            }
                          ),
                          v('div', Je, [
                            !P.value || F.value
                              ? (s(),
                                g(
                                  Pe,
                                  {
                                    key: 0,
                                    'is-active': y(d).opened,
                                    class: 'hamburger',
                                    onToggleClick: E
                                  },
                                  null,
                                  8,
                                  ['is-active']
                                ))
                              : S('', !0)
                          ])
                        ])
                      ],
                      2
                    )
                  )
                }
              }
            }),
            Qe = n('S', te(Xe, [['__scopeId', 'data-v-37ca0f4e']])),
            Ze = l({
              __name: 'index',
              setup: function (e) {
                var t = ae(),
                  n = t.themeList,
                  r = t.activeThemeName,
                  a = t.setTheme
                return function (e, t) {
                  var o = u('el-icon'),
                    i = u('el-tooltip'),
                    l = u('el-dropdown-item'),
                    c = u('el-dropdown-menu'),
                    d = u('el-dropdown')
                  return (
                    s(),
                    g(
                      d,
                      { trigger: 'click', onCommand: y(a) },
                      {
                        dropdown: h(function () {
                          return [
                            p(c, null, {
                              default: h(function () {
                                return [
                                  (s(!0),
                                  f(
                                    k,
                                    null,
                                    j(y(n), function (e, t) {
                                      return (
                                        s(),
                                        g(
                                          l,
                                          { key: t, disabled: y(r) === e.name, command: e.name },
                                          {
                                            default: h(function () {
                                              return [v('span', null, E(e.title), 1)]
                                            }),
                                            _: 2
                                          },
                                          1032,
                                          ['disabled', 'command']
                                        )
                                      )
                                    }),
                                    128
                                  ))
                                ]
                              }),
                              _: 1
                            })
                          ]
                        }),
                        default: h(function () {
                          return [
                            v('div', null, [
                              p(
                                i,
                                { effect: 'dark', content: '主题模式', placement: 'bottom' },
                                {
                                  default: h(function () {
                                    return [
                                      p(
                                        o,
                                        { size: 20 },
                                        {
                                          default: h(function () {
                                            return [p(y(me))]
                                          }),
                                          _: 1
                                        }
                                      )
                                    ]
                                  }),
                                  _: 1
                                }
                              )
                            ])
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['onCommand']
                    )
                  )
                }
              }
            }),
            et = [
              [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
              ],
              [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
              ],
              [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
              ],
              [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
              ],
              [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
              ]
            ],
            tt = (function () {
              if ('undefined' == typeof document) return !1
              for (var e = et[0], t = {}, n = 0, r = et; n < r.length; n++) {
                var i = r[n]
                if ((null == i ? void 0 : i[1]) in document) {
                  var l,
                    u = o(i.entries())
                  try {
                    for (u.s(); !(l = u.n()).done; ) {
                      var c = a(l.value, 2),
                        s = c[0],
                        d = c[1]
                      t[e[s]] = d
                    }
                  } catch (f) {
                    u.e(f)
                  } finally {
                    u.f()
                  }
                  return t
                }
              }
              return !1
            })(),
            nt = { change: tt.fullscreenchange, error: tt.fullscreenerror },
            rt = {
              request: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : document.documentElement,
                  t = arguments.length > 1 ? arguments[1] : void 0
                return new Promise(function (n, r) {
                  var a = function e() {
                    ;(rt.off('change', e), n())
                  }
                  rt.on('change', a)
                  var o = e[tt.requestFullscreen](t)
                  o instanceof Promise && o.then(a).catch(r)
                })
              },
              exit: function () {
                return new Promise(function (e, t) {
                  if (rt.isFullscreen) {
                    var n = function t() {
                      ;(rt.off('change', t), e())
                    }
                    rt.on('change', n)
                    var r = document[tt.exitFullscreen]()
                    r instanceof Promise && r.then(n).catch(t)
                  } else e()
                })
              },
              toggle: function (e, t) {
                return rt.isFullscreen ? rt.exit() : rt.request(e, t)
              },
              onchange: function (e) {
                rt.on('change', e)
              },
              onerror: function (e) {
                rt.on('error', e)
              },
              on: function (e, t) {
                var n = nt[e]
                n && document.addEventListener(n, t, !1)
              },
              off: function (e, t) {
                var n = nt[e]
                n && document.removeEventListener(n, t, !1)
              },
              raw: tt
            }
          ;(Object.defineProperties(rt, {
            isFullscreen: {
              get: function () {
                return Boolean(document[tt.fullscreenElement])
              }
            },
            element: {
              enumerable: !0,
              get: function () {
                var e
                return null !== (e = document[tt.fullscreenElement]) && void 0 !== e ? e : void 0
              }
            },
            isEnabled: {
              enumerable: !0,
              get: function () {
                return Boolean(document[tt.fullscreenEnabled])
              }
            }
          }),
            tt || (rt = { isEnabled: !1 }))
          var at = rt,
            ot = l({
              __name: 'index',
              props: {
                element: { default: 'html' },
                openTips: { default: '全屏' },
                exitTips: { default: '退出全屏' },
                content: { type: Boolean, default: !1 }
              },
              setup: function (e) {
                var t = e,
                  n = A(!1),
                  r = _(function () {
                    return n.value ? t.exitTips : t.openTips
                  }),
                  a = _(function () {
                    return n.value ? 'fullscreen-exit' : 'fullscreen'
                  }),
                  o = function () {
                    var e = document.querySelector(t.element) || void 0
                    at.isEnabled ? at.toggle(e) : ge.warning('您的浏览器无法工作')
                  },
                  i = function () {
                    n.value = at.isFullscreen
                  }
                z(function (e) {
                  ;(at.on('change', i),
                    e(function () {
                      at.isEnabled && at.off('change', i)
                    }))
                })
                var l = A(!1),
                  c = _(function () {
                    return l.value ? '内容区复原' : '内容区放大'
                  }),
                  d = _(function () {
                    return l.value ? 'fullscreen-exit' : 'fullscreen'
                  }),
                  v = function () {
                    ;((document.body.className = l.value ? '' : 'content-large'),
                      (l.value = !l.value))
                  }
                return function (e, t) {
                  var i = u('SvgIcon'),
                    l = u('el-tooltip'),
                    m = u('el-dropdown-item'),
                    b = u('el-dropdown-menu'),
                    y = u('el-dropdown')
                  return (
                    s(),
                    f('div', null, [
                      e.content
                        ? (s(),
                          g(
                            y,
                            { key: 1 },
                            {
                              dropdown: h(function () {
                                return [
                                  p(b, null, {
                                    default: h(function () {
                                      return [
                                        p(
                                          m,
                                          { onClick: v },
                                          {
                                            default: h(function () {
                                              return [P(E(c.value), 1)]
                                            }),
                                            _: 1
                                          }
                                        ),
                                        p(
                                          m,
                                          { onClick: o, disabled: n.value },
                                          {
                                            default: h(function () {
                                              return [P('内容区全屏')]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['disabled']
                                        )
                                      ]
                                    }),
                                    _: 1
                                  })
                                ]
                              }),
                              default: h(function () {
                                return [p(i, { name: d.value }, null, 8, ['name'])]
                              }),
                              _: 1
                            }
                          ))
                        : (s(),
                          g(
                            l,
                            { key: 0, effect: 'dark', content: r.value, placement: 'bottom' },
                            {
                              default: h(function () {
                                return [p(i, { name: a.value, onClick: o }, null, 8, ['name'])]
                              }),
                              _: 1
                            },
                            8,
                            ['content']
                          ))
                    ])
                  )
                }
              }
            }),
            it = te(ot, [['__scopeId', 'data-v-03a66814']]),
            lt = ['onMouseenter'],
            ut = { class: 'result-item-title' },
            ct = l({
              __name: 'SearchResult',
              props: { modelValue: {}, list: {}, isPressUpOrDown: { type: Boolean } },
              emits: ['update:modelValue'],
              setup: function (e, t) {
                var n = t.expose,
                  r = t.emit,
                  a = e,
                  o = r,
                  i = F(),
                  l = A(0),
                  c = _({
                    get: function () {
                      return a.modelValue
                    },
                    set: function (e) {
                      o('update:modelValue', e)
                    }
                  }),
                  d = function (e) {
                    var t = e.name === c.value
                    return {
                      background: t ? 'var(--el-color-primary)' : '',
                      color: t ? '#fff' : ''
                    }
                  },
                  p = function () {
                    l.value = Number((0.4 * window.innerHeight).toFixed(1))
                  }
                return (
                  T(function () {
                    window.addEventListener('resize', p)
                  }),
                  R(function () {
                    p()
                  }),
                  M(function () {
                    window.removeEventListener('resize', p)
                  }),
                  n({
                    getScrollTop: function (e) {
                      var t,
                        n =
                          null == i || null === (t = i.proxy) || void 0 === t
                            ? void 0
                            : t.$refs['resultItemRef'.concat(e)]
                      if (!n) return 0
                      var r = n[0].offsetTop + 128
                      return r > l.value ? r - l.value : 0
                    }
                  }),
                  function (e, t) {
                    var n = u('SvgIcon')
                    return (
                      s(),
                      f('div', null, [
                        (s(!0),
                        f(
                          k,
                          null,
                          j(e.list, function (e, t) {
                            var r, o, i
                            return (
                              s(),
                              f(
                                'div',
                                {
                                  key: t,
                                  ref_for: !0,
                                  ref: 'resultItemRef'.concat(t),
                                  class: 'result-item',
                                  style: q(d(e)),
                                  onMouseenter: function (t) {
                                    return (function (e) {
                                      a.isPressUpOrDown || (c.value = e.name)
                                    })(e)
                                  }
                                },
                                [
                                  null !== (r = e.meta) && void 0 !== r && r.svgIcon
                                    ? (s(),
                                      g(n, { key: 0, name: e.meta.svgIcon }, null, 8, ['name']))
                                    : null !== (o = e.meta) && void 0 !== o && o.elIcon
                                      ? (s(), g(b(e.meta.elIcon), { key: 1, class: 'el-icon' }))
                                      : S('', !0),
                                  v(
                                    'span',
                                    ut,
                                    E(null === (i = e.meta) || void 0 === i ? void 0 : i.title),
                                    1
                                  ),
                                  c.value && c.value === e.name
                                    ? (s(), g(n, { key: 2, name: 'keyboard-enter' }))
                                    : S('', !0)
                                ],
                                44,
                                lt
                              )
                            )
                          }),
                          128
                        ))
                      ])
                    )
                  }
                )
              }
            }),
            st = te(ct, [['__scopeId', 'data-v-12ffafc6']]),
            dt = function (e) {
              return (N('data-v-5a5bf381'), (e = e()), $(), e)
            },
            ft = { class: 'search-footer' },
            vt = { class: 'search-footer-item' },
            pt = dt(function () {
              return v('span', null, '确认', -1)
            }),
            ht = { class: 'search-footer-item' },
            mt = dt(function () {
              return v('span', null, '切换', -1)
            }),
            gt = { class: 'search-footer-item' },
            bt = dt(function () {
              return v('span', null, '关闭', -1)
            }),
            yt = { class: 'search-footer-total' },
            wt = te(
              l({
                __name: 'SearchFooter',
                props: { total: {} },
                setup: function (e) {
                  var t = e,
                    n = de(),
                    r = _(function () {
                      return n.device === fe.Mobile
                    })
                  return function (e, n) {
                    var a = u('SvgIcon')
                    return (
                      s(),
                      f('div', ft, [
                        r.value
                          ? S('', !0)
                          : (s(),
                            f(
                              k,
                              { key: 0 },
                              [
                                v('span', vt, [p(a, { name: 'keyboard-enter' }), pt]),
                                v('span', ht, [
                                  p(a, { name: 'keyboard-up' }),
                                  p(a, { name: 'keyboard-down' }),
                                  mt
                                ]),
                                v('span', gt, [p(a, { name: 'keyboard-esc' }), bt])
                              ],
                              64
                            )),
                        v('span', yt, '共 ' + E(t.total) + ' 项', 1)
                      ])
                    )
                  }
                }
              }),
              [['__scopeId', 'data-v-5a5bf381']]
            ),
            xt = v('p', null, '搜索结果', -1),
            _t = l({
              __name: 'SearchModal',
              props: { modelValue: { type: Boolean } },
              emits: ['update:modelValue'],
              setup: function (e, t) {
                var n = t.emit,
                  r = e,
                  a = n,
                  o = de(),
                  i = B(),
                  l = A(null),
                  c = A(null),
                  d = A(null),
                  v = A(''),
                  m = U([]),
                  b = A(void 0),
                  w = A(!1),
                  x = _(function () {
                    return o.device === fe.Mobile ? '80vw' : '40vw'
                  }),
                  C = _({
                    get: function () {
                      return r.modelValue
                    },
                    set: function (e) {
                      a('update:modelValue', e)
                    }
                  }),
                  S = _(function () {
                    return be(re().routes)
                  }),
                  E = ye(function () {
                    var e,
                      t = j(S.value)
                    m.value = t.filter(function (e) {
                      var t
                      return (
                        !!v.value &&
                        (null === (t = e.meta) ||
                        void 0 === t ||
                        null === (t = t.title) ||
                        void 0 === t
                          ? void 0
                          : t.toLocaleLowerCase().includes(v.value.toLocaleLowerCase().trim()))
                      )
                    })
                    var n = null === (e = m.value) || void 0 === e ? void 0 : e.length
                    b.value = n > 0 ? m.value[0].name : void 0
                  }, 500),
                  j = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                    return (
                      t.forEach(function (t) {
                        ;(n.push(t), t.children && e(t.children, n))
                      }),
                      n
                    )
                  },
                  I = function () {
                    ;((C.value = !1),
                      setTimeout(function () {
                        ;((v.value = ''), (m.value = []))
                      }, 200))
                  },
                  O = function (e) {
                    var t
                    if (d.value) {
                      var n = d.value.getScrollTop(e)
                      null === (t = c.value) || void 0 === t || t.setScrollTop(n)
                    }
                  },
                  L = function () {
                    w.value = !0
                    var e = m.value.length
                    if (0 !== e) {
                      var t = m.value.findIndex(function (e) {
                        return e.name === b.value
                      })
                      if (0 === t) {
                        var n = m.value[e - 1].name
                        b.value === n && e > 1
                          ? ((b.value = m.value[e - 2].name), O(e - 2))
                          : ((b.value = n), O(e - 1))
                      } else ((b.value = m.value[t - 1].name), O(t - 1))
                    }
                  },
                  V = function () {
                    w.value = !0
                    var e = m.value.length
                    if (0 !== e) {
                      var t = m.value
                        .map(function (e) {
                          return e.name
                        })
                        .lastIndexOf(b.value)
                      if (t === e - 1) {
                        var n = m.value[0].name
                        b.value === n && e > 1
                          ? ((b.value = m.value[1].name), O(1))
                          : ((b.value = n), O(0))
                      } else ((b.value = m.value[t + 1].name), O(t + 1))
                    }
                  },
                  z = function () {
                    var e
                    if (0 !== m.value.length) {
                      var t = b.value,
                        n =
                          null ===
                            (e = m.value.find(function (e) {
                              return e.name === t
                            })) || void 0 === e
                            ? void 0
                            : e.path
                      if (n && je(n)) window.open(n, '_blank', 'noopener, noreferrer')
                      else if (t) {
                        try {
                          i.push({ name: t })
                        } catch (r) {
                          return void ge.error('该菜单有必填的动态参数，无法通过搜索进入')
                        }
                        I()
                      } else ge.warning('无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name')
                    }
                  },
                  P = function () {
                    w.value = !1
                  }
                return function (e, t) {
                  var n = u('SvgIcon'),
                    r = u('el-input'),
                    a = u('el-empty'),
                    o = u('el-dialog')
                  return (
                    s(),
                    g(
                      o,
                      {
                        modelValue: C.value,
                        'onUpdate:modelValue':
                          t[2] ||
                          (t[2] = function (e) {
                            return (C.value = e)
                          }),
                        onOpened:
                          t[3] ||
                          (t[3] = function (e) {
                            var t
                            return null === (t = l.value) || void 0 === t ? void 0 : t.focus()
                          }),
                        onClosed:
                          t[4] ||
                          (t[4] = function (e) {
                            var t
                            return null === (t = l.value) || void 0 === t ? void 0 : t.blur()
                          }),
                        onKeydown: [D(L, ['up']), D(V, ['down']), D(z, ['enter'])],
                        onKeyup: D(P, ['up', 'down']),
                        'before-close': I,
                        width: x.value,
                        top: '5vh',
                        class: 'search-modal__private',
                        'append-to-body': ''
                      },
                      {
                        footer: h(function () {
                          return [p(wt, { total: m.value.length }, null, 8, ['total'])]
                        }),
                        default: h(function () {
                          return [
                            p(
                              r,
                              {
                                ref_key: 'inputRef',
                                ref: l,
                                modelValue: v.value,
                                'onUpdate:modelValue':
                                  t[0] ||
                                  (t[0] = function (e) {
                                    return (v.value = e)
                                  }),
                                onInput: y(E),
                                placeholder: '搜索菜单',
                                size: 'large',
                                clearable: ''
                              },
                              {
                                prefix: h(function () {
                                  return [p(n, { name: 'search' })]
                                }),
                                _: 1
                              },
                              8,
                              ['modelValue', 'onInput']
                            ),
                            0 === m.value.length
                              ? (s(),
                                g(a, { key: 0, description: '暂无搜索结果', 'image-size': 100 }))
                              : (s(),
                                f(
                                  k,
                                  { key: 1 },
                                  [
                                    xt,
                                    p(
                                      y(we),
                                      {
                                        ref_key: 'scrollbarRef',
                                        ref: c,
                                        'max-height': '40vh',
                                        always: ''
                                      },
                                      {
                                        default: h(function () {
                                          return [
                                            p(
                                              st,
                                              {
                                                ref_key: 'searchResultRef',
                                                ref: d,
                                                modelValue: b.value,
                                                'onUpdate:modelValue':
                                                  t[1] ||
                                                  (t[1] = function (e) {
                                                    return (b.value = e)
                                                  }),
                                                list: m.value,
                                                isPressUpOrDown: w.value,
                                                onClick: z
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'list', 'isPressUpOrDown']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      512
                                    )
                                  ],
                                  64
                                ))
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['modelValue', 'onKeydown', 'onKeyup', 'width']
                    )
                  )
                }
              }
            }),
            kt = te(
              l({
                __name: 'index',
                setup: function (e) {
                  var t = A(!1),
                    n = function () {
                      t.value = !0
                    }
                  return function (e, r) {
                    var a = u('SvgIcon'),
                      o = u('el-tooltip')
                    return (
                      s(),
                      f('div', null, [
                        p(
                          o,
                          { effect: 'dark', content: '搜索菜单', placement: 'bottom' },
                          {
                            default: h(function () {
                              return [p(a, { name: 'search', onClick: n })]
                            }),
                            _: 1
                          }
                        ),
                        p(
                          _t,
                          {
                            modelValue: t.value,
                            'onUpdate:modelValue':
                              r[0] ||
                              (r[0] = function (e) {
                                return (t.value = e)
                              })
                          },
                          null,
                          8,
                          ['modelValue']
                        )
                      ])
                    )
                  }
                }
              }),
              [['__scopeId', 'data-v-52b80258']]
            ),
            Ct = l({
              __name: 'SecurityCodeModal',
              props: { visible: { type: Boolean, default: !1 } },
              emits: ['success', 'update:visible'],
              setup: function (e, n) {
                var a = n.emit,
                  o = e,
                  i = a,
                  l = W({ old_sec_code: '', new_sec_code: '', confirm_sec_code: '' }),
                  c = A(),
                  d = A(!1),
                  f = A('password'),
                  v = A('password'),
                  m = A('password'),
                  b = function () {
                    f.value = 'password' === f.value ? 'text' : 'password'
                  },
                  w = function () {
                    v.value = 'password' === v.value ? 'text' : 'password'
                  },
                  x = function () {
                    m.value = 'password' === m.value ? 'text' : 'password'
                  },
                  _ = {
                    new_sec_code: [
                      { required: !0, message: '请输入新安全码', trigger: 'blur' },
                      { min: 6, message: '安全码长度不能少于6位', trigger: 'blur' }
                    ],
                    confirm_sec_code: [
                      { required: !0, message: '请确认新安全码', trigger: 'blur' },
                      {
                        validator: function (e, t, n) {
                          t !== l.new_sec_code ? n(new Error('两次输入的安全码不一致')) : n()
                        },
                        trigger: 'blur'
                      }
                    ]
                  },
                  k = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (c.value) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt('return')
                              case 2:
                                return (
                                  (e.next = 4),
                                  c.value.validate(
                                    (function () {
                                      var e = r(
                                        t().mark(function e(n) {
                                          return t().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (!n) {
                                                      e.next = 17
                                                      break
                                                    }
                                                    return (
                                                      (d.value = !0),
                                                      (e.prev = 2),
                                                      (e.next = 5),
                                                      oe({
                                                        old_sec_code: l.old_sec_code,
                                                        new_sec_code: l.new_sec_code
                                                      })
                                                    )
                                                  case 5:
                                                    ;(ge.success('安全码修改成功'),
                                                      i('success'),
                                                      c.value.resetFields(),
                                                      i('update:visible', !1),
                                                      (e.next = 14))
                                                    break
                                                  case 11:
                                                    ;((e.prev = 11),
                                                      (e.t0 = e.catch(2)),
                                                      ge.error(
                                                        (null === e.t0 || void 0 === e.t0
                                                          ? void 0
                                                          : e.t0.message) || '修改失败'
                                                      ))
                                                  case 14:
                                                    return (
                                                      (e.prev = 14),
                                                      (d.value = !1),
                                                      e.finish(14)
                                                    )
                                                  case 17:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            },
                                            e,
                                            null,
                                            [[2, 11, 14, 17]]
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
                  C = function () {
                    c.value && c.value.resetFields()
                  },
                  S = function () {
                    i('update:visible', !1)
                  }
                return function (e, t) {
                  var n = u('el-icon'),
                    r = u('el-input'),
                    a = u('el-form-item'),
                    i = u('el-form'),
                    E = u('el-button'),
                    j = u('el-dialog')
                  return (
                    s(),
                    g(
                      j,
                      {
                        'model-value': o.visible,
                        title: '修改安全码',
                        width: '500px',
                        'close-on-click-modal': !1,
                        'append-to-body': '',
                        onClose: S
                      },
                      {
                        footer: h(function () {
                          return [
                            p(
                              E,
                              { onClick: C },
                              {
                                default: h(function () {
                                  return [P('重置')]
                                }),
                                _: 1
                              }
                            ),
                            p(
                              E,
                              { type: 'primary', loading: d.value, onClick: k },
                              {
                                default: h(function () {
                                  return [P(' 确认修改 ')]
                                }),
                                _: 1
                              },
                              8,
                              ['loading']
                            )
                          ]
                        }),
                        default: h(function () {
                          return [
                            p(
                              i,
                              {
                                ref_key: 'formRef',
                                ref: c,
                                model: l,
                                rules: _,
                                'label-width': '100px',
                                onSubmit: t[3] || (t[3] = G(function () {}, ['prevent']))
                              },
                              {
                                default: h(function () {
                                  return [
                                    p(
                                      a,
                                      { label: '原安全码', prop: 'old_sec_code' },
                                      {
                                        default: h(function () {
                                          return [
                                            p(
                                              r,
                                              {
                                                modelValue: l.old_sec_code,
                                                'onUpdate:modelValue':
                                                  t[0] ||
                                                  (t[0] = function (e) {
                                                    return (l.old_sec_code = e)
                                                  }),
                                                type: f.value,
                                                placeholder: '请输入原安全码'
                                              },
                                              {
                                                suffix: h(function () {
                                                  return [
                                                    p(
                                                      n,
                                                      { style: { cursor: 'pointer' }, onClick: b },
                                                      {
                                                        default: h(function () {
                                                          return [
                                                            'password' === f.value
                                                              ? (s(), g(y(xe), { key: 0 }))
                                                              : (s(), g(y(_e), { key: 1 }))
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
                                      }
                                    ),
                                    p(
                                      a,
                                      { label: '新安全码', prop: 'new_sec_code' },
                                      {
                                        default: h(function () {
                                          return [
                                            p(
                                              r,
                                              {
                                                modelValue: l.new_sec_code,
                                                'onUpdate:modelValue':
                                                  t[1] ||
                                                  (t[1] = function (e) {
                                                    return (l.new_sec_code = e)
                                                  }),
                                                type: v.value,
                                                placeholder: '请输入新安全码'
                                              },
                                              {
                                                suffix: h(function () {
                                                  return [
                                                    p(
                                                      n,
                                                      { style: { cursor: 'pointer' }, onClick: w },
                                                      {
                                                        default: h(function () {
                                                          return [
                                                            'password' === v.value
                                                              ? (s(), g(y(xe), { key: 0 }))
                                                              : (s(), g(y(_e), { key: 1 }))
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
                                      }
                                    ),
                                    p(
                                      a,
                                      { label: '确认安全码', prop: 'confirm_sec_code' },
                                      {
                                        default: h(function () {
                                          return [
                                            p(
                                              r,
                                              {
                                                modelValue: l.confirm_sec_code,
                                                'onUpdate:modelValue':
                                                  t[2] ||
                                                  (t[2] = function (e) {
                                                    return (l.confirm_sec_code = e)
                                                  }),
                                                type: m.value,
                                                placeholder: '请再次输入新安全码'
                                              },
                                              {
                                                suffix: h(function () {
                                                  return [
                                                    p(
                                                      n,
                                                      { style: { cursor: 'pointer' }, onClick: x },
                                                      {
                                                        default: h(function () {
                                                          return [
                                                            'password' === m.value
                                                              ? (s(), g(y(xe), { key: 0 }))
                                                              : (s(), g(y(_e), { key: 1 }))
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
                                      }
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
                      ['model-value']
                    )
                  )
                }
              }
            }),
            St = te(Ct, [['__scopeId', 'data-v-9dc2d9a8']]),
            Et = { class: 'navigation-bar' },
            jt = { key: 0 },
            It = { style: { display: 'flex', 'align-items': 'center' } },
            Ot = { class: 'right-menu' },
            Lt = {
              class: 'quota-display',
              style: {
                display: 'flex',
                'align-items': 'center',
                'margin-right': '6px',
                color: 'white'
              }
            },
            Vt = { style: { 'font-size': '14px' } },
            At = { class: 'right-menu-avatar' },
            zt = { style: { display: 'block' } },
            Pt = { style: { display: 'block' } },
            Ft = l({
              __name: 'index',
              setup: function (e) {
                var n = B(),
                  a = de(),
                  o = ee(),
                  i = ie(),
                  l = O(a),
                  c = l.sidebar,
                  d = l.device,
                  m = O(o),
                  b = m.layoutMode,
                  w = (m.showNotify, m.showThemeSwitch),
                  x = m.showScreenfull,
                  C = m.showSearchMenu,
                  j = m.showLanguageSwitch,
                  I = _(function () {
                    return 'top' === b.value
                  }),
                  L = _(function () {
                    return d.value === fe.Mobile
                  }),
                  V = K('$bus'),
                  z = le().t,
                  P = A(!1),
                  F = A({ created_instances_count: 0, max_instances_limit: 0 }),
                  T = (function () {
                    var e = r(
                      t().mark(function e() {
                        var n
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), Oe())
                                case 3:
                                  ;((n = e.sent) && (F.value = n), (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取配额数据失败:', e.t0))
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
                V.on('updateQuota', T)
                var M = function () {
                    a.toggleSidebar(!1)
                  },
                  q = (function () {
                    var e = r(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), i.logout())
                              case 2:
                                n.push('/login')
                              case 3:
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
                  N = function () {
                    P.value = !0
                  },
                  $ = function () {
                    P.value = !1
                  },
                  U = function () {
                    ;(ce('mobile'), (window.location.href = '/'))
                  }
                return (
                  R(function () {
                    T()
                  }),
                  function (e, t) {
                    var n = u('el-avatar'),
                      r = u('el-dropdown-item'),
                      a = u('el-dropdown-menu'),
                      o = u('el-dropdown')
                    return (
                      s(),
                      f(
                        k,
                        null,
                        [
                          v('div', Et, [
                            I.value || L.value ? S('', !0) : (s(), f('div', jt)),
                            L.value
                              ? (s(),
                                g(
                                  Pe,
                                  {
                                    key: 1,
                                    'is-active': y(c).opened,
                                    class: 'hamburger',
                                    onToggleClick: M
                                  },
                                  null,
                                  8,
                                  ['is-active']
                                ))
                              : S('', !0),
                            v('div', It, [
                              y(ue)()
                                ? (s(), f('span', { key: 0, onClick: U }, '切换移动版'))
                                : S('', !0)
                            ]),
                            I.value && !L.value
                              ? (s(), g(Qe, { key: 2, class: 'sidebar' }))
                              : S('', !0),
                            v('div', Ot, [
                              y(C) ? (s(), g(kt, { key: 0, class: 'right-menu-item' })) : S('', !0),
                              y(x) ? (s(), g(it, { key: 1, class: 'right-menu-item' })) : S('', !0),
                              y(w) ? (s(), g(Ze, { key: 2, class: 'right-menu-item' })) : S('', !0),
                              y(j) ? (s(), g(Ie, { key: 3, class: 'right-menu-item' })) : S('', !0),
                              v('span', Lt, [
                                v(
                                  'span',
                                  Vt,
                                  E(e.$t('common.quotaDisplay')) +
                                    '：' +
                                    E(F.value.remaining_launches || 0),
                                  1
                                )
                              ]),
                              p(
                                o,
                                { class: 'right-menu-item' },
                                {
                                  dropdown: h(function () {
                                    return [
                                      p(a, null, {
                                        default: h(function () {
                                          return [
                                            p(
                                              r,
                                              { onClick: N },
                                              {
                                                default: h(function () {
                                                  return [
                                                    v(
                                                      'span',
                                                      zt,
                                                      E(y(z)('userManagement.setSecurityCode')),
                                                      1
                                                    )
                                                  ]
                                                }),
                                                _: 1
                                              }
                                            ),
                                            p(
                                              r,
                                              { onClick: q, divided: '' },
                                              {
                                                default: h(function () {
                                                  return [
                                                    v(
                                                      'span',
                                                      Pt,
                                                      E(y(z)('userManagement.logout')),
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
                                      })
                                    ]
                                  }),
                                  default: h(function () {
                                    return [
                                      v('div', At, [
                                        p(n, { icon: y(ke), size: 30 }, null, 8, ['icon']),
                                        v('span', null, E(y(i).username), 1)
                                      ])
                                    ]
                                  }),
                                  _: 1
                                }
                              )
                            ])
                          ]),
                          p(
                            St,
                            {
                              visible: P.value,
                              'onUpdate:visible':
                                t[0] ||
                                (t[0] = function (e) {
                                  return (P.value = e)
                                }),
                              onSuccess: $
                            },
                            null,
                            8,
                            ['visible']
                          )
                        ],
                        64
                      )
                    )
                  }
                )
              }
            }),
            Tt = n('N', te(Ft, [['__scopeId', 'data-v-153854b2']])),
            Rt = { class: 'scroll-container' },
            Mt = l({
              __name: 'ScrollPane',
              props: { tagRefs: {} },
              setup: function (e) {
                var t = e,
                  n = V(),
                  r = ee(),
                  a = se().listenerRouteChange,
                  o = A(),
                  i = A(),
                  l = 0,
                  c = function (e) {
                    var t = e.scrollLeft
                    l = t
                  },
                  d = function (e) {
                    var t = e.deltaY
                    ;/^-/.test(t.toString()) ? b('left') : b('right')
                  },
                  m = function () {
                    var e = i.value.clientWidth,
                      t = o.value.wrapRef.clientWidth
                    return {
                      scrollbarContentRefWidth: e,
                      scrollbarRefWidth: t,
                      lastDistance: e - t - l
                    }
                  },
                  b = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                      n = 0,
                      r = m(),
                      a = r.scrollbarContentRefWidth,
                      i = r.scrollbarRefWidth,
                      u = r.lastDistance
                    i > a ||
                      ((n = 'left' === e ? Math.max(0, l - t) : Math.min(l + t, l + u)),
                      o.value.setScrollLeft(n))
                  },
                  w = function () {
                    for (var e = t.tagRefs, r = 0; r < e.length; r++)
                      if (n.path === e[r].$props.to.path) {
                        var a = e[r].$el,
                          o = a.offsetWidth,
                          i = a.offsetLeft,
                          u = m().scrollbarRefWidth
                        if (i < l) return void b('left', l - i)
                        var c = u + l - o
                        if (i > c) return void b('right', i - c)
                      }
                  }
                return (
                  a(function () {
                    Y(w)
                  }),
                  function (e, t) {
                    var n = u('el-icon')
                    return (
                      s(),
                      f('div', Rt, [
                        p(
                          n,
                          {
                            class: 'arrow left',
                            onClick:
                              t[0] ||
                              (t[0] = function (e) {
                                return b('left')
                              })
                          },
                          {
                            default: h(function () {
                              return [p(y(Ce))]
                            }),
                            _: 1
                          }
                        ),
                        p(
                          y(we),
                          { ref_key: 'scrollbarRef', ref: o, onWheelPassive: d, onScroll: c },
                          {
                            default: h(function () {
                              return [
                                v(
                                  'div',
                                  {
                                    ref_key: 'scrollbarContentRef',
                                    ref: i,
                                    class: 'scrollbar-content'
                                  },
                                  [x(e.$slots, 'default', {}, void 0, !0)],
                                  512
                                )
                              ]
                            }),
                            _: 3
                          },
                          512
                        ),
                        p(
                          n,
                          {
                            class: 'arrow right',
                            onClick:
                              t[1] ||
                              (t[1] = function (e) {
                                return b('right')
                              })
                          },
                          {
                            default: h(function () {
                              return [p(y(Se))]
                            }),
                            _: 1
                          }
                        ),
                        y(r).showScreenfull
                          ? (s(),
                            g(it, {
                              key: 0,
                              element: '.app-main',
                              content: !0,
                              class: 'screenfull'
                            }))
                          : S('', !0)
                      ])
                    )
                  }
                )
              }
            }),
            qt = te(Mt, [['__scopeId', 'data-v-0629210e']]),
            Nt = { class: 'tags-view-container' },
            $t = l({
              __name: 'index',
              setup: function (n) {
                var a = F(),
                  i = B(),
                  l = V(),
                  d = Z(),
                  m = re(),
                  b = se().listenerRouteChange,
                  w = A([]),
                  x = A(!1),
                  _ = A(0),
                  C = A(0),
                  O = A({}),
                  L = [],
                  z = function (e) {
                    return e.path === l.path
                  },
                  T = function (e) {
                    var t
                    return null === (t = e.meta) || void 0 === t ? void 0 : t.affix
                  },
                  M = function t(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '/',
                      a = []
                    return (
                      n.forEach(function (n) {
                        if (T(n)) {
                          var o = Ne.resolve(r, n.path)
                          a.push({ fullPath: o, path: o, name: n.name, meta: c({}, n.meta) })
                        }
                        if (n.children) {
                          var i = t(n.children, n.path)
                          a.push.apply(a, e(i))
                        }
                      }),
                      a
                    )
                  },
                  N = function () {
                    var e,
                      t = o((L = M(m.routes)))
                    try {
                      for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value
                        n.name && d.addVisitedView(n)
                      }
                    } catch (r) {
                      t.e(r)
                    } finally {
                      t.f()
                    }
                  },
                  $ = function (e) {
                    e.name && (d.addVisitedView(e), d.addCachedView(e))
                  },
                  U = function (e) {
                    ;(d.delVisitedView(e), d.delCachedView(e), z(e) && W(d.visitedViews, e))
                  },
                  D = function () {
                    var e = O.value.fullPath
                    ;(e !== l.path && void 0 !== e && i.push(e),
                      d.delOthersVisitedViews(O.value),
                      d.delOthersCachedViews(O.value))
                  },
                  W = function (e, t) {
                    var n = e.slice(-1)[0],
                      r = null == n ? void 0 : n.fullPath
                    void 0 !== r
                      ? i.push(r)
                      : 'Dashboard' === t.name
                        ? i.push({ path: '/redirect' + t.path, query: t.query })
                        : i.push('/')
                  },
                  K = function () {
                    x.value = !1
                  }
                return (
                  H(x, function (e) {
                    e
                      ? document.body.addEventListener('click', K)
                      : document.body.removeEventListener('click', K)
                  }),
                  R(function () {
                    ;(N(),
                      b(
                        (function () {
                          var e = r(
                            t().mark(function e(n) {
                              return t().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      $(n)
                                    case 1:
                                    case 'end':
                                      return e.stop()
                                  }
                              }, e)
                            })
                          )
                          return function (t) {
                            return e.apply(this, arguments)
                          }
                        })(),
                        !0
                      ))
                  }),
                  function (e, t) {
                    var n = u('el-icon')
                    return (
                      s(),
                      f('div', Nt, [
                        p(
                          qt,
                          { class: 'tags-view-wrapper', 'tag-refs': w.value },
                          {
                            default: h(function () {
                              return [
                                (s(!0),
                                f(
                                  k,
                                  null,
                                  j(y(d).visitedViews, function (t) {
                                    return (
                                      s(),
                                      g(
                                        y(Q),
                                        {
                                          ref_for: !0,
                                          ref_key: 'tagRefs',
                                          ref: w,
                                          key: t.path,
                                          class: I([{ active: z(t) }, 'tags-view-item']),
                                          to: { path: t.path, query: t.query },
                                          onMouseup: G(
                                            function (e) {
                                              return !T(t) && U(t)
                                            },
                                            ['middle']
                                          ),
                                          onContextmenu: G(
                                            function (e) {
                                              return (function (e, t) {
                                                var n = a.proxy.$el.getBoundingClientRect().left,
                                                  r = a.proxy.$el.offsetWidth - 105,
                                                  o = t.clientX - n + 15
                                                ;((C.value = o > r ? r : o),
                                                  (_.value = t.clientY),
                                                  (x.value = !0),
                                                  (O.value = e))
                                              })(t, e)
                                            },
                                            ['prevent']
                                          )
                                        },
                                        {
                                          default: h(function () {
                                            var r
                                            return [
                                              P(
                                                E(
                                                  e.$t(
                                                    null === (r = t.meta) || void 0 === r
                                                      ? void 0
                                                      : r.title
                                                  )
                                                ) + ' ',
                                                1
                                              ),
                                              T(t)
                                                ? S('', !0)
                                                : (s(),
                                                  g(
                                                    n,
                                                    {
                                                      key: 0,
                                                      size: 12,
                                                      onClick: G(
                                                        function (e) {
                                                          return U(t)
                                                        },
                                                        ['prevent', 'stop']
                                                      )
                                                    },
                                                    {
                                                      default: h(function () {
                                                        return [p(y(Ee))]
                                                      }),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['onClick']
                                                  ))
                                            ]
                                          }),
                                          _: 2
                                        },
                                        1032,
                                        ['class', 'to', 'onMouseup', 'onContextmenu']
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
                          ['tag-refs']
                        ),
                        J(
                          v(
                            'ul',
                            {
                              class: 'contextmenu',
                              style: q({ left: C.value + 'px', top: _.value + 'px' })
                            },
                            [
                              v(
                                'li',
                                {
                                  onClick:
                                    t[0] ||
                                    (t[0] = function (e) {
                                      return (
                                        (t = O.value),
                                        d.delCachedView(t),
                                        void i.replace({
                                          path: '/redirect' + t.path,
                                          query: t.query
                                        })
                                      )
                                      var t
                                    })
                                },
                                '刷新'
                              ),
                              T(O.value)
                                ? S('', !0)
                                : (s(),
                                  f(
                                    'li',
                                    {
                                      key: 0,
                                      onClick:
                                        t[1] ||
                                        (t[1] = function (e) {
                                          return U(O.value)
                                        })
                                    },
                                    '关闭'
                                  )),
                              v('li', { onClick: D }, '关闭其它'),
                              v(
                                'li',
                                {
                                  onClick:
                                    t[2] ||
                                    (t[2] = function (e) {
                                      return (
                                        (t = O.value),
                                        d.delAllVisitedViews(),
                                        d.delAllCachedViews(),
                                        void (
                                          L.some(function (e) {
                                            return e.path === l.path
                                          }) || W(d.visitedViews, t)
                                        )
                                      )
                                      var t
                                    })
                                },
                                '关闭所有'
                              )
                            ],
                            4
                          ),
                          [[X, x.value]]
                        )
                      ])
                    )
                  }
                )
              }
            }),
            Bt = n('T', te($t, [['__scopeId', 'data-v-8da4aee4']])),
            Ut = { class: 'app-wrapper' },
            Dt = { class: 'fixed-header layout-header' },
            Wt = { class: 'content' },
            Gt = n(
              'a',
              te(
                l({
                  __name: 'TopMode',
                  setup: function (e) {
                    var t = ee(),
                      n = O(t),
                      r = n.showTagsView,
                      a = n.showLogo
                    return function (e, t) {
                      return (
                        s(),
                        f('div', Ut, [
                          v('div', Dt, [
                            v('div', Wt, [
                              y(a)
                                ? (s(), g(y(Ye), { key: 0, collapse: !1, class: 'logo' }))
                                : S('', !0),
                              p(y(Tt), { class: 'navigation-bar' })
                            ]),
                            J(p(y(Bt), null, null, 512), [[X, y(r)]])
                          ]),
                          v(
                            'div',
                            { class: I([{ hasTagsView: y(r) }, 'main-container']) },
                            [p(y(Ae), { class: 'app-main' })],
                            2
                          )
                        ])
                      )
                    }
                  }
                }),
                [['__scopeId', 'data-v-17d72370']]
              )
            ),
            Kt = Object.freeze(
              Object.defineProperty({ __proto__: null, default: Gt }, Symbol.toStringTag, {
                value: 'Module'
              })
            )
          n('b', Kt)
        }
      }
    }
  )
})()
