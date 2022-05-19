import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function SearchBar({cityHandler}) {
    return (
        <View style={{marginTop:15,flexDirection:"row"}}>
            <GooglePlacesAutocomplete
                query={{key:"AIzaSyDWTnYIV65x2fQ_htsqWqKh4UwIgkNmAgs"}}
                onPress={(data,details=null)=>{
                    console.log(data.description);
                    const cityy = data.description.split(',')[0];
                    cityHandler(cityy);
                }}
                placeholder="search"
                styles={{
                    textInput:{
                        backgroundColor:"#eee",
                        borderRadius:20,
                        fontWeight:"700",
                        marginTop:7,
                    },
                    textInputContainer:{
                        backgroundColor:"#eee",
                        borderRadius:50,
                        flexDirection:"row",
                        alignItems:"center",
                        marginRight:10,
                    }
                }}
            />
        </View>
    );
}
