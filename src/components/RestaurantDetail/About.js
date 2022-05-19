import React from 'react'
import { View, Text, Image,SafeAreaView } from 'react-native'

/*const yelpRestauranInfo={
    name: "Test restaurant",
    imagee:"https://www.yelp.com/img/logos/Yelp-trademark-RGB-R.png",
    price:"$",
    reviews:"2000",
    rating:"3.2",
    categories:[{title: "American"}, {title: "Mexican"}],
};
const image = "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
const title="Edirne Restaurant"
const description = "Thai - Comfort Food -  -  - 4   (1234+)"*/
export default function About(probs) {
const name=probs.route.params.restaurant;
const imagee=probs.route.params.image;
const price=probs.route.params.price;
const reviews=probs.route.params.reviews;
const rating=probs.route.params.rating;
const categories=probs.route.params.categories;
const formattedCategories = categories.map((cat)=>cat.title).join(", ");
const description = `${formattedCategories} | ${price? ""+price:""} | ${rating} stars | ${reviews}+`;
    return (
        <SafeAreaView>
            <ReataurantImage image={imagee} />
            <RestaurantTitle title={name}/>
            <RestaurantDescription description={description}/>
        </SafeAreaView>
    );
}

const ReataurantImage =(props)=>(
    <Image source={{uri:props.image}} style={{width:"100%",height:180}}  />
);

const RestaurantTitle=(props)=>(
    <Text style={{
        fontSize:25,
        fontWeight:"600",
        marginTop:10,
        marginHorizontal:15,
    }} >{props.title}
    </Text>
);

const RestaurantDescription=(props)=>(
    <Text style={{
        fontSize:15,
        fontWeight:"400",
        marginTop:10,
        marginHorizontal:15,}} >
        {props.description}
    </Text>
);
