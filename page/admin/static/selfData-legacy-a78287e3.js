!(function () {
  function e(a) {
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
      e(a)
    )
  }
  function a() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ a =
      function () {
        return n
      }
    var t,
      n = {},
      r = Object.prototype,
      l = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, a, t) {
          e[a] = t.value
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      u = i.iterator || '@@iterator',
      s = i.asyncIterator || '@@asyncIterator',
      c = i.toStringTag || '@@toStringTag'
    function f(e, a, t) {
      return (
        Object.defineProperty(e, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }),
        e[a]
      )
    }
    try {
      f({}, '')
    } catch (t) {
      f = function (e, a, t) {
        return (e[a] = t)
      }
    }
    function d(e, a, t, n) {
      var r = a && a.prototype instanceof y ? a : y,
        l = Object.create(r.prototype),
        i = new T(n || [])
      return (o(l, '_invoke', { value: V(e, t, i) }), l)
    }
    function m(e, a, t) {
      try {
        return { type: 'normal', arg: e.call(a, t) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    n.wrap = d
    var p = 'suspendedStart',
      g = 'suspendedYield',
      h = 'executing',
      v = 'completed',
      b = {}
    function y() {}
    function w() {}
    function _() {}
    var x = {}
    f(x, u, function () {
      return this
    })
    var k = Object.getPrototypeOf,
      D = k && k(k(C([])))
    D && D !== r && l.call(D, u) && (x = D)
    var M = (_.prototype = y.prototype = Object.create(x))
    function E(e) {
      ;['next', 'throw', 'return'].forEach(function (a) {
        f(e, a, function (e) {
          return this._invoke(a, e)
        })
      })
    }
    function L(a, t) {
      function n(r, o, i, u) {
        var s = m(a[r], a, o)
        if ('throw' !== s.type) {
          var c = s.arg,
            f = c.value
          return f && 'object' == e(f) && l.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, u)
                },
                function (e) {
                  n('throw', e, i, u)
                }
              )
            : t.resolve(f).then(
                function (e) {
                  ;((c.value = e), i(c))
                },
                function (e) {
                  return n('throw', e, i, u)
                }
              )
        }
        u(s.arg)
      }
      var r
      o(this, '_invoke', {
        value: function (e, a) {
          function l() {
            return new t(function (t, r) {
              n(e, a, t, r)
            })
          }
          return (r = r ? r.then(l, l) : l())
        }
      })
    }
    function V(e, a, n) {
      var r = p
      return function (l, o) {
        if (r === h) throw new Error('Generator is already running')
        if (r === v) {
          if ('throw' === l) throw o
          return { value: t, done: !0 }
        }
        for (n.method = l, n.arg = o; ; ) {
          var i = n.delegate
          if (i) {
            var u = P(i, n)
            if (u) {
              if (u === b) continue
              return u
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg
          else if ('throw' === n.method) {
            if (r === p) throw ((r = v), n.arg)
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg)
          r = h
          var s = m(e, a, n)
          if ('normal' === s.type) {
            if (((r = n.done ? v : g), s.arg === b)) continue
            return { value: s.arg, done: n.done }
          }
          'throw' === s.type && ((r = v), (n.method = 'throw'), (n.arg = s.arg))
        }
      }
    }
    function P(e, a) {
      var n = a.method,
        r = e.iterator[n]
      if (r === t)
        return (
          (a.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((a.method = 'return'), (a.arg = t), P(e, a), 'throw' === a.method)) ||
            ('return' !== n &&
              ((a.method = 'throw'),
              (a.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          b
        )
      var l = m(r, e.iterator, a.arg)
      if ('throw' === l.type) return ((a.method = 'throw'), (a.arg = l.arg), (a.delegate = null), b)
      var o = l.arg
      return o
        ? o.done
          ? ((a[e.resultName] = o.value),
            (a.next = e.nextLoc),
            'return' !== a.method && ((a.method = 'next'), (a.arg = t)),
            (a.delegate = null),
            b)
          : o
        : ((a.method = 'throw'),
          (a.arg = new TypeError('iterator result is not an object')),
          (a.delegate = null),
          b)
    }
    function S(e) {
      var a = { tryLoc: e[0] }
      ;(1 in e && (a.catchLoc = e[1]),
        2 in e && ((a.finallyLoc = e[2]), (a.afterLoc = e[3])),
        this.tryEntries.push(a))
    }
    function U(e) {
      var a = e.completion || {}
      ;((a.type = 'normal'), delete a.arg, (e.completion = a))
    }
    function T(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(S, this), this.reset(!0))
    }
    function C(a) {
      if (a || '' === a) {
        var n = a[u]
        if (n) return n.call(a)
        if ('function' == typeof a.next) return a
        if (!isNaN(a.length)) {
          var r = -1,
            o = function e() {
              for (; ++r < a.length; ) if (l.call(a, r)) return ((e.value = a[r]), (e.done = !1), e)
              return ((e.value = t), (e.done = !0), e)
            }
          return (o.next = o)
        }
      }
      throw new TypeError(e(a) + ' is not iterable')
    }
    return (
      (w.prototype = _),
      o(M, 'constructor', { value: _, configurable: !0 }),
      o(_, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = f(_, c, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (e) {
        var a = 'function' == typeof e && e.constructor
        return !!a && (a === w || 'GeneratorFunction' === (a.displayName || a.name))
      }),
      (n.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, _)
            : ((e.__proto__ = _), f(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(M)),
          e
        )
      }),
      (n.awrap = function (e) {
        return { __await: e }
      }),
      E(L.prototype),
      f(L.prototype, s, function () {
        return this
      }),
      (n.AsyncIterator = L),
      (n.async = function (e, a, t, r, l) {
        void 0 === l && (l = Promise)
        var o = new L(d(e, a, t, r), l)
        return n.isGeneratorFunction(a)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next()
            })
      }),
      E(M),
      f(M, c, 'Generator'),
      f(M, u, function () {
        return this
      }),
      f(M, 'toString', function () {
        return '[object Generator]'
      }),
      (n.keys = function (e) {
        var a = Object(e),
          t = []
        for (var n in a) t.push(n)
        return (
          t.reverse(),
          function e() {
            for (; t.length; ) {
              var n = t.pop()
              if (n in a) return ((e.value = n), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (n.values = C),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(U),
            !e)
          )
            for (var a in this)
              't' === a.charAt(0) && l.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = t)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var a = this
          function n(n, r) {
            return (
              (i.type = 'throw'),
              (i.arg = e),
              (a.next = n),
              r && ((a.method = 'next'), (a.arg = t)),
              !!r
            )
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r],
              i = o.completion
            if ('root' === o.tryLoc) return n('end')
            if (o.tryLoc <= this.prev) {
              var u = l.call(o, 'catchLoc'),
                s = l.call(o, 'finallyLoc')
              if (u && s) {
                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
              } else if (u) {
                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
              } else {
                if (!s) throw new Error('try statement without catch or finally')
                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, a) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc <= this.prev && l.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var r = n
              break
            }
          }
          r &&
            ('break' === e || 'continue' === e) &&
            r.tryLoc <= a &&
            a <= r.finallyLoc &&
            (r = null)
          var o = r ? r.completion : {}
          return (
            (o.type = e),
            (o.arg = a),
            r ? ((this.method = 'next'), (this.next = r.finallyLoc), b) : this.complete(o)
          )
        },
        complete: function (e, a) {
          if ('throw' === e.type) throw e.arg
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && a && (this.next = a),
            b
          )
        },
        finish: function (e) {
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var t = this.tryEntries[a]
            if (t.finallyLoc === e) return (this.complete(t.completion, t.afterLoc), U(t), b)
          }
        },
        catch: function (e) {
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var t = this.tryEntries[a]
            if (t.tryLoc === e) {
              var n = t.completion
              if ('throw' === n.type) {
                var r = n.arg
                U(t)
              }
              return r
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, a, n) {
          return (
            (this.delegate = { iterator: C(e), resultName: a, nextLoc: n }),
            'next' === this.method && (this.arg = t),
            b
          )
        }
      }),
      n
    )
  }
  function t(e, a, t, n, r, l, o) {
    try {
      var i = e[l](o),
        u = i.value
    } catch (s) {
      return void t(s)
    }
    i.done ? a(u) : Promise.resolve(u).then(n, r)
  }
  function n(e) {
    return function () {
      var a = this,
        n = arguments
      return new Promise(function (r, l) {
        var o = e.apply(a, n)
        function i(e) {
          t(o, r, l, i, u, 'next', e)
        }
        function u(e) {
          t(o, r, l, i, u, 'throw', e)
        }
        i(void 0)
      })
    }
  }
  System.register(
    [
      './element-legacy-e7b6e573.js',
      './index-legacy-d4b804d0.js',
      './vue-legacy-7e5c1e5b.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (e, t) {
      'use strict'
      var r, l, o, i, u, s, c, f, d, m, p, g, h, v, b, y, w, _, x, k, D, M, E, L, V
      return {
        setters: [
          function (e) {
            ;((r = e.L), (l = e.H), (o = e.E), (i = e.G))
          },
          function (e) {
            ;((u = e.q), (s = e.h), (c = e._))
          },
          function (e) {
            ;((f = e.y),
              (d = e.r),
              (m = e.R),
              (p = e.e),
              (g = e.b),
              (h = e.a8),
              (v = e.ag),
              (b = e.f),
              (y = e.h),
              (w = e.N),
              (_ = e.H),
              (x = e.L),
              (k = e.M),
              (D = e.u),
              (M = e.I),
              (E = e.G),
              (L = e.i),
              (V = e.K))
          },
          null
        ],
        execute: function () {
          var t = document.createElement('style')
          function P(e) {
            return u({ url: '/user/selfdata/', method: 'GET', params: e, baseURL: '/cpyservice' })
          }
          function S(e) {
            return u({
              url: '/user/selfdata/',
              method: 'POST',
              data: e,
              headers: { 'Content-Type': 'multipart/form-data' },
              baseURL: '/cpyservice'
            })
          }
          function U() {
            return u({
              url: '/user/selfdata/download-excel-template/',
              method: 'GET',
              responseType: 'blob',
              baseURL: '/cpyservice'
            })
          }
          function T(e, a) {
            return u({
              url: '/user/selfdata/'.concat(e),
              method: 'PUT',
              data: a,
              baseURL: '/cpyservice'
            })
          }
          function C(e, a) {
            return u({
              url: '/user/selfdata/update-status-by-ids',
              method: 'POST',
              data: { ids: e, status: a },
              baseURL: '/cpyservice'
            })
          }
          ;((t.textContent =
            '.self-data-container[data-v-73a3b5f8]{padding:20px}.self-data-container .search-container[data-v-73a3b5f8]{margin-bottom:20px;padding:20px;background:#fff;border-radius:4px}.self-data-container .pagination-container[data-v-73a3b5f8]{margin-top:20px;text-align:right}.self-data-container .email-info .email-item[data-v-73a3b5f8]{margin-bottom:4px;line-height:1.4}.self-data-container .email-info .email-item[data-v-73a3b5f8]:last-child{margin-bottom:0}.self-data-container .email-info .email-item .email-label[data-v-73a3b5f8]{font-weight:500;color:#606266;margin-right:4px}.self-data-container .email-info .email-item .email-value[data-v-73a3b5f8]{color:#409eff;margin-right:4px}.self-data-container .email-info .email-item .email-password[data-v-73a3b5f8]{color:#67c23a;font-size:12px}.self-data-container .email-info .no-email[data-v-73a3b5f8]{color:#909399;font-style:italic}\n'),
            document.head.appendChild(t))
          var j = { class: 'self-data-container' },
            O = { class: 'email-info' },
            F = { key: 0, class: 'email-item' },
            R = { class: 'email-label' },
            z = { class: 'email-value' },
            N = { key: 0, class: 'email-password' },
            G = { key: 1, class: 'email-item' },
            I = { class: 'email-label' },
            q = { class: 'email-value' },
            B = { key: 0, class: 'email-password' },
            A = { key: 2, class: 'email-item' },
            H = { class: 'email-label' },
            Y = { class: 'email-value' },
            K = { key: 0, class: 'email-password' },
            J = { key: 3, class: 'no-email' },
            Q = { class: 'pagination-container' },
            W = { class: 'el-upload__text' },
            X = { class: 'el-upload__tip' },
            Z = f({
              __name: 'selfData',
              setup: function (e) {
                var t = s().t,
                  u = d(!1),
                  c = d([]),
                  f = d([])
                m({ id: '' })
                var Z = m({ current: 1, size: 10, total: 0 }),
                  $ = d(!1),
                  ee = d(!1),
                  ae = d(),
                  te = d(),
                  ne = m({
                    group: '',
                    username: '',
                    password: '',
                    phone_number: '',
                    email1: '',
                    email1_password: '',
                    aux_email: '',
                    aux_email_password: '',
                    aux_email2: '',
                    aux_email2_password: ''
                  }),
                  re = d(!1),
                  le = d(!1),
                  oe = d(null),
                  ie = {
                    username: [
                      {
                        required: !0,
                        message: t('taskManagement.selfData.editDialog.usernameRequired'),
                        trigger: 'blur'
                      }
                    ],
                    password: [
                      {
                        required: !0,
                        message: t('taskManagement.selfData.editDialog.passwordRequired'),
                        trigger: 'blur'
                      }
                    ]
                  },
                  ue = p(function () {
                    return te.value
                      ? t('taskManagement.selfData.editDialog.editTitle')
                      : t('taskManagement.selfData.editDialog.addTitle')
                  }),
                  se = d()
                'Bearer '.concat(localStorage.getItem('token'))
                var ce = (function () {
                    var e = n(
                      a().mark(function e() {
                        var n, r
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (u.value = !0),
                                    (e.prev = 1),
                                    (n = { page: Z.current, limit: Z.size }),
                                    (e.next = 5),
                                    P(n)
                                  )
                                case 5:
                                  ;((r = e.sent),
                                    (c.value = r.data_list.map(function (e) {
                                      return ((e.status = e.status.toLowerCase()), e)
                                    })),
                                    (Z.total = r.total_data),
                                    (e.next = 14))
                                  break
                                case 10:
                                  ;((e.prev = 10),
                                    (e.t0 = e.catch(1)),
                                    console.error('获取账号数据失败:', e.t0),
                                    o.error(t('taskManagement.selfData.messages.fetchFailed')))
                                case 14:
                                  return ((e.prev = 14), (u.value = !1), e.finish(14))
                                case 17:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 10, 14, 17]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  fe = function () {
                    re.value = !0
                  },
                  de = function (e) {
                    oe.value = e
                  },
                  me = function () {
                    o.warning(t('taskManagement.selfData.messages.onlyOneFileAllowed'))
                  },
                  pe = (function () {
                    var e = n(
                      a().mark(function e() {
                        var n
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (oe.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    o.warning(
                                      t('taskManagement.selfData.messages.pleaseSelectFile')
                                    ),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (le.value = !0),
                                    (e.prev = 4),
                                    (n = new FormData()).append('file', oe.value.raw),
                                    (e.next = 9),
                                    S(n)
                                  )
                                case 9:
                                  ;(o.success(t('taskManagement.selfData.messages.uploadSuccess')),
                                    (re.value = !1),
                                    ce(),
                                    se.value.clearFiles(),
                                    (oe.value = null),
                                    (e.next = 20))
                                  break
                                case 16:
                                  ;((e.prev = 16),
                                    (e.t0 = e.catch(4)),
                                    console.error('上传失败:', e.t0),
                                    o.error(t('taskManagement.selfData.messages.uploadFailed')))
                                case 20:
                                  return ((e.prev = 20), (le.value = !1), e.finish(20))
                                case 23:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 16, 20, 23]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ge = function () {
                    ;((re.value = !1), se.value.clearFiles(), (oe.value = null))
                  },
                  he = function (e) {
                    ;((Z.pageSize = e), (Z.currentPage = 1), ce())
                  },
                  ve = function (e) {
                    ;((Z.currentPage = e), ce())
                  },
                  be = function (e) {
                    f.value = e
                  },
                  ye = (function () {
                    var e = n(
                      a().mark(function e() {
                        var n, r, l, i
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.prev = 0), (e.next = 3), U())
                                case 3:
                                  ;((n = e.sent),
                                    (r = new Blob([n])),
                                    (l = window.URL.createObjectURL(r)),
                                    ((i = document.createElement('a')).href = l),
                                    (i.download = t('taskManagement.selfData.template.filename')),
                                    i.click(),
                                    window.URL.revokeObjectURL(l),
                                    o.success(
                                      t('taskManagement.selfData.messages.templateDownloadSuccess')
                                    ),
                                    (e.next = 18))
                                  break
                                case 14:
                                  ;((e.prev = 14),
                                    (e.t0 = e.catch(0)),
                                    console.error('下载模板失败:', e.t0),
                                    o.error(
                                      t('taskManagement.selfData.messages.templateDownloadFailed')
                                    ))
                                case 18:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 14]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  we = function () {
                    var e
                    ;(null === (e = ae.value) || void 0 === e || e.resetFields(),
                      (te.value = void 0))
                  },
                  _e = (function () {
                    var e = n(
                      a().mark(function e() {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (ae.value) {
                                    e.next = 2
                                    break
                                  }
                                  return e.abrupt('return')
                                case 2:
                                  return ((e.next = 4), ae.value.validate())
                                case 4:
                                  if (e.sent) {
                                    e.next = 7
                                    break
                                  }
                                  return e.abrupt('return')
                                case 7:
                                  if (((ee.value = !0), (e.prev = 8), !te.value)) {
                                    e.next = 13
                                    break
                                  }
                                  return ((e.next = 12), T(te.value, ne))
                                case 12:
                                  o.success(t('taskManagement.selfData.messages.updateSuccess'))
                                case 13:
                                  ;(($.value = !1), ce(), (e.next = 21))
                                  break
                                case 17:
                                  ;((e.prev = 17),
                                    (e.t0 = e.catch(8)),
                                    console.error('操作失败:', e.t0),
                                    o.error(t('taskManagement.selfData.messages.operationFailed')))
                                case 21:
                                  return ((e.prev = 21), (ee.value = !1), e.finish(21))
                                case 24:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[8, 17, 21, 24]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  xe = function (e) {
                    switch (e) {
                      case 'in_use':
                        return t('taskManagement.selfData.status.inUse')
                      case 'active':
                        return t('taskManagement.selfData.status.active')
                      case 'used':
                        return t('taskManagement.selfData.status.used')
                      default:
                        return e || t('taskManagement.selfData.status.unknown')
                    }
                  },
                  ke = function (e) {
                    switch (e) {
                      case 'in_use':
                        return 'success'
                      case 'active':
                        return 'primary'
                      default:
                        return 'info'
                    }
                  },
                  De = (function () {
                    var e = n(
                      a().mark(function e(n) {
                        var r, l
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (r = n.status),
                                    (l = 'active' === r ? 'used' : 'active'),
                                    (e.next = 5),
                                    i.confirm(
                                      t('taskManagement.selfData.messages.confirmToggleStatus', {
                                        id: n.id,
                                        action: t(
                                          'active' === l
                                            ? 'taskManagement.selfData.table.actions.enable'
                                            : 'taskManagement.selfData.table.actions.disable'
                                        )
                                      }),
                                      t('common.prompt'),
                                      {
                                        confirmButtonText: t('common.confirm'),
                                        cancelButtonText: t('common.cancel'),
                                        type: 'warning'
                                      }
                                    )
                                  )
                                case 5:
                                  return ((e.next = 7), C([n.id], l))
                                case 7:
                                  ;(o.success(
                                    t('taskManagement.selfData.messages.toggleStatusSuccess', {
                                      action: t(
                                        'active' === l
                                          ? 'taskManagement.selfData.table.actions.enable'
                                          : 'taskManagement.selfData.table.actions.disable'
                                      )
                                    })
                                  ),
                                    ce(),
                                    (e.next = 14))
                                  break
                                case 11:
                                  ;((e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    'cancel' !== e.t0 &&
                                      (console.error('状态切换失败:', e.t0),
                                      o.error(
                                        t('taskManagement.selfData.messages.toggleStatusFailed')
                                      )))
                                case 14:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 11]]
                        )
                      })
                    )
                    return function (a) {
                      return e.apply(this, arguments)
                    }
                  })()
                return (
                  g(function () {
                    ce()
                  }),
                  function (e, a) {
                    var n = h('el-button'),
                      o = h('el-icon'),
                      i = h('Upload'),
                      s = h('PageBanner'),
                      f = h('el-table-column'),
                      d = h('el-tag'),
                      m = h('el-table'),
                      p = h('el-pagination'),
                      g = h('el-input'),
                      P = h('el-form-item'),
                      S = h('el-form'),
                      U = h('el-dialog'),
                      T = h('el-upload'),
                      C = v('loading')
                    return (
                      b(),
                      y('div', j, [
                        w(
                          s,
                          { title: '' },
                          {
                            extra: _(function () {
                              return [
                                w(
                                  n,
                                  { icon: 'RefreshRight', onClick: ce },
                                  {
                                    default: _(function () {
                                      return [
                                        x(k(D(t)('taskManagement.selfData.buttons.refresh')), 1)
                                      ]
                                    }),
                                    _: 1
                                  }
                                ),
                                w(
                                  n,
                                  { type: 'primary', onClick: ye },
                                  {
                                    default: _(function () {
                                      return [
                                        w(o, null, {
                                          default: _(function () {
                                            return [w(D(r))]
                                          }),
                                          _: 1
                                        }),
                                        x(
                                          ' ' +
                                            k(
                                              D(t)(
                                                'taskManagement.selfData.buttons.downloadTemplate'
                                              )
                                            ),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  }
                                ),
                                w(
                                  n,
                                  { type: 'success', onClick: fe },
                                  {
                                    default: _(function () {
                                      return [
                                        w(o, null, {
                                          default: _(function () {
                                            return [w(i)]
                                          }),
                                          _: 1
                                        }),
                                        x(
                                          ' ' +
                                            k(D(t)('taskManagement.selfData.buttons.uploadExcel')),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            _: 1
                          }
                        ),
                        M(
                          (b(),
                          E(
                            m,
                            {
                              data: c.value,
                              onSelectionChange: be,
                              style: { width: '100%', 'margin-top': '20px' }
                            },
                            {
                              default: _(function () {
                                return [
                                  w(f, { type: 'selection', width: '55' }),
                                  w(
                                    f,
                                    {
                                      prop: 'id',
                                      label: D(t)('taskManagement.selfData.table.columns.id'),
                                      width: '80'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      prop: 'group',
                                      label: D(t)('taskManagement.selfData.table.columns.group'),
                                      'min-width': '120'
                                    },
                                    {
                                      default: _(function (e) {
                                        var a = e.row
                                        return [x(k(a.group || '-'), 1)]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      prop: 'username',
                                      label: D(t)('taskManagement.selfData.table.columns.username'),
                                      'min-width': '120'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      prop: 'password',
                                      label: D(t)('taskManagement.selfData.table.columns.password'),
                                      'min-width': '120'
                                    },
                                    null,
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      label: D(t)(
                                        'taskManagement.selfData.table.columns.emailInfo'
                                      ),
                                      'min-width': '300'
                                    },
                                    {
                                      default: _(function (e) {
                                        var a = e.row
                                        return [
                                          L('div', O, [
                                            a.email1
                                              ? (b(),
                                                y('div', F, [
                                                  L(
                                                    'span',
                                                    R,
                                                    k(
                                                      D(t)(
                                                        'taskManagement.selfData.table.email.primary'
                                                      )
                                                    ) + ':',
                                                    1
                                                  ),
                                                  L('span', z, k(a.email1), 1),
                                                  a.email1_password
                                                    ? (b(),
                                                      y(
                                                        'span',
                                                        N,
                                                        '(' + k(a.email1_password) + ')',
                                                        1
                                                      ))
                                                    : V('', !0)
                                                ]))
                                              : V('', !0),
                                            a.aux_email
                                              ? (b(),
                                                y('div', G, [
                                                  L(
                                                    'span',
                                                    I,
                                                    k(
                                                      D(t)(
                                                        'taskManagement.selfData.table.email.aux1'
                                                      )
                                                    ) + ':',
                                                    1
                                                  ),
                                                  L('span', q, k(a.aux_email), 1),
                                                  a.aux_email_password
                                                    ? (b(),
                                                      y(
                                                        'span',
                                                        B,
                                                        '(' + k(a.aux_email_password) + ')',
                                                        1
                                                      ))
                                                    : V('', !0)
                                                ]))
                                              : V('', !0),
                                            a.aux_email2
                                              ? (b(),
                                                y('div', A, [
                                                  L(
                                                    'span',
                                                    H,
                                                    k(
                                                      D(t)(
                                                        'taskManagement.selfData.table.email.aux2'
                                                      )
                                                    ) + ':',
                                                    1
                                                  ),
                                                  L('span', Y, k(a.aux_email2), 1),
                                                  a.aux_email2_password
                                                    ? (b(),
                                                      y(
                                                        'span',
                                                        K,
                                                        '(' + k(a.aux_email2_password) + ')',
                                                        1
                                                      ))
                                                    : V('', !0)
                                                ]))
                                              : V('', !0),
                                            a.email1 || a.aux_email || a.aux_email2
                                              ? V('', !0)
                                              : (b(), y('div', J, '-'))
                                          ])
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      prop: 'phone_number',
                                      label: D(t)(
                                        'taskManagement.selfData.table.columns.phoneNumber'
                                      ),
                                      'min-width': '120'
                                    },
                                    {
                                      default: _(function (e) {
                                        var a = e.row
                                        return [x(k(a.phone_number || '-'), 1)]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      prop: 'status',
                                      label: D(t)('taskManagement.selfData.table.columns.status'),
                                      'min-width': '120'
                                    },
                                    {
                                      default: _(function (e) {
                                        var a = e.row
                                        return [
                                          w(
                                            d,
                                            { type: ke(a.status), size: 'small' },
                                            {
                                              default: _(function () {
                                                return [x(k(xe(a.status)), 1)]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['type']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      prop: 'created_at',
                                      label: D(t)(
                                        'taskManagement.selfData.table.columns.createdAt'
                                      ),
                                      'min-width': '160'
                                    },
                                    {
                                      default: _(function (e) {
                                        var a,
                                          t = e.row
                                        return [
                                          x(
                                            k(
                                              ((a = t.created_at),
                                              a ? new Date(a).toLocaleString('zh-CN') : '-')
                                            ),
                                            1
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  ),
                                  w(
                                    f,
                                    {
                                      label: D(t)('taskManagement.selfData.table.columns.actions'),
                                      width: '180',
                                      fixed: 'right'
                                    },
                                    {
                                      default: _(function (e) {
                                        var a = e.row
                                        return [
                                          w(
                                            n,
                                            {
                                              link: '',
                                              type: 'primary',
                                              onClick: function (e) {
                                                return (function (e) {
                                                  ;((te.value = e.id),
                                                    (ne.group = e.group || ''),
                                                    (ne.username = e.username || ''),
                                                    (ne.password = e.password || ''),
                                                    (ne.phone_number = e.phone_number || ''),
                                                    (ne.email1 = e.email1 || ''),
                                                    (ne.email1_password = e.email1_password || ''),
                                                    (ne.aux_email = e.aux_email || ''),
                                                    (ne.aux_email_password =
                                                      e.aux_email_password || ''),
                                                    (ne.aux_email2 = e.aux_email2 || ''),
                                                    (ne.aux_email2_password =
                                                      e.aux_email2_password || ''),
                                                    ($.value = !0))
                                                })(a)
                                              }
                                            },
                                            {
                                              default: _(function () {
                                                return [
                                                  x(
                                                    k(
                                                      D(t)(
                                                        'taskManagement.selfData.table.actions.edit'
                                                      )
                                                    ),
                                                    1
                                                  )
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['onClick']
                                          ),
                                          w(
                                            n,
                                            {
                                              link: '',
                                              type: 'active' === a.status ? 'warning' : 'success',
                                              disabled: 'in_use' === a.status,
                                              onClick: function (e) {
                                                return De(a)
                                              }
                                            },
                                            {
                                              default: _(function () {
                                                return [
                                                  x(
                                                    k(
                                                      'active' === a.status
                                                        ? D(t)(
                                                            'taskManagement.selfData.table.actions.disable'
                                                          )
                                                        : D(t)(
                                                            'taskManagement.selfData.table.actions.enable'
                                                          )
                                                    ),
                                                    1
                                                  )
                                                ]
                                              }),
                                              _: 2
                                            },
                                            1032,
                                            ['type', 'disabled', 'onClick']
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['label']
                                  )
                                ]
                              }),
                              _: 1
                            },
                            8,
                            ['data']
                          )),
                          [[C, u.value]]
                        ),
                        L('div', Q, [
                          w(
                            p,
                            {
                              'current-page': Z.current,
                              'onUpdate:currentPage':
                                a[0] ||
                                (a[0] = function (e) {
                                  return (Z.current = e)
                                }),
                              'page-size': Z.size,
                              'onUpdate:pageSize':
                                a[1] ||
                                (a[1] = function (e) {
                                  return (Z.size = e)
                                }),
                              'page-sizes': [10, 20, 50, 100],
                              total: Z.total,
                              layout: 'total, sizes, prev, pager, next, jumper',
                              onSizeChange: he,
                              onCurrentChange: ve
                            },
                            null,
                            8,
                            ['current-page', 'page-size', 'total']
                          )
                        ]),
                        w(
                          U,
                          {
                            modelValue: $.value,
                            'onUpdate:modelValue':
                              a[13] ||
                              (a[13] = function (e) {
                                return ($.value = e)
                              }),
                            title: ue.value,
                            width: '600px',
                            onClose: we
                          },
                          {
                            footer: _(function () {
                              return [
                                w(
                                  n,
                                  {
                                    onClick:
                                      a[12] ||
                                      (a[12] = function (e) {
                                        return ($.value = !1)
                                      })
                                  },
                                  {
                                    default: _(function () {
                                      return [x(k(D(t)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                ),
                                w(
                                  n,
                                  { type: 'primary', loading: ee.value, onClick: _e },
                                  {
                                    default: _(function () {
                                      return [x(k(D(t)('common.confirm')), 1)]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                )
                              ]
                            }),
                            default: _(function () {
                              return [
                                w(
                                  S,
                                  {
                                    ref_key: 'editFormRef',
                                    ref: ae,
                                    model: ne,
                                    rules: ie,
                                    'label-width': '130px'
                                  },
                                  {
                                    default: _(function () {
                                      return [
                                        w(
                                          P,
                                          {
                                            label: D(t)('taskManagement.selfData.editDialog.group'),
                                            prop: 'group'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.group,
                                                    'onUpdate:modelValue':
                                                      a[2] ||
                                                      (a[2] = function (e) {
                                                        return (ne.group = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.groupPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.username'
                                            ),
                                            prop: 'username'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.username,
                                                    'onUpdate:modelValue':
                                                      a[3] ||
                                                      (a[3] = function (e) {
                                                        return (ne.username = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.usernamePlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.password'
                                            ),
                                            prop: 'password'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.password,
                                                    'onUpdate:modelValue':
                                                      a[4] ||
                                                      (a[4] = function (e) {
                                                        return (ne.password = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.passwordPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.phoneNumber'
                                            ),
                                            prop: 'phone_number'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.phone_number,
                                                    'onUpdate:modelValue':
                                                      a[5] ||
                                                      (a[5] = function (e) {
                                                        return (ne.phone_number = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.phoneNumberPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.primaryEmail'
                                            ),
                                            prop: 'email1'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.email1,
                                                    'onUpdate:modelValue':
                                                      a[6] ||
                                                      (a[6] = function (e) {
                                                        return (ne.email1 = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.primaryEmailPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.primaryEmailPassword'
                                            ),
                                            prop: 'email1_password'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.email1_password,
                                                    'onUpdate:modelValue':
                                                      a[7] ||
                                                      (a[7] = function (e) {
                                                        return (ne.email1_password = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.primaryEmailPasswordPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.auxEmail1'
                                            ),
                                            prop: 'aux_email'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.aux_email,
                                                    'onUpdate:modelValue':
                                                      a[8] ||
                                                      (a[8] = function (e) {
                                                        return (ne.aux_email = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.auxEmail1Placeholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.auxEmail1Password'
                                            ),
                                            prop: 'aux_email_password'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.aux_email_password,
                                                    'onUpdate:modelValue':
                                                      a[9] ||
                                                      (a[9] = function (e) {
                                                        return (ne.aux_email_password = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.auxEmail1PasswordPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.auxEmail2'
                                            ),
                                            prop: 'aux_email2'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.aux_email2,
                                                    'onUpdate:modelValue':
                                                      a[10] ||
                                                      (a[10] = function (e) {
                                                        return (ne.aux_email2 = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.auxEmail2Placeholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        ),
                                        w(
                                          P,
                                          {
                                            label: D(t)(
                                              'taskManagement.selfData.editDialog.auxEmail2Password'
                                            ),
                                            prop: 'aux_email2_password'
                                          },
                                          {
                                            default: _(function () {
                                              return [
                                                w(
                                                  g,
                                                  {
                                                    modelValue: ne.aux_email2_password,
                                                    'onUpdate:modelValue':
                                                      a[11] ||
                                                      (a[11] = function (e) {
                                                        return (ne.aux_email2_password = e)
                                                      }),
                                                    modelModifiers: { trim: !0 },
                                                    placeholder: D(t)(
                                                      'taskManagement.selfData.editDialog.auxEmail2PasswordPlaceholder'
                                                    )
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'placeholder']
                                                )
                                              ]
                                            }),
                                            _: 1
                                          },
                                          8,
                                          ['label']
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['model']
                                )
                              ]
                            }),
                            _: 1
                          },
                          8,
                          ['modelValue', 'title']
                        ),
                        w(
                          U,
                          {
                            title: D(t)('taskManagement.selfData.uploadDialog.title'),
                            modelValue: re.value,
                            'onUpdate:modelValue':
                              a[14] ||
                              (a[14] = function (e) {
                                return (re.value = e)
                              }),
                            width: '500px'
                          },
                          {
                            footer: _(function () {
                              return [
                                w(
                                  n,
                                  {
                                    style: { 'margin-left': '10px' },
                                    type: 'success',
                                    onClick: pe,
                                    loading: le.value
                                  },
                                  {
                                    default: _(function () {
                                      return [
                                        x(
                                          k(
                                            D(t)(
                                              'taskManagement.selfData.uploadDialog.uploadToServer'
                                            )
                                          ),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  8,
                                  ['loading']
                                ),
                                w(
                                  n,
                                  { onClick: ge },
                                  {
                                    default: _(function () {
                                      return [x(k(D(t)('common.cancel')), 1)]
                                    }),
                                    _: 1
                                  }
                                )
                              ]
                            }),
                            default: _(function () {
                              return [
                                w(
                                  T,
                                  {
                                    ref_key: 'uploadRef',
                                    ref: se,
                                    'auto-upload': !1,
                                    'on-change': de,
                                    limit: 1,
                                    drag: '',
                                    'on-exceed': me,
                                    accept: '.xlsx,.xls'
                                  },
                                  {
                                    default: _(function () {
                                      return [
                                        w(
                                          o,
                                          { class: 'el-icon--upload' },
                                          {
                                            default: _(function () {
                                              return [w(D(l))]
                                            }),
                                            _: 1
                                          }
                                        ),
                                        L('div', W, [
                                          x(
                                            k(
                                              D(t)('taskManagement.selfData.uploadDialog.dragText')
                                            ),
                                            1
                                          ),
                                          L(
                                            'em',
                                            null,
                                            k(
                                              D(t)(
                                                'taskManagement.selfData.uploadDialog.clickToUpload'
                                              )
                                            ),
                                            1
                                          )
                                        ]),
                                        L(
                                          'div',
                                          X,
                                          k(D(t)('taskManagement.selfData.uploadDialog.fileTip')),
                                          1
                                        )
                                      ]
                                    }),
                                    _: 1
                                  },
                                  512
                                )
                              ]
                            }),
                            _: 1
                          },
                          8,
                          ['title', 'modelValue']
                        )
                      ])
                    )
                  }
                )
              }
            })
          e('default', c(Z, [['__scopeId', 'data-v-73a3b5f8']]))
        }
      }
    }
  )
})()
