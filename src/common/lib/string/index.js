/**
 * Created by BIYY on 2018-1-15.
 */
let string = {};
/**
 * 去除字符串空格
 * @param str
 */
string.trim = (str) => {
  if (typeof str === 'string') {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  } else {
    return str;
  }
};
/**
 * 字符判空处理
 * @param str
 */
string.isEmpty = (str) => {
  return !str || string.trim(str).length === 0;
};
export  default string;
