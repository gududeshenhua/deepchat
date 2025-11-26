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
      i = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      u = 'function' == typeof Symbol ? Symbol : {},
      c = u.iterator || '@@iterator',
      l = u.asyncIterator || '@@asyncIterator',
      s = u.toStringTag || '@@toStringTag'
    function p(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      p({}, '')
    } catch (t) {
      p = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function d(e, t, n, r) {
      var a = t && t.prototype instanceof b ? t : b,
        i = Object.create(a.prototype),
        u = new U(r || [])
      return (o(i, '_invoke', { value: O(e, n, u) }), i)
    }
    function f(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = d
    var v = 'suspendedStart',
      y = 'suspendedYield',
      g = 'executing',
      h = 'completed',
      m = {}
    function b() {}
    function x() {}
    function L() {}
    var k = {}
    p(k, c, function () {
      return this
    })
    var w = Object.getPrototypeOf,
      C = w && w(w(D([])))
    C && C !== r && i.call(C, c) && (k = C)
    var _ = (L.prototype = b.prototype = Object.create(k))
    function S(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        p(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function j(t, n) {
      function r(a, o, u, c) {
        var l = f(t[a], t, o)
        if ('throw' !== l.type) {
          var s = l.arg,
            p = s.value
          return p && 'object' == e(p) && i.call(p, '__await')
            ? n.resolve(p.__await).then(
                function (e) {
                  r('next', e, u, c)
                },
                function (e) {
                  r('throw', e, u, c)
                }
              )
            : n.resolve(p).then(
                function (e) {
                  ;((s.value = e), u(s))
                },
                function (e) {
                  return r('throw', e, u, c)
                }
              )
        }
        c(l.arg)
      }
      var a
      o(this, '_invoke', {
        value: function (e, t) {
          function i() {
            return new n(function (n, a) {
              r(e, t, n, a)
            })
          }
          return (a = a ? a.then(i, i) : i())
        }
      })
    }
    function O(e, n, r) {
      var a = v
      return function (i, o) {
        if (a === g) throw new Error('Generator is already running')
        if (a === h) {
          if ('throw' === i) throw o
          return { value: t, done: !0 }
        }
        for (r.method = i, r.arg = o; ; ) {
          var u = r.delegate
          if (u) {
            var c = I(u, r)
            if (c) {
              if (c === m) continue
              return c
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg
          else if ('throw' === r.method) {
            if (a === v) throw ((a = h), r.arg)
            r.dispatchException(r.arg)
          } else 'return' === r.method && r.abrupt('return', r.arg)
          a = g
          var l = f(e, n, r)
          if ('normal' === l.type) {
            if (((a = r.done ? h : y), l.arg === m)) continue
            return { value: l.arg, done: r.done }
          }
          'throw' === l.type && ((a = h), (r.method = 'throw'), (r.arg = l.arg))
        }
      }
    }
    function I(e, n) {
      var r = n.method,
        a = e.iterator[r]
      if (a === t)
        return (
          (n.delegate = null),
          ('throw' === r &&
            e.iterator.return &&
            ((n.method = 'return'), (n.arg = t), I(e, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'),
              (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          m
        )
      var i = f(a, e.iterator, n.arg)
      if ('throw' === i.type) return ((n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), m)
      var o = i.arg
      return o
        ? o.done
          ? ((n[e.resultName] = o.value),
            (n.next = e.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
            (n.delegate = null),
            m)
          : o
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          m)
    }
    function E(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function P(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function U(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(E, this), this.reset(!0))
    }
    function D(n) {
      if (n || '' === n) {
        var r = n[c]
        if (r) return r.call(n)
        if ('function' == typeof n.next) return n
        if (!isNaN(n.length)) {
          var a = -1,
            o = function e() {
              for (; ++a < n.length; ) if (i.call(n, a)) return ((e.value = n[a]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (o.next = o)
        }
      }
      throw new TypeError(e(n) + ' is not iterable')
    }
    return (
      (x.prototype = L),
      o(_, 'constructor', { value: L, configurable: !0 }),
      o(L, 'constructor', { value: x, configurable: !0 }),
      (x.displayName = p(L, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === x || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, L)
            : ((e.__proto__ = L), p(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(_)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      S(j.prototype),
      p(j.prototype, l, function () {
        return this
      }),
      (n.AsyncIterator = j),
      (n.async = function (e, t, r, a, i) {
        void 0 === i && (i = Promise)
        var o = new j(d(e, t, r, a), i)
        return n.isGeneratorFunction(t)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next()
            })
      }),
      S(_),
      p(_, s, 'Generator'),
      p(_, c, function () {
        return this
      }),
      p(_, 'toString', function () {
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
      (n.values = D),
      (U.prototype = {
        constructor: U,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var n in this)
              't' === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
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
              (u.type = 'throw'),
              (u.arg = e),
              (n.next = r),
              a && ((n.method = 'next'), (n.arg = t)),
              !!a
            )
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var o = this.tryEntries[a],
              u = o.completion
            if ('root' === o.tryLoc) return r('end')
            if (o.tryLoc <= this.prev) {
              var c = i.call(o, 'catchLoc'),
                l = i.call(o, 'finallyLoc')
              if (c && l) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
              } else if (c) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n]
            if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
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
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), m) : this.complete(o)
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
            m
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), P(n), m)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var r = n.completion
              if ('throw' === r.type) {
                var a = r.arg
                P(n)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: D(e), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = t),
            m
          )
        }
      }),
      n
    )
  }
  function i(e, t, n, r, a, i, o) {
    try {
      var u = e[i](o),
        c = u.value
    } catch (l) {
      return void n(l)
    }
    u.done ? t(c) : Promise.resolve(c).then(r, a)
  }
  function o(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (r, a) {
        var o = e.apply(t, n)
        function u(e) {
          i(o, r, a, u, c, 'next', e)
        }
        function c(e) {
          i(o, r, a, u, c, 'throw', e)
        }
        u(void 0)
      })
    }
  }
  System.register(
    [
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './index-legacy-31ac821a.js',
      './index-legacy-62a49047.js',
      './vue-legacy-7e5c1e5b.js',
      './useTableHeightFit-legacy-f881449c.js',
      './InstanceStatusTag-legacy-85e0aeb6.js',
      './selected-instances-legacy-4005c800.js',
      './permission-legacy-825f1a25.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, t) {
      'use strict'
      var r,
        i,
        u,
        c,
        l,
        s,
        p,
        d,
        f,
        v,
        y,
        g,
        h,
        m,
        b,
        x,
        L,
        k,
        w,
        C,
        _,
        S,
        j,
        O,
        I,
        E,
        P,
        U,
        D,
        T,
        F,
        N,
        M,
        z,
        G,
        A,
        B,
        R,
        V,
        H,
        q,
        K,
        W,
        J,
        Y,
        Z
      return {
        setters: [
          function (e) {
            ;((r = e.h), (i = e.f), (u = e.m), (c = e.n), (l = e._))
          },
          function (e) {
            ;((s = e.e), (p = e.x), (d = e.k), (f = e.E), (v = e.G))
          },
          function (e) {
            ;((y = e.g),
              (g = e.q),
              (h = e.i),
              (m = e.a),
              (b = e.b),
              (x = e.r),
              (L = e.e),
              (k = e.c))
          },
          function (e) {
            w = e.g
          },
          function (e) {
            ;((C = e.y),
              (_ = e.aq),
              (S = e.at),
              (j = e.r),
              (O = e.n),
              (I = e.b),
              (E = e.Q),
              (P = e.e),
              (U = e.a8),
              (D = e.ag),
              (T = e.f),
              (F = e.h),
              (N = e.N),
              (M = e.H),
              (z = e.u),
              (G = e.L),
              (A = e.M),
              (B = e.G),
              (R = e.K),
              (V = e.i),
              (H = e.I),
              (q = e.ay),
              (K = e.a7))
          },
          function (e) {
            W = e.u
          },
          function (e) {
            J = e.I
          },
          function (e) {
            Y = e.u
          },
          function (e) {
            Z = e.c
          },
          null
        ],
        execute: function () {
          var Q = document.createElement('style')
          ;((Q.textContent =
            '.card-manager[data-v-40f31878]{padding:20px;position:relative}.operation-column[data-v-40f31878]{z-index:1000;position:relative;background:white}.pad-code-link[data-v-40f31878]{color:#409eff;text-decoration:underline;cursor:pointer}.popover-group[data-v-40f31878]{border-radius:4px;border:1px solid #ebeef5;overflow:hidden;margin-bottom:10px}.popover-group-title[data-v-40f31878]{background-color:#f5f7fa;color:#909399;padding:8px 12px;font-size:12px;border-bottom:1px solid #ebeef5}.popover-group-content[data-v-40f31878]{padding:10px;display:flex;flex-direction:column;gap:8px;width:150px}.popover-group-content .el-button[data-v-40f31878]{margin:0!important}\n'),
            document.head.appendChild(Q))
          var X = { class: 'card-manager' },
            $ = { style: { display: 'flex', 'justify-content': 'space-around', gap: '10px' } },
            ee = {
              style: { display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }
            },
            te = { class: 'popover-group' },
            ne = { class: 'popover-group-title' },
            re = { class: 'popover-group-content' },
            ae = { class: 'popover-group' },
            ie = { class: 'popover-group-title' },
            oe = { class: 'popover-group-content' },
            ue = {
              style: { display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }
            },
            ce = { class: 'popover-group' },
            le = { class: 'popover-group-title' },
            se = { class: 'popover-group-content' },
            pe = { class: 'popover-group' },
            de = { class: 'popover-group-title' },
            fe = { class: 'popover-group-content' },
            ve = ['onClick'],
            ye = { class: 'pad-code-link', style: { 'text-decoration': 'none' } },
            ge = C({
              __name: 'InstanceList',
              setup: function (e) {
                var l = W(),
                  C = l.cTable,
                  Q = l.maxHeight,
                  ge = l.handleGetTableHeight,
                  he = r().t,
                  me = _(),
                  be = i(),
                  xe = S(be),
                  Le = xe.userInfo,
                  ke = (xe.roles, Y()),
                  we = q(function () {
                    return c(
                      function () {
                        return t.import('./SetInstanceProxyDialog-legacy-75cb7632.js')
                      },
                      void 0
                    )
                  }),
                  Ce = q(function () {
                    return c(
                      function () {
                        return t.import('./PadDetailDrawer-legacy-92ee0b46.js')
                      },
                      void 0
                    )
                  }),
                  _e = q(function () {
                    return c(
                      function () {
                        return t.import('./ConnectCloudHost-legacy-5a2948c7.js')
                      },
                      void 0
                    )
                  }),
                  Se = q(function () {
                    return c(
                      function () {
                        return t.import('./ModifyAndroidProps-legacy-48a6c383.js')
                      },
                      void 0
                    )
                  }),
                  je = q(function () {
                    return c(
                      function () {
                        return t.import('./ModifyStaticAndroidProps-legacy-5b0947ad.js')
                      },
                      void 0
                    )
                  }),
                  Oe = q(function () {
                    return c(
                      function () {
                        return t.import('./ViewPropertiesDrawer-legacy-f0fa10c6.js')
                      },
                      void 0
                    )
                  }),
                  Ie = q(function () {
                    return c(
                      function () {
                        return t.import('./BatchUpdateTimeZoneDialog-legacy-e0771bd4.js')
                      },
                      void 0
                    )
                  }),
                  Ee = q(function () {
                    return c(
                      function () {
                        return t.import('./BatchUpdateLanguageDialog-legacy-6f92192e.js')
                      },
                      void 0
                    )
                  }),
                  Pe = q(function () {
                    return c(
                      function () {
                        return t.import('./BatchUpdateGpsDialog-legacy-bff13811.js')
                      },
                      void 0
                    )
                  }),
                  Ue = q(function () {
                    return c(
                      function () {
                        return t.import('./BatchInstanceOpenDialog-legacy-18d91f3a.js')
                      },
                      void 0
                    )
                  }),
                  De = q(function () {
                    return c(
                      function () {
                        return t.import('./ModifyGroupDialog-legacy-9a2123db.js')
                      },
                      void 0
                    )
                  }),
                  Te = q(function () {
                    return c(
                      function () {
                        return t.import('./ModifyRemarkDialog-legacy-f64ceddb.js')
                      },
                      void 0
                    )
                  }),
                  Fe = q(function () {
                    return c(
                      function () {
                        return t.import('./BatchModifyGroupDialog-legacy-fa895436.js')
                      },
                      void 0
                    )
                  }),
                  Ne = q(function () {
                    return c(
                      function () {
                        return t.import('./UploadFileDrawer-legacy-3f41db90.js')
                      },
                      void 0
                    )
                  }),
                  Me = q(function () {
                    return c(
                      function () {
                        return t.import('./ExecuteAdbCommandDialog-legacy-07616204.js')
                      },
                      void 0
                    )
                  }),
                  ze = q(function () {
                    return c(
                      function () {
                        return t.import('./AdbConnectionInfoDialog-legacy-18be7a5e.js')
                      },
                      void 0
                    )
                  }),
                  Ge = q(function () {
                    return c(
                      function () {
                        return t.import('./ConditionalDeleteDrawer-legacy-4332d8cb.js')
                      },
                      void 0
                    )
                  }),
                  Ae = q(function () {
                    return c(
                      function () {
                        return t.import('./BatchUpgradeRealImageDialog-legacy-4263d855.js')
                      },
                      void 0
                    )
                  }),
                  Be = q(function () {
                    return c(
                      function () {
                        return t.import('./ClusterWindowsDialog-legacy-3e9dcaeb.js')
                      },
                      void 0
                    )
                  }),
                  Re = j([]),
                  Ve = j(!1),
                  He = j([]),
                  qe = j([]),
                  Ke = j([]),
                  We = j([]),
                  Je = j(!1),
                  Ye = j(!1),
                  Ze = j(!1),
                  Qe = j(!1),
                  Xe = j(!1),
                  $e = j(!1),
                  et = j(!1),
                  tt = j(''),
                  nt = function () {
                    0 !== We.value.length
                      ? ($e.value = !0)
                      : f.warning(he('instanceList.selectAtLeastOneInstance'))
                  },
                  rt = function () {
                    O(function () {
                      var e
                      null === (e = C.value) || void 0 === e || e.setScrollTop(0)
                    })
                  },
                  at = j({ page: 1, pageSize: 10, total: 0 }),
                  it = j(''),
                  ot = j('')
                j(null)
                var ut = j({}),
                  ct = j(''),
                  lt = j(''),
                  st = j(0),
                  pt = function () {
                    ;((it.value = ''), (ot.value = ''), (lt.value = ''), (at.value.page = 1), _t())
                  },
                  dt = function (e) {
                    ;((at.value.page = 1),
                      (it.value = ''),
                      'group' in e &&
                        ((ut.value.local_group_uuid = e.group.length > 0 ? e.group[0] : ''),
                        (ct.value = ''),
                        (lt.value = ''),
                        C.value && C.value.clearFilter(['padStatus', 'subCustomer'])),
                      'padStatus' in e &&
                        ((ct.value = e.padStatus.length > 0 ? e.padStatus[0] : ''),
                        (ut.value.local_group_uuid = ''),
                        (lt.value = ''),
                        C.value && C.value.clearFilter(['group'])),
                      'subCustomer' in e &&
                        ((lt.value = e.subCustomer.length > 0 ? e.subCustomer[0] : ''),
                        (ut.value.local_group_uuid = ''),
                        (ct.value = ''),
                        C.value && C.value.clearFilter(['group'])),
                      _t())
                  },
                  ft = s(function () {
                    ;((at.value.page = 1),
                      (ot.value = ''),
                      (ut.value.local_group_uuid = ''),
                      C.value && C.value.clearFilter(['group']),
                      _t())
                  }, 1e3),
                  vt = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), w())
                                case 3:
                                  ;((t = e.sent),
                                    (He.value = t.map(function (e) {
                                      return { text: e.name, value: e.uuid, uuid: e.uuid }
                                    })),
                                    (e.next = 10))
                                  break
                                case 7:
                                  ;((e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error('获取分组列表失败:', e.t0))
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
                  yt = j(!1),
                  gt = j({}),
                  ht = j(!1),
                  mt = j(''),
                  bt = j(!1),
                  xt = j(!1),
                  Lt = j(''),
                  kt = j(!1),
                  wt = j(''),
                  Ct = j(!1),
                  _t = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t, r, i, o, u, c, l, s
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((Ve.value = !0), (Re.value = []), (e.next = 4), O())
                                case 4:
                                  if (
                                    ((e.prev = 4),
                                    (t = Object.values(ut.value).some(function (e) {
                                      return '' !== e && null != e
                                    })),
                                    (r = {
                                      page: at.value.page,
                                      rows: at.value.pageSize,
                                      groupIds: [Le.value.group_id]
                                    }),
                                    (i = {}),
                                    !t)
                                  ) {
                                    e.next = 18
                                    break
                                  }
                                  return (
                                    (e.next = 11),
                                    y(
                                      n(
                                        n({}, ut.value),
                                        {},
                                        { page: at.value.page, page_size: at.value.pageSize }
                                      )
                                    )
                                  )
                                case 11:
                                  if (0 !== (i = e.sent).total) {
                                    e.next = 17
                                    break
                                  }
                                  return (
                                    (Re.value = []),
                                    (at.value.total = 0),
                                    (Ve.value = !1),
                                    e.abrupt('return')
                                  )
                                case 17:
                                  r.page = 1
                                case 18:
                                  return (
                                    it.value
                                      ? ((o = it.value
                                          .split(',')
                                          .map(function (e) {
                                            return e.trim()
                                          })
                                          .filter(function (e) {
                                            return '' !== e
                                          })),
                                        (r.padCodes = o))
                                      : t &&
                                        (r.padCodes = i.instances.map(function (e) {
                                          return e.instance_id
                                        })),
                                    ct.value && (r.padStatus = ct.value),
                                    lt.value && (r.filterSubCustomerFlag = lt.value),
                                    (e.next = 23),
                                    g(r)
                                  )
                                case 23:
                                  if (((u = e.sent), (e.prev = 24), !t)) {
                                    e.next = 34
                                    break
                                  }
                                  ;((c = Object.fromEntries(
                                    i.instances.map(function (e) {
                                      return [
                                        e.instance_id,
                                        n(
                                          n({}, e),
                                          {},
                                          {
                                            proxy_info:
                                              e.proxy_info && e.proxy_info.startsWith('{')
                                                ? JSON.parse(e.proxy_info)
                                                : {}
                                          }
                                        )
                                      ]
                                    })
                                  )),
                                    u.data.pageData.forEach(function (e) {
                                      c[e.padCode] && (e.record = c[e.padCode])
                                    }),
                                    (Re.value = u.data.pageData),
                                    (at.value.total = i.total),
                                    rt(),
                                    (Ve.value = !1),
                                    (e.next = 49))
                                  break
                                case 34:
                                  return (
                                    (e.prev = 34),
                                    (e.next = 37),
                                    y({
                                      instance_ids: u.data.pageData
                                        ? u.data.pageData.map(function (e) {
                                            return e.padCode
                                          })
                                        : []
                                    })
                                  )
                                case 37:
                                  ;((l = e.sent),
                                    (s = Object.fromEntries(
                                      l.instances.map(function (e) {
                                        return [
                                          e.instance_id,
                                          n(
                                            n({}, e),
                                            {},
                                            {
                                              proxy_info: e.proxy_info
                                                ? JSON.parse(e.proxy_info)
                                                : {}
                                            }
                                          )
                                        ]
                                      })
                                    )),
                                    u.data.pageData.forEach(function (e) {
                                      s[e.padCode] && (e.record = s[e.padCode])
                                    }),
                                    (Re.value = u.data.pageData),
                                    (e.next = 46))
                                  break
                                case 43:
                                  ;((e.prev = 43),
                                    (e.t0 = e.catch(34)),
                                    (Re.value = u.data.pageData))
                                case 46:
                                  ;((at.value.total = u.data.total), rt(), (Ve.value = !1))
                                case 49:
                                  e.next = 53
                                  break
                                case 51:
                                  ;((e.prev = 51), (e.t1 = e.catch(24)))
                                case 53:
                                  e.next = 58
                                  break
                                case 55:
                                  ;((e.prev = 55), (e.t2 = e.catch(4)), console.error(e.t2))
                                case 58:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [
                            [4, 55],
                            [24, 51],
                            [34, 43]
                          ]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  St = function (e) {
                    ;(st.value++, (at.value.page = e), _t())
                  }
                ;(I(function () {
                  ;(_t(),
                    vt(),
                    (qe.value = [
                      { text: he('instanceList.running'), value: 10 },
                      { text: he('instanceList.restarting'), value: 11 },
                      { text: he('instanceList.resetting'), value: 12 },
                      { text: he('instanceList.upgrading'), value: 13 },
                      { text: he('instanceList.abnormal'), value: 14 },
                      { text: he('instanceList.notReady'), value: 15 },
                      { text: he('instanceList.backingUp'), value: 16 },
                      { text: he('instanceList.recoveringData'), value: 17 },
                      { text: he('instanceList.shutdown'), value: 18 },
                      { text: he('instanceList.shuttingDown'), value: 19 },
                      { text: he('instanceList.startingUp'), value: 20 },
                      { text: he('instanceList.shutdownFailed'), value: 21 },
                      { text: he('instanceList.startupFailed'), value: 22 }
                    ]),
                    (Ke.value = [
                      { text: he('instanceList.queryAllAccounts'), value: 0 },
                      { text: he('instanceList.queryMasterAccountOnly'), value: 1 },
                      { text: he('instanceList.querySubAccountOnly'), value: -1 }
                    ]),
                    window.addEventListener('resize', ge, !0),
                    ge())
                }),
                  E(function () {
                    window.removeEventListener('resize', ge, !0)
                  }))
                var jt = function () {
                    me.push('/createInstance')
                  },
                  Ot = function (e) {
                    ;((mt.value = e), (ht.value = !0))
                  },
                  It = function () {
                    0 !== We.value.length
                      ? ((Ct.value = !0), (Xe.value = !0))
                      : f.warning(he('instanceList.selectInstanceFirst'))
                  },
                  Et = j(!1),
                  Pt = (function () {
                    var e = o(
                      a().mark(function e() {
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (0 !== We.value.length) {
                                  e.next = 3
                                  break
                                }
                                return (
                                  f.warning(he('instanceList.selectInstanceFirst')),
                                  e.abrupt('return')
                                )
                              case 3:
                                Xt.value = !0
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
                  Ut = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (0 !== We.value.length) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    f.warning(he('instanceList.selectInstanceFirst')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (t = We.value
                                      .map(function (e) {
                                        return e.padCode
                                      })
                                      .join(',')),
                                    (e.prev = 4),
                                    (e.next = 7),
                                    u(t)
                                  )
                                case 7:
                                  ;(f.success(he('instanceList.copyCodesSuccess')), (e.next = 14))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(4)),
                                    console.error(e.t0),
                                    f.error(he('instanceList.copyCodesFailed')))
                                case 14:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 10]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  Dt = function () {
                    ;(f.success(he('instanceList.operationSuccess')), _t())
                  },
                  Tt = (function () {
                    var e = o(
                      a().mark(function e(n) {
                        var r, i
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  c(
                                    function () {
                                      return t.import('./securityCode-legacy-aef971db.js')
                                    },
                                    void 0
                                  )
                                )
                              case 2:
                                return (
                                  (r = e.sent),
                                  (i = r.verifySecurityCode),
                                  (e.next = 6),
                                  i(he)
                                )
                              case 6:
                                if (e.sent) {
                                  e.next = 10
                                  break
                                }
                                return (
                                  f.info(he('instanceList.securityCodeNotVerified')),
                                  e.abrupt('return')
                                )
                              case 10:
                                v.confirm(
                                  he('instanceList.confirmDelete'),
                                  he('instanceList.confirmOperation'),
                                  {
                                    confirmButtonText: he('instanceList.confirm'),
                                    cancelButtonText: he('instanceList.cancel'),
                                    type: 'warning'
                                  }
                                )
                                  .then(
                                    o(
                                      a().mark(function e() {
                                        var t, r
                                        return a().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.prev = 0),
                                                    (e.next = 3),
                                                    b({ padCodes: [n] })
                                                  )
                                                case 3:
                                                  return (
                                                    (r = e.sent),
                                                    (e.next = 6),
                                                    x({ instance_ids: [n] })
                                                  )
                                                case 6:
                                                  ;(r.data.failList && r.data.failList.length > 0
                                                    ? f({
                                                        message: K(
                                                          'div',
                                                          { style: 'text-align: left;' },
                                                          r.data.failList.map(function (e) {
                                                            return K(
                                                              'div',
                                                              {
                                                                style:
                                                                  'color: red; margin-bottom: 4px;'
                                                              },
                                                              ''
                                                                .concat(e.padCode, ': ')
                                                                .concat(e.errMsg)
                                                            )
                                                          })
                                                        ),
                                                        type: 'error',
                                                        duration: 5e3
                                                      })
                                                    : (f.success(he('instanceList.deleteSuccess')),
                                                      (Re.value = Re.value.filter(function (e) {
                                                        return e.padCode !== n
                                                      }))),
                                                    _t(),
                                                    null === (t = C.value) ||
                                                      void 0 === t ||
                                                      t.clearSelection(),
                                                    (e.next = 15))
                                                  break
                                                case 11:
                                                  ;((e.prev = 11),
                                                    (e.t0 = e.catch(0)),
                                                    console.error(e.t0),
                                                    f.error(he('instanceList.deleteFailed')))
                                                case 15:
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
                                  )
                                  .catch(function () {
                                    f.info(he('instanceList.operationCancelled'))
                                  })
                              case 11:
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
                  Ft = function (e) {
                    We.value = e
                  },
                  Nt = (function () {
                    var e = o(
                      a().mark(function e() {
                        var n, r
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  c(
                                    function () {
                                      return t.import('./securityCode-legacy-aef971db.js')
                                    },
                                    void 0
                                  )
                                )
                              case 2:
                                return (
                                  (n = e.sent),
                                  (r = n.verifySecurityCode),
                                  (e.next = 6),
                                  r(he)
                                )
                              case 6:
                                if (e.sent) {
                                  e.next = 10
                                  break
                                }
                                return (f.info('安全码验证未通过，已取消操作'), e.abrupt('return'))
                              case 10:
                                bt.value = !0
                              case 11:
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
                  Mt = (function () {
                    var e = o(
                      a().mark(function e(n) {
                        var r, i, u, l
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (0 !== We.value.length) {
                                  e.next = 3
                                  break
                                }
                                return (f.warning('请先选择实例'), e.abrupt('return'))
                              case 3:
                                ;((r = We.value.map(function (e) {
                                  return e.padCode
                                })),
                                  (e.t0 = n),
                                  (e.next =
                                    'open' === e.t0
                                      ? 7
                                      : 'off' === e.t0
                                        ? 9
                                        : 'delete' === e.t0
                                          ? 11
                                          : 'restart' === e.t0
                                            ? 13
                                            : 15))
                                break
                              case 7:
                                return ((i = k), e.abrupt('break', 15))
                              case 9:
                                return ((i = m), e.abrupt('break', 15))
                              case 11:
                                return ((i = b), e.abrupt('break', 15))
                              case 13:
                                return ((i = h), e.abrupt('break', 15))
                              case 15:
                                if ('delete' !== n) {
                                  e.next = 26
                                  break
                                }
                                return (
                                  (e.next = 18),
                                  c(
                                    function () {
                                      return t.import('./securityCode-legacy-aef971db.js')
                                    },
                                    void 0
                                  )
                                )
                              case 18:
                                return (
                                  (u = e.sent),
                                  (l = u.verifySecurityCode),
                                  (e.next = 22),
                                  l(he)
                                )
                              case 22:
                                if (e.sent) {
                                  e.next = 26
                                  break
                                }
                                return (
                                  f.info(he('instanceList.securityCodeNotVerified')),
                                  e.abrupt('return')
                                )
                              case 26:
                                v.confirm(
                                  he('instanceList.confirmBatchOperation', {
                                    operation: he('instanceList.'.concat(n)),
                                    instances: r.join(' ， ')
                                  }),
                                  he('instanceList.confirmOperation'),
                                  {
                                    confirmButtonText: he('instanceList.confirm'),
                                    cancelButtonText: he('instanceList.cancel'),
                                    type: 'warning'
                                  }
                                )
                                  .then(
                                    o(
                                      a().mark(function e() {
                                        var t, o
                                        return a().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.prev = 0),
                                                    (e.next = 3),
                                                    i({ padCodes: r })
                                                  )
                                                case 3:
                                                  if (((o = e.sent), 'delete' !== n)) {
                                                    e.next = 7
                                                    break
                                                  }
                                                  return ((e.next = 7), x({ instance_ids: r }))
                                                case 7:
                                                  ;(o.data.failList && o.data.failList.length > 0
                                                    ? f({
                                                        message: K(
                                                          'div',
                                                          { style: 'text-align: left;' },
                                                          o.data.failList.map(function (e) {
                                                            return K(
                                                              'div',
                                                              {
                                                                style:
                                                                  'color: red; margin-bottom: 4px;'
                                                              },
                                                              ''
                                                                .concat(e.padCode, ': ')
                                                                .concat(e.errMsg)
                                                            )
                                                          })
                                                        ),
                                                        type: 'error',
                                                        duration: 5e3
                                                      })
                                                    : f.success(
                                                        he('instanceList.batchOperationSuccess', {
                                                          operation: he('instanceList.'.concat(n))
                                                        })
                                                      ),
                                                    _t(),
                                                    null === (t = C.value) ||
                                                      void 0 === t ||
                                                      t.clearSelection(),
                                                    (e.next = 16))
                                                  break
                                                case 12:
                                                  ;((e.prev = 12),
                                                    (e.t0 = e.catch(0)),
                                                    console.error(e.t0),
                                                    f.error(
                                                      he('instanceList.batchOperationFailed', {
                                                        operation: he('instanceList.'.concat(n))
                                                      })
                                                    ))
                                                case 16:
                                                case 'end':
                                                  return e.stop()
                                              }
                                          },
                                          e,
                                          null,
                                          [[0, 12]]
                                        )
                                      })
                                    )
                                  )
                                  .catch(function () {
                                    f.info(he('instanceList.operationCancelled'))
                                  })
                              case 27:
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
                  zt = j(!1),
                  Gt = function () {
                    0 !== We.value.length ? (zt.value = !0) : f.warning('请先选择实例')
                  },
                  At = j(!1),
                  Bt = function () {
                    0 !== We.value.length ? (At.value = !0) : f.warning('请先选择实例')
                  },
                  Rt = j(!1),
                  Vt = function () {
                    0 !== We.value.length ? (Rt.value = !0) : f.warning('请先选择实例')
                  },
                  Ht = j(!1),
                  qt = function () {
                    0 !== We.value.length
                      ? (Ht.value = !0)
                      : f.warning(he('instanceList.selectInstanceFirst'))
                  },
                  Kt = j(!1),
                  Wt = j([]),
                  Jt = j(!1),
                  Yt = function () {
                    0 !== We.value.length
                      ? (Jt.value = !0)
                      : f.warning(he('instanceList.selectInstanceFirst'))
                  },
                  Zt = j(!1),
                  Qt = function () {
                    0 !== We.value.length
                      ? (Zt.value = !0)
                      : f.warning(he('instanceList.selectInstanceFirst'))
                  },
                  Xt = j(!1),
                  $t = j(!1),
                  en = P(function () {
                    return (
                      We.value.length > 0 &&
                      We.value.every(function (e) {
                        return 10 == e.padStatus
                      })
                    )
                  }),
                  tn = function () {
                    if (en.value) {
                      var e = We.value.map(function (e) {
                        return e.padCode
                      })
                      ;(ke.setSelectedPadCodes(e), me.push('/clusterControl'))
                    } else f.warning(he('instanceList.selectRunningInstances'))
                  },
                  nn = function () {
                    en.value
                      ? ($t.value = !0)
                      : f.warning(he('instanceList.selectRunningInstances'))
                  },
                  rn = function (e) {
                    var t,
                      n,
                      r = e.mode,
                      a = e.count,
                      i = e.instances
                    1 === r
                      ? ((t = a),
                        (n = We.value.map(function (e) {
                          return e.padCode
                        })),
                        un(n.slice(0, t), t))
                      : 2 === r && an(i)
                  },
                  an = function (e) {
                    e.map(function (e) {
                      return e.padCode
                    }).forEach(function (e, t) {
                      on(e, 30 * t)
                    })
                  },
                  on = function (e, t) {
                    var n = '/#/mobile/connect/'.concat(e),
                      r = 'width=800,height=600,left='
                        .concat(t, ',top=')
                        .concat(
                          t,
                          ',toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no'
                        )
                    window.open(n, '_blank_'.concat(e), r)
                  },
                  un = function (e, t) {
                    var n = cn(),
                      r = ln(n, t),
                      a = 0
                    !(function t() {
                      if (a < e.length) {
                        var n = e[a],
                          i = r[a]
                        ;(sn(n, i), a++, setTimeout(t, 100))
                      }
                    })()
                  },
                  cn = function () {
                    return { width: window.screen.availWidth, height: window.screen.availHeight }
                  },
                  ln = function (e, t) {
                    var n, r
                    t <= 2
                      ? ((n = 1), (r = 2))
                      : t <= 4
                        ? ((n = 2), (r = 2))
                        : t <= 6
                          ? ((n = 2), (r = 3))
                          : t <= 8
                            ? ((n = 2), (r = 4))
                            : ((n = 2), (r = 5))
                    for (
                      var a = Math.floor(e.width / r), i = Math.floor(e.height / n), o = [], u = 0;
                      u < t;
                      u++
                    ) {
                      var c = Math.floor(u / r),
                        l = u % r
                      o.push({ x: l * a, y: c * i + 80 * c, width: a - 20, height: i - 80 })
                    }
                    return o
                  },
                  sn = function (e, t) {
                    var n = '/#/mobile/connect/'.concat(e),
                      r = 'width='
                        .concat(t.width, ',height=')
                        .concat(t.height, ',left=')
                        .concat(t.x, ',top=')
                        .concat(
                          t.y,
                          ',fullscreen=yes,toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no'
                        )
                    window.open(n, '_blank_'.concat(e), r)
                  },
                  pn = (function () {
                    var e = o(
                      a().mark(function e() {
                        var t, n
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (0 !== We.value.length) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    f.warning(he('instanceList.selectAtLeastOneInstance')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (t = We.value.map(function (e) {
                                      return e.padCode
                                    })),
                                    (e.prev = 4),
                                    (n = {
                                      padCodes: t,
                                      scriptContent:
                                        'cmd settings2 put global navigationbar_switch on'
                                    }),
                                    (e.next = 8),
                                    L(n)
                                  )
                                case 8:
                                  ;(f.success(he('instanceList.enableThreeKeyNavigationSuccess')),
                                    _t(),
                                    (e.next = 16))
                                  break
                                case 12:
                                  ;((e.prev = 12),
                                    (e.t0 = e.catch(4)),
                                    console.error('开启三键导航失败:', e.t0),
                                    f.error(he('instanceList.enableThreeKeyNavigationFailed')))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 12]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (e, t) {
                  var n = U('el-button'),
                    r = U('el-input'),
                    i = U('el-popover'),
                    u = U('PageBanner'),
                    c = U('el-table-column'),
                    l = U('el-icon'),
                    s = U('el-tag'),
                    y = U('el-dropdown-item'),
                    g = U('el-dropdown-menu'),
                    b = U('el-dropdown'),
                    x = U('el-table'),
                    L = U('el-pagination'),
                    k = D('loading')
                  return (
                    T(),
                    F('div', X, [
                      N(
                        u,
                        { title: '' },
                        {
                          extra: M(function () {
                            return [
                              N(
                                r,
                                {
                                  modelValue: it.value,
                                  'onUpdate:modelValue':
                                    t[0] ||
                                    (t[0] = function (e) {
                                      return (it.value = e)
                                    }),
                                  placeholder: z(he)('instanceList.searchPlaceholder'),
                                  style: { width: '450px', 'margin-right': '10px' },
                                  onInput: z(ft)
                                },
                                {
                                  append: M(function () {
                                    return [
                                      N(
                                        n,
                                        { onClick: pt },
                                        {
                                          default: M(function () {
                                            return [G(A(z(he)('instanceList.clearSearch')), 1)]
                                          }),
                                          _: 1
                                        }
                                      )
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['modelValue', 'placeholder', 'onInput']
                              ),
                              N(
                                n,
                                {
                                  'ml-2': '',
                                  icon: 'RefreshRight',
                                  onClick:
                                    t[1] ||
                                    (t[1] = function () {
                                      ;(st.value++, _t())
                                    })
                                },
                                {
                                  default: M(function () {
                                    return [G(A(z(he)('instanceList.refresh')), 1)]
                                  }),
                                  _: 1
                                }
                              ),
                              z(Z)(['instance:create'])
                                ? (T(),
                                  B(
                                    n,
                                    { key: 0, icon: 'Plus', type: 'primary', onClick: jt },
                                    {
                                      default: M(function () {
                                        return [G(A(z(he)('instanceList.createInstance')), 1)]
                                      }),
                                      _: 1
                                    }
                                  ))
                                : R('', !0),
                              N(
                                i,
                                { placement: 'bottom', trigger: 'hover', width: 'auto' },
                                {
                                  reference: M(function () {
                                    return [
                                      N(
                                        n,
                                        { icon: 'arrow-down', type: 'primary' },
                                        {
                                          default: M(function () {
                                            return [G(A(z(he)('instanceList.batchOperations')), 1)]
                                          }),
                                          _: 1
                                        }
                                      )
                                    ]
                                  }),
                                  default: M(function () {
                                    return [
                                      V('div', $, [
                                        V('div', ee, [
                                          V('div', te, [
                                            V('div', ne, A(z(he)('instanceList.appOperations')), 1),
                                            V('div', re, [
                                              N(
                                                n,
                                                { link: '', type: 'success', onClick: qt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchStartup')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                {
                                                  link: '',
                                                  type: 'warning',
                                                  onClick:
                                                    t[2] ||
                                                    (t[2] = function (e) {
                                                      return Mt('off')
                                                    })
                                                },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchShutdown')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                {
                                                  link: '',
                                                  type: 'primary',
                                                  onClick:
                                                    t[3] ||
                                                    (t[3] = function (e) {
                                                      return Mt('restart')
                                                    })
                                                },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchRestart')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                {
                                                  link: '',
                                                  type: 'danger',
                                                  onClick:
                                                    t[4] ||
                                                    (t[4] = function (e) {
                                                      return Mt('delete')
                                                    })
                                                },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchDelete')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'danger', onClick: Nt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(z(he)('instanceList.conditionalDelete')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              )
                                            ])
                                          ]),
                                          V('div', ae, [
                                            V('div', ie, A(z(he)('instanceList.businessData')), 1),
                                            V('div', oe, [
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Qt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(z(he)('instanceList.batchModifyGroup')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: It },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(z(he)('instanceList.batchModifyRemark')),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Pt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(
                                                          z(he)(
                                                            'instanceList.batchUpgradeRealImage'
                                                          )
                                                        ),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Ut },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchCopyCodes')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              )
                                            ])
                                          ])
                                        ]),
                                        V('div', ue, [
                                          V('div', ce, [
                                            V('div', le, A(z(he)('instanceList.systemNetwork')), 1),
                                            V('div', se, [
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Gt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(
                                                          z(he)('instanceList.batchUpdateTimeZone')
                                                        ),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Bt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(
                                                          z(he)('instanceList.batchUpdateLanguage')
                                                        ),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Vt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchUpdateGps')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: Yt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(A(z(he)('instanceList.batchSetProxy')), 1)
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              ),
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: pn },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(
                                                          z(he)(
                                                            'instanceList.enableThreeKeyNavigation'
                                                          )
                                                        ),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              )
                                            ])
                                          ]),
                                          V('div', pe, [
                                            V(
                                              'div',
                                              de,
                                              A(z(he)('instanceList.scriptAutomation')),
                                              1
                                            ),
                                            V('div', fe, [
                                              N(
                                                n,
                                                { link: '', type: 'primary', onClick: nt },
                                                {
                                                  default: M(function () {
                                                    return [
                                                      G(
                                                        A(
                                                          z(he)(
                                                            'instanceList.batchExecuteAdbCommand'
                                                          )
                                                        ),
                                                        1
                                                      )
                                                    ]
                                                  }),
                                                  _: 1
                                                }
                                              )
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]
                                  }),
                                  _: 1
                                }
                              ),
                              N(
                                n,
                                {
                                  plain: '',
                                  icon: 'Operation',
                                  type: 'primary',
                                  onClick: tn,
                                  disabled: !en.value
                                },
                                {
                                  default: M(function () {
                                    return [G(A(z(he)('instanceList.clusterControl')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['disabled']
                              ),
                              N(
                                n,
                                {
                                  plain: '',
                                  icon: 'FullScreen',
                                  type: 'primary',
                                  onClick: nn,
                                  disabled: !en.value,
                                  style: { 'margin-left': '10px' }
                                },
                                {
                                  default: M(function () {
                                    return [G(A(z(he)('instanceList.clusterWindows')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['disabled']
                              )
                            ]
                          }),
                          _: 1
                        }
                      ),
                      H(
                        (T(),
                        B(
                          x,
                          {
                            data: Re.value,
                            onFilterChange: dt,
                            ref_key: 'cTable',
                            ref: C,
                            'row-key': 'id',
                            style: { width: '100%', 'margin-top': '20px' },
                            'max-height': z(Q),
                            onSelectionChange: Ft
                          },
                          {
                            default: M(function () {
                              return [
                                N(c, { type: 'selection', width: '55' }),
                                N(
                                  c,
                                  {
                                    prop: 'padCode',
                                    label: z(he)('instanceList.instanceInfo'),
                                    width: '300'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t = e.row
                                      return [
                                        V('div', null, [
                                          V('span', null, A(z(he)('instanceList.instanceCode')), 1),
                                          V(
                                            'span',
                                            {
                                              class: 'pad-code-link',
                                              onClick: function (e) {
                                                return Ot(t.padCode)
                                              }
                                            },
                                            A(t.padCode),
                                            9,
                                            ve
                                          ),
                                          N(
                                            l,
                                            {
                                              onClick: function (e) {
                                                return Ot(t.padCode)
                                              },
                                              style: { 'margin-left': '5px' }
                                            },
                                            {
                                              default: M(function () {
                                                return [N(z(p))]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ]),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.instanceSpec')) + A(t.padGrade),
                                          1
                                        ),
                                        V('div', null, [
                                          G(A(z(he)('instanceList.instanceType')) + ' ', 1),
                                          N(
                                            s,
                                            { type: 'real' === t.padType ? 'success' : 'info' },
                                            {
                                              default: M(function () {
                                                return [
                                                  G(
                                                    A(
                                                      'real' === t.padType
                                                        ? z(he)('instanceList.realMachine')
                                                        : z(he)('instanceList.virtualMachine')
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
                                        ]),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.instanceIp')) + A(t.padIp),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.imageVersion')) + A(t.imageVersion),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.imageId')) + A(t.imageId),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                N(
                                  c,
                                  {
                                    prop: 'armServerCode',
                                    label: z(he)('instanceList.externalInfo'),
                                    width: '250'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t = e.row
                                      return [
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.serverCode')) +
                                            A(t.armServerCode || '--'),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.boardCode')) +
                                            A(t.deviceCode || '--'),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.boardIp')) + A(t.deviceIp || '--'),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                N(
                                  c,
                                  {
                                    prop: 'subCustomer',
                                    label: z(he)('instanceList.subCustomer'),
                                    'column-key': 'subCustomer',
                                    filters: Ke.value,
                                    'filter-multiple': !1,
                                    'min-width': '120'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t = e.row
                                      return [
                                        V(
                                          'span',
                                          null,
                                          A(null == t ? void 0 : t.customerAccount),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label', 'filters']
                                ),
                                N(
                                  c,
                                  {
                                    prop: 'padStatus',
                                    label: z(he)('instanceList.instanceStatus'),
                                    'column-key': 'padStatus',
                                    filters: qe.value,
                                    'filter-multiple': !1,
                                    'min-width': '120'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t = e.row
                                      return [N(J, { status: t.padStatus }, null, 8, ['status'])]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label', 'filters']
                                ),
                                N(
                                  c,
                                  {
                                    prop: 'idc',
                                    label: z(he)('instanceList.proxyInfo'),
                                    width: '300'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t,
                                        n,
                                        r,
                                        a,
                                        i = e.row
                                      return [
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.proxyName')) +
                                            A(
                                              (null === (t = i.record) ||
                                              void 0 === t ||
                                              null === (t = t.proxy_info) ||
                                              void 0 === t
                                                ? void 0
                                                : t.name) || '--'
                                            ),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.proxyPort')) +
                                            A(
                                              null === (n = i.record) ||
                                                void 0 === n ||
                                                null === (n = n.proxy_info) ||
                                                void 0 === n
                                                ? void 0
                                                : n.port
                                            ),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.proxyMethod')) +
                                            A(
                                              null === (r = i.record) ||
                                                void 0 === r ||
                                                null === (r = r.proxy_info) ||
                                                void 0 === r
                                                ? void 0
                                                : r.proxyType
                                            ),
                                          1
                                        ),
                                        V(
                                          'div',
                                          null,
                                          A(z(he)('instanceList.proxyType')) +
                                            A(
                                              null === (a = i.record) ||
                                                void 0 === a ||
                                                null === (a = a.proxy_info) ||
                                                void 0 === a
                                                ? void 0
                                                : a.proxyName
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
                                N(
                                  c,
                                  {
                                    prop: 'createTime',
                                    label: z(he)('instanceList.createTime'),
                                    width: '180'
                                  },
                                  null,
                                  8,
                                  ['label']
                                ),
                                N(
                                  c,
                                  {
                                    prop: 'group',
                                    label: z(he)('instanceList.group'),
                                    'column-key': 'group',
                                    filters: He.value,
                                    'filter-multiple': !1,
                                    'min-width': '150',
                                    fixed: 'right'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t,
                                        n = e.row
                                      return [
                                        G(
                                          A(
                                            (null === (t = n.record) || void 0 === t
                                              ? void 0
                                              : t.group_name) || '--'
                                          ),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label', 'filters']
                                ),
                                N(
                                  c,
                                  {
                                    prop: 'note',
                                    label: z(he)('instanceList.remark'),
                                    'min-width': '150',
                                    fixed: 'right'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t,
                                        n = e.row
                                      return [
                                        V(
                                          'span',
                                          ye,
                                          A(
                                            (null === (t = n.record) || void 0 === t
                                              ? void 0
                                              : t.note) || '--'
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
                                N(
                                  c,
                                  {
                                    label: z(he)('instanceList.operations'),
                                    width: '150',
                                    fixed: 'right',
                                    'class-name': 'operation-column'
                                  },
                                  {
                                    default: M(function (e) {
                                      var t = e.row
                                      return [
                                        V('div', null, [
                                          N(
                                            n,
                                            {
                                              type: 'primary',
                                              link: '',
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((gt.value = e), (yt.value = !0))
                                                })(t)
                                              }
                                            },
                                            {
                                              default: M(function () {
                                                return [G(A(z(he)('instanceList.setProxy')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ]),
                                        V('div', null, [
                                          N(
                                            n,
                                            {
                                              type: 'primary',
                                              link: '',
                                              style: { 'margin-right': '5px' },
                                              onClick: function (e) {
                                                return (
                                                  (n = t.padCode),
                                                  void v
                                                    .confirm(
                                                      he('instanceList.confirmRestart'),
                                                      he('instanceList.confirmOperation'),
                                                      {
                                                        confirmButtonText:
                                                          he('instanceList.confirm'),
                                                        cancelButtonText: he('instanceList.cancel'),
                                                        type: 'warning'
                                                      }
                                                    )
                                                    .then(
                                                      o(
                                                        a().mark(function e() {
                                                          var t
                                                          return a().wrap(
                                                            function (e) {
                                                              for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                  case 0:
                                                                    return (
                                                                      (e.prev = 0),
                                                                      (e.next = 3),
                                                                      h({ padCodes: [n] })
                                                                    )
                                                                  case 3:
                                                                    ;((t = e.sent).data.failList &&
                                                                    t.data.failList.length > 0
                                                                      ? f({
                                                                          message: K(
                                                                            'div',
                                                                            {
                                                                              style:
                                                                                'text-align: left;'
                                                                            },
                                                                            t.data.failList.map(
                                                                              function (e) {
                                                                                return K(
                                                                                  'div',
                                                                                  {
                                                                                    style:
                                                                                      'color: red; margin-bottom: 4px;'
                                                                                  },
                                                                                  ''
                                                                                    .concat(
                                                                                      e.padCode,
                                                                                      ': '
                                                                                    )
                                                                                    .concat(
                                                                                      e.errMsg
                                                                                    )
                                                                                )
                                                                              }
                                                                            )
                                                                          ),
                                                                          type: 'error',
                                                                          duration: 5e3
                                                                        })
                                                                      : f.success(
                                                                          he(
                                                                            'instanceList.restartSuccess'
                                                                          )
                                                                        ),
                                                                      _t(),
                                                                      (e.next = 12))
                                                                    break
                                                                  case 8:
                                                                    ;((e.prev = 8),
                                                                      (e.t0 = e.catch(0)),
                                                                      console.error(e.t0),
                                                                      f.error(
                                                                        he(
                                                                          'instanceList.restartFailed'
                                                                        )
                                                                      ))
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
                                                    )
                                                    .catch(function () {
                                                      f.info(he('instanceList.operationCancelled'))
                                                    })
                                                )
                                                var n
                                              }
                                            },
                                            {
                                              default: M(function () {
                                                return [G(A(z(he)('instanceList.restart')), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ]),
                                        V('div', null, [
                                          N(
                                            n,
                                            {
                                              type: 'primary',
                                              link: '',
                                              style: { 'margin-right': '10px' },
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((Lt.value = e.padCode), (xt.value = !0))
                                                })(t)
                                              }
                                            },
                                            {
                                              default: M(function () {
                                                return [
                                                  G(A(z(he)('instanceList.connectCloudHost')), 1)
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ]),
                                        V('div', null, [
                                          N(
                                            b,
                                            null,
                                            {
                                              dropdown: M(function () {
                                                return [
                                                  N(
                                                    g,
                                                    null,
                                                    {
                                                      default: M(function () {
                                                        return [
                                                          10 == t.padStatus
                                                            ? (T(),
                                                              B(
                                                                y,
                                                                {
                                                                  key: 0,
                                                                  onClick: function (e) {
                                                                    return (function (e) {
                                                                      ;((Wt.value = [e]),
                                                                        (Et.value = !0))
                                                                    })(t)
                                                                  }
                                                                },
                                                                {
                                                                  default: M(function () {
                                                                    return [
                                                                      G(
                                                                        A(
                                                                          z(he)(
                                                                            'instanceList.upgradeRealImage'
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
                                                              ))
                                                            : R('', !0),
                                                          10 == t.padStatus
                                                            ? (T(),
                                                              B(
                                                                y,
                                                                {
                                                                  key: 1,
                                                                  onClick: function (e) {
                                                                    return (function (e) {
                                                                      ;((wt.value = e.padCode),
                                                                        (kt.value = !0))
                                                                    })(t)
                                                                  }
                                                                },
                                                                {
                                                                  default: M(function () {
                                                                    return [
                                                                      G(
                                                                        A(
                                                                          z(he)(
                                                                            'instanceList.uploadFile'
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
                                                              ))
                                                            : R('', !0),
                                                          18 == t.padStatus
                                                            ? (T(),
                                                              B(
                                                                y,
                                                                {
                                                                  key: 2,
                                                                  onClick: function (e) {
                                                                    return (
                                                                      (n = t.padCode),
                                                                      (Wt.value = [{ padCode: n }]),
                                                                      void (Kt.value = !0)
                                                                    )
                                                                    var n
                                                                  }
                                                                },
                                                                {
                                                                  default: M(function () {
                                                                    return [
                                                                      G(
                                                                        A(
                                                                          z(he)(
                                                                            'instanceList.startup'
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
                                                              ))
                                                            : R('', !0),
                                                          10 == t.padStatus
                                                            ? (T(),
                                                              B(
                                                                y,
                                                                {
                                                                  key: 3,
                                                                  onClick: function (e) {
                                                                    return (
                                                                      (n = t.padCode),
                                                                      void v
                                                                        .confirm(
                                                                          he(
                                                                            'instanceList.confirmShutdown'
                                                                          ),
                                                                          he(
                                                                            'instanceList.confirmOperation'
                                                                          ),
                                                                          {
                                                                            confirmButtonText:
                                                                              he(
                                                                                'instanceList.confirm'
                                                                              ),
                                                                            cancelButtonText:
                                                                              he(
                                                                                'instanceList.cancel'
                                                                              ),
                                                                            type: 'warning'
                                                                          }
                                                                        )
                                                                        .then(
                                                                          o(
                                                                            a().mark(function e() {
                                                                              var t
                                                                              return a().wrap(
                                                                                function (e) {
                                                                                  for (;;)
                                                                                    switch (
                                                                                      (e.prev =
                                                                                        e.next)
                                                                                    ) {
                                                                                      case 0:
                                                                                        return (
                                                                                          (e.prev = 0),
                                                                                          (e.next = 3),
                                                                                          m({
                                                                                            padCodes:
                                                                                              [n]
                                                                                          })
                                                                                        )
                                                                                      case 3:
                                                                                        ;((t =
                                                                                          e.sent)
                                                                                          .data
                                                                                          .failList &&
                                                                                        t.data
                                                                                          .failList
                                                                                          .length >
                                                                                          0
                                                                                          ? f({
                                                                                              message:
                                                                                                K(
                                                                                                  'div',
                                                                                                  {
                                                                                                    style:
                                                                                                      'text-align: left;'
                                                                                                  },
                                                                                                  t.data.failList.map(
                                                                                                    function (
                                                                                                      e
                                                                                                    ) {
                                                                                                      return K(
                                                                                                        'div',
                                                                                                        {
                                                                                                          style:
                                                                                                            'color: red; margin-bottom: 4px;'
                                                                                                        },
                                                                                                        ''
                                                                                                          .concat(
                                                                                                            e.padCode,
                                                                                                            ': '
                                                                                                          )
                                                                                                          .concat(
                                                                                                            e.errMsg
                                                                                                          )
                                                                                                      )
                                                                                                    }
                                                                                                  )
                                                                                                ),
                                                                                              type: 'error',
                                                                                              duration: 5e3
                                                                                            })
                                                                                          : f.success(
                                                                                              he(
                                                                                                'instanceList.shutdownSuccess'
                                                                                              )
                                                                                            ),
                                                                                          _t(),
                                                                                          (e.next = 12))
                                                                                        break
                                                                                      case 8:
                                                                                        ;((e.prev = 8),
                                                                                          (e.t0 =
                                                                                            e.catch(
                                                                                              0
                                                                                            )),
                                                                                          console.error(
                                                                                            e.t0
                                                                                          ),
                                                                                          f.error(
                                                                                            he(
                                                                                              'instanceList.shutdownFailed'
                                                                                            )
                                                                                          ))
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
                                                                        )
                                                                        .catch(function () {
                                                                          f.info(
                                                                            he(
                                                                              'instanceList.operationCancelled'
                                                                            )
                                                                          )
                                                                        })
                                                                    )
                                                                    var n
                                                                  }
                                                                },
                                                                {
                                                                  default: M(function () {
                                                                    return [
                                                                      G(
                                                                        A(
                                                                          z(he)(
                                                                            'instanceList.shutdown'
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
                                                              ))
                                                            : R('', !0),
                                                          N(
                                                            y,
                                                            {
                                                              onClick: function (e) {
                                                                return Tt(t.padCode)
                                                              }
                                                            },
                                                            {
                                                              default: M(function () {
                                                                return [
                                                                  G(
                                                                    A(z(he)('instanceList.delete')),
                                                                    1
                                                                  )
                                                                ]
                                                              }),
                                                              _: 2
                                                            },
                                                            1032,
                                                            ['onClick']
                                                          ),
                                                          N(
                                                            y,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  ;((tt.value = e.padCode),
                                                                    (Je.value = !0))
                                                                })(t)
                                                              }
                                                            },
                                                            {
                                                              default: M(function () {
                                                                return [
                                                                  G(
                                                                    A(
                                                                      z(he)(
                                                                        'instanceList.modifyPropsDynamic'
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
                                                          ),
                                                          N(
                                                            y,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  ;((tt.value = e.padCode),
                                                                    (Ye.value = !0))
                                                                })(t)
                                                              }
                                                            },
                                                            {
                                                              default: M(function () {
                                                                return [
                                                                  G(
                                                                    A(
                                                                      z(he)(
                                                                        'instanceList.modifyPropsStatic'
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
                                                          ),
                                                          N(
                                                            y,
                                                            {
                                                              onClick: function (e) {
                                                                return (
                                                                  (n = t.padCode),
                                                                  (tt.value = n),
                                                                  void (Ze.value = !0)
                                                                )
                                                                var n
                                                              }
                                                            },
                                                            {
                                                              default: M(function () {
                                                                return [
                                                                  G(
                                                                    A(
                                                                      z(he)(
                                                                        'instanceList.viewProperties'
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
                                                          ),
                                                          N(
                                                            y,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  ;((tt.value = e.padCode),
                                                                    (Qe.value = !0))
                                                                })(t)
                                                              }
                                                            },
                                                            {
                                                              default: M(function () {
                                                                return [
                                                                  G(
                                                                    A(
                                                                      z(he)(
                                                                        'instanceList.modifyGroup'
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
                                                          ),
                                                          N(
                                                            y,
                                                            {
                                                              onClick: function (e) {
                                                                return (function (e) {
                                                                  ;((tt.value = e.padCode),
                                                                    (Ct.value = !1),
                                                                    (Xe.value = !0))
                                                                })(t)
                                                              }
                                                            },
                                                            {
                                                              default: M(function () {
                                                                return [
                                                                  G(
                                                                    A(
                                                                      z(he)(
                                                                        'instanceList.modifyRemark'
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
                                                          ),
                                                          10 == t.padStatus
                                                            ? (T(),
                                                              B(
                                                                y,
                                                                {
                                                                  key: 4,
                                                                  onClick: function (e) {
                                                                    return (function (e) {
                                                                      ;((We.value = [e]),
                                                                        ($e.value = !0))
                                                                    })(t)
                                                                  }
                                                                },
                                                                {
                                                                  default: M(function () {
                                                                    return [
                                                                      G(
                                                                        A(
                                                                          z(he)(
                                                                            'instanceList.executeAdbCommand'
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
                                                              ))
                                                            : R('', !0),
                                                          10 == t.padStatus
                                                            ? (T(),
                                                              B(
                                                                y,
                                                                {
                                                                  key: 5,
                                                                  onClick: function (e) {
                                                                    return (function (e) {
                                                                      ;((tt.value = e.padCode),
                                                                        (et.value = !0))
                                                                    })(t)
                                                                  }
                                                                },
                                                                {
                                                                  default: M(function () {
                                                                    return [
                                                                      G(
                                                                        A(
                                                                          z(he)(
                                                                            'instanceList.getAdbConnectionInfo'
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
                                                              ))
                                                            : R('', !0)
                                                        ]
                                                      }),
                                                      _: 2
                                                    },
                                                    1024
                                                  )
                                                ]
                                              }),
                                              default: M(function () {
                                                return [
                                                  N(
                                                    n,
                                                    {
                                                      style: { 'margin-top': '3px' },
                                                      type: 'primary',
                                                      link: ''
                                                    },
                                                    {
                                                      default: M(function () {
                                                        return [
                                                          G(A(z(he)('instanceList.more')), 1),
                                                          N(
                                                            l,
                                                            { class: 'el-icon--right' },
                                                            {
                                                              default: M(function () {
                                                                return [N(z(d))]
                                                              }),
                                                              _: 1
                                                            }
                                                          )
                                                        ]
                                                      }),
                                                      _: 1
                                                    }
                                                  )
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1024
                                          )
                                        ])
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
                        [[k, Ve.value]]
                      ),
                      N(
                        L,
                        {
                          'current-page': at.value.page,
                          'onUpdate:currentPage':
                            t[5] ||
                            (t[5] = function (e) {
                              return (at.value.page = e)
                            }),
                          'page-size': at.value.pageSize,
                          'onUpdate:pageSize':
                            t[6] ||
                            (t[6] = function (e) {
                              return (at.value.pageSize = e)
                            }),
                          'page-sizes': [10, 20, 50, 100],
                          total: at.value.total,
                          layout: 'total, sizes, prev, pager, next, jumper',
                          onSizeChange:
                            t[7] ||
                            (t[7] = function () {
                              ;((at.value.page = 1), st.value++, _t())
                            }),
                          onCurrentChange: St,
                          style: { 'margin-top': '20px', 'text-align': 'right' }
                        },
                        null,
                        8,
                        ['current-page', 'page-size', 'total']
                      ),
                      yt.value
                        ? (T(),
                          B(
                            z(we),
                            {
                              key: 0,
                              visible: yt.value,
                              'onUpdate:visible':
                                t[8] ||
                                (t[8] = function (e) {
                                  return (yt.value = e)
                                }),
                              'row-data': gt.value,
                              onSuccess: Dt
                            },
                            null,
                            8,
                            ['visible', 'row-data']
                          ))
                        : R('', !0),
                      ht.value
                        ? (T(),
                          B(
                            z(Ce),
                            {
                              key: 1,
                              visible: ht.value,
                              'onUpdate:visible':
                                t[9] ||
                                (t[9] = function (e) {
                                  return (ht.value = e)
                                }),
                              'pad-code': mt.value
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      xt.value
                        ? (T(),
                          B(
                            z(_e),
                            {
                              key: 2,
                              visible: xt.value,
                              'onUpdate:visible':
                                t[10] ||
                                (t[10] = function (e) {
                                  return (xt.value = e)
                                }),
                              'pad-code': Lt.value
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      Je.value
                        ? (T(),
                          B(
                            z(Se),
                            {
                              key: 3,
                              visible: Je.value,
                              'onUpdate:visible':
                                t[11] ||
                                (t[11] = function (e) {
                                  return (Je.value = e)
                                }),
                              'pad-code': tt.value,
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      Ye.value
                        ? (T(),
                          B(
                            z(je),
                            {
                              key: 4,
                              visible: Ye.value,
                              'onUpdate:visible':
                                t[12] ||
                                (t[12] = function (e) {
                                  return (Ye.value = e)
                                }),
                              'pad-code': tt.value,
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      Ze.value
                        ? (T(),
                          B(
                            z(Oe),
                            {
                              key: 5,
                              visible: Ze.value,
                              'onUpdate:visible':
                                t[13] ||
                                (t[13] = function (e) {
                                  return (Ze.value = e)
                                }),
                              'pad-code': tt.value
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      Qe.value
                        ? (T(),
                          B(
                            z(De),
                            {
                              key: 6,
                              visible: Qe.value,
                              'onUpdate:visible':
                                t[14] ||
                                (t[14] = function (e) {
                                  return (Qe.value = e)
                                }),
                              'pad-code': tt.value,
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      Xe.value
                        ? (T(),
                          B(
                            z(Te),
                            {
                              key: 7,
                              visible: Xe.value,
                              'onUpdate:visible':
                                t[15] ||
                                (t[15] = function (e) {
                                  return (Xe.value = e)
                                }),
                              'pad-codes': Ct.value
                                ? We.value.map(function (e) {
                                    return e.padCode
                                  })
                                : [tt.value],
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      zt.value
                        ? (T(),
                          B(
                            z(Ie),
                            {
                              key: 8,
                              visible: zt.value,
                              'onUpdate:visible':
                                t[16] ||
                                (t[16] = function (e) {
                                  return (zt.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      At.value
                        ? (T(),
                          B(
                            z(Ee),
                            {
                              key: 9,
                              visible: At.value,
                              'onUpdate:visible':
                                t[17] ||
                                (t[17] = function (e) {
                                  return (At.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      Rt.value
                        ? (T(),
                          B(
                            z(Pe),
                            {
                              key: 10,
                              visible: Rt.value,
                              'onUpdate:visible':
                                t[18] ||
                                (t[18] = function (e) {
                                  return (Rt.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      Ht.value
                        ? (T(),
                          B(
                            z(Ue),
                            {
                              key: 11,
                              visible: Ht.value,
                              'onUpdate:visible':
                                t[19] ||
                                (t[19] = function (e) {
                                  return (Ht.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      Kt.value
                        ? (T(),
                          B(
                            z(Ue),
                            {
                              key: 12,
                              visible: Kt.value,
                              'onUpdate:visible':
                                t[20] ||
                                (t[20] = function (e) {
                                  return (Kt.value = e)
                                }),
                              'pad-codes': Wt.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      Et.value
                        ? (T(),
                          B(
                            z(Ae),
                            {
                              key: 13,
                              visible: Et.value,
                              'onUpdate:visible':
                                t[21] ||
                                (t[21] = function (e) {
                                  return (Et.value = e)
                                }),
                              'pad-codes': Wt.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      Jt.value
                        ? (T(),
                          B(
                            z(we),
                            {
                              key: 14,
                              isBatch: '',
                              visible: Jt.value,
                              'onUpdate:visible':
                                t[22] ||
                                (t[22] = function (e) {
                                  return (Jt.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      Zt.value
                        ? (T(),
                          B(
                            z(Fe),
                            {
                              key: 15,
                              visible: Zt.value,
                              'onUpdate:visible':
                                t[23] ||
                                (t[23] = function (e) {
                                  return (Zt.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      kt.value
                        ? (T(),
                          B(
                            z(Ne),
                            {
                              key: 16,
                              visible: kt.value,
                              'onUpdate:visible':
                                t[24] ||
                                (t[24] = function (e) {
                                  return (kt.value = e)
                                }),
                              'pad-code': wt.value,
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      $e.value
                        ? (T(),
                          B(
                            z(Me),
                            {
                              key: 17,
                              visible: $e.value,
                              'onUpdate:visible':
                                t[25] ||
                                (t[25] = function (e) {
                                  return ($e.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      et.value
                        ? (T(),
                          B(
                            z(ze),
                            {
                              key: 18,
                              visible: et.value,
                              'onUpdate:visible':
                                t[26] ||
                                (t[26] = function (e) {
                                  return (et.value = e)
                                }),
                              'pad-code': tt.value
                            },
                            null,
                            8,
                            ['visible', 'pad-code']
                          ))
                        : R('', !0),
                      bt.value
                        ? (T(),
                          B(
                            z(Ge),
                            {
                              key: 19,
                              modelValue: bt.value,
                              'onUpdate:modelValue':
                                t[27] ||
                                (t[27] = function (e) {
                                  return (bt.value = e)
                                }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['modelValue']
                          ))
                        : R('', !0),
                      Xt.value
                        ? (T(),
                          B(
                            z(Ae),
                            {
                              key: 20,
                              visible: Xt.value,
                              'onUpdate:visible':
                                t[28] ||
                                (t[28] = function (e) {
                                  return (Xt.value = e)
                                }),
                              'pad-codes': We.value.map(function (e) {
                                return e.padCode
                              }),
                              onSuccess: _t
                            },
                            null,
                            8,
                            ['visible', 'pad-codes']
                          ))
                        : R('', !0),
                      $t.value
                        ? (T(),
                          B(
                            z(Be),
                            {
                              key: 21,
                              visible: $t.value,
                              'onUpdate:visible':
                                t[29] ||
                                (t[29] = function (e) {
                                  return ($t.value = e)
                                }),
                              'selected-instances': We.value,
                              onConfirm: rn
                            },
                            null,
                            8,
                            ['visible', 'selected-instances']
                          ))
                        : R('', !0)
                    ])
                  )
                }
              }
            })
          e('default', l(ge, [['__scopeId', 'data-v-40f31878']]))
        }
      }
    }
  )
})()
