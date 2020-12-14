import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { styleTarefa } from '../styles';
import firebase from 'firebase'
import InputSpinner from "react-native-input-spinner";

import { sendNotification } from '../notification/Notification';
import DateTime from '../cards/DateTime';

export default class Tarefas extends Component {

    constructor(props) {
        super(props);
        this.state = { cliente: '', dia: '', mes: '', ano: '', hora: 8, solicita: '', tipo: '', diaMarcado:''}
        this.alteraDia = this.alteraDia.bind(this)
    }
    componentWillMount(){

    }


    alteracliente(texto) {
        this.setState({ cliente: texto });
    }

    alteraDia(texto, marcado) {
        this.setState({ dia: texto, diaMarcado: marcado });
        console.log(this.state.diaMarcado)
    }
    alteraSolicita(texto){
        this.setState({solicita:texto})
    }


    inserefirebase() {
        if (this.state.cliente == '' || this.state.dia == '' || this.state.hora == '' || this.state.solicita == '' || this.state.tipo == '') {
            alert("TODOS OS CAMPOS DEVEM SER PREENCHIDOS OU INFORMADOS CORRETAMENTE")
        }
         else {
            firebase.database().ref(`agendamentos/${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`).push().set({
                'cliente': this.state.cliente,
                'dtAgendamento': `${this.state.dia}`,
                'hrAgendamento': `${this.state.hora}:00`,
                'solicita': this.state.solicita,
                'tipo': this.state.tipo,
                'dataCadastro': `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
            }).then(() => this.mandaNotificacao())
                .then(() => alert("TAREFA SALVA COM SUCESSO!"))
                .catch(err => alert(err.message));

        }
    }

    mandaNotificacao() {
        sendNotification({
            app_id: "6a801dc3-d5fc-4e20-bc0c-4fa6d6b505f1",
            contents: { "en": "WP - AGENDA " + "\r\n" + this.state.tipo + " - " + this.state.cliente + " ÀS " + this.state.hora + ":00" },
            included_segments: ["All"]
        });
    }

    mudaTipo(value) {
        this.setState({ tipo: value })
    }

    render() {
        return (
            <View style={styleTarefa.container}>
                <Text>PREENCHA TODOS OS CAMPOS CORRETAMENTE PARA CADASTRAR SUA TAREFA</Text>
                <Picker style={styleTarefa.picker} onValueChange={(value) => this.mudaTipo(value)}>
                    <Picker.Item label='selecione o tipo de atendimento' value="null" />
                    <Picker.Item label='Corretiva' value="CORRETIVA" />
                    <Picker.Item label='Preventiva' value="PREVENTIVA" />
                    <Picker.Item label='Instalação' value="INSTALAÇÃO" />
                    <Picker.Item label='Garantia' value="GARANTIA" />
                </Picker>
                <TextInput style={styleTarefa.input} placeholder="CLIENTE" onChangeText={texto => this.alteracliente(texto)}></TextInput>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5, width:'100%' }}>
                        <DateTime alteraDia={this.alteraDia} diaMarcado={this.state.diaMarcado}/>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, width:'100%', justifyContent:'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                        <Text>HORA:</Text>
                        <InputSpinner style={{width: '100%',height:60,alignItems:'center'}}
                            max={18}
                            min={8}
                            colorMax={"#f04048"}
                            colorMin={"#40c5f4"}
                            value={this.state.hora}
                            onChange={(num) => {this.setState({hora: num})
                            }}
                            onDecrease={num => this.setState({hora: num})}
                        />
                    </View>
                </View>
                <TextInput style={styleTarefa.input} placeholder="INFORME A SOLICITAÇÃO EM ATÉ 245 CARACTERES" maxLength={245} onChangeText={texto => this.alteraSolicita(texto)}></TextInput>
                <View style={styleTarefa.viewBtn}>
                    <Button onPress={() => this.inserefirebase()} title='cadastrar tarefa' color='#008B8B' />
                </View>
            </View>
        )
    }
}
