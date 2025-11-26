import {
  x as ee,
  y as ae,
  E as k,
  J as De,
  K as Te,
  e as Ae,
  k as Re,
  G as H
} from './element-74718691.js'
import { h as J, t as Fe, v as Ke, w as xe, _ as le, f as Ne } from './index-ae33a03d.js'
import {
  c as Oe,
  q as Be,
  a as ze,
  b as Le,
  u as Qe,
  d as Ee,
  e as Pe,
  f as He,
  r as je,
  i as Ge,
  h as Je
} from './index-1bdb6a9d.js'
import { u as We } from './useTableHeightFit-d4c36563.js'
import {
  y as W,
  r as v,
  R as ie,
  a8 as _,
  f as $,
  G as x,
  H as l,
  N as e,
  L as c,
  M as p,
  u,
  d as de,
  ag as te,
  I as se,
  h as G,
  a0 as Xe,
  F as Ye,
  A as Ze,
  ar as ea,
  as as aa,
  i as la,
  b as ta,
  Q as sa,
  K as na
} from './vue-66851fce.js'
import { Q as ra } from './QuotaManagementDialog-2942165c.js'
import './vxe-562f9a54.js'
const oa = W({
    __name: 'AddUserDialog',
    props: { visible: { type: Boolean, default: !1 } },
    emits: ['update:visible', 'success'],
    setup(N, { emit: o }) {
      const { t: s } = J(),
        C = o,
        y = v({
          username: '',
          password: '',
          user_alias: '',
          ak: '',
          sk: '',
          xhost: 'openapi-hk.armcloud.net',
          sec_code: ''
        }),
        m = ie({
          username: [
            { required: !0, message: s('userManagement.usernameRequired'), trigger: 'blur' }
          ],
          password: [
            { required: !0, message: s('userManagement.passwordRequired'), trigger: 'blur' }
          ],
          user_alias: [
            { required: !0, message: s('userManagement.userAliasRequired'), trigger: 'blur' }
          ],
          ak: [{ required: !0, message: s('userManagement.appKeyRequired'), trigger: 'blur' }],
          sk: [{ required: !0, message: s('userManagement.appSecretRequired'), trigger: 'blur' }],
          xhost: [{ required: !0, message: s('userManagement.xhostRequired'), trigger: 'blur' }],
          sec_code: [
            { required: !0, message: s('userManagement.secCodeRequired'), trigger: 'blur' }
          ]
        }),
        F = v(),
        A = v('password'),
        h = v('password'),
        R = v('password'),
        b = v(!1),
        V = () => {
          A.value = A.value === 'password' ? 'text' : 'password'
        },
        q = () => {
          h.value = h.value === 'password' ? 'text' : 'password'
        },
        U = () => {
          R.value = R.value === 'password' ? 'text' : 'password'
        },
        O = async () => {
          await F.value.validate(async (I) => {
            if (I) {
              b.value = !0
              try {
                ;(await Oe(y.value),
                  C('update:visible', !1),
                  C('success'),
                  k.success(s('userManagement.createUserSuccess')))
              } catch (f) {
                ;(console.error(f), k.error(s('userManagement.createUserFailed')))
              } finally {
                b.value = !1
              }
            }
          })
        }
      return (I, f) => {
        const D = _('el-input'),
          i = _('el-form-item'),
          r = _('el-icon'),
          d = _('el-form'),
          w = _('el-button'),
          L = _('el-dialog')
        return (
          $(),
          x(
            L,
            {
              'model-value': N.visible,
              title: u(s)('userManagement.addUserDialogTitle'),
              width: '500px',
              'onUpdate:modelValue': f[8] || (f[8] = (M) => I.$emit('update:visible', M))
            },
            {
              footer: l(() => [
                e(
                  w,
                  { onClick: f[7] || (f[7] = (M) => I.$emit('update:visible', !1)) },
                  { default: l(() => [c(p(u(s)('common.cancel')), 1)]), _: 1 }
                ),
                e(
                  w,
                  { type: 'primary', onClick: O, loading: b.value },
                  { default: l(() => [c(p(u(s)('common.save')), 1)]), _: 1 },
                  8,
                  ['loading']
                )
              ]),
              default: l(() => [
                e(
                  d,
                  { ref_key: 'formRef', ref: F, model: y.value, rules: m, 'label-width': '100px' },
                  {
                    default: l(() => [
                      e(
                        i,
                        { label: u(s)('userManagement.username'), prop: 'username' },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.username,
                                'onUpdate:modelValue':
                                  f[0] || (f[0] = (M) => (y.value.username = M))
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
                      e(
                        i,
                        { label: u(s)('userManagement.password'), prop: 'password' },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.password,
                                'onUpdate:modelValue':
                                  f[1] || (f[1] = (M) => (y.value.password = M)),
                                type: A.value
                              },
                              {
                                suffix: l(() => [
                                  e(
                                    r,
                                    { style: { cursor: 'pointer' }, onClick: V },
                                    {
                                      default: l(() => [
                                        A.value === 'password'
                                          ? ($(), x(u(ee), { key: 0 }))
                                          : ($(), x(u(ae), { key: 1 }))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'type']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      e(
                        i,
                        { label: u(s)('userManagement.userAlias'), prop: 'user_alias' },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.user_alias,
                                'onUpdate:modelValue':
                                  f[2] || (f[2] = (M) => (y.value.user_alias = M))
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
                      e(
                        i,
                        { label: u(s)('userManagement.appKey'), prop: 'ak' },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.ak,
                                'onUpdate:modelValue': f[3] || (f[3] = (M) => (y.value.ak = M))
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
                      e(
                        i,
                        { label: u(s)('userManagement.appSecret'), prop: 'sk' },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.sk,
                                'onUpdate:modelValue': f[4] || (f[4] = (M) => (y.value.sk = M)),
                                type: h.value
                              },
                              {
                                suffix: l(() => [
                                  e(
                                    r,
                                    { style: { cursor: 'pointer' }, onClick: q },
                                    {
                                      default: l(() => [
                                        h.value === 'password'
                                          ? ($(), x(u(ee), { key: 0 }))
                                          : ($(), x(u(ae), { key: 1 }))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'type']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      e(
                        i,
                        { label: u(s)('userManagement.xhost') },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.xhost,
                                'onUpdate:modelValue': f[5] || (f[5] = (M) => (y.value.xhost = M)),
                                disabled: ''
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
                      e(
                        i,
                        { label: u(s)('userManagement.secCode'), prop: 'sec_code' },
                        {
                          default: l(() => [
                            e(
                              D,
                              {
                                modelValue: y.value.sec_code,
                                'onUpdate:modelValue':
                                  f[6] || (f[6] = (M) => (y.value.sec_code = M)),
                                type: R.value
                              },
                              {
                                suffix: l(() => [
                                  e(
                                    r,
                                    { style: { cursor: 'pointer' }, onClick: U },
                                    {
                                      default: l(() => [
                                        R.value === 'password'
                                          ? ($(), x(u(ee), { key: 0 }))
                                          : ($(), x(u(ae), { key: 1 }))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'type']
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
                  ['model', 'rules']
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
  }),
  ua = (N) => (ea('data-v-93c375a8'), (N = N()), aa(), N),
  ia = ['onDragstart', 'onDrop'],
  da = ua(() =>
    la(
      'i',
      {
        class: 'el-icon-rank',
        style: { 'margin-right': '10px', cursor: 'move', 'font-size': '16px' }
      },
      null,
      -1
    )
  ),
  ma = W({
    __name: 'UserMetaInfoDialog',
    props: {
      visible: { type: Boolean, default: !1 },
      userId: { type: [String, Number], required: !0 }
    },
    emits: ['update:visible', 'success'],
    setup(N, { emit: o }) {
      const { t: s } = J(),
        C = N,
        y = o,
        m = v({
          group_id: 0,
          group_name: '',
          specificationCode: '',
          cluster_name: '',
          quotas: {},
          padlist: '',
          user_defaults: '',
          user_alias: '',
          images: [],
          id: 0,
          user_id: 0,
          created_at: '',
          active: !0
        }),
        F = ie({
          user_alias: [
            { required: !0, message: s('userManagement.userAliasRequired'), trigger: 'blur' }
          ],
          specificationCode: [
            { required: !0, message: s('userManagement.specCodeRequired'), trigger: 'blur' }
          ],
          cluster_name: [
            { required: !0, message: s('userManagement.clusterNameRequired'), trigger: 'blur' }
          ],
          group_name: [
            { required: !0, message: s('userManagement.groupNameRequired'), trigger: 'blur' }
          ]
        }),
        A = v(),
        h = v(!1),
        R = async () => {
          try {
            let r = (await xe({ user_id: C.userId })).find((d) => d.user_id === C.userId)
            if (
              (r ||
                (r = {
                  user_id: C.userId,
                  group_id: 0,
                  group_name: '',
                  specificationCode: '',
                  cluster_name: '',
                  user_defaults: '',
                  user_alias: '',
                  images: [],
                  active: !0
                }),
              r.images)
            )
              if (typeof r.images == 'string')
                try {
                  const d = JSON.parse(r.images)
                  r.images = Object.keys(d).map((w) => ({ label: w, value: d[w] }))
                } catch (d) {
                  ;(console.error('解析images失败', d), (r.images = []))
                }
              else
                Array.isArray(r.images.ids)
                  ? (r.images = r.images.ids.map((d) => ({
                      label: d.label,
                      value: d.value,
                      version: d.version
                    })))
                  : typeof r.images == 'object' &&
                    !Array.isArray(r.images) &&
                    (r.images = Object.keys(r.images).map((d) => ({
                      label: d,
                      value: r.images[d]
                    })))
            else r.images = []
            m.value = { ...m.value, ...r }
          } catch (i) {
            ;(console.error(i), k.error(s('userManagement.fetchUserMetaFailed')))
          }
        },
        b = async () => {
          await A.value.validate(async (i) => {
            if (i) {
              h.value = !0
              try {
                const r = {
                  specificationCode: m.value.specificationCode,
                  cluster_name: m.value.cluster_name,
                  user_alias: m.value.user_alias,
                  group_name: m.value.group_name,
                  images: { ids: m.value.images }
                }
                ;(m.value.user_id ? await Fe(C.userId, r) : await Ke(r),
                  y('update:visible', !1),
                  y('success'),
                  k.success(s('userManagement.saveUserMetaSuccess')))
              } catch (r) {
                ;(console.error(r), k.error(s('userManagement.saveUserMetaFailed')))
              } finally {
                h.value = !1
              }
            }
          })
        },
        V = () => {
          m.value.images.push({ label: '', value: '' })
        },
        q = (i) => {
          m.value.images.splice(i, 1)
        },
        U = v(null),
        O = (i, r) => {
          i.dataTransfer && ((i.dataTransfer.effectAllowed = 'move'), (U.value = r))
        },
        I = (i) => {
          ;(i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = 'move'))
        },
        f = (i, r) => {
          if ((i.preventDefault(), U.value !== null && U.value !== r)) {
            const d = m.value.images[U.value]
            ;(m.value.images.splice(U.value, 1), m.value.images.splice(r, 0, d), (U.value = r))
          }
        },
        D = () => {
          U.value = null
        }
      return (
        de(
          () => C.visible,
          (i) => {
            i && R()
          },
          { immediate: !0 }
        ),
        (i, r) => {
          const d = _('el-input'),
            w = _('el-form-item'),
            L = _('el-icon'),
            M = _('el-button'),
            X = _('el-form'),
            Y = _('el-dialog'),
            E = te('loading')
          return (
            $(),
            x(
              Y,
              {
                'model-value': N.visible,
                title: u(s)('userManagement.userConfigInfoTitle'),
                width: '600px',
                'onUpdate:modelValue': r[6] || (r[6] = (g) => i.$emit('update:visible', g))
              },
              {
                footer: l(() => [
                  e(
                    M,
                    { onClick: r[5] || (r[5] = (g) => i.$emit('update:visible', !1)) },
                    { default: l(() => [c(p(u(s)('common.cancel')), 1)]), _: 1 }
                  ),
                  e(
                    M,
                    { type: 'primary', onClick: b, loading: h.value },
                    { default: l(() => [c(p(u(s)('common.save')), 1)]), _: 1 },
                    8,
                    ['loading']
                  )
                ]),
                default: l(() => [
                  se(
                    ($(),
                    x(
                      X,
                      {
                        ref_key: 'formRef',
                        ref: A,
                        model: m.value,
                        rules: F,
                        'label-width': '120px'
                      },
                      {
                        default: l(() => [
                          e(
                            w,
                            { label: u(s)('userManagement.userAlias'), prop: 'user_alias' },
                            {
                              default: l(() => [
                                e(
                                  d,
                                  {
                                    modelValue: m.value.user_alias,
                                    'onUpdate:modelValue':
                                      r[0] || (r[0] = (g) => (m.value.user_alias = g)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: u(s)('userManagement.enterUserAlias')
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
                          e(
                            w,
                            { label: u(s)('userManagement.groupName'), prop: 'group_name' },
                            {
                              default: l(() => [
                                e(
                                  d,
                                  {
                                    modelValue: m.value.group_name,
                                    'onUpdate:modelValue':
                                      r[1] || (r[1] = (g) => (m.value.group_name = g)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: u(s)('userManagement.enterGroupName')
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
                          e(
                            w,
                            { label: u(s)('userManagement.specCode'), prop: 'specificationCode' },
                            {
                              default: l(() => [
                                e(
                                  d,
                                  {
                                    modelValue: m.value.specificationCode,
                                    'onUpdate:modelValue':
                                      r[2] || (r[2] = (g) => (m.value.specificationCode = g)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: u(s)('userManagement.enterSpecCode')
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
                          e(
                            w,
                            { label: u(s)('userManagement.clusterName'), prop: 'cluster_name' },
                            {
                              default: l(() => [
                                e(
                                  d,
                                  {
                                    modelValue: m.value.cluster_name,
                                    'onUpdate:modelValue':
                                      r[3] || (r[3] = (g) => (m.value.cluster_name = g)),
                                    modelModifiers: { trim: !0 },
                                    placeholder: u(s)('userManagement.enterClusterName')
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
                          e(
                            w,
                            { label: u(s)('userManagement.imageSelection') },
                            {
                              default: l(() => [
                                ($(!0),
                                G(
                                  Ye,
                                  null,
                                  Xe(
                                    m.value.images,
                                    (g, B) => (
                                      $(),
                                      G(
                                        'div',
                                        {
                                          key: B,
                                          class: Ze(['image-row', { dragging: U.value === B }]),
                                          style: {
                                            'margin-bottom': '10px',
                                            display: 'flex',
                                            'align-items': 'center'
                                          },
                                          draggable: 'true',
                                          onDragstart: (T) => O(T, B),
                                          onDragover: r[4] || (r[4] = (T) => I(T)),
                                          onDrop: (T) => f(T, B),
                                          onDragend: D
                                        },
                                        [
                                          da,
                                          e(
                                            d,
                                            {
                                              modelValue: g.label,
                                              'onUpdate:modelValue': (T) => (g.label = T),
                                              modelModifiers: { trim: !0 },
                                              placeholder: u(s)('userManagement.enterImageName'),
                                              style: { 'margin-right': '10px', flex: '1' }
                                            },
                                            null,
                                            8,
                                            ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                          ),
                                          e(
                                            d,
                                            {
                                              modelValue: g.value,
                                              'onUpdate:modelValue': (T) => (g.value = T),
                                              modelModifiers: { trim: !0 },
                                              placeholder: u(s)('userManagement.enterImageId'),
                                              style: { 'margin-right': '10px', flex: '1' }
                                            },
                                            null,
                                            8,
                                            ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                          ),
                                          e(
                                            d,
                                            {
                                              modelValue: g.version,
                                              'onUpdate:modelValue': (T) => (g.version = T),
                                              modelModifiers: { trim: !0 },
                                              placeholder: u(s)('userManagement.enterImageVersion'),
                                              style: { 'margin-right': '10px', flex: '1' }
                                            },
                                            null,
                                            8,
                                            ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                          ),
                                          e(
                                            M,
                                            { onClick: (T) => q(B), type: 'danger', circle: '' },
                                            {
                                              default: l(() => [
                                                e(L, null, { default: l(() => [e(u(Te))]), _: 1 })
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          )
                                        ],
                                        42,
                                        ia
                                      )
                                    )
                                  ),
                                  128
                                )),
                                e(
                                  M,
                                  { onClick: V, type: 'primary' },
                                  {
                                    default: l(() => [
                                      e(L, null, { default: l(() => [e(u(De))]), _: 1 }),
                                      c(p(u(s)('userManagement.addImage')), 1)
                                    ]),
                                    _: 1
                                  }
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
                      ['model', 'rules']
                    )),
                    [[E, h.value]]
                  )
                ]),
                _: 1
              },
              8,
              ['model-value', 'title']
            )
          )
        }
      )
    }
  })
const ca = le(ma, [['__scopeId', 'data-v-93c375a8']]),
  pa = W({
    __name: 'VirtualNumbersStatsDrawer',
    props: { visible: { type: Boolean }, userId: {} },
    emits: ['update:visible'],
    setup(N, { emit: o }) {
      const { t: s } = J(),
        C = N,
        y = o,
        m = v({ total_count: 0, active_count: 0, inactive_count: 0 }),
        F = v(!1),
        A = () => {
          const b = new Date(),
            V = new Date()
          return (
            V.setMonth(V.getMonth() - 1),
            { start_time: V.toISOString(), end_time: b.toISOString() }
          )
        },
        h = async () => {
          if (C.userId) {
            F.value = !0
            try {
              const b = A(),
                V = { user_id: C.userId, ...b },
                q = await Be(V)
              m.value = q.length ? q[0] : {}
            } catch (b) {
              ;(console.error(b), k.error(s('userManagement.getStatsFailed')))
            } finally {
              F.value = !1
            }
          }
        },
        R = () => {
          y('update:visible', !1)
        }
      return (
        de(
          () => C.visible,
          (b) => {
            b && h()
          },
          { immediate: !0 }
        ),
        (b, V) => {
          const q = _('el-descriptions-item'),
            U = _('el-descriptions'),
            O = _('el-drawer'),
            I = te('loading')
          return (
            $(),
            x(
              O,
              {
                modelValue: C.visible,
                'onUpdate:modelValue': V[0] || (V[0] = (f) => (C.visible = f)),
                title: u(s)('userManagement.virtualNumbersStatsTitle'),
                direction: 'rtl',
                size: '500px',
                'before-close': R
              },
              {
                default: l(() => [
                  se(
                    ($(),
                    G('div', null, [
                      e(
                        U,
                        { title: u(s)('userManagement.statsInfo'), column: 1, border: '' },
                        {
                          default: l(() => [
                            e(
                              q,
                              { label: u(s)('userManagement.totalCount') },
                              { default: l(() => [c(p(m.value.total_requested || '0'), 1)]), _: 1 },
                              8,
                              ['label']
                            ),
                            e(
                              q,
                              { label: u(s)('userManagement.activeCount') },
                              { default: l(() => [c(p(m.value.total_active || '0'), 1)]), _: 1 },
                              8,
                              ['label']
                            ),
                            e(
                              q,
                              { label: u(s)('userManagement.receivedSmsCount') },
                              { default: l(() => [c(p(m.value.total_completed || '0'), 1)]), _: 1 },
                              8,
                              ['label']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['title']
                      )
                    ])),
                    [[I, F.value]]
                  )
                ]),
                _: 1
              },
              8,
              ['modelValue', 'title']
            )
          )
        }
      )
    }
  })
const ga = le(pa, [['__scopeId', 'data-v-e785553f']]),
  va = { class: 'user-management' },
  fa = W({
    __name: 'index',
    setup(N) {
      const { t: o } = J(),
        s = v([]),
        C = v(!1),
        y = v(!1),
        m = v(!1),
        F = v(!1),
        A = v(!1),
        h = v(!1),
        R = v(''),
        b = v({ user_id: '', username: '', is_admin: !1, can_upload: !1 }),
        V = v(!1),
        q = v(!1),
        U = v(),
        O = v(null),
        I = v(!1),
        f = v('view'),
        D = v(null),
        i = v({ owl_access_key: '', owl_secret_key: '' }),
        r = {
          owl_access_key: [
            { required: !1, message: o('userManagement.enterAccessKey'), trigger: 'blur' }
          ],
          owl_secret_key: [
            { required: !1, message: o('userManagement.enterSecretKey'), trigger: 'blur' }
          ]
        },
        d = v({ username: '', is_admin: null, is_reseller: null }),
        w = v({ page: 1, pageSize: 10, total: 0 }),
        L = [
          { text: o('userManagement.adminUser'), value: !0 },
          { text: o('userManagement.regularUser'), value: !1 }
        ],
        M = [
          { text: o('userManagement.isReseller'), value: !0 },
          { text: o('userManagement.notReseller'), value: !1 }
        ],
        { cTable: X, maxHeight: Y, handleGetTableHeight: E } = We(),
        g = async () => {
          C.value = !0
          try {
            const a = { skip: (w.value.page - 1) * 10, limit: w.value.pageSize }
            ;(d.value.username.trim() && (a.username = d.value.username.trim()),
              d.value.is_admin !== null && (a.is_admin = d.value.is_admin),
              d.value.is_reseller !== null && (a.is_reseller = d.value.is_reseller))
            const t = await ze(a)
            ;((s.value = t.items), (w.value.total = t.total))
          } catch (a) {
            console.error(a)
          } finally {
            C.value = !1
          }
        },
        B = (a) => {
          ;((R.value = a), (A.value = !0))
        },
        T = async (a) => {
          if (a)
            try {
              const t = await Le(a.id)
              b.value = { ...t, user_id: t.id }
            } catch (t) {
              ;(console.error(t), k.error(o('userManagement.getUserDetailFailed')))
              return
            }
          else b.value = { user_id: '', username: '', is_admin: !1, can_upload: !1 }
          y.value = !0
        },
        me = async () => {
          F.value = !0
          try {
            ;(await Qe(b.value), (y.value = !1), k.success(o('userManagement.saveSuccess')), g())
          } catch (a) {
            ;(console.error(a), k.error(o('userManagement.saveFailed')))
          } finally {
            F.value = !1
          }
        },
        ce = async (a) => {
          try {
            ;(await H.confirm(
              o('userManagement.confirmUpgradeToReseller'),
              o('userManagement.confirmUpgradeTitle'),
              {
                confirmButtonText: o('common.confirm'),
                cancelButtonText: o('common.cancel'),
                type: 'warning'
              }
            ),
              await Ee(a, { is_reseller: !0 }),
              k.success(o('userManagement.upgradeSuccess')),
              g())
          } catch (t) {
            console.error(t)
          }
        },
        pe = (a) => {
          ;((D.value = a), (f.value = 'view'), (I.value = !0))
        },
        ge = () => {
          ;((D.value = null), (f.value = 'create'), (I.value = !0))
        },
        ve = (a) => {
          ;((D.value = a), (f.value = 'edit'), (I.value = !0))
        },
        fe = () => {
          ;((I.value = !1), g())
        },
        _e = (a) => {
          ;((O.value = a),
            (V.value = !0),
            (i.value = {
              owl_access_key: a.owl_access_key || '',
              owl_secret_key: a.owl_secret_key || ''
            }))
        },
        ye = async () => {
          if (!(!U.value || !(await U.value.validate()))) {
            if (!O.value) {
              k.error(o('userManagement.noUserSelected'))
              return
            }
            q.value = !0
            try {
              const t = {}
              if (
                (i.value.owl_access_key && (t.owl_access_key = i.value.owl_access_key),
                i.value.owl_secret_key && (t.owl_secret_key = i.value.owl_secret_key),
                Object.keys(t).length === 0)
              ) {
                k.warning(o('userManagement.fillAtLeastOneKeyField'))
                return
              }
              ;(await Pe(O.value.id, t),
                k.success(o('userManagement.setOwlKeysSuccess')),
                g(),
                re())
            } catch (t) {
              ;(console.error('设置代理密钥失败:', t),
                k.error(o('userManagement.setOwlKeysFailed')))
            } finally {
              q.value = !1
            }
          }
        },
        ne = Ae(() => {
          ;((w.value.page = 1), g())
        }, 500),
        be = (a) => {
          ;(a.is_admin ? (d.value.is_admin = a.is_admin[0]) : (d.value.is_admin = null),
            a.is_reseller ? (d.value.is_reseller = a.is_reseller[0]) : (d.value.is_reseller = null),
            (w.value.page = 1),
            g())
        },
        re = () => {
          var a
          ;((V.value = !1),
            (O.value = null),
            (a = U.value) == null || a.resetFields(),
            (i.value = { owl_access_key: '', owl_secret_key: '' }))
        },
        Me = async (a) => {
          try {
            const t = await He(a.username)
            H.alert(
              ''.concat(t, '<br/>').concat(o('userManagement.secCodeWarning')),
              o('userManagement.viewSecCode'),
              {
                confirmButtonText: o('common.confirm'),
                type: 'warning',
                dangerouslyUseHTMLString: !0
              }
            )
          } catch (t) {
            ;(console.error(t), k.error(o('userManagement.getSecCodeFailed')))
          }
        },
        we = async (a) => {
          try {
            const { value: t } = await H.prompt(
              o('userManagement.enterNewSecCode'),
              o('userManagement.resetSecCode'),
              {
                confirmButtonText: o('common.confirm'),
                cancelButtonText: o('common.cancel'),
                inputPattern: /^.{6,}$/,
                inputErrorMessage: o('userManagement.secCodeLengthError')
              }
            )
            ;(await je(a.id, t), k.success(o('userManagement.resetSecCodeSuccess')))
          } catch (t) {
            t !== 'cancel' &&
              t !== 'close' &&
              (console.error(t), k.error(o('userManagement.resetSecCodeFailed')))
          }
        },
        ke = async (a) => {
          try {
            await H.confirm(o('userManagement.confirmSwitchUser'), o('userManagement.switchUser'), {
              confirmButtonText: o('common.confirm'),
              cancelButtonText: o('common.cancel'),
              type: 'warning'
            })
            const t = await Ge(a)
            Ne().changeUser(t.access_token)
          } catch (t) {
            t !== 'cancel' &&
              t !== 'close' &&
              (console.error(t), k.error(o('userManagement.switchUserFailed')))
          }
        },
        Ce = async (a) => {
          try {
            const t = !a.can_create_instances,
              S = o(t ? 'userManagement.enable' : 'userManagement.disable')
            ;(await H.confirm(
              o('userManagement.confirmToggleInstanceCreation', {
                action: S,
                username: a.username
              }),
              o('userManagement.toggleInstanceCreation'),
              {
                confirmButtonText: o('common.confirm'),
                cancelButtonText: o('common.cancel'),
                type: 'warning'
              }
            ),
              await Je(a.id, { can_create_instances: t }),
              k.success(o('userManagement.toggleInstanceCreationSuccess')),
              g())
          } catch (t) {
            t !== 'cancel' &&
              t !== 'close' &&
              (console.error(t), k.error(o('userManagement.toggleInstanceCreationFailed')))
          }
        }
      return (
        ta(() => {
          ;(g(), E(), window.addEventListener('resize', E))
        }),
        sa(() => {
          window.removeEventListener('resize', E)
        }),
        (a, t) => {
          const S = _('el-button'),
            P = _('el-input'),
            Ve = _('PageBanner'),
            z = _('el-table-column'),
            Z = _('el-tag'),
            Ue = _('el-icon'),
            Q = _('el-dropdown-item'),
            Se = _('el-dropdown-menu'),
            $e = _('el-dropdown'),
            he = _('el-table'),
            Ie = _('el-pagination'),
            j = _('el-form-item'),
            oe = _('el-form'),
            ue = _('el-dialog'),
            qe = te('loading')
          return (
            $(),
            G('div', va, [
              e(
                Ve,
                { title: '' },
                {
                  extra: l(() => [
                    e(
                      P,
                      {
                        modelValue: d.value.username,
                        'onUpdate:modelValue': t[1] || (t[1] = (n) => (d.value.username = n)),
                        placeholder: a.$t('userManagement.searchPlaceholder'),
                        style: { width: '300px', 'margin-right': '10px' },
                        clearable: '',
                        onInput: u(ne)
                      },
                      {
                        append: l(() => [
                          e(
                            S,
                            {
                              onClick:
                                t[0] ||
                                (t[0] = () => {
                                  ;((d.value.username = ''), u(ne)())
                                })
                            },
                            {
                              default: l(() => [c(p(a.$t('userManagement.clearSearch')), 1)]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['modelValue', 'placeholder', 'onInput']
                    ),
                    e(
                      S,
                      { type: 'primary', onClick: t[2] || (t[2] = (n) => (m.value = !0)) },
                      { default: l(() => [c(p(a.$t('userManagement.addUser')), 1)]), _: 1 }
                    ),
                    e(
                      S,
                      { type: 'success', onClick: ge },
                      { default: l(() => [c(p(a.$t('quotaManagement.createQuota')), 1)]), _: 1 }
                    ),
                    e(
                      S,
                      { icon: 'RefreshRight', onClick: g },
                      { default: l(() => [c(p(a.$t('userManagement.refresh')), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              ),
              se(
                ($(),
                x(
                  he,
                  {
                    ref_key: 'cTable',
                    ref: X,
                    data: s.value,
                    style: { width: '100%', 'margin-top': '20px' },
                    'max-height': u(Y),
                    onFilterChange: be
                  },
                  {
                    default: l(() => [
                      e(z, { prop: 'id', label: a.$t('userManagement.userId') }, null, 8, [
                        'label'
                      ]),
                      e(z, { prop: 'username', label: a.$t('userManagement.username') }, null, 8, [
                        'label'
                      ]),
                      e(
                        z,
                        {
                          prop: 'is_admin',
                          label: a.$t('userManagement.admin'),
                          'column-key': 'is_admin',
                          filters: L,
                          'filter-multiple': !1
                        },
                        {
                          default: l(({ row: n }) => [
                            e(
                              Z,
                              { type: n.is_admin ? 'success' : 'info' },
                              {
                                default: l(() => [
                                  c(
                                    p(
                                      n.is_admin
                                        ? a.$t('userManagement.yes')
                                        : a.$t('userManagement.no')
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
                      e(
                        z,
                        {
                          prop: 'is_reseller',
                          label: a.$t('userManagement.reseller'),
                          'column-key': 'is_reseller',
                          filters: M,
                          'filter-multiple': !1
                        },
                        {
                          default: l(({ row: n }) => [
                            e(
                              Z,
                              { type: n.is_reseller ? 'success' : 'info' },
                              {
                                default: l(() => [
                                  c(
                                    p(
                                      n.is_reseller
                                        ? a.$t('userManagement.yes')
                                        : a.$t('userManagement.no')
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
                      e(
                        z,
                        {
                          prop: 'can_create_instances',
                          label: a.$t('userManagement.instanceCreationPermission')
                        },
                        {
                          default: l(({ row: n }) => [
                            e(
                              Z,
                              { type: n.can_create_instances ? 'success' : 'danger' },
                              {
                                default: l(() => [
                                  c(
                                    p(
                                      n.can_create_instances
                                        ? a.$t('userManagement.enable')
                                        : a.$t('userManagement.disable')
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
                      e(
                        z,
                        {
                          prop: 'quota.max_launches_override',
                          label: a.$t('userManagement.maxLaunchesOverride'),
                          width: '120'
                        },
                        {
                          default: l(({ row: n }) => {
                            var K
                            return [
                              c(
                                p(
                                  ((K = n.quota) == null ? void 0 : K.max_launches_override) || '-'
                                ),
                                1
                              )
                            ]
                          }),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      e(
                        z,
                        {
                          label: a.$t('userManagement.operations'),
                          width: '500',
                          fixed: 'right',
                          'class-name': 'operation-column'
                        },
                        {
                          default: l(({ row: n }) => [
                            e(
                              S,
                              { type: 'primary', link: '', onClick: (K) => T(n) },
                              { default: l(() => [c(p(a.$t('userManagement.edit')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                            e(
                              S,
                              {
                                type: n.can_create_instances ? 'danger' : 'success',
                                link: '',
                                onClick: (K) => Ce(n)
                              },
                              {
                                default: l(() => [
                                  c(
                                    p(
                                      n.can_create_instances
                                        ? a.$t('userManagement.disableInstanceCreation')
                                        : a.$t('userManagement.enableInstanceCreation')
                                    ),
                                    1
                                  )
                                ]),
                                _: 2
                              },
                              1032,
                              ['type', 'onClick']
                            ),
                            e(
                              S,
                              { type: 'primary', link: '', onClick: (K) => _e(n) },
                              {
                                default: l(() => [c(p(a.$t('userManagement.setOwlKeys')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            e(
                              S,
                              { type: 'info', link: '', onClick: (K) => pe(n) },
                              {
                                default: l(() => [c(p(a.$t('quotaManagement.viewQuota')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            e(
                              S,
                              { type: 'warning', link: '', onClick: (K) => ve(n) },
                              {
                                default: l(() => [c(p(a.$t('quotaManagement.editQuota')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            e(
                              $e,
                              null,
                              {
                                dropdown: l(() => [
                                  e(
                                    Se,
                                    null,
                                    {
                                      default: l(() => [
                                        e(
                                          Q,
                                          { onClick: (K) => B(n.id) },
                                          {
                                            default: l(() => [
                                              c(p(a.$t('userManagement.userConfigInfo')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        e(
                                          Q,
                                          {
                                            onClick: () => {
                                              ;((R.value = n.id), (h.value = !0))
                                            }
                                          },
                                          {
                                            default: l(() => [
                                              c(p(a.$t('userManagement.virtualNumbersStats')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        n.is_reseller
                                          ? na('', !0)
                                          : ($(),
                                            x(
                                              Q,
                                              { key: 0, onClick: (K) => ce(n.id) },
                                              {
                                                default: l(() => [
                                                  c(p(a.$t('userManagement.upgradeToReseller')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            )),
                                        e(
                                          Q,
                                          { onClick: (K) => Me(n) },
                                          {
                                            default: l(() => [
                                              c(p(a.$t('userManagement.viewSecCode')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        e(
                                          Q,
                                          { onClick: (K) => we(n) },
                                          {
                                            default: l(() => [
                                              c(p(a.$t('userManagement.resetSecCode')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        e(
                                          Q,
                                          { onClick: (K) => ke(n.id) },
                                          {
                                            default: l(() => [
                                              c(p(a.$t('userManagement.switchUser')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1024
                                  )
                                ]),
                                default: l(() => [
                                  e(
                                    S,
                                    {
                                      style: { 'margin-top': '3px', 'margin-left': '10px' },
                                      type: 'primary',
                                      link: ''
                                    },
                                    {
                                      default: l(() => [
                                        c(p(a.$t('userManagement.more')), 1),
                                        e(
                                          Ue,
                                          { class: 'el-icon--right' },
                                          { default: l(() => [e(u(Re))]), _: 1 }
                                        )
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 2
                              },
                              1024
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
                [[qe, C.value]]
              ),
              e(
                Ie,
                {
                  'current-page': w.value.page,
                  'onUpdate:currentPage': t[3] || (t[3] = (n) => (w.value.page = n)),
                  'page-size': w.value.pageSize,
                  'onUpdate:pageSize': t[4] || (t[4] = (n) => (w.value.pageSize = n)),
                  total: w.value.total,
                  layout: 'total, sizes, prev, pager, next',
                  'page-sizes': [10, 20, 50, 100],
                  onCurrentChange: g,
                  onSizeChange: g,
                  style: { 'margin-top': '20px', 'text-align': 'right' }
                },
                null,
                8,
                ['current-page', 'page-size', 'total']
              ),
              e(
                ue,
                {
                  modelValue: y.value,
                  'onUpdate:modelValue': t[8] || (t[8] = (n) => (y.value = n)),
                  title: a.$t('userManagement.userInfo'),
                  width: '500px'
                },
                {
                  footer: l(() => [
                    e(
                      S,
                      { onClick: t[7] || (t[7] = (n) => (y.value = !1)) },
                      { default: l(() => [c(p(a.$t('common.cancel')), 1)]), _: 1 }
                    ),
                    e(
                      S,
                      { type: 'primary', onClick: me, loading: F.value },
                      { default: l(() => [c(p(a.$t('userManagement.save')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  default: l(() => [
                    e(
                      oe,
                      { model: b.value, 'label-width': '100px' },
                      {
                        default: l(() => [
                          e(
                            j,
                            { label: a.$t('userManagement.username') },
                            {
                              default: l(() => [
                                e(
                                  P,
                                  {
                                    modelValue: b.value.username,
                                    'onUpdate:modelValue':
                                      t[5] || (t[5] = (n) => (b.value.username = n))
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
                          e(
                            j,
                            { label: a.$t('userManagement.password') },
                            {
                              default: l(() => [
                                e(
                                  P,
                                  {
                                    modelValue: b.value.password,
                                    'onUpdate:modelValue':
                                      t[6] || (t[6] = (n) => (b.value.password = n)),
                                    type: 'password'
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
              e(
                ga,
                {
                  visible: h.value,
                  'onUpdate:visible': t[9] || (t[9] = (n) => (h.value = n)),
                  'user-id': R.value
                },
                null,
                8,
                ['visible', 'user-id']
              ),
              e(
                oa,
                {
                  visible: m.value,
                  'onUpdate:visible': t[10] || (t[10] = (n) => (m.value = n)),
                  onSuccess: g
                },
                null,
                8,
                ['visible']
              ),
              e(
                ca,
                {
                  visible: A.value,
                  'user-id': R.value,
                  'onUpdate:visible': t[11] || (t[11] = (n) => (A.value = n)),
                  onSuccess: g
                },
                null,
                8,
                ['visible', 'user-id']
              ),
              e(
                ue,
                {
                  modelValue: V.value,
                  'onUpdate:modelValue': t[14] || (t[14] = (n) => (V.value = n)),
                  title: a.$t('userManagement.setOwlKeys'),
                  width: '500px'
                },
                {
                  footer: l(() => [
                    e(
                      S,
                      { onClick: re },
                      { default: l(() => [c(p(a.$t('common.cancel')), 1)]), _: 1 }
                    ),
                    e(
                      S,
                      { type: 'primary', onClick: ye, loading: q.value },
                      { default: l(() => [c(p(a.$t('userManagement.save')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  default: l(() => [
                    e(
                      oe,
                      {
                        ref_key: 'owlKeysFormRef',
                        ref: U,
                        model: i.value,
                        rules: r,
                        'label-width': '120px'
                      },
                      {
                        default: l(() => [
                          e(
                            j,
                            { label: a.$t('userManagement.accessKey'), prop: 'owl_access_key' },
                            {
                              default: l(() => [
                                e(
                                  P,
                                  {
                                    modelValue: i.value.owl_access_key,
                                    'onUpdate:modelValue':
                                      t[12] || (t[12] = (n) => (i.value.owl_access_key = n)),
                                    placeholder: a.$t('userManagement.enterAccessKey')
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
                          e(
                            j,
                            { label: a.$t('userManagement.secretKey'), prop: 'owl_secret_key' },
                            {
                              default: l(() => [
                                e(
                                  P,
                                  {
                                    modelValue: i.value.owl_secret_key,
                                    'onUpdate:modelValue':
                                      t[13] || (t[13] = (n) => (i.value.owl_secret_key = n)),
                                    type: 'password',
                                    placeholder: a.$t('userManagement.enterSecretKey'),
                                    'show-password': ''
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
              e(
                ra,
                {
                  visible: I.value,
                  mode: f.value,
                  user: D.value,
                  'onUpdate:visible': t[15] || (t[15] = (n) => (I.value = n)),
                  onSuccess: fe
                },
                null,
                8,
                ['visible', 'mode', 'user']
              )
            ])
          )
        }
      )
    }
  })
const Va = le(fa, [['__scopeId', 'data-v-2a4e9338']])
export { Va as default }
