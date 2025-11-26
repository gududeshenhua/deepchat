import { g as xe, u as Se, a as Ce, d as j, r as De } from './script-150e3782.js'
import { u as Ve } from './useTableHeightFit-d4c36563.js'
import { h as Te, _ as Fe } from './index-ae33a03d.js'
import { E as c, G as H } from './element-74718691.js'
import {
  y as Ue,
  r as p,
  b as Le,
  Q as ze,
  a8 as u,
  ag as Be,
  f as G,
  h as Ie,
  N as t,
  H as l,
  u as n,
  L as r,
  M as i,
  I as Ee,
  G as Pe,
  i as S
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const Re = { class: 'script-management' },
  Ae = { class: 'pagination' },
  Ne = { class: 'el-upload__text' },
  $e = { class: 'el-upload__tip' },
  je = Ue({
    __name: 'script',
    setup(He) {
      const { t: e } = Te(),
        K = (a) => (a ? new Date(a).toLocaleString('zh-CN') : '--'),
        B = p([]),
        C = p(!1),
        D = p([]),
        y = p(''),
        m = p({ page: 1, pageSize: 50, total: 0 }),
        M = p(0),
        { cTable: O, maxHeight: Q, handleGetTableHeight: V } = Ve(),
        b = p(!1),
        h = p(!1),
        w = p(!1),
        T = p(!1),
        F = p(!1),
        U = p(!1),
        f = p(),
        q = '/cpyservice/airtest/tasks/script/upload',
        x = p(),
        k = p({ scriptId: '', status: 'approve', remark: '' }),
        v = p({ scriptId: '', description: '', is_public: !1 }),
        I = {
          pending: { text: e('taskManagement.script.statusText.pending'), type: 'warning' },
          approved: { text: e('taskManagement.script.statusText.approved'), type: 'success' },
          rejected: { text: e('taskManagement.script.statusText.rejected'), type: 'danger' }
        },
        J = (a) => {
          var s
          return ((s = I[a.toLowerCase()]) == null ? void 0 : s.text) || a
        },
        W = (a) => {
          var s
          return ((s = I[a.toLowerCase()]) == null ? void 0 : s.type) || 'info'
        },
        g = async () => {
          C.value = !0
          try {
            M.value++
            const a = { skip: (m.value.page - 1) * 10, limit: m.value.pageSize }
            y.value && (a.name = y.value)
            const s = await xe(a)
            ;((B.value = s.scripts || []), (m.value.total = s.total || 0))
          } catch (a) {
            ;(console.error(a), c.error(e('taskManagement.script.messages.fetchListFailed')))
          } finally {
            C.value = !1
          }
        },
        X = (a) => {
          ;((v.value = {
            scriptId: a.id,
            description: a.description || '',
            is_public: a.is_public || !1
          }),
            (w.value = !0))
        },
        Y = async () => {
          if (!v.value.scriptId) {
            c.warning(e('taskManagement.script.messages.selectScriptToEdit'))
            return
          }
          U.value = !0
          try {
            ;(await Se(v.value.scriptId, {
              description: v.value.description,
              is_public: v.value.is_public
            }),
              c.success(e('taskManagement.script.messages.updateSuccess')),
              (w.value = !1),
              g())
          } catch (a) {
            ;(console.error(a), c.error(e('taskManagement.script.messages.updateFailed')))
          } finally {
            U.value = !1
          }
        }
      let E = null
      const Z = () => {
          ;(clearTimeout(E),
            (E = setTimeout(() => {
              ;((m.value.page = 1), g())
            }, 500)))
        },
        ee = () => {
          ;((y.value = ''), (m.value.page = 1), g())
        },
        ae = () => {
          b.value = !0
        },
        te = (a) => {
          x.value = a.raw
        },
        le = () => {
          c.warning(e('taskManagement.script.messages.onlyOneFileAllowed'))
        },
        se = async () => {
          if (!x.value) {
            c.warning(e('taskManagement.script.messages.pleaseSelectFile'))
            return
          }
          const a = new FormData()
          ;(a.append('file', x.value), (T.value = !0))
          try {
            ;(await Ce(a),
              c.success(e('taskManagement.script.messages.uploadSuccess')),
              (b.value = !1),
              f.value && f.value.clearFiles(),
              g())
          } catch (s) {
            ;(console.error(s), c.error(e('taskManagement.script.messages.uploadFailed')))
          } finally {
            T.value = !1
          }
        },
        ne = (a) => {
          ;(c.success(e('taskManagement.script.messages.uploadSuccess')),
            (b.value = !1),
            f.value && f.value.clearFiles(),
            g())
        },
        oe = (a) => {
          ;(console.error(a),
            c.error(e('taskManagement.script.messages.uploadFailed')),
            f.value && f.value.clearFiles())
        },
        ie = () => {
          ;((b.value = !1), f.value && f.value.clearFiles(), (x.value = null))
        },
        re = (a) => {
          D.value = a
        },
        ce = async () => {
          try {
            await H.confirm(
              e('taskManagement.script.messages.confirmDeleteSelected'),
              e('taskManagement.script.messages.confirmDeleteTitle'),
              {
                confirmButtonText: e('common.confirm'),
                cancelButtonText: e('common.cancel'),
                type: 'warning'
              }
            )
            const a = D.value.map((s) => j(s.id))
            ;(await Promise.all(a),
              c.success(e('taskManagement.script.messages.deleteSuccess')),
              g())
          } catch (a) {
            ;(console.error(a), c.error(e('taskManagement.script.messages.deleteFailed')))
          }
        },
        pe = (a) => {
          ;((k.value = { scriptId: a.id, status: 'approve', remark: '' }), (h.value = !0))
        },
        ue = async () => {
          if (!k.value.scriptId) {
            c.warning(e('taskManagement.script.messages.selectScriptToReview'))
            return
          }
          F.value = !0
          try {
            ;(await De({
              scriptId: k.value.scriptId,
              action: k.value.status.toLocaleUpperCase(),
              remark: k.value.remark
            }),
              c.success(e('taskManagement.script.messages.reviewSuccess')),
              (h.value = !1),
              g())
          } catch (a) {
            ;(console.error(a), c.error(e('taskManagement.script.messages.reviewFailed')))
          } finally {
            F.value = !1
          }
        },
        de = async (a) => {
          try {
            ;(await H.confirm(
              e('taskManagement.script.messages.confirmDeleteSingle'),
              e('taskManagement.script.messages.confirmDeleteTitle'),
              {
                confirmButtonText: e('common.confirm'),
                cancelButtonText: e('common.cancel'),
                type: 'warning'
              }
            ),
              await j(a.id),
              c.success(e('taskManagement.script.messages.deleteSuccess')),
              g())
          } catch (s) {
            ;(console.error(s), c.error(e('taskManagement.script.messages.deleteFailed')))
          }
        },
        me = (a) => {
          ;(M.value++, (m.value.pageSize = a), g())
        },
        ge = (a) => {
          ;(M.value++, (m.value.page = a), g())
        }
      return (
        Le(() => {
          ;(g(), V(), window.addEventListener('resize', V))
        }),
        ze(() => {
          window.removeEventListener('resize', V)
        }),
        (a, s) => {
          const d = u('el-button'),
            P = u('el-input'),
            ve = u('PageBanner'),
            _ = u('el-table-column'),
            R = u('el-tag'),
            fe = u('el-table'),
            _e = u('el-pagination'),
            ke = u('UploadFilled'),
            be = u('el-icon'),
            ye = u('el-upload'),
            L = u('el-dialog'),
            A = u('el-radio'),
            he = u('el-radio-group'),
            z = u('el-form-item'),
            N = u('el-form'),
            we = u('el-switch'),
            Me = Be('loading')
          return (
            G(),
            Ie('div', Re, [
              t(
                ve,
                { title: '' },
                {
                  extra: l(() => [
                    t(
                      P,
                      {
                        modelValue: y.value,
                        'onUpdate:modelValue': s[0] || (s[0] = (o) => (y.value = o)),
                        placeholder: n(e)('taskManagement.script.searchLabel'),
                        style: { width: '300px', 'margin-right': '10px' },
                        onInput: Z
                      },
                      {
                        append: l(() => [
                          t(
                            d,
                            { onClick: ee },
                            { default: l(() => [r(i(n(e)('common.clear')), 1)]), _: 1 }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['modelValue', 'placeholder']
                    ),
                    t(
                      d,
                      { icon: 'RefreshRight', onClick: g },
                      { default: l(() => [r(i(n(e)('common.refresh')), 1)]), _: 1 }
                    ),
                    t(
                      d,
                      { type: 'primary', onClick: ae },
                      { default: l(() => [r(i(n(e)('taskManagement.script.uploadBtn')), 1)]), _: 1 }
                    ),
                    t(
                      d,
                      { onClick: ce, disabled: D.value.length === 0 },
                      {
                        default: l(() => [r(i(n(e)('taskManagement.script.deleteSelected')), 1)]),
                        _: 1
                      },
                      8,
                      ['disabled']
                    )
                  ]),
                  _: 1
                }
              ),
              Ee(
                (G(),
                Pe(
                  fe,
                  {
                    ref_key: 'cTable',
                    ref: O,
                    data: B.value,
                    key: M.value,
                    style: { width: '100%', 'margin-top': '15px' },
                    onSelectionChange: re,
                    'max-height': n(Q)
                  },
                  {
                    default: l(() => [
                      t(_, { type: 'selection', width: '55' }),
                      t(
                        _,
                        { prop: 'id', label: n(e)('taskManagement.script.table.id'), width: '80' },
                        null,
                        8,
                        ['label']
                      ),
                      t(
                        _,
                        { prop: 'name', label: n(e)('taskManagement.script.table.name') },
                        null,
                        8,
                        ['label']
                      ),
                      t(
                        _,
                        {
                          prop: 'description',
                          label: n(e)('taskManagement.script.table.description')
                        },
                        null,
                        8,
                        ['label']
                      ),
                      t(
                        _,
                        {
                          prop: 'version',
                          label: n(e)('taskManagement.script.table.version'),
                          width: '80'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      t(
                        _,
                        {
                          prop: 'is_public',
                          label: n(e)('taskManagement.script.table.isPublic'),
                          width: '100'
                        },
                        {
                          default: l(({ row: o }) => [
                            t(
                              R,
                              { type: o.is_public ? 'success' : 'info' },
                              {
                                default: l(() => [
                                  r(i(o.is_public ? n(e)('common.yes') : n(e)('common.no')), 1)
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
                      t(
                        _,
                        {
                          prop: 'status',
                          label: n(e)('taskManagement.script.table.status'),
                          width: '100'
                        },
                        {
                          default: l(({ row: o }) => [
                            t(
                              R,
                              { type: W(o.status) },
                              { default: l(() => [r(i(J(o.status)), 1)]), _: 2 },
                              1032,
                              ['type']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      t(
                        _,
                        { prop: 'created_at', label: '创建时间', width: '160' },
                        { default: l(({ row: o }) => [r(i(K(o.created_at)), 1)]), _: 1 }
                      ),
                      t(
                        _,
                        { label: n(e)('taskManagement.script.table.actions'), width: '250' },
                        {
                          default: l(({ row: o }) => [
                            t(
                              d,
                              { type: 'primary', link: '', onClick: ($) => X(o) },
                              { default: l(() => [r(i(n(e)('common.edit')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                            t(
                              d,
                              { type: 'primary', link: '', onClick: ($) => pe(o) },
                              {
                                default: l(() => [
                                  r(i(n(e)('taskManagement.script.reviewBtn')), 1)
                                ]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            t(
                              d,
                              { type: 'danger', link: '', onClick: ($) => de(o) },
                              { default: l(() => [r(i(n(e)('common.delete')), 1)]), _: 2 },
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
                [[Me, C.value]]
              ),
              S('div', Ae, [
                t(
                  _e,
                  {
                    'current-page': m.value.page,
                    'onUpdate:currentPage': s[1] || (s[1] = (o) => (m.value.page = o)),
                    'page-size': m.value.pageSize,
                    'onUpdate:pageSize': s[2] || (s[2] = (o) => (m.value.pageSize = o)),
                    'page-sizes': [10, 20, 50],
                    total: m.value.total,
                    layout: n(e)('common.pagination.layout'),
                    onSizeChange: me,
                    onCurrentChange: ge
                  },
                  null,
                  8,
                  ['current-page', 'page-size', 'total', 'layout']
                )
              ]),
              t(
                L,
                {
                  title: n(e)('taskManagement.script.uploadDialog.title'),
                  modelValue: b.value,
                  'onUpdate:modelValue': s[3] || (s[3] = (o) => (b.value = o)),
                  width: '500px'
                },
                {
                  footer: l(() => [
                    t(
                      d,
                      {
                        style: { 'margin-left': '10px' },
                        type: 'success',
                        onClick: se,
                        loading: T.value
                      },
                      {
                        default: l(() => [
                          r(i(n(e)('taskManagement.script.uploadDialog.uploadBtn')), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['loading']
                    ),
                    t(
                      d,
                      { onClick: ie },
                      { default: l(() => [r(i(n(e)('common.cancel')), 1)]), _: 1 }
                    )
                  ]),
                  default: l(() => [
                    t(
                      ye,
                      {
                        ref_key: 'uploadRef',
                        ref: f,
                        action: q,
                        'auto-upload': !1,
                        'on-change': te,
                        'on-success': ne,
                        'on-error': oe,
                        limit: 1,
                        drag: '',
                        'on-exceed': le,
                        accept: '.py,.zip'
                      },
                      {
                        default: l(() => [
                          t(be, { class: 'el-icon--upload' }, { default: l(() => [t(ke)]), _: 1 }),
                          S('div', Ne, [
                            r(i(n(e)('taskManagement.script.uploadDialog.dragText')), 1),
                            S(
                              'em',
                              null,
                              i(n(e)('taskManagement.script.uploadDialog.clickToUpload')),
                              1
                            )
                          ]),
                          S('div', $e, i(n(e)('taskManagement.script.uploadDialog.fileTip')), 1)
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
              ),
              t(
                L,
                {
                  title: n(e)('taskManagement.script.reviewDialog.title'),
                  modelValue: h.value,
                  'onUpdate:modelValue': s[6] || (s[6] = (o) => (h.value = o)),
                  width: '500px'
                },
                {
                  footer: l(() => [
                    t(
                      d,
                      { onClick: s[5] || (s[5] = (o) => (h.value = !1)) },
                      { default: l(() => [r(i(n(e)('common.cancel')), 1)]), _: 1 }
                    ),
                    t(
                      d,
                      { type: 'primary', onClick: ue, loading: F.value },
                      { default: l(() => [r(i(n(e)('common.confirm')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  default: l(() => [
                    t(
                      N,
                      { model: k.value, 'label-width': '80px' },
                      {
                        default: l(() => [
                          t(
                            z,
                            { label: n(e)('taskManagement.script.reviewDialog.statusLabel') },
                            {
                              default: l(() => [
                                t(
                                  he,
                                  {
                                    modelValue: k.value.status,
                                    'onUpdate:modelValue':
                                      s[4] || (s[4] = (o) => (k.value.status = o))
                                  },
                                  {
                                    default: l(() => [
                                      t(
                                        A,
                                        { label: 'approve' },
                                        {
                                          default: l(() => [
                                            r(
                                              i(n(e)('taskManagement.script.reviewDialog.approve')),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      t(
                                        A,
                                        { label: 'reject' },
                                        {
                                          default: l(() => [
                                            r(
                                              i(n(e)('taskManagement.script.reviewDialog.reject')),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
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
              ),
              t(
                L,
                {
                  title: n(e)('taskManagement.script.editDialog.title'),
                  modelValue: w.value,
                  'onUpdate:modelValue': s[10] || (s[10] = (o) => (w.value = o)),
                  width: '500px'
                },
                {
                  footer: l(() => [
                    t(
                      d,
                      { onClick: s[9] || (s[9] = (o) => (w.value = !1)) },
                      { default: l(() => [r(i(n(e)('common.cancel')), 1)]), _: 1 }
                    ),
                    t(
                      d,
                      { type: 'primary', onClick: Y, loading: U.value },
                      { default: l(() => [r(i(n(e)('common.confirm')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  default: l(() => [
                    t(
                      N,
                      { model: v.value, 'label-width': '80px' },
                      {
                        default: l(() => [
                          t(
                            z,
                            { label: n(e)('taskManagement.script.editDialog.descriptionLabel') },
                            {
                              default: l(() => [
                                t(
                                  P,
                                  {
                                    modelValue: v.value.description,
                                    'onUpdate:modelValue':
                                      s[7] || (s[7] = (o) => (v.value.description = o)),
                                    type: 'textarea',
                                    rows: 4,
                                    placeholder: n(e)(
                                      'taskManagement.script.editDialog.descriptionPlaceholder'
                                    ),
                                    maxlength: '500',
                                    'show-word-limit': ''
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
                          t(
                            z,
                            { label: n(e)('taskManagement.script.editDialog.publicLabel') },
                            {
                              default: l(() => [
                                t(
                                  we,
                                  {
                                    modelValue: v.value.is_public,
                                    'onUpdate:modelValue':
                                      s[8] || (s[8] = (o) => (v.value.is_public = o))
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
const We = Fe(je, [['__scopeId', 'data-v-8c04b805']])
export { We as default }
