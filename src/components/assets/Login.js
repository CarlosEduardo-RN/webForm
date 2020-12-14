import { keyBy } from 'lodash';
import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, Button, Input  } from 'react-native-elements'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {email:'', senha:''}
    }
    
    mudaEstadoEmail(texto){
        this.setState({email:texto})
    }

    mudaEstadoSenha(texto){
        this.setState({senha:texto})
    }
    
    verificaLogin(email, senha){
        if(this.state.email != 'admin@wp.com.br' || this.state.senha != '123456'){
            alert("E-mail ou Senha inválidos")
        }
        else{
            this.props.mudatelaInicial(1)
        }
    }

    verificaEnter(enter){
        if(enter == 'Enter'){
            this.verificaLogin(this.state.email, this.state.senha)
        }
    }

    render() {
        return (
                <Card>
                    <Image style={{width:"100%",height:100}} resizeMode="contain" source={require('../../img/WP.png')} />
                    <Input placeholder='Email'  leftIcon={{ type: 'font-awesome', name: 'user' }} onChangeText={texto => this.mudaEstadoEmail(texto)} />
                    <Input placeholder='Senha' leftIcon={{ type: 'font-awesome', name: 'lock' }} onKeyPress={(keypress) => this.verificaEnter(keypress.key)} onChangeText={texto => this.mudaEstadoSenha(texto)}  secureTextEntry={true} />
                    <Button buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }} title='Acessar'  onPress={() => this.verificaLogin(this.state.email, this.state.senha)} />
                </Card>
        )
    }
}
