import {
  p as ue,
  y as R,
  N as e,
  r as D,
  e as fe,
  d as Y,
  U as he,
  b as W,
  n as ee,
  R as ge,
  D as me,
  aq as ve,
  at as pe,
  f as H,
  h as q,
  u as B,
  H as $,
  i as Z,
  F as xe,
  a0 as ye,
  G as be,
  L as G,
  K as we,
  M as Ee
} from './vue-66851fce.js'
import { g as J, q as Fe } from './index-e81b6066.js'
import { f as _e, _ as ke } from './index-ae33a03d.js'
import { u as ae, f as te, F as De } from './index-8679d900.js'
import { u as le, L as ne, b as Ce, a as L } from './function-call-b9e3413a.js'
import {
  c as O,
  h as Se,
  j as U,
  w as j,
  m as z,
  t as ie,
  k as re,
  l as se,
  o as X,
  q as Te,
  n as Ie,
  r as Be,
  p as oe,
  e as ce,
  s as Q,
  I as $e
} from './index-ba0a22a8.js'
import { B as K, C as Me } from './index-525ab0a8.js'
import { T as Ve } from './index-e633592d.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
import './use-route-23d6e27a.js'
const Le = Symbol(),
  Pe = () => ue(Le, null),
  [Ae, N] = O('empty'),
  Re = { image: U('default'), imageSize: [Number, String, Array], description: String }
