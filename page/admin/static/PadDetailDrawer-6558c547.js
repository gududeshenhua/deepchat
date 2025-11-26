import { p as C } from './index-e81b6066.js'
import { I as k } from './InstanceStatusTag-23042b65.js'
import { h as w, _ as I } from './index-ae33a03d.js'
import {
  y as x,
  r as b,
  d as h,
  b as B,
  a8 as p,
  ag as O,
  f as o,
  G as u,
  H as e,
  I as T,
  h as z,
  N as l,
  u as t,
  L as i,
  M as s
} from './vue-66851fce.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
const G = x({
  __name: 'PadDetailDrawer',
  props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
  emits: ['update:visible'],
  setup(v, { emit: N }) {
    const { t: a } = w(),
      _ = v,
      n = b({}),
      f = b(!1),
      m = async () => {
        if (_.padCode) {
          f.value = !0
          try {
            const c = await C({ padCodes: [_.padCode] })
            n.value = c.data.pageData[0] || {}
          } catch (c) {
            console.error(c)
          } finally {
            f.value = !1
          }
        }
      }
    return (
      h(
        () => _.visible,
        (c) => {
          c && m()
        }
      ),
      B(() => {
        m()
      }),
      (c, D) => {
        const d = p('el-descriptions-item'),
          r = p('el-tag'),
          y = p('el-descriptions'),
          L = p('el-drawer'),
          S = O('loading')
        return (
          o(),
          u(
            L,
            {
              'model-value': v.visible,
              'onUpdate:modelValue': D[0] || (D[0] = (g) => c.$emit('update:visible', g)),
              title: t(a)('instanceList.padDetailTitle'),
              direction: 'rtl',
              size: '50%'
            },
            {
              default: e(() => [
                T(
                  (o(),
                  z('div', null, [
                    l(
                      y,
                      { column: 1, border: '' },
                      {
                        default: e(() => [
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailCode') },
                            { default: e(() => [i(s(n.value.padCode), 1)]), _: 1 },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailImageId') },
                            { default: e(() => [i(s(n.value.imageId), 1)]), _: 1 },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailSpec') },
                            { default: e(() => [i(s(n.value.deviceLevel), 1)]), _: 1 },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailScreenLayoutCode') },
                            { default: e(() => [i(s(n.value.screenLayoutCode), 1)]), _: 1 },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailStatus') },
                            {
                              default: e(() => [
                                l(k, { status: n.value.padStatus }, null, 8, ['status'])
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailDeviceStatus') },
                            {
                              default: e(() => [
                                n.value.deviceStatus == 1
                                  ? (o(),
                                    u(
                                      r,
                                      { key: 0, type: 'success' },
                                      {
                                        default: e(() => [
                                          i(s(t(a)('instanceList.padDetailOnline')), 1)
                                        ]),
                                        _: 1
                                      }
                                    ))
                                  : (o(),
                                    u(
                                      r,
                                      { key: 1, type: 'info' },
                                      {
                                        default: e(() => [
                                          i(s(t(a)('instanceList.padDetailOffline')), 1)
                                        ]),
                                        _: 1
                                      }
                                    ))
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailOnlineStatus') },
                            {
                              default: e(() => [
                                n.value.online == 1
                                  ? (o(),
                                    u(
                                      r,
                                      { key: 0, type: 'success' },
                                      {
                                        default: e(() => [
                                          i(s(t(a)('instanceList.padDetailOnline')), 1)
                                        ]),
                                        _: 1
                                      }
                                    ))
                                  : (o(),
                                    u(
                                      r,
                                      { key: 1, type: 'info' },
                                      {
                                        default: e(() => [
                                          i(s(t(a)('instanceList.padDetailOffline')), 1)
                                        ]),
                                        _: 1
                                      }
                                    ))
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailStreamStatus') },
                            {
                              default: e(() => [
                                n.value.streamStatus == 1
                                  ? (o(),
                                    u(
                                      r,
                                      { key: 0, type: 'success' },
                                      {
                                        default: e(() => [
                                          i(s(t(a)('instanceList.padDetailStreaming')), 1)
                                        ]),
                                        _: 1
                                      }
                                    ))
                                  : (o(),
                                    u(
                                      r,
                                      { key: 1, type: 'info' },
                                      {
                                        default: e(() => [
                                          i(s(t(a)('instanceList.padDetailIdle')), 1)
                                        ]),
                                        _: 1
                                      }
                                    ))
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailStorageTotal') },
                            {
                              default: e(() => [
                                i(
                                  s((n.value.dataSize / (1024 * 1024 * 1024)).toFixed(2)) + ' GB',
                                  1
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailStorageUsed') },
                            {
                              default: e(() => [
                                i(
                                  s((n.value.dataSizeUsed / (1024 * 1024 * 1024)).toFixed(2)) +
                                    ' GB',
                                  1
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['label']
                          ),
                          l(
                            d,
                            { label: t(a)('instanceList.padDetailCountry') },
                            { default: e(() => [i(s(n.value.countryCode), 1)]), _: 1 },
                            8,
                            ['label']
                          )
                        ]),
                        _: 1
                      }
                    )
                  ])),
                  [[S, f.value]]
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
const E = I(G, [['__scopeId', 'data-v-714b6c18']])
export { E as default }
