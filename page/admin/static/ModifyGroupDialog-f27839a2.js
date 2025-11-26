import { u as D } from './index-e81b6066.js'
import { g as N } from './index-c0fb52a7.js'
import { h as E } from './index-ae33a03d.js'
import { E as d } from './element-74718691.js'
import {
  y as I,
  r as p,
  R as g,
  b as A,
  d as q,
  a8 as s,
  f as m,
  G as v,
  H as o,
  N as l,
  L,
  M as C,
  u as r,
  h as H,
  F as T,
  a0 as U
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const Q = I({
  name: 'ModifyNoteDialog',
  __name: 'ModifyGroupDialog',
  props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
  emits: ['update:visible', 'success'],
  setup(G, { emit: w }) {
    const { t } = E(),
      i = G,
      f = w,
      c = p(!0),
      a = g({ note: '' }),
      k = g({
        note: [{ required: !0, message: t('instanceList.pleaseSelectGroup'), trigger: 'change' }]
      }),
      _ = p([]),
      x = async () => {
        try {
          const e = await N()
          _.value = e || []
        } catch (e) {
          ;(console.error(t('instanceList.fetchGroupListFailed'), e),
            d.error(t('instanceList.fetchGroupListFailed')))
        }
      }
    ;(A(() => {
      x()
    }),
      q(
        () => i.visible,
        (e) => {
          ;((c.value = e), e && (a.note = ''))
        }
      ))
    const u = () => {
        ;((c.value = !1), f('update:visible', !1))
      },
      y = p(),
      M = async () => {
        try {
          await y.value.validate()
        } catch (e) {
          return
        }
        try {
          const e = { padCode: i.padCode, note: a.note }
          ;(await D([
            {
              instance_id: i.padCode,
              update_data: { instance_name: i.padCode, local_group_uuid: a.note }
            }
          ]),
            d.success(t('instanceList.modifyGroupSuccess')),
            f('success'),
            u())
        } catch (e) {
          ;(console.error(e), d.error(t('instanceList.modifyGroupFailed')))
        }
      }
    return (e, h) => {
      const V = s('el-option'),
        F = s('el-select'),
        R = s('el-form-item'),
        S = s('el-form'),
        b = s('el-button'),
        B = s('el-dialog')
      return (
        m(),
        v(
          B,
          {
            'model-value': c.value,
            title: r(t)('instanceList.modifyGroup'),
            width: '500px',
            'before-close': u
          },
          {
            footer: o(() => [
              l(b, { onClick: u }, { default: o(() => [L(C(r(t)('common.cancel')), 1)]), _: 1 }),
              l(
                b,
                { type: 'primary', onClick: M },
                { default: o(() => [L(C(r(t)('common.confirm')), 1)]), _: 1 }
              )
            ]),
            default: o(() => [
              l(
                S,
                { ref_key: 'formRef', ref: y, model: a, rules: k, 'label-width': '80px' },
                {
                  default: o(() => [
                    l(
                      R,
                      { label: r(t)('instanceList.batchModifyGroup'), prop: 'note' },
                      {
                        default: o(() => [
                          l(
                            F,
                            {
                              modelValue: a.note,
                              'onUpdate:modelValue': h[0] || (h[0] = (n) => (a.note = n)),
                              placeholder: r(t)('instanceList.group'),
                              style: { width: '100%' }
                            },
                            {
                              default: o(() => [
                                (m(!0),
                                H(
                                  T,
                                  null,
                                  U(
                                    _.value,
                                    (n) => (
                                      m(),
                                      v(V, { key: n.uuid, label: n.name, value: n.uuid }, null, 8, [
                                        'label',
                                        'value'
                                      ])
                                    )
                                  ),
                                  128
                                ))
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
export { Q as default }