var He = R({
  name: Ae,
  props: Re,
  setup(a, { slots: o }) {
    const c = () => {
        const d = o.description ? o.description() : a.description
        if (d) return e('p', { class: N('description') }, [d])
      },
      x = () => {
        if (o.default) return e('div', { class: N('bottom') }, [o.default()])
      },
      C = ae(),
      r = (d) => ''.concat(C, '-').concat(d),
      n = (d) => 'url(#'.concat(r(d), ')'),
      l = (d, m, M) =>
        e('stop', { 'stop-color': d, offset: ''.concat(m, '%'), 'stop-opacity': M }, null),
      s = (d, m) => [l(d, 0), l(m, 100)],
      h = (d) => [
        e('defs', null, [
          e(
            'radialGradient',
            {
              id: r(d),
              cx: '50%',
              cy: '54%',
              fx: '50%',
              fy: '54%',
              r: '297%',
              gradientTransform: 'matrix(-.16 0 0 -.33 .58 .72)',
              'data-allow-mismatch': 'attribute'
            },
            [l('#EBEDF0', 0), l('#F2F3F5', 100, 0.3)]
          )
        ]),
        e(
          'ellipse',
          {
            fill: n(d),
            opacity: '.8',
            cx: '80',
            cy: '140',
            rx: '46',
            ry: '8',
            'data-allow-mismatch': 'attribute'
          },
          null
        )
      ],
      u = () => [
        e('defs', null, [
          e(
            'linearGradient',
            { id: r('a'), x1: '64%', y1: '100%', x2: '64%', 'data-allow-mismatch': 'attribute' },
            [l('#FFF', 0, 0.5), l('#F2F3F5', 100)]
          )
        ]),
        e('g', { opacity: '.8', 'data-allow-mismatch': 'children' }, [
          e('path', { d: 'M36 131V53H16v20H2v58h34z', fill: n('a') }, null),
          e('path', { d: 'M123 15h22v14h9v77h-31V15z', fill: n('a') }, null)
        ])
      ],
      w = () => [
        e('defs', null, [
          e(
            'linearGradient',
            {
              id: r('b'),
              x1: '64%',
              y1: '97%',
              x2: '64%',
              y2: '0%',
              'data-allow-mismatch': 'attribute'
            },
            [l('#F2F3F5', 0, 0.3), l('#F2F3F5', 100)]
          )
        ]),
        e('g', { opacity: '.8', 'data-allow-mismatch': 'children' }, [
          e(
            'path',
            {
              d: 'M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z',
              fill: n('b')
            },
            null
          ),
          e(
            'path',
            {
              d: 'M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z',
              fill: n('b')
            },
            null
          )
        ])
      ],
      E = () =>
        e('svg', { viewBox: '0 0 160 160' }, [
          e('defs', { 'data-allow-mismatch': 'children' }, [
            e('linearGradient', { id: r(1), x1: '64%', y1: '100%', x2: '64%' }, [
              l('#FFF', 0, 0.5),
              l('#F2F3F5', 100)
            ]),
            e('linearGradient', { id: r(2), x1: '50%', x2: '50%', y2: '84%' }, [
              l('#EBEDF0', 0),
              l('#DCDEE0', 100, 0)
            ]),
            e('linearGradient', { id: r(3), x1: '100%', x2: '100%', y2: '100%' }, [
              s('#EAEDF0', '#DCDEE0')
            ]),
            e(
              'radialGradient',
              {
                id: r(4),
                cx: '50%',
                cy: '0%',
                fx: '50%',
                fy: '0%',
                r: '100%',
                gradientTransform: 'matrix(0 1 -.54 0 .5 -.5)'
              },
              [l('#EBEDF0', 0), l('#FFF', 100, 0)]
            )
          ]),
          e('g', { fill: 'none' }, [
            u(),
            e(
              'path',
              { fill: n(4), d: 'M0 139h160v21H0z', 'data-allow-mismatch': 'attribute' },
              null
            ),
            e(
              'path',
              {
                d: 'M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z',
                fill: n(2),
                'data-allow-mismatch': 'attribute'
              },
              null
            ),
            e(
              'g',
              {
                opacity: '.6',
                'stroke-linecap': 'round',
                'stroke-width': '7',
                'data-allow-mismatch': 'children'
              },
              [
                e('path', { d: 'M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13', stroke: n(3) }, null),
                e('path', { d: 'M53 36a34 34 0 0 0 0 48', stroke: n(3) }, null),
                e('path', { d: 'M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13', stroke: n(3) }, null),
                e('path', { d: 'M106 84a34 34 0 0 0 0-48', stroke: n(3) }, null)
              ]
            ),
            e('g', { transform: 'translate(31 105)' }, [
              e('rect', { fill: '#EBEDF0', width: '98', height: '34', rx: '2' }, null),
              e(
                'rect',
                { fill: '#FFF', x: '9', y: '8', width: '80', height: '18', rx: '1.1' },
                null
              ),
              e(
                'rect',
                { fill: '#EBEDF0', x: '15', y: '12', width: '18', height: '6', rx: '1.1' },
                null
              )
            ])
          ])
        ]),
      S = () =>
        e('svg', { viewBox: '0 0 160 160' }, [
          e('defs', { 'data-allow-mismatch': 'children' }, [
            e('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: r(5) }, [
              s('#F2F3F5', '#DCDEE0')
            ]),
            e('linearGradient', { x1: '95%', y1: '48%', x2: '5.5%', y2: '51%', id: r(6) }, [
              s('#EAEDF1', '#DCDEE0')
            ]),
            e('linearGradient', { y1: '45%', x2: '100%', y2: '54%', id: r(7) }, [
              s('#EAEDF1', '#DCDEE0')
            ])
          ]),
          u(),
          w(),
          e('g', { transform: 'translate(36 50)', fill: 'none' }, [
            e('g', { transform: 'translate(8)' }, [
              e(
                'rect',
                {
                  fill: '#EBEDF0',
                  opacity: '.6',
                  x: '38',
                  y: '13',
                  width: '36',
                  height: '53',
                  rx: '2'
                },
                null
              ),
              e(
                'rect',
                {
                  fill: n(5),
                  width: '64',
                  height: '66',
                  rx: '2',
                  'data-allow-mismatch': 'attribute'
                },
                null
              ),
              e('rect', { fill: '#FFF', x: '6', y: '6', width: '52', height: '55', rx: '1' }, null),
              e(
                'g',
                { transform: 'translate(15 17)', fill: n(6), 'data-allow-mismatch': 'attribute' },
                [
                  e('rect', { width: '34', height: '6', rx: '1' }, null),
                  e('path', { d: 'M0 14h34v6H0z' }, null),
                  e('rect', { y: '28', width: '34', height: '6', rx: '1' }, null)
                ]
              )
            ]),
            e(
              'rect',
              {
                fill: n(7),
                y: '61',
                width: '88',
                height: '28',
                rx: '1',
                'data-allow-mismatch': 'attribute'
              },
              null
            ),
            e(
              'rect',
              { fill: '#F7F8FA', x: '29', y: '72', width: '30', height: '6', rx: '1' },
              null
            )
          ])
        ]),
      g = () =>
        e('svg', { viewBox: '0 0 160 160' }, [
          e('defs', null, [
            e(
              'linearGradient',
              { x1: '50%', x2: '50%', y2: '100%', id: r(8), 'data-allow-mismatch': 'attribute' },
              [s('#EAEDF1', '#DCDEE0')]
            )
          ]),
          u(),
          w(),
          h('c'),
          e(
            'path',
            {
              d: 'm59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z',
              fill: n(8),
              'data-allow-mismatch': 'attribute'
            },
            null
          )
        ]),
      k = () =>
        e('svg', { viewBox: '0 0 160 160' }, [
          e('defs', { 'data-allow-mismatch': 'children' }, [
            e('linearGradient', { x1: '50%', y1: '100%', x2: '50%', id: r(9) }, [
              s('#EEE', '#D8D8D8')
            ]),
            e('linearGradient', { x1: '100%', y1: '50%', y2: '50%', id: r(10) }, [
              s('#F2F3F5', '#DCDEE0')
            ]),
            e('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: r(11) }, [
              s('#F2F3F5', '#DCDEE0')
            ]),
            e('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: r(12) }, [
              s('#FFF', '#F7F8FA')
            ])
          ]),
          u(),
          w(),
          h('d'),
          e(
            'g',
            { transform: 'rotate(-45 113 -4)', fill: 'none', 'data-allow-mismatch': 'children' },
            [
              e(
                'rect',
                { fill: n(9), x: '24', y: '52.8', width: '5.8', height: '19', rx: '1' },
                null
              ),
              e(
                'rect',
                { fill: n(10), x: '22.1', y: '67.3', width: '9.9', height: '28', rx: '1' },
                null
              ),
              e(
                'circle',
                { stroke: n(11), 'stroke-width': '8', cx: '27', cy: '27', r: '27' },
                null
              ),
              e('circle', { fill: n(12), cx: '27', cy: '27', r: '16' }, null),
              e(
                'path',
                {
                  d: 'M37 7c-8 0-15 5-16 12',
                  stroke: n(11),
                  'stroke-width': '3',
                  opacity: '.5',
                  'stroke-linecap': 'round',
                  transform: 'rotate(45 29 13)'
                },
                null
              )
            ]
          )
        ]),
      F = () => {
        var d
        if (o.image) return o.image()
        const m = { error: g, search: k, network: E, default: S }
        return ((d = m[a.image]) == null ? void 0 : d.call(m)) || e('img', { src: a.image }, null)
      }
    return () =>
      e('div', { class: N() }, [
        e('div', { class: N('image'), style: Se(a.imageSize) }, [F()]),
        c(),
        x()
      ])
  }
})
const Ge = j(He),
  [Ne, V, ze] = O('list'),
  Ue = {
    error: Boolean,
    offset: z(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: U('down'),
    loadingText: String,
    finishedText: String,
    immediateCheck: ie
  }
var Oe = R({
  name: Ne,
  props: Ue,
  emits: ['load', 'update:error', 'update:loading'],
  setup(a, { emit: o, slots: c }) {
    const x = D(a.loading),
      C = D(),
      r = D(),
      n = Pe(),
      l = re(C),
      s = fe(() => a.scroller || l.value),
      h = () => {
        ee(() => {
          if (
            x.value ||
            a.finished ||
            a.disabled ||
            a.error ||
            (n == null ? void 0 : n.value) === !1
          )
            return
          const { direction: g } = a,
            k = +a.offset,
            F = X(s)
          if (!F.height || Te(C)) return
          let d = !1
          const m = X(r)
          ;(g === 'up' ? (d = F.top - m.top <= k) : (d = m.bottom - F.bottom <= k),
            d && ((x.value = !0), o('update:loading', !0), o('load')))
        })
      },
      u = () => {
        if (a.finished) {
          const g = c.finished ? c.finished() : a.finishedText
          if (g) return e('div', { class: V('finished-text') }, [g])
        }
      },
      w = () => {
        ;(o('update:error', !1), h())
      },
      E = () => {
        if (a.error) {
          const g = c.error ? c.error() : a.errorText
          if (g)
            return e('div', { role: 'button', class: V('error-text'), tabindex: 0, onClick: w }, [
              g
            ])
        }
      },
      S = () => {
        if (x.value && !a.finished && !a.disabled)
          return e('div', { class: V('loading') }, [
            c.loading
              ? c.loading()
              : e(
                  ne,
                  { class: V('loading-icon') },
                  { default: () => [a.loadingText || ze('loading')] }
                )
          ])
      }
    return (
      Y(() => [a.loading, a.finished, a.error], h),
      n &&
        Y(n, (g) => {
          g && h()
        }),
      he(() => {
        x.value = a.loading
      }),
      W(() => {
        a.immediateCheck && h()
      }),
      le({ check: h }),
      se('scroll', h, { target: s, passive: !0 }),
      () => {
        var g
        const k = (g = c.default) == null ? void 0 : g.call(c),
          F = e('div', { ref: r, class: V('placeholder') }, null)
        return e('div', { ref: C, role: 'feed', class: V(), 'aria-busy': x.value }, [
          a.direction === 'down' ? k : F,
          S(),
          u(),
          E(),
          a.direction === 'up' ? k : F
        ])
      }
    )
  }
})
const je = j(Oe),
  [qe, P, Ke] = O('pull-refresh'),
  de = 50,
  Ye = ['pulling', 'loosing', 'success'],
  Ze = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: z(de),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: Ie,
    successDuration: z(500),
    animationDuration: z(300)
  }
