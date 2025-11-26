import { ap as n, R as r, r as d, d as p } from './vue-66851fce.js'
import { x as S, y as a } from './index-ae33a03d.js'
var s = ((e) => ((e[(e.Mobile = 0)] = 'Mobile'), (e[(e.Desktop = 1)] = 'Desktop'), e))(s || {})
const c = 'opened',
  i = 'closed'
function l(e) {
  e ? a(c) : a(i)
}
const A = n('app', () => {
  const e = r({ opened: S() !== i, withoutAnimation: !1 }),
    o = d(s.Desktop)
  return (
    p(
      () => e.opened,
      (t) => l(t)
    ),
    {
      device: o,
      sidebar: e,
      toggleSidebar: (t) => {
        ;((e.opened = !e.opened), (e.withoutAnimation = t))
      },
      closeSidebar: (t) => {
        ;((e.opened = !1), (e.withoutAnimation = t))
      },
      toggleDevice: (t) => {
        o.value = t
      }
    }
  )
})
export { s as D, A as u }
