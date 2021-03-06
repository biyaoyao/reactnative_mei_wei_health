/**
 * Created by BIYY on 2018-6-5.
 */
import  LoginApp from '../views/login/index';
import  ProfileApp from '../views/Profile';
import  RegisterApp from '../views/register/index';
import  ForgetApp from '../views/forget/index';
import  checkSmsCodeForRegister from '../views/register/smsCode';
import  checkPasswordForRegister from '../views/register/password';
import  checkSmsCodeForForget from '../views/forget/smsCode';
import  checkPasswordForForget from '../views/forget/password';
import  selectCommunity from '../views/register/community';
import  cookbookSearch from '../views/cookbook/search';
import  cookbookDeatial from '../views/cookbook/detail';
import  CookbookArticle from '../views/cookbook/article';
import  HomeApp from '../views/index/index';
import  MeInfoApp from '../views/me/info';
import  HealthIndexApp from '../views/me/health/index';
import  HealthReportApp from '../views/me/health/report';
import  HealthPlanApp from '../views/me/health/plan';
import  sportRankApp from '../views/me/sportRank';
import  MyTracksApp from '../views/me/tracks';
import  SettingApp from '../views/me/setting';
import  FocusApp from '../views/me/focus';


import  FillInInfoApp from '../views/fill-in-info/index';
import {
    createStackNavigator,
} from 'react-navigation';
const App = createStackNavigator({
    Login: {//登录页
        screen: LoginApp,
    },
    Forget: {
        screen: ForgetApp
    },
    Register: {//注册页
        screen: RegisterApp
    },
    checkSmsCodeForRegister: {//验证短信验证码-注册
        screen: checkSmsCodeForRegister
    },
    checkPasswordForRegister: {//密码-注册
        screen: checkPasswordForRegister
    },
    checkSmsCodeForForget: {//验证短信验证码-忘记密码
        screen: checkSmsCodeForForget
    },
    checkPasswordForForget: {//密码-忘记密码
        screen: checkPasswordForForget
    },
    selectCommunity: {//选择小区
        screen: selectCommunity
    },
    cookbookSearch: {//搜索食谱
        screen: cookbookSearch
    },
    cookbookDeatial: {//食谱详情
        screen: cookbookDeatial
    },
    cookbookArticle: {//文章
        screen: CookbookArticle
    },
    Home: {//主页
        screen: HomeApp
    },
    FillInInfo: {
        screen: FillInInfoApp
    },
    MeInfo: {//个人详情
        screen: MeInfoApp
    },
    HealthIndex: {//健康信息
        screen: HealthIndexApp
    },
    HealthReport: {//健康报告
        screen: HealthReportApp
    },
    HealthPlan: {//健康方案
        screen: HealthPlanApp
    },
    sportRank: {//运动排名
        screen: sportRankApp
    },
    MyTracks: {//我的足迹
        screen: MyTracksApp
    },
    Setting: {//系统设置
        screen: SettingApp
    },
    Focus: {//关注公众号
        screen: FocusApp
    },

    mode: 'modal',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'float', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },  // 回调
    onTransitionEnd: () => {
        console.log('导航栏切换结束');
    }  // 回调
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});
export  default  App;