import { Q as n, R as r, S as h, o as u } from './index-ba0a22a8.js'
import { r as c, b as d, n as a, d as l, N as p } from './vue-66851fce.js'
const g = (o, s) => {
  const t = c(),
    e = () => {
      t.value = u(o).height
    }
  return (
    d(() => {
      if ((a(e), s)) for (let i = 1; i <= 3; i++) setTimeout(e, 100 * i)
    }),
    n(() => a(e)),
    l([r, h], e),
    t
  )
}
function v(o, s) {
  const t = g(o, !0)
  return (e) =>
    p(
      'div',
      { class: s('placeholder'), style: { height: t.value ? ''.concat(t.value, 'px') : void 0 } },
      [e()]
    )
}
export { v as u }
