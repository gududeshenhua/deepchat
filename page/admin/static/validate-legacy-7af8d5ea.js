System.register([], function (t, e) {
  'use strict'
  return {
    execute: function () {
      ;(t('i', function (t) {
        return /^(https?:|mailto:|tel:)/.test(t)
      }),
        t('a', function (t) {
          return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)
        }))
    }
  }
})
