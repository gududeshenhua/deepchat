import { n as x } from './index-e81b6066.js'
import { h as G, _ as U } from './index-ae33a03d.js'
import { E as i } from './element-74718691.js'
import {
  y as L,
  r as g,
  a8 as d,
  f as F,
  G as k,
  H as n,
  N as l,
  L as v,
  M as B,
  u as o
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const D = L({
  __name: 'BatchUpdateGpsDialog',
  props: { visible: { type: Boolean, default: !1 }, padCodes: { type: Array, default: () => [] } },
  emits: ['update:visible', 'success'],
  setup(f, { emit: b }) {
    const { t: e } = G(),
      y = f,
      _ = b,
      t = g({ longitude: '', latitude: '', altitude: '' }),
      c = g(!1),
      r = () => {
        _('update:visible', !1)
      },
      V = async () => {
        if (!t.value.longitude) {
          i.warning(e('instanceBatch.enterLongitude'))
          return
        }
        if (!t.value.latitude) {
          i.warning(e('instanceBatch.enterLatitude'))
          return
        }
        c.value = !0
        try {
          const u = {
              padCodes: y.padCodes,
              longitude: parseFloat(t.value.longitude),
              latitude: parseFloat(t.value.latitude),
              altitude: t.value.altitude ? parseFloat(t.value.altitude) : void 0
            },
            a = await x(u)
          a.code === 200
            ? (i.success(e('instanceBatch.batchSetGpsSuccess')), _('success'), r())
            : i.error(a.msg || e('instanceBatch.gpsSettingFailed'))
        } catch (u) {
          ;(console.error(u), i.error(e('instanceBatch.setGpsFailed')))
        } finally {
          c.value = !1
        }
      }
    return (u, a) => {
      const p = d('el-input'),
        m = d('el-form-item'),
        C = d('el-form'),
        h = d('el-button'),
        w = d('el-dialog')
      return (
        F(),
        k(
          w,
          {
            'model-value': f.visible,
            title: o(e)('instanceBatch.batchUpdateGpsTitle'),
            width: '500px',
            'before-close': r
          },
          {
            footer: n(() => [
              l(
                h,
                { onClick: r },
                { default: n(() => [v(B(o(e)('instanceBatch.cancel')), 1)]), _: 1 }
              ),
              l(
                h,
                { type: 'primary', onClick: V, loading: c.value },
                { default: n(() => [v(B(o(e)('instanceBatch.confirm')), 1)]), _: 1 },
                8,
                ['loading']
              )
            ]),
            default: n(() => [
              l(
                C,
                { 'label-width': '100px' },
                {
                  default: n(() => [
                    l(
                      m,
                      { label: o(e)('instanceBatch.longitudeLabel'), required: '' },
                      {
                        default: n(() => [
                          l(
                            p,
                            {
                              modelValue: t.value.longitude,
                              'onUpdate:modelValue':
                                a[0] || (a[0] = (s) => (t.value.longitude = s)),
                              placeholder: o(e)('instanceBatch.longitudePlaceholder'),
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
                    ),
                    l(
                      m,
                      { label: o(e)('instanceBatch.latitudeLabel'), required: '' },
                      {
                        default: n(() => [
                          l(
                            p,
                            {
                              modelValue: t.value.latitude,
                              'onUpdate:modelValue': a[1] || (a[1] = (s) => (t.value.latitude = s)),
                              placeholder: o(e)('instanceBatch.latitudePlaceholder'),
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
                    ),
                    l(
                      m,
                      { label: o(e)('instanceBatch.altitudeLabel') },
                      {
                        default: n(() => [
                          l(
                            p,
                            {
                              modelValue: t.value.altitude,
                              'onUpdate:modelValue': a[2] || (a[2] = (s) => (t.value.altitude = s)),
                              placeholder: o(e)('instanceBatch.altitudePlaceholder'),
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
const E = U(D, [['__scopeId', 'data-v-96007063']])
export { E as default }
