import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../constants';

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
                placeholder="Search"
                placeholderTextColor={Colors.DEFAULT_BLUE}
                selectionColor={Colors.DEFAULT_BLUE}
                styles={{
                    textInput:{
                        backgroundColor:Colors.DARK_ONE,
                        borderRadius:20,
                        fontWeight:"700",
                        marginTop:7,
                        
                    },
                    textInputContainer:{
                        backgroundColor:Colors.DARK_ONE,
                        borderRadius:50,
                        borderColor:Colors.DEFAULT_BLUE,
                        borderWidth:0.5,
                        flexDirection:"row",
                        alignItems:"center",
                        marginRight:10,
                    }
                }}
                renderLeftButton={()=>(
                    <View style={{marginLeft:10}}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
            />
        </View>
    );
}