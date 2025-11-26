import { g as M, h as j } from './index-446a6d1a.js'
import { a as E, h as H } from './index-c0fb52a7.js'
import { h as K, _ as O } from './index-ae33a03d.js'
import {
  y as q,
  r as P,
  R as z,
  b as J,
  d as T,
  a8 as y,
  f as c,
  h as g,
  N as m,
  H as d,
  L as C,
  M as v,
  u as s,
  G as x,
  K as _,
  i as S,
  F as I,
  a0 as L
} from './vue-66851fce.js'
const Q = { class: 'option-content' },
  W = { class: 'option-description' },
  X = { key: 0, style: { 'margin-top': '10px' } },
  Y = q({
    __name: 'ProxySelector',
    props: {
      modelValue: { type: Object, default: () => ({}) },
      padCodes: { type: Array, default: () => [] },
      isBatch: { type: Boolean, default: !1 }
    },
    emits: ['update:modelValue'],
    setup(V, { emit: B }) {
      const w = V,
        i = B,
        { t: p } = K(),
        n = P('specified'),
        b = P(''),
        h = P([]),
        f = P(''),
        e = z({
          account: '',
          password: '',
          ip: '',
          port: 0,
          proxyType: 'proxy',
          proxyName: 'socks5',
          proxyId: '',
          groupName: '',
          batchProxies: [],
          name: ''
        }),
        G = async () => {
          try {
            const l = await E()
            h.value = l || []
          } catch (l) {
            console.error('获取代理分组列表失败:', l)
          }
        },
        A = (l, o) => {
          o
            ? ((e.account = o.auth_method || ''),
              (e.password = o.password || ''),
              (e.ip = o.server_address || ''),
              (e.port = o.server_port || 8080),
              (e.proxyType = (o.mode || 'proxy').toLowerCase()),
              (e.proxyName = (o.proxy_type || 'socks5').toLowerCase()),
              (e.proxyId = o.id),
              (e.name = o.name),
              i('update:modelValue', { ...e, radioType: n.value }))
            : ((e.account = ''),
              (e.password = ''),
              (e.ip = ''),
              (e.port = 0),
              (e.proxyType = 'proxy'),
              (e.proxyName = 'socks5'),
              (e.proxyId = ''),
              (e.name = ''),
              i('update:modelValue', { ...e, radioType: n.value }))
        },
        R = async (l) => {
          var o
          if (
            ((e.account = ''),
            (e.password = ''),
            (e.ip = ''),
            (e.port = 0),
            (e.proxyType = 'proxy'),
            (e.proxyName = 'socks5'),
            (e.proxyId = ''),
            (e.name = ''),
            !l)
          ) {
            i('update:modelValue', { ...e, radioType: n.value })
            return
          }
          try {
            const r = (o = h.value.find((u) => u.name === l)) == null ? void 0 : o.name
            if (r) {
              e.groupName = r
              try {
                const t = await H(r)
                t &&
                  ((e.account = t.auth_method || ''),
                  (e.password = t.password || ''),
                  (e.ip = t.server_address || ''),
                  (e.port = t.server_port || 8080),
                  (e.proxyType = (t.mode || 'proxy').toLowerCase()),
                  (e.proxyName = (t.proxy_type || 'socks5').toLowerCase()),
                  (e.proxyId = t.id),
                  (e.name = t.name))
              } catch (u) {
                ;((e.account = ''),
                  (e.password = ''),
                  (e.ip = ''),
                  (e.port = 0),
                  (e.proxyType = 'proxy'),
                  (e.proxyName = 'socks5'),
                  (e.proxyId = ''),
                  (e.name = ''))
              }
              i('update:modelValue', { ...e, radioType: n.value })
            }
          } catch (r) {
            console.error('获取随机代理失败:', r)
          }
        },
        U = async (l) => {
          var o
          if (
            ((e.account = ''),
            (e.password = ''),
            (e.ip = ''),
            (e.port = 0),
            (e.proxyType = 'proxy'),
            (e.proxyName = 'socks5'),
            (e.proxyId = ''),
            !l)
          ) {
            i('update:modelValue', { ...e, radioType: n.value })
            return
          }
          try {
            const r = (o = h.value.find((u) => u.name === l)) == null ? void 0 : o.name
            if (r) {
              e.groupName = r
              const u = w.padCodes ? w.padCodes.length : 0
              if (u > 0) {
                const t = await j({ group_name: r, count: u })
                ;((e.batchProxies = t || []),
                  i('update:modelValue', {
                    ...e,
                    batchProxies: e.batchProxies,
                    radioType: n.value
                  }))
              }
            }
          } catch (r) {
            console.error('获取批量随机代理失败:', r)
          }
        }
      return (
        J(() => {
          G()
        }),
        T(
          () => w.modelValue.proxyId,
          (l) => {
            b.value = l
          }
        ),
        T(n, (l) => {
          ;((b.value = ''),
            (f.value = ''),
            (e.account = ''),
            (e.password = ''),
            (e.ip = ''),
            (e.port = 0),
            (e.proxyType = 'proxy'),
            (e.proxyName = 'socks5'),
            (e.proxyId = ''),
            (e.groupName = ''),
            i('update:modelValue', { ...e, radioType: n.value }))
        }),
        (l, o) => {
          const r = y('el-radio'),
            u = y('el-radio-group'),
            t = y('el-form-item'),
            D = y('CPaginationSelect'),
            k = y('el-option'),
            N = y('el-select'),
            F = y('el-alert')
          return (
            c(),
            g('div', null, [
              m(
                t,
                { label: s(p)('instanceProxySelector.proxyType') },
                {
                  default: d(() => [
                    m(
                      u,
                      {
                        modelValue: n.value,
                        'onUpdate:modelValue': o[0] || (o[0] = (a) => (n.value = a))
                      },
                      {
                        default: d(() => [
                          m(
                            r,
                            { label: 'specified' },
                            {
                              default: d(() => [
                                C(v(s(p)('instanceProxySelector.specifiedProxy')), 1)
                              ]),
                              _: 1
                            }
                          ),
                          V.isBatch
                            ? _('', !0)
                            : (c(),
                              x(
                                r,
                                { key: 0, 'data-radio-type': 'random', label: 'random' },
                                {
                                  default: d(() => [
                                    C(v(s(p)('instanceProxySelector.randomProxy')), 1)
                                  ]),
                                  _: 1
                                }
                              )),
                          V.isBatch
                            ? (c(),
                              x(
                                r,
                                { key: 1, 'data-radio-type': 'batchrandom', label: 'batchrandom' },
                                {
                                  default: d(() => [
                                    C(v(s(p)('instanceProxySelector.randomProxy')), 1)
                                  ]),
                                  _: 1
                                }
                              ))
                            : _('', !0)
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
              ),
              n.value === 'specified'
                ? (c(),
                  x(
                    t,
                    { key: 0, label: s(p)('instanceProxySelector.selectProxy') },
                    {
                      default: d(() => [
                        m(
                          D,
                          {
                            modelValue: b.value,
                            'onUpdate:modelValue': o[1] || (o[1] = (a) => (b.value = a)),
                            api: s(M),
                            'value-key': 'id',
                            'label-key': 'name',
                            placeholder: s(p)('instanceProxySelector.pleaseSelectProxy'),
                            immediate: !0,
                            onChange: A,
                            getItemLabel: (a) =>
                              a.name +
                              '(国家：' +
                              (a.country_code || '--') +
                              '，分组：' +
                              (a.group_name || '--') +
                              ')',
                            'use-custom-slot': !0
                          },
                          {
                            default: d(({ item: a }) => [
                              S('div', Q, [
                                S('span', null, v(a.name), 1),
                                S(
                                  'span',
                                  W,
                                  v(
                                    s(p)('instanceProxySelector.proxyDescription', {
                                      country: a.country_code || '--',
                                      group: a.group_name || '--'
                                    })
                                  ),
                                  1
                                )
                              ])
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'api', 'placeholder', 'getItemLabel']
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['label']
                  ))
                : _('', !0),
              n.value === 'random'
                ? (c(),
                  x(
                    t,
                    { key: 1, label: s(p)('instanceProxySelector.group') },
                    {
                      default: d(() => [
                        m(
                          N,
                          {
                            modelValue: f.value,
                            'onUpdate:modelValue': o[2] || (o[2] = (a) => (f.value = a)),
                            clearable: '',
                            placeholder: s(p)('instanceProxySelector.pleaseSelectProxyGroup'),
                            filterable: '',
                            onChange: R,
                            style: { width: '100%' }
                          },
                          {
                            default: d(() => [
                              (c(!0),
                              g(
                                I,
                                null,
                                L(
                                  h.value,
                                  (a) => (
                                    c(),
                                    x(k, { key: a.uuid, label: a.name, value: a.name }, null, 8, [
                                      'label',
                                      'value'
                                    ])
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
                  ))
                : _('', !0),
              n.value === 'batchrandom'
                ? (c(),
                  x(
                    t,
                    { key: 2, label: s(p)('instanceProxySelector.group') },
                    {
                      default: d(() => [
                        m(
                          N,
                          {
                            modelValue: f.value,
                            'onUpdate:modelValue': o[3] || (o[3] = (a) => (f.value = a)),
                            clearable: '',
                            placeholder: s(p)('instanceProxySelector.pleaseSelectProxyGroup'),
                            filterable: '',
                            onChange: U,
                            style: { width: '100%' }
                          },
                          {
                            default: d(() => [
                              (c(!0),
                              g(
                                I,
                                null,
                                L(
                                  h.value,
                                  (a) => (
                                    c(),
                                    x(k, { key: a.uuid, label: a.name, value: a.name }, null, 8, [
                                      'label',
                                      'value'
                                    ])
                                  )
                                ),
                                128
                              ))
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'placeholder']
                        ),
                        e.batchProxies && e.batchProxies.length > 0
                          ? (c(),
                            g('div', X, [
                              m(
                                F,
                                {
                                  title: s(p)('instanceProxySelector.obtainedRandomProxies', {
                                    count: e.batchProxies.length
                                  }),
                                  type: 'success',
                                  closable: !1,
                                  'show-icon': ''
                                },
                                null,
                                8,
                                ['title']
                              )
                            ]))
                          : _('', !0)
                      ]),
                      _: 1
                    },
                    8,
                    ['label']
                  ))
                : _('', !0)
            ])
          )
        }
      )
    }
  })
const ae = O(Y, [['__scopeId', 'data-v-6c25db13']])
export { ae as P }
