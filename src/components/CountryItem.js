import { StyleSheet, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../constants'
import { Display } from '../utils'


const CountryItem = ({name,dial_code,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress({name,dial_code})} >
        <Text style={styles.inputText2}>{dial_code}</Text>
        <Text style={styles.inputText2}>{name}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
    },
    inputText2:{
        fontSize:20,
        paddingLeft:5,
        height:Display.setHeight(5),
        color:Colors.DEFAULT_BLUE,
        flex:1,
      },
})

export default CountryItem