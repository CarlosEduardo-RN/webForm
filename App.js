import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase'

import Login from './src/components/assets/Login';
import Dashboard from './src/components/assets/Dashboard';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      telainicial: 0
    }
    this.mudatelaInicial=this.mudatelaInicial.bind(this)
  }

  mudatelaInicial(value){
    this.setState({telainicial: value})
  }


  componentWillMount(){ 
  firebase.initializeApp({
    apiKey: "AIzaSyBqT0GuCR9gXbCP3V079FnQprnC4vccerk",
    authDomain: "wpagenda-fc0b5.firebaseapp.com",
    databaseURL: "https://wpagenda-fc0b5.firebaseio.com",
    projectId: "wpagenda-fc0b5",
    storageBucket: "wpagenda-fc0b5.appspot.com",
    messagingSenderId: "137196155631",
    appId: "1:137196155631:web:478d299e4b54114883a11a"
  });}

render(){
  // if(this.state.telainicial == 1){
    return (
      <View>
        <Dashboard /> 
      </View>
    );
  // }else{
  // return (
    // <View>
      //  <Login mudatelaInicial={this.mudatelaInicial} /> 
    //  </View>
  // );
  // }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
