import { h as B, _ as U } from './index-ae33a03d.js'
import {
  y as A,
  r as f,
  d as G,
  a8 as t,
  f as v,
  G as b,
  H as l,
  N as e,
  L as c,
  M as r,
  u as a,
  K as x
} from './vue-66851fce.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
const H = A({
  __name: 'ClusterWindowsDialog',
  props: {
    visible: { type: Boolean, default: !0 },
    selectedInstances: { type: Array, default: () => [] }
  },
  emits: ['update:visible', 'confirm'],
  setup(L, { emit: k }) {
    const { t: o } = B(),
      _ = L,
      w = k,
      u = f(_.visible),
      s = f(1),
      m = f(6)
    G(
      () => _.visible,
      (y) => {
        u.value = y
      }
    )
    const p = () => {
        ;((u.value = !1), w('update:visible', !1))
      },
      M = () => {
        ;(w('confirm', { mode: s.value, count: m.value, instances: _.selectedInstances }), p())
      }
    return (y, n) => {
      const C = t('el-radio'),
        D = t('el-radio-group'),
        V = t('el-form-item'),
        i = t('el-option'),
        W = t('el-select'),
        h = t('el-alert'),
        I = t('el-form'),
        g = t('el-button'),
        N = t('el-dialog')
      return (
        v(),
        b(
          N,
          {
            modelValue: u.value,
            'onUpdate:modelValue': n[2] || (n[2] = (d) => (u.value = d)),
            title: a(o)('instanceList.clusterWindows'),
            width: '500px',
            'before-close': p
          },
          {
            footer: l(() => [
              e(g, { onClick: p }, { default: l(() => [c(r(a(o)('common.cancel')), 1)]), _: 1 }),
              e(
                g,
                { type: 'primary', onClick: M },
                { default: l(() => [c(r(a(o)('common.confirm')), 1)]), _: 1 }
              )
            ]),
            default: l(() => [
              e(I, null, {
                default: l(() => [
                  e(
                    V,
                    { label: a(o)('instanceList.windowMode') },
                    {
                      default: l(() => [
                        e(
                          D,
                          {
                            modelValue: s.value,
                            'onUpdate:modelValue': n[0] || (n[0] = (d) => (s.value = d))
                          },
                          {
                            default: l(() => [
                              e(
                                C,
                                { label: 1 },
                                {
                                  default: l(() => [c(r(a(o)('instanceList.tiledMode')), 1)]),
                                  _: 1
                                }
                              ),
                              e(
                                C,
                                { label: 2 },
                                {
                                  default: l(() => [c(r(a(o)('instanceList.overlayMode')), 1)]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue']
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['label']
                  ),
                  s.value === 1
                    ? (v(),
                      b(
                        V,
                        { key: 0, label: a(o)('instanceList.selectWindowCount') },
                        {
                          default: l(() => [
                            e(
                              W,
                              {
                                modelValue: m.value,
                                'onUpdate:modelValue': n[1] || (n[1] = (d) => (m.value = d)),
                                placeholder: a(o)('instanceList.windowCountPlaceholder')
                              },
                              {
                                default: l(() => [
                                  e(i, { label: '2', value: 2 }),
                                  e(i, { label: '4', value: 4 }),
                                  e(i, { label: '6', value: 6 }),
                                  e(i, { label: '8', value: 8 }),
                                  e(i, { label: '10', value: 10 })
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'placeholder']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ))
                    : x('', !0),
                  s.value === 2
                    ? (v(),
                      b(
                        h,
                        {
                          key: 1,
                          title: a(o)('instanceList.overlayModeDescription'),
                          type: 'info',
                          closable: !1,
                          style: { 'margin-top': '10px' }
                        },
                        null,
                        8,
                        ['title']
                      ))
                    : x('', !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          },
          8,
          ['modelValue', 'title']
        )
      )
    }
  }
})
const j = U(H, [['__scopeId', 'data-v-407acb48']])
export { j as default }
