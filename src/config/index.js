/**
 * Created by BIYY on 2018-5-31.
 */

export default {
  requestType: {
    get: 'get',
    post: 'post',
    jsonp: 'jsonp'
  },
  version: '/v3/',
  appId: '1018',
  appKey: '2f65db4b6d8246a28577e704ed69b40a3d',
  apiMeta: { // 接口api配置
    base: {   // 基础配置一般是针对mas接口进行的配置
      successKey: 'code', // 成功标识字段
      successValue: '0',  // 成功标识值
      errorKey: 'message', // 错误提示信息字段
    },
    muc: {   // 基础配置一般是针对mas接口进行的配置
      successKey: 'code', // 成功标识字段
      successValue: 1,  // 成功标识值
      errorKey: 'msg', // 错误提示信息字段
    },
    healthMeta: {
      successKey: 'code', // 成功标识字段
      successValue: 0,  // 成功标识值
      errorKey: 'zhMsg', // 错误提示信息字段
    }
  },
  mucUrl: {
    //开发环境
    local: 'https://dc.mideadc.com/mas-api/restful/muc/',
    //生产环境
    product: 'https://dc.mideadc.com/mas-api/restful/muc/',
    //测试环境
    test: 'https://dc.mideadc.com/mas-api/restful/muc/'
  },
  segiUrl: {
    //开发环境
    local: 'https://dc.mideadc.com/mas-api/restful/segi/',
    //生产环境
    product: 'https://dc.mideadc.com/mas-api/restful/segi/',
    //测试环境
    test: 'https://dc.mideadc.com/mas-api/restful/segi/'
  },
  baseUrl: {
    // 开发环境
    local: 'http://193.112.154.97:8088',
    // 生产环境
    product: 'http://193.112.154.97:8088',
    // 测试环境
    test: 'http://193.112.154.97:8088'
  },
  healthUrl: {
    // 开发环境
    local: 'https://health.midea.com',
    // 生产环境
    product: 'https://health.midea.com',
    // 测试环境
    test: 'https://health.midea.com'

  },
  env: 'local',//local,test,product
  api() {
    return {
      login: {  // 登录
        url: `${this.baseUrl[this.env]}/api/uhomecp-sso/v3/userApp/login`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
        meta: this.apiMeta.base // 接口配置项（可选）
      },
      restPassword: {  // 重置密码
        url: `${this.baseUrl[this.env]}/api/uhomecp-sso/v1/userApp/restPwd`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
        meta: this.apiMeta.base // 接口配置项（可选）
      },

      getToken: {//生产token
        url: `${this.healthUrl[this.env]}${this.version}user/auth`, // 接口地址（必填）
        type: 'POST', // 接口请求类型默认未get
        meta: this.apiMeta.healthMeta // 接口配置项（可选）
      },
      infoInfoCheck: {//校验用户状态
        url: `${this.healthUrl[this.env]}${this.version}user/health/info/check`, // 接口地址（必填）
        type: 'POST', // 接口请求类型默认未get
        meta: this.apiMeta.healthMeta // 接口配置项（可选）
      },
      getPicVerifyCode: {//获取图片验证码
        url: `${this.segiUrl[this.env]}uhomecp-sso/v1/userApp/refresh`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
        meta: this.apiMeta.base // 接口配置项（可选）
      },
      getSmsCodeForRegister: {//获取注册短信验证码
        url: `${this.mucUrl[this.env]}api/segiuser/getVerCodeForRegister`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
      },
      getSmsCodeForReset: {//获取重置密码短信验证码
        url: `${this.segiUrl[this.env]}uhomecp-sso/v1/userApp/getVerCodeForReset`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
      },
      validateSmsCodeByTel: {
        url: `${this.segiUrl[this.env]}uhomecp-sso/v1/userApp/validateCaptchasByTel`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
        meta: this.apiMeta.base // 接口配置项（可选）
      },
      searchOrganList: {
        url: `${this.mucUrl[this.env]}api/segiuser/searchOrganList`, // 接口地址（必填）
        type: 'POST', // 接口请求类型默认未get
        meta: this.apiMeta.muc // 接口配置项（可选）
      },
      register: {
        url: `${this.segiUrl[this.env]}uhomecp-sso/v1/userApp/register`, // 接口地址（必填）
        type: 'GET', // 接口请求类型默认未get
        meta: this.apiMeta.base // 接口配置项（可选）
      }

    };
  }
};