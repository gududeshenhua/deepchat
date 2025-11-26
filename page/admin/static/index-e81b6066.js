import { q as n } from './index-ae33a03d.js'
function r(e) {
  return n({
    url: '/openapi/open/pad/infos',
    method: 'POST',
    sign: !0,
    data: { ...e, orderBy: 'CreateTime_DESC' }
  })
}
function o(e) {
  return n({ url: '/openapi/open/network/proxy/set', method: 'POST', sign: !0, data: e })
}
function a(e) {
  return n({ url: '/openapi/open/pad/padDetails', method: 'POST', sign: !0, data: e })
}
function s(e) {
  return n({ url: '/openapi/open/token/stsTokenByPadCode', method: 'POST', sign: !0, data: e })
}
function p(e) {
  return n({
    url: '/openapi/open/pad/v2/net/storage/batch/boot/on',
    method: 'POST',
    sign: !0,
    data: e
  })
}
function u(e) {
  return n({ url: '/openapi/open/pad/v2/net/storage/batch/off', method: 'POST', sign: !0, data: e })
}
function i(e) {
  return n({
    url: '/openapi/open/pad/v2/net/storage/batch/delete',
    method: 'POST',
    sign: !0,
    data: e
  })
}
function c(e) {
  return n({ url: '/openapi/open/pad/updateTimeZone', method: 'POST', sign: !0, data: e })
}
function d(e) {
  return n({ url: '/openapi/open/pad/updateLanguage', method: 'POST', sign: !0, data: e })
}
function g(e) {
  return n({ url: '/openapi/open/pad/gpsInjectInfo', method: 'POST', sign: !0, data: e })
}
function l(e) {
  return n({ url: '/openapi/open/pad/getLongGenerateUrl', method: 'POST', sign: !0, data: e })
}
function m(e) {
  return n({ url: '/openapi/open/pad/restart', method: 'POST', sign: !0, data: e })
}
function f(e) {
  return n({ url: '/instances/', method: 'post', data: e, baseURL: '/cpyservice' })
}
function h(e) {
  return n({
    url: '/instances/query?page='
      .concat(e.page ? e.page : 1, '&page_size=')
      .concat(e.page_size ? e.page_size : 100),
    method: 'post',
    data: e,
    baseURL: '/cpyservice'
  })
}
function T(e) {
  return n({ url: '/instances/', method: 'put', data: e, baseURL: '/cpyservice' })
}
function S(e) {
  return n({ url: '/instances/bulk_delete', method: 'POST', data: e, baseURL: '/cpyservice' })
}
function O(e) {
  return n({ url: '/openapi/open/pad/asyncCmd', method: 'POST', sign: !0, data: e })
}
function P(e) {
  return n({ url: '/openapi/open/pad/adb', method: 'POST', sign: !0, data: e })
}
function b() {
  return n({ url: '/resellers/sub-users/latest-images', method: 'GET', baseURL: '/cpyservice' })
}
function I(e) {
  return n({ url: '/rtc/open/room/dissolveRoom', method: 'POST', sign: !0, data: e })
}
function y(e) {
  return n({ url: '/openapi/open/pad/virtualRealSwitch', method: 'POST', sign: !0, data: e })
}
export {
  u as a,
  i as b,
  p as c,
  b as d,
  O as e,
  f,
  h as g,
  l as h,
  m as i,
  I as j,
  s as k,
  c as l,
  d as m,
  g as n,
  P as o,
  a as p,
  r as q,
  S as r,
  o as s,
  y as t,
  T as u
}
