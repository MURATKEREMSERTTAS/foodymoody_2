import { StyleSheet, Text, View,StatusBar,FlatList,TouchableOpacity } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { Colors,Fonts,General } from '../constants';
import { WelcomeCard,Seperator } from '../components';
import { Display } from '../utils';

const activeOpacity = isActive => {
  return isActive
   ? styles.paginationitem 
   : {...styles.paginationitem,backgroundColor:Colors.DEFAULT_GREY};
}

const Pagination = ({index}) => {
  return (
    <View style={styles.pagination} >
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((i)=>
      i===index ? 
      (
        <View style={activeOpacity(true)} key={i} />
      ):(
        <View style={activeOpacity(false)} key ={i} />
      ),
        )}
    </View>
  )
}

const WelcomeScreen = ({navigation}) => {
  const [listindex,setIndex] = useState(0);
  const welcomelist = useRef();
  const pagination = useRef(({changed}) => 
    {setIndex(changed[0].index);
  });
  const configRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const scrolllist = () => 
    {welcomelist.current.scrollToIndex({
      index:listindex < 2 ? listindex + 1 : listindex,
      });
  };
  return (
    <View style={styles.container} >
        <StatusBar backgroundColor={Colors.DEFAULT_WHITE} barStyle="dark-content" translucent />
        <Seperator height={StatusBar.currentHeight} />
        <Seperator height={Display.setHeight(8)} />
        <View style={styles.listcontainer} >
            <FlatList
            ref={welcomelist} 
            data={General.WELCOME_CONTENTS}
            keyExtractor={item=>item.title}
            horizontal
            pagingEnabled
            overScrollMode='never'
            viewabilityConfig={configRef.current}
            onViewableItemsChanged={pagination.current}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <WelcomeCard {...item} />}
            /> 
        </View>
        <Seperator height={Display.setHeight(8)} />
        <Pagination index={listindex}/>
        <Seperator height={Display.setHeight(8)} />
        {listindex === 2 ? (
          <TouchableOpacity style={styles.getstartedbutton} onPress={navigation.navigate("Home")} >
            <Text style={styles.getstartedtext} >Get Started</Text>
          </TouchableOpacity>
          ):(
        <View style={styles.buttoncontainer} >
        <TouchableOpacity style={{marginLeft:10}} activeOpacity={0.8} onPress={()=>welcomelist.current.scrollToEnd()}  >
          <Text style={styles.buttonText} >SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttons}
          activeOpacity={0.8}
          onPress={()=>scrolllist()}  >
          <Text style={styles.buttonText} >NEXT</Text>
        </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    listcontainer: {
      height: Display.setHeight(68),
    },
    pagination:{
      flexDirection:'row',
    },
    paginationitem:{
      height:8,
      width:15,
      backgroundColor:Colors.DEFAULT_BLUE1,
      borderRadius:32,
      marginHorizontal:5,
    },
    buttoncontainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:Display.setWidth(90),
      alignItems:'center',
    },
    buttons:{
      paddingVertical:20,
      paddingHorizontal:15, 
    },
    buttonText:{
      fontSize:17,
      fontFamily:Fonts.POPPINS_BOLD,
      color:Colors.DEFAULT_GREY,
      lineHeight:17*1.5,
    },
    getstartedbutton:{
      backgroundColor:Colors.DEFAULT_BLUE1,
      paddingVertical:5,
      paddingHorizontal:40,
      borderRadius:8,
      justifyContent:"center",
      alignItems:"center",
      elevation:2
    },
    getstartedtext:{
      fontSize:20,
      color:Colors.DEFAULT_WHITE,
      lineHeight:20*1.4,
      fontFamily:Fonts.POPPINS_MEDIUM
    },
})

export default WelcomeScreen