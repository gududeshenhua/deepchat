import {
  p as C,
  a as Y,
  Q as j,
  e as P,
  r as E,
  R as b,
  $ as Z,
  q,
  d as W,
  b as z,
  u as v,
  x as J,
  n as Q,
  ak as nn,
  l as tn,
  y as H,
  N as B,
  D as en
} from './vue-66851fce.js'
function on() {}
const jn = Object.assign,
  sn = typeof window < 'u',
  T = (n) => n !== null && typeof n == 'object',
  g = (n) => n != null,
  O = (n) => typeof n == 'function',
  un = (n) => T(n) && O(n.then) && O(n.catch),
  U = (n) => typeof n == 'number' || /^\d+(\.\d+)?$/.test(n),
  rn = () => (sn ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1)
function F(n, t) {
  const e = t.split('.')
  let o = n
  return (
    e.forEach((s) => {
      var u
      o = T(o) && (u = o[s]) != null ? u : ''
    }),
    o
  )
}
function Wn(n, t, e) {
  return t.reduce((o, s) => ((!e || n[s] !== void 0) && (o[s] = n[s]), o), {})
}
const zn = (n) => (Array.isArray(n) ? n : [n]),
  Hn = null,
  m = [Number, String],
  an = { type: Boolean, default: !0 },
  Un = (n) => ({ type: Number, default: n }),
  Kn = (n) => ({ type: m, default: n }),
  D = (n) => ({ type: String, default: n })
