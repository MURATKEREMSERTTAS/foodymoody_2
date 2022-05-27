import { StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity, Image } from 'react-native'
import {Seperator} from '../components';
import {Colors,Fonts,Images} from '../constants';
import React,{useRef,useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Display } from '../utils';

const VerificationScreen = ({navigation, route:{params:{phoneNumber}}}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  return (
    <View style={styles.container} >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
      <Seperator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer} >
        <Ionicons name='chevron-back-outline' size={30} color={Colors.DARK_FIVE} onPress={() => navigation.goBack()} />
        <Text style={styles.headerText} >Verification</Text>
      </View>
      <Text style={styles.title}>{phoneNumber}</Text>
      <Text style={styles.content}>Enter the OTP code from the phone.</Text>
      <Seperator height={Display.setHeight(2)} />
      <View style={{flexDirection:"row",marginHorizontal:37}}>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
          <TextInput placeholderTextColor={Colors.DEFAULT_BLUE}
                      selectionColor={Colors.DEFAULT_BLUE}
                      style={styles.inputText} 
                      keyboardType="numeric" 
                      maxLength={1} 
                      ref={firstInput}
                      onChangeText={text => {setOtp({...otp, 1: text});text && secondInput.current.focus();}}/>
          </View>
        </View>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
          <TextInput placeholderTextColor={Colors.DEFAULT_BLUE}
                      selectionColor={Colors.DEFAULT_BLUE}
                      style={styles.inputText} 
                      keyboardType="numeric" 
                      maxLength={1}
                      ref={secondInput}
                      onChangeText={text => {setOtp({...otp, 2: text});text ? thirdInput.current.focus() : firstInput.current.focus();}} />
          </View>
        </View>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
              <TextInput placeholderTextColor={Colors.DEFAULT_BLUE}
                      selectionColor={Colors.DEFAULT_BLUE}
                      style={styles.inputText} 
                      keyboardType="numeric" 
                      maxLength={1}
                      ref={thirdInput}
                      onChangeText={text => {setOtp({...otp, 3: text});text ? fourthInput.current.focus() : secondInput.current.focus();}} />
          </View>
        </View>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
          <TextInput placeholderTextColor={Colors.DEFAULT_BLUE}
                      selectionColor={Colors.DEFAULT_BLUE}
                      style={styles.inputText} 
                      keyboardType="numeric" 
                      maxLength={1}
                      ref={fourthInput}
                      onChangeText={text => {setOtp({...otp, 4: text});!text && thirdInput.current.focus();}} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} 
                        onPress={() => navigation.navigate("SignInScreen",console.log(otp))} >
        <Text style={styles.SignInButtonText} >Verify</Text>
      </TouchableOpacity>
      <Seperator height={Display.setHeight(60)} />
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
      width:Display.setWidth(13),
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
export default VerificationScreen;