import { x as K, y as j, E as b } from './element-74718691.js'
import { g as q, s as S, u as E } from './index-e81b6066.js'
import { P as G } from './ProxySelector-61ddc2fe.js'
import { c as H } from './permission-ed9d37b8.js'
import { h as z, _ as Q } from './index-ae33a03d.js'
import {
  y as W,
  r as f,
  d as R,
  b as X,
  a8 as m,
  f as P,
  G as T,
  H as r,
  N as t,
  L as A,
  M,
  u as p,
  h as Y,
  K as O
} from './vue-66851fce.js'
import './index-446a6d1a.js'
import './index-c0fb52a7.js'
import './vxe-562f9a54.js'
const Z = { key: 0 },
  ee = W({
    __name: 'SetInstanceProxyDialog',
    props: {
      visible: { type: Boolean, default: !1 },
      rowData: { type: Object, default: () => ({}) },
      padCodes: { type: Array, default: () => [] },
      isBatch: { type: Boolean, default: !1 }
    },
    emits: ['update:visible', 'success'],
    setup(V, { emit: $ }) {
      const { t: n } = z(),
        u = V,
        g = $
      f([])
      const B = f(!1),
        U = f(!1),
        c = f({
          account: '',
          password: '',
          ip: '',
          port: 0,
          proxyType: 'proxy',
          proxyName: 'socks5',
          proxyId: '',
          groupName: '',
          name: '',
          radioType: 'specified'
        }),
        e = f({
          account: '',
          password: '',
          ip: '',
          port: 0,
          enable: !0,
          padCodes: [],
          bypassPackageList: [],
          proxyType: 'proxy',
          proxyName: 'socks5',
          bypassIpList: [],
          bypassDomainList: [],
          sUoT: !0,
          proxyTemplateName: '',
          proxyId: '',
          name: ''
        }),
        I = f(!1),
        D = () => {
          u.padCodes && u.padCodes.length > 0
            ? (e.value.padCodes = u.padCodes)
            : u.rowData && u.rowData.padCode && (e.value.padCodes = [u.rowData.padCode])
        }
      R(
        () => u.visible,
        (s) => {
          s && D()
        }
      )
      const F = async () => {
        ;((B.value = !0), (U.value = !0))
        try {
          if (e.value.padCodes && e.value.padCodes.length == 1) {
            const s = await q({ instance_ids: [e.value.padCodes[0]] })
            s.instances &&
              s.instances.length > 0 &&
              s.instances.forEach((o) => {
                if (o.instance_id == e.value.padCodes[0]) {
                  const a = JSON.parse(o.proxy_info)
                  ;((c.value = {
                    account: a.account || '',
                    password: a.password || '',
                    ip: a.ip || '',
                    port: a.port || 8080,
                    proxyType: a.proxyType || 'proxy',
                    proxyName: a.proxyName || 'socks5',
                    proxyId: a.proxyId || '',
                    name: a.name || '',
                    groupName: '',
                    radioType: 'specified'
                  }),
                    (e.value.account = a.account || ''),
                    (e.value.password = a.password || ''),
                    (e.value.ip = a.ip || ''),
                    (e.value.port = a.port || 8080),
                    (e.value.proxyType = a.proxyType || 'proxy'),
                    (e.value.proxyName = a.proxyName || 'socks5'),
                    (e.value.proxyTemplateName = a.proxyTemplateName || ''),
                    (e.value.proxyId = a.proxyId),
                    (e.value.name = a.name || ''))
                }
              })
          }
        } catch (s) {
          console.error('获取代理列表失败:', s)
        } finally {
          ;((B.value = !1),
            setTimeout(() => {
              U.value = !1
            }, 1e3))
        }
      }
      ;(R(
        c,
        (s) => {
          ;((e.value.account = s.account || ''),
            (e.value.password = s.password || ''),
            (e.value.ip = s.ip || ''),
            (e.value.port = s.port || 8080),
            (e.value.proxyType = (s.proxyType || 'proxy').toLowerCase()),
            (e.value.proxyName = (s.proxyName || 'socks5').toLowerCase()),
            (e.value.proxyTemplateName = s.proxyId ? ''.concat(s.proxyId) : ''),
            (e.value.proxyId = s.proxyId || ''),
            (e.value.name = s.name || ''))
        },
        { deep: !0 }
      ),
        X(async () => {
          ;(D(), F())
        }))
      const L = () => {
          g('update:visible', !1)
        },
        J = async () => {
          if (!['proxy', 'vpn'].includes(e.value.proxyType)) {
            b.error(n('instanceList.setInstanceProxyInvalidType'))
            return
          }
          if (!['socks5', 'http-relay'].includes(e.value.proxyName)) {
            b.error(n('instanceList.setInstanceProxyInvalidTypeName'))
            return
          }
          try {
            if (c.value.radioType === 'specified' || c.value.radioType === 'random') {
              const a = await S(e.value),
                i = e.value.padCodes.map((x) => ({
                  instance_id: x,
                  update_data: { instance_name: x, proxy_info: JSON.stringify(e.value) }
                }))
              ;(await E(i), g('success', a), L())
            } else if (c.value.batchProxies && c.value.batchProxies.length > 0) {
              const i = c.value.batchProxies,
                x = u.padCodes.length
              if (i.length < x)
                throw (
                  b.error(
                    n('instanceBatch.insufficientProxy', { required: x, available: i.length })
                  ),
                  new Error(n('instanceBatch.insufficientProxiesKey'))
                )
              const C = u.padCodes.map(async (d, k) => {
                  const y = i[k % i.length],
                    w = {
                      account: y.auth_method || '',
                      password: y.password || '',
                      ip: y.server_address || '',
                      port: y.server_port || 8080,
                      proxyType: (y.mode || 'proxy').toLowerCase(),
                      proxyName: (y.proxy_type || 'socks5').toLowerCase(),
                      proxyTemplateName: '',
                      proxyId: y.id || '',
                      name: y.name || '',
                      enable: !0
                    },
                    l = { padCodes: [d], ...w },
                    _ = await S(l)
                  return (
                    await E([
                      {
                        instance_id: d,
                        update_data: {
                          instance_name: d,
                          proxy_info: JSON.stringify(w),
                          status: 'hasInit'
                        }
                      }
                    ]),
                    {
                      padCode: d,
                      success: !_.data.failList || _.data.failList.length === 0,
                      error:
                        _.data.failList && _.data.failList.length > 0
                          ? _.data.failList[0].errMsg
                          : null
                    }
                  )
                }),
                v = (await Promise.all(C)).filter((d) => !d.success)
              if (v.length > 0)
                throw (
                  b({
                    message: h(
                      'div',
                      { style: 'text-align: left;' },
                      v.map((d) =>
                        h(
                          'div',
                          { style: 'color: red; margin-bottom: 4px;' },
                          ''.concat(d.padCode, ': ').concat(d.error)
                        )
                      )
                    ),
                    type: 'error',
                    duration: 5e3
                  }),
                  new Error('部分实例开机失败')
                )
              ;(g('success', {}), L())
            } else b.error(n('instanceBatch.operationFailed'))
          } catch (a) {
            console.error('setInstanceProxy error:', a)
          }
        }
      return (s, o) => {
        const a = m('el-input'),
          i = m('el-form-item'),
          x = m('el-icon'),
          C = m('el-input-number'),
          N = m('el-switch'),
          v = m('el-option'),
          d = m('el-select'),
          k = m('el-form'),
          y = m('el-button'),
          w = m('el-dialog')
        return (
          P(),
          T(
            w,
            {
              title: p(n)('instanceList.setInstanceProxyTitle'),
              'model-value': V.visible,
              'onUpdate:modelValue': L,
              width: '500px'
            },
            {
              footer: r(() => [
                t(
                  y,
                  { onClick: L },
                  { default: r(() => [A(M(p(n)('instanceList.setInstanceProxyCancel')), 1)]), _: 1 }
                ),
                t(
                  y,
                  { type: 'primary', onClick: J },
                  {
                    default: r(() => [A(M(p(n)('instanceList.setInstanceProxyConfirm')), 1)]),
                    _: 1
                  }
                )
              ]),
              default: r(() => [
                t(
                  k,
                  { model: e.value, 'label-width': '120px' },
                  {
                    default: r(() => [
                      t(
                        G,
                        {
                          isBatch: u.isBatch,
                          'pad-codes': u.padCodes,
                          modelValue: c.value,
                          'onUpdate:modelValue': o[0] || (o[0] = (l) => (c.value = l))
                        },
                        null,
                        8,
                        ['isBatch', 'pad-codes', 'modelValue']
                      ),
                      c.value.radioType == 'specified' || c.value.radioType == 'random'
                        ? (P(),
                          Y('div', Z, [
                            t(
                              i,
                              { label: p(n)('instanceList.setInstanceProxyAccountLabel') },
                              {
                                default: r(() => [
                                  t(
                                    a,
                                    {
                                      modelValue: e.value.account,
                                      'onUpdate:modelValue':
                                        o[1] || (o[1] = (l) => (e.value.account = l)),
                                      placeholder: p(n)(
                                        'instanceList.setInstanceProxyAccountPlaceholder'
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
                            p(H)(['proxy:password'])
                              ? (P(),
                                T(
                                  i,
                                  {
                                    key: 0,
                                    label: p(n)('instanceList.setInstanceProxyPasswordLabel')
                                  },
                                  {
                                    default: r(() => [
                                      t(
                                        a,
                                        {
                                          placeholder: p(n)(
                                            'instanceList.setInstanceProxyPasswordPlaceholder'
                                          ),
                                          modelValue: e.value.password,
                                          'onUpdate:modelValue':
                                            o[3] || (o[3] = (l) => (e.value.password = l)),
                                          type: I.value ? 'text' : 'password',
                                          autocomplete: 'new-password'
                                        },
                                        {
                                          suffix: r(() => [
                                            t(
                                              x,
                                              {
                                                style: { cursor: 'pointer' },
                                                onClick:
                                                  o[2] || (o[2] = (l) => (I.value = !I.value))
                                              },
                                              {
                                                default: r(() => [
                                                  I.value
                                                    ? (P(), T(p(K), { key: 0 }))
                                                    : (P(), T(p(j), { key: 1 }))
                                                ]),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        ['placeholder', 'modelValue', 'type']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['label']
                                ))
                              : O('', !0),
                            t(
                              i,
                              { label: p(n)('instanceList.setInstanceProxyPortLabel') },
                              {
                                default: r(() => [
                                  t(
                                    C,
                                    {
                                      modelValue: e.value.port,
                                      'onUpdate:modelValue':
                                        o[4] || (o[4] = (l) => (e.value.port = l)),
                                      min: 1,
                                      max: 65535
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
                            t(
                              i,
                              { label: p(n)('instanceList.setInstanceProxyEnableLabel') },
                              {
                                default: r(() => [
                                  t(
                                    N,
                                    {
                                      modelValue: e.value.enable,
                                      'onUpdate:modelValue':
                                        o[5] || (o[5] = (l) => (e.value.enable = l))
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
                            t(
                              i,
                              { label: p(n)('instanceList.setInstanceProxyTypeLabel') },
                              {
                                default: r(() => [
                                  t(
                                    d,
                                    {
                                      modelValue: e.value.proxyType,
                                      'onUpdate:modelValue':
                                        o[6] || (o[6] = (l) => (e.value.proxyType = l))
                                    },
                                    {
                                      default: r(() => [
                                        t(v, { label: 'proxy', value: 'proxy' }),
                                        t(v, { label: 'vpn', value: 'vpn' })
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
                            t(
                              i,
                              { label: p(n)('instanceList.setInstanceProxyTypeNameLabel') },
                              {
                                default: r(() => [
                                  t(
                                    d,
                                    {
                                      modelValue: e.value.proxyName,
                                      'onUpdate:modelValue':
                                        o[7] || (o[7] = (l) => (e.value.proxyName = l))
                                    },
                                    {
                                      default: r(() => [
                                        t(v, { label: 'socks5', value: 'socks5' }),
                                        t(v, { label: 'http-relay', value: 'http-relay' })
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
                            t(
                              i,
                              { label: p(n)('instanceList.setInstanceProxyUdpLabel') },
                              {
                                default: r(() => [
                                  t(
                                    N,
                                    {
                                      modelValue: e.value.sUoT,
                                      'onUpdate:modelValue':
                                        o[8] || (o[8] = (l) => (e.value.sUoT = l))
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
                          ]))
                        : O('', !0)
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
            ['title', 'model-value']
          )
        )
      }
    }
  })
const de = Q(ee, [['__scopeId', 'data-v-81dda3bf']])
export { de as default }
