import { u as M, c as U, p as G, d as W, P as j, m as V, e as Y } from './function-call-b9e3413a.js'
import {
  c as w,
  u as q,
  t as h,
  w as p,
  e as C,
  d as J,
  a as Q,
  n as X,
  A as Z,
  j as ee,
  s as te,
  C as ne,
  M as D,
  z as oe,
  N as ae,
  O as le,
  b as se,
  P as re
} from './index-ba0a22a8.js'
import { y, r as F, N as a, e as A, F as ce, D as _, R as ie, a1 as ue } from './vue-66851fce.js'
import { B as T } from './index-525ab0a8.js'
import { u as de } from './use-placeholder-bee49790.js'
import { r as fe, u as me } from './use-route-23d6e27a.js'
const [I, E] = w('action-bar'),
  $ = Symbol(I),
  Be = { placeholder: Boolean, safeAreaInsetBottom: h }
var ge = y({
  name: I,
  props: Be,
  setup(e, { slots: n }) {
    const o = F(),
      l = de(o, E),
      { linkChildren: s } = q($)
    s()
    const u = () => {
      var m
      return a('div', { ref: o, class: [E(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [
        (m = n.default) == null ? void 0 : m.call(n)
      ])
    }
    return () => (e.placeholder ? l(u) : u())
  }
})
const he = p(ge),
  [Ce, be] = w('action-bar-button'),
  ve = C({}, fe, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  })
var we = y({
  name: Ce,
  props: ve,
  setup(e, { slots: n }) {
    const o = me(),
      { parent: l, index: s } = J($),
      u = A(() => {
        if (l) {
          const c = l.children[s.value - 1]
          return !(c && 'isButton' in c)
        }
      }),
      m = A(() => {
        if (l) {
          const c = l.children[s.value + 1]
          return !(c && 'isButton' in c)
        }
      })
    return (
      M({ isButton: !0 }),
      () => {
        const { type: c, icon: B, text: g, color: P, loading: S, disabled: k } = e
        return a(
          T,
          {
            class: be([c, { last: m.value, first: u.value }]),
            size: 'large',
            type: c,
            icon: B,
            color: P,
            loading: S,
            disabled: k,
            onClick: o
          },
          { default: () => [n.default ? n.default() : g] }
        )
      }
    )
  }
})
const R = p(we),
  [ye, N] = w('cell-group'),
  Pe = { title: String, inset: Boolean, border: h }
var Se = y({
  name: ye,
  inheritAttrs: !1,
  props: Pe,
  setup(e, { slots: n, attrs: o }) {
    const l = () => {
        var u
        return a(
          'div',
          _({ class: [N({ inset: e.inset }), { [Q]: e.border && !e.inset }] }, o, U()),
          [(u = n.default) == null ? void 0 : u.call(n)]
        )
      },
      s = () => a('div', { class: N('title', { inset: e.inset }) }, [n.title ? n.title() : e.title])
    return () => (e.title || n.title ? a(ce, null, [s(), l()]) : l())
  }
})
const He = p(Se),
  [ke, i, v] = w('dialog'),
  Oe = C({}, G, {
    title: String,
    theme: String,
    width: X,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: Z,
    transition: ee('van-dialog-bounce'),
    messageAlign: String,
    closeOnPopstate: h,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: h,
    closeOnClickOverlay: Boolean,
    keyboardEnabled: h,
    destroyOnClose: Boolean
  }),
  Te = [...W, 'transition', 'closeOnPopstate', 'destroyOnClose']
var xe = y({
  name: ke,
  props: Oe,
  emits: ['confirm', 'cancel', 'keydown', 'update:show'],
  setup(e, { emit: n, slots: o }) {
    const l = F(),
      s = ie({ confirm: !1, cancel: !1 }),
      u = (t) => n('update:show', t),
      m = (t) => {
        var r
        ;(u(!1), (r = e.callback) == null || r.call(e, t))
      },
      c = (t) => () => {
        e.show &&
          (n(t),
          e.beforeClose
            ? ((s[t] = !0),
              se(e.beforeClose, {
                args: [t],
                done() {
                  ;(m(t), (s[t] = !1))
                },
                canceled() {
                  s[t] = !1
                }
              }))
            : m(t))
      },
      B = c('cancel'),
      g = c('confirm'),
      P = ue(
        (t) => {
          var r, d
          if (
            !e.keyboardEnabled ||
            t.target !==
              ((d = (r = l.value) == null ? void 0 : r.popupRef) == null ? void 0 : d.value)
          )
            return
          ;(({ Enter: e.showConfirmButton ? g : D, Escape: e.showCancelButton ? B : D })[t.key](),
            n('keydown', t))
        },
        ['enter', 'esc']
      ),
      S = () => {
        const t = o.title ? o.title() : e.title
        if (t) return a('div', { class: i('header', { isolated: !e.message && !o.default }) }, [t])
      },
      k = (t) => {
        const { message: r, allowHtml: d, messageAlign: f } = e,
          b = i('message', { 'has-title': t, [f]: f }),
          O = oe(r) ? r() : r
        return d && typeof O == 'string'
          ? a('div', { class: b, innerHTML: O }, null)
          : a('div', { class: b }, [O])
      },
      H = () => {
        if (o.default) return a('div', { class: i('content') }, [o.default()])
        const { title: t, message: r, allowHtml: d } = e
        if (r) {
          const f = !!(t || o.title)
          return a('div', { key: d ? 1 : 0, class: i('content', { isolated: !f }) }, [k(f)])
        }
      },
      K = () =>
        a('div', { class: [le, i('footer')] }, [
          e.showCancelButton &&
            a(
              T,
              {
                size: 'large',
                text: e.cancelButtonText || v('cancel'),
                class: i('cancel'),
                style: { color: e.cancelButtonColor },
                loading: s.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: B
              },
              null
            ),
          e.showConfirmButton &&
            a(
              T,
              {
                size: 'large',
                text: e.confirmButtonText || v('confirm'),
                class: [i('confirm'), { [ae]: e.showCancelButton }],
                style: { color: e.confirmButtonColor },
                loading: s.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: g
              },
              null
            )
        ]),
      z = () =>
        a(
          he,
          { class: i('footer') },
          {
            default: () => [
              e.showCancelButton &&
                a(
                  R,
                  {
                    type: 'warning',
                    text: e.cancelButtonText || v('cancel'),
                    class: i('cancel'),
                    color: e.cancelButtonColor,
                    loading: s.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: B
                  },
                  null
                ),
              e.showConfirmButton &&
                a(
                  R,
                  {
                    type: 'danger',
                    text: e.confirmButtonText || v('confirm'),
                    class: i('confirm'),
                    color: e.confirmButtonColor,
                    loading: s.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: g
                  },
                  null
                )
            ]
          }
        ),
      L = () => (o.footer ? o.footer() : e.theme === 'round-button' ? z() : K())
    return () => {
      const { width: t, title: r, theme: d, message: f, className: b } = e
      return a(
        j,
        _(
          {
            ref: l,
            role: 'dialog',
            class: [i([d]), b],
            style: { width: ne(t) },
            tabindex: 0,
            'aria-labelledby': r || f,
            onKeydown: P,
            'onUpdate:show': u
          },
          te(e, Te)
        ),
        { default: () => [S(), H(), L()] }
      )
    }
  }
})
let x
const pe = {
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
let _e = C({}, pe)
function De() {
  ;({ instance: x } = V({
    setup() {
      const { state: n, toggle: o } = Y()
      return () => a(xe, _(n, { 'onUpdate:show': o }), null)
    }
  }))
}
function Ae(e) {
  return re
    ? new Promise((n, o) => {
        ;(x || De(),
          x.open(
            C({}, _e, e, {
              callback: (l) => {
                ;(l === 'confirm' ? n : o)(l)
              }
            })
          ))
      })
    : Promise.resolve(void 0)
}
const Ke = (e) => Ae(C({ showCancelButton: !0 }, e))
export { He as C, Ke as a, xe as s }
