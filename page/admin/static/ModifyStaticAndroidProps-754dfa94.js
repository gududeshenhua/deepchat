import { e as E } from './index-8f030fd5.js'
import { h as I, _ as D } from './index-ae33a03d.js'
import { E as k } from './element-74718691.js'
import {
  y as F,
  R,
  r as T,
  b as $,
  a8 as r,
  f as u,
  G as b,
  H as s,
  N as o,
  L as m,
  M as f,
  u as l,
  h as V,
  F as G,
  a0 as H,
  K
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const j = F({
  __name: 'ModifyStaticAndroidProps',
  props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
  emits: ['update:visible', 'success'],
  setup(C, { emit: h }) {
    const { t: e } = I(),
      y = C,
      _ = h,
      t = R({ padCode: '', restart: !0, props: {} }),
      n = T([{ key: '', value: '' }])
    $(() => {
      ;((t.padCode = y.padCode), (t.restart = !0), (n.value = [{ key: '', value: '' }]))
    })
    const g = () => {
        n.value.push({ key: '', value: '' })
      },
      L = (i) => {
        n.value.length > 1 && n.value.splice(i, 1)
      },
      w = () => {
        const i = {}
        return (
          n.value.forEach((a) => {
            a.key && a.value && (i[a.key] = a.value)
          }),
          i
        )
      },
      x = async () => {
        try {
          ;((t.padCode = y.padCode),
            (t.props = w()),
            await E(t),
            k.success(e('instanceList.modifyStaticAndroidPropsSuccess')),
            _('update:visible', !1),
            _('success'))
        } catch (i) {
          ;(console.error(i), k.error(e('instanceList.modifyStaticAndroidPropsFailed')))
        }
      },
      S = (i) => {
        ;(_('update:visible', i),
          i && ((t.padCode = y.padCode), (t.restart = !1), (n.value = [{ key: '', value: '' }])))
      }
    return (i, a) => {
      const M = r('el-alert'),
        v = r('el-input'),
        P = r('el-form-item'),
        U = r('el-switch'),
        p = r('el-button'),
        N = r('el-form'),
        B = r('el-dialog')
      return (
        u(),
        b(
          B,
          {
            'model-value': C.visible,
            title: l(e)('instanceList.modifyStaticAndroidPropsTitle'),
            width: '500px',
            'onUpdate:modelValue': S
          },
          {
            footer: s(() => [
              o(
                p,
                { onClick: a[2] || (a[2] = (d) => S(!1)) },
                {
                  default: s(() => [m(f(l(e)('instanceList.modifyStaticAndroidPropsCancel')), 1)]),
                  _: 1
                }
              ),
              o(
                p,
                { type: 'primary', onClick: x },
                {
                  default: s(() => [m(f(l(e)('instanceList.modifyStaticAndroidPropsConfirm')), 1)]),
                  _: 1
                }
              )
            ]),
            default: s(() => [
              o(
                N,
                { model: t, 'label-width': '100px' },
                {
                  default: s(() => [
                    o(
                      M,
                      {
                        title: l(e)('instanceList.modifyStaticAndroidPropsAlert'),
                        type: 'warning',
                        closable: !1,
                        'show-icon': ''
                      },
                      null,
                      8,
                      ['title']
                    ),
                    o(
                      P,
                      {
                        label: l(e)('instanceList.modifyStaticAndroidPropsInstanceId'),
                        'mt-5': ''
                      },
                      {
                        default: s(() => [
                          o(
                            v,
                            {
                              modelValue: t.padCode,
                              'onUpdate:modelValue': a[0] || (a[0] = (d) => (t.padCode = d)),
                              disabled: ''
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      P,
                      { label: l(e)('instanceList.modifyStaticAndroidPropsAutoRestart') },
                      {
                        default: s(() => [
                          o(
                            U,
                            {
                              modelValue: t.restart,
                              'onUpdate:modelValue': a[1] || (a[1] = (d) => (t.restart = d))
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    o(
                      P,
                      { label: l(e)('instanceList.modifyStaticAndroidPropsSystemProps') },
                      {
                        default: s(() => [
                          (u(!0),
                          V(
                            G,
                            null,
                            H(
                              n.value,
                              (d, A) => (
                                u(),
                                V('div', { key: A, class: 'property-item' }, [
                                  o(
                                    v,
                                    {
                                      modelValue: d.key,
                                      'onUpdate:modelValue': (c) => (d.key = c),
                                      modelModifiers: { trim: !0 },
                                      placeholder: l(e)(
                                        'instanceList.modifyStaticAndroidPropsPropName'
                                      ),
                                      style: { width: '40%', 'margin-right': '10px' }
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  ),
                                  o(
                                    v,
                                    {
                                      modelValue: d.value,
                                      'onUpdate:modelValue': (c) => (d.value = c),
                                      modelModifiers: { trim: !0 },
                                      placeholder: l(e)(
                                        'instanceList.modifyStaticAndroidPropsPropValue'
                                      ),
                                      style: { width: '40%', 'margin-right': '10px' }
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                  ),
                                  n.value.length > 1
                                    ? (u(),
                                      b(
                                        p,
                                        { key: 0, onClick: (c) => L(A), type: 'danger', link: '' },
                                        {
                                          default: s(() => [
                                            m(
                                              f(
                                                l(e)('instanceList.modifyStaticAndroidPropsDelete')
                                              ),
                                              1
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['onClick']
                                      ))
                                    : K('', !0)
                                ])
                              )
                            ),
                            128
                          )),
                          o(
                            p,
                            { onClick: g, type: 'primary', link: '' },
                            {
                              default: s(() => [
                                m(f(l(e)('instanceList.modifyStaticAndroidPropsAddProp')), 1)
                              ]),
                              _: 1
                            }
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
                ['model']
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
const W = D(j, [['__scopeId', 'data-v-a06ef6f6']])
export { W as default }
