System.register(['./vue-legacy-7e5c1e5b.js'], function (e, s) {
  'use strict'
  var t, n
  return {
    setters: [
      function (e) {
        ;((t = e.ap), (n = e.r))
      }
    ],
    execute: function () {
      e(
        'u',
        t('selectedInstances', function () {
          var e = n(JSON.parse(sessionStorage.getItem('selectedPadCodes') || '[]'))
          return {
            selectedPadCodes: e,
            setSelectedPadCodes: function (s) {
              ;(sessionStorage.setItem('selectedPadCodes', JSON.stringify(s)), (e.value = s))
            },
            clearSelectedPadCodes: function () {
              ;(sessionStorage.removeItem('selectedPadCodes'), (e.value = []))
            }
          }
        })
      )
    }
  }
})
