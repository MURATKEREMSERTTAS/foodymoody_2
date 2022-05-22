import { StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity, Image } from 'react-native'
import {Seperator} from '../components';
import {Colors,Fonts,Images} from '../constants';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Display } from '../utils';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
      <Seperator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer} >
        <Ionicons name='chevron-back-outline' size={30} color={Colors.DARK_FIVE} onPress={() => navigation.goBack()} />
        <Text style={styles.headerText} >Forget Password</Text>
      </View>
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.content}>Enter your E-mail</Text>
      <Seperator height={Display.setHeight(2)} />
      <View style={styles.inputContainer} >
        <View style={styles.inputSubContainer} >
          <Feather name='user' size={22} color={Colors.INACTIVE_GREY} style={{marginRight:10}}/>
          <TextInput placeholder='E-mail address'
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText} />
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} 
                        onPress={() => navigation.navigate("SignInScreen")} >
        <Text style={styles.SignInButtonText} >Sign In</Text>
      </TouchableOpacity>
      <Seperator height={Display.setHeight(59)} />
      <Text style={{marginLeft:460,fontSize:7}}>™️</Text>
      <Text style={{marginLeft:380,color:Colors.DARK_FIVE}}>FoodyMoody</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.DEFAULT_WHITE,
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
    },
    headerText:{
        fontSize:30,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DARK_FIVE,
        lineHeight:30*1.5,
        width:Display.setWidth(80),
        textAlign:'center',
    },
    title:{
        fontSize:30,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_BLACK,
        lineHeight:30*1.5,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20,
    },
    content:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:Colors.DEFAULT_GREY,
        marginHorizontal:20,
        marginTop:10,
        marginBottom:10
    },
    inputContainer:{
      backgroundColor:Colors.DARK_ONE,
      borderRadius:8,
      paddingHorizontal:20,
      marginHorizontal:20,
      borderColor:Colors.DEFAULT_BLUE1,
      borderWidth:0.5,
      justifyContent:'center',
    },
    inputSubContainer:{
      flexDirection:'row',
      alignItems:'center',
    },
    inputText:{
      fontSize:20,
      padding:0,
      height:Display.setHeight(5),
      color:Colors.DEFAULT_BLUE,
      flex:1,
    },
    signInButton:{
      backgroundColor:Colors.DEFAULT_BLUE1,
      borderRadius:40,
      paddingVertical:20,
      paddingHorizontal:20,
      marginHorizontal:20,
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
    },
})
export default ForgotPasswordScreen;