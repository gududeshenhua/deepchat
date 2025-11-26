import {
  y as J,
  at as j,
  r as g,
  aq as K,
  aw as W,
  R as Q,
  b as X,
  ak as Y,
  a8 as c,
  f as m,
  h as f,
  i as u,
  M as s,
  N as n,
  H as r,
  F as V,
  a0 as h,
  L as i,
  G as $
} from './vue-66851fce.js'
import { h as Z, f as x, o as ee, _ as ae } from './index-ae33a03d.js'
import { q as le, c as te } from './index-8f030fd5.js'
import { d as oe, f as ne } from './index-e81b6066.js'
import { g as se } from './index-c0fb52a7.js'
import { E as k } from './element-74718691.js'
import './vxe-562f9a54.js'
const re = { class: 'app-container' },
  ue = { class: 'app-content' },
  de = { class: 'section' },
  ie = { class: 'section' },
  ce = { class: 'section' },
  pe = { class: 'section' },
  me = { class: 'section' },
  ve = { class: 'section' },
  _e = { class: 'section' },
  ge = { class: 'section' },
  fe = { style: { display: 'flex', 'align-items': 'center', gap: '20px' } },
  be = { class: 'footer' },
  Ie = J({
    name: 'createInstance',
    __name: 'CreateInstance',
    setup(Ve) {
      const { t: y } = Z(),
        B = x(),
        { userInfo: d } = j(B),
        w = g('高端真机'),
        T = g('hot'),
        C = g(!1),
        L = K(),
        G = W(),
        S = ee(),
        U = [
          { label: '4GB', value: 4 },
          { label: '16GB', value: 16 },
          { label: '32GB', value: 32 },
          { label: '64GB', value: 64 },
          { label: '128GB', value: 128 },
          { label: '256GB', value: 256 }
        ],
        t = Q({
          clusterCode: '',
          specificationCode: '',
          imageId: '',
          number: 1,
          storageSize: 32,
          screenLayoutCode: '',
          randomADITemplates: !1,
          realPhoneTemplateId: null,
          countryCode: 'JP',
          groupId: 0,
          note: '',
          remark: '',
          local_group_uuid: ''
        }),
        _ = g([]),
        v = g([]),
        b = g([]),
        A = async () => {
          ;(d.value.specificationCode && (t.specificationCode = d.value.specificationCode),
            d.value.group_id !== '' && (t.groupId = d.value.group_id),
            d.value.cluster_name && (t.clusterCode = d.value.cluster_name))
          try {
            const a = await oe()
            a.code === 200 && a.data && a.data.length > 0
              ? ((v.value = a.data.map((e) => ({
                  label: 'Android '.concat(e.androidVersion, '_').concat(e.imageVersion),
                  value: e.imageId.toLowerCase(),
                  version: e.androidVersion
                }))),
                (t.imageId = v.value[0].value),
                I(v.value[0].version))
              : d.value.images &&
                ((v.value = d.value.images.ids),
                (t.imageId = d.value.images.ids[0].value),
                I(d.value.images.ids[0].version))
          } catch (a) {
            ;(console.error('获取预热镜像失败:', a),
              d.value.images &&
                ((v.value = d.value.images.ids),
                (t.imageId = d.value.images.ids[0].value),
                I(d.value.images.ids[0].version)))
          }
        },
        P = async () => {
          try {
            const a = await se()
            ;((_.value = a.map((e) => ({ label: e.name, value: e.name, uuid: e.uuid }))),
              _.value.length > 0 &&
                ((t.note = _.value[0].value), (t.local_group_uuid = _.value[0].uuid)))
          } catch (a) {
            console.error('获取分组列表失败:', a)
          }
        },
        R = (a) => {
          const e = _.value.find((o) => o.value === a)
          e && (t.local_group_uuid = e.uuid)
        },
        I = async (a) => {
          try {
            const e = await le({ androidImageVersion: a })
            e.code === 200 &&
              ((b.value = e.data.map((o) => ({
                label: ''.concat(o.brand, ' ').concat(o.model, ' '),
                value: o.id
              }))),
              b.value.length > 0
                ? (t.realPhoneTemplateId = b.value[0].value)
                : (t.realPhoneTemplateId = null))
          } catch (e) {
            console.error('获取ADI模板列表失败:', e)
          }
        },
        q = (a) => {
          const e = v.value.find((o) => o.value === a)
          e && e.version && I(e.version)
        }
      ;(X(async () => {
        ;(P(), await A())
      }),
        Y(() => {}))
      const z = async () => {
        if (t.number < 1 || t.number > 100) {
          k.error(y('createInstance.quantityValidation'))
          return
        }
        try {
          C.value = !0
          const e = (await te(t)).data.map((o) => {
            var p
            return {
              instance_id: o == null ? void 0 : o.padCode,
              instance_name: o == null ? void 0 : o.padCode,
              group_id: (p = d.value) == null ? void 0 : p.group_id,
              os_version: t.imageId,
              image: t.imageId,
              local_group_uuid: t.local_group_uuid,
              note: t.remark || '',
              status: 'init'
            }
          })
          ;(await ne({ instances: e }),
            k.success(y('createInstance.createSuccess')),
            S.delVisitedView(G),
            S.delCachedView(G),
            L.replace('/instance'))
        } catch (a) {
          k.error(a.message || y('createInstance.createFailed'))
        } finally {
          C.value = !1
        }
      }
      return (a, e) => {
        const o = c('el-radio'),
          p = c('el-radio-group'),
          N = c('el-tab-pane'),
          D = c('el-tabs'),
          M = c('el-option'),
          E = c('el-select'),
          O = c('el-input'),
          F = c('el-input-number'),
          H = c('el-button')
        return (
          m(),
          f('div', re, [
            u('div', ue, [
              u('div', de, [
                u('h4', null, s(a.$t('createInstance.androidVersion')), 1),
                n(
                  p,
                  {
                    modelValue: t.imageId,
                    'onUpdate:modelValue': e[0] || (e[0] = (l) => (t.imageId = l)),
                    onChange: q
                  },
                  {
                    default: r(() => [
                      (m(!0),
                      f(
                        V,
                        null,
                        h(
                          v.value,
                          (l) => (
                            m(),
                            $(
                              o,
                              { key: l.value, label: l.value, border: '' },
                              { default: r(() => [i(s(l.label), 1)]), _: 2 },
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
                  ['modelValue']
                )
              ]),
              u('div', ie, [
                u('h4', null, s(a.$t('createInstance.deviceModel')), 1),
                n(
                  p,
                  {
                    modelValue: w.value,
                    'onUpdate:modelValue': e[1] || (e[1] = (l) => (w.value = l))
                  },
                  {
                    default: r(() => [n(o, { label: '高端真机', value: '高端真机', border: '' })]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                )
              ]),
              u('div', ce, [
                u('h4', null, s(a.$t('createInstance.productModel')), 1),
                n(
                  D,
                  {
                    modelValue: T.value,
                    'onUpdate:modelValue': e[3] || (e[3] = (l) => (T.value = l))
                  },
                  {
                    default: r(() => [
                      n(
                        N,
                        { label: a.$t('createInstance.hot'), name: 'hot' },
                        {
                          default: r(() => [
                            n(
                              p,
                              {
                                modelValue: t.realPhoneTemplateId,
                                'onUpdate:modelValue':
                                  e[2] || (e[2] = (l) => (t.realPhoneTemplateId = l))
                              },
                              {
                                default: r(() => [
                                  (m(!0),
                                  f(
                                    V,
                                    null,
                                    h(
                                      b.value,
                                      (l) => (
                                        m(),
                                        $(
                                          o,
                                          { key: l.value, label: l.value, border: '' },
                                          { default: r(() => [i(s(l.label), 1)]), _: 2 },
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
                              ['modelValue']
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
                  ['modelValue']
                )
              ]),
              u('div', pe, [
                u('h4', null, s(a.$t('createInstance.productPackage')), 1),
                n(
                  p,
                  {
                    modelValue: t.countryCode,
                    'onUpdate:modelValue': e[4] || (e[4] = (l) => (t.countryCode = l))
                  },
                  {
                    default: r(() => [
                      n(
                        o,
                        { label: 'JP', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.japan')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'KR', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.korea')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'BR', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.brazil')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'VN', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.vietnam')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'US', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.usa')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'GB', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.uk')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'TH', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.thailand')), 1)]), _: 1 }
                      ),
                      n(
                        o,
                        { label: 'DE', border: '' },
                        { default: r(() => [i(s(a.$t('createInstance.germany')), 1)]), _: 1 }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                )
              ]),
              u('div', me, [
                u('h4', null, s(a.$t('createInstance.storageSize')), 1),
                n(
                  p,
                  {
                    modelValue: t.storageSize,
                    'onUpdate:modelValue': e[5] || (e[5] = (l) => (t.storageSize = l))
                  },
                  {
                    default: r(() => [
                      (m(),
                      f(
                        V,
                        null,
                        h(U, (l) =>
                          n(
                            o,
                            { key: l.value, label: l.value, border: '' },
                            { default: r(() => [i(s(l.label), 1)]), _: 2 },
                            1032,
                            ['label']
                          )
                        ),
                        64
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                )
              ]),
              u('div', ve, [
                u('h4', null, s(a.$t('createInstance.group')), 1),
                n(
                  E,
                  {
                    modelValue: t.note,
                    'onUpdate:modelValue': e[6] || (e[6] = (l) => (t.note = l)),
                    onChange: R,
                    placeholder: a.$t('createInstance.selectGroup'),
                    style: { width: '200px' }
                  },
                  {
                    default: r(() => [
                      (m(!0),
                      f(
                        V,
                        null,
                        h(
                          _.value,
                          (l) => (
                            m(),
                            $(M, { key: l.value, label: l.label, value: l.label }, null, 8, [
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
              u('div', _e, [
                u('h4', null, s(a.$t('createInstance.remarkAlias')), 1),
                n(
                  O,
                  {
                    modelValue: t.remark,
                    'onUpdate:modelValue': e[7] || (e[7] = (l) => (t.remark = l)),
                    placeholder: a.$t('createInstance.enterRemark'),
                    style: { width: '300px' }
                  },
                  null,
                  8,
                  ['modelValue', 'placeholder']
                )
              ]),
              u('div', ge, [
                u('h4', null, s(a.$t('createInstance.quantityPrice')), 1),
                u('div', fe, [
                  n(
                    F,
                    {
                      modelValue: t.number,
                      'onUpdate:modelValue': e[8] || (e[8] = (l) => (t.number = l)),
                      min: 1,
                      max: 100,
                      style: { width: '150px' }
                    },
                    null,
                    8,
                    ['modelValue']
                  )
                ])
              ])
            ]),
            u('div', be, [
              n(
                H,
                { type: 'primary', onClick: z, loading: C.value },
                { default: r(() => [i(s(a.$t('createInstance.confirmCreate')), 1)]), _: 1 },
                8,
                ['loading']
              )
            ])
          ])
        )
      }
    }
  })
const Ge = ae(Ie, [['__scopeId', 'data-v-8a539c9e']])
export { Ge as default }
