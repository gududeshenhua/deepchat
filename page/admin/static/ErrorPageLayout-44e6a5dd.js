import { _ } from './index-ae33a03d.js'
import { a8 as e, f as n, h as c, i as d, z as l, N as t, H as o, L as i } from './vue-66851fce.js'
const p = {},
  u = { class: 'error-page' },
  f = { class: 'error-page-svg' }
function m(r, v) {
  const a = e('el-button'),
    s = e('router-link')
  return (
    n(),
    c('div', u, [
      d('div', f, [l(r.$slots, 'default', {}, void 0, !0)]),
      t(
        s,
        { to: '/' },
        {
          default: o(() => [
            t(a, { type: 'primary' }, { default: o(() => [i('回到首页')]), _: 1 })
          ]),
          _: 1
        }
      )
    ])
  )
}
const h = _(p, [
  ['render', m],
  ['__scopeId', 'data-v-5f207ac3']
])
export { h as E }