var Je = R({
  name: qe,
  props: Ze,
  emits: ['change', 'refresh', 'update:modelValue'],
  setup(a, { emit: o, slots: c }) {
    let x
    const C = D(),
      r = D(),
      n = re(C),
      l = ge({ status: 'normal', distance: 0, duration: 0 }),
      s = Ce(),
      h = () => {
        if (a.headHeight !== de) return { height: ''.concat(a.headHeight, 'px') }
      },
      u = () => l.status !== 'loading' && l.status !== 'success' && !a.disabled,
      w = (i) => {
        const t = +(a.pullDistance || a.headHeight)
        return (
          i > t && (i < t * 2 ? (i = t + (i - t) / 2) : (i = t * 1.5 + (i - t * 2) / 4)),
          Math.round(i)
        )
      },
      E = (i, t) => {
        const T = +(a.pullDistance || a.headHeight)
        ;((l.distance = i),
          t
            ? (l.status = 'loading')
            : i === 0
              ? (l.status = 'normal')
              : i < T
                ? (l.status = 'pulling')
                : (l.status = 'loosing'),
          o('change', { status: l.status, distance: i }))
      },
      S = () => {
        const { status: i } = l
        return i === 'normal' ? '' : a[''.concat(i, 'Text')] || Ke(i)
      },
      g = () => {
        const { status: i, distance: t } = l
        if (c[i]) return c[i]({ distance: t })
        const T = []
        return (
          Ye.includes(i) && T.push(e('div', { class: P('text') }, [S()])),
          i === 'loading' && T.push(e(ne, { class: P('loading') }, { default: S })),
          T
        )
      },
      k = () => {
        ;((l.status = 'success'),
          setTimeout(() => {
            E(0)
          }, +a.successDuration))
      },
      F = (i) => {
        ;((x = Be(n.value) === 0), x && ((l.duration = 0), s.start(i)))
      },
      d = (i) => {
        u() && F(i)
      },
      m = (i) => {
        if (u()) {
          x || F(i)
          const { deltaY: t } = s
          ;(s.move(i), x && t.value >= 0 && s.isVertical() && (oe(i), E(w(t.value))))
        }
      },
      M = () => {
        x &&
          s.deltaY.value &&
          u() &&
          ((l.duration = +a.animationDuration),
          l.status === 'loosing'
            ? (E(+a.headHeight, !0), o('update:modelValue', !0), ee(() => o('refresh')))
            : E(0))
      }
    return (
      Y(
        () => a.modelValue,
        (i) => {
          ;((l.duration = +a.animationDuration),
            i ? E(+a.headHeight, !0) : c.success || a.successText ? k() : E(0, !1))
        }
      ),
      se('touchmove', m, { target: r }),
      () => {
        var i
        const t = {
          transitionDuration: ''.concat(l.duration, 'ms'),
          transform: l.distance ? 'translate3d(0,'.concat(l.distance, 'px, 0)') : ''
        }
        return e('div', { ref: C, class: P() }, [
          e(
            'div',
            {
              ref: r,
              class: P('track'),
              style: t,
              onTouchstartPassive: d,
              onTouchend: M,
              onTouchcancel: M
            },
            [
              e('div', { class: P('head'), style: h() }, [g()]),
              (i = c.default) == null ? void 0 : i.call(c)
            ]
          )
        ])
      }
    )
  }
})
const Xe = j(Je),
  [Qe, A, We] = O('search'),
  ea = ce({}, te, {
    label: String,
    shape: U('square'),
    leftIcon: U('search'),
    clearable: ie,
    actionText: String,
    background: String,
    showAction: Boolean
  })
