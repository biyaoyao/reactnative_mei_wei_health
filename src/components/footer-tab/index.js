import React, {Component} from 'react';
import {View} from 'react-native';
import {TabBar} from 'antd-mobile-rn';
import {CommonStyles} from  '../../assets/styles/index';
export default class FooterTab extends Component {
    constructor (props) {
        super(props);
        this.state = {
            key: this.props.current || 'cookbook',
        };
    }

    tabItemPress (key) {
        console.log('tabItemPress', key);
        if (this.props.onPress) {
            this.props.onPress(key);
        }
        this.setState({
            key: key
        });
    }

    render () {
        return (
            <View style={[CommonStyles.footer]}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#ff5224"
                    barTintColor="white">
                    <TabBar.Item
                        title="我的健康"
                        key="my_health"
                        selected={this.state.key === 'my_health'}
                        icon={require('../../assets/images/my_health.png')}
                        selectedIcon={require('../../assets/images/my_health_press.png')}
                        onPress={() => {
                            this.tabItemPress('my_health');
                        }}
                        data-seed="logId">
                    </TabBar.Item>
                    <TabBar.Item
                        title="健康日志"
                        key="health_plan"
                        selected={this.state.key === 'health_plan'}
                        icon={require('../../assets/images/health_plan.png')}
                        selectedIcon={require('../../assets/images/health_plan_press.png')}
                        onPress={() => {
                            this.tabItemPress('health_plan');
                        }}
                        data-seed="logId">
                    </TabBar.Item>
                    <TabBar.Item
                        title="美维食谱"
                        key="cookbook"
                        selected={this.state.key === 'cookbook'}
                        icon={require('../../assets/images/cookbook.png')}
                        selectedIcon={require('../../assets/images/cookbook_press.png')}
                        onPress={() => {
                            this.tabItemPress('cookbook');
                        }}
                        data-seed="logId">
                    </TabBar.Item>
                    <TabBar.Item
                        title="健康知识"
                        key="knowledge_base"
                        selected={this.state.key === 'knowledge_base'}
                        icon={require('../../assets/images/knowledge_base.png')}
                        selectedIcon={require('../../assets/images/knowledge_base_press.png')}
                        onPress={() => {
                            this.tabItemPress('knowledge_base');
                        }}
                        data-seed="logId">
                    </TabBar.Item>
                    <TabBar.Item
                        title="个人中心"
                        key="me"
                        selected={this.state.key === 'me'}
                        icon={require('../../assets/images/me.png')}
                        selectedIcon={require('../../assets/images/me_press.png')}
                        onPress={() => {
                            this.tabItemPress('me');
                        }}
                        data-seed="logId">
                    </TabBar.Item>
                </TabBar>
            </View>
        );
    }
}