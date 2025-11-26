System.register(
  [
    './index-legacy-bdc99882.js',
    './usePagination-legacy-5b27e706.js',
    './element-legacy-e7b6e573.js',
    './vue-legacy-7e5c1e5b.js',
    './index-legacy-d4b804d0.js',
    './vxe-legacy-cc8d3321.js'
  ],
  function (e, a) {
    'use strict'
    var t, n, l, i, o, u, r, c, d, p, s, f, g, v, m, h, w, x, y, b, C, z
    return {
      setters: [
        function (e) {
          ;((t = e.b), (n = e.f))
        },
        function (e) {
          l = e.u
        },
        function (e) {
          ;((i = e.E), (o = e.G))
        },
        function (e) {
          ;((u = e.y),
            (r = e.r),
            (c = e.R),
            (d = e.b),
            (p = e.d),
            (s = e.a8),
            (f = e.ag),
            (g = e.f),
            (v = e.G),
            (m = e.H),
            (h = e.i),
            (w = e.N),
            (x = e.L),
            (y = e.I),
            (b = e.M),
            (C = e.u))
        },
        function (e) {
          z = e._
        },
        null
      ],
      execute: function () {
        var a = document.createElement('style')
        ;((a.textContent =
          '.upload-file-drawer[data-v-57435ac4]{padding:20px;height:100%;display:flex;flex-direction:column}.upload-file-drawer .search-wrapper[data-v-57435ac4]{display:flex;align-items:center;margin-bottom:20px}.upload-file-drawer .auto-install-wrapper[data-v-57435ac4]{display:flex;align-items:center;margin-bottom:20px;gap:10px}.upload-file-drawer .pager-wrapper[data-v-57435ac4]{margin-top:20px;display:flex;justify-content:flex-start}.upload-file-drawer .footer[data-v-57435ac4]{margin-top:auto;padding-top:20px;display:flex;justify-content:flex-end;gap:10px}.upload-file-drawer[data-v-57435ac4] .selected-row{background-color:#f0f9ff}\n'),
          document.head.appendChild(a))
        var _ = { class: 'upload-file-drawer' },
          D = { class: 'search-wrapper' },
          S = { class: 'auto-install-wrapper' },
          M = { class: 'pager-wrapper' },
          P = { class: 'footer' },
          j = u({
            __name: 'UploadFileDrawer',
            props: { visible: { type: Boolean }, padCode: {} },
            emits: ['update:visible', 'success'],
            setup: function (e, a) {
              var u = a.emit,
                z = e,
                j = u,
                I = l(),
                N = I.paginationData,
                V = I.handleCurrentChange,
                k = I.handleSizeChange,
                T = r([]),
                U = r(!1),
                B = r(null)
              r('')
              var E = r([]),
                F = c({ fileName: '', page: 1, rows: 10 })
              d(function () {
                R()
              })
              var R = function () {
                  ;((U.value = !0),
                    t({ fileName: F.fileName || void 0, page: N.currentPage, rows: N.pageSize })
                      .then(function (e) {
                        ;((N.total = e.data.total), (T.value = e.data.pageData || []))
                      })
                      .catch(function (e) {
                        ;(console.error('获取文件列表失败:', e),
                          i.error('获取文件列表失败'),
                          (T.value = []))
                      })
                      .finally(function () {
                        U.value = !1
                      }))
                },
                q = function () {
                  1 === N.currentPage ? R() : (N.currentPage = 1)
                },
                G = function () {
                  ;((F.fileName = ''), q())
                },
                L = null,
                A = function () {
                  ;(clearTimeout(L),
                    (L = setTimeout(function () {
                      q()
                    }, 500)))
                },
                H = function (e) {
                  E.value = e
                },
                $ = r(0),
                J = function () {
                  0 !== E.value.length
                    ? o
                        .prompt('请输入自定义路径', '上传文件', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          inputPattern: /^\/((DCIM|Documents|Download|Movies|Music|Pictures)\/)?$/,
                          inputErrorMessage: '路径格式不正确',
                          inputValue: '/Documents/'
                        })
                        .then(function (e) {
                          var a = e.value,
                            t = E.value.map(function (e) {
                              var t = {
                                padCodes: [z.padCode],
                                fileUniqueId: e.fileUniqueId,
                                autoInstall: $.value,
                                customizeFilePath: a,
                                isAuthorization: !1
                              }
                              return n(t)
                            })
                          Promise.all(t)
                            .then(function (e) {
                              ;(i.success('成功上传 '.concat(e.length, ' 个文件')),
                                j('success'),
                                K())
                            })
                            .catch(function (e) {
                              ;(console.error('文件上传到实例失败:', e),
                                i.error('部分或全部文件上传到实例失败'))
                            })
                        })
                        .catch(function () {
                          i.info('已取消上传')
                        })
                    : i.warning('请选择要上传的文件')
                },
                K = function () {
                  j('update:visible', !1)
                }
              return (
                p(
                  function () {
                    return z.visible
                  },
                  function (e) {
                    e && ((B.value = null), (E.value = []), R())
                  }
                ),
                p(
                  [
                    function () {
                      return N.currentPage
                    },
                    function () {
                      return N.pageSize
                    }
                  ],
                  R,
                  { immediate: !0 }
                ),
                function (e, a) {
                  var t = s('el-button'),
                    n = s('el-input'),
                    l = s('el-alert'),
                    i = s('el-text'),
                    o = s('el-switch'),
                    u = s('el-table-column'),
                    r = s('el-table'),
                    c = s('el-pagination'),
                    d = s('el-drawer'),
                    p = f('loading')
                  return (
                    g(),
                    v(
                      d,
                      {
                        title: '上传文件到实例',
                        'model-value': e.visible,
                        'onUpdate:modelValue': K,
                        size: '60%',
                        direction: 'rtl'
                      },
                      {
                        default: m(function () {
                          return [
                            h('div', _, [
                              h('div', D, [
                                w(
                                  n,
                                  {
                                    modelValue: F.fileName,
                                    'onUpdate:modelValue':
                                      a[0] ||
                                      (a[0] = function (e) {
                                        return (F.fileName = e)
                                      }),
                                    placeholder: '请输入文件名',
                                    style: { width: '300px', 'margin-right': '10px' },
                                    onInput: A
                                  },
                                  {
                                    append: m(function () {
                                      return [
                                        w(
                                          t,
                                          { onClick: G },
                                          {
                                            default: m(function () {
                                              return [x('清空')]
                                            }),
                                            _: 1
                                          }
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
                                ),
                                w(
                                  t,
                                  { icon: 'RefreshRight', onClick: R },
                                  {
                                    default: m(function () {
                                      return [x('刷新')]
                                    }),
                                    _: 1
                                  }
                                )
                              ]),
                              w(l, {
                                title:
                                  '支持的文件路径包括：/DCIM/, /Documents/, /Download/, /Movies/, /Music/, /Pictures/',
                                type: 'info',
                                'show-icon': '',
                                closable: !1,
                                style: { 'margin-bottom': '20px' }
                              }),
                              h('div', S, [
                                w(i, null, {
                                  default: m(function () {
                                    return [x('自动安装应用')]
                                  }),
                                  _: 1
                                }),
                                w(
                                  o,
                                  {
                                    modelValue: $.value,
                                    'onUpdate:modelValue':
                                      a[1] ||
                                      (a[1] = function (e) {
                                        return ($.value = e)
                                      }),
                                    'active-value': 1,
                                    'inactive-value': 0
                                  },
                                  null,
                                  8,
                                  ['modelValue']
                                )
                              ]),
                              y(
                                (g(),
                                v(
                                  r,
                                  {
                                    style: { 'margin-top': '20px' },
                                    data: T.value,
                                    onSelectionChange: H
                                  },
                                  {
                                    default: m(function () {
                                      return [
                                        w(u, { type: 'selection', width: '50' }),
                                        w(u, { prop: 'fileName', label: '文件名' }),
                                        w(
                                          u,
                                          { prop: 'fileSize', label: '文件大小' },
                                          {
                                            default: m(function (e) {
                                              var a = e.row
                                              return [
                                                x(
                                                  b((a.fileSize / 1024 / 1024).toFixed(2)) + ' MB ',
                                                  1
                                                )
                                              ]
                                            }),
                                            _: 1
                                          }
                                        ),
                                        w(u, { prop: 'fileMd5', label: '文件MD5' }),
                                        w(
                                          u,
                                          { prop: 'createdTime', label: '创建时间' },
                                          {
                                            default: m(function (e) {
                                              var a = e.row
                                              return [
                                                x(b(new Date(a.createdTime).toLocaleString()), 1)
                                              ]
                                            }),
                                            _: 1
                                          }
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['data']
                                )),
                                [[p, U.value]]
                              ),
                              h('div', M, [
                                w(
                                  c,
                                  {
                                    background: '',
                                    layout: C(N).layout,
                                    'page-sizes': C(N).pageSizes,
                                    total: C(N).total,
                                    'page-size': C(N).pageSize,
                                    'current-page': C(N).currentPage,
                                    onSizeChange: C(k),
                                    onCurrentChange: C(V)
                                  },
                                  null,
                                  8,
                                  [
                                    'layout',
                                    'page-sizes',
                                    'total',
                                    'page-size',
                                    'current-page',
                                    'onSizeChange',
                                    'onCurrentChange'
                                  ]
                                )
                              ]),
                              h('div', P, [
                                w(
                                  t,
                                  { onClick: K },
                                  {
                                    default: m(function () {
                                      return [x('取消')]
                                    }),
                                    _: 1
                                  }
                                ),
                                w(
                                  t,
                                  { type: 'primary', onClick: J, disabled: 0 === E.value.length },
                                  {
                                    default: m(function () {
                                      return [x('上传文件')]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['disabled']
                                )
                              ])
                            ])
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['model-value']
                    )
                  )
                }
              )
            }
          })
        e('default', z(j, [['__scopeId', 'data-v-57435ac4']]))
      }
    }
  }
)
