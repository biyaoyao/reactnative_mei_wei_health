import React, {Component} from 'react';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Modal, View, Text, Image,TextInput} from 'react-native';
import {EditBoxStyles, CommonStyles} from  '../../assets/styles/index';
import Header from '../header/index';
export default class EditBox extends Component {
    constructor (props) {
        super(props);
        //console.log(this.props.children);
        this.state = {
            title: this.props.title || '',
            modalVisible: this.props.visible || false,
            data: this.props.data
        };
    }

    componentDidMount () {
        // this.autoFocusInst.focus();
    }

    componentWillReceiveProps (props) {
        console.log('componentWillReceiveProps', props);
        this.setState({
            title: props.title,
            data: props.data,
            modalVisible: props.visible,
        });
    }

    save () {
        this.setState({modalVisible: false});
        if (typeof this.props.save === 'function') {
            this.props.save(this.state.data);
        }
    }
    clearValue () {
        this.setState({
            data: {
                name: this.state.data.name,
                type: this.state.data.type,
                value: ''
            }
        });
    }
    onChangeValue (value) {
        this.setState({
            data: {
                name: this.state.data.name,
                type: this.state.data.type,
                value: value
            }
        });
    }
    focusValue () {
        const input = this.refs.value;
        input.focus();
    }
    render () {
        return (
            <Modal
                visible={this.state.modalVisible}
                maskClosable={true}
                closable={true}
                transparent={true}
                onRequestClose={() => {
                    console.log('onRequestClose');
                }}>
                <View style={[CommonStyles.flex, CommonStyles.flexColumn, CommonStyles.modalBody]}>
                    <View style={[CommonStyles.modalHead]}>
                        <Header
                            title={this.state.title}
                            nav={{
                                goBack: () => {
                                    this.setState({modalVisible: false});
                                    if (typeof this.props.goBack === 'function') {
                                        this.props.goBack('goBack');
                                    }
                                }
                            }}
                            right={
                                <Text
                                    style={[CommonStyles.headerRightText, CommonStyles.font16, CommonStyles.textCenter, CommonStyles.colorWhite]}
                                    onPress={this.save.bind(this)}
                                >保存</Text>
                            }
                        />
                    </View>


                    <View style={[CommonStyles.p10, CommonStyles.flex1, CommonStyles.bgWhite]}>
                        <View style={[EditBoxStyles.inputBox, CommonStyles.flex, CommonStyles.flexRow]}>
                            <View style={[EditBoxStyles.input, CommonStyles.flex1]}>
                                <TouchableWithoutFeedback onPress={this.focusValue.bind(this)}>
                                    <KeyboardAvoidingView >
                                        <TextInput
                                            autoCorrect={true}
                                            ref="value"
                                            keyboardType={ this.state.data.type ==="number"?"numeric":"default" }
                                            underlineColorAndroid="transparent"
                                            value={this.state.data.value}
                                            onChangeText={this.onChangeValue.bind(this)}
                                            style={EditBoxStyles.textInput}/>
                                    </KeyboardAvoidingView>
                                </TouchableWithoutFeedback>
                            </View>
                            {this.state.data.value.length > 0 ? (
                                <TouchableWithoutFeedback onPress={this.clearValue.bind(this)}>
                                    <View
                                        style={[EditBoxStyles.inputBoxLogo, CommonStyles.flex, CommonStyles.flexCenter]}>
                                        <Image resizeMode="contain"
                                               style={EditBoxStyles.iconImage}
                                               source={require('../../assets/images/clear.png')}/>
                                    </View>
                                </TouchableWithoutFeedback>) : null}
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

}