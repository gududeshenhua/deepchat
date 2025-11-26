import { _ as U } from './hellocloudlogo-1-1703c77e.js'
import {
  y as A,
  N as y,
  aq as j,
  r as m,
  R as K,
  m as L,
  f as T,
  h as O,
  i as u,
  H as C,
  u as v,
  G as I,
  K as P,
  L as q,
  M as $,
  ar as z,
  as as G
} from './vue-66851fce.js'
import { j as H, f as W, k as Y, _ as J } from './index-ae33a03d.js'
import { a as Q } from './validate-5515d956.js'
/* empty css              */ import { F as k } from './index-8679d900.js'
import { B as E } from './index-525ab0a8.js'
import { c as X, u as Z, n as ee, t as N, p as ae, F as te, w as oe } from './index-ba0a22a8.js'
import { u as se, a as _ } from './function-call-b9e3413a.js'
import './element-74718691.js'
import './vxe-562f9a54.js'
import './use-route-23d6e27a.js'
const [re, le] = X('form'),
  ne = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: ee,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    scrollToErrorPosition: String,
    validateFirst: Boolean,
    submitOnEnter: N,
    showErrorMessage: N,
    errorMessageAlign: String,
    validateTrigger: { type: [String, Array], default: 'onBlur' }
  }
var ie = A({
  name: re,
  props: ne,
  emits: ['submit', 'failed'],
  setup(d, { emit: b, slots: w }) {
    const { children: l, linkChildren: h } = Z(te),
      c = (e) => (e ? l.filter((a) => e.includes(a.name)) : l),
      p = (e) =>
        new Promise((a, s) => {
          const r = []
          c(e)
            .reduce(
              (M, R) =>
                M.then(() => {
                  if (!r.length)
                    return R.validate().then((F) => {
                      F && r.push(F)
                    })
                }),
              Promise.resolve()
            )
            .then(() => {
              r.length ? s(r) : a()
            })
        }),
      f = (e) =>
        new Promise((a, s) => {
          const r = c(e)
          Promise.all(r.map((i) => i.validate())).then((i) => {
            ;((i = i.filter(Boolean)), i.length ? s(i) : a())
          })
        }),
      g = (e) => {
        const a = l.find((s) => s.name === e)
        return a
          ? new Promise((s, r) => {
              a.validate().then((i) => {
                i ? r(i) : s()
              })
            })
          : Promise.reject()
      },
      o = (e) => (typeof e == 'string' ? g(e) : d.validateFirst ? p(e) : f(e)),
      B = (e) => {
        ;(typeof e == 'string' && (e = [e]),
          c(e).forEach((s) => {
            s.resetValidation()
          }))
      },
      x = () => l.reduce((e, a) => ((e[a.name] = a.getValidationStatus()), e), {}),
      S = (e, a) => {
        l.some((s) => (s.name === e ? (s.$el.scrollIntoView(a), !0) : !1))
      },
      V = () => l.reduce((e, a) => (a.name !== void 0 && (e[a.name] = a.formValue.value), e), {}),
      t = () => {
        const e = V()
        o()
          .then(() => b('submit', e))
          .catch((a) => {
            b('failed', { values: e, errors: a })
            const { scrollToError: s, scrollToErrorPosition: r } = d
            s && a[0].name && S(a[0].name, r ? { block: r } : void 0)
          })
      },
      n = (e) => {
        ;(ae(e), t())
      }
    return (
      h({ props: d }),
      se({
        submit: t,
        validate: o,
        getValues: V,
        scrollToField: S,
        resetValidation: B,
        getValidationStatus: x
      }),
      () => {
        var e
        return y('form', { class: le(), onSubmit: n }, [
          (e = w.default) == null ? void 0 : e.call(w)
        ])
      }
    )
  }
})
const ue = oe(ie),
  D = (d) => (z('data-v-e81d7425'), (d = d()), G(), d),
  de = { class: 'mobile-login-container' },
  ce = { class: 'login-content' },
  me = D(() =>
    u(
      'div',
      { class: 'login-logo' },
      [u('img', { src: U, alt: '云手机管理平台' }), u('h2', null, '云手机管理平台')],
      -1
    )
  ),
  pe = { style: { margin: '32px 16px' } },
  fe = D(() => u('div', { class: 'login-tip' }, [u('p', null, '稳定 · 弹性 · 省钱')], -1)),
  ge = A({
    __name: 'index',
    setup(d) {
      const b = j(),
        w = m(null),
        l = m(!1),
        h = m(!0),
        c = m(!0),
        p = m(60),
        f = m(null),
        g = m(!1),
        o = K({ username: '', password: '', verificationCode: '', code: '' }),
        B = () => {
          ;(H('pc'), (window.location.href = '/'))
        },
        x = (t) =>
          t === ''
            ? ((g.value = !1), '请输入用户名')
            : Q(t)
              ? ((g.value = !0), !0)
              : ((g.value = !1), '用户名不正确'),
        S = async () => {
          try {
            l.value = !0
            const t = new FormData()
            ;(t.append('grant_type', 'password'),
              t.append('username', o.username),
              h.value ? t.append('password', o.password) : t.append('password', o.verificationCode),
              await W().login(t),
              _({ type: 'success', message: '登录成功', duration: 1500 }),
              setTimeout(() => {
                b.push({ path: '/mobile/instance' })
              }, 1500))
          } catch (t) {
            console.error('登录失败', t)
          } finally {
            l.value = !1
          }
        },
        V = async () => {
          if (localStorage.getItem('loginCodeacquireTime'))
            if (Date.now() - Number(localStorage.getItem('loginCodeacquireTime')) < 1 * 60 * 1e3) {
              _({ type: 'warning', message: '发送次数过多，请稍后再试！', duration: 2e3 })
              return
            } else localStorage.removeItem('loginCodeacquireTime')
          const t = x(o.username)
          if (t !== !0) {
            _({ type: 'fail', message: t, duration: 2e3 })
            return
          }
          try {
            ;(await Y({ kind: 'mobile', destination: o.username, scene: 'login', role: 'user' }),
              (c.value = !1),
              (p.value = 60),
              localStorage.setItem('loginCodeacquireTime', String(Date.now())),
              (f.value = setInterval(() => {
                ;(p.value--, p.value <= 0 && (clearInterval(f.value), (c.value = !0)))
              }, 1e3)),
              _({ type: 'success', message: '验证码发送成功', duration: 1500 }))
          } catch (n) {
            ;(console.error('验证码发送失败', n),
              _({ type: 'fail', message: '验证码发送失败', duration: 2e3 }))
          }
        }
      return (
        L(() => {
          f.value && clearInterval(f.value)
        }),
        (t, n) => (
          T(),
          O('div', de, [
            u('div', ce, [
              me,
              y(
                v(ue),
                { ref_key: 'loginFormRef', ref: w, onSubmit: S },
                {
                  default: C(() => [
                    y(
                      v(k),
                      {
                        modelValue: o.username,
                        'onUpdate:modelValue': n[0] || (n[0] = (e) => (o.username = e)),
                        name: 'username',
                        label: '用户名',
                        placeholder: '请输入用户名',
                        rules: [{ required: !0, message: '请输入用户名' }],
                        clearable: ''
                      },
                      null,
                      8,
                      ['modelValue']
                    ),
                    h.value
                      ? (T(),
                        I(
                          v(k),
                          {
                            key: 0,
                            modelValue: o.password,
                            'onUpdate:modelValue': n[1] || (n[1] = (e) => (o.password = e)),
                            type: 'password',
                            name: 'password',
                            label: '密码',
                            placeholder: '请输入密码',
                            rules: [
                              { required: !0, message: '请输入密码' },
                              { min: 8, max: 20, message: '密码长度8-20位' }
                            ],
                            clearable: ''
                          },
                          null,
                          8,
                          ['modelValue']
                        ))
                      : P('', !0),
                    h.value
                      ? P('', !0)
                      : (T(),
                        I(
                          v(k),
                          {
                            key: 1,
                            modelValue: o.verificationCode,
                            'onUpdate:modelValue': n[2] || (n[2] = (e) => (o.verificationCode = e)),
                            name: 'verificationCode',
                            label: '验证码',
                            placeholder: '请输入验证码',
                            rules: [{ required: !0, message: '请输入验证码' }],
                            maxlength: '7',
                            clearable: ''
                          },
                          {
                            button: C(() => [
                              y(
                                v(E),
                                {
                                  size: 'small',
                                  type: 'primary',
                                  disabled: !g.value || !c.value,
                                  onClick: V
                                },
                                {
                                  default: C(() => [
                                    q(
                                      $(
                                        c.value ? '获取验证码' : ''.concat(p.value, '秒后重新获取')
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['disabled']
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue']
                        )),
                    u('div', pe, [
                      y(
                        v(E),
                        {
                          round: '',
                          block: '',
                          type: 'primary',
                          'native-type': 'submit',
                          loading: l.value,
                          'loading-text': '登录中...'
                        },
                        { default: C(() => [q(' 登录 ')]), _: 1 },
                        8,
                        ['loading']
                      )
                    ])
                  ]),
                  _: 1
                },
                512
              ),
              fe,
              u('div', { class: 'login-tip', style: { 'margin-top': '60px' } }, [
                u('p', { onClick: B }, '切换桌面版')
              ])
            ])
          ])
        )
      )
    }
  })
const ke = J(ge, [['__scopeId', 'data-v-e81d7425']])
export { ke as default }
