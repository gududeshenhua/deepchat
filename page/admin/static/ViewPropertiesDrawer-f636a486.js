import { l as V } from './index-8f030fd5.js'
import { h as x } from './index-ae33a03d.js'
import { E as B } from './element-74718691.js'
import {
  y as D,
  R as F,
  r as I,
  d as M,
  b as S,
  a8 as P,
  ag as E,
  f as s,
  G as c,
  H as r,
  I as A,
  h as u,
  N as i,
  u as l,
  L as m,
  M as _,
  F as v,
  a0 as L
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const T = { style: { width: '100%' } },
  j = D({
    __name: 'ViewPropertiesDrawer',
    props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
    emits: ['update:visible'],
    setup(y, { emit: C }) {
      const { t: a } = x(),
        p = y,
        g = C,
        t = F({
          padCode: '',
          modemPropertiesList: [],
          systemPropertiesList: [],
          settingPropertiesList: [],
          oaidPropertiesList: []
        }),
        b = I(!1)
      ;(M(
        () => p.visible,
        async (o) => {
          o && ((t.padCode = p.padCode), await w())
        }
      ),
        S(async () => {
          ;((t.padCode = p.padCode), await w())
        }))
      const w = async () => {
          if (p.padCode) {
            b.value = !0
            try {
              const o = await V({ padCode: p.padCode })
              ;((t.modemPropertiesList = o.data.modemPropertiesList || []),
                (t.systemPropertiesList = o.data.systemPropertiesList || []),
                (t.settingPropertiesList = o.data.settingPropertiesList || []),
                (t.oaidPropertiesList = o.data.oaidPropertiesList || []))
            } catch (o) {
              B.error(o.message || a('instanceList.viewPropertiesFetchFailed'))
            } finally {
              b.value = !1
            }
          }
        },
        h = () => {
          g('update:visible', !1)
        }
      return (o, z) => {
        const n = P('el-descriptions-item'),
          d = P('el-descriptions'),
          f = P('el-divider'),
          N = P('el-drawer'),
          k = E('loading')
        return (
          s(),
          c(
            N,
            {
              'model-value': p.visible,
              'onUpdate:modelValue': h,
              title: l(a)('instanceList.viewPropertiesTitle'),
              size: '800px'
            },
            {
              default: r(() => [
                A(
                  (s(),
                  u('div', T, [
                    i(
                      d,
                      {
                        title: l(a)('instanceList.viewPropertiesBasicInfo'),
                        column: 1,
                        border: ''
                      },
                      {
                        default: r(() => [
                          i(
                            n,
                            { label: l(a)('instanceList.viewPropertiesInstanceCode') },
                            { default: r(() => [m(_(t.padCode), 1)]), _: 1 },
                            8,
                            ['label']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['title']
                    ),
                    i(f),
                    i(
                      d,
                      {
                        title: l(a)('instanceList.viewPropertiesModemProperties'),
                        column: 1,
                        border: ''
                      },
                      {
                        default: r(() => [
                          (s(!0),
                          u(
                            v,
                            null,
                            L(
                              t.modemPropertiesList,
                              (e) => (
                                s(),
                                c(
                                  n,
                                  { key: e.propertiesName, label: e.propertiesName },
                                  { default: r(() => [m(_(e.propertiesValue), 1)]), _: 2 },
                                  1032,
                                  ['label']
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ['title']
                    ),
                    i(f),
                    i(
                      d,
                      {
                        title: l(a)('instanceList.viewPropertiesSystemProperties'),
                        column: 1,
                        border: ''
                      },
                      {
                        default: r(() => [
                          (s(!0),
                          u(
                            v,
                            null,
                            L(
                              t.systemPropertiesList,
                              (e) => (
                                s(),
                                c(
                                  n,
                                  { key: e.propertiesName, label: e.propertiesName },
                                  { default: r(() => [m(_(e.propertiesValue), 1)]), _: 2 },
                                  1032,
                                  ['label']
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ['title']
                    ),
                    i(f),
                    i(
                      d,
                      {
                        title: l(a)('instanceList.viewPropertiesSettingProperties'),
                        column: 1,
                        border: ''
                      },
                      {
                        default: r(() => [
                          (s(!0),
                          u(
                            v,
                            null,
                            L(
                              t.settingPropertiesList,
                              (e) => (
                                s(),
                                c(
                                  n,
                                  { key: e.propertiesName, label: e.propertiesName },
                                  { default: r(() => [m(_(e.propertiesValue), 1)]), _: 2 },
                                  1032,
                                  ['label']
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ['title']
                    ),
                    i(f),
                    i(
                      d,
                      {
                        title: l(a)('instanceList.viewPropertiesOaidProperties'),
                        column: 1,
                        border: ''
                      },
                      {
                        default: r(() => [
                          (s(!0),
                          u(
                            v,
                            null,
                            L(
                              t.oaidPropertiesList,
                              (e) => (
                                s(),
                                c(
                                  n,
                                  { key: e.propertiesName, label: e.propertiesName },
                                  { default: r(() => [m(_(e.propertiesValue), 1)]), _: 2 },
                                  1032,
                                  ['label']
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ['title']
                    )
                  ])),
                  [[k, b.value]]
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
export { j as default }
