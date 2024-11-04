

// 验证规则：
// 	组织机构代码是每一个机关、社会团体、企事业单位在全国范围内唯一的、始终不变的法定代码
// 	标识。最新使用的组织机构代码在1997年颁布实施，由8位数字（或大写拉丁字母）本体代码和
// 	1位数字（或大写拉丁字母）校验码组成。本体代码采用系列（即分区段）顺序编码方法。
// 	校验码按下列公式计算： 
// 	8 
// 	C9 = 11 - MOD ( ∑Ci * Wi ，11) … (2) 
// 	i=1 
// 	其中：MOD —— 表示求余函数； 
// 	i —— 表示代码字符从左到右位置序号； 
// 	Ci —— 表示第i位置上的代码字符的值，采用附录A“代码字符集”所列字符； 
// 	C9 —— 表示校验码； 
// 	Wi —— 表示第i位置上的加权因子，其数值如下表： 
// 	i 1 2 3 4 5 6 7 8 
// 	Wi 3 7 9 10 5 8 4 2 
// 	当MOD函数值为1（即 C9 = 10）时，校验码用字母X表示。
/**
 * 组织机构代码
 * @param str 组织机构代码
 * @returns {boolean}
 */
export const isValidOrgCodeValid = (str) => {
  var values = str.split("-");
  var ws = [3, 7, 9, 10, 5, 8, 4, 2];
  var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var reg = /^([0-9A-Z]){8}$/;
  if (!reg.test(values[0])) {
    return false
  }
  var sum = 0;
  for (var i = 0; i < 8; i++) {
    sum += str.indexOf(values[0].charAt(i)) * ws[i];
  }
  var C9 = 11 - (sum % 11);
  var YC9 = values[1] + '';
  if (C9 == 11) {
    C9 = '0';
  } else if (C9 == 10) {
    C9 = 'X';
  } else {
    C9 = C9 + '';
  }
  return YC9 == C9;
}


/**
 * 验证身份证号
 * @param str 省份证号
 * @returns {boolean}
 */
export const isValidCardNo = (str) => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str)
}


/**
 * URL有效性校验
 * @param url url
 * @returns {boolean}
 */
export const isUrl = (url) => {
  return !!url.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
}