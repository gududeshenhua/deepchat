import { u as b, D as y } from './app-79cffc0b.js'
import { D as s } from './DeviceControlScreen-7db39cef.js'
import {
  y as V,
  at as w,
  r,
  b as S,
  a8 as k,
  u as i,
  f as c,
  G as u,
  H as p,
  N as m
} from './vue-66851fce.js'
import { _ as x } from './index-ae33a03d.js'
import './element-74718691.js'
import './v4-3a210e2e.js'
import './index-e81b6066.js'
import './index-b201494c.js'
import './index-96d3c23e.js'
import './vxe-562f9a54.js'
const D = V({
  __name: 'ConnectCloudHost',
  props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
  emits: ['update:visible'],
  setup(e, { emit: f }) {
    const C = b(),
      { device: v } = w(C),
      _ = f,
      o = r(!0),
      t = r(null),
      n = () => {
        ;(t.value && t.value.stop(), _('update:visible', !1))
      }
    return (
      S(() => {}),
      (H, a) => {
        const d = k('el-drawer')
        return i(v) === i(y).Mobile
          ? (c(),
            u(
              d,
              {
                key: 0,
                class: 'connect_drawer',
                modelValue: o.value,
                'onUpdate:modelValue': a[0] || (a[0] = (l) => (o.value = l)),
                title: '云主机（'.concat(e.padCode, '）'),
                size: '100%',
                onClose: n
              },
              {
                default: p(() => [
                  m(
                    s,
                    { ref_key: 'deviceControlScreenRef', ref: t, 'pad-code': e.padCode },
                    null,
                    8,
                    ['pad-code']
                  )
                ]),
                _: 1
              },
              8,
              ['modelValue', 'title']
            ))
          : (c(),
            u(
              d,
              {
                key: 1,
                class: 'connect_drawer',
                modelValue: o.value,
                'onUpdate:modelValue': a[1] || (a[1] = (l) => (o.value = l)),
                title: '云主机（'.concat(e.padCode, '）'),
                size: '50vw',
                onClose: n
              },
              {
                default: p(() => [
                  m(
                    s,
                    { ref_key: 'deviceControlScreenRef', ref: t, 'pad-code': e.padCode },
                    null,
                    8,
                    ['pad-code']
                  )
                ]),
                _: 1
              },
              8,
              ['modelValue', 'title']
            ))
      }
    )
  }
})
const G = x(D, [['__scopeId', 'data-v-0b9e6b84']])
export { G as default }
