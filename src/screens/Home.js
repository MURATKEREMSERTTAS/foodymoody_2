import React, { useEffect,useState} from 'react'
import { View, Text,SafeAreaView, ScrollView,ActivityIndicator } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTab from '../components/home/HeaderTab'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

const YELP_API_KEY="jn2mr1zXCAfpsWFiim2PRvXF8fusuycT7JPGBwyQ9Qcx3EtZIvBnf3QYT_GJOKyxfMOdFbtnBH_Nuqinq_oDhFl3QH7xhNP4xTyIQpHWGs9GKld19SSXfHAwKwKqYXYx";

export default function Home({navigation}) {
    const [restaurantData,setRestaurantData] = useState(localRestaurants);
    const [cityy,setCity] = useState("San Francisco ");
    const [loaded,setLoaded]=useState(true)
    /*const [activeTab,setActiveTab] = useState("Delivery");*/
    async function getRestaurantFromYelp(cityy){
        const yelpUrl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${cityy}`;
        const apiOptions = {
            method:"GET",
            headers:{
                Authorization:`Bearer ${YELP_API_KEY}`,
            },
        }
        setLoaded(false);
        try{
        const response = await fetch(yelpUrl,apiOptions);
        if(response.status==200){
            const data = await response.json();
            setRestaurantData(data.businesses);
            console.log(data);
            
        }
        else{
            setRestaurantData(null);
        }
        setLoaded(true);}
        catch(error){console.log(error)}
    }

useEffect(()=>{getRestaurantFromYelp(cityy)},[cityy]);
/*        return fetch(yelpUrl,apiOptions)
        .then((response)=>response.json())
            .then((data)=>{
                setRestaurantData(data.businesses.filter((business)=>
                business.transactions.includes(activeTab.toLowerCase())
            ))});
    };
*/
if(!loaded){
    return(
        <View style={{flex:1,backgroundColor:"#eee",marginTop:"100%"}} >
            <ActivityIndicator color="gray" size={36}/>
        </View>
    )
}
else if(restaurantData===null){
    return(
        <View>
        </View>
    )
}
else{
    return(
        <SafeAreaView style={{marginTop:"10%",backgroundColor:"#eee",flex:1}} >
            <View style={{backgroundColor:"white",padding:15}} >
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}};
/*<HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />*/