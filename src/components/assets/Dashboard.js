import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { styleDash } from '../styles';
import Headers from '../cards/Header';
import BarraLateral from '../cards/BarraLateral';
import Precos from '../cards/Preco';
import Graficos from '../cards/Graficos';
import Tarefas from '../assets/Tarefas';
import Estacion from '../assets/Estacion';
import Users from '../assets/Users'
import Cancela from '../assets/Cancela';

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {dash: 0, tarefas: 0, ferramentas: 0, placas: 0, estacion:0, user:0, cancela:0}

        this._dashboard = this._dashboard.bind(this);
        this._tools = this._tools.bind(this);
        this._toDo = this._toDo.bind(this);
        this._wp = this._wp.bind(this);
        this._estacion = this._estacion.bind(this);
        this._user = this._user.bind(this);
        this._cancela = this._cancela.bind(this);

    }

    _dashboard(){
        this.setState({dash: 1, tarefas: 0, ferramentas: 0, placas: 0, estacion:0, user:0, cancela:0})
    }

    _tools(){
        this.setState({dash: 0, tarefas: 0, ferramentas: 1, placas: 0, estacion:0, user:0, cancela:0})
    }

    _toDo(){
        this.setState({dash: 0, tarefas: 1, ferramentas: 0, placas: 0, estacion:0, user:0, cancela:0})
    }
    
    _wp(){
        this.setState({dash: 0, tarefas: 0, ferramentas: 0, placas: 1, estacion:0, user:0, cancela:0})
    }

    _estacion(){
        this.setState({dash: 0, tarefas: 0, ferramentas: 0, placas: 0, estacion:1, user:0, cancela:0})
    }

    _user(){
        this.setState({dash: 0, tarefas: 0, ferramentas: 0, placas: 0, estacion:0, user:1, cancela:0})
    }
    _cancela(){
        this.setState({dash: 0, tarefas: 0, ferramentas: 0, placas: 0, estacion:0, user:0, cancela:1})
    }

    render() {
        if(this.state.cancela == 1){
            return (
                <View style={styleDash.container}>
                    <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Cancela />
                    </ScrollView>
                </View>
            )

        }
        if(this.state.dash == 1){
            return (
                <View style={styleDash.container}>
                    <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Precos />
                        <Graficos />
                    </ScrollView>
                </View>
            )

        }
        if(this.state.user == 1){
            return (
                <View style={styleDash.container}>
                    <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Users />
                    </ScrollView>
                </View>
            )

        }
        if(this.state.ferramentas == 1){
            return (
                <View style={styleDash.container}>
                <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Text>FERRAMENTAS</Text>
                    </ScrollView>
                </View>
            )
            
        }
        if(this.state.tarefas == 1){
            return (
                <View style={styleDash.container}>
                <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Tarefas />
                    </ScrollView>
                </View>
            )
            
        }
        if(this.state.placas == 1){
            return (
                <View style={styleDash.container}>
                <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Text>PLACAS</Text>
                    </ScrollView>
                </View>
            )
            
        }
        if(this.state.estacion == 1){
            return (
                <View style={styleDash.container}>
                <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Estacion />
                    </ScrollView>
                </View>
            )
            
        }
        else {
            return (
                <View style={styleDash.container}>
                    <BarraLateral _dashboard={this._dashboard} _tools={this._tools} _toDo={this._toDo} _wp={this._wp} _estacion={this._estacion} _user={this._user} _cancela={this._cancela}/>
                    <ScrollView>
                        <Headers />
                        <Precos />
                        <Graficos />
                    </ScrollView>
                </View>
            )

        }
    }
}