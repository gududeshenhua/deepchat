import { f as ue, a as pe, b as de, c as ge } from './index-b201494c.js'
import { u as oe } from './usePagination-22ed0aad.js'
import { u as me } from './useTableHeightFit-d4c36563.js'
import fe from './UploadOssDialog-0baad3d6.js'
import { g as le, q as _e } from './index-e81b6066.js'
import { g as ve } from './index-c0fb52a7.js'
import { f as he, h as Z, _ as ee } from './index-ae33a03d.js'
import {
  y as ae,
  at as be,
  r as g,
  R as te,
  d as Y,
  a8 as p,
  ag as ye,
  f as K,
  G as J,
  H as l,
  i as T,
  N as a,
  L as f,
  M as r,
  u as e,
  I as Me,
  K as Ce,
  b as Se,
  Q as Ie,
  h as we
} from './vue-66851fce.js'
import { I as xe } from './InstanceStatusTag-23042b65.js'
import { E as D, G as se, H as Ue } from './element-74718691.js'
import { s as De, c as ke, u as Te, S as ze } from './index-96d3c23e.js'
import './vxe-562f9a54.js'
const Fe = { class: 'upload-to-instance-drawer' },
  Pe = { class: 'drawer-footer', style: { padding: '0 0 20px 0', 'text-align': 'right' } },
  Ne = { class: 'search-wrapper' },
  Re = { class: 'auto-install-wrapper', style: { 'margin-bottom': '20px' } },
  Ve = {
    class: 'pager-wrapper',
    style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'flex-end' }
  },
  Ae = ae({
    __name: 'UploadToInstanceDrawer',
    props: { visible: { type: Boolean }, fileUniqueId: {} },
    emits: ['update:visible', 'success'],
    setup(W, { emit: c }) {
      const O = he(),
        { userInfo: o, roles: Q } = be(O),
        { t } = Z(),
        L = W,
        C = c,
        { tableKey: S, paginationData: s, handleCurrentChange: z, handleSizeChange: R } = oe(),
        k = g([]),
        _ = g(!1),
        A = g([]),
        q = g([]),
        G = g([]),
        E = g({}),
        B = te({ padName: '' }),
        j = async () => {
          try {
            const n = await ve()
            G.value = n.map((i) => ({ text: i.name, value: i.uuid }))
          } catch (n) {
            console.error('获取分组列表失败:', n)
          }
        },
        m = async () => {
          _.value = !0
          try {
            const n = Object.values(E.value).some((h) => h !== '' && h !== null && h !== void 0)
            let i = []
            if (
              n &&
              ((i = await le({ ...E.value, page: s.currentPage, page_size: s.pageSize })),
              i.total === 0)
            ) {
              ;((k.value = []), (s.total = 0), (_.value = !1))
              return
            }
            const d = { groupIds: [o.value.group_id], page: s.currentPage, rows: s.pageSize }
            if (B.padName) {
              const h = B.padName
                .split(',')
                .map((u) => u.trim())
                .filter((u) => u !== '')
              d.padCodes = h
            }
            n && ((d.padCodes = i.instances.map((h) => h.instance_id)), (d.page = 1))
            const N = await _e(d)
            try {
              if (n) {
                const h = Object.fromEntries(
                  i.instances.map((u) => [
                    u.instance_id,
                    { ...u, proxy_info: u.proxy_info ? JSON.parse(u.proxy_info) : {} }
                  ])
                )
                ;(N.data.pageData.forEach((u) => {
                  h[u.padCode] && (u.record = h[u.padCode])
                }),
                  (s.total = i.total))
              } else {
                const h = await le({
                    instance_ids: N.data.pageData ? N.data.pageData.map((x) => x.padCode) : []
                  }),
                  u = Object.fromEntries(
                    h.instances.map((x) => [
                      x.instance_id,
                      { ...x, proxy_info: x.proxy_info ? JSON.parse(x.proxy_info) : {} }
                    ])
                  )
                ;(N.data.pageData.forEach((x) => {
                  u[x.padCode] && (x.record = u[x.padCode])
                }),
                  (s.total = N.data.total))
              }
              k.value = N.data.pageData || []
            } catch (h) {
              k.value = N.data.pageData || []
            }
          } catch (n) {
            ;(console.error('获取实例列表失败:', n),
              D.error(t('storageManagement.getInstanceListFailed')),
              (k.value = []))
          } finally {
            _.value = !1
          }
        },
        b = () => {
          s.currentPage === 1 ? m() : (s.currentPage = 1)
        },
        V = () => {
          ;((B.padName = ''), b())
        }
      let y = null
      const v = () => {
          ;(clearTimeout(y),
            (y = setTimeout(() => {
              b()
            }, 500)))
        },
        w = (n) => {
          ;((A.value = n), (q.value = n.map((i) => i.padCode)))
        },
        F = (n) => {
          ;('group' in n && (E.value.local_group_uuid = n.group.length > 0 ? n.group[0] : ''),
            (s.currentPage = 1),
            m())
        },
        I = g(0),
        P = () => {
          if (A.value.length === 0) {
            D.warning(t('storageManagement.selectInstanceWarning'))
            return
          }
          se.prompt(t('storageManagement.enterCustomPath'), t('storageManagement.uploadFile'), {
            confirmButtonText: t('common.confirm'),
            cancelButtonText: t('common.cancel'),
            inputPattern: /^\/((DCIM|Documents|Download|Movies|Music|Pictures)\/)?$/,
            inputErrorMessage: t('storageManagement.pathFormatError'),
            inputValue: '/Documents/'
          })
            .then(({ value: n }) => {
              const i = {
                padCodes: q.value,
                fileUniqueId: L.fileUniqueId,
                autoInstall: I.value,
                customizeFilePath: n,
                isAuthorization: !1
              }
              ue(i)
                .then((d) => {
                  ;(D.success(t('storageManagement.uploadSuccess', { count: A.value.length })),
                    C('success'),
                    $())
                })
                .catch((d) => {
                  ;(console.error('文件上传到实例失败:', d),
                    D.error(t('storageManagement.uploadToInstanceFailed')))
                })
            })
            .catch(() => {
              D.info(t('storageManagement.uploadCancelled'))
            })
        },
        $ = () => {
          C('update:visible', !1)
        }
      return (
        Y(
          () => L.visible,
          (n) => {
            n && ((A.value = []), (q.value = []), j(), m())
          }
        ),
        Y([() => s.currentPage, () => s.pageSize], m, { immediate: !0 }),
        (n, i) => {
          const d = p('el-button'),
            N = p('el-input'),
            h = p('el-alert'),
            u = p('el-text'),
            x = p('el-switch'),
            H = p('el-table-column'),
            M = p('el-tag'),
            X = p('el-table'),
            ie = p('el-pagination'),
            re = p('el-drawer'),
            ce = ye('loading')
          return (
            K(),
            J(
              re,
              {
                title: e(t)('storageManagement.uploadFileToInstance'),
                'model-value': n.visible,
                'onUpdate:modelValue': $,
                size: '60%',
                direction: 'rtl'
              },
              {
                default: l(() => [
                  T('div', Fe, [
                    T('div', Pe, [
                      a(
                        d,
                        { onClick: $ },
                        { default: l(() => [f(r(e(t)('common.cancel')), 1)]), _: 1 }
                      ),
                      a(
                        d,
                        { type: 'primary', onClick: P, disabled: A.value.length === 0 },
                        { default: l(() => [f(r(e(t)('storageManagement.upload')), 1)]), _: 1 },
                        8,
                        ['disabled']
                      )
                    ]),
                    T('div', Ne, [
                      a(
                        N,
                        {
                          modelValue: B.padName,
                          'onUpdate:modelValue': i[0] || (i[0] = (U) => (B.padName = U)),
                          placeholder: e(t)('storageManagement.enterInstanceCode'),
                          style: { width: '300px', 'margin-right': '10px' },
                          onInput: v
                        },
                        {
                          append: l(() => [
                            a(
                              d,
                              { onClick: V },
                              { default: l(() => [f(r(e(t)('common.clear')), 1)]), _: 1 }
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['modelValue', 'placeholder']
                      ),
                      a(
                        d,
                        { icon: 'RefreshRight', onClick: m },
                        { default: l(() => [f(r(e(t)('common.refresh')), 1)]), _: 1 }
                      )
                    ]),
                    a(
                      h,
                      {
                        title:
                          e(t)('storageManagement.supportedPaths') +
                          '/DCIM/, /Documents/, /Download/, /Movies/, /Music/, /Pictures/',
                        type: 'info',
                        'show-icon': '',
                        closable: !1,
                        style: { 'margin-bottom': '20px' }
                      },
                      null,
                      8,
                      ['title']
                    ),
                    T('div', Re, [
                      a(u, null, {
                        default: l(() => [f(r(e(t)('storageManagement.autoInstallApp')), 1)]),
                        _: 1
                      }),
                      a(
                        x,
                        {
                          modelValue: I.value,
                          'onUpdate:modelValue': i[1] || (i[1] = (U) => (I.value = U)),
                          'active-value': 1,
                          'inactive-value': 0,
                          style: { 'margin-left': '10px' }
                        },
                        null,
                        8,
                        ['modelValue']
                      )
                    ]),
                    Me(
                      (K(),
                      J(
                        X,
                        {
                          key: e(S),
                          data: k.value,
                          onSelectionChange: w,
                          onFilterChange: F,
                          'max-height': 'calc(100vh - 300px)',
                          style: { 'margin-bottom': '20px' }
                        },
                        {
                          default: l(() => [
                            a(H, { type: 'selection', width: '55' }),
                            a(
                              H,
                              {
                                prop: 'padCode',
                                label: e(t)('storageManagement.instanceInfo'),
                                width: '300'
                              },
                              {
                                default: l(({ row: U }) => [
                                  T(
                                    'div',
                                    null,
                                    r(e(t)('storageManagement.instanceCode')) + '：' + r(U.padCode),
                                    1
                                  ),
                                  T(
                                    'div',
                                    null,
                                    r(e(t)('storageManagement.instanceSpec')) +
                                      '：' +
                                      r(U.padGrade),
                                    1
                                  ),
                                  T('div', null, [
                                    f(r(e(t)('storageManagement.instanceType')) + '： ', 1),
                                    a(
                                      M,
                                      { type: (U.padType === 'real', 'info') },
                                      {
                                        default: l(() => [
                                          f(
                                            r(
                                              U.padType === 'real'
                                                ? e(t)('storageManagement.realMachine')
                                                : e(t)('storageManagement.virtualMachine')
                                            ),
                                            1
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['type']
                                    )
                                  ]),
                                  T(
                                    'div',
                                    null,
                                    r(e(t)('storageManagement.instanceIp')) + '：' + r(U.padIp),
                                    1
                                  ),
                                  T(
                                    'div',
                                    null,
                                    r(e(t)('storageManagement.image')) + '：' + r(U.imageId),
                                    1
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['label']
                            ),
                            a(
                              H,
                              { prop: 'status', label: e(t)('storageManagement.status') },
                              {
                                default: l(({ row: U }) => [
                                  a(xe, { status: U.padStatus }, null, 8, ['status'])
                                ]),
                                _: 1
                              },
                              8,
                              ['label']
                            ),
                            a(
                              H,
                              {
                                prop: 'group',
                                label: e(t)('storageManagement.group'),
                                'column-key': 'group',
                                filters: G.value,
                                'filter-multiple': !1,
                                'min-width': '150',
                                'popper-class': 'group-filter-popper'
                              },
                              {
                                default: l(({ row: U }) => {
                                  var ne
                                  return [
                                    f(
                                      r(((ne = U.record) == null ? void 0 : ne.group_name) || '--'),
                                      1
                                    )
                                  ]
                                }),
                                _: 1
                              },
                              8,
                              ['label', 'filters']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['data']
                      )),
                      [[ce, _.value]]
                    ),
                    T('div', Ve, [
                      a(
                        ie,
                        {
                          layout: e(s).layout,
                          'page-sizes': e(s).pageSizes,
                          total: e(s).total,
                          'page-size': e(s).pageSize,
                          'current-page': e(s).currentPage,
                          onSizeChange: e(R),
                          onCurrentChange: e(z)
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
                    ])
                  ])
                ]),
                _: 1
              },
              8,
              ['title', 'model-value']
            )
          )
        }
      )
    }
  })
const Be = ee(Ae, [['__scopeId', 'data-v-93a4ecc2']]),
  Ee = { class: 'el-upload__text' },
  Oe = ae({
    __name: 'ThreeStepUploadDialog',
    props: { visible: { type: Boolean, default: !1 } },
    emits: ['update:visible', 'success'],
    setup(W, { emit: c }) {
      const O = c,
        { t: o } = Z(),
        Q = g(),
        t = g(),
        L = te({ file: null }),
        C = g(null),
        S = g(!1),
        s = g(0),
        z = g(''),
        R = (m) => {
          C.value = m.raw
        },
        k = () => {
          C.value = null
        },
        _ = () => {
          if (S.value) {
            D.warning(o('storageManagement.fileUploadingWarning'))
            return
          }
          ;(O('update:visible', !1), E(), j(), t.value && t.value.clearFiles())
        },
        A = (m) =>
          new Promise((b, V) => {
            const y = new ze.ArrayBuffer(),
              v = new FileReader()
            ;((v.onload = function (w) {
              var I
              y.append((I = w.target) == null ? void 0 : I.result)
              const F = y.end()
              b(F)
            }),
              (v.onerror = function (w) {
                V(new Error(o('storageManagement.calculateMD5Failed')))
              }),
              v.readAsArrayBuffer(m))
          }),
        q = () => {
          D.warning(o('storageManagement.onlyOneFileAllowed'))
        },
        G = async () => {
          if (!C.value) {
            D.error(o('storageManagement.pleaseSelectFile'))
            return
          }
          ;((S.value = !0), (s.value = 0), (z.value = ''))
          try {
            const b = (await De({ file_name: C.value.name, file_size: C.value.size })).upload_id
            await B(b, C.value)
            const V = await ke({ upload_id: b }),
              { file_md5: y, download_url: v } = V,
              w = { fileUrl: v, fileName: C.value.name, fileMd5: y }
            ;(await pe(w),
              (z.value = 'success'),
              D.success(o('storageManagement.fileUploadSuccess')),
              (S.value = !1),
              O('success'),
              _())
          } catch (m) {
            ;(console.error('文件上传失败:', m),
              (z.value = 'exception'),
              D.error(o('storageManagement.fileUploadFailed') + m.message))
          } finally {
            S.value = !1
          }
        },
        E = () => {
          ;((L.file = null), (C.value = null), (S.value = !1), (s.value = 0), (z.value = ''))
        },
        B = async (m, b) => {
          const y = Math.ceil(b.size / 1048576)
          for (let v = 0; v < y; v++) {
            const w = v * 1048576,
              F = Math.min(w + 1048576, b.size),
              I = b.slice(w, F),
              P = new FormData()
            ;(P.append('upload_id', m), P.append('chunk_index', v.toString()), P.append('file', I))
            const $ = await A(I)
            ;(P.append('chunk_md5', $), await Te(P), (s.value = Math.round(((v + 1) / y) * 100)))
          }
        },
        j = () => {
          ;((C.value = null), (S.value = !1), (s.value = 0), (z.value = ''))
        }
      return (m, b) => {
        const V = p('el-icon'),
          y = p('el-upload'),
          v = p('el-form-item'),
          w = p('el-progress'),
          F = p('el-form'),
          I = p('el-button'),
          P = p('el-dialog')
        return (
          K(),
          J(
            P,
            {
              'model-value': W.visible,
              title: e(o)('storageManagement.uploadFileToCloud'),
              width: '500px',
              'before-close': _
            },
            {
              footer: l(() => [
                a(I, { onClick: _ }, { default: l(() => [f(r(e(o)('common.cancel')), 1)]), _: 1 }),
                a(
                  I,
                  { type: 'primary', onClick: G, loading: S.value, disabled: !C.value || S.value },
                  {
                    default: l(() => [
                      f(
                        r(
                          S.value
                            ? e(o)('storageManagement.uploading')
                            : e(o)('storageManagement.startUpload')
                        ),
                        1
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['loading', 'disabled']
                )
              ]),
              default: l(() => [
                a(
                  F,
                  { model: L, 'label-width': '100px', ref_key: 'formRef', ref: Q },
                  {
                    default: l(() => [
                      a(
                        v,
                        {
                          label: e(o)('storageManagement.selectFile'),
                          prop: 'file',
                          rules: [
                            {
                              required: !0,
                              message: e(o)('storageManagement.pleaseSelectFile'),
                              trigger: 'change'
                            }
                          ]
                        },
                        {
                          default: l(() => [
                            a(
                              y,
                              {
                                ref_key: 'uploadRef',
                                ref: t,
                                class: 'w-full',
                                drag: '',
                                'auto-upload': !1,
                                'show-file-list': !0,
                                'on-change': R,
                                'on-remove': k,
                                limit: 1,
                                'on-exceed': q
                              },
                              {
                                default: l(() => [
                                  a(
                                    V,
                                    { class: 'el-icon--upload' },
                                    { default: l(() => [a(e(Ue))]), _: 1 }
                                  ),
                                  T('div', Ee, r(e(o)('storageManagement.dragFileOrClick')), 1)
                                ]),
                                _: 1
                              },
                              512
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label', 'rules']
                      ),
                      s.value > 0
                        ? (K(),
                          J(
                            w,
                            {
                              key: 0,
                              percentage: s.value,
                              status: z.value,
                              style: { 'margin-top': '20px' }
                            },
                            null,
                            8,
                            ['percentage', 'status']
                          ))
                        : Ce('', !0)
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
const Le = ee(Oe, [['__scopeId', 'data-v-2451f48b']]),
  qe = { class: 'app-container' },
  $e = { class: 'pager-wrapper' },
  Ge = ae({
    __name: 'index',
    setup(W) {
      const { t: c } = Z(),
        { tableKey: O, paginationData: o, handleCurrentChange: Q, handleSizeChange: t } = oe(),
        { cTable: L, maxHeight: C, handleGetTableHeight: S } = me(),
        s = g([]),
        z = g(!1)
      let R = null
      const k = te({ fileName: '', page: 1, rows: 10 }),
        _ = () => {
          ;((z.value = !0),
            O.value++,
            de({ fileName: k.fileName || void 0, page: o.currentPage, rows: o.pageSize })
              .then((n) => {
                ;((o.total = n.data.total), (s.value = n.data.pageData || []))
              })
              .catch((n) => {
                ;(console.error('获取文件列表失败:', n),
                  D.error(c('storageManagement.getFileListFailed')),
                  (s.value = []))
              })
              .finally(() => {
                z.value = !1
              }))
        },
        A = (n) => {
          se.confirm(
            c('storageManagement.confirmDeleteFile', { fileName: n.fileName }),
            c('storageManagement.prompt'),
            {
              confirmButtonText: c('common.confirm'),
              cancelButtonText: c('common.cancel'),
              type: 'warning'
            }
          ).then(() => {
            ge({ fileUniqueIds: [n.fileUniqueId] })
              .then(() => {
                ;(D.success(c('storageManagement.deleteFileSuccess')), _())
              })
              .catch((i) => {
                ;(console.error('删除文件失败:', i),
                  D.error(c('storageManagement.deleteFileFailed')))
              })
          })
        },
        q = () => {
          ;(R && clearInterval(R),
            (R = setInterval(() => {
              _()
            }, 6e3)))
        },
        G = () => {
          R && (clearInterval(R), (R = null))
        },
        E = () => {
          o.currentPage === 1 ? _() : (o.currentPage = 1)
        },
        B = () => {
          ;((k.fileName = ''), E())
        }
      let j = null
      const m = () => {
          ;(clearTimeout(j),
            (j = setTimeout(() => {
              E()
            }, 500)))
        },
        b = g(!1),
        V = () => {
          b.value = !0
        },
        y = g(!1),
        v = () => {
          y.value = !0
        },
        w = () => {
          _()
        },
        F = g(!1),
        I = g(''),
        P = (n) => {
          ;((I.value = n), (F.value = !0))
        },
        $ = () => {
          _()
        }
      return (
        Se(() => {
          ;(_(), S(), window.addEventListener('resize', S), q())
        }),
        Ie(() => {
          ;(window.removeEventListener('resize', S), G())
        }),
        Y([() => o.currentPage, () => o.pageSize], _, { immediate: !0 }),
        (n, i) => {
          const d = p('el-button'),
            N = p('el-input'),
            h = p('PageBanner'),
            u = p('el-table-column'),
            x = p('el-table'),
            H = p('el-pagination')
          return (
            K(),
            we('div', qe, [
              a(
                h,
                { title: '' },
                {
                  extra: l(() => [
                    a(
                      N,
                      {
                        modelValue: k.fileName,
                        'onUpdate:modelValue': i[0] || (i[0] = (M) => (k.fileName = M)),
                        placeholder: e(c)('storageManagement.searchFileNamePlaceholder'),
                        style: { width: '300px', 'margin-right': '10px' },
                        onInput: m
                      },
                      {
                        append: l(() => [
                          a(
                            d,
                            { onClick: B },
                            {
                              default: l(() => [f(r(e(c)('storageManagement.clearSearch')), 1)]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['modelValue', 'placeholder']
                    ),
                    a(
                      d,
                      { icon: 'RefreshRight', onClick: _ },
                      { default: l(() => [f(r(e(c)('storageManagement.refresh')), 1)]), _: 1 }
                    ),
                    a(
                      d,
                      { icon: 'Plus', type: 'primary', onClick: V },
                      { default: l(() => [f(r(e(c)('storageManagement.linkUpload')), 1)]), _: 1 }
                    ),
                    a(
                      d,
                      { icon: 'Upload', type: 'success', onClick: v },
                      { default: l(() => [f(r(e(c)('storageManagement.localUpload')), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              ),
              (K(),
              J(
                x,
                {
                  ref_key: 'cTable',
                  ref: L,
                  key: e(O),
                  style: { 'margin-top': '20px' },
                  data: s.value,
                  'max-height': e(C)
                },
                {
                  default: l(() => [
                    a(u, { prop: 'fileName', label: e(c)('storageManagement.fileName') }, null, 8, [
                      'label'
                    ]),
                    a(
                      u,
                      { prop: 'fileSize', label: e(c)('storageManagement.fileSize') },
                      {
                        default: l(({ row: M }) => [
                          f(r((M.fileSize / 1024 / 1024).toFixed(2)) + ' MB ', 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    a(u, { prop: 'fileMd5', label: e(c)('storageManagement.fileMd5') }, null, 8, [
                      'label'
                    ]),
                    a(
                      u,
                      { prop: 'createdTime', label: e(c)('storageManagement.createTime') },
                      {
                        default: l(({ row: M }) => [
                          f(r(new Date(M.createdTime).toLocaleString()), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    a(
                      u,
                      { label: e(c)('storageManagement.operations'), width: '300' },
                      {
                        default: l((M) => [
                          a(
                            d,
                            { link: '', type: 'primary', onClick: (X) => P(M.row.fileUniqueId) },
                            {
                              default: l(() => [
                                f(r(e(c)('storageManagement.uploadToInstance')), 1)
                              ]),
                              _: 2
                            },
                            1032,
                            ['onClick']
                          ),
                          a(
                            d,
                            { link: '', type: 'danger', onClick: (X) => A(M.row) },
                            { default: l(() => [f(r(e(c)('storageManagement.delete')), 1)]), _: 2 },
                            1032,
                            ['onClick']
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
                ['data', 'max-height']
              )),
              a(
                fe,
                {
                  visible: b.value,
                  'onUpdate:visible': i[1] || (i[1] = (M) => (b.value = M)),
                  needUrl: !0,
                  onSuccess: w
                },
                null,
                8,
                ['visible']
              ),
              a(
                Le,
                {
                  visible: y.value,
                  'onUpdate:visible': i[2] || (i[2] = (M) => (y.value = M)),
                  onSuccess: w
                },
                null,
                8,
                ['visible']
              ),
              a(
                Be,
                {
                  visible: F.value,
                  'onUpdate:visible': i[3] || (i[3] = (M) => (F.value = M)),
                  fileUniqueId: I.value,
                  onSuccess: $
                },
                null,
                8,
                ['visible', 'fileUniqueId']
              ),
              T('div', $e, [
                a(
                  H,
                  {
                    background: '',
                    layout: e(o).layout,
                    'page-sizes': e(o).pageSizes,
                    total: e(o).total,
                    'page-size': e(o).pageSize,
                    'current-page': e(o).currentPage,
                    onSizeChange: e(t),
                    onCurrentChange: e(Q)
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
              ])
            ])
          )
        }
      )
    }
  })
const na = ee(Ge, [['__scopeId', 'data-v-07579ff6']])
export { na as default }
