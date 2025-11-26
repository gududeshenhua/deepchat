import {
  y as ge,
  at as Ae,
  r as g,
  R as de,
  d as pe,
  a8 as p,
  ag as ye,
  f as E,
  h as ne,
  N as a,
  H as t,
  u as d,
  F as be,
  a0 as Me,
  K as me,
  i as N,
  L as y,
  M as u,
  I as Ce,
  G as Z,
  a1 as xe,
  ay as Pe,
  e as Ie,
  b as Le,
  aq as Ne,
  Q as Oe
} from './vue-66851fce.js'
import { g as $e, q as Be } from './index-e81b6066.js'
import { g as qe } from './index-c0fb52a7.js'
import { u as We } from './usePagination-22ed0aad.js'
import { h as _e, f as je, _ as Te, q as ie, m as Ge, n as He } from './index-ae33a03d.js'
import { I as Ke } from './InstanceStatusTag-23042b65.js'
import { E as $, e as Je, G as De } from './element-74718691.js'
import Ue from './BatchInstanceOpenDialog-d1b78c6e.js'
import { g as Ee } from './script-150e3782.js'
import { u as Ye } from './useTableHeightFit-d4c36563.js'
import './vxe-562f9a54.js'
import './index-1bdb6a9d.js'
import './ProxySelector-61ddc2fe.js'
import './index-446a6d1a.js'
const Qe = { class: 'instance-selector' },
  Xe = { key: 0, class: 'selected-instances' },
  Ze = { class: 'instance-selector-drawer' },
  ea = { class: 'search-wrapper' },
  aa = {
    class: 'pager-wrapper',
    style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'flex-end' }
  },
  ta = { class: 'drawer-footer', style: { padding: '20px 0', 'text-align': 'right' } },
  la = ge({
    __name: 'InstanceSelector',
    props: { modelValue: {} },
    emits: ['update:modelValue', 'change'],
    setup(U, { emit: _ }) {
      const { t: o } = _e(),
        ee = je(),
        { userInfo: W, roles: se } = Ae(ee),
        T = U,
        S = _,
        P = g(!1),
        F = g([]),
        x = g([]),
        M = g(T.modelValue || ''),
        { tableKey: j, paginationData: h, handleCurrentChange: C, handleSizeChange: D } = We(),
        R = g([]),
        k = g(!1),
        G = g([]),
        O = g({}),
        H = de({ padName: '' }),
        Y = async () => {
          try {
            const m = await qe()
            G.value = m.map((v) => ({ text: v.name, value: v.uuid }))
          } catch (m) {
            console.error(o('taskManagement.getInstanceListFailed') + ':', m)
          }
        },
        ae = (m) => {
          ;('group' in m && (O.value.local_group_uuid = m.group.length > 0 ? m.group[0] : ''),
            (h.currentPage = 1),
            K())
        },
        K = async () => {
          k.value = !0
          try {
            const m = Object.values(O.value).some((s) => s !== '' && s !== null && s !== void 0)
            let v = []
            if (
              m &&
              ((v = await $e({ ...O.value, page: h.currentPage, page_size: h.pageSize })),
              v.total === 0)
            ) {
              ;((R.value = []), (h.total = 0), (k.value = !1))
              return
            }
            const I = { groupIds: [W.value.group_id], page: h.currentPage, rows: h.pageSize }
            if (H.padName) {
              const s = H.padName
                .split(',')
                .map((i) => i.trim())
                .filter((i) => i !== '')
              I.padCodes = s
            }
            m && ((I.padCodes = v.instances.map((s) => s.instance_id)), (I.page = 1))
            const n = await Be(I)
            try {
              if (m) {
                const s = Object.fromEntries(
                  v.instances.map((i) => [
                    i.instance_id,
                    { ...i, proxy_info: i.proxy_info ? JSON.parse(i.proxy_info) : {} }
                  ])
                )
                ;(n.data.pageData.forEach((i) => {
                  s[i.padCode] && (i.record = s[i.padCode])
                }),
                  (h.total = v.total))
              } else {
                const s = await $e({
                    instance_ids: n.data.pageData ? n.data.pageData.map((f) => f.padCode) : []
                  }),
                  i = Object.fromEntries(
                    s.instances.map((f) => [
                      f.instance_id,
                      { ...f, proxy_info: f.proxy_info ? JSON.parse(f.proxy_info) : {} }
                    ])
                  )
                ;(n.data.pageData.forEach((f) => {
                  i[f.padCode] && (f.record = i[f.padCode])
                }),
                  (h.total = n.data.total))
              }
              R.value = n.data.pageData || []
            } catch (s) {
              R.value = n.data.pageData || []
            }
          } catch (m) {
            ;(console.error(o('taskManagement.getInstanceListFailed') + ':', m),
              $.error(o('taskManagement.getInstanceListFailed')),
              (R.value = []))
          } finally {
            k.value = !1
          }
        },
        oe = () => {
          h.currentPage === 1 ? K() : (h.currentPage = 1)
        },
        te = () => {
          ;((H.padName = ''), oe())
        }
      let z = null
      const X = () => {
          ;(clearTimeout(z),
            (z = setTimeout(() => {
              oe()
            }, 500)))
        },
        r = (m) => {
          ;((F.value = m), (x.value = m.map((v) => v.padCode)))
        },
        w = () => {
          ;((P.value = !0), Y(), K())
        },
        le = () => {
          P.value = !1
        },
        B = () => {
          if (F.value.length === 0) {
            $.warning(o('taskManagement.pleaseSelectInstance'))
            return
          }
          const m = F.value.map((I) => I.padCode)
          m.length === 1
            ? (M.value = m[0])
            : (M.value = o('taskManagement.selectedCount', { count: m.length }))
          const v = (m.length > 1, m)
          ;(S('update:modelValue', v), S('change', v), le())
        },
        J = (m) => {
          if (Array.isArray(T.modelValue)) {
            const v = T.modelValue.filter((n) => n !== m)
            v.length === 0
              ? (M.value = '')
              : v.length === 1
                ? (M.value = v[0])
                : (M.value = o('taskManagement.selectedCount', { count: v.length }))
            const I = (v.length > 1, v)
            ;(S('update:modelValue', I), S('change', I))
          }
        }
      return (
        pe(
          () => T.modelValue,
          (m) => {
            Array.isArray(m)
              ? m.length === 0
                ? (M.value = '')
                : m.length === 1
                  ? (M.value = m[0])
                  : (M.value = o('taskManagement.selectedCount', { count: m.length }))
              : m !== M.value && (M.value = m || '')
          }
        ),
        pe([() => h.currentPage, () => h.pageSize], K, { immediate: !0 }),
        (m, v) => {
          const I = p('el-button'),
            n = p('el-input'),
            s = p('el-tag'),
            i = p('el-table-column'),
            f = p('el-table'),
            A = p('el-pagination'),
            q = p('el-drawer'),
            b = ye('loading')
          return (
            E(),
            ne('div', Qe, [
              a(
                n,
                {
                  modelValue: M.value,
                  'onUpdate:modelValue': v[0] || (v[0] = (e) => (M.value = e)),
                  placeholder: d(o)('taskManagement.selectInstance'),
                  readonly: '',
                  onClick: w,
                  style: { cursor: 'pointer' }
                },
                { append: t(() => [a(I, { onClick: w, icon: 'Search' })]), _: 1 },
                8,
                ['modelValue', 'placeholder']
              ),
              Array.isArray(T.modelValue) && T.modelValue.length > 0
                ? (E(),
                  ne('div', Xe, [
                    (E(!0),
                    ne(
                      be,
                      null,
                      Me(
                        T.modelValue,
                        (e) => (
                          E(),
                          Z(
                            s,
                            {
                              key: e,
                              closable: '',
                              onClose: (l) => J(e),
                              style: { margin: '2px' }
                            },
                            { default: t(() => [y(u(e), 1)]), _: 2 },
                            1032,
                            ['onClose']
                          )
                        )
                      ),
                      128
                    ))
                  ]))
                : me('', !0),
              a(
                q,
                {
                  modelValue: P.value,
                  'onUpdate:modelValue': v[2] || (v[2] = (e) => (P.value = e)),
                  title: d(o)('taskManagement.instanceSelectorTitle'),
                  size: '60%',
                  direction: 'rtl',
                  'before-close': le
                },
                {
                  default: t(() => [
                    N('div', Ze, [
                      N('div', ea, [
                        a(
                          n,
                          {
                            modelValue: H.padName,
                            'onUpdate:modelValue': v[1] || (v[1] = (e) => (H.padName = e)),
                            modelModifiers: { trim: !0 },
                            placeholder: d(o)('taskManagement.enterInstanceCode'),
                            style: { width: '300px', 'margin-right': '10px' },
                            onInput: X
                          },
                          {
                            append: t(() => [
                              a(
                                I,
                                { onClick: te },
                                { default: t(() => [y(u(d(o)('taskManagement.clear')), 1)]), _: 1 }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'placeholder']
                        ),
                        a(
                          I,
                          { icon: 'RefreshRight', onClick: K },
                          {
                            default: t(() => [y(u(d(o)('taskManagement.refreshInstances')), 1)]),
                            _: 1
                          }
                        )
                      ]),
                      Ce(
                        (E(),
                        Z(
                          f,
                          {
                            data: R.value,
                            'row-key': 'id',
                            onSelectionChange: r,
                            onFilterChange: ae,
                            'max-height': 'calc(100vh - 300px)',
                            style: { 'margin-bottom': '20px' }
                          },
                          {
                            default: t(() => [
                              a(i, { type: 'selection', width: '55' }),
                              a(
                                i,
                                {
                                  prop: 'padCode',
                                  label: d(o)('taskManagement.instanceInfo'),
                                  width: '300'
                                },
                                {
                                  default: t(({ row: e }) => [
                                    N(
                                      'div',
                                      null,
                                      u(d(o)('taskManagement.instanceCode')) + '：' + u(e.padCode),
                                      1
                                    ),
                                    N(
                                      'div',
                                      null,
                                      u(d(o)('taskManagement.instanceSpec')) + '：' + u(e.padGrade),
                                      1
                                    ),
                                    N('div', null, [
                                      y(u(d(o)('taskManagement.instanceType')) + '： ', 1),
                                      a(
                                        s,
                                        { type: (e.padType === 'real', 'info') },
                                        {
                                          default: t(() => [
                                            y(
                                              u(
                                                e.padType === 'real'
                                                  ? d(o)('taskManagement.physicalMachine')
                                                  : d(o)('taskManagement.virtualMachine')
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
                                    N(
                                      'div',
                                      null,
                                      u(d(o)('taskManagement.instanceIp')) + '：' + u(e.padIp),
                                      1
                                    ),
                                    N(
                                      'div',
                                      null,
                                      u(d(o)('taskManagement.image')) + '：' + u(e.imageId),
                                      1
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['label']
                              ),
                              a(
                                i,
                                { prop: 'status', label: d(o)('taskManagement.status') },
                                {
                                  default: t(({ row: e }) => [
                                    a(Ke, { status: e.padStatus }, null, 8, ['status'])
                                  ]),
                                  _: 1
                                },
                                8,
                                ['label']
                              ),
                              a(
                                i,
                                {
                                  prop: 'group',
                                  label: d(o)('taskManagement.group'),
                                  'column-key': 'group',
                                  filters: G.value,
                                  'filter-multiple': !1,
                                  'min-width': '150',
                                  'popper-class': 'group-filter-popper'
                                },
                                {
                                  default: t(({ row: e }) => {
                                    var l
                                    return [
                                      y(
                                        u(((l = e.record) == null ? void 0 : l.group_name) || '--'),
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
                        [[b, k.value]]
                      ),
                      N('div', aa, [
                        a(
                          A,
                          {
                            layout: d(h).layout,
                            'page-sizes': d(h).pageSizes,
                            total: d(h).total,
                            'page-size': d(h).pageSize,
                            'current-page': d(h).currentPage,
                            onSizeChange: d(D),
                            onCurrentChange: d(C)
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
                      N('div', ta, [
                        a(
                          I,
                          { onClick: le },
                          {
                            default: t(() => [y(u(d(o)('taskManagement.cancelSelection')), 1)]),
                            _: 1
                          }
                        ),
                        a(
                          I,
                          { type: 'primary', onClick: B, disabled: F.value.length === 0 },
                          {
                            default: t(() => [
                              y(
                                u(d(o)('taskManagement.confirmSelection')) +
                                  ' (' +
                                  u(
                                    d(o)('taskManagement.selectedCount', { count: F.value.length })
                                  ) +
                                  ') ',
                                1
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['disabled']
                        )
                      ])
                    ])
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
const na = Te(la, [['__scopeId', 'data-v-e0117625']]),
  sa = (U) =>
    ie({ url: '/airtest/tasks/schedule', method: 'post', data: U, baseURL: '/cpyservice' }),
  he = (U) =>
    ie({
      url: '/airtest/tasks/schedule-with-data-async',
      method: 'post',
      data: U,
      baseURL: '/cpyservice'
    }),
  oa = (U) =>
    ie({ url: '/airtest/tasks/task-queue', method: 'get', params: U, baseURL: '/cpyservice' }),
  ra = (U) =>
    ie({ url: '/airtest/tasks/execution-logs', method: 'get', params: U, baseURL: '/cpyservice' }),
  ia = (U) =>
    ie({
      url: '/airtest/tasks/task-queue/'.concat(U, '/action'),
      method: 'post',
      data: { action: 'cancel' },
      baseURL: '/cpyservice'
    }),
  ua = (U) =>
    ie({
      url: '/airtest/tasks/task-queue/'.concat(U, '/action'),
      method: 'post',
      data: { action: 'retry' },
      baseURL: '/cpyservice'
    }),
  ca = () =>
    ie({
      url: '/airtest/tasks/template/download',
      method: 'get',
      responseType: 'blob',
      baseURL: '/cpyservice'
    }),
  da = (U) =>
    ie({
      url: '/airtest/tasks/schedule-with-excel-async',
      method: 'post',
      data: U,
      headers: { 'Content-Type': 'multipart/form-data' },
      baseURL: '/cpyservice'
    }),
  pa = { key: 0 },
  ma = { class: 'search-container' },
  ga = { key: 0, class: 'error-message-container' },
  _a = ['title'],
  fa = { key: 1, style: { color: '#909399' } },
  ka = {
    class: 'pagination-container',
    style: { 'margin-top': '20px', display: 'flex', 'justify-content': 'flex-end' }
  },
  va = ge({
    __name: 'TaskLogDialog',
    props: { modelValue: { type: Boolean, default: !1 }, task: { default: null } },
    emits: ['update:modelValue'],
    setup(U, { emit: _ }) {
      const { t: o } = _e(),
        ee = Pe(() =>
          He(
            () => import('./ClusterWindowsDialog-6f25308b.js'),
            [
              'static/ClusterWindowsDialog-6f25308b.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/ClusterWindowsDialog-6f55a23c.css'
            ]
          )
        ),
        W = U,
        se = _,
        T = g(!1),
        S = g(null),
        P = g([]),
        F = g(!1),
        x = g(!1),
        M = g([]),
        j = g([]),
        h = g({ instance_id_filter: '' }),
        C = g({ page: 1, size: 10, total: 0 })
      let D = null
      ;(pe(
        () => W.modelValue,
        (n) => {
          ;((T.value = n), n && W.task && ((S.value = W.task), R(), k()))
        }
      ),
        pe(T, (n) => {
          se('update:modelValue', n)
        }))
      const R = () => {
          ;((h.value.instance_id_filter = ''),
            (C.value.page = 1),
            (C.value.size = 10),
            (C.value.total = 0))
        },
        k = async () => {
          if (S.value) {
            F.value = !0
            try {
              const n = {
                  task_queue_id: S.value.id,
                  page: C.value.page,
                  size: C.value.size,
                  instance_id_filter: h.value.instance_id_filter || void 0
                },
                s = await ra(n)
              s
                ? ((P.value = s.items || []),
                  (C.value.total = s.total || 0),
                  (C.value.page = s.page || 1),
                  (C.value.size = s.size || 10))
                : ((P.value = []), (C.value.total = 0))
            } catch (n) {
              ;(console.error('获取任务日志失败:', n),
                (P.value = []),
                (C.value.total = 0),
                $.error(o('taskManagement.getTaskLogFailed')))
            } finally {
              F.value = !1
            }
          }
        },
        G = () => {
          ;(D && clearTimeout(D),
            (D = setTimeout(() => {
              ;((C.value.page = 1), k())
            }, 500)))
        },
        O = (n) => {
          ;((C.value.size = n), (C.value.page = 1), k())
        },
        H = (n) => {
          ;((C.value.page = n), k())
        },
        Y = () => {
          ;((T.value = !1), (S.value = null), (P.value = []), R())
        },
        ae = (n) => {
          j.value = n
        },
        K = () => {
          if (j.value.length === 0) {
            $.warning('请先选择要打开集群窗口的实例')
            return
          }
          const n = j.value.map((s) => ({
            padCode: s.instance_id,
            padStatus: s.status === 'SUCCESS' ? 10 : 0
          }))
          ;((M.value = n), (x.value = !0))
        },
        oe = (n) => {
          Ge(n, () => {
            $.success(o('common.copySuccess'))
          })
        },
        te = (n) => (n ? new Date(n).toLocaleString('zh-CN') : '-'),
        z = (n) =>
          ({
            PENDING: 'info',
            STARTED: 'primary',
            SUCCESS: 'success',
            FAILURE: 'danger',
            REVOKED: 'warning'
          })[n] || 'info',
        X = (n) =>
          ({
            PENDING: o('taskManagement.statusText.PENDING'),
            STARTED: o('taskManagement.statusText.STARTED'),
            SUCCESS: o('taskManagement.statusText.SUCCESS'),
            FAILURE: o('taskManagement.statusText.FAILURE'),
            REVOKED: o('taskManagement.statusText.REVOKED')
          })[n] || n,
        r = (n) => {
          const { mode: s, count: i, instances: f } = n
          s === 1 ? w(i) : s === 2 && le(f)
        },
        w = (n) => {
          const s = M.value.map((i) => i.padCode)
          J(s.slice(0, n), n)
        },
        le = (n) => {
          n.map((i) => i.padCode).forEach((i, f) => {
            const A = f * 30
            B(i, A)
          })
        },
        B = (n, s) => {
          const i = '/#/mobile/connect/'.concat(n),
            f = 'width=800,height=600,left='
              .concat(s, ',top=')
              .concat(s, ',toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no')
          window.open(i, '_blank_'.concat(n), f)
        },
        J = (n, s) => {
          const i = m(),
            f = v(i, s)
          let A = 0
          const q = () => {
            if (A < n.length) {
              const b = n[A],
                e = f[A]
              ;(I(b, e), A++, setTimeout(q, 100))
            }
          }
          q()
        },
        m = () => ({ width: window.screen.availWidth, height: window.screen.availHeight }),
        v = (n, s) => {
          let i, f
          s <= 2
            ? ((i = 1), (f = 2))
            : s <= 4
              ? ((i = 2), (f = 2))
              : s <= 6
                ? ((i = 2), (f = 3))
                : s <= 8
                  ? ((i = 2), (f = 4))
                  : ((i = 2), (f = 5))
          const A = Math.floor(n.width / f),
            q = Math.floor(n.height / i),
            b = []
          for (let e = 0; e < s; e++) {
            const l = Math.floor(e / f),
              L = e % f
            b.push({ x: L * A, y: l * q + l * 80, width: A - 20, height: q - 80 })
          }
          return b
        },
        I = (n, s) => {
          const i = '/#/mobile/connect/'.concat(n),
            f = 'width='
              .concat(s.width, ',height=')
              .concat(s.height, ',left=')
              .concat(s.x, ',top=')
              .concat(
                s.y,
                ',fullscreen=yes,toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no'
              )
          window.open(i, '_blank_'.concat(n), f)
        }
      return (n, s) => {
        const i = p('el-descriptions-item'),
          f = p('el-tag'),
          A = p('el-descriptions'),
          q = p('el-input'),
          b = p('el-form-item'),
          e = p('el-button'),
          l = p('el-form'),
          L = p('el-table-column'),
          Q = p('el-table'),
          fe = p('el-pagination'),
          ue = p('el-dialog'),
          ke = ye('loading')
        return (
          E(),
          Z(
            ue,
            {
              modelValue: T.value,
              'onUpdate:modelValue': s[4] || (s[4] = (V) => (T.value = V)),
              title: d(o)('taskManagement.taskExecutionLog'),
              width: '1200px',
              'before-close': Y
            },
            {
              footer: t(() => [
                a(
                  e,
                  { onClick: Y },
                  { default: t(() => [y(u(d(o)('taskManagement.close')), 1)]), _: 1 }
                )
              ]),
              default: t(() => [
                S.value
                  ? (E(),
                    ne('div', pa, [
                      a(
                        A,
                        { column: 2, border: '' },
                        {
                          default: t(() => [
                            a(
                              i,
                              { label: d(o)('taskManagement.taskName') },
                              { default: t(() => [y(u(S.value.task_name), 1)]), _: 1 },
                              8,
                              ['label']
                            ),
                            a(
                              i,
                              { label: d(o)('taskManagement.status') },
                              {
                                default: t(() => [
                                  a(
                                    f,
                                    { type: z(S.value.status) },
                                    { default: t(() => [y(u(X(S.value.status)), 1)]), _: 1 },
                                    8,
                                    ['type']
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['label']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      N('div', ma, [
                        a(
                          l,
                          { model: h.value, 'label-width': '80px', inline: '' },
                          {
                            default: t(() => [
                              a(b, null, {
                                default: t(() => [
                                  a(
                                    q,
                                    {
                                      modelValue: h.value.instance_id_filter,
                                      'onUpdate:modelValue':
                                        s[0] || (s[0] = (V) => (h.value.instance_id_filter = V)),
                                      placeholder: d(o)('taskManagement.instanceIdPlaceholder'),
                                      clearable: '',
                                      onKeyup: xe(G, ['enter'])
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'placeholder', 'onKeyup']
                                  )
                                ]),
                                _: 1
                              }),
                              a(b, null, {
                                default: t(() => [
                                  a(
                                    e,
                                    { icon: 'RefreshRight', onClick: k },
                                    {
                                      default: t(() => [
                                        y(u(d(o)('taskManagement.refreshLog')), 1)
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              }),
                              a(b, null, {
                                default: t(() => [
                                  a(
                                    e,
                                    { type: 'primary', disabled: j.value.length === 0, onClick: K },
                                    {
                                      default: t(() => [
                                        y(u(d(o)('instanceList.clusterWindows')), 1)
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['disabled']
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          },
                          8,
                          ['model']
                        )
                      ]),
                      Ce(
                        (E(),
                        Z(
                          Q,
                          {
                            data: P.value,
                            style: { width: '100%' },
                            'max-height': 400,
                            border: '',
                            onSelectionChange: ae
                          },
                          {
                            default: t(() => [
                              a(L, { type: 'selection', width: '55', align: 'center' }),
                              a(L, { prop: 'id', label: 'ID', width: '80', align: 'center' }),
                              a(
                                L,
                                {
                                  prop: 'instance_id',
                                  label: d(o)('taskManagement.instanceId'),
                                  width: '200',
                                  align: 'center'
                                },
                                null,
                                8,
                                ['label']
                              ),
                              a(
                                L,
                                {
                                  prop: 'status',
                                  label: d(o)('taskManagement.status'),
                                  width: '100',
                                  align: 'center'
                                },
                                {
                                  default: t(({ row: V }) => [
                                    a(
                                      f,
                                      { type: z(V.status), size: 'small' },
                                      { default: t(() => [y(u(X(V.status)), 1)]), _: 2 },
                                      1032,
                                      ['type']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['label']
                              ),
                              a(
                                L,
                                {
                                  prop: 'start_time',
                                  label: d(o)('taskManagement.startTime'),
                                  width: '160',
                                  align: 'center'
                                },
                                { default: t(({ row: V }) => [y(u(te(V.start_time)), 1)]), _: 1 },
                                8,
                                ['label']
                              ),
                              a(
                                L,
                                {
                                  prop: 'end_time',
                                  label: d(o)('taskManagement.endTime'),
                                  width: '160',
                                  align: 'center'
                                },
                                { default: t(({ row: V }) => [y(u(te(V.end_time)), 1)]), _: 1 },
                                8,
                                ['label']
                              ),
                              a(
                                L,
                                {
                                  prop: 'duration',
                                  label: d(o)('taskManagement.durationSeconds'),
                                  width: '120',
                                  align: 'center'
                                },
                                null,
                                8,
                                ['label']
                              ),
                              a(
                                L,
                                {
                                  prop: 'error_message',
                                  label: d(o)('taskManagement.errorMessage'),
                                  'min-width': '200',
                                  fixed: 'right'
                                },
                                {
                                  default: t(({ row: V }) => [
                                    V.error_message
                                      ? (E(),
                                        ne('div', ga, [
                                          N(
                                            'div',
                                            { class: 'error-message-text', title: V.error_message },
                                            u(V.error_message),
                                            9,
                                            _a
                                          ),
                                          a(
                                            e,
                                            {
                                              link: '',
                                              type: 'primary',
                                              size: 'small',
                                              onClick: (Se) => oe(V.error_message)
                                            },
                                            {
                                              default: t(() => [y(u(d(o)('common.copy')), 1)]),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ]))
                                      : (E(), ne('span', fa, '-'))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['label']
                              ),
                              a(
                                L,
                                {
                                  prop: 'created_at',
                                  label: d(o)('taskManagement.createdAt'),
                                  width: '160',
                                  align: 'center',
                                  fixed: 'right'
                                },
                                { default: t(({ row: V }) => [y(u(te(V.created_at)), 1)]), _: 1 },
                                8,
                                ['label']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['data']
                        )),
                        [[ke, F.value]]
                      ),
                      N('div', ka, [
                        a(
                          fe,
                          {
                            'current-page': C.value.page,
                            'onUpdate:currentPage': s[1] || (s[1] = (V) => (C.value.page = V)),
                            'page-size': C.value.size,
                            'onUpdate:pageSize': s[2] || (s[2] = (V) => (C.value.size = V)),
                            'page-sizes': [10, 20, 50, 100],
                            total: C.value.total,
                            layout: 'total, sizes, prev, pager, next, jumper',
                            onSizeChange: O,
                            onCurrentChange: H
                          },
                          null,
                          8,
                          ['current-page', 'page-size', 'total']
                        )
                      ])
                    ]))
                  : me('', !0),
                x.value
                  ? (E(),
                    Z(
                      d(ee),
                      {
                        key: 1,
                        visible: x.value,
                        'onUpdate:visible': s[3] || (s[3] = (V) => (x.value = V)),
                        'selected-instances': M.value,
                        onConfirm: r
                      },
                      null,
                      8,
                      ['visible', 'selected-instances']
                    ))
                  : me('', !0)
              ]),
              _: 1
            },
            8,
            ['modelValue', 'title']
          )
        )
      }
    }
  })
const ha = Te(va, [['__scopeId', 'data-v-2cc9b3a0']]),
  ya = { class: 'el-upload__text' },
  ba = { class: 'el-upload__tip' },
  Ma = ge({
    __name: 'UploadTaskConfigDialog',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue', 'success'],
    setup(U, { emit: _ }) {
      const o = g(!1),
        ee = g(null),
        W = () => {
          o.value = !0
        },
        se = (r) => {
          r ? W() : ((ee.value = null), (k.value.boot_params_json = ''))
        },
        T = (r) => {
          ;(delete r.padCodes, (ee.value = r), (k.value.boot_params_json = JSON.stringify(r)))
        },
        { t: S } = _e(),
        P = U,
        F = _,
        x = Ie({ get: () => P.modelValue, set: (r) => F('update:modelValue', r) }),
        M = g(),
        j = '/cpyservice/airtest/tasks/schedule-with-excel-async',
        h = g(),
        C = g(!1),
        D = g([]),
        R = g(!1),
        k = g({
          task_name: '',
          script_id: null,
          task_type: 'AIRTEST',
          auto_assign_account: !0,
          auto_onoff: !1,
          boot_params_json: ''
        }),
        G = g(),
        O = {
          task_name: [
            {
              required: !0,
              message: S('taskManagement.messages.pleaseEnterTaskName'),
              trigger: 'blur'
            }
          ],
          script_id: [
            {
              required: !0,
              message: S('taskManagement.messages.pleaseEnterScriptId'),
              trigger: 'change'
            }
          ],
          task_type: [
            {
              required: !0,
              message: S('taskManagement.messages.pleaseSelectTaskType'),
              trigger: 'change'
            }
          ]
        },
        H = async () => {
          try {
            R.value = !0
            const w = await Ee({ page: 1, pageSize: 1e3 })
            D.value = w.scripts || []
          } catch (r) {
            ;(console.error('获取脚本列表失败', r),
              $.error(S('taskManagement.getScriptListFailed')))
          } finally {
            R.value = !1
          }
        },
        Y = () => {
          $.warning(S('taskManagement.messages.onlyOneFileAllowed'))
        },
        ae = (r) => {
          h.value = r.raw
        },
        K = (r) => {
          ;($.success(S('taskManagement.messages.uploadSuccess')),
            (x.value = !1),
            M.value && M.value.clearFiles(),
            X(),
            F('success'))
        },
        oe = (r) => {
          ;(console.error(r),
            $.error(S('taskManagement.messages.uploadFailed')),
            M.value && M.value.clearFiles())
        },
        te = async () => {
          if (!h.value) {
            $.warning(S('taskManagement.messages.selectFileFirst'))
            return
          }
          try {
            await G.value.validate()
          } catch (w) {
            $.warning(S('taskManagement.messages.completeFormFirst'))
            return
          }
          const r = new FormData()
          ;(r.append('file', h.value),
            r.append('batch_name', k.value.task_name.toString()),
            r.append('script_id', k.value.script_id),
            r.append('task_type', k.value.task_type),
            r.append('schedule_type', 'Once'),
            r.append('auto_onoff', k.value.auto_onoff),
            k.value.boot_params_json && r.append('boot_params_json', k.value.boot_params_json),
            (C.value = !0))
          try {
            ;(await da(r),
              $.success(S('taskManagement.messages.uploadSuccess')),
              (x.value = !1),
              M.value && M.value.clearFiles(),
              X(),
              F('success'))
          } catch (w) {
            ;(console.error(w), $.error(S('taskManagement.messages.uploadFailed')))
          } finally {
            C.value = !1
          }
        },
        z = () => {
          ;((x.value = !1), M.value && M.value.clearFiles(), (h.value = null), X())
        },
        X = () => {
          k.value = {
            task_name: '',
            script_id: null,
            task_type: 'AIRTEST',
            auto_assign_account: !0,
            auto_onoff: !1,
            boot_params_json: ''
          }
        }
      return (
        Le(() => {
          H()
        }),
        (r, w) => {
          const le = p('el-input'),
            B = p('el-form-item'),
            J = p('el-option'),
            m = p('el-select'),
            v = p('el-switch'),
            I = p('el-tag'),
            n = p('el-button'),
            s = p('upload-filled'),
            i = p('el-icon'),
            f = p('el-upload'),
            A = p('el-form'),
            q = p('el-dialog')
          return (
            E(),
            Z(
              q,
              {
                title: r.$t('taskManagement.uploadTaskConfigDialog'),
                modelValue: x.value,
                'onUpdate:modelValue': w[6] || (w[6] = (b) => (x.value = b)),
                width: '600px'
              },
              {
                footer: t(() => [
                  a(
                    n,
                    {
                      style: { 'margin-right': '10px' },
                      type: 'success',
                      onClick: te,
                      loading: C.value
                    },
                    { default: t(() => [y(u(r.$t('taskManagement.uploadToServer')), 1)]), _: 1 },
                    8,
                    ['loading']
                  ),
                  a(
                    n,
                    { onClick: z },
                    { default: t(() => [y(u(r.$t('taskManagement.cancel')), 1)]), _: 1 }
                  )
                ]),
                default: t(() => [
                  a(
                    A,
                    {
                      model: k.value,
                      'label-width': '120px',
                      rules: O,
                      ref_key: 'formRef',
                      ref: G
                    },
                    {
                      default: t(() => [
                        a(
                          B,
                          {
                            label: r.$t('taskManagement.createDialog.taskName'),
                            prop: 'task_name'
                          },
                          {
                            default: t(() => [
                              a(
                                le,
                                {
                                  modelValue: k.value.task_name,
                                  'onUpdate:modelValue':
                                    w[0] || (w[0] = (b) => (k.value.task_name = b)),
                                  placeholder: r.$t(
                                    'taskManagement.createDialog.taskNamePlaceholder'
                                  ),
                                  style: { width: '100%' }
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
                        a(
                          B,
                          { label: r.$t('taskManagement.createDialog.script'), prop: 'script_id' },
                          {
                            default: t(() => [
                              a(
                                m,
                                {
                                  modelValue: k.value.script_id,
                                  'onUpdate:modelValue':
                                    w[1] || (w[1] = (b) => (k.value.script_id = b)),
                                  placeholder: r.$t(
                                    'taskManagement.createDialog.scriptPlaceholder'
                                  ),
                                  style: { width: '100%' },
                                  loading: R.value
                                },
                                {
                                  default: t(() => [
                                    (E(!0),
                                    ne(
                                      be,
                                      null,
                                      Me(
                                        D.value,
                                        (b) => (
                                          E(),
                                          Z(
                                            J,
                                            {
                                              key: b.id,
                                              label: ''
                                                .concat(b.name, ' (')
                                                .concat(b.description, ')'),
                                              value: b.id
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
                                ['modelValue', 'placeholder', 'loading']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label']
                        ),
                        a(
                          B,
                          {
                            label: r.$t('taskManagement.createDialog.taskType'),
                            prop: 'task_type'
                          },
                          {
                            default: t(() => [
                              a(
                                m,
                                {
                                  modelValue: k.value.task_type,
                                  'onUpdate:modelValue':
                                    w[2] || (w[2] = (b) => (k.value.task_type = b)),
                                  placeholder: r.$t(
                                    'taskManagement.createDialog.taskTypePlaceholder'
                                  ),
                                  style: { width: '100%' }
                                },
                                {
                                  default: t(() => [
                                    a(
                                      J,
                                      {
                                        label: r.$t('taskManagement.taskTypes.PYTHON'),
                                        value: 'PYTHON'
                                      },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    a(
                                      J,
                                      {
                                        label: r.$t('taskManagement.taskTypes.AIRTEST'),
                                        value: 'AIRTEST'
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
                          B,
                          { label: r.$t('taskManagement.createDialog.autoAssignAccount') },
                          {
                            default: t(() => [
                              a(
                                v,
                                {
                                  modelValue: k.value.auto_assign_account,
                                  'onUpdate:modelValue':
                                    w[3] || (w[3] = (b) => (k.value.auto_assign_account = b))
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
                          B,
                          { label: r.$t('taskManagement.autoOnOff') },
                          {
                            default: t(() => [
                              a(
                                v,
                                {
                                  modelValue: k.value.auto_onoff,
                                  'onUpdate:modelValue':
                                    w[4] || (w[4] = (b) => (k.value.auto_onoff = b)),
                                  onChange: se
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
                        k.value.auto_onoff && ee.value
                          ? (E(),
                            Z(
                              B,
                              { key: 0 },
                              {
                                default: t(() => [
                                  a(
                                    I,
                                    { type: 'success' },
                                    {
                                      default: t(() => [
                                        y(u(r.$t('taskManagement.bootConfigSet')), 1)
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  a(
                                    n,
                                    { type: 'text', onClick: W },
                                    {
                                      default: t(() => [
                                        y(u(r.$t('taskManagement.editBootConfig')), 1)
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              }
                            ))
                          : me('', !0),
                        a(
                          B,
                          { label: r.$t('taskManagement.selectFile') },
                          {
                            default: t(() => [
                              a(
                                f,
                                {
                                  ref_key: 'uploadRef',
                                  ref: M,
                                  action: j,
                                  'auto-upload': !1,
                                  'on-change': ae,
                                  'on-success': K,
                                  'on-error': oe,
                                  limit: 1,
                                  drag: '',
                                  'on-exceed': Y,
                                  accept: '.xlsx'
                                },
                                {
                                  tip: t(() => [
                                    N('div', ba, u(r.$t('taskManagement.uploadTip')), 1)
                                  ]),
                                  default: t(() => [
                                    a(
                                      i,
                                      { class: 'el-icon--upload' },
                                      { default: t(() => [a(s)]), _: 1 }
                                    ),
                                    N('div', ya, u(r.$t('taskManagement.dragOrClick')), 1)
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
                  ),
                  a(
                    Ue,
                    {
                      visible: o.value,
                      'onUpdate:visible': w[5] || (w[5] = (b) => (o.value = b)),
                      'pad-codes': ['ACD-1234567'],
                      'is-api': !1,
                      'is-hide-proxy': !0,
                      onSubmit: T
                    },
                    null,
                    8,
                    ['visible']
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
  Ca = { class: 'task-management' },
  Ta = ge({
    __name: 'index',
    setup(U) {
      const { t: _ } = _e()
      Ne()
      const { cTable: o, maxHeight: ee, handleGetTableHeight: W } = Ye(),
        se = de({}),
        T = de({ page: 1, limit: 10, total: 0 }),
        S = Ie(() => {
          try {
            return R.value ? JSON.parse(R.value) : {}
          } catch (e) {
            return {}
          }
        }),
        P = g([]),
        F = g(!1),
        x = g([]),
        M = g(!1),
        j = g(!1),
        h = g(!1),
        C = g(),
        D = de({
          task_name: '',
          instance_id: [],
          script_id: null,
          schedule_type: 'Once',
          task_type: 'AIRTEST',
          task_params: {}
        }),
        R = g(''),
        k = g(!0),
        G = g(!0),
        O = g(!1),
        H = g(null),
        Y = g(!1),
        ae = g(!1),
        K = g(null),
        oe = {
          task_name: [
            {
              required: !0,
              message: _('taskManagement.messages.pleaseEnterTaskName'),
              trigger: 'blur'
            }
          ],
          instance_id: [
            {
              required: !0,
              message: _('taskManagement.messages.pleaseEnterInstanceId'),
              trigger: 'blur'
            }
          ],
          script_id: [
            {
              required: !0,
              message: _('taskManagement.messages.pleaseEnterScriptId'),
              trigger: 'blur'
            }
          ],
          schedule_type: [
            {
              required: !0,
              message: _('taskManagement.messages.pleaseSelectScheduleType'),
              trigger: 'blur'
            }
          ],
          crontab: [
            {
              required: !0,
              message: _('taskManagement.messages.pleaseEnterCronExpression'),
              trigger: 'blur'
            }
          ],
          task_type: [
            {
              required: !0,
              message: _('taskManagement.messages.pleaseSelectTaskType'),
              trigger: 'blur'
            }
          ]
        },
        te = async () => {
          M.value = !0
          try {
            const l = await Ee({ page: 1, pageSize: 1e3 })
            l && (x.value = l.scripts || [])
          } catch (e) {
            ;(console.error(_('taskManagement.messages.getScriptListFailed'), e),
              $.error(_('taskManagement.messages.getScriptListFailed')))
          } finally {
            M.value = !1
          }
        },
        z = async () => {
          F.value = !0
          try {
            const e = { page: T.page, size: T.limit, ...se },
              l = await oa(e)
            l && ((P.value = l.items || []), (T.total = l.total || 0))
          } catch (e) {
            ;(console.error(_('taskManagement.messages.getTaskListFailed'), e),
              $.error(_('taskManagement.messages.getTaskListFailed')))
          } finally {
            F.value = !1
          }
        },
        X = Je(() => {
          ;((T.page = 1), z())
        }, 500),
        r = (e) => {
          ;((T.limit = e), (T.page = 1), z())
        },
        w = (e) => {
          ;((T.page = e), z())
        },
        le = () => {
          ;((j.value = !0), x.value.length === 0 && te())
        },
        B = async (e) => {
          ;((H.value = e), (O.value = !1), (h.value = !0))
          try {
            const l = { ...D, task_params: { ...S.value }, boot_params: e }
            ;(k.value
              ? await he({ ...l, use_configdata: !0 })
              : await he({ ...l, use_configdata: !1 }),
              $.success(_('taskManagement.messages.createSuccess')),
              J(),
              z())
          } catch (l) {
            ;(console.error(_('taskManagement.messages.createFailed'), l),
              $.error(_('taskManagement.messages.createFailed')))
          } finally {
            ;((h.value = !1), (O.value = !1))
          }
        },
        J = () => {
          var e
          ;((j.value = !1),
            (e = C.value) == null || e.resetFields(),
            (R.value = ''),
            (G.value = !0),
            (H.value = null))
        },
        m = async () => {
          if (!(!C.value || !(await C.value.validate()))) {
            if (G.value) {
              O.value = !0
              return
            }
            h.value = !0
            try {
              const l = { ...D, task_params: S.value }
              ;(k.value ? await he(l) : await sa(l),
                $.success(_('taskManagement.messages.createSuccess')),
                J(),
                z())
            } catch (l) {
              ;(console.error(_('taskManagement.messages.createFailed'), l),
                $.error(_('taskManagement.messages.createFailed')))
            } finally {
              h.value = !1
            }
          }
        },
        v = (e) => {
          ;((K.value = e), (ae.value = !0))
        },
        I = async (e) => {
          try {
            ;(await De.confirm(
              _('taskManagement.messages.confirmCancel', { id: e.id }),
              _('taskManagement.cancel'),
              {
                confirmButtonText: _('taskManagement.createDialog.confirm'),
                cancelButtonText: _('taskManagement.createDialog.cancel'),
                type: 'warning'
              }
            ),
              await ia(e.id),
              $.success(_('taskManagement.messages.cancelSuccess')),
              z())
          } catch (l) {
            l !== 'cancel' &&
              (console.error(_('taskManagement.messages.cancelFailed'), l),
              $.error(_('taskManagement.messages.cancelFailed')))
          }
        },
        n = async (e) => {
          try {
            ;(await De.confirm(
              _('taskManagement.messages.confirmRetry', { id: e.id }),
              _('taskManagement.retry'),
              {
                confirmButtonText: _('taskManagement.createDialog.confirm'),
                cancelButtonText: _('taskManagement.createDialog.cancel'),
                type: 'warning'
              }
            ),
              await ua(e.id),
              $.success(_('taskManagement.messages.retrySuccess')),
              z())
          } catch (l) {
            l !== 'cancel' &&
              (console.error(_('taskManagement.messages.retryFailed'), l),
              $.error(_('taskManagement.messages.retryFailed')))
          }
        },
        s = async () => {
          try {
            const e = await ca(),
              l = window.URL.createObjectURL(new Blob([e])),
              L = document.createElement('a')
            ;((L.href = l),
              L.setAttribute('download', 'task_config_template.xlsx'),
              document.body.appendChild(L),
              L.click(),
              document.body.removeChild(L),
              window.URL.revokeObjectURL(l),
              $.success(_('taskManagement.messages.downloadTemplateSuccess')))
          } catch (e) {
            ;(console.error(_('taskManagement.messages.downloadTemplateFailed'), e),
              $.error(_('taskManagement.messages.downloadTemplateFailed')))
          }
        },
        i = () => {
          Y.value = !0
        },
        f = () => {
          ;((Y.value = !1), z())
        },
        A = (e) =>
          ({
            PENDING: 'info',
            STARTED: 'primary',
            SUCCESS: 'success',
            FAILURE: 'danger',
            REVOKED: 'warning'
          })[e] || 'info',
        q = (e) => e,
        b = (e) => (e ? new Date(e).toLocaleString('zh-CN') : '')
      return (
        Le(() => {
          ;(z(), W(), window.addEventListener('resize', W))
        }),
        Oe(() => {
          window.removeEventListener('resize', W)
        }),
        (e, l) => {
          const L = p('el-input'),
            Q = p('el-button'),
            fe = p('PageBanner'),
            ue = p('el-table-column'),
            ke = p('el-tag'),
            V = p('el-table'),
            Se = p('el-pagination'),
            re = p('el-form-item'),
            ce = p('el-option'),
            ve = p('el-select'),
            we = p('el-switch'),
            Re = p('el-form'),
            ze = p('el-dialog'),
            Fe = ye('loading')
          return (
            E(),
            ne('div', Ca, [
              a(
                fe,
                { title: '' },
                {
                  extra: t(() => [
                    a(
                      L,
                      {
                        modelValue: se.task_name,
                        'onUpdate:modelValue': l[0] || (l[0] = (c) => (se.task_name = c)),
                        onInput: d(X),
                        placeholder: e.$t('taskManagement.searchPlaceholder'),
                        clearable: '',
                        style: { width: '250px', 'margin-right': '10px' }
                      },
                      null,
                      8,
                      ['modelValue', 'onInput', 'placeholder']
                    ),
                    a(
                      Q,
                      { icon: 'RefreshRight', onClick: z },
                      { default: t(() => [y(u(e.$t('taskManagement.refresh')), 1)]), _: 1 }
                    ),
                    a(
                      Q,
                      { type: 'primary', onClick: le },
                      { default: t(() => [y(u(e.$t('taskManagement.createTask')), 1)]), _: 1 }
                    ),
                    a(
                      Q,
                      { type: 'success', onClick: s },
                      { default: t(() => [y(u(e.$t('taskManagement.downloadTemplate')), 1)]), _: 1 }
                    ),
                    a(
                      Q,
                      { type: 'warning', onClick: i },
                      { default: t(() => [y(u(e.$t('taskManagement.uploadConfig')), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              ),
              Ce(
                (E(),
                Z(
                  V,
                  {
                    ref_key: 'cTable',
                    ref: o,
                    data: P.value,
                    style: { 'margin-top': '20px' },
                    'max-height': d(ee)
                  },
                  {
                    default: t(() => [
                      a(
                        ue,
                        { prop: 'id', label: e.$t('taskManagement.id'), width: '170' },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        ue,
                        {
                          prop: 'task_name',
                          label: e.$t('taskManagement.taskName'),
                          'min-width': '150'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        ue,
                        { prop: 'status', label: e.$t('taskManagement.status'), width: '150' },
                        {
                          default: t(({ row: c }) => [
                            a(
                              ke,
                              { type: A(c.status) },
                              { default: t(() => [y(u(q(c.status.toLowerCase())), 1)]), _: 2 },
                              1032,
                              ['type']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      a(
                        ue,
                        {
                          prop: 'created_at',
                          label: e.$t('taskManagement.createTime'),
                          width: '180'
                        },
                        { default: t(({ row: c }) => [y(u(b(c.created_at)), 1)]), _: 1 },
                        8,
                        ['label']
                      ),
                      a(
                        ue,
                        { label: e.$t('taskManagement.operations'), width: '250' },
                        {
                          default: t(({ row: c }) => [
                            a(
                              Q,
                              { link: '', type: 'primary', size: 'small', onClick: (Ve) => v(c) },
                              { default: t(() => [y(u(e.$t('taskManagement.viewLog')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                            a(
                              Q,
                              { size: 'small', type: 'warning', link: '', onClick: (Ve) => n(c) },
                              { default: t(() => [y(u(e.$t('taskManagement.retry')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                            a(
                              Q,
                              { size: 'small', type: 'danger', link: '', onClick: (Ve) => I(c) },
                              { default: t(() => [y(u(e.$t('taskManagement.cancel')), 1)]), _: 2 },
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
                [[Fe, F.value]]
              ),
              a(
                Se,
                {
                  style: { 'margin-top': '15px' },
                  'current-page': T.page,
                  'onUpdate:currentPage': l[1] || (l[1] = (c) => (T.page = c)),
                  'page-size': T.limit,
                  'onUpdate:pageSize': l[2] || (l[2] = (c) => (T.limit = c)),
                  'page-sizes': [10, 20, 50, 100],
                  total: T.total,
                  layout: 'total, sizes, prev, pager, next, jumper',
                  onSizeChange: r,
                  onCurrentChange: w
                },
                null,
                8,
                ['current-page', 'page-size', 'total']
              ),
              a(
                ze,
                {
                  modelValue: j.value,
                  'onUpdate:modelValue': l[11] || (l[11] = (c) => (j.value = c)),
                  title: e.$t('taskManagement.createDialog.title'),
                  width: '600px',
                  'before-close': J
                },
                {
                  footer: t(() => [
                    a(
                      Q,
                      { onClick: J },
                      {
                        default: t(() => [y(u(e.$t('taskManagement.createDialog.cancel')), 1)]),
                        _: 1
                      }
                    ),
                    a(
                      Q,
                      { type: 'primary', onClick: m, loading: h.value },
                      {
                        default: t(() => [y(u(e.$t('taskManagement.createDialog.confirm')), 1)]),
                        _: 1
                      },
                      8,
                      ['loading']
                    )
                  ]),
                  default: t(() => [
                    a(
                      Re,
                      {
                        model: D,
                        rules: oe,
                        ref_key: 'createFormRef',
                        ref: C,
                        'label-width': '100px'
                      },
                      {
                        default: t(() => [
                          a(
                            re,
                            {
                              label: e.$t('taskManagement.createDialog.taskName'),
                              prop: 'task_name'
                            },
                            {
                              default: t(() => [
                                a(
                                  L,
                                  {
                                    modelValue: D.task_name,
                                    'onUpdate:modelValue':
                                      l[3] || (l[3] = (c) => (D.task_name = c)),
                                    placeholder: e.$t(
                                      'taskManagement.createDialog.taskNamePlaceholder'
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
                          a(
                            re,
                            {
                              label: e.$t('taskManagement.createDialog.instanceId'),
                              prop: 'instance_id'
                            },
                            {
                              default: t(() => [
                                a(
                                  na,
                                  {
                                    modelValue: D.instance_id,
                                    'onUpdate:modelValue':
                                      l[4] || (l[4] = (c) => (D.instance_id = c))
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
                            re,
                            {
                              label: e.$t('taskManagement.createDialog.script'),
                              prop: 'script_id'
                            },
                            {
                              default: t(() => [
                                a(
                                  ve,
                                  {
                                    modelValue: D.script_id,
                                    'onUpdate:modelValue':
                                      l[5] || (l[5] = (c) => (D.script_id = c)),
                                    placeholder: e.$t(
                                      'taskManagement.createDialog.scriptPlaceholder'
                                    ),
                                    style: { width: '100%' },
                                    loading: M.value
                                  },
                                  {
                                    default: t(() => [
                                      (E(!0),
                                      ne(
                                        be,
                                        null,
                                        Me(
                                          x.value,
                                          (c) => (
                                            E(),
                                            Z(
                                              ce,
                                              {
                                                key: c.id,
                                                label: ''
                                                  .concat(c.name, ' (')
                                                  .concat(c.description, ')'),
                                                value: c.id
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
                                  ['modelValue', 'placeholder', 'loading']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          a(
                            re,
                            {
                              label: e.$t('taskManagement.createDialog.scheduleType'),
                              prop: 'schedule_type'
                            },
                            {
                              default: t(() => [
                                a(
                                  ve,
                                  {
                                    modelValue: D.schedule_type,
                                    'onUpdate:modelValue':
                                      l[6] || (l[6] = (c) => (D.schedule_type = c)),
                                    placeholder: e.$t(
                                      'taskManagement.createDialog.scheduleTypePlaceholder'
                                    )
                                  },
                                  {
                                    default: t(() => [
                                      a(
                                        ce,
                                        {
                                          label: e.$t('taskManagement.scheduleTypes.Once'),
                                          value: 'Once'
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        ce,
                                        {
                                          label: e.$t('taskManagement.scheduleTypes.Daily'),
                                          value: 'Daily'
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        ce,
                                        {
                                          label: e.$t('taskManagement.scheduleTypes.Weekly'),
                                          value: 'Weekly'
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        ce,
                                        {
                                          label: e.$t('taskManagement.scheduleTypes.Monthly'),
                                          value: 'Monthly'
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
                            re,
                            {
                              label: e.$t('taskManagement.createDialog.taskType'),
                              prop: 'task_type'
                            },
                            {
                              default: t(() => [
                                a(
                                  ve,
                                  {
                                    modelValue: D.task_type,
                                    'onUpdate:modelValue':
                                      l[7] || (l[7] = (c) => (D.task_type = c)),
                                    placeholder: e.$t(
                                      'taskManagement.createDialog.taskTypePlaceholder'
                                    )
                                  },
                                  {
                                    default: t(() => [
                                      a(
                                        ce,
                                        {
                                          label: e.$t('taskManagement.taskTypes.PYTHON'),
                                          value: 'PYTHON'
                                        },
                                        null,
                                        8,
                                        ['label']
                                      ),
                                      a(
                                        ce,
                                        {
                                          label: e.$t('taskManagement.taskTypes.AIRTEST'),
                                          value: 'AIRTEST'
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
                            re,
                            { label: e.$t('taskManagement.createDialog.taskParams') },
                            {
                              default: t(() => [
                                a(
                                  L,
                                  {
                                    type: 'textarea',
                                    rows: 3,
                                    modelValue: R.value,
                                    'onUpdate:modelValue': l[8] || (l[8] = (c) => (R.value = c)),
                                    placeholder: e.$t(
                                      'taskManagement.createDialog.taskParamsPlaceholder'
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
                          a(
                            re,
                            { label: e.$t('taskManagement.createDialog.autoAssignAccount') },
                            {
                              default: t(() => [
                                a(
                                  we,
                                  {
                                    modelValue: k.value,
                                    'onUpdate:modelValue': l[9] || (l[9] = (c) => (k.value = c))
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
                            re,
                            { label: e.$t('taskManagement.createDialog.bootConfig') },
                            {
                              default: t(() => [
                                a(
                                  we,
                                  {
                                    modelValue: G.value,
                                    'onUpdate:modelValue': l[10] || (l[10] = (c) => (G.value = c))
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
                ['modelValue', 'title']
              ),
              a(
                ha,
                {
                  modelValue: ae.value,
                  'onUpdate:modelValue': l[12] || (l[12] = (c) => (ae.value = c)),
                  task: K.value
                },
                null,
                8,
                ['modelValue', 'task']
              ),
              a(
                Ue,
                {
                  visible: O.value,
                  'onUpdate:visible': l[13] || (l[13] = (c) => (O.value = c)),
                  padCodes: D.instance_id,
                  'is-api': !1,
                  'is-hide-proxy': !0,
                  onSubmit: B
                },
                null,
                8,
                ['visible', 'padCodes']
              ),
              a(
                Ma,
                {
                  modelValue: Y.value,
                  'onUpdate:modelValue': l[14] || (l[14] = (c) => (Y.value = c)),
                  onSuccess: f
                },
                null,
                8,
                ['modelValue']
              )
            ])
          )
        }
      )
    }
  })
const Pa = Te(Ta, [['__scopeId', 'data-v-fe5c8100']])
export { Pa as default }
