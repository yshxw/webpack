const tagReg = /<\/?([^<|^>]*)>/g{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/**
 * 截断字符串
 *
 * @export
 * @param {any} value
 * @param {any} limit
 * @return {string} 截取字符
 */
export function cutStr(value, limit) {
  if (!value) {
    return ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  let str = `${value}`{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // remove html tag
  str = str.replace(tagReg, ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  let strLength = 0{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const strLen = str.length{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  let strCut = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  let result = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  for (let i = 0; i < strLen; i += 1) {
    const a = str.charAt(i){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    strLength += 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    if (encodeURI(a).length > 4) {
      // 中文字符的长度经编码之后大于4
      strLength += 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    if (strLength > limit) {
      strCut = strCut.concat('...'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      result = strCut{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      break{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      strCut = strCut.concat(a){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }

  // 如果给定字符串小于指定长度，则返回源字符串；
  if (strLength <= limit) {
    result = str{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  return result{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

/**
 * 深拷贝简易方法
 * @param {object} obj 被拷贝对象
 * @return {object} 拷贝目标对象
 */
export function deepClone(obj) {
  // 这里obj中不能包含特殊类型值：undefined,NaN,function类型值
  return JSON.parse(JSON.stringify(obj)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
