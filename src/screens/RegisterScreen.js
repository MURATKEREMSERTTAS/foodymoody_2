import { StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity, Image,FlatList } from 'react-native'
import {CountryItem, Seperator} from '../components';
import {Colors,Fonts,Images,CountryCodes} from '../constants';
import React,{useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Display } from '../utils';

const getcountryDownStyle = y => ({...styles.countryDownList,top: y + 60})
const RegisterScreen = ({navigation}) => {
  const [selectedCountry,setSelectedCountry] = useState(CountryCodes.find(country => country.name === 'Turkey'));
  const [inputsContainer,setInputsContainer] = useState(0);
  const [dropDown,setDropDown] = useState(false);
  const [dropDownLayout,setDropDownLayout] = useState({});

  const closeDropDown = (pageX,pageY) => {
    if(dropDown){
      if(pageX < dropDownLayout.x || 
        pageX > dropDownLayout.x + dropDownLayout.width || 
        pageY < dropDownLayout.y || 
        pageY > dropDownLayout.y + dropDownLayout.height)
      {
        setDropDown(false);
      }
    }
  }
  return (
    <View style={styles.container} onStartShouldSetResponder ={({nativeEvent:{pageX,pageY}})=>closeDropDown(pageX,pageY)} >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
      <Seperator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer} >
        <Ionicons name='chevron-back-outline' 
        color={Colors.DARK_FIVE} size={30} 
        onPress={() => navigation.goBack()} />
        <Text style={styles.headerText} >Register Phone</Text>
      </View>
      <Text style={styles.title}>Register Phone</Text>
      <Text style={styles.content}>Enter your registered phone number to login</Text>
      <View style={styles.inputContainer} >
        <TouchableOpacity style={styles.countryList} onPress={()=>setDropDown(!dropDown)}
        onLayout={({nativeEvent: {layout: {y},},}) => setInputsContainer(y)}>
          <Text style={styles.CountryText} >{selectedCountry.dial_code}</Text>
          <MaterialIcons name='keyboard-arrow-down' size={20} color={Colors.DEFAULT_BLUE} />
        </TouchableOpacity>
        <View style={styles.inputSubContainer}>
          <MaterialIcons name='phone-iphone' size={22} color={Colors.INACTIVE_GREY} style={{marginRight:10}}/>
          <TextInput placeholder='Phone Number'
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    keyboardType='number-pad'
                    onFocus={()=>setDropDown(false)}
                    style={styles.inputText} />
        </View>
      </View>
      {dropDown && (
      <View style={getcountryDownStyle(inputsContainer)} onLayout={({nativeEvent:{layout:{x,y,height,width}}})=>setDropDownLayout({x,y,height,width})} >
      <FlatList 
        data={CountryCodes}
        keyExtractor={item => item.code}
        renderItem={({item}) => <CountryItem {...item} onPress={(country) => {setDropDown(false);setSelectedCountry(country)}} />}/>
     </View>)}
     <TouchableOpacity style={styles.signInButton} 
                        onPress={() => navigation.navigate("VerificationScreen")} >
        <Text style={styles.SignInButtonText} >Continue</Text>
      </TouchableOpacity>
      <Seperator height={Display.setHeight(51)} />
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
      marginHorizontal:20,
      marginVertical:50,
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
    },
    inputSubContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"center",
      flex:1,
      backgroundColor:Colors.DARK_ONE,
      borderRadius:8,
      paddingHorizontal:10,
      borderColor:Colors.DEFAULT_BLUE1,
      borderWidth:0.5,
    },
    inputText:{
      fontSize:20,
      padding:0,
      height:Display.setHeight(5),
      color:Colors.DEFAULT_BLUE,
      flex:1,
    },
    countryList:{
      backgroundColor:Colors.DARK_ONE,
      borderColor:Colors.DEFAULT_BLUE1,
      borderRadius:8,
      borderWidth:0.5,
      marginRight:10,
      width:Display.setWidth(15),
      height:Display.setHeight(5),
      justifyContent:'space-evenly',
      alignItems:'center',
      flexDirection:'row',
      paddingLeft:4,
    },
    CountryText:{
      fontSize:14,
      lineHeight:14*1.5,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:Colors.DEFAULT_BLUE,
    },
    countryDownList:{
      backgroundColor:Colors.DARK_ONE,
      position:'absolute',
      width:Display.setWidth(80),
      height:Display.setHeight(50),
      marginLeft:20,
      borderColor:Colors.DEFAULT_BLUE1,
      borderWidth:0.5,
      borderRadius:8,
      zIndex:3,
      marginTop:310,
    },
    inputText2:{
      fontSize:20,
      paddingLeft:5,
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
    SignInButtonText:{
      fontSize:20,
      lineHeight:20*1.5,
      fontFamily:Fonts.POPPINS_MEDIUM,
      color:Colors.DEFAULT_WHITE,
    },
})


export default RegisterScreen
