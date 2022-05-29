import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../constants';

export default function BottomTabs({navigation}) {
    return (
        <View style={{
                flexDirection:"row",
                margin:10,
                marginHorizontal:30,
                justifyContent:"space-between"}}
            >
            <Icon icon="home" text="Home"  onPress={()=>navigation.navigate("Home")} />
            <Icon icon="receipt" text="Orders"  onPress={()=>navigation.navigate("OrderScreen")}/>
            <Icon icon="door-open" text="Log Out"  onPress={()=>navigation.navigate("SignInScreen")}/>
        </View>
    )
}

const Icon =(props)=>(
    <TouchableOpacity onPress={()=>props.onPress()} >    
        <View>
            <FontAwesome5 
            name={props.icon}
            size={25}
            style={{
                marginBottom:3,
                alignSelf:"center",
                color:Colors.DEFAULT_BLUE1
            }} />
            <Text style={{color:Colors.DEFAULT_BLUE}} >{props.text}</Text>
        </View>
    </TouchableOpacity>
);
