export function matchUrlWithExclude(url: string, patterns: string[]): boolean {
  // 先检查是否命中排除规则
  const unmatch = ['home://script']
  const isExcluded = unmatch.some((p) => {
    const regex = new RegExp('^' + p.replace(/\*/g, '.*') + '$')
    return regex.test(url)
  })
  if (isExcluded) return false

  // 再检查是否命中匹配规则
  return patterns.some((p) => {
    const regex = new RegExp('^' + p.replace(/\*/g, '.*') + '$')
    return regex.test(url)
  })
}
