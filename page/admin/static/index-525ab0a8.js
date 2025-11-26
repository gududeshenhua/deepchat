import { r as D, u as z } from './use-route-23d6e27a.js'
import {
  c as I,
  e as R,
  j as u,
  n as v,
  T as $,
  I as w,
  p as A,
  w as _,
  t as E,
  A as B,
  E as C
} from './index-ba0a22a8.js'
import { L as O } from './function-call-b9e3413a.js'
import { y as q, N as l } from './vue-66851fce.js'
const [U, c] = I('button'),
  j = R({}, D, {
    tag: u('button'),
    text: String,
    icon: String,
    type: u('default'),
    size: u('normal'),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: u('button'),
    loadingSize: v,
    loadingText: String,
    loadingType: String,
    iconPosition: u('left')
  })
var F = q({
  name: U,
  props: j,
  emits: ['click'],
  setup(e, { emit: t, slots: a }) {
    const m = z(),
      S = () =>
        a.loading
          ? a.loading()
          : l(O, { size: e.loadingSize, type: e.loadingType, class: c('loading') }, null),
      g = () => {
        if (e.loading) return S()
        if (a.icon) return l('div', { class: c('icon') }, [a.icon()])
        if (e.icon) return l(w, { name: e.icon, class: c('icon'), classPrefix: e.iconPrefix }, null)
      },
      y = () => {
        let n
        if ((e.loading ? (n = e.loadingText) : (n = a.default ? a.default() : e.text), n))
          return l('span', { class: c('text') }, [n])
      },
      h = () => {
        const { color: n, plain: r } = e
        if (n) {
          const o = { color: r ? n : 'white' }
          return (
            r || (o.background = n),
            n.includes('gradient') ? (o.border = 0) : (o.borderColor = n),
            o
          )
        }
      },
      i = (n) => {
        e.loading ? A(n) : e.disabled || (t('click', n), m())
      }
    return () => {
      const {
          tag: n,
          type: r,
          size: o,
          block: x,
          round: k,
          plain: P,
          square: d,
          loading: b,
          disabled: f,
          hairline: L,
          nativeType: N,
          iconPosition: T
        } = e,
        V = [
          c([
            r,
            o,
            { plain: P, block: x, round: k, square: d, loading: b, disabled: f, hairline: L }
          ]),
          { [$]: L }
        ]
      return l(
        n,
        { type: N, class: V, style: h(), disabled: f, onClick: i },
        {
          default: () => [
            l('div', { class: c('content') }, [T === 'left' && g(), y(), T === 'right' && g()])
          ]
        }
      )
    }
  }
})
const Y = _(F),
  [G, s] = I('cell'),
  H = {
    tag: u('div'),
    icon: String,
    size: String,
    title: v,
    value: v,
    label: v,
    center: Boolean,
    isLink: Boolean,
    border: E,
    iconPrefix: String,
    valueClass: B,
    labelClass: B,
    titleClass: B,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null }
  },
  J = R({}, H, D)
var K = q({
  name: G,
  props: J,
  setup(e, { slots: t }) {
    const a = z(),
      m = () => {
        if (t.label || C(e.label))
          return l('div', { class: [s('label'), e.labelClass] }, [t.label ? t.label() : e.label])
      },
      S = () => {
        var i
        if (t.title || C(e.title)) {
          const n = (i = t.title) == null ? void 0 : i.call(t)
          return Array.isArray(n) && n.length === 0
            ? void 0
            : l('div', { class: [s('title'), e.titleClass], style: e.titleStyle }, [
                n || l('span', null, [e.title]),
                m()
              ])
        }
      },
      g = () => {
        const i = t.value || t.default
        if (i || C(e.value))
          return l('div', { class: [s('value'), e.valueClass] }, [
            i ? i() : l('span', null, [e.value])
          ])
      },
      y = () => {
        if (t.icon) return t.icon()
        if (e.icon)
          return l(w, { name: e.icon, class: s('left-icon'), classPrefix: e.iconPrefix }, null)
      },
      h = () => {
        if (t['right-icon']) return t['right-icon']()
        if (e.isLink) {
          const i =
            e.arrowDirection && e.arrowDirection !== 'right'
              ? 'arrow-'.concat(e.arrowDirection)
              : 'arrow'
          return l(w, { name: i, class: s('right-icon') }, null)
        }
      }
    return () => {
      var i
      const { tag: n, size: r, center: o, border: x, isLink: k, required: P } = e,
        d = (i = e.clickable) != null ? i : k,
        b = { center: o, required: !!P, clickable: d, borderless: !x }
      return (
        r && (b[r] = !!r),
        l(
          n,
          { class: s(b), role: d ? 'button' : void 0, tabindex: d ? 0 : void 0, onClick: a },
          {
            default: () => {
              var f
              return [y(), S(), g(), h(), (f = t.extra) == null ? void 0 : f.call(t)]
            }
          }
        )
      )
    }
  }
})
const Z = _(K)
export { Y as B, Z as C, H as c }
