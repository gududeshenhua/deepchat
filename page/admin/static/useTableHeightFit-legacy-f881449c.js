System.register(['./element-legacy-e7b6e573.js', './vue-legacy-7e5c1e5b.js'], function (e, t) {
  'use strict'
  var n, u
  return {
    setters: [
      function (e) {
        n = e.e
      },
      function (e) {
        u = e.r
      }
    ],
    execute: function () {
      e('u', function () {
        return { cTable: t, maxHeight: l, handleGetTableHeight: i }
      })
      var t = u(null),
        l = u(300),
        i = n(function () {
          var e = 240
          t.value &&
            t.value.$el.getBoundingClientRect() &&
            (e = t.value.$el.getBoundingClientRect().top + 80)
          var n = document.getElementById('app').clientHeight
          ;((n -= e), (l.value = n))
        }, 100)
    }
  }
})
