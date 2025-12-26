export function matchUrlWithExclude(url: string, patterns: string[]): boolean {
  // 先检查是否命中排除规则
  // debugger
  const unmatch = ['home://script', 'home://setup', 'home://chat']
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

export function parseQueryString(url: string): Record<string, string> {
  const urlObj = new URL(url)
  const params = new URLSearchParams(urlObj.search)
  const result: Record<string, string> = {}

  for (const [key, value] of params.entries()) {
    result[key] = value
  }

  return result
}

export function base64DecodeUnicode(str: string): string {
  // 先解码Base64
  const decoded = atob(str)

  // 将每个字符转换为Unicode转义序列
  const unicodeDecoded = decoded
    .split('')
    .map((char) => '%' + char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('')

  // 解码Unicode转义序列
  return decodeURIComponent(unicodeDecoded)
}

export function getBaseUrl(urlStr: string): string | null {
  try {
    const url = new URL(urlStr)
    return url.origin // origin属性包含协议、主机和端口
  } catch (error) {
    console.error('无效的URL:', error)
    return null
  }
}
