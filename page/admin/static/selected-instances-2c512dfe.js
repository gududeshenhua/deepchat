import { ap as t, r as d } from './vue-66851fce.js'
const r = t('selectedInstances', () => {
  const e = d(JSON.parse(sessionStorage.getItem('selectedPadCodes') || '[]'))
  return {
    selectedPadCodes: e,
    setSelectedPadCodes: (s) => {
      ;(sessionStorage.setItem('selectedPadCodes', JSON.stringify(s)), (e.value = s))
    },
    clearSelectedPadCodes: () => {
      ;(sessionStorage.removeItem('selectedPadCodes'), (e.value = []))
    }
  }
})
export { r as u }
