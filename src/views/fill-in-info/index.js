/**
 * Created by BIYY on 2018-6-5.
 */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../../components/header';
import  {$login} from '../../store/index';
export default class IndexApp extends Component {
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

  render () {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View>
        <Header nav={navigation}/>
        <Text>Profile</Text>
        <View>
          <Text>填写资料</Text>
        </View>

        <View>
          <Text>otherParam:{otherParam}</Text>
        </View>
        <Button
          title="Go to HOME"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}