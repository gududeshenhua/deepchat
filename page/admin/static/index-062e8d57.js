import {
  v as oe,
  b as ae,
  m as K,
  r as X,
  y as V,
  at as R,
  e as T,
  a8 as g,
  f as _,
  h as C,
  N as s,
  H as m,
  A as k,
  w as F,
  F as j,
  a0 as ne,
  L as re,
  u as n,
  ar as le,
  as as ie,
  i as y,
  M as ce,
  au as de,
  z as ue,
  K as H,
  I as q,
  O as J,
  G as W
} from './vue-66851fce.js'
import { u as A, D as O } from './app-79cffc0b.js'
import { u as pe, a as I, _ as z, r as _e, g as ve, s as G } from './index-ae33a03d.js'
import { e as D, r as fe, s as me } from './element-74718691.js'
import { S as Q, N as Y, T as Z, A as ee, L as he, a as be } from './TopMode-7334df43.js'
import './index-e2f885a3.js'
import './vxe-562f9a54.js'
import './validate-5515d956.js'
import './index-1bdb6a9d.js'
const we = 992,
  ge = () => {
    const o = A(),
      { listenerRouteChange: l } = pe(),
      r = () => document.body.getBoundingClientRect().width - 1 < we,
      e = () => {
        if (!document.hidden) {
          const t = r()
          ;(o.toggleDevice(t ? O.Mobile : O.Desktop), t && o.closeSidebar(!0))
        }
      }
    ;(l(() => {
      o.device === O.Mobile && o.sidebar.opened && o.closeSidebar(!1)
    }),
      oe(() => {
        window.addEventListener('resize', e)
      }),
      ae(() => {
        r() && (o.toggleDevice(O.Mobile), o.closeSidebar(!0))
      }),
      K(() => {
        window.removeEventListener('resize', e)
      }))
  },
  ye = {
    defense: !0,
    color: '#c0c4cc',
    opacity: 0.5,
    size: 16,
    family: 'serif',
    angle: -20,
    width: 300,
    height: 200
  },
  P = X(document.body)
