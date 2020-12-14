import { Dimensions, StyleSheet } from 'react-native';

export const styleDash = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#f2f2f2',
        height: Dimensions.get('window').height
    }
})


export const styleBar = StyleSheet.create({
    container:{
        height:'100%',
        width:'15%',
        backgroundColor:'#fff'
    },
    buttons:{
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    icon:{
        marginLeft: 25,
        marginRight: 20
    },
    text:{
        color:'#008B8B',
        fontWeight:'bold',
        fontSize: 20
    },
    subtext:{
        fontSize: 12,
        color:'#868686',
        marginLeft: 12,
        marginBottom: 10
    },
    items:{
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row',
        marginTop:10,
        marginBottom:5

    },
    card:{
        backgroundColor:'#778899',
        borderRadius: 16,
        width:'80%',
        height:'30%'
    }
});

export const styleTarefa = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        backgroundColor:"#fff",
        padding: 30,
        borderRadius: 7
    },
    input: {
        width: '100%',
        height:50,
        borderRadius: 5,
        borderColor:'#000',
        borderWidth:1,
        marginTop:5,
        textAlign:'center'
    },
    viewBtn:{
        marginTop:30,
        width:'100%'
    },
    picker:{
        width:'100%',
        height:50,
        marginTop:15
    },
    inputDate:{
        width: 50,
        height:30,
        borderRadius: 5,
        borderColor:'#000',
        borderWidth:1,
        marginLeft:15,
        textAlign:'center'
    }
});

export const StyleUser = StyleSheet.create({
    inputs:{
        flexDirection:'row',
        width:'100%',
        padding:10,
    },
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding: 30,
        borderRadius: 7
    },
    txtInput:{
        width: '100%',
        height:40,
        borderRadius: 5,
        borderColor:'#000',
        borderWidth:1,
        marginTop:5,
        textAlign:'center',
        marginRight:5
    },
    viewBtn:{
        marginTop:30,
        width:'15%'
    }
});

export const styleEmpresa = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding: 30,
        borderRadius: 7
    },
    inputs:{
        width:'100%',
        padding: 10,
    },
    cnpj:{
        width:'15%',
        height:40
    },
    line:{
        width:'100%',
        height:40,
        flexDirection: 'row',
        marginBottom:20
    },
    txtInput:{
        width:'40%',
        height:40,
        marginLeft:5
    },
    fantasia:{
        width:'35%',
        height:40,
        marginLeft: 5
    }
})