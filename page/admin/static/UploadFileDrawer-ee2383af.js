import { b as J, f as K } from './index-b201494c.js'
import { u as O } from './usePagination-22ed0aad.js'
import { E as _, G as Q } from './element-74718691.js'
import {
  y as W,
  r as u,
  R as X,
  b as Y,
  d as x,
  a8 as n,
  ag as Z,
  f as M,
  G as P,
  H as o,
  i as g,
  N as e,
  L as i,
  I as ee,
  M as N,
  u as r
} from './vue-66851fce.js'
import { _ as ae } from './index-ae33a03d.js'
import './vxe-562f9a54.js'
const te = { class: 'upload-file-drawer' },
  le = { class: 'search-wrapper' },
  oe = { class: 'auto-install-wrapper' },
  ne = { class: 'pager-wrapper' },
  se = { class: 'footer' },
  ie = W({
    __name: 'UploadFileDrawer',
    props: { visible: { type: Boolean }, padCode: {} },
    emits: ['update:visible', 'success'],
    setup(V, { emit: I }) {
      const D = V,
        y = I,
        { paginationData: a, handleCurrentChange: U, handleSizeChange: B } = O(),
        h = u([]),
        v = u(!1),
        F = u(null)
      u('')
      const p = u([]),
        f = X({ fileName: '', page: 1, rows: 10 })
      Y(() => {
        d()
      })
      const d = () => {
          ;((v.value = !0),
            J({ fileName: f.fileName || void 0, page: a.currentPage, rows: a.pageSize })
              .then((t) => {
                ;((a.total = t.data.total), (h.value = t.data.pageData || []))
              })
              .catch((t) => {
                ;(console.error('获取文件列表失败:', t),
                  _.error('获取文件列表失败'),
                  (h.value = []))
              })
              .finally(() => {
                v.value = !1
              }))
        },
        z = () => {
          a.currentPage === 1 ? d() : (a.currentPage = 1)
        },
        T = () => {
          ;((f.fileName = ''), z())
        }
      let S = null
      const k = () => {
          ;(clearTimeout(S),
            (S = setTimeout(() => {
              z()
            }, 500)))
        },
        E = (t) => {
          p.value = t
        },
        b = u(0),
        L = () => {
          if (p.value.length === 0) {
            _.warning('请选择要上传的文件')
            return
          }
          Q.prompt('请输入自定义路径', '上传文件', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /^\/((DCIM|Documents|Download|Movies|Music|Pictures)\/)?$/,
            inputErrorMessage: '路径格式不正确',
            inputValue: '/Documents/'
          })
            .then(({ value: t }) => {
              const c = p.value.map((l) => {
                const w = {
                  padCodes: [D.padCode],
                  fileUniqueId: l.fileUniqueId,
                  autoInstall: b.value,
                  customizeFilePath: t,
                  isAuthorization: !1
                }
                return K(w)
              })
              Promise.all(c)
                .then((l) => {
                  ;(_.success('成功上传 '.concat(l.length, ' 个文件')), y('success'), C())
                })
                .catch((l) => {
                  ;(console.error('文件上传到实例失败:', l),
                    _.error('部分或全部文件上传到实例失败'))
                })
            })
            .catch(() => {
              _.info('已取消上传')
            })
        },
        C = () => {
          y('update:visible', !1)
        }
      return (
        x(
          () => D.visible,
          (t) => {
            t && ((F.value = null), (p.value = []), d())
          }
        ),
        x([() => a.currentPage, () => a.pageSize], d, { immediate: !0 }),
        (t, c) => {
          const l = n('el-button'),
            w = n('el-input'),
            A = n('el-alert'),
            R = n('el-text'),
            q = n('el-switch'),
            m = n('el-table-column'),
            G = n('el-table'),
            $ = n('el-pagination'),
            H = n('el-drawer'),
            j = Z('loading')
          return (
            M(),
            P(
              H,
              {
                title: '上传文件到实例',
                'model-value': t.visible,
                'onUpdate:modelValue': C,
                size: '60%',
                direction: 'rtl'
              },
              {
                default: o(() => [
                  g('div', te, [
                    g('div', le, [
                      e(
                        w,
                        {
                          modelValue: f.fileName,
                          'onUpdate:modelValue': c[0] || (c[0] = (s) => (f.fileName = s)),
                          placeholder: '请输入文件名',
                          style: { width: '300px', 'margin-right': '10px' },
                          onInput: k
                        },
                        {
                          append: o(() => [
                            e(l, { onClick: T }, { default: o(() => [i('清空')]), _: 1 })
                          ]),
                          _: 1
                        },
                        8,
                        ['modelValue']
                      ),
                      e(
                        l,
                        { icon: 'RefreshRight', onClick: d },
                        { default: o(() => [i('刷新')]), _: 1 }
                      )
                    ]),
                    e(A, {
                      title:
                        '支持的文件路径包括：/DCIM/, /Documents/, /Download/, /Movies/, /Music/, /Pictures/',
                      type: 'info',
                      'show-icon': '',
                      closable: !1,
                      style: { 'margin-bottom': '20px' }
                    }),
                    g('div', oe, [
                      e(R, null, { default: o(() => [i('自动安装应用')]), _: 1 }),
                      e(
                        q,
                        {
                          modelValue: b.value,
                          'onUpdate:modelValue': c[1] || (c[1] = (s) => (b.value = s)),
                          'active-value': 1,
                          'inactive-value': 0
                        },
                        null,
                        8,
                        ['modelValue']
                      )
                    ]),
                    ee(
                      (M(),
                      P(
                        G,
                        { style: { 'margin-top': '20px' }, data: h.value, onSelectionChange: E },
                        {
                          default: o(() => [
                            e(m, { type: 'selection', width: '50' }),
                            e(m, { prop: 'fileName', label: '文件名' }),
                            e(
                              m,
                              { prop: 'fileSize', label: '文件大小' },
                              {
                                default: o(({ row: s }) => [
                                  i(N((s.fileSize / 1024 / 1024).toFixed(2)) + ' MB ', 1)
                                ]),
                                _: 1
                              }
                            ),
                            e(m, { prop: 'fileMd5', label: '文件MD5' }),
                            e(
                              m,
                              { prop: 'createdTime', label: '创建时间' },
                              {
                                default: o(({ row: s }) => [
                                  i(N(new Date(s.createdTime).toLocaleString()), 1)
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['data']
                      )),
                      [[j, v.value]]
                    ),
                    g('div', ne, [
                      e(
                        $,
                        {
                          background: '',
                          layout: r(a).layout,
                          'page-sizes': r(a).pageSizes,
                          total: r(a).total,
                          'page-size': r(a).pageSize,
                          'current-page': r(a).currentPage,
                          onSizeChange: r(B),
                          onCurrentChange: r(U)
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
                    g('div', se, [
                      e(l, { onClick: C }, { default: o(() => [i('取消')]), _: 1 }),
                      e(
                        l,
                        { type: 'primary', onClick: L, disabled: p.value.length === 0 },
                        { default: o(() => [i('上传文件')]), _: 1 },
                        8,
                        ['disabled']
                      )
                    ])
                  ])
                ]),
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
const _e = ae(ie, [['__scopeId', 'data-v-57435ac4']])
export { _e as default }
