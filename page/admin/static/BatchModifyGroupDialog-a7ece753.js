import { u as N } from './index-e81b6066.js'
import { g as T } from './index-c0fb52a7.js'
import { h as A } from './index-ae33a03d.js'
import { E as p } from './element-74718691.js'
import {
  y as E,
  r as d,
  R as b,
  b as I,
  d as S,
  a8 as a,
  f as m,
  G as M,
  H as o,
  N as s,
  L as v,
  M as G,
  u,
  h as q,
  F as H,
  a0 as P
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const Q = E({
  name: 'BatchModifyNoteDialog',
  __name: 'BatchModifyGroupDialog',
  props: { visible: { type: Boolean, default: !1 }, padCodes: { type: Array, default: () => [] } },
  emits: ['update:visible', 'success'],
  setup(w, { emit: x }) {
    const { t } = A(),
      f = w,
      _ = x,
      c = d(!0),
      r = b({ note: '' }),
      B = b({
        note: [
          {
            required: !0,
            message: t('groupManagement.batchModifyGroupRequired'),
            trigger: 'change'
          }
        ]
      }),
      g = d([]),
      k = async () => {
        try {
          const e = await T()
          g.value = e || []
        } catch (e) {
          ;(console.error('获取分组列表失败:', e), p.error(t('groupManagement.getGroupListFailed')))
        }
      }
    ;(I(() => {
      k()
    }),
      S(
        () => f.visible,
        (e) => {
          ;((c.value = e), e && (r.note = ''))
        }
      ))
    const i = () => {
        ;((c.value = !1), _('update:visible', !1))
      },
      h = d(),
      C = async () => {
        try {
          await h.value.validate()
        } catch (e) {
          return
        }
        try {
          const e = f.padCodes.map((n) => ({
            instance_id: n,
            update_data: { instance_name: n, local_group_uuid: r.note }
          }))
          ;(await N(e), p.success(t('groupManagement.batchModifyGroupSuccess')), _('success'), i())
        } catch (e) {
          ;(console.error(e), p.error(t('groupManagement.batchModifyGroupFailed')))
        }
      }
    return (e, n) => {
      const L = a('el-option'),
        R = a('el-select'),
        V = a('el-form-item'),
        D = a('el-form'),
        y = a('el-button'),
        F = a('el-dialog')
      return (
        m(),
        M(
          F,
          {
            'model-value': c.value,
            title: u(t)('groupManagement.batchModifyGroupTitle'),
            width: '500px',
            'before-close': i
          },
          {
            footer: o(() => [
              s(
                y,
                { onClick: i },
                { default: o(() => [v(G(u(t)('groupManagement.cancelButtonText')), 1)]), _: 1 }
              ),
              s(
                y,
                { type: 'primary', onClick: C },
                { default: o(() => [v(G(u(t)('groupManagement.confirmButtonText')), 1)]), _: 1 }
              )
            ]),
            default: o(() => [
              s(
                D,
                { ref_key: 'formRef', ref: h, model: r, rules: B, 'label-width': '80px' },
                {
                  default: o(() => [
                    s(
                      V,
                      { label: u(t)('groupManagement.batchModifyGroupLabel'), prop: 'note' },
                      {
                        default: o(() => [
                          s(
                            R,
                            {
                              modelValue: r.note,
                              'onUpdate:modelValue': n[0] || (n[0] = (l) => (r.note = l)),
                              placeholder: u(t)('groupManagement.batchModifyGroupPlaceholder'),
                              style: { width: '100%' }
                            },
                            {
                              default: o(() => [
                                (m(!0),
                                q(
                                  H,
                                  null,
                                  P(
                                    g.value,
                                    (l) => (
                                      m(),
                                      M(L, { key: l.uuid, label: l.name, value: l.uuid }, null, 8, [
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