var aa = R({
  name: Qe,
  props: ea,
  emits: [
    'blur',
    'focus',
    'clear',
    'search',
    'cancel',
    'clickInput',
    'clickLeftIcon',
    'clickRightIcon',
    'update:modelValue'
  ],
  setup(a, { emit: o, slots: c, attrs: x }) {
    const C = ae(),
      r = D(),
      n = () => {
        c.action || (o('update:modelValue', ''), o('cancel'))
      },
      l = (t) => {
        t.keyCode === 13 && (oe(t), o('search', a.modelValue))
      },
      s = () => a.id || ''.concat(C, '-input'),
      h = () => {
        if (c.label || a.label)
          return e('label', { class: A('label'), for: s(), 'data-allow-mismatch': 'attribute' }, [
            c.label ? c.label() : a.label
          ])
      },
      u = () => {
        if (a.showAction) {
          const t = a.actionText || We('cancel')
          return e('div', { class: A('action'), role: 'button', tabindex: 0, onClick: n }, [
            c.action ? c.action() : t
          ])
        }
      },
      w = () => {
        var t
        return (t = r.value) == null ? void 0 : t.blur()
      },
      E = () => {
        var t
        return (t = r.value) == null ? void 0 : t.focus()
      },
      S = (t) => o('blur', t),
      g = (t) => o('focus', t),
      k = (t) => o('clear', t),
      F = (t) => o('clickInput', t),
      d = (t) => o('clickLeftIcon', t),
      m = (t) => o('clickRightIcon', t),
      M = Object.keys(te),
      i = () => {
        const t = ce({}, x, Q(a, M), { id: s() }),
          T = (v) => o('update:modelValue', v)
        return e(
          De,
          me(
            {
              ref: r,
              type: 'search',
              class: A('field', { 'with-message': t.errorMessage }),
              border: !1,
              onBlur: S,
              onFocus: g,
              onClear: k,
              onKeypress: l,
              onClickInput: F,
              onClickLeftIcon: d,
              onClickRightIcon: m,
              'onUpdate:modelValue': T
            },
            t
          ),
          Q(c, ['left-icon', 'right-icon'])
        )
      }
    return (
      le({ focus: E, blur: w }),
      () => {
        var t
        return e(
          'div',
          { class: A({ 'show-action': a.showAction }), style: { background: a.background } },
          [
            (t = c.left) == null ? void 0 : t.call(c),
            e('div', { class: A('content', a.shape) }, [h(), i()]),
            u()
          ]
        )
      }
    )
  }
})
const ta = j(aa),
  la = { class: 'mobile-instance-list' },
  na = { class: 'instance-list' },
  ia = { class: 'instance-actions' },
  ra = R({
    __name: 'InstanceList',
    setup(a) {
      const o = ve(),
        c = _e(),
        { userInfo: x, roles: C } = pe(c),
        r = D(''),
        n = D([]),
        l = D(!1),
        s = D(!1),
        h = D(!1),
        u = D(1),
        w = D(10),
        E = D({}),
        S = (v) =>
          ({
            10: '运行中',
            11: '重启中',
            12: '重置中',
            13: '升级中',
            14: '异常',
            15: '未就绪',
            16: '备份中',
            17: '恢复数据中',
            18: '关机',
            19: '关机中',
            20: '开机中',
            21: '关机失败',
            22: '开机失败',
            23: '删除中',
            24: '删除失败',
            25: '已删除',
            26: '克隆中'
          })[v] || '未知('.concat(v, ')'),
        g = (v) =>
          ({
            10: 'success',
            11: 'warning',
            12: 'warning',
            13: 'warning',
            14: 'danger',
            15: 'info',
            16: 'warning',
            17: 'warning',
            18: 'danger',
            19: 'warning',
            20: 'warning',
            21: 'danger',
            22: 'danger',
            23: 'warning',
            24: 'danger',
            25: 'info',
            26: 'warning'
          })[v] || 'default',
        k = () => {
          ;((l.value = !0), (s.value = !1), (n.value = []), (u.value = 1), m())
        },
        F = () => {
          ;((r.value = ''), k())
        },
        d = async () => {
          l.value = !0
          try {
            const v = Object.values(E.value).some((b) => b !== '' && b !== null && b !== void 0),
              y = { page: u.value, rows: w.value, groupIds: [x.value.group_id] }
            let f = {}
            if (v) {
              if (
                ((f = await J({ ...E.value, page: u.value, page_size: w.value })), f.total === 0)
              ) {
                ;((n.value = []), (s.value = !0), (l.value = !1))
                return
              }
              y.page = 1
            }
            if (r.value) {
              const b = r.value
                .split(',')
                .map((p) => p.trim())
                .filter((p) => p !== '')
              y.padCodes = b
            } else v && (y.padCodes = f.instances.map((b) => b.instance_id))
            const _ = await Fe(y)
            try {
              if (v) {
                const b = Object.fromEntries(
                  f.instances.map((p) => [
                    p.instance_id,
                    { ...p, proxy_info: p.proxy_info ? JSON.parse(p.proxy_info) : {} }
                  ])
                )
                ;(_.data.pageData.forEach((p) => {
                  b[p.padCode] && (p.record = b[p.padCode])
                }),
                  h.value
                    ? ((n.value = _.data.pageData || []), (h.value = !1))
                    : n.value.push(...(_.data.pageData || [])),
                  u.value * w.value >= f.total ? (s.value = !0) : u.value++)
              } else {
                const b = await J({
                    instance_ids: _.data.pageData ? _.data.pageData.map((I) => I.padCode) : []
                  }),
                  p = Object.fromEntries(
                    b.instances.map((I) => [
                      I.instance_id,
                      { ...I, proxy_info: I.proxy_info ? JSON.parse(I.proxy_info) : {} }
                    ])
                  )
                ;(_.data.pageData.forEach((I) => {
                  p[I.padCode] && (I.record = p[I.padCode])
                }),
                  h.value
                    ? ((n.value = _.data.pageData || []), (h.value = !1))
                    : n.value.push(...(_.data.pageData || [])),
                  u.value * w.value >= _.data.total ? (s.value = !0) : u.value++)
              }
            } catch (b) {
              ;(h.value
                ? ((n.value = _.data.pageData || []), (h.value = !1))
                : n.value.push(...(_.data.pageData || [])),
                u.value * w.value >= _.data.total ? (s.value = !0) : u.value++)
            }
          } catch (v) {
            ;(console.error('获取实例列表失败:', v), L('加载失败'), (n.value = []))
          } finally {
            l.value = !1
          }
        },
        m = async () => {
          s.value || (await d())
        },
        M = () => {
          ;((u.value = 1), (s.value = !1), (n.value = []), m())
        },
        i = async (v) => {
          if (v.padStatus !== 10) {
            L('实例未运行，无法连接')
            return
          }
          try {
            ;(L('正在连接云机...'),
              await new Promise((y) => setTimeout(y, 1e3)),
              o.push({ name: 'mobileConnectCloudHost', params: { id: v.padCode } }))
          } catch (y) {
            L('连接失败')
          }
        },
        t = (v) => {
          o.push({ name: 'mobileInstanceDetail', params: { id: v.padCode } })
        },
        T = () => {
          L('创建实例功能开发中')
        }
      return (
        W(() => {
          m()
        }),
        (v, y) => (
          H(),
          q('div', la, [
            e(
              B(ta),
              {
                modelValue: r.value,
                'onUpdate:modelValue': y[0] || (y[0] = (f) => (r.value = f)),
                placeholder: '搜索实例编号',
                shape: 'round',
                onBlur: k,
                onClear: F
              },
              null,
              8,
              ['modelValue']
            ),
            e(
              B(Xe),
              {
                modelValue: h.value,
                'onUpdate:modelValue': y[2] || (y[2] = (f) => (h.value = f)),
                onRefresh: M
              },
              {
                default: $(() => [
                  e(
                    B(je),
                    {
                      loading: l.value,
                      'onUpdate:loading': y[1] || (y[1] = (f) => (l.value = f)),
                      finished: s.value,
                      'finished-text': '没有更多了',
                      onLoad: m
                    },
                    {
                      default: $(() => [
                        Z('div', na, [
                          (H(!0),
                          q(
                            xe,
                            null,
                            ye(n.value, (f) => {
                              var _, b
                              return (
                                H(),
                                q('div', { key: f.padCode, class: 'instance-item' }, [
                                  e(
                                    B(Me),
                                    {
                                      title: f.padCode,
                                      label: '分组：'
                                        .concat(
                                          ((_ = f.record) == null ? void 0 : _.group_name) || '--',
                                          ' | 备注：'
                                        )
                                        .concat(
                                          ((b = f.record) == null ? void 0 : b.note) || '--',
                                          ' | IP: '
                                        )
                                        .concat(f.padIp || '--'),
                                      'is-link': '',
                                      onClick: (p) => t(f)
                                    },
                                    {
                                      icon: $(() => [
                                        e(B($e), { name: 'phone', class: 'instance-icon' })
                                      ]),
                                      value: $(() => [
                                        e(
                                          B(Ve),
                                          { type: g(f.padStatus), size: 'small' },
                                          { default: $(() => [G(Ee(S(f.padStatus)), 1)]), _: 2 },
                                          1032,
                                          ['type']
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['title', 'label', 'onClick']
                                  ),
                                  Z('div', ia, [
                                    e(
                                      B(K),
                                      {
                                        size: 'small',
                                        type: 'primary',
                                        disabled: f.padStatus !== 10,
                                        onClick: (p) => i(f)
                                      },
                                      { default: $(() => [G(' 连接 ')]), _: 2 },
                                      1032,
                                      ['disabled', 'onClick']
                                    ),
                                    e(
                                      B(K),
                                      { size: 'small', type: 'default', onClick: (p) => t(f) },
                                      { default: $(() => [G(' 详情 ')]), _: 2 },
                                      1032,
                                      ['onClick']
                                    )
                                  ])
                                ])
                              )
                            }),
                            128
                          ))
                        ])
                      ]),
                      _: 1
                    },
                    8,
                    ['loading', 'finished']
                  )
                ]),
                _: 1
              },
              8,
              ['modelValue']
            ),
            !l.value && n.value.length === 0
              ? (H(),
                be(
                  B(Ge),
                  { key: 0, description: '暂无实例' },
                  {
                    default: $(() => [
                      e(
                        B(K),
                        { round: '', type: 'primary', onClick: T },
                        { default: $(() => [G(' 创建实例 ')]), _: 1 }
                      )
                    ]),
                    _: 1
                  }
                ))
              : we('', !0)
          ])
        )
      )
    }
  })
const xa = ke(ra, [['__scopeId', 'data-v-1036f703']])
export { xa as default }
