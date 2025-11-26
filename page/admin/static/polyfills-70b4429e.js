export function __vite_legacy_guard() {
  import.meta.url
  import('_').catch(() => 1)
  ;(async function* () {})().next()
}
var t =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
            ? self
            : {},
  e = function (t) {
    return t && t.Math === Math && t
  },
  n =
    e('object' == typeof globalThis && globalThis) ||
    e('object' == typeof window && window) ||
    e('object' == typeof self && self) ||
    e('object' == typeof t && t) ||
    e('object' == typeof t && t) ||
    (function () {
      return this
    })() ||
    Function('return this')(),
  r = {},
  o = function (t) {
    try {
      return !!t()
    } catch (e) {
      return !0
    }
  },
  i = !o(function () {
    return (
      7 !==
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1]
    )
  }),
  u = !o(function () {
    var t = function () {}.bind()
    return 'function' != typeof t || t.hasOwnProperty('prototype')
  }),
  c = u,
  a = Function.prototype.call,
  f = c
    ? a.bind(a)
    : function () {
        return a.apply(a, arguments)
      },
  l = {},
  s = {}.propertyIsEnumerable,
  p = Object.getOwnPropertyDescriptor,
  y = p && !s.call({ 1: 2 }, 1)
l.f = y
  ? function (t) {
      var e = p(this, t)
      return !!e && e.enumerable
    }
  : s
var b,
  v,
  g = function (t, e) {
    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
  },
  h = u,
  d = Function.prototype,
  m = d.call,
  w = h && d.bind.bind(m, m),
  O = h
    ? w
    : function (t) {
        return function () {
          return m.apply(t, arguments)
        }
      },
  S = O,
  j = S({}.toString),
  P = S(''.slice),
  E = o,
  T = function (t) {
    return P(j(t), 8, -1)
  },
  M = Object,
  C = O(''.split),
  F = E(function () {
    return !M('z').propertyIsEnumerable(0)
  })
    ? function (t) {
        return 'String' === T(t) ? C(t, '') : M(t)
      }
    : M,
  I = function (t) {
    return null == t
  },
  x = I,
  k = TypeError,
  L = function (t) {
    if (x(t)) throw new k("Can't call method on " + t)
    return t
  },
  z = F,
  D = L,
  N = function (t) {
    return z(D(t))
  },
  _ = 'object' == typeof document && document.all,
  A =
    void 0 === _ && void 0 !== _
      ? function (t) {
          return 'function' == typeof t || t === _
        }
      : function (t) {
          return 'function' == typeof t
        },
  R = A,
  G = function (t) {
    return 'object' == typeof t ? null !== t : R(t)
  },
  W = n,
  B = A,
  U = function (t, e) {
    return arguments.length < 2 ? ((n = W[t]), B(n) ? n : void 0) : W[t] && W[t][e]
    var n
  },
  $ = O({}.isPrototypeOf),
  q = n,
  K = ('undefined' != typeof navigator && String(navigator.userAgent)) || '',
  V = q.process,
  X = q.Deno,
  Y = (V && V.versions) || (X && X.version),
  H = Y && Y.v8
;(H && (v = (b = H.split('.'))[0] > 0 && b[0] < 4 ? 1 : +(b[0] + b[1])),
  !v &&
    K &&
    (!(b = K.match(/Edge\/(\d+)/)) || b[1] >= 74) &&
    (b = K.match(/Chrome\/(\d+)/)) &&
    (v = +b[1]))
var J = v,
  Q = o,
  Z = n.String,
  tt =
    !!Object.getOwnPropertySymbols &&
    !Q(function () {
      var t = Symbol('symbol detection')
      return !Z(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && J && J < 41)
    }),
  et = tt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  nt = U,
  rt = A,
  ot = $,
  it = Object,
  ut = et
    ? function (t) {
        return 'symbol' == typeof t
      }
    : function (t) {
        var e = nt('Symbol')
        return rt(e) && ot(e.prototype, it(t))
      },
  ct = String,
  at = A,
  ft = function (t) {
    try {
      return ct(t)
    } catch (e) {
      return 'Object'
    }
  },
  lt = TypeError,
  st = function (t) {
    if (at(t)) return t
    throw new lt(ft(t) + ' is not a function')
  },
  pt = I,
  yt = f,
  bt = A,
  vt = G,
  gt = TypeError,
  ht = { exports: {} },
  dt = n,
  mt = Object.defineProperty,
  wt = function (t, e) {
    try {
      mt(dt, t, { value: e, configurable: !0, writable: !0 })
    } catch (n) {
      dt[t] = e
    }
    return e
  },
  Ot = wt,
  St = '__core-js_shared__',
  jt = n[St] || Ot(St, {}),
  Pt = jt
;(ht.exports = function (t, e) {
  return Pt[t] || (Pt[t] = void 0 !== e ? e : {})
})('versions', []).push({
  version: '3.35.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
})
var Et = ht.exports,
  Tt = L,
  Mt = Object,
  Ct = function (t) {
    return Mt(Tt(t))
  },
  Ft = O({}.hasOwnProperty),
  It =
    Object.hasOwn ||
    function (t, e) {
      return Ft(Ct(t), e)
    },
  xt = O,
  kt = 0,
  Lt = Math.random(),
  zt = xt((1).toString),
  Dt = function (t) {
    return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + zt(++kt + Lt, 36)
  },
  Nt = Et,
  _t = It,
  At = Dt,
  Rt = tt,
  Gt = et,
  Wt = n.Symbol,
  Bt = Nt('wks'),
  Ut = Gt ? Wt.for || Wt : (Wt && Wt.withoutSetter) || At,
  $t = f,
  qt = G,
  Kt = ut,
  Vt = function (t, e) {
    var n = t[e]
    return pt(n) ? void 0 : st(n)
  },
  Xt = function (t, e) {
    var n, r
    if ('string' === e && bt((n = t.toString)) && !vt((r = yt(n, t)))) return r
    if (bt((n = t.valueOf)) && !vt((r = yt(n, t)))) return r
    if ('string' !== e && bt((n = t.toString)) && !vt((r = yt(n, t)))) return r
    throw new gt("Can't convert object to primitive value")
  },
  Yt = TypeError,
  Ht = (function (t) {
    return (_t(Bt, t) || (Bt[t] = Rt && _t(Wt, t) ? Wt[t] : Ut('Symbol.' + t)), Bt[t])
  })('toPrimitive'),
  Jt = function (t, e) {
    if (!qt(t) || Kt(t)) return t
    var n,
      r = Vt(t, Ht)
    if (r) {
      if ((void 0 === e && (e = 'default'), (n = $t(r, t, e)), !qt(n) || Kt(n))) return n
      throw new Yt("Can't convert object to primitive value")
    }
    return (void 0 === e && (e = 'number'), Xt(t, e))
  },
  Qt = ut,
  Zt = function (t) {
    var e = Jt(t, 'string')
    return Qt(e) ? e : e + ''
  },
  te = G,
  ee = n.document,
  ne = te(ee) && te(ee.createElement),
  re = function (t) {
    return ne ? ee.createElement(t) : {}
  },
  oe =
    !i &&
    !o(function () {
      return (
        7 !==
        Object.defineProperty(re('div'), 'a', {
          get: function () {
            return 7
          }
        }).a
      )
    }),
  ie = i,
  ue = f,
  ce = l,
  ae = g,
  fe = N,
  le = Zt,
  se = It,
  pe = oe,
  ye = Object.getOwnPropertyDescriptor
r.f = ie
  ? ye
  : function (t, e) {
      if (((t = fe(t)), (e = le(e)), pe))
        try {
          return ye(t, e)
        } catch (n) {}
      if (se(t, e)) return ae(!ue(ce.f, t, e), t[e])
    }
var be = {},
  ve =
    i &&
    o(function () {
      return (
        42 !==
        Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype
      )
    }),
  ge = G,
  he = String,
  de = TypeError,
  me = function (t) {
    if (ge(t)) return t
    throw new de(he(t) + ' is not an object')
  },
  we = i,
  Oe = oe,
  Se = ve,
  je = me,
  Pe = Zt,
  Ee = TypeError,
  Te = Object.defineProperty,
  Me = Object.getOwnPropertyDescriptor,
  Ce = 'enumerable',
  Fe = 'configurable',
  Ie = 'writable'
be.f = we
  ? Se
    ? function (t, e, n) {
        if (
          (je(t),
          (e = Pe(e)),
          je(n),
          'function' == typeof t && 'prototype' === e && 'value' in n && Ie in n && !n[Ie])
        ) {
          var r = Me(t, e)
          r &&
            r[Ie] &&
            ((t[e] = n.value),
            (n = {
              configurable: Fe in n ? n[Fe] : r[Fe],
              enumerable: Ce in n ? n[Ce] : r[Ce],
              writable: !1
            }))
        }
        return Te(t, e, n)
      }
    : Te
  : function (t, e, n) {
      if ((je(t), (e = Pe(e)), je(n), Oe))
        try {
          return Te(t, e, n)
        } catch (r) {}
      if ('get' in n || 'set' in n) throw new Ee('Accessors not supported')
      return ('value' in n && (t[e] = n.value), t)
    }
var xe = be,
  ke = g,
  Le = i
    ? function (t, e, n) {
        return xe.f(t, e, ke(1, n))
      }
    : function (t, e, n) {
        return ((t[e] = n), t)
      },
  ze = { exports: {} },
  De = i,
  Ne = It,
  _e = Function.prototype,
  Ae = De && Object.getOwnPropertyDescriptor,
  Re = Ne(_e, 'name'),
  Ge = {
    EXISTS: Re,
    PROPER: Re && 'something' === function () {}.name,
    CONFIGURABLE: Re && (!De || (De && Ae(_e, 'name').configurable))
  },
  We = A,
  Be = jt,
  Ue = O(Function.toString)
We(Be.inspectSource) ||
  (Be.inspectSource = function (t) {
    return Ue(t)
  })
var $e,
  qe,
  Ke,
  Ve = Be.inspectSource,
  Xe = A,
  Ye = n.WeakMap,
  He = Xe(Ye) && /native code/.test(String(Ye)),
  Je = Dt,
  Qe = Et('keys'),
  Ze = {},
  tn = He,
  en = n,
  nn = G,
  rn = Le,
  on = It,
  un = jt,
  cn = function (t) {
    return Qe[t] || (Qe[t] = Je(t))
  },
  an = Ze,
  fn = 'Object already initialized',
  ln = en.TypeError,
  sn = en.WeakMap
if (tn || un.state) {
  var pn = un.state || (un.state = new sn())
  ;((pn.get = pn.get),
    (pn.has = pn.has),
    (pn.set = pn.set),
    ($e = function (t, e) {
      if (pn.has(t)) throw new ln(fn)
      return ((e.facade = t), pn.set(t, e), e)
    }),
    (qe = function (t) {
      return pn.get(t) || {}
    }),
    (Ke = function (t) {
      return pn.has(t)
    }))
} else {
  var yn = cn('state')
  ;((an[yn] = !0),
    ($e = function (t, e) {
      if (on(t, yn)) throw new ln(fn)
      return ((e.facade = t), rn(t, yn, e), e)
    }),
    (qe = function (t) {
      return on(t, yn) ? t[yn] : {}
    }),
    (Ke = function (t) {
      return on(t, yn)
    }))
}
var bn = {
    set: $e,
    get: qe,
    has: Ke,
    enforce: function (t) {
      return Ke(t) ? qe(t) : $e(t, {})
    },
    getterFor: function (t) {
      return function (e) {
        var n
        if (!nn(e) || (n = qe(e)).type !== t)
          throw new ln('Incompatible receiver, ' + t + ' required')
        return n
      }
    }
  },
  vn = O,
  gn = o,
  hn = A,
  dn = It,
  mn = i,
  wn = Ge.CONFIGURABLE,
  On = Ve,
  Sn = bn.enforce,
  jn = bn.get,
  Pn = String,
  En = Object.defineProperty,
  Tn = vn(''.slice),
  Mn = vn(''.replace),
  Cn = vn([].join),
  Fn =
    mn &&
    !gn(function () {
      return 8 !== En(function () {}, 'length', { value: 8 }).length
    }),
  In = String(String).split('String'),
  xn = (ze.exports = function (t, e, n) {
    ;('Symbol(' === Tn(Pn(e), 0, 7) && (e = '[' + Mn(Pn(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
      n && n.getter && (e = 'get ' + e),
      n && n.setter && (e = 'set ' + e),
      (!dn(t, 'name') || (wn && t.name !== e)) &&
        (mn ? En(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
      Fn && n && dn(n, 'arity') && t.length !== n.arity && En(t, 'length', { value: n.arity }))
    try {
      n && dn(n, 'constructor') && n.constructor
        ? mn && En(t, 'prototype', { writable: !1 })
        : t.prototype && (t.prototype = void 0)
    } catch (o) {}
    var r = Sn(t)
    return (dn(r, 'source') || (r.source = Cn(In, 'string' == typeof e ? e : '')), t)
  })
Function.prototype.toString = xn(function () {
  return (hn(this) && jn(this).source) || On(this)
}, 'toString')
var kn = ze.exports,
  Ln = A,
  zn = be,
  Dn = kn,
  Nn = wt,
  _n = {},
  An = Math.ceil,
  Rn = Math.floor,
  Gn =
    Math.trunc ||
    function (t) {
      var e = +t
      return (e > 0 ? Rn : An)(e)
    },
  Wn = function (t) {
    var e = +t
    return e != e || 0 === e ? 0 : Gn(e)
  },
  Bn = Wn,
  Un = Math.max,
  $n = Math.min,
  qn = Wn,
  Kn = Math.min,
  Vn = function (t) {
    var e = qn(t)
    return e > 0 ? Kn(e, 9007199254740991) : 0
  },
  Xn = N,
  Yn = function (t, e) {
    var n = Bn(t)
    return n < 0 ? Un(n + e, 0) : $n(n, e)
  },
  Hn = function (t) {
    return Vn(t.length)
  },
  Jn = function (t) {
    return function (e, n, r) {
      var o,
        i = Xn(e),
        u = Hn(i),
        c = Yn(r, u)
      if (t && n != n) {
        for (; u > c; ) if ((o = i[c++]) != o) return !0
      } else for (; u > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0
      return !t && -1
    }
  },
  Qn = { includes: Jn(!0), indexOf: Jn(!1) },
  Zn = It,
  tr = N,
  er = Qn.indexOf,
  nr = Ze,
  rr = O([].push),
  or = function (t, e) {
    var n,
      r = tr(t),
      o = 0,
      i = []
    for (n in r) !Zn(nr, n) && Zn(r, n) && rr(i, n)
    for (; e.length > o; ) Zn(r, (n = e[o++])) && (~er(i, n) || rr(i, n))
    return i
  },
  ir = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ].concat('length', 'prototype')
_n.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return or(t, ir)
  }
var ur = {}
ur.f = Object.getOwnPropertySymbols
var cr = U,
  ar = _n,
  fr = ur,
  lr = me,
  sr = O([].concat),
  pr =
    cr('Reflect', 'ownKeys') ||
    function (t) {
      var e = ar.f(lr(t)),
        n = fr.f
      return n ? sr(e, n(t)) : e
    },
  yr = It,
  br = pr,
  vr = r,
  gr = be,
  hr = o,
  dr = A,
  mr = /#|\.prototype\./,
  wr = function (t, e) {
    var n = Sr[Or(t)]
    return n === Pr || (n !== jr && (dr(e) ? hr(e) : !!e))
  },
  Or = (wr.normalize = function (t) {
    return String(t).replace(mr, '.').toLowerCase()
  }),
  Sr = (wr.data = {}),
  jr = (wr.NATIVE = 'N'),
  Pr = (wr.POLYFILL = 'P'),
  Er = wr,
  Tr = n,
  Mr = r.f,
  Cr = Le,
  Fr = function (t, e, n, r) {
    r || (r = {})
    var o = r.enumerable,
      i = void 0 !== r.name ? r.name : e
    if ((Ln(n) && Dn(n, i, r), r.global)) o ? (t[e] = n) : Nn(e, n)
    else {
      try {
        r.unsafe ? t[e] && (o = !0) : delete t[e]
      } catch (u) {}
      o
        ? (t[e] = n)
        : zn.f(t, e, {
            value: n,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable
          })
    }
    return t
  },
  Ir = wt,
  xr = function (t, e, n) {
    for (var r = br(e), o = gr.f, i = vr.f, u = 0; u < r.length; u++) {
      var c = r[u]
      yr(t, c) || (n && yr(n, c)) || o(t, c, i(e, c))
    }
  },
  kr = Er,
  Lr = n
;(function (t, e) {
  var n,
    r,
    o,
    i,
    u,
    c = t.target,
    a = t.global,
    f = t.stat
  if ((n = a ? Tr : f ? Tr[c] || Ir(c, {}) : Tr[c] && Tr[c].prototype))
    for (r in e) {
      if (
        ((i = e[r]),
        (o = t.dontCallGetSet ? (u = Mr(n, r)) && u.value : n[r]),
        !kr(a ? r : c + (f ? '.' : '#') + r, t.forced) && void 0 !== o)
      ) {
        if (typeof i == typeof o) continue
        xr(i, o)
      }
      ;((t.sham || (o && o.sham)) && Cr(i, 'sham', !0), Fr(n, r, i, t))
    }
})({ global: !0, forced: Lr.globalThis !== Lr }, { globalThis: Lr })
