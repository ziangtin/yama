// 是否是对象
export const isObject = (something) => `${something}` === '[object Object]'
// 是否是数组
export const isArray = (something) => something instanceof Array

// 深拷贝
export const clone = (obj) => {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; ++i) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    var copy = {};
    for (attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

/**
 * 获取变量值的数据类型
 * @param obj 变量值
 */
export const getDataType = (obj) => {
  const originType = Object.prototype.toString.call(obj);
  const tmpType = originType.split(' ')[1];
  const type = tmpType.slice(0, -1);
  return type.toLowerCase();
}

/**
 * 判断变量值是否为空
 * @param val 变量值
 */
export const isEmpty = (val) => {
  if (val === undefined || val === null) {
    return true
  }

  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

/**
 * 解析带有function字段的JSON字符串工具
 * @param json
 * @returns {any}
 * @constructor
 */
export const JSONParse = (json) => {
  return JSON.parse(json, (k, v) => {
    if (k) { }
    if (typeof v === 'string' && v.indexOf && v.indexOf('function') > -1) {
      // eval 可能在eslint中报错，需要加入下行注释
      // eslint-disable-next-line
      return eval(`(function () {
          return ${v}
      })()`);
    }
    return v
  })
}


/**
 * 对象转JSON字符串，带有function字符序列化
 * @param option
 * @returns {string}
 * @constructor
 */
export const JSONStringify = (option) => {
  return JSON.stringify(option,
    (key, val) => {
      if (key) { }
      // 处理函数丢失问题
      if (typeof val === 'function') {
        return `${val}`
      }
      // // 处理undefined丢失问题
      // if (typeof val === 'undefined') {
      //   return 'undefined'
      // }
      return val
    },
    4
  )
}

/**
 * 数组拆分为小的数组
 * @param array 需拆分的数组
 * @param size 每组数组多少个
 */
export const splitArray = (array, size) => {
  const data = []
  for (let i = 0; i < array.length; i += size) {
    data.push(array.slice(i, i + size))
  }
  return data
}

export function pick(setting) {
  function deepProp(object, string) {
    const props = string.split('.')
    return props.reduce((o, key) => (o && isObject(o) ? o[key] : o), object)
  }

  function pickArray(array) {
    return function pickArrayFunc(object) {
      return array.reduce((o, k) => ({ ...o, [k]: deepProp(object, k) }), {})
    }
  }

  function pickObject(objectSetting) {
    return function pickObjectFunc(object) {
      return Object.keys(objectSetting).reduce(
        (o, k) => ({ ...o, [k]: deepProp(object, objectSetting[k]) }),
        {}
      )
    }
  }

  if (isArray(setting)) {
    return pickArray(setting)
  }
  if (isObject(setting)) {
    return pickObject(setting)
  }

  throw new Error('参数必须为对象或数组')
}