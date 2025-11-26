import { h as y, a as L, _ as k } from './index-ae33a03d.js'
import { E as i } from './element-74718691.js'
import {
  y as b,
  r as g,
  e as B,
  b as C,
  a8 as r,
  f as u,
  G as p,
  H as t,
  N as f,
  h as E,
  a0 as H,
  F,
  i as v,
  M as h,
  A as I,
  L as M
} from './vue-66851fce.js'
const V = { class: 'language-trigger' },
  j = { class: 'language-text' },
  z = b({
    __name: 'index',
    setup(A) {
      const { t: _, locale: m } = y(),
        a = L(),
        l = g([
          { code: 'cmn-Hans-CN', name: '简体中文' },
          { code: 'ja-JP', name: '日本語' },
          { code: 'en-US', name: 'English' }
        ]),
        s = g(a.language || 'cmn-Hans-CN'),
        w = B(() => {
          const e = l.value.find((n) => n.code === s.value)
          return e ? e.name : '简体中文'
        }),
        N = async (e) => {
          var n
          if (s.value !== e)
            try {
              ;((m.value = e), (a.language = e), (s.value = e))
              const o = ((n = l.value.find((d) => d.code === e)) == null ? void 0 : n.name) || e
              ;(i.success(_('languageChanged', { language: o })), localStorage.setItem('lang', e))
            } catch (o) {
              ;(console.error('语言切换失败:', o), i.error(_('languageChangeFailed')))
            }
        }
      return (
        C(() => {
          ;(a.language || (a.language = 'cmn-Hans-CN'), (m.value = a.language))
        }),
        (e, n) => {
          const o = r('el-tooltip'),
            d = r('el-dropdown-item'),
            x = r('el-dropdown-menu'),
            S = r('el-dropdown')
          return (
            u(),
            p(
              S,
              { trigger: 'click', onCommand: N },
              {
                dropdown: t(() => [
                  f(x, null, {
                    default: t(() => [
                      (u(!0),
                      E(
                        F,
                        null,
                        H(
                          l.value,
                          (c) => (
                            u(),
                            p(
                              d,
                              {
                                key: c.code,
                                command: c.code,
                                class: I({ active: s.value === c.code })
                              },
                              { default: t(() => [M(h(c.name), 1)]), _: 2 },
                              1032,
                              ['command', 'class']
                            )
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  v('div', V, [
                    f(
                      o,
                      { effect: 'dark', content: e.$t('languageSwitch'), placement: 'bottom' },
                      { default: t(() => [v('span', j, h(w.value), 1)]), _: 1 },
                      8,
                      ['content']
                    )
                  ])
                ]),
                _: 1
              }
            )
          )
        }
      )
    }
  })
const P = k(z, [['__scopeId', 'data-v-5ac9dbc2']])
export { P as L }
