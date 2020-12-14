import * as React from "react";
import { View } from "react-native";
import { PricingCard } from "react-native-elements";
import firebase from 'firebase';
import _ from 'lodash';
import b64 from 'base-64';

export default class Precos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { numeros: '' }
  }
  componentWillMount() {
    this.caculaTotalAgendamentosHoje();
    this.informaTotalnoDia();

  }

  componentDidUpdate() {
    this.caculaTotalAgendamentosHoje();
    this.informaTotalnoDia();
    this.totalAgendamentos();

  }

  caculaTotalAgendamentosHoje() {
    firebase.database().ref(`agendamentos/${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`).once("value", snapshot => { this.setState({ numeros: snapshot.val() }) });
    this.total = _.map(this.state.numeros, (val, uid) => { return { ...val, uid } });
  }

  totalAgendamentos(){
    this.totalAgendamentosLength = this.total.length
    firebase.database().ref(`totalAgendamentos/`).set({
      'total':this.totalAgendamentosLength
    }).catch(err => console.log(err.message))

  }

  informaTotalnoDia(){
    const dataCriptografada = b64.encode(`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`);
    firebase.database().ref(`totalNoMes/${dataCriptografada}/${new Date().getMonth()}-${new Date().getFullYear()}`).set({
      'total':this.total.length,
      'mes':`${new Date().getMonth()}-${new Date().getFullYear()}`
    }).catch(err => console.log(err.message))

  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <PricingCard
          button={{ color: '#fff' }}
          containerStyle={{ width: '22%' }}
          color="#4f9deb"
          info={["Suporte técnico externo"]}
          infoStyle={{}}
          price={this.total.length}
          pricingStyle={{ fontSize: 30 }}
          title="Total de agendamentos hoje"
          titleStyle={{ fontSize: 20 }}
          wrapperStyle={{ padding: 10 }}
        />
        <PricingCard
          button={{ color: '#fff' }}
          containerStyle={{ width: '22%' }}
          color="#008B8B"
          info={["Suporte técnico interno"]}
          infoStyle={{}}
          price={this.totalAgendamentosLength}
          pricingStyle={{ fontSize: 30 }}
          title="Total de agendamentos"
          titleStyle={{ fontSize: 20 }}
          wrapperStyle={{ padding: 10 }}
        />
        <PricingCard
          button={{ color: '#fff' }}
          containerStyle={{ width: '22%' }}
          color="#4f9deb"
          info={["Suporte técnico externo"]}
          infoStyle={{}}
          price="30"
          pricingStyle={{ fontSize: 30 }}
          title="Total de atendimentos hoje"
          titleStyle={{ fontSize: 20 }}
          wrapperStyle={{ padding: 10 }}
        />
        <PricingCard
          button={{ color: '#fff' }}
          containerStyle={{ width: '22%' }}
          color="#008B8B"
          info={["Suporte técnico externo"]}
          infoStyle={{}}
          price="30"
          pricingStyle={{ fontSize: 30 }}
          title="Total de atendimentos"
          titleStyle={{ fontSize: 20 }}
          wrapperStyle={{ padding: 10 }}
        />
      </View>
    );
  }

}