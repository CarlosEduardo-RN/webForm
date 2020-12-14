import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart, ProgressChart, } from 'react-native-chart-kit'
import { Header } from 'react-native-elements'
import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';


export const data = [Math.random() * 0.4, Math.random() *0.6, Math.random() *0.8]

export const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#40E0D0',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}

export default class Graficos extends Component {
    
  constructor(props) {
    super(props);
    this.state = { labels: '' }
  }
  componentWillMount() {
    this.caculaTotalMes();
  }

  componentDidUpdate() {
    this.caculaTotalMes();
  }

  caculaTotalMes() {
    const dataCriptografada = b64.encode(`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`);
    firebase.database().ref(`totalNoMes/${dataCriptografada}/${new Date().getMonth()}-${new Date().getFullYear()}`).once("value", snapshot => { this.setState({ labels: snapshot.val() }) });
    this.total = _.map(this.state.labels, (val, uid) => { return { ...val, uid } });
  }

    render() {
        return (
            <View style={{ justifyContent: 'space-between', width:'100%' }}>
                <View style={{width:'45%'}}>
                    <Header centerComponent={{ text: "AGENDAMENTOS - TOTAL", style: { color: "#000" } }} containerStyle={{ width: '90%' }} placement="left" containerStyle={{ marginLeft: 15, backgroundColor: '#f2f2f2' }} />
                    <LineChart
                        data={{
                            labels: ['qlq coisa','qlq coisa','qlq coisa','qlq coisa','qlq coisa','qlq coisa'],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }]
                        }}
                        width={ Dimensions.get("window").width-350} // from react-native
                        height={350}
                        chartConfig={{
                            backgroundGradientFrom: '#000',
                            backgroundGradientTo: '#008B8B',
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                        bezier
                        style={{
                            borderRadius: 16,
                            marginLeft: 15,
                            width:'100%'
                        }}
                    /></View>
                <View style={{width:'45%'}}>
                    <Header centerComponent={{ text: "CORRETIVAS - AVULSOS - PREVENTIVAS", style: { color: "#000" } }} containerStyle={{ width: '90%' }} placement="left" containerStyle={{ marginLeft: 15, backgroundColor: '#f2f2f2' }} />
                    <ProgressChart
                        data={data}
                        width={Dimensions.get("window").width-350}
                        height={350}
                        chartConfig={chartConfig}
                        style={{
                            borderRadius: 16,
                            marginLeft: 15,
                            width:'100%',
                            marginBottom: 15
                        }}
                    />
                </View>
            </View>
        )
    }
}
