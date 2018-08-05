/**
 * Created by BIYY on 2017-11-17.
 */
import {Toast} from 'antd-mobile-rn';
import axios from 'axios';
import  sha256 from 'js-sha256';
import {$token} from '../../../store/index';
import config  from '../../../config/index';
import date  from '../../../common/lib/date/index';
const requestType = {
  get: 'GET',
  post: 'POST',
  jsonp: 'jsonp'
};
let request = {};
/**
 * 公共ajax请求service
 * @param opt{Object}
 * {
       *   url:'请求连接',
       *   method:'请求方法GET、POST',
       *   data: 'post请求参数',
       *   origin:为true表示返回原始值,
       *   params: 'get 请求参数',
       *   timeout: '超时时间',
       *   headers: '请求头'
       *
       * }
 * @returns {Promise}
 */
request.ajax = (opt) => {

  let opts = Object.assign({}, opt);
  const api = Object.assign({}, opt.api); // 对象用作
  let setTime = {};

  let time = new Date() * 1;
  delete opts.api; // 去除请求中的api的内容
  // 合并配置的url  type
  opts.url = api.url;
  opts.type = opts.type ? opts.type : 'json';
  opts.method = api.type ? api.type : 'GET';
  if (!opts.url) {
    request.ajaxError('请填写接口地址', reject, setTime[time]);
    return false;
  }
  // 初始化请求类型
  if (requestType.jsonp === opts.type.toLowerCase()) {
    opts.jsonpCallback = opts.jsonpCallback || 'jsonpcallback';
  } else {
    opts.method = opts.method || requestType.get; // 请求类型
  }
  //opts.type = opts.contentType || 'json';  // 请求的格式：json
  opts.headers = opts.headers || {};
  //opts.headers['Content-Type'] = opts.headers['Content-Type'] || 'application/json;charset=utf-8';

  setTime[time] = setTimeout(() => { // 超过一秒后出现加载条
    if (!opts.noLoadingBar) {
      Toast.loading('loading...', 0, null, true);
    }
  }, 1000);
  return new Promise((resolve, reject) => {
    if (opts.method !== requestType.post) {
      if (opts.url.indexOf('?') > -1) {
        opts.url += '&';
      } else {
        opts.url += '?';
      }
      for (let param in opts.data) {

        opts.url += param + '=' + opts.data[param] + "&";
      }
    }


    console.log(opts.url);
    axios({
      method: opts.method || 'GET',
      url: opts.url,
      data: opts.data,
      headers: opts.headers || {},
      transformRequest: [function (data) {
        let ret = '';
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        return ret;
      }]
    }).then(function (res) {
      let response;
      if (typeof res.data === 'string') {
        response = JSON.parse(res.data);
      } else {
        response = res.data;
      }

      if (requestType.jsonp === opts.type.toLowerCase()) {
        response = res;
      } else {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      }

      if (res.status === 200 && api.meta) { // 拦截错误信息
        console.log('res', res);
        console.log('successKey', response[api.meta.successKey], api.meta.successValue);
        if (response[api.meta.successKey] === api.meta.successValue || parseInt(response[api.meta.successKey]) === parseInt(api.meta.successValue)) {
          clearTimeout(setTime[time]);
          resolve(response);
          Toast.hide();
        } else {
          request.ajaxError(response[api.meta.errorKey], reject, setTime[time]);
        }
      } else { // 不拦截错误信息
        clearTimeout(setTime[time]);
        resolve(response);
      }

    }).catch(function (res) {
      if (res.status === 404) {
        request.ajaxError('请求连接有误', reject, setTime[time]);
      } else if (res.status === 500) {
        request.ajaxError('服务器出错', reject, setTime[time]);
      } else {
        let msg = '请求跨域';
        if (new Date() - time >= (opts.time || 5000)) {
          msg = '请求超时';
        }
        request.ajaxError(msg, reject, setTime[time]);
      }
    });

  });
};

/**
 * ajax请求失败
 * @param msg
 * @param loadingInstance
 * @param timeOut
 */
request.ajaxError = (msg, reject, timeOut) => {
  clearTimeout(timeOut);
  Toast.fail(msg, 1, () => {
    'use strict';
    //Toast.hide();
  }, true);
};
request.getToken = async (as, ts) => {
  return new Promise(async (resolve, reject) => {
    const state = $token.getState();
    if (!as && !ts && state.token) {
      resolve(state.token);
    } else {
      const data = {
        ts: ts,
        as: as
      };
      const url = config.api().getToken.url.replace(config.healthUrl[config.env], '').replace(config.version, '');
      console.log(url);
      const args = request.genSignArgs(data);
      console.log('getLoginttpHeaders', request.getLoginttpHeaders(url, args));
      let headers = request.getLoginttpHeaders(url, args);
      headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      const res = await request.ajax({
        api: config.api().getToken,
        data: data,
        headers: headers
      });
      resolve(res.result);
      $token.dispatch({
        type: 'token',
        payload: res.result
      });
    }
  });

};
request.generatorLoginSign = (url, args) => {
  let signOrigin = config.version + url + 'appId=' + config.appId + '&stamp=' + date.getTimeStamp();
  args.sort();
  for (let i = 0; i < args.length; i++) {
    if (i >= 1) {
      signOrigin += '&' + args[i];
    } else {
      signOrigin += args[i];
    }
  }
  signOrigin += config.appKey;
  let sign = sha256(signOrigin);
  return sign;
};
request.generatorSign = async (url, args) => {
  const token = await request.getToken();
  let signOrigin = config.version + url + 'appId=' + config.appId + '&stamp=' + date.getTimeStamp() + '&token=' + token;
  args.sort();
  for (let i = 0; i < args.length; i++) {
    if (i >= 1) {
      signOrigin += '&' + args[i];
    } else {
      signOrigin += args[i];
    }
  }
  signOrigin += config.appKey;
  let sign = sha256(signOrigin);
  return sign;
};

request.getLoginttpHeaders = (url_sp, signArgsList) => {

  const rootHttpHeaders = {
    "appId": config.appId,
    "stamp": date.getTimeStamp(),
    "sign": request.generatorLoginSign(url_sp, signArgsList)
  };
  return rootHttpHeaders;
};
request.getRootHttpHeaders = async (url_sp, signArgsList) => {
  const token = await request.getToken();
  const sign = await request.generatorSign(url_sp, signArgsList);
  const rootHttpHeaders = {
    "appId": config.appId,
    "token": token,
    "stamp": date.getTimeStamp(),
    "sign": sign
  };
  return new Promise((resolve) => {
    'use strict';
    resolve(rootHttpHeaders);
  });
};
request.genSignArgs = (obj) => {
  let sign_args_array = [];
  Object.keys(obj).forEach((key) => {
    sign_args_array.push(key + '=' + obj[key]);
  });
  return sign_args_array;
};
export  default  request;
