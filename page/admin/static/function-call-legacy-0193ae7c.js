!(function () {
  function t(n) {
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
      t(n)
    )
  }
  function n(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return l(t)
      })(t) ||
      (function (t) {
        if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
          return Array.from(t)
      })(t) ||
      r(t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function e(n, e, o) {
    var r
    return (
      (r = (function (n, e) {
        if ('object' != t(n) || !n) return n
        var o = n[Symbol.toPrimitive]
        if (void 0 !== o) {
          var r = o.call(n, e || 'default')
          if ('object' != t(r)) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === e ? String : Number)(n)
      })(e, 'string')),
      (e = 'symbol' == t(r) ? r : String(r)) in n
        ? Object.defineProperty(n, e, { value: o, enumerable: !0, configurable: !0, writable: !0 })
        : (n[e] = o),
      n
    )
  }
  function o(t, n) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t
      })(t) ||
      (function (t, n) {
        var e =
          null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator']
        if (null != e) {
          var o,
            r,
            l,
            i,
            a = [],
            c = !0,
            u = !1
          try {
            if (((l = (e = e.call(t)).next), 0 === n)) {
              if (Object(e) !== e) return
              c = !1
            } else for (; !(c = (o = l.call(e)).done) && (a.push(o.value), a.length !== n); c = !0);
          } catch (t) {
            ;((u = !0), (r = t))
          } finally {
            try {
              if (!c && null != e.return && ((i = e.return()), Object(i) !== i)) return
            } finally {
              if (u) throw r
            }
          }
          return a
        }
      })(t, n) ||
      r(t, n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function r(t, n) {
    if (t) {
      if ('string' == typeof t) return l(t, n)
      var e = Object.prototype.toString.call(t).slice(8, -1)
      return (
        'Object' === e && t.constructor && (e = t.constructor.name),
        'Map' === e || 'Set' === e
          ? Array.from(t)
          : 'Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            ? l(t, n)
            : void 0
      )
    }
  }
  function l(t, n) {
    ;(null == n || n > t.length) && (n = t.length)
    for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e]
    return o
  }
  System.register(
    [
      './function-call-legacy-ae1bc7d7.js',
      './index-legacy-0fcb45ef.js',
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-05e48c13.js',
      './use-placeholder-legacy-48aedce4.js',
      './use-route-legacy-d64f6436.js'
    ],
    function (t, r) {
      'use strict'
      var l,
        i,
        a,
        c,
        u,
        s,
        f,
        d,
        m,
        y,
        b,
        v,
        g,
        p,
        B,
        h,
        w,
        C,
        S,
        x,
        k,
        j,
        A,
        O,
        T,
        D,
        P,
        E,
        I,
        N,
        H,
        z,
        F,
        M,
        U,
        R,
        K
      return {
        setters: [
          function (t) {
            ;((l = t.u), (i = t.c), (a = t.p), (c = t.d), (u = t.P), (s = t.m), (f = t.e))
          },
          function (t) {
            ;((d = t.c),
              (m = t.u),
              (y = t.t),
              (b = t.w),
              (v = t.e),
              (g = t.d),
              (p = t.a),
              (B = t.n),
              (h = t.A),
              (w = t.j),
              (C = t.s),
              (S = t.C),
              (x = t.M),
              (k = t.z),
              (j = t.N),
              (A = t.O),
              (O = t.b),
              (T = t.P))
          },
          function (t) {
            ;((D = t.y),
              (P = t.r),
              (E = t.N),
              (I = t.e),
              (N = t.F),
              (H = t.D),
              (z = t.R),
              (F = t.a1))
          },
          function (t) {
            M = t.B
          },
          function (t) {
            U = t.u
          },
          function (t) {
            ;((R = t.r), (K = t.u))
          }
        ],
        execute: function () {
          var r,
            L = o(d('action-bar'), 2),
            $ = L[0],
            q = L[1],
            G = Symbol($),
            J = { placeholder: Boolean, safeAreaInsetBottom: y },
            Q = D({
              name: $,
              props: J,
              setup: function (t, n) {
                var e = n.slots,
                  o = P(),
                  r = U(o, q)
                ;(0, m(G).linkChildren)()
                var l = function () {
                  var n
                  return E(
                    'div',
                    { ref: o, class: [q(), { 'van-safe-area-bottom': t.safeAreaInsetBottom }] },
                    [null == (n = e.default) ? void 0 : n.call(e)]
                  )
                }
                return function () {
                  return t.placeholder ? r(l) : l()
                }
              }
            }),
            V = b(Q),
            W = o(d('action-bar-button'), 2),
            X = W[0],
            Y = W[1],
            Z = v({}, R, {
              type: String,
              text: String,
              icon: String,
              color: String,
              loading: Boolean,
              disabled: Boolean
            }),
            _ = D({
              name: X,
              props: Z,
              setup: function (t, n) {
                var e = n.slots,
                  o = K(),
                  r = g(G),
                  i = r.parent,
                  a = r.index,
                  c = I(function () {
                    if (i) {
                      var t = i.children[a.value - 1]
                      return !(t && 'isButton' in t)
                    }
                  }),
                  u = I(function () {
                    if (i) {
                      var t = i.children[a.value + 1]
                      return !(t && 'isButton' in t)
                    }
                  })
                return (
                  l({ isButton: !0 }),
                  function () {
                    var n = t.type,
                      r = t.icon,
                      l = t.text,
                      i = t.color,
                      a = t.loading,
                      s = t.disabled
                    return E(
                      M,
                      {
                        class: Y([n, { last: u.value, first: c.value }]),
                        size: 'large',
                        type: n,
                        icon: r,
                        color: i,
                        loading: a,
                        disabled: s,
                        onClick: o
                      },
                      {
                        default: function () {
                          return [e.default ? e.default() : l]
                        }
                      }
                    )
                  }
                )
              }
            }),
            tt = b(_),
            nt = o(d('cell-group'), 2),
            et = nt[0],
            ot = nt[1],
            rt = { title: String, inset: Boolean, border: y },
            lt = D({
              name: et,
              inheritAttrs: !1,
              props: rt,
              setup: function (t, n) {
                var o = n.slots,
                  r = n.attrs,
                  l = function () {
                    var n
                    return E(
                      'div',
                      H(
                        { class: [ot({ inset: t.inset }), e({}, p, t.border && !t.inset)] },
                        r,
                        i()
                      ),
                      [null == (n = o.default) ? void 0 : n.call(o)]
                    )
                  }
                return function () {
                  return t.title || o.title
                    ? E(N, null, [
                        E('div', { class: ot('title', { inset: t.inset }) }, [
                          o.title ? o.title() : t.title
                        ]),
                        l()
                      ])
                    : l()
                }
              }
            }),
            it = (t('C', b(lt)), o(d('dialog'), 3)),
            at = it[0],
            ct = it[1],
            ut = it[2],
            st = v({}, a, {
              title: String,
              theme: String,
              width: B,
              message: [String, Function],
              callback: Function,
              allowHtml: Boolean,
              className: h,
              transition: w('van-dialog-bounce'),
              messageAlign: String,
              closeOnPopstate: y,
              showCancelButton: Boolean,
              cancelButtonText: String,
              cancelButtonColor: String,
              cancelButtonDisabled: Boolean,
              confirmButtonText: String,
              confirmButtonColor: String,
              confirmButtonDisabled: Boolean,
              showConfirmButton: y,
              closeOnClickOverlay: Boolean,
              keyboardEnabled: y,
              destroyOnClose: Boolean
            }),
            ft = [].concat(n(c), ['transition', 'closeOnPopstate', 'destroyOnClose']),
            dt = t(
              's',
              D({
                name: at,
                props: st,
                emits: ['confirm', 'cancel', 'keydown', 'update:show'],
                setup: function (t, n) {
                  var o = n.emit,
                    r = n.slots,
                    l = P(),
                    i = z({ confirm: !1, cancel: !1 }),
                    a = function (t) {
                      return o('update:show', t)
                    },
                    c = function (n) {
                      var e
                      ;(a(!1), null == (e = t.callback) || e.call(t, n))
                    },
                    s = function (n) {
                      return function () {
                        t.show &&
                          (o(n),
                          t.beforeClose
                            ? ((i[n] = !0),
                              O(t.beforeClose, {
                                args: [n],
                                done: function () {
                                  ;(c(n), (i[n] = !1))
                                },
                                canceled: function () {
                                  i[n] = !1
                                }
                              }))
                            : c(n))
                      }
                    },
                    f = s('cancel'),
                    d = s('confirm'),
                    m = F(
                      function (n) {
                        var e, r
                        t.keyboardEnabled &&
                          n.target ===
                            (null == (r = null == (e = l.value) ? void 0 : e.popupRef)
                              ? void 0
                              : r.value) &&
                          ({
                            Enter: t.showConfirmButton ? d : x,
                            Escape: t.showCancelButton ? f : x
                          }[n.key](),
                          o('keydown', n))
                      },
                      ['enter', 'esc']
                    ),
                    y = function () {
                      var n = r.title ? r.title() : t.title
                      if (n)
                        return E(
                          'div',
                          { class: ct('header', { isolated: !t.message && !r.default }) },
                          [n]
                        )
                    },
                    b = function (n) {
                      var o = t.message,
                        r = t.allowHtml,
                        l = t.messageAlign,
                        i = ct('message', e({ 'has-title': n }, l, l)),
                        a = k(o) ? o() : o
                      return r && 'string' == typeof a
                        ? E('div', { class: i, innerHTML: a }, null)
                        : E('div', { class: i }, [a])
                    },
                    v = function () {
                      if (r.default) return E('div', { class: ct('content') }, [r.default()])
                      var n = t.title,
                        e = t.message,
                        o = t.allowHtml
                      if (e) {
                        var l = !(!n && !r.title)
                        return E(
                          'div',
                          { key: o ? 1 : 0, class: ct('content', { isolated: !l }) },
                          [b(l)]
                        )
                      }
                    },
                    g = function () {
                      return r.footer
                        ? r.footer()
                        : 'round-button' === t.theme
                          ? E(
                              V,
                              { class: ct('footer') },
                              {
                                default: function () {
                                  return [
                                    t.showCancelButton &&
                                      E(
                                        tt,
                                        {
                                          type: 'warning',
                                          text: t.cancelButtonText || ut('cancel'),
                                          class: ct('cancel'),
                                          color: t.cancelButtonColor,
                                          loading: i.cancel,
                                          disabled: t.cancelButtonDisabled,
                                          onClick: f
                                        },
                                        null
                                      ),
                                    t.showConfirmButton &&
                                      E(
                                        tt,
                                        {
                                          type: 'danger',
                                          text: t.confirmButtonText || ut('confirm'),
                                          class: ct('confirm'),
                                          color: t.confirmButtonColor,
                                          loading: i.confirm,
                                          disabled: t.confirmButtonDisabled,
                                          onClick: d
                                        },
                                        null
                                      )
                                  ]
                                }
                              }
                            )
                          : E('div', { class: [A, ct('footer')] }, [
                              t.showCancelButton &&
                                E(
                                  M,
                                  {
                                    size: 'large',
                                    text: t.cancelButtonText || ut('cancel'),
                                    class: ct('cancel'),
                                    style: { color: t.cancelButtonColor },
                                    loading: i.cancel,
                                    disabled: t.cancelButtonDisabled,
                                    onClick: f
                                  },
                                  null
                                ),
                              t.showConfirmButton &&
                                E(
                                  M,
                                  {
                                    size: 'large',
                                    text: t.confirmButtonText || ut('confirm'),
                                    class: [ct('confirm'), e({}, j, t.showCancelButton)],
                                    style: { color: t.confirmButtonColor },
                                    loading: i.confirm,
                                    disabled: t.confirmButtonDisabled,
                                    onClick: d
                                  },
                                  null
                                )
                            ])
                    }
                  return function () {
                    var n = t.width,
                      e = t.title,
                      o = t.theme,
                      r = t.message,
                      i = t.className
                    return E(
                      u,
                      H(
                        {
                          ref: l,
                          role: 'dialog',
                          class: [ct([o]), i],
                          style: { width: S(n) },
                          tabindex: 0,
                          'aria-labelledby': e || r,
                          onKeydown: m,
                          'onUpdate:show': a
                        },
                        C(t, ft)
                      ),
                      {
                        default: function () {
                          return [y(), v(), g()]
                        }
                      }
                    )
                  }
                }
              })
            ),
            mt = v(
              {},
              {
                title: '',
                width: '',
                theme: null,
                message: '',
                overlay: !0,
                callback: null,
                teleport: 'body',
                className: '',
                allowHtml: !1,
                lockScroll: !0,
                transition: void 0,
                beforeClose: null,
                overlayClass: '',
                overlayStyle: void 0,
                messageAlign: '',
                cancelButtonText: '',
                cancelButtonColor: null,
                cancelButtonDisabled: !1,
                confirmButtonText: '',
                confirmButtonColor: null,
                confirmButtonDisabled: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnPopstate: !0,
                closeOnClickOverlay: !1,
                destroyOnClose: !1
              }
            )
          function yt(t) {
            return T
              ? new Promise(function (n, e) {
                  var o
                  ;(r ||
                    ((o = s({
                      setup: function () {
                        var t = f(),
                          n = t.state,
                          e = t.toggle
                        return function () {
                          return E(dt, H(n, { 'onUpdate:show': e }), null)
                        }
                      }
                    })),
                    (r = o.instance)),
                    r.open(
                      v({}, mt, t, {
                        callback: function (t) {
                          ;('confirm' === t ? n : e)(t)
                        }
                      })
                    ))
                })
              : Promise.resolve(void 0)
          }
          t('a', function (t) {
            return yt(v({ showCancelButton: !0 }, t))
          })
        }
      }
    }
  )
})()
