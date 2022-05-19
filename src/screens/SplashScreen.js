import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import React,{useEffect} from 'react'
import { Colors, Images,Fonts } from '../constants/index';
import { Display } from '../utils';


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 2000);
  },[]);
  return (
    <View style={styles.container} >
        <StatusBar backgroundColor={Colors.DEFAULT_BLUE1} barStyle="light-content" translucent />
        <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.icontext} >FoodyMoody</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_BLUE1,
    },
    image: {
      height: Display.setHeight(25),
      width: Display.setWidth(60),
    },
    icontext: {
      color: Colors.DEFAULT_BLUE,
      fontSize: 40,
      fontFamily: Fonts.POPPINS_LIGHT,
    }
});

export default SplashScreen;