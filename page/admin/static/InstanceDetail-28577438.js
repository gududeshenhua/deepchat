import {
  y as O,
  aw as A,
  aq as H,
  r as p,
  b as P,
  f as d,
  h as B,
  G as c,
  H as s,
  L as u,
  u as t,
  K as h,
  N as l,
  M as L,
  i as q
} from './vue-66851fce.js'
import { c as E, a as F, p as K, g as U } from './index-e81b6066.js'
import { s as j, C as J, a as b } from './function-call-23a10300.js'
import { w as Q } from './index-ba0a22a8.js'
import { L as W, a as i } from './function-call-b9e3413a.js'
import { C as o, B as S } from './index-525ab0a8.js'
import { T as v } from './index-e633592d.js'
import { _ as X } from './index-ae33a03d.js'
import './use-placeholder-bee49790.js'
import './use-route-23d6e27a.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
Q(j)
const Y = { class: 'mobile-instance-detail' },
  Z = { key: 2, class: 'action-buttons' },
  aa = { class: 'secondary-actions' },
  ea = O({
    __name: 'InstanceDetail',
    setup(ta) {
      const z = A(),
        I = H(),
        m = p(z.params.id),
        e = p({
          padCode: m.value,
          padStatus: 10,
          padIp: '192.168.1.100',
          record: { note: '', createTime: new Date().toISOString() }
        }),
        f = p(!1),
        _ = p(!1),
        y = p(!1),
        C = p(!1)
      p(!1)
      const M = (a) =>
          ({
            10: '运行中',
            11: '重启中',
            12: '重置中',
            13: '升级中',
            14: '异常',
            15: '未就绪',
            16: '备份中',
            17: '恢复数据中',
            18: '关机',
            19: '关机中',
            20: '开机中',
            21: '关机失败',
            22: '开机失败',
            23: '删除中',
            24: '删除失败',
            25: '已删除',
            26: '克隆中'
          })[a] || '未知('.concat(a, ')'),
        N = (a) =>
          ({
            10: 'success',
            11: 'warning',
            12: 'warning',
            13: 'warning',
            14: 'danger',
            15: 'info',
            16: 'warning',
            17: 'warning',
            18: 'danger',
            19: 'warning',
            20: 'warning',
            21: 'danger',
            22: 'danger',
            23: 'warning',
            24: 'danger',
            25: 'info',
            26: 'warning'
          })[a] || 'default',
        $ = (a) => (a ? new Date(a).toLocaleString('zh-CN') : '--'),
        k = (a) => (a ? ''.concat((a / (1024 * 1024 * 1024)).toFixed(2), ' GB') : '--'),
        R = async () => {
          _.value = !0
          try {
            ;(await new Promise((a) => setTimeout(a, 1e3)),
              i('正在连接云机...'),
              I.push({ name: 'mobileConnectCloudHost', params: { id: e.value.padCode } }))
          } catch (a) {
            i('连接失败')
          } finally {
            _.value = !1
          }
        },
        V = async () => {
          ;(await b({
            title: '确认启动',
            message: '确定要启动这个实例吗？',
            confirmButtonText: '启动',
            cancelButtonText: '取消'
          }),
            (y.value = !0))
          try {
            const a = await E({ padCodes: [e.value.padCode] })
            if (a.data.failList && a.data.failList.length > 0) {
              const n = a.data.failList.find((r) => r.padCode === e.value.padCode)
              n ? i(''.concat(n.padCode, ': ').concat(n.errMsg)) : i('启动失败')
            } else (i('实例启动成功'), await w())
          } catch (a) {
            ;(console.error(a), i('启动失败'))
          } finally {
            y.value = !1
          }
        },
        G = async () => {
          ;(await b({
            title: '确认停止',
            message: '确定要停止这个实例吗？',
            confirmButtonText: '停止',
            cancelButtonText: '取消'
          }),
            (C.value = !0))
          try {
            const a = await F({ padCodes: [e.value.padCode] })
            if (a.data.failList && a.data.failList.length > 0) {
              const n = a.data.failList.find((r) => r.padCode === e.value.padCode)
              n ? i(''.concat(n.padCode, ': ').concat(n.errMsg)) : i('停止失败')
            } else (i('实例停止成功'), await w())
          } catch (a) {
            ;(console.error(a), i('停止失败'))
          } finally {
            C.value = !1
          }
        },
        w = async () => {
          var a, n, r, D
          f.value = !0
          try {
            const g = await K({ padCodes: [m.value] })
            if (
              ((n = (a = g.data) == null ? void 0 : a.pageData) == null ? void 0 : n.length) > 0
            ) {
              const T = g.data.pageData[0],
                x = await U({ page: 1, pageSize: 1, padCode: m.value })
              ;(((D = (r = x.data) == null ? void 0 : r.data) == null ? void 0 : D.length) > 0 &&
                (T.record = x.data.data[0]),
                (e.value = T))
            } else (i('实例不存在'), I.back())
          } catch (g) {
            ;(i('加载失败'), console.error('加载实例详情失败:', g))
          } finally {
            f.value = !1
          }
        }
      return (
        P(() => {
          w()
        }),
        (a, n) => (
          d(),
          B('div', Y, [
            f.value
              ? (d(),
                c(
                  t(W),
                  { key: 0, size: '24px', vertical: '' },
                  { default: s(() => [u('加载中...')]), _: 1 }
                ))
              : h('', !0),
            f.value
              ? h('', !0)
              : (d(),
                c(
                  t(J),
                  { key: 1, title: '基本信息' },
                  {
                    default: s(() => {
                      var r
                      return [
                        l(t(o), { title: '实例编号', value: e.value.padCode }, null, 8, ['value']),
                        l(t(o), { title: '镜像ID', value: e.value.imageId || '--' }, null, 8, [
                          'value'
                        ]),
                        l(
                          t(o),
                          { title: '实例规格', value: e.value.deviceLevel || '--' },
                          null,
                          8,
                          ['value']
                        ),
                        l(
                          t(o),
                          { title: '屏幕布局编码', value: e.value.screenLayoutCode || '--' },
                          null,
                          8,
                          ['value']
                        ),
                        l(
                          t(o),
                          { title: '状态' },
                          {
                            value: s(() => [
                              l(
                                t(v),
                                { type: N(e.value.padStatus), size: 'medium' },
                                { default: s(() => [u(L(M(e.value.padStatus)), 1)]), _: 1 },
                                8,
                                ['type']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        l(
                          t(o),
                          { title: '物理机状态' },
                          {
                            value: s(() => [
                              e.value.deviceStatus == 1
                                ? (d(),
                                  c(
                                    t(v),
                                    { key: 0, type: 'success' },
                                    { default: s(() => [u('在线')]), _: 1 }
                                  ))
                                : (d(),
                                  c(
                                    t(v),
                                    { key: 1, type: 'info' },
                                    { default: s(() => [u('离线')]), _: 1 }
                                  ))
                            ]),
                            _: 1
                          }
                        ),
                        l(
                          t(o),
                          { title: '实例在线状态' },
                          {
                            value: s(() => [
                              e.value.online == 1
                                ? (d(),
                                  c(
                                    t(v),
                                    { key: 0, type: 'success' },
                                    { default: s(() => [u('在线')]), _: 1 }
                                  ))
                                : (d(),
                                  c(
                                    t(v),
                                    { key: 1, type: 'info' },
                                    { default: s(() => [u('离线')]), _: 1 }
                                  ))
                            ]),
                            _: 1
                          }
                        ),
                        l(
                          t(o),
                          { title: '实例推流状态' },
                          {
                            value: s(() => [
                              e.value.streamStatus == 1
                                ? (d(),
                                  c(
                                    t(v),
                                    { key: 0, type: 'success' },
                                    { default: s(() => [u('推流中')]), _: 1 }
                                  ))
                                : (d(),
                                  c(
                                    t(v),
                                    { key: 1, type: 'info' },
                                    { default: s(() => [u('空闲')]), _: 1 }
                                  ))
                            ]),
                            _: 1
                          }
                        ),
                        l(t(o), { title: 'IP地址', value: e.value.padIp || '--' }, null, 8, [
                          'value'
                        ]),
                        l(t(o), { title: '存储总容量', value: k(e.value.dataSize) }, null, 8, [
                          'value'
                        ]),
                        l(
                          t(o),
                          { title: '存储已使用容量', value: k(e.value.dataSizeUsed) },
                          null,
                          8,
                          ['value']
                        ),
                        l(t(o), { title: '国家', value: e.value.countryCode || '--' }, null, 8, [
                          'value'
                        ]),
                        l(
                          t(o),
                          {
                            title: '创建时间',
                            value: $((r = e.value.record) == null ? void 0 : r.createTime)
                          },
                          null,
                          8,
                          ['value']
                        )
                      ]
                    }),
                    _: 1
                  }
                )),
            f.value
              ? h('', !0)
              : (d(),
                B('div', Z, [
                  l(
                    t(S),
                    {
                      type: 'primary',
                      size: 'large',
                      onClick: R,
                      loading: _.value,
                      disabled: e.value.padStatus !== 10
                    },
                    {
                      default: s(() => [
                        u(L(e.value.padStatus === 10 ? '连接云机' : '实例未运行'), 1)
                      ]),
                      _: 1
                    },
                    8,
                    ['loading', 'disabled']
                  ),
                  q('div', aa, [
                    l(
                      t(S),
                      {
                        type: 'warning',
                        size: 'small',
                        onClick: V,
                        loading: y.value,
                        disabled:
                          e.value.padStatus === 10 ||
                          e.value.padStatus === 11 ||
                          e.value.padStatus === 21
                      },
                      { default: s(() => [u(' 启动 ')]), _: 1 },
                      8,
                      ['loading', 'disabled']
                    ),
                    l(
                      t(S),
                      {
                        type: 'default',
                        size: 'small',
                        onClick: G,
                        loading: C.value,
                        disabled:
                          e.value.padStatus === 18 ||
                          e.value.padStatus === 19 ||
                          e.value.padStatus === 21
                      },
                      { default: s(() => [u(' 停止 ')]), _: 1 },
                      8,
                      ['loading', 'disabled']
                    )
                  ])
                ]))
          ])
        )
      )
    }
  })
const ga = X(ea, [['__scopeId', 'data-v-8892d451']])
export { ga as default }
