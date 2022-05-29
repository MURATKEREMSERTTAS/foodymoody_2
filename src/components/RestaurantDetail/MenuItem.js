import { View, Text,StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
  ];

export default function MenuItem(restaurantName) {
const dispatch = useDispatch();
const selectedItems = (items,checkboxValue) => {
    dispatch({type:"ADD_TO_CART",payload: {...items,restaurantName:restaurantName,checkboxValue:checkboxValue}})
}
const costItems = useSelector(state => state.cartReducer.selectedItems.items);
const foodInCart = (food,costItems) => Boolean(costItems.find(item => item.title === food.title));
return (
      <ScrollView showsVerticalScrollIndicator={false} >
        {foods.map((food, index) => (
            <View key={index} >
                <View style={styles.containerMenu} >
                    <BouncyCheckbox 
                        iconStyle={{borderColor:"lightgrey",borderWidth:1,borderRadius:5}}
                        fillColor="black"
                        onPress={(checkboxValue)=>selectedItems(food,checkboxValue)}
                        isChecked={foodInCart(food,costItems)}/>
                    <FoodInfo food={food} /> 
                    <FoodImage food={food} />
                </View>
                <Divider width={1.8} orientation="vertical" style={{marginHorizontal:20}} />
            </View>))}
          </ScrollView>)
}

const FoodInfo = (props) => {
    return (
        <View style={styles.containerInfo}>
            <Text style={styles.containerTitle} >{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
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
    },
    conteinerImage: {
        width:100,
        height:100,
        borderRadius:8
    }
})