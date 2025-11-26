import { h as O, _ as Z } from './index-ae33a03d.js'
import { g as K } from './index-c0fb52a7.js'
import { g as W, b as $, r as j } from './index-e81b6066.js'
import { E as p, G as I } from './element-74718691.js'
import {
  y as J,
  r as f,
  d as H,
  R as z,
  b as Q,
  a8 as u,
  f as g,
  G as y,
  H as i,
  i as _,
  N as c,
  u as n,
  h as X,
  F as ee,
  a0 as te,
  L as S,
  M as h,
  K as G
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const ae = { class: 'conditional-delete-drawer' },
  le = { class: 'action-area' },
  oe = { class: 'result-info' },
  ne = { class: 'delete-action' },
  re = { class: 'progress-info' },
  se = J({
    __name: 'ConditionalDeleteDrawer',
    props: { modelValue: { type: Boolean } },
    emits: ['update:modelValue', 'success'],
    setup(q, { emit: E }) {
      const { t: e } = O(),
        M = q,
        x = E,
        w = f(M.modelValue),
        C = f(!1),
        B = f(!1)
      H(
        () => M.modelValue,
        (t) => {
          w.value = t
        }
      )
      const l = z({
          page: 1,
          page_size: 100,
          local_group_uuid: '',
          created_at_start: '',
          created_at_end: ''
        }),
        r = f([]),
        a = z({
          visible: !1,
          totalBatches: 0,
          currentBatch: 0,
          deletedCount: 0,
          percentage: 0,
          status: 'success'
        }),
        T = f([]),
        F = async () => {
          try {
            const t = await K()
            T.value = t.map((o) => ({ uuid: o.uuid, text: o.name, value: o.uuid }))
          } catch (t) {
            ;(console.error('获取分组列表失败:', t),
              p.error(e('conditionalDeleteDrawer.fetchGroupFailed')))
          }
        }
      ;(H(w, (t) => {
        ;(x('update:modelValue', t), t || v())
      }),
        Q(() => {
          F()
        }))
      const v = () => {
          ;((l.page = 1),
            (l.page_size = 10),
            (l.local_group_uuid = ''),
            (l.created_at_start = ''),
            (l.created_at_end = ''),
            (r.value = []),
            (a.visible = !1))
        },
        N = (t) => {
          r.value.length > 0 || a.visible
            ? I.confirm(
                e('conditionalDeleteDrawer.closeConfirmMessage'),
                e('conditionalDeleteDrawer.closeConfirmTitle'),
                {
                  confirmButtonText: e('common.confirm'),
                  cancelButtonText: e('common.cancel'),
                  type: 'warning'
                }
              )
                .then(() => {
                  ;(v(), t())
                })
                .catch(() => {})
            : (v(), t())
        },
        P = async () => {
          if (!l.local_group_uuid) {
            p.warning(e('conditionalDeleteDrawer.selectGroupWarning'))
            return
          }
          C.value = !0
          try {
            const t = { local_group_uuid: l.local_group_uuid, page: l.page, page_size: l.page_size }
            ;(l.created_at_start && (t.created_at_start = l.created_at_start),
              l.created_at_end && (t.created_at_end = l.created_at_end))
            const o = await W(t)
            o.instances && o.instances.length > 0
              ? ((r.value = o.instances.map((d) => ({
                  padCode: d.instance_id,
                  padStatus: d.padStatus
                }))),
                p.success(e('conditionalDeleteDrawer.querySuccess', { count: r.value.length })))
              : ((r.value = []), p.warning(e('conditionalDeleteDrawer.noMatchingInstances')))
          } catch (t) {
            ;(console.error('查询失败:', t),
              p.error(e('conditionalDeleteDrawer.queryFailed')),
              (r.value = []))
          } finally {
            C.value = !1
          }
        },
        U = async () => {
          if (r.value.length === 0) {
            p.warning(e('conditionalDeleteDrawer.noInstancesToDelete'))
            return
          }
          try {
            ;(await I.confirm(
              e('conditionalDeleteDrawer.deleteConfirmMessage', { count: r.value.length }),
              e('conditionalDeleteDrawer.deleteConfirmTitle'),
              {
                confirmButtonText: e('common.confirm'),
                cancelButtonText: e('common.cancel'),
                type: 'warning'
              }
            ),
              (B.value = !0),
              (a.visible = !0),
              (a.totalBatches = Math.ceil(r.value.length / 200)),
              (a.currentBatch = 0),
              (a.deletedCount = 0),
              (a.percentage = 0),
              (a.status = 'success'))
            const t = 200,
              o = r.value.length
            for (let d = 0; d < o; d += t) {
              const D = r.value.slice(d, d + t),
                b = D.map((m) => m.padCode)
              a.currentBatch = Math.floor(d / t) + 1
              try {
                const m = await $({ padCodes: b })
                ;(await j({ instance_ids: b }),
                  (a.deletedCount += D.length),
                  (a.percentage = Math.round((a.deletedCount / o) * 100)),
                  p.success(
                    e('conditionalDeleteDrawer.batchDeleteSuccess', { batch: a.currentBatch })
                  ))
              } catch (m) {
                ;(console.error('Batch '.concat(a.currentBatch, ' deletion failed:'), m),
                  p.error(
                    e('conditionalDeleteDrawer.batchDeleteFailed', { batch: a.currentBatch })
                  ),
                  (a.status = 'exception'))
                break
              }
              await new Promise((m) => setTimeout(m, 1e3))
            }
            a.deletedCount === o &&
              (p.success(e('conditionalDeleteDrawer.allInstancesDeleted')), x('success'), v())
          } catch (t) {
            t !== 'cancel' && console.error('删除操作取消或出错:', t)
          } finally {
            B.value = !1
          }
        }
      return (t, o) => {
        const d = u('el-input-number'),
          D = u('el-form-item'),
          b = u('el-option'),
          m = u('el-select'),
          Y = u('el-date-picker'),
          L = u('el-form'),
          V = u('el-card'),
          k = u('el-button'),
          R = u('el-progress'),
          A = u('el-drawer')
        return (
          g(),
          y(
            A,
            {
              modelValue: w.value,
              'onUpdate:modelValue': o[4] || (o[4] = (s) => (w.value = s)),
              title: n(e)('conditionalDeleteDrawer.title'),
              size: '40%',
              'before-close': N
            },
            {
              default: i(() => [
                _('div', ae, [
                  c(
                    V,
                    {
                      header: n(e)('conditionalDeleteDrawer.filterConditions'),
                      class: 'params-card',
                      shadow: 'never'
                    },
                    {
                      default: i(() => [
                        c(
                          L,
                          { model: l, 'label-width': '120px' },
                          {
                            default: i(() => [
                              c(
                                D,
                                { label: n(e)('conditionalDeleteDrawer.deleteCount') },
                                {
                                  default: i(() => [
                                    c(
                                      d,
                                      {
                                        modelValue: l.page_size,
                                        'onUpdate:modelValue':
                                          o[0] || (o[0] = (s) => (l.page_size = s)),
                                        min: 1,
                                        max: 600,
                                        placeholder: n(e)(
                                          'conditionalDeleteDrawer.deleteCountPlaceholder'
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
                              c(
                                D,
                                { label: n(e)('conditionalDeleteDrawer.group') },
                                {
                                  default: i(() => [
                                    c(
                                      m,
                                      {
                                        modelValue: l.local_group_uuid,
                                        'onUpdate:modelValue':
                                          o[1] || (o[1] = (s) => (l.local_group_uuid = s)),
                                        placeholder: n(e)('conditionalDeleteDrawer.selectGroup'),
                                        style: { width: '100%' },
                                        clearable: ''
                                      },
                                      {
                                        default: i(() => [
                                          (g(!0),
                                          X(
                                            ee,
                                            null,
                                            te(
                                              T.value,
                                              (s) => (
                                                g(),
                                                y(
                                                  b,
                                                  { key: s.uuid, label: s.text, value: s.uuid },
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
                              c(
                                D,
                                { label: n(e)('conditionalDeleteDrawer.createStartTime') },
                                {
                                  default: i(() => [
                                    c(
                                      Y,
                                      {
                                        modelValue: l.created_at_start,
                                        'onUpdate:modelValue':
                                          o[2] || (o[2] = (s) => (l.created_at_start = s)),
                                        type: 'datetime',
                                        placeholder: n(e)(
                                          'conditionalDeleteDrawer.instanceCreateStartTime'
                                        ),
                                        format: 'YYYY-MM-DD HH:mm:ss',
                                        'value-format': 'YYYY-MM-DDTHH:mm:ss[Z]',
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
                              c(
                                D,
                                { label: n(e)('conditionalDeleteDrawer.createEndTime') },
                                {
                                  default: i(() => [
                                    c(
                                      Y,
                                      {
                                        modelValue: l.created_at_end,
                                        'onUpdate:modelValue':
                                          o[3] || (o[3] = (s) => (l.created_at_end = s)),
                                        type: 'datetime',
                                        placeholder: n(e)(
                                          'conditionalDeleteDrawer.instanceCreateEndTime'
                                        ),
                                        format: 'YYYY-MM-DD HH:mm:ss',
                                        'value-format': 'YYYY-MM-DDTHH:mm:ss[Z]',
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
                    ['header']
                  ),
                  _('div', le, [
                    c(
                      k,
                      { type: 'primary', onClick: P, loading: C.value },
                      { default: i(() => [S(h(n(e)('conditionalDeleteDrawer.query')), 1)]), _: 1 },
                      8,
                      ['loading']
                    )
                  ]),
                  r.value.length > 0
                    ? (g(),
                      y(
                        V,
                        {
                          key: 0,
                          header: n(e)('conditionalDeleteDrawer.queryResults'),
                          class: 'result-card',
                          shadow: 'never'
                        },
                        {
                          default: i(() => [
                            _('div', oe, [
                              _(
                                'p',
                                null,
                                h(
                                  n(e)('conditionalDeleteDrawer.foundInstances', {
                                    count: r.value.length
                                  })
                                ),
                                1
                              ),
                              _(
                                'p',
                                null,
                                h(
                                  n(e)('conditionalDeleteDrawer.deleteBatches', {
                                    batches: Math.ceil(r.value.length / 200)
                                  })
                                ),
                                1
                              )
                            ]),
                            _('div', ne, [
                              c(
                                k,
                                {
                                  type: 'danger',
                                  onClick: U,
                                  loading: B.value,
                                  disabled: r.value.length === 0
                                },
                                {
                                  default: i(() => [
                                    S(
                                      h(
                                        n(e)('conditionalDeleteDrawer.batchDelete', {
                                          count: r.value.length
                                        })
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['loading', 'disabled']
                              )
                            ])
                          ]),
                          _: 1
                        },
                        8,
                        ['header']
                      ))
                    : G('', !0),
                  a.visible
                    ? (g(),
                      y(
                        V,
                        {
                          key: 1,
                          header: n(e)('conditionalDeleteDrawer.deleteProgress'),
                          class: 'progress-card'
                        },
                        {
                          default: i(() => [
                            _('div', re, [
                              _(
                                'p',
                                null,
                                h(
                                  n(e)('conditionalDeleteDrawer.totalBatches', {
                                    total: a.totalBatches
                                  })
                                ),
                                1
                              ),
                              _(
                                'p',
                                null,
                                h(
                                  n(e)('conditionalDeleteDrawer.currentBatch', {
                                    current: a.currentBatch
                                  })
                                ),
                                1
                              ),
                              _(
                                'p',
                                null,
                                h(
                                  n(e)('conditionalDeleteDrawer.deletedCount', {
                                    count: a.deletedCount
                                  })
                                ),
                                1
                              )
                            ]),
                            c(R, { percentage: a.percentage, status: a.status }, null, 8, [
                              'percentage',
                              'status'
                            ])
                          ]),
                          _: 1
                        },
                        8,
                        ['header']
                      ))
                    : G('', !0)
                ])
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
const me = Z(se, [['__scopeId', 'data-v-687d70dc']])
export { me as default }
