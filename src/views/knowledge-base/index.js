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
import {TouchableWithoutFeedback, Image, ScrollView, Text, View} from 'react-native';
import {SearchBar} from 'antd-mobile-rn';
import data from './data/index';
import {KnowledgeStyles, CommonStyles}  from '../../assets/styles/index';
export default class KnowledgeApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {
        //console.log($store.State())
        super(props);
        this.state = {
            knowledgeList: data.list
        };
    }


    componentDidMount () {
        //this.manualFocusInst.onFocus();
        console.log(this.manualFocusInst);
    }

    cookBokDetail (navigate) {
        navigate('cookbookDeatial', {});
    }

    render () {
        const {navigation} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, KnowledgeStyles.knowledgeApp]}>
                <View style={[KnowledgeStyles.searchBox]}>
                    <SearchBar
                        ref={ref => this.manualFocusInst = ref}
                        style={[KnowledgeStyles.searchBar]}
                        onSubmit={(value) => alert(value)}
                        showCancelButton={false}
                        onCancel={() => navigation.goBack()}
                        placeholder="搜索更多健康知识"/>
                </View>
                <View style={[CommonStyles.flex1]}>
                    <ScrollView>
                        {
                            this.state.knowledgeList.map((item, index) => (
                                <TouchableWithoutFeedback key={index} onPress={this.cookBokDetail.bind(this, navigate)}>
                                    <View style={[KnowledgeStyles.searchList, CommonStyles.flex, CommonStyles.flexRow]}>
                                        <View
                                            style={[KnowledgeStyles.photoBox, CommonStyles.flex, CommonStyles.flexCenter]}>
                                            <Image roundAsCircle={true} style={[KnowledgeStyles.photo]}
                                                   resizeMode={'stretch'}
                                                   source={{uri: item.smallPhoto}}/>
                                        </View>


                                        <View style={[CommonStyles.flex1]}>
                                            <View style={[KnowledgeStyles.title]}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={[KnowledgeStyles.titleText]}>{item.title}</Text>
                                            </View>
                                            <View
                                                style={[KnowledgeStyles.info, CommonStyles.flex, CommonStyles.flexRow]}>
                                                <View
                                                    style={[KnowledgeStyles.infoLeft, CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexRow]}>
                                                    <Image style={[KnowledgeStyles.icon]}
                                                           source={require('../../assets/images/cook-book/view.png')}/>
                                                    <Text style={[KnowledgeStyles.infoText]}>{item.views}</Text>
                                                    <Image style={[KnowledgeStyles.icon]}
                                                           source={require('../../assets/images/cook-book/love_black.png')}/>
                                                    <Text style={[KnowledgeStyles.infoText]}>{item.likes}</Text>
                                                </View>

                                                <View
                                                    style={[KnowledgeStyles.infoRight, CommonStyles.flex, CommonStyles.flexRow]}>
                                                    <Image style={[KnowledgeStyles.infoRightIcon]}
                                                           source={require('../../assets/images/knowledge/keywordIcon.png')}/>

                                                    <Text
                                                        style={[KnowledgeStyles.infoText, KnowledgeStyles.infoRightText]}>
                                                        {item.keyword}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}