var A = typeof window < 'u',
  cn = (n) => n === window,
  S = (n, t) => ({ top: 0, left: 0, right: n, bottom: t, width: n, height: t }),
  Vn = (n) => {
    const t = v(n)
    if (cn(t)) {
      const e = t.innerWidth,
        o = t.innerHeight
      return S(e, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : S(0, 0)
  }
function Gn(n) {
  const t = C(n, null)
  if (t) {
    const e = Y(),
      { link: o, unlink: s, internalChildren: u } = t
    ;(o(e), j(() => s(e)))
    const c = P(() => u.indexOf(e))
    return { parent: t, index: c }
  }
  return { parent: null, index: E(-1) }
}
function ln(n) {
  const t = [],
    e = (o) => {
      Array.isArray(o) &&
        o.forEach((s) => {
          var u
          tn(s) &&
            (t.push(s),
            (u = s.component) != null &&
              u.subTree &&
              (t.push(s.component.subTree), e(s.component.subTree.children)),
            s.children && e(s.children))
        })
    }
  return (e(n), t)
}
var R = (n, t) => {
  const e = n.indexOf(t)
  return e === -1
    ? n.findIndex((o) => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key)
    : e
}
function fn(n, t, e) {
  const o = ln(n.subTree.children)
  e.sort((u, c) => R(o, u.vnode) - R(o, c.vnode))
  const s = e.map((u) => u.proxy)
  t.sort((u, c) => {
    const r = s.indexOf(u),
      i = s.indexOf(c)
    return r - i
  })
}
function Xn(n) {
  const t = b([]),
    e = b([]),
    o = Y()
  return {
    children: t,
    linkChildren: (u) => {
      J(
        n,
        Object.assign(
          {
            link: (i) => {
              i.proxy && (e.push(i), t.push(i.proxy), fn(o, t, e))
            },
            unlink: (i) => {
              const a = e.indexOf(i)
              ;(t.splice(a, 1), e.splice(a, 1))
            },
            children: t,
            internalChildren: e
          },
          u
        )
      )
    }
  }
}
function dn(n) {
  let t
  ;(z(() => {
    ;(n(),
      Q(() => {
        t = !0
      }))
  }),
    nn(() => {
      t && n()
    }))
}
function Zn(n, t, e = {}) {
  if (!A) return
  const { target: o = window, passive: s = !1, capture: u = !1 } = e
  let c = !1,
    r
  const i = (l) => {
      if (c) return
      const f = v(l)
      f && !r && (f.addEventListener(n, t, { capture: u, passive: s }), (r = !0))
    },
    a = (l) => {
      if (c) return
      const f = v(l)
      f && r && (f.removeEventListener(n, t, u), (r = !1))
    }
  ;(j(() => a(o)), Z(() => a(o)), dn(() => i(o)))
  let p
  return (
    q(o) &&
      (p = W(o, (l, f) => {
        ;(a(f), i(l))
      })),
    () => {
      ;(p == null || p(), a(o), (c = !0))
    }
  )
}
var y, w
function pn() {
  if (!y && ((y = E(0)), (w = E(0)), A)) {
    const n = () => {
      ;((y.value = window.innerWidth), (w.value = window.innerHeight))
    }
    ;(n(),
      window.addEventListener('resize', n, { passive: !0 }),
      window.addEventListener('orientationchange', n, { passive: !0 }))
  }
  return { width: y, height: w }
}
var En = /scroll|auto|overlay/i,
  K = A ? window : void 0
function gn(n) {
  return n.tagName !== 'HTML' && n.tagName !== 'BODY' && n.nodeType === 1
}
function mn(n, t = K) {
  let e = n
  for (; e && e !== t && gn(e); ) {
    const { overflowY: o } = window.getComputedStyle(e)
    if (En.test(o)) return e
    e = e.parentNode
  }
  return t
}
function qn(n, t = K) {
  const e = E()
  return (
    z(() => {
      n.value && (e.value = mn(n.value, t))
    }),
    e
  )
}
var Jn = Symbol('van-field')
function Qn(n) {
  const t = 'scrollTop' in n ? n.scrollTop : n.pageYOffset
  return Math.max(t, 0)
}
function _(n, t) {
  'scrollTop' in n ? (n.scrollTop = t) : n.scrollTo(n.scrollX, t)
}
function hn() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
function yn(n) {
  ;(_(window, n), _(document.body, n))
}
const vn = rn()
function nt() {
  vn && yn(hn())
}
const Bn = (n) => n.stopPropagation()
function tt(n, t) {
  ;((typeof n.cancelable != 'boolean' || n.cancelable) && n.preventDefault(), t && Bn(n))
}
function et(n) {
  const t = v(n)
  if (!t) return !1
  const e = window.getComputedStyle(t),
    o = e.display === 'none',
    s = t.offsetParent === null && e.position !== 'fixed'
  return o || s
}
const { width: ot, height: st } = pn()
function d(n) {
  if (g(n)) return U(n) ? ''.concat(n, 'px') : String(n)
}
function ut(n) {
  if (g(n)) {
    if (Array.isArray(n)) return { width: d(n[0]), height: d(n[1]) }
    const t = d(n)
    return { width: t, height: t }
  }
}
function rt(n) {
  const t = {}
  return (n !== void 0 && (t.zIndex = +n), t)
}
const wn = /-(\w)/g,
  V = (n) => n.replace(wn, (t, e) => e.toUpperCase()),
  it = (n, t, e) => Math.min(Math.max(n, t), e)
function N(n, t, e) {
  const o = n.indexOf(t)
  return o === -1
    ? n
    : t === '-' && o !== 0
      ? n.slice(0, o)
      : n.slice(0, o + 1) + n.slice(o).replace(e, '')
}
function at(n, t = !0, e = !0) {
  ;(t ? (n = N(n, '.', /\./g)) : (n = n.split('.')[0]),
    e ? (n = N(n, '-', /-/g)) : (n = n.replace(/-/, '')))
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g
  return n.replace(o, '')
}
const { hasOwnProperty: bn } = Object.prototype
function On(n, t, e) {
  const o = t[e]
  g(o) && (!bn.call(n, e) || !T(o) ? (n[e] = o) : (n[e] = G(Object(n[e]), o)))
}
function G(n, t) {
  return (
    Object.keys(t).forEach((e) => {
      On(n, t, e)
    }),
    n
  )
}
var Dn = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  clear: '清空',
  cancel: '取消',
  confirm: '确认',
  delete: '删除',
  loading: '加载中...',
  noCoupon: '暂无优惠券',
  nameEmpty: '请填写姓名',
  addContact: '添加联系人',
  telInvalid: '请填写正确的电话',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: (n, t) => ''.concat(n, '年').concat(t, '月'),
    rangePrompt: (n) => '最多选择 '.concat(n, ' 天')
  },
  vanCascader: { select: '请选择' },
  vanPagination: { prev: '上一页', next: '下一页' },
  vanPullRefresh: { pulling: '下拉即可刷新...', loosing: '释放即可刷新...' },
  vanSubmitBar: { label: '合计:' },
  vanCoupon: {
    unlimited: '无门槛',
    discount: (n) => ''.concat(n, '折'),
    condition: (n) => '满'.concat(n, '元可用')
  },
  vanCouponCell: { title: '优惠券', count: (n) => ''.concat(n, '张可用') },
  vanCouponList: {
    exchange: '兑换',
    close: '不使用',
    enable: '可用',
    disabled: '不可用',
    placeholder: '输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    addressDetail: '详细地址',
    defaultAddress: '设为默认收货地址'
  },
  vanAddressList: { add: '新增地址' }
}
const I = E('zh-CN'),
  k = b({ 'zh-CN': Dn }),
  xn = {
    messages() {
      return k[I.value]
    },
    use(n, t) {
      ;((I.value = n), this.add({ [n]: t }))
    },
    add(n = {}) {
      G(k, n)
    }
  }
var Cn = xn
function Pn(n) {
  const t = V(n) + '.'
  return (e, ...o) => {
    const s = Cn.messages(),
      u = F(s, t + e) || F(s, e)
    return O(u) ? u(...o) : u
  }
}
function x(n, t) {
  return t
    ? typeof t == 'string'
      ? ' '.concat(n, '--').concat(t)
      : Array.isArray(t)
        ? t.reduce((e, o) => e + x(n, o), '')
        : Object.keys(t).reduce((e, o) => e + (t[o] ? x(n, o) : ''), '')
    : ''
}
function Tn(n) {
  return (t, e) => (
    t && typeof t != 'string' && ((e = t), (t = '')),
    (t = t ? ''.concat(n, '__').concat(t) : n),
    ''.concat(t).concat(x(t, e))
  )
}
function $(n) {
  const t = 'van-'.concat(n)
  return [t, Tn(t), Pn(t)]
}
const h = 'van-hairline',
  ct = ''.concat(h, '--top'),
  lt = ''.concat(h, '--left'),
  ft = ''.concat(h, '--bottom'),
  dt = ''.concat(h, '--surround'),
  pt = ''.concat(h, '--top-bottom'),
  Et = 'van-haptics-feedback',
  gt = Symbol('van-form'),
  mt = 5
function ht(n, { args: t = [], done: e, canceled: o, error: s }) {
  if (n) {
    const u = n.apply(null, t)
    un(u)
      ? u
          .then((c) => {
            c ? e() : o && o()
          })
          .catch(s || on)
      : u
        ? e()
        : o && o()
  } else e()
}
function X(n) {
  return (
    (n.install = (t) => {
      const { name: e } = n
      e && (t.component(e, n), t.component(V('-'.concat(e)), n))
    }),
    n
  )
}
const An = Symbol()
function yt(n) {
  const t = C(An, null)
  t &&
    W(t, (e) => {
      e && n()
    })
}
const [$n, L] = $('badge'),
  Fn = {
    dot: Boolean,
    max: m,
    tag: D('div'),
    color: String,
    offset: Array,
    content: m,
    showZero: an,
    position: D('top-right')
  }
var Sn = H({
  name: $n,
  props: Fn,
  setup(n, { slots: t }) {
    const e = () => {
        if (t.content) return !0
        const { content: r, showZero: i } = n
        return g(r) && r !== '' && (i || (r !== 0 && r !== '0'))
      },
      o = () => {
        const { dot: r, max: i, content: a } = n
        if (!r && e())
          return t.content ? t.content() : g(i) && U(a) && +a > +i ? ''.concat(i, '+') : a
      },
      s = (r) => (r.startsWith('-') ? r.replace('-', '') : '-'.concat(r)),
      u = P(() => {
        const r = { background: n.color }
        if (n.offset) {
          const [i, a] = n.offset,
            { position: p } = n,
            [l, f] = p.split('-')
          t.default
            ? (typeof a == 'number'
                ? (r[l] = d(l === 'top' ? a : -a))
                : (r[l] = l === 'top' ? d(a) : s(a)),
              typeof i == 'number'
                ? (r[f] = d(f === 'left' ? i : -i))
                : (r[f] = f === 'left' ? d(i) : s(i)))
            : ((r.marginTop = d(a)), (r.marginLeft = d(i)))
        }
        return r
      }),
      c = () => {
        if (e() || n.dot)
          return B(
            'div',
            { class: L([n.position, { dot: n.dot, fixed: !!t.default }]), style: u.value },
            [o()]
          )
      }
    return () => {
      if (t.default) {
        const { tag: r } = n
        return B(r, { class: L('wrapper') }, { default: () => [t.default(), c()] })
      }
      return c()
    }
  }
})
const Rn = X(Sn),
  [_n, vt] = $('config-provider'),
  Nn = Symbol(_n),
  [In, M] = $('icon'),
  kn = (n) => (n == null ? void 0 : n.includes('/')),
  Ln = {
    dot: Boolean,
    tag: D('i'),
    name: String,
    size: m,
    badge: m,
    color: String,
    badgeProps: Object,
    classPrefix: String
  }
var Mn = H({
  name: In,
  props: Ln,
  setup(n, { slots: t }) {
    const e = C(Nn, null),
      o = P(() => n.classPrefix || (e == null ? void 0 : e.iconPrefix) || M())
    return () => {
      const { tag: s, dot: u, name: c, size: r, badge: i, color: a } = n,
        p = kn(c)
      return B(
        Rn,
        en(
          {
            dot: u,
            tag: s,
            class: [o.value, p ? '' : ''.concat(o.value, '-').concat(c)],
            style: { color: a, fontSize: d(r) },
            content: i
          },
          n.badgeProps
        ),
        {
          default: () => {
            var l
            return [
              (l = t.default) == null ? void 0 : l.call(t),
              p && B('img', { class: M('image'), src: c }, null)
            ]
          }
        }
      )
    }
  }
})
const Bt = X(Mn)
export {
  Hn as A,
  ft as B,
  d as C,
  Jn as D,
  g as E,
  gt as F,
  zn as G,
  Et as H,
  Bt as I,
  at as J,
  it as K,
  nt as L,
  on as M,
  lt as N,
  ct as O,
  sn as P,
  yt as Q,
  ot as R,
  st as S,
  dt as T,
  mt as U,
  dn as V,
  mn as W,
  An as X,
  Un as Y,
  pt as a,
  ht as b,
  $ as c,
  Gn as d,
  jn as e,
  Rn as f,
  rt as g,
  ut as h,
  T as i,
  D as j,
  qn as k,
  Zn as l,
  Kn as m,
  m as n,
  Vn as o,
  tt as p,
  et as q,
  Qn as r,
  Wn as s,
  an as t,
  Xn as u,
  hn as v,
  X as w,
  yn as x,
  un as y,
  O as z
}
