import { y as S, N as t, T } from './vue-66851fce.js'
import { c as k, t as y, j as B, H as I, I as P, w as h } from './index-ba0a22a8.js'
const [v, s] = k('tag'),
  w = {
    size: String,
    mark: Boolean,
    show: y,
    type: B('default'),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
  }
var x = S({
  name: v,
  props: w,
  emits: ['close'],
  setup(o, { slots: l, emit: r }) {
    const c = (e) => {
        ;(e.stopPropagation(), r('close', e))
      },
      i = () =>
        o.plain
          ? { color: o.textColor || o.color, borderColor: o.color }
          : { color: o.textColor, background: o.color },
      u = () => {
        var e
        const { type: d, mark: m, plain: g, round: f, size: a, closeable: C } = o,
          n = { mark: m, plain: g, round: f }
        a && (n[a] = a)
        const b = C && t(P, { name: 'cross', class: [s('close'), I], onClick: c }, null)
        return t('span', { style: i(), class: s([n, d]) }, [
          (e = l.default) == null ? void 0 : e.call(l),
          b
        ])
      }
    return () =>
      t(T, { name: o.closeable ? 'van-fade' : void 0 }, { default: () => [o.show ? u() : null] })
  }
})
const _ = h(x)
export { _ as T }
