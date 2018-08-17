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
import ImageViewer from 'react-native-image-zoom-viewer';
import {CookBookStyles, CommonStyles}  from '../../assets/styles/index';
export default class CookbookDetailApp extends Component {
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
            modalVisible: false,
            index: 0,
            stepsList: [
                {
                    title: '1.购买如图所示食材',
                    url: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/step-d6b5294e-c755-4fd8-bc32-cbea596428f5a'
                },
                {
                    title: '2.将里脊肉过水5分钟切丝，木耳、冬笋、青椒、胡萝卜切丝',
                    url: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/step-3dd73180-7d69-4561-989a-b9a0bbedc597a'
                },
                {
                    title: '3.将除香葱和醋的调料全部加入锅中搅拌均匀，启动烹饪',
                    url: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/step-3ddaf079-3249-4b9f-8f64-1251032e6d84a',
                },
                {
                    title: '4.提示完成后，加入香葱花和2小勺醋搅拌均匀出锅',
                    url: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/step-2de50575-39b4-492c-b673-026c9a3b6448a',
                }
            ],
        };

    }

    componentDidMount () {
        // this.setState({modalVisible: false});
    }

    previewImage (index) {
        console.log('previewImage', index);
        this.setState({modalVisible: true});
        this.setState({index: index});
    }

    render () {
        const {navigation} = this.props;
        return (
            <View style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.cookBookApp]}>
                <Header title="食谱详情" nav={navigation}/>
                <ScrollView>
                    {/*banner 部分*/}
                    <View style={[CookBookStyles.bannerBox]}>
                        <Image style={[CookBookStyles.carouselItemImage]} resizeMode="stretch"
                               source={{uri: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/da88d503-747f-402d-ba07-c5cbdbdf3fbd'}}></Image>
                        <View style={[CommonStyles.flex, CommonStyles.flexRow, CookBookStyles.bannerInfo]}>
                            <View
                                style={[CommonStyles.flexRow, CommonStyles.flex, CommonStyles.flex1, CookBookStyles.bannerInfoLeft]}>
                                <Text style={[CookBookStyles.bannerInfoText]}>麦片面包</Text>
                            </View>
                            <View style={[CommonStyles.flex, CommonStyles.flexRow, CookBookStyles.bannerInfoRight]}>
                                <Image style={[CookBookStyles.bannerInfoIcon]}
                                       source={require('../../assets/images/cook-book/view_white.png')}/>
                                <Text style={[CookBookStyles.bannerInfoText]}>12</Text>
                                <Image style={[CookBookStyles.bannerInfoIcon]}
                                       source={require('../../assets/images/cook-book/love_white.png')}/>
                                <Text style={[CookBookStyles.bannerInfoText]}>13</Text>
                            </View>
                        </View>
                    </View>
                    {/*描述部分*/}
                    <View style={[CookBookStyles.describeBox]}>
                        <Text style={[CookBookStyles.describeTitle]}>麦片面包</Text>
                        <Text style={[CookBookStyles.describe]}>一道简单美味菜肴</Text>
                        <View style={[CommonStyles.flex, CommonStyles.flexRow, CookBookStyles.recipeFeature]}>
                            {/*适宜人群*/}
                            <View style={[CookBookStyles.featureItem]}>
                                <View
                                    style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.featureItemBox]}>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>适宜</Text>
                                    <Image resizeMode="stretch"
                                           style={[CookBookStyles.featureItemImage]}
                                           source={require('../../assets/images/cook-book/many_man.png')}/>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>全体人群</Text>
                                </View>
                            </View>
                            {/*烹饪方式*/}
                            <View style={[CookBookStyles.featureItem]}>
                                <View
                                    style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.featureItemBox]}>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>烹饪方式</Text>
                                    <Image resizeMode="stretch"
                                           style={[CookBookStyles.featureItemImage]}
                                           source={require('../../assets/images/cook-book/cook.png')}/>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>煲汤</Text>
                                </View>
                            </View>
                            {/*时长*/}
                            <View style={[CookBookStyles.featureItem]}>
                                <View
                                    style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.featureItemBox]}>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>时长</Text>
                                    <Image resizeMode="stretch"
                                           style={[CookBookStyles.featureItemImage]}
                                           source={require('../../assets/images/cook-book/time.png')}/>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>分钟</Text>
                                </View>
                            </View>

                            {/*不适宜*/}
                            <View style={[CookBookStyles.featureItem]}>
                                <View
                                    style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.featureItemBox]}>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>不适宜</Text>
                                    <Image resizeMode="stretch"
                                           style={[CookBookStyles.featureItemImage]}
                                           source={require('../../assets/images/cook-book/less_man.png')}/>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>无</Text>
                                </View>
                            </View>
                            {/*难易程度*/}
                            <View style={[CookBookStyles.featureItem]}>
                                <View
                                    style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.featureItemBox]}>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>难易程度</Text>
                                    <Image resizeMode="stretch"
                                           style={[CookBookStyles.featureItemImage]}
                                           source={require('../../assets/images/cook-book/simple.png')}/>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>易</Text>
                                </View>
                            </View>
                            {/*口味*/}
                            <View style={[CookBookStyles.featureItem]}>
                                <View
                                    style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.featureItemBox]}>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>口味</Text>
                                    <Image resizeMode="stretch"
                                           style={[CookBookStyles.featureItemImage]}
                                           source={require('../../assets/images/cook-book/flavor.png')}/>
                                    <Text style={[CookBookStyles.featureItemText, CommonStyles.flex1]}>清淡、鲜</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*食材清单*/}
                    {/*营养元素*/}
                    <View style={[CookBookStyles.ingredientList]}>
                        {/*分割*/}
                        <View style={[CookBookStyles.division, CommonStyles.flex, CommonStyles.flexRow]}>
                            <View style={[CookBookStyles.divisionLeft]}>
                            </View>
                            <View style={[CookBookStyles.divisionCenter]}>
                                <Text style={[CookBookStyles.divisionName]}>食材清单</Text>
                            </View>
                            <View style={[CookBookStyles.divisionRight]}>
                            </View>
                        </View>
                        {/*内容*/}
                        <View style={[CookBookStyles.tableList, CommonStyles.flex]}>
                            <View style={[CookBookStyles.tableTitle]}>
                                <Text style={[CookBookStyles.tableTitleText]}>主食材</Text>
                            </View>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>冬瓜</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>50.0g</Text>
                                </View>
                            </View>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>海米</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>5.0g</Text>
                                </View>
                            </View>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>纯净水</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>150.0g</Text>
                                </View>
                            </View>
                            <View style={[CookBookStyles.tableTitle]}>
                                <Text style={[CookBookStyles.tableTitleText]}>副食材</Text>
                            </View>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>香葱</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>150.0g</Text>
                                </View>
                            </View>

                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>纯净水</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>10.0g</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    {/*营养元素*/}
                    <View>
                        {/*分割*/}
                        <View style={[CookBookStyles.division, CommonStyles.flex, CommonStyles.flexRow]}>
                            <View style={[CookBookStyles.divisionLeft]}>
                            </View>
                            <View style={[CookBookStyles.divisionCenter]}>
                                <Text style={[CookBookStyles.divisionName]}>营养元素</Text>
                            </View>
                            <View style={[CookBookStyles.divisionRight]}>
                            </View>
                        </View>
                        {/*内容*/}
                        <View style={[CookBookStyles.tableList, CommonStyles.flex]}>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>能量</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>kcal</Text>
                                </View>
                            </View>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>脂肪</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>10.0g</Text>
                                </View>
                            </View>
                            {/*清单项*/}
                            <View style={[CookBookStyles.tableItem, CommonStyles.flex, CommonStyles.flexRow]}>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableName]}>维生素</Text>
                                </View>
                                <View style={[CookBookStyles.tableData]}>
                                    <Text style={[CookBookStyles.tableValue]}>10.0g</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*烹饪步骤*/}
                    <View>
                        {/*分割*/}
                        <View style={[CookBookStyles.division, CommonStyles.flex, CommonStyles.flexRow]}>
                            <View style={[CookBookStyles.divisionLeft]}>
                            </View>
                            <View style={[CookBookStyles.divisionCenter]}>
                                <Text style={[CookBookStyles.divisionName]}>烹饪步骤</Text>
                            </View>
                            <View style={[CookBookStyles.divisionRight]}>
                            </View>
                        </View>
                        {/*内容*/}

                        <View style={[CookBookStyles.stepBox]}>
                            {this.state.stepsList.map((item, index) => (
                                <View key={index}>
                                    <Text style={[CookBookStyles.stepName]}>{item.title}</Text>
                                    <TouchableWithoutFeedback onPress={this.previewImage.bind(this, index)}>
                                        <View style={[CookBookStyles.stepImage]}>
                                            <Image style={[CookBookStyles.stepImage]}
                                                   resizeMode="stretch"
                                                   source={{uri: item.url}}></Image>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text>
                            &nbsp;
                        </Text>
                    </View>
                </ScrollView>
                {/*图片预览*/}
                <Modal
                    visible={this.state.modalVisible}
                    maskClosable={true}
                    closable={true}
                    transparent={true}
                    onRequestClose={() => {
                        console.log('onRequestClose');
                    }}>

                    <ImageViewer onClick={() => {
                        console.log('onPress');
                        this.setState({modalVisible: false});
                    }} imageUrls={this.state.stepsList} index={this.state.index}/>

                </Modal>
            </View>
        );
    }
}
