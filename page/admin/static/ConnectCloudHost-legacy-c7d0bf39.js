!(function () {
  function t(e) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            }),
      t(e)
    )
  }
  function e() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e =
      function () {
        return o
      }
    var n,
      o = {},
      r = Object.prototype,
      a = r.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      l = c.asyncIterator || '@@asyncIterator',
      s = c.toStringTag || '@@toStringTag'
    function f(t, e, n) {
      return (
        Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        t[e]
      )
    }
    try {
      f({}, '')
    } catch (n) {
      f = function (t, e, n) {
        return (t[e] = n)
      }
    }
    function d(t, e, n, o) {
      var r = e && e.prototype instanceof b ? e : b,
        a = Object.create(r.prototype),
        c = new M(o || [])
      return (i(a, '_invoke', { value: S(t, n, c) }), a)
    }
    function p(t, e, n) {
      try {
        return { type: 'normal', arg: t.call(e, n) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }
    o.wrap = d
    var h = 'suspendedStart',
      v = 'suspendedYield',
      m = 'executing',
      g = 'completed',
      y = {}
    function b() {}
    function x() {}
    function w() {}
    var A = {}
    f(A, u, function () {
      return this
    })
    var k = Object.getPrototypeOf,
      C = k && k(k(O([])))
    C && C !== r && a.call(C, u) && (A = C)
    var E = (w.prototype = b.prototype = Object.create(A))
    function L(t) {
      ;['next', 'throw', 'return'].forEach(function (e) {
        f(t, e, function (t) {
          return this._invoke(e, t)
        })
      })
    }
    function j(e, n) {
      function o(r, i, c, u) {
        var l = p(e[r], e, i)
        if ('throw' !== l.type) {
          var s = l.arg,
            f = s.value
          return f && 'object' == t(f) && a.call(f, '__await')
            ? n.resolve(f.__await).then(
                function (t) {
                  o('next', t, c, u)
                },
                function (t) {
                  o('throw', t, c, u)
                }
              )
            : n.resolve(f).then(
                function (t) {
                  ;((s.value = t), c(s))
                },
                function (t) {
                  return o('throw', t, c, u)
                }
              )
        }
        u(l.arg)
      }
      var r
      i(this, '_invoke', {
        value: function (t, e) {
          function a() {
            return new n(function (n, r) {
              o(t, e, n, r)
            })
          }
          return (r = r ? r.then(a, a) : a())
        }
      })
    }
    function S(t, e, o) {
      var r = h
      return function (a, i) {
        if (r === m) throw new Error('Generator is already running')
        if (r === g) {
          if ('throw' === a) throw i
          return { value: n, done: !0 }
        }
        for (o.method = a, o.arg = i; ; ) {
          var c = o.delegate
          if (c) {
            var u = _(c, o)
            if (u) {
              if (u === y) continue
              return u
            }
          }
          if ('next' === o.method) o.sent = o._sent = o.arg
          else if ('throw' === o.method) {
            if (r === h) throw ((r = g), o.arg)
            o.dispatchException(o.arg)
          } else 'return' === o.method && o.abrupt('return', o.arg)
          r = m
          var l = p(t, e, o)
          if ('normal' === l.type) {
            if (((r = o.done ? g : v), l.arg === y)) continue
            return { value: l.arg, done: o.done }
          }
          'throw' === l.type && ((r = g), (o.method = 'throw'), (o.arg = l.arg))
        }
      }
    }
    function _(t, e) {
      var o = e.method,
        r = t.iterator[o]
      if (r === n)
        return (
          (e.delegate = null),
          ('throw' === o &&
            t.iterator.return &&
            ((e.method = 'return'), (e.arg = n), _(t, e), 'throw' === e.method)) ||
            ('return' !== o &&
              ((e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
          y
        )
      var a = p(r, t.iterator, e.arg)
      if ('throw' === a.type) return ((e.method = 'throw'), (e.arg = a.arg), (e.delegate = null), y)
      var i = a.arg
      return i
        ? i.done
          ? ((e[t.resultName] = i.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
            (e.delegate = null),
            y)
          : i
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          y)
    }
    function R(t) {
      var e = { tryLoc: t[0] }
      ;(1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e))
    }
    function N(t) {
      var e = t.completion || {}
      ;((e.type = 'normal'), delete e.arg, (t.completion = e))
    }
    function M(t) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(R, this), this.reset(!0))
    }
    function O(e) {
      if (e || '' === e) {
        var o = e[u]
        if (o) return o.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var r = -1,
            i = function t() {
              for (; ++r < e.length; ) if (a.call(e, r)) return ((t.value = e[r]), (t.done = !1), t)
              return ((t.value = n), (t.done = !0), t)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(t(e) + ' is not iterable')
    }
    return (
      (x.prototype = w),
      i(E, 'constructor', { value: w, configurable: !0 }),
      i(w, 'constructor', { value: x, configurable: !0 }),
      (x.displayName = f(w, s, 'GeneratorFunction')),
      (o.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor
        return !!e && (e === x || 'GeneratorFunction' === (e.displayName || e.name))
      }),
      (o.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, w)
            : ((t.__proto__ = w), f(t, s, 'GeneratorFunction')),
          (t.prototype = Object.create(E)),
          t
        )
      }),
      (o.awrap = function (t) {
        return { __await: t }
      }),
      L(j.prototype),
      f(j.prototype, l, function () {
        return this
      }),
      (o.AsyncIterator = j),
      (o.async = function (t, e, n, r, a) {
        void 0 === a && (a = Promise)
        var i = new j(d(t, e, n, r), a)
        return o.isGeneratorFunction(e)
          ? i
          : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
      }),
      L(E),
      f(E, s, 'Generator'),
      f(E, u, function () {
        return this
      }),
      f(E, 'toString', function () {
        return '[object Generator]'
      }),
      (o.keys = function (t) {
        var e = Object(t),
          n = []
        for (var o in e) n.push(o)
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var o = n.pop()
              if (o in e) return ((t.value = o), (t.done = !1), t)
            }
            return ((t.done = !0), t)
          }
        )
      }),
      (o.values = O),
      (M.prototype = {
        constructor: M,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(N),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
        },
        stop: function () {
          this.done = !0
          var t = this.tryEntries[0].completion
          if ('throw' === t.type) throw t.arg
          return this.rval
        },
        dispatchException: function (t) {
          if (this.done) throw t
          var e = this
          function o(o, r) {
            return (
              (c.type = 'throw'),
              (c.arg = t),
              (e.next = o),
              r && ((e.method = 'next'), (e.arg = n)),
              !!r
            )
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r],
              c = i.completion
            if ('root' === i.tryLoc) return o('end')
            if (i.tryLoc <= this.prev) {
              var u = a.call(i, 'catchLoc'),
                l = a.call(i, 'finallyLoc')
              if (u && l) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
              } else if (u) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
              } else {
                if (!l) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n]
            if (o.tryLoc <= this.prev && a.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var r = o
              break
            }
          }
          r &&
            ('break' === t || 'continue' === t) &&
            r.tryLoc <= e &&
            e <= r.finallyLoc &&
            (r = null)
          var i = r ? r.completion : {}
          return (
            (i.type = t),
            (i.arg = e),
            r ? ((this.method = 'next'), (this.next = r.finallyLoc), y) : this.complete(i)
          )
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            y
          )
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.finallyLoc === t) return (this.complete(n.completion, n.afterLoc), N(n), y)
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.tryLoc === t) {
              var o = n.completion
              if ('throw' === o.type) {
                var r = o.arg
                N(n)
              }
              return r
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, e, o) {
          return (
            (this.delegate = { iterator: O(t), resultName: e, nextLoc: o }),
            'next' === this.method && (this.arg = n),
            y
          )
        }
      }),
      o
    )
  }
  function n(t, e, n, o, r, a, i) {
    try {
      var c = t[a](i),
        u = c.value
    } catch (l) {
      return void n(l)
    }
    c.done ? e(u) : Promise.resolve(u).then(o, r)
  }
  function o(t) {
    return function () {
      var e = this,
        o = arguments
      return new Promise(function (r, a) {
        var i = t.apply(e, o)
        function c(t) {
          n(i, r, a, c, u, 'next', t)
        }
        function u(t) {
          n(i, r, a, c, u, 'throw', t)
        }
        c(void 0)
      })
    }
  }
  System.register(
    [
      './vue-legacy-7e5c1e5b.js',
      './v4-legacy-c0de4fd0.js',
      './index-legacy-31ac821a.js',
      './index-legacy-d4b804d0.js',
      './function-call-legacy-ae1bc7d7.js',
      './index-legacy-0fcb45ef.js',
      './element-legacy-e7b6e573.js',
      './vxe-legacy-cc8d3321.js'
    ],
    function (t, n) {
      'use strict'
      var r,
        a,
        i,
        c,
        u,
        l,
        s,
        f,
        d,
        p,
        h,
        v,
        m,
        g,
        y,
        b,
        x,
        w,
        A,
        k,
        C,
        E,
        L,
        j,
        S,
        _,
        R,
        N,
        M,
        O,
        T,
        H
      return {
        setters: [
          function (t) {
            ;((r = t.y),
              (a = t.r),
              (i = t.d),
              (c = t.b),
              (u = t.m),
              (l = t.f),
              (s = t.h),
              (f = t.B),
              (d = t.K),
              (p = t.i),
              (h = t.M),
              (v = t.u),
              (m = t.N),
              (g = t.H),
              (y = t.L),
              (b = t.n),
              (x = t.ar),
              (w = t.as),
              (A = t.aw),
              (k = t.aq),
              (C = t.G))
          },
          function (t) {
            ;((E = t.v), (L = t._))
          },
          function (t) {
            ;((j = t.j), (S = t.k), (_ = t.h))
          },
          function (t) {
            ;((R = t.h), (N = t._))
          },
          function (t) {
            ;((M = t.s), (O = t.a), (T = t.L))
          },
          function (t) {
            H = t.w
          },
          null,
          null
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '@charset "UTF-8";.mobile-phone-box-body[data-v-87ff3331]{height:100%;width:100%;background:#f5f5f5;position:relative;display:flex;flex-direction:column;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZLbDoMgEEQBr/H/v1XlEmh3EwjCoH2wTR+cxGCW2VkCR+77HsSNUuJm/SYwhOtbaHkUMq7rKpxzoiVrLXtQqEJhtL4fixtRmNaaPdu2VaGHQCmlGMeR//u+569U13WpTl7qyVV1DMOQAkszn0ApDmoNlA+H3wkkNM7g9t5DpGBg5CyyVopqxhjeR/ArZCaRGTXkdTS0AntZFl7neU5M5qLaNE3MY/QeMhCHNBVB/YkHPspV2Jnn/zl8AcqrgzVea22EAAAAAElFTkSuQmCC)}.mobile-video-container[data-v-87ff3331]{flex:1;display:flex;align-items:center;justify-content:center;overflow:auto;position:relative}.mobile-video-wrapper[data-v-87ff3331]{width:100%;height:100%;margin:0 auto;display:flex;align-items:center;justify-content:center}.mobile-loading[data-v-87ff3331]{position:absolute;top:0;left:0;right:0;bottom:60px;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:10;color:#fff;flex-direction:column;gap:12px}.mobile-video-wrapper[data-v-87ff3331]{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mobile-toolbar[data-v-87ff3331]{position:absolute;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px}.tool-button[data-v-87ff3331]{background:rgba(255,255,255,.9);border:1px solid #ddd;border-radius:8px;padding:8px 12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-width:60px;cursor:pointer;backdrop-filter:blur(10px);box-shadow:0 2px 8px rgba(0,0,0,.1);transition:all .2s ease}.tool-button[data-v-87ff3331]:hover{background:rgb(255,255,255);transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.15)}.tool-button[data-v-87ff3331]:active{transform:translateY(0);box-shadow:0 1px 4px rgba(0,0,0,.1)}.tool-icon[data-v-87ff3331]{font-size:16px;line-height:1}.tool-label[data-v-87ff3331]{font-size:12px;color:#333;font-weight:500;line-height:1}.screenshot-btn .tool-label[data-v-87ff3331]{color:#000}.mobile-connect-container[data-v-2f979092]{height:100%;background:#f5f5f5;display:flex;flex-direction:column}.mobile-connect-container .connect-content[data-v-2f979092]{flex:1;display:flex;flex-direction:column}.mobile-connect-container .connect-content .mobile-toolbar[data-v-2f979092]{background:white;border-top:1px solid #ebedf0;padding:12px 16px}.mobile-connect-container .connect-content .mobile-toolbar .toolbar-grid[data-v-2f979092]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.mobile-connect-container .connect-content .mobile-toolbar .toolbar-grid .tool-btn[data-v-2f979092]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:60px;border:none;background:#f8f9fa;border-radius:8px}.mobile-connect-container .connect-content .mobile-toolbar .toolbar-grid .tool-btn .tool-icon[data-v-2f979092]{font-size:18px;margin-bottom:4px}.mobile-connect-container .connect-content .mobile-toolbar .toolbar-grid .tool-btn .tool-label[data-v-2f979092]{font-size:12px;color:#323233}.mobile-connect-container .connect-content .mobile-toolbar .toolbar-grid .tool-btn[data-v-2f979092]:active{background:#e8e8e8}@media (min-width: 821px){.mobile-connect-container[data-v-2f979092]{display:none}}\n'),
            document.head.appendChild(n),
            H(M))
          var I = ['id'],
            U = { key: 1, class: 'mobile-toolbar' },
            G = (function (t) {
              return (x('data-v-87ff3331'), (t = t()), w(), t)
            })(function () {
              return p('span', { class: 'tool-icon' }, '📸', -1)
            }),
            V = { class: 'tool-label' },
            P = { key: 2, class: 'mobile-loading' },
            z = r({
              __name: 'MobileDeviceControlScreen',
              props: {
                padCode: { type: String, default: '' },
                headerHeight: { type: Number, default: 46 },
                footerHeight: { type: Number, default: 60 }
              },
              setup: function (t, n) {
                var r = n.expose,
                  x = t,
                  w = R().t,
                  A = a(!1),
                  k = a(!1),
                  C = a(null),
                  N = a({}),
                  M = a({ rotate: 0 })
                i(
                  function () {
                    return x.padCode
                  },
                  function (t) {
                    t &&
                      b(function () {
                        ;(H(),
                          setTimeout(function () {
                            k.value && B()
                          }, 200))
                      })
                  }
                )
                var H = function () {
                  var t = window.innerHeight,
                    e = (window.innerWidth, t),
                    n = e - 20,
                    o = n * (9 / 16)
                  ;((N.value = {
                    width: ''.concat(o, 'px'),
                    height: ''.concat(n, 'px'),
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }),
                    (k.value = !0),
                    x.headerHeight,
                    x.footerHeight)
                }
                ;(c(function () {
                  x.padCode &&
                    setTimeout(function () {
                      ;(H(), window.addEventListener('resize', H))
                    }, 100)
                }),
                  u(function () {
                    ;(window.removeEventListener('resize', H), Y(), F())
                  }))
                var z = a(null),
                  F = (function () {
                    var t = o(
                      e().mark(function t() {
                        return e().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return ((t.next = 2), j({ padCodes: [x.padCode] }))
                              case 2:
                                ;(z.value && z.value.stop(), O('停止拉流成功'))
                              case 4:
                              case 'end':
                                return t.stop()
                            }
                        }, t)
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })(),
                  B = (function () {
                    var t = o(
                      e().mark(function t() {
                        var n, o, r
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (A.value = !0),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    S({ padCode: x.padCode })
                                  )
                                case 4:
                                  ;((n = t.sent),
                                    (o = n.data.token),
                                    (r = {
                                      token: o,
                                      baseUrl: 'https://openapi-hk.armcloud.net',
                                      isWsProxy: !1,
                                      retryCount: 3,
                                      uuid: E(),
                                      enableMicrophone: !0,
                                      enableCamera: !0,
                                      deviceInfo: {
                                        padCode: x.padCode,
                                        userId: E(),
                                        videoStream: { resolution: 13, frameRate: 2, bitrate: 2 },
                                        autoRecoveryTime: 0,
                                        mediaType: 3,
                                        keyboard: 'local',
                                        saveCloudClipboard: !0
                                      },
                                      viewId: 'mobileControlScreen-'.concat(x.padCode),
                                      callbacks: {
                                        onInit: function (t) {
                                          var e
                                          ;(null === (e = z.value) || void 0 === e || e.start(),
                                            (A.value = !1))
                                        },
                                        onConnectSuccess: function () {
                                          ;(O('连接成功'), (A.value = !1))
                                        },
                                        onMonitorOperation: function (t) {},
                                        onConnectFail: function (t) {
                                          t.code
                                          var e = t.msg
                                          ;(O('连接失败: '.concat(e)), (A.value = !1))
                                        },
                                        onMediaDevicesToggle: function (t) {},
                                        onAutoRecoveryTime: function () {
                                          O('设备无操作，暂停拉流')
                                        },
                                        onAutoplayFailed: function (t) {},
                                        onRunInformation: function (t) {},
                                        onChangeResolution: function (t, e) {},
                                        onTransparentMsg: function (t, e) {},
                                        onErrorMessage: function (t) {
                                          O('播放异常，请重试')
                                        },
                                        onOutputClipper: function (t) {},
                                        onRenderedFirstFrame: function (t) {},
                                        onAudioRecovery: function () {},
                                        onAudioPause: function () {},
                                        onSocketCallback: function (t) {
                                          t.code
                                        },
                                        onProgress: function (t) {},
                                        onGroupControlError: function (t) {},
                                        onUserLeaveOrJoin: function (t) {},
                                        onSendUserError: function (t) {
                                          t.code
                                        },
                                        onConnectionStateChanged: function (t) {},
                                        onEquipmentInfo: function (t) {},
                                        onVideoInit: function (t) {},
                                        onVideoError: function (t) {
                                          t.code
                                        },
                                        onAudioInit: function (t) {},
                                        onAudioError: function (t) {},
                                        onInjectVideoResult: function (t, e) {},
                                        onChangeRotate: function (t, e) {
                                          M.value.rotate = t
                                        },
                                        onUserJoined: function (t) {
                                          var e
                                          null === (e = z.value) ||
                                            void 0 === e ||
                                            e.executeAdbCommand(
                                              'settings put system accelerometer_rotation 0'
                                            )
                                        }
                                      }
                                    }),
                                    (z.value = new L(r)),
                                    (t.next = 15))
                                  break
                                case 10:
                                  ;((t.prev = 10),
                                    (t.t0 = t.catch(1)),
                                    console.error('移动端初始化失败:', t.t0),
                                    O('初始化失败，请重试'),
                                    (A.value = !1))
                                case 15:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[1, 10]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })(),
                  Q = (function () {
                    var t = o(
                      e().mark(function t() {
                        var n, o
                        return e().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (x.padCode) {
                                    t.next = 3
                                    break
                                  }
                                  return (
                                    O(w('storageManagement.screenshotNoInstance')),
                                    t.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (t.prev = 3),
                                    (A.value = !0),
                                    (t.next = 7),
                                    _({ padCodes: [x.padCode], format: 'png', quality: '100' })
                                  )
                                case 7:
                                  if (!(n = t.sent).data) {
                                    t.next = 14
                                    break
                                  }
                                  ;((o = n.data[0].url),
                                    window.open(o, '_blank'),
                                    O(w('storageManagement.screenshotSuccess')),
                                    (t.next = 15))
                                  break
                                case 14:
                                  throw new Error('未获取到截图URL')
                                case 15:
                                  t.next = 21
                                  break
                                case 17:
                                  ;((t.prev = 17),
                                    (t.t0 = t.catch(3)),
                                    console.error('截图失败:', t.t0),
                                    O(
                                      w('storageManagement.screenshotFailed') + ': ' + t.t0.message
                                    ))
                                case 21:
                                  return ((t.prev = 21), (A.value = !1), t.finish(21))
                                case 24:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[3, 17, 21, 24]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })(),
                  Y = function () {
                    z.value && z.value.stop()
                  },
                  q = (function () {
                    var t = o(
                      e().mark(function t(n) {
                        return e().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!n) {
                                  t.next = 3
                                  break
                                }
                                return ((t.next = 3), B())
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        }, t)
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                return (
                  r({
                    initEngine: q,
                    stop: Y,
                    rotateScreen: function () {
                      z.value && z.value.setPhoneRotation(M.value.rotate ? 0 : 1)
                    },
                    back: function () {
                      z.value && z.value.sendCommand('back')
                    },
                    home: function () {
                      z.value && z.value.sendCommand('home')
                    },
                    task: function () {
                      z.value && z.value.sendCommand('menu')
                    },
                    volumeUp: function () {
                      z.value && z.value.increaseVolume()
                    },
                    volumeDown: function () {
                      z.value && z.value.decreaseVolume()
                    }
                  }),
                  function (e, n) {
                    return (
                      l(),
                      s(
                        'div',
                        { class: 'mobile-phone-box-body', ref_key: 'containerRef', ref: C },
                        [
                          k.value
                            ? (l(),
                              s(
                                'div',
                                {
                                  key: 0,
                                  class: 'mobile-video-wrapper',
                                  id: 'mobileControlScreen-'.concat(t.padCode),
                                  style: f(N.value)
                                },
                                null,
                                12,
                                I
                              ))
                            : d('', !0),
                          k.value
                            ? (l(),
                              s('div', U, [
                                p('button', { class: 'tool-button screenshot-btn', onClick: Q }, [
                                  G,
                                  p('span', V, h(v(w)('storageManagement.screenshot')), 1)
                                ])
                              ]))
                            : d('', !0),
                          A.value
                            ? (l(),
                              s('div', P, [
                                m(
                                  v(T),
                                  { type: 'spinner', size: '24px' },
                                  {
                                    default: g(function () {
                                      return [y('loading...')]
                                    }),
                                    _: 1
                                  }
                                )
                              ]))
                            : d('', !0)
                        ],
                        512
                      )
                    )
                  }
                )
              }
            }),
            F = N(z, [['__scopeId', 'data-v-87ff3331']])
          t(
            'default',
            N(
              r({
                __name: 'ConnectCloudHost',
                setup: function (t) {
                  var e = A()
                  k()
                  var n = a(e.params.id),
                    o = a(null)
                  return (
                    c(function () {
                      o.value && n.value && o.value.initEngine(n.value)
                    }),
                    function (t, e) {
                      return (
                        l(),
                        C(
                          F,
                          {
                            ref_key: 'deviceControlScreenRef',
                            ref: o,
                            'pad-code': n.value,
                            class: 'device-screen'
                          },
                          null,
                          8,
                          ['pad-code']
                        )
                      )
                    }
                  )
                }
              }),
              [['__scopeId', 'data-v-2f979092']]
            )
          )
        }
      }
    }
  )
})()
