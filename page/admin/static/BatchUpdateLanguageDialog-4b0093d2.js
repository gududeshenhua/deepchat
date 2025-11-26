import { m as U } from './index-e81b6066.js'
import { h as w, _ as V } from './index-ae33a03d.js'
import { E as i } from './element-74718691.js'
import {
  y as k,
  r as m,
  a8 as n,
  f as D,
  G as N,
  H as a,
  N as o,
  L as _,
  M as f,
  u as l
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const S = k({
  __name: 'BatchUpdateLanguageDialog',
  props: { visible: { type: Boolean, default: !1 }, padCodes: { type: Array, default: () => [] } },
  emits: ['update:visible', 'success'],
  setup(u, { emit: h }) {
    const { t: e } = w(),
      v = u,
      p = h,
      s = m(''),
      r = m(!1),
      d = () => {
        p('update:visible', !1)
      },
      B = async () => {
        if (!s.value) {
          i.warning(e('instanceBatch.enterLanguage'))
          return
        }
        r.value = !0
        try {
          const c = { padCodes: v.padCodes, language: s.value },
            t = await U(c)
          t.code === 200
            ? (i.success(e('instanceBatch.batchUpdateLanguageSuccess')), p('success'), d())
            : i.error(t.msg || e('instanceBatch.languageSettingFailed'))
        } catch (c) {
          ;(console.error(c), i.error(e('instanceBatch.updateLanguageFailed')))
        } finally {
          r.value = !1
        }
      }
    return (c, t) => {
      const b = n('el-input'),
        y = n('el-form-item'),
        C = n('el-form'),
        g = n('el-button'),
        L = n('el-dialog')
      return (
        D(),
        N(
          L,
          {
            'model-value': u.visible,
            title: l(e)('instanceBatch.batchUpdateLanguageTitle'),
            width: '500px',
            'before-close': d
          },
          {
            footer: a(() => [
              o(
                g,
                { onClick: d },
                { default: a(() => [_(f(l(e)('instanceBatch.cancel')), 1)]), _: 1 }
              ),
              o(
                g,
                { type: 'primary', onClick: B, loading: r.value },
                { default: a(() => [_(f(l(e)('instanceBatch.confirm')), 1)]), _: 1 },
                8,
                ['loading']
              )
            ]),
            default: a(() => [
              o(
                C,
                { 'label-width': '100px' },
                {
                  default: a(() => [
                    o(
                      y,
                      { label: l(e)('instanceBatch.languageLabel') },
                      {
                        default: a(() => [
                          o(
                            b,
                            {
                              modelValue: s.value,
                              'onUpdate:modelValue': t[0] || (t[0] = (x) => (s.value = x)),
                              placeholder: l(e)('instanceBatch.languagePlaceholder'),
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
const A = V(S, [['__scopeId', 'data-v-5e7da7f4']])
export { A as default }