function Me(o = P) {
  let l,
    r,
    e = null
  const t = {
      watermarkElMutationObserver: void 0,
      parentElMutationObserver: void 0,
      parentElResizeObserver: void 0
    },
    i = (a, u = {}) => {
      if (!o.value) {
        console.warn('请在 DOM 挂载完成后再调用 setWatermark 方法设置水印')
        return
      }
      ;((l = a), (r = { ...ye, ...u }), e ? c() : d(), f(o.value))
    },
    d = () => {
      const a = o.value.tagName.toLowerCase() === P.value.tagName.toLowerCase(),
        u = a ? 'fixed' : 'absolute',
        b = a ? '' : 'relative'
      ;((e = document.createElement('div')),
        (e.style.pointerEvents = 'none'),
        (e.style.top = '0'),
        (e.style.left = '0'),
        (e.style.position = u),
        (e.style.zIndex = '99999'))
      const { clientWidth: p, clientHeight: L } = o.value
      ;(c({ width: p, height: L }), (o.value.style.position = b), o.value.appendChild(e))
    },
    c = (a = {}) => {
      e &&
        (l && (e.style.background = 'url('.concat(v(), ') left top repeat')),
        a.width && (e.style.width = ''.concat(a.width, 'px')),
        a.height && (e.style.height = ''.concat(a.height, 'px')))
    },
    v = () => {
      const { color: a, opacity: u, size: b, family: p, angle: L, width: N, height: $ } = r,
        E = document.createElement('canvas')
      ;((E.width = N), (E.height = $))
      const S = E.getContext('2d')
      return (
        S &&
          ((S.fillStyle = a),
          (S.globalAlpha = u),
          (S.font = ''.concat(b, 'px ').concat(p)),
          S.rotate((Math.PI / 180) * L),
          S.fillText(l, 0, $ / 2)),
        E.toDataURL()
      )
    },
    h = () => {
      if (!(!o.value || !e)) {
        w()
        try {
          o.value.removeChild(e)
        } catch (a) {
          console.warn('水印元素已不存在，请重新创建')
        } finally {
          e = null
        }
      }
    },
    M = D(() => {
      ;(h(), d(), f(o.value))
    }, 100),
    f = (a) => {
      ;(r.defense
        ? !t.watermarkElMutationObserver && !t.parentElMutationObserver && x(a)
        : w('mutation'),
        t.parentElResizeObserver || B(a))
    },
    w = (a = 'all') => {
      var u, b, p
      ;((a === 'mutation' || a === 'all') &&
        ((u = t.watermarkElMutationObserver) == null || u.disconnect(),
        (t.watermarkElMutationObserver = void 0),
        (b = t.parentElMutationObserver) == null || b.disconnect(),
        (t.parentElMutationObserver = void 0)),
        (a === 'resize' || a === 'all') &&
          ((p = t.parentElResizeObserver) == null || p.disconnect(),
          (t.parentElResizeObserver = void 0)))
    },
    x = (a) => {
      const u = D((b) => {
        b.forEach(
          D((p) => {
            switch (p.type) {
              case 'attributes':
                p.target === e && M()
                break
              case 'childList':
                p.removedNodes.forEach((L) => {
                  L === e && a.appendChild(e)
                })
                break
            }
          }, 100)
        )
      }, 100)
      ;((t.watermarkElMutationObserver = new MutationObserver(u)),
        (t.parentElMutationObserver = new MutationObserver(u)),
        t.watermarkElMutationObserver.observe(e, { attributes: !0, childList: !1, subtree: !1 }),
        t.parentElMutationObserver.observe(a, { attributes: !1, childList: !0, subtree: !1 }))
    },
    B = (a) => {
      const u = D(() => {
        const { clientWidth: b, clientHeight: p } = a
        c({ width: b, height: p })
      }, 500)
      ;((t.parentElResizeObserver = new ResizeObserver(u)), t.parentElResizeObserver.observe(a))
    }
  return (
    K(() => {
      h()
    }),
    { setWatermark: i, clearWatermark: h }
  )
}
const ke = { class: 'select-layout-mode' },
  Se = V({
    __name: 'SelectLayoutMode',
    setup(o) {
      const l = I(),
        { layoutMode: r } = R(l),
        e = T(() => r.value === 'left'),
        t = T(() => r.value === 'top'),
        i = T(() => r.value === 'left-top')
      return (d, c) => {
        const v = g('el-aside'),
          h = g('el-header'),
          M = g('el-main'),
          f = g('el-container'),
          w = g('el-tooltip')
        return (
          _(),
          C('div', ke, [
            s(
              w,
              { content: '左侧模式' },
              {
                default: m(() => [
                  s(
                    f,
                    {
                      class: k(['layout-mode left', { active: e.value }]),
                      onClick: c[0] || (c[0] = (x) => (r.value = 'left'))
                    },
                    {
                      default: m(() => [
                        s(v),
                        s(f, null, { default: m(() => [s(h), s(M)]), _: 1 })
                      ]),
                      _: 1
                    },
                    8,
                    ['class']
                  )
                ]),
                _: 1
              }
            ),
            s(
              w,
              { content: '顶部模式' },
              {
                default: m(() => [
                  s(
                    f,
                    {
                      class: k(['layout-mode top', { active: t.value }]),
                      onClick: c[1] || (c[1] = (x) => (r.value = 'top'))
                    },
                    { default: m(() => [s(h), s(M)]), _: 1 },
                    8,
                    ['class']
                  )
                ]),
                _: 1
              }
            ),
            s(
              w,
              { content: '混合模式' },
              {
                default: m(() => [
                  s(
                    f,
                    {
                      class: k(['layout-mode left-top', { active: i.value }]),
                      onClick: c[2] || (c[2] = (x) => (r.value = 'left-top'))
                    },
                    {
                      default: m(() => [
                        s(h),
                        s(f, null, { default: m(() => [s(v), s(M)]), _: 1 })
                      ]),
                      _: 1
                    },
                    8,
                    ['class']
                  )
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }
  }),
  Ce = z(Se, [['__scopeId', 'data-v-33bcccfb']]),
  te = (o) => (le('data-v-5dc3d300'), (o = o()), ie(), o),
  xe = { class: 'setting-container' },
  Le = te(() => y('h4', null, '布局配置', -1)),
  Ee = te(() => y('h4', null, '功能配置', -1)),
  Oe = { class: 'setting-name' },
  Te = V({
    __name: 'index',
    setup(o) {
      const l = I(),
        {
          layoutMode: r,
          showTagsView: e,
          showLogo: t,
          fixedHeader: i,
          showFooter: d,
          showNotify: c,
          showThemeSwitch: v,
          showScreenfull: h,
          showSearchMenu: M,
          cacheTagsView: f,
          showWatermark: w,
          showGreyMode: x,
          showColorWeakness: B
        } = R(l),
        a = {
          显示标签栏: e,
          '显示 Logo': t,
          '固定 Header': i,
          '显示页脚 Footer': d,
          显示消息通知: c,
          显示切换主题按钮: v,
          显示全屏按钮: h,
          显示搜索按钮: M,
          是否缓存标签栏: f,
          开启系统水印: w,
          显示灰色模式: x,
          显示色弱模式: B
        }
      return (
        F(() => {
          r.value !== 'left' && (i.value = !0)
        }),
        (u, b) => {
          const p = g('el-divider'),
            L = g('el-switch'),
            N = g('el-button')
          return (
            _(),
            C('div', xe, [
              Le,
              s(Ce),
              s(p),
              Ee,
              (_(),
              C(
                j,
                null,
                ne(a, ($, E, S) =>
                  y('div', { class: 'setting-item', key: S }, [
                    y('span', Oe, ce(E), 1),
                    s(
                      L,
                      {
                        modelValue: $.value,
                        'onUpdate:modelValue': (se) => ($.value = se),
                        disabled: n(r) !== 'left' && E === '固定 Header'
                      },
                      null,
                      8,
                      ['modelValue', 'onUpdate:modelValue', 'disabled']
                    )
                  ])
                ),
                64
              )),
              s(
                N,
                { type: 'danger', icon: n(fe), onClick: n(_e) },
                { default: m(() => [re('重 置')]), _: 1 },
                8,
                ['icon', 'onClick']
              )
            ])
          )
        }
      )
    }
  }),
  Ve = z(Te, [['__scopeId', 'data-v-5dc3d300']]),
  ze = V({
    __name: 'index',
    props: { buttonTop: { default: 350 } },
    setup(o) {
      de((t) => ({ '0a230261': r }))
      const r = o.buttonTop + 'px',
        e = X(!1)
      return (t, i) => {
        const d = g('el-icon'),
          c = g('el-drawer')
        return (
          _(),
          C(
            j,
            null,
            [
              y(
                'div',
                { class: 'handle-button', onClick: i[0] || (i[0] = (v) => (e.value = !0)) },
                [s(d, { size: 24 }, { default: m(() => [s(n(me))]), _: 1 })]
              ),
              s(
                c,
                {
                  modelValue: e.value,
                  'onUpdate:modelValue': i[1] || (i[1] = (v) => (e.value = v)),
                  size: '300px',
                  'with-header': !1
                },
                { default: m(() => [ue(t.$slots, 'default', {}, void 0, !0)]), _: 3 },
                8,
                ['modelValue']
              )
            ],
            64
          )
        )
      }
    }
  }),
  $e = z(ze, [['__scopeId', 'data-v-560ea116']]),
  We = V({
    __name: 'LeftMode',
    setup(o) {
      const l = A(),
        r = I(),
        { showTagsView: e, fixedHeader: t } = R(r),
        i = T(() => ({
          hideSidebar: !l.sidebar.opened,
          openSidebar: l.sidebar.opened,
          withoutAnimation: l.sidebar.withoutAnimation,
          mobile: l.device === O.Mobile
        })),
        d = () => {
          l.closeSidebar(!1)
        }
      return (c, v) => (
        _(),
        C(
          'div',
          { class: k([i.value, 'app-wrapper']) },
          [
            i.value.mobile && i.value.openSidebar
              ? (_(), C('div', { key: 0, class: 'drawer-bg', onClick: d }))
              : H('', !0),
            s(n(Q), { class: 'sidebar-container' }),
            y(
              'div',
              { class: k([{ hasTagsView: n(e) }, 'main-container']) },
              [
                y(
                  'div',
                  { class: k([{ 'fixed-header': n(t) }, 'layout-header']) },
                  [s(n(Y)), q(s(n(Z), null, null, 512), [[J, n(e)]])],
                  2
                ),
                s(n(ee), { class: 'app-main' })
              ],
              2
            )
          ],
          2
        )
      )
    }
  })
const Re = z(We, [['__scopeId', 'data-v-5caa4d7d']]),
  Ie = { class: 'fixed-header layout-header' },
  Be = { class: 'content' },
  De = V({
    __name: 'LeftTopMode',
    setup(o) {
      const l = A(),
        r = I(),
        { showTagsView: e, showLogo: t } = R(r),
        i = T(() => ({ hideSidebar: !l.sidebar.opened }))
      return (d, c) => (
        _(),
        C(
          'div',
          { class: k([i.value, 'app-wrapper']) },
          [
            y('div', Ie, [
              n(t) ? (_(), W(n(he), { key: 0, collapse: !1, class: 'logo' })) : H('', !0),
              y('div', Be, [s(n(Y)), q(s(n(Z), null, null, 512), [[J, n(e)]])])
            ]),
            y(
              'div',
              { class: k([{ hasTagsView: n(e) }, 'main-container']) },
              [s(n(Q), { class: 'sidebar-container' }), s(n(ee), { class: 'app-main' })],
              2
            )
          ],
          2
        )
      )
    }
  })
const He = z(De, [['__scopeId', 'data-v-caf37617']]),
  U = '--v3-tagsview-height',
  Ae = V({
    __name: 'index',
    setup(o) {
      ge()
      const { setWatermark: l, clearWatermark: r } = Me(),
        e = A(),
        t = I(),
        {
          showSettings: i,
          layoutMode: d,
          showTagsView: c,
          showWatermark: v,
          showGreyMode: h,
          showColorWeakness: M
        } = R(t),
        f = T(() => ({ showGreyMode: h.value, showColorWeakness: M.value })),
        w = ve(U)
      return (
        F(() => {
          c.value ? G(U, w) : G(U, '0px')
        }),
        F(() => {
          v.value ? l('yellow bee') : r()
        }),
        (x, B) => (
          _(),
          C(
            'div',
            { class: k(f.value) },
            [
              n(d) === 'left' || n(e).device === n(O).Mobile
                ? (_(), W(Re, { key: 0 }))
                : n(d) === 'top'
                  ? (_(), W(be, { key: 1 }))
                  : n(d) === 'left-top'
                    ? (_(), W(He, { key: 2 }))
                    : H('', !0),
              n(i) ? (_(), W(n($e), { key: 3 }, { default: m(() => [s(n(Ve))]), _: 1 })) : H('', !0)
            ],
            2
          )
        )
      )
    }
  })
const Je = z(Ae, [['__scopeId', 'data-v-f4969a02']])
export { Je as default }
