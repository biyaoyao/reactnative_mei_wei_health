/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {TouchableWithoutFeedback, ScrollView, Image, Text, View} from 'react-native';
import {MeStyles, CommonStyles}  from '../../assets/styles/index';
export default class MeApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {

        super(props);
    }

    navigateTo (navigate, name) {
        navigate(name, {});
    }


    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, MeStyles.meApp]}>
                <TouchableWithoutFeedback
                    onPress={this.navigateTo.bind(this, navigate, 'MeInfo')}>
                    <View style={[CommonStyles.flex, CommonStyles.flexRow, MeStyles.infoPane]}>
                        <View style={[CommonStyles.flex, CommonStyles.flexCenter, MeStyles.photoBox]}>
                            <View style={[MeStyles.photoCircle]}>
                                <Image resizeMode={'cover'}
                                       roundAsCircle={true}
                                       style={MeStyles.photo}
                                       source={require('../../assets/images/me/photo.jpg')}/>

                            </View>
                        </View>
                        <View style={[CommonStyles.flex1, MeStyles.userInfo]}>
                            <Text style={MeStyles.name}>李文强</Text>
                            <Text style={MeStyles.personality}>签名:指鹿为马不负韶华!</Text>
                        </View>
                        <View style={[CommonStyles.flex, CommonStyles.flexColumn, MeStyles.rightArrow]}>
                            <Image resizeMode={'stretch'}
                                   roundAsCircle={true}
                                   style={[MeStyles.arrowRight]}
                                   source={require('../../assets/images/me/arrow-right.png')}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={[CommonStyles.flex1, CommonStyles.cell, MeStyles.listBox]}>
                    <ScrollView>
                        {/*健康相关*/}
                        <View style={[CommonStyles.cellGroup]}>
                            {/*健康信息*/}
                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'HealthIndex')}>
                                <View style={[CommonStyles.cellItem]}>
                                    <View style={[CommonStyles.cellItemIconBox]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/center_profile.png')}/>
                                    </View>

                                    <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                        <Text style={[CommonStyles.cellItemContentText]}>健康信息</Text>
                                    </View>
                                    <View style={[CommonStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*健康报告*/}
                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'HealthReport')}>
                                <View style={[CommonStyles.cellItem]}>
                                    <View style={[CommonStyles.cellItemIconBox]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/center_report.png')}/>
                                    </View>

                                    <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                        <Text style={[CommonStyles.cellItemContentText]}>健康报告</Text>
                                    </View>
                                    <View style={[CommonStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*健康方案*/}
                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'HealthPlan')}>
                                <View style={[CommonStyles.cellItem]}>
                                    <View style={[CommonStyles.cellItemIconBox]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/center_project.png')}/>
                                    </View>

                                    <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                        <Text style={[CommonStyles.cellItemContentText]}>健康方案</Text>
                                    </View>
                                    <View style={[CommonStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*运动排名*/}

                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'sportRank')}>
                                <View style={[CommonStyles.cellItem, CommonStyles.cellItemNoBoder]}>
                                    <View style={[CommonStyles.cellItemIconBox]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/center_rank.png')}/>
                                    </View>

                                    <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                        <Text style={[CommonStyles.cellItemContentText]}>运动排名</Text>
                                    </View>
                                    <View style={[CommonStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        {/*个人相关*/}
                        <View style={[CommonStyles.cellGroup]}>
                            {/*我的足迹*/}
                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'MyTracks')}>
                                <View style={[CommonStyles.cellItem]}>
                                    <View style={[CommonStyles.cellItemIconBox]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/center_myTracks.png')}/>
                                    </View>

                                    <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                        <Text style={[CommonStyles.cellItemContentText]}>我的足迹</Text>
                                    </View>
                                    <View style={[CommonStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*设置*/}
                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'Setting')}>
                                <View style={[CommonStyles.cellItem]}>
                                    <View style={[CommonStyles.cellItemIconBox]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/setting.png')}/>
                                    </View>

                                    <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                        <Text style={[CommonStyles.cellItemContentText]}>系统设置</Text>
                                    </View>
                                    <View style={[CommonStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*关注公众号*/}
                            <TouchableWithoutFeedback
                                onPress={this.navigateTo.bind(this, navigate, 'Focus')}>
                            <View style={[CommonStyles.cellItem, CommonStyles.cellItemNoBoder]}>
                                <View style={[CommonStyles.cellItemIconBox]}>
                                    <Image resizeMode={'stretch'}
                                           roundAsCircle={true}
                                           style={[CommonStyles.cellItemIcon]}
                                           source={require('../../assets/images/me/center_focus.png')}/>
                                </View>
                                <View style={[CommonStyles.flex1, CommonStyles.cellItemContent]}>
                                    <Text style={[CommonStyles.cellItemContentText]}>关注公众号</Text>
                                </View>
                                <View style={[CommonStyles.cellItemArrow]}>
                                    <Image resizeMode={'stretch'}
                                           roundAsCircle={true}
                                           style={[CommonStyles.cellItemIcon]}
                                           source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                </View>
                            </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}