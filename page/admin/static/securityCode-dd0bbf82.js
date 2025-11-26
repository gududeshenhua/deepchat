import { z as a } from './index-ae33a03d.js'
import { G as s, E as m } from './element-74718691.js'
import { r as u, a7 as i } from './vue-66851fce.js'
import './vxe-562f9a54.js'
const x = async (o) => {
  try {
    const r = u(''),
      c = i('div', [
        i('p', o('common.pleaseEnterSecurityCode')),
        i('input', {
          id: 'security-code-input',
          type: 'text',
          placeholder: o('common.securityCodePlaceholder'),
          style: {
            width: '100%',
            padding: '8px',
            marginTop: '10px',
            border: '1px solid #dcdfe6',
            borderRadius: '4px',
            boxSizing: 'border-box'
          },
          onInput: (t) => {
            const e = t.target
            r.value = e.value
          }
        })
      ])
    return (
      (await s.confirm(c, o('common.securityVerification'), {
        confirmButtonText: o('common.confirm'),
        cancelButtonText: o('common.cancel'),
        type: 'warning',
        dangerouslyUseHTMLString: !0,
        beforeClose: async (t, e, n) => {
          if (t === 'confirm') {
            if (!r.value) {
              m.warning(o('common.securityCodeRequired'))
              return
            }
            try {
              ;((e.confirmButtonLoading = !0), await a(r.value), (e.confirmButtonLoading = !1), n())
            } catch (f) {
              e.confirmButtonLoading = !1
            }
          } else n()
        }
      })) === 'confirm'
    )
  } catch (r) {
    return !1
  }
}
export { x as verifySecurityCode }
