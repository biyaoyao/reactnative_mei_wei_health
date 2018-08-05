/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class MyHealthApp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible: false, // 隐藏底部导航栏
      header: null,  //隐藏顶部导航栏
    };
  };

  constructor (props) {

    super(props);
  }

  render () {
    return (
      <View>
        <Text>我的健康页面</Text>
      </View>
    );
  }
}