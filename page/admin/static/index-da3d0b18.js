import { q as b, _ as Ee, h as Ve } from './index-ae33a03d.js'
import { u as Re } from './usePagination-22ed0aad.js'
import { e as ke, E as M } from './element-74718691.js'
import {
  r as m,
  R as ee,
  b as Se,
  d as ae,
  Q as ze,
  a8 as r,
  ag as Fe,
  f as h,
  h as R,
  i as s,
  N as n,
  u as t,
  H as o,
  n as Te,
  L as x,
  M as u,
  G as A,
  F as le,
  a0 as te,
  B as He,
  I as Ae,
  A as Ue,
  K as De
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
function Ie(p) {
  return b({ url: '/mail/prefix/apply', method: 'POST', data: p, baseURL: '/cpyservice' })
}
function Be() {
  return b({ url: '/mail/prefix/list', method: 'GET', baseURL: '/cpyservice' })
}
function Ye(p) {
  return b({ url: '/mail/address/generate', method: 'POST', data: p, baseURL: '/cpyservice' })
}
function Ne(p) {
  return b({
    url: '/mail/receive?all=' + p.filter,
    method: 'POST',
    data: p,
    baseURL: '/cpyservice'
  })
}
function je(p) {
  return b({ url: '/mail/list', method: 'GET', params: p, baseURL: '/cpyservice' })
}
function qe(p) {
  return b({ url: '/mail/read', method: 'POST', data: p, baseURL: '/cpyservice' })
}
const Oe = { class: 'email-container' },
  Ge = { class: 'header-actions' },
  $e = { style: { 'margin-right': '20px' } },
  Ke = { class: 'card-header' },
  Qe = { style: { display: 'flex', 'align-items': 'center', gap: '10px' } },
  Ze = { key: 1, class: 'no-data' },
  Je = {
    class: 'pager-wrapper',
    style: { padding: '10px', display: 'flex', 'justify-content': 'flex-end' }
  },
  We = { class: 'card-header' },
  Xe = { class: 'mail-actions' },
  ea = { class: 'mail-list' },
  aa = { class: 'dialog-footer' },
  la = { key: 0, class: 'mail-detail' },
  ta = { class: 'mail-header' },
  na = { class: 'mail-info' },
  ia = { class: 'mail-content' },
  oa = ['innerHTML'],
  sa = {
    __name: 'index',
    setup(p) {
      const { t: e } = Ve(),
        w = m(!1),
        U = m(!1),
        k = m(!1),
        D = m(!1),
        c = m(''),
        S = m('all'),
        g = m([]),
        N = m([]),
        y = m(null),
        j = m([]),
        q = m(500),
        O = m(500)
      m(0)
      const { paginationData: f, handleCurrentChange: ne, handleSizeChange: ie } = Re(),
        z = ee({ createdAfter: null }),
        F = m(''),
        I = m(null),
        d = ee({ existingPrefix: '', newPrefix: '', emailAddress: '' }),
        oe = {
          emailAddress: [
            {
              required: !0,
              message: e('emailManagement.inputEmailLengthRequired'),
              trigger: 'blur'
            },
            {
              type: 'number',
              min: 6,
              max: 9,
              message: e('emailManagement.emailLengthRange'),
              trigger: 'blur'
            }
          ]
        },
        L = m(),
        se = async () => {
          w.value = !0
          try {
            const l = await Be()
            j.value = l || []
          } catch (l) {
            ;(console.error(e('emailManagement.getPrefixListFailed'), l),
              M.error(e('emailManagement.getPrefixListFailed')))
          }
        },
        G = () => {
          ;((d.existingPrefix = ''),
            (d.newPrefix = ''),
            (d.emailAddress = ''),
            L.value && L.value.resetFields())
        },
        re = (l) => {
          l && (d.newPrefix = '')
        },
        de = () => {
          L.value &&
            L.value.validate(async (l) => {
              if (l) {
                D.value = !0
                try {
                  if (d.newPrefix) await Ie({ prefix: d.newPrefix })
                  else if (!d.existingPrefix) {
                    M.warning(e('emailManagement.selectOrInputPrefix'))
                    return
                  }
                  const a = d.newPrefix || d.existingPrefix
                  ;(await Ye({ prefix: a, length: parseInt(d.emailAddress) }),
                    M.success(e('emailManagement.applyEmailSuccess')),
                    (w.value = !1),
                    G(),
                    P())
                } catch (a) {
                  ;(console.error(e('emailManagement.applyEmailFailed'), a),
                    M.error(
                      e('emailManagement.applyEmailFailed') +
                        (a.message || e('emailManagement.unknownError'))
                    ))
                } finally {
                  D.value = !1
                }
              }
            })
        },
        P = async () => {
          try {
            const l = { page: f.currentPage, page_size: f.pageSize }
            z.createdAfter && (l.start_time = z.createdAfter)
            const a = await je(l)
            ;((g.value = (a.addresses || []).map((_) => ({
              ..._,
              unread_count: void 0,
              all_count: void 0
            }))),
              a.total !== void 0 && (f.total = a.total),
              g.value.length > 0 && !c.value && ((c.value = g.value[0].full_address), T()),
              setTimeout(C, 100))
          } catch (l) {
            ;(console.error(e('emailManagement.getEmailListFailed'), l),
              M.error(e('emailManagement.getEmailListFailed')))
          }
        },
        ue = () => {
          ;((f.currentPage = 1), P())
        },
        me = () => {
          ;(I.value && clearTimeout(I.value),
            (I.value = setTimeout(() => {
              F.value.trim() && $(F.value.trim())
            }, 300)))
        },
        $ = (l) => {
          ;((c.value = l), T())
        },
        T = async () => {
          if (c.value) {
            k.value = !0
            try {
              const l = await Ne({ email_address: c.value, filter: S.value != 'unread' }),
                a = l.emails || []
              if (((N.value = a), l.email_count !== void 0)) {
                const _ = g.value.findIndex((v) => v.full_address === c.value)
                _ !== -1 &&
                  (S.value === 'unread'
                    ? (g.value[_].unread_count = l.email_count || 0)
                    : (g.value[_].all_count = l.email_count || 0))
              }
              setTimeout(C, 100)
            } catch (l) {
              ;(console.error(e('emailManagement.getMailListFailed'), l),
                M.error(e('emailManagement.getMailListFailed')))
            } finally {
              k.value = !1
            }
          }
        },
        ce = () => {
          T()
        },
        pe = async (l) => {
          ;((y.value = l), (U.value = !0))
          try {
            ;(await qe({ mail_uid: l.mail_uid }), (l.isRead = !0))
          } catch (a) {
            console.error(e('emailManagement.markMailAsReadFailed'), a)
          }
        },
        K = () => {
          if (!c.value) return
          const l = g.value.find((a) => a.full_address === c.value)
          return l ? l.all_count : void 0
        },
        Q = () => {
          if (!c.value) return
          const l = g.value.find((a) => a.full_address === c.value)
          return l ? l.unread_count : void 0
        },
        C = ke(() => {
          Te(() => {
            var _, v
            const l = document.querySelector('.email-list-card')
            if (l) {
              const E = l.getBoundingClientRect().top + 190,
                V =
                  ((_ = document.getElementById('app')) == null ? void 0 : _.clientHeight) ||
                  window.innerHeight
              q.value = V - E
            }
            const a = document.querySelector('.mail-list-card')
            if (a) {
              const E = a.getBoundingClientRect().top + 120,
                V =
                  ((v = document.getElementById('app')) == null ? void 0 : v.clientHeight) ||
                  window.innerHeight
              O.value = V - E
            }
          })
        }, 100)
      return (
        Se(() => {
          ;(P(),
            window.addEventListener('resize', C),
            setTimeout(C, 100),
            ae(
              () => f.currentPage,
              () => {
                P()
              }
            ),
            ae(
              () => f.pageSize,
              () => {
                ;((f.currentPage = 1), P())
              }
            ))
        }),
        ze(() => {
          window.removeEventListener('resize', C)
        }),
        (l, a) => {
          const _ = r('el-alert'),
            v = r('el-button'),
            H = r('el-input'),
            E = r('el-date-picker'),
            V = r('el-menu-item'),
            fe = r('el-menu'),
            ge = r('el-empty'),
            _e = r('el-pagination'),
            Z = r('el-card'),
            J = r('el-col'),
            W = r('el-radio-button'),
            X = r('el-badge'),
            ve = r('el-radio-group'),
            B = r('el-table-column'),
            he = r('el-table'),
            xe = r('el-row'),
            ye = r('el-option'),
            Me = r('el-select'),
            Y = r('el-form-item'),
            be = r('el-input-number'),
            we = r('el-form'),
            Le = r('el-dialog'),
            Pe = r('el-drawer'),
            Ce = Fe('loading')
          return (
            h(),
            R('div', Oe, [
              s('div', Ge, [
                s('div', $e, [
                  n(
                    _,
                    {
                      title: t(e)('emailManagement.tip'),
                      type: 'warning',
                      'show-icon': '',
                      closable: !1
                    },
                    null,
                    8,
                    ['title']
                  )
                ]),
                n(
                  v,
                  { type: 'primary', onClick: se, style: { 'vertical-align': 'middle' } },
                  { default: o(() => [x(u(t(e)('emailManagement.addEmail')), 1)]), _: 1 }
                )
              ]),
              n(
                xe,
                { gutter: 20 },
                {
                  default: o(() => [
                    n(
                      J,
                      { span: 8 },
                      {
                        default: o(() => [
                          n(
                            Z,
                            { class: 'email-list-card' },
                            {
                              header: o(() => [
                                s('div', Ke, [
                                  s('span', null, u(t(e)('emailManagement.emailList')), 1),
                                  s('div', Qe, [
                                    n(
                                      H,
                                      {
                                        modelValue: F.value,
                                        'onUpdate:modelValue':
                                          a[0] || (a[0] = (i) => (F.value = i)),
                                        placeholder: t(e)('emailManagement.searchEmailPlaceholder'),
                                        clearable: '',
                                        style: { width: '150px' },
                                        onInput: me
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'placeholder']
                                    ),
                                    n(
                                      E,
                                      {
                                        modelValue: z.createdAfter,
                                        'onUpdate:modelValue':
                                          a[1] || (a[1] = (i) => (z.createdAfter = i)),
                                        type: 'datetime',
                                        placeholder: t(e)(
                                          'emailManagement.createdAfterPlaceholder'
                                        ),
                                        format: 'YYYY-MM-DD HH:mm:ss',
                                        'value-format': 'YYYY-MM-DDTHH:mm:ss[Z]',
                                        onChange: ue,
                                        style: { width: '150px' }
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'placeholder']
                                    )
                                  ])
                                ])
                              ]),
                              default: o(() => [
                                s(
                                  'div',
                                  {
                                    class: 'email-list',
                                    style: He({ maxHeight: q.value + 'px', overflowY: 'auto' })
                                  },
                                  [
                                    g.value.length > 0
                                      ? (h(),
                                        A(
                                          fe,
                                          {
                                            key: 0,
                                            'default-active': c.value,
                                            class: 'email-menu'
                                          },
                                          {
                                            default: o(() => [
                                              (h(!0),
                                              R(
                                                le,
                                                null,
                                                te(
                                                  g.value,
                                                  (i) => (
                                                    h(),
                                                    A(
                                                      V,
                                                      {
                                                        key: i.full_address,
                                                        index: i.full_address,
                                                        onClick: (ra) => $(i.full_address)
                                                      },
                                                      {
                                                        default: o(() => [
                                                          s('span', null, u(i.full_address), 1)
                                                        ]),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ['index', 'onClick']
                                                    )
                                                  )
                                                ),
                                                128
                                              ))
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['default-active']
                                        ))
                                      : (h(),
                                        R('div', Ze, [
                                          n(
                                            ge,
                                            { description: t(e)('emailManagement.noEmailData') },
                                            null,
                                            8,
                                            ['description']
                                          )
                                        ]))
                                  ],
                                  4
                                ),
                                s('div', Je, [
                                  n(
                                    _e,
                                    {
                                      layout: 'total, prev, pager, next',
                                      'page-sizes': t(f).pageSizes,
                                      total: t(f).total,
                                      'page-size': t(f).pageSize,
                                      'current-page': t(f).currentPage,
                                      onSizeChange: t(ie),
                                      onCurrentChange: t(ne)
                                    },
                                    null,
                                    8,
                                    [
                                      'page-sizes',
                                      'total',
                                      'page-size',
                                      'current-page',
                                      'onSizeChange',
                                      'onCurrentChange'
                                    ]
                                  )
                                ])
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    n(
                      J,
                      { span: 16 },
                      {
                        default: o(() => [
                          n(
                            Z,
                            { class: 'mail-list-card' },
                            {
                              header: o(() => [
                                s('div', We, [
                                  s(
                                    'span',
                                    null,
                                    u(c.value) + ' ' + u(t(e)('emailManagement.mailListTitle')),
                                    1
                                  ),
                                  s('div', Xe, [
                                    n(
                                      ve,
                                      {
                                        modelValue: S.value,
                                        'onUpdate:modelValue':
                                          a[2] || (a[2] = (i) => (S.value = i)),
                                        size: 'small',
                                        onChange: ce
                                      },
                                      {
                                        default: o(() => [
                                          n(
                                            X,
                                            { value: K(), max: 99, type: (K() > 0, 'info') },
                                            {
                                              default: o(() => [
                                                n(
                                                  W,
                                                  { label: 'all' },
                                                  {
                                                    default: o(() => [
                                                      x(u(t(e)('emailManagement.all')), 1)
                                                    ]),
                                                    _: 1
                                                  }
                                                )
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['value', 'type']
                                          ),
                                          n(
                                            X,
                                            { value: Q(), max: 99, type: (Q() > 0, 'warning') },
                                            {
                                              default: o(() => [
                                                n(
                                                  W,
                                                  { label: 'unread' },
                                                  {
                                                    default: o(() => [
                                                      x(u(t(e)('emailManagement.unread')), 1)
                                                    ]),
                                                    _: 1
                                                  }
                                                )
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['value', 'type']
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['modelValue']
                                    ),
                                    n(
                                      v,
                                      { size: 'small', onClick: T, loading: k.value },
                                      {
                                        default: o(() => [
                                          x(u(t(e)('emailManagement.refresh')), 1)
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['loading']
                                    )
                                  ])
                                ])
                              ]),
                              default: o(() => [
                                s('div', ea, [
                                  Ae(
                                    (h(),
                                    A(
                                      he,
                                      {
                                        data: N.value,
                                        style: { width: '100%' },
                                        onRowClick: pe,
                                        'max-height': O.value
                                      },
                                      {
                                        default: o(() => [
                                          n(
                                            B,
                                            {
                                              prop: 'subject',
                                              label: t(e)('emailManagement.subject'),
                                              'show-overflow-tooltip': ''
                                            },
                                            {
                                              default: o((i) => [
                                                s(
                                                  'span',
                                                  {
                                                    class: Ue([
                                                      { 'unread-mail': !i.row.isRead },
                                                      'subject-text'
                                                    ])
                                                  },
                                                  u(i.row.subject),
                                                  3
                                                )
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          n(
                                            B,
                                            {
                                              prop: 'from_address',
                                              label: t(e)('emailManagement.sender'),
                                              width: '200'
                                            },
                                            null,
                                            8,
                                            ['label']
                                          ),
                                          n(
                                            B,
                                            {
                                              prop: 'date',
                                              label: t(e)('emailManagement.time'),
                                              width: '180'
                                            },
                                            null,
                                            8,
                                            ['label']
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['data', 'max-height']
                                    )),
                                    [[Ce, k.value]]
                                  )
                                ])
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              ),
              n(
                Le,
                {
                  modelValue: w.value,
                  'onUpdate:modelValue': a[7] || (a[7] = (i) => (w.value = i)),
                  title: t(e)('emailManagement.applyEmail'),
                  width: '500px',
                  onClose: G
                },
                {
                  footer: o(() => [
                    s('span', aa, [
                      n(
                        v,
                        { onClick: a[6] || (a[6] = (i) => (w.value = !1)) },
                        { default: o(() => [x(u(t(e)('emailManagement.cancel')), 1)]), _: 1 }
                      ),
                      n(
                        v,
                        { type: 'primary', onClick: de, loading: D.value },
                        { default: o(() => [x(u(t(e)('emailManagement.confirm')), 1)]), _: 1 },
                        8,
                        ['loading']
                      )
                    ])
                  ]),
                  default: o(() => [
                    n(
                      we,
                      {
                        model: d,
                        rules: oe,
                        ref_key: 'prefixFormRef',
                        ref: L,
                        'label-width': '100px'
                      },
                      {
                        default: o(() => [
                          n(
                            Y,
                            {
                              label: t(e)('emailManagement.existingPrefix'),
                              prop: 'existingPrefix'
                            },
                            {
                              default: o(() => [
                                n(
                                  Me,
                                  {
                                    modelValue: d.existingPrefix,
                                    'onUpdate:modelValue':
                                      a[3] || (a[3] = (i) => (d.existingPrefix = i)),
                                    placeholder: t(e)('emailManagement.selectExistingPrefix'),
                                    style: { width: '100%' },
                                    clearable: '',
                                    onChange: re
                                  },
                                  {
                                    default: o(() => [
                                      (h(!0),
                                      R(
                                        le,
                                        null,
                                        te(
                                          j.value,
                                          (i) => (
                                            h(),
                                            A(ye, { key: i, label: i, value: i }, null, 8, [
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
                          n(
                            Y,
                            { label: t(e)('emailManagement.orNew'), prop: 'newPrefix' },
                            {
                              default: o(() => [
                                n(
                                  H,
                                  {
                                    modelValue: d.newPrefix,
                                    'onUpdate:modelValue':
                                      a[4] || (a[4] = (i) => (d.newPrefix = i)),
                                    placeholder: t(e)('emailManagement.inputNewPrefix'),
                                    disabled: !!d.existingPrefix
                                  },
                                  null,
                                  8,
                                  ['modelValue', 'placeholder', 'disabled']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          n(
                            Y,
                            { label: t(e)('emailManagement.emailLength'), prop: 'emailAddress' },
                            {
                              default: o(() => [
                                n(
                                  be,
                                  {
                                    modelValue: d.emailAddress,
                                    'onUpdate:modelValue':
                                      a[5] || (a[5] = (i) => (d.emailAddress = i)),
                                    min: 6,
                                    max: 9,
                                    placeholder: t(e)('emailManagement.inputEmailLength'),
                                    type: 'number'
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
                ['modelValue', 'title']
              ),
              n(
                Pe,
                {
                  modelValue: U.value,
                  'onUpdate:modelValue': a[8] || (a[8] = (i) => (U.value = i)),
                  title: t(e)('emailManagement.mailDetail'),
                  direction: 'rtl',
                  size: '60%',
                  'destroy-on-close': !1
                },
                {
                  default: o(() => [
                    y.value
                      ? (h(),
                        R('div', la, [
                          s('div', ta, [
                            s('h2', null, u(y.value.subject), 1),
                            s('div', na, [
                              s('p', null, [
                                s('strong', null, u(t(e)('emailManagement.sender')) + ':', 1),
                                x(' ' + u(y.value.from_address), 1)
                              ]),
                              s('p', null, [
                                s('strong', null, u(t(e)('emailManagement.time')) + ':', 1),
                                x(' ' + u(y.value.date), 1)
                              ]),
                              s('p', null, [
                                s('strong', null, u(t(e)('emailManagement.recipient')) + ':', 1),
                                x(' ' + u(y.value.to_address), 1)
                              ])
                            ])
                          ]),
                          s('div', ia, [s('div', { innerHTML: y.value.body }, null, 8, oa)])
                        ]))
                      : De('', !0)
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
  },
  fa = Ee(sa, [['__scopeId', 'data-v-48510ff8']])
export { fa as default }
