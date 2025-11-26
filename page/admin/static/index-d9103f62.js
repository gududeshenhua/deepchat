import { q as w, h as ge, m as ye, _ as Ne } from './index-ae33a03d.js'
import { u as he } from './useTableHeightFit-d4c36563.js'
import { u as we } from './usePagination-22ed0aad.js'
import { E as y } from './element-74718691.js'
import {
  y as Ce,
  r as i,
  b as Ve,
  Q as xe,
  d as H,
  a8 as v,
  f as p,
  h as k,
  N as u,
  H as o,
  L as b,
  M as d,
  u as l,
  i as F,
  F as R,
  a0 as q,
  G as T
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
function Se(c) {
  return w({ url: '/virtual-numbers/request', method: 'post', data: c, baseURL: '/cpyservice' })
}
function Le(c) {
  return w({ url: '/virtual-numbers/', method: 'get', params: c, baseURL: '/cpyservice' })
}
function ke(c) {
  return w({ url: '/virtual-numbers/'.concat(c, '/sms'), method: 'get', baseURL: '/cpyservice' })
}
function Te(c) {
  return w({ url: '/virtual-numbers/refresh', method: 'post', data: c, baseURL: '/cpyservice' })
}
function ze(c) {
  return w({
    url: '/virtual-numbers/top-countries',
    method: 'get',
    params: c,
    baseURL: '/cpyservice'
  })
}
function Pe(c) {
  return w({ url: '/virtual-numbers/operators', method: 'get', params: c, baseURL: '/cpyservice' })
}
const Ue = { class: 'app-container' },
  je = { style: { display: 'flex', 'align-items': 'center', gap: '10px' } },
  Fe = { class: 'dialog-footer' },
  Re = { style: {} },
  qe = { class: 'pager-wrapper' },
  Be = Ce({
    __name: 'index',
    setup(c) {
      const { t: a } = ge(),
        { tableKey: M, paginationData: m, handleCurrentChange: X, handleSizeChange: Y } = we(),
        Z = i([
          { text: a('virtualNumber.valid'), value: !0 },
          { text: a('virtualNumber.expired'), value: !1 }
        ]),
        z = i({ is_active: null }),
        A = i([]),
        B = i(!1),
        I = i([]),
        C = i(!1),
        O = i(!1),
        { cTable: ee, maxHeight: ae, handleGetTableHeight: D } = he(),
        le = (e) => {
          ye(e, () => {
            y.success(a('virtualNumber.copySuccess'))
          })
        },
        P = i([]),
        V = i([]),
        G = i([]),
        N = i([]),
        x = i({}),
        U = i(!1),
        K = i([]),
        j = i([]),
        $ = i(!1),
        n = i({
          service: 'go',
          country: '',
          forward: 0,
          operator: '',
          maxPrice: 0.5,
          activationType: 0,
          language: ''
        }),
        te = async () => {
          try {
            const e = await fetch('/services.json?t='.concat(Date.now()))
            ;((P.value = await e.json()), (j.value = P.value.slice(0, 100)))
          } catch (e) {
            console.error('获取服务列表失败:', e)
          }
        },
        re = (e) => {
          e === ''
            ? (j.value = P.value.slice(0, 100))
            : (($.value = !0),
              setTimeout(() => {
                const r = P.value.filter((s) => s.name.toLowerCase().includes(e.toLowerCase()))
                ;((j.value = r.slice(0, 100)), ($.value = !1))
              }, 200))
        },
        ue = async (e) => {
          try {
            const r = await fetch('/countries.json?t='.concat(Date.now()))
            ;((x.value = await r.json()),
              (K.value = Object.entries(x.value).map(([s, _]) => ({ code: s, name: _ }))),
              e && e())
          } catch (r) {
            console.error('获取固定国家列表失败:', r)
          }
        },
        oe = () => {
          ;((n.value.operator = ''),
            (U.value = !U.value),
            U.value ? (V.value = K.value) : E(n.value.service))
        },
        E = async (e) => {
          n.value.operator = ''
          try {
            if (!e) {
              V.value = Object.entries(x.value).map(([s, _]) => ({ code: s, name: _ }))
              return
            }
            const r = await ze({ service: e })
            V.value =
              r.map((s) => ({
                code: s.country,
                name: x.value[s.country] || s.countryName || s.country
              })) || []
          } catch (r) {
            ;(console.error('获取热门国家列表失败:', r),
              (V.value = Object.entries(x.value).map(([s, _]) => ({ code: s, name: _ }))))
          }
        },
        ne = async (e) => {
          try {
            if (!e) {
              N.value = []
              return
            }
            const r = await Pe({ country: e })
            ;((N.value = r[e] || []), (n.value.operator = ''))
          } catch (r) {
            ;(console.error('获取运营商列表失败:', r), (N.value = []))
          }
        },
        se = async () => {
          try {
            const e = await fetch('/language.json?t='.concat(Date.now()))
            G.value = await e.json()
          } catch (e) {
            console.error('获取语言列表失败:', e)
          }
        },
        ie = async () => {
          O.value = !0
          try {
            const e = Object.assign({}, n.value)
            e.country = String(e.country)
            const r = await Se(e)
            ;(y.success(a('virtualNumber.addNumberSuccess')), (C.value = !1), Q(), h())
          } catch (e) {
            ;(console.error('新增新号码失败:', e), y.error(a('virtualNumber.addNumberFailed')))
          } finally {
            O.value = !1
          }
        },
        Q = () => {
          ;((n.value = {
            service: 'go',
            country: '',
            forward: 0,
            operator: '',
            maxPrice: 0.3,
            activationType: 0,
            language: ''
          }),
            (C.value = !1))
        },
        h = async () => {
          try {
            M.value++
            const e = { page: m.currentPage, page_size: m.pageSize }
            z.value.is_active !== null && (e.is_active = z.value.is_active)
            const r = await Le(e)
            ;((m.total = r.total_numbers || 0), (A.value = r.numbers || []))
          } catch (e) {
            ;(console.error('获取虚拟号码列表失败:', e),
              y.error(a('virtualNumber.getNumberListFailed')))
          }
        },
        ce = async (e) => {
          e.smsLoading = !0
          try {
            const r = await ke(e.activationId)
            ;((I.value = r), (B.value = !0))
          } catch (r) {
            ;(console.error('获取短信列表失败:', r), y.error(a('virtualNumber.getSmsListFailed')))
          } finally {
            e.smsLoading = !1
          }
        },
        ve = (e) => {
          ;(e.is_active && e.is_active.length > 0
            ? (z.value.is_active = e.is_active[0])
            : (z.value.is_active = null),
            (m.currentPage = 1),
            h())
        },
        me = async () => {
          try {
            ;(await Te({}), y.success(a('virtualNumber.syncStatusSuccess')), h())
          } catch (e) {
            ;(console.error('同步状态失败:', e), y.error(a('virtualNumber.syncStatusFailed')))
          }
        }
      return (
        Ve(() => {
          ;(h(),
            te(),
            ue(() => {
              E(n.value.service)
            }),
            se(),
            D(),
            window.addEventListener('resize', D))
        }),
        xe(() => {
          window.removeEventListener('resize', D)
        }),
        H(
          () => n.value.service,
          (e) => {
            e && (E(e), (n.value.country = ''), (N.value = []))
          }
        ),
        H(
          () => n.value.country,
          (e) => {
            e ? ne(e) : (N.value = [])
          }
        ),
        H([() => m.currentPage, () => m.pageSize], h, { immediate: !0 }),
        (e, r) => {
          const s = v('el-button'),
            _ = v('PageBanner'),
            g = v('el-option'),
            S = v('el-select'),
            L = v('el-form-item'),
            de = v('el-form'),
            pe = v('el-dialog'),
            f = v('el-table-column'),
            J = v('el-tag'),
            W = v('el-table'),
            be = v('el-pagination'),
            fe = v('el-drawer')
          return (
            p(),
            k('div', Ue, [
              u(
                _,
                { title: '' },
                {
                  extra: o(() => [
                    u(
                      s,
                      { icon: 'RefreshRight', onClick: h },
                      { default: o(() => [b(d(l(a)('virtualNumber.refresh')), 1)]), _: 1 }
                    ),
                    u(
                      s,
                      { icon: 'Switch', onClick: me },
                      { default: o(() => [b(d(l(a)('virtualNumber.syncStatus')), 1)]), _: 1 }
                    ),
                    u(
                      s,
                      {
                        icon: 'Plus',
                        type: 'primary',
                        onClick: r[0] || (r[0] = (t) => (C.value = !0))
                      },
                      { default: o(() => [b(d(l(a)('virtualNumber.createNewNumber')), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              ),
              u(
                pe,
                {
                  modelValue: C.value,
                  'onUpdate:modelValue': r[6] || (r[6] = (t) => (C.value = t)),
                  title: l(a)('virtualNumber.addNewNumber'),
                  width: '600'
                },
                {
                  footer: o(() => [
                    F('span', Fe, [
                      u(
                        s,
                        { onClick: Q },
                        { default: o(() => [b(d(l(a)('virtualNumber.cancel')), 1)]), _: 1 }
                      ),
                      u(
                        s,
                        { type: 'primary', onClick: ie, loading: O.value },
                        { default: o(() => [b(d(l(a)('virtualNumber.confirm')), 1)]), _: 1 },
                        8,
                        ['loading']
                      )
                    ])
                  ]),
                  default: o(() => [
                    u(
                      de,
                      { model: n.value, 'label-width': '120px' },
                      {
                        default: o(() => [
                          u(
                            L,
                            { label: l(a)('virtualNumber.service') },
                            {
                              default: o(() => [
                                u(
                                  S,
                                  {
                                    modelValue: n.value.service,
                                    'onUpdate:modelValue':
                                      r[1] || (r[1] = (t) => (n.value.service = t)),
                                    filterable: '',
                                    remote: '',
                                    'remote-method': re,
                                    loading: $.value,
                                    placeholder: l(a)('virtualNumber.selectService')
                                  },
                                  {
                                    default: o(() => [
                                      (p(!0),
                                      k(
                                        R,
                                        null,
                                        q(
                                          j.value,
                                          (t) => (
                                            p(),
                                            T(
                                              g,
                                              { key: t.code, label: t.name, value: t.code },
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
                                  ['modelValue', 'loading', 'placeholder']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          u(
                            L,
                            { label: l(a)('virtualNumber.country') },
                            {
                              default: o(() => [
                                F('div', je, [
                                  u(
                                    S,
                                    {
                                      modelValue: n.value.country,
                                      'onUpdate:modelValue':
                                        r[2] || (r[2] = (t) => (n.value.country = t)),
                                      filterable: '',
                                      placeholder: l(a)('virtualNumber.selectCountry'),
                                      style: { flex: '1' }
                                    },
                                    {
                                      default: o(() => [
                                        (p(!0),
                                        k(
                                          R,
                                          null,
                                          q(
                                            V.value,
                                            (t) => (
                                              p(),
                                              T(
                                                g,
                                                { key: t.code, label: t.name, value: t.code },
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
                                  u(
                                    s,
                                    {
                                      type: 'primary',
                                      link: '',
                                      onClick: oe,
                                      style: { 'white-space': 'nowrap' }
                                    },
                                    {
                                      default: o(() => [
                                        b(
                                          d(
                                            U.value
                                              ? l(a)('virtualNumber.hotCountries')
                                              : l(a)('virtualNumber.allCountries')
                                          ),
                                          1
                                        )
                                      ]),
                                      _: 1
                                    }
                                  )
                                ])
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          u(
                            L,
                            { label: l(a)('virtualNumber.operator') },
                            {
                              default: o(() => [
                                u(
                                  S,
                                  {
                                    modelValue: n.value.operator,
                                    'onUpdate:modelValue':
                                      r[3] || (r[3] = (t) => (n.value.operator = t)),
                                    filterable: '',
                                    placeholder: l(a)('virtualNumber.selectOperator'),
                                    style: { width: '100%' }
                                  },
                                  {
                                    default: o(() => [
                                      (p(!0),
                                      k(
                                        R,
                                        null,
                                        q(
                                          N.value,
                                          (t) => (
                                            p(),
                                            T(g, { key: t, label: t, value: t }, null, 8, [
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
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          u(
                            L,
                            { label: l(a)('virtualNumber.activationType') },
                            {
                              default: o(() => [
                                u(
                                  S,
                                  {
                                    modelValue: n.value.activationType,
                                    'onUpdate:modelValue':
                                      r[4] || (r[4] = (t) => (n.value.activationType = t)),
                                    placeholder: l(a)('virtualNumber.selectActivationType')
                                  },
                                  {
                                    default: o(() => [
                                      u(
                                        g,
                                        { label: l(a)('virtualNumber.viaSms'), value: 0 },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      u(
                                        g,
                                        { label: l(a)('virtualNumber.viaPhone'), value: 1 },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      u(
                                        g,
                                        { label: l(a)('virtualNumber.viaVoice'), value: 2 },
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
                          u(
                            L,
                            { label: l(a)('virtualNumber.language') },
                            {
                              default: o(() => [
                                u(
                                  S,
                                  {
                                    modelValue: n.value.language,
                                    'onUpdate:modelValue':
                                      r[5] || (r[5] = (t) => (n.value.language = t)),
                                    filterable: '',
                                    placeholder: l(a)('virtualNumber.selectLanguage')
                                  },
                                  {
                                    default: o(() => [
                                      (p(!0),
                                      k(
                                        R,
                                        null,
                                        q(
                                          G.value,
                                          (t) => (
                                            p(),
                                            T(
                                              g,
                                              { key: t.code, label: t.name, value: t.code },
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
                ['modelValue', 'title']
              ),
              (p(),
              T(
                W,
                {
                  ref_key: 'cTable',
                  ref: ee,
                  data: A.value,
                  key: l(M),
                  style: { width: '100%', 'margin-top': '20px' },
                  'max-height': l(ae),
                  onFilterChange: ve
                },
                {
                  default: o(() => [
                    u(
                      f,
                      { prop: 'phoneNumber', label: l(a)('virtualNumber.phoneNumber') },
                      {
                        default: o(({ row: t }) => [
                          F('span', Re, '+' + d(t.phoneNumber), 1),
                          u(
                            s,
                            {
                              'ml-2': '',
                              link: '',
                              type: 'primary',
                              size: 'small',
                              onClick: (_e) => le('+' + t.phoneNumber)
                            },
                            { default: o(() => [b(d(l(a)('common.copy')), 1)]), _: 2 },
                            1032,
                            ['onClick']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    u(
                      f,
                      { prop: 'activationTime', label: l(a)('virtualNumber.applyTime') },
                      null,
                      8,
                      ['label']
                    ),
                    u(
                      f,
                      {
                        prop: 'is_active',
                        label: l(a)('virtualNumber.status'),
                        'column-key': 'is_active',
                        filters: Z.value,
                        'filter-multiple': !1
                      },
                      {
                        default: o(({ row: t }) => [
                          u(
                            J,
                            { type: t.is_active ? 'success' : 'danger' },
                            {
                              default: o(() => [
                                b(
                                  d(
                                    t.is_active
                                      ? l(a)('virtualNumber.valid')
                                      : l(a)('virtualNumber.expired')
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
                        _: 1
                      },
                      8,
                      ['label', 'filters']
                    ),
                    u(
                      f,
                      { prop: 'is_completed', label: l(a)('virtualNumber.sms') },
                      {
                        default: o(({ row: t }) => [
                          u(
                            J,
                            { type: t.is_completed ? 'success' : 'warning' },
                            {
                              default: o(() => [
                                b(
                                  d(
                                    t.is_completed
                                      ? l(a)('virtualNumber.received')
                                      : l(a)('virtualNumber.notReceived')
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
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    u(
                      f,
                      { label: l(a)('common.operation') },
                      {
                        default: o(({ row: t }) => [
                          u(
                            s,
                            {
                              link: '',
                              type: 'primary',
                              size: 'small',
                              onClick: (_e) => ce(t),
                              loading: t.smsLoading
                            },
                            { default: o(() => [b(d(l(a)('virtualNumber.viewSms')), 1)]), _: 2 },
                            1032,
                            ['onClick', 'loading']
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
              F('div', qe, [
                u(
                  be,
                  {
                    layout: l(m).layout,
                    'page-sizes': l(m).pageSizes,
                    total: l(m).total,
                    'page-size': l(m).pageSize,
                    'current-page': l(m).currentPage,
                    onSizeChange: l(Y),
                    onCurrentChange: l(X)
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
              u(
                fe,
                {
                  modelValue: B.value,
                  'onUpdate:modelValue': r[7] || (r[7] = (t) => (B.value = t)),
                  title: l(a)('virtualNumber.smsList'),
                  size: '800'
                },
                {
                  default: o(() => [
                    u(
                      W,
                      { data: I.value, style: { width: '100%' } },
                      {
                        default: o(() => [
                          u(
                            f,
                            { prop: 'code', label: l(a)('virtualNumber.verificationCode') },
                            null,
                            8,
                            ['label']
                          ),
                          u(f, { prop: 'text', label: l(a)('virtualNumber.content') }, null, 8, [
                            'label'
                          ]),
                          u(
                            f,
                            { prop: 'receivedAt', label: l(a)('virtualNumber.time'), width: '180' },
                            null,
                            8,
                            ['label']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['data']
                    )
                  ]),
                  _: 1
                },
                8,
                ['modelValue', 'title']
              )
            ])
          )
        }
      )
    }
  })
const Ae = Ne(Be, [['__scopeId', 'data-v-8f28698b']])
export { Ae as default }
