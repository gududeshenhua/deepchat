System.register(['./index-legacy-d4b804d0.js'], function (e, r) {
  'use strict'
  var n
  return {
    setters: [
      function (e) {
        n = e.p
      }
    ],
    execute: function () {
      e('c', function (e) {
        return Array.isArray(e) && e.length > 0
          ? n().pageRoles.some(function (r) {
              return e.includes(r)
            })
          : (console.error("need roles! Like checkPermission(['admin','editor'])"), !1)
      })
    }
  }
})
