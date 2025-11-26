import { q as r } from './index-ae33a03d.js'
function u(e) {
  return r({ url: '/admin/users/', method: 'get', params: e, baseURL: '/cpyservice' })
}
function n(e) {
  return r({ url: '/users/register', method: 'post', data: e, baseURL: '/cpyservice' })
}
function a(e) {
  return r({ url: '/admin/users/'.concat(e), method: 'get', baseURL: '/cpyservice' })
}
function i(e) {
  return r({
    url: '/admin/users/'.concat(e.user_id),
    method: 'put',
    data: e,
    baseURL: '/cpyservice'
  })
}
function c(e, s) {
  return r({
    url: '/admin/users/'.concat(e, '/reseller_status'),
    method: 'put',
    data: s,
    baseURL: '/cpyservice'
  })
}
function o(e) {
  return r({ url: '/virtual-numbers/stats', method: 'get', params: e, baseURL: '/cpyservice' })
}
function p(e, s) {
  return r({
    url: '/admin/users/'.concat(e, '/owl_keys'),
    method: 'patch',
    data: s,
    baseURL: '/cpyservice'
  })
}
function m(e) {
  return r({
    url: '/admin/users/sec_code',
    method: 'get',
    params: { username: e },
    baseURL: '/cpyservice'
  })
}
function d(e, s) {
  return r({
    url: '/admin/users/'.concat(e, '/sec_code'),
    method: 'patch',
    data: { new_sec_code: s },
    baseURL: '/cpyservice'
  })
}
function U(e) {
  return r({
    url: '/admin/users/'.concat(e, '/impersonate'),
    method: 'post',
    baseURL: '/cpyservice'
  })
}
function l(e, s) {
  return r({
    url: '/users/'.concat(e, '/can_create_instances'),
    method: 'patch',
    data: s,
    baseURL: '/cpyservice'
  })
}
function y(e) {
  return r({
    url: '/quotas/me/increment-launch-counter',
    method: 'post',
    data: { increment_by: e },
    baseURL: '/cpyservice'
  })
}
function h() {
  return r({ url: '/quotas/me/summary', method: 'get', baseURL: '/cpyservice' })
}
export {
  u as a,
  a as b,
  n as c,
  c as d,
  p as e,
  m as f,
  h as g,
  l as h,
  U as i,
  y as j,
  o as q,
  d as r,
  i as u
}
