const s = (t) => /^(https?:|mailto:|tel:)/.test(t),
  r = (t) => /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)
export { r as a, s as i }
