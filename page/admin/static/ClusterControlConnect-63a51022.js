import {
  y as L,
  r as d,
  aq as S,
  at as B,
  e as N,
  b as R,
  a8 as U,
  f as l,
  h as r,
  i as a,
  F as V,
  a0 as b,
  N as z,
  n as m,
  A as f,
  G,
  H as I,
  L as T,
  K as h,
  M as A
} from './vue-66851fce.js'
import './v4-3a210e2e.js'
import { h as g } from './index-e81b6066.js'
import { u as F } from './selected-instances-2c512dfe.js'
import { D as K } from './DeviceControlScreen-7db39cef.js'
import { _ as M } from './index-ae33a03d.js'
import './element-74718691.js'
import './index-b201494c.js'
import './index-96d3c23e.js'
import './vxe-562f9a54.js'
const $ = { class: 'phone-group-control' },
  q = { class: 'main-content' },
  E = { class: 'devices-panel' },
  H = { class: 'devices-grid' },
  P = ['onClick'],
  j = { class: 'device-status' },
  J = { class: 'device-screen-container' },
  O = ['id'],
  Q = { key: 0, class: 'screen-placeholder' },
  W = ['src'],
  X = { class: 'device-info' },
  Y = { class: 'control-panel' },
  Z = L({
    __name: 'ClusterControlConnect',
    setup(ee) {
      const s = d([])
      S()
      const n = d(null),
        i = d(null),
        y = F(),
        { selectedPadCodes: u } = B(y),
        k = async () => {
          const t = await g({ padCodes: u.value })
          ;((s.value = t.data.map((e) => ({
            padCode: e.padCode,
            name: e.padCode,
            connected: !1,
            rotated: !1,
            loading: !1,
            imageUrl: e.url
          }))),
            m(() => {
              var e
              n.value = { padCode: ((e = s.value[0]) == null ? void 0 : e.padCode) || '' }
            }))
        },
        w = async (t) => {
          i.value && i.value.stop()
          const e = await g({ padCodes: u.value })
          ;((s.value = e.data.map((c) => ({
            padCode: c.padCode,
            name: c.padCode,
            connected: !1,
            rotated: !1,
            loading: !1,
            imageUrl: c.url
          }))),
            m(() => {
              n.value = { padCode: t.padCode }
            }))
        },
        D = d([]),
        p = d(''),
        x = N(() =>
          p.value
            ? s.value.filter((t) => {
                var e
                return (
                  ((e = t.name) == null
                    ? void 0
                    : e.toLowerCase().includes(p.value.toLowerCase())) ||
                  t.padCode.toLowerCase().includes(p.value.toLowerCase())
                )
              })
            : s.value
        )
      return (
        R(() => {
          k()
        }),
        (t, e) => {
          var _
          const c = U('el-tag')
          return (
            l(),
            r('div', $, [
              a('div', q, [
                a('div', E, [
                  a('div', H, [
                    (l(!0),
                    r(
                      V,
                      null,
                      b(x.value, (o) => {
                        var C, v
                        return (
                          l(),
                          r(
                            'div',
                            {
                              key: o.padCode,
                              class: f([
                                'device-card',
                                {
                                  selected: D.value.includes(o.padCode),
                                  connected: o.connected,
                                  'control-active':
                                    ((C = n.value) == null ? void 0 : C.padCode) === o.padCode
                                }
                              ]),
                              onClick: (oe) => w(o)
                            },
                            [
                              a('div', j, [
                                ((v = n.value) == null ? void 0 : v.padCode) === o.padCode
                                  ? (l(),
                                    G(
                                      c,
                                      {
                                        key: 0,
                                        style: { 'margin-left': '5px' },
                                        type: 'warning',
                                        size: 'small',
                                        class: 'control-tag'
                                      },
                                      { default: I(() => [T(' 操控中 ')]), _: 1 }
                                    ))
                                  : h('', !0)
                              ]),
                              a('div', J, [
                                a(
                                  'div',
                                  {
                                    id: 'phoneBox-'.concat(o.padCode),
                                    class: f(['device-screen', { rotated: o.rotated }])
                                  },
                                  [
                                    o.connected
                                      ? h('', !0)
                                      : (l(),
                                        r('div', Q, [
                                          a(
                                            'img',
                                            {
                                              src: o.imageUrl,
                                              alt: '',
                                              style: { width: '100%', height: '100%' }
                                            },
                                            null,
                                            8,
                                            W
                                          )
                                        ]))
                                  ],
                                  10,
                                  O
                                )
                              ]),
                              a('div', X, [a('h4', null, A(o.name || o.padCode), 1)])
                            ],
                            10,
                            P
                          )
                        )
                      }),
                      128
                    ))
                  ])
                ]),
                a('div', Y, [
                  z(
                    K,
                    {
                      ref_key: 'deviceControlScreenRef',
                      ref: i,
                      'pad-code': (_ = n.value) == null ? void 0 : _.padCode
                    },
                    null,
                    8,
                    ['pad-code']
                  )
                ])
              ])
            ])
          )
        }
      )
    }
  })
const ue = M(Z, [['__scopeId', 'data-v-5f089ceb']])
export { ue as default }
