import { q as G, h as K, _ as te, P as Se } from './index-ae33a03d.js'
import { u as De } from './useTableHeightFit-d4c36563.js'
import { G as A, E as h, e as xe } from './element-74718691.js'
import {
  y as W,
  r as g,
  R as O,
  d as E,
  a8 as m,
  f as z,
  G as Q,
  H as t,
  N as a,
  L as M,
  M as U,
  u as s,
  b as me,
  h as ge,
  a0 as Be,
  F as ke,
  i as j,
  ag as oe,
  I as re,
  Q as Ie
} from './vue-66851fce.js'
import { g as Te } from './index-c0fb52a7.js'
import { Q as Le } from './QuotaManagementDialog-2942165c.js'
import './vxe-562f9a54.js'
function Fe(f) {
  return G({ url: '/resellers/sub-users/', method: 'get', params: f, baseURL: '/cpyservice' })
}
function Re(f) {
  return G({ url: '/resellers/sub-users/', method: 'post', data: f, baseURL: '/cpyservice' })
}
function $e(f, n) {
  return G({
    url: '/resellers/sub-users/reset-password/'.concat(f),
    method: 'put',
    data: n,
    baseURL: '/cpyservice'
  })
}
function Pe(f, n) {
  return G({
    url: '/resellers/sub-users/'.concat(f, '/quota'),
    method: 'put',
    data: n,
    baseURL: '/cpyservice'
  })
}
function ze(f) {
  return G({
    url: '/resellers/transfer-group/'.concat(f.group_uuid, '/to-sub-user/').concat(f.sub_user_id),
    method: 'put',
    baseURL: '/cpyservice'
  })
}
function ie(f, n) {
  return G({
    url: '/resellers/sub-users/'.concat(f, '/status'),
    method: 'put',
    data: n,
    baseURL: '/cpyservice'
  })
}
function qe(f, n) {
  return G({
    url: '/users/'.concat(f, '/can_create_instances'),
    method: 'patch',
    data: n,
    baseURL: '/cpyservice'
  })
}
const Ae = W({
    __name: 'CreateUserDialog',
    props: { modelValue: { type: Boolean }, title: {} },
    emits: ['update:modelValue', 'success'],
    setup(f, { emit: n }) {
      const { t: e } = K(),
        S = f,
        x = n,
        p = g(!1),
        C = g()
      g(!1)
      const B = g(!1),
        u = O({
          username: '',
          password: '',
          user_alias: '',
          sec_code: '',
          phone: '',
          xhost: 'openapi-hk.armcloud.net'
        }),
        v = {
          username: [
            { required: !0, message: e('subUserManagement.usernameRequired'), trigger: 'blur' }
          ],
          password: [
            { required: !0, message: e('subUserManagement.passwordRequired'), trigger: 'blur' },
            { min: 6, message: e('subUserManagement.passwordMinLength'), trigger: 'blur' }
          ],
          user_alias: [
            { required: !0, message: e('subUserManagement.userAliasRequired'), trigger: 'blur' }
          ],
          phone: [
            { required: !0, message: e('subUserManagement.phoneRequired'), trigger: 'blur' },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: e('subUserManagement.phoneFormatError'),
              trigger: 'blur'
            }
          ]
        }
      ;(E(
        () => S.modelValue,
        (D) => {
          ;((p.value = D), D && i())
        }
      ),
        E(p, (D) => {
          x('update:modelValue', D)
        }))
      const i = () => {
          ;(C.value && C.value.resetFields(),
            Object.assign(u, {
              username: '',
              password: '',
              user_alias: '',
              sec_code: '',
              phone: '',
              xhost: 'openapi-hk.armcloud.net'
            }))
        },
        w = (D) => {
          D()
        },
        L = () => {
          p.value = !1
        },
        T = async () => {
          if (C.value) {
            B.value = !0
            try {
              await C.value.validate()
              const D = {
                  addDTOList: [
                    {
                      customerAccount: u.username,
                      customerName: u.user_alias,
                      customerTel: u.phone || ''
                    }
                  ]
                },
                r = {
                  username: u.username,
                  password: u.password,
                  phone_number: u.phone,
                  user_alias: u.user_alias,
                  sec_code: u.sec_code || void 0,
                  xhost: u.xhost
                },
                _ = await Re(r)
              ;((p.value = !1),
                await A.alert(
                  e('subUserManagement.createSuccessMessage', {
                    username: u.username,
                    password: _.password
                  }),
                  e('subUserManagement.createSuccess'),
                  {
                    confirmButtonText: e('subUserManagement.confirmButton'),
                    type: 'success',
                    showClose: !1,
                    dangerouslyUseHTMLString: !1
                  }
                ))
              try {
                ;(await A.confirm(
                  e('subUserManagement.confirmPasswordSave'),
                  e('subUserManagement.confirmPasswordSaveTitle'),
                  {
                    confirmButtonText: e('subUserManagement.savedContinue'),
                    cancelButtonText: e('subUserManagement.backToView'),
                    type: 'warning'
                  }
                ),
                  i(),
                  (p.value = !1),
                  x('success'))
              } catch (k) {
                ;(await A.alert(
                  e('subUserManagement.passwordInfoMessage', {
                    username: u.username,
                    password: _.password
                  }),
                  e('subUserManagement.passwordInfo'),
                  {
                    confirmButtonText: e('subUserManagement.savedButton'),
                    type: 'warning',
                    showClose: !1,
                    dangerouslyUseHTMLString: !1
                  }
                ),
                  x('success'))
              }
            } catch (D) {
            } finally {
              B.value = !1
            }
          }
        }
      return (D, r) => {
        const _ = m('el-input'),
          k = m('el-form-item'),
          $ = m('el-form'),
          F = m('el-button'),
          o = m('el-dialog')
        return (
          z(),
          Q(
            o,
            {
              title: D.title,
              modelValue: p.value,
              'onUpdate:modelValue': r[4] || (r[4] = (l) => (p.value = l)),
              width: '500px',
              'before-close': w
            },
            {
              footer: t(() => [
                a(
                  F,
                  { onClick: L },
                  { default: t(() => [M(U(s(e)('subUserManagement.cancelButton')), 1)]), _: 1 }
                ),
                a(
                  F,
                  { type: 'primary', loading: B.value, onClick: T },
                  { default: t(() => [M(U(s(e)('subUserManagement.confirmButton')), 1)]), _: 1 },
                  8,
                  ['loading']
                )
              ]),
              default: t(() => [
                a(
                  $,
                  { ref_key: 'formRef', ref: C, model: u, rules: v, 'label-width': '100px' },
                  {
                    default: t(() => [
                      a(
                        k,
                        { label: s(e)('subUserManagement.usernameLabel'), prop: 'username' },
                        {
                          default: t(() => [
                            a(
                              _,
                              {
                                modelValue: u.username,
                                'onUpdate:modelValue': r[0] || (r[0] = (l) => (u.username = l)),
                                placeholder: s(e)('subUserManagement.usernamePlaceholder')
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
                        k,
                        { label: s(e)('subUserManagement.userAliasLabel'), prop: 'user_alias' },
                        {
                          default: t(() => [
                            a(
                              _,
                              {
                                modelValue: u.user_alias,
                                'onUpdate:modelValue': r[1] || (r[1] = (l) => (u.user_alias = l)),
                                placeholder: s(e)('subUserManagement.userAliasPlaceholder')
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
                        k,
                        { label: s(e)('subUserManagement.phoneLabel'), prop: 'phone' },
                        {
                          default: t(() => [
                            a(
                              _,
                              {
                                modelValue: u.phone,
                                'onUpdate:modelValue': r[2] || (r[2] = (l) => (u.phone = l)),
                                placeholder: s(e)('subUserManagement.phonePlaceholder')
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
                        k,
                        { label: s(e)('subUserManagement.secCodeLabel'), prop: 'sec_code' },
                        {
                          default: t(() => [
                            a(
                              _,
                              {
                                modelValue: u.sec_code,
                                'onUpdate:modelValue': r[3] || (r[3] = (l) => (u.sec_code = l)),
                                placeholder: s(e)('subUserManagement.secCodePlaceholder')
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
        )
      }
    }
  }),
  Qe = W({
    __name: 'ResetPasswordDialog',
    props: { modelValue: { type: Boolean }, title: {}, userId: {}, username: {} },
    emits: ['update:modelValue', 'success'],
    setup(f, { emit: n }) {
      const { t: e } = K(),
        S = f,
        x = n,
        p = g(!1),
        C = g(!1),
        B = g(!1),
        u = g(),
        v = O({ new_password: '' }),
        i = {
          new_password: [
            { required: !0, message: e('subUserManagement.newPasswordRequired'), trigger: 'blur' },
            { min: 6, message: e('subUserManagement.passwordMinLength'), trigger: 'blur' }
          ]
        }
      ;(E(
        () => S.modelValue,
        (r) => {
          ;((p.value = r), r && w())
        }
      ),
        E(p, (r) => {
          x('update:modelValue', r)
        }))
      const w = () => {
          ;(u.value && u.value.resetFields(), (v.new_password = ''), (B.value = !1))
        },
        L = (r) => {
          v.new_password
            ? A.confirm(e('subUserManagement.closeConfirmUnsaved'), e('subUserManagement.tip'), {
                confirmButtonText: e('subUserManagement.confirmButton'),
                cancelButtonText: e('subUserManagement.cancelButton'),
                type: 'warning'
              })
                .then(() => {
                  ;(w(), r ? r() : (p.value = !1))
                })
                .catch(() => {})
            : (w(), r ? r() : (p.value = !1))
        },
        T = () => {
          L()
        },
        D = async () => {
          if (!(!u.value || !(await u.value.validate()))) {
            if (!S.userId) {
              h.error(e('subUserManagement.userIdRequired'))
              return
            }
            C.value = !0
            try {
              ;(await $e(S.userId, { ...v }),
                h.success(e('subUserManagement.resetPasswordSuccess')),
                w(),
                (p.value = !1),
                x('success'))
            } catch (_) {
              ;(console.error('重置密码失败:', _),
                h.error(e('subUserManagement.resetPasswordFailed')))
            } finally {
              C.value = !1
            }
          }
        }
      return (r, _) => {
        const k = m('el-input'),
          $ = m('el-form-item'),
          F = m('el-form'),
          o = m('el-button'),
          l = m('el-dialog')
        return (
          z(),
          Q(
            l,
            {
              title: r.title,
              modelValue: p.value,
              'onUpdate:modelValue': _[1] || (_[1] = (q) => (p.value = q)),
              width: '400px',
              'before-close': L
            },
            {
              footer: t(() => [
                a(
                  o,
                  { onClick: T },
                  { default: t(() => [M(U(s(e)('subUserManagement.cancelButton')), 1)]), _: 1 }
                ),
                a(
                  o,
                  { type: 'primary', loading: C.value, onClick: D },
                  { default: t(() => [M(U(s(e)('subUserManagement.confirmButton')), 1)]), _: 1 },
                  8,
                  ['loading']
                )
              ]),
              default: t(() => [
                a(
                  F,
                  { ref_key: 'formRef', ref: u, model: v, rules: i, 'label-width': '100px' },
                  {
                    default: t(() => [
                      a(
                        $,
                        { label: s(e)('subUserManagement.newPasswordLabel'), prop: 'new_password' },
                        {
                          default: t(() => [
                            a(
                              k,
                              {
                                modelValue: v.new_password,
                                'onUpdate:modelValue': _[0] || (_[0] = (q) => (v.new_password = q)),
                                type: B.value ? 'text' : 'password',
                                placeholder: s(e)('subUserManagement.newPasswordPlaceholder'),
                                'show-password': ''
                              },
                              null,
                              8,
                              ['modelValue', 'type', 'placeholder']
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
    }
  })
const Ge = te(Qe, [['__scopeId', 'data-v-cf590988']]),
  Ee = { style: { float: 'left' } },
  Ne = W({
    __name: 'TransferGroupDialog',
    props: {
      modelValue: { type: Boolean, default: !1 },
      title: { type: String, default: '转让分组' },
      userId: { type: String, required: !0 },
      username: { type: String, required: !0 }
    },
    emits: ['update:modelValue', 'success'],
    setup(f, { emit: n }) {
      const { t: e } = K(),
        S = f,
        x = n,
        p = g(!1),
        C = g(!1),
        B = g(!1),
        u = g(),
        v = g([]),
        i = O({ group_uuid: '' }),
        w = {
          group_uuid: [
            { required: !0, message: e('subUserManagement.selectGroupRequired'), trigger: 'change' }
          ]
        }
      ;(E(
        () => S.modelValue,
        (r) => {
          ;((p.value = r), r && (L(), (i.group_uuid = '')))
        }
      ),
        E(p, (r) => {
          x('update:modelValue', r)
        }))
      const L = async () => {
          try {
            B.value = !0
            const r = await Te()
            v.value = r.items || r
          } catch (r) {
            ;(console.error('获取分组列表失败:', r),
              h.error(e('subUserManagement.getGroupListFailed')))
          } finally {
            B.value = !1
          }
        },
        T = async () => {
          if (u.value)
            try {
              if (!(await u.value.validate())) return
              ;((C.value = !0),
                await ze({ group_uuid: i.group_uuid, sub_user_id: S.userId }),
                (p.value = !1),
                x('success'))
            } catch (r) {
              ;(console.error('转让分组失败:', r),
                h.error(e('subUserManagement.transferGroupFailed')))
            } finally {
              C.value = !1
            }
        },
        D = () => {
          u.value && u.value.resetFields()
        }
      return (
        me(() => {
          p.value = S.modelValue
        }),
        (r, _) => {
          const k = m('el-option'),
            $ = m('el-select'),
            F = m('el-form-item'),
            o = m('el-form'),
            l = m('el-button'),
            q = m('el-dialog')
          return (
            z(),
            Q(
              q,
              {
                title: f.title,
                modelValue: p.value,
                'onUpdate:modelValue': _[2] || (_[2] = (I) => (p.value = I)),
                width: '500px',
                onClose: D
              },
              {
                footer: t(() => [
                  a(
                    l,
                    { onClick: _[1] || (_[1] = (I) => (p.value = !1)) },
                    { default: t(() => [M(U(s(e)('subUserManagement.cancelButton')), 1)]), _: 1 }
                  ),
                  a(
                    l,
                    { type: 'primary', loading: C.value, onClick: T },
                    { default: t(() => [M(U(s(e)('subUserManagement.confirmButton')), 1)]), _: 1 },
                    8,
                    ['loading']
                  )
                ]),
                default: t(() => [
                  a(
                    o,
                    { ref_key: 'formRef', ref: u, model: i, rules: w, 'label-width': '100px' },
                    {
                      default: t(() => [
                        a(
                          F,
                          { label: s(e)('subUserManagement.selectGroupLabel'), prop: 'group_uuid' },
                          {
                            default: t(() => [
                              a(
                                $,
                                {
                                  modelValue: i.group_uuid,
                                  'onUpdate:modelValue': _[0] || (_[0] = (I) => (i.group_uuid = I)),
                                  placeholder: s(e)('subUserManagement.selectGroupPlaceholder'),
                                  filterable: '',
                                  style: { width: '100%' },
                                  loading: B.value
                                },
                                {
                                  default: t(() => [
                                    (z(!0),
                                    ge(
                                      ke,
                                      null,
                                      Be(
                                        v.value,
                                        (I) => (
                                          z(),
                                          Q(
                                            k,
                                            { key: I.uuid, label: I.name, value: I.uuid },
                                            {
                                              default: t(() => [j('span', Ee, U(I.name), 1)]),
                                              _: 2
                                            },
                                            1032,
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
  })
const He = te(Ne, [['__scopeId', 'data-v-451ea376']])
function je(f) {
  return G({
    url: '/openapi/open/subCustomer/resource/masterCustomer/pageList',
    method: 'post',
    data: f,
    sign: !0
  })
}
function ce(f) {
  return G({
    url: '/openapi/open/subCustomer/resource/allocate',
    method: 'post',
    data: f,
    sign: !0
  })
}
function Oe(f) {
  return G({ url: '/openapi/open/subCustomer/resource/list', method: 'post', data: f, sign: !0 })
}
function de(f) {
  return G({ url: '/openapi/open/subCustomer/resource/unbind', method: 'post', data: f, sign: !0 })
}
const Je = { class: 'device-management-container' },
  Ke = { class: 'filter-container' },
  We = { class: 'batch-operations', style: { 'margin-top': '20px', 'text-align': 'center' } },
  Xe = W({
    __name: 'DeviceManagementDrawer',
    props: {
      modelValue: { type: Boolean },
      userId: {},
      username: {},
      selectedDeviceIds: { default: () => [] }
    },
    emits: ['update:modelValue', 'success'],
    setup(f, { emit: n }) {
      const { t: e } = K(),
        S = f,
        x = n,
        p = g(!1),
        C = g(!1),
        B = g([]),
        u = g(0),
        v = g([]),
        i = O({ page: 1, rows: 10, deviceCode: '', netStorageResFlag: 1 })
      ;(E(
        () => S.modelValue,
        (o) => {
          ;((p.value = o), o && w())
        }
      ),
        E(p, (o) => {
          x('update:modelValue', o)
        }))
      const w = async () => {
          var o
          C.value = !0
          try {
            const l = await je({ ...i, netStorageResFlag: i.netStorageResFlag })
            l.code === 200
              ? ((B.value = l.data.pageData || []),
                (u.value = ((o = l.data) == null ? void 0 : o.total) || 0))
              : h.error(l.msg || e('subUserManagement.getDeviceListFailed'))
          } catch (l) {
            ;(console.error('获取板卡列表失败:', l),
              h.error(e('subUserManagement.getDeviceListFailed')))
          } finally {
            C.value = !1
          }
        },
        L = (o) => {
          v.value = o
        },
        T = () => {
          ;((i.page = 1), w())
        },
        D = () => {
          ;((i.page = 1), (i.deviceCode = ''), (i.netStorageResFlag = void 0), w())
        },
        r = (o) => {
          ;((i.rows = o), (i.page = 1), w())
        },
        _ = (o) => {
          ;((i.page = o), w())
        },
        k = async (o) => {
          try {
            ;(await A.confirm(
              e('subUserManagement.confirmAllocateSingle', {
                deviceCode: o.deviceCode,
                username: S.username
              }),
              e('subUserManagement.confirmAllocateTitle'),
              {
                confirmButtonText: e('subUserManagement.confirmButton'),
                cancelButtonText: e('subUserManagement.cancelButton'),
                type: 'warning'
              }
            ),
              await ce({ subCustomerId: parseInt(S.userId), allocateDeviceIds: [o.deviceId] }),
              h.success(e('subUserManagement.allocateSuccess')),
              x('success'),
              w())
          } catch (l) {
            l !== 'cancel' &&
              (console.error('板卡授权失败:', l), h.error(e('subUserManagement.allocateFailed')))
          }
        },
        $ = async () => {
          if (v.value.length === 0) {
            h.warning(e('subUserManagement.selectDevicesFirst'))
            return
          }
          try {
            ;(await A.confirm(
              e('subUserManagement.confirmBatchAllocate', {
                count: v.value.length,
                username: S.username
              }),
              e('subUserManagement.confirmBatchAllocateTitle'),
              {
                confirmButtonText: e('subUserManagement.confirmButton'),
                cancelButtonText: e('subUserManagement.cancelButton'),
                type: 'warning'
              }
            ),
              await ce({
                subCustomerId: parseInt(S.userId),
                allocateDeviceIds: v.value.map((o) => o.deviceId)
              }),
              h.success(e('subUserManagement.batchAllocateSuccess', { count: v.value.length })),
              x('success'),
              (v.value = []),
              w())
          } catch (o) {
            o !== 'cancel' &&
              (console.error('批量授权失败:', o),
              h.error(e('subUserManagement.batchAllocateFailed')))
          }
        },
        F = (o) => {
          ;((v.value = []), o())
        }
      return (o, l) => {
        const q = m('el-input'),
          I = m('el-form-item'),
          V = m('el-button'),
          X = m('el-form'),
          R = m('el-table-column'),
          J = m('el-tag'),
          Y = m('el-table'),
          Z = m('el-pagination'),
          ee = m('el-drawer'),
          ae = oe('loading')
        return (
          z(),
          Q(
            ee,
            {
              title: s(e)('subUserManagement.deviceManagementTitle', { username: o.username }),
              modelValue: p.value,
              'onUpdate:modelValue': l[3] || (l[3] = (y) => (p.value = y)),
              direction: 'rtl',
              size: '50%',
              'before-close': F,
              class: 'device-management-drawer'
            },
            {
              default: t(() => [
                j('div', Je, [
                  j('div', Ke, [
                    a(
                      X,
                      { model: i, inline: '' },
                      {
                        default: t(() => [
                          a(
                            I,
                            { label: s(e)('subUserManagement.deviceCodeLabel') },
                            {
                              default: t(() => [
                                a(
                                  q,
                                  {
                                    modelValue: i.deviceCode,
                                    'onUpdate:modelValue':
                                      l[0] || (l[0] = (y) => (i.deviceCode = y)),
                                    placeholder: s(e)('subUserManagement.deviceCodePlaceholder'),
                                    clearable: '',
                                    style: { width: '200px' },
                                    onChange: T
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
                          a(I, null, {
                            default: t(() => [
                              a(
                                V,
                                { type: 'primary', onClick: T },
                                {
                                  default: t(() => [
                                    M(U(s(e)('subUserManagement.searchButton')), 1)
                                  ]),
                                  _: 1
                                }
                              ),
                              a(
                                V,
                                { onClick: D },
                                {
                                  default: t(() => [
                                    M(U(s(e)('subUserManagement.resetButton')), 1)
                                  ]),
                                  _: 1
                                }
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
                  re(
                    (z(),
                    Q(
                      Y,
                      {
                        ref: 'deviceTable',
                        data: B.value,
                        fit: '',
                        'highlight-current-row': '',
                        style: { width: '100%', 'margin-top': '20px' },
                        height: '400',
                        onSelectionChange: L
                      },
                      {
                        default: t(() => [
                          a(R, { type: 'selection', width: '55' }),
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceIdLabel'),
                              prop: 'deviceId',
                              width: '100',
                              align: 'center'
                            },
                            null,
                            8,
                            ['label']
                          ),
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceCodeLabel'),
                              prop: 'deviceCode',
                              'min-width': '200'
                            },
                            null,
                            8,
                            ['label']
                          ),
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceTypeLabel'),
                              width: '120',
                              align: 'center'
                            },
                            {
                              default: t(({ row: y }) => [
                                a(
                                  J,
                                  { type: y.netStorageResFlag === 1 ? 'success' : 'primary' },
                                  {
                                    default: t(() => [
                                      M(
                                        U(
                                          y.netStorageResFlag === 1
                                            ? s(e)('subUserManagement.networkStorageDevice')
                                            : s(e)('subUserManagement.localDevice')
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
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceCreatePadStatusLabel'),
                              width: '120',
                              align: 'center'
                            },
                            {
                              default: t(({ row: y }) => [
                                a(
                                  J,
                                  { type: y.deviceCreatePadStatus === 1 ? 'success' : 'warning' },
                                  {
                                    default: t(() => [
                                      M(
                                        U(
                                          y.deviceCreatePadStatus === 1
                                            ? s(e)('subUserManagement.deviceCreatePadStatusCreated')
                                            : s(e)(
                                                'subUserManagement.deviceCreatePadStatusNotCreated'
                                              )
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
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.operation'),
                              width: '120',
                              align: 'center'
                            },
                            {
                              default: t(({ row: y }) => [
                                a(
                                  V,
                                  { link: '', type: 'primary', onClick: (ne) => k(y) },
                                  {
                                    default: t(() => [
                                      M(U(s(e)('subUserManagement.authorizeButton')), 1)
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
                      ['data']
                    )),
                    [[ae, C.value]]
                  ),
                  a(
                    Z,
                    {
                      'current-page': i.page,
                      'onUpdate:currentPage': l[1] || (l[1] = (y) => (i.page = y)),
                      'page-size': i.rows,
                      'onUpdate:pageSize': l[2] || (l[2] = (y) => (i.rows = y)),
                      'page-sizes': [10, 20, 50, 100],
                      total: u.value,
                      layout: 'total, sizes, prev, pager, next, jumper',
                      onSizeChange: r,
                      onCurrentChange: _,
                      style: { 'margin-top': '20px', 'text-align': 'right' }
                    },
                    null,
                    8,
                    ['current-page', 'page-size', 'total']
                  ),
                  j('div', We, [
                    a(
                      V,
                      { type: 'primary', disabled: v.value.length === 0, onClick: $ },
                      {
                        default: t(() => [M(U(s(e)('subUserManagement.batchAuthorizeButton')), 1)]),
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
            ['title', 'modelValue']
          )
        )
      }
    }
  })
const Ye = te(Xe, [['__scopeId', 'data-v-f0d80637']]),
  Ze = { class: 'device-unbind-container' },
  ea = { class: 'filter-container' },
  aa = { class: 'batch-operations', style: { 'margin-top': '20px', 'text-align': 'center' } },
  ta = W({
    __name: 'DeviceUnbindDrawer',
    props: { modelValue: { type: Boolean }, userId: {}, username: {} },
    emits: ['update:modelValue', 'success'],
    setup(f, { emit: n }) {
      const { t: e } = K(),
        S = f,
        x = n,
        p = g(!1),
        C = g(!1),
        B = g([]),
        u = g(0),
        v = g([]),
        i = O({ page: 1, rows: 10, deviceCode: '', netStorageResFlag: 1 })
      ;(E(
        () => S.modelValue,
        (o) => {
          ;((p.value = o), o && w())
        }
      ),
        E(p, (o) => {
          x('update:modelValue', o)
        }))
      const w = async () => {
          var o
          C.value = !0
          try {
            const l = await Oe({
              subCustomerId: parseInt(S.userId),
              deviceCode: i.deviceCode,
              netStorageResFlag: i.netStorageResFlag
            })
            l.code === 200
              ? ((B.value = l.data || []),
                (u.value = ((o = l.data) == null ? void 0 : o.length) || 0))
              : h.error(l.msg || e('subUserManagement.getDeviceListFailed'))
          } catch (l) {
            ;(console.error('获取板卡列表失败:', l),
              h.error(e('subUserManagement.getDeviceListFailed')))
          } finally {
            C.value = !1
          }
        },
        L = (o) => {
          v.value = o
        },
        T = () => {
          ;((i.page = 1), w())
        },
        D = () => {
          ;((i.page = 1), (i.deviceCode = ''), (i.netStorageResFlag = void 0), w())
        },
        r = (o) => {
          ;((i.rows = o), (i.page = 1), w())
        },
        _ = (o) => {
          ;((i.page = o), w())
        },
        k = async (o) => {
          try {
            ;(await A.confirm(
              e('subUserManagement.confirmUnbindSingle', {
                username: S.username,
                deviceCode: o.deviceCode
              }),
              e('subUserManagement.confirmUnbind'),
              {
                confirmButtonText: e('subUserManagement.confirmButton'),
                cancelButtonText: e('subUserManagement.cancelButton'),
                type: 'warning'
              }
            ),
              await de({ subCustomerId: parseInt(S.userId), unbindDeviceIds: [o.deviceId] }),
              h.success(e('subUserManagement.unbindSuccess')),
              x('success'),
              w())
          } catch (l) {
            l !== 'cancel' &&
              (console.error('板卡解绑失败:', l), h.error(e('subUserManagement.unbindFailed')))
          }
        },
        $ = async () => {
          if (v.value.length === 0) {
            h.warning(e('subUserManagement.selectDevicesFirst'))
            return
          }
          try {
            ;(await A.confirm(
              e('subUserManagement.confirmBatchUnbind', {
                count: v.value.length,
                username: S.username
              }),
              e('subUserManagement.confirmBatchUnbindTitle'),
              {
                confirmButtonText: e('subUserManagement.confirmButton'),
                cancelButtonText: e('subUserManagement.cancelButton'),
                type: 'warning'
              }
            ),
              await de({
                subCustomerId: parseInt(S.userId),
                unbindDeviceIds: v.value.map((o) => o.deviceId)
              }),
              h.success(e('subUserManagement.batchUnbindSuccess', { count: v.value.length })),
              x('success'),
              (v.value = []),
              w())
          } catch (o) {
            o !== 'cancel' &&
              (console.error('批量解绑失败:', o), h.error(e('subUserManagement.batchUnbindFailed')))
          }
        },
        F = (o) => {
          ;((v.value = []), o())
        }
      return (o, l) => {
        const q = m('el-input'),
          I = m('el-form-item'),
          V = m('el-button'),
          X = m('el-form'),
          R = m('el-table-column'),
          J = m('el-tag'),
          Y = m('el-table'),
          Z = m('el-pagination'),
          ee = m('el-drawer'),
          ae = oe('loading')
        return (
          z(),
          Q(
            ee,
            {
              title: s(e)('subUserManagement.deviceUnbindTitle', { username: o.username }),
              modelValue: p.value,
              'onUpdate:modelValue': l[3] || (l[3] = (y) => (p.value = y)),
              direction: 'rtl',
              size: '50%',
              'before-close': F,
              class: 'device-unbind-drawer'
            },
            {
              default: t(() => [
                j('div', Ze, [
                  j('div', ea, [
                    a(
                      X,
                      { model: i, inline: '' },
                      {
                        default: t(() => [
                          a(
                            I,
                            { label: s(e)('subUserManagement.deviceCodeLabel') },
                            {
                              default: t(() => [
                                a(
                                  q,
                                  {
                                    modelValue: i.deviceCode,
                                    'onUpdate:modelValue':
                                      l[0] || (l[0] = (y) => (i.deviceCode = y)),
                                    placeholder: s(e)('subUserManagement.deviceCodePlaceholder'),
                                    clearable: '',
                                    style: { width: '200px' },
                                    onChange: T
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
                          a(I, null, {
                            default: t(() => [
                              a(
                                V,
                                { type: 'primary', onClick: T },
                                {
                                  default: t(() => [
                                    M(U(s(e)('subUserManagement.searchButton')), 1)
                                  ]),
                                  _: 1
                                }
                              ),
                              a(
                                V,
                                { onClick: D },
                                {
                                  default: t(() => [
                                    M(U(s(e)('subUserManagement.resetButton')), 1)
                                  ]),
                                  _: 1
                                }
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
                  re(
                    (z(),
                    Q(
                      Y,
                      {
                        ref: 'deviceTable',
                        data: B.value,
                        fit: '',
                        'highlight-current-row': '',
                        style: { width: '100%', 'margin-top': '20px' },
                        height: '400',
                        onSelectionChange: L
                      },
                      {
                        default: t(() => [
                          a(R, { type: 'selection', width: '55' }),
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceIdLabel'),
                              prop: 'deviceId',
                              width: '100',
                              align: 'center'
                            },
                            null,
                            8,
                            ['label']
                          ),
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceCodeLabel'),
                              prop: 'deviceCode',
                              'min-width': '200'
                            },
                            null,
                            8,
                            ['label']
                          ),
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.deviceTypeLabel'),
                              width: '120',
                              align: 'center'
                            },
                            {
                              default: t(({ row: y }) => [
                                a(
                                  J,
                                  { type: y.netStorageResFlag === 1 ? 'success' : 'primary' },
                                  {
                                    default: t(() => [
                                      M(
                                        U(
                                          y.netStorageResFlag === 1
                                            ? s(e)('subUserManagement.networkStorageDevice')
                                            : s(e)('subUserManagement.localDevice')
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
                          a(
                            R,
                            {
                              label: s(e)('subUserManagement.operation'),
                              width: '120',
                              align: 'center'
                            },
                            {
                              default: t(({ row: y }) => [
                                a(
                                  V,
                                  { link: '', type: 'danger', onClick: (ne) => k(y) },
                                  {
                                    default: t(() => [
                                      M(U(s(e)('subUserManagement.unbindButton')), 1)
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
                      ['data']
                    )),
                    [[ae, C.value]]
                  ),
                  a(
                    Z,
                    {
                      'current-page': i.page,
                      'onUpdate:currentPage': l[1] || (l[1] = (y) => (i.page = y)),
                      'page-size': i.rows,
                      'onUpdate:pageSize': l[2] || (l[2] = (y) => (i.rows = y)),
                      'page-sizes': [10, 20, 50, 100],
                      total: u.value,
                      layout: 'total, sizes, prev, pager, next, jumper',
                      onSizeChange: r,
                      onCurrentChange: _,
                      style: { 'margin-top': '20px', 'text-align': 'right' }
                    },
                    null,
                    8,
                    ['current-page', 'page-size', 'total']
                  ),
                  j('div', aa, [
                    a(
                      V,
                      { type: 'danger', disabled: v.value.length === 0, onClick: $ },
                      {
                        default: t(() => [M(U(s(e)('subUserManagement.batchUnbindButton')), 1)]),
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
            ['title', 'modelValue']
          )
        )
      }
    }
  })
const na = te(ta, [['__scopeId', 'data-v-b6c762db']]),
  sa = { class: 'app-container' },
  la = W({
    __name: 'index',
    setup(f) {
      const { t: n } = K(),
        { cTable: e, maxHeight: S, handleGetTableHeight: x } = De(),
        p = g([]),
        C = g(!1),
        B = g(0),
        u = O({ page: 1, page_size: 20, keyword: '' }),
        v = g(!1),
        i = g(!1),
        w = g(!1),
        L = g(!1),
        T = g(!1),
        D = g(!1)
      g(!1)
      const r = g(''),
        _ = g(''),
        k = g(!1),
        $ = g('view'),
        F = g(null),
        o = g(),
        l = O({ instance_limit: 0, storage_limit: 0, bandwidth_limit: 0 }),
        q = { active: 'success', disabled: 'info', suspended: 'danger' },
        I = {
          active: n('subUserManagement.active'),
          disabled: n('subUserManagement.disabled'),
          suspended: n('subUserManagement.suspended')
        },
        V = async () => {
          C.value = !0
          try {
            const b = await Fe({ ...u })
            ;((p.value = b.items), (B.value = b.total))
          } catch (b) {
            ;(console.error('获取子用户列表失败:', b),
              h.error(n('subUserManagement.getSubUserListFailed')))
          } finally {
            C.value = !1
          }
        }
      xe(() => {
        ;((u.page = 1), V())
      }, 1e3)
      const X = () => {
          v.value = !0
        },
        R = () => {
          V()
        },
        J = () => {
          V()
        },
        Y = async () => {
          try {
            ;(await Pe(r.value, l),
              h.success(n('subUserManagement.setQuotaSuccess')),
              (w.value = !1),
              V())
          } catch (b) {
            ;(console.error('设置配额失败:', b), h.error(n('subUserManagement.setQuotaFailed')))
          }
        },
        Z = () => {
          ;(h.success(n('subUserManagement.transferGroupSuccess')), (L.value = !1), V())
        },
        ee = async (b) => {
          try {
            ;(await A.confirm(
              n('subUserManagement.confirmEnableUser', { username: b.username }),
              n('subUserManagement.confirmEnableTitle'),
              {
                confirmButtonText: n('subUserManagement.confirm'),
                cancelButtonText: n('subUserManagement.cancel'),
                type: 'warning'
              }
            ),
              await ie(b.id, { user_status: 'active' }),
              h.success(n('subUserManagement.enableUserSuccess')),
              V())
          } catch (d) {
            d !== 'cancel' &&
              (console.error('启用用户失败:', d), h.error(n('subUserManagement.enableUserFailed')))
          }
        },
        ae = async (b) => {
          try {
            ;(await A.confirm(
              n('subUserManagement.confirmDisableUser', { username: b.username }),
              n('subUserManagement.confirmDisableTitle'),
              {
                confirmButtonText: n('subUserManagement.confirm'),
                cancelButtonText: n('subUserManagement.cancel'),
                type: 'warning'
              }
            ),
              await ie(b.id, { user_status: 'disabled' }),
              h.success(n('subUserManagement.disableUserSuccess')),
              V())
          } catch (d) {
            d !== 'cancel' &&
              (console.error('停用用户失败:', d), h.error(n('subUserManagement.disableUserFailed')))
          }
        },
        y = async (b) => {
          try {
            const d = !b.can_create_instances,
              P = n(
                d
                  ? 'userManagement.enableInstanceCreation'
                  : 'userManagement.disableInstanceCreation'
              )
            ;(await A.confirm(
              n('userManagement.confirmToggleInstanceCreation', { action: P }),
              n('userManagement.toggleInstanceCreation'),
              {
                confirmButtonText: n('common.confirm'),
                cancelButtonText: n('common.cancel'),
                type: 'warning'
              }
            ),
              await qe(b.id, { can_create_instances: d }),
              h.success(
                n(
                  d
                    ? 'userManagement.enableInstanceCreationSuccess'
                    : 'userManagement.disableInstanceCreationSuccess'
                )
              ),
              V())
          } catch (d) {
            d !== 'cancel' &&
              (console.error('切换实例创建权限失败:', d),
              h.error(
                newPermission
                  ? n('userManagement.enableInstanceCreationFailed')
                  : n('userManagement.disableInstanceCreationFailed')
              ))
          }
        },
        ne = (b) => {
          ;((r.value = b.sub_ids), (_.value = b.username), (T.value = !0))
        },
        pe = () => {
          ;(h.success(n('subUserManagement.deviceAllocateSuccess')), (T.value = !1), V())
        },
        be = (b) => {
          ;((r.value = b.sub_ids), (_.value = b.username), (D.value = !0))
        },
        fe = () => {
          ;(h.success(n('subUserManagement.deviceUnbindSuccess')), (D.value = !1), V())
        },
        _e = (b) => {
          ;((F.value = b), ($.value = 'view'), (k.value = !0))
        },
        ve = (b) => {
          ;((F.value = b), ($.value = 'edit'), (k.value = !0))
        },
        Ue = () => {
          ;((k.value = !1), V())
        },
        Me = (b) => new Date(b).toLocaleString('zh-CN')
      return (
        me(() => {
          ;(V(), x(), window.addEventListener('resize', x))
        }),
        Ie(() => {
          window.removeEventListener('resize', x)
        }),
        (b, d) => {
          const P = m('el-button'),
            H = m('el-table-column'),
            ue = m('el-tag'),
            he = m('el-table'),
            ye = m('el-pagination'),
            se = m('el-input-number'),
            le = m('el-form-item'),
            we = m('el-form'),
            Ce = m('el-dialog'),
            Ve = oe('loading')
          return (
            z(),
            ge('div', sa, [
              a(
                Se,
                { title: '' },
                {
                  extra: t(() => [
                    a(
                      P,
                      {
                        'ml-2': '',
                        icon: 'RefreshRight',
                        onClick:
                          d[0] ||
                          (d[0] = () => {
                            ;((u.page = 1), V())
                          })
                      },
                      { default: t(() => [M(U(s(n)('subUserManagement.refresh')), 1)]), _: 1 }
                    ),
                    a(
                      P,
                      { type: 'primary', onClick: X },
                      { default: t(() => [M(U(s(n)('subUserManagement.createSubUser')), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              ),
              re(
                (z(),
                Q(
                  he,
                  {
                    ref_key: 'cTable',
                    ref: e,
                    data: p.value,
                    fit: '',
                    'highlight-current-row': '',
                    style: { width: '100%', 'margin-top': '20px' },
                    'max-height': s(S)
                  },
                  {
                    default: t(() => [
                      a(
                        H,
                        {
                          label: s(n)('subUserManagement.id'),
                          prop: 'id',
                          width: '80',
                          align: 'center'
                        },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        H,
                        { label: s(n)('subUserManagement.username'), prop: 'username' },
                        null,
                        8,
                        ['label']
                      ),
                      a(
                        H,
                        { label: s(n)('subUserManagement.status'), width: '100', align: 'center' },
                        {
                          default: t(({ row: c }) => [
                            a(
                              ue,
                              { type: q[c.user_status] },
                              { default: t(() => [M(U(I[c.user_status]), 1)]), _: 2 },
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
                        H,
                        {
                          prop: 'can_create_instances',
                          label: b.$t('userManagement.instanceCreationPermission'),
                          width: '140',
                          align: 'center'
                        },
                        {
                          default: t(({ row: c }) => [
                            a(
                              ue,
                              { type: c.can_create_instances ? 'success' : 'danger' },
                              {
                                default: t(() => [
                                  M(
                                    U(
                                      c.can_create_instances
                                        ? b.$t('userManagement.enable')
                                        : b.$t('userManagement.disable')
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
                      a(
                        H,
                        {
                          prop: 'quota.max_launches_override',
                          label: b.$t('userManagement.maxLaunchesOverride'),
                          width: '120'
                        },
                        {
                          default: t(({ row: c }) => {
                            var N
                            return [
                              M(
                                U(
                                  ((N = c.quota) == null ? void 0 : N.max_launches_override) || '-'
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
                      a(
                        H,
                        { label: s(n)('subUserManagement.createTime'), align: 'center' },
                        { default: t(({ row: c }) => [M(U(Me(c.created_at)), 1)]), _: 1 },
                        8,
                        ['label']
                      ),
                      a(
                        H,
                        {
                          label: s(n)('subUserManagement.operations'),
                          width: '450',
                          align: 'center'
                        },
                        {
                          default: t(({ row: c }) => [
                            a(
                              P,
                              { link: '', type: 'primary', onClick: (N) => ne(c) },
                              {
                                default: t(() => [
                                  M(U(s(n)('subUserManagement.deviceAllocate')), 1)
                                ]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            a(
                              P,
                              {
                                link: '',
                                type: 'warning',
                                onClick: (N) => be(c),
                                style: { 'margin-left': '8px' }
                              },
                              {
                                default: t(() => [M(U(s(n)('subUserManagement.deviceUnbind')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            c.user_status === 'active'
                              ? (z(),
                                Q(
                                  P,
                                  { key: 0, link: '', type: 'warning', onClick: (N) => ae(c) },
                                  {
                                    default: t(() => [
                                      M(U(s(n)('subUserManagement.disableUser')), 1)
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['onClick']
                                ))
                              : (z(),
                                Q(
                                  P,
                                  { key: 1, link: '', type: 'success', onClick: (N) => ee(c) },
                                  {
                                    default: t(() => [
                                      M(U(s(n)('subUserManagement.enableUser')), 1)
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['onClick']
                                )),
                            a(
                              P,
                              {
                                link: '',
                                type: 'info',
                                onClick: (N) => _e(c),
                                style: { 'margin-left': '8px' }
                              },
                              {
                                default: t(() => [M(U(b.$t('quotaManagement.viewQuota')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            a(
                              P,
                              {
                                link: '',
                                type: 'warning',
                                onClick: (N) => ve(c),
                                style: { 'margin-left': '8px' }
                              },
                              {
                                default: t(() => [M(U(b.$t('quotaManagement.editQuota')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            ),
                            a(
                              P,
                              {
                                type: c.can_create_instances ? 'danger' : 'success',
                                link: '',
                                onClick: (N) => y(c),
                                style: { 'margin-left': '8px' }
                              },
                              {
                                default: t(() => [
                                  M(
                                    U(
                                      c.can_create_instances
                                        ? b.$t('userManagement.disableInstanceCreation')
                                        : b.$t('userManagement.enableInstanceCreation')
                                    ),
                                    1
                                  )
                                ]),
                                _: 2
                              },
                              1032,
                              ['type', 'onClick']
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
                [[Ve, C.value]]
              ),
              a(
                ye,
                {
                  'current-page': u.page,
                  'onUpdate:currentPage': d[1] || (d[1] = (c) => (u.page = c)),
                  'page-size': u.page_size,
                  'onUpdate:pageSize': d[2] || (d[2] = (c) => (u.page_size = c)),
                  'page-sizes': [10, 20, 50, 100],
                  total: B.value,
                  layout: 'total, sizes, prev, pager, next, jumper',
                  onSizeChange:
                    d[3] ||
                    (d[3] = () => {
                      ;((u.page = 1), V())
                    }),
                  onCurrentChange: V,
                  style: { 'margin-top': '20px', 'text-align': 'right' }
                },
                null,
                8,
                ['current-page', 'page-size', 'total']
              ),
              a(
                Ae,
                {
                  modelValue: v.value,
                  'onUpdate:modelValue': d[4] || (d[4] = (c) => (v.value = c)),
                  title: s(n)('subUserManagement.createUserDialogTitle'),
                  onSuccess: R
                },
                null,
                8,
                ['modelValue', 'title']
              ),
              a(
                Ge,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': d[5] || (d[5] = (c) => (i.value = c)),
                  title: ''
                    .concat(s(n)('subUserManagement.resetPasswordDialogTitle'), ' - ')
                    .concat(_.value),
                  'user-id': r.value,
                  username: _.value,
                  onSuccess: J
                },
                null,
                8,
                ['modelValue', 'title', 'user-id', 'username']
              ),
              a(
                Ce,
                {
                  title: s(n)('subUserManagement.setQuotaDialogTitle'),
                  modelValue: w.value,
                  'onUpdate:modelValue': d[10] || (d[10] = (c) => (w.value = c)),
                  width: '400px'
                },
                {
                  footer: t(() => [
                    a(
                      P,
                      { onClick: d[9] || (d[9] = (c) => (w.value = !1)) },
                      { default: t(() => [M(U(s(n)('subUserManagement.cancel')), 1)]), _: 1 }
                    ),
                    a(
                      P,
                      { type: 'primary', onClick: Y },
                      { default: t(() => [M(U(s(n)('subUserManagement.confirm')), 1)]), _: 1 }
                    )
                  ]),
                  default: t(() => [
                    a(
                      we,
                      { ref_key: 'quotaFormRef', ref: o, model: l, 'label-width': '100px' },
                      {
                        default: t(() => [
                          a(
                            le,
                            { label: s(n)('subUserManagement.instanceQuota') },
                            {
                              default: t(() => [
                                a(
                                  se,
                                  {
                                    modelValue: l.instance_limit,
                                    'onUpdate:modelValue':
                                      d[6] || (d[6] = (c) => (l.instance_limit = c)),
                                    min: 1,
                                    max: 1e3
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
                            le,
                            { label: s(n)('subUserManagement.storageQuota') },
                            {
                              default: t(() => [
                                a(
                                  se,
                                  {
                                    modelValue: l.storage_limit,
                                    'onUpdate:modelValue':
                                      d[7] || (d[7] = (c) => (l.storage_limit = c)),
                                    min: 1,
                                    max: 1e4
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
                            le,
                            { label: s(n)('subUserManagement.bandwidthQuota') },
                            {
                              default: t(() => [
                                a(
                                  se,
                                  {
                                    modelValue: l.bandwidth_limit,
                                    'onUpdate:modelValue':
                                      d[8] || (d[8] = (c) => (l.bandwidth_limit = c)),
                                    min: 1,
                                    max: 1e3
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
              ),
              a(
                He,
                {
                  modelValue: L.value,
                  'onUpdate:modelValue': d[11] || (d[11] = (c) => (L.value = c)),
                  title: ''
                    .concat(s(n)('subUserManagement.transferGroupDialogTitle'), ' - ')
                    .concat(_.value),
                  'user-id': r.value,
                  username: _.value,
                  onSuccess: Z
                },
                null,
                8,
                ['modelValue', 'title', 'user-id', 'username']
              ),
              a(
                Ye,
                {
                  modelValue: T.value,
                  'onUpdate:modelValue': d[12] || (d[12] = (c) => (T.value = c)),
                  'user-id': r.value,
                  username: _.value,
                  onSuccess: pe
                },
                null,
                8,
                ['modelValue', 'user-id', 'username']
              ),
              a(
                na,
                {
                  modelValue: D.value,
                  'onUpdate:modelValue': d[13] || (d[13] = (c) => (D.value = c)),
                  'user-id': r.value,
                  username: _.value,
                  onSuccess: fe
                },
                null,
                8,
                ['modelValue', 'user-id', 'username']
              ),
              a(
                Le,
                {
                  visible: k.value,
                  'onUpdate:visible': d[14] || (d[14] = (c) => (k.value = c)),
                  user: F.value,
                  mode: $.value,
                  onSuccess: Ue
                },
                null,
                8,
                ['visible', 'user', 'mode']
              )
            ])
          )
        }
      )
    }
  })
const ga = te(la, [['__scopeId', 'data-v-e8d079e8']])
export { ga as default }
