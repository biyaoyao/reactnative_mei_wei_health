import React, {Component} from 'react';
import  Router from './routers/index';
import {View} from 'react-native';
import Orientation from 'react-native-orientation';
export default class HelloWorldApp extends Component {
  componentWillMount () {
    // 只允许竖屏
    Orientation.lockToPortrait();
    //只允许横屏
    //Orientation.lockToLandscape();
  }
  render () {
    return (
        <Router>
        </Router>
    );
  }
}
