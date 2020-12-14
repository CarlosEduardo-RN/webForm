import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { Dimensions, Text, View } from 'react-native';

// import { Container } from './styles';

export default class Headers extends Component {
    render(){
        return(
        <View style={{flexDirection: 'row', width: Dimensions.get('window').width-288, justifyContent:'flex-end', backgroundColor:'#008B8B', height:100}}>
                <View style={{width:'50%',alignItems:'flex-start', justifyContent:'center', paddingLeft: 30}}>
                    <Text style={{fontWeight:'bold', color:'#fff', fontSize: 16}}>AGENDA TÉCNICA</Text>
                </View>
                <View style={{width:'50%',alignItems:'flex-end', justifyContent:'center'}}>
                    <Avatar activeOpacity={0.2} rounded size="medium" source={{ uri: '../../img/user.png'}} title="WP" onPress={() => alert("chupa meu pinto")}
                        containerStyle={{marginRight: 20}} titleStyle={{color:'#fff'}} placeholderStyle={{backgroundColor:'#4b5677'}} 
                        />
                </View>
        </View>
        )
    }
}