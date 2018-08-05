/**
 * Created by BIYY on 2018-7-6.
 */
/**
 * Created by BIYY on 2018-6-5.
 */
import httpUtil from '../../common/lib/request';
import config from '../../config/index';
import React, {Component} from 'react';
import strUtil from '../../common/lib/string';
import {Toast, Modal} from 'antd-mobile-rn';
import  {$user} from '../../store/index';
import Header from '../../components/header';
import PureRenderMixin from 'react-addons-pure-render-mixin';
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
const alert = Modal.alert;
export default class PasswordForForgetApp extends Component {
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
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
      forget: {
        smsCode: smsCode,
        username: tel,
        password: ''
      }
    };
  }
  componentDidMount () {
    console.log('componentDidMount forget');
    //this.setState({picVerifyCodeVisible: false});
  }
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
            <Text style={[ForgetStyles.title]}>请输入新密码</Text>
          </View>
          <View style={[ForgetStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[ForgetStyles.input, CommonStyles.flex1]}>
              <TouchableWithoutFeedback onPress={this.focusPassword.bind(this)}>
                <KeyboardAvoidingView >
                  <TextInput
                    autoCorrect={true}
                    secureTextEntry={!this.state.visible}
                    ref="password"
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    value={this.state.forget.password}
                    onChangeText={this.onChangePassword.bind(this)}
                    style={ForgetStyles.textInput}/>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </View>

            {this.state.forget.password.length > 0 ? (
              <TouchableWithoutFeedback onPress={this.clearPassword.bind(this)}>
                <View
                  style={[ForgetStyles.inputBoxLogo, CommonStyles.flex, CommonStyles.flexCenter]}>
                  <Image resizeMode="contain"
                         style={ForgetStyles.iconImage}
                         source={require('../../assets/images/clear.png')}/>
                </View>
              </TouchableWithoutFeedback>) : null}
            <TouchableWithoutFeedback onPress={this.toggleVisible.bind(this)}>
              <View
                style={[ForgetStyles.inputBoxLogo, ForgetStyles.eyeIcon, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Image resizeMode="contain" style={[ForgetStyles.iconImage, ForgetStyles.iconImageEye]}
                       source={this.state.visible ? require('../../assets/images/eye.png') : require('../../assets/images/eye_close.png')}/>
              </View>
            </TouchableWithoutFeedback>
          </View>


          <View style={ForgetStyles.submit}>
            <TouchableNativeFeedback
              onPress={this.checkPassword.bind(this, navigate)}>
              <View resizeMode="contain"
                    style={[ForgetStyles.submitButton, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Text includeFontPadding={false} style={ForgetStyles.submitButtonText}>重置密码</Text>
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
    const {navigation} = this.props;
    const tel = navigation.getParam('tel', '');
    const smsCode = navigation.getParam('smsCode', '');
    const password = this.state.forget.password.trim();
    if (password.length === 0) {
      Toast.fail('，密码不能为空！', 1, () => {
      }, true);
      return;
    }
    const res = await httpUtil.ajax({
      api: config.api().restPassword,
      data: {
        smsCode: smsCode,
        tel: tel,
        passwordRe: password,
        password: password
      }
    });
    alert('密码重置成功', '是否直接登录?', [
      {
        text: <Text style={[ForgetStyles.cancleColor, ForgetStyles.button]}>取消</Text>,
        onPress: () => {
          navigate('Login', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: new Date() * 1
          });
        }
      },
      {
        text: <Text
          style={[ForgetStyles.button]}>确定</Text>,
        onPress: async () => {
          const res = await httpUtil.ajax({
            api: config.api().login,
            data: {
              tel: tel,
              password: password
            }
          });
          const token = await httpUtil.getToken(res.data.as, res.data.ts);
          console.log('token', token);
          const url = config.api().infoInfoCheck.url.replace(config.healthUrl[config.env], '').replace(config.version, '');
          console.log(url);
          const args = httpUtil.genSignArgs({});
          let headers = await httpUtil.getRootHttpHeaders(url, args);
          console.log('getttpHeaders', headers);
          const res2 = await httpUtil.ajax({
            api: config.api().infoInfoCheck,
            data: {},
            headers: headers
          });
          console.log('res2', res2);
          $user.dispatch({
            action: 'login',
            payload: Object.assign({}, {token: token, headers: headers}, true)
          });
          navigate('Home', {});
        }
      },
    ]);
    console.log('checkPassword', res);
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
      forget: {
        smsCode: this.state.forget.smsCode,
        username: this.state.forget.username,
        password: ''
      }
    });
  }


  onChangePassword (value) {
    this.setState({
      forget: {
        username: this.state.forget.username,
        smsCode: this.state.forget.smsCode,
        password: value
      }
    });
  }
}

