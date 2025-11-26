import { q as w, h as T, _ as G } from './index-ae33a03d.js'
import { E as q } from './element-74718691.js'
import {
  y as H,
  r as f,
  e as K,
  d as L,
  a8 as s,
  f as i,
  G as d,
  H as a,
  N as l,
  L as m,
  M as r,
  h as I,
  i as D,
  K as j
} from './vue-66851fce.js'
function J(p) {
  return w({ url: '/quotas/'.concat(p), method: 'get', baseURL: '/cpyservice' })
}
function P(p) {
  return w({ url: '/quotas/', method: 'post', data: p, baseURL: '/cpyservice' })
}
function W(p, h) {
  return w({ url: '/quotas/'.concat(p), method: 'put', data: h, baseURL: '/cpyservice' })
}
const X = { key: 0 },
  Y = { key: 1, style: { 'text-align': 'center', padding: '20px' } },
  Z = { style: { 'font-size': '12px', color: '#909399', 'margin-top': '5px' } },
  ee = { style: { 'font-size': '12px', color: '#909399', 'margin-top': '5px' } },
  ae = H({
    __name: 'QuotaManagementDialog',
    props: {
      visible: { type: Boolean, default: !1 },
      user: { default: null },
      mode: { default: 'view' }
    },
    emits: ['update:visible', 'success'],
    setup(p, { emit: h }) {
      const { t } = T(),
        o = p,
        y = h,
        g = f(o.visible),
        x = f(!1),
        b = f(),
        c = f(null),
        n = f({
          max_instances: 0,
          max_concurrent_sessions: 0,
          max_launches_override: 0,
          concurrency_multiplier: 200,
          user_id: ''
        }),
        F = {
          max_instances: [
            { required: !0, message: t('quotaManagement.enterMaxInstances'), trigger: 'blur' },
            {
              type: 'number',
              min: 0,
              message: t('quotaManagement.maxInstancesMin'),
              trigger: 'blur'
            }
          ],
          max_concurrent_sessions: [
            {
              required: !0,
              message: t('quotaManagement.enterMaxConcurrentSessions'),
              trigger: 'blur'
            },
            {
              type: 'number',
              min: 0,
              message: t('quotaManagement.maxConcurrentSessionsMin'),
              trigger: 'blur'
            }
          ],
          max_launches_override: [
            {
              type: 'number',
              min: 0,
              message: t('quotaManagement.maxLaunchesOverrideMin'),
              trigger: 'blur'
            }
          ],
          concurrency_multiplier: [
            {
              required: !0,
              message: t('quotaManagement.enterConcurrencyMultiplier'),
              trigger: 'blur'
            },
            {
              type: 'number',
              min: 1,
              message: t('quotaManagement.concurrencyMultiplierMin'),
              trigger: 'blur'
            }
          ],
          user_id: [{ required: !0, message: t('quotaManagement.enterUserId'), trigger: 'blur' }]
        },
        R = K(() => {
          switch (o.mode) {
            case 'view':
              return t('quotaManagement.viewQuota')
            case 'create':
              return t('quotaManagement.createQuota')
            case 'edit':
              return t('quotaManagement.editQuota')
            default:
              return t('quotaManagement.quotaManagement')
          }
        })
      ;(L(
        () => o.visible,
        (e) => {
          ;((g.value = e),
            e &&
              ((o.mode === 'view' && o.user) || (o.mode === 'edit' && o.user)
                ? C()
                : o.mode === 'create' && k()))
        }
      ),
        L(g, (e) => {
          y('update:visible', e)
        }))
      const V = () => {
          ;((g.value = !1), k())
        },
        k = () => {
          var e
          ;((n.value = {
            max_instances: 0,
            max_concurrent_sessions: 0,
            max_launches_override: 0,
            concurrency_multiplier: 200,
            user_id: ''
          }),
            (e = b.value) == null || e.clearValidate())
        },
        C = async () => {
          if (o.user)
            try {
              const e = await J(o.user.id)
              ;((c.value = e),
                o.mode === 'edit' &&
                  (n.value = {
                    max_instances: e.max_instances,
                    max_concurrent_sessions: e.max_concurrent_sessions,
                    max_launches_override: e.max_launches_override || 0,
                    concurrency_multiplier: e.concurrency_multiplier,
                    user_id: e.user_id
                  }))
            } catch (e) {
              ;(console.error('获取配额数据失败:', e), q.error(t('quotaManagement.getQuotaFailed')))
            }
        },
        B = () => {
          ;(y('update:visible', !1), y('success'))
        },
        N = async () => {
          if (!(!b.value || !(await b.value.validate()))) {
            x.value = !0
            try {
              ;(o.mode === 'create'
                ? (await P(n.value), q.success(t('quotaManagement.createSuccess')))
                : o.mode === 'edit' &&
                  o.user &&
                  ((n.value.max_launches_override =
                    n.value.max_concurrent_sessions * n.value.concurrency_multiplier),
                  await W(o.user.id, n.value),
                  q.success(t('quotaManagement.updateSuccess'))),
                (g.value = !1),
                y('success'))
            } catch (u) {
              ;(console.error('操作失败:', u), q.error(t('quotaManagement.operationFailed')))
            } finally {
              x.value = !1
            }
          }
        }
      return (e, u) => {
        const v = s('el-descriptions-item'),
          Q = s('el-tag'),
          z = s('el-descriptions'),
          E = s('el-empty'),
          S = s('el-input-number'),
          M = s('el-form-item'),
          U = s('el-input'),
          O = s('el-form'),
          $ = s('el-button'),
          A = s('el-dialog')
        return (
          i(),
          d(
            A,
            {
              modelValue: g.value,
              'onUpdate:modelValue': u[3] || (u[3] = (_) => (g.value = _)),
              title: R.value,
              width: '600px',
              'before-close': V
            },
            {
              footer: a(() => [
                l($, { onClick: V }, { default: a(() => [m(r(e.$t('common.cancel')), 1)]), _: 1 }),
                e.mode === 'view'
                  ? (i(),
                    d(
                      $,
                      { key: 0, type: 'primary', onClick: B },
                      { default: a(() => [m(r(e.$t('common.confirm')), 1)]), _: 1 }
                    ))
                  : (i(),
                    d(
                      $,
                      { key: 1, type: 'primary', onClick: N, loading: x.value },
                      {
                        default: a(() => [
                          m(r(e.mode === 'create' ? e.$t('common.create') : e.$t('common.save')), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['loading']
                    ))
              ]),
              default: a(() => [
                e.mode === 'view'
                  ? (i(),
                    I('div', X, [
                      c.value
                        ? (i(),
                          d(
                            z,
                            { key: 0, column: 1, border: '' },
                            {
                              default: a(() => [
                                l(
                                  v,
                                  { label: e.$t('quotaManagement.userId') },
                                  { default: a(() => [m(r(c.value.user_id), 1)]), _: 1 },
                                  8,
                                  ['label']
                                ),
                                l(
                                  v,
                                  { label: e.$t('quotaManagement.maxConcurrentSessions') },
                                  {
                                    default: a(() => [m(r(c.value.max_concurrent_sessions), 1)]),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                l(
                                  v,
                                  { label: e.$t('quotaManagement.maxLaunchesOverride') },
                                  {
                                    default: a(() => [
                                      m(
                                        r(
                                          c.value.total_launch_quota ||
                                            e.$t('quotaManagement.notSet')
                                        ),
                                        1
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                l(
                                  v,
                                  { label: e.$t('quotaManagement.concurrencyMultiplier') },
                                  {
                                    default: a(() => [m(r(c.value.concurrency_multiplier), 1)]),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                l(
                                  v,
                                  { label: e.$t('quotaManagement.remainingLaunches') },
                                  {
                                    default: a(() => [
                                      c.value.available_launches > 0
                                        ? (i(),
                                          d(
                                            Q,
                                            { key: 0, type: 'success', size: 'small' },
                                            {
                                              default: a(() => [
                                                m(r(c.value.available_launches), 1)
                                              ]),
                                              _: 1
                                            }
                                          ))
                                        : (i(),
                                          d(
                                            Q,
                                            { key: 1, type: 'info', size: 'small' },
                                            {
                                              default: a(() => [
                                                m(r(c.value.available_launches), 1)
                                              ]),
                                              _: 1
                                            }
                                          ))
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                )
                              ]),
                              _: 1
                            }
                          ))
                        : (i(),
                          I('div', Y, [
                            l(E, { description: e.$t('quotaManagement.noQuotaData') }, null, 8, [
                              'description'
                            ])
                          ]))
                    ]))
                  : (i(),
                    d(
                      O,
                      {
                        key: 1,
                        ref_key: 'quotaFormRef',
                        ref: b,
                        model: n.value,
                        rules: F,
                        'label-width': '140px'
                      },
                      {
                        default: a(() => [
                          l(
                            M,
                            {
                              label: e.$t('quotaManagement.maxConcurrentSessions'),
                              prop: 'max_concurrent_sessions'
                            },
                            {
                              default: a(() => [
                                l(
                                  S,
                                  {
                                    modelValue: n.value.max_concurrent_sessions,
                                    'onUpdate:modelValue':
                                      u[0] || (u[0] = (_) => (n.value.max_concurrent_sessions = _)),
                                    min: 0,
                                    placeholder: e.$t('quotaManagement.enterMaxConcurrentSessions'),
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
                          l(
                            M,
                            {
                              label: e.$t('quotaManagement.concurrencyMultiplier'),
                              prop: 'concurrency_multiplier'
                            },
                            {
                              default: a(() => [
                                l(
                                  S,
                                  {
                                    modelValue: n.value.concurrency_multiplier,
                                    'onUpdate:modelValue':
                                      u[1] || (u[1] = (_) => (n.value.concurrency_multiplier = _)),
                                    min: 1,
                                    placeholder: e.$t('quotaManagement.enterConcurrencyMultiplier'),
                                    style: { width: '100%' }
                                  },
                                  null,
                                  8,
                                  ['modelValue', 'placeholder']
                                ),
                                D('div', Z, r(e.$t('quotaManagement.concurrencyMultiplierTip')), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            M,
                            {
                              label: e.$t('quotaManagement.maxLaunchesOverride'),
                              prop: 'max_launches_override'
                            },
                            {
                              default: a(() => [
                                l(
                                  U,
                                  {
                                    value:
                                      n.value.max_concurrent_sessions *
                                      n.value.concurrency_multiplier,
                                    disabled: '',
                                    style: { width: '100%' }
                                  },
                                  null,
                                  8,
                                  ['value']
                                ),
                                D('div', ee, r(e.$t('quotaManagement.maxLaunchesOverrideTip')), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          e.mode === 'create'
                            ? (i(),
                              d(
                                M,
                                { key: 0, label: e.$t('quotaManagement.userId'), prop: 'user_id' },
                                {
                                  default: a(() => [
                                    l(
                                      U,
                                      {
                                        modelValue: n.value.user_id,
                                        'onUpdate:modelValue':
                                          u[2] || (u[2] = (_) => (n.value.user_id = _)),
                                        type: 'number',
                                        placeholder: e.$t('quotaManagement.enterUserId')
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
                              ))
                            : j('', !0)
                        ]),
                        _: 1
                      },
                      8,
                      ['model']
                    ))
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
const le = G(ae, [['__scopeId', 'data-v-5f7c3512']])
export { le as Q }
