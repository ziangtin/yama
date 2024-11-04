/**
 * 生成随机16进制的颜色编码
 * @returns
 */
export const randomColor = () => {
  return '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0')
}
