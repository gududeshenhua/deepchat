import {
  y as k,
  r as P,
  N as r,
  a as H,
  e as B,
  D as K,
  aq as j,
  aw as G,
  d as U,
  a8 as Y,
  f as C,
  h as Z,
  G as R,
  u as _,
  K as S,
  i as J,
  B as Q,
  H as T,
  L as D
} from './vue-66851fce.js'
/* empty css              */ import { u as L } from './use-placeholder-bee49790.js'
import {
  c as A,
  n as p,
  t as y,
  H as M,
  B as W,
  I as O,
  g as $,
  w,
  m as X,
  u as ee,
  a as te,
  b as ae,
  e as ne,
  d as oe,
  f as re,
  i as le
} from './index-ba0a22a8.js'
import { r as ie, u as ce } from './use-route-23d6e27a.js'
import { _ as se } from './index-ae33a03d.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
const [ue, f] = A('nav-bar'),
  de = {
    title: String,
    fixed: Boolean,
    zIndex: p,
    border: y,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: y
  }
var fe = k({
  name: ue,
  props: de,
  emits: ['clickLeft', 'clickRight'],
  setup(e, { emit: s, slots: n }) {
    const c = P(),
      u = L(c, f),
      i = (t) => {
        e.leftDisabled || s('clickLeft', t)
      },
      m = (t) => {
        e.rightDisabled || s('clickRight', t)
      },
      l = () =>
        n.left
          ? n.left()
          : [
              e.leftArrow && r(O, { class: f('arrow'), name: 'arrow-left' }, null),
              e.leftText && r('span', { class: f('text') }, [e.leftText])
            ],
      v = () => (n.right ? n.right() : r('span', { class: f('text') }, [e.rightText])),
      a = () => {
        const { title: t, fixed: o, border: d, zIndex: g } = e,
          h = $(g),
          b = e.leftArrow || e.leftText || n.left,
          x = e.rightText || n.right
        return r(
          'div',
          {
            ref: c,
            style: h,
            class: [f({ fixed: o }), { [W]: d, 'van-safe-area-top': e.safeAreaInsetTop }]
          },
          [
            r('div', { class: f('content') }, [
              b &&
                r(
                  'div',
                  {
                    class: [
                      f('left', { disabled: e.leftDisabled }),
                      e.clickable && !e.leftDisabled ? M : ''
                    ],
                    onClick: i
                  },
                  [l()]
                ),
              r('div', { class: [f('title'), 'van-ellipsis'] }, [n.title ? n.title() : t]),
              x &&
                r(
                  'div',
                  {
                    class: [
                      f('right', { disabled: e.rightDisabled }),
                      e.clickable && !e.rightDisabled ? M : ''
                    ],
                    onClick: m
                  },
                  [v()]
                )
            ])
          ]
        )
      }
    return () => (e.fixed && e.placeholder ? u(a) : a())
  }
})
const me = w(fe),
  [E, N] = A('tabbar'),
  be = {
    route: Boolean,
    fixed: y,
    border: y,
    zIndex: p,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: X(0),
    safeAreaInsetBottom: { type: Boolean, default: null }
  },
  z = Symbol(E)
var he = k({
  name: E,
  props: be,
  emits: ['change', 'update:modelValue'],
  setup(e, { emit: s, slots: n }) {
    const c = P(),
      { linkChildren: u } = ee(z),
      i = L(c, N),
      m = () => {
        var a
        return (a = e.safeAreaInsetBottom) != null ? a : e.fixed
      },
      l = () => {
        var a
        const { fixed: t, zIndex: o, border: d } = e
        return r(
          'div',
          {
            ref: c,
            role: 'tablist',
            style: $(o),
            class: [N({ fixed: t }), { [te]: d, 'van-safe-area-bottom': m() }]
          },
          [(a = n.default) == null ? void 0 : a.call(n)]
        )
      }
    return (
      u({
        props: e,
        setActive: (a, t) => {
          ae(e.beforeChange, {
            args: [a],
            done() {
              ;(s('update:modelValue', a), s('change', a), t())
            }
          })
        }
      }),
      () => (e.fixed && e.placeholder ? i(l) : l())
    )
  }
})
const ve = w(he),
  [ge, I] = A('tabbar-item'),
  xe = ne({}, ie, {
    dot: Boolean,
    icon: String,
    name: p,
    badge: p,
    badgeProps: Object,
    iconPrefix: String
  })
var _e = k({
  name: ge,
  props: xe,
  emits: ['click'],
  setup(e, { emit: s, slots: n }) {
    const c = ce(),
      u = H().proxy,
      { parent: i, index: m } = oe(z)
    if (!i) return
    const l = B(() => {
        var t
        const { route: o, modelValue: d } = i.props
        if (o && '$route' in u) {
          const { $route: g } = u,
            { to: h } = e,
            b = le(h) ? h : { path: h }
          return g.matched.some((x) => {
            const q = 'path' in b && b.path === x.path,
              F = 'name' in b && b.name === x.name
            return q || F
          })
        }
        return ((t = e.name) != null ? t : m.value) === d
      }),
      v = (t) => {
        var o
        ;(l.value || i.setActive((o = e.name) != null ? o : m.value, c), s('click', t))
      },
      a = () => {
        if (n.icon) return n.icon({ active: l.value })
        if (e.icon) return r(O, { name: e.icon, classPrefix: e.iconPrefix }, null)
      }
    return () => {
      var t
      const { dot: o, badge: d } = e,
        { activeColor: g, inactiveColor: h } = i.props,
        b = l.value ? g : h
      return r(
        'div',
        {
          role: 'tab',
          class: I({ active: l.value }),
          style: { color: b },
          tabindex: 0,
          'aria-selected': l.value,
          onClick: v
        },
        [
          r(re, K({ dot: o, class: I('icon'), content: d }, e.badgeProps), { default: a }),
          r('div', { class: I('text') }, [
            (t = n.default) == null ? void 0 : t.call(n, { active: l.value })
          ])
        ]
      )
    }
  }
})
const V = w(_e),
  Be = { class: 'mobile-layout' },
  pe = k({
    __name: 'MobileLayout',
    setup(e) {
      const s = j(),
        n = G(),
        c = P('instance'),
        u = B(() => n.path !== '/mobile/instance'),
        i = B(() => !(n.path.indexOf('/connect') >= 0)),
        m = B(() => {
          var o
          const a = ((o = n.name) == null ? void 0 : o.toString()) || ''
          return (
            {
              mobileInstance: '实例管理',
              mobileInstanceDetail: '实例详情',
              'mobile-proxy': '代理管理',
              'mobile-storage': '文件管理',
              'mobile-profile': '个人中心'
            }[a] || '云手机管理'
          )
        }),
        l = () => {
          n.path !== '/mobile/instance' && s.back()
        },
        v = (a) => {
          const t = {
            instance: '/mobile/instance',
            proxy: '/mobile/proxy',
            storage: '/mobile/storage',
            profile: '/mobile/profile'
          }
          t[a] && n.path !== t[a] && s.push(t[a])
        }
      return (
        U(
          () => n.path,
          (a) => {
            const t = {
              '/mobile/instance': 'instance',
              '/mobile/proxy': 'proxy',
              '/mobile/storage': 'storage',
              '/mobile/profile': 'profile'
            }
            ;(t[a] && (c.value = t[a]),
              requestAnimationFrame(() => {
                const o = document.querySelector('.mobile-content')
                o && (o.scrollTop = 0)
              }))
          },
          { immediate: !0 }
        ),
        (a, t) => {
          const o = Y('router-view')
          return (
            C(),
            Z('div', Be, [
              i.value
                ? (C(),
                  R(
                    _(me),
                    {
                      key: 0,
                      title: m.value,
                      'left-text': u.value ? '返回' : '',
                      'left-arrow': u.value,
                      onClickLeft: l,
                      fixed: '',
                      placeholder: '',
                      style: { height: '46px' }
                    },
                    null,
                    8,
                    ['title', 'left-text', 'left-arrow']
                  ))
                : S('', !0),
              J(
                'div',
                {
                  class: 'mobile-content',
                  style: Q({ height: i.value ? 'calc(100vh - 100px)' : '100vh' })
                },
                [r(o)],
                4
              ),
              i.value
                ? (C(),
                  R(
                    _(ve),
                    {
                      key: 1,
                      style: { height: '50px' },
                      modelValue: c.value,
                      'onUpdate:modelValue': t[0] || (t[0] = (d) => (c.value = d)),
                      onChange: v
                    },
                    {
                      default: T(() => [
                        r(
                          _(V),
                          { name: 'instance', icon: 'home-o' },
                          { default: T(() => [D('实例')]), _: 1 }
                        ),
                        r(
                          _(V),
                          { name: 'profile', icon: 'user-o' },
                          { default: T(() => [D('我的')]), _: 1 }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['modelValue']
                  ))
                : S('', !0)
            ])
          )
        }
      )
    }
  })
const Re = se(pe, [['__scopeId', 'data-v-88c8ead9']])
export { Re as default }
