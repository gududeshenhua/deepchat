import { H as pe, M as ve, E as v, G as _e, N as L, O as me, n as ge } from './element-74718691.js'
import { v as ee, _ as fe } from './v4-3a210e2e.js'
import { k as he, j as be, h as ye } from './index-e81b6066.js'
import {
  y as X,
  r as c,
  a8 as S,
  f as x,
  h as E,
  N as r,
  H as b,
  u as d,
  i as e,
  M as k,
  G as W,
  K as O,
  L as z,
  b as oe,
  d as ae,
  ag as ne,
  a1 as we,
  I as se,
  ar as le,
  as as ie,
  m as Ie,
  F as Ce,
  n as Se
} from './vue-66851fce.js'
import { a as ke, b as Me } from './index-b201494c.js'
import { h as Y, _ as Z, m as te } from './index-ae33a03d.js'
import { s as je, c as xe, u as Ve, S as Fe } from './index-96d3c23e.js'
const Ue = { class: 'video-upload-area' },
  $e = { class: 'el-upload__text' },
  Be = { class: 'upload-title' },
  De = { class: 'upload-hint' },
  Te = { key: 0, class: 'upload-controls' },
  Ae = { class: 'upload-actions' },
  Re = { key: 1, class: 'file-info' },
  Ee = { class: 'file-name' },
  Ne = { class: 'file-size' },
  Pe = X({
    __name: 'VideoUploadArea',
    emits: ['success'],
    setup(_, { emit: G }) {
      const Q = G,
        { t: o } = Y(),
        g = c(),
        l = c(null),
        w = c(!1),
        I = c(0),
        V = c(''),
        p = (i) => {
          l.value = i.raw
        },
        D = () => {
          ;((l.value = null), (I.value = 0), (V.value = ''))
        },
        $ = () => {
          v.warning(o('storageManagement.onlyOneFileAllowed'))
        },
        h = () => {
          if (w.value) {
            v.warning(o('storageManagement.fileUploadingWarning'))
            return
          }
          ;((l.value = null), (I.value = 0), (V.value = ''), g.value && g.value.clearFiles())
        },
        a = (i) =>
          new Promise((F, T) => {
            const U = new Fe.ArrayBuffer(),
              m = new FileReader()
            ;((m.onload = function (C) {
              var A
              U.append((A = C.target) == null ? void 0 : A.result)
              const N = U.end()
              F(N)
            }),
              (m.onerror = function (C) {
                T(new Error(o('storageManagement.calculateMD5Failed')))
              }),
              m.readAsArrayBuffer(i))
          }),
        M = async () => {
          if (!l.value) {
            v.error(o('storageManagement.pleaseSelectFile'))
            return
          }
          ;((w.value = !0), (I.value = 0), (V.value = ''))
          try {
            const F = (await je({ file_name: l.value.name, file_size: l.value.size })).upload_id
            await K(F, l.value)
            const T = await xe({ upload_id: F }),
              { file_md5: U, download_url: m } = T,
              C = { fileUrl: m, fileName: l.value.name, fileMd5: U }
            ;(await ke(C),
              (V.value = 'success'),
              v.success(o('storageManagement.fileUploadSuccess')),
              (w.value = !1),
              Q('success'),
              h())
          } catch (i) {
            ;(console.error('文件上传失败:', i),
              (V.value = 'exception'),
              v.error(o('storageManagement.fileUploadFailed') + i.message))
          } finally {
            w.value = !1
          }
        },
        K = async (i, F) => {
          const U = Math.ceil(F.size / 1048576)
          for (let m = 0; m < U; m++) {
            const C = m * 1048576,
              N = Math.min(C + 1048576, F.size),
              A = F.slice(C, N),
              R = new FormData()
            ;(R.append('upload_id', i), R.append('chunk_index', m.toString()), R.append('file', A))
            const n = await a(A)
            ;(R.append('chunk_md5', n), await Ve(R), (I.value = Math.round(((m + 1) / U) * 100)))
          }
        },
        H = (i) =>
          i < 1024
            ? i + ' B'
            : i < 1024 * 1024
              ? (i / 1024).toFixed(2) + ' KB'
              : i < 1024 * 1024 * 1024
                ? (i / (1024 * 1024)).toFixed(2) + ' MB'
                : (i / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
      return (i, F) => {
        const T = S('el-icon'),
          U = S('el-upload'),
          m = S('el-progress'),
          C = S('el-button')
        return (
          x(),
          E('div', Ue, [
            r(
              U,
              {
                ref_key: 'uploadRef',
                ref: g,
                class: 'upload-drag-area',
                drag: '',
                'auto-upload': !1,
                'show-file-list': !0,
                'on-change': p,
                'on-remove': D,
                limit: 1,
                'on-exceed': $,
                accept: '.mp4,.avi,.mov,.wmv,.flv,.mkv'
              },
              {
                default: b(() => [
                  r(T, { class: 'el-icon--upload' }, { default: b(() => [r(d(pe))]), _: 1 }),
                  e('div', $e, [
                    e('div', Be, k(d(o)('storageManagement.dragFileOrClick')), 1),
                    e('div', De, k(d(o)('storageManagement.supportedFormats')), 1)
                  ])
                ]),
                _: 1
              },
              8,
              ['accept']
            ),
            l.value
              ? (x(),
                E('div', Te, [
                  I.value > 0
                    ? (x(),
                      W(
                        m,
                        {
                          key: 0,
                          percentage: I.value,
                          status: V.value,
                          style: { 'margin-bottom': '16px' }
                        },
                        null,
                        8,
                        ['percentage', 'status']
                      ))
                    : O('', !0),
                  e('div', Ae, [
                    r(
                      C,
                      { onClick: h, disabled: w.value },
                      { default: b(() => [z(k(d(o)('common.cancel')), 1)]), _: 1 },
                      8,
                      ['disabled']
                    ),
                    r(
                      C,
                      {
                        type: 'primary',
                        onClick: M,
                        loading: w.value,
                        disabled: !l.value || w.value
                      },
                      {
                        default: b(() => [
                          z(
                            k(
                              w.value
                                ? d(o)('storageManagement.uploading')
                                : d(o)('storageManagement.startUpload')
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
                ]))
              : O('', !0),
            l.value && !w.value
              ? (x(),
                E('div', Re, [
                  e('div', Ee, [
                    r(T, null, { default: b(() => [r(d(ve))]), _: 1 }),
                    z(' ' + k(l.value.name), 1)
                  ]),
                  e('div', Ne, k(H(l.value.size)), 1)
                ]))
              : O('', !0)
          ])
        )
      }
    }
  })
const ze = Z(Pe, [['__scopeId', 'data-v-b514a7fa']]),
  Le = (_) => (le('data-v-f4816af2'), (_ = _()), ie(), _),
  Oe = { class: 'video-injection-container' },
  Ge = { class: 'file-list' },
  Ke = { class: 'search-container' },
  He = { class: 'loop-play-option' },
  qe = { key: 0, class: 'injection-progress-container' },
  Je = { class: 'progress-info' },
  We = Le(() => e('span', { class: 'progress-text' }, '录播中...', -1)),
  Qe = { class: 'progress-percentage' },
  Xe = { class: 'pagination-container' },
  Ye = X({
    __name: 'VideoInjectionDrawer',
    props: { visible: { type: Boolean, default: !1 }, padCode: { type: String, default: '' } },
    emits: ['update:visible', 'select-file', 'stop-injection'],
    setup(_, { expose: G, emit: Q }) {
      const { t: o } = Y(),
        g = _,
        l = Q,
        w = c([]),
        I = c(!1),
        V = c(!0),
        p = c(0),
        D = c(!1),
        $ = c(''),
        h = c(''),
        a = c({ currentPage: 1, pageSize: 20, total: 0 }),
        M = async () => {
          if (!g.padCode) {
            v.warning('请先选择实例')
            return
          }
          I.value = !0
          try {
            const n = {
                page: a.value.currentPage,
                rows: a.value.pageSize,
                fileName: h.value || void 0
              },
              f = await Me(n)
            ;((w.value = f.data.pageData || []), (a.value.total = f.data.total || 0))
          } catch (n) {
            ;(console.error('获取文件列表失败:', n),
              v.error(o('storageManagement.getFileListFailed') + ': ' + (n.message || '')))
          } finally {
            I.value = !1
          }
        },
        K = (n) => {
          ;((a.value.currentPage = n), M())
        },
        H = (n) => {
          ;((a.value.pageSize = n), (a.value.currentPage = 1), M())
        },
        i = () => {
          M()
        },
        F = (n) => {
          if ((n.fileName || '').toLowerCase().split('.').pop() !== 'mp4') {
            v.error('仅支持.mp4格式的视频文件')
            return
          }
          if (D.value) {
            v.warning('当前正在录播中，请等待完成')
            return
          }
          ;(T(n), l('select-file', n, V.value))
        },
        T = (n) => {
          ;((D.value = !0), ($.value = n.id), (p.value = 0))
          const f = setInterval(() => {
            p.value < 95 && ((p.value += Math.random() * 10 + 5), p.value > 95 && (p.value = 95))
          }, 3e3)
          window.videoInjectionInterval = f
        },
        U = () => {
          ;(window.videoInjectionInterval && clearInterval(window.videoInjectionInterval),
            (p.value = 100),
            setTimeout(() => {
              ;((D.value = !1), ($.value = ''), (p.value = 0))
            }, 1e3))
        },
        m = () => {
          ;(window.videoInjectionInterval && clearInterval(window.videoInjectionInterval),
            (D.value = !1),
            ($.value = ''),
            (p.value = 0))
        },
        C = () => {
          ;(m(), l('stop-injection'))
        },
        N = () => {
          l('update:visible', !1)
        }
      G({ handleVideoInjectionSuccess: U, handleVideoInjectionFailed: m })
      const A = () => {
        ;(setTimeout(() => {
          M()
        }, 5e3),
          M())
      }
      ;(oe(() => {
        g.visible && M()
      }),
        ae(
          () => g.visible,
          (n) => {
            n && M()
          }
        ))
      const R = (n) =>
        n < 1024
          ? n + ' B'
          : n < 1024 * 1024
            ? (n / 1024).toFixed(2) + ' KB'
            : n < 1024 * 1024 * 1024
              ? (n / (1024 * 1024)).toFixed(2) + ' MB'
              : (n / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
      return (n, f) => {
        const u = S('el-alert'),
          j = S('el-button'),
          P = S('el-input'),
          t = S('el-checkbox'),
          s = S('el-table-column'),
          q = S('el-progress'),
          J = S('el-link'),
          ce = S('el-table'),
          re = S('el-pagination'),
          de = S('el-drawer'),
          ue = ne('loading')
        return (
          x(),
          W(
            de,
            {
              'model-value': _.visible,
              title: d(o)('storageManagement.videoInjection'),
              direction: 'ltr',
              size: '50vw',
              'before-close': N
            },
            {
              default: b(() => [
                e('div', Oe, [
                  r(ze, { onSuccess: A, style: { 'margin-bottom': '20px' } }),
                  r(
                    u,
                    {
                      title: d(o)('storageManagement.audioTrackTip'),
                      type: 'warning',
                      closable: !1,
                      'show-icon': '',
                      style: { 'margin-bottom': '20px' }
                    },
                    null,
                    8,
                    ['title']
                  ),
                  e('div', Ge, [
                    e('div', Ke, [
                      r(
                        P,
                        {
                          modelValue: h.value,
                          'onUpdate:modelValue': f[0] || (f[0] = (B) => (h.value = B)),
                          placeholder: d(o)('storageManagement.searchFileNamePlaceholder'),
                          clearable: '',
                          style: { width: '400px', 'margin-right': '10px' },
                          onClear: i,
                          onKeyup: we(i, ['enter'])
                        },
                        {
                          append: b(() => [
                            r(
                              j,
                              { onClick: i },
                              {
                                default: b(() => [z(k(d(o)('storageManagement.refresh')), 1)]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['modelValue', 'placeholder', 'onKeyup']
                      ),
                      r(
                        j,
                        { type: 'danger', onClick: C },
                        {
                          default: b(() => [z(k(d(o)('storageManagement.stopVideoInjection')), 1)]),
                          _: 1
                        }
                      ),
                      e('div', He, [
                        r(
                          t,
                          {
                            modelValue: V.value,
                            'onUpdate:modelValue': f[1] || (f[1] = (B) => (V.value = B))
                          },
                          { default: b(() => [z(k(d(o)('storageManagement.loopPlay')), 1)]), _: 1 },
                          8,
                          ['modelValue']
                        )
                      ])
                    ]),
                    se(
                      (x(),
                      W(
                        ce,
                        {
                          data: w.value,
                          style: { width: '100%' },
                          'max-height': 'calc(100vh - 460px)'
                        },
                        {
                          default: b(() => [
                            r(
                              s,
                              {
                                prop: 'fileName',
                                label: d(o)('storageManagement.fileName'),
                                'min-width': '150'
                              },
                              null,
                              8,
                              ['label']
                            ),
                            r(
                              s,
                              {
                                prop: 'fileSize',
                                label: d(o)('storageManagement.fileSize'),
                                'min-width': '100'
                              },
                              { default: b((B) => [z(k(R(B.row.fileSize)), 1)]), _: 1 },
                              8,
                              ['label']
                            ),
                            r(
                              s,
                              { label: d(o)('storageManagement.operations'), 'min-width': '60' },
                              {
                                default: b((B) => [
                                  D.value && $.value === B.row.id
                                    ? (x(),
                                      E('div', qe, [
                                        e('div', Je, [
                                          We,
                                          r(
                                            q,
                                            {
                                              percentage: p.value,
                                              'show-text': !1,
                                              'stroke-width': 6,
                                              class: 'injection-progress'
                                            },
                                            null,
                                            8,
                                            ['percentage']
                                          ),
                                          e('span', Qe, k(Math.round(p.value)) + '%', 1)
                                        ])
                                      ]))
                                    : (x(),
                                      W(
                                        J,
                                        { key: 1, type: 'primary', onClick: (Nt) => F(B.row) },
                                        {
                                          default: b(() => [
                                            z(k(d(o)('storageManagement.videoInjection')), 1)
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['onClick']
                                      ))
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
                      [[ue, I.value]]
                    ),
                    e('div', Xe, [
                      r(
                        re,
                        {
                          'current-page': a.value.currentPage,
                          'onUpdate:currentPage': f[2] || (f[2] = (B) => (a.value.currentPage = B)),
                          'page-size': a.value.pageSize,
                          'onUpdate:pageSize': f[3] || (f[3] = (B) => (a.value.pageSize = B)),
                          'page-sizes': [10, 20, 50, 100],
                          total: a.value.total,
                          layout: 'total, sizes, prev, pager, next, jumper',
                          onSizeChange: H,
                          onCurrentChange: K
                        },
                        null,
                        8,
                        ['current-page', 'page-size', 'total']
                      )
                    ])
                  ])
                ])
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
const Ze = Z(Ye, [['__scopeId', 'data-v-f4816af2']]),
  y = (_) => (le('data-v-420f04a7'), (_ = _()), ie(), _),
  et = { class: 'phone-box-body', style: { height: '100%', width: '100%' } },
  tt = {
    class: 'video-and-toolbar',
    style: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      width: '100%',
      height: '100%'
    }
  },
  ot = {
    style: {
      flex: '1',
      height: '100%',
      'overflow-y': 'auto',
      'scrollbar-width': 'none',
      position: 'relative'
    }
  },
  at = ['id'],
  nt = ['id'],
  st = y(() => e('span', { class: 'tool-icon', title: '主页' }, '🏠', -1)),
  lt = [st],
  it = y(() => e('span', { class: 'tool-label' }, '主页', -1)),
  ct = y(() => e('span', { class: 'tool-icon', title: '任务栏' }, '☰', -1)),
  rt = [ct],
  dt = y(() => e('span', { class: 'tool-label' }, '任务栏', -1)),
  ut = y(() => e('span', { class: 'tool-icon', title: '返回' }, '↩️', -1)),
  pt = [ut],
  vt = y(() => e('span', { class: 'tool-label' }, '返回', -1)),
  _t = y(() => e('span', { class: 'tool-icon', title: '旋转屏幕' }, '🔄', -1)),
  mt = [_t],
  gt = y(() => e('span', { class: 'tool-label' }, '旋转', -1)),
  ft = { class: 'toolbar-section' },
  ht = { class: 'toolbar-buttons' },
  bt = y(() => e('span', { class: 'tool-icon', title: '截图' }, '📸', -1)),
  yt = [bt],
  wt = y(() => e('span', { class: 'tool-label' }, '截图', -1)),
  It = y(() => e('span', { class: 'tool-icon', title: '音量+' }, '🔊', -1)),
  Ct = [It],
  St = y(() => e('span', { class: 'tool-label' }, '音量+', -1)),
  kt = y(() => e('span', { class: 'tool-icon', title: '音量-' }, '🔉', -1)),
  Mt = [kt],
  jt = y(() => e('span', { class: 'tool-label' }, '音量-', -1)),
  xt = { class: 'tool-item' },
  Vt = ['title'],
  Ft = ['title'],
  Ut = { class: 'tool-label' },
  $t = { class: 'tool-item' },
  Bt = ['title'],
  Dt = { class: 'tool-label' },
  Tt = y(() => e('div', { class: 'recording-dot' }, null, -1)),
  At = y(() => e('span', { class: 'recording-text' }, '录播中', -1)),
  Rt = { class: 'stop-overlay' },
  Et = X({
    __name: 'DeviceControlScreen',
    props: {
      padCode: { type: String, default: '' },
      isPcMode: { type: Boolean, default: !1 },
      isVertical: { type: Boolean, default: !1 }
    },
    emits: ['update:isVertical'],
    setup(_, { expose: G, emit: Q }) {
      const { t: o } = Y(),
        g = _,
        l = c(!1),
        w = c({ rotate: 0 }),
        I = c(!1),
        V = c(null),
        p = c(!1),
        D = c(!1),
        $ = c(),
        h = c({
          isStreaming: !0,
          buttonTitle: '停止拉流',
          buttonIcon: '📷',
          buttonLabel: '停止拉流'
        })
      ;(ae(
        () => g.padCode,
        (u) => {
          Se(() => {
            M()
          })
        }
      ),
        oe(() => {
          g.padCode && M()
        }),
        Ie(() => {
          ;(N(), C())
        }))
      const a = c(null),
        M = async () => {
          l.value = !0
          const P = {
            token: (await he({ padCode: g.padCode })).data.token,
            baseUrl: 'https://openapi-hk.armcloud.net',
            isWsProxy: !1,
            retryCount: 5,
            uuid: ee(),
            enableMicrophone: !0,
            enableCamera: !0,
            deviceInfo: {
              padCode: g.padCode,
              userId: ee(),
              videoStream: { resolution: 13, frameRate: 2, bitrate: 3 },
              autoRecoveryTime: 0,
              mediaType: 3,
              keyboard: 'local',
              saveCloudClipboard: !0
            },
            viewId: 'controlScreen-'.concat(g.padCode),
            callbacks: {
              onInit: (t) => {
                var s
                ;((s = a.value) == null || s.start(), (l.value = !1))
              },
              onConnectSuccess: () => {
                l.value = !1
              },
              onMonitorOperation: (t) => {},
              onConnectFail: ({ code: t, msg: s }) => {
                l.value = !1
              },
              onMediaDevicesToggle: (t) => {},
              onAutoRecoveryTime: () => {
                _e.confirm('设备触发无操作回收，暂停拉流; 点击确认，恢复拉流', '提示', {
                  confirmButtonText: '确认',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  var t
                  ;(t = a.value) == null || t.start()
                })
              },
              onAutoplayFailed: (t) => {},
              onRunInformation: (t) => {},
              onChangeResolution: (t, s) => {},
              onTransparentMsg: (t, s) => {},
              onErrorMessage: (t) => {},
              onOutputClipper: (t) => {
                ;(t &&
                  t.content &&
                  te(t.content, () => {
                    v.success(o('common.copySuccess'))
                  }),
                  t &&
                    t.content &&
                    te(t.content, () => {
                      v.success('复制成功')
                    }))
              },
              onRenderedFirstFrame: (t) => {},
              onAudioRecovery: () => {},
              onAudioPause: () => {},
              onSocketCallback: ({ code: t }) => {},
              onProgress: (t) => {},
              onGroupControlError: (t) => {},
              onUserLeaveOrJoin: (t) => {},
              onSendUserError: (t) => {
                t.code
              },
              onConnectionStateChanged: (t) => {},
              onEquipmentInfo: (t) => {},
              onVideoInit: (t) => {},
              onVideoError: (t) => {
                t.code
              },
              onAudioInit: (t) => {},
              onInjectVideoResult: (t, s) => {
                if (s.code == '10405') {
                  p.value = !0
                  return
                }
                t === 'startVideoInjection'
                  ? s.isSuccess
                    ? (v.success(o('storageManagement.videoInjectionSuccess')),
                      (p.value = !0),
                      $.value && $.value.handleVideoInjectionSuccess())
                    : (v.error(
                        o('storageManagement.videoInjectionFailed') + ': ' + (s.content || '')
                      ),
                      (p.value = !1),
                      $.value && $.value.handleVideoInjectionFailed())
                  : t === 'stopVideoInjection' &&
                    (s.isSuccess
                      ? (v.success(o('storageManagement.stopVideoInjectionSuccess')),
                        (p.value = !1))
                      : v.error(
                          o('storageManagement.stopVideoInjectionFailed') + ': ' + (s.content || '')
                        ))
              },
              onAudioError: (t) => {},
              onChangeRotate: (t, s) => {
                w.value.rotate = t
                const q = document.getElementById('phoneBox')
                q && ((q.style.height = s.height + 'px'), (q.style.width = s.width + 'px'))
                const J = document.getElementById('videoToolbar')
                J && ((J.style.height = s.height + 'px'), (J.style.maxHeight = s.height + 'px'))
              },
              onUserJoined: (t) => {
                var s
                ;(s = a.value) == null ||
                  s.executeAdbCommand('settings put system accelerometer_rotation 0')
              }
            }
          }
          a.value = new fe(P)
        },
        K = () => {
          a.value && a.value.setPhoneRotation(w.value.rotate ? 0 : 1)
        },
        H = () => {
          a.value && a.value.sendCommand('back')
        },
        i = () => {
          a.value && a.value.sendCommand('home')
        },
        F = () => {
          a.value && a.value.sendCommand('menu')
        },
        T = () => {
          a.value && a.value.increaseVolume()
        },
        U = () => {
          a.value && a.value.decreaseVolume()
        },
        m = async () => {
          if (!g.padCode) {
            L({ type: 'warning', message: o('storageManagement.screenshotNoInstance') })
            return
          }
          try {
            l.value = !0
            const u = await ye({ padCodes: [g.padCode], format: 'png', quality: '100' })
            if (u.data) {
              const j = u.data[0].url
              ;(window.open(j, '_blank'),
                L({ type: 'success', message: o('storageManagement.screenshotSuccess') }))
            } else throw new Error('未获取到截图URL')
          } catch (u) {
            ;(console.error('截图失败:', u),
              L({
                type: 'error',
                message: o('storageManagement.screenshotFailed') + ': ' + u.message
              }))
          } finally {
            l.value = !1
          }
        },
        C = () => {
          a.value && a.value.stop()
        },
        N = async () => {
          h.value.isStreaming &&
            (await be({ padCodes: [g.padCode] }),
            a.value && a.value.stop(),
            (h.value = {
              isStreaming: !1,
              buttonTitle: '恢复拉流',
              buttonIcon: '▶️',
              buttonLabel: '恢复拉流'
            }),
            L({ type: 'success', message: '停止拉流成功' }))
        },
        A = async () => {
          if (!g.padCode) {
            L({ type: 'warning', message: '请先选择实例' })
            return
          }
          try {
            h.value.isStreaming
              ? N()
              : (await M(),
                (h.value = {
                  isStreaming: !0,
                  buttonTitle: '停止拉流',
                  buttonIcon: '📷',
                  buttonLabel: '停止拉流'
                }),
                L({ type: 'success', message: '恢复拉流成功' }))
          } catch (u) {
            ;(console.error('操作失败:', u),
              L({ type: 'error', message: h.value.isStreaming ? '停止拉流失败' : '恢复拉流失败' }))
          }
        }
      G({ initEngine: M, stop: C })
      const R = () => {
          I.value = !I.value
        },
        n = (u, j = !1) => {
          if (!a.value) {
            v.error(o('storageManagement.videoInjectionFailed') + ': ' + o('engineNotInitialized'))
            return
          }
          try {
            ;(a.value.injectVideoStream('startVideoInjection', {
              fileUrl: u.originUrl,
              isLoop: j,
              fileName: u.fileName
            }),
              (V.value = u))
          } catch (P) {
            ;(console.error('视频注入失败:', P),
              v.error(o('storageManagement.videoInjectionFailed') + ': ' + P.message))
          }
        },
        f = () => {
          if (!a.value) {
            v.error(
              o('storageManagement.stopVideoInjectionFailed') + ': ' + o('engineNotInitialized')
            )
            return
          }
          try {
            ;(a.value.injectVideoStream('stopVideoInjection', {}), (V.value = null), (p.value = !1))
          } catch (u) {
            ;(console.error('停止视频注入失败:', u),
              v.error(o('storageManagement.stopVideoInjectionFailed') + ': ' + u.message))
          }
        }
      return (u, j) => {
        const P = S('el-icon'),
          t = ne('loading')
        return (
          x(),
          E(
            Ce,
            null,
            [
              se(
                (x(),
                E('div', et, [
                  e('div', tt, [
                    e('div', ot, [
                      _.padCode
                        ? (x(),
                          E(
                            'div',
                            {
                              key: 0,
                              class: 'video-container',
                              id: 'controlScreen-'.concat(_.padCode),
                              style: { width: '360px', height: '100%', margin: '0 auto' }
                            },
                            null,
                            8,
                            at
                          ))
                        : O('', !0)
                    ]),
                    _.padCode
                      ? (x(),
                        E(
                          'div',
                          { key: 0, class: 'video-toolbar', id: 'videoToolbar-'.concat(_.padCode) },
                          [
                            e('div', { class: 'toolbar-section' }, [
                              e('div', { class: 'toolbar-buttons' }, [
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: i }, lt),
                                  it
                                ]),
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: F }, rt),
                                  dt
                                ]),
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: H }, pt),
                                  vt
                                ]),
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: K }, mt),
                                  gt
                                ])
                              ])
                            ]),
                            e('div', ft, [
                              e('div', ht, [
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: m }, yt),
                                  wt
                                ]),
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: T }, Ct),
                                  St
                                ]),
                                e('div', { class: 'tool-item' }, [
                                  e('button', { class: 'tool-btn', onClick: U }, Mt),
                                  jt
                                ]),
                                e('div', xt, [
                                  e(
                                    'button',
                                    { class: 'tool-btn', onClick: A, title: h.value.buttonTitle },
                                    [
                                      e(
                                        'span',
                                        { class: 'tool-icon', title: h.value.buttonTitle },
                                        k(h.value.buttonIcon),
                                        9,
                                        Ft
                                      )
                                    ],
                                    8,
                                    Vt
                                  ),
                                  e('span', Ut, k(h.value.buttonLabel), 1)
                                ]),
                                e('div', $t, [
                                  e('button', { class: 'tool-btn', onClick: R }, [
                                    e(
                                      'span',
                                      {
                                        class: 'tool-icon',
                                        title: d(o)('storageManagement.videoInjection')
                                      },
                                      '📹',
                                      8,
                                      Bt
                                    )
                                  ]),
                                  e('span', Dt, k(d(o)('storageManagement.videoInjection')), 1)
                                ])
                              ])
                            ])
                          ],
                          8,
                          nt
                        ))
                      : O('', !0)
                  ]),
                  p.value
                    ? (x(),
                      E(
                        'div',
                        {
                          key: 0,
                          class: 'video-injection-indicator',
                          onClick: f,
                          onMouseenter: j[0] || (j[0] = (s) => (D.value = !0)),
                          onMouseleave: j[1] || (j[1] = (s) => (D.value = !1))
                        },
                        [
                          Tt,
                          At,
                          D.value
                            ? (x(),
                              W(
                                d(ge),
                                {
                                  key: 0,
                                  effect: 'dark',
                                  content: '点击停止录播',
                                  placement: 'top'
                                },
                                {
                                  default: b(() => [
                                    e('div', Rt, [
                                      r(
                                        P,
                                        { class: 'stop-icon' },
                                        { default: b(() => [r(d(me))]), _: 1 }
                                      )
                                    ])
                                  ]),
                                  _: 1
                                }
                              ))
                            : O('', !0)
                        ],
                        32
                      ))
                    : O('', !0)
                ])),
                [[t, l.value]]
              ),
              r(
                Ze,
                {
                  ref_key: 'videoInjectionDrawerRef',
                  ref: $,
                  visible: I.value,
                  'onUpdate:visible': j[2] || (j[2] = (s) => (I.value = s)),
                  'pad-code': _.padCode,
                  onSelectFile: n,
                  onStopInjection: f
                },
                null,
                8,
                ['visible', 'pad-code']
              )
            ],
            64
          )
        )
      }
    }
  })
const qt = Z(Et, [['__scopeId', 'data-v-420f04a7']])
export { qt as D }
