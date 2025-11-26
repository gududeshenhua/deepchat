import {
  a as Z,
  u as ee,
  c as ae,
  d as te,
  g as oe,
  b as ne,
  e as le,
  f as re
} from './index-c0fb52a7.js'
import { u as S } from './useTableHeightFit-d4c36563.js'
import { h as z, _ as F } from './index-ae33a03d.js'
import { E as g, G as H } from './element-74718691.js'
import {
  y as R,
  r as m,
  b as I,
  Q,
  a8 as l,
  ag as j,
  f as T,
  h as q,
  N as a,
  H as o,
  L as d,
  M as c,
  I as J,
  G as K,
  u as O
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const ue = { class: 'proxy-group-management' },
  pe = R({
    __name: 'ProxyGroupManagement',
    setup(W, { expose: i }) {
      const { t: s } = z(),
        h = m([]),
        _ = m(!1),
        r = m(!1),
        f = m(null),
        { cTable: w, maxHeight: k, handleGetTableHeight: x } = S(),
        u = m({ name: '', alias: '' }),
        p = async () => {
          try {
            _.value = !0
            const t = await Z()
            h.value = t || []
          } catch (t) {
            ;(g.error(s('groupManagement.getProxyGroupListFailed')), console.error(t))
          } finally {
            _.value = !1
          }
        },
        b = async () => {
          try {
            ;(f.value
              ? (await ee(f.value.uuid, u.value),
                g.success(s('groupManagement.proxyGroupUpdateSuccess')))
              : (await ae(u.value), g.success(s('groupManagement.proxyGroupCreateSuccess'))),
              (r.value = !1),
              (u.value = { name: '', alias: '' }),
              (f.value = null),
              await p())
          } catch (t) {
            ;(g.error(
              f.value
                ? s('groupManagement.proxyGroupUpdateFailed')
                : s('groupManagement.proxyGroupCreateFailed')
            ),
              console.error(t))
          }
        },
        V = (t) => {
          ;((f.value = t), (u.value = { name: t.name, alias: t.alias || '' }), (r.value = !0))
        },
        D = async (t) => {
          try {
            ;(await H.confirm(
              s('groupManagement.confirmDeleteProxyGroup', { proxyGroupName: t.name }),
              s('groupManagement.confirmDelete'),
              {
                confirmButtonText: s('groupManagement.confirmButtonText'),
                cancelButtonText: s('groupManagement.cancelButtonText'),
                type: 'warning'
              }
            ),
              await te(t.uuid),
              g.success(s('groupManagement.proxyGroupDeleteSuccess')),
              await p())
          } catch (e) {
            e !== 'cancel' &&
              (g.error(s('groupManagement.proxyGroupDeleteFailed')), console.error(e))
          }
        },
        L = () => {
          ;((f.value = null), (u.value = { name: '', alias: '' }), (r.value = !0))
        }
      return (
        I(() => {
          ;(p(), x(), window.addEventListener('resize', x))
        }),
        Q(() => {
          window.removeEventListener('resize', x)
        }),
        i({
          fetchProxyGroupList: () => {
            p()
          }
        }),
        (t, e) => {
          const n = l('el-button'),
            M = l('PageBanner'),
            G = l('el-table-column'),
            $ = l('el-table'),
            P = l('el-input'),
            C = l('el-form-item'),
            B = l('el-form'),
            E = l('el-dialog'),
            N = j('loading')
          return (
            T(),
            q('div', ue, [
              a(
                M,
                { title: '' },
                {
                  extra: o(() => [
                    a(
                      n,
                      { icon: 'RefreshRight', onClick: p },
                      { default: o(() => [d(c(t.$t('groupManagement.refresh')), 1)]), _: 1 }
                    ),
                    a(
                      n,
                      { type: 'primary', onClick: L },
                      {
                        default: o(() => [d(c(t.$t('groupManagement.createNewProxyGroup')), 1)]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              ),
              J(
                (T(),
                K(
                  $,
                  {
                    ref_key: 'cTable',
                    ref: w,
                    data: h.value,
                    style: { width: '100%', 'margin-top': '20px' },
                    'max-height': O(k)
                  },
                  {
                    default: o(() => [
                      a(
                        G,
                        { prop: 'name', label: t.$t('groupManagement.proxyGroupName') },
                        null,
                        8,
                        ['label']
                      ),
                      a(G, { prop: 'alias', label: t.$t('groupManagement.alias') }, null, 8, [
                        'label'
                      ]),
                      a(
                        G,
                        { prop: 'created_at', label: t.$t('groupManagement.createTime') },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        G,
                        { prop: 'updated_at', label: t.$t('groupManagement.updateTime') },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        G,
                        { label: t.$t('groupManagement.operations'), width: '200' },
                        {
                          default: o((v) => [
                            a(
                              n,
                              { size: 'small', onClick: (U) => V(v.row) },
                              { default: o(() => [d(c(t.$t('groupManagement.edit')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                            a(
                              n,
                              { size: 'small', type: 'danger', onClick: (U) => D(v.row) },
                              { default: o(() => [d(c(t.$t('groupManagement.delete')), 1)]), _: 2 },
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
                [[N, _.value]]
              ),
              a(
                E,
                {
                  title: f.value
                    ? t.$t('groupManagement.editProxyGroup')
                    : t.$t('groupManagement.createProxyGroup'),
                  modelValue: r.value,
                  'onUpdate:modelValue': e[3] || (e[3] = (v) => (r.value = v)),
                  width: '500px',
                  onClose:
                    e[4] ||
                    (e[4] = () => {
                      ;((u.value = { name: '', alias: '' }), (f.value = null))
                    })
                },
                {
                  footer: o(() => [
                    a(
                      n,
                      { onClick: e[2] || (e[2] = (v) => (r.value = !1)) },
                      { default: o(() => [d(c(t.$t('groupManagement.cancel')), 1)]), _: 1 }
                    ),
                    a(
                      n,
                      { type: 'primary', onClick: b },
                      { default: o(() => [d(c(t.$t('groupManagement.confirm')), 1)]), _: 1 }
                    )
                  ]),
                  default: o(() => [
                    a(
                      B,
                      { model: u.value, 'label-width': '80px' },
                      {
                        default: o(() => [
                          a(
                            C,
                            { label: t.$t('groupManagement.proxyGroupName') },
                            {
                              default: o(() => [
                                a(
                                  P,
                                  {
                                    modelValue: u.value.name,
                                    'onUpdate:modelValue':
                                      e[0] || (e[0] = (v) => (u.value.name = v)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: t.$t('groupManagement.enterProxyGroupName')
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
                            C,
                            { label: t.$t('groupManagement.alias') },
                            {
                              default: o(() => [
                                a(
                                  P,
                                  {
                                    modelValue: u.value.alias,
                                    'onUpdate:modelValue':
                                      e[1] || (e[1] = (v) => (u.value.alias = v)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: t.$t('groupManagement.enterAlias')
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
const se = F(pe, [['__scopeId', 'data-v-5d383ef7']]),
  ie = { class: 'group-management' },
  me = R({
    __name: 'index',
    setup(W) {
      const { t: i } = z(),
        s = m([]),
        h = m(!1),
        _ = m(!1),
        r = m(null),
        f = m('group'),
        w = m(null),
        { cTable: k, maxHeight: x, handleGetTableHeight: u } = S(),
        p = m({ name: '' }),
        b = async () => {
          try {
            h.value = !0
            const e = await oe()
            s.value = e || []
          } catch (e) {
            ;(g.error(i('groupManagement.getGroupListFailed')), console.error(e))
          } finally {
            h.value = !1
          }
        },
        V = async () => {
          try {
            ;(r.value
              ? (await ne(r.value.uuid, p.value),
                g.success(i('groupManagement.groupUpdateSuccess')))
              : (await le(p.value), g.success(i('groupManagement.groupCreateSuccess'))),
              (_.value = !1),
              (p.value = { name: '' }),
              (r.value = null),
              await b())
          } catch (e) {
            ;(g.error(
              r.value
                ? i('groupManagement.groupUpdateFailed')
                : i('groupManagement.groupCreateFailed')
            ),
              console.error(e))
          }
        },
        D = (e) => {
          ;((r.value = e), (p.value = { name: e.name }), (_.value = !0))
        },
        L = async (e) => {
          try {
            ;(await H.confirm(
              i('groupManagement.confirmDeleteGroup', { groupName: e.name }),
              i('groupManagement.confirmDelete'),
              {
                confirmButtonText: i('groupManagement.confirmButtonText'),
                cancelButtonText: i('groupManagement.cancelButtonText'),
                type: 'warning'
              }
            ),
              await re(e.uuid),
              g.success(i('groupManagement.groupDeleteSuccess')),
              await b())
          } catch (n) {
            n !== 'cancel' && (g.error(i('groupManagement.groupDeleteFailed')), console.error(n))
          }
        },
        A = () => {
          ;((r.value = null), (p.value = { name: '' }), (_.value = !0))
        },
        t = (e) => {
          e === 'group' ? b() : e === 'proxyGroup' && w.value && w.value.fetchProxyGroupList()
        }
      return (
        I(() => {
          ;(b(), u(), window.addEventListener('resize', u))
        }),
        Q(() => {
          window.removeEventListener('resize', u)
        }),
        (e, n) => {
          const M = l('el-button'),
            G = l('PageBanner'),
            $ = l('el-table-column'),
            P = l('el-table'),
            C = l('el-tab-pane'),
            B = l('el-tabs'),
            E = l('el-input'),
            N = l('el-form-item'),
            v = l('el-form'),
            U = l('el-dialog'),
            X = j('loading')
          return (
            T(),
            q('div', ie, [
              a(
                B,
                {
                  modelValue: f.value,
                  'onUpdate:modelValue': n[0] || (n[0] = (y) => (f.value = y)),
                  class: 'group-tabs',
                  onTabChange: t
                },
                {
                  default: o(() => [
                    a(
                      C,
                      { label: e.$t('groupManagement.instanceGroupManagement'), name: 'group' },
                      {
                        default: o(() => [
                          a(
                            G,
                            { title: '' },
                            {
                              extra: o(() => [
                                a(
                                  M,
                                  { icon: 'RefreshRight', onClick: b },
                                  {
                                    default: o(() => [d(c(e.$t('groupManagement.refresh')), 1)]),
                                    _: 1
                                  }
                                ),
                                a(
                                  M,
                                  { type: 'primary', onClick: A },
                                  {
                                    default: o(() => [
                                      d(c(e.$t('groupManagement.createNewGroup')), 1)
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          J(
                            (T(),
                            K(
                              P,
                              {
                                ref_key: 'cTable',
                                ref: k,
                                data: s.value,
                                style: { width: '100%', 'margin-top': '20px' },
                                'max-height': O(x)
                              },
                              {
                                default: o(() => [
                                  a(
                                    $,
                                    { prop: 'name', label: e.$t('groupManagement.groupName') },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  a(
                                    $,
                                    {
                                      prop: 'created_at',
                                      label: e.$t('groupManagement.createTime')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  a(
                                    $,
                                    {
                                      prop: 'updated_at',
                                      label: e.$t('groupManagement.updateTime')
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  a(
                                    $,
                                    { label: e.$t('groupManagement.operations'), width: '200' },
                                    {
                                      default: o((y) => [
                                        a(
                                          M,
                                          { size: 'small', onClick: (Y) => D(y.row) },
                                          {
                                            default: o(() => [
                                              d(c(e.$t('groupManagement.edit')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        a(
                                          M,
                                          {
                                            size: 'small',
                                            type: 'danger',
                                            onClick: (Y) => L(y.row)
                                          },
                                          {
                                            default: o(() => [
                                              d(c(e.$t('groupManagement.delete')), 1)
                                            ]),
                                            _: 2
                                          },
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
                            [[X, h.value]]
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    a(
                      C,
                      { label: e.$t('groupManagement.proxyGroupManagement'), name: 'proxyGroup' },
                      {
                        default: o(() => [a(se, { ref_key: 'proxyGroupRef', ref: w }, null, 512)]),
                        _: 1
                      },
                      8,
                      ['label']
                    )
                  ]),
                  _: 1
                },
                8,
                ['modelValue']
              ),
              a(
                U,
                {
                  title: r.value
                    ? e.$t('groupManagement.editGroup')
                    : e.$t('groupManagement.createGroup'),
                  modelValue: _.value,
                  'onUpdate:modelValue': n[3] || (n[3] = (y) => (_.value = y)),
                  width: '500px',
                  onClose:
                    n[4] ||
                    (n[4] = () => {
                      ;((p.value = { name: '' }), (r.value = null))
                    })
                },
                {
                  footer: o(() => [
                    a(
                      M,
                      { onClick: n[2] || (n[2] = (y) => (_.value = !1)) },
                      { default: o(() => [d(c(e.$t('groupManagement.cancel')), 1)]), _: 1 }
                    ),
                    a(
                      M,
                      { type: 'primary', onClick: V },
                      { default: o(() => [d(c(e.$t('groupManagement.confirm')), 1)]), _: 1 }
                    )
                  ]),
                  default: o(() => [
                    a(
                      v,
                      { model: p.value, 'label-width': '80px' },
                      {
                        default: o(() => [
                          a(
                            N,
                            { label: e.$t('groupManagement.groupName') },
                            {
                              default: o(() => [
                                a(
                                  E,
                                  {
                                    modelValue: p.value.name,
                                    'onUpdate:modelValue':
                                      n[1] || (n[1] = (y) => (p.value.name = y)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: e.$t('groupManagement.enterGroupName')
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
const ye = F(me, [['__scopeId', 'data-v-d7138a43']])
export { ye as default }
