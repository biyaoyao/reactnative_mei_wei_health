/**
 * Created by BIYY on 2018-7-6.
 */
/**
 * Created by BIYY on 2018-6-5.
 */

import httpUtil from '../../common/lib/request';
import config from '../../config/index';
import React, {Component} from 'react';
import {Toast, Modal} from 'antd-mobile-rn';
import Header from '../../components/header';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  StatusBar,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
const alert = Modal.alert;
import {RegisterStyles, CommonStyles}  from '../../assets/styles/index';
export default class CommunityApp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible: false, // 隐藏底部导航栏
      header: null,  //隐藏顶部导航栏
    };
  };

  constructor (props) {
    //console.log($store.getState())
    super(props);
    const {navigation} = this.props;
    this.state = {
      community: null,
      communityList: [],
      register: {
        smsCode: '',
        username: '',
        password: '',
        communityId: ''
      }
    };
  }

  componentDidMount () {
    const {navigation} = this.props;
    const tel = navigation.getParam('tel', '');
    const smsCode = navigation.getParam('smsCode', '');
    const password = navigation.getParam('password', '');
    this.geCommunityList();
  }

  render () {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    const communityList = () => {
      let array = [];
      this.state.communityList.forEach((community) => {
        array.push(
          <TouchableWithoutFeedback key={community.communityId} onPress={this.itemClick.bind(this, community)}>
            <View style={[RegisterStyles.communityItem, CommonStyles.flex, CommonStyles.flexRow]}>
              <View style={[RegisterStyles.communityLeft, CommonStyles.flex, CommonStyles.flexCenter]}>
                <View style={[RegisterStyles.selectBox, CommonStyles.flex, CommonStyles.flexCenter]}>
                  <View
                    style={[this.state.community && this.state.community.communityId === community.communityId ? RegisterStyles.circleIn : null]}>
                  </View>
                </View>
              </View>
              <View style={[RegisterStyles.communityRight, CommonStyles.flex1]}>
                <Text style={[RegisterStyles.communityName]}>{community.name}</Text>
                <Text style={[RegisterStyles.communityAddress]}>{community.address}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      });

      return array;
    };
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={[RegisterStyles.registerApp, CommonStyles.flex, CommonStyles.flexColumn]}>
        <StatusBar hidden={true}/>
        <Header nav={navigation} title="选择小区"/>
        <ScrollView style={[RegisterStyles.communityList, CommonStyles.flex1]}>
          {communityList()}
        </ScrollView>
        <View style={[RegisterStyles.footerSubmit]}>
          <Text onPress={this.submit.bind(this)} style={[RegisterStyles.footerSubmitText]}>完成注册</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }

  async geCommunityList () {
    let result = await httpUtil.ajax({
      api: config.api().searchOrganList,
      data: {
        pagesize: 10000
      }
    });
    result.data.map((item) => {
      item.communityId = item.organId;
      const length = item.organName.split('_').length;
      item.organName = item.organName.split('_')[length - 1];
      item.name = item.organName;
      item.address = item.regionName;
      delete item.organId;
      delete item.organName;
      return item;
    });
    this.setState({
      communityList: result.data
    });
    console.log('geCommunityList', result);
  }

  itemClick (community) {
    if (this.state.community && this.state.community.communityId === community.communityId) {
      this.setState({
        community: null
      });
    } else {
      this.setState({
        community: community
      });
    }
    console.log('itemClick', community);
  }

  async submit () {
    const {navigation} = this.props;
    const tel = navigation.getParam('tel', '');
    const smsCode = navigation.getParam('smsCode', '');
    const password = navigation.getParam('password', '');
    if (!this.state.community) {
      Toast.fail('请选择小区', 1, () => {
      }, true);
      return true;
    }

    console.log('submit', {
      smsCode: smsCode,
      tel: tel,
      nickname: `小美${this.getRandomNum(4)}`,
      passwordRe: password,
      password: password,
      communityId: this.state.community.communityId
    });
    let result = await httpUtil.ajax({
      api: config.api().register,
      data: {
        smsCode: smsCode,
        tel: tel,
        nickname: `小美${this.getRandomNum(4)}`,
        passwordRe: password,
        password: password,
        communityId: this.state.community.communityId
      }
    });
    console.log('submit', result);
    alert('注册成功', '是否直接登录?', [
      {
        text: <Text style={[RegisterStyles.cancleColor, RegisterStyles.button]}>取消</Text>,
        onPress: () => {
          navigate('Login', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: new Date() * 1
          });
        }
      },
      {
        text: <Text style={[RegisterStyles.button]}>确定</Text>,
        onPress: async () => {
          const res = await httpUtil.ajax({
            api: config.api().login,
            data: {
              tel: tel,
              password: password
            }
          });
          const token = await httpUtil.getToken(res.data.as, res.data.ts);
          console.log('token', token);
          const url = config.api().infoInfoCheck.url.replace(config.healthUrl[config.env], '').replace(config.version, '');
          console.log(url);
          const args = httpUtil.genSignArgs({});
          let headers = await httpUtil.getRootHttpHeaders(url, args);
          console.log('getttpHeaders', headers);
          const res2 = await httpUtil.ajax({
            api: config.api().infoInfoCheck,
            data: {},
            headers: headers
          });
          console.log('res2', res2);
        }
      },
    ]);
  }

  getRandomNum (num = 6) {
    let random = '';
    for (let i = 0; i < num; i++) {
      random += Math.ceil(Math.random() * 9);
    }
    return random;
  }
}