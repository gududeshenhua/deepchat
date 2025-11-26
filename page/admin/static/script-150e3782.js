import { q as e } from './index-ae33a03d.js'
const i = (t) =>
    e({
      url: '/airtest/tasks/script/upload',
      method: 'post',
      data: t,
      headers: { 'Content-Type': 'multipart/form-data' },
      baseURL: '/cpyservice'
    }),
  p = (t) =>
    e({
      url: '/airtest/tasks/script/'.concat(t.scriptId, '/review?action=').concat(t.action),
      method: 'post',
      data: t,
      baseURL: '/cpyservice'
    }),
  a = (t) =>
    e({ url: '/airtest/tasks/script/'.concat(t), method: 'delete', baseURL: '/cpyservice' }),
  c = (t) =>
    e({ url: '/airtest/tasks/script/list', method: 'get', params: t, baseURL: '/cpyservice' }),
  o = (t, s) =>
    e({
      url: '/airtest/tasks/script/'.concat(t, '/update_info'),
      method: 'put',
      data: s,
      baseURL: '/cpyservice'
    })
export { i as a, a as d, c as g, p as r, o as u }
