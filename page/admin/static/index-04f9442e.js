import {
  y as m,
  aq as p,
  r as f,
  e as n,
  b as h,
  f as g,
  h as v,
  i as e,
  N as a,
  u as t,
  M as r,
  H as i,
  L as y
} from './vue-66851fce.js'
import { f as x, j as C, _ as b } from './index-ae33a03d.js'
import { I as k } from './index-ba0a22a8.js'
import { C as w, B } from './index-525ab0a8.js'
import { C as I, a as N } from './function-call-23a10300.js'
import { a as c } from './function-call-b9e3413a.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
import './use-route-23d6e27a.js'
import './use-placeholder-bee49790.js'
const M = { class: 'mobile-profile' },
  T = { class: 'user-card' },
  j = { class: 'avatar-section' },
  D = { class: 'user-info' },
  S = { class: 'username' },
  V = { class: 'user-role' },
  L = { class: 'menu-section' },
  R = { class: 'logout-section' },
  q = m({
    __name: 'index',
    setup(z) {
      const l = p(),
        s = x()
      f('https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg')
      const u = n(() => {
        const o = s.roles
        return o.includes('admin') ? '管理员' : o.includes('reseller') ? '代理商' : '普通用户'
      })
      n(() => s.userInfo || {})
      const d = () => {
          ;(C('pc'), (window.location.href = '/'))
        },
        _ = async () => {
          N({ title: '确认退出', message: '您确定要退出登录吗？' })
            .then(async () => {
              try {
                ;(await s.logout(),
                  c({ message: '退出成功', type: 'success' }),
                  l.push('/mobile/login'))
              } catch (o) {
                ;(console.error('退出登录失败:', o),
                  c({ message: '退出失败，请重试', type: 'fail' }))
              }
            })
            .catch(() => {})
        }
      return (
        h(() => {
          s.username || s.getInfo()
        }),
        (o, E) => (
          g(),
          v('div', M, [
            e('div', T, [
              e('div', j, [
                a(t(k), { name: 'manager', size: '30' }),
                e('div', D, [e('div', S, r(t(s).username), 1), e('div', V, r(u.value), 1)])
              ])
            ]),
            e('div', L, [
              a(t(I), null, {
                default: i(() => [
                  a(t(w), { title: '切换桌面版本', onClick: d, icon: 'setting-o', 'is-link': '' })
                ]),
                _: 1
              })
            ]),
            e('div', R, [
              a(
                t(B),
                { round: '', block: '', type: 'primary', onClick: _, class: 'logout-btn' },
                { default: i(() => [y(' 退出登录 ')]), _: 1 }
              )
            ])
          ])
        )
      )
    }
  })
const W = b(q, [['__scopeId', 'data-v-23f31cb2']])
export { W as default }
