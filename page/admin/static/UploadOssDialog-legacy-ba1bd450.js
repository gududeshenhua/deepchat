System.register(
  [
    './index-legacy-bdc99882.js',
    './index-legacy-d4b804d0.js',
    './element-legacy-e7b6e573.js',
    './vue-legacy-7e5c1e5b.js',
    './vxe-legacy-cc8d3321.js'
  ],
  function (e, l) {
    'use strict'
    var t, n, a, r, i, o, u, f, d, s, c, m, g, p, M, v, y, U
    return {
      setters: [
        function (e) {
          t = e.a
        },
        function (e) {
          ;((n = e.h), (a = e._))
        },
        function (e) {
          r = e.E
        },
        function (e) {
          ;((i = e.y),
            (o = e.d),
            (u = e.b),
            (f = e.r),
            (d = e.R),
            (s = e.a8),
            (c = e.f),
            (m = e.G),
            (g = e.H),
            (p = e.N),
            (M = e.L),
            (v = e.M),
            (y = e.u),
            (U = e.K))
        },
        null
      ],
      execute: function () {
        var l = document.createElement('style')
        ;((l.textContent =
          '.dialog-footer[data-v-81f4c535]{display:flex;justify-content:flex-end}\n'),
          document.head.appendChild(l))
        var b = i({
          __name: 'UploadOssDialog',
          props: {
            visible: { type: Boolean, default: !1 },
            fileUrl: { type: String, default: '' },
            fileName: { type: String, default: '' },
            fileMd5: { type: String, default: '' },
            needUrl: { type: Boolean, default: !1 }
          },
          emits: ['update:visible', 'success'],
          setup: function (e, l) {
            var a = l.emit,
              i = e
            ;(o(
              function () {
                return i.visible
              },
              function (e) {
                e &&
                  ((_.fileUrl = i.fileUrl || ''),
                  (_.fileName = i.fileName || ''),
                  (_.fileMd5 = i.fileMd5 || ''))
              }
            ),
              u(function () {
                ;((_.fileUrl = i.fileUrl || ''),
                  (_.fileName = i.fileName || ''),
                  (_.fileMd5 = i.fileMd5 || ''))
              }))
            var b = a,
              N = n().t,
              h = f(),
              _ = d({ fileUrl: '', fileName: '', fileMd5: '' }),
              x = function () {
                b('update:visible', !1)
              },
              V = function () {
                h.value.validate(function (e) {
                  if (e) {
                    var l = {
                      fileUrl: _.fileUrl,
                      fileName: _.fileName + '.mp4',
                      fileMd5: _.fileMd5
                    }
                    t(l)
                      .then(function (e) {
                        ;(r.success(N('storageManagement.fileUploadSuccess')), b('success'), x())
                      })
                      .catch(function (e) {
                        ;(console.error('文件上传失败:', e),
                          r.error(N('storageManagement.fileUploadFailed')))
                      })
                  }
                })
              }
            return function (l, t) {
              var n = s('el-input'),
                a = s('el-form-item'),
                r = s('el-form'),
                i = s('el-button'),
                o = s('el-dialog')
              return (
                c(),
                m(
                  o,
                  {
                    'model-value': e.visible,
                    title: y(N)('storageManagement.uploadFileToCloud'),
                    width: '500px',
                    'before-close': x
                  },
                  {
                    footer: g(function () {
                      return [
                        p(
                          i,
                          { onClick: x },
                          {
                            default: g(function () {
                              return [M(v(y(N)('common.cancel')), 1)]
                            }),
                            _: 1
                          }
                        ),
                        p(
                          i,
                          { type: 'primary', onClick: V },
                          {
                            default: g(function () {
                              return [M(v(y(N)('common.confirm')), 1)]
                            }),
                            _: 1
                          }
                        )
                      ]
                    }),
                    default: g(function () {
                      return [
                        p(
                          r,
                          { model: _, 'label-width': '100px', ref_key: 'formRef', ref: h },
                          {
                            default: g(function () {
                              return [
                                e.needUrl
                                  ? (c(),
                                    m(
                                      a,
                                      {
                                        key: 0,
                                        label: y(N)('storageManagement.fileAddress'),
                                        prop: 'fileUrl',
                                        rules: [
                                          {
                                            required: !0,
                                            message: y(N)(
                                              'storageManagement.pleaseEnterFileAddress'
                                            ),
                                            trigger: 'blur'
                                          }
                                        ]
                                      },
                                      {
                                        default: g(function () {
                                          return [
                                            p(
                                              n,
                                              {
                                                modelValue: _.fileUrl,
                                                'onUpdate:modelValue':
                                                  t[0] ||
                                                  (t[0] = function (e) {
                                                    return (_.fileUrl = e)
                                                  }),
                                                placeholder: y(N)(
                                                  'storageManagement.enterFileAddress'
                                                )
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'placeholder']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['label', 'rules']
                                    ))
                                  : U('', !0),
                                p(
                                  a,
                                  {
                                    label: y(N)('storageManagement.fileName'),
                                    prop: 'fileName',
                                    rules: [
                                      {
                                        required: !0,
                                        message: y(N)('storageManagement.pleaseEnterFileName'),
                                        trigger: 'blur'
                                      }
                                    ]
                                  },
                                  {
                                    default: g(function () {
                                      return [
                                        p(
                                          n,
                                          {
                                            modelValue: _.fileName,
                                            'onUpdate:modelValue':
                                              t[1] ||
                                              (t[1] = function (e) {
                                                return (_.fileName = e)
                                              }),
                                            placeholder: y(N)('storageManagement.enterFileName')
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'placeholder']
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['label', 'rules']
                                ),
                                e.needUrl
                                  ? (c(),
                                    m(
                                      a,
                                      {
                                        key: 1,
                                        label: y(N)('storageManagement.fileMd5'),
                                        prop: 'fileMd5',
                                        rules: [
                                          {
                                            required: !0,
                                            message: y(N)('storageManagement.pleaseEnterFileMd5'),
                                            trigger: 'blur'
                                          }
                                        ]
                                      },
                                      {
                                        default: g(function () {
                                          return [
                                            p(
                                              n,
                                              {
                                                modelValue: _.fileMd5,
                                                'onUpdate:modelValue':
                                                  t[2] ||
                                                  (t[2] = function (e) {
                                                    return (_.fileMd5 = e)
                                                  }),
                                                placeholder: y(N)('storageManagement.enterFileMd5')
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'placeholder']
                                            )
                                          ]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['label', 'rules']
                                    ))
                                  : U('', !0)
                              ]
                            }),
                            _: 1
                          },
                          8,
                          ['model']
                        )
                      ]
                    }),
                    _: 1
                  },
                  8,
                  ['model-value', 'title']
                )
              )
            }
          }
        })
        e('default', a(b, [['__scopeId', 'data-v-81f4c535']]))
      }
    }
  }
)
