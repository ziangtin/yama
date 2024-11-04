
// 剔除字符串中所有空格
export const trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
// 随机生成一个UUID
export const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
export const guid = () => {
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}



/**
 * 驼峰字符变量转下划线变量
 * @param str 需要转下划线的驼峰字符串
 * @param connector 连接符
 * @returns 字符串下划线
 */
export const humpToUnderline = (str, connector = '_') => {
  return str.replace(/([A-Z])/g, `${connector}$1`).toLowerCase()
}


/**
 * 下划线字符串转驼峰
 * @param str 需要转驼峰的下划线字符串
 * @returns 字符串驼峰
 */
export const underlineToHump = (str) => {
  if (!str) return ''
  return str.replace(/\_(\w)/g, (_, letter) => {
    return letter.toUpperCase()
  })
}


/**
 * 随机生成字符串
 * @param {string} len 字符串长度
 * @returns
 */
export const randomString = (len) => {
  if (len <= 11) {
    return Math.random()
      .toString(36)
      .slice(2, 2 + len)
      .padEnd(len, '0')
  } else {
    return `${randomString(11)}${randomString(len - 11)}`
  }
}
