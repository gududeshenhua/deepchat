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
  function t(t, n, r) {
    var o
    return (
      (o = (function (t, n) {
        if ('object' != e(t) || !t) return t
        var r = t[Symbol.toPrimitive]
        if (void 0 !== r) {
          var o = r.call(t, n || 'default')
          if ('object' != e(o)) return o
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === n ? String : Number)(t)
      })(n, 'string')),
      (n = 'symbol' == e(o) ? o : String(o)) in t
        ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (t[n] = r),
      t
    )
  }
  function n(e, t) {
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
            l,
            i,
            a = [],
            u = !0,
            c = !1
          try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return
              u = !1
            } else for (; !(u = (r = l.call(n)).done) && (a.push(r.value), a.length !== t); u = !0);
          } catch (e) {
            ;((c = !0), (o = e))
          } finally {
            try {
              if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return
            } finally {
              if (c) throw o
            }
          }
          return a
        }
      })(e, t) ||
      (function (e, t) {
        if (!e) return
        if ('string' == typeof e) return r(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        'Object' === n && e.constructor && (n = e.constructor.name)
        if ('Map' === n || 'Set' === n) return Array.from(e)
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function r(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-911baf4a.js',
      './use-placeholder-legacy-48aedce4.js',
      './index-legacy-0fcb45ef.js',
      './use-route-legacy-d64f6436.js',
      './index-legacy-d4b804d0.js',
      './element-legacy-e7b6e573.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, r) {
      'use strict'
      var o,
        l,
        i,
        a,
        u,
        c,
        f,
        s,
        d,
        m,
        v,
        b,
        p,
        y,
        h,
        g,
        x,
        S,
        w,
        k,
        j,
        A,
        C,
        B,
        I,
        T,
        D,
        P,
        _,
        O,
        V,
        L,
        z,
        E,
        q,
        F,
        U,
        $,
        H
      return {
        setters: [
          function (e) {
            ;((o = e.y),
              (l = e.r),
              (i = e.N),
              (a = e.a),
              (u = e.e),
              (c = e.D),
              (f = e.aq),
              (s = e.aw),
              (d = e.d),
              (m = e.a8),
              (v = e.f),
              (b = e.h),
              (p = e.G),
              (y = e.u),
              (h = e.K),
              (g = e.i),
              (x = e.B),
              (S = e.H),
              (w = e.L))
          },
          null,
          function (e) {
            k = e.u
          },
          function (e) {
            ;((j = e.c),
              (A = e.n),
              (C = e.t),
              (B = e.H),
              (I = e.B),
              (T = e.I),
              (D = e.g),
              (P = e.w),
              (_ = e.m),
              (O = e.u),
              (V = e.a),
              (L = e.b),
              (z = e.e),
              (E = e.d),
              (q = e.f),
              (F = e.i))
          },
          function (e) {
            ;((U = e.r), ($ = e.u))
          },
          function (e) {
            H = e._
          },
          null,
          null
        ],
        execute: function () {
          var r = document.createElement('style')
          ;((r.textContent =
            '@charset "UTF-8";.mobile-layout[data-v-88c8ead9]{height:100vh;background-color:#f7f8fa;width:100%;overflow:hidden}.mobile-layout .mobile-content[data-v-88c8ead9]{padding:12px;overflow-y:scroll;width:100%}\n'),
            document.head.appendChild(r))
          var M = n(j('nav-bar'), 2),
            N = M[0],
            R = M[1],
            G = {
              title: String,
              fixed: Boolean,
              zIndex: A,
              border: C,
              leftText: String,
              rightText: String,
              leftDisabled: Boolean,
              rightDisabled: Boolean,
              leftArrow: Boolean,
              placeholder: Boolean,
              safeAreaInsetTop: Boolean,
              clickable: C
            },
            K = o({
              name: N,
              props: G,
              emits: ['clickLeft', 'clickRight'],
              setup: function (e, n) {
                var r = n.emit,
                  o = n.slots,
                  a = l(),
                  u = k(a, R),
                  c = function (t) {
                    e.leftDisabled || r('clickLeft', t)
                  },
                  f = function (t) {
                    e.rightDisabled || r('clickRight', t)
                  },
                  s = function () {
                    var n = e.title,
                      r = e.fixed,
                      l = e.border,
                      u = e.zIndex,
                      s = D(u),
                      d = e.leftArrow || e.leftText || o.left,
                      m = e.rightText || o.right
                    return i(
                      'div',
                      {
                        ref: a,
                        style: s,
                        class: [
                          R({ fixed: r }),
                          t(t({}, I, l), 'van-safe-area-top', e.safeAreaInsetTop)
                        ]
                      },
                      [
                        i('div', { class: R('content') }, [
                          d &&
                            i(
                              'div',
                              {
                                class: [
                                  R('left', { disabled: e.leftDisabled }),
                                  e.clickable && !e.leftDisabled ? B : ''
                                ],
                                onClick: c
                              },
                              [
                                o.left
                                  ? o.left()
                                  : [
                                      e.leftArrow &&
                                        i(T, { class: R('arrow'), name: 'arrow-left' }, null),
                                      e.leftText && i('span', { class: R('text') }, [e.leftText])
                                    ]
                              ]
                            ),
                          i('div', { class: [R('title'), 'van-ellipsis'] }, [
                            o.title ? o.title() : n
                          ]),
                          m &&
                            i(
                              'div',
                              {
                                class: [
                                  R('right', { disabled: e.rightDisabled }),
                                  e.clickable && !e.rightDisabled ? B : ''
                                ],
                                onClick: f
                              },
                              [o.right ? o.right() : i('span', { class: R('text') }, [e.rightText])]
                            )
                        ])
                      ]
                    )
                  }
                return function () {
                  return e.fixed && e.placeholder ? u(s) : s()
                }
              }
            }),
            J = P(K),
            Q = n(j('tabbar'), 2),
            W = Q[0],
            X = Q[1],
            Y = {
              route: Boolean,
              fixed: C,
              border: C,
              zIndex: A,
              placeholder: Boolean,
              activeColor: String,
              beforeChange: Function,
              inactiveColor: String,
              modelValue: _(0),
              safeAreaInsetBottom: { type: Boolean, default: null }
            },
            Z = Symbol(W),
            ee = o({
              name: W,
              props: Y,
              emits: ['change', 'update:modelValue'],
              setup: function (e, n) {
                var r = n.emit,
                  o = n.slots,
                  a = l(),
                  u = O(Z).linkChildren,
                  c = k(a, X),
                  f = function () {
                    var t
                    return null != (t = e.safeAreaInsetBottom) ? t : e.fixed
                  },
                  s = function () {
                    var n,
                      r = e.fixed,
                      l = e.zIndex,
                      u = e.border
                    return i(
                      'div',
                      {
                        ref: a,
                        role: 'tablist',
                        style: D(l),
                        class: [X({ fixed: r }), t(t({}, V, u), 'van-safe-area-bottom', f())]
                      },
                      [null == (n = o.default) ? void 0 : n.call(o)]
                    )
                  }
                return (
                  u({
                    props: e,
                    setActive: function (t, n) {
                      L(e.beforeChange, {
                        args: [t],
                        done: function () {
                          ;(r('update:modelValue', t), r('change', t), n())
                        }
                      })
                    }
                  }),
                  function () {
                    return e.fixed && e.placeholder ? c(s) : s()
                  }
                )
              }
            }),
            te = P(ee),
            ne = n(j('tabbar-item'), 2),
            re = ne[0],
            oe = ne[1],
            le = z({}, U, {
              dot: Boolean,
              icon: String,
              name: A,
              badge: A,
              badgeProps: Object,
              iconPrefix: String
            }),
            ie = o({
              name: re,
              props: le,
              emits: ['click'],
              setup: function (e, t) {
                var n = t.emit,
                  r = t.slots,
                  o = $(),
                  l = a().proxy,
                  f = E(Z),
                  s = f.parent,
                  d = f.index
                if (s) {
                  var m = u(function () {
                      var t,
                        n = s.props,
                        r = n.route,
                        o = n.modelValue
                      if (r && '$route' in l) {
                        var i = l.$route,
                          a = e.to,
                          u = F(a) ? a : { path: a }
                        return i.matched.some(function (e) {
                          var t = 'path' in u && u.path === e.path,
                            n = 'name' in u && u.name === e.name
                          return t || n
                        })
                      }
                      return (null != (t = e.name) ? t : d.value) === o
                    }),
                    v = function (t) {
                      var r
                      ;(m.value || s.setActive(null != (r = e.name) ? r : d.value, o),
                        n('click', t))
                    },
                    b = function () {
                      return r.icon
                        ? r.icon({ active: m.value })
                        : e.icon
                          ? i(T, { name: e.icon, classPrefix: e.iconPrefix }, null)
                          : void 0
                    }
                  return function () {
                    var t,
                      n = e.dot,
                      o = e.badge,
                      l = s.props,
                      a = l.activeColor,
                      u = l.inactiveColor,
                      f = m.value ? a : u
                    return i(
                      'div',
                      {
                        role: 'tab',
                        class: oe({ active: m.value }),
                        style: { color: f },
                        tabindex: 0,
                        'aria-selected': m.value,
                        onClick: v
                      },
                      [
                        i(q, c({ dot: n, class: oe('icon'), content: o }, e.badgeProps), {
                          default: b
                        }),
                        i('div', { class: oe('text') }, [
                          null == (t = r.default) ? void 0 : t.call(r, { active: m.value })
                        ])
                      ]
                    )
                  }
                }
              }
            }),
            ae = P(ie),
            ue = { class: 'mobile-layout' },
            ce = o({
              __name: 'MobileLayout',
              setup: function (e) {
                var t = f(),
                  n = s(),
                  r = l('instance'),
                  o = u(function () {
                    return '/mobile/instance' !== n.path
                  }),
                  a = u(function () {
                    return !(n.path.indexOf('/connect') >= 0)
                  }),
                  c = u(function () {
                    var e
                    return (
                      {
                        mobileInstance: '实例管理',
                        mobileInstanceDetail: '实例详情',
                        'mobile-proxy': '代理管理',
                        'mobile-storage': '文件管理',
                        'mobile-profile': '个人中心'
                      }[(null === (e = n.name) || void 0 === e ? void 0 : e.toString()) || ''] ||
                      '云手机管理'
                    )
                  }),
                  k = function () {
                    '/mobile/instance' !== n.path && t.back()
                  },
                  j = function (e) {
                    var r = {
                      instance: '/mobile/instance',
                      proxy: '/mobile/proxy',
                      storage: '/mobile/storage',
                      profile: '/mobile/profile'
                    }
                    r[e] && n.path !== r[e] && t.push(r[e])
                  }
                return (
                  d(
                    function () {
                      return n.path
                    },
                    function (e) {
                      var t = {
                        '/mobile/instance': 'instance',
                        '/mobile/proxy': 'proxy',
                        '/mobile/storage': 'storage',
                        '/mobile/profile': 'profile'
                      }
                      ;(t[e] && (r.value = t[e]),
                        requestAnimationFrame(function () {
                          var e = document.querySelector('.mobile-content')
                          e && (e.scrollTop = 0)
                        }))
                    },
                    { immediate: !0 }
                  ),
                  function (e, t) {
                    var n = m('router-view')
                    return (
                      v(),
                      b('div', ue, [
                        a.value
                          ? (v(),
                            p(
                              y(J),
                              {
                                key: 0,
                                title: c.value,
                                'left-text': o.value ? '返回' : '',
                                'left-arrow': o.value,
                                onClickLeft: k,
                                fixed: '',
                                placeholder: '',
                                style: { height: '46px' }
                              },
                              null,
                              8,
                              ['title', 'left-text', 'left-arrow']
                            ))
                          : h('', !0),
                        g(
                          'div',
                          {
                            class: 'mobile-content',
                            style: x({ height: a.value ? 'calc(100vh - 100px)' : '100vh' })
                          },
                          [i(n)],
                          4
                        ),
                        a.value
                          ? (v(),
                            p(
                              y(te),
                              {
                                key: 1,
                                style: { height: '50px' },
                                modelValue: r.value,
                                'onUpdate:modelValue':
                                  t[0] ||
                                  (t[0] = function (e) {
                                    return (r.value = e)
                                  }),
                                onChange: j
                              },
                              {
                                default: S(function () {
                                  return [
                                    i(
                                      y(ae),
                                      { name: 'instance', icon: 'home-o' },
                                      {
                                        default: S(function () {
                                          return [w('实例')]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    i(
                                      y(ae),
                                      { name: 'profile', icon: 'user-o' },
                                      {
                                        default: S(function () {
                                          return [w('我的')]
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
                            ))
                          : h('', !0)
                      ])
                    )
                  }
                )
              }
            })
          e('default', H(ce, [['__scopeId', 'data-v-88c8ead9']]))
        }
      }
    }
  )
})()
