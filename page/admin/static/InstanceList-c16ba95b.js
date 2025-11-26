import { h as sa, f as oa, m as la, n as k, _ as ra } from './index-ae33a03d.js'
import { e as ca, x as ua, k as da, E as v, G as ce } from './element-74718691.js'
import {
  g as Ue,
  q as pa,
  i as Ae,
  a as $e,
  b as Be,
  r as Fe,
  e as va,
  c as fa
} from './index-e81b6066.js'
import { g as ma } from './index-c0fb52a7.js'
import {
  y as ga,
  aq as _a,
  at as ya,
  r as c,
  n as Me,
  b as ba,
  Q as La,
  e as Ca,
  a8 as V,
  ag as ha,
  f as _,
  h as ka,
  N as r,
  H as l,
  u as i,
  L as u,
  M as s,
  G as y,
  K as L,
  i as f,
  I as xa,
  ay as x,
  a7 as T
} from './vue-66851fce.js'
import { u as Sa } from './useTableHeightFit-d4c36563.js'
import { I as wa } from './InstanceStatusTag-23042b65.js'
import { u as Ia } from './selected-instances-2c512dfe.js'
import { c as Da } from './permission-ed9d37b8.js'
import './vxe-562f9a54.js'
const Va = { class: 'card-manager' },
  Ea = { style: { display: 'flex', 'justify-content': 'space-around', gap: '10px' } },
  Pa = { style: { display: 'flex', 'flex-direction': 'column', 'align-items': 'center' } },
  Ta = { class: 'popover-group' },
  Oa = { class: 'popover-group-title' },
  Ra = { class: 'popover-group-content' },
  Ua = { class: 'popover-group' },
  Aa = { class: 'popover-group-title' },
  $a = { class: 'popover-group-content' },
  Ba = { style: { display: 'flex', 'flex-direction': 'column', 'align-items': 'center' } },
  Fa = { class: 'popover-group' },
  Ma = { class: 'popover-group-title' },
  Na = { class: 'popover-group-content' },
  za = { class: 'popover-group' },
  Ga = { class: 'popover-group-title' },
  Wa = { class: 'popover-group-content' },
  Ha = ['onClick'],
  ja = { class: 'pad-code-link', style: { 'text-decoration': 'none' } },
  qa = ga({
    __name: 'InstanceList',
    setup(Ka) {
      const { cTable: I, maxHeight: Ne, handleGetTableHeight: ue } = Sa(),
        { t: e } = sa(),
        fe = _a(),
        ze = oa(),
        { userInfo: Ge, roles: Za } = ya(ze),
        We = Ia(),
        me = x(() =>
          k(
            () => import('./SetInstanceProxyDialog-09c3001f.js'),
            [
              'static/SetInstanceProxyDialog-09c3001f.js',
              'static/element-74718691.js',
              'static/vue-66851fce.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/ProxySelector-61ddc2fe.js',
              'static/index-446a6d1a.js',
              'static/index-c0fb52a7.js',
              'static/ProxySelector-a9d0694f.css',
              'static/permission-ed9d37b8.js',
              'static/SetInstanceProxyDialog-2a3c8b6e.css'
            ]
          )
        ),
        He = x(() =>
          k(
            () => import('./PadDetailDrawer-6558c547.js'),
            [
              'static/PadDetailDrawer-6558c547.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/InstanceStatusTag-23042b65.js',
              'static/InstanceStatusTag-75bd578f.css',
              'static/PadDetailDrawer-e3b0c442.css'
            ]
          )
        ),
        je = x(() =>
          k(
            () => import('./ConnectCloudHost-74888b7a.js'),
            [
              'static/ConnectCloudHost-74888b7a.js',
              'static/app-79cffc0b.js',
              'static/vue-66851fce.js',
              'static/index-ae33a03d.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/DeviceControlScreen-7db39cef.js',
              'static/v4-3a210e2e.js',
              'static/index-e81b6066.js',
              'static/index-b201494c.js',
              'static/index-96d3c23e.js',
              'static/DeviceControlScreen-64109f4c.css',
              'static/ConnectCloudHost-ab13811f.css'
            ]
          )
        ),
        qe = x(() =>
          k(
            () => import('./ModifyAndroidProps-0df71f36.js'),
            [
              'static/ModifyAndroidProps-0df71f36.js',
              'static/index-8f030fd5.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/ModifyAndroidProps-fc86e1fa.css'
            ]
          )
        ),
        Ke = x(() =>
          k(
            () => import('./ModifyStaticAndroidProps-754dfa94.js'),
            [
              'static/ModifyStaticAndroidProps-754dfa94.js',
              'static/index-8f030fd5.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/ModifyStaticAndroidProps-21011b5f.css'
            ]
          )
        ),
        Ze = x(() =>
          k(
            () => import('./ViewPropertiesDrawer-f636a486.js'),
            [
              'static/ViewPropertiesDrawer-f636a486.js',
              'static/index-8f030fd5.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css'
            ]
          )
        ),
        Je = x(() =>
          k(
            () => import('./BatchUpdateTimeZoneDialog-b11431ef.js'),
            [
              'static/BatchUpdateTimeZoneDialog-b11431ef.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/BatchUpdateTimeZoneDialog-e742dbcf.css'
            ]
          )
        ),
        Qe = x(() =>
          k(
            () => import('./BatchUpdateLanguageDialog-4b0093d2.js'),
            [
              'static/BatchUpdateLanguageDialog-4b0093d2.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/BatchUpdateLanguageDialog-17d17579.css'
            ]
          )
        ),
        Xe = x(() =>
          k(
            () => import('./BatchUpdateGpsDialog-37a64637.js'),
            [
              'static/BatchUpdateGpsDialog-37a64637.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/BatchUpdateGpsDialog-0909dc4e.css'
            ]
          )
        ),
        ge = x(() =>
          k(
            () => import('./BatchInstanceOpenDialog-d1b78c6e.js'),
            [
              'static/BatchInstanceOpenDialog-d1b78c6e.js',
              'static/vue-66851fce.js',
              'static/index-ae33a03d.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/index-e81b6066.js',
              'static/index-1bdb6a9d.js',
              'static/ProxySelector-61ddc2fe.js',
              'static/index-446a6d1a.js',
              'static/index-c0fb52a7.js',
              'static/ProxySelector-a9d0694f.css',
              'static/BatchInstanceOpenDialog-d54c2e44.css'
            ]
          )
        ),
        Ye = x(() =>
          k(
            () => import('./ModifyGroupDialog-f27839a2.js'),
            [
              'static/ModifyGroupDialog-f27839a2.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/index-c0fb52a7.js'
            ]
          )
        ),
        et = x(() =>
          k(
            () => import('./ModifyRemarkDialog-0a047c61.js'),
            [
              'static/ModifyRemarkDialog-0a047c61.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css'
            ]
          )
        ),
        tt = x(() =>
          k(
            () => import('./BatchModifyGroupDialog-a7ece753.js'),
            [
              'static/BatchModifyGroupDialog-a7ece753.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/index-c0fb52a7.js'
            ]
          )
        ),
        at = x(() =>
          k(
            () => import('./UploadFileDrawer-ee2383af.js'),
            [
              'static/UploadFileDrawer-ee2383af.js',
              'static/index-b201494c.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/usePagination-22ed0aad.js',
              'static/UploadFileDrawer-45853614.css'
            ]
          )
        ),
        nt = x(() =>
          k(
            () => import('./ExecuteAdbCommandDialog-2722052d.js'),
            [
              'static/ExecuteAdbCommandDialog-2722052d.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css'
            ]
          )
        ),
        it = x(() =>
          k(
            () => import('./AdbConnectionInfoDialog-ff063518.js'),
            [
              'static/AdbConnectionInfoDialog-ff063518.js',
              'static/index-e81b6066.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/AdbConnectionInfoDialog-f26faf8e.css'
            ]
          )
        ),
        st = x(() =>
          k(
            () => import('./ConditionalDeleteDrawer-27cb9881.js'),
            [
              'static/ConditionalDeleteDrawer-27cb9881.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/index-c0fb52a7.js',
              'static/index-e81b6066.js',
              'static/ConditionalDeleteDrawer-ba973b86.css'
            ]
          )
        ),
        _e = x(() =>
          k(
            () => import('./BatchUpgradeRealImageDialog-c9154f3d.js'),
            [
              'static/BatchUpgradeRealImageDialog-c9154f3d.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/index-e81b6066.js',
              'static/index-8f030fd5.js',
              'static/BatchUpgradeRealImageDialog-91d0e991.css'
            ]
          )
        ),
        ot = x(() =>
          k(
            () => import('./ClusterWindowsDialog-6f25308b.js'),
            [
              'static/ClusterWindowsDialog-6f25308b.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css',
              'static/ClusterWindowsDialog-6f55a23c.css'
            ]
          )
        ),
        P = c([]),
        A = c(!1),
        ye = c([]),
        be = c([]),
        Le = c([]),
        g = c([]),
        M = c(!1),
        N = c(!1),
        z = c(!1),
        G = c(!1),
        $ = c(!1),
        B = c(!1),
        W = c(!1),
        D = c(''),
        lt = (n) => {
          ;((we.value = n.padCode), (Z.value = !0))
        },
        rt = (n) => {
          ;((g.value = [n]), (B.value = !0))
        },
        ct = () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectAtLeastOneInstance'))
            return
          }
          B.value = !0
        },
        ut = (n) => {
          ;((D.value = n.padCode), (W.value = !0))
        },
        dt = (n) => {
          ;((D.value = n), (z.value = !0))
        },
        Ce = () => {
          Me(() => {
            var n
            ;(n = I.value) == null || n.setScrollTop(0)
          })
        },
        S = c({ page: 1, pageSize: 10, total: 0 }),
        O = c(''),
        he = c('')
      c(null)
      const R = c({}),
        F = c(''),
        U = c(''),
        de = c(0),
        pt = () => {
          ;((O.value = ''), (he.value = ''), (U.value = ''), (S.value.page = 1), b())
        },
        vt = (n) => {
          ;((S.value.page = 1),
            (O.value = ''),
            'group' in n &&
              ((R.value.local_group_uuid = n.group.length > 0 ? n.group[0] : ''),
              (F.value = ''),
              (U.value = ''),
              I.value && I.value.clearFilter(['padStatus', 'subCustomer'])),
            'padStatus' in n &&
              ((F.value = n.padStatus.length > 0 ? n.padStatus[0] : ''),
              (R.value.local_group_uuid = ''),
              (U.value = ''),
              I.value && I.value.clearFilter(['group'])),
            'subCustomer' in n &&
              ((U.value = n.subCustomer.length > 0 ? n.subCustomer[0] : ''),
              (R.value.local_group_uuid = ''),
              (F.value = ''),
              I.value && I.value.clearFilter(['group'])),
            b())
        },
        ft = ca(() => {
          ;((S.value.page = 1),
            (he.value = ''),
            (R.value.local_group_uuid = ''),
            I.value && I.value.clearFilter(['group']),
            b())
        }, 1e3),
        mt = () => {
          be.value = [
            { text: e('instanceList.running'), value: 10 },
            { text: e('instanceList.restarting'), value: 11 },
            { text: e('instanceList.resetting'), value: 12 },
            { text: e('instanceList.upgrading'), value: 13 },
            { text: e('instanceList.abnormal'), value: 14 },
            { text: e('instanceList.notReady'), value: 15 },
            { text: e('instanceList.backingUp'), value: 16 },
            { text: e('instanceList.recoveringData'), value: 17 },
            { text: e('instanceList.shutdown'), value: 18 },
            { text: e('instanceList.shuttingDown'), value: 19 },
            { text: e('instanceList.startingUp'), value: 20 },
            { text: e('instanceList.shutdownFailed'), value: 21 },
            { text: e('instanceList.startupFailed'), value: 22 }
          ]
        },
        gt = () => {
          Le.value = [
            { text: e('instanceList.queryAllAccounts'), value: 0 },
            { text: e('instanceList.queryMasterAccountOnly'), value: 1 },
            { text: e('instanceList.querySubAccountOnly'), value: -1 }
          ]
        },
        _t = async () => {
          try {
            const n = await ma()
            ye.value = n.map((a) => ({ text: a.name, value: a.uuid, uuid: a.uuid }))
          } catch (n) {
            console.error('获取分组列表失败:', n)
          }
        },
        H = c(!1),
        ke = c({}),
        j = c(!1),
        xe = c(''),
        q = c(!1),
        K = c(!1),
        Se = c(''),
        Z = c(!1),
        we = c(''),
        pe = c(!1),
        b = async () => {
          ;((A.value = !0), (P.value = []), await Me())
          try {
            const n = Object.values(R.value).some((p) => p !== '' && p !== null && p !== void 0),
              a = { page: S.value.page, rows: S.value.pageSize, groupIds: [Ge.value.group_id] }
            let o = {}
            if (n) {
              if (
                ((o = await Ue({ ...R.value, page: S.value.page, page_size: S.value.pageSize })),
                o.total === 0)
              ) {
                ;((P.value = []), (S.value.total = 0), (A.value = !1))
                return
              }
              a.page = 1
            }
            if (O.value) {
              const p = O.value
                .split(',')
                .map((m) => m.trim())
                .filter((m) => m !== '')
              a.padCodes = p
            } else n && (a.padCodes = o.instances.map((p) => p.instance_id))
            ;(F.value && (a.padStatus = F.value), U.value && (a.filterSubCustomerFlag = U.value))
            const d = await pa(a)
            try {
              if (n) {
                const p = Object.fromEntries(
                  o.instances.map((m) => [
                    m.instance_id,
                    {
                      ...m,
                      proxy_info:
                        m.proxy_info && m.proxy_info.startsWith('{') ? JSON.parse(m.proxy_info) : {}
                    }
                  ])
                )
                ;(d.data.pageData.forEach((m) => {
                  p[m.padCode] && (m.record = p[m.padCode])
                }),
                  (P.value = d.data.pageData),
                  (S.value.total = o.total),
                  Ce(),
                  (A.value = !1))
              } else {
                try {
                  const p = await Ue({
                      instance_ids: d.data.pageData ? d.data.pageData.map((C) => C.padCode) : []
                    }),
                    m = Object.fromEntries(
                      p.instances.map((C) => [
                        C.instance_id,
                        { ...C, proxy_info: C.proxy_info ? JSON.parse(C.proxy_info) : {} }
                      ])
                    )
                  ;(d.data.pageData.forEach((C) => {
                    m[C.padCode] && (C.record = m[C.padCode])
                  }),
                    (P.value = d.data.pageData))
                } catch (p) {
                  P.value = d.data.pageData
                }
                ;((S.value.total = d.data.total), Ce(), (A.value = !1))
              }
            } catch (p) {}
          } catch (n) {
            console.error(n)
          }
        },
        yt = (n) => {
          ;(de.value++, (S.value.page = n), b())
        }
      ;(ba(() => {
        ;(b(), _t(), mt(), gt(), window.addEventListener('resize', ue, !0), ue())
      }),
        La(() => {
          window.removeEventListener('resize', ue, !0)
        }))
      const bt = () => {
          fe.push('/createInstance')
        },
        Lt = (n) => {
          ;((ke.value = n), (H.value = !0))
        },
        Ie = (n) => {
          ;((xe.value = n), (j.value = !0))
        },
        Ct = (n) => {
          ;((Se.value = n.padCode), (K.value = !0))
        },
        ht = (n) => {
          ;((D.value = n.padCode), (M.value = !0))
        },
        kt = (n) => {
          ;((D.value = n.padCode), (N.value = !0))
        },
        xt = (n) => {
          ;((D.value = n.padCode), (G.value = !0))
        },
        St = (n) => {
          ;((D.value = n.padCode), (pe.value = !1), ($.value = !0))
        },
        wt = () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectInstanceFirst'))
            return
          }
          ;((pe.value = !0), ($.value = !0))
        },
        J = c(!1),
        It = (n) => {
          ;((ae.value = [n]), (J.value = !0))
        },
        Dt = async () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectInstanceFirst'))
            return
          }
          se.value = !0
        },
        Vt = async () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectInstanceFirst'))
            return
          }
          const n = g.value.map((a) => a.padCode).join(',')
          try {
            ;(await la(n), v.success(e('instanceList.copyCodesSuccess')))
          } catch (a) {
            ;(console.error(a), v.error(e('instanceList.copyCodesFailed')))
          }
        },
        Et = () => {
          ;(v.success(e('instanceList.operationSuccess')), b())
        },
        Pt = (n) => {
          ce.confirm(e('instanceList.confirmRestart'), e('instanceList.confirmOperation'), {
            confirmButtonText: e('instanceList.confirm'),
            cancelButtonText: e('instanceList.cancel'),
            type: 'warning'
          })
            .then(async () => {
              try {
                const a = await Ae({ padCodes: [n] })
                ;(a.data.failList && a.data.failList.length > 0
                  ? v({
                      message: T(
                        'div',
                        { style: 'text-align: left;' },
                        a.data.failList.map((o) =>
                          T(
                            'div',
                            { style: 'color: red; margin-bottom: 4px;' },
                            ''.concat(o.padCode, ': ').concat(o.errMsg)
                          )
                        )
                      ),
                      type: 'error',
                      duration: 5e3
                    })
                  : v.success(e('instanceList.restartSuccess')),
                  b())
              } catch (a) {
                ;(console.error(a), v.error(e('instanceList.restartFailed')))
              }
            })
            .catch(() => {
              v.info(e('instanceList.operationCancelled'))
            })
        },
        Tt = (n) => {
          ce.confirm(e('instanceList.confirmShutdown'), e('instanceList.confirmOperation'), {
            confirmButtonText: e('instanceList.confirm'),
            cancelButtonText: e('instanceList.cancel'),
            type: 'warning'
          })
            .then(async () => {
              try {
                const a = await $e({ padCodes: [n] })
                ;(a.data.failList && a.data.failList.length > 0
                  ? v({
                      message: T(
                        'div',
                        { style: 'text-align: left;' },
                        a.data.failList.map((o) =>
                          T(
                            'div',
                            { style: 'color: red; margin-bottom: 4px;' },
                            ''.concat(o.padCode, ': ').concat(o.errMsg)
                          )
                        )
                      ),
                      type: 'error',
                      duration: 5e3
                    })
                  : v.success(e('instanceList.shutdownSuccess')),
                  b())
              } catch (a) {
                ;(console.error(a), v.error(e('instanceList.shutdownFailed')))
              }
            })
            .catch(() => {
              v.info(e('instanceList.operationCancelled'))
            })
        },
        Ot = async (n) => {
          const { verifySecurityCode: a } = await k(
            () => import('./securityCode-dd0bbf82.js'),
            [
              'static/securityCode-dd0bbf82.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css'
            ]
          )
          if (!(await a(e))) {
            v.info(e('instanceList.securityCodeNotVerified'))
            return
          }
          ce.confirm(e('instanceList.confirmDelete'), e('instanceList.confirmOperation'), {
            confirmButtonText: e('instanceList.confirm'),
            cancelButtonText: e('instanceList.cancel'),
            type: 'warning'
          })
            .then(async () => {
              var d
              try {
                const p = await Be({ padCodes: [n] })
                ;(await Fe({ instance_ids: [n] }),
                  p.data.failList && p.data.failList.length > 0
                    ? v({
                        message: T(
                          'div',
                          { style: 'text-align: left;' },
                          p.data.failList.map((m) =>
                            T(
                              'div',
                              { style: 'color: red; margin-bottom: 4px;' },
                              ''.concat(m.padCode, ': ').concat(m.errMsg)
                            )
                          )
                        ),
                        type: 'error',
                        duration: 5e3
                      })
                    : (v.success(e('instanceList.deleteSuccess')),
                      (P.value = P.value.filter((m) => m.padCode !== n))),
                  b(),
                  (d = I.value) == null || d.clearSelection())
              } catch (p) {
                ;(console.error(p), v.error(e('instanceList.deleteFailed')))
              }
            })
            .catch(() => {
              v.info(e('instanceList.operationCancelled'))
            })
        },
        Rt = (n) => {
          ;((ae.value = [{ padCode: n }]), (te.value = !0))
        },
        Ut = (n) => {
          g.value = n
        },
        At = async () => {
          const { verifySecurityCode: n } = await k(
            () => import('./securityCode-dd0bbf82.js'),
            [
              'static/securityCode-dd0bbf82.js',
              'static/index-ae33a03d.js',
              'static/vue-66851fce.js',
              'static/element-74718691.js',
              'static/vxe-562f9a54.js',
              'static/index-90a5d7f3.css'
            ]
          )
          if (!(await n(e))) {
            v.info('安全码验证未通过，已取消操作')
            return
          }
          q.value = !0
        },
        ve = async (n) => {
          if (g.value.length === 0) {
            v.warning('请先选择实例')
            return
          }
          const a = g.value.map((d) => d.padCode)
          let o
          switch (n) {
            case 'open':
              o = fa
              break
            case 'off':
              o = $e
              break
            case 'delete':
              o = Be
              break
            case 'restart':
              o = Ae
              break
          }
          if (n === 'delete') {
            const { verifySecurityCode: d } = await k(
              () => import('./securityCode-dd0bbf82.js'),
              [
                'static/securityCode-dd0bbf82.js',
                'static/index-ae33a03d.js',
                'static/vue-66851fce.js',
                'static/element-74718691.js',
                'static/vxe-562f9a54.js',
                'static/index-90a5d7f3.css'
              ]
            )
            if (!(await d(e))) {
              v.info(e('instanceList.securityCodeNotVerified'))
              return
            }
          }
          ce.confirm(
            e('instanceList.confirmBatchOperation', {
              operation: e('instanceList.'.concat(n)),
              instances: a.join(' ， ')
            }),
            e('instanceList.confirmOperation'),
            {
              confirmButtonText: e('instanceList.confirm'),
              cancelButtonText: e('instanceList.cancel'),
              type: 'warning'
            }
          )
            .then(async () => {
              var d
              try {
                const p = await o({ padCodes: a })
                ;(n === 'delete' && (await Fe({ instance_ids: a })),
                  p.data.failList && p.data.failList.length > 0
                    ? v({
                        message: T(
                          'div',
                          { style: 'text-align: left;' },
                          p.data.failList.map((m) =>
                            T(
                              'div',
                              { style: 'color: red; margin-bottom: 4px;' },
                              ''.concat(m.padCode, ': ').concat(m.errMsg)
                            )
                          )
                        ),
                        type: 'error',
                        duration: 5e3
                      })
                    : v.success(
                        e('instanceList.batchOperationSuccess', {
                          operation: e('instanceList.'.concat(n))
                        })
                      ),
                  b(),
                  (d = I.value) == null || d.clearSelection())
              } catch (p) {
                ;(console.error(p),
                  v.error(
                    e('instanceList.batchOperationFailed', {
                      operation: e('instanceList.'.concat(n))
                    })
                  ))
              }
            })
            .catch(() => {
              v.info(e('instanceList.operationCancelled'))
            })
        },
        Q = c(!1),
        $t = () => {
          if (g.value.length === 0) {
            v.warning('请先选择实例')
            return
          }
          Q.value = !0
        },
        X = c(!1),
        Bt = () => {
          if (g.value.length === 0) {
            v.warning('请先选择实例')
            return
          }
          X.value = !0
        },
        Y = c(!1),
        Ft = () => {
          if (g.value.length === 0) {
            v.warning('请先选择实例')
            return
          }
          Y.value = !0
        },
        ee = c(!1),
        Mt = () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectInstanceFirst'))
            return
          }
          ee.value = !0
        },
        te = c(!1),
        ae = c([]),
        ne = c(!1),
        Nt = () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectInstanceFirst'))
            return
          }
          ne.value = !0
        },
        ie = c(!1),
        zt = () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectInstanceFirst'))
            return
          }
          ie.value = !0
        },
        se = c(!1),
        oe = c(!1),
        le = Ca(() => g.value.length > 0 && g.value.every((n) => n.padStatus == 10)),
        Gt = () => {
          if (!le.value) {
            v.warning(e('instanceList.selectRunningInstances'))
            return
          }
          const n = g.value.map((a) => a.padCode)
          ;(We.setSelectedPadCodes(n), fe.push('/clusterControl'))
        },
        Wt = () => {
          if (!le.value) {
            v.warning(e('instanceList.selectRunningInstances'))
            return
          }
          oe.value = !0
        },
        Ht = (n) => {
          const a = g.value.map((o) => o.padCode)
          Zt(a.slice(0, n), n)
        },
        jt = (n) => {
          const { mode: a, count: o, instances: d } = n
          a === 1 ? Ht(o) : a === 2 && qt(d)
        },
        qt = (n) => {
          n.map((o) => o.padCode).forEach((o, d) => {
            const p = d * 30
            Kt(o, p)
          })
        },
        Kt = (n, a) => {
          const o = '/#/mobile/connect/'.concat(n),
            d = 'width=800,height=600,left='
              .concat(a, ',top=')
              .concat(a, ',toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no')
          window.open(o, '_blank_'.concat(n), d)
        },
        Zt = (n, a) => {
          const o = Jt(),
            d = Qt(o, a)
          let p = 0
          const m = () => {
            if (p < n.length) {
              const C = n[p],
                E = d[p]
              ;(Xt(C, E), p++, setTimeout(m, 100))
            }
          }
          m()
        },
        Jt = () => ({ width: window.screen.availWidth, height: window.screen.availHeight }),
        Qt = (n, a) => {
          let o, d
          a <= 2
            ? ((o = 1), (d = 2))
            : a <= 4
              ? ((o = 2), (d = 2))
              : a <= 6
                ? ((o = 2), (d = 3))
                : a <= 8
                  ? ((o = 2), (d = 4))
                  : ((o = 2), (d = 5))
          const p = Math.floor(n.width / d),
            m = Math.floor(n.height / o),
            C = []
          for (let E = 0; E < a; E++) {
            const re = Math.floor(E / d),
              w = E % d
            C.push({ x: w * p, y: re * m + re * 80, width: p - 20, height: m - 80 })
          }
          return C
        },
        Xt = (n, a) => {
          const o = '/#/mobile/connect/'.concat(n),
            d = 'width='
              .concat(a.width, ',height=')
              .concat(a.height, ',left=')
              .concat(a.x, ',top=')
              .concat(
                a.y,
                ',fullscreen=yes,toolbar=no,resizable=yes,scrollbars=no,status=no,menubar=no,location=no'
              )
          window.open(o, '_blank_'.concat(n), d)
        },
        Yt = async () => {
          if (g.value.length === 0) {
            v.warning(e('instanceList.selectAtLeastOneInstance'))
            return
          }
          const n = g.value.map((a) => a.padCode)
          try {
            ;(await va({
              padCodes: n,
              scriptContent: 'cmd settings2 put global navigationbar_switch on'
            }),
              v.success(e('instanceList.enableThreeKeyNavigationSuccess')),
              b())
          } catch (a) {
            ;(console.error('开启三键导航失败:', a),
              v.error(e('instanceList.enableThreeKeyNavigationFailed')))
          }
        }
      return (n, a) => {
        const o = V('el-button'),
          d = V('el-input'),
          p = V('el-popover'),
          m = V('PageBanner'),
          C = V('el-table-column'),
          E = V('el-icon'),
          re = V('el-tag'),
          w = V('el-dropdown-item'),
          ea = V('el-dropdown-menu'),
          ta = V('el-dropdown'),
          aa = V('el-table'),
          na = V('el-pagination'),
          ia = ha('loading')
        return (
          _(),
          ka('div', Va, [
            r(
              m,
              { title: '' },
              {
                extra: l(() => [
                  r(
                    d,
                    {
                      modelValue: O.value,
                      'onUpdate:modelValue': a[0] || (a[0] = (t) => (O.value = t)),
                      placeholder: i(e)('instanceList.searchPlaceholder'),
                      style: { width: '450px', 'margin-right': '10px' },
                      onInput: i(ft)
                    },
                    {
                      append: l(() => [
                        r(
                          o,
                          { onClick: pt },
                          { default: l(() => [u(s(i(e)('instanceList.clearSearch')), 1)]), _: 1 }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['modelValue', 'placeholder', 'onInput']
                  ),
                  r(
                    o,
                    {
                      'ml-2': '',
                      icon: 'RefreshRight',
                      onClick:
                        a[1] ||
                        (a[1] = () => {
                          ;(de.value++, b())
                        })
                    },
                    { default: l(() => [u(s(i(e)('instanceList.refresh')), 1)]), _: 1 }
                  ),
                  i(Da)(['instance:create'])
                    ? (_(),
                      y(
                        o,
                        { key: 0, icon: 'Plus', type: 'primary', onClick: bt },
                        { default: l(() => [u(s(i(e)('instanceList.createInstance')), 1)]), _: 1 }
                      ))
                    : L('', !0),
                  r(
                    p,
                    { placement: 'bottom', trigger: 'hover', width: 'auto' },
                    {
                      reference: l(() => [
                        r(
                          o,
                          { icon: 'arrow-down', type: 'primary' },
                          {
                            default: l(() => [u(s(i(e)('instanceList.batchOperations')), 1)]),
                            _: 1
                          }
                        )
                      ]),
                      default: l(() => [
                        f('div', Ea, [
                          f('div', Pa, [
                            f('div', Ta, [
                              f('div', Oa, s(i(e)('instanceList.appOperations')), 1),
                              f('div', Ra, [
                                r(
                                  o,
                                  { link: '', type: 'success', onClick: Mt },
                                  {
                                    default: l(() => [u(s(i(e)('instanceList.batchStartup')), 1)]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  {
                                    link: '',
                                    type: 'warning',
                                    onClick: a[2] || (a[2] = (t) => ve('off'))
                                  },
                                  {
                                    default: l(() => [u(s(i(e)('instanceList.batchShutdown')), 1)]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  {
                                    link: '',
                                    type: 'primary',
                                    onClick: a[3] || (a[3] = (t) => ve('restart'))
                                  },
                                  {
                                    default: l(() => [u(s(i(e)('instanceList.batchRestart')), 1)]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  {
                                    link: '',
                                    type: 'danger',
                                    onClick: a[4] || (a[4] = (t) => ve('delete'))
                                  },
                                  {
                                    default: l(() => [u(s(i(e)('instanceList.batchDelete')), 1)]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'danger', onClick: At },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.conditionalDelete')), 1)
                                    ]),
                                    _: 1
                                  }
                                )
                              ])
                            ]),
                            f('div', Ua, [
                              f('div', Aa, s(i(e)('instanceList.businessData')), 1),
                              f('div', $a, [
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: zt },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchModifyGroup')), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: wt },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchModifyRemark')), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: Dt },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchUpgradeRealImage')), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: Vt },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchCopyCodes')), 1)
                                    ]),
                                    _: 1
                                  }
                                )
                              ])
                            ])
                          ]),
                          f('div', Ba, [
                            f('div', Fa, [
                              f('div', Ma, s(i(e)('instanceList.systemNetwork')), 1),
                              f('div', Na, [
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: $t },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchUpdateTimeZone')), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: Bt },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchUpdateLanguage')), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: Ft },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchUpdateGps')), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: Nt },
                                  {
                                    default: l(() => [u(s(i(e)('instanceList.batchSetProxy')), 1)]),
                                    _: 1
                                  }
                                ),
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: Yt },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.enableThreeKeyNavigation')), 1)
                                    ]),
                                    _: 1
                                  }
                                )
                              ])
                            ]),
                            f('div', za, [
                              f('div', Ga, s(i(e)('instanceList.scriptAutomation')), 1),
                              f('div', Wa, [
                                r(
                                  o,
                                  { link: '', type: 'primary', onClick: ct },
                                  {
                                    default: l(() => [
                                      u(s(i(e)('instanceList.batchExecuteAdbCommand')), 1)
                                    ]),
                                    _: 1
                                  }
                                )
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }
                  ),
                  r(
                    o,
                    {
                      plain: '',
                      icon: 'Operation',
                      type: 'primary',
                      onClick: Gt,
                      disabled: !le.value
                    },
                    { default: l(() => [u(s(i(e)('instanceList.clusterControl')), 1)]), _: 1 },
                    8,
                    ['disabled']
                  ),
                  r(
                    o,
                    {
                      plain: '',
                      icon: 'FullScreen',
                      type: 'primary',
                      onClick: Wt,
                      disabled: !le.value,
                      style: { 'margin-left': '10px' }
                    },
                    { default: l(() => [u(s(i(e)('instanceList.clusterWindows')), 1)]), _: 1 },
                    8,
                    ['disabled']
                  )
                ]),
                _: 1
              }
            ),
            xa(
              (_(),
              y(
                aa,
                {
                  data: P.value,
                  onFilterChange: vt,
                  ref_key: 'cTable',
                  ref: I,
                  'row-key': 'id',
                  style: { width: '100%', 'margin-top': '20px' },
                  'max-height': i(Ne),
                  onSelectionChange: Ut
                },
                {
                  default: l(() => [
                    r(C, { type: 'selection', width: '55' }),
                    r(
                      C,
                      { prop: 'padCode', label: i(e)('instanceList.instanceInfo'), width: '300' },
                      {
                        default: l(({ row: t }) => [
                          f('div', null, [
                            f('span', null, s(i(e)('instanceList.instanceCode')), 1),
                            f(
                              'span',
                              { class: 'pad-code-link', onClick: (h) => Ie(t.padCode) },
                              s(t.padCode),
                              9,
                              Ha
                            ),
                            r(
                              E,
                              { onClick: (h) => Ie(t.padCode), style: { 'margin-left': '5px' } },
                              { default: l(() => [r(i(ua))]), _: 2 },
                              1032,
                              ['onClick']
                            )
                          ]),
                          f('div', null, s(i(e)('instanceList.instanceSpec')) + s(t.padGrade), 1),
                          f('div', null, [
                            u(s(i(e)('instanceList.instanceType')) + ' ', 1),
                            r(
                              re,
                              { type: t.padType === 'real' ? 'success' : 'info' },
                              {
                                default: l(() => [
                                  u(
                                    s(
                                      t.padType === 'real'
                                        ? i(e)('instanceList.realMachine')
                                        : i(e)('instanceList.virtualMachine')
                                    ),
                                    1
                                  )
                                ]),
                                _: 2
                              },
                              1032,
                              ['type']
                            )
                          ]),
                          f('div', null, s(i(e)('instanceList.instanceIp')) + s(t.padIp), 1),
                          f(
                            'div',
                            null,
                            s(i(e)('instanceList.imageVersion')) + s(t.imageVersion),
                            1
                          ),
                          f('div', null, s(i(e)('instanceList.imageId')) + s(t.imageId), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    r(
                      C,
                      {
                        prop: 'armServerCode',
                        label: i(e)('instanceList.externalInfo'),
                        width: '250'
                      },
                      {
                        default: l(({ row: t }) => [
                          f(
                            'div',
                            null,
                            s(i(e)('instanceList.serverCode')) + s(t.armServerCode || '--'),
                            1
                          ),
                          f(
                            'div',
                            null,
                            s(i(e)('instanceList.boardCode')) + s(t.deviceCode || '--'),
                            1
                          ),
                          f('div', null, s(i(e)('instanceList.boardIp')) + s(t.deviceIp || '--'), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    r(
                      C,
                      {
                        prop: 'subCustomer',
                        label: i(e)('instanceList.subCustomer'),
                        'column-key': 'subCustomer',
                        filters: Le.value,
                        'filter-multiple': !1,
                        'min-width': '120'
                      },
                      {
                        default: l(({ row: t }) => [
                          f('span', null, s(t == null ? void 0 : t.customerAccount), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['label', 'filters']
                    ),
                    r(
                      C,
                      {
                        prop: 'padStatus',
                        label: i(e)('instanceList.instanceStatus'),
                        'column-key': 'padStatus',
                        filters: be.value,
                        'filter-multiple': !1,
                        'min-width': '120'
                      },
                      {
                        default: l(({ row: t }) => [
                          r(wa, { status: t.padStatus }, null, 8, ['status'])
                        ]),
                        _: 1
                      },
                      8,
                      ['label', 'filters']
                    ),
                    r(
                      C,
                      { prop: 'idc', label: i(e)('instanceList.proxyInfo'), width: '300' },
                      {
                        default: l(({ row: t }) => {
                          var h, De, Ve, Ee, Pe, Te, Oe, Re
                          return [
                            f(
                              'div',
                              null,
                              s(i(e)('instanceList.proxyName')) +
                                s(
                                  ((De = (h = t.record) == null ? void 0 : h.proxy_info) == null
                                    ? void 0
                                    : De.name) || '--'
                                ),
                              1
                            ),
                            f(
                              'div',
                              null,
                              s(i(e)('instanceList.proxyPort')) +
                                s(
                                  (Ee = (Ve = t.record) == null ? void 0 : Ve.proxy_info) == null
                                    ? void 0
                                    : Ee.port
                                ),
                              1
                            ),
                            f(
                              'div',
                              null,
                              s(i(e)('instanceList.proxyMethod')) +
                                s(
                                  (Te = (Pe = t.record) == null ? void 0 : Pe.proxy_info) == null
                                    ? void 0
                                    : Te.proxyType
                                ),
                              1
                            ),
                            f(
                              'div',
                              null,
                              s(i(e)('instanceList.proxyType')) +
                                s(
                                  (Re = (Oe = t.record) == null ? void 0 : Oe.proxy_info) == null
                                    ? void 0
                                    : Re.proxyName
                                ),
                              1
                            )
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    r(
                      C,
                      { prop: 'createTime', label: i(e)('instanceList.createTime'), width: '180' },
                      null,
                      8,
                      ['label']
                    ),
                    r(
                      C,
                      {
                        prop: 'group',
                        label: i(e)('instanceList.group'),
                        'column-key': 'group',
                        filters: ye.value,
                        'filter-multiple': !1,
                        'min-width': '150',
                        fixed: 'right'
                      },
                      {
                        default: l(({ row: t }) => {
                          var h
                          return [u(s(((h = t.record) == null ? void 0 : h.group_name) || '--'), 1)]
                        }),
                        _: 1
                      },
                      8,
                      ['label', 'filters']
                    ),
                    r(
                      C,
                      {
                        prop: 'note',
                        label: i(e)('instanceList.remark'),
                        'min-width': '150',
                        fixed: 'right'
                      },
                      {
                        default: l(({ row: t }) => {
                          var h
                          return [
                            f('span', ja, s(((h = t.record) == null ? void 0 : h.note) || '--'), 1)
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['label']
                    ),
                    r(
                      C,
                      {
                        label: i(e)('instanceList.operations'),
                        width: '150',
                        fixed: 'right',
                        'class-name': 'operation-column'
                      },
                      {
                        default: l(({ row: t }) => [
                          f('div', null, [
                            r(
                              o,
                              { type: 'primary', link: '', onClick: (h) => Lt(t) },
                              { default: l(() => [u(s(i(e)('instanceList.setProxy')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            )
                          ]),
                          f('div', null, [
                            r(
                              o,
                              {
                                type: 'primary',
                                link: '',
                                style: { 'margin-right': '5px' },
                                onClick: (h) => Pt(t.padCode)
                              },
                              { default: l(() => [u(s(i(e)('instanceList.restart')), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            )
                          ]),
                          f('div', null, [
                            r(
                              o,
                              {
                                type: 'primary',
                                link: '',
                                style: { 'margin-right': '10px' },
                                onClick: (h) => Ct(t)
                              },
                              {
                                default: l(() => [u(s(i(e)('instanceList.connectCloudHost')), 1)]),
                                _: 2
                              },
                              1032,
                              ['onClick']
                            )
                          ]),
                          f('div', null, [
                            r(
                              ta,
                              null,
                              {
                                dropdown: l(() => [
                                  r(
                                    ea,
                                    null,
                                    {
                                      default: l(() => [
                                        t.padStatus == 10
                                          ? (_(),
                                            y(
                                              w,
                                              { key: 0, onClick: (h) => It(t) },
                                              {
                                                default: l(() => [
                                                  u(s(i(e)('instanceList.upgradeRealImage')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : L('', !0),
                                        t.padStatus == 10
                                          ? (_(),
                                            y(
                                              w,
                                              { key: 1, onClick: (h) => lt(t) },
                                              {
                                                default: l(() => [
                                                  u(s(i(e)('instanceList.uploadFile')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : L('', !0),
                                        t.padStatus == 18
                                          ? (_(),
                                            y(
                                              w,
                                              { key: 2, onClick: (h) => Rt(t.padCode) },
                                              {
                                                default: l(() => [
                                                  u(s(i(e)('instanceList.startup')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : L('', !0),
                                        t.padStatus == 10
                                          ? (_(),
                                            y(
                                              w,
                                              { key: 3, onClick: (h) => Tt(t.padCode) },
                                              {
                                                default: l(() => [
                                                  u(s(i(e)('instanceList.shutdown')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : L('', !0),
                                        r(
                                          w,
                                          { onClick: (h) => Ot(t.padCode) },
                                          {
                                            default: l(() => [
                                              u(s(i(e)('instanceList.delete')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        r(
                                          w,
                                          { onClick: (h) => ht(t) },
                                          {
                                            default: l(() => [
                                              u(s(i(e)('instanceList.modifyPropsDynamic')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        r(
                                          w,
                                          { onClick: (h) => kt(t) },
                                          {
                                            default: l(() => [
                                              u(s(i(e)('instanceList.modifyPropsStatic')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        r(
                                          w,
                                          { onClick: (h) => dt(t.padCode) },
                                          {
                                            default: l(() => [
                                              u(s(i(e)('instanceList.viewProperties')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        r(
                                          w,
                                          { onClick: (h) => xt(t) },
                                          {
                                            default: l(() => [
                                              u(s(i(e)('instanceList.modifyGroup')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        r(
                                          w,
                                          { onClick: (h) => St(t) },
                                          {
                                            default: l(() => [
                                              u(s(i(e)('instanceList.modifyRemark')), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        t.padStatus == 10
                                          ? (_(),
                                            y(
                                              w,
                                              { key: 4, onClick: (h) => rt(t) },
                                              {
                                                default: l(() => [
                                                  u(s(i(e)('instanceList.executeAdbCommand')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : L('', !0),
                                        t.padStatus == 10
                                          ? (_(),
                                            y(
                                              w,
                                              { key: 5, onClick: (h) => ut(t) },
                                              {
                                                default: l(() => [
                                                  u(s(i(e)('instanceList.getAdbConnectionInfo')), 1)
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : L('', !0)
                                      ]),
                                      _: 2
                                    },
                                    1024
                                  )
                                ]),
                                default: l(() => [
                                  r(
                                    o,
                                    { style: { 'margin-top': '3px' }, type: 'primary', link: '' },
                                    {
                                      default: l(() => [
                                        u(s(i(e)('instanceList.more')), 1),
                                        r(
                                          E,
                                          { class: 'el-icon--right' },
                                          { default: l(() => [r(i(da))]), _: 1 }
                                        )
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 2
                              },
                              1024
                            )
                          ])
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
                ['data', 'max-height']
              )),
              [[ia, A.value]]
            ),
            r(
              na,
              {
                'current-page': S.value.page,
                'onUpdate:currentPage': a[5] || (a[5] = (t) => (S.value.page = t)),
                'page-size': S.value.pageSize,
                'onUpdate:pageSize': a[6] || (a[6] = (t) => (S.value.pageSize = t)),
                'page-sizes': [10, 20, 50, 100],
                total: S.value.total,
                layout: 'total, sizes, prev, pager, next, jumper',
                onSizeChange:
                  a[7] ||
                  (a[7] = () => {
                    ;((S.value.page = 1), de.value++, b())
                  }),
                onCurrentChange: yt,
                style: { 'margin-top': '20px', 'text-align': 'right' }
              },
              null,
              8,
              ['current-page', 'page-size', 'total']
            ),
            H.value
              ? (_(),
                y(
                  i(me),
                  {
                    key: 0,
                    visible: H.value,
                    'onUpdate:visible': a[8] || (a[8] = (t) => (H.value = t)),
                    'row-data': ke.value,
                    onSuccess: Et
                  },
                  null,
                  8,
                  ['visible', 'row-data']
                ))
              : L('', !0),
            j.value
              ? (_(),
                y(
                  i(He),
                  {
                    key: 1,
                    visible: j.value,
                    'onUpdate:visible': a[9] || (a[9] = (t) => (j.value = t)),
                    'pad-code': xe.value
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            K.value
              ? (_(),
                y(
                  i(je),
                  {
                    key: 2,
                    visible: K.value,
                    'onUpdate:visible': a[10] || (a[10] = (t) => (K.value = t)),
                    'pad-code': Se.value
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            M.value
              ? (_(),
                y(
                  i(qe),
                  {
                    key: 3,
                    visible: M.value,
                    'onUpdate:visible': a[11] || (a[11] = (t) => (M.value = t)),
                    'pad-code': D.value,
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            N.value
              ? (_(),
                y(
                  i(Ke),
                  {
                    key: 4,
                    visible: N.value,
                    'onUpdate:visible': a[12] || (a[12] = (t) => (N.value = t)),
                    'pad-code': D.value,
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            z.value
              ? (_(),
                y(
                  i(Ze),
                  {
                    key: 5,
                    visible: z.value,
                    'onUpdate:visible': a[13] || (a[13] = (t) => (z.value = t)),
                    'pad-code': D.value
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            G.value
              ? (_(),
                y(
                  i(Ye),
                  {
                    key: 6,
                    visible: G.value,
                    'onUpdate:visible': a[14] || (a[14] = (t) => (G.value = t)),
                    'pad-code': D.value,
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            $.value
              ? (_(),
                y(
                  i(et),
                  {
                    key: 7,
                    visible: $.value,
                    'onUpdate:visible': a[15] || (a[15] = (t) => ($.value = t)),
                    'pad-codes': pe.value ? g.value.map((t) => t.padCode) : [D.value],
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            Q.value
              ? (_(),
                y(
                  i(Je),
                  {
                    key: 8,
                    visible: Q.value,
                    'onUpdate:visible': a[16] || (a[16] = (t) => (Q.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            X.value
              ? (_(),
                y(
                  i(Qe),
                  {
                    key: 9,
                    visible: X.value,
                    'onUpdate:visible': a[17] || (a[17] = (t) => (X.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            Y.value
              ? (_(),
                y(
                  i(Xe),
                  {
                    key: 10,
                    visible: Y.value,
                    'onUpdate:visible': a[18] || (a[18] = (t) => (Y.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            ee.value
              ? (_(),
                y(
                  i(ge),
                  {
                    key: 11,
                    visible: ee.value,
                    'onUpdate:visible': a[19] || (a[19] = (t) => (ee.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            te.value
              ? (_(),
                y(
                  i(ge),
                  {
                    key: 12,
                    visible: te.value,
                    'onUpdate:visible': a[20] || (a[20] = (t) => (te.value = t)),
                    'pad-codes': ae.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            J.value
              ? (_(),
                y(
                  i(_e),
                  {
                    key: 13,
                    visible: J.value,
                    'onUpdate:visible': a[21] || (a[21] = (t) => (J.value = t)),
                    'pad-codes': ae.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            ne.value
              ? (_(),
                y(
                  i(me),
                  {
                    key: 14,
                    isBatch: '',
                    visible: ne.value,
                    'onUpdate:visible': a[22] || (a[22] = (t) => (ne.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            ie.value
              ? (_(),
                y(
                  i(tt),
                  {
                    key: 15,
                    visible: ie.value,
                    'onUpdate:visible': a[23] || (a[23] = (t) => (ie.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            Z.value
              ? (_(),
                y(
                  i(at),
                  {
                    key: 16,
                    visible: Z.value,
                    'onUpdate:visible': a[24] || (a[24] = (t) => (Z.value = t)),
                    'pad-code': we.value,
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            B.value
              ? (_(),
                y(
                  i(nt),
                  {
                    key: 17,
                    visible: B.value,
                    'onUpdate:visible': a[25] || (a[25] = (t) => (B.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            W.value
              ? (_(),
                y(
                  i(it),
                  {
                    key: 18,
                    visible: W.value,
                    'onUpdate:visible': a[26] || (a[26] = (t) => (W.value = t)),
                    'pad-code': D.value
                  },
                  null,
                  8,
                  ['visible', 'pad-code']
                ))
              : L('', !0),
            q.value
              ? (_(),
                y(
                  i(st),
                  {
                    key: 19,
                    modelValue: q.value,
                    'onUpdate:modelValue': a[27] || (a[27] = (t) => (q.value = t)),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['modelValue']
                ))
              : L('', !0),
            se.value
              ? (_(),
                y(
                  i(_e),
                  {
                    key: 20,
                    visible: se.value,
                    'onUpdate:visible': a[28] || (a[28] = (t) => (se.value = t)),
                    'pad-codes': g.value.map((t) => t.padCode),
                    onSuccess: b
                  },
                  null,
                  8,
                  ['visible', 'pad-codes']
                ))
              : L('', !0),
            oe.value
              ? (_(),
                y(
                  i(ot),
                  {
                    key: 21,
                    visible: oe.value,
                    'onUpdate:visible': a[29] || (a[29] = (t) => (oe.value = t)),
                    'selected-instances': g.value,
                    onConfirm: jt
                  },
                  null,
                  8,
                  ['visible', 'selected-instances']
                ))
              : L('', !0)
          ])
        )
      }
    }
  })
const ln = ra(qa, [['__scopeId', 'data-v-40f31878']])
export { ln as default }
