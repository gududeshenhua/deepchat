import { h as q, f as F, _ as O } from './index-ae33a03d.js'
import { d as W, t as G } from './index-e81b6066.js'
import { q as H } from './index-8f030fd5.js'
import {
  y as K,
  at as j,
  r as y,
  R as z,
  b as J,
  a8 as c,
  f as p,
  G as B,
  H as i,
  i as Q,
  N as d,
  L,
  M as C,
  u as n,
  h as T,
  F as P,
  a0 as x,
  K as X
} from './vue-66851fce.js'
import { E as g } from './element-74718691.js'
import './vxe-562f9a54.js'
const Y = { key: 0, class: 'el-form-item-tip' },
  Z = { class: 'dialog-footer' },
  ee = K({
    __name: 'BatchUpgradeRealImageDialog',
    props: {
      visible: { type: Boolean, default: !1 },
      padCodes: { type: Array, default: () => [] }
    },
    emits: ['update:visible', 'success'],
    setup(w, { emit: k }) {
      const { t } = q(),
        A = F(),
        { userInfo: f } = j(A),
        v = w,
        V = k,
        h = y(!1),
        l = z({
          imageId: '',
          upgradeImageConvertType: 'real',
          wipeData: !1,
          realPhoneTemplateId: null
        }),
        u = y([]),
        m = y([]),
        U = async () => {
          var s, e
          try {
            const a = await W()
            a.code === 200 && a.data && a.data.length > 0
              ? ((u.value = a.data.map((r) => ({
                  label: 'Android '.concat(r.androidVersion, '_').concat(r.imageVersion),
                  value: r.imageId.toLowerCase(),
                  version: r.androidVersion
                }))),
                (l.imageId = ((s = u.value[0]) == null ? void 0 : s.value) || ''),
                (e = u.value[0]) != null && e.version && _(u.value[0].version))
              : f.value.images &&
                ((u.value = f.value.images.ids),
                (l.imageId = f.value.images.ids[0].value),
                _(f.value.images.ids[0].version))
          } catch (a) {
            console.error('获取预热镜像失败:', a)
          }
        },
        _ = async (s) => {
          try {
            const e = await H({ androidImageVersion: s })
            e.code === 200 &&
              ((m.value = e.data.map((a) => ({
                label: ''.concat(a.brand, ' ').concat(a.model),
                value: a.id
              }))),
              m.value.length > 0
                ? (l.realPhoneTemplateId = m.value[0].value)
                : (l.realPhoneTemplateId = null))
          } catch (e) {
            console.error('获取ADI模板列表失败:', e)
          }
        },
        S = (s) => {
          const e = u.value.find((a) => a.value === s)
          e && e.version && _(e.version)
        },
        I = () => {
          V('update:visible', !1)
        },
        R = async () => {
          if (!v.padCodes || v.padCodes.length === 0) {
            g.error(t('instanceBatch.selectInstance'))
            return
          }
          if (!l.imageId) {
            g.error(t('instanceBatch.selectImage'))
            return
          }
          try {
            h.value = !0
            const s = {
                padCodes: v.padCodes,
                imageId: l.imageId,
                upgradeImageConvertType: l.upgradeImageConvertType,
                wipeData: l.wipeData,
                realPhoneTemplateId: l.realPhoneTemplateId
              },
              e = await G(s)
            if (e.data.failList && e.data.failList.length > 0) {
              let a = ''
              throw (
                e.data.failList.forEach((r) => {
                  a += ''.concat(r.padCode, ': ').concat(r.errMsg, '\n')
                }),
                g.error(a),
                new Error('部分实例升级镜像失败')
              )
            }
            ;(g.success(t('instanceBatch.upgradeImageSuccess')), V('success'), I())
          } catch (s) {
            ;(console.error(s), g.error(t('instanceBatch.operationFailed')))
          } finally {
            h.value = !1
          }
        }
      return (
        J(() => {
          U()
        }),
        (s, e) => {
          const a = c('el-option'),
            r = c('el-select'),
            $ = c('el-alert'),
            b = c('el-form-item'),
            E = c('el-switch'),
            M = c('el-form'),
            D = c('el-button'),
            N = c('el-dialog')
          return (
            p(),
            B(
              N,
              {
                'model-value': w.visible,
                title: n(t)('instanceBatch.upgradeImageDialogTitle'),
                width: '500px',
                onClose: I
              },
              {
                footer: i(() => [
                  Q('span', Z, [
                    d(
                      D,
                      { onClick: I },
                      { default: i(() => [L(C(n(t)('instanceBatch.cancel')), 1)]), _: 1 }
                    ),
                    d(
                      D,
                      { type: 'primary', loading: h.value, onClick: R },
                      { default: i(() => [L(C(n(t)('instanceBatch.confirm')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ])
                ]),
                default: i(() => [
                  d(
                    M,
                    { model: l, 'label-width': '120px' },
                    {
                      default: i(() => [
                        d(
                          b,
                          {
                            label: n(t)('instanceBatch.imageLabel'),
                            prop: 'imageId',
                            rules: [
                              {
                                required: !0,
                                message: n(t)('instanceBatch.selectImage'),
                                trigger: 'change'
                              }
                            ]
                          },
                          {
                            default: i(() => [
                              d(
                                r,
                                {
                                  modelValue: l.imageId,
                                  'onUpdate:modelValue': e[0] || (e[0] = (o) => (l.imageId = o)),
                                  placeholder: n(t)('instanceBatch.imagePlaceholder'),
                                  onChange: S
                                },
                                {
                                  default: i(() => [
                                    (p(!0),
                                    T(
                                      P,
                                      null,
                                      x(
                                        u.value,
                                        (o) => (
                                          p(),
                                          B(
                                            a,
                                            { key: o.value, label: o.label, value: o.value },
                                            null,
                                            8,
                                            ['label', 'value']
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue', 'placeholder']
                              ),
                              d(
                                $,
                                {
                                  title: n(t)('instanceBatch.versionUpgradeOnly'),
                                  type: 'info',
                                  closable: !1,
                                  style: { 'margin-top': '10px' }
                                },
                                null,
                                8,
                                ['title']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label', 'rules']
                        ),
                        d(
                          b,
                          { label: n(t)('instanceBatch.wipeDataLabel'), prop: 'wipeData' },
                          {
                            default: i(() => [
                              d(
                                E,
                                {
                                  modelValue: l.wipeData,
                                  'onUpdate:modelValue': e[1] || (e[1] = (o) => (l.wipeData = o))
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
                        d(
                          b,
                          {
                            label: n(t)('instanceBatch.adiTemplateLabel'),
                            prop: 'realPhoneTemplateId'
                          },
                          {
                            default: i(() => [
                              d(
                                r,
                                {
                                  modelValue: l.realPhoneTemplateId,
                                  'onUpdate:modelValue':
                                    e[2] || (e[2] = (o) => (l.realPhoneTemplateId = o)),
                                  placeholder: n(t)('instanceBatch.adiTemplatePlaceholder'),
                                  clearable: ''
                                },
                                {
                                  default: i(() => [
                                    (p(!0),
                                    T(
                                      P,
                                      null,
                                      x(
                                        m.value,
                                        (o) => (
                                          p(),
                                          B(
                                            a,
                                            { key: o.value, label: o.label, value: o.value },
                                            null,
                                            8,
                                            ['label', 'value']
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue', 'placeholder']
                              ),
                              m.value.length === 0
                                ? (p(),
                                  T('div', Y, C(n(t)('instanceBatch.noAdiTemplatesAvailable')), 1))
                                : X('', !0)
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
      )
    }
  })
const re = O(ee, [['__scopeId', 'data-v-74018e7b']])
export { re as default }
