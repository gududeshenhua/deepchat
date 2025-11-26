import { r, R as i } from './vue-66851fce.js'
const o = {
  total: 0,
  currentPage: 1,
  pageSizes: [10, 20, 50, 100],
  pageSize: 10,
  layout: 'total, sizes, prev, pager, next, jumper'
}
function l(t = {}) {
  const e = r(0),
    a = i({ ...o, ...t })
  return {
    tableKey: e,
    paginationData: a,
    handleCurrentChange: (n) => {
      ;(e.value++, (a.currentPage = n))
    },
    handleSizeChange: (n) => {
      ;(e.value++, (a.pageSize = n))
    }
  }
}
export { l as u }
