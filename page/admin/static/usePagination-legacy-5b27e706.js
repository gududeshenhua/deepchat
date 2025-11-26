!(function () {
  function e(t) {
    return (
      (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }),
      e(t)
    )
  }
  function t(e, t) {
    var r = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e)
      ;(t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        r.push.apply(r, n))
    }
    return r
  }
  function r(e) {
    for (var r = 1; r < arguments.length; r++) {
      var o = null != arguments[r] ? arguments[r] : {}
      r % 2
        ? t(Object(o), !0).forEach(function (t) {
            n(e, t, o[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : t(Object(o)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            })
    }
    return e
  }
  function n(t, r, n) {
    var o
    return (
      (o = (function (t, r) {
        if ('object' != e(t) || !t) return t
        var n = t[Symbol.toPrimitive]
        if (void 0 !== n) {
          var o = n.call(t, r || 'default')
          if ('object' != e(o)) return o
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === r ? String : Number)(t)
      })(r, 'string')),
      (r = 'symbol' == e(o) ? o : String(o)) in t
        ? Object.defineProperty(t, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[r] = n),
      t
    )
  }
  System.register(['./vue-legacy-7e5c1e5b.js'], function (e, t) {
    'use strict'
    var n, o
    return {
      setters: [
        function (e) {
          ;((n = e.r), (o = e.R))
        }
      ],
      execute: function () {
        e('u', function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = n(0),
            u = o(r(r({}, t), e))
          return {
            tableKey: i,
            paginationData: u,
            handleCurrentChange: function (e) {
              ;(i.value++, (u.currentPage = e))
            },
            handleSizeChange: function (e) {
              ;(i.value++, (u.pageSize = e))
            }
          }
        })
        var t = {
          total: 0,
          currentPage: 1,
          pageSizes: [10, 20, 50, 100],
          pageSize: 10,
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      }
    }
  })
})()
