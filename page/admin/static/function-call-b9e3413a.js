import {
  a as R,
  N as i,
  y as L,
  e as V,
  r as m,
  $ as G,
  m as ve,
  d as P,
  T as Z,
  _ as W,
  I as q,
  O as Q,
  D as B,
  n as fe,
  b as J,
  ak as ye,
  x as me,
  F as he,
  Q as Ce,
  ah as ge,
  R as Oe
} from './vue-66851fce.js'
import {
  e as S,
  c as D,
  h as ke,
  n as k,
  j as b,
  C as Ie,
  w as $,
  t as x,
  A as E,
  U,
  V as Se,
  W as be,
  p as ee,
  l as te,
  g as we,
  E as M,
  X as xe,
  b as Pe,
  H as pe,
  I as ne,
  s as ze,
  Y as Te,
  P as Be,
  i as Ae
} from './index-ba0a22a8.js'
function oe(e) {
  const t = R()
  t && S(t.proxy, e)
}
let _e = 2e3
const Ee = () => ++_e,
  [Le, T] = D('loading'),
  De = Array(12)
    .fill(null)
    .map((e, t) => i('i', { class: T('line', String(t + 1)) }, null)),
  Ne = i('svg', { class: T('circular'), viewBox: '25 25 50 50' }, [
    i('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null)
  ]),
  Re = {
    size: k,
    type: b('circular'),
    color: String,
    vertical: Boolean,
    textSize: k,
    textColor: String
  }
var $e = L({
  name: Le,
  props: Re,
  setup(e, { slots: t }) {
    const n = V(() => S({ color: e.color }, ke(e.size))),
      l = () => {
        const a = e.type === 'spinner' ? De : Ne
        return i('span', { class: T('spinner', e.type), style: n.value }, [t.icon ? t.icon() : a])
      },
      o = () => {
        var a
        if (t.default)
          return i(
            'span',
            {
              class: T('text'),
              style: { fontSize: Ie(e.textSize), color: (a = e.textColor) != null ? a : e.color }
            },
            [t.default()]
          )
      }
    return () => {
      const { type: a, vertical: c } = e
      return i('div', { class: T([a, { vertical: c }]), 'aria-live': 'polite', 'aria-busy': !0 }, [
        l(),
        o()
      ])
    }
  }
})
const Me = $($e),
  ae = {
    show: Boolean,
    zIndex: k,
    overlay: x,
    duration: k,
    teleport: [String, Object],
    lockScroll: x,
    lazyRender: x,
    beforeClose: Function,
    overlayProps: Object,
    overlayStyle: Object,
    overlayClass: E,
    transitionAppear: Boolean,
    closeOnClickOverlay: x
  },
  ft = Object.keys(ae)
function je(e, t) {
  return e > t ? 'horizontal' : t > e ? 'vertical' : ''
}
function Ye() {
  const e = m(0),
    t = m(0),
    n = m(0),
    l = m(0),
    o = m(0),
    a = m(0),
    c = m(''),
    s = m(!0),
    v = () => c.value === 'vertical',
    h = () => c.value === 'horizontal',
    f = () => {
      ;((n.value = 0), (l.value = 0), (o.value = 0), (a.value = 0), (c.value = ''), (s.value = !0))
    }
  return {
    move: (y) => {
      const C = y.touches[0]
      ;((n.value = (C.clientX < 0 ? 0 : C.clientX) - e.value),
        (l.value = C.clientY - t.value),
        (o.value = Math.abs(n.value)),
        (a.value = Math.abs(l.value)))
      const g = 10
      ;((!c.value || (o.value < g && a.value < g)) && (c.value = je(o.value, a.value)),
        s.value && (o.value > U || a.value > U) && (s.value = !1))
    },
    start: (y) => {
      ;(f(), (e.value = y.touches[0].clientX), (t.value = y.touches[0].clientY))
    },
    reset: f,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: l,
    offsetX: o,
    offsetY: a,
    direction: c,
    isVertical: v,
    isHorizontal: h,
    isTap: s
  }
}
let p = 0
const K = 'van-overflow-hidden'
function Ue(e, t) {
  const n = Ye(),
    l = '01',
    o = '10',
    a = (f) => {
      n.move(f)
      const u = n.deltaY.value > 0 ? o : l,
        d = be(f.target, e.value),
        { scrollHeight: y, offsetHeight: C, scrollTop: g } = d
      let O = '11'
      ;(g === 0 ? (O = C >= y ? '00' : '01') : g + C >= y && (O = '10'),
        O !== '11' && n.isVertical() && !(parseInt(O, 2) & parseInt(u, 2)) && ee(f, !0))
    },
    c = () => {
      ;(document.addEventListener('touchstart', n.start),
        document.addEventListener('touchmove', a, { passive: !1 }),
        p || document.body.classList.add(K),
        p++)
    },
    s = () => {
      p &&
        (document.removeEventListener('touchstart', n.start),
        document.removeEventListener('touchmove', a),
        p--,
        p || document.body.classList.remove(K))
    },
    v = () => t() && c(),
    h = () => t() && s()
  ;(Se(v),
    G(h),
    ve(h),
    P(t, (f) => {
      f ? c() : s()
    }))
}
function se(e) {
  const t = m(!1)
  return (
    P(
      e,
      (n) => {
        n && (t.value = n)
      },
      { immediate: !0 }
    ),
    (n) => () => (t.value ? n() : null)
  )
}
const X = () => {
    var e
    const { scopeId: t } = ((e = R()) == null ? void 0 : e.vnode) || {}
    return t ? { [t]: '' } : null
  },
  [Ke, Xe] = D('overlay'),
  Fe = {
    show: Boolean,
    zIndex: k,
    duration: k,
    className: E,
    lockScroll: x,
    lazyRender: x,
    customStyle: Object,
    teleport: [String, Object]
  }
var He = L({
  name: Ke,
  inheritAttrs: !1,
  props: Fe,
  setup(e, { attrs: t, slots: n }) {
    const l = m(),
      o = se(() => e.show || !e.lazyRender),
      a = (s) => {
        e.lockScroll && ee(s, !0)
      },
      c = o(() => {
        var s
        const v = S(we(e.zIndex), e.customStyle)
        return (
          M(e.duration) && (v.animationDuration = ''.concat(e.duration, 's')),
          q(
            i('div', B({ ref: l, style: v, class: [Xe(), e.className] }, t), [
              (s = n.default) == null ? void 0 : s.call(n)
            ]),
            [[Q, e.show]]
          )
        )
      })
    return (
      te('touchmove', a, { target: l }),
      () => {
        const s = i(Z, { name: 'van-fade', appear: !0 }, { default: c })
        return e.teleport ? i(W, { to: e.teleport }, { default: () => [s] }) : s
      }
    )
  }
})
const Ve = $(He),
  Ge = S({}, ae, {
    round: Boolean,
    position: b('center'),
    closeIcon: b('cross'),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: b('top-right'),
    destroyOnClose: Boolean,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
  }),
  [Ze, F] = D('popup')
var We = L({
  name: Ze,
  inheritAttrs: !1,
  props: Ge,
  emits: [
    'open',
    'close',
    'opened',
    'closed',
    'keydown',
    'update:show',
    'clickOverlay',
    'clickCloseIcon'
  ],
  setup(e, { emit: t, attrs: n, slots: l }) {
    let o, a
    const c = m(),
      s = m(),
      v = se(() => e.show || !e.lazyRender),
      h = V(() => {
        const r = { zIndex: c.value }
        if (M(e.duration)) {
          const I = e.position === 'center' ? 'animationDuration' : 'transitionDuration'
          r[I] = ''.concat(e.duration, 's')
        }
        return r
      }),
      f = () => {
        o || ((o = !0), (c.value = e.zIndex !== void 0 ? +e.zIndex : Ee()), t('open'))
      },
      u = () => {
        o &&
          Pe(e.beforeClose, {
            done() {
              ;((o = !1), t('close'), t('update:show', !1))
            }
          })
      },
      d = (r) => {
        ;(t('clickOverlay', r), e.closeOnClickOverlay && u())
      },
      y = () => {
        if (e.overlay) {
          const r = S(
            {
              show: e.show,
              class: e.overlayClass,
              zIndex: c.value,
              duration: e.duration,
              customStyle: e.overlayStyle,
              role: e.closeOnClickOverlay ? 'button' : void 0,
              tabindex: e.closeOnClickOverlay ? 0 : void 0
            },
            e.overlayProps
          )
          return i(Ve, B(r, X(), { onClick: d }), { default: l['overlay-content'] })
        }
      },
      C = (r) => {
        ;(t('clickCloseIcon', r), u())
      },
      g = () => {
        if (e.closeable)
          return i(
            ne,
            {
              role: 'button',
              tabindex: 0,
              name: e.closeIcon,
              class: [F('close-icon', e.closeIconPosition), pe],
              classPrefix: e.iconPrefix,
              onClick: C
            },
            null
          )
      }
    let O
    const le = () => {
        ;(O && clearTimeout(O),
          (O = setTimeout(() => {
            t('opened')
          })))
      },
      ce = () => t('closed'),
      ie = (r) => t('keydown', r),
      re = v(() => {
        var r
        const {
          destroyOnClose: I,
          round: N,
          position: A,
          safeAreaInsetTop: ue,
          safeAreaInsetBottom: de,
          show: Y
        } = e
        if (!(!Y && I))
          return q(
            i(
              'div',
              B(
                {
                  ref: s,
                  style: h.value,
                  role: 'dialog',
                  tabindex: 0,
                  class: [
                    F({ round: N, [A]: A }),
                    { 'van-safe-area-top': ue, 'van-safe-area-bottom': de }
                  ],
                  onKeydown: ie
                },
                n,
                X()
              ),
              [(r = l.default) == null ? void 0 : r.call(l), g()]
            ),
            [[Q, Y]]
          )
      }),
      j = () => {
        const { position: r, transition: I, transitionAppear: N } = e,
          A = r === 'center' ? 'van-fade' : 'van-popup-slide-'.concat(r)
        return i(
          Z,
          { name: I || A, appear: N, onAfterEnter: le, onAfterLeave: ce },
          { default: re }
        )
      }
    return (
      P(
        () => e.show,
        (r) => {
          ;(r &&
            !o &&
            (f(),
            n.tabindex === 0 &&
              fe(() => {
                var I
                ;(I = s.value) == null || I.focus()
              })),
            !r && o && ((o = !1), t('close')))
        }
      ),
      oe({ popupRef: s }),
      Ue(s, () => e.show && e.lockScroll),
      te('popstate', () => {
        e.closeOnPopstate && (u(), (a = !1))
      }),
      J(() => {
        e.show && f()
      }),
      ye(() => {
        a && (t('update:show', !0), (a = !1))
      }),
      G(() => {
        e.show && e.teleport && (u(), (a = !0))
      }),
      me(xe, () => e.show),
      () =>
        e.teleport
          ? i(W, { to: e.teleport }, { default: () => [y(), j()] })
          : i(he, null, [y(), j()])
    )
  }
})
const qe = $(We)
let z = 0
function Qe(e) {
  e
    ? (z || document.body.classList.add('van-toast--unclickable'), z++)
    : z && (z--, z || document.body.classList.remove('van-toast--unclickable'))
}
const [Je, w] = D('toast'),
  et = [
    'show',
    'overlay',
    'teleport',
    'transition',
    'overlayClass',
    'overlayStyle',
    'closeOnClickOverlay',
    'zIndex'
  ],
  tt = {
    icon: String,
    show: Boolean,
    type: b('text'),
    overlay: Boolean,
    message: k,
    iconSize: k,
    duration: Te(2e3),
    position: b('middle'),
    teleport: [String, Object],
    wordBreak: String,
    className: E,
    iconPrefix: String,
    transition: b('van-fade'),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: E,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: k
  }
var nt = L({
  name: Je,
  props: tt,
  emits: ['update:show'],
  setup(e, { emit: t, slots: n }) {
    let l,
      o = !1
    const a = () => {
        const u = e.show && e.forbidClick
        o !== u && ((o = u), Qe(o))
      },
      c = (u) => t('update:show', u),
      s = () => {
        e.closeOnClick && c(!1)
      },
      v = () => clearTimeout(l),
      h = () => {
        const { icon: u, type: d, iconSize: y, iconPrefix: C, loadingType: g } = e
        if (u || d === 'success' || d === 'fail')
          return i(ne, { name: u || d, size: y, class: w('icon'), classPrefix: C }, null)
        if (d === 'loading') return i(Me, { class: w('loading'), size: y, type: g }, null)
      },
      f = () => {
        const { type: u, message: d } = e
        if (n.message) return i('div', { class: w('text') }, [n.message()])
        if (M(d) && d !== '')
          return u === 'html'
            ? i('div', { key: 0, class: w('text'), innerHTML: String(d) }, null)
            : i('div', { class: w('text') }, [d])
      }
    return (
      P(() => [e.show, e.forbidClick], a),
      P(
        () => [e.show, e.type, e.message, e.duration],
        () => {
          ;(v(),
            e.show &&
              e.duration > 0 &&
              (l = setTimeout(() => {
                c(!1)
              }, e.duration)))
        }
      ),
      J(a),
      Ce(a),
      () =>
        i(
          qe,
          B(
            {
              class: [
                w([
                  e.position,
                  e.wordBreak === 'normal' ? 'break-normal' : e.wordBreak,
                  { [e.type]: !e.icon }
                ]),
                e.className
              ],
              lockScroll: !1,
              onClick: s,
              onClosed: v,
              'onUpdate:show': c
            },
            ze(e, et)
          ),
          { default: () => [h(), f()] }
        )
    )
  }
})
function ot() {
  const e = Oe({ show: !1 }),
    t = (o) => {
      e.show = o
    },
    n = (o) => {
      ;(S(e, o, { transitionAppear: !0 }), t(!0))
    },
    l = () => t(!1)
  return (oe({ open: n, close: l, toggle: t }), { open: n, close: l, state: e, toggle: t })
}
function at(e) {
  const t = ge(e),
    n = document.createElement('div')
  return (
    document.body.appendChild(n),
    {
      instance: t.mount(n),
      unmount() {
        ;(t.unmount(), document.body.removeChild(n))
      }
    }
  )
}
const st = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: !1,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: 'body',
  iconSize: void 0,
  iconPrefix: void 0,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: !1,
  loadingType: void 0,
  overlayClass: '',
  overlayStyle: void 0,
  closeOnClick: !1,
  closeOnClickOverlay: !1
}
let _ = [],
  lt = !1,
  H = S({}, st)
const ct = new Map()
function it(e) {
  return Ae(e) ? e : { message: e }
}
function rt() {
  const { instance: e, unmount: t } = at({
    setup() {
      const n = m(''),
        { open: l, state: o, close: a, toggle: c } = ot(),
        s = () => {},
        v = () => i(nt, B(o, { onClosed: s, 'onUpdate:show': c }), null)
      return (
        P(n, (h) => {
          o.message = h
        }),
        (R().render = v),
        { open: l, close: a, message: n }
      )
    }
  })
  return e
}
function ut() {
  if (!_.length || lt) {
    const e = rt()
    _.push(e)
  }
  return _[_.length - 1]
}
function yt(e = {}) {
  if (!Be) return {}
  const t = ut(),
    n = it(e)
  return (t.open(S({}, H, ct.get(n.type || H.type), n)), t)
}
export {
  Me as L,
  qe as P,
  yt as a,
  Ye as b,
  X as c,
  ft as d,
  ot as e,
  at as m,
  ae as p,
  nt as s,
  oe as u
}
