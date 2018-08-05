/**
 * Created by BIYY on 2018-6-5.
 */
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, {Component} from 'react';
import httpUtil from '../../common/lib/request';
import storage from '../../common/lib/storage/index';
import config from '../../config/index';
import {StartStyles}  from '../../assets/styles/index';
import  {$login} from '../../store/index';
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

import {LoginStyles, CommonStyles}  from '../../assets/styles/index';
export default class LoginApp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible: false, // 隐藏底部导航栏
      header: null,  //隐藏顶部导航栏
    };
  };

  constructor (props) {
    //console.log($store.getState())
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      visible: false,
      showStart: true,
      login: {
        username: '',
        password: ''
      }
    };
  }

  async componentDidMount () {
    console.log('componentDidMount');
    const data = await storage.getItem('user');
    console.log('constructor', data);
    console.log('componentDidMount');
  }


  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    console.log('render');
    if (this.state.showStart) {
      this.timer = setTimeout(async () => {
        this.setState({
          showStart: false
        });
        clearTimeout(this.timer);
      }, 3000);
    }
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={[LoginStyles.loginApp, CommonStyles.flex, CommonStyles.flexColumn]}>
        <StatusBar hidden={true}/>
        {this.state.showStart ? (<View style={StartStyles.container}>
          <Image style={StartStyles.startImg} source={require('../../assets/images/startApp.jpg')}/>
        </View>) : null}
        <View style={LoginStyles.logBox}>
          <View style={LoginStyles.logo}>
            <Image style={LoginStyles.img} source={require('../../assets/images/logo.png')}/>
          </View>
        </View>
        <View style={[LoginStyles.loginBox, CommonStyles.flex1]}>
          <View style={[LoginStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[LoginStyles.input, CommonStyles.flex1]}>
              <TouchableWithoutFeedback onPress={this.focusUsername.bind(this)}>
                <KeyboardAvoidingView >
                  <TextInput
                    autoCorrect={true}
                    ref="username"
                    maxLength={11}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    value={this.state.login.username}
                    onChangeText={this.onChangeUsername.bind(this)}
                    style={LoginStyles.textInput}/>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </View>

            {this.state.login.username.length > 0 ? (
              <TouchableWithoutFeedback onPress={this.clearUsername.bind(this)}>
                <View
                  style={[LoginStyles.inputBoxLogo, CommonStyles.flex, CommonStyles.flexCenter]}>
                  <Image resizeMode="contain"
                         style={LoginStyles.iconImage}
                         source={require('../../assets/images/clear.png')}/>
                </View>
              </TouchableWithoutFeedback>) : null}
          </View>
          <View style={[LoginStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[LoginStyles.input, CommonStyles.flex1]}>
              <TouchableWithoutFeedback onPress={this.focusPassword.bind(this)}>
                <TextInput
                  secureTextEntry={!this.state.visible}
                  autoCorrect={true}
                  ref="password"
                  underlineColorAndroid="transparent"
                  value={this.state.login.password}
                  onChangeText={this.onChangePassword.bind(this)}
                  style={LoginStyles.textInput}/>
              </TouchableWithoutFeedback>

            </View>
            {this.state.login.password.length > 0 ? (
              <TouchableWithoutFeedback onPress={this.clearPassword.bind(this)}>
                <View
                  style={[LoginStyles.inputBoxLogo, CommonStyles.flex, CommonStyles.flexCenter]}>
                  <Image resizeMode="contain"
                         style={LoginStyles.iconImage}
                         source={require('../../assets/images/clear.png')}/>
                </View>
              </TouchableWithoutFeedback>) : null}

            <TouchableWithoutFeedback onPress={this.toggleVisible.bind(this)}>
              <View style={[LoginStyles.inputBoxLogo, LoginStyles.eyeIcon, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Image resizeMode="contain" style={[LoginStyles.iconImage, LoginStyles.iconImageEye]}
                       source={this.state.visible ? require('../../assets/images/eye.png') : require('../../assets/images/eye_close.png')}/>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={LoginStyles.submit}>
            <TouchableNativeFeedback
              onPress={this.login.bind(this)}>
              <View resizeMode="contain" style={[LoginStyles.submitButton, CommonStyles.flex, CommonStyles.flexCenter]}>
                <Text includeFontPadding={false} style={LoginStyles.submitButtonText}>登录</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={[LoginStyles.link, CommonStyles.flex, CommonStyles.flexRow]}>
            <View style={[CommonStyles.flex1]}>
              <Text includeFontPadding={false} style={[LoginStyles.linkText]}> </Text>
            </View>

            <View style={[CommonStyles.flex1]}>
              <Text includeFontPadding={false} style={[LoginStyles.linkText, CommonStyles.textCenter]}> </Text>
            </View>
            <View style={[CommonStyles.flex1]}>
              <Text onPress={this.forget.bind(this, navigate)} style={[LoginStyles.linkText, CommonStyles.textRight]}>
                忘记密码</Text>
            </View>
          </View>
        </View>

        <View style={[LoginStyles.bottom, CommonStyles.flex, CommonStyles.flexCenter]}>
          <Text onPress={this.register.bind(this, navigate)}>
            用户注册
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
  async login () {
    const {navigate} = this.props.navigation;
    const res = await httpUtil.ajax({
      api: config.api().login,
      data: {
        tel: this.state.login.username,
        password: this.state.login.password
      }
    });
    //storage.setItem('user', this.state.login);
    const token = await httpUtil.getToken(res.data.as, res.data.ts);
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
    const payload = JSON.parse(JSON.stringify({token: token, headers: headers}));
    $login.dispatch({
      type: 'login',
      payload: payload
    });

    if(res2.result.collected===1){//已经填写信息
      navigate('Home', {});
    }else{
      navigate('FillInInfo', {});
    }
  }
  forget (navigate) {
    navigate('Forget', {
      itemId: Math.floor(Math.random() * 100),
      otherParam: new Date() * 1
    });
  }


  focusUsername () {
    const input = this.refs.username;
    input.focus();
  }

  focusPassword () {
    const input = this.refs.password;
    input.focus();
  }

  clearPassword () {
    this.setState({
      login: {
        username: this.state.login.username,
        password: ''
      }
    });
  }

  clearUsername () {
    this.setState({
      login: {
        password: this.state.login.password,
        username: ''
      }
    });
  }

  onChangePassword (value) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: value
      }
    });
  }

  onChangeUsername (value) {
    this.setState({
      login: {
        password: this.state.login.password,
        username: value
      }
    });
  }

  register (navigate) {
    navigate('Register', {
      itemId: Math.floor(Math.random() * 100),
      otherParam: new Date() * 1
    });
  }

  toggleVisible () {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
    console.log('visible', this.state.visible);
  }
}

