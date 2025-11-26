import { p as s } from './index-ae33a03d.js'
const n = (e) => {
  if (Array.isArray(e) && e.length > 0) {
    const { pageRoles: r } = s()
    return r.some((o) => e.includes(o))
  } else return (console.error("need roles! Like checkPermission(['admin','editor'])"), !1)
}
export { n as c }
