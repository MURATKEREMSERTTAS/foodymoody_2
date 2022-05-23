import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Display } from '../utils'
import { Fonts,Colors,Images } from '../constants'

const WelcomeCard = ({title,description,image}) => {
  return (
    <View style={styles.container} >
        <Image style={styles.image} source={Images[image]} resizeMode="contain"/>
        <Text style={styles.titlestyle}>{title}</Text>
        <Text style={styles.descriptionstyle}>{description}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.setWidth(100),
    },
    image:{
        height: Display.setHeight(25),
        width: Display.setWidth(60),
    },
    titlestyle:{
        fontSize:35,
        fontFamily:Fonts.POPPINS_BOLD,
        color:Colors.DEFAULT_BLUE1
    },
    descriptionstyle:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_LIGHT,
        textAlign:'center',
        marginHorizontal:20,
        color : Colors.DEFAULT_BLUE1

    }
})

export default WelcomeCard