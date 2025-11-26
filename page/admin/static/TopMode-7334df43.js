import {
  y as D,
  a8 as k,
  f as u,
  h as A,
  i as x,
  N as _,
  H as m,
  T as ke,
  G as y,
  J as ae,
  u as g,
  av as Le,
  z as fe,
  e as R,
  F as Q,
  a2 as Ee,
  K as E,
  M as W,
  a0 as ne,
  A as oe,
  at as Y,
  au as Pe,
  aw as me,
  r as F,
  w as De,
  L as ee,
  a as Se,
  v as ze,
  b as pe,
  m as Be,
  B as Ce,
  ar as qe,
  as as Ne,
  aq as ve,
  s as Ue,
  a1 as se,
  R as We,
  X as le,
  p as Oe,
  n as He,
  d as Ke,
  I as xe,
  O as $e,
  ax as je
} from './vue-66851fce.js'
import {
  b as Ve,
  a as Z,
  _ as B,
  g as ue,
  c as ge,
  d as Je,
  e as Qe,
  f as Xe,
  h as Ge,
  i as Ye,
  j as Ze,
  u as Me
} from './index-ae33a03d.js'
import { u as ce, D as ie } from './app-79cffc0b.js'
import {
  q as et,
  t as tt,
  g as nt,
  u as ot,
  E as te,
  v as st,
  e as lt,
  w as Te,
  x as de,
  y as _e,
  z as at,
  A as rt,
  B as ct,
  j as it
} from './element-74718691.js'
import { i as re } from './validate-5515d956.js'
import { L as ut } from './index-e2f885a3.js'
import { g as dt } from './index-1bdb6a9d.js'
const _t = { class: 'app-main' },
  ft = { class: 'app-scrollbar' },
  mt = D({
    __name: 'AppMain',
    setup(i) {
      const e = Ve()
      return (
        Z(),
        (t, l) => {
          const n = k('router-view'),
            a = k('el-backtop')
          return (
            u(),
            A('section', _t, [
              x('div', ft, [
                _(n, null, {
                  default: m(({ Component: o, route: s }) => [
                    _(
                      ke,
                      { name: 'el-fade-in', mode: 'out-in' },
                      {
                        default: m(() => [
                          (u(),
                          y(
                            Le,
                            { include: g(e).cachedViews },
                            [(u(), y(ae(o), { key: s.path, class: 'app-container-grow' }))],
                            1032,
                            ['include']
                          ))
                        ]),
                        _: 2
                      },
                      1024
                    )
                  ]),
                  _: 1
                })
              ]),
              _(a),
              _(a, { style: { bottom: '30vh' }, target: '.app-scrollbar' })
            ])
          )
        }
      )
    }
  })
const pt = B(mt, [['__scopeId', 'data-v-a6c42ade']]),
  vt = D({
    __name: 'index',
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ['toggleClick'],
    setup(i, { emit: e }) {
      const t = i,
        l = e,
        n = () => {
          l('toggleClick')
        }
      return (a, o) => {
        const s = k('el-icon')
        return (
          u(),
          A('div', { onClick: n }, [
            _(
              s,
              { size: 20, class: 'icon' },
              {
                default: m(() => [
                  t.isActive ? (u(), y(g(et), { key: 0 })) : (u(), y(g(tt), { key: 1 }))
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }
  })
const Ie = B(vt, [['__scopeId', 'data-v-133039c0']]),
  gt = ['href'],
  ht = D({
    __name: 'SidebarItemLink',
    props: { to: {} },
    setup(i) {
      const e = i
      return (t, l) => {
        const n = k('router-link')
        return g(re)(e.to)
          ? (u(),
            A(
              'a',
              { key: 0, href: e.to, target: '_blank', rel: 'noopener' },
              [fe(t.$slots, 'default')],
              8,
              gt
            ))
          : (u(),
            y(n, { key: 1, to: e.to }, { default: m(() => [fe(t.$slots, 'default')]), _: 3 }, 8, [
              'to'
            ]))
      }
    }
  })
function j(i) {
  if (typeof i != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(i))
}
function ye(i, e) {
  for (var t = '', l = 0, n = -1, a = 0, o, s = 0; s <= i.length; ++s) {
    if (s < i.length) o = i.charCodeAt(s)
    else {
      if (o === 47) break
      o = 47
    }
    if (o === 47) {
      if (!(n === s - 1 || a === 1))
        if (n !== s - 1 && a === 2) {
          if (
            t.length < 2 ||
            l !== 2 ||
            t.charCodeAt(t.length - 1) !== 46 ||
            t.charCodeAt(t.length - 2) !== 46
          ) {
            if (t.length > 2) {
              var f = t.lastIndexOf('/')
              if (f !== t.length - 1) {
                ;(f === -1
                  ? ((t = ''), (l = 0))
                  : ((t = t.slice(0, f)), (l = t.length - 1 - t.lastIndexOf('/'))),
                  (n = s),
                  (a = 0))
                continue
              }
            } else if (t.length === 2 || t.length === 1) {
              ;((t = ''), (l = 0), (n = s), (a = 0))
              continue
            }
          }
          e && (t.length > 0 ? (t += '/..') : (t = '..'), (l = 2))
        } else
          (t.length > 0 ? (t += '/' + i.slice(n + 1, s)) : (t = i.slice(n + 1, s)), (l = s - n - 1))
      ;((n = s), (a = 0))
    } else o === 46 && a !== -1 ? ++a : (a = -1)
  }
  return t
}
function yt(i, e) {
  var t = e.dir || e.root,
    l = e.base || (e.name || '') + (e.ext || '')
  return t ? (t === e.root ? t + l : t + i + l) : l
}
var G = {
  resolve: function () {
    for (var e = '', t = !1, l, n = arguments.length - 1; n >= -1 && !t; n--) {
      var a
      ;(n >= 0 ? (a = arguments[n]) : (l === void 0 && (l = process.cwd()), (a = l)),
        j(a),
        a.length !== 0 && ((e = a + '/' + e), (t = a.charCodeAt(0) === 47)))
    }
    return ((e = ye(e, !t)), t ? (e.length > 0 ? '/' + e : '/') : e.length > 0 ? e : '.')
  },
  normalize: function (e) {
    if ((j(e), e.length === 0)) return '.'
    var t = e.charCodeAt(0) === 47,
      l = e.charCodeAt(e.length - 1) === 47
    return (
      (e = ye(e, !t)),
      e.length === 0 && !t && (e = '.'),
      e.length > 0 && l && (e += '/'),
      t ? '/' + e : e
    )
  },
  isAbsolute: function (e) {
    return (j(e), e.length > 0 && e.charCodeAt(0) === 47)
  },
  join: function () {
    if (arguments.length === 0) return '.'
    for (var e, t = 0; t < arguments.length; ++t) {
      var l = arguments[t]
      ;(j(l), l.length > 0 && (e === void 0 ? (e = l) : (e += '/' + l)))
    }
    return e === void 0 ? '.' : G.normalize(e)
  },
  relative: function (e, t) {
    if ((j(e), j(t), e === t || ((e = G.resolve(e)), (t = G.resolve(t)), e === t))) return ''
    for (var l = 1; l < e.length && e.charCodeAt(l) === 47; ++l);
    for (var n = e.length, a = n - l, o = 1; o < t.length && t.charCodeAt(o) === 47; ++o);
    for (var s = t.length, f = s - o, b = a < f ? a : f, d = -1, c = 0; c <= b; ++c) {
      if (c === b) {
        if (f > b) {
          if (t.charCodeAt(o + c) === 47) return t.slice(o + c + 1)
          if (c === 0) return t.slice(o + c)
        } else a > b && (e.charCodeAt(l + c) === 47 ? (d = c) : c === 0 && (d = 0))
        break
      }
      var C = e.charCodeAt(l + c),
        w = t.charCodeAt(o + c)
      if (C !== w) break
      C === 47 && (d = c)
    }
    var p = ''
    for (c = l + d + 1; c <= n; ++c)
      (c === n || e.charCodeAt(c) === 47) && (p.length === 0 ? (p += '..') : (p += '/..'))
    return p.length > 0 ? p + t.slice(o + d) : ((o += d), t.charCodeAt(o) === 47 && ++o, t.slice(o))
  },
  _makeLong: function (e) {
    return e
  },
  dirname: function (e) {
    if ((j(e), e.length === 0)) return '.'
    for (var t = e.charCodeAt(0), l = t === 47, n = -1, a = !0, o = e.length - 1; o >= 1; --o)
      if (((t = e.charCodeAt(o)), t === 47)) {
        if (!a) {
          n = o
          break
        }
      } else a = !1
    return n === -1 ? (l ? '/' : '.') : l && n === 1 ? '//' : e.slice(0, n)
  },
  basename: function (e, t) {
    if (t !== void 0 && typeof t != 'string') throw new TypeError('"ext" argument must be a string')
    j(e)
    var l = 0,
      n = -1,
      a = !0,
      o
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return ''
      var s = t.length - 1,
        f = -1
      for (o = e.length - 1; o >= 0; --o) {
        var b = e.charCodeAt(o)
        if (b === 47) {
          if (!a) {
            l = o + 1
            break
          }
        } else
          (f === -1 && ((a = !1), (f = o + 1)),
            s >= 0 && (b === t.charCodeAt(s) ? --s === -1 && (n = o) : ((s = -1), (n = f))))
      }
      return (l === n ? (n = f) : n === -1 && (n = e.length), e.slice(l, n))
    } else {
      for (o = e.length - 1; o >= 0; --o)
        if (e.charCodeAt(o) === 47) {
          if (!a) {
            l = o + 1
            break
          }
        } else n === -1 && ((a = !1), (n = o + 1))
      return n === -1 ? '' : e.slice(l, n)
    }
  },
  extname: function (e) {
    j(e)
    for (var t = -1, l = 0, n = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
      var f = e.charCodeAt(s)
      if (f === 47) {
        if (!a) {
          l = s + 1
          break
        }
        continue
      }
      ;(n === -1 && ((a = !1), (n = s + 1)),
        f === 46 ? (t === -1 ? (t = s) : o !== 1 && (o = 1)) : t !== -1 && (o = -1))
    }
    return t === -1 || n === -1 || o === 0 || (o === 1 && t === n - 1 && t === l + 1)
      ? ''
      : e.slice(t, n)
  },
  format: function (e) {
    if (e === null || typeof e != 'object')
      throw new TypeError(
        'The "pathObject" argument must be of type Object. Received type ' + typeof e
      )
    return yt('/', e)
  },
  parse: function (e) {
    j(e)
    var t = { root: '', dir: '', base: '', ext: '', name: '' }
    if (e.length === 0) return t
    var l = e.charCodeAt(0),
      n = l === 47,
      a
    n ? ((t.root = '/'), (a = 1)) : (a = 0)
    for (var o = -1, s = 0, f = -1, b = !0, d = e.length - 1, c = 0; d >= a; --d) {
      if (((l = e.charCodeAt(d)), l === 47)) {
        if (!b) {
          s = d + 1
          break
        }
        continue
      }
      ;(f === -1 && ((b = !1), (f = d + 1)),
        l === 46 ? (o === -1 ? (o = d) : c !== 1 && (c = 1)) : o !== -1 && (c = -1))
    }
    return (
      o === -1 || f === -1 || c === 0 || (c === 1 && o === f - 1 && o === s + 1)
        ? f !== -1 &&
          (s === 0 && n ? (t.base = t.name = e.slice(1, f)) : (t.base = t.name = e.slice(s, f)))
        : (s === 0 && n
            ? ((t.name = e.slice(1, o)), (t.base = e.slice(1, f)))
            : ((t.name = e.slice(s, o)), (t.base = e.slice(s, f))),
          (t.ext = e.slice(o, f))),
      s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = '/'),
      t
    )
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
}
G.posix = G
var bt = G
const Re = nt(bt),
  wt = ['title'],
  kt = ['title'],
  St = D({
    __name: 'SidebarItem',
    props: {
      item: {},
      isCollapse: { type: Boolean, default: !1 },
      isTop: { type: Boolean, default: !1 },
      isFirstLevel: { type: Boolean, default: !0 },
      basePath: { default: '' }
    },
    setup(i) {
      const e = i,
        t = R(() => {
          var s
          return (s = e.item.meta) == null ? void 0 : s.alwaysShow
        }),
        l = R(() => {
          var s, f
          return (f =
            (s = e.item.children) == null
              ? void 0
              : s.filter((b) => {
                  var d
                  return !((d = b.meta) != null && d.hidden)
                })) != null
            ? f
            : []
        }),
        n = R(() => l.value.length),
        a = R(() => {
          const s = n.value
          switch (!0) {
            case s > 1:
              return null
            case s === 1:
              return l.value[0]
            default:
              return { ...e.item, path: '' }
          }
        }),
        o = (s) => {
          switch (!0) {
            case re(s):
              return s
            case re(e.basePath):
              return e.basePath
            default:
              return Re.resolve(e.basePath, s)
          }
        }
      return (s, f) => {
        var w
        const b = k('SvgIcon'),
          d = k('el-menu-item'),
          c = k('sidebar-item', !0),
          C = k('el-sub-menu')
        return (w = e.item.meta) != null && w.hidden
          ? E('', !0)
          : (u(),
            A(
              'div',
              {
                key: 0,
                class: oe({
                  'simple-mode': e.isCollapse && !s.isTop,
                  'first-level': e.isFirstLevel
                })
              },
              [
                !t.value && a.value && !a.value.children
                  ? (u(),
                    A(
                      Q,
                      { key: 0 },
                      [
                        a.value.meta
                          ? (u(),
                            y(
                              ht,
                              { key: 0, to: o(a.value.path) },
                              {
                                default: m(() => [
                                  _(
                                    d,
                                    { index: o(a.value.path) },
                                    Ee(
                                      {
                                        default: m(() => [
                                          a.value.meta.svgIcon
                                            ? (u(),
                                              y(
                                                b,
                                                { key: 0, name: a.value.meta.svgIcon },
                                                null,
                                                8,
                                                ['name']
                                              ))
                                            : a.value.meta.elIcon
                                              ? (u(),
                                                y(ae(a.value.meta.elIcon), {
                                                  key: 1,
                                                  class: 'el-icon'
                                                }))
                                              : E('', !0)
                                        ]),
                                        _: 2
                                      },
                                      [
                                        a.value.meta.title
                                          ? {
                                              name: 'title',
                                              fn: m(() => [
                                                x(
                                                  'span',
                                                  { title: s.$t(a.value.meta.title) },
                                                  W(s.$t(a.value.meta.title)),
                                                  9,
                                                  wt
                                                )
                                              ]),
                                              key: '0'
                                            }
                                          : void 0
                                      ]
                                    ),
                                    1032,
                                    ['index']
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['to']
                            ))
                          : E('', !0)
                      ],
                      64
                    ))
                  : (u(),
                    y(
                      C,
                      { key: 1, index: o(e.item.path), teleported: '' },
                      {
                        title: m(() => {
                          var p, h, M
                          return [
                            (p = e.item.meta) != null && p.svgIcon
                              ? (u(),
                                y(b, { key: 0, name: e.item.meta.svgIcon }, null, 8, ['name']))
                              : (h = e.item.meta) != null && h.elIcon
                                ? (u(), y(ae(e.item.meta.elIcon), { key: 1, class: 'el-icon' }))
                                : E('', !0),
                            (M = e.item.meta) != null && M.title
                              ? (u(),
                                A(
                                  'span',
                                  { key: 2, title: s.$t(e.item.meta.title) },
                                  W(s.$t(e.item.meta.title)),
                                  9,
                                  kt
                                ))
                              : E('', !0)
                          ]
                        }),
                        default: m(() => [
                          e.item.children
                            ? (u(!0),
                              A(
                                Q,
                                { key: 0 },
                                ne(
                                  e.item.children,
                                  (p) => (
                                    u(),
                                    y(
                                      c,
                                      {
                                        key: p.path,
                                        item: p,
                                        'is-collapse': e.isCollapse,
                                        'is-first-level': !1,
                                        'base-path': o(p.path)
                                      },
                                      null,
                                      8,
                                      ['item', 'is-collapse', 'base-path']
                                    )
                                  )
                                ),
                                128
                              ))
                            : E('', !0)
                        ]),
                        _: 1
                      },
                      8,
                      ['index']
                    ))
              ],
              2
            ))
      }
    }
  })
const Ct = B(St, [['__scopeId', 'data-v-a88b5f36']]),
  xt = '/admin/static/hellocloudlogo-3-1ead8640.png',
  $t = '/admin/static/hellocloudlogo-1-81c0db6b.png',
  Vt = '/admin/static/hellocloudlogo-2-8457dace.png',
  Mt = ['src'],
  Tt = ['src'],
  It = D({
    __name: 'index',
    props: { collapse: { type: Boolean, default: !0 } },
    setup(i) {
      const e = i,
        t = Z(),
        { layoutMode: l } = Y(t)
      return (n, a) => {
        const o = k('router-link')
        return (
          u(),
          A(
            'div',
            {
              class: oe([
                'layout-logo-container',
                { collapse: e.collapse, 'layout-mode-top': g(l) === 'top' }
              ])
            },
            [
              _(
                ke,
                { name: 'layout-logo-fade' },
                {
                  default: m(() => [
                    e.collapse
                      ? (u(),
                        y(
                          o,
                          { key: 'collapse', to: '/' },
                          {
                            default: m(() => [
                              x(
                                'img',
                                { 'w-80': '', 'h-auto': '', src: g(xt), class: 'layout-logo' },
                                null,
                                8,
                                Mt
                              )
                            ]),
                            _: 1
                          }
                        ))
                      : (u(),
                        y(
                          o,
                          { key: 'expand', to: '/' },
                          {
                            default: m(() => [
                              x(
                                'img',
                                {
                                  'w-80': '',
                                  'h-auto': '',
                                  src: g(l) !== 'left' ? g(Vt) : g($t),
                                  class: 'layout-logo-text'
                                },
                                null,
                                8,
                                Tt
                              )
                            ]),
                            _: 1
                          }
                        ))
                  ]),
                  _: 1
                }
              )
            ],
            2
          )
        )
      }
    }
  })
const Ae = B(It, [['__scopeId', 'data-v-6a52bd74']]),
  Rt = { class: 'scrollbar-body' },
  At = { class: 'footer', 'uno-flex-center': '', 'cursor-pointer': '' },
  Ft = D({
    __name: 'index',
    setup(i) {
      Pe((q) => ({
        '0c6ff376': O.value,
        '077dd640': H.value,
        '2b245e96': I.value,
        '64305abe': z.value
      }))
      const e = ue('--v3-sidebar-menu-bg-color'),
        t = ue('--v3-sidebar-menu-text-color'),
        l = ue('--v3-sidebar-menu-active-text-color'),
        n = me(),
        a = ce(),
        o = ge(),
        s = Z(),
        { sidebar: f, device: b } = Y(a),
        { layoutMode: d, showLogo: c } = Y(s),
        C = R(() => {
          const {
            meta: { activeMenu: q },
            path: V
          } = n
          return q || V
        }),
        w = () => {
          a.toggleSidebar(!1)
        },
        p = R(() => !f.value.opened),
        h = R(() => d.value === 'left'),
        M = R(() => d.value === 'top'),
        T = R(() => b.value === ie.Mobile),
        $ = R(() => h.value && c.value)
      ;(R(() => (h.value ? e : void 0)),
        R(() => (h.value ? t : void 0)),
        R(() => (h.value ? l : void 0)))
      const I = R(() =>
          d.value !== 'top'
            ? 'var(--v3-sidebar-menu-item-height)'
            : 'var(--v3-navigationbar-height)'
        ),
        z = R(() => (d.value !== 'top' ? '#0079f20d' : 'transparent')),
        O = R(() => (d.value !== 'top' ? '2px' : '0px')),
        H = R(() => (d.value === 'top' ? 'none' : 'block'))
      return (q, V) => {
        const r = k('el-menu'),
          v = k('el-scrollbar')
        return (
          u(),
          A(
            'div',
            { class: oe({ 'has-logo': $.value }) },
            [
              $.value
                ? (u(), y(Ae, { key: 0, collapse: p.value }, null, 8, ['collapse']))
                : E('', !0),
              x('div', Rt, [
                _(
                  v,
                  { 'wrap-class': 'scrollbar-wrapper' },
                  {
                    default: m(() => [
                      _(
                        r,
                        {
                          'default-active': C.value,
                          collapse: p.value && !M.value,
                          'unique-opened': !0,
                          'collapse-transition': !1,
                          mode: M.value && !T.value ? 'horizontal' : 'vertical'
                        },
                        {
                          default: m(() => [
                            (u(!0),
                            A(
                              Q,
                              null,
                              ne(
                                g(o).routes,
                                (L) => (
                                  u(),
                                  y(
                                    Ct,
                                    {
                                      key: L.path,
                                      item: L,
                                      'base-path': L.path,
                                      'is-collapse': p.value,
                                      'is-top': M.value
                                    },
                                    null,
                                    8,
                                    ['item', 'base-path', 'is-collapse', 'is-top']
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 1
                        },
                        8,
                        ['default-active', 'collapse', 'mode']
                      )
                    ]),
                    _: 1
                  }
                ),
                x('div', At, [
                  !M.value || T.value
                    ? (u(),
                      y(
                        Ie,
                        { key: 0, 'is-active': g(f).opened, class: 'hamburger', onToggleClick: w },
                        null,
                        8,
                        ['is-active']
                      ))
                    : E('', !0)
                ])
              ])
            ],
            2
          )
        )
      }
    }
  })
const Lt = B(Ft, [['__scopeId', 'data-v-37ca0f4e']]),
  Et = D({
    __name: 'index',
    setup(i) {
      const { themeList: e, activeThemeName: t, setTheme: l } = Je()
      return (n, a) => {
        const o = k('el-icon'),
          s = k('el-tooltip'),
          f = k('el-dropdown-item'),
          b = k('el-dropdown-menu'),
          d = k('el-dropdown')
        return (
          u(),
          y(
            d,
            { trigger: 'click', onCommand: g(l) },
            {
              dropdown: m(() => [
                _(b, null, {
                  default: m(() => [
                    (u(!0),
                    A(
                      Q,
                      null,
                      ne(
                        g(e),
                        (c, C) => (
                          u(),
                          y(
                            f,
                            { key: C, disabled: g(t) === c.name, command: c.name },
                            { default: m(() => [x('span', null, W(c.title), 1)]), _: 2 },
                            1032,
                            ['disabled', 'command']
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                })
              ]),
              default: m(() => [
                x('div', null, [
                  _(
                    s,
                    { effect: 'dark', content: '主题模式', placement: 'bottom' },
                    {
                      default: m(() => [
                        _(o, { size: 20 }, { default: m(() => [_(g(ot))]), _: 1 })
                      ]),
                      _: 1
                    }
                  )
                ])
              ]),
              _: 1
            },
            8,
            ['onCommand']
          )
        )
      }
    }
  }),
  be = [
    [
      'requestFullscreen',
      'exitFullscreen',
      'fullscreenElement',
      'fullscreenEnabled',
      'fullscreenchange',
      'fullscreenerror'
    ],
    [
      'webkitRequestFullscreen',
      'webkitExitFullscreen',
      'webkitFullscreenElement',
      'webkitFullscreenEnabled',
      'webkitfullscreenchange',
      'webkitfullscreenerror'
    ],
    [
      'webkitRequestFullScreen',
      'webkitCancelFullScreen',
      'webkitCurrentFullScreenElement',
      'webkitCancelFullScreen',
      'webkitfullscreenchange',
      'webkitfullscreenerror'
    ],
    [
      'mozRequestFullScreen',
      'mozCancelFullScreen',
      'mozFullScreenElement',
      'mozFullScreenEnabled',
      'mozfullscreenchange',
      'mozfullscreenerror'
    ],
    [
      'msRequestFullscreen',
      'msExitFullscreen',
      'msFullscreenElement',
      'msFullscreenEnabled',
      'MSFullscreenChange',
      'MSFullscreenError'
    ]
  ],
  J = (() => {
    if (typeof document > 'u') return !1
    const i = be[0],
      e = {}
    for (const t of be)
      if ((t == null ? void 0 : t[1]) in document) {
        for (const [n, a] of t.entries()) e[i[n]] = a
        return e
      }
    return !1
  })(),
  we = { change: J.fullscreenchange, error: J.fullscreenerror }
let U = {
  request(i = document.documentElement, e) {
    return new Promise((t, l) => {
      const n = () => {
        ;(U.off('change', n), t())
      }
      U.on('change', n)
      const a = i[J.requestFullscreen](e)
      a instanceof Promise && a.then(n).catch(l)
    })
  },
  exit() {
    return new Promise((i, e) => {
      if (!U.isFullscreen) {
        i()
        return
      }
      const t = () => {
        ;(U.off('change', t), i())
      }
      U.on('change', t)
      const l = document[J.exitFullscreen]()
      l instanceof Promise && l.then(t).catch(e)
    })
  },
  toggle(i, e) {
    return U.isFullscreen ? U.exit() : U.request(i, e)
  },
  onchange(i) {
    U.on('change', i)
  },
  onerror(i) {
    U.on('error', i)
  },
  on(i, e) {
    const t = we[i]
    t && document.addEventListener(t, e, !1)
  },
  off(i, e) {
    const t = we[i]
    t && document.removeEventListener(t, e, !1)
  },
  raw: J
}
Object.defineProperties(U, {
  isFullscreen: { get: () => !!document[J.fullscreenElement] },
  element: {
    enumerable: !0,
    get: () => {
      var i
      return (i = document[J.fullscreenElement]) != null ? i : void 0
    }
  },
  isEnabled: { enumerable: !0, get: () => !!document[J.fullscreenEnabled] }
})
J || (U = { isEnabled: !1 })
const X = U,
  Pt = D({
    __name: 'index',
    props: {
      element: { default: 'html' },
      openTips: { default: '全屏' },
      exitTips: { default: '退出全屏' },
      content: { type: Boolean, default: !1 }
    },
    setup(i) {
      const e = i,
        t = F(!1),
        l = R(() => (t.value ? e.exitTips : e.openTips)),
        n = R(() => (t.value ? 'fullscreen-exit' : 'fullscreen')),
        a = () => {
          const c = document.querySelector(e.element) || void 0
          X.isEnabled ? X.toggle(c) : te.warning('您的浏览器无法工作')
        },
        o = () => {
          t.value = X.isFullscreen
        }
      De((c) => {
        ;(X.on('change', o),
          c(() => {
            X.isEnabled && X.off('change', o)
          }))
      })
      const s = F(!1),
        f = R(() => (s.value ? '内容区复原' : '内容区放大')),
        b = R(() => (s.value ? 'fullscreen-exit' : 'fullscreen')),
        d = () => {
          ;((document.body.className = s.value ? '' : 'content-large'), (s.value = !s.value))
        }
      return (c, C) => {
        const w = k('SvgIcon'),
          p = k('el-tooltip'),
          h = k('el-dropdown-item'),
          M = k('el-dropdown-menu'),
          T = k('el-dropdown')
        return (
          u(),
          A('div', null, [
            c.content
              ? (u(),
                y(
                  T,
                  { key: 1 },
                  {
                    dropdown: m(() => [
                      _(M, null, {
                        default: m(() => [
                          _(h, { onClick: d }, { default: m(() => [ee(W(f.value), 1)]), _: 1 }),
                          _(
                            h,
                            { onClick: a, disabled: t.value },
                            { default: m(() => [ee('内容区全屏')]), _: 1 },
                            8,
                            ['disabled']
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    default: m(() => [_(w, { name: b.value }, null, 8, ['name'])]),
                    _: 1
                  }
                ))
              : (u(),
                y(
                  p,
                  { key: 0, effect: 'dark', content: l.value, placement: 'bottom' },
                  {
                    default: m(() => [_(w, { name: n.value, onClick: a }, null, 8, ['name'])]),
                    _: 1
                  },
                  8,
                  ['content']
                ))
          ])
        )
      }
    }
  })
const Fe = B(Pt, [['__scopeId', 'data-v-03a66814']]),
  Dt = ['onMouseenter'],
  zt = { class: 'result-item-title' },
  Bt = D({
    __name: 'SearchResult',
    props: { modelValue: {}, list: {}, isPressUpOrDown: { type: Boolean } },
    emits: ['update:modelValue'],
    setup(i, { expose: e, emit: t }) {
      const l = i,
        n = t,
        a = Se(),
        o = F(0),
        s = R({
          get() {
            return l.modelValue
          },
          set(C) {
            n('update:modelValue', C)
          }
        }),
        f = (C) => {
          const w = C.name === s.value
          return { background: w ? 'var(--el-color-primary)' : '', color: w ? '#fff' : '' }
        },
        b = (C) => {
          l.isPressUpOrDown || (s.value = C.name)
        },
        d = () => {
          o.value = Number((window.innerHeight * 0.4).toFixed(1))
        },
        c = (C) => {
          var M
          const w =
            (M = a == null ? void 0 : a.proxy) == null ? void 0 : M.$refs['resultItemRef'.concat(C)]
          if (!w) return 0
          const h = w[0].offsetTop + 128
          return h > o.value ? h - o.value : 0
        }
      return (
        ze(() => {
          window.addEventListener('resize', d)
        }),
        pe(() => {
          d()
        }),
        Be(() => {
          window.removeEventListener('resize', d)
        }),
        e({ getScrollTop: c }),
        (C, w) => {
          const p = k('SvgIcon')
          return (
            u(),
            A('div', null, [
              (u(!0),
              A(
                Q,
                null,
                ne(C.list, (h, M) => {
                  var T, $, I
                  return (
                    u(),
                    A(
                      'div',
                      {
                        key: M,
                        ref_for: !0,
                        ref: 'resultItemRef'.concat(M),
                        class: 'result-item',
                        style: Ce(f(h)),
                        onMouseenter: (z) => b(h)
                      },
                      [
                        (T = h.meta) != null && T.svgIcon
                          ? (u(), y(p, { key: 0, name: h.meta.svgIcon }, null, 8, ['name']))
                          : ($ = h.meta) != null && $.elIcon
                            ? (u(), y(ae(h.meta.elIcon), { key: 1, class: 'el-icon' }))
                            : E('', !0),
                        x('span', zt, W((I = h.meta) == null ? void 0 : I.title), 1),
                        s.value && s.value === h.name
                          ? (u(), y(p, { key: 2, name: 'keyboard-enter' }))
                          : E('', !0)
                      ],
                      44,
                      Dt
                    )
                  )
                }),
                128
              ))
            ])
          )
        }
      )
    }
  })
const qt = B(Bt, [['__scopeId', 'data-v-12ffafc6']]),
  he = (i) => (qe('data-v-5a5bf381'), (i = i()), Ne(), i),
  Nt = { class: 'search-footer' },
  Ut = { class: 'search-footer-item' },
  Wt = he(() => x('span', null, '确认', -1)),
  Ot = { class: 'search-footer-item' },
  Ht = he(() => x('span', null, '切换', -1)),
  Kt = { class: 'search-footer-item' },
  jt = he(() => x('span', null, '关闭', -1)),
  Jt = { class: 'search-footer-total' },
  Qt = D({
    __name: 'SearchFooter',
    props: { total: {} },
    setup(i) {
      const e = i,
        t = ce(),
        l = R(() => t.device === ie.Mobile)
      return (n, a) => {
        const o = k('SvgIcon')
        return (
          u(),
          A('div', Nt, [
            l.value
              ? E('', !0)
              : (u(),
                A(
                  Q,
                  { key: 0 },
                  [
                    x('span', Ut, [_(o, { name: 'keyboard-enter' }), Wt]),
                    x('span', Ot, [
                      _(o, { name: 'keyboard-up' }),
                      _(o, { name: 'keyboard-down' }),
                      Ht
                    ]),
                    x('span', Kt, [_(o, { name: 'keyboard-esc' }), jt])
                  ],
                  64
                )),
            x('span', Jt, '共 ' + W(e.total) + ' 项', 1)
          ])
        )
      }
    }
  })
const Xt = B(Qt, [['__scopeId', 'data-v-5a5bf381']]),
  Gt = x('p', null, '搜索结果', -1),
  Yt = D({
    __name: 'SearchModal',
    props: { modelValue: { type: Boolean } },
    emits: ['update:modelValue'],
    setup(i, { emit: e }) {
      const t = i,
        l = e,
        n = ce(),
        a = ve(),
        o = F(null),
        s = F(null),
        f = F(null),
        b = F(''),
        d = Ue([]),
        c = F(void 0),
        C = F(!1),
        w = R(() => (n.device === ie.Mobile ? '80vw' : '40vw')),
        p = R({
          get() {
            return t.modelValue
          },
          set(V) {
            l('update:modelValue', V)
          }
        }),
        h = R(() => st(ge().routes)),
        M = lt(() => {
          var v
          const V = T(h.value)
          d.value = V.filter((L) => {
            var S, P
            return b.value
              ? (P = (S = L.meta) == null ? void 0 : S.title) == null
                ? void 0
                : P.toLocaleLowerCase().includes(b.value.toLocaleLowerCase().trim())
              : !1
          })
          const r = (v = d.value) == null ? void 0 : v.length
          c.value = r > 0 ? d.value[0].name : void 0
        }, 500),
        T = (V, r = []) => (
          V.forEach((v) => {
            ;(r.push(v), v.children && T(v.children, r))
          }),
          r
        ),
        $ = () => {
          ;((p.value = !1),
            setTimeout(() => {
              ;((b.value = ''), (d.value = []))
            }, 200))
        },
        I = (V) => {
          var v
          if (!f.value) return
          const r = f.value.getScrollTop(V)
          ;(v = s.value) == null || v.setScrollTop(r)
        },
        z = () => {
          C.value = !0
          const { length: V } = d.value
          if (V === 0) return
          const r = d.value.findIndex((v) => v.name === c.value)
          if (r === 0) {
            const v = d.value[V - 1].name
            c.value === v && V > 1
              ? ((c.value = d.value[V - 2].name), I(V - 2))
              : ((c.value = v), I(V - 1))
          } else ((c.value = d.value[r - 1].name), I(r - 1))
        },
        O = () => {
          C.value = !0
          const { length: V } = d.value
          if (V === 0) return
          const r = d.value.map((v) => v.name).lastIndexOf(c.value)
          if (r === V - 1) {
            const v = d.value[0].name
            c.value === v && V > 1 ? ((c.value = d.value[1].name), I(1)) : ((c.value = v), I(0))
          } else ((c.value = d.value[r + 1].name), I(r + 1))
        },
        H = () => {
          var L
          const { length: V } = d.value
          if (V === 0) return
          const r = c.value,
            v = (L = d.value.find((S) => S.name === r)) == null ? void 0 : L.path
          if (v && re(v)) {
            window.open(v, '_blank', 'noopener, noreferrer')
            return
          }
          if (!r) {
            te.warning('无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name')
            return
          }
          try {
            a.push({ name: r })
          } catch (S) {
            te.error('该菜单有必填的动态参数，无法通过搜索进入')
            return
          }
          $()
        },
        q = () => {
          C.value = !1
        }
      return (V, r) => {
        const v = k('SvgIcon'),
          L = k('el-input'),
          S = k('el-empty'),
          P = k('el-dialog')
        return (
          u(),
          y(
            P,
            {
              modelValue: p.value,
              'onUpdate:modelValue': r[2] || (r[2] = (N) => (p.value = N)),
              onOpened:
                r[3] ||
                (r[3] = (N) => {
                  var K
                  return (K = o.value) == null ? void 0 : K.focus()
                }),
              onClosed:
                r[4] ||
                (r[4] = (N) => {
                  var K
                  return (K = o.value) == null ? void 0 : K.blur()
                }),
              onKeydown: [se(z, ['up']), se(O, ['down']), se(H, ['enter'])],
              onKeyup: se(q, ['up', 'down']),
              'before-close': $,
              width: w.value,
              top: '5vh',
              class: 'search-modal__private',
              'append-to-body': ''
            },
            {
              footer: m(() => [_(Xt, { total: d.value.length }, null, 8, ['total'])]),
              default: m(() => [
                _(
                  L,
                  {
                    ref_key: 'inputRef',
                    ref: o,
                    modelValue: b.value,
                    'onUpdate:modelValue': r[0] || (r[0] = (N) => (b.value = N)),
                    onInput: g(M),
                    placeholder: '搜索菜单',
                    size: 'large',
                    clearable: ''
                  },
                  { prefix: m(() => [_(v, { name: 'search' })]), _: 1 },
                  8,
                  ['modelValue', 'onInput']
                ),
                d.value.length === 0
                  ? (u(), y(S, { key: 0, description: '暂无搜索结果', 'image-size': 100 }))
                  : (u(),
                    A(
                      Q,
                      { key: 1 },
                      [
                        Gt,
                        _(
                          g(Te),
                          { ref_key: 'scrollbarRef', ref: s, 'max-height': '40vh', always: '' },
                          {
                            default: m(() => [
                              _(
                                qt,
                                {
                                  ref_key: 'searchResultRef',
                                  ref: f,
                                  modelValue: c.value,
                                  'onUpdate:modelValue': r[1] || (r[1] = (N) => (c.value = N)),
                                  list: d.value,
                                  isPressUpOrDown: C.value,
                                  onClick: H
                                },
                                null,
                                8,
                                ['modelValue', 'list', 'isPressUpOrDown']
                              )
                            ]),
                            _: 1
                          },
                          512
                        )
                      ],
                      64
                    ))
              ]),
              _: 1
            },
            8,
            ['modelValue', 'onKeydown', 'onKeyup', 'width']
          )
        )
      }
    }
  })
const Zt = D({
  __name: 'index',
  setup(i) {
    const e = F(!1),
      t = () => {
        e.value = !0
      }
    return (l, n) => {
      const a = k('SvgIcon'),
        o = k('el-tooltip')
      return (
        u(),
        A('div', null, [
          _(
            o,
            { effect: 'dark', content: '搜索菜单', placement: 'bottom' },
            { default: m(() => [_(a, { name: 'search', onClick: t })]), _: 1 }
          ),
          _(
            Yt,
            { modelValue: e.value, 'onUpdate:modelValue': n[0] || (n[0] = (s) => (e.value = s)) },
            null,
            8,
            ['modelValue']
          )
        ])
      )
    }
  }
})
const en = B(Zt, [['__scopeId', 'data-v-52b80258']]),
  tn = D({
    __name: 'SecurityCodeModal',
    props: { visible: { type: Boolean, default: !1 } },
    emits: ['success', 'update:visible'],
    setup(i, { emit: e }) {
      const t = i,
        l = e,
        n = We({ old_sec_code: '', new_sec_code: '', confirm_sec_code: '' }),
        a = F(),
        o = F(!1),
        s = F('password'),
        f = F('password'),
        b = F('password'),
        d = () => {
          s.value = s.value === 'password' ? 'text' : 'password'
        },
        c = () => {
          f.value = f.value === 'password' ? 'text' : 'password'
        },
        C = () => {
          b.value = b.value === 'password' ? 'text' : 'password'
        },
        w = {
          new_sec_code: [
            { required: !0, message: '请输入新安全码', trigger: 'blur' },
            { min: 6, message: '安全码长度不能少于6位', trigger: 'blur' }
          ],
          confirm_sec_code: [
            { required: !0, message: '请确认新安全码', trigger: 'blur' },
            {
              validator: (T, $, I) => {
                $ !== n.new_sec_code ? I(new Error('两次输入的安全码不一致')) : I()
              },
              trigger: 'blur'
            }
          ]
        },
        p = async () => {
          a.value &&
            (await a.value.validate(async (T) => {
              if (T) {
                o.value = !0
                try {
                  ;(await Qe({ old_sec_code: n.old_sec_code, new_sec_code: n.new_sec_code }),
                    te.success('安全码修改成功'),
                    l('success'),
                    a.value.resetFields(),
                    l('update:visible', !1))
                } catch ($) {
                  te.error(($ == null ? void 0 : $.message) || '修改失败')
                } finally {
                  o.value = !1
                }
              }
            }))
        },
        h = () => {
          a.value && a.value.resetFields()
        },
        M = () => {
          l('update:visible', !1)
        }
      return (T, $) => {
        const I = k('el-icon'),
          z = k('el-input'),
          O = k('el-form-item'),
          H = k('el-form'),
          q = k('el-button'),
          V = k('el-dialog')
        return (
          u(),
          y(
            V,
            {
              'model-value': t.visible,
              title: '修改安全码',
              width: '500px',
              'close-on-click-modal': !1,
              'append-to-body': '',
              onClose: M
            },
            {
              footer: m(() => [
                _(q, { onClick: h }, { default: m(() => [ee('重置')]), _: 1 }),
                _(
                  q,
                  { type: 'primary', loading: o.value, onClick: p },
                  { default: m(() => [ee(' 确认修改 ')]), _: 1 },
                  8,
                  ['loading']
                )
              ]),
              default: m(() => [
                _(
                  H,
                  {
                    ref_key: 'formRef',
                    ref: a,
                    model: n,
                    rules: w,
                    'label-width': '100px',
                    onSubmit: $[3] || ($[3] = le(() => {}, ['prevent']))
                  },
                  {
                    default: m(() => [
                      _(
                        O,
                        { label: '原安全码', prop: 'old_sec_code' },
                        {
                          default: m(() => [
                            _(
                              z,
                              {
                                modelValue: n.old_sec_code,
                                'onUpdate:modelValue': $[0] || ($[0] = (r) => (n.old_sec_code = r)),
                                type: s.value,
                                placeholder: '请输入原安全码'
                              },
                              {
                                suffix: m(() => [
                                  _(
                                    I,
                                    { style: { cursor: 'pointer' }, onClick: d },
                                    {
                                      default: m(() => [
                                        s.value === 'password'
                                          ? (u(), y(g(de), { key: 0 }))
                                          : (u(), y(g(_e), { key: 1 }))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'type']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      _(
                        O,
                        { label: '新安全码', prop: 'new_sec_code' },
                        {
                          default: m(() => [
                            _(
                              z,
                              {
                                modelValue: n.new_sec_code,
                                'onUpdate:modelValue': $[1] || ($[1] = (r) => (n.new_sec_code = r)),
                                type: f.value,
                                placeholder: '请输入新安全码'
                              },
                              {
                                suffix: m(() => [
                                  _(
                                    I,
                                    { style: { cursor: 'pointer' }, onClick: c },
                                    {
                                      default: m(() => [
                                        f.value === 'password'
                                          ? (u(), y(g(de), { key: 0 }))
                                          : (u(), y(g(_e), { key: 1 }))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'type']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      _(
                        O,
                        { label: '确认安全码', prop: 'confirm_sec_code' },
                        {
                          default: m(() => [
                            _(
                              z,
                              {
                                modelValue: n.confirm_sec_code,
                                'onUpdate:modelValue':
                                  $[2] || ($[2] = (r) => (n.confirm_sec_code = r)),
                                type: b.value,
                                placeholder: '请再次输入新安全码'
                              },
                              {
                                suffix: m(() => [
                                  _(
                                    I,
                                    { style: { cursor: 'pointer' }, onClick: C },
                                    {
                                      default: m(() => [
                                        b.value === 'password'
                                          ? (u(), y(g(de), { key: 0 }))
                                          : (u(), y(g(_e), { key: 1 }))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue', 'type']
                            )
                          ]),
                          _: 1
                        }
                      )
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
            ['model-value']
          )
        )
      }
    }
  })
const nn = B(tn, [['__scopeId', 'data-v-9dc2d9a8']]),
  on = { class: 'navigation-bar' },
  sn = { key: 0 },
  ln = { style: { display: 'flex', 'align-items': 'center' } },
  an = { class: 'right-menu' },
  rn = {
    class: 'quota-display',
    style: { display: 'flex', 'align-items': 'center', 'margin-right': '6px', color: 'white' }
  },
  cn = { style: { 'font-size': '14px' } },
  un = { class: 'right-menu-avatar' },
  dn = { style: { display: 'block' } },
  _n = { style: { display: 'block' } },
  fn = D({
    __name: 'index',
    setup(i) {
      const e = ve(),
        t = ce(),
        l = Z(),
        n = Xe(),
        { sidebar: a, device: o } = Y(t),
        {
          layoutMode: s,
          showNotify: f,
          showThemeSwitch: b,
          showScreenfull: d,
          showSearchMenu: c,
          showLanguageSwitch: C
        } = Y(l),
        w = R(() => s.value === 'top'),
        p = R(() => o.value === ie.Mobile),
        h = Oe('$bus'),
        { t: M } = Ge(),
        T = F(!1),
        $ = F({ created_instances_count: 0, max_instances_limit: 0 }),
        I = async () => {
          try {
            const r = await dt()
            r && ($.value = r)
          } catch (r) {
            console.error('获取配额数据失败:', r)
          }
        }
      h.on('updateQuota', I)
      const z = () => {
          t.toggleSidebar(!1)
        },
        O = async () => {
          ;(await n.logout(), e.push('/login'))
        },
        H = () => {
          T.value = !0
        },
        q = () => {
          T.value = !1
        },
        V = () => {
          ;(Ze('mobile'), (window.location.href = '/'))
        }
      return (
        pe(() => {
          I()
        }),
        (r, v) => {
          const L = k('el-avatar'),
            S = k('el-dropdown-item'),
            P = k('el-dropdown-menu'),
            N = k('el-dropdown')
          return (
            u(),
            A(
              Q,
              null,
              [
                x('div', on, [
                  !w.value && !p.value ? (u(), A('div', sn)) : E('', !0),
                  p.value
                    ? (u(),
                      y(
                        Ie,
                        { key: 1, 'is-active': g(a).opened, class: 'hamburger', onToggleClick: z },
                        null,
                        8,
                        ['is-active']
                      ))
                    : E('', !0),
                  x('div', ln, [
                    g(Ye)() ? (u(), A('span', { key: 0, onClick: V }, '切换移动版')) : E('', !0)
                  ]),
                  w.value && !p.value ? (u(), y(Lt, { key: 2, class: 'sidebar' })) : E('', !0),
                  x('div', an, [
                    g(c) ? (u(), y(en, { key: 0, class: 'right-menu-item' })) : E('', !0),
                    g(d) ? (u(), y(Fe, { key: 1, class: 'right-menu-item' })) : E('', !0),
                    g(b) ? (u(), y(Et, { key: 2, class: 'right-menu-item' })) : E('', !0),
                    g(C) ? (u(), y(ut, { key: 3, class: 'right-menu-item' })) : E('', !0),
                    x('span', rn, [
                      x(
                        'span',
                        cn,
                        W(r.$t('common.quotaDisplay')) + '：' + W($.value.remaining_launches || 0),
                        1
                      )
                    ]),
                    _(
                      N,
                      { class: 'right-menu-item' },
                      {
                        dropdown: m(() => [
                          _(P, null, {
                            default: m(() => [
                              _(
                                S,
                                { onClick: H },
                                {
                                  default: m(() => [
                                    x('span', dn, W(g(M)('userManagement.setSecurityCode')), 1)
                                  ]),
                                  _: 1
                                }
                              ),
                              _(
                                S,
                                { onClick: O, divided: '' },
                                {
                                  default: m(() => [
                                    x('span', _n, W(g(M)('userManagement.logout')), 1)
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          })
                        ]),
                        default: m(() => [
                          x('div', un, [
                            _(L, { icon: g(at), size: 30 }, null, 8, ['icon']),
                            x('span', null, W(g(n).username), 1)
                          ])
                        ]),
                        _: 1
                      }
                    )
                  ])
                ]),
                _(
                  nn,
                  {
                    visible: T.value,
                    'onUpdate:visible': v[0] || (v[0] = (K) => (T.value = K)),
                    onSuccess: q
                  },
                  null,
                  8,
                  ['visible']
                )
              ],
              64
            )
          )
        }
      )
    }
  })
const mn = B(fn, [['__scopeId', 'data-v-153854b2']])
const pn = { class: 'scroll-container' },
  vn = 200,
  gn = D({
    __name: 'ScrollPane',
    props: { tagRefs: {} },
    setup(i) {
      const e = i,
        t = me(),
        l = Z(),
        { listenerRouteChange: n } = Me(),
        a = F(),
        o = F()
      let s = 0
      const f = ({ scrollLeft: w }) => {
          s = w
        },
        b = ({ deltaY: w }) => {
          ;/^-/.test(w.toString()) ? c('left') : c('right')
        },
        d = () => {
          const w = o.value.clientWidth,
            p = a.value.wrapRef.clientWidth,
            h = w - p - s
          return { scrollbarContentRefWidth: w, scrollbarRefWidth: p, lastDistance: h }
        },
        c = (w, p = vn) => {
          let h = 0
          const { scrollbarContentRefWidth: M, scrollbarRefWidth: T, lastDistance: $ } = d()
          T > M ||
            (w === 'left' ? (h = Math.max(0, s - p)) : (h = Math.min(s + p, s + $)),
            a.value.setScrollLeft(h))
        },
        C = () => {
          const w = e.tagRefs
          for (let p = 0; p < w.length; p++)
            if (t.path === w[p].$props.to.path) {
              const h = w[p].$el,
                M = h.offsetWidth,
                T = h.offsetLeft,
                { scrollbarRefWidth: $ } = d()
              if (T < s) {
                const z = s - T
                c('left', z)
                return
              }
              const I = $ + s - M
              if (T > I) {
                const z = T - I
                c('right', z)
                return
              }
            }
        }
      return (
        n(() => {
          He(C)
        }),
        (w, p) => {
          const h = k('el-icon')
          return (
            u(),
            A('div', pn, [
              _(
                h,
                { class: 'arrow left', onClick: p[0] || (p[0] = (M) => c('left')) },
                { default: m(() => [_(g(rt))]), _: 1 }
              ),
              _(
                g(Te),
                { ref_key: 'scrollbarRef', ref: a, onWheelPassive: b, onScroll: f },
                {
                  default: m(() => [
                    x(
                      'div',
                      { ref_key: 'scrollbarContentRef', ref: o, class: 'scrollbar-content' },
                      [fe(w.$slots, 'default', {}, void 0, !0)],
                      512
                    )
                  ]),
                  _: 3
                },
                512
              ),
              _(
                h,
                { class: 'arrow right', onClick: p[1] || (p[1] = (M) => c('right')) },
                { default: m(() => [_(g(ct))]), _: 1 }
              ),
              g(l).showScreenfull
                ? (u(), y(Fe, { key: 0, element: '.app-main', content: !0, class: 'screenfull' }))
                : E('', !0)
            ])
          )
        }
      )
    }
  })
const hn = B(gn, [['__scopeId', 'data-v-0629210e']]),
  yn = { class: 'tags-view-container' },
  bn = D({
    __name: 'index',
    setup(i) {
      const e = Se(),
        t = ve(),
        l = me(),
        n = Ve(),
        a = ge(),
        { listenerRouteChange: o } = Me(),
        s = F([]),
        f = F(!1),
        b = F(0),
        d = F(0),
        c = F({})
      let C = []
      const w = (r) => r.path === l.path,
        p = (r) => {
          var v
          return (v = r.meta) == null ? void 0 : v.affix
        },
        h = (r, v = '/') => {
          const L = []
          return (
            r.forEach((S) => {
              if (p(S)) {
                const P = Re.resolve(v, S.path)
                L.push({ fullPath: P, path: P, name: S.name, meta: { ...S.meta } })
              }
              if (S.children) {
                const P = h(S.children, S.path)
                L.push(...P)
              }
            }),
            L
          )
        },
        M = () => {
          C = h(a.routes)
          for (const r of C) r.name && n.addVisitedView(r)
        },
        T = (r) => {
          r.name && (n.addVisitedView(r), n.addCachedView(r))
        },
        $ = (r) => {
          ;(n.delCachedView(r), t.replace({ path: '/redirect' + r.path, query: r.query }))
        },
        I = (r) => {
          ;(n.delVisitedView(r), n.delCachedView(r), w(r) && H(n.visitedViews, r))
        },
        z = () => {
          const r = c.value.fullPath
          ;(r !== l.path && r !== void 0 && t.push(r),
            n.delOthersVisitedViews(c.value),
            n.delOthersCachedViews(c.value))
        },
        O = (r) => {
          ;(n.delAllVisitedViews(),
            n.delAllCachedViews(),
            !C.some((v) => v.path === l.path) && H(n.visitedViews, r))
        },
        H = (r, v) => {
          const L = r.slice(-1)[0],
            S = L == null ? void 0 : L.fullPath
          S !== void 0
            ? t.push(S)
            : v.name === 'Dashboard'
              ? t.push({ path: '/redirect' + v.path, query: v.query })
              : t.push('/')
        },
        q = (r, v) => {
          const S = e.proxy.$el.getBoundingClientRect().left,
            N = e.proxy.$el.offsetWidth - 105,
            K = v.clientX - S + 15
          ;((d.value = K > N ? N : K), (b.value = v.clientY), (f.value = !0), (c.value = r))
        },
        V = () => {
          f.value = !1
        }
      return (
        Ke(f, (r) => {
          r
            ? document.body.addEventListener('click', V)
            : document.body.removeEventListener('click', V)
        }),
        pe(() => {
          ;(M(),
            o(async (r) => {
              T(r)
            }, !0))
        }),
        (r, v) => {
          const L = k('el-icon')
          return (
            u(),
            A('div', yn, [
              _(
                hn,
                { class: 'tags-view-wrapper', 'tag-refs': s.value },
                {
                  default: m(() => [
                    (u(!0),
                    A(
                      Q,
                      null,
                      ne(
                        g(n).visitedViews,
                        (S) => (
                          u(),
                          y(
                            g(je),
                            {
                              ref_for: !0,
                              ref_key: 'tagRefs',
                              ref: s,
                              key: S.path,
                              class: oe([{ active: w(S) }, 'tags-view-item']),
                              to: { path: S.path, query: S.query },
                              onMouseup: le((P) => !p(S) && I(S), ['middle']),
                              onContextmenu: le((P) => q(S, P), ['prevent'])
                            },
                            {
                              default: m(() => {
                                var P
                                return [
                                  ee(W(r.$t((P = S.meta) == null ? void 0 : P.title)) + ' ', 1),
                                  p(S)
                                    ? E('', !0)
                                    : (u(),
                                      y(
                                        L,
                                        {
                                          key: 0,
                                          size: 12,
                                          onClick: le((N) => I(S), ['prevent', 'stop'])
                                        },
                                        { default: m(() => [_(g(it))]), _: 2 },
                                        1032,
                                        ['onClick']
                                      ))
                                ]
                              }),
                              _: 2
                            },
                            1032,
                            ['class', 'to', 'onMouseup', 'onContextmenu']
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                },
                8,
                ['tag-refs']
              ),
              xe(
                x(
                  'ul',
                  {
                    class: 'contextmenu',
                    style: Ce({ left: d.value + 'px', top: b.value + 'px' })
                  },
                  [
                    x('li', { onClick: v[0] || (v[0] = (S) => $(c.value)) }, '刷新'),
                    p(c.value)
                      ? E('', !0)
                      : (u(),
                        A('li', { key: 0, onClick: v[1] || (v[1] = (S) => I(c.value)) }, '关闭')),
                    x('li', { onClick: z }, '关闭其它'),
                    x('li', { onClick: v[2] || (v[2] = (S) => O(c.value)) }, '关闭所有')
                  ],
                  4
                ),
                [[$e, f.value]]
              )
            ])
          )
        }
      )
    }
  })
const wn = B(bn, [['__scopeId', 'data-v-8da4aee4']])
const kn = { class: 'app-wrapper' },
  Sn = { class: 'fixed-header layout-header' },
  Cn = { class: 'content' },
  xn = D({
    __name: 'TopMode',
    setup(i) {
      const e = Z(),
        { showTagsView: t, showLogo: l } = Y(e)
      return (n, a) => (
        u(),
        A('div', kn, [
          x('div', Sn, [
            x('div', Cn, [
              g(l) ? (u(), y(g(Ae), { key: 0, collapse: !1, class: 'logo' })) : E('', !0),
              _(g(mn), { class: 'navigation-bar' })
            ]),
            xe(_(g(wn), null, null, 512), [[$e, g(t)]])
          ]),
          x(
            'div',
            { class: oe([{ hasTagsView: g(t) }, 'main-container']) },
            [_(g(pt), { class: 'app-main' })],
            2
          )
        ])
      )
    }
  })
const $n = B(xn, [['__scopeId', 'data-v-17d72370']]),
  Ln = Object.freeze(
    Object.defineProperty({ __proto__: null, default: $n }, Symbol.toStringTag, { value: 'Module' })
  )
export { pt as A, Ae as L, mn as N, Lt as S, wn as T, $n as a, Ln as b }
