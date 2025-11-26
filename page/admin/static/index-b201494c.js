import { q as i } from './index-ae33a03d.js'
function n(e) {
  return i({ url: '/file-center/open/file/cache', method: 'POST', sign: !0, data: e })
}
function r(e) {
  return i({ url: '/file-center/open/file/batch/del', method: 'POST', sign: !0, data: e })
}
function l(e) {
  return i({ url: '/openapi/open/pad/v3/uploadFile', method: 'POST', sign: !0, data: e })
}
function o(e) {
  return i({ url: '/file-center/open/file/list', method: 'POST', sign: !0, data: e })
}
export { n as a, o as b, r as c, l as f }
