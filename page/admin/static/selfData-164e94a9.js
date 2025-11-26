import { L as ce, H as pe, E as p, G as fe } from './element-74718691.js'
import { q as C, h as ge, _ as _e } from './index-ae33a03d.js'
import {
  y as De,
  r as f,
  R as L,
  e as be,
  b as ke,
  a8 as m,
  ag as he,
  f as k,
  h as v,
  N as l,
  H as n,
  L as r,
  M as d,
  u as s,
  I as ve,
  G as Me,
  i as g,
  K as w
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
function xe(h) {
  return C({ url: '/user/selfdata/', method: 'GET', params: h, baseURL: '/cpyservice' })
}
function we(h) {
  return C({
    url: '/user/selfdata/',
    method: 'POST',
    data: h,
    headers: { 'Content-Type': 'multipart/form-data' },
    baseURL: '/cpyservice'
  })
}
function ye() {
  return C({
    url: '/user/selfdata/download-excel-template/',
    method: 'GET',
    responseType: 'blob',
    baseURL: '/cpyservice'
  })
}
function Ve(h, e) {
  return C({ url: '/user/selfdata/'.concat(h), method: 'PUT', data: e, baseURL: '/cpyservice' })
}
function Se(h, e) {
  return C({
    url: '/user/selfdata/update-status-by-ids',
    method: 'POST',
    data: { ids: h, status: e },
    baseURL: '/cpyservice'
  })
}
const Ue = { class: 'self-data-container' },
  Ce = { class: 'email-info' },
  Ee = { key: 0, class: 'email-item' },
  Te = { class: 'email-label' },
  Pe = { class: 'email-value' },
  Re = { key: 0, class: 'email-password' },
  Fe = { key: 1, class: 'email-item' },
  Le = { class: 'email-label' },
  ze = { class: 'email-value' },
  Be = { key: 0, class: 'email-password' },
  Ne = { key: 2, class: 'email-item' },
  qe = { class: 'email-label' },
  Ie = { class: 'email-value' },
  Oe = { key: 0, class: 'email-password' },
  $e = { key: 3, class: 'no-email' },
  Ge = { class: 'pagination-container' },
  je = { class: 'el-upload__text' },
  Ae = { class: 'el-upload__tip' },
  He = De({
    __name: 'selfData',
    setup(h) {
      const { t: e } = ge(),
        T = f(!1),
        z = f([]),
        N = f([])
      L({ id: '' })
      const c = L({ current: 1, size: 10, total: 0 }),
        y = f(!1),
        P = f(!1),
        E = f(),
        V = f(),
        i = L({
          group: '',
          username: '',
          password: '',
          phone_number: '',
          email1: '',
          email1_password: '',
          aux_email: '',
          aux_email_password: '',
          aux_email2: '',
          aux_email2_password: ''
        }),
        S = f(!1),
        R = f(!1),
        U = f(null),
        q = {
          username: [
            {
              required: !0,
              message: e('taskManagement.selfData.editDialog.usernameRequired'),
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: !0,
              message: e('taskManagement.selfData.editDialog.passwordRequired'),
              trigger: 'blur'
            }
          ]
        },
        I = be(() =>
          V.value
            ? e('taskManagement.selfData.editDialog.editTitle')
            : e('taskManagement.selfData.editDialog.addTitle')
        ),
        F = f()
      'Bearer '.concat(localStorage.getItem('token'))
      const M = async () => {
          T.value = !0
          try {
            const t = { page: c.current, limit: c.size },
              o = await xe(t)
            ;((z.value = o.data_list.map((u) => ((u.status = u.status.toLowerCase()), u))),
              (c.total = o.total_data))
          } catch (t) {
            ;(console.error('获取账号数据失败:', t),
              p.error(e('taskManagement.selfData.messages.fetchFailed')))
          } finally {
            T.value = !1
          }
        },
        O = () => {
          S.value = !0
        },
        $ = (t) => {
          U.value = t
        },
        G = () => {
          p.warning(e('taskManagement.selfData.messages.onlyOneFileAllowed'))
        },
        j = async () => {
          if (!U.value) {
            p.warning(e('taskManagement.selfData.messages.pleaseSelectFile'))
            return
          }
          R.value = !0
          try {
            const t = new FormData()
            ;(t.append('file', U.value.raw),
              await we(t),
              p.success(e('taskManagement.selfData.messages.uploadSuccess')),
              (S.value = !1),
              M(),
              F.value.clearFiles(),
              (U.value = null))
          } catch (t) {
            ;(console.error('上传失败:', t),
              p.error(e('taskManagement.selfData.messages.uploadFailed')))
          } finally {
            R.value = !1
          }
        },
        A = () => {
          ;((S.value = !1), F.value.clearFiles(), (U.value = null))
        },
        H = (t) => {
          ;((c.pageSize = t), (c.currentPage = 1), M())
        },
        K = (t) => {
          ;((c.currentPage = t), M())
        },
        J = (t) => {
          N.value = t
        },
        Q = async () => {
          try {
            const t = await ye(),
              o = new Blob([t]),
              u = window.URL.createObjectURL(o),
              x = document.createElement('a')
            ;((x.href = u),
              (x.download = e('taskManagement.selfData.template.filename')),
              x.click(),
              window.URL.revokeObjectURL(u),
              p.success(e('taskManagement.selfData.messages.templateDownloadSuccess')))
          } catch (t) {
            ;(console.error('下载模板失败:', t),
              p.error(e('taskManagement.selfData.messages.templateDownloadFailed')))
          }
        },
        W = (t) => {
          ;((V.value = t.id),
            (i.group = t.group || ''),
            (i.username = t.username || ''),
            (i.password = t.password || ''),
            (i.phone_number = t.phone_number || ''),
            (i.email1 = t.email1 || ''),
            (i.email1_password = t.email1_password || ''),
            (i.aux_email = t.aux_email || ''),
            (i.aux_email_password = t.aux_email_password || ''),
            (i.aux_email2 = t.aux_email2 || ''),
            (i.aux_email2_password = t.aux_email2_password || ''),
            (y.value = !0))
        },
        X = () => {
          var t
          ;((t = E.value) == null || t.resetFields(), (V.value = void 0))
        },
        Y = async () => {
          if (!(!E.value || !(await E.value.validate()))) {
            P.value = !0
            try {
              ;(V.value &&
                (await Ve(V.value, i),
                p.success(e('taskManagement.selfData.messages.updateSuccess'))),
                (y.value = !1),
                M())
            } catch (o) {
              ;(console.error('操作失败:', o),
                p.error(e('taskManagement.selfData.messages.operationFailed')))
            } finally {
              P.value = !1
            }
          }
        },
        Z = (t) => {
          switch (t) {
            case 'in_use':
              return e('taskManagement.selfData.status.inUse')
            case 'active':
              return e('taskManagement.selfData.status.active')
            case 'used':
              return e('taskManagement.selfData.status.used')
            default:
              return t || e('taskManagement.selfData.status.unknown')
          }
        },
        ee = (t) => {
          switch (t) {
            case 'in_use':
              return 'success'
            case 'active':
              return 'primary'
            case 'used':
              return 'info'
            default:
              return 'info'
          }
        },
        ae = async (t) => {
          try {
            const u = t.status === 'active' ? 'used' : 'active'
            ;(await fe.confirm(
              e('taskManagement.selfData.messages.confirmToggleStatus', {
                id: t.id,
                action: e(
                  u === 'active'
                    ? 'taskManagement.selfData.table.actions.enable'
                    : 'taskManagement.selfData.table.actions.disable'
                )
              }),
              e('common.prompt'),
              {
                confirmButtonText: e('common.confirm'),
                cancelButtonText: e('common.cancel'),
                type: 'warning'
              }
            ),
              await Se([t.id], u),
              p.success(
                e('taskManagement.selfData.messages.toggleStatusSuccess', {
                  action: e(
                    u === 'active'
                      ? 'taskManagement.selfData.table.actions.enable'
                      : 'taskManagement.selfData.table.actions.disable'
                  )
                })
              ),
              M())
          } catch (o) {
            o !== 'cancel' &&
              (console.error('状态切换失败:', o),
              p.error(e('taskManagement.selfData.messages.toggleStatusFailed')))
          }
        },
        le = (t) => (t ? new Date(t).toLocaleString('zh-CN') : '-')
      return (
        ke(() => {
          M()
        }),
        (t, o) => {
          const u = m('el-button'),
            x = m('el-icon'),
            te = m('Upload'),
            se = m('PageBanner'),
            _ = m('el-table-column'),
            oe = m('el-tag'),
            ne = m('el-table'),
            ie = m('el-pagination'),
            D = m('el-input'),
            b = m('el-form-item'),
            de = m('el-form'),
            B = m('el-dialog'),
            ue = m('el-upload'),
            re = he('loading')
          return (
            k(),
            v('div', Ue, [
              l(
                se,
                { title: '' },
                {
                  extra: n(() => [
                    l(
                      u,
                      { icon: 'RefreshRight', onClick: M },
                      {
                        default: n(() => [
                          r(d(s(e)('taskManagement.selfData.buttons.refresh')), 1)
                        ]),
                        _: 1
                      }
                    ),
                    l(
                      u,
                      { type: 'primary', onClick: Q },
                      {
                        default: n(() => [
                          l(x, null, { default: n(() => [l(s(ce))]), _: 1 }),
                          r(' ' + d(s(e)('taskManagement.selfData.buttons.downloadTemplate')), 1)
                        ]),
                        _: 1
                      }
                    ),
                    l(
                      u,
                      { type: 'success', onClick: O },
                      {
                        default: n(() => [
                          l(x, null, { default: n(() => [l(te)]), _: 1 }),
                          r(' ' + d(s(e)('taskManagement.selfData.buttons.uploadExcel')), 1)
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              ),
              ve(
                (k(),
                Me(
                  ne,
                  {
                    data: z.value,
                    onSelectionChange: J,
                    style: { width: '100%', 'margin-top': '20px' }
                  },
                  {
                    default: n(() => [
                      l(_, { type: 'selection', width: '55' }),
                      l(
                        _,
                        {
                          prop: 'id',
                          label: s(e)('taskManagement.selfData.table.columns.id'),
                          width: '80'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          prop: 'group',
                          label: s(e)('taskManagement.selfData.table.columns.group'),
                          'min-width': '120'
                        },
                        { default: n(({ row: a }) => [r(d(a.group || '-'), 1)]), _: 1 },
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          prop: 'username',
                          label: s(e)('taskManagement.selfData.table.columns.username'),
                          'min-width': '120'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          prop: 'password',
                          label: s(e)('taskManagement.selfData.table.columns.password'),
                          'min-width': '120'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          label: s(e)('taskManagement.selfData.table.columns.emailInfo'),
                          'min-width': '300'
                        },
                        {
                          default: n(({ row: a }) => [
                            g('div', Ce, [
                              a.email1
                                ? (k(),
                                  v('div', Ee, [
                                    g(
                                      'span',
                                      Te,
                                      d(s(e)('taskManagement.selfData.table.email.primary')) + ':',
                                      1
                                    ),
                                    g('span', Pe, d(a.email1), 1),
                                    a.email1_password
                                      ? (k(), v('span', Re, '(' + d(a.email1_password) + ')', 1))
                                      : w('', !0)
                                  ]))
                                : w('', !0),
                              a.aux_email
                                ? (k(),
                                  v('div', Fe, [
                                    g(
                                      'span',
                                      Le,
                                      d(s(e)('taskManagement.selfData.table.email.aux1')) + ':',
                                      1
                                    ),
                                    g('span', ze, d(a.aux_email), 1),
                                    a.aux_email_password
                                      ? (k(), v('span', Be, '(' + d(a.aux_email_password) + ')', 1))
                                      : w('', !0)
                                  ]))
                                : w('', !0),
                              a.aux_email2
                                ? (k(),
                                  v('div', Ne, [
                                    g(
                                      'span',
                                      qe,
                                      d(s(e)('taskManagement.selfData.table.email.aux2')) + ':',
                                      1
                                    ),
                                    g('span', Ie, d(a.aux_email2), 1),
                                    a.aux_email2_password
                                      ? (k(),
                                        v('span', Oe, '(' + d(a.aux_email2_password) + ')', 1))
                                      : w('', !0)
                                  ]))
                                : w('', !0),
                              !a.email1 && !a.aux_email && !a.aux_email2
                                ? (k(), v('div', $e, '-'))
                                : w('', !0)
                            ])
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          prop: 'phone_number',
                          label: s(e)('taskManagement.selfData.table.columns.phoneNumber'),
                          'min-width': '120'
                        },
                        { default: n(({ row: a }) => [r(d(a.phone_number || '-'), 1)]), _: 1 },
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          prop: 'status',
                          label: s(e)('taskManagement.selfData.table.columns.status'),
                          'min-width': '120'
                        },
                        {
                          default: n(({ row: a }) => [
                            l(
                              oe,
                              { type: ee(a.status), size: 'small' },
                              { default: n(() => [r(d(Z(a.status)), 1)]), _: 2 },
                              1032,
                              ['type']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          prop: 'created_at',
                          label: s(e)('taskManagement.selfData.table.columns.createdAt'),
                          'min-width': '160'
                        },
                        { default: n(({ row: a }) => [r(d(le(a.created_at)), 1)]), _: 1 },
                        8,
                        ['label']
                      ),
                      l(
                        _,
                        {
                          label: s(e)('taskManagement.selfData.table.columns.actions'),
                          width: '180',
                          fixed: 'right'
                        },
                        {
                          default: n(({ row: a }) => [
                            l(
                              u,
                              { link: '', type: 'primary', onClick: (me) => W(a) },
                              {
                                default: n(() => [
                                  r(d(s(e)('taskManagement.selfData.table.actions.edit')), 1)
                                ]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            l(
                              u,
                              {
                                link: '',
                                type: a.status === 'active' ? 'warning' : 'success',
                                disabled: a.status === 'in_use',
                                onClick: (me) => ae(a)
                              },
                              {
                                default: n(() => [
                                  r(
                                    d(
                                      a.status === 'active'
                                        ? s(e)('taskManagement.selfData.table.actions.disable')
                                        : s(e)('taskManagement.selfData.table.actions.enable')
                                    ),
                                    1
                                  )
                                ]),
                                _: 2
                              },
                              1032,
                              ['type', 'disabled', 'onClick']
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
                  ['data']
                )),
                [[re, T.value]]
              ),
              g('div', Ge, [
                l(
                  ie,
                  {
                    'current-page': c.current,
                    'onUpdate:currentPage': o[0] || (o[0] = (a) => (c.current = a)),
                    'page-size': c.size,
                    'onUpdate:pageSize': o[1] || (o[1] = (a) => (c.size = a)),
                    'page-sizes': [10, 20, 50, 100],
                    total: c.total,
                    layout: 'total, sizes, prev, pager, next, jumper',
                    onSizeChange: H,
                    onCurrentChange: K
                  },
                  null,
                  8,
                  ['current-page', 'page-size', 'total']
                )
              ]),
              l(
                B,
                {
                  modelValue: y.value,
                  'onUpdate:modelValue': o[13] || (o[13] = (a) => (y.value = a)),
                  title: I.value,
                  width: '600px',
                  onClose: X
                },
                {
                  footer: n(() => [
                    l(
                      u,
                      { onClick: o[12] || (o[12] = (a) => (y.value = !1)) },
                      { default: n(() => [r(d(s(e)('common.cancel')), 1)]), _: 1 }
                    ),
                    l(
                      u,
                      { type: 'primary', loading: P.value, onClick: Y },
                      { default: n(() => [r(d(s(e)('common.confirm')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  default: n(() => [
                    l(
                      de,
                      {
                        ref_key: 'editFormRef',
                        ref: E,
                        model: i,
                        rules: q,
                        'label-width': '130px'
                      },
                      {
                        default: n(() => [
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.group'),
                              prop: 'group'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.group,
                                    'onUpdate:modelValue': o[2] || (o[2] = (a) => (i.group = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.groupPlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.username'),
                              prop: 'username'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.username,
                                    'onUpdate:modelValue': o[3] || (o[3] = (a) => (i.username = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.usernamePlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.password'),
                              prop: 'password'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.password,
                                    'onUpdate:modelValue': o[4] || (o[4] = (a) => (i.password = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.passwordPlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.phoneNumber'),
                              prop: 'phone_number'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.phone_number,
                                    'onUpdate:modelValue':
                                      o[5] || (o[5] = (a) => (i.phone_number = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.phoneNumberPlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.primaryEmail'),
                              prop: 'email1'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.email1,
                                    'onUpdate:modelValue': o[6] || (o[6] = (a) => (i.email1 = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.primaryEmailPlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)(
                                'taskManagement.selfData.editDialog.primaryEmailPassword'
                              ),
                              prop: 'email1_password'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.email1_password,
                                    'onUpdate:modelValue':
                                      o[7] || (o[7] = (a) => (i.email1_password = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.primaryEmailPasswordPlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.auxEmail1'),
                              prop: 'aux_email'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.aux_email,
                                    'onUpdate:modelValue':
                                      o[8] || (o[8] = (a) => (i.aux_email = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.auxEmail1Placeholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.auxEmail1Password'),
                              prop: 'aux_email_password'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.aux_email_password,
                                    'onUpdate:modelValue':
                                      o[9] || (o[9] = (a) => (i.aux_email_password = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.auxEmail1PasswordPlaceholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.auxEmail2'),
                              prop: 'aux_email2'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.aux_email2,
                                    'onUpdate:modelValue':
                                      o[10] || (o[10] = (a) => (i.aux_email2 = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.auxEmail2Placeholder'
                                    )
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
                          ),
                          l(
                            b,
                            {
                              label: s(e)('taskManagement.selfData.editDialog.auxEmail2Password'),
                              prop: 'aux_email2_password'
                            },
                            {
                              default: n(() => [
                                l(
                                  D,
                                  {
                                    modelValue: i.aux_email2_password,
                                    'onUpdate:modelValue':
                                      o[11] || (o[11] = (a) => (i.aux_email2_password = a)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: s(e)(
                                      'taskManagement.selfData.editDialog.auxEmail2PasswordPlaceholder'
                                    )
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
              l(
                B,
                {
                  title: s(e)('taskManagement.selfData.uploadDialog.title'),
                  modelValue: S.value,
                  'onUpdate:modelValue': o[14] || (o[14] = (a) => (S.value = a)),
                  width: '500px'
                },
                {
                  footer: n(() => [
                    l(
                      u,
                      {
                        style: { 'margin-left': '10px' },
                        type: 'success',
                        onClick: j,
                        loading: R.value
                      },
                      {
                        default: n(() => [
                          r(d(s(e)('taskManagement.selfData.uploadDialog.uploadToServer')), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['loading']
                    ),
                    l(
                      u,
                      { onClick: A },
                      { default: n(() => [r(d(s(e)('common.cancel')), 1)]), _: 1 }
                    )
                  ]),
                  default: n(() => [
                    l(
                      ue,
                      {
                        ref_key: 'uploadRef',
                        ref: F,
                        'auto-upload': !1,
                        'on-change': $,
                        limit: 1,
                        drag: '',
                        'on-exceed': G,
                        accept: '.xlsx,.xls'
                      },
                      {
                        default: n(() => [
                          l(
                            x,
                            { class: 'el-icon--upload' },
                            { default: n(() => [l(s(pe))]), _: 1 }
                          ),
                          g('div', je, [
                            r(d(s(e)('taskManagement.selfData.uploadDialog.dragText')), 1),
                            g(
                              'em',
                              null,
                              d(s(e)('taskManagement.selfData.uploadDialog.clickToUpload')),
                              1
                            )
                          ]),
                          g('div', Ae, d(s(e)('taskManagement.selfData.uploadDialog.fileTip')), 1)
                        ]),
                        _: 1
                      },
                      512
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
const Xe = _e(He, [['__scopeId', 'data-v-73a3b5f8']])
export { Xe as default }
