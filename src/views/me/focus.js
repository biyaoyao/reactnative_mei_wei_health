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
import {FocusStyles, CommonStyles}  from '../../assets/styles/index';
import {CameraRoll,TouchableWithoutFeedback, Image, ScrollView, Text, View, Button} from 'react-native';
import Header from '../../components/header';
import React, {Component} from 'react';
//网络图片地址
const imgURL = "http://www.hangge.com/blog/images/logo.png";
export default class FocusApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };
    
    constructor (props) {
        super(props);
    }


    /**
     * 保存图片
     * @param img
     */
    saveImg (img) {
        const promise = CameraRoll.saveToCameraRoll(img);
        promise.then(function (result) {
            alert('保存成功！地址如下：\n' + result);
        }).catch(function (error) {
            alert('保存失败！\n' + error);
        });
    }

    render () {
        const {navigate} = this.props.navigation;
        const {navigation} = this.props;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.content]}>
                <Header
                    title="关注公众号" nav={navigation}
                    right={
                        <Text
                            style={[FocusStyles.headerRightText, CommonStyles.font16, CommonStyles.textCenter, CommonStyles.colorWhite]}
                            onPress={this.saveImg.bind(this, imgURL)}>保存图片</Text>
                    }/>

                <View style={[CommonStyles.flex1, CommonStyles.p20]}>
                    <View style={[FocusStyles.shareBox]}>
                        <View style={[FocusStyles.qrcode]}>
                            <Image style={[FocusStyles.qrcodeImage]} resizeMode="contain"
                                   source={require('../../assets/images/me/qrcode.png')}></Image>
                        </View>
                        <Text style={[FocusStyles.scan, CommonStyles.textCenter]}>扫一扫</Text>
                        <Text style={[FocusStyles.focus, CommonStyles.textCenter]}>关注美维健康公众号</Text>
                        <View style={[FocusStyles.shareButtonBox]}>

                            <Text
                                style={[FocusStyles.shareButton, CommonStyles.font16]}
                                onPress={() => {
                                    console.log('分享');
                                }}>
                                分享
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

