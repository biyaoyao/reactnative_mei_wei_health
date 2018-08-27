/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
import {MeInfoStyles, CommonStyles}  from '../../assets/styles/index';
import {Modal, TouchableWithoutFeedback, Image, ScrollView, Text, View} from 'react-native';
import Header from '../../components/header';
import EditBox from '../../components/editBox';
import React, {Component} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
export default class MeInfoApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {
        super(props);
        this.state = {
            files: [
                {
                    url: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/step-3dd73180-7d69-4561-989a-b9a0bbedc597a',
                    id: '2121',
                }
            ],
            imageUrls: [
                {
                    props: {
                        // Or you can set source directory.
                        source: require('../../assets/images/me/photo.jpg')
                    }
                }
            ],
            userInfo: {
                photo: require('../../assets/images/me/photo.jpg'),
                nickname: '一生一世',
                age: 22,
                address: '广东省佛山市顺德区',
                signature: '指鹿为马,不负韶华!'
            },
            title: '',
            data: {
                name: '',
                value: ''
            },
            editVisible: false,
            modalVisible: false
        };
    }

    previewImage (index) {
        console.log('previewImage', index);
        this.setState({modalVisible: true});
    }


    editUserInfo (flag, title) {
        console.log('editUserInfo', this.state.userInfo);
        this.setState({
            editVisible: true,
            title: title,
            data: {
                name: flag,
                value: this.state.userInfo[flag] + '',
                type: typeof this.state.userInfo[flag]
            }
        });
    }


    uploadPhoto () {
        console.log('uploadPhoto');
    }


    render () {
        const {navigate} = this.props.navigation;
        const {navigation} = this.props;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.content]}>
                <Header title="个人中心" nav={navigation}/>

                <View style={[CommonStyles.flex1, MeInfoStyles.mainContent]}>
                    <ScrollView>

                        <View style={[MeInfoStyles.cellGroup]}>
                            {/*头像*/}
                            <TouchableWithoutFeedback onPress={this.previewImage.bind(this)}>
                                <View style={[MeInfoStyles.cellItem, MeInfoStyles.photo]}>
                                    <View style={[MeInfoStyles.cellItemName]}>
                                        <Text style={[MeInfoStyles.cellItemNameText]}>头像</Text>
                                    </View>

                                    <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                        <Image resizeMode={'cover'}
                                               roundAsCircle={true}
                                               style={MeInfoStyles.photoImage}
                                               source={this.state.userInfo.photo}/>
                                    </View>
                                    <View style={[MeInfoStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*昵称*/}
                            <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'nickname', '昵称')}>
                                <View style={[MeInfoStyles.cellItem]}>
                                    <View style={[MeInfoStyles.cellItemName]}>
                                        <Text style={[MeInfoStyles.cellItemNameText]}>昵称</Text>
                                    </View>
                                    <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                        <Text
                                            style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.nickname}</Text>
                                    </View>
                                    <View style={[MeInfoStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*年龄*/}
                            <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'age', '年龄')}>
                                <View style={[MeInfoStyles.cellItem]}>
                                    <View style={[MeInfoStyles.cellItemName]}>
                                        <Text style={[MeInfoStyles.cellItemNameText]}>年龄</Text>
                                    </View>
                                    <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                        <Text style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.age}</Text>
                                    </View>

                                    <View style={[MeInfoStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={[MeInfoStyles.cellGroup]}>
                            {/*常用地址*/}
                            <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'address', '常用地址')}>
                                <View style={[MeInfoStyles.cellItem]}>
                                    <View style={[MeInfoStyles.cellItemName]}>
                                        <Text style={[MeInfoStyles.cellItemNameText]}>常用地址</Text>
                                    </View>
                                    <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                        <Text style={[MeInfoStyles.cellItemValueText]}>

                                            {this.state.userInfo.address}
                                        </Text>
                                    </View>
                                    <View style={[MeInfoStyles.cellItemArrow]}>
                                        <Image resizeMode={'stretch'}
                                               roundAsCircle={true}
                                               style={[CommonStyles.cellItemIcon]}
                                               source={require('../../assets/images/me/arrow-right-gray.png')}/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {/*个性签名*/}
                            <TouchableWithoutFeedback onPress={this.editUserInfo.bind(this, 'signature', '个性签名')}>
                                <View style={[MeInfoStyles.cellItem]}>
                                    <View style={[MeInfoStyles.cellItemName]}>
                                        <Text style={[MeInfoStyles.cellItemNameText]}>个性签名</Text>
                                    </View>
                                    <View style={[CommonStyles.flex1, MeInfoStyles.cellItemValueBox]}>
                                        <Text
                                            style={[MeInfoStyles.cellItemValueText]}>{this.state.userInfo.signature}</Text>
                                    </View>
                                    <View style={[MeInfoStyles.cellItemArrow]}>
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
                {/*图片预览*/}
                <Modal
                    visible={this.state.modalVisible}
                    maskClosable={true}
                    closable={true}
                    transparent={true}
                    onRequestClose={() => {
                        console.log('onRequestClose');
                    }}>
                    <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.modalBody]}>
                        <View style={[CommonStyles.modalHead]}>
                            <Header
                                title="图片预览"
                                nav={{
                                    goBack: () => {
                                        this.setState({modalVisible: false});
                                    }
                                }}
                                right={
                                    <Text
                                        style={[CommonStyles.headerRightText, CommonStyles.font16, CommonStyles.textCenter, CommonStyles.colorWhite]}
                                        onPress={this.uploadPhoto.bind(this)}
                                    >重新上传</Text>
                                }
                            />
                        </View>
                        <ImageViewer onClick={() => {
                            console.log('onPress');
                            this.setState({modalVisible: false});
                        }} imageUrls={this.state.imageUrls} index={0}/>
                    </View>
                </Modal>
                <EditBox title={this.state.title}
                         visible={this.state.editVisible}
                         data={this.state.data}
                         save={(data) => {
                             console.log(data);
                             let userInfo = this.state.userInfo;
                             userInfo[data.name] = data.value;
                             this.setState({
                                 userInfo: userInfo,
                                 editVisible: false
                             });
                         }}
                         goBack={(data) => {
                             console.log(data);
                             this.setState({
                                 editVisible: false
                             });
                         }}>

                </EditBox>
            </View>
        );
    }
}