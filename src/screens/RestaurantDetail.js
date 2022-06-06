import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import About from '../components/RestaurantDetail/About'
import MenuItem from '../components/RestaurantDetail/MenuItem'
import ViewCart from '../components/RestaurantDetail/ViewCart'


export default function RestaurantDetail({route,navigation}) {
    return (
        <View style={{marginTop:45}} >
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:15}} />
            <MenuItem restaurantName={route.params.restaurant} />
            <ViewCart navigation={navigation} />
        </View>
    )
}
