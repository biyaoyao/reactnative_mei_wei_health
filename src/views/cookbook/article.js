/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {
    Modal,
    ScrollView,
    Image,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import Header from '../../components/header';
import {CookBookStyles, CommonStyles}  from '../../assets/styles/index';
export default class CookbookArticleApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {
        //console.log($store.State())
        super(props);
    }

    componentDidMount () {
        // this.setState({modalVisible: false});
    }

    cookBokDetail (navigate) {
        navigate('cookbookDeatial', {});
    }

    render () {
        const {navigation} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.cookBookApp]}>
                <Header title="大暑：清暑祛湿，养阴生津" nav={navigation}/>
                <ScrollView>
                    {/*banner 部分*/}
                    <View style={[CookBookStyles.articleBannerBox]}>
                        <Image style={[CookBookStyles.carouselItemImage]} resizeMode="stretch"
                               source={{uri: 'https://m-health-image.oss-cn-shenzhen.aliyuncs.com/d40f0a2d-ade9-48dc-8565-cc3b96b772dc?x-oss-process=image/resize,m_lfit,h_200,w_200'}}></Image>
                    </View>
                    <View style={[CommonStyles.flex, CommonStyles.flexCenter, CookBookStyles.articleTitleBox]}>
                        <Text style={[CookBookStyles.articleTitle]}>大暑：清暑祛湿，养阴生津</Text>
                    </View>
                    <View style={[CookBookStyles.articleContentBox]}>
                        <Text style={[CookBookStyles.articleContent]}>
                            1.盛夏阳热下降，水气上腾，湿气充斥，故在此季节，感受湿邪者较多。在中医学中，湿为阴邪，其性趋下，重浊粘滞，易阻遏气机，损伤阳气，食疗药膳以清热解暑为宜。
                        </Text>
                        <Text style={[CookBookStyles.articleContent]}>
                            2.夏令气候炎热，易伤津耗气，因此常可选用药粥滋补身体。
                        </Text>
                    </View>
                    <View style={[CookBookStyles.cookBookBox]}>
                        <TouchableWithoutFeedback onPress={this.cookBokDetail.bind(this, navigate)}>
                            <View style={[CookBookStyles.searchList, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.photoBox, CommonStyles.flex, CommonStyles.flexCenter]}>
                                    <Image roundAsCircle={true} style={[CookBookStyles.photo]} resizeMode={'stretch'}
                                           source={{uri: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/da88d503-747f-402d-ba07-c5cbdbdf3fbd'}}/>
                                </View>
                                <View style={[CommonStyles.flex1]}>
                                    <View style={[CookBookStyles.title]}>
                                        <Text style={[CookBookStyles.titleText]}>鸡蛋饼</Text>
                                    </View>
                                    <View style={[CookBookStyles.info, CommonStyles.flex, CommonStyles.flexRow]}>
                                        <View
                                            style={[CookBookStyles.infoLeft, CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexRow]}>
                                            <Image style={[CookBookStyles.icon]}
                                                   source={require('../../assets/images/cook-book/view.png')}/>
                                            <Text style={[CookBookStyles.infoText]}>12</Text>
                                            <Image style={[CookBookStyles.icon]}
                                                   source={require('../../assets/images/cook-book/love_black.png')}/>
                                            <Text style={[CookBookStyles.infoText]}>13</Text>
                                        </View>
                                        <View
                                            style={[CookBookStyles.infoRight, CommonStyles.flex, CommonStyles.flexRow]}>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>煎/</Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>鲜香</Text>
                                            <Text style={[CookBookStyles.infoRightSpace]}>
                                            </Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>容易/</Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>10分钟</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.cookBokDetail.bind(this, navigate)}>
                            <View style={[CookBookStyles.searchList, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.photoBox, CommonStyles.flex, CommonStyles.flexCenter]}>
                                    <Image roundAsCircle={true} style={[CookBookStyles.photo]} resizeMode={'stretch'}
                                           source={{uri: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/da88d503-747f-402d-ba07-c5cbdbdf3fbd'}}/>
                                </View>


                                <View style={[CommonStyles.flex1]}>
                                    <View style={[CookBookStyles.title]}>
                                        <Text style={[CookBookStyles.titleText]}>鸡蛋饼</Text>
                                    </View>
                                    <View style={[CookBookStyles.info, CommonStyles.flex, CommonStyles.flexRow]}>
                                        <View
                                            style={[CookBookStyles.infoLeft, CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexRow]}>
                                            <Image style={[CookBookStyles.icon]}
                                                   source={require('../../assets/images/cook-book/view.png')}/>
                                            <Text style={[CookBookStyles.infoText]}>12</Text>
                                            <Image style={[CookBookStyles.icon]}
                                                   source={require('../../assets/images/cook-book/love_black.png')}/>
                                            <Text style={[CookBookStyles.infoText]}>19</Text>
                                        </View>
                                        <View
                                            style={[CookBookStyles.infoRight, CommonStyles.flex, CommonStyles.flexRow]}>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>煎/</Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>鲜香</Text>
                                            <Text style={[CookBookStyles.infoRightSpace]}>
                                            </Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>容易/</Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>10分钟</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={this.cookBokDetail.bind(this, navigate)}>
                            <View style={[CookBookStyles.searchList, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.photoBox, CommonStyles.flex, CommonStyles.flexCenter]}>
                                    <Image roundAsCircle={true} style={[CookBookStyles.photo]} resizeMode={'stretch'}
                                           source={{uri: 'https://m-health-image.oss-cn-shenzhen.aliyuncs.com/f95c18dc-d0dc-4e59-a805-13c74a781fe6'}}/>
                                </View>
                                <View style={[CommonStyles.flex1]}>
                                    <View style={[CookBookStyles.title]}>
                                        <Text style={[CookBookStyles.titleText]}>鸡蛋饼</Text>
                                    </View>
                                    <View style={[CookBookStyles.info, CommonStyles.flex, CommonStyles.flexRow]}>
                                        <View
                                            style={[CookBookStyles.infoLeft, CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexRow]}>
                                            <Image style={[CookBookStyles.icon]}
                                                   source={require('../../assets/images/cook-book/view.png')}/>
                                            <Text style={[CookBookStyles.infoText]}>12</Text>
                                            <Image style={[CookBookStyles.icon]}
                                                   source={require('../../assets/images/cook-book/love_black.png')}/>
                                            <Text style={[CookBookStyles.infoText]}>19</Text>
                                        </View>
                                        <View
                                            style={[CookBookStyles.infoRight, CommonStyles.flex, CommonStyles.flexRow]}>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>煎/</Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>鲜香</Text>
                                            <Text style={[CookBookStyles.infoRightSpace]}>
                                            </Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>容易/</Text>
                                            <Text
                                                style={[CookBookStyles.infoText, CookBookStyles.infoRightText]}>10分钟</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>


                    </View>
                    <View>
                        <Text>
                            &nbsp;
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
