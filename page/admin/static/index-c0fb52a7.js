import { q as r } from './index-ae33a03d.js'
function s() {
  return r({ url: '/groups/', method: 'GET', baseURL: '/cpyservice' })
}
function p(e) {
  return r({ url: '/groups/', method: 'POST', data: e, baseURL: '/cpyservice' })
}
function t(e, u) {
  return r({ url: '/groups/'.concat(e), method: 'PUT', data: u, baseURL: '/cpyservice' })
}
function i(e) {
  return r({ url: '/groups/'.concat(e), method: 'DELETE', baseURL: '/cpyservice' })
}
function c() {
  return r({ url: '/proxies/groups', method: 'GET', baseURL: '/cpyservice' })
}
function n(e) {
  return r({ url: '/user/customproxy/'.concat(e, '/next'), method: 'GET', baseURL: '/cpyservice' })
}
function a(e) {
  return r({ url: '/proxies/groups', method: 'POST', data: e, baseURL: '/cpyservice' })
}
function y(e, u) {
  return r({ url: '/proxies/groups/'.concat(e), method: 'PUT', data: u, baseURL: '/cpyservice' })
}
function d(e) {
  return r({ url: '/proxies/groups/'.concat(e), method: 'DELETE', baseURL: '/cpyservice' })
}
export { c as a, t as b, a as c, d, p as e, i as f, s as g, n as h, y as u }
