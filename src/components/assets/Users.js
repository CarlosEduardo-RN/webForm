import React, { Component } from 'react';
import { View, Text, TextInput, Image, FlatList, ActivityIndicator, Picker, Button } from 'react-native';
import { styleTarefa, StyleUser } from '../styles';
import firebase from 'firebase'
import _ from 'lodash';
import { Card } from "react-native-elements";
import b64 from 'base-64';
import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation } from 'react-native-popup-dialog';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', senha: '', cnpj: '', nome: '', tipo: '', cidade: '', url: '', img: '', dadosUsuario: '', empresa: '', image: '', dialog: false, loading: false, selectedFiles: null }
    }

    componentWillMount() {
        setInterval(() => this.PegaDadosUsuario(), 5000);
        this.dadosUser = ''
    }

    componentWillUnmount() {
        setInterval(false)
    }
    alteraEmail(texto) {
        this.setState({ email: texto });
    }
    alteraSenha(texto) {
        this.setState({ senha: texto });
    }
    alteraCNPJ(texto) {
        this.setState({ cnpj: texto });
    }
    alteraNome(texto) {
        this.setState({ nome: texto });
    }
    alteraTipo(texto) {
        this.setState({ tipo: texto });
    }
    alteraCidade(texto) {
        this.setState({ cidade: texto });
    }
    alteraEmpresa(texto) {
        this.setState({ empresa: texto });
    }

    deletaUser() {
        firebase.database().ref(`usuarios/cadastrados/${this.idUser}`).remove()
            .then(() => {
                firebase.database().ref(`usuarios/${this.cnpjUser}/${this.nameUser}`).remove()
                    .then(() => this.hideDialog())
                    .then(() => alert("USUÁRIO REMOVIDO COM SUCESSO!"))
            })
    }
    showDialog(id, cnpj, name) {
        this.setState({ dialog: true });
        this.idUser = id;
        this.cnpjUser = cnpj;
        this.nameUser = name
    }
    hideDialog() {
        this.setState({ dialog: false });
    }

    seletorDeImagem = event => {
        if (event.target.files[0]) {
            const image = event.target.files[0];
            this.setState(() => ({ image: image }))
        }
    }

    catchtodos(err) {
        this.setState({ loading: false });
        alert(err.message)
        console.log(err.message)
    }


    PegaDadosUsuario() {

        firebase.database().ref(`usuarios/cadastrados`).once("value", snapshot => this.setState({ dadosUsuario: snapshot.val() }));
        this.dadosUser = _.map(this.state.dadosUsuario, (val, uid) => { return { ...val, uid } });
        // console.log(this.dadosUser)
    }

    inserefirebase() {
        const uploadTask = firebase.storage().ref(`image/${this.state.image.name}/${this.state.cnpj}/${this.state.nome}`).put(this.state.image);
        uploadTask.on('state_changed',
            snapshot => { console.log(snapshot) },
            error => { console.log(error) },
            () => {
                firebase.storage().ref(`image`).child(`${this.state.image.name}/${this.state.cnpj}/${this.state.nome}`).getDownloadURL()
                    .then(url => this.salvaImg(url))
                    .catch(err => this.catchtodos(err))
            })

    }

    salvaImg(url) {
        this.setState({ url })
        firebase.database().ref(`usuarios/${this.state.cnpj}/${this.state.nome}`).update({
            'foto': url
        })
            .then(() => this.criaUsuariosLista())
            .catch(() => this.catchtodos(err))
    }

    cadastraUsuario() {
        this.setState({ loading: true })

        if (this.state.email == '' || this.state.senha == '' || this.state.cnpj == '' || this.state.nome == '' || this.state.tipo == '' || this.state.cidade == '' || this.state.empresa == '') {
            alert("TODOS OS CAMPOS DEVEM SER PREENCHIDOS")
        } else
            if (this.state.image == '') {
                alert("INISRA UMA IMAGEM PARA O PERFIL DO USUÁRIO")
            } else
                if (this.state.cnpj.length < 14) {
                    alert("VERIFIQUE SE O CNPJ ESTÁ CORRETO, O MESMO DEVE CONTER 14 NÚMEROS")
                } else
                    if (this.state.senha.length < 6) {
                        alert("A SENHA PRECISA TER NO MÍNIMO 6 DÍGITOS")
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                            .then(() => this.insereDadosUser())
                            .catch(err => this.catchtodos(err))
                    }
    }

    insereDadosUser() {
        firebase.database().ref(`usuarios/${this.state.cnpj}/${this.state.nome}`).set({
            'nome': this.state.nome,
            'cnpj': this.state.cnpj,
            'email': this.state.email,
            'senha': this.state.senha,
            'tipo': this.state.tipo,
            'cidade': this.state.cidade,
            'empresa': this.state.empresa
        }).then(() => this.inserefirebase())
            .catch(err => this.catchtodos(err))
    }

    criaUsuariosLista() {
        this.setState({ loading: false })
        const nomeb64 = b64.encode(this.state.nome);
        firebase.database().ref(`usuarios/cadastrados/${nomeb64}`).set({
            'nome': this.state.nome,
            'cnpj': this.state.cnpj,
            'email': this.state.email,
            'senha': this.state.senha,
            'tipo': this.state.tipo,
            'cidade': this.state.cidade,
            'foto': this.state.url,
            'empresa': this.state.empresa
        }).then(() => alert("USUÁRIO CADASTRADO COM SUCESSO"))
            .then(() => setInterval(() => this.PegaDadosUsuario(), 50))
            .catch(err => this.catchtodos(err))

    }

    ActivityButton() {
        if (this.state.loading) {
            return (
                <View style={StyleUser.viewBtn}>
                    <ActivityIndicator size="large" color='#008B8B' />
                </View>

            )
        } else {
            return (

                <View style={StyleUser.viewBtn}>
                    <Button onPress={() => this.cadastraUsuario()} title='cadastrar Usuário' color='#008B8B' />
                </View>
            )
        }
    }
    renderCard({ item }) {
        {
            return (
                <View style={{ flex: 1, }}>
                    <Card containerStyle={{ borderRadius: 14 }} >
                        <Card.Title style={{ color: '#4b5677' }}>{item.nome}</Card.Title>
                        <Card.Divider />
                        <View style={{ alignItems: "center", borderRadius: 150 }}>
                            <Image
                                style={{ width: 100, height: 150 }}
                                resizeMode="contain"
                                source={{
                                    uri: item.foto
                                }}
                            />
                            <Text style={{ color: '#4b5677', marginBottom: 5 }}>{item.empresa}</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', padding: 5, flexWrap: 'wrap' }}>
                            <View style={{ width: '50%', padding: 5 }}>
                                <Button title='detalhes' onPress={false} color="#008B8B" />
                            </View>
                            <View style={{ width: '50%', padding: 5 }}>
                                <Button title='excluir' onPress={() => this.showDialog(item.uid, item.cnpj, item.nome)} color="red" />
                            </View>
                        </View>
                    </Card>
                </View>)
        }
    }

    render() {
        if (this.dadosUser == '') {
            return (
                <View style={styleTarefa.container}>
                    <Text>PREENCHA TODOS OS CAMPOS CORRETAMENTE PARA CADASTRAR SEU USUÁRIO</Text>
                    <View style={StyleUser.inputs}>
                        <TextInput style={StyleUser.txtInput} placeholder="E-MAIL" onChangeText={texto => this.alteraEmail(texto)} textContentType="emailAddress" ></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="SENHA" onChangeText={texto => this.alteraSenha(texto)} secureTextEntry={true}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="CNPJ" onChangeText={texto => this.alteraCNPJ(texto)} maxLength={14}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="NOME" onChangeText={texto => this.alteraNome(texto)}></TextInput>
                        <Picker style={StyleUser.txtInput}
                            selectedValue={this.state.tipo}
                            onValueChange={texto => this.alteraTipo(texto)}>
                            <Picker.Item label='Tipo de usuário' value='' />
                            <Picker.Item label='Administrador Geral' value='admin' />
                            <Picker.Item label='Usuário Padrão' value='user' />
                        </Picker>
                        <TextInput style={StyleUser.txtInput} placeholder="CIDADE/UF" onChangeText={texto => this.alteraCidade(texto)}></TextInput>
                        <TextInput style={StyleUser.txtInput} placeholder="EMPRESA" onChangeText={texto => this.alteraEmpresa(texto)}></TextInput>
                    </View>
                    <View>
                        <input type="file" onChange={this.seletorDeImagem} />
                    </View>
                    <View style={StyleUser.viewBtn}>
                        <Button onPress={() => this.cadastraUsuario()} title='cadastrar Usuário' color='#008B8B' />
                    </View>
                    <View>
                        <ActivityIndicator size="large" color='#008B8B' />
                    </View>
                </View>
            )
        }
        return (
            <View style={styleTarefa.container}>
                <Text>PREENCHA TODOS OS CAMPOS CORRETAMENTE PARA CADASTRAR SEU USUÁRIO</Text>
                <View style={StyleUser.inputs}>
                    <TextInput style={StyleUser.txtInput} placeholder="E-MAIL" onChangeText={texto => this.alteraEmail(texto)} textContentType="emailAddress" ></TextInput>
                    <TextInput style={StyleUser.txtInput} placeholder="SENHA" onChangeText={texto => this.alteraSenha(texto)} secureTextEntry={true}></TextInput>
                    <TextInput style={StyleUser.txtInput} placeholder="CNPJ" onChangeText={texto => this.alteraCNPJ(texto)} maxLength={14}></TextInput>
                    <TextInput style={StyleUser.txtInput} placeholder="NOME" onChangeText={texto => this.alteraNome(texto)}></TextInput>
                    <Picker style={StyleUser.txtInput} selectedValue={this.state.tipo} onValueChange={texto => this.alteraTipo(texto)}>
                        <Picker.Item label='Tipo de usuário' value='' />
                        <Picker.Item label='Administrador Geral' value='admin' />
                        <Picker.Item label='Usuário Padrão' value='user' />
                    </Picker>
                    <TextInput style={StyleUser.txtInput} placeholder="CIDADE/UF" onChangeText={texto => this.alteraCidade(texto)}></TextInput>
                    <TextInput style={StyleUser.txtInput} placeholder="EMPRESA" onChangeText={texto => this.alteraEmpresa(texto)}></TextInput>
                </View>
                <View>
                    <input type="file" onChange={this.seletorDeImagem} />
                </View>
                {this.ActivityButton()}
                <View>
                    <FlatList data={this.dadosUser}
                        renderItem={({ item }) => this.renderCard({ item })}
                        numColumns={4} />
                </View>
                <Dialog visible={this.state.dialog} dialogTitle={<DialogTitle title="Excluir Usuário ?" />} dialogAnimation={new SlideAnimation({ slideFrom: 'bottom', })}
                    onTouchOutside={() => { this.hideDialog() }}
                    footer={
                        <DialogFooter>
                            <DialogButton text="CANCELAR" onPress={() => this.hideDialog()} />
                            <DialogButton text="PROSSEGUIR" textStyle={{ color: 'red' }} onPress={() => this.deletaUser()} />
                        </DialogFooter>
                    }>
                    <DialogContent>
                        <Text>ESTE PROCEDIMENTO IRÁ EXCLUIR O USUÁRIO PERMANENTEMENTE, DESEJA PROSSEGUIR?</Text>
                    </DialogContent>
                </Dialog>
            </View>
        )
    }
}
