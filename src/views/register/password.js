/**
 * Created by BIYY on 2018-7-6.
 */
/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import strUtil from '../../common/lib/string';
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
import {RegisterStyles, CommonStyles}  from '../../assets/styles/index';
export default class PasswordApp extends Component {
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
    const smsCode = navigation.getParam('smsCode', '');
    this.state = {
      visible: false,
      disabled: true,
      tipsText: '',
      randomToken: '',
      picVerifyCodeUrl: null,
      picVerifyCode: '',
      picVerifyCodeVisible: false,
      register: {
        smsCode: smsCode,
        username: tel,
        password: ''
      }
    };
  }

  componentDidMount () {
    console.log('componentDidMount register');
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
        style={[RegisterStyles.registerApp, CommonStyles.flex, CommonStyles.flexColumn]}>
        <StatusBar hidden={true}/>
        <Header nav={navigation} title="注册"/>
        <View style={[RegisterStyles.registerBox, CommonStyles.flex1]}>
          <View style={[RegisterStyles.titleBox]}>
            <Text style={[RegisterStyles.title]}>请输入密码</Text>
          </View>
          <View style={[RegisterStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[RegisterStyles.input, CommonStyles.flex1]}>
              <TouchableWithoutFeedback onPress={this.focusPassword.bind(this)}>
                <KeyboardAvoidingView >
                  <TextInput
                    autoCorrect={true}
                    secureTextEntry={!this.state.visible}
                    ref="password"
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    value={this.state.register.password}
                    onChangeText={this.onChangePassword.bind(this)}
                    style={RegisterStyles.textInput}/>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </View>

            {this.state.register.password.length > 0 ? (
              <TouchableWithoutFeedback onPress={this.clearPassword.bind(this)}>
                <View
                  style={[RegisterStyles.inputBoxLogo, CommonStyles.flex, CommonStyles.flexCenter]}>
                  <Image resizeMode="contain"
                         style={RegisterStyles.iconImage}
                         source={require('../../assets/images/clear.png')}/>
                </View>
              </TouchableWithoutFeedback>) : null}
            <TouchableWithoutFeedback onPress={this.toggleVisible.bind(this)}>
              <View style={[RegisterStyles.inputBoxLogo, RegisterStyles.eyeIcon, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Image resizeMode="contain" style={[RegisterStyles.iconImage, RegisterStyles.iconImageEye]}
                       source={this.state.visible ? require('../../assets/images/eye.png') : require('../../assets/images/eye_close.png')}/>
              </View>
            </TouchableWithoutFeedback>
          </View>


          <View style={RegisterStyles.submit}>
            <TouchableNativeFeedback
              onPress={this.checkPassword.bind(this, navigate)}>
              <View resizeMode="contain"
                    style={[RegisterStyles.submitButton, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Text includeFontPadding={false} style={RegisterStyles.submitButtonText}>下一步</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={[RegisterStyles.link, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[CommonStyles.flex1]}>
            </View>
            <View style={[CommonStyles.flex1]}>
              <Text includeFontPadding={false} style={[RegisterStyles.linkText, CommonStyles.textCenter]}> </Text>
            </View>
            <View style={[CommonStyles.flex1]}>
              
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  isEmpty (val) {
    return strUtil.isEmpty(val);
  }
  async checkPassword (navigate) {
    const password = this.state.register.password.trim();
    if (password.length === 0) {
      Toast.fail('，密码不能为空！', 1, () => {
      }, true);
      return;
    }
    navigate('selectCommunity', {
      tel: this.state.register.username,
      smsCode: this.state.register.smsCode,
      password: this.state.register.password
    });
    console.log('register',this.state.register)
  }
  
  toggleVisible () {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
    console.log('visible', this.state.visible);
  }

  focusPassword () {
    const input = this.refs.password;
    input.focus();
  }
  
  clearPassword () {
    this.setState({
      register: {
        smsCode: this.state.register.smsCode,
        username: this.state.register.username,
        password: ''
      }
    });
  }


  onChangePassword (value) {
    this.setState({
      register: {
        username: this.state.register.username,
        smsCode: this.state.register.smsCode,
        password: value
      }
    });
  }
}

