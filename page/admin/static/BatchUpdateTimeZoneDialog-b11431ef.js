import { l as x } from './index-e81b6066.js'
import { h as U, _ as w } from './index-ae33a03d.js'
import { E as c } from './element-74718691.js'
import {
  y as V,
  r as _,
  a8 as o,
  f as k,
  G as D,
  H as t,
  N as n,
  L as f,
  M as h,
  u as l
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const M = V({
  __name: 'BatchUpdateTimeZoneDialog',
  props: { visible: { type: Boolean, default: !1 }, padCodes: { type: Array, default: () => [] } },
  emits: ['update:visible', 'success'],
  setup(m, { emit: v }) {
    const { t: e } = U(),
      b = m,
      p = v,
      s = _(''),
      r = _(!1),
      d = () => {
        p('update:visible', !1)
      },
      B = async () => {
        if (!s.value) {
          c.warning(e('instanceBatch.enterTimeZone'))
          return
        }
        r.value = !0
        try {
          const i = { padCodes: b.padCodes, timeZone: s.value },
            a = await x(i)
          a.code === 200
            ? (c.success(e('instanceBatch.batchUpdateTimeZoneSuccess')), p('success'), d())
            : c.error(a.msg || e('instanceBatch.timeZoneSettingFailed'))
        } catch (i) {
          ;(console.error(i), c.error(e('instanceBatch.updateTimeZoneFailed')))
        } finally {
          r.value = !1
        }
      }
    return (i, a) => {
      const g = o('el-input'),
        y = o('el-form-item'),
        Z = o('el-form'),
        u = o('el-button'),
        C = o('el-dialog')
      return (
        k(),
        D(
          C,
          {
            'model-value': m.visible,
            title: l(e)('instanceBatch.batchUpdateTimeZoneTitle'),
            width: '500px',
            'before-close': d
          },
          {
            footer: t(() => [
              n(
                u,
                { onClick: d },
                { default: t(() => [f(h(l(e)('instanceBatch.cancel')), 1)]), _: 1 }
              ),
              n(
                u,
                { type: 'primary', onClick: B, loading: r.value },
                { default: t(() => [f(h(l(e)('instanceBatch.confirm')), 1)]), _: 1 },
                8,
                ['loading']
              )
            ]),
            default: t(() => [
              n(
                Z,
                { 'label-width': '100px' },
                {
                  default: t(() => [
                    n(
                      y,
                      { label: l(e)('instanceBatch.timeZoneLabel') },
                      {
                        default: t(() => [
                          n(
                            g,
                            {
                              modelValue: s.value,
                              'onUpdate:modelValue': a[0] || (a[0] = (T) => (s.value = T)),
                              modelModifiers: { trim: !0 },
                              placeholder: l(e)('instanceBatch.timeZonePlaceholder'),
                              style: { width: '100%' }
                            },
                            null,
                            8,
                            ['modelValue', 'placeholder']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          },
          8,
          ['model-value', 'title']
        )
      )
    }
  }
})
const L = w(M, [['__scopeId', 'data-v-ba6e96ad']])
export { L as default }
