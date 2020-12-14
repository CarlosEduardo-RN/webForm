import React, { Component } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';
import { styleTarefa } from '../styles';
import firebase from 'firebase'
import { styleEmpresa, StyleUser } from '../styles';

export default class Estacion extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    inserefirebase() {
        if (false) {
            alert("TODOS OS CAMPOS DEVEM SER PREENCHIDOS OU INFORMADOS CORRETAMENTE")
        }
        else {
        }
    }

    sobe(){

        firebase.database().ref(`acionamento/CNPJ/`).set({
            "acao":"sobe",
            "remota":"1",
            "tipo":"Can. Sai 1"
        })
    }
    desce(){
        firebase.database().ref(`acionamento/CNPJ/`).set({
            "acao":"desce",
            "remota":"1",
            "tipo":"Can. Sai 1"
        })
    }

    render() {
        return (
            <View style={styleEmpresa.container}>
                <Text>PREENCHA TODOS OS CAMPOS CORRETAMENTE PARA CADASTRAR SUA EMPRESA</Text>
                <View style={styleEmpresa.inputs}>
                    <View style={styleEmpresa.line}>
                        <TextInput style={StyleUser.txtInput} placeholder="CNPJ"                onChangeText={false} maxLength={14}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="RAZÃO SOCIAL"        onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="NOME FANTASIA"       onChangeText={false}></TextInput>
                    </View>
                    <View style={styleEmpresa.line}>
                        <TextInput style={StyleUser.txtInput} placeholder="INSCRIÇÃO ESTADUAL"  onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="INSCRIÇÃO MUNICIPAL" onChangeText={false}></TextInput>
                    </View>
                    <View style={styleEmpresa.line}>
                        <TextInput style={StyleUser.txtInput} placeholder="CEP"                 onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="LOGRADOURO"          onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="NÚMERO"              onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="COMPLEMENTO"         onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="BAIRRO"              onChangeText={false}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="CIDADE/UF"           onChangeText={false}></TextInput>
                    </View>
                </View>
                <Button title="subir" onPress={() => this.sobe()}/>
                <Button title="descer" onPress={() => this.desce()}/>
                <View style={styleTarefa.viewBtn}>
                    <Button onPress={false} title='cadastrar estacionamento' color='green' />
                </View>
            </View>
        )
    }
}
