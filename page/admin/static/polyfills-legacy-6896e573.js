!(function () {
  'use strict'
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
    c = !o(function () {
      var t = function () {}.bind()
      return 'function' != typeof t || t.hasOwnProperty('prototype')
    }),
    u = c,
    a = Function.prototype.call,
    f = u
      ? a.bind(a)
      : function () {
          return a.apply(a, arguments)
        },
    s = {},
    l = {}.propertyIsEnumerable,
    p = Object.getOwnPropertyDescriptor,
    h = p && !l.call({ 1: 2 }, 1)
  s.f = h
    ? function (t) {
        var e = p(this, t)
        return !!e && e.enumerable
      }
    : l
  var v,
    d,
    y = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
    },
    m = c,
    g = Function.prototype,
    b = g.call,
    w = m && g.bind.bind(b, b),
    O = m
      ? w
      : function (t) {
          return function () {
            return b.apply(t, arguments)
          }
        },
    S = O,
    j = S({}.toString),
    E = S(''.slice),
    T = function (t) {
      return E(j(t), 8, -1)
    },
    P = o,
    x = T,
    L = Object,
    C = O(''.split),
    R = P(function () {
      return !L('z').propertyIsEnumerable(0)
    })
      ? function (t) {
          return 'String' === x(t) ? C(t, '') : L(t)
        }
      : L,
    I = function (t) {
      return null == t
    },
    A = I,
    M = TypeError,
    _ = function (t) {
      if (A(t)) throw new M("Can't call method on " + t)
      return t
    },
    k = R,
    N = _,
    F = function (t) {
      return k(N(t))
    },
    D = 'object' == typeof document && document.all,
    G =
      void 0 === D && void 0 !== D
        ? function (t) {
            return 'function' == typeof t || t === D
          }
        : function (t) {
            return 'function' == typeof t
          },
    U = G,
    V = function (t) {
      return 'object' == typeof t ? null !== t : U(t)
    },
    W = n,
    z = G,
    B = function (t, e) {
      return arguments.length < 2 ? ((n = W[t]), z(n) ? n : void 0) : W[t] && W[t][e]
      var n
    },
    q = O({}.isPrototypeOf),
    H = ('undefined' != typeof navigator && String(navigator.userAgent)) || '',
    J = n,
    Y = H,
    $ = J.process,
    K = J.Deno,
    X = ($ && $.versions) || (K && K.version),
    Q = X && X.v8
  ;(Q && (d = (v = Q.split('.'))[0] > 0 && v[0] < 4 ? 1 : +(v[0] + v[1])),
    !d &&
      Y &&
      (!(v = Y.match(/Edge\/(\d+)/)) || v[1] >= 74) &&
      (v = Y.match(/Chrome\/(\d+)/)) &&
      (d = +v[1]))
  var Z = d,
    tt = Z,
    et = o,
    nt = n.String,
    rt =
      !!Object.getOwnPropertySymbols &&
      !et(function () {
        var t = Symbol('symbol detection')
        return !nt(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && tt && tt < 41)
      }),
    ot = rt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    it = B,
    ct = G,
    ut = q,
    at = Object,
    ft = ot
      ? function (t) {
          return 'symbol' == typeof t
        }
      : function (t) {
          var e = it('Symbol')
          return ct(e) && ut(e.prototype, at(t))
        },
    st = String,
    lt = function (t) {
      try {
        return st(t)
      } catch (e) {
        return 'Object'
      }
    },
    pt = G,
    ht = lt,
    vt = TypeError,
    dt = function (t) {
      if (pt(t)) return t
      throw new vt(ht(t) + ' is not a function')
    },
    yt = dt,
    mt = I,
    gt = function (t, e) {
      var n = t[e]
      return mt(n) ? void 0 : yt(n)
    },
    bt = f,
    wt = G,
    Ot = V,
    St = TypeError,
    jt = { exports: {} },
    Et = n,
    Tt = Object.defineProperty,
    Pt = function (t, e) {
      try {
        Tt(Et, t, { value: e, configurable: !0, writable: !0 })
      } catch (n) {
        Et[t] = e
      }
      return e
    },
    xt = Pt,
    Lt = '__core-js_shared__',
    Ct = n[Lt] || xt(Lt, {}),
    Rt = Ct
  ;(jt.exports = function (t, e) {
    return Rt[t] || (Rt[t] = void 0 !== e ? e : {})
  })('versions', []).push({
    version: '3.35.1',
    mode: 'global',
    copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  })
  var It = jt.exports,
    At = _,
    Mt = Object,
    _t = function (t) {
      return Mt(At(t))
    },
    kt = _t,
    Nt = O({}.hasOwnProperty),
    Ft =
      Object.hasOwn ||
      function (t, e) {
        return Nt(kt(t), e)
      },
    Dt = O,
    Gt = 0,
    Ut = Math.random(),
    Vt = Dt((1).toString),
    Wt = function (t) {
      return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + Vt(++Gt + Ut, 36)
    },
    zt = It,
    Bt = Ft,
    qt = Wt,
    Ht = rt,
    Jt = ot,
    Yt = n.Symbol,
    $t = zt('wks'),
    Kt = Jt ? Yt.for || Yt : (Yt && Yt.withoutSetter) || qt,
    Xt = function (t) {
      return (Bt($t, t) || ($t[t] = Ht && Bt(Yt, t) ? Yt[t] : Kt('Symbol.' + t)), $t[t])
    },
    Qt = f,
    Zt = V,
    te = ft,
    ee = gt,
    ne = function (t, e) {
      var n, r
      if ('string' === e && wt((n = t.toString)) && !Ot((r = bt(n, t)))) return r
      if (wt((n = t.valueOf)) && !Ot((r = bt(n, t)))) return r
      if ('string' !== e && wt((n = t.toString)) && !Ot((r = bt(n, t)))) return r
      throw new St("Can't convert object to primitive value")
    },
    re = TypeError,
    oe = Xt('toPrimitive'),
    ie = function (t, e) {
      if (!Zt(t) || te(t)) return t
      var n,
        r = ee(t, oe)
      if (r) {
        if ((void 0 === e && (e = 'default'), (n = Qt(r, t, e)), !Zt(n) || te(n))) return n
        throw new re("Can't convert object to primitive value")
      }
      return (void 0 === e && (e = 'number'), ne(t, e))
    },
    ce = ft,
    ue = function (t) {
      var e = ie(t, 'string')
      return ce(e) ? e : e + ''
    },
    ae = V,
    fe = n.document,
    se = ae(fe) && ae(fe.createElement),
    le = function (t) {
      return se ? fe.createElement(t) : {}
    },
    pe = le,
    he =
      !i &&
      !o(function () {
        return (
          7 !==
          Object.defineProperty(pe('div'), 'a', {
            get: function () {
              return 7
            }
          }).a
        )
      }),
    ve = i,
    de = f,
    ye = s,
    me = y,
    ge = F,
    be = ue,
    we = Ft,
    Oe = he,
    Se = Object.getOwnPropertyDescriptor
  r.f = ve
    ? Se
    : function (t, e) {
        if (((t = ge(t)), (e = be(e)), Oe))
          try {
            return Se(t, e)
          } catch (n) {}
        if (we(t, e)) return me(!de(ye.f, t, e), t[e])
      }
  var je = {},
    Ee =
      i &&
      o(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype
        )
      }),
    Te = V,
    Pe = String,
    xe = TypeError,
    Le = function (t) {
      if (Te(t)) return t
      throw new xe(Pe(t) + ' is not an object')
    },
    Ce = i,
    Re = he,
    Ie = Ee,
    Ae = Le,
    Me = ue,
    _e = TypeError,
    ke = Object.defineProperty,
    Ne = Object.getOwnPropertyDescriptor,
    Fe = 'enumerable',
    De = 'configurable',
    Ge = 'writable'
  je.f = Ce
    ? Ie
      ? function (t, e, n) {
          if (
            (Ae(t),
            (e = Me(e)),
            Ae(n),
            'function' == typeof t && 'prototype' === e && 'value' in n && Ge in n && !n[Ge])
          ) {
            var r = Ne(t, e)
            r &&
              r[Ge] &&
              ((t[e] = n.value),
              (n = {
                configurable: De in n ? n[De] : r[De],
                enumerable: Fe in n ? n[Fe] : r[Fe],
                writable: !1
              }))
          }
          return ke(t, e, n)
        }
      : ke
    : function (t, e, n) {
        if ((Ae(t), (e = Me(e)), Ae(n), Re))
          try {
            return ke(t, e, n)
          } catch (r) {}
        if ('get' in n || 'set' in n) throw new _e('Accessors not supported')
        return ('value' in n && (t[e] = n.value), t)
      }
  var Ue = je,
    Ve = y,
    We = i
      ? function (t, e, n) {
          return Ue.f(t, e, Ve(1, n))
        }
      : function (t, e, n) {
          return ((t[e] = n), t)
        },
    ze = { exports: {} },
    Be = i,
    qe = Ft,
    He = Function.prototype,
    Je = Be && Object.getOwnPropertyDescriptor,
    Ye = qe(He, 'name'),
    $e = {
      EXISTS: Ye,
      PROPER: Ye && 'something' === function () {}.name,
      CONFIGURABLE: Ye && (!Be || (Be && Je(He, 'name').configurable))
    },
    Ke = G,
    Xe = Ct,
    Qe = O(Function.toString)
  Ke(Xe.inspectSource) ||
    (Xe.inspectSource = function (t) {
      return Qe(t)
    })
  var Ze,
    tn,
    en,
    nn = Xe.inspectSource,
    rn = G,
    on = n.WeakMap,
    cn = rn(on) && /native code/.test(String(on)),
    un = Wt,
    an = It('keys'),
    fn = function (t) {
      return an[t] || (an[t] = un(t))
    },
    sn = {},
    ln = cn,
    pn = n,
    hn = V,
    vn = We,
    dn = Ft,
    yn = Ct,
    mn = fn,
    gn = sn,
    bn = 'Object already initialized',
    wn = pn.TypeError,
    On = pn.WeakMap
  if (ln || yn.state) {
    var Sn = yn.state || (yn.state = new On())
    ;((Sn.get = Sn.get),
      (Sn.has = Sn.has),
      (Sn.set = Sn.set),
      (Ze = function (t, e) {
        if (Sn.has(t)) throw new wn(bn)
        return ((e.facade = t), Sn.set(t, e), e)
      }),
      (tn = function (t) {
        return Sn.get(t) || {}
      }),
      (en = function (t) {
        return Sn.has(t)
      }))
  } else {
    var jn = mn('state')
    ;((gn[jn] = !0),
      (Ze = function (t, e) {
        if (dn(t, jn)) throw new wn(bn)
        return ((e.facade = t), vn(t, jn, e), e)
      }),
      (tn = function (t) {
        return dn(t, jn) ? t[jn] : {}
      }),
      (en = function (t) {
        return dn(t, jn)
      }))
  }
  var En = {
      set: Ze,
      get: tn,
      has: en,
      enforce: function (t) {
        return en(t) ? tn(t) : Ze(t, {})
      },
      getterFor: function (t) {
        return function (e) {
          var n
          if (!hn(e) || (n = tn(e)).type !== t)
            throw new wn('Incompatible receiver, ' + t + ' required')
          return n
        }
      }
    },
    Tn = O,
    Pn = o,
    xn = G,
    Ln = Ft,
    Cn = i,
    Rn = $e.CONFIGURABLE,
    In = nn,
    An = En.enforce,
    Mn = En.get,
    _n = String,
    kn = Object.defineProperty,
    Nn = Tn(''.slice),
    Fn = Tn(''.replace),
    Dn = Tn([].join),
    Gn =
      Cn &&
      !Pn(function () {
        return 8 !== kn(function () {}, 'length', { value: 8 }).length
      }),
    Un = String(String).split('String'),
    Vn = (ze.exports = function (t, e, n) {
      ;('Symbol(' === Nn(_n(e), 0, 7) && (e = '[' + Fn(_n(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
        n && n.getter && (e = 'get ' + e),
        n && n.setter && (e = 'set ' + e),
        (!Ln(t, 'name') || (Rn && t.name !== e)) &&
          (Cn ? kn(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
        Gn && n && Ln(n, 'arity') && t.length !== n.arity && kn(t, 'length', { value: n.arity }))
      try {
        n && Ln(n, 'constructor') && n.constructor
          ? Cn && kn(t, 'prototype', { writable: !1 })
          : t.prototype && (t.prototype = void 0)
      } catch (o) {}
      var r = An(t)
      return (Ln(r, 'source') || (r.source = Dn(Un, 'string' == typeof e ? e : '')), t)
    })
  Function.prototype.toString = Vn(function () {
    return (xn(this) && Mn(this).source) || In(this)
  }, 'toString')
  var Wn = ze.exports,
    zn = G,
    Bn = je,
    qn = Wn,
    Hn = Pt,
    Jn = function (t, e, n, r) {
      r || (r = {})
      var o = r.enumerable,
        i = void 0 !== r.name ? r.name : e
      if ((zn(n) && qn(n, i, r), r.global)) o ? (t[e] = n) : Hn(e, n)
      else {
        try {
          r.unsafe ? t[e] && (o = !0) : delete t[e]
        } catch (c) {}
        o
          ? (t[e] = n)
          : Bn.f(t, e, {
              value: n,
              enumerable: !1,
              configurable: !r.nonConfigurable,
              writable: !r.nonWritable
            })
      }
      return t
    },
    Yn = {},
    $n = Math.ceil,
    Kn = Math.floor,
    Xn =
      Math.trunc ||
      function (t) {
        var e = +t
        return (e > 0 ? Kn : $n)(e)
      },
    Qn = function (t) {
      var e = +t
      return e != e || 0 === e ? 0 : Xn(e)
    },
    Zn = Qn,
    tr = Math.max,
    er = Math.min,
    nr = Qn,
    rr = Math.min,
    or = function (t) {
      var e = nr(t)
      return e > 0 ? rr(e, 9007199254740991) : 0
    },
    ir = function (t) {
      return or(t.length)
    },
    cr = F,
    ur = function (t, e) {
      var n = Zn(t)
      return n < 0 ? tr(n + e, 0) : er(n, e)
    },
    ar = ir,
    fr = function (t) {
      return function (e, n, r) {
        var o,
          i = cr(e),
          c = ar(i),
          u = ur(r, c)
        if (t && n != n) {
          for (; c > u; ) if ((o = i[u++]) != o) return !0
        } else for (; c > u; u++) if ((t || u in i) && i[u] === n) return t || u || 0
        return !t && -1
      }
    },
    sr = { includes: fr(!0), indexOf: fr(!1) },
    lr = Ft,
    pr = F,
    hr = sr.indexOf,
    vr = sn,
    dr = O([].push),
    yr = function (t, e) {
      var n,
        r = pr(t),
        o = 0,
        i = []
      for (n in r) !lr(vr, n) && lr(r, n) && dr(i, n)
      for (; e.length > o; ) lr(r, (n = e[o++])) && (~hr(i, n) || dr(i, n))
      return i
    },
    mr = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ],
    gr = yr,
    br = mr.concat('length', 'prototype')
  Yn.f =
    Object.getOwnPropertyNames ||
    function (t) {
      return gr(t, br)
    }
  var wr = {}
  wr.f = Object.getOwnPropertySymbols
  var Or = B,
    Sr = Yn,
    jr = wr,
    Er = Le,
    Tr = O([].concat),
    Pr =
      Or('Reflect', 'ownKeys') ||
      function (t) {
        var e = Sr.f(Er(t)),
          n = jr.f
        return n ? Tr(e, n(t)) : e
      },
    xr = Ft,
    Lr = Pr,
    Cr = r,
    Rr = je,
    Ir = o,
    Ar = G,
    Mr = /#|\.prototype\./,
    _r = function (t, e) {
      var n = Nr[kr(t)]
      return n === Dr || (n !== Fr && (Ar(e) ? Ir(e) : !!e))
    },
    kr = (_r.normalize = function (t) {
      return String(t).replace(Mr, '.').toLowerCase()
    }),
    Nr = (_r.data = {}),
    Fr = (_r.NATIVE = 'N'),
    Dr = (_r.POLYFILL = 'P'),
    Gr = _r,
    Ur = n,
    Vr = r.f,
    Wr = We,
    zr = Jn,
    Br = Pt,
    qr = function (t, e, n) {
      for (var r = Lr(e), o = Rr.f, i = Cr.f, c = 0; c < r.length; c++) {
        var u = r[c]
        xr(t, u) || (n && xr(n, u)) || o(t, u, i(e, u))
      }
    },
    Hr = Gr,
    Jr = function (t, e) {
      var n,
        r,
        o,
        i,
        c,
        u = t.target,
        a = t.global,
        f = t.stat
      if ((n = a ? Ur : f ? Ur[u] || Br(u, {}) : Ur[u] && Ur[u].prototype))
        for (r in e) {
          if (
            ((i = e[r]),
            (o = t.dontCallGetSet ? (c = Vr(n, r)) && c.value : n[r]),
            !Hr(a ? r : u + (f ? '.' : '#') + r, t.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue
            qr(i, o)
          }
          ;((t.sham || (o && o.sham)) && Wr(i, 'sham', !0), zr(n, r, i, t))
        }
    },
    Yr = n
  Jr({ global: !0, forced: Yr.globalThis !== Yr }, { globalThis: Yr })
  var $r = {}
  $r[Xt('toStringTag')] = 'z'
  var Kr = '[object z]' === String($r),
    Xr = Kr,
    Qr = G,
    Zr = T,
    to = Xt('toStringTag'),
    eo = Object,
    no =
      'Arguments' ===
      Zr(
        (function () {
          return arguments
        })()
      ),
    ro = Xr
      ? Zr
      : function (t) {
          var e, n, r
          return void 0 === t
            ? 'Undefined'
            : null === t
              ? 'Null'
              : 'string' ==
                  typeof (n = (function (t, e) {
                    try {
                      return t[e]
                    } catch (n) {}
                  })((e = eo(t)), to))
                ? n
                : no
                  ? Zr(e)
                  : 'Object' === (r = Zr(e)) && Qr(e.callee)
                    ? 'Arguments'
                    : r
        },
    oo = ro,
    io = Kr
      ? {}.toString
      : function () {
          return '[object ' + oo(this) + ']'
        }
  Kr || Jn(Object.prototype, 'toString', io, { unsafe: !0 })
  var co = 'process' === T(n.process),
    uo = O,
    ao = dt,
    fo = V,
    so = function (t) {
      return fo(t) || null === t
    },
    lo = String,
    po = TypeError,
    ho = function (t, e, n) {
      try {
        return uo(ao(Object.getOwnPropertyDescriptor(t, e)[n]))
      } catch (r) {}
    },
    vo = Le,
    yo = function (t) {
      if (so(t)) return t
      throw new po("Can't set " + lo(t) + ' as a prototype')
    },
    mo =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              n = {}
            try {
              ;((t = ho(Object.prototype, '__proto__', 'set'))(n, []), (e = n instanceof Array))
            } catch (r) {}
            return function (n, r) {
              return (vo(n), yo(r), e ? t(n, r) : (n.__proto__ = r), n)
            }
          })()
        : void 0),
    go = je.f,
    bo = Ft,
    wo = Xt('toStringTag'),
    Oo = function (t, e, n) {
      ;(t && !n && (t = t.prototype), t && !bo(t, wo) && go(t, wo, { configurable: !0, value: e }))
    },
    So = Wn,
    jo = je,
    Eo = B,
    To = function (t, e, n) {
      return (
        n.get && So(n.get, e, { getter: !0 }),
        n.set && So(n.set, e, { setter: !0 }),
        jo.f(t, e, n)
      )
    },
    Po = i,
    xo = Xt('species'),
    Lo = q,
    Co = TypeError,
    Ro = O,
    Io = o,
    Ao = G,
    Mo = ro,
    _o = nn,
    ko = function () {},
    No = B('Reflect', 'construct'),
    Fo = /^\s*(?:class|function)\b/,
    Do = Ro(Fo.exec),
    Go = !Fo.test(ko),
    Uo = function (t) {
      if (!Ao(t)) return !1
      try {
        return (No(ko, [], t), !0)
      } catch (e) {
        return !1
      }
    },
    Vo = function (t) {
      if (!Ao(t)) return !1
      switch (Mo(t)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
          return !1
      }
      try {
        return Go || !!Do(Fo, _o(t))
      } catch (e) {
        return !0
      }
    }
  Vo.sham = !0
  var Wo,
    zo,
    Bo,
    qo,
    Ho =
      !No ||
      Io(function () {
        var t
        return (
          Uo(Uo.call) ||
          !Uo(Object) ||
          !Uo(function () {
            t = !0
          }) ||
          t
        )
      })
        ? Vo
        : Uo,
    Jo = Ho,
    Yo = lt,
    $o = TypeError,
    Ko = Le,
    Xo = function (t) {
      if (Jo(t)) return t
      throw new $o(Yo(t) + ' is not a constructor')
    },
    Qo = I,
    Zo = Xt('species'),
    ti = c,
    ei = Function.prototype,
    ni = ei.apply,
    ri = ei.call,
    oi =
      ('object' == typeof Reflect && Reflect.apply) ||
      (ti
        ? ri.bind(ni)
        : function () {
            return ri.apply(ni, arguments)
          }),
    ii = T,
    ci = O,
    ui = function (t) {
      if ('Function' === ii(t)) return ci(t)
    },
    ai = dt,
    fi = c,
    si = ui(ui.bind),
    li = function (t, e) {
      return (
        ai(t),
        void 0 === e
          ? t
          : fi
            ? si(t, e)
            : function () {
                return t.apply(e, arguments)
              }
      )
    },
    pi = B('document', 'documentElement'),
    hi = O([].slice),
    vi = TypeError,
    di = /(?:ipad|iphone|ipod).*applewebkit/i.test(H),
    yi = n,
    mi = oi,
    gi = li,
    bi = G,
    wi = Ft,
    Oi = o,
    Si = pi,
    ji = hi,
    Ei = le,
    Ti = function (t, e) {
      if (t < e) throw new vi('Not enough arguments')
      return t
    },
    Pi = di,
    xi = co,
    Li = yi.setImmediate,
    Ci = yi.clearImmediate,
    Ri = yi.process,
    Ii = yi.Dispatch,
    Ai = yi.Function,
    Mi = yi.MessageChannel,
    _i = yi.String,
    ki = 0,
    Ni = {},
    Fi = 'onreadystatechange'
  Oi(function () {
    Wo = yi.location
  })
  var Di = function (t) {
      if (wi(Ni, t)) {
        var e = Ni[t]
        ;(delete Ni[t], e())
      }
    },
    Gi = function (t) {
      return function () {
        Di(t)
      }
    },
    Ui = function (t) {
      Di(t.data)
    },
    Vi = function (t) {
      yi.postMessage(_i(t), Wo.protocol + '//' + Wo.host)
    }
  ;(Li && Ci) ||
    ((Li = function (t) {
      Ti(arguments.length, 1)
      var e = bi(t) ? t : Ai(t),
        n = ji(arguments, 1)
      return (
        (Ni[++ki] = function () {
          mi(e, void 0, n)
        }),
        zo(ki),
        ki
      )
    }),
    (Ci = function (t) {
      delete Ni[t]
    }),
    xi
      ? (zo = function (t) {
          Ri.nextTick(Gi(t))
        })
      : Ii && Ii.now
        ? (zo = function (t) {
            Ii.now(Gi(t))
          })
        : Mi && !Pi
          ? ((qo = (Bo = new Mi()).port2), (Bo.port1.onmessage = Ui), (zo = gi(qo.postMessage, qo)))
          : yi.addEventListener &&
              bi(yi.postMessage) &&
              !yi.importScripts &&
              Wo &&
              'file:' !== Wo.protocol &&
              !Oi(Vi)
            ? ((zo = Vi), yi.addEventListener('message', Ui, !1))
            : (zo =
                Fi in Ei('script')
                  ? function (t) {
                      Si.appendChild(Ei('script'))[Fi] = function () {
                        ;(Si.removeChild(this), Di(t))
                      }
                    }
                  : function (t) {
                      setTimeout(Gi(t), 0)
                    }))
  var Wi = { set: Li, clear: Ci },
    zi = n,
    Bi = i,
    qi = Object.getOwnPropertyDescriptor,
    Hi = function () {
      ;((this.head = null), (this.tail = null))
    }
  Hi.prototype = {
    add: function (t) {
      var e = { item: t, next: null },
        n = this.tail
      ;(n ? (n.next = e) : (this.head = e), (this.tail = e))
    },
    get: function () {
      var t = this.head
      if (t) return (null === (this.head = t.next) && (this.tail = null), t.item)
    }
  }
  var Ji,
    Yi,
    $i,
    Ki,
    Xi,
    Qi = Hi,
    Zi = /ipad|iphone|ipod/i.test(H) && 'undefined' != typeof Pebble,
    tc = /web0s(?!.*chrome)/i.test(H),
    ec = n,
    nc = function (t) {
      if (!Bi) return zi[t]
      var e = qi(zi, t)
      return e && e.value
    },
    rc = li,
    oc = Wi.set,
    ic = Qi,
    cc = di,
    uc = Zi,
    ac = tc,
    fc = co,
    sc = ec.MutationObserver || ec.WebKitMutationObserver,
    lc = ec.document,
    pc = ec.process,
    hc = ec.Promise,
    vc = nc('queueMicrotask')
  if (!vc) {
    var dc = new ic(),
      yc = function () {
        var t, e
        for (fc && (t = pc.domain) && t.exit(); (e = dc.get()); )
          try {
            e()
          } catch (n) {
            throw (dc.head && Ji(), n)
          }
        t && t.enter()
      }
    ;(cc || fc || ac || !sc || !lc
      ? !uc && hc && hc.resolve
        ? (((Ki = hc.resolve(void 0)).constructor = hc),
          (Xi = rc(Ki.then, Ki)),
          (Ji = function () {
            Xi(yc)
          }))
        : fc
          ? (Ji = function () {
              pc.nextTick(yc)
            })
          : ((oc = rc(oc, ec)),
            (Ji = function () {
              oc(yc)
            }))
      : ((Yi = !0),
        ($i = lc.createTextNode('')),
        new sc(yc).observe($i, { characterData: !0 }),
        (Ji = function () {
          $i.data = Yi = !Yi
        })),
      (vc = function (t) {
        ;(dc.head || Ji(), dc.add(t))
      }))
  }
  var mc = vc,
    gc = function (t) {
      try {
        return { error: !1, value: t() }
      } catch (e) {
        return { error: !0, value: e }
      }
    },
    bc = n.Promise,
    wc = 'object' == typeof Deno && Deno && 'object' == typeof Deno.version,
    Oc = !wc && !co && 'object' == typeof window && 'object' == typeof document,
    Sc = n,
    jc = bc,
    Ec = G,
    Tc = Gr,
    Pc = nn,
    xc = Xt,
    Lc = Oc,
    Cc = wc,
    Rc = Z
  jc && jc.prototype
  var Ic = xc('species'),
    Ac = !1,
    Mc = Ec(Sc.PromiseRejectionEvent),
    _c = Tc('Promise', function () {
      var t = Pc(jc),
        e = t !== String(jc)
      if (!e && 66 === Rc) return !0
      if (!Rc || Rc < 51 || !/native code/.test(t)) {
        var n = new jc(function (t) {
            t(1)
          }),
          r = function (t) {
            t(
              function () {},
              function () {}
            )
          }
        if ((((n.constructor = {})[Ic] = r), !(Ac = n.then(function () {}) instanceof r))) return !0
      }
      return !e && (Lc || Cc) && !Mc
    }),
    kc = { CONSTRUCTOR: _c, REJECTION_EVENT: Mc, SUBCLASSING: Ac },
    Nc = {},
    Fc = dt,
    Dc = TypeError,
    Gc = function (t) {
      var e, n
      ;((this.promise = new t(function (t, r) {
        if (void 0 !== e || void 0 !== n) throw new Dc('Bad Promise constructor')
        ;((e = t), (n = r))
      })),
        (this.resolve = Fc(e)),
        (this.reject = Fc(n)))
    }
  Nc.f = function (t) {
    return new Gc(t)
  }
  var Uc,
    Vc,
    Wc,
    zc = Jr,
    Bc = co,
    qc = n,
    Hc = f,
    Jc = Jn,
    Yc = mo,
    $c = Oo,
    Kc = function (t) {
      var e = Eo(t)
      Po &&
        e &&
        !e[xo] &&
        To(e, xo, {
          configurable: !0,
          get: function () {
            return this
          }
        })
    },
    Xc = dt,
    Qc = G,
    Zc = V,
    tu = function (t, e) {
      if (Lo(e, t)) return t
      throw new Co('Incorrect invocation')
    },
    eu = function (t, e) {
      var n,
        r = Ko(t).constructor
      return void 0 === r || Qo((n = Ko(r)[Zo])) ? e : Xo(n)
    },
    nu = Wi.set,
    ru = mc,
    ou = function (t, e) {
      try {
        1 === arguments.length ? console.error(t) : console.error(t, e)
      } catch (n) {}
    },
    iu = gc,
    cu = Qi,
    uu = En,
    au = bc,
    fu = Nc,
    su = 'Promise',
    lu = kc.CONSTRUCTOR,
    pu = kc.REJECTION_EVENT,
    hu = kc.SUBCLASSING,
    vu = uu.getterFor(su),
    du = uu.set,
    yu = au && au.prototype,
    mu = au,
    gu = yu,
    bu = qc.TypeError,
    wu = qc.document,
    Ou = qc.process,
    Su = fu.f,
    ju = Su,
    Eu = !!(wu && wu.createEvent && qc.dispatchEvent),
    Tu = 'unhandledrejection',
    Pu = function (t) {
      var e
      return !(!Zc(t) || !Qc((e = t.then))) && e
    },
    xu = function (t, e) {
      var n,
        r,
        o,
        i = e.value,
        c = 1 === e.state,
        u = c ? t.ok : t.fail,
        a = t.resolve,
        f = t.reject,
        s = t.domain
      try {
        u
          ? (c || (2 === e.rejection && Au(e), (e.rejection = 1)),
            !0 === u ? (n = i) : (s && s.enter(), (n = u(i)), s && (s.exit(), (o = !0))),
            n === t.promise
              ? f(new bu('Promise-chain cycle'))
              : (r = Pu(n))
                ? Hc(r, n, a, f)
                : a(n))
          : f(i)
      } catch (l) {
        ;(s && !o && s.exit(), f(l))
      }
    },
    Lu = function (t, e) {
      t.notified ||
        ((t.notified = !0),
        ru(function () {
          for (var n, r = t.reactions; (n = r.get()); ) xu(n, t)
          ;((t.notified = !1), e && !t.rejection && Ru(t))
        }))
    },
    Cu = function (t, e, n) {
      var r, o
      ;(Eu
        ? (((r = wu.createEvent('Event')).promise = e),
          (r.reason = n),
          r.initEvent(t, !1, !0),
          qc.dispatchEvent(r))
        : (r = { promise: e, reason: n }),
        !pu && (o = qc['on' + t]) ? o(r) : t === Tu && ou('Unhandled promise rejection', n))
    },
    Ru = function (t) {
      Hc(nu, qc, function () {
        var e,
          n = t.facade,
          r = t.value
        if (
          Iu(t) &&
          ((e = iu(function () {
            Bc ? Ou.emit('unhandledRejection', r, n) : Cu(Tu, n, r)
          })),
          (t.rejection = Bc || Iu(t) ? 2 : 1),
          e.error)
        )
          throw e.value
      })
    },
    Iu = function (t) {
      return 1 !== t.rejection && !t.parent
    },
    Au = function (t) {
      Hc(nu, qc, function () {
        var e = t.facade
        Bc ? Ou.emit('rejectionHandled', e) : Cu('rejectionhandled', e, t.value)
      })
    },
    Mu = function (t, e, n) {
      return function (r) {
        t(e, r, n)
      }
    },
    _u = function (t, e, n) {
      t.done || ((t.done = !0), n && (t = n), (t.value = e), (t.state = 2), Lu(t, !0))
    },
    ku = function (t, e, n) {
      if (!t.done) {
        ;((t.done = !0), n && (t = n))
        try {
          if (t.facade === e) throw new bu("Promise can't be resolved itself")
          var r = Pu(e)
          r
            ? ru(function () {
                var n = { done: !1 }
                try {
                  Hc(r, e, Mu(ku, n, t), Mu(_u, n, t))
                } catch (o) {
                  _u(n, o, t)
                }
              })
            : ((t.value = e), (t.state = 1), Lu(t, !1))
        } catch (o) {
          _u({ done: !1 }, o, t)
        }
      }
    }
  if (
    lu &&
    ((gu = (mu = function (t) {
      ;(tu(this, gu), Xc(t), Hc(Uc, this))
      var e = vu(this)
      try {
        t(Mu(ku, e), Mu(_u, e))
      } catch (n) {
        _u(e, n)
      }
    }).prototype),
    ((Uc = function (t) {
      du(this, {
        type: su,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new cu(),
        rejection: !1,
        state: 0,
        value: void 0
      })
    }).prototype = Jc(gu, 'then', function (t, e) {
      var n = vu(this),
        r = Su(eu(this, mu))
      return (
        (n.parent = !0),
        (r.ok = !Qc(t) || t),
        (r.fail = Qc(e) && e),
        (r.domain = Bc ? Ou.domain : void 0),
        0 === n.state
          ? n.reactions.add(r)
          : ru(function () {
              xu(r, n)
            }),
        r.promise
      )
    })),
    (Vc = function () {
      var t = new Uc(),
        e = vu(t)
      ;((this.promise = t), (this.resolve = Mu(ku, e)), (this.reject = Mu(_u, e)))
    }),
    (fu.f = Su =
      function (t) {
        return t === mu || undefined === t ? new Vc(t) : ju(t)
      }),
    Qc(au) && yu !== Object.prototype)
  ) {
    ;((Wc = yu.then),
      hu ||
        Jc(
          yu,
          'then',
          function (t, e) {
            var n = this
            return new mu(function (t, e) {
              Hc(Wc, n, t, e)
            }).then(t, e)
          },
          { unsafe: !0 }
        ))
    try {
      delete yu.constructor
    } catch (fl) {}
    Yc && Yc(yu, gu)
  }
  ;(zc({ global: !0, constructor: !0, wrap: !0, forced: lu }, { Promise: mu }),
    $c(mu, su, !1),
    Kc(su))
  var Nu = {},
    Fu = Nu,
    Du = Xt('iterator'),
    Gu = Array.prototype,
    Uu = ro,
    Vu = gt,
    Wu = I,
    zu = Nu,
    Bu = Xt('iterator'),
    qu = function (t) {
      if (!Wu(t)) return Vu(t, Bu) || Vu(t, '@@iterator') || zu[Uu(t)]
    },
    Hu = f,
    Ju = dt,
    Yu = Le,
    $u = lt,
    Ku = qu,
    Xu = TypeError,
    Qu = f,
    Zu = Le,
    ta = gt,
    ea = li,
    na = f,
    ra = Le,
    oa = lt,
    ia = function (t) {
      return void 0 !== t && (Fu.Array === t || Gu[Du] === t)
    },
    ca = ir,
    ua = q,
    aa = function (t, e) {
      var n = arguments.length < 2 ? Ku(t) : e
      if (Ju(n)) return Yu(Hu(n, t))
      throw new Xu($u(t) + ' is not iterable')
    },
    fa = qu,
    sa = function (t, e, n) {
      var r, o
      Zu(t)
      try {
        if (!(r = ta(t, 'return'))) {
          if ('throw' === e) throw n
          return n
        }
        r = Qu(r, t)
      } catch (fl) {
        ;((o = !0), (r = fl))
      }
      if ('throw' === e) throw n
      if (o) throw r
      return (Zu(r), n)
    },
    la = TypeError,
    pa = function (t, e) {
      ;((this.stopped = t), (this.result = e))
    },
    ha = pa.prototype,
    va = function (t, e, n) {
      var r,
        o,
        i,
        c,
        u,
        a,
        f,
        s = n && n.that,
        l = !(!n || !n.AS_ENTRIES),
        p = !(!n || !n.IS_RECORD),
        h = !(!n || !n.IS_ITERATOR),
        v = !(!n || !n.INTERRUPTED),
        d = ea(e, s),
        y = function (t) {
          return (r && sa(r, 'normal', t), new pa(!0, t))
        },
        m = function (t) {
          return l ? (ra(t), v ? d(t[0], t[1], y) : d(t[0], t[1])) : v ? d(t, y) : d(t)
        }
      if (p) r = t.iterator
      else if (h) r = t
      else {
        if (!(o = fa(t))) throw new la(oa(t) + ' is not iterable')
        if (ia(o)) {
          for (i = 0, c = ca(t); c > i; i++) if ((u = m(t[i])) && ua(ha, u)) return u
          return new pa(!1)
        }
        r = aa(t, o)
      }
      for (a = p ? t.next : r.next; !(f = na(a, r)).done; ) {
        try {
          u = m(f.value)
        } catch (fl) {
          sa(r, 'throw', fl)
        }
        if ('object' == typeof u && u && ua(ha, u)) return u
      }
      return new pa(!1)
    },
    da = Xt('iterator'),
    ya = !1
  try {
    var ma = 0,
      ga = {
        next: function () {
          return { done: !!ma++ }
        },
        return: function () {
          ya = !0
        }
      }
    ;((ga[da] = function () {
      return this
    }),
      Array.from(ga, function () {
        throw 2
      }))
  } catch (fl) {}
  var ba = bc,
    wa = function (t, e) {
      try {
        if (!e && !ya) return !1
      } catch (fl) {
        return !1
      }
      var n = !1
      try {
        var r = {}
        ;((r[da] = function () {
          return {
            next: function () {
              return { done: (n = !0) }
            }
          }
        }),
          t(r))
      } catch (fl) {}
      return n
    },
    Oa =
      kc.CONSTRUCTOR ||
      !wa(function (t) {
        ba.all(t).then(void 0, function () {})
      }),
    Sa = f,
    ja = dt,
    Ea = Nc,
    Ta = gc,
    Pa = va
  Jr(
    { target: 'Promise', stat: !0, forced: Oa },
    {
      all: function (t) {
        var e = this,
          n = Ea.f(e),
          r = n.resolve,
          o = n.reject,
          i = Ta(function () {
            var n = ja(e.resolve),
              i = [],
              c = 0,
              u = 1
            ;(Pa(t, function (t) {
              var a = c++,
                f = !1
              ;(u++,
                Sa(n, e, t).then(function (t) {
                  f || ((f = !0), (i[a] = t), --u || r(i))
                }, o))
            }),
              --u || r(i))
          })
        return (i.error && o(i.value), n.promise)
      }
    }
  )
  var xa = Jr,
    La = kc.CONSTRUCTOR,
    Ca = bc,
    Ra = B,
    Ia = G,
    Aa = Jn,
    Ma = Ca && Ca.prototype
  if (
    (xa(
      { target: 'Promise', proto: !0, forced: La, real: !0 },
      {
        catch: function (t) {
          return this.then(void 0, t)
        }
      }
    ),
    Ia(Ca))
  ) {
    var _a = Ra('Promise').prototype.catch
    Ma.catch !== _a && Aa(Ma, 'catch', _a, { unsafe: !0 })
  }
  var ka = f,
    Na = dt,
    Fa = Nc,
    Da = gc,
    Ga = va
  Jr(
    { target: 'Promise', stat: !0, forced: Oa },
    {
      race: function (t) {
        var e = this,
          n = Fa.f(e),
          r = n.reject,
          o = Da(function () {
            var o = Na(e.resolve)
            Ga(t, function (t) {
              ka(o, e, t).then(n.resolve, r)
            })
          })
        return (o.error && r(o.value), n.promise)
      }
    }
  )
  var Ua = Nc
  Jr(
    { target: 'Promise', stat: !0, forced: kc.CONSTRUCTOR },
    {
      reject: function (t) {
        var e = Ua.f(this)
        return ((0, e.reject)(t), e.promise)
      }
    }
  )
  var Va = Le,
    Wa = V,
    za = Nc,
    Ba = Jr,
    qa = kc.CONSTRUCTOR,
    Ha = function (t, e) {
      if ((Va(t), Wa(e) && e.constructor === t)) return e
      var n = za.f(t)
      return ((0, n.resolve)(e), n.promise)
    }
  ;(B('Promise'),
    Ba(
      { target: 'Promise', stat: !0, forced: qa },
      {
        resolve: function (t) {
          return Ha(this, t)
        }
      }
    ))
  var Ja = {},
    Ya = yr,
    $a = mr,
    Ka =
      Object.keys ||
      function (t) {
        return Ya(t, $a)
      },
    Xa = i,
    Qa = Ee,
    Za = je,
    tf = Le,
    ef = F,
    nf = Ka
  Ja.f =
    Xa && !Qa
      ? Object.defineProperties
      : function (t, e) {
          tf(t)
          for (var n, r = ef(e), o = nf(e), i = o.length, c = 0; i > c; )
            Za.f(t, (n = o[c++]), r[n])
          return t
        }
  var rf,
    of = Le,
    cf = Ja,
    uf = mr,
    af = sn,
    ff = pi,
    sf = le,
    lf = 'prototype',
    pf = 'script',
    hf = fn('IE_PROTO'),
    vf = function () {},
    df = function (t) {
      return '<' + pf + '>' + t + '</' + pf + '>'
    },
    yf = function (t) {
      ;(t.write(df('')), t.close())
      var e = t.parentWindow.Object
      return ((t = null), e)
    },
    mf = function () {
      try {
        rf = new ActiveXObject('htmlfile')
      } catch (fl) {}
      var t, e, n
      mf =
        'undefined' != typeof document
          ? document.domain && rf
            ? yf(rf)
            : ((e = sf('iframe')),
              (n = 'java' + pf + ':'),
              (e.style.display = 'none'),
              ff.appendChild(e),
              (e.src = String(n)),
              (t = e.contentWindow.document).open(),
              t.write(df('document.F=Object')),
              t.close(),
              t.F)
          : yf(rf)
      for (var r = uf.length; r--; ) delete mf[lf][uf[r]]
      return mf()
    }
  af[hf] = !0
  var gf =
      Object.create ||
      function (t, e) {
        var n
        return (
          null !== t
            ? ((vf[lf] = of(t)), (n = new vf()), (vf[lf] = null), (n[hf] = t))
            : (n = mf()),
          void 0 === e ? n : cf.f(n, e)
        )
      },
    bf = Xt,
    wf = gf,
    Of = je.f,
    Sf = bf('unscopables'),
    jf = Array.prototype
  void 0 === jf[Sf] && Of(jf, Sf, { configurable: !0, value: wf(null) })
  var Ef,
    Tf,
    Pf,
    xf = !o(function () {
      function t() {}
      return ((t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype)
    }),
    Lf = Ft,
    Cf = G,
    Rf = _t,
    If = xf,
    Af = fn('IE_PROTO'),
    Mf = Object,
    _f = Mf.prototype,
    kf = If
      ? Mf.getPrototypeOf
      : function (t) {
          var e = Rf(t)
          if (Lf(e, Af)) return e[Af]
          var n = e.constructor
          return Cf(n) && e instanceof n ? n.prototype : e instanceof Mf ? _f : null
        },
    Nf = o,
    Ff = G,
    Df = V,
    Gf = kf,
    Uf = Jn,
    Vf = Xt('iterator'),
    Wf = !1
  ;[].keys &&
    ('next' in (Pf = [].keys()) ? (Tf = Gf(Gf(Pf))) !== Object.prototype && (Ef = Tf) : (Wf = !0))
  var zf =
    !Df(Ef) ||
    Nf(function () {
      var t = {}
      return Ef[Vf].call(t) !== t
    })
  ;(zf && (Ef = {}),
    Ff(Ef[Vf]) ||
      Uf(Ef, Vf, function () {
        return this
      }))
  var Bf = { IteratorPrototype: Ef, BUGGY_SAFARI_ITERATORS: Wf },
    qf = Bf.IteratorPrototype,
    Hf = gf,
    Jf = y,
    Yf = Oo,
    $f = Nu,
    Kf = function () {
      return this
    },
    Xf = Jr,
    Qf = f,
    Zf = G,
    ts = function (t, e, n, r) {
      var o = e + ' Iterator'
      return ((t.prototype = Hf(qf, { next: Jf(+!r, n) })), Yf(t, o, !1), ($f[o] = Kf), t)
    },
    es = kf,
    ns = mo,
    rs = Oo,
    os = We,
    is = Jn,
    cs = Nu,
    us = $e.PROPER,
    as = $e.CONFIGURABLE,
    fs = Bf.IteratorPrototype,
    ss = Bf.BUGGY_SAFARI_ITERATORS,
    ls = Xt('iterator'),
    ps = 'keys',
    hs = 'values',
    vs = 'entries',
    ds = function () {
      return this
    },
    ys = function (t, e, n, r, o, i, c) {
      ts(n, e, r)
      var u,
        a,
        f,
        s = function (t) {
          if (t === o && d) return d
          if (!ss && t && t in h) return h[t]
          switch (t) {
            case ps:
            case hs:
            case vs:
              return function () {
                return new n(this, t)
              }
          }
          return function () {
            return new n(this)
          }
        },
        l = e + ' Iterator',
        p = !1,
        h = t.prototype,
        v = h[ls] || h['@@iterator'] || (o && h[o]),
        d = (!ss && v) || s(o),
        y = ('Array' === e && h.entries) || v
      if (
        (y &&
          (u = es(y.call(new t()))) !== Object.prototype &&
          u.next &&
          (es(u) !== fs && (ns ? ns(u, fs) : Zf(u[ls]) || is(u, ls, ds)), rs(u, l, !0)),
        us &&
          o === hs &&
          v &&
          v.name !== hs &&
          (as
            ? os(h, 'name', hs)
            : ((p = !0),
              (d = function () {
                return Qf(v, this)
              }))),
        o)
      )
        if (((a = { values: s(hs), keys: i ? d : s(ps), entries: s(vs) }), c))
          for (f in a) (ss || p || !(f in h)) && is(h, f, a[f])
        else Xf({ target: e, proto: !0, forced: ss || p }, a)
      return (h[ls] !== d && is(h, ls, d, { name: o }), (cs[e] = d), a)
    },
    ms = function (t, e) {
      return { value: t, done: e }
    },
    gs = F,
    bs = function (t) {
      jf[Sf][t] = !0
    },
    ws = Nu,
    Os = En,
    Ss = je.f,
    js = ys,
    Es = ms,
    Ts = i,
    Ps = 'Array Iterator',
    xs = Os.set,
    Ls = Os.getterFor(Ps),
    Cs = js(
      Array,
      'Array',
      function (t, e) {
        xs(this, { type: Ps, target: gs(t), index: 0, kind: e })
      },
      function () {
        var t = Ls(this),
          e = t.target,
          n = t.index++
        if (!e || n >= e.length) return ((t.target = void 0), Es(void 0, !0))
        switch (t.kind) {
          case 'keys':
            return Es(n, !1)
          case 'values':
            return Es(e[n], !1)
        }
        return Es([n, e[n]], !1)
      },
      'values'
    ),
    Rs = (ws.Arguments = ws.Array)
  if ((bs('keys'), bs('values'), bs('entries'), Ts && 'values' !== Rs.name))
    try {
      Ss(Rs, 'name', { value: 'values' })
    } catch (fl) {}
  var Is = ro,
    As = String,
    Ms = function (t) {
      if ('Symbol' === Is(t)) throw new TypeError('Cannot convert a Symbol value to a string')
      return As(t)
    },
    _s = O,
    ks = Qn,
    Ns = Ms,
    Fs = _,
    Ds = _s(''.charAt),
    Gs = _s(''.charCodeAt),
    Us = _s(''.slice),
    Vs = function (t) {
      return function (e, n) {
        var r,
          o,
          i = Ns(Fs(e)),
          c = ks(n),
          u = i.length
        return c < 0 || c >= u
          ? t
            ? ''
            : void 0
          : (r = Gs(i, c)) < 55296 ||
              r > 56319 ||
              c + 1 === u ||
              (o = Gs(i, c + 1)) < 56320 ||
              o > 57343
            ? t
              ? Ds(i, c)
              : r
            : t
              ? Us(i, c, c + 2)
              : o - 56320 + ((r - 55296) << 10) + 65536
      }
    },
    Ws = { codeAt: Vs(!1), charAt: Vs(!0) }.charAt,
    zs = Ms,
    Bs = En,
    qs = ys,
    Hs = ms,
    Js = 'String Iterator',
    Ys = Bs.set,
    $s = Bs.getterFor(Js)
  qs(
    String,
    'String',
    function (t) {
      Ys(this, { type: Js, string: zs(t), index: 0 })
    },
    function () {
      var t,
        e = $s(this),
        n = e.string,
        r = e.index
      return r >= n.length ? Hs(void 0, !0) : ((t = Ws(n, r)), (e.index += t.length), Hs(t, !1))
    }
  )
  var Ks = le('span').classList,
    Xs = Ks && Ks.constructor && Ks.constructor.prototype,
    Qs = Xs === Object.prototype ? void 0 : Xs,
    Zs = n,
    tl = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
    el = Qs,
    nl = Cs,
    rl = We,
    ol = Oo,
    il = Xt('iterator'),
    cl = nl.values,
    ul = function (t, e) {
      if (t) {
        if (t[il] !== cl)
          try {
            rl(t, il, cl)
          } catch (fl) {
            t[il] = cl
          }
        if ((ol(t, e, !0), tl[e]))
          for (var n in nl)
            if (t[n] !== nl[n])
              try {
                rl(t, n, nl[n])
              } catch (fl) {
                t[n] = nl[n]
              }
      }
    }
  for (var al in tl) ul(Zs[al] && Zs[al].prototype, al)
  ;(ul(el, 'DOMTokenList'),
    (function () {
      function e(t, e) {
        return (
          (e || '') +
          ' (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#' +
          t +
          ')'
        )
      }
      function n(t, e) {
        if ((-1 !== t.indexOf('\\') && (t = t.replace(E, '/')), '/' === t[0] && '/' === t[1]))
          return e.slice(0, e.indexOf(':') + 1) + t
        if (
          ('.' === t[0] &&
            ('/' === t[1] ||
              ('.' === t[1] && ('/' === t[2] || (2 === t.length && (t += '/')))) ||
              (1 === t.length && (t += '/')))) ||
          '/' === t[0]
        ) {
          var n,
            r = e.slice(0, e.indexOf(':') + 1)
          if (
            ((n =
              '/' === e[r.length + 1]
                ? 'file:' !== r
                  ? (n = e.slice(r.length + 2)).slice(n.indexOf('/') + 1)
                  : e.slice(8)
                : e.slice(r.length + ('/' === e[r.length]))),
            '/' === t[0])
          )
            return e.slice(0, e.length - n.length - 1) + t
          for (
            var o = n.slice(0, n.lastIndexOf('/') + 1) + t, i = [], c = -1, u = 0;
            u < o.length;
            u++
          )
            -1 !== c
              ? '/' === o[u] && (i.push(o.slice(c, u + 1)), (c = -1))
              : '.' === o[u]
                ? '.' !== o[u + 1] || ('/' !== o[u + 2] && u + 2 !== o.length)
                  ? '/' === o[u + 1] || u + 1 === o.length
                    ? (u += 1)
                    : (c = u)
                  : (i.pop(), (u += 2))
                : (c = u)
          return (-1 !== c && i.push(o.slice(c)), e.slice(0, e.length - n.length) + i.join(''))
        }
      }
      function r(t, e) {
        return n(t, e) || (-1 !== t.indexOf(':') ? t : n('./' + t, e))
      }
      function o(t, e, r, o, i) {
        for (var c in t) {
          var u = n(c, r) || c,
            s = t[c]
          if ('string' == typeof s) {
            var l = f(o, n(s, r) || s, i)
            l ? (e[u] = l) : a('W1', c, s)
          }
        }
      }
      function i(t, e, n) {
        var i
        for (i in (t.imports && o(t.imports, n.imports, e, n, null), t.scopes || {})) {
          var c = r(i, e)
          o(t.scopes[i], n.scopes[c] || (n.scopes[c] = {}), e, n, c)
        }
        for (i in t.depcache || {}) n.depcache[r(i, e)] = t.depcache[i]
        for (i in t.integrity || {}) n.integrity[r(i, e)] = t.integrity[i]
      }
      function c(t, e) {
        if (e[t]) return t
        var n = t.length
        do {
          var r = t.slice(0, n + 1)
          if (r in e) return r
        } while (-1 !== (n = t.lastIndexOf('/', n - 1)))
      }
      function u(t, e) {
        var n = c(t, e)
        if (n) {
          var r = e[n]
          if (null === r) return
          if (!(t.length > n.length && '/' !== r[r.length - 1])) return r + t.slice(n.length)
          a('W2', n, r)
        }
      }
      function a(t, n, r) {
        console.warn(e(t, [r, n].join(', ')))
      }
      function f(t, e, n) {
        for (var r = t.scopes, o = n && c(n, r); o; ) {
          var i = u(e, r[o])
          if (i) return i
          o = c(o.slice(0, o.lastIndexOf('/')), r)
        }
        return u(e, t.imports) || (-1 !== e.indexOf(':') && e)
      }
      function s() {
        this[P] = {}
      }
      function l(t, n, r, o) {
        var i = t[P][n]
        if (i) return i
        var c = [],
          u = Object.create(null)
        T && Object.defineProperty(u, T, { value: 'Module' })
        var a = Promise.resolve()
            .then(function () {
              return t.instantiate(n, r, o)
            })
            .then(
              function (r) {
                if (!r) throw Error(e(2, n))
                var o = r[1](
                  function (t, e) {
                    i.h = !0
                    var n = !1
                    if ('string' == typeof t) (t in u && u[t] === e) || ((u[t] = e), (n = !0))
                    else {
                      for (var r in t)
                        ((e = t[r]), (r in u && u[r] === e) || ((u[r] = e), (n = !0)))
                      t && t.__esModule && (u.__esModule = t.__esModule)
                    }
                    if (n)
                      for (var o = 0; o < c.length; o++) {
                        var a = c[o]
                        a && a(u)
                      }
                    return e
                  },
                  2 === r[1].length
                    ? {
                        import: function (e, r) {
                          return t.import(e, n, r)
                        },
                        meta: t.createContext(n)
                      }
                    : void 0
                )
                return ((i.e = o.execute || function () {}), [r[0], o.setters || [], r[2] || []])
              },
              function (t) {
                throw ((i.e = null), (i.er = t), t)
              }
            ),
          f = a.then(function (e) {
            return Promise.all(
              e[0].map(function (r, o) {
                var i = e[1][o],
                  c = e[2][o]
                return Promise.resolve(t.resolve(r, n)).then(function (e) {
                  var r = l(t, e, n, c)
                  return Promise.resolve(r.I).then(function () {
                    return (i && (r.i.push(i), (!r.h && r.I) || i(r.n)), r)
                  })
                })
              })
            ).then(function (t) {
              i.d = t
            })
          })
        return (i = t[P][n] =
          {
            id: n,
            i: c,
            n: u,
            m: o,
            I: a,
            L: f,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0
          })
      }
      function p(t, e, n, r) {
        if (!r[e.id])
          return (
            (r[e.id] = !0),
            Promise.resolve(e.L)
              .then(function () {
                return (
                  (e.p && null !== e.p.e) || (e.p = n),
                  Promise.all(
                    e.d.map(function (e) {
                      return p(t, e, n, r)
                    })
                  )
                )
              })
              .catch(function (t) {
                if (e.er) throw t
                throw ((e.e = null), t)
              })
          )
      }
      function h(t, e) {
        return (e.C = p(t, e, e, {})
          .then(function () {
            return v(t, e, {})
          })
          .then(function () {
            return e.n
          }))
      }
      function v(t, e, n) {
        function r() {
          try {
            var t = i.call(L)
            if (t)
              return (
                (t = t.then(
                  function () {
                    ;((e.C = e.n), (e.E = null))
                  },
                  function (t) {
                    throw ((e.er = t), (e.E = null), t)
                  }
                )),
                (e.E = t)
              )
            ;((e.C = e.n), (e.L = e.I = void 0))
          } catch (n) {
            throw ((e.er = n), n)
          }
        }
        if (!n[e.id]) {
          if (((n[e.id] = !0), !e.e)) {
            if (e.er) throw e.er
            return e.E ? e.E : void 0
          }
          var o,
            i = e.e
          return (
            (e.e = null),
            e.d.forEach(function (r) {
              try {
                var i = v(t, r, n)
                i && (o = o || []).push(i)
              } catch (u) {
                throw ((e.er = u), u)
              }
            }),
            o ? Promise.all(o).then(r) : r()
          )
        }
      }
      function d() {
        ;[].forEach.call(document.querySelectorAll('script'), function (t) {
          if (!t.sp)
            if ('systemjs-module' === t.type) {
              if (((t.sp = !0), !t.src)) return
              System.import('import:' === t.src.slice(0, 7) ? t.src.slice(7) : r(t.src, y)).catch(
                function (e) {
                  if (
                    e.message.indexOf(
                      'https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3'
                    ) > -1
                  ) {
                    var n = document.createEvent('Event')
                    ;(n.initEvent('error', !1, !1), t.dispatchEvent(n))
                  }
                  return Promise.reject(e)
                }
              )
            } else if ('systemjs-importmap' === t.type) {
              t.sp = !0
              var n = t.src
                ? (System.fetch || fetch)(t.src, { integrity: t.integrity, passThrough: !0 })
                    .then(function (t) {
                      if (!t.ok) throw Error(t.status)
                      return t.text()
                    })
                    .catch(function (n) {
                      return (
                        (n.message = e('W4', t.src) + '\n' + n.message),
                        console.warn(n),
                        'function' == typeof t.onerror && t.onerror(),
                        '{}'
                      )
                    })
                : t.innerHTML
              I = I.then(function () {
                return n
              }).then(function (n) {
                !(function (t, n, r) {
                  var o = {}
                  try {
                    o = JSON.parse(n)
                  } catch (u) {
                    console.warn(Error(e('W5')))
                  }
                  i(o, r, t)
                })(A, n, t.src || y)
              })
            }
        })
      }
      var y,
        m = 'undefined' != typeof Symbol,
        g = 'undefined' != typeof self,
        b = 'undefined' != typeof document,
        w = g ? self : t
      if (b) {
        var O = document.querySelector('base[href]')
        O && (y = O.href)
      }
      if (!y && 'undefined' != typeof location) {
        var S = (y = location.href.split('#')[0].split('?')[0]).lastIndexOf('/')
        ;-1 !== S && (y = y.slice(0, S + 1))
      }
      var j,
        E = /\\/g,
        T = m && Symbol.toStringTag,
        P = m ? Symbol() : '@',
        x = s.prototype
      ;((x.import = function (t, e, n) {
        var r = this
        return (
          e && 'object' == typeof e && ((n = e), (e = void 0)),
          Promise.resolve(r.prepareImport())
            .then(function () {
              return r.resolve(t, e, n)
            })
            .then(function (t) {
              var e = l(r, t, void 0, n)
              return e.C || h(r, e)
            })
        )
      }),
        (x.createContext = function (t) {
          var e = this
          return {
            url: t,
            resolve: function (n, r) {
              return Promise.resolve(e.resolve(n, r || t))
            }
          }
        }),
        (x.register = function (t, e, n) {
          j = [t, e, n]
        }),
        (x.getRegister = function () {
          var t = j
          return ((j = void 0), t)
        }))
      var L = Object.freeze(Object.create(null))
      w.System = new s()
      var C,
        R,
        I = Promise.resolve(),
        A = { imports: {}, scopes: {}, depcache: {}, integrity: {} },
        M = b
      if (
        ((x.prepareImport = function (t) {
          return ((M || t) && (d(), (M = !1)), I)
        }),
        b && (d(), window.addEventListener('DOMContentLoaded', d)),
        (x.addImportMap = function (t, e) {
          i(t, e || y, A)
        }),
        b)
      ) {
        window.addEventListener('error', function (t) {
          ;((k = t.filename), (N = t.error))
        })
        var _ = location.origin
      }
      x.createScript = function (t) {
        var e = document.createElement('script')
        ;((e.async = !0), t.indexOf(_ + '/') && (e.crossOrigin = 'anonymous'))
        var n = A.integrity[t]
        return (n && (e.integrity = n), (e.src = t), e)
      }
      var k,
        N,
        F = {},
        D = x.register
      ;((x.register = function (t, e) {
        if (b && 'loading' === document.readyState && 'string' != typeof t) {
          var n = document.querySelectorAll('script[src]'),
            r = n[n.length - 1]
          if (r) {
            C = t
            var o = this
            R = setTimeout(function () {
              ;((F[r.src] = [t, e]), o.import(r.src))
            })
          }
        } else C = void 0
        return D.call(this, t, e)
      }),
        (x.instantiate = function (t, n) {
          var r = F[t]
          if (r) return (delete F[t], r)
          var o = this
          return Promise.resolve(x.createScript(t)).then(function (r) {
            return new Promise(function (i, c) {
              ;(r.addEventListener('error', function () {
                c(Error(e(3, [t, n].join(', '))))
              }),
                r.addEventListener('load', function () {
                  if ((document.head.removeChild(r), k === t)) c(N)
                  else {
                    var e = o.getRegister(t)
                    ;(e && e[0] === C && clearTimeout(R), i(e))
                  }
                }),
                document.head.appendChild(r))
            })
          })
        }),
        (x.shouldFetch = function () {
          return !1
        }),
        'undefined' != typeof fetch && (x.fetch = fetch))
      var G = x.instantiate,
        U = /^(text|application)\/(x-)?javascript(;|$)/
      ;((x.instantiate = function (t, n, r) {
        var o = this
        return this.shouldFetch(t, n, r)
          ? this.fetch(t, { credentials: 'same-origin', integrity: A.integrity[t], meta: r }).then(
              function (r) {
                if (!r.ok) throw Error(e(7, [r.status, r.statusText, t, n].join(', ')))
                var i = r.headers.get('content-type')
                if (!i || !U.test(i)) throw Error(e(4, i))
                return r.text().then(function (e) {
                  return (
                    e.indexOf('//# sourceURL=') < 0 && (e += '\n//# sourceURL=' + t),
                    (0, eval)(e),
                    o.getRegister(t)
                  )
                })
              }
            )
          : G.apply(this, arguments)
      }),
        (x.resolve = function (t, r) {
          return (
            f(A, n(t, (r = r || y)) || t, r) ||
            (function (t, n) {
              throw Error(e(8, [t, n].join(', ')))
            })(t, r)
          )
        }))
      var V = x.instantiate
      ;((x.instantiate = function (t, e, n) {
        var r = A.depcache[t]
        if (r) for (var o = 0; o < r.length; o++) l(this, this.resolve(r[o], t), t)
        return V.call(this, t, e, n)
      }),
        g &&
          'function' == typeof importScripts &&
          (x.instantiate = function (t) {
            var e = this
            return Promise.resolve().then(function () {
              return (importScripts(t), e.getRegister(t))
            })
          }))
    })())
})()
