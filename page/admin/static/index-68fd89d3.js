import { h as ue, _ as Ue } from './index-ae33a03d.js'
import {
  u as Be,
  g as Ne,
  a as Le,
  c as Ge,
  d as Re,
  b as se,
  e as Ee,
  f as ze
} from './index-446a6d1a.js'
import { a as pe } from './index-c0fb52a7.js'
import { E as r, G as le } from './element-74718691.js'
import {
  y as ie,
  e as Ae,
  r as u,
  b as ce,
  a8 as c,
  f as C,
  G as I,
  H as t,
  N as a,
  L as g,
  M as d,
  h as te,
  a0 as de,
  F as me,
  i as Q,
  Q as Oe,
  ag as Ie,
  I as Qe,
  u as oe,
  K as qe
} from './vue-66851fce.js'
import { u as He } from './useTableHeightFit-d4c36563.js'
import { c as je } from './permission-ed9d37b8.js'
import './vxe-562f9a54.js'
const Ke = { class: 'el-upload__text' },
  Je = { class: 'el-upload__tip' },
  We = ie({
    __name: 'UploadProxyDialog',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue', 'success'],
    setup(ne, { emit: n }) {
      const { t: f } = ue(),
        U = ne,
        F = n,
        M = Ae({ get: () => U.modelValue, set: (o) => F('update:modelValue', o) }),
        i = u(),
        B = '/cpyservice/user/customproxy/',
        T = u(),
        $ = u(!1),
        q = u([]),
        _ = u({ groupName: '' }),
        S = u(),
        N = {
          groupName: [
            { required: !0, message: f('proxyManagement.selectGroup'), trigger: 'change' }
          ]
        },
        V = async () => {
          try {
            const o = await pe()
            q.value = o || []
          } catch (o) {
            ;(console.error('获取代理分组列表失败', o),
              r.error(f('proxyManagement.getGroupListFailed')))
          }
        },
        L = () => {
          r.warning(f('proxyManagement.onlyOneFile'))
        },
        D = (o) => {
          T.value = o.raw
        },
        G = (o) => {
          ;(r.success(f('proxyManagement.uploadSuccess')),
            (M.value = !1),
            i.value && i.value.clearFiles(),
            (_.value.groupName = ''),
            F('success'))
        },
        P = (o) => {
          ;(console.error(o),
            r.error(f('proxyManagement.uploadFailed')),
            i.value && i.value.clearFiles())
        },
        R = async () => {
          if (!T.value) {
            r.warning(f('proxyManagement.selectFileFirst'))
            return
          }
          try {
            await S.value.validate()
          } catch (b) {
            r.warning(f('proxyManagement.completeFormFirst'))
            return
          }
          const o = new FormData()
          ;(o.append('file', T.value),
            _.value.groupName && o.append('group_name', _.value.groupName),
            ($.value = !0))
          try {
            ;(await Be(o, _.value.groupName),
              r.success(f('proxyManagement.uploadSuccess')),
              (M.value = !1),
              i.value && i.value.clearFiles(),
              (_.value.groupName = ''),
              F('success'))
          } catch (b) {
            ;(console.error(b), r.error(f('proxyManagement.uploadFailed')))
          } finally {
            $.value = !1
          }
        },
        E = () => {
          ;((M.value = !1),
            i.value && i.value.clearFiles(),
            (T.value = null),
            (_.value.groupName = ''))
        }
      return (
        ce(() => {
          V()
        }),
        (o, b) => {
          const h = c('el-option'),
            J = c('el-select'),
            k = c('el-form-item'),
            W = c('upload-filled'),
            m = c('el-icon'),
            X = c('el-upload'),
            H = c('el-form'),
            j = c('el-button'),
            Y = c('el-dialog')
          return (
            C(),
            I(
              Y,
              {
                title: o.$t('proxyManagement.uploadProxyDialog'),
                modelValue: M.value,
                'onUpdate:modelValue': b[1] || (b[1] = (w) => (M.value = w)),
                width: '500px'
              },
              {
                footer: t(() => [
                  a(
                    j,
                    {
                      style: { 'margin-right': '10px' },
                      type: 'success',
                      onClick: R,
                      loading: $.value
                    },
                    { default: t(() => [g(d(o.$t('proxyManagement.uploadToServer')), 1)]), _: 1 },
                    8,
                    ['loading']
                  ),
                  a(
                    j,
                    { onClick: E },
                    { default: t(() => [g(d(o.$t('proxyManagement.cancel')), 1)]), _: 1 }
                  )
                ]),
                default: t(() => [
                  a(
                    H,
                    {
                      model: _.value,
                      'label-width': '120px',
                      rules: N,
                      ref_key: 'formRef',
                      ref: S
                    },
                    {
                      default: t(() => [
                        a(
                          k,
                          { label: o.$t('proxyManagement.group'), prop: 'groupName' },
                          {
                            default: t(() => [
                              a(
                                J,
                                {
                                  modelValue: _.value.groupName,
                                  'onUpdate:modelValue':
                                    b[0] || (b[0] = (w) => (_.value.groupName = w)),
                                  placeholder: o.$t('proxyManagement.selectGroup')
                                },
                                {
                                  default: t(() => [
                                    (C(!0),
                                    te(
                                      me,
                                      null,
                                      de(
                                        q.value,
                                        (w) => (
                                          C(),
                                          I(
                                            h,
                                            { key: w.uuid, label: w.name, value: w.name },
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
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label']
                        ),
                        a(
                          k,
                          { label: o.$t('proxyManagement.selectFile') },
                          {
                            default: t(() => [
                              a(
                                X,
                                {
                                  ref_key: 'uploadRef',
                                  ref: i,
                                  action: B,
                                  'auto-upload': !1,
                                  'on-change': D,
                                  'on-success': G,
                                  'on-error': P,
                                  limit: 1,
                                  drag: '',
                                  'on-exceed': L
                                },
                                {
                                  tip: t(() => [
                                    Q('div', Je, d(o.$t('proxyManagement.uploadTip')), 1)
                                  ]),
                                  default: t(() => [
                                    a(
                                      m,
                                      { class: 'el-icon--upload' },
                                      { default: t(() => [a(W)]), _: 1 }
                                    ),
                                    Q('div', Ke, d(o.$t('proxyManagement.dragOrClick')), 1)
                                  ]),
                                  _: 1
                                },
                                512
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
              ['title', 'modelValue']
            )
          )
        }
      )
    }
  }),
  Xe = { class: 'proxy-management' },
  Ye = { class: 'pagination' },
  Ze = { slot: 'tip', class: 'el-upload__tip' },
  ea = { class: 'dialog-footer' },
  aa = ie({
    __name: 'index',
    setup(ne) {
      const { t: n } = ue(),
        f = u([]),
        U = u(!1),
        F = u([]),
        M = u(''),
        i = u({ page: 1, pageSize: 50, total: 0 }),
        B = u(0),
        T = u([]),
        $ = u(''),
        { cTable: q, maxHeight: _, handleGetTableHeight: S } = He(),
        N = u(!1),
        V = u(!1),
        L = u(!1),
        D = u(!1),
        G = u(!1),
        P = u(),
        R = u([]),
        E = u(!1),
        o = u({ countryCode: 'US', proxyType: 'socks5', rolltime: 30, goodNum: 1, group_name: '' }),
        b = {
          countryCode: [
            { required: !0, message: n('proxyManagement.selectCountry'), trigger: 'change' }
          ],
          proxyType: [
            { required: !0, message: n('proxyManagement.selectProxyType'), trigger: 'change' }
          ],
          rolltime: [
            { required: !0, message: n('proxyManagement.selectRotationCycle'), trigger: 'change' }
          ],
          goodNum: [
            { required: !0, message: n('proxyManagement.enterCreateQuantity'), trigger: 'blur' }
          ]
        }
      u({ id: '', proxyName: '', proxyType: '', ip: '', port: 0, username: '', password: '' })
      const h = u(),
        J = '/cpyservice/user/customproxy/delete-by-excel',
        k = u(),
        W = async () => {
          try {
            const e = await pe()
            e && (T.value = e.map((l) => ({ text: l.name, value: l.name })))
          } catch (e) {
            ;(console.error('获取分组列表失败:', e),
              r.error(n('proxyManagement.getGroupListFailed')))
          }
        },
        m = async () => {
          U.value = !0
          try {
            B.value++
            const e = { page: i.value.page, page_size: i.value.pageSize }
            ;(M.value && (e.group_name = M.value), $.value && (e.group_name = $.value))
            const l = await Ne(e)
            ;((f.value = l.proxies || []), (i.value.total = l.total_proxies || 0))
          } catch (e) {
            ;(console.error(e), r.error(n('proxyManagement.getProxyListFailed')))
          } finally {
            U.value = !1
          }
        },
        X = (e) => {
          ;(e.group_name && e.group_name.length > 0 ? ($.value = e.group_name[0]) : ($.value = ''),
            (i.value.page = 1),
            m())
        }
      let H = null
      const j = () => {
          ;(clearTimeout(H),
            (H = setTimeout(() => {
              ;((i.value.page = 1), m())
            }, 500)))
        },
        Y = () => {
          ;((M.value = ''), (i.value.page = 1), m())
        },
        w = () => {
          N.value = !0
        },
        ge = async () => {
          ;((D.value = !0), R.value.length === 0 && (await ye()))
        },
        ye = async () => {
          try {
            const e = await Le(1)
            e && e.data && (R.value = e.data)
          } catch (e) {
            ;(console.error('获取国家列表失败:', e),
              r.error(n('proxyManagement.getCountryListFailed')))
          }
        },
        fe = (e) => {},
        ve = async () => {
          if (!(!P.value || !(await P.value.validate()))) {
            G.value = !0
            try {
              const l = {
                countryCode: o.value.countryCode,
                proxyType: o.value.proxyType,
                rolltime: o.value.rolltime,
                goodNum: o.value.goodNum
              }
              ;(o.value.group_name && (l.group_name = o.value.group_name),
                await Ge(l),
                r.success(n('proxyManagement.createDynamicProxySuccess')),
                re(),
                m())
            } catch (l) {
              ;(console.error('创建动态代理失败:', l),
                r.error(n('proxyManagement.createDynamicProxyFailed')))
            } finally {
              G.value = !1
            }
          }
        },
        re = () => {
          var e
          ;((D.value = !1),
            (e = P.value) == null || e.resetFields(),
            (o.value = {
              countryCode: 'US',
              proxyType: 'socks5',
              rolltime: 30,
              goodNum: 1,
              group_name: ''
            }))
        },
        xe = async () => {
          try {
            const e = await Re(),
              l = new Blob([e]),
              p = window.URL.createObjectURL(l),
              v = document.createElement('a')
            ;((v.href = p),
              (v.download = 'proxy_template.xlsx'),
              v.click(),
              window.URL.revokeObjectURL(p),
              r.success(n('proxyManagement.templateDownloadSuccess')))
          } catch (e) {
            ;(console.error(e), r.error(n('proxyManagement.templateDownloadFailed')))
          }
        },
        Me = () => {
          ;((V.value = !1), h.value && h.value.clearFiles(), (k.value = null))
        },
        _e = (e) => {
          F.value = e
        },
        he = async () => {
          try {
            await le.confirm(
              n('proxyManagement.confirmDeleteSelected'),
              n('proxyManagement.delete'),
              {
                confirmButtonText: n('proxyManagement.delete'),
                cancelButtonText: n('proxyManagement.cancel'),
                type: 'warning'
              }
            )
            const e = F.value.map((l) => l.name)
            ;(await se({ names: e }), r.success(n('proxyManagement.deleteSuccess')), m())
          } catch (e) {
            ;(console.error(e), r.error(n('proxyManagement.deleteFailed')))
          }
        },
        be = (e) => {
          k.value = e.raw
        },
        we = async () => {
          if (!k.value) {
            r.warning(n('proxyManagement.selectFileFirst'))
            return
          }
          const e = new FormData()
          ;(e.append('file', k.value), (L.value = !0))
          try {
            ;(await Ee(e),
              r.success(n('proxyManagement.deleteSuccess')),
              (V.value = !1),
              h.value && h.value.clearFiles(),
              m())
          } catch (l) {
            ;(console.error(l), r.error(n('proxyManagement.deleteFailed')))
          } finally {
            L.value = !1
          }
        },
        $e = (e) => {
          ;(r.success(n('proxyManagement.deleteSuccess')),
            (V.value = !1),
            h.value && h.value.clearFiles(),
            m())
        },
        Ce = (e) => {
          ;(console.error(e),
            r.error(n('proxyManagement.deleteFailed')),
            h.value && h.value.clearFiles())
        },
        Fe = async (e) => {
          try {
            ;(await le.confirm(n('proxyManagement.confirmDelete'), n('proxyManagement.delete'), {
              confirmButtonText: n('proxyManagement.delete'),
              cancelButtonText: n('proxyManagement.cancel'),
              type: 'warning'
            }),
              await se({ names: [e.name] }),
              r.success(n('proxyManagement.deleteSuccess')),
              m())
          } catch (l) {
            ;(console.error(l), r.error(n('proxyManagement.deleteFailed')))
          }
        },
        Te = async () => {
          const e = localStorage.getItem('owlTrafficBalanceLastClick'),
            l = Date.now()
          if (e) {
            const p = l - parseInt(e)
            if (p < 6e4) {
              const v = Math.ceil((6e4 - p) / 1e3)
              r.warning(n('proxyManagement.waitSeconds', { seconds: v }))
              return
            }
          }
          ;(localStorage.setItem('owlTrafficBalanceLastClick', l.toString()), (E.value = !0))
          try {
            const p = await ze()
            if (p.data) {
              const { accumulatedTraffic: v, remainingTraffic: Z, useTraffic: y } = p.data,
                z = (A) => (A / 1024).toFixed(2),
                ee = z(v || 0),
                ae = z(Z || 0),
                K = z(y || 0),
                x = v ? (((y || 0) / v) * 100).toFixed(1) : 0
              le.alert(
                '\n        <div style="text-align: left;">\n          <p><strong style="color: #409EFF;">'
                  .concat(
                    n('proxyManagement.accumulatedTraffic'),
                    ':</strong> <span style="color: #409EFF;">'
                  )
                  .concat(ee, ' GB </span></p>\n          <p><strong style="color: #67C23A;">')
                  .concat(
                    n('proxyManagement.remainingTraffic'),
                    ':</strong> <span style="color: #67C23A;">'
                  )
                  .concat(ae, ' GB </span></p>\n          <p><strong style="color: #E6A23C;">')
                  .concat(
                    n('proxyManagement.usedTraffic'),
                    ':</strong> <span style="color: #E6A23C;">'
                  )
                  .concat(K, ' GB (')
                  .concat(x, ' %)</span></p>\n\n        </div>\n        '),
                n('proxyManagement.trafficBalanceQueryTitle'),
                { dangerouslyUseHTMLString: !0, confirmButtonText: n('proxyManagement.delete') }
              )
            } else r.success(n('proxyManagement.trafficBalanceQueryFailed'))
          } catch (p) {
            ;(console.error(p), r.error(n('proxyManagement.trafficBalanceQueryFailed')))
          } finally {
            E.value = !1
          }
        },
        Ve = (e) => {
          ;(B.value++, (i.value.pageSize = e), m())
        },
        ke = (e) => {
          ;(B.value++, (i.value.page = e), m())
        }
      return (
        ce(() => {
          ;(m(), W(), S(), window.addEventListener('resize', S))
        }),
        Oe(() => {
          window.removeEventListener('resize', S)
        }),
        (e, l) => {
          const p = c('el-button'),
            v = c('el-input'),
            Z = c('PageBanner'),
            y = c('el-table-column'),
            z = c('el-table'),
            ee = c('el-pagination'),
            ae = c('el-upload'),
            K = c('el-dialog'),
            x = c('el-option'),
            A = c('el-select'),
            O = c('el-form-item'),
            Se = c('el-input-number'),
            De = c('el-form'),
            Pe = Ie('loading')
          return (
            C(),
            te('div', Xe, [
              a(
                Z,
                { title: '' },
                {
                  extra: t(() => [
                    a(
                      v,
                      {
                        modelValue: M.value,
                        'onUpdate:modelValue': l[0] || (l[0] = (s) => (M.value = s)),
                        placeholder: e.$t('proxyManagement.searchPlaceholder'),
                        style: { width: '300px', 'margin-right': '10px' },
                        onInput: j
                      },
                      {
                        append: t(() => [
                          a(
                            p,
                            { onClick: Y },
                            {
                              default: t(() => [g(d(e.$t('proxyManagement.clearSearch')), 1)]),
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
                      p,
                      { icon: 'RefreshRight', onClick: m },
                      { default: t(() => [g(d(e.$t('proxyManagement.refresh')), 1)]), _: 1 }
                    ),
                    a(
                      p,
                      { type: 'primary', onClick: w },
                      { default: t(() => [g(d(e.$t('proxyManagement.uploadProxy')), 1)]), _: 1 }
                    ),
                    a(
                      p,
                      { type: 'success', onClick: ge },
                      {
                        default: t(() => [g(d(e.$t('proxyManagement.createDynamicProxy')), 1)]),
                        _: 1
                      }
                    ),
                    a(
                      p,
                      { onClick: xe },
                      {
                        default: t(() => [g(d(e.$t('proxyManagement.downloadTemplate')), 1)]),
                        _: 1
                      }
                    ),
                    a(
                      p,
                      { onClick: he, disabled: F.value.length === 0 },
                      { default: t(() => [g(d(e.$t('proxyManagement.deleteSelected')), 1)]), _: 1 },
                      8,
                      ['disabled']
                    ),
                    a(
                      p,
                      { type: 'primary', onClick: Te, loading: E.value },
                      {
                        default: t(() => [g(d(e.$t('proxyManagement.trafficBalanceQuery')), 1)]),
                        _: 1
                      },
                      8,
                      ['loading']
                    )
                  ]),
                  _: 1
                }
              ),
              Qe(
                (C(),
                I(
                  z,
                  {
                    ref_key: 'cTable',
                    ref: q,
                    data: f.value,
                    style: { width: '100%', 'margin-top': '15px' },
                    onSelectionChange: _e,
                    onFilterChange: X,
                    'max-height': oe(_)
                  },
                  {
                    default: t(() => [
                      a(y, { type: 'selection', width: '55' }),
                      a(
                        y,
                        { prop: 'id', label: e.$t('proxyManagement.id'), width: '80' },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        y,
                        { prop: 'country_code', label: e.$t('proxyManagement.countryCode') },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        y,
                        {
                          prop: 'group_name',
                          label: e.$t('proxyManagement.group'),
                          'column-key': 'group_name',
                          filters: T.value,
                          'filter-multiple': !1
                        },
                        null,
                        8,
                        ['label', 'filters']
                      ),
                      a(y, { prop: 'name', label: e.$t('proxyManagement.proxyName') }, null, 8, [
                        'label'
                      ]),
                      a(y, { prop: 'mode', label: e.$t('proxyManagement.proxyMode') }, null, 8, [
                        'label'
                      ]),
                      a(
                        y,
                        { prop: 'proxy_type', label: e.$t('proxyManagement.proxyType') },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        y,
                        {
                          prop: 'server_port',
                          label: e.$t('proxyManagement.serverPort'),
                          width: '80'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        y,
                        { prop: 'auth_method', label: e.$t('proxyManagement.authMethod') },
                        null,
                        8,
                        ['label']
                      ),
                      oe(je)(['proxy:password'])
                        ? (C(),
                          I(
                            y,
                            { key: 0, prop: 'password', label: e.$t('proxyManagement.password') },
                            null,
                            8,
                            ['label']
                          ))
                        : qe('', !0),
                      a(
                        y,
                        { label: e.$t('proxyManagement.operations'), width: '150' },
                        {
                          default: t(({ row: s }) => [
                            a(
                              p,
                              { type: 'danger', link: '', onClick: (la) => Fe(s) },
                              { default: t(() => [g(d(e.$t('proxyManagement.delete')), 1)]), _: 2 },
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
                [[Pe, U.value]]
              ),
              Q('div', Ye, [
                a(
                  ee,
                  {
                    'current-page': i.value.page,
                    'onUpdate:currentPage': l[1] || (l[1] = (s) => (i.value.page = s)),
                    'page-size': i.value.pageSize,
                    'onUpdate:pageSize': l[2] || (l[2] = (s) => (i.value.pageSize = s)),
                    'page-sizes': [10, 20, 50],
                    total: i.value.total,
                    layout: 'total, sizes, prev, pager, next, jumper',
                    onSizeChange: Ve,
                    onCurrentChange: ke
                  },
                  null,
                  8,
                  ['current-page', 'page-size', 'total']
                )
              ]),
              a(
                We,
                {
                  modelValue: N.value,
                  'onUpdate:modelValue': l[3] || (l[3] = (s) => (N.value = s)),
                  onSuccess: m
                },
                null,
                8,
                ['modelValue']
              ),
              a(
                K,
                {
                  title: e.$t('proxyManagement.deleteByExcelDialog'),
                  modelValue: V.value,
                  'onUpdate:modelValue': l[4] || (l[4] = (s) => (V.value = s)),
                  width: '500px'
                },
                {
                  footer: t(() => [
                    Q('span', ea, [
                      a(
                        p,
                        { onClick: Me },
                        { default: t(() => [g(d(e.$t('proxyManagement.cancel')), 1)]), _: 1 }
                      )
                    ])
                  ]),
                  default: t(() => [
                    a(
                      ae,
                      {
                        ref_key: 'deleteUploadRef',
                        ref: h,
                        action: J,
                        'auto-upload': !1,
                        'on-change': be,
                        'on-success': $e,
                        'on-error': Ce,
                        limit: 1,
                        'on-exceed': () => {
                          oe(r).warning(e.$t('proxyManagement.onlyOneFile'))
                        }
                      },
                      {
                        default: t(() => [
                          a(
                            p,
                            { slot: 'trigger', type: 'primary' },
                            {
                              default: t(() => [g(d(e.$t('proxyManagement.selectFile')), 1)]),
                              _: 1
                            }
                          ),
                          a(
                            p,
                            {
                              style: { 'margin-left': '10px' },
                              type: 'success',
                              onClick: we,
                              loading: L.value
                            },
                            {
                              default: t(() => [g(d(e.$t('proxyManagement.uploadToServer')), 1)]),
                              _: 1
                            },
                            8,
                            ['loading']
                          ),
                          Q('div', Ze, d(e.$t('proxyManagement.uploadTip')), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['on-exceed']
                    )
                  ]),
                  _: 1
                },
                8,
                ['title', 'modelValue']
              ),
              a(
                K,
                {
                  title: e.$t('proxyManagement.createDynamicProxyDialog'),
                  modelValue: D.value,
                  'onUpdate:modelValue': l[10] || (l[10] = (s) => (D.value = s)),
                  width: '600px'
                },
                {
                  footer: t(() => [
                    a(
                      p,
                      { onClick: re },
                      { default: t(() => [g(d(e.$t('proxyManagement.cancel')), 1)]), _: 1 }
                    ),
                    a(
                      p,
                      { type: 'primary', onClick: ve, loading: G.value },
                      { default: t(() => [g(d(e.$t('proxyManagement.create')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  default: t(() => [
                    a(
                      De,
                      {
                        model: o.value,
                        rules: b,
                        ref_key: 'dynamicProxyFormRef',
                        ref: P,
                        'label-width': '120px'
                      },
                      {
                        default: t(() => [
                          a(
                            O,
                            { label: e.$t('proxyManagement.country'), prop: 'countryCode' },
                            {
                              default: t(() => [
                                a(
                                  A,
                                  {
                                    modelValue: o.value.countryCode,
                                    'onUpdate:modelValue':
                                      l[5] || (l[5] = (s) => (o.value.countryCode = s)),
                                    placeholder: e.$t('proxyManagement.selectCountry'),
                                    style: { width: '100%' },
                                    filterable: '',
                                    onChange: fe
                                  },
                                  {
                                    default: t(() => [
                                      (C(!0),
                                      te(
                                        me,
                                        null,
                                        de(
                                          R.value,
                                          (s) => (
                                            C(),
                                            I(
                                              x,
                                              {
                                                key: s.countryCode,
                                                label: s.countryName,
                                                value: s.countryCode
                                              },
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
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          a(
                            O,
                            { label: e.$t('proxyManagement.proxyType'), prop: 'proxyType' },
                            {
                              default: t(() => [
                                a(
                                  A,
                                  {
                                    modelValue: o.value.proxyType,
                                    'onUpdate:modelValue':
                                      l[6] || (l[6] = (s) => (o.value.proxyType = s)),
                                    placeholder: e.$t('proxyManagement.selectProxyType'),
                                    style: { width: '100%' }
                                  },
                                  {
                                    default: t(() => [
                                      a(x, { label: 'socks5', value: 'socks5' }),
                                      a(x, { label: 'http', value: 'http' })
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue', 'placeholder']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          a(
                            O,
                            { label: e.$t('proxyManagement.ipRotationCycle'), prop: 'rolltime' },
                            {
                              default: t(() => [
                                a(
                                  A,
                                  {
                                    modelValue: o.value.rolltime,
                                    'onUpdate:modelValue':
                                      l[7] || (l[7] = (s) => (o.value.rolltime = s)),
                                    placeholder: e.$t('proxyManagement.selectRotationCycle'),
                                    style: { width: '100%' }
                                  },
                                  {
                                    default: t(() => [
                                      a(
                                        x,
                                        {
                                          label: '5'.concat(e.$t('proxyManagement.minutes')),
                                          value: 5
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        x,
                                        {
                                          label: '10'.concat(e.$t('proxyManagement.minutes')),
                                          value: 10
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        x,
                                        {
                                          label: '15'.concat(e.$t('proxyManagement.minutes')),
                                          value: 15
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        x,
                                        {
                                          label: '30'.concat(e.$t('proxyManagement.minutes')),
                                          value: 30
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        x,
                                        {
                                          label: '45'.concat(e.$t('proxyManagement.minutes')),
                                          value: 45
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        x,
                                        {
                                          label: '60'.concat(e.$t('proxyManagement.minutes')),
                                          value: 60
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        x,
                                        {
                                          label: '90'.concat(e.$t('proxyManagement.minutes')),
                                          value: 90
                                        },
                                        null,
                                        8,
                                        ['label']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue', 'placeholder']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          a(
                            O,
                            { label: e.$t('proxyManagement.createQuantity'), prop: 'goodNum' },
                            {
                              default: t(() => [
                                a(
                                  Se,
                                  {
                                    modelValue: o.value.goodNum,
                                    'onUpdate:modelValue':
                                      l[8] || (l[8] = (s) => (o.value.goodNum = s)),
                                    min: 1,
                                    max: 100
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
                          a(
                            O,
                            { label: e.$t('proxyManagement.groupName'), prop: 'group_name' },
                            {
                              default: t(() => [
                                a(
                                  v,
                                  {
                                    modelValue: o.value.group_name,
                                    'onUpdate:modelValue':
                                      l[9] || (l[9] = (s) => (o.value.group_name = s)),
                                    placeholder: e.$t('proxyManagement.enterGroupName')
                                  },
                                  null,
                                  8,
                                  ['modelValue', 'placeholder']
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
                ['title', 'modelValue']
              )
            ])
          )
        }
      )
    }
  })
const ca = Ue(aa, [['__scopeId', 'data-v-a5152fc7']])
export { ca as default }
