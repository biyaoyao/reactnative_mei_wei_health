import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {HeaderStyles, CommonStyles} from  '../../assets/styles/index';
export default class Header extends Component {
    constructor (props) {
        super(props);
        console.log(this.props.children);
    }

    render () {
        return (
            <View style={[HeaderStyles.header, CommonStyles.flex, CommonStyles.flexCenter, CommonStyles.flexRow]}>
                <View style={[HeaderStyles.left]}>
                    {this.props.hideLeft ? null :
                        <Text onPress={this.back.bind(this)} style={[HeaderStyles.backButton,CommonStyles.textCenter, CommonStyles.colorWhite]}>
                            <Image source={require('../../assets/images/arrow-left.png')}/>
                        </Text>}
                </View>
                <View style={[HeaderStyles.center, CommonStyles.flex1, CommonStyles.flex, CommonStyles.flexCenter]}>
                    <Text style={[CommonStyles.textCenter, HeaderStyles.title, CommonStyles.colorWhite]}>
                        {this.props.title}
                    </Text>
                </View>

                <View style={[HeaderStyles.right]}>
                    {/*<Text style={[CommonStyles.textCenter, CommonStyles.colorWhite]}>

                    </Text>*/}
                    {this.props.right}
                </View>
            </View>
        );
    }

    back () {
        this.props.nav.goBack();
        //alert(JSON.stringify(this.props.nav));
    }
}