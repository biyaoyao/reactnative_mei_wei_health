/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {View,  StatusBar,Image, NativeModules} from 'react-native';
import {StartStyles}  from '../assets/styles/index'
import {$login} from '../store/index';
export default class HomeApp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible: false, // 隐藏底部导航栏
      header: null,  //隐藏顶部导航栏
    };
  };
  componentDidMount () {
    console.log('time')
    setTimeout(()=>{
      console.log('componentDidMount');
      const {navigate} = this.props.navigation;
      navigate('Login', {
        itemId: Math.floor(Math.random() * 100),
        otherParam: new Date() * 1
      })
    },2000)
  }
  render () {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    return (
      <View style={StartStyles.container}>
        <StatusBar hidden={true} />
        <Image style={StartStyles.startImg} source={require('../assets/images/startApp.jpg')} />
      </View>
    );
  }
  goProfile (navigate) {
    $login.dispatch({
      type: 'login',
      payload: {
        nickname: 'ewe',
        password: 'wewew'
      }
    });
    navigate('Profile', {
      itemId: Math.floor(Math.random() * 100),
      otherParam: new Date() * 1
    })
  }


  disPatch () {
    const rnToastAndroid = NativeModules.RNToastAndroid;
    rnToastAndroid.show("我的万能JS", function (args) {
      console.log(args)
    });
  }

}
