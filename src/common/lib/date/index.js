/**
 * Created by BIYY on 2017-11-17.
 */
const _date = {};

// const padLeftZero = (str) => {
//   return ('00' + str).substr(str.length)
// }
/**
 *
 * @param timestampOrDate {Date} 日期对象 或 时间戳
 * @param fmt {String}  日期格式 ，常见：'yyyy-MM-dd hh:mm:ss.S'、'yyyy-M-d h:m:s.S'
 * @returns {String} 格式化后的日期
 */
_date.formatDate = (timestampOrDate, fmt) => {
  if (!timestampOrDate) {
    return '';
  }

  let date = null;
  // Step 1: 如果是非时间戳，转化为时间戳
  if (typeof timestampOrDate === 'object') {
    // 传进来的是一个时间 new Date() 对象
    date = timestampOrDate;
  } else if (!/^\d+$/.test(timestampOrDate)) {
    // 把-转化成 / 避免IOS时间问题
    date = new Date(timestampOrDate.replace(/-/gi, '/'));
  } else {
    // 时间戳
    date = new Date(timestampOrDate);
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr((o[k].toString()).length)));
    }
  }
  return fmt;
};
_date.lastYearMonth = (dateString) => {
  let monList = [];
  let d = new Date(dateString);
  let currYear = d.getFullYear();
  let currMon = d.getMonth() + 1;  // 获取上一个月份数值，此处不需要+1
  for (let i = 0; i < 12; i++) {
    if (currMon < 10) {
      monList.push('' + currYear + '.0' + currMon);
    } else {
      monList.push('' + currYear + '.' + currMon);
    }
    currMon -= 1; // 获取上一个月份
    if (currMon == 0) {
      currYear -= 1;
      currMon = 12;
    }
  }
  return monList;
};
/**
 *
 * @param num {int} 上几个月的时间
 *  * @param fmt {String} 格式化返回结果  不传返回时间对象，传入返回格式化字符串
 * @returns {String} 返回上一月的年月，日为统一1号
 */
_date.getPerMonth = (num, fmt) => {
  let nowMonth = new Date();
  let year = nowMonth.getFullYear();
  let month = nowMonth.getMonth();
  let date = '';
  if (Number.isFinite(num)) {
    date = new Date(year, month - Number.parseInt(num), 1);
  } else {
    date = new Date(year, month - 1, 1);
  }

  if (fmt) {
    return _date.formatDate(date, fmt);
  } else {
    return date;
  }
};

/**
 *
 * @param num {int} 上几天的时间
 * @param fmt {String} 格式化返回结果   不传返回时间对象，传入返回格式化字符串
 * @returns {String} 返回前几天的日期
 */
_date.getPerDay = (num, fmt) => {
  let nowMonth = new Date();
  let year = nowMonth.getFullYear();
  let month = nowMonth.getMonth();
  let day = nowMonth.getdate();
  let date = '';
  if (Number.isFinite(num)) {
    date = new Date(year, month, day - Number.parseInt(num), 1);
  } else {
    date = new Date(year, month, day - 1);
  }

  if (fmt) {
    return _date.formatDate(date, fmt);
  } else {
    return date;
  }
};
_date.getTimeStamp = () => {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let i = date.getMinutes();
  let s = date.getSeconds();
  let now = '' + y + (m < 10 ? '0' + m : m) + (d < 10 ? '0' + d : d) + (h < 10 ? '0' + h : h) + (i < 10 ? '0' + i : i) + (s < 10 ? '0' + s : s);
  return now;
};
export default _date;
