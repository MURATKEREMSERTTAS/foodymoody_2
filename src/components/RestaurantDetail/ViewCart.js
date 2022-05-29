import { View, Text, TouchableOpacity, StyleSheet,Modal } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'; 
import AuthenticationService from '../../services/AuthenticationService';

export default function ViewCart({navigation}) {
    const {items,restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items.map((item) => Number(item.price.replace("$",""))).reduce((prev, curr) => prev + curr,0);
    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });
    const [modalVisible, setModalVisible] = useState(false);
    const orderList = ()=>{
        AuthenticationService.addOrder({items,total,restaurantName})
        .then(setModalVisible(false),navigation.navigate('OrderCompleteScreen'))
    }
    const checkoutModelContent = () => { 
    return (
    <>
        <View style={styles.modalContainer} >
            <View style={styles.modalCheckOutContainer}>
                <Text style={styles.restaurantName} >{restaurantName} </Text>
                {items.map((item,index) => (
                    <OrderItem key={index} item={item} />
                ))}
                <View style={styles.subTotalContainer}>
                    <Text style={styles.subTotalText}>Subtotal</Text>
                    <Text>${totalUSD}</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"center"}} >
                    <TouchableOpacity style={styles.subTotalCheckout} onPress={()=>orderList()} >
                        <Text style={{color:"white"}} >Checkout</Text>
                        <Text style={{position:"absolute",right:20,color:"white",fontsize:15,top:13}} >${total? totalUSD : ""}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
)}
    console.log(total);
    return (
    <>
        <Modal animationType='slide'  visible={modalVisible} onRequestClose={()=>setModalVisible(false)}>
            {checkoutModelContent()}
        </Modal>
        {total ? ( 
        <View style={styles.container2}>
        <View style={styles.container3}>
                <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(true)} >
                    <Text style={{color:"white",fontSize:18,marginRight:100}} >view cart</Text>
                    <Text style={{color:"white",fontSize:18}} >${totalUSD}</Text>
                </TouchableOpacity>
            </View>
        </View>
        ):(<></>)
        }
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:19,
        backgroundColor:"black",
        backfaceVisibility:"hidden",
        padding:15,
        borderRadius:35,
        width:300,
        position:"relative",
        flexDirection:"row",
        justifyContent:"flex-end",
    
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        position:"absolute",
        bottom:5,
        zIndex:999,
    },
    container3: { 
        flexDirection:"row",
        justifyContent:"center",
        width:"100%"
    },
    modalContainer:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckOutContainer:{
        backgroundColor:"white",
        padding:16,
        borderWidth:1,
        height:500,
    },
    restaurantName:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"600",
        marginBottom:10,
        color:"black"
    },
    subTotalContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        marginTop:15,
        paddingLeft:23,
        paddingRight:20,

    },
    subTotalText:{
        textAlign:"left",
        fontWeight:"600",
        fontSize:15,
        marginBottom:10,
    },
    subTotalCheckout:{
        marginTop:20,
        backgroundColor:"black",
        alignItems:"center",
        padding:13,
        borderRadius:30,
        width:300,
        position:"relative"
    }
})