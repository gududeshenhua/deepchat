import { q as r } from './index-ae33a03d.js'
function u(e) {
  return r({ url: '/user/customproxy/', method: 'GET', params: e, baseURL: '/cpyservice' })
}
function s(e, t) {
  return r({
    url: '/user/customproxy/?group_name='.concat(t),
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: e,
    baseURL: '/cpyservice'
  })
}
function c() {
  return r({
    url: '/user/customproxy/download-excel-template/',
    method: 'GET',
    responseType: 'blob',
    baseURL: '/cpyservice'
  })
}
function a(e) {
  return r({ url: '/user/customproxy/delete', method: 'POST', data: e, baseURL: '/cpyservice' })
}
function n(e) {
  return r({
    url: '/user/customproxy/delete-by-excel',
    method: 'POST',
    data: e,
    baseURL: '/cpyservice'
  })
}
function p(e) {
  return r({
    url: '/user/customproxy/'.concat(e.group_name, '/batch-next'),
    method: 'GET',
    params: e,
    baseURL: '/cpyservice'
  })
}
function i(e = 1) {
  return r({
    url: '/user/customproxy/owl/countries',
    method: 'GET',
    params: { proxyType: e },
    baseURL: '/cpyservice'
  })
}
function l(e) {
  return r({ url: '/user/customproxy/owl', method: 'GET', params: e, baseURL: '/cpyservice' })
}
function m() {
  return r({ url: '/user/customproxy/owl/traffic-balance', method: 'GET', baseURL: '/cpyservice' })
}
export { i as a, a as b, l as c, c as d, n as e, m as f, u as g, p as h, s as u }
