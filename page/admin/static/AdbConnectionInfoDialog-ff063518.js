import { o as A } from './index-e81b6066.js'
import { h as E, _ as F } from './index-ae33a03d.js'
import { E as p } from './element-74718691.js'
import {
  y as N,
  r as C,
  d as M,
  b as U,
  a8 as c,
  f as B,
  G as k,
  H as t,
  N as n,
  L as u,
  M as i,
  u as o,
  i as g,
  h as $
} from './vue-66851fce.js'
import './vxe-562f9a54.js'
const G = { style: { display: 'flex', 'align-items': 'center' } },
  H = { style: { display: 'flex', 'align-items': 'center' } },
  K = { style: { display: 'flex', 'align-items': 'center' } },
  O = { key: 1 },
  P = N({
    name: 'AdbConnectionInfoDialog',
    __name: 'AdbConnectionInfoDialog',
    props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
    emits: ['update:visible', 'success'],
    setup(V, { emit: I }) {
      const { t: e } = E(),
        m = V,
        S = I,
        f = C(!0),
        _ = C(!1),
        a = C(null)
      ;(M(
        () => m.visible,
        (s) => {
          ;((f.value = s), s && ((a.value = null), h()))
        }
      ),
        U(() => {
          ;((a.value = null), h())
        }))
      const h = async () => {
          if (!m.padCode) {
            p.warning(e('instanceBatch.adbInstanceCodeEmpty'))
            return
          }
          _.value = !0
          try {
            const s = { padCode: m.padCode, enable: !0 },
              l = await A(s)
            ;((a.value = l.data), p.success(e('instanceBatch.adbFetchSuccess')))
          } catch (s) {
            ;(console.error(s), p.error(e('instanceBatch.adbFetchFailed')))
          } finally {
            _.value = !1
          }
        },
        x = () => {
          ;((f.value = !1), S('update:visible', !1))
        },
        v = (s) => {
          navigator.clipboard
            .writeText(s)
            .then(() => {
              p.success(e('instanceBatch.adbCopySuccess'))
            })
            .catch(() => {
              p.error(e('instanceBatch.adbCopyFailed'))
            })
        }
      return (s, l) => {
        const r = c('el-descriptions-item'),
          y = c('el-input'),
          b = c('el-button'),
          L = c('el-tag'),
          w = c('el-descriptions'),
          D = c('el-skeleton'),
          T = c('el-dialog')
        return (
          B(),
          k(
            T,
            {
              'model-value': f.value,
              title: o(e)('instanceBatch.adbDialogTitle'),
              width: '600px',
              'before-close': x
            },
            {
              footer: t(() => [
                n(
                  b,
                  { onClick: x },
                  { default: t(() => [u(i(o(e)('instanceBatch.adbCloseButton')), 1)]), _: 1 }
                )
              ]),
              default: t(() => [
                n(
                  D,
                  { loading: _.value, animated: '' },
                  {
                    default: t(() => [
                      a.value
                        ? (B(),
                          k(
                            w,
                            { key: 0, column: 1, border: '' },
                            {
                              default: t(() => [
                                n(
                                  r,
                                  { label: o(e)('instanceBatch.adbPadCodeLabel') },
                                  { default: t(() => [u(i(a.value.padCode), 1)]), _: 1 },
                                  8,
                                  ['label']
                                ),
                                n(
                                  r,
                                  { label: o(e)('instanceBatch.adbSshCommandLabel') },
                                  {
                                    default: t(() => [
                                      g('div', G, [
                                        n(
                                          y,
                                          {
                                            modelValue: a.value.command,
                                            'onUpdate:modelValue':
                                              l[0] || (l[0] = (d) => (a.value.command = d)),
                                            readonly: ''
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        ),
                                        n(
                                          b,
                                          {
                                            style: { 'margin-left': '10px' },
                                            onClick: l[1] || (l[1] = (d) => v(a.value.command))
                                          },
                                          {
                                            default: t(() => [
                                              u(i(o(e)('instanceBatch.adbCopyButton')), 1)
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
                                n(
                                  r,
                                  { label: o(e)('instanceBatch.adbConnectionCommandLabel') },
                                  {
                                    default: t(() => [
                                      g('div', H, [
                                        n(
                                          y,
                                          {
                                            modelValue: a.value.adb,
                                            'onUpdate:modelValue':
                                              l[2] || (l[2] = (d) => (a.value.adb = d)),
                                            readonly: ''
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        ),
                                        n(
                                          b,
                                          {
                                            style: { 'margin-left': '10px' },
                                            onClick: l[3] || (l[3] = (d) => v(a.value.adb))
                                          },
                                          {
                                            default: t(() => [
                                              u(i(o(e)('instanceBatch.adbCopyButton')), 1)
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
                                n(
                                  r,
                                  { label: o(e)('instanceBatch.adbKeyLabel') },
                                  {
                                    default: t(() => [
                                      g('div', K, [
                                        n(
                                          y,
                                          {
                                            modelValue: a.value.key,
                                            'onUpdate:modelValue':
                                              l[4] || (l[4] = (d) => (a.value.key = d)),
                                            readonly: ''
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        ),
                                        n(
                                          b,
                                          {
                                            style: { 'margin-left': '10px' },
                                            onClick: l[5] || (l[5] = (d) => v(a.value.key))
                                          },
                                          {
                                            default: t(() => [
                                              u(i(o(e)('instanceBatch.adbCopyButton')), 1)
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
                                n(
                                  r,
                                  { label: o(e)('instanceBatch.adbStatusLabel') },
                                  {
                                    default: t(() => [
                                      n(
                                        L,
                                        { type: a.value.enable ? 'success' : 'danger' },
                                        {
                                          default: t(() => [
                                            u(
                                              i(
                                                a.value.enable
                                                  ? o(e)('instanceBatch.adbStatusOpen')
                                                  : o(e)('instanceBatch.adbStatusClosed')
                                              ),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        ['type']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ),
                                n(
                                  r,
                                  { label: o(e)('instanceBatch.adbExpireTimeLabel') },
                                  { default: t(() => [u(i(a.value.expireTime), 1)]), _: 1 },
                                  8,
                                  ['label']
                                )
                              ]),
                              _: 1
                            }
                          ))
                        : (B(), $('div', O, i(o(e)('instanceBatch.adbNotFound')), 1))
                    ]),
                    _: 1
                  },
                  8,
                  ['loading']
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
  })
const R = F(P, [['__scopeId', 'data-v-ad60b0fd']])
export { R as default }
