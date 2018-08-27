/*
 * File: index.js
 * File Created: 2018-8-15
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-15
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
/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
import {MeInfoStyles, HealthStyles, CommonStyles}  from '../../../assets/styles/index';
import {TouchableWithoutFeedback, Image, ScrollView, Text, View} from 'react-native';
import Header from '../../../components/header';
import {Picker, Tabs, ActionSheet} from 'antd-mobile-rn';
import React, {Component} from 'react';
const tabs = [
    {title: '健康信息'},
    {title: '健康和习惯'},
    {title: '健康评估'},
];

export default class HealthIndexApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {
        super(props);
        this.state = {
            tabIndex: 0,

            userInfo: {
                gender: '男',
                birthday: '1992-01-04',
                height: '160CM',
                weight: '60KG',
                familyHistory:'无',
                pastHistory:'无',
                allergy:'无',
                dietTaboo:'无',
                smoking:'不吸烟',
                drink:'不喝酒',
                work:'轻度',
                exercise:'很少'
            },
        };

    }

    editPlan () {
        this.showAction();
    }

    showAction () {
        const BUTTONS = ['男', '女', '取消'];
        ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                title: '选择性别',
                maskClosable: true,
                'data-seed': 'logId'
            },
            (buttonIndex) => {

                if (buttonIndex !== BUTTONS.length - 1) {
                    console.log('buttonIndex', BUTTONS[buttonIndex]);
                }
            });
    }

    editUserInfo (flag, title) {
        console.log('editUserInfo', this.state.userInfo, this.state.userInfo[flag]);
    }

    render () {
        const {navigate} = this.props.navigation;
        const {navigation} = this.props;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.content]}>
                <Header title="健康信息"
                        nav={navigation}
                        right={
                            <Text
                                style={[CommonStyles.headerRightText, CommonStyles.font16, CommonStyles.textCenter, CommonStyles.colorWhite]}
                                onPress={this.editPlan.bind(this)}
                            >修改目标</Text>
                        }/>
                <View style={[CommonStyles.flex1]}>
                    <Tabs tabs={tabs}
                          onChange={(tab, index) => {
                              console.log('onChange', tab, index);
                              this.setState({
                                  tabIndex: index
                              });
                          }}
                          initialPage={0}>
                        {/*健康信息*/}

                        <View style={[CommonStyles.flex1, MeInfoStyles.mainContent]}>
                            <ScrollView>
                                <View style={[MeInfoStyles.cellGroup]}>
                                    {/*性别*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'gender', '性别')}>

                                            <View style={[MeInfoStyles.cellItem]}>
                                                <View style={[MeInfoStyles.cellItemName]}>
                                                    <Text style={[MeInfoStyles.cellItemNameText]}>性别</Text>
                                                </View>
                                                <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                    <Text
                                                        style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.gender}</Text>
                                                </View>
                                                <View style={[MeInfoStyles.cellItemArrow]}>
                                                    <Image resizeMode={'stretch'}
                                                           roundAsCircle={true}
                                                           style={[CommonStyles.cellItemIcon]}
                                                           source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                                </View>
                                            </View>
                                    </TouchableWithoutFeedback>
                                    {/*生日*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'birthday', '生日')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>生日</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.birthday}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*身高*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'height', '身高')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>身高</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.height}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    {/*体重*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'weight', '体重')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>体重</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.weight}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </ScrollView>

                        </View>
                        {/*健康和习惯*/}
                        <View style={[CommonStyles.flex1, MeInfoStyles.mainContent]}>
                            <ScrollView>
                                <View style={[MeInfoStyles.cellGroup]}>
                                    {/*家族史*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'familyHistory', '家族史')}>

                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>家族史</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.familyHistory}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*既往史*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'pastHistory', '既往史')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>既往史</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.pastHistory}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*过敏史*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'allergy', '过敏史')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>过敏史</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.allergy}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    {/*饮食禁忌*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'dietTaboo', '饮食禁忌')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>饮食禁忌</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.dietTaboo}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*吸烟情况*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'smoking', '吸烟情况')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>吸烟情况</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.smoking}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*饮酒情况*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'drink', '饮酒情况')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>饮酒情况</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.drink}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*工作强度*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'work', '工作强度')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>工作强度</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.work}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/*体育锻炼*/}
                                    <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'exercise', '体育锻炼')}>
                                        <View style={[MeInfoStyles.cellItem]}>
                                            <View style={[MeInfoStyles.cellItemName]}>
                                                <Text style={[MeInfoStyles.cellItemNameText]}>体育锻炼</Text>
                                            </View>
                                            <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                                <Text
                                                    style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.exercise}</Text>
                                            </View>
                                            <View style={[MeInfoStyles.cellItemArrow]}>
                                                <Image resizeMode={'stretch'}
                                                       roundAsCircle={true}
                                                       style={[CommonStyles.cellItemIcon]}
                                                       source={require('../../../assets/images/me/arrow-right-gray.png')}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </ScrollView>
                        </View>
                        {/*健康评估*/}
                        <View style={[CommonStyles.flex1, MeInfoStyles.mainContent]}>
                            <Text>健康评估</Text>
                        </View>
                    </Tabs>
                    {this.state.tabIndex === 2 ? null : <View style={[CommonStyles.footer, CommonStyles.bgWhite]}>
                        <Text style={[HealthStyles.submit]}>提交</Text>
                    </View>}

                </View>
            </View>
        );
    }
}