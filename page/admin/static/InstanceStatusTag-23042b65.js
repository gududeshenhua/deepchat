import { I as p } from './element-74718691.js'
import { h as d, _ as f } from './index-ae33a03d.js'
import {
  y,
  e as _,
  a8 as n,
  f as s,
  G as o,
  H as i,
  N as S,
  u as x,
  K as m,
  L as w,
  M as v
} from './vue-66851fce.js'
const I = y({
  __name: 'InstanceStatusTag',
  props: { status: { type: [String, Number], required: !0 } },
  setup(u) {
    const r = u,
      { t } = d(),
      e = _(() => {
        const a = {
          10: { text: t('instanceStatus.10'), type: 'success', loading: !1 },
          11: { text: t('instanceStatus.11'), type: 'warning', loading: !0 },
          12: { text: t('instanceStatus.12'), type: 'warning', loading: !0 },
          13: { text: t('instanceStatus.13'), type: 'warning', loading: !0 },
          14: { text: t('instanceStatus.14'), type: 'danger', loading: !1 },
          15: { text: t('instanceStatus.15'), type: 'info', loading: !1 },
          16: { text: t('instanceStatus.16'), type: 'warning', loading: !0 },
          17: { text: t('instanceStatus.17'), type: 'warning', loading: !0 },
          18: { text: t('instanceStatus.18'), type: 'danger', loading: !1 },
          19: { text: t('instanceStatus.19'), type: 'warning', loading: !0 },
          20: { text: t('instanceStatus.20'), type: 'warning', loading: !0 },
          21: { text: t('instanceStatus.21'), type: 'danger', loading: !1 },
          22: { text: t('instanceStatus.22'), type: 'danger', loading: !1 },
          23: { text: t('instanceStatus.23'), type: 'warning', loading: !0 },
          24: { text: t('instanceStatus.24'), type: 'danger', loading: !1 },
          25: { text: t('instanceStatus.25'), type: 'info', loading: !1 },
          26: { text: t('instanceStatus.26'), type: 'warning', loading: !0 }
        }
        try {
          return (
            a[r.status.toString()] || {
              text: t('instanceStatus.unknownStatus'),
              type: 'info',
              loading: !1
            }
          )
        } catch (c) {
          return { text: t('instanceStatus.unknownStatus'), type: 'info', loading: !1 }
        }
      })
    return (a, c) => {
      const l = n('el-icon'),
        g = n('el-tag')
      return (
        s(),
        o(
          g,
          { type: e.value.type },
          {
            default: i(() => [
              e.value.loading
                ? (s(),
                  o(l, { key: 0, class: 'is-loading' }, { default: i(() => [S(x(p))]), _: 1 }))
                : m('', !0),
              w(' ' + v(e.value.text), 1)
            ]),
            _: 1
          },
          8,
          ['type']
        )
      )
    }
  }
})
const N = f(I, [['__scopeId', 'data-v-c6f4bbf7']])
export { N as I }
