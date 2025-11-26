import { q as t } from './index-ae33a03d.js'
const r = '/openapi/open/device'
function i(e) {
  return t({ url: ''.concat(r, '/list'), method: 'POST', sign: !0, data: e })
}
function o(e) {
  return t({
    url: '/openapi/open/pad/v2/net/storage/res/create',
    method: 'POST',
    sign: !0,
    data: e
  })
}
function p(e) {
  return t({ url: '/openapi/open/pad/updatePadProperties', method: 'POST', sign: !0, data: e })
}
function u(e) {
  return t({ url: '/openapi/open/pad/updatePadAndroidProp', method: 'POST', sign: !0, data: e })
}
function a(e) {
  return t({ url: '/openapi/open/pad/padProperties', method: 'POST', sign: !0, data: e })
}
function s(e) {
  return t({ url: '/openapi/open/image/queryImageList', method: 'POST', sign: !0, data: e })
}
function d(e) {
  return t({ url: '/openapi/open/screenLayout/publicList', method: 'POST', sign: !0, data: e })
}
function P(e) {
  return t({ url: '/openapi/open/realPhone/template/list', method: 'POST', sign: !0, data: e })
}
function c(e) {
  return t({ url: ''.concat(r, '/net/setDeviceLevel'), method: 'POST', sign: !0, data: e })
}
export { s as a, d as b, o as c, i as d, u as e, a as l, P as q, c as s, p as u }
