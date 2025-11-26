!(function () {
  function r(r, n) {
    return (
      (function (r) {
        if (Array.isArray(r)) return r
      })(r) ||
      (function (r, t) {
        var n =
          null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator']
        if (null != n) {
          var e,
            o,
            l,
            a,
            u = [],
            i = !0,
            c = !1
          try {
            if (((l = (n = n.call(r)).next), 0 === t)) {
              if (Object(n) !== n) return
              i = !1
            } else for (; !(i = (e = l.call(n)).done) && (u.push(e.value), u.length !== t); i = !0);
          } catch (r) {
            ;((c = !0), (o = r))
          } finally {
            try {
              if (!i && null != n.return && ((a = n.return()), Object(a) !== a)) return
            } finally {
              if (c) throw o
            }
          }
          return u
        }
      })(r, n) ||
      (function (r, n) {
        if (!r) return
        if ('string' == typeof r) return t(r, n)
        var e = Object.prototype.toString.call(r).slice(8, -1)
        'Object' === e && r.constructor && (e = r.constructor.name)
        if ('Map' === e || 'Set' === e) return Array.from(r)
        if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return t(r, n)
      })(r, n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function t(r, t) {
    ;(null == t || t > r.length) && (t = r.length)
    for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n]
    return e
  }
  System.register(['./vue-legacy-7e5c1e5b.js', './index-legacy-0fcb45ef.js'], function (t, n) {
    'use strict'
    var e, o, l, a, u, i, c, s, f
    return {
      setters: [
        function (r) {
          ;((e = r.y), (o = r.N), (l = r.T))
        },
        function (r) {
          ;((a = r.c), (u = r.t), (i = r.j), (c = r.H), (s = r.I), (f = r.w))
        }
      ],
      execute: function () {
        var n = r(a('tag'), 2),
          y = n[0],
          p = n[1],
          d = {
            size: String,
            mark: Boolean,
            show: u,
            type: i('default'),
            color: String,
            plain: Boolean,
            round: Boolean,
            textColor: String,
            closeable: Boolean
          },
          m = e({
            name: y,
            props: d,
            emits: ['close'],
            setup: function (r, t) {
              var n = t.slots,
                e = t.emit,
                a = function (r) {
                  ;(r.stopPropagation(), e('close', r))
                },
                u = function () {
                  var t,
                    e = r.type,
                    l = r.mark,
                    u = r.plain,
                    i = r.round,
                    f = r.size,
                    y = r.closeable,
                    d = { mark: l, plain: u, round: i }
                  f && (d[f] = f)
                  var m = y && o(s, { name: 'cross', class: [p('close'), c], onClick: a }, null)
                  return o(
                    'span',
                    {
                      style: r.plain
                        ? { color: r.textColor || r.color, borderColor: r.color }
                        : { color: r.textColor, background: r.color },
                      class: p([d, e])
                    },
                    [null == (t = n.default) ? void 0 : t.call(n), m]
                  )
                }
              return function () {
                return o(
                  l,
                  { name: r.closeable ? 'van-fade' : void 0 },
                  {
                    default: function () {
                      return [r.show ? u() : null]
                    }
                  }
                )
              }
            }
          })
        t('T', f(m))
      }
    }
  })
})()
