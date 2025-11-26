import { e as o } from './element-74718691.js'
import { r as n } from './vue-66851fce.js'
const e = n(null),
  i = n(300),
  u = o(() => {
    let l = 240
    e.value &&
      e.value.$el.getBoundingClientRect() &&
      (l = e.value.$el.getBoundingClientRect().top + 80)
    let t = document.getElementById('app').clientHeight
    ;((t = t - l), (i.value = t))
  }, 100)
function g() {
  return { cTable: e, maxHeight: i, handleGetTableHeight: u }
}
export { g as u }
