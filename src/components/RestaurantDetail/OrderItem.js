import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
export default function OrderItem({item}) {
  const {title,price} = item;
    return (
    <View style={styles.container} >
        <Text style ={{fontWeight:"600",fontSize:16}}>{title}</Text>
        <Text style={{opacity:0.7,fontsize:16}} >{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:"#999"
    }
})