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
export default class ForgetApp extends Component {
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

    this.state = {
      visible: false,
      disabled: true,
      tipsText: '',
      randomToken: '',
      picVerifyCodeUrl: null,
      picVerifyCode: '',
      picVerifyCodeVisible: false,
      forget: {
        smsCode: '',
        username: '',
        password: ''
      }
    };
  }

  componentDidMount () {
    console.log('componentDidMount forget');
    //this.setState({picVerifyCodeVisible: false});
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
            <Text style={[ForgetStyles.title]}>验证手机号</Text>
          </View>
          <View style={[ForgetStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[ForgetStyles.input, CommonStyles.flex1]}>
              <TouchableWithoutFeedback onPress={this.focusUsername.bind(this)}>
                <KeyboardAvoidingView >
                  <TextInput
                    autoCorrect={true}
                    ref="username"
                    maxLength={11}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    value={this.state.forget.username}
                    onChangeText={this.onChangeUsername.bind(this)}
                    style={ForgetStyles.textInput}/>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </View>

            {this.state.forget.username.length > 0 ? (
              <TouchableWithoutFeedback onPress={this.clearUsername.bind(this)}>
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
              onPress={this.checkTel.bind(this, navigate)}>
              <View resizeMode="contain"
                    style={[ForgetStyles.submitButton, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Text includeFontPadding={false} style={ForgetStyles.submitButtonText}>发送验证码</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={[ForgetStyles.link, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[CommonStyles.flex1]}>
            </View>
            <View style={[CommonStyles.flex1]}>
              <Text includeFontPadding={false} style={[ForgetStyles.linkText, CommonStyles.textCenter]}> </Text>
            </View>
            <View style={[CommonStyles.flex1]}>
              <Text onPress={this.goToLogin.bind(this, navigate)} includeFontPadding={false}
                    style={[ForgetStyles.linkText, CommonStyles.textRight]}>去登陆</Text>
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
                       this.getSmsCode(navigate);
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

  async checkTel () {
    const myreg = /^1[34578]\d{9}$/;
    const tel = this.state.forget.username.trim();
    this.setState({picVerifyCode: '', disabled: true});
    if (tel.length === 0) {
      Toast.fail('手机号不能为空！', 1, () => {
      }, true);
      return;
    }
    if (!myreg.test(tel)) {
      Toast.fail('手机号格式不对！', 1, () => {
      }, true);
      return;
    }
    await this.getPicVeriFyCode();
    this.setState({picVerifyCodeVisible: true});
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
      disabled: true,
      randomToken: result.data.randomToken,
      picVerifyCodeUrl: 'data:image/png;base64,' + result.data.imgCode
    });

  }

//获取短信验证码
  async getSmsCode (navigate) {
    if (!this.isEmpty(this.state.picVerifyCode)) {
      const result = await httpUtil.ajax({
        api: config.api().getSmsCodeForReset,
        data: {
          imgCode: this.state.picVerifyCode,
          randomToken: this.state.randomToken,
          tel: this.state.forget.username
        }
      });
      console.log('getSmsCode', result);
      if (result[config.apiMeta.base.successKey] === config.apiMeta.base.successValue) {

        navigate('checkSmsCodeForForget', {
          tel: this.state.forget.username,
          otherParam: new Date() * 1
        });
        this.setState({//清空数据
          picVerifyCode: '',
          tipsText: '',
          picVerifyCodeVisible:false,
          disabled: true,
          randomToken: '',
          picVerifyCodeUrl: null
        });
        Toast.success('短信发送成功，请注意查收！',1,()=>{

        })
      } else {
        this.setState({tipsText: result[config.apiMeta.base.errorKey]});
      }
    }
  }

  goToLogin (navigate) {
    navigate('Login', {
      itemId: Math.floor(Math.random() * 100),
      otherParam: new Date() * 1
    });
  }

  focusUsername () {
    const input = this.refs.username;
    input.focus();
  }

  focusPicCode () {
    const input = this.refs.picCode;
    input.focus();
  }

  clearUsername () {
    this.setState({
      forget: {
        smsCode: this.state.forget.smsCode,
        password: this.state.forget.password,
        username: ''
      }
    });
  }

  onChangePicCode (value) {
    this.setState({
      disabled: this.isEmpty(value),
      picVerifyCode: value
    });
  }

  onChangeUsername (value) {
    this.setState({
      forget: {
        password: this.state.forget.password,
        smsCode: this.state.forget.smsCode,
        username: value
      }
    });
  }
}

