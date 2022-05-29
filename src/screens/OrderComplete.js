import { StatusBar, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { Images,Colors,Fonts } from '../constants';
import { useSelector } from 'react-redux';
import { Seperator } from '../components';
import { Display } from '../utils';





const OrderComplete = ({navigation}) => {
      const {items} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items.map((item) => Number(item.price.replace("$",""))).reduce((prev, curr) => prev + curr,0);
    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });
      return (
        <View style={styles.container} >
          <StatusBar backgroundColor={Colors.DEFAULT_WHITE} barStyle="light-content" translucent />
          <LottieView source={Images.loader} autoPlay renderMode='AUTOMATIC' />
          <Text style={styles.icontext} >Order Complete</Text>
          <Text style={styles.subText} >The amount of your order is ${totalUSD}</Text>
          <Text style={styles.subText} >Once ready, the courier will deliver </Text>
          <Text style={styles.subText} >your food to your doors step...</Text>
          <Seperator height={Display.setHeight(30)}/>
          <TouchableOpacity style={styles.signInButton} 
                        onPress={() => navigation.navigate("Home")} >
        <Text style={styles.SignInButtonText} >Done</Text>
      </TouchableOpacity>                
        </View>
      )
}

export default OrderComplete

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    icontext: {
      color: Colors.DEFAULT_BLUE1,
      fontSize: 40,
      fontFamily: Fonts.POPPINS_LIGHT,
    },
    subText: {
    fontSize:20,
    color:Colors.DEFAULT_BLUE,
    fontFamily: Fonts.POPPINS_LIGHT,
},
signInButton:{
    backgroundColor:Colors.DEFAULT_BLUE1,
    borderRadius:40,
    paddingVertical:20,
    paddingHorizontal:20,
    width:Display.setWidth(70),
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