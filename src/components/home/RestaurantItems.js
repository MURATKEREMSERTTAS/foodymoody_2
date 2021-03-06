import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Colors } from '../../constants';

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function RestaurantItems({navigation,...props}) {
    return (<>{props.restaurantData.map((restaurant,index)=>(
        <TouchableOpacity 
                activeOpacity={1}
                key={index}
                style={{marginBottom:30}}  
                onPress={()=>navigation.navigate("RestaurantDetail",{
                    restaurant:restaurant.name,
                    image:restaurant.image_url,
                    price:restaurant.price,
                    reviews:restaurant.reviews,
                    rating:restaurant.rating,
                    categories:restaurant.categories})}>
                    <View 
                        key={index}
                        style={{marginTop:10,padding:15,backgroundColor:Colors.DEFAULT_WHITE}}>
                        <ReataurantImage image_url={restaurant.image_url} />
                        <ReastaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>  
            </TouchableOpacity>))}</>
    )
}

const ReataurantImage = (props)=>(
    <>
        <Image 
            source={{uri:props.image_url !==""?  props.image_url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
            style={{width:'100%',height:180}}
            
        />
        <TouchableOpacity style={{position:"absolute",right:20,top:20}} >
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const ReastaurantInfo = (props)=>(
    <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginTop:10
        }} >
        <View>
            <Text style={{
                fontSize:15,
                fontWeight:"bold",
                color:Colors.DEFAULT_BLUE}} 
            >{props.name}</Text>  
            <Text style={{
                fontSize:13,
                color:Colors.DEFAULT_BLUE}} 
            >30-45 - min</Text>
        </View>
        <View style={{
            backgroundColor:Colors.DEFAULT_WHITE,
            height:30,
            width:30,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:15,}} >
            <Text style={{color:Colors.DEFAULT_BLUE1}} >{props.rating}???</Text>
        </View>
    </View>
);