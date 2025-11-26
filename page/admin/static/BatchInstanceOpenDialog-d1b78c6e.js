import {
  y as Y,
  p as X,
  r as x,
  R as Z,
  b as ee,
  w as ae,
  d as te,
  a8 as b,
  f as _,
  G as B,
  H as u,
  i as oe,
  N as r,
  L as j,
  M as T,
  u as s,
  K as C,
  I as N,
  O as S,
  h as se,
  a0 as re,
  F as ne,
  a7 as D
} from './vue-66851fce.js'
import { q as le, h as ie, _ as de } from './index-ae33a03d.js'
import { g as ce, d as pe, c as z, u as U } from './index-e81b6066.js'
import { g as ue, j as ye } from './index-1bdb6a9d.js'
import { P as me } from './ProxySelector-61ddc2fe.js'
import { E as g, G as fe } from './element-74718691.js'
import './vxe-562f9a54.js'
import './index-446a6d1a.js'
import './index-c0fb52a7.js'
function F(I) {
  return le({ url: '/operation-logs/', method: 'post', data: I, baseURL: '/cpyservice' })
}
const ge = { class: 'dialog-footer' },
  he = Y({
    __name: 'BatchInstanceOpenDialog',
    props: {
      visible: { type: Boolean, default: !1 },
      padCodes: { type: Array, default: () => [] },
      isApi: { type: Boolean, default: !0 },
      isHideProxy: { type: Boolean, default: !1 }
    },
    emits: ['update:visible', 'success', 'submit'],
    setup(I, { emit: J }) {
      const { t: a } = ie(),
        q = X('$bus'),
        y = I,
        A = J,
        L = x(),
        V = x(!1),
        w = x(!1),
        e = Z({
          dns: '8.8.8.8',
          countryCode: '',
          androidProp: '',
          modifyAndroidProp: !1,
          selectedProxyId: '',
          isOpenAdb: !1,
          upgradeImage: !1,
          imageId: ''
        }),
        E = x(!1),
        v = x({
          account: '',
          password: '',
          ip: '',
          port: 0,
          proxyType: 'proxy',
          proxyName: 'socks5',
          proxyId: '',
          groupName: ''
        })
      x([])
      const M = x([]),
        H = async () => {
          try {
            const o = await pe()
            o.code === 200 &&
              o.data &&
              o.data.length > 0 &&
              (M.value = o.data.map((t) => ({
                label: 'Android '.concat(t.androidVersion, '_').concat(t.imageVersion),
                value: t.imageId.toLowerCase(),
                version: t.androidVersion
              })))
          } catch (o) {
            console.error(a('instanceBatch.fetchImageListFailed'), o)
          }
        },
        k = x('jp'),
        O = {
          jp: {
            'persist.sys.locale': 'ja-JP',
            'persist.sys.timezone': 'Asia/Tokyo',
            'persist.sys.language': 'ja'
          },
          kr: {
            'persist.sys.locale': 'ko-KR',
            'persist.sys.timezone': 'Asia/Seoul',
            'persist.sys.language': 'ko'
          },
          br: {
            'persist.sys.locale': 'pt-BR',
            'persist.sys.timezone': 'America/Sao_Paulo',
            'persist.sys.language': 'pt'
          },
          vn: {
            'persist.sys.locale': 'vi-VN',
            'persist.sys.timezone': 'Asia/Ho_Chi_Minh',
            'persist.sys.language': 'vi'
          },
          us: {
            'persist.sys.locale': 'en-US',
            'persist.sys.timezone': 'America/New_York',
            'persist.sys.language': 'en'
          },
          gb: {
            'persist.sys.locale': 'en-GB',
            'persist.sys.timezone': 'Europe/London',
            'persist.sys.language': 'en'
          },
          th: {
            'persist.sys.locale': 'th-TH',
            'persist.sys.timezone': 'Asia/Bangkok',
            'persist.sys.language': 'th'
          },
          de: {
            'persist.sys.locale': 'de-DE',
            'persist.sys.timezone': 'Europe/Berlin',
            'persist.sys.language': 'de'
          }
        },
        $ = (o) => {
          if (((E.value = !0), e.modifyAndroidProp))
            if (o && O[o])
              if (e.selectedProxyId) {
                const t = { ...O[o] },
                  d = v.value
                if (d) {
                  t['ro.sys.cloud.proxy.type'] = (d.proxyName || 'socks5').toLowerCase()
                  const n = ''
                    .concat(d.ip || '', '|')
                    .concat(d.port || '', '|')
                    .concat(d.account || '', '|')
                    .concat(d.password || '', '|true')
                  ;((t['ro.sys.cloud.proxy.data'] = n),
                    (t['ro.sys.cloud.proxy.mode'] = (d.proxyType || 'proxy').toLowerCase()))
                }
                ;(e.isOpenAdb && (t['persist.sys.cloud.madb_enable'] = '1'),
                  (e.androidProp = JSON.stringify(t, null, 2)))
              } else {
                const t = { ...O[o] }
                ;(e.isOpenAdb && (t['persist.sys.cloud.madb_enable'] = '1'),
                  (e.androidProp = JSON.stringify(t, null, 2)))
              }
            else e.androidProp = ''
          setTimeout(() => {
            E.value = !1
          }, 500)
        }
      ;(ee(() => {
        ;(H(),
          e.modifyAndroidProp && $('jp'),
          ce({ instance_ids: y.padCodes }).then((o) => {
            o.instances &&
              Array.isArray(o.instances) &&
              (o.instances.some((d) => d.status === 'init') ? (w.value = !0) : (w.value = !1))
          }))
      }),
        ae(() => {
          e.modifyAndroidProp ? $(k.value) : ((e.androidProp = ''), (e.selectedProxyId = ''))
        }))
      const R = () => {
        var o
        ;(A('update:visible', !1), (o = L.value) == null || o.resetFields())
      }
      te(
        v,
        (o) => {
          e.selectedProxyId = o.proxyId
        },
        { deep: !0 }
      )
      const K = async () => {
          const o = { padCodes: y.padCodes }
          if (
            (e.dns && (o.dns = e.dns),
            e.countryCode && (o.countryCode = e.countryCode),
            e.modifyAndroidProp && e.androidProp)
          )
            try {
              const n = JSON.parse(e.androidProp),
                m = n['ro.sys.cloud.proxy.data']
              if (m) {
                const l = m.split('|')
                if (l.length < 4)
                  throw (
                    g.error(a('instanceBatch.proxyDataFormatError')),
                    new Error(a('instanceBatch.proxyDataFormatErrorKey'))
                  )
                if (!l[0] || !l[1])
                  throw (
                    g.error(a('instanceBatch.proxyIpPortEmpty')),
                    new Error(a('instanceBatch.proxyIpPortEmptyKey'))
                  )
              }
              o.androidProp = n
            } catch (n) {
              throw (g.error(a('instanceBatch.androidPropFormatError')), n)
            }
          else e.modifyAndroidProp
          if ((e.upgradeImage && e.imageId && (o.imageId = e.imageId), !y.isApi)) {
            A('submit', o)
            return
          }
          const t = await z(o)
          if (t.data.failList && t.data.failList.length > 0)
            throw (
              g({
                message: D(
                  'div',
                  { style: 'text-align: left;' },
                  t.data.failList.map((n) =>
                    D(
                      'div',
                      { style: 'color: red; margin-bottom: 4px;' },
                      ''.concat(n.padCode, ': ').concat(n.errMsg)
                    )
                  )
                ),
                type: 'error',
                duration: 5e3
              }),
              new Error('部分实例开机失败')
            )
          let d = {}
          if (e.androidProp)
            try {
              const n = JSON.parse(e.androidProp),
                m = n['ro.sys.cloud.proxy.data'] || '',
                [l, p, c, f] = m.split('|')
              if (
                ((d = {
                  account: c || '',
                  password: f || '',
                  ip: l || '',
                  port: p || 8080,
                  proxyType: (n['ro.sys.cloud.proxy.mode'] || 'proxy').toLowerCase(),
                  proxyName: (n['ro.sys.cloud.proxy.type'] || 'socks5').toLowerCase(),
                  proxyTemplateName: '',
                  proxyId: ''
                }),
                e.selectedProxyId || l !== 'xxx.xxx.xx.xx')
              ) {
                const h = o.padCodes.map((P) => ({
                  instance_id: P,
                  update_data: {
                    instance_name: P,
                    proxy_info: JSON.stringify(d),
                    status: 'hasInit'
                  }
                }))
                await U(h)
              }
            } catch (n) {
              console.error('解析androidProp失败:', n)
            }
          try {
            await F({
              action: 'batchOpenInstance',
              details: JSON.stringify(o),
              instance: o.padCodes.join(',')
            })
          } catch (n) {
            console.error('日志记录:', n)
          }
        },
        G = async () => {
          const o = v.value.batchProxies,
            t = y.padCodes.length
          if (o.length < t)
            throw (
              g.error(a('instanceBatch.insufficientProxy', { required: t, available: o.length })),
              new Error(a('instanceBatch.insufficientProxiesKey'))
            )
          const d = y.padCodes.map(async (l, p) => {
              const c = o[p % o.length],
                f = { padCodes: [l] }
              if (
                (e.dns && (f.dns = e.dns),
                e.countryCode && (f.countryCode = e.countryCode),
                e.modifyAndroidProp)
              ) {
                const i = { ...O[k.value] }
                i['ro.sys.cloud.proxy.type'] = (c.proxy_type || 'socks5').toLowerCase()
                const W = ''
                  .concat(c.server_address || '', '|')
                  .concat(c.server_port || '', '|')
                  .concat(c.auth_method || '', '|')
                  .concat(c.password || '', '|true')
                ;((i['ro.sys.cloud.proxy.data'] = W),
                  (i['ro.sys.cloud.proxy.mode'] = (c.mode || 'proxy').toLowerCase()),
                  e.isOpenAdb && (i['persist.sys.cloud.madb_enable'] = '1'),
                  (f.androidProp = i))
              }
              if ((e.upgradeImage && e.imageId && (f.imageId = e.imageId), !y.isApi)) {
                A('submit', f)
                return
              }
              const h = await z(f),
                P = {
                  account: c.auth_method || '',
                  password: c.password || '',
                  ip: c.server_address || '',
                  port: c.server_port || 8080,
                  proxyType: (c.mode || 'proxy').toLowerCase(),
                  proxyName: (c.proxy_type || 'socks5').toLowerCase(),
                  proxyTemplateName: '',
                  proxyId: c.id || '',
                  name: c.name || ''
                }
              await U([
                {
                  instance_id: l,
                  update_data: {
                    instance_name: l,
                    proxy_info: JSON.stringify(P),
                    status: 'hasInit'
                  }
                }
              ])
              try {
                await F({ action: 'batchOpenInstance', details: JSON.stringify(f), instance: l })
              } catch (i) {
                console.error('日志记录:', i)
              }
              return {
                padCode: l,
                success: !h.data.failList || h.data.failList.length === 0,
                error:
                  h.data.failList && h.data.failList.length > 0 ? h.data.failList[0].errMsg : null
              }
            }),
            m = (await Promise.all(d)).filter((l) => !l.success)
          if (m.length > 0)
            throw (
              g({
                message: D(
                  'div',
                  { style: 'text-align: left;' },
                  m.map((l) =>
                    D(
                      'div',
                      { style: 'color: red; margin-bottom: 4px;' },
                      ''.concat(l.padCode, ': ').concat(l.error)
                    )
                  )
                ),
                type: 'error',
                duration: 5e3
              }),
              new Error('部分实例开机失败')
            )
        },
        Q = async () => {
          if (L.value) {
            if (
              (await L.value.validate((o) => {
                if (!o) {
                  g.error(a('instanceBatch.checkFormData'))
                  return
                }
              }),
              !y.padCodes || y.padCodes.length === 0)
            ) {
              g.error(a('instanceBatch.selectInstance'))
              return
            }
            if (w.value && !e.modifyAndroidProp)
              try {
                await fe.confirm(
                  a('instanceBatch.firstStartupMessage'),
                  a('instanceBatch.prompt'),
                  {
                    confirmButtonText: a('instanceBatch.confirm'),
                    cancelButtonText: a('instanceBatch.cancel'),
                    type: 'warning'
                  }
                )
              } catch (o) {
                return
              }
            try {
              V.value = !0
              try {
                const t = await ue()
                if (t) {
                  const d = t.remaining_launches
                  if (y.padCodes.length > d) {
                    ;(g.error(
                      a('quotaInsufficient', { remaining: d, required: y.padCodes.length })
                    ),
                      (V.value = !1))
                    return
                  }
                }
              } catch (t) {
                console.error('获取配额数据失败:', t)
              }
              v.value.batchProxies && v.value.batchProxies.length > 0 ? await G() : await K()
              try {
                await ye(y.padCodes.length)
              } catch (t) {
                console.error('启动计数器调用失败:', t)
              }
              ;(q.emit('updateQuota'),
                g.success(a('instanceBatch.startupSuccess')),
                A('success'),
                R())
            } catch (o) {
              ;(console.error(o), g.error(a('instanceBatch.operationFailed')))
            } finally {
              V.value = !1
            }
          }
        }
      return (o, t) => {
        const d = b('el-input'),
          n = b('el-form-item'),
          m = b('el-switch'),
          l = b('el-alert'),
          p = b('el-option'),
          c = b('el-select'),
          f = b('el-form'),
          h = b('el-button'),
          P = b('el-dialog')
        return (
          _(),
          B(
            P,
            {
              'model-value': I.visible,
              title: s(a)('instanceBatch.dialogTitle'),
              width: '500px',
              onClose: R
            },
            {
              footer: u(() => [
                oe('span', ge, [
                  r(
                    h,
                    { onClick: R },
                    { default: u(() => [j(T(s(a)('instanceBatch.cancel')), 1)]), _: 1 }
                  ),
                  r(
                    h,
                    { type: 'primary', loading: V.value, disabled: E.value, onClick: Q },
                    { default: u(() => [j(T(s(a)('instanceBatch.confirm')), 1)]), _: 1 },
                    8,
                    ['loading', 'disabled']
                  )
                ])
              ]),
              default: u(() => [
                r(
                  f,
                  { ref_key: 'formRef', ref: L, model: e, 'label-width': '100px' },
                  {
                    default: u(() => [
                      r(
                        n,
                        { label: s(a)('instanceBatch.dnsLabel') },
                        {
                          default: u(() => [
                            r(
                              d,
                              {
                                modelValue: e.dns,
                                'onUpdate:modelValue': t[0] || (t[0] = (i) => (e.dns = i)),
                                placeholder: s(a)('instanceBatch.dnsPlaceholder')
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
                      r(
                        n,
                        { label: s(a)('instanceBatch.modifyConfigLabel') },
                        {
                          default: u(() => [
                            r(
                              m,
                              {
                                modelValue: e.modifyAndroidProp,
                                'onUpdate:modelValue':
                                  t[1] || (t[1] = (i) => (e.modifyAndroidProp = i))
                              },
                              null,
                              8,
                              ['modelValue']
                            ),
                            e.modifyAndroidProp
                              ? (_(),
                                B(
                                  l,
                                  {
                                    key: 0,
                                    title: s(a)('instanceBatch.notModifyConfigMessage'),
                                    type: 'info',
                                    closable: !1,
                                    style: { 'margin-top': '10px' }
                                  },
                                  null,
                                  8,
                                  ['title']
                                ))
                              : C('', !0),
                            !e.modifyAndroidProp && w.value
                              ? (_(),
                                B(
                                  l,
                                  {
                                    key: 1,
                                    title: s(a)('instanceBatch.firstStartupConfigMessage'),
                                    type: 'error',
                                    closable: !1,
                                    style: { 'margin-top': '10px' }
                                  },
                                  null,
                                  8,
                                  ['title']
                                ))
                              : C('', !0),
                            !e.modifyAndroidProp && !w.value
                              ? (_(),
                                B(
                                  l,
                                  {
                                    key: 2,
                                    title: s(a)('instanceBatch.doNotModifyConfigMessage'),
                                    type: 'error',
                                    closable: !1,
                                    style: { 'margin-top': '10px' }
                                  },
                                  null,
                                  8,
                                  ['title']
                                ))
                              : C('', !0)
                          ]),
                          _: 1
                        },
                        8,
                        ['label']
                      ),
                      N(
                        r(
                          n,
                          { label: s(a)('instanceBatch.timezoneLanguageLabel') },
                          {
                            default: u(() => [
                              r(
                                c,
                                {
                                  modelValue: k.value,
                                  'onUpdate:modelValue': t[2] || (t[2] = (i) => (k.value = i)),
                                  placeholder: s(a)('instanceBatch.timezoneLanguagePlaceholder'),
                                  onChange: $
                                },
                                {
                                  default: u(() => [
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.japan'), value: 'jp' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.korea'), value: 'kr' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.brazil'), value: 'br' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.vietnam'), value: 'vn' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.usa'), value: 'us' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.uk'), value: 'gb' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.thailand'), value: 'th' },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    r(
                                      p,
                                      { label: s(a)('instanceBatch.germany'), value: 'de' },
                                      null,
                                      8,
                                      ['label']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue', 'placeholder']
                              ),
                              r(
                                l,
                                {
                                  title: s(a)('instanceBatch.timezoneLanguageInfo'),
                                  type: 'info',
                                  closable: !1,
                                  style: { 'margin-top': '10px' }
                                },
                                null,
                                8,
                                ['title']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label']
                        ),
                        [[S, e.modifyAndroidProp]]
                      ),
                      N(
                        r(
                          me,
                          {
                            modelValue: v.value,
                            'onUpdate:modelValue': t[3] || (t[3] = (i) => (v.value = i)),
                            'pad-codes': y.padCodes,
                            isBatch: ''
                          },
                          null,
                          8,
                          ['modelValue', 'pad-codes']
                        ),
                        [[S, e.modifyAndroidProp && !I.isHideProxy]]
                      ),
                      N(
                        r(
                          n,
                          { label: s(a)('instanceBatch.enableAdbLabel') },
                          {
                            default: u(() => [
                              r(
                                m,
                                {
                                  modelValue: e.isOpenAdb,
                                  'onUpdate:modelValue': t[4] || (t[4] = (i) => (e.isOpenAdb = i))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                l,
                                {
                                  title: s(a)('instanceBatch.enableAdbInfo'),
                                  type: 'info',
                                  closable: !1,
                                  style: { 'margin-top': '10px' }
                                },
                                null,
                                8,
                                ['title']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['label']
                        ),
                        [[S, e.modifyAndroidProp]]
                      ),
                      N(
                        r(
                          n,
                          { label: s(a)('instanceBatch.upgradeImageLabel') },
                          {
                            default: u(() => [
                              r(
                                m,
                                {
                                  modelValue: e.upgradeImage,
                                  'onUpdate:modelValue':
                                    t[5] || (t[5] = (i) => (e.upgradeImage = i))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              e.upgradeImage
                                ? (_(),
                                  B(
                                    l,
                                    {
                                      key: 0,
                                      title: s(a)('instanceBatch.upgradeImageInfo'),
                                      type: 'info',
                                      closable: !1,
                                      style: { 'margin-top': '10px' }
                                    },
                                    null,
                                    8,
                                    ['title']
                                  ))
                                : C('', !0)
                            ]),
                            _: 1
                          },
                          8,
                          ['label']
                        ),
                        [[S, e.modifyAndroidProp]]
                      ),
                      e.modifyAndroidProp && e.upgradeImage
                        ? (_(),
                          B(
                            n,
                            {
                              key: 0,
                              label: s(a)('instanceBatch.imageLabel'),
                              prop: 'imageId',
                              rules: [
                                {
                                  required: !0,
                                  message: s(a)('instanceBatch.selectImage'),
                                  trigger: 'change'
                                }
                              ]
                            },
                            {
                              default: u(() => [
                                r(
                                  c,
                                  {
                                    modelValue: e.imageId,
                                    'onUpdate:modelValue': t[6] || (t[6] = (i) => (e.imageId = i)),
                                    placeholder: s(a)('instanceBatch.imagePlaceholder')
                                  },
                                  {
                                    default: u(() => [
                                      (_(!0),
                                      se(
                                        ne,
                                        null,
                                        re(
                                          M.value,
                                          (i) => (
                                            _(),
                                            B(
                                              p,
                                              { key: i.value, label: i.label, value: i.value },
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
                                ),
                                r(
                                  l,
                                  {
                                    title: s(a)('instanceBatch.versionUpgradeOnly'),
                                    type: 'info',
                                    closable: !1,
                                    style: { 'margin-top': '10px' }
                                  },
                                  null,
                                  8,
                                  ['title']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label', 'rules']
                          ))
                        : C('', !0)
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
            ['model-value', 'title']
          )
        )
      }
    }
  })
const Ae = de(he, [['__scopeId', 'data-v-50c96e68']])
export { Ae as default }
