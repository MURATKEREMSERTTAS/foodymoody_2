import { View, Text,StyleSheet,Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { Colors,Fonts } from '../constants'
import { Seperator } from '../components'
import { Display } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomTabs from '../components/home/BottomTabs'



export default function OrderScreen({navigation}) {
const costItems = useSelector(state => state.cartReducer.selectedItems.items);
const foods =costItems
return (
    <View style={styles.container}  >
    <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
    <Seperator height={StatusBar.currentHeight} />
    <View style={styles.headerContainer} >
        <Text style={styles.headerText} >Last Order</Text>
      </View>
      <Seperator height={Display.setHeight(2)} />
    <ScrollView showsVerticalScrollIndicator={false} >
    {foods.map((food, index) => (
        <View key={index} >
            <View style={styles.containerMenu} >
                <FoodInfo food={food} /> 
                <FoodImage food={food} />
            </View>
            <Divider width={1.8} orientation="vertical" style={{marginHorizontal:20}} />
        </View>))}
      </ScrollView>
      <BottomTabs navigation={navigation} />
</View>
)
}

const FoodInfo = (props) => {
    return (
        <View style={styles.containerInfo}>
            <Text style={styles.containerTitle} >{props.food.title}</Text>
            <Text style={{color:Colors.DEFAULT_BLUE1}} >{props.food.description}</Text>
            <Text style={{color:Colors.REMEMBER_FORGOT_TEXT}} >{props.food.price}</Text>
        </View>
        )
}

const FoodImage = (props) => {
    return(
        <View>
        <Image source={{uri:props.food.image}} style={styles.conteinerImage}  />
    </View>
    )
}

const styles = StyleSheet.create({
    containerMenu : {
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20
    },
    containerInfo: {
        width:240,
        justifyContent:"space-evenly"
    },
    containerTitle: {
        fontSize:20,
        fontWeight:"600",
        color:Colors.DEFAULT_BLUE
    },
    conteinerImage: {
        width:100,
        height:100,
        borderRadius:8
    },
    container:{
        flex:1,
        backgroundColor:Colors.DEFAULT_WHITE,
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
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
})
