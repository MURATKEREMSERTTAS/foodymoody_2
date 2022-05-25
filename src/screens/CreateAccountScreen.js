import { StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity, Image } from 'react-native'
import {Seperator} from '../components';
import {Colors,Fonts,Images} from '../constants';
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Display } from '../utils';

const CreateAccountScreen = ({navigation}) => {
  const [passwordShow,setPasswordShow] = useState(false);
  return (
    <View style={styles.container} >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
      <Seperator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer} >
        <Ionicons name='chevron-back-outline' color={Colors.DARK_FIVE} size={30} onPress={() => navigation.goBack()} />
        <Text style={styles.headerText} >Sign Up</Text>
      </View>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.content}>Enter your username,E-mail and password</Text>
      <Seperator height={Display.setHeight(2)} />
      <View style={styles.inputContainer} >
        <View style={styles.inputSubContainer} >
          <Feather name='user' size={22} color={Colors.INACTIVE_GREY} style={{marginRight:10}}/>
          <TextInput placeholder='Username'
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText} />
        </View>
      </View>
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
      <Seperator height={Display.setHeight(2)} />
      <View style={styles.inputContainer} >
        <View style={styles.inputSubContainer} >
          <Feather name='key' size={22} 
                   color={Colors.INACTIVE_GREY}
                   style={{marginRight:10}}/>
          <TextInput placeholder='Password'
                     secureTextEntry={passwordShow ? false : true}
                     placeholderTextColor={Colors.DEFAULT_BLUE}
                     selectionColor={Colors.DEFAULT_BLUE}
                     style={styles.inputText}
                     />
          <Feather name={passwordShow? 'eye' : 'eye-off'} size={22}  
          color={Colors.INACTIVE_GREY}
          onPress={()=>setPasswordShow(!passwordShow)} 
          style={{marginRight:10}}/>
        </View>
      </View>
      <Text></Text>
      <TouchableOpacity style={styles.signInButton} 
                        onPress={() => navigation.navigate("RegisterScreen")} >
        <Text style={styles.SignInButtonText} >Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.orText} >Or</Text>
      <TouchableOpacity style={styles.googleButton} >
        <View style={styles.socialIconContainer}>
          <View style={{left:1,position:"absolute"}} >
            <Image source={Images.GOOGLE} style={styles.socialIcon}/>
          </View>
          <Text style={styles.SignInButtonText} >Create Account with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}  >
        <View style={styles.socialIconContainer} >
          <View style={{left:1,position:"absolute"}} >
            <Image source={Images.FACEBOOK} style={styles.socialIcon} />
          </View>
          <Text style={styles.SignInButtonText} >Create Account with Facebook</Text>
        </View>
      </TouchableOpacity>
      <Seperator height={Display.setHeight(21)} />
      <Text style={{marginLeft:480,fontSize:7,color:Colors.DARK_FIVE}}>™️</Text>
      <Text style={{marginLeft:400,color:Colors.DARK_FIVE}}>FoodyMoody</Text>
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
        color:Colors.REMEMBER_FORGOT_TEXT,
        lineHeight:30*1.5,
        width:Display.setWidth(80),
        textAlign:'center',
    },
    title:{
        fontSize:30,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_BLUE1,
        lineHeight:30*1.5,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20,
    },
    content:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:Colors.DARK_FIVE,
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
    forgotPasswordContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:20,
      marginTop:10,

    },
    rememberText:{
      fontSize:14,
      lineHeight:14*1.5,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:Colors.REMEMBER_FORGOT_TEXT,
    },
    forgotPasswordText:{
      fontSize:14,
      lineHeight:14*1.5,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:Colors.REMEMBER_FORGOT_TEXT,
      marginRight:10,
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
    SignInButtonText:{
      fontSize:20,
      lineHeight:20*1.5,
      fontFamily:Fonts.POPPINS_MEDIUM,
      color:Colors.DEFAULT_WHITE,
    },
    signUpContainer:{
      flexDirection:'row',
      justifyContent:"center",
      marginTop:10,
      paddingVertical:10,
      marginHorizontal:20,
    },
    accountText:{
      fontSize:14,
      lineHeight:14*1.5,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:Colors.DARK_FIVE,
    },
    signUpText:{
      fontSize:14,
      lineHeight:14*1.5,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:Colors.REMEMBER_FORGOT_TEXT,
    },
    orText:{
      fontSize:27,
      lineHeight:27*1.5,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:Colors.DARK_FIVE,
      textAlign:'center',
    },
    googleButton:{
      backgroundColor:Colors.GOOGLE_BLUE,
      borderRadius:40,
      paddingVertical:20,
      paddingHorizontal:20,
      marginHorizontal:20,
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
    },
    facebookButton:{
      backgroundColor:Colors.FACEBOOK_BLUE,
      borderRadius:40,
      paddingVertical:20,
      paddingHorizontal:20,
      marginHorizontal:20,
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
    },
    socialIcon:{
      resizeMode:'contain',
      height:30,
      width:30,
    },
    socialIconContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
    }
})

export default CreateAccountScreen