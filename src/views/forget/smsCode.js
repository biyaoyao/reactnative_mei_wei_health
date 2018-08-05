/*
 * File: smsCode.js
 * File Created: 2018-7-13
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-7-13
 * Modified By: BIYY me@biyaoyao.com
 */
/**
 * Created by BIYY on 2018-7-6.
 */
/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import config from '../../config/index';
import strUtil from '../../common/lib/string';
import httpUtil from '../../common/lib/request';
import {Toast, Modal} from 'antd-mobile-rn';
import Header from '../../components/header';
import {
  KeyboardAvoidingView,
  Image,
  View,
  StatusBar,
  TextInput,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import {ForgetStyles, CommonStyles}  from '../../assets/styles/index';
export default class SmsCodeApp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible: false, // 隐藏底部导航栏
      header: null,  //隐藏顶部导航栏
    };
  };
  action = null;

  constructor (props) {
    //console.log($store.getState())
    super(props);
    const {navigation} = this.props;
    const tel = navigation.getParam('tel', '');
    this.state = {
      text: '重新发送',
      visible: false,
      disabled: true,
      tipsText: '',
      randomToken: '',
      picVerifyCodeUrl: null,
      picVerifyCode: '',
      picVerifyCodeVisible: false,
      forget: {
        smsCode: '',
        username: tel,
        password: ''
      }
    };
    console.log(this.state);
  }

  componentDidMount () {
    console.log('componentDidMount', this.state);
    this.renderTime();
  }

  renderTime () {
    let time = 0;
    this.interval = setInterval(() => {
      time++;
      this.setState({text: `重新获取(${60 - time}s)`});
      if (time === 60) {
        clearInterval(this.interval);
        this.setState({disabled: false, text: `重新获取`});
      }
    }, 1000);
  }

  render () {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={[ForgetStyles.forgetApp, CommonStyles.flex, CommonStyles.flexColumn]}>
        <StatusBar hidden={true}/>
        <Header nav={navigation} title="忘记密码"/>
        <View style={[ForgetStyles.forgetBox, CommonStyles.flex1]}>
          <View style={[ForgetStyles.titleBox]}>
            <Text style={[ForgetStyles.title]}>请输入验证码</Text>
          </View>
          <View style={[ForgetStyles.subTitleBox]}>
            <Text
              style={[ForgetStyles.subTitle, CommonStyles.textCenter]}>已发送验证码至{this.state.forget.username}</Text>
          </View>
          <View style={[ForgetStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[ForgetStyles.input, CommonStyles.flex1]}>
              <TouchableWithoutFeedback onPress={this.focusSmsCode.bind(this)}>
                <KeyboardAvoidingView >
                  <TextInput
                    autoCorrect={true}
                    ref="smsCode"
                    maxLength={11}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    value={this.state.forget.smsCode}
                    onChangeText={this.onChangeSmsCode.bind(this)}
                    style={ForgetStyles.textInput}/>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </View>

            {this.state.forget.smsCode.length > 0 ? (
              <TouchableWithoutFeedback onPress={this.clearSmsCode.bind(this)}>
                <View
                  style={[ForgetStyles.inputBoxLogo, CommonStyles.flex, CommonStyles.flexCenter]}>
                  <Image resizeMode="contain"
                         style={ForgetStyles.iconImage}
                         source={require('../../assets/images/clear.png')}/>
                </View>
              </TouchableWithoutFeedback>) : null}
          </View>


          <View style={ForgetStyles.submit}>
            <TouchableNativeFeedback
              onPress={this.checkSmsCode.bind(this, navigate)}>
              <View resizeMode="contain"
                    style={[ForgetStyles.submitButton, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Text includeFontPadding={false} style={ForgetStyles.submitButtonText}>确定</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={[ForgetStyles.link, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[CommonStyles.flex1]}>
            </View>

            <View style={[CommonStyles.flex1]}>
              <Text onPress={async () => {
                if (!this.state.disabled) {
                  await this.getPicVeriFyCode();
                  this.setState({picVerifyCodeVisible: true});
                }
              }} includeFontPadding={false}
                    style={[ForgetStyles.linkText, CommonStyles.textPrimary, CommonStyles.textCenter, this.state.disabled ? CommonStyles.textDisabled : null]}>
                {this.state.text}
              </Text>
            </View>
            <View style={[CommonStyles.flex1]}>
              <Text includeFontPadding={false}
                    style={[ForgetStyles.linkText, CommonStyles.textPrimary, CommonStyles.textRight]}>

              </Text>
            </View>
          </View>
        </View>
        {/*验证码*/}

        <Modal visible={this.state.picVerifyCodeVisible}
               transparent
               popup={true}
               onClose={
                 () => {
                   console.log('onClose', this.action);
                   if (!this.action) {
                     this.setState({picVerifyCodeVisible: false});
                   }
                   this.action = null;
                 }}
               maskClosable={true}
               footer={[
                 {
                   text: (<Text style={[ForgetStyles.cancleColor, ForgetStyles.button]}>取消</Text>), onPress: () => {
                   console.log('cancel');
                   this.action = 'cancel';
                   this.setState({picVerifyCodeVisible: false});
                 }
                 },
                 {
                   text: (<Text
                     style={[ForgetStyles.button, this.state.disabled ? ForgetStyles.disabledColor : null]}>确定</Text>),
                   onPress: () => {
                     this.action = 'ok';
                     if (!this.state.disabled) {
                       this.getSmsCode();
                     }

                   }
                 }]}>
          <View style={[ForgetStyles.imgVerifyBox, CommonStyles.flex, CommonStyles.flexColumn]}>
            <View style={[ForgetStyles.imgVerifyTitle]}>
              <Text style={[ForgetStyles.imgVerifyTitleText]}>为了确保安全,请先填写图片验证码</Text>
            </View>
            <View style={[ForgetStyles.imgVerifyCenter, CommonStyles.flex, CommonStyles.flexRow, CommonStyles.flex1]}>
              <View
                style={[ForgetStyles.imgVerifyInputBox, CommonStyles.flex1]}>
                <TouchableWithoutFeedback onPress={this.focusPicCode.bind(this)}>
                  <KeyboardAvoidingView>
                    <TextInput
                      autoCorrect={true}
                      ref="picCode"
                      underlineColorAndroid="transparent"
                      value={this.state.picVerifyCode}
                      onChangeText={this.onChangePicCode.bind(this)}
                      style={ForgetStyles.picCodeInput}/>
                  </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
              </View>
              <View style={[ForgetStyles.imgVerifyImgBox]}>
                <Image resizeMode="stretch"
                       style={ForgetStyles.imageCode}
                       source={{uri: this.state.picVerifyCodeUrl}}/>
              </View>

              <View style={[ForgetStyles.imgVerifyRefreshBox]}>
                <TouchableNativeFeedback
                  onPress={this.getPicVeriFyCode.bind(this)}>
                  <Image resizeMode="contain"
                         style={ForgetStyles.imageRefresh}
                         source={require('../../assets/images/refresh.png')}/>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={[ForgetStyles.tips]}>
              <Text style={[ForgetStyles.tipsText]}>{this.state.tipsText}</Text>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }


  isEmpty (val) {
    return strUtil.isEmpty(val);
  }
  async checkSmsCode (navigate) {
    const smsCode = strUtil.trim(this.state.forget.smsCode);
    const tel = strUtil.trim(this.state.forget.username);
    if (smsCode.length === 0) {
      Toast.fail('验证码不能为空！', 1, () => {
      }, true);
      return true;
    }
    console.log('checkSmsCode', res);
    const res = await httpUtil.ajax({
      api: config.api().validateSmsCodeByTel,
      data: {
        tel: tel,
        smsCode: smsCode
      }
    });

    navigate('checkPasswordForForget', {
      tel: this.state.forget.username,
      smsCode: smsCode
    });
    this.setState({
      text: '重新获取',
      disabled: false,
      forget: {
        smsCode: '',
        username: tel,
        password: ''
      }

    });

  }

  /**
   * 获取图片验证码
   */
  async getPicVeriFyCode () {
    const result = await httpUtil.ajax({
      api: config.api().getPicVerifyCode,
      data: {}
    });
    console.log('getPicVeriFyCode', result);
    this.setState({
      picVerifyCode: '',
      tipsText: '',
      randomToken: result.data.randomToken,
      picVerifyCodeUrl: 'data:image/png;base64,' + result.data.imgCode
    });

  }

//获取短信验证码
  async getSmsCode (navigate) {
    if (!this.isEmpty(this.state.picVerifyCode)) {
      const result = await httpUtil.ajax({
        api: config.api().getSmsCodeForForget,
        data: {
          imgCode: this.state.picVerifyCode,
          randomToken: this.state.randomToken,
          tel: this.state.forget.username
        }
      });
      console.log('getSmsCode', result);
      if (result[config.apiMeta.muc.successKey] === config.apiMeta.muc.successValue) {
        this.renderTime();
        this.setState({//清空数据
          picVerifyCodeVisible: false,
        }, () => {
        });
        this.timer = setTimeout(() => {
          this.setState({//清空数据
            picVerifyCode: '',
            tipsText: '',
            disabled: true,
            randomToken: '',
            picVerifyCodeUrl: null
          });
          Toast.success('短信发送成功，请注意查收！', 1, () => {

          });
          clearTimeout(this.timer);
        }, 200);

      } else {
        this.setState({tipsText: result[config.apiMeta.muc.errorKey]});
      }
    }
  }


  focusSmsCode () {
    const input = this.refs.smsCode;
    input.focus();
  }


  focusPicCode () {
    const input = this.refs.picCode;
    input.focus();
  }

  clearSmsCode () {
    this.setState({
      forget: {
        smsCode: '',
        password: this.state.forget.password,
        username: this.state.forget.username
      }
    });
  }

  onChangePicCode (value) {
    this.setState({
      disabled: this.isEmpty(value),
      picVerifyCode: value
    });
  }

  onChangeSmsCode (value) {
    this.setState({
      forget: {
        password: this.state.forget.password,
        smsCode: value,
        username: this.state.forget.username
      }
    });
  }
}

