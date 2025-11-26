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
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e)
      ;(t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r))
    }
    return n
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {}
      n % 2
        ? t(Object(o), !0).forEach(function (t) {
            r(e, t, o[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : t(Object(o)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            })
    }
    return e
  }
  function r(t, n, r) {
    var o
    return (
      (o = (function (t, n) {
        if ('object' != e(t) || !t) return t
        var r = t[Symbol.toPrimitive]
        if (void 0 !== r) {
          var o = r.call(t, n || 'default')
          if ('object' != e(o)) return o
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === n ? String : Number)(t)
      })(n, 'string')),
      (n = 'symbol' == e(o) ? o : String(o)) in t
        ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (t[n] = r),
      t
    )
  }
  System.register(['./index-legacy-d4b804d0.js'], function (e, t) {
    'use strict'
    var r
    return {
      setters: [
        function (e) {
          r = e.q
        }
      ],
      execute: function () {
        e({
          a: function (e) {
            return r({
              url: '/openapi/open/pad/v2/net/storage/batch/off',
              method: 'POST',
              sign: !0,
              data: e
            })
          },
          b: function (e) {
            return r({
              url: '/openapi/open/pad/v2/net/storage/batch/delete',
              method: 'POST',
              sign: !0,
              data: e
            })
          },
          c: function (e) {
            return r({
              url: '/openapi/open/pad/v2/net/storage/batch/boot/on',
              method: 'POST',
              sign: !0,
              data: e
            })
          },
          d: function () {
            return r({
              url: '/resellers/sub-users/latest-images',
              method: 'GET',
              baseURL: '/cpyservice'
            })
          },
          e: function (e) {
            return r({ url: '/openapi/open/pad/asyncCmd', method: 'POST', sign: !0, data: e })
          },
          f: function (e) {
            return r({ url: '/instances/', method: 'post', data: e, baseURL: '/cpyservice' })
          },
          g: function (e) {
            return r({
              url: '/instances/query?page='
                .concat(e.page ? e.page : 1, '&page_size=')
                .concat(e.page_size ? e.page_size : 100),
              method: 'post',
              data: e,
              baseURL: '/cpyservice'
            })
          },
          h: function (e) {
            return r({
              url: '/openapi/open/pad/getLongGenerateUrl',
              method: 'POST',
              sign: !0,
              data: e
            })
          },
          i: function (e) {
            return r({ url: '/openapi/open/pad/restart', method: 'POST', sign: !0, data: e })
          },
          j: function (e) {
            return r({ url: '/rtc/open/room/dissolveRoom', method: 'POST', sign: !0, data: e })
          },
          k: function (e) {
            return r({
              url: '/openapi/open/token/stsTokenByPadCode',
              method: 'POST',
              sign: !0,
              data: e
            })
          },
          l: function (e) {
            return r({ url: '/openapi/open/pad/updateTimeZone', method: 'POST', sign: !0, data: e })
          },
          m: function (e) {
            return r({ url: '/openapi/open/pad/updateLanguage', method: 'POST', sign: !0, data: e })
          },
          n: function (e) {
            return r({ url: '/openapi/open/pad/gpsInjectInfo', method: 'POST', sign: !0, data: e })
          },
          o: function (e) {
            return r({ url: '/openapi/open/pad/adb', method: 'POST', sign: !0, data: e })
          },
          p: function (e) {
            return r({ url: '/openapi/open/pad/padDetails', method: 'POST', sign: !0, data: e })
          },
          q: function (e) {
            return r({
              url: '/openapi/open/pad/infos',
              method: 'POST',
              sign: !0,
              data: n(n({}, e), {}, { orderBy: 'CreateTime_DESC' })
            })
          },
          r: function (e) {
            return r({
              url: '/instances/bulk_delete',
              method: 'POST',
              data: e,
              baseURL: '/cpyservice'
            })
          },
          s: function (e) {
            return r({ url: '/openapi/open/network/proxy/set', method: 'POST', sign: !0, data: e })
          },
          t: function (e) {
            return r({
              url: '/openapi/open/pad/virtualRealSwitch',
              method: 'POST',
              sign: !0,
              data: e
            })
          },
          u: function (e) {
            return r({ url: '/instances/', method: 'put', data: e, baseURL: '/cpyservice' })
          }
        })
      }
    }
  })
})()
