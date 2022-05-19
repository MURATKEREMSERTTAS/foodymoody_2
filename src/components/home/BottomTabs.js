import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function BottomTabs() {
    return (
        <View style={{
                flexDirection:"row",
                margin:10,
                marginHorizontal:30,
                justifyContent:"space-between"}}
            >
            <TouchableOpacity>    
                <Text style={{marginBottom:3, alignSelf:"center",fontSize:20}} >home</Text>
            </TouchableOpacity>
        </View>
    )
}

  /*<Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />*/