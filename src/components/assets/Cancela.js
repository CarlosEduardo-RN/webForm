import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleTarefa } from '../styles';
import firebase from 'firebase'
import _ from 'lodash';

export default class Cancela extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <View style={styleTarefa.container}>
                <Text>CANCELA</Text>
            </View>
        )
    }
}
