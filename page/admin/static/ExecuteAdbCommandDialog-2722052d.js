import { e as E } from './index-e81b6066.js'
import { h as N } from './index-ae33a03d.js'
import { E as d } from './element-74718691.js'
import {
  y as R,
  r as u,
  R as x,
  d as S,
  a8 as s,
  f as I,
  G as M,
  H as o,
  N as l,
  L as h,
  M as p,
  u as a,
  i as q
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const z = { style: { 'margin-top': '5px', 'font-size': '12px', color: '#999' } },
  U = R({
    name: 'ExecuteAdbCommandDialog',
    __name: 'ExecuteAdbCommandDialog',
    props: {
      visible: { type: Boolean, default: !1 },
      padCodes: { type: Array, default: () => [] }
    },
    emits: ['update:visible', 'success'],
    setup(g, { emit: v }) {
      const { t: e } = N(),
        c = g,
        f = v,
        r = u(!0),
        i = u(!1),
        n = x({ scriptContent: '' }),
        y = x({
          scriptContent: [
            { required: !0, message: e('executeAdbCommand.enterAdbCommand'), trigger: 'blur' }
          ]
        })
      S(
        () => c.visible,
        (t) => {
          ;((r.value = t), t && (n.scriptContent = ''))
        }
      )
      const m = () => {
          ;((r.value = !1), f('update:visible', !1))
        },
        C = u(),
        A = async () => {
          try {
            await C.value.validate()
          } catch (t) {
            return
          }
          if (c.padCodes.length === 0) {
            d.warning(e('instanceBatch.executeAdbCommand.selectInstance'))
            return
          }
          i.value = !0
          try {
            const t = { padCodes: c.padCodes, scriptContent: n.scriptContent }
            ;(await E(t),
              d.success(e('instanceBatch.executeAdbCommand.submitSuccess')),
              f('success'),
              m())
          } catch (t) {
            ;(console.error(t), d.error(e('instanceBatch.executeAdbCommand.submitFailed')))
          } finally {
            i.value = !1
          }
        }
      return (t, b) => {
        const B = s('el-input'),
          w = s('el-form-item'),
          V = s('el-form'),
          _ = s('el-button'),
          k = s('el-dialog')
        return (
          I(),
          M(
            k,
            {
              'model-value': r.value,
              title: a(e)('instanceBatch.executeAdbCommand.title'),
              width: '600px',
              'before-close': m
            },
            {
              footer: o(() => [
                l(_, { onClick: m }, { default: o(() => [h(p(a(e)('common.cancel')), 1)]), _: 1 }),
                l(
                  _,
                  { type: 'primary', loading: i.value, onClick: A },
                  { default: o(() => [h(p(a(e)('common.execute')), 1)]), _: 1 },
                  8,
                  ['loading']
                )
              ]),
              default: o(() => [
                l(
                  V,
                  { ref_key: 'formRef', ref: C, model: n, rules: y, 'label-width': '100px' },
                  {
                    default: o(() => [
                      l(
                        w,
                        {
                          label: a(e)('instanceBatch.executeAdbCommand.label'),
                          prop: 'scriptContent'
                        },
                        {
                          default: o(() => [
                            l(
                              B,
                              {
                                modelValue: n.scriptContent,
                                'onUpdate:modelValue':
                                  b[0] || (b[0] = (D) => (n.scriptContent = D)),
                                type: 'textarea',
                                rows: 4,
                                placeholder: a(e)('instanceBatch.executeAdbCommand.placeholder')
                              },
                              null,
                              8,
                              ['modelValue', 'placeholder']
                            ),
                            q('div', z, p(a(e)('instanceBatch.executeAdbCommand.example')), 1)
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['model', 'rules']
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
export { U as default }
