import { a as F } from './index-b201494c.js'
import { h as k, _ as S } from './index-ae33a03d.js'
import { E as b } from './element-74718691.js'
import {
  y as D,
  d as E,
  b as w,
  r as A,
  R as B,
  a8 as d,
  f as c,
  G as g,
  H as o,
  N as s,
  L as N,
  M as v,
  u as a,
  K as y
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const O = D({
  __name: 'UploadOssDialog',
  props: {
    visible: { type: Boolean, default: !1 },
    fileUrl: { type: String, default: '' },
    fileName: { type: String, default: '' },
    fileMd5: { type: String, default: '' },
    needUrl: { type: Boolean, default: !1 }
  },
  emits: ['update:visible', 'success'],
  setup(f, { emit: V }) {
    const r = f
    ;(E(
      () => r.visible,
      (m) => {
        m &&
          ((e.fileUrl = r.fileUrl || ''),
          (e.fileName = r.fileName || ''),
          (e.fileMd5 = r.fileMd5 || ''))
      }
    ),
      w(() => {
        ;((e.fileUrl = r.fileUrl || ''),
          (e.fileName = r.fileName || ''),
          (e.fileMd5 = r.fileMd5 || ''))
      }))
    const _ = V,
      { t: l } = k(),
      M = A(),
      e = B({ fileUrl: '', fileName: '', fileMd5: '' }),
      u = () => {
        _('update:visible', !1)
      },
      h = () => {
        M.value.validate((m) => {
          if (m) {
            const t = { fileUrl: e.fileUrl, fileName: e.fileName + '.mp4', fileMd5: e.fileMd5 }
            F(t)
              .then((i) => {
                ;(b.success(l('storageManagement.fileUploadSuccess')), _('success'), u())
              })
              .catch((i) => {
                ;(console.error('文件上传失败:', i),
                  b.error(l('storageManagement.fileUploadFailed')))
              })
          }
        })
      }
    return (m, t) => {
      const i = d('el-input'),
        p = d('el-form-item'),
        x = d('el-form'),
        U = d('el-button'),
        C = d('el-dialog')
      return (
        c(),
        g(
          C,
          {
            'model-value': f.visible,
            title: a(l)('storageManagement.uploadFileToCloud'),
            width: '500px',
            'before-close': u
          },
          {
            footer: o(() => [
              s(U, { onClick: u }, { default: o(() => [N(v(a(l)('common.cancel')), 1)]), _: 1 }),
              s(
                U,
                { type: 'primary', onClick: h },
                { default: o(() => [N(v(a(l)('common.confirm')), 1)]), _: 1 }
              )
            ]),
            default: o(() => [
              s(
                x,
                { model: e, 'label-width': '100px', ref_key: 'formRef', ref: M },
                {
                  default: o(() => [
                    f.needUrl
                      ? (c(),
                        g(
                          p,
                          {
                            key: 0,
                            label: a(l)('storageManagement.fileAddress'),
                            prop: 'fileUrl',
                            rules: [
                              {
                                required: !0,
                                message: a(l)('storageManagement.pleaseEnterFileAddress'),
                                trigger: 'blur'
                              }
                            ]
                          },
                          {
                            default: o(() => [
                              s(
                                i,
                                {
                                  modelValue: e.fileUrl,
                                  'onUpdate:modelValue': t[0] || (t[0] = (n) => (e.fileUrl = n)),
                                  placeholder: a(l)('storageManagement.enterFileAddress')
                                },
                                null,
                                8,
                                ['modelValue', 'placeholder']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label', 'rules']
                        ))
                      : y('', !0),
                    s(
                      p,
                      {
                        label: a(l)('storageManagement.fileName'),
                        prop: 'fileName',
                        rules: [
                          {
                            required: !0,
                            message: a(l)('storageManagement.pleaseEnterFileName'),
                            trigger: 'blur'
                          }
                        ]
                      },
                      {
                        default: o(() => [
                          s(
                            i,
                            {
                              modelValue: e.fileName,
                              'onUpdate:modelValue': t[1] || (t[1] = (n) => (e.fileName = n)),
                              placeholder: a(l)('storageManagement.enterFileName')
                            },
                            null,
                            8,
                            ['modelValue', 'placeholder']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label', 'rules']
                    ),
                    f.needUrl
                      ? (c(),
                        g(
                          p,
                          {
                            key: 1,
                            label: a(l)('storageManagement.fileMd5'),
                            prop: 'fileMd5',
                            rules: [
                              {
                                required: !0,
                                message: a(l)('storageManagement.pleaseEnterFileMd5'),
                                trigger: 'blur'
                              }
                            ]
                          },
                          {
                            default: o(() => [
                              s(
                                i,
                                {
                                  modelValue: e.fileMd5,
                                  'onUpdate:modelValue': t[2] || (t[2] = (n) => (e.fileMd5 = n)),
                                  placeholder: a(l)('storageManagement.enterFileMd5')
                                },
                                null,
                                8,
                                ['modelValue', 'placeholder']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label', 'rules']
                        ))
                      : y('', !0)
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
const H = S(O, [['__scopeId', 'data-v-81f4c535']])
export { H as default }
