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
  function t() {
    'use strict'
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ t =
      function () {
        return a
      }
    var n,
      a = {},
      o = Object.prototype,
      r = o.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      l = 'function' == typeof Symbol ? Symbol : {},
      c = l.iterator || '@@iterator',
      s = l.asyncIterator || '@@asyncIterator',
      u = l.toStringTag || '@@toStringTag'
    function d(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      )
    }
    try {
      d({}, '')
    } catch (n) {
      d = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, a) {
      var o = t && t.prototype instanceof x ? t : x,
        r = Object.create(o.prototype),
        l = new L(a || [])
      return (i(r, '_invoke', { value: S(e, n, l) }), r)
    }
    function p(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    a.wrap = f
    var v = 'suspendedStart',
      g = 'suspendedYield',
      h = 'executing',
      m = 'completed',
      b = {}
    function x() {}
    function y() {}
    function w() {}
    var k = {}
    d(k, c, function () {
      return this
    })
    var j = Object.getPrototypeOf,
      C = j && j(j(F([])))
    C && C !== o && r.call(C, c) && (k = C)
    var A = (w.prototype = x.prototype = Object.create(k))
    function I(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function M(t, n) {
      function a(o, i, l, c) {
        var s = p(t[o], t, i)
        if ('throw' !== s.type) {
          var u = s.arg,
            d = u.value
          return d && 'object' == e(d) && r.call(d, '__await')
            ? n.resolve(d.__await).then(
                function (e) {
                  a('next', e, l, c)
                },
                function (e) {
                  a('throw', e, l, c)
                }
              )
            : n.resolve(d).then(
                function (e) {
                  ;((u.value = e), l(u))
                },
                function (e) {
                  return a('throw', e, l, c)
                }
              )
        }
        c(s.arg)
      }
      var o
      i(this, '_invoke', {
        value: function (e, t) {
          function r() {
            return new n(function (n, o) {
              a(e, t, n, o)
            })
          }
          return (o = o ? o.then(r, r) : r())
        }
      })
    }
    function S(e, t, a) {
      var o = v
      return function (r, i) {
        if (o === h) throw new Error('Generator is already running')
        if (o === m) {
          if ('throw' === r) throw i
          return { value: n, done: !0 }
        }
        for (a.method = r, a.arg = i; ; ) {
          var l = a.delegate
          if (l) {
            var c = _(l, a)
            if (c) {
              if (c === b) continue
              return c
            }
          }
          if ('next' === a.method) a.sent = a._sent = a.arg
          else if ('throw' === a.method) {
            if (o === v) throw ((o = m), a.arg)
            a.dispatchException(a.arg)
          } else 'return' === a.method && a.abrupt('return', a.arg)
          o = h
          var s = p(e, t, a)
          if ('normal' === s.type) {
            if (((o = a.done ? m : g), s.arg === b)) continue
            return { value: s.arg, done: a.done }
          }
          'throw' === s.type && ((o = m), (a.method = 'throw'), (a.arg = s.arg))
        }
      }
    }
    function _(e, t) {
      var a = t.method,
        o = e.iterator[a]
      if (o === n)
        return (
          (t.delegate = null),
          ('throw' === a &&
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = n), _(e, t), 'throw' === t.method)) ||
            ('return' !== a &&
              ((t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a '" + a + "' method")))),
          b
        )
      var r = p(o, e.iterator, t.arg)
      if ('throw' === r.type) return ((t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), b)
      var i = r.arg
      return i
        ? i.done
          ? ((t[e.resultName] = i.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
            (t.delegate = null),
            b)
          : i
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          b)
    }
    function E(e) {
      var t = { tryLoc: e[0] }
      ;(1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t))
    }
    function z(e) {
      var t = e.completion || {}
      ;((t.type = 'normal'), delete t.arg, (e.completion = t))
    }
    function L(e) {
      ;((this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(E, this), this.reset(!0))
    }
    function F(t) {
      if (t || '' === t) {
        var a = t[c]
        if (a) return a.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var o = -1,
            i = function e() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((e.value = t[o]), (e.done = !1), e)
              return ((e.value = n), (e.done = !0), e)
            }
          return (i.next = i)
        }
      }
      throw new TypeError(e(t) + ' is not iterable')
    }
    return (
      (y.prototype = w),
      i(A, 'constructor', { value: w, configurable: !0 }),
      i(w, 'constructor', { value: y, configurable: !0 }),
      (y.displayName = d(w, u, 'GeneratorFunction')),
      (a.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === y || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (a.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), d(e, u, 'GeneratorFunction')),
          (e.prototype = Object.create(A)),
          e
        )
      }),
      (a.awrap = function (e) {
        return { __await: e }
      }),
      I(M.prototype),
      d(M.prototype, s, function () {
        return this
      }),
      (a.AsyncIterator = M),
      (a.async = function (e, t, n, o, r) {
        void 0 === r && (r = Promise)
        var i = new M(f(e, t, n, o), r)
        return a.isGeneratorFunction(t)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next()
            })
      }),
      I(A),
      d(A, u, 'Generator'),
      d(A, c, function () {
        return this
      }),
      d(A, 'toString', function () {
        return '[object Generator]'
      }),
      (a.keys = function (e) {
        var t = Object(e),
          n = []
        for (var a in t) n.push(a)
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var a = n.pop()
              if (a in t) return ((e.value = a), (e.done = !1), e)
            }
            return ((e.done = !0), e)
          }
        )
      }),
      (a.values = F),
      (L.prototype = {
        constructor: L,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = n),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = n),
            this.tryEntries.forEach(z),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var t = this
          function a(a, o) {
            return (
              (l.type = 'throw'),
              (l.arg = e),
              (t.next = a),
              o && ((t.method = 'next'), (t.arg = n)),
              !!o
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              l = i.completion
            if ('root' === i.tryLoc) return a('end')
            if (i.tryLoc <= this.prev) {
              var c = r.call(i, 'catchLoc'),
                s = r.call(i, 'finallyLoc')
              if (c && s) {
                if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                if (this.prev < i.finallyLoc) return a(i.finallyLoc)
              } else if (c) {
                if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
              } else {
                if (!s) throw new Error('try statement without catch or finally')
                if (this.prev < i.finallyLoc) return a(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var a = this.tryEntries[n]
            if (a.tryLoc <= this.prev && r.call(a, 'finallyLoc') && this.prev < a.finallyLoc) {
              var o = a
              break
            }
          }
          o &&
            ('break' === e || 'continue' === e) &&
            o.tryLoc <= t &&
            t <= o.finallyLoc &&
            (o = null)
          var i = o ? o.completion : {}
          return (
            (i.type = e),
            (i.arg = t),
            o ? ((this.method = 'next'), (this.next = o.finallyLoc), b) : this.complete(i)
          )
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            b
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return (this.complete(n.completion, n.afterLoc), z(n), b)
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var a = n.completion
              if ('throw' === a.type) {
                var o = a.arg
                z(n)
              }
              return o
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, a) {
          return (
            (this.delegate = { iterator: F(e), resultName: t, nextLoc: a }),
            'next' === this.method && (this.arg = n),
            b
          )
        }
      }),
      a
    )
  }
  function n(e, t, n, a, o, r, i) {
    try {
      var l = e[r](i),
        c = l.value
    } catch (s) {
      return void n(s)
    }
    l.done ? t(c) : Promise.resolve(c).then(a, o)
  }
  function a(e) {
    return function () {
      var t = this,
        a = arguments
      return new Promise(function (o, r) {
        var i = e.apply(t, a)
        function l(e) {
          n(i, o, r, l, c, 'next', e)
        }
        function c(e) {
          n(i, o, r, l, c, 'throw', e)
        }
        l(void 0)
      })
    }
  }
  System.register(
    [
      './element-legacy-e7b6e573.js',
      './v4-legacy-c0de4fd0.js',
      './index-legacy-31ac821a.js',
      './vue-legacy-7e5c1e5b.js',
      './index-legacy-bdc99882.js',
      './index-legacy-d4b804d0.js',
      './index-legacy-c5fbf408.js'
    ],
    function (e, n) {
      'use strict'
      var o,
        r,
        i,
        l,
        c,
        s,
        u,
        d,
        f,
        p,
        v,
        g,
        h,
        m,
        b,
        x,
        y,
        w,
        k,
        j,
        C,
        A,
        I,
        M,
        S,
        _,
        E,
        z,
        L,
        F,
        V,
        N,
        T,
        B,
        U,
        P,
        R,
        O,
        G,
        D,
        H,
        Y,
        Q,
        q
      return {
        setters: [
          function (e) {
            ;((o = e.H), (r = e.M), (i = e.E), (l = e.G), (c = e.N), (s = e.O), (u = e.n))
          },
          function (e) {
            ;((d = e.v), (f = e._))
          },
          function (e) {
            ;((p = e.k), (v = e.j), (g = e.h))
          },
          function (e) {
            ;((h = e.y),
              (m = e.r),
              (b = e.a8),
              (x = e.f),
              (y = e.h),
              (w = e.N),
              (k = e.H),
              (j = e.u),
              (C = e.i),
              (A = e.M),
              (I = e.G),
              (M = e.K),
              (S = e.L),
              (_ = e.b),
              (E = e.d),
              (z = e.ag),
              (L = e.a1),
              (F = e.I),
              (V = e.ar),
              (N = e.as),
              (T = e.m),
              (B = e.F),
              (U = e.n))
          },
          function (e) {
            ;((P = e.a), (R = e.b))
          },
          function (e) {
            ;((O = e.h), (G = e._), (D = e.m))
          },
          function (e) {
            ;((H = e.s), (Y = e.c), (Q = e.u), (q = e.S))
          }
        ],
        execute: function () {
          var n = document.createElement('style')
          ;((n.textContent =
            '@charset "UTF-8";.video-upload-area[data-v-b514a7fa]{width:100%;max-width:500px;margin:0 auto}.upload-drag-area[data-v-b514a7fa]{width:100%}.upload-title[data-v-b514a7fa]{font-size:16px;font-weight:600;margin-bottom:8px;color:#606266}.upload-hint[data-v-b514a7fa]{font-size:14px;color:#909399}.upload-controls[data-v-b514a7fa]{margin-top:20px}.upload-actions[data-v-b514a7fa]{display:flex;gap:12px;justify-content:flex-end}.file-info[data-v-b514a7fa]{margin-top:16px;padding:12px;background-color:#f5f7fa;border-radius:4px;border:1px solid #e4e7ed}.file-name[data-v-b514a7fa]{display:flex;align-items:center;gap:8px;font-weight:500;color:#303133;margin-bottom:4px}.file-size[data-v-b514a7fa]{font-size:12px;color:#909399}[data-v-b514a7fa] .el-upload-dragger{width:100%;height:150px;display:flex;flex-direction:column;justify-content:center;align-items:center}[data-v-b514a7fa] .el-icon--upload{font-size:48px;color:#c0c4cc;margin-bottom:16px}.video-injection-container[data-v-f4816af2]{padding:20px;height:100%;box-sizing:border-box;display:flex;flex-direction:column}.search-container[data-v-f4816af2]{margin-bottom:20px;display:flex;align-items:center;gap:16px}.upload-buttons[data-v-f4816af2]{display:flex;gap:8px}.file-list[data-v-f4816af2]{flex:1;display:flex;flex-direction:column}.file-list .el-table[data-v-f4816af2]{flex:1;margin-bottom:16px}.drawer-footer[data-v-f4816af2]{margin-top:20px;display:flex;justify-content:flex-end}.pagination-container[data-v-f4816af2]{margin-top:16px;display:flex;justify-content:center}.injection-progress-container[data-v-f4816af2]{display:flex;align-items:center;padding:4px 0}.progress-info[data-v-f4816af2]{display:flex;align-items:center;gap:8px;width:100%}.progress-text[data-v-f4816af2]{font-size:12px;color:#606266;min-width:50px}.injection-progress[data-v-f4816af2]{flex:1;margin:0}.progress-percentage[data-v-f4816af2]{font-size:12px;color:#409eff;font-weight:600;min-width:30px;text-align:right}.phone-box-body[data-v-420f04a7]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZLbDoMgEEQBr/H/v1XlEmh3EwjCoH2wTR+cxGCW2VkCR+77HsSNUuJm/SYwhOtbaHkUMq7rKpxzoiVrLXtQqEJhtL4fixtRmNaaPdu2VaGHQCmlGMeR//u+569U13WpTl7qyVV1DMOQAkszn0ApDmoNlA+H3wkkNM7g9t5DpGBg5CyyVopqxhjeR/ArZCaRGTXkdTS0AntZFl7neU5M5qLaNE3MY/QeMhCHNBVB/YkHPspV2Jnn/zl8AcqrgzVea22EAAAAAElFTkSuQmCC);background-repeat:repeat;background-size:auto}.video-toolbar[data-v-420f04a7]{display:flex;flex-direction:column;justify-content:center;width:60px;height:100%;box-sizing:border-box;padding:8px 4px;gap:6px;overflow:auto}.video-container[data-v-420f04a7]{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}.toolbar-section[data-v-420f04a7]{background:linear-gradient(135deg,rgba(255,255,255,.85) 0%,rgba(255,255,255,.65) 100%);border-radius:8px;padding:6px 3px;border:1px solid rgba(255,255,255,.4);backdrop-filter:blur(10px);box-shadow:0 4px 15px rgba(0,0,0,.1);transition:all .3s ease;position:relative}.toolbar-section[data-v-420f04a7]:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.8) 50%,transparent 100%)}.toolbar-section[data-v-420f04a7]:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(0,0,0,.15);background:linear-gradient(135deg,rgba(255,255,255,.95) 0%,rgba(255,255,255,.75) 100%)}.toolbar-title[data-v-420f04a7]{font-size:1.1rem;font-weight:700;color:#2c3e50;margin:0 0 .5rem;display:flex;align-items:center;justify-content:center;text-shadow:0 1px 2px rgba(0,0,0,.1);border-bottom:1px solid rgba(255,255,255,.3);padding-bottom:.3rem}.toolbar-buttons[data-v-420f04a7]{display:flex;flex-direction:column;gap:.6rem;align-items:center}.tool-item[data-v-420f04a7]{display:flex;flex-direction:column;align-items:center;gap:.2rem}.tool-label[data-v-420f04a7]{font-size:.6rem;font-weight:600;color:#2c3e50;text-align:center;line-height:1.1;max-width:50px;word-wrap:break-word;text-shadow:0 1px 2px rgba(255,255,255,.8)}.tool-btn[data-v-420f04a7]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;background:linear-gradient(135deg,rgba(255,255,255,.9) 0%,rgba(255,255,255,.7) 100%);border:1.5px solid rgba(255,255,255,.6);border-radius:50%;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);color:#2c3e50;position:relative;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)}.tool-btn[data-v-420f04a7]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(255,255,255,.4) 0%,rgba(255,255,255,.1) 100%);opacity:0;transition:opacity .3s ease}.tool-btn[data-v-420f04a7]:hover:before{opacity:1}.tool-btn[data-v-420f04a7]:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 6px 16px rgba(0,0,0,.15)}.tool-btn[data-v-420f04a7]:active{transform:translateY(0) scale(.98);box-shadow:0 2px 6px rgba(0,0,0,.1)}.tool-btn[data-v-420f04a7]:active:before{opacity:.3}.tool-icon[data-v-420f04a7]{font-size:1.1rem;transition:transform .2s ease}.tool-btn:hover .tool-icon[data-v-420f04a7]{transform:scale(1.1)}.video-injection-indicator[data-v-420f04a7]{position:absolute;bottom:20px;right:20px;display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(76,175,80,.9);border-radius:20px;backdrop-filter:blur(10px);box-shadow:0 4px 15px rgba(76,175,80,.3);animation:pulse-420f04a7 2s infinite;z-index:1000}.recording-dot[data-v-420f04a7]{width:12px;height:12px;background:#fff;border-radius:50%;animation:blink-420f04a7 1.5s infinite}.recording-text[data-v-420f04a7]{color:#fff;font-size:12px;font-weight:600;text-shadow:0 1px 2px rgba(0,0,0,.3)}@keyframes blink-420f04a7{0%,50%{opacity:1}51%,to{opacity:.3}}@keyframes pulse-420f04a7{0%{box-shadow:0 4px 15px rgba(76,175,80,.3)}50%{box-shadow:0 4px 20px rgba(76,175,80,.6)}to{box-shadow:0 4px 15px rgba(76,175,80,.3)}}.video-injection-indicator[data-v-420f04a7]{cursor:pointer;transition:all .3s ease}.video-injection-indicator[data-v-420f04a7]:hover{background:rgba(244,67,54,.9);transform:scale(1.05)}.stop-overlay[data-v-420f04a7]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(244,67,54,.9);border-radius:20px;backdrop-filter:blur(10px)}.stop-icon[data-v-420f04a7]{font-size:16px;color:#fff;animation:none}\n'),
            document.head.appendChild(n))
          var K = { class: 'video-upload-area' },
            X = { class: 'el-upload__text' },
            J = { class: 'upload-title' },
            W = { class: 'upload-hint' },
            Z = { key: 0, class: 'upload-controls' },
            $ = { class: 'upload-actions' },
            ee = { key: 1, class: 'file-info' },
            te = { class: 'file-name' },
            ne = { class: 'file-size' },
            ae = h({
              __name: 'VideoUploadArea',
              emits: ['success'],
              setup: function (e, n) {
                var l = n.emit,
                  c = O().t,
                  s = m(),
                  u = m(null),
                  d = m(!1),
                  f = m(0),
                  p = m(''),
                  v = function (e) {
                    u.value = e.raw
                  },
                  g = function () {
                    ;((u.value = null), (f.value = 0), (p.value = ''))
                  },
                  h = function () {
                    i.warning(c('storageManagement.onlyOneFileAllowed'))
                  },
                  _ = function () {
                    d.value
                      ? i.warning(c('storageManagement.fileUploadingWarning'))
                      : ((u.value = null),
                        (f.value = 0),
                        (p.value = ''),
                        s.value && s.value.clearFiles())
                  },
                  E = function (e) {
                    return new Promise(function (t, n) {
                      var a = new q.ArrayBuffer(),
                        o = new FileReader()
                      ;((o.onload = function (e) {
                        var n
                        a.append(null === (n = e.target) || void 0 === n ? void 0 : n.result)
                        var o = a.end()
                        t(o)
                      }),
                        (o.onerror = function (e) {
                          n(new Error(c('storageManagement.calculateMD5Failed')))
                        }),
                        o.readAsArrayBuffer(e))
                    })
                  },
                  z = (function () {
                    var e = a(
                      t().mark(function e() {
                        var n, a, o, r, s, v
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (u.value) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    i.error(c('storageManagement.pleaseSelectFile')),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (d.value = !0),
                                    (f.value = 0),
                                    (p.value = ''),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    H({ file_name: u.value.name, file_size: u.value.size })
                                  )
                                case 9:
                                  return (
                                    (n = e.sent),
                                    (a = n.upload_id),
                                    (e.next = 13),
                                    L(a, u.value)
                                  )
                                case 13:
                                  return ((e.next = 15), Y({ upload_id: a }))
                                case 15:
                                  return (
                                    (o = e.sent),
                                    (r = o.file_md5),
                                    (s = o.download_url),
                                    (v = { fileUrl: s, fileName: u.value.name, fileMd5: r }),
                                    (e.next = 20),
                                    P(v)
                                  )
                                case 20:
                                  ;((p.value = 'success'),
                                    i.success(c('storageManagement.fileUploadSuccess')),
                                    (d.value = !1),
                                    l('success'),
                                    _(),
                                    (e.next = 32))
                                  break
                                case 27:
                                  ;((e.prev = 27),
                                    (e.t0 = e.catch(6)),
                                    console.error('文件上传失败:', e.t0),
                                    (p.value = 'exception'),
                                    i.error(c('storageManagement.fileUploadFailed') + e.t0.message))
                                case 32:
                                  return ((e.prev = 32), (d.value = !1), e.finish(32))
                                case 35:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[6, 27, 32, 35]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  L = (function () {
                    var e = a(
                      t().mark(function e(n, a) {
                        var o, r, i, l, c, s, u, d
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;((o = 1048576), (r = Math.ceil(a.size / o)), (i = 0))
                              case 3:
                                if (!(i < r)) {
                                  e.next = 21
                                  break
                                }
                                return (
                                  (l = i * o),
                                  (c = Math.min(l + o, a.size)),
                                  (s = a.slice(l, c)),
                                  (u = new FormData()).append('upload_id', n),
                                  u.append('chunk_index', i.toString()),
                                  u.append('file', s),
                                  (e.next = 13),
                                  E(s)
                                )
                              case 13:
                                return ((d = e.sent), u.append('chunk_md5', d), (e.next = 17), Q(u))
                              case 17:
                                f.value = Math.round(((i + 1) / r) * 100)
                              case 18:
                                ;(i++, (e.next = 3))
                                break
                              case 21:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function (t, n) {
                      return e.apply(this, arguments)
                    }
                  })()
                return function (e, t) {
                  var n,
                    a = b('el-icon'),
                    i = b('el-upload'),
                    l = b('el-progress'),
                    m = b('el-button')
                  return (
                    x(),
                    y('div', K, [
                      w(
                        i,
                        {
                          ref_key: 'uploadRef',
                          ref: s,
                          class: 'upload-drag-area',
                          drag: '',
                          'auto-upload': !1,
                          'show-file-list': !0,
                          'on-change': v,
                          'on-remove': g,
                          limit: 1,
                          'on-exceed': h,
                          accept: '.mp4,.avi,.mov,.wmv,.flv,.mkv'
                        },
                        {
                          default: k(function () {
                            return [
                              w(
                                a,
                                { class: 'el-icon--upload' },
                                {
                                  default: k(function () {
                                    return [w(j(o))]
                                  }),
                                  _: 1
                                }
                              ),
                              C('div', X, [
                                C('div', J, A(j(c)('storageManagement.dragFileOrClick')), 1),
                                C('div', W, A(j(c)('storageManagement.supportedFormats')), 1)
                              ])
                            ]
                          }),
                          _: 1
                        },
                        8,
                        ['accept']
                      ),
                      u.value
                        ? (x(),
                          y('div', Z, [
                            f.value > 0
                              ? (x(),
                                I(
                                  l,
                                  {
                                    key: 0,
                                    percentage: f.value,
                                    status: p.value,
                                    style: { 'margin-bottom': '16px' }
                                  },
                                  null,
                                  8,
                                  ['percentage', 'status']
                                ))
                              : M('', !0),
                            C('div', $, [
                              w(
                                m,
                                { onClick: _, disabled: d.value },
                                {
                                  default: k(function () {
                                    return [S(A(j(c)('common.cancel')), 1)]
                                  }),
                                  _: 1
                                },
                                8,
                                ['disabled']
                              ),
                              w(
                                m,
                                {
                                  type: 'primary',
                                  onClick: z,
                                  loading: d.value,
                                  disabled: !u.value || d.value
                                },
                                {
                                  default: k(function () {
                                    return [
                                      S(
                                        A(
                                          d.value
                                            ? j(c)('storageManagement.uploading')
                                            : j(c)('storageManagement.startUpload')
                                        ),
                                        1
                                      )
                                    ]
                                  }),
                                  _: 1
                                },
                                8,
                                ['loading', 'disabled']
                              )
                            ])
                          ]))
                        : M('', !0),
                      u.value && !d.value
                        ? (x(),
                          y('div', ee, [
                            C('div', te, [
                              w(a, null, {
                                default: k(function () {
                                  return [w(j(r))]
                                }),
                                _: 1
                              }),
                              S(' ' + A(u.value.name), 1)
                            ]),
                            C(
                              'div',
                              ne,
                              A(
                                ((n = u.value.size),
                                n < 1024
                                  ? n + ' B'
                                  : n < 1048576
                                    ? (n / 1024).toFixed(2) + ' KB'
                                    : n < 1073741824
                                      ? (n / 1048576).toFixed(2) + ' MB'
                                      : (n / 1073741824).toFixed(2) + ' GB')
                              ),
                              1
                            )
                          ]))
                        : M('', !0)
                    ])
                  )
                }
              }
            }),
            oe = G(ae, [['__scopeId', 'data-v-b514a7fa']]),
            re = { class: 'video-injection-container' },
            ie = { class: 'file-list' },
            le = { class: 'search-container' },
            ce = { class: 'loop-play-option' },
            se = { key: 0, class: 'injection-progress-container' },
            ue = { class: 'progress-info' },
            de = (function (e) {
              return (V('data-v-f4816af2'), (e = e()), N(), e)
            })(function () {
              return C('span', { class: 'progress-text' }, '录播中...', -1)
            }),
            fe = { class: 'progress-percentage' },
            pe = { class: 'pagination-container' },
            ve = h({
              __name: 'VideoInjectionDrawer',
              props: {
                visible: { type: Boolean, default: !1 },
                padCode: { type: String, default: '' }
              },
              emits: ['update:visible', 'select-file', 'stop-injection'],
              setup: function (e, n) {
                var o = n.expose,
                  r = n.emit,
                  l = O().t,
                  c = e,
                  s = r,
                  u = m([]),
                  d = m(!1),
                  f = m(!0),
                  p = m(0),
                  v = m(!1),
                  g = m(''),
                  h = m(''),
                  M = m({ currentPage: 1, pageSize: 20, total: 0 }),
                  V = (function () {
                    var e = a(
                      t().mark(function e() {
                        var n, a
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (c.padCode) {
                                    e.next = 3
                                    break
                                  }
                                  return (i.warning('请先选择实例'), e.abrupt('return'))
                                case 3:
                                  return (
                                    (d.value = !0),
                                    (e.prev = 4),
                                    (n = {
                                      page: M.value.currentPage,
                                      rows: M.value.pageSize,
                                      fileName: h.value || void 0
                                    }),
                                    (e.next = 8),
                                    R(n)
                                  )
                                case 8:
                                  ;((a = e.sent),
                                    (u.value = a.data.pageData || []),
                                    (M.value.total = a.data.total || 0),
                                    (e.next = 17))
                                  break
                                case 13:
                                  ;((e.prev = 13),
                                    (e.t0 = e.catch(4)),
                                    console.error('获取文件列表失败:', e.t0),
                                    i.error(
                                      l('storageManagement.getFileListFailed') +
                                        ': ' +
                                        (e.t0.message || '')
                                    ))
                                case 17:
                                  return ((e.prev = 17), (d.value = !1), e.finish(17))
                                case 20:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 13, 17, 20]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  N = function (e) {
                    ;((M.value.currentPage = e), V())
                  },
                  T = function (e) {
                    ;((M.value.pageSize = e), (M.value.currentPage = 1), V())
                  },
                  B = function () {
                    V()
                  },
                  U = function (e) {
                    ;((v.value = !0), (g.value = e.id), (p.value = 0))
                    var t = setInterval(function () {
                      p.value < 95 &&
                        ((p.value += 10 * Math.random() + 5), p.value > 95 && (p.value = 95))
                    }, 3e3)
                    window.videoInjectionInterval = t
                  },
                  P = function () {
                    ;(window.videoInjectionInterval && clearInterval(window.videoInjectionInterval),
                      (v.value = !1),
                      (g.value = ''),
                      (p.value = 0))
                  },
                  G = function () {
                    ;(P(), s('stop-injection'))
                  },
                  D = function () {
                    s('update:visible', !1)
                  }
                o({
                  handleVideoInjectionSuccess: function () {
                    ;(window.videoInjectionInterval && clearInterval(window.videoInjectionInterval),
                      (p.value = 100),
                      setTimeout(function () {
                        ;((v.value = !1), (g.value = ''), (p.value = 0))
                      }, 1e3))
                  },
                  handleVideoInjectionFailed: P
                })
                var H = function () {
                  ;(setTimeout(function () {
                    V()
                  }, 5e3),
                    V())
                }
                ;(_(function () {
                  c.visible && V()
                }),
                  E(
                    function () {
                      return c.visible
                    },
                    function (e) {
                      e && V()
                    }
                  ))
                return function (t, n) {
                  var a = b('el-alert'),
                    o = b('el-button'),
                    r = b('el-input'),
                    c = b('el-checkbox'),
                    m = b('el-table-column'),
                    _ = b('el-progress'),
                    E = b('el-link'),
                    V = b('el-table'),
                    P = b('el-pagination'),
                    R = b('el-drawer'),
                    O = z('loading')
                  return (
                    x(),
                    I(
                      R,
                      {
                        'model-value': e.visible,
                        title: j(l)('storageManagement.videoInjection'),
                        direction: 'ltr',
                        size: '50vw',
                        'before-close': D
                      },
                      {
                        default: k(function () {
                          return [
                            C('div', re, [
                              w(oe, { onSuccess: H, style: { 'margin-bottom': '20px' } }),
                              w(
                                a,
                                {
                                  title: j(l)('storageManagement.audioTrackTip'),
                                  type: 'warning',
                                  closable: !1,
                                  'show-icon': '',
                                  style: { 'margin-bottom': '20px' }
                                },
                                null,
                                8,
                                ['title']
                              ),
                              C('div', ie, [
                                C('div', le, [
                                  w(
                                    r,
                                    {
                                      modelValue: h.value,
                                      'onUpdate:modelValue':
                                        n[0] ||
                                        (n[0] = function (e) {
                                          return (h.value = e)
                                        }),
                                      placeholder: j(l)(
                                        'storageManagement.searchFileNamePlaceholder'
                                      ),
                                      clearable: '',
                                      style: { width: '400px', 'margin-right': '10px' },
                                      onClear: B,
                                      onKeyup: L(B, ['enter'])
                                    },
                                    {
                                      append: k(function () {
                                        return [
                                          w(
                                            o,
                                            { onClick: B },
                                            {
                                              default: k(function () {
                                                return [S(A(j(l)('storageManagement.refresh')), 1)]
                                              }),
                                              _: 1
                                            }
                                          )
                                        ]
                                      }),
                                      _: 1
                                    },
                                    8,
                                    ['modelValue', 'placeholder', 'onKeyup']
                                  ),
                                  w(
                                    o,
                                    { type: 'danger', onClick: G },
                                    {
                                      default: k(function () {
                                        return [
                                          S(A(j(l)('storageManagement.stopVideoInjection')), 1)
                                        ]
                                      }),
                                      _: 1
                                    }
                                  ),
                                  C('div', ce, [
                                    w(
                                      c,
                                      {
                                        modelValue: f.value,
                                        'onUpdate:modelValue':
                                          n[1] ||
                                          (n[1] = function (e) {
                                            return (f.value = e)
                                          })
                                      },
                                      {
                                        default: k(function () {
                                          return [S(A(j(l)('storageManagement.loopPlay')), 1)]
                                        }),
                                        _: 1
                                      },
                                      8,
                                      ['modelValue']
                                    )
                                  ])
                                ]),
                                F(
                                  (x(),
                                  I(
                                    V,
                                    {
                                      data: u.value,
                                      style: { width: '100%' },
                                      'max-height': 'calc(100vh - 460px)'
                                    },
                                    {
                                      default: k(function () {
                                        return [
                                          w(
                                            m,
                                            {
                                              prop: 'fileName',
                                              label: j(l)('storageManagement.fileName'),
                                              'min-width': '150'
                                            },
                                            null,
                                            8,
                                            ['label']
                                          ),
                                          w(
                                            m,
                                            {
                                              prop: 'fileSize',
                                              label: j(l)('storageManagement.fileSize'),
                                              'min-width': '100'
                                            },
                                            {
                                              default: k(function (e) {
                                                return [
                                                  S(
                                                    A(
                                                      ((t = e.row.fileSize),
                                                      t < 1024
                                                        ? t + ' B'
                                                        : t < 1048576
                                                          ? (t / 1024).toFixed(2) + ' KB'
                                                          : t < 1073741824
                                                            ? (t / 1048576).toFixed(2) + ' MB'
                                                            : (t / 1073741824).toFixed(2) + ' GB')
                                                    ),
                                                    1
                                                  )
                                                ]
                                                var t
                                              }),
                                              _: 1
                                            },
                                            8,
                                            ['label']
                                          ),
                                          w(
                                            m,
                                            {
                                              label: j(l)('storageManagement.operations'),
                                              'min-width': '60'
                                            },
                                            {
                                              default: k(function (e) {
                                                return [
                                                  v.value && g.value === e.row.id
                                                    ? (x(),
                                                      y('div', se, [
                                                        C('div', ue, [
                                                          de,
                                                          w(
                                                            _,
                                                            {
                                                              percentage: p.value,
                                                              'show-text': !1,
                                                              'stroke-width': 6,
                                                              class: 'injection-progress'
                                                            },
                                                            null,
                                                            8,
                                                            ['percentage']
                                                          ),
                                                          C(
                                                            'span',
                                                            fe,
                                                            A(Math.round(p.value)) + '%',
                                                            1
                                                          )
                                                        ])
                                                      ]))
                                                    : (x(),
                                                      I(
                                                        E,
                                                        {
                                                          key: 1,
                                                          type: 'primary',
                                                          onClick: function (t) {
                                                            var n
                                                            'mp4' ===
                                                            ((n = e.row).fileName || '')
                                                              .toLowerCase()
                                                              .split('.')
                                                              .pop()
                                                              ? v.value
                                                                ? i.warning(
                                                                    '当前正在录播中，请等待完成'
                                                                  )
                                                                : (U(n),
                                                                  s('select-file', n, f.value))
                                                              : i.error('仅支持.mp4格式的视频文件')
                                                          }
                                                        },
                                                        {
                                                          default: k(function () {
                                                            return [
                                                              S(
                                                                A(
                                                                  j(l)(
                                                                    'storageManagement.videoInjection'
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
                                                      ))
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
                                  [[O, d.value]]
                                ),
                                C('div', pe, [
                                  w(
                                    P,
                                    {
                                      'current-page': M.value.currentPage,
                                      'onUpdate:currentPage':
                                        n[2] ||
                                        (n[2] = function (e) {
                                          return (M.value.currentPage = e)
                                        }),
                                      'page-size': M.value.pageSize,
                                      'onUpdate:pageSize':
                                        n[3] ||
                                        (n[3] = function (e) {
                                          return (M.value.pageSize = e)
                                        }),
                                      'page-sizes': [10, 20, 50, 100],
                                      total: M.value.total,
                                      layout: 'total, sizes, prev, pager, next, jumper',
                                      onSizeChange: T,
                                      onCurrentChange: N
                                    },
                                    null,
                                    8,
                                    ['current-page', 'page-size', 'total']
                                  )
                                ])
                              ])
                            ])
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ['model-value', 'title']
                    )
                  )
                }
              }
            }),
            ge = G(ve, [['__scopeId', 'data-v-f4816af2']]),
            he = function (e) {
              return (V('data-v-420f04a7'), (e = e()), N(), e)
            },
            me = { class: 'phone-box-body', style: { height: '100%', width: '100%' } },
            be = {
              class: 'video-and-toolbar',
              style: {
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'space-between',
                width: '100%',
                height: '100%'
              }
            },
            xe = {
              style: {
                flex: '1',
                height: '100%',
                'overflow-y': 'auto',
                'scrollbar-width': 'none',
                position: 'relative'
              }
            },
            ye = ['id'],
            we = ['id'],
            ke = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '主页' }, '🏠', -1)
              })
            ],
            je = he(function () {
              return C('span', { class: 'tool-label' }, '主页', -1)
            }),
            Ce = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '任务栏' }, '☰', -1)
              })
            ],
            Ae = he(function () {
              return C('span', { class: 'tool-label' }, '任务栏', -1)
            }),
            Ie = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '返回' }, '↩️', -1)
              })
            ],
            Me = he(function () {
              return C('span', { class: 'tool-label' }, '返回', -1)
            }),
            Se = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '旋转屏幕' }, '🔄', -1)
              })
            ],
            _e = he(function () {
              return C('span', { class: 'tool-label' }, '旋转', -1)
            }),
            Ee = { class: 'toolbar-section' },
            ze = { class: 'toolbar-buttons' },
            Le = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '截图' }, '📸', -1)
              })
            ],
            Fe = he(function () {
              return C('span', { class: 'tool-label' }, '截图', -1)
            }),
            Ve = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '音量+' }, '🔊', -1)
              })
            ],
            Ne = he(function () {
              return C('span', { class: 'tool-label' }, '音量+', -1)
            }),
            Te = [
              he(function () {
                return C('span', { class: 'tool-icon', title: '音量-' }, '🔉', -1)
              })
            ],
            Be = he(function () {
              return C('span', { class: 'tool-label' }, '音量-', -1)
            }),
            Ue = { class: 'tool-item' },
            Pe = ['title'],
            Re = ['title'],
            Oe = { class: 'tool-label' },
            Ge = { class: 'tool-item' },
            De = ['title'],
            He = { class: 'tool-label' },
            Ye = he(function () {
              return C('div', { class: 'recording-dot' }, null, -1)
            }),
            Qe = he(function () {
              return C('span', { class: 'recording-text' }, '录播中', -1)
            }),
            qe = { class: 'stop-overlay' },
            Ke = h({
              __name: 'DeviceControlScreen',
              props: {
                padCode: { type: String, default: '' },
                isPcMode: { type: Boolean, default: !1 },
                isVertical: { type: Boolean, default: !1 }
              },
              emits: ['update:isVertical'],
              setup: function (e, n) {
                var o = n.expose,
                  r = (n.emit, O().t),
                  h = e,
                  S = m(!1),
                  L = m({ rotate: 0 }),
                  V = m(!1),
                  N = m(null),
                  P = m(!1),
                  R = m(!1),
                  G = m(),
                  H = m({
                    isStreaming: !0,
                    buttonTitle: '停止拉流',
                    buttonIcon: '📷',
                    buttonLabel: '停止拉流'
                  })
                ;(E(
                  function () {
                    return h.padCode
                  },
                  function (e) {
                    U(function () {
                      Q()
                    })
                  }
                ),
                  _(function () {
                    h.padCode && Q()
                  }),
                  T(function () {
                    ;(te(), ee())
                  }))
                var Y = m(null),
                  Q = (function () {
                    var e = a(
                      t().mark(function e() {
                        var n, a, o
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((S.value = !0), (e.next = 3), p({ padCode: h.padCode }))
                              case 3:
                                ;((n = e.sent),
                                  (a = n.data.token),
                                  (o = {
                                    token: a,
                                    baseUrl: 'https://openapi-hk.armcloud.net',
                                    isWsProxy: !1,
                                    retryCount: 5,
                                    uuid: d(),
                                    enableMicrophone: !0,
                                    enableCamera: !0,
                                    deviceInfo: {
                                      padCode: h.padCode,
                                      userId: d(),
                                      videoStream: { resolution: 13, frameRate: 2, bitrate: 3 },
                                      autoRecoveryTime: 0,
                                      mediaType: 3,
                                      keyboard: 'local',
                                      saveCloudClipboard: !0
                                    },
                                    viewId: 'controlScreen-'.concat(h.padCode),
                                    callbacks: {
                                      onInit: function (e) {
                                        var t
                                        ;(null === (t = Y.value) || void 0 === t || t.start(),
                                          (S.value = !1))
                                      },
                                      onConnectSuccess: function () {
                                        S.value = !1
                                      },
                                      onMonitorOperation: function (e) {},
                                      onConnectFail: function (e) {
                                        ;(e.code, e.msg)
                                        S.value = !1
                                      },
                                      onMediaDevicesToggle: function (e) {},
                                      onAutoRecoveryTime: function () {
                                        l.confirm(
                                          '设备触发无操作回收，暂停拉流; 点击确认，恢复拉流',
                                          '提示',
                                          {
                                            confirmButtonText: '确认',
                                            cancelButtonText: '取消',
                                            type: 'warning'
                                          }
                                        ).then(function () {
                                          var e
                                          null === (e = Y.value) || void 0 === e || e.start()
                                        })
                                      },
                                      onAutoplayFailed: function (e) {},
                                      onRunInformation: function (e) {},
                                      onChangeResolution: function (e, t) {},
                                      onTransparentMsg: function (e, t) {},
                                      onErrorMessage: function (e) {},
                                      onOutputClipper: function (e) {
                                        ;(e &&
                                          e.content &&
                                          D(e.content, function () {
                                            i.success(r('common.copySuccess'))
                                          }),
                                          e &&
                                            e.content &&
                                            D(e.content, function () {
                                              i.success('复制成功')
                                            }))
                                      },
                                      onRenderedFirstFrame: function (e) {},
                                      onAudioRecovery: function () {},
                                      onAudioPause: function () {},
                                      onSocketCallback: function (e) {
                                        e.code
                                      },
                                      onProgress: function (e) {},
                                      onGroupControlError: function (e) {},
                                      onUserLeaveOrJoin: function (e) {},
                                      onSendUserError: function (e) {
                                        e.code
                                      },
                                      onConnectionStateChanged: function (e) {},
                                      onEquipmentInfo: function (e) {},
                                      onVideoInit: function (e) {},
                                      onVideoError: function (e) {
                                        e.code
                                      },
                                      onAudioInit: function (e) {},
                                      onInjectVideoResult: function (e, t) {
                                        '10405' != t.code
                                          ? 'startVideoInjection' === e
                                            ? t.isSuccess
                                              ? (i.success(
                                                  r('storageManagement.videoInjectionSuccess')
                                                ),
                                                (P.value = !0),
                                                G.value && G.value.handleVideoInjectionSuccess())
                                              : (i.error(
                                                  r('storageManagement.videoInjectionFailed') +
                                                    ': ' +
                                                    (t.content || '')
                                                ),
                                                (P.value = !1),
                                                G.value && G.value.handleVideoInjectionFailed())
                                            : 'stopVideoInjection' === e &&
                                              (t.isSuccess
                                                ? (i.success(
                                                    r('storageManagement.stopVideoInjectionSuccess')
                                                  ),
                                                  (P.value = !1))
                                                : i.error(
                                                    r(
                                                      'storageManagement.stopVideoInjectionFailed'
                                                    ) +
                                                      ': ' +
                                                      (t.content || '')
                                                  ))
                                          : (P.value = !0)
                                      },
                                      onAudioError: function (e) {},
                                      onChangeRotate: function (e, t) {
                                        L.value.rotate = e
                                        var n = document.getElementById('phoneBox')
                                        n &&
                                          ((n.style.height = t.height + 'px'),
                                          (n.style.width = t.width + 'px'))
                                        var a = document.getElementById('videoToolbar')
                                        a &&
                                          ((a.style.height = t.height + 'px'),
                                          (a.style.maxHeight = t.height + 'px'))
                                      },
                                      onUserJoined: function (e) {
                                        var t
                                        null === (t = Y.value) ||
                                          void 0 === t ||
                                          t.executeAdbCommand(
                                            'settings put system accelerometer_rotation 0'
                                          )
                                      }
                                    }
                                  }),
                                  (Y.value = new f(o)))
                              case 7:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  q = function () {
                    Y.value && Y.value.setPhoneRotation(L.value.rotate ? 0 : 1)
                  },
                  K = function () {
                    Y.value && Y.value.sendCommand('back')
                  },
                  X = function () {
                    Y.value && Y.value.sendCommand('home')
                  },
                  J = function () {
                    Y.value && Y.value.sendCommand('menu')
                  },
                  W = function () {
                    Y.value && Y.value.increaseVolume()
                  },
                  Z = function () {
                    Y.value && Y.value.decreaseVolume()
                  },
                  $ = (function () {
                    var e = a(
                      t().mark(function e() {
                        var n, a
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (h.padCode) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    c({
                                      type: 'warning',
                                      message: r('storageManagement.screenshotNoInstance')
                                    }),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  return (
                                    (e.prev = 3),
                                    (S.value = !0),
                                    (e.next = 7),
                                    g({ padCodes: [h.padCode], format: 'png', quality: '100' })
                                  )
                                case 7:
                                  if (!(n = e.sent).data) {
                                    e.next = 14
                                    break
                                  }
                                  ;((a = n.data[0].url),
                                    window.open(a, '_blank'),
                                    c({
                                      type: 'success',
                                      message: r('storageManagement.screenshotSuccess')
                                    }),
                                    (e.next = 15))
                                  break
                                case 14:
                                  throw new Error('未获取到截图URL')
                                case 15:
                                  e.next = 21
                                  break
                                case 17:
                                  ;((e.prev = 17),
                                    (e.t0 = e.catch(3)),
                                    console.error('截图失败:', e.t0),
                                    c({
                                      type: 'error',
                                      message:
                                        r('storageManagement.screenshotFailed') +
                                        ': ' +
                                        e.t0.message
                                    }))
                                case 21:
                                  return ((e.prev = 21), (S.value = !1), e.finish(21))
                                case 24:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 17, 21, 24]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ee = function () {
                    Y.value && Y.value.stop()
                  },
                  te = (function () {
                    var e = a(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!H.value.isStreaming) {
                                  e.next = 6
                                  break
                                }
                                return ((e.next = 3), v({ padCodes: [h.padCode] }))
                              case 3:
                                ;(Y.value && Y.value.stop(),
                                  (H.value = {
                                    isStreaming: !1,
                                    buttonTitle: '恢复拉流',
                                    buttonIcon: '▶️',
                                    buttonLabel: '恢复拉流'
                                  }),
                                  c({ type: 'success', message: '停止拉流成功' }))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })(),
                  ne = (function () {
                    var e = a(
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (h.padCode) {
                                    e.next = 3
                                    break
                                  }
                                  return (
                                    c({ type: 'warning', message: '请先选择实例' }),
                                    e.abrupt('return')
                                  )
                                case 3:
                                  if (((e.prev = 3), !H.value.isStreaming)) {
                                    e.next = 8
                                    break
                                  }
                                  ;(te(), (e.next = 12))
                                  break
                                case 8:
                                  return ((e.next = 10), Q())
                                case 10:
                                  ;((H.value = {
                                    isStreaming: !0,
                                    buttonTitle: '停止拉流',
                                    buttonIcon: '📷',
                                    buttonLabel: '停止拉流'
                                  }),
                                    c({ type: 'success', message: '恢复拉流成功' }))
                                case 12:
                                  e.next = 18
                                  break
                                case 14:
                                  ;((e.prev = 14),
                                    (e.t0 = e.catch(3)),
                                    console.error('操作失败:', e.t0),
                                    c({
                                      type: 'error',
                                      message: H.value.isStreaming ? '停止拉流失败' : '恢复拉流失败'
                                    }))
                                case 18:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[3, 14]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                o({ initEngine: Q, stop: ee })
                var ae = function () {
                    V.value = !V.value
                  },
                  oe = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    if (Y.value)
                      try {
                        ;(Y.value.injectVideoStream('startVideoInjection', {
                          fileUrl: e.originUrl,
                          isLoop: t,
                          fileName: e.fileName
                        }),
                          (N.value = e))
                      } catch (n) {
                        ;(console.error('视频注入失败:', n),
                          i.error(r('storageManagement.videoInjectionFailed') + ': ' + n.message))
                      }
                    else
                      i.error(
                        r('storageManagement.videoInjectionFailed') +
                          ': ' +
                          r('engineNotInitialized')
                      )
                  },
                  re = function () {
                    if (Y.value)
                      try {
                        ;(Y.value.injectVideoStream('stopVideoInjection', {}),
                          (N.value = null),
                          (P.value = !1))
                      } catch (e) {
                        ;(console.error('停止视频注入失败:', e),
                          i.error(
                            r('storageManagement.stopVideoInjectionFailed') + ': ' + e.message
                          ))
                      }
                    else
                      i.error(
                        r('storageManagement.stopVideoInjectionFailed') +
                          ': ' +
                          r('engineNotInitialized')
                      )
                  }
                return function (t, n) {
                  var a = b('el-icon'),
                    o = z('loading')
                  return (
                    x(),
                    y(
                      B,
                      null,
                      [
                        F(
                          (x(),
                          y('div', me, [
                            C('div', be, [
                              C('div', xe, [
                                e.padCode
                                  ? (x(),
                                    y(
                                      'div',
                                      {
                                        key: 0,
                                        class: 'video-container',
                                        id: 'controlScreen-'.concat(e.padCode),
                                        style: { width: '360px', height: '100%', margin: '0 auto' }
                                      },
                                      null,
                                      8,
                                      ye
                                    ))
                                  : M('', !0)
                              ]),
                              e.padCode
                                ? (x(),
                                  y(
                                    'div',
                                    {
                                      key: 0,
                                      class: 'video-toolbar',
                                      id: 'videoToolbar-'.concat(e.padCode)
                                    },
                                    [
                                      C('div', { class: 'toolbar-section' }, [
                                        C('div', { class: 'toolbar-buttons' }, [
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: X }, ke),
                                            je
                                          ]),
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: J }, Ce),
                                            Ae
                                          ]),
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: K }, Ie),
                                            Me
                                          ]),
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: q }, Se),
                                            _e
                                          ])
                                        ])
                                      ]),
                                      C('div', Ee, [
                                        C('div', ze, [
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: $ }, Le),
                                            Fe
                                          ]),
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: W }, Ve),
                                            Ne
                                          ]),
                                          C('div', { class: 'tool-item' }, [
                                            C('button', { class: 'tool-btn', onClick: Z }, Te),
                                            Be
                                          ]),
                                          C('div', Ue, [
                                            C(
                                              'button',
                                              {
                                                class: 'tool-btn',
                                                onClick: ne,
                                                title: H.value.buttonTitle
                                              },
                                              [
                                                C(
                                                  'span',
                                                  {
                                                    class: 'tool-icon',
                                                    title: H.value.buttonTitle
                                                  },
                                                  A(H.value.buttonIcon),
                                                  9,
                                                  Re
                                                )
                                              ],
                                              8,
                                              Pe
                                            ),
                                            C('span', Oe, A(H.value.buttonLabel), 1)
                                          ]),
                                          C('div', Ge, [
                                            C('button', { class: 'tool-btn', onClick: ae }, [
                                              C(
                                                'span',
                                                {
                                                  class: 'tool-icon',
                                                  title: j(r)('storageManagement.videoInjection')
                                                },
                                                '📹',
                                                8,
                                                De
                                              )
                                            ]),
                                            C(
                                              'span',
                                              He,
                                              A(j(r)('storageManagement.videoInjection')),
                                              1
                                            )
                                          ])
                                        ])
                                      ])
                                    ],
                                    8,
                                    we
                                  ))
                                : M('', !0)
                            ]),
                            P.value
                              ? (x(),
                                y(
                                  'div',
                                  {
                                    key: 0,
                                    class: 'video-injection-indicator',
                                    onClick: re,
                                    onMouseenter:
                                      n[0] ||
                                      (n[0] = function (e) {
                                        return (R.value = !0)
                                      }),
                                    onMouseleave:
                                      n[1] ||
                                      (n[1] = function (e) {
                                        return (R.value = !1)
                                      })
                                  },
                                  [
                                    Ye,
                                    Qe,
                                    R.value
                                      ? (x(),
                                        I(
                                          j(u),
                                          {
                                            key: 0,
                                            effect: 'dark',
                                            content: '点击停止录播',
                                            placement: 'top'
                                          },
                                          {
                                            default: k(function () {
                                              return [
                                                C('div', qe, [
                                                  w(
                                                    a,
                                                    { class: 'stop-icon' },
                                                    {
                                                      default: k(function () {
                                                        return [w(j(s))]
                                                      }),
                                                      _: 1
                                                    }
                                                  )
                                                ])
                                              ]
                                            }),
                                            _: 1
                                          }
                                        ))
                                      : M('', !0)
                                  ],
                                  32
                                ))
                              : M('', !0)
                          ])),
                          [[o, S.value]]
                        ),
                        w(
                          ge,
                          {
                            ref_key: 'videoInjectionDrawerRef',
                            ref: G,
                            visible: V.value,
                            'onUpdate:visible':
                              n[2] ||
                              (n[2] = function (e) {
                                return (V.value = e)
                              }),
                            'pad-code': e.padCode,
                            onSelectFile: oe,
                            onStopInjection: re
                          },
                          null,
                          8,
                          ['visible', 'pad-code']
                        )
                      ],
                      64
                    )
                  )
                }
              }
            })
          e('D', G(Ke, [['__scopeId', 'data-v-420f04a7']]))
        }
      }
    }
  )
})()
