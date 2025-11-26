import { u as V } from './index-e81b6066.js'
import { h as D } from './index-ae33a03d.js'
import { E as h } from './element-74718691.js'
import {
  y as S,
  r as _,
  R as k,
  d as I,
  a8 as s,
  f as N,
  G as T,
  H as t,
  N as l,
  L as y,
  M as b,
  u as o
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const G = S({
  name: 'ModifyRemarkDialog',
  __name: 'ModifyRemarkDialog',
  props: { visible: { type: Boolean, default: !1 }, padCodes: { type: Array, default: () => [] } },
  emits: ['update:visible', 'success'],
  setup(d, { emit: g }) {
    const c = d,
      u = g,
      i = _(!0),
      { t: e } = D(),
      r = k({ remark: '' }),
      B = k({
        remark: [{ required: !0, message: e('instanceBatch.enterRemark'), trigger: 'blur' }]
      })
    I(
      () => c.visible,
      (a) => {
        ;((i.value = a), a && (r.remark = ''))
      }
    )
    const m = () => {
        ;((i.value = !1), u('update:visible', !1))
      },
      f = _(),
      R = async () => {
        try {
          await f.value.validate()
        } catch (a) {
          return
        }
        try {
          const a = c.padCodes.map((n) => ({
            instance_id: n,
            update_data: { instance_name: n, note: r.remark }
          }))
          ;(await V(a),
            h.success(
              c.padCodes.length > 1
                ? e('instanceBatch.batchModifyRemarkSuccess')
                : e('instanceBatch.modifyRemarkSuccess')
            ),
            u('success'),
            m())
        } catch (a) {
          ;(console.error(a),
            h.error(
              c.padCodes.length > 1
                ? e('instanceBatch.batchModifyRemarkFailed')
                : e('instanceBatch.modifyRemarkFailed')
            ))
        }
      }
    return (a, n) => {
      const v = s('el-input'),
        C = s('el-form-item'),
        w = s('el-form'),
        p = s('el-button'),
        x = s('el-dialog')
      return (
        N(),
        T(
          x,
          {
            'model-value': i.value,
            title:
              d.padCodes.length > 1
                ? o(e)('instanceBatch.batchModifyRemarkTitle')
                : o(e)('instanceBatch.modifyRemarkTitle'),
            width: '500px',
            'before-close': m
          },
          {
            footer: t(() => [
              l(
                p,
                { onClick: m },
                { default: t(() => [y(b(o(e)('instanceBatch.cancel')), 1)]), _: 1 }
              ),
              l(
                p,
                { type: 'primary', onClick: R },
                { default: t(() => [y(b(o(e)('instanceBatch.confirm')), 1)]), _: 1 }
              )
            ]),
            default: t(() => [
              l(
                w,
                { ref_key: 'formRef', ref: f, model: r, rules: B, 'label-width': '100px' },
                {
                  default: t(() => [
                    l(
                      C,
                      { label: o(e)('instanceBatch.remarkLabel'), prop: 'remark' },
                      {
                        default: t(() => [
                          l(
                            v,
                            {
                              modelValue: r.remark,
                              'onUpdate:modelValue': n[0] || (n[0] = (M) => (r.remark = M)),
                              type: 'textarea',
                              placeholder: o(e)('instanceBatch.remarkPlaceholder'),
                              rows: 4,
                              maxlength: '200',
                              'show-word-limit': ''
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
export { G as default }
