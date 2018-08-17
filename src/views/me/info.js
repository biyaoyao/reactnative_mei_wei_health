/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
import {CookBookStyles, CommonStyles}  from '../../assets/styles/index';
import {TouchableWithoutFeedback, Image, ScrollView, Text, View} from 'react-native';
import Header from '../../components/header';
import React, {Component} from 'react';

export default class MeInfoApp extends Component {
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
        const {navigate} = this.props.navigation;
        const {navigation} = this.props;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.content]}>
                <Header title="个人中心" nav={navigation}/>
            </View>
        );
    }
}