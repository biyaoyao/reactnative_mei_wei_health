/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {TouchableWithoutFeedback, Image, ScrollView, Text, View} from 'react-native';
import {SearchBar} from 'antd-mobile-rn';
import Header from '../../components/header';
import {CookBookStyles, CommonStyles}  from '../../assets/styles/index';
import cookbook from './data/cookbook';
export default class CookbookSearchApp extends Component {
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
            cookbookList: cookbook.list
        };
    }


    componentDidMount () {
        this.manualFocusInst.onFocus();
        console.log(this.manualFocusInst);
    }

    cookBokDetail (navigate) {
        navigate('cookbookDeatial', {});
    }

    render () {
        const {navigation} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.cookBookApp]}>
                <Header title="食谱搜索" nav={navigation}/>
                <View style={[CookBookStyles.searchBox]}>
                    <SearchBar
                        ref={ref => this.manualFocusInst = ref}
                        style={[CookBookStyles.searchBar]}
                        onSubmit={(value) => alert(value)}
                        showCancelButton={false}
                        onCancel={() => navigation.goBack()}
                        placeholder="搜索更多菜谱"/>
                </View>

                <View style={[CommonStyles.flex1]}>
                    <ScrollView>
                        {
                            this.state.cookbookList.map((item, key) => (
                                <TouchableWithoutFeedback key={key} onPress={this.cookBokDetail.bind(this, navigate)}>
                                    <View style={[CookBookStyles.searchList, CommonStyles.flex, CommonStyles.flexRow]}>
                                        <View
                                            style={[CookBookStyles.photoBox, CommonStyles.flex, CommonStyles.flexCenter]}>
                                            <Image roundAsCircle={true} style={[CookBookStyles.photo]}
                                                   resizeMode={'stretch'}
                                                   source={{uri: item.smallPhoto}}/>
                                        </View>
                                        <View style={[CommonStyles.flex1]}>
                                            <View style={[CookBookStyles.title]}>
                                                <Text style={[CookBookStyles.titleText]}>{item.name}</Text>
                                            </View>
                                            <View
                                                style={[CookBookStyles.info, CommonStyles.flex, CommonStyles.flexRow]}>
                                                <View
                                                    style={[CookBookStyles.infoLeft, CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexRow]}>
                                                    <Image style={[CookBookStyles.icon]}
                                                           source={require('../../assets/images/cook-book/view.png')}/>
                                                    <Text style={[CookBookStyles.infoText]}>{item.views}</Text>
                                                    <Image style={[CookBookStyles.icon]}
                                                           source={require('../../assets/images/cook-book/love_black.png')}/>
                                                    <Text style={[CookBookStyles.infoText]}>{item.likes}</Text>
                                                </View>
                                                <View
                                                    style={[CookBookStyles.infoRight, CommonStyles.flex, CommonStyles.flexRow]}>
                                                    <Text
                                                        style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>{item.cookingWay}/</Text>
                                                    <Text
                                                        style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>{item.tastes}</Text>
                                                    <Text style={[CookBookStyles.infoRightSpace]}>
                                                    </Text>
                                                    <Text
                                                        style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>{item.difficulty}/</Text>
                                                    <Text
                                                        style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>{item.costTime}分钟</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}

                    </ScrollView>
                </View>
            </View>
        );
    }
}