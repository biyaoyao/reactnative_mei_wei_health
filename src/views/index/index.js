/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../../components/header';
import FooterTab from '../../components/footer-tab';
import MyHealth from '../../views/my-health/index';
import HealthPlan from '../../views/health-plan/index';
import Cookbook from '../../views/cookbook/index';
import KnowledgeBase from '../../views/knowledge-base/index';
import Me from '../../views/me/index';
import {IndexStyles, CommonStyles}  from '../../assets/styles/index';
export default class IndexApp extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,  //隐藏顶部导航栏
        };
    };

    constructor (props) {
        super(props);
        const {navigation} = this.props;
        this.state = {
            key: 'me',
            tabList: {
                cookbook: {
                    name: '美维食谱',
                    view: <Cookbook navigation={navigation}/>
                },
                health_plan: {
                    name: '健康日志',
                    view: <HealthPlan navigation={navigation}/>
                },
                my_health: {
                    name: '我的健康',
                    view: <MyHealth navigation={navigation}/>
                },
                knowledge_base: {
                    name: '健康知识',
                    view: <KnowledgeBase navigation={navigation}/>
                },
                me: {
                    name: '个人中心',
                    view: <Me navigation={navigation}/>
                }
            }
        };
    }


    render () {
        const {navigate} = this.props.navigation;
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View style={[IndexStyles.indexApp, CommonStyles.flex, CommonStyles.flexColumn]}>
                {
                    this.state.key === 'me' ? null :
                    <Header hideLeft={true} nav={navigation} title={this.state.tabList[this.state.key].name}/>
                }
                <View style={[CommonStyles.flex1]}>
                    {this.state.tabList[this.state.key].view}
                </View>

                <FooterTab current={this.state.key} onPress={(key) => {
                    console.log('onPress', key);
                    this.setState({
                        key: key
                    });
                }}/>
            </View>
        );
    }
}