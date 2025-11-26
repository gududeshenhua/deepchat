import {
  y as E,
  r as i,
  d as D,
  b as I,
  m as $,
  f as p,
  h as g,
  B as z,
  K as h,
  i as C,
  M as F,
  u as R,
  N as G,
  H as O,
  L as P,
  n as j,
  ar as q,
  as as J,
  aw as K,
  aq as Q,
  G as X
} from './vue-66851fce.js'
import { v as x, _ as Y } from './v4-3a210e2e.js'
import { j as Z, k as ee, h as oe } from './index-e81b6066.js'
import { h as ne, _ as H } from './index-ae33a03d.js'
import { s as te, a as l, L as ae } from './function-call-b9e3413a.js'
import { w as se } from './index-ba0a22a8.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
se(te)
const le = (c) => (q('data-v-87ff3331'), (c = c()), J(), c),
  re = ['id'],
  ie = { key: 1, class: 'mobile-toolbar' },
  ce = le(() => C('span', { class: 'tool-icon' }, '📸', -1)),
  de = { class: 'tool-label' },
  ue = { key: 2, class: 'mobile-loading' },
  pe = E({
    __name: 'MobileDeviceControlScreen',
    props: {
      padCode: { type: String, default: '' },
      headerHeight: { type: Number, default: 46 },
      footerHeight: { type: Number, default: 60 }
    },
    setup(c, { expose: f }) {
      const a = c,
        { t: r } = ne(),
        s = i(!1),
        u = i(!1),
        M = i(null),
        y = i({}),
        b = i({ rotate: 0 })
      D(
        () => a.padCode,
        (t) => {
          t &&
            j(() => {
              ;(v(),
                setTimeout(() => {
                  u.value && w()
                }, 200))
            })
        }
      )
      const v = () => {
        const t = window.innerHeight,
          d = window.innerWidth,
          m = t,
          e = d,
          n = 9 / 16,
          _ = m - 20,
          S = _ * n
        ;((y.value = {
          width: ''.concat(S, 'px'),
          height: ''.concat(_, 'px'),
          maxWidth: '100%',
          maxHeight: '100%'
        }),
          (u.value = !0),
          a.headerHeight,
          a.footerHeight)
      }
      ;(I(() => {
        a.padCode &&
          setTimeout(() => {
            ;(v(), window.addEventListener('resize', v))
          }, 100)
      }),
        $(() => {
          ;(window.removeEventListener('resize', v), k(), T())
        }))
      const o = i(null),
        T = async () => {
          ;(await Z({ padCodes: [a.padCode] }), o.value && o.value.stop(), l('停止拉流成功'))
        },
        w = async () => {
          s.value = !0
          try {
            const m = {
              token: (await ee({ padCode: a.padCode })).data.token,
              baseUrl: 'https://openapi-hk.armcloud.net',
              isWsProxy: !1,
              retryCount: 3,
              uuid: x(),
              enableMicrophone: !0,
              enableCamera: !0,
              deviceInfo: {
                padCode: a.padCode,
                userId: x(),
                videoStream: { resolution: 13, frameRate: 2, bitrate: 2 },
                autoRecoveryTime: 0,
                mediaType: 3,
                keyboard: 'local',
                saveCloudClipboard: !0
              },
              viewId: 'mobileControlScreen-'.concat(a.padCode),
              callbacks: {
                onInit: (e) => {
                  var n
                  ;((n = o.value) == null || n.start(), (s.value = !1))
                },
                onConnectSuccess: () => {
                  ;(l('连接成功'), (s.value = !1))
                },
                onMonitorOperation: (e) => {},
                onConnectFail: ({ code: e, msg: n }) => {
                  ;(l('连接失败: '.concat(n)), (s.value = !1))
                },
                onMediaDevicesToggle: (e) => {},
                onAutoRecoveryTime: () => {
                  l('设备无操作，暂停拉流')
                },
                onAutoplayFailed: (e) => {},
                onRunInformation: (e) => {},
                onChangeResolution: (e, n) => {},
                onTransparentMsg: (e, n) => {},
                onErrorMessage: (e) => {
                  l('播放异常，请重试')
                },
                onOutputClipper: (e) => {},
                onRenderedFirstFrame: (e) => {},
                onAudioRecovery: () => {},
                onAudioPause: () => {},
                onSocketCallback: ({ code: e }) => {},
                onProgress: (e) => {},
                onGroupControlError: (e) => {},
                onUserLeaveOrJoin: (e) => {},
                onSendUserError: (e) => {
                  e.code
                },
                onConnectionStateChanged: (e) => {},
                onEquipmentInfo: (e) => {},
                onVideoInit: (e) => {},
                onVideoError: (e) => {
                  e.code
                },
                onAudioInit: (e) => {},
                onAudioError: (e) => {},
                onInjectVideoResult: (e, n) => {},
                onChangeRotate: (e, n) => {
                  b.value.rotate = e
                },
                onUserJoined: (e) => {
                  var n
                  ;(n = o.value) == null ||
                    n.executeAdbCommand('settings put system accelerometer_rotation 0')
                }
              }
            }
            o.value = new Y(m)
          } catch (t) {
            ;(console.error('移动端初始化失败:', t), l('初始化失败，请重试'), (s.value = !1))
          }
        },
        A = () => {
          o.value && o.value.setPhoneRotation(b.value.rotate ? 0 : 1)
        },
        U = () => {
          o.value && o.value.sendCommand('back')
        },
        V = () => {
          o.value && o.value.sendCommand('home')
        },
        L = () => {
          o.value && o.value.sendCommand('menu')
        },
        N = () => {
          o.value && o.value.increaseVolume()
        },
        W = () => {
          o.value && o.value.decreaseVolume()
        },
        B = async () => {
          if (!a.padCode) {
            l(r('storageManagement.screenshotNoInstance'))
            return
          }
          try {
            s.value = !0
            const t = await oe({ padCodes: [a.padCode], format: 'png', quality: '100' })
            if (t.data) {
              const d = t.data[0].url
              ;(window.open(d, '_blank'), l(r('storageManagement.screenshotSuccess')))
            } else throw new Error('未获取到截图URL')
          } catch (t) {
            ;(console.error('截图失败:', t),
              l(r('storageManagement.screenshotFailed') + ': ' + t.message))
          } finally {
            s.value = !1
          }
        },
        k = () => {
          o.value && o.value.stop()
        }
      return (
        f({
          initEngine: async (t) => {
            t && (await w())
          },
          stop: k,
          rotateScreen: A,
          back: U,
          home: V,
          task: L,
          volumeUp: N,
          volumeDown: W
        }),
        (t, d) => (
          p(),
          g(
            'div',
            { class: 'mobile-phone-box-body', ref_key: 'containerRef', ref: M },
            [
              u.value
                ? (p(),
                  g(
                    'div',
                    {
                      key: 0,
                      class: 'mobile-video-wrapper',
                      id: 'mobileControlScreen-'.concat(c.padCode),
                      style: z(y.value)
                    },
                    null,
                    12,
                    re
                  ))
                : h('', !0),
              u.value
                ? (p(),
                  g('div', ie, [
                    C('button', { class: 'tool-button screenshot-btn', onClick: B }, [
                      ce,
                      C('span', de, F(R(r)('storageManagement.screenshot')), 1)
                    ])
                  ]))
                : h('', !0),
              s.value
                ? (p(),
                  g('div', ue, [
                    G(
                      R(ae),
                      { type: 'spinner', size: '24px' },
                      { default: O(() => [P('loading...')]), _: 1 }
                    )
                  ]))
                : h('', !0)
            ],
            512
          )
        )
      )
    }
  })
const ve = H(pe, [['__scopeId', 'data-v-87ff3331']]),
  me = E({
    __name: 'ConnectCloudHost',
    setup(c) {
      const f = K()
      Q()
      const a = i(f.params.id),
        r = i(null)
      return (
        I(() => {
          r.value && a.value && r.value.initEngine(a.value)
        }),
        (s, u) => (
          p(),
          X(
            ve,
            {
              ref_key: 'deviceControlScreenRef',
              ref: r,
              'pad-code': a.value,
              class: 'device-screen'
            },
            null,
            8,
            ['pad-code']
          )
        )
      )
    }
  })
const Se = H(me, [['__scopeId', 'data-v-2f979092']])
export { Se as default }
