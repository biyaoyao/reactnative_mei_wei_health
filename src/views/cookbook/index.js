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
import {Grid, SearchBar, Carousel} from 'antd-mobile-rn';
import React, {Component} from 'react';
import {TouchableWithoutFeedback, ScrollView, Image, Text, View, Modal} from 'react-native';
import hot from './data/hot';
import theme from './data/theme';
import category from './data/category';

const GridList = [
    {
        icon: 'http://193.112.154.97/categoryImg/2.png',
        cate: '功效',
        id: 1,
        text: `营养保健`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/7.png',
        cate: '人群',
        id: 2,
        text: `人群膳食`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/6.png',
        cate: '烹饪设备',
        id: 3,
        text: `智能烹饪`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/9.png',
        cate: '食用季节',
        id: 4,
        text: `食用季节`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/5.png',
        cate: '烹饪方式',
        id: 5,
        text: `烹饪方式`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/3.png',
        cate: '菜式',
        id: 7,
        text: `常见菜式`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/1.png',
        cate: '菜系',
        id: 9,
        text: `常见菜系`,
    },
    {
        icon: 'http://193.112.154.97/categoryImg/4.png',
        cate: '难易程度',
        id: 8,
        text: `难易程度`,
    }
];
export default class CookbookApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {
        super(props);
        this.state = {
            hotList: hot.list,
            themeList: theme.list,
            allCategoryList: category.list,
            categoryList: [],
            categoryName: '',
            modalVisible: false
        };
    }

    afterChange (index) {
        /* tslint:disable: no-console */
        console.log('horizontal change to', index);
    }

    searchCookBook (navigate) {
        console.log('cookbookSearch');
        navigate('cookbookSearch', {});
        //alert('搜索食谱');
    }

    /**
     * 食谱详情
     * @param navigate
     */
    cookBokDetail (navigate) {
        navigate('cookbookDeatial', {});
    }

    cookbookArticle (navigate) {
        navigate('cookbookArticle', {});
    }

    /**
     * 显示modal
     * @param el
     * @param data
     * @param index
     */
    showModal (el, index) {
        const data = GridList[index];
        let categoryList = this.state.allCategoryList.filter((item) => {
            return data.id === item.pid;
        });
        console.log(categoryList);
        this.setState({
            categoryList: categoryList,
            categoryName: data.text,
            modalVisible: true
        });
    }

    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.cookBookApp]}>
                <ScrollView>
                    <View style={[CookBookStyles.carouselBox]}>
                        <Carousel
                            style={[CookBookStyles.carousel]}
                            selectedIndex={0}
                            afterChange={this.afterChange}
                            autoplay
                            infinite>
                            {
                                this.state.hotList.map((item, key) => (
                                    <TouchableWithoutFeedback key={key}
                                                              onPress={this.cookBokDetail.bind(this, navigate)}>
                                        <View style={[CookBookStyles.carouselItem]}>
                                            <Image style={[CookBookStyles.carouselItemImage]}
                                                   resizeMode="stretch"
                                                   source={{uri: item.photo}}/>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))
                            }
                        </Carousel>
                    </View>
                    {/*搜索框*/}
                    <TouchableWithoutFeedback onPress={this.searchCookBook.bind(this, navigate)}>
                        <View style={[CookBookStyles.searchBox]}>
                            <SearchBar
                                disabled
                                style={[CookBookStyles.searchBar]}
                                onSubmit={(value) => alert(value)}
                                showCancelButton={false}
                                placeholder="搜索更多菜谱"/>
                        </View>
                    </TouchableWithoutFeedback>
                    {/*分类表格*/}
                    <View>
                        <Grid data={GridList} onClick={(el, index) => this.showModal(el, index)}/>
                    </View>
                    {
                        this.state.themeList.map((item, key) => (
                            <TouchableWithoutFeedback key={key} onPress={this.cookbookArticle.bind(this, navigate)}>
                                <View style={[CookBookStyles.themeBox]}>
                                    <View style={[CookBookStyles.themeItem]}>
                                        <Image style={[CookBookStyles.themeItemImage]} resizeMode="stretch"
                                               source={{uri: item.picture}}/>
                                        <Text style={[CookBookStyles.themeItemText]}>{item.title}</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </ScrollView>
                {/*弹出蒙层*/}
                <Modal
                    visible={this.state.modalVisible}
                    maskClosable={true}
                    closable={true}
                    transparent={true}
                    onRequestClose={() => {
                        console.log('onRequestClose');
                    }}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setState({modalVisible: false});
                        }}>
                        <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.modalBody]}>
                            <View style={[CookBookStyles.categoryName]}>
                                <Text style={[CookBookStyles.categoryNameText]}>{this.state.categoryName}</Text>
                            </View>
                            <ScrollView>
                                <View
                                    style={[CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexRow, CookBookStyles.recipeCategory]}>
                                    {
                                        this.state.categoryList.map((item, key) => (
                                            <TouchableWithoutFeedback
                                                key={key}
                                                onPress={() => {
                                                    this.setState({modalVisible: false});
                                                    this.cookBokDetail(navigate);
                                                }}>
                                                <View style={[CookBookStyles.categoryItem]}>
                                                    <View
                                                        style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.categoryItemBox]}>
                                                        <Text
                                                            style={[CookBookStyles.categoryItemText, CommonStyles.flex1]}>{item.name}</Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        ))}
                                </View>
                            </ScrollView>
                            <View
                                style={[CookBookStyles.categoryClose, CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.flexCenter]}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.setState({modalVisible: false});
                                    }}>
                                    <Image style={[CookBookStyles.categoryCloseImage]} resizeMode="stretch"
                                           source={require('../../assets/images/cook-book/close.png')}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        );
    }
}