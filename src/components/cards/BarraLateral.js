import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { styleBar } from '../styles';
import { Divider, Icon } from "react-native-elements";

export default class BarraLateral extends Component {
    render() {
        return (
            <View style={styleBar.container}>
                <Image style={{ width: "100%", height: 100 }} resizeMode="contain" source={require('../../img/WP.png')} />
                <Divider style={{ width: "80%", margin: 20 }} />
                <TouchableHighlight onPress={this.props._dashboard}>
                    <View style={styleBar.buttons}>
                        <Icon
                            style={styleBar.icon}
                            color="#008B8B"
                            name="dashboard"
                            size={20}
                            type="material"
                        />
                        <Text style={styleBar.text}>Dashboard</Text>
                    </View>
                </TouchableHighlight>
                <Divider style={{ width: "80%", margin: 20 }} />
                <View style={styleBar.buttons}>
                    <Text style={styleBar.subtext}>SUPORTE</Text>
                </View>
                <TouchableHighlight onPress={this.props._toDo}>
                <View style={styleBar.items}>
                    <Icon
                        style={styleBar.icon}
                        color="#008B8B"
                        name="assignment"
                        size={20}
                        type="material"
                    />
                    <Text style={styleBar.text}>Tarefas</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props._tools}>
                <View style={styleBar.items}>
                    <Icon
                        style={styleBar.icon}
                        color="#008B8B"
                        name="build"
                        size={20}
                        type="material"
                    />
                    <Text style={styleBar.text}>Ferramentas</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props._wp}>
                <View style={styleBar.items}>
                    <Icon
                        style={styleBar.icon}
                        color="#008B8B"
                        name="input"
                        size={20}
                        type="material"
                    />
                    <Text style={styleBar.text}>Placas</Text>
                </View>
                </TouchableHighlight>
                <Divider style={{ width: "80%", margin: 20 }} />
                <View style={styleBar.buttons}>
                    <Text style={styleBar.subtext}>GERENTE</Text>
                </View>
                <TouchableHighlight onPress={this.props._estacion}>
                <View style={styleBar.items}>
                    <Icon
                        style={styleBar.icon}
                        color="#008B8B"
                        name="business"
                        size={20}
                        type="material"
                    />
                    <Text style={styleBar.text}>Empresa</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props._user}>
                <View style={styleBar.items}>
                    <Icon
                        style={styleBar.icon}
                        color="#008B8B"
                        name="person"
                        size={20}
                        type="material"
                    />
                    <Text style={styleBar.text}>Uusários</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props._cancela}>
                <View style={styleBar.items}>
                    <Icon
                        style={styleBar.icon}
                        color="#008B8B"
                        name="car"
                        size={20}
                        type="material"
                    />
                    <Text style={styleBar.text}>CANCELAS</Text>
                </View>
                </TouchableHighlight>
            </View>
        )
    }
}