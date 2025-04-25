import React, { useState } from "react";
import { View, Image, StyleSheet, Text, Button, Dimensions, TouchableOpacity,Alert} from 'react-native';
import FooterNavigation from "./footernavigaton";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Itemdetail() {
    const Productimage = [
        { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹150',categoryid:'1' },
        { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹180',categoryid:'2' },
        { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250',categoryid:'3' },
        { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹100',categoryid:'4' },
        { id: '5', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140',categoryid:'5' },
        { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250',categoryid:'6' },
        { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹170',categoryid:'7' },
        { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140',categoryid:'8' },
        { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹120',categoryid:'9' }
    
    
    
    ];
    
    const route = useRoute();
    const { item, pizzadata } = route.params;


    const [number, setnumber] = useState(0)
    const increase = () => {
        setnumber(number + 1)
    }
    const decrease = () => {
        setnumber(number - 1)
    }
    const navigation = useNavigation();
    
    // if (!item || pizzadata) {
    //     return (
    //       <View style={{ padding: 20 }}>
    //         <Text>Oops! Item or data is missing.</Text>
    //       </View>
    //     );
    //   }
    
    const handleAddToCart = async () => {


        try {
           
            const existingCart = await AsyncStorage.getItem('cart');
            let cart = [];
            if (existingCart !== null) {
              cart = JSON.parse(existingCart);
            }
        
            const newItem = { ...item, quantity: number || 1 };
        
            cart.push(newItem);
        
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
        
            Alert.alert('Success', 'Item added to cart!');
            navigation.navigate('Cart');
            
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to send cart');
        }
    };
    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <View>
                    <View style={styles.image1}  >
                        {/* <Image source={Productimage[0].source} style={styles.image} /> */}
                        <Image source={item?.source} style={styles.image} />

                    </View>
                    <View>
                        {/* <Text style={styles.text} >{item?.name}</Text>
                        <Text style={styles.text}>{item?.title}</Text>  */}

                    </View>
                    <View>
                        <Text style={styles.price} >{item?.price}</Text>

                    </View>
                    <View>
                        <Text style={styles.text}>{item?.name}</Text> 
                         
                    </View>
                    <View>
                    <Text style={styles.text1}>{item?.title}</Text> 
                    </View>
                   
                    <View>
                        <Text style={styles.category} > category:{item?.category}</Text>

                    </View>
                    {/* <Text>{item?.title}</Text> */}
                </View>
                <Text style={styles.para}>
                    A fiery twist for spice lovers! 🍕🔥
                    Loaded with juicy peri-peri chicken, melty mozzarella, crisp veggies, and a zesty peri-peri sauce on a perfectly baked crust. Every bite packs a punch of bold, tangy flavor!</Text>

                <View style={styles.Button}>
                    <TouchableOpacity style={styles.circleButton} onPress={increase}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>

                    <Text style={styles.increasetex}>{number}</Text>

                    <TouchableOpacity style={[styles.circleButton, styles.decrease]} onPress={decrease}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={handleAddToCart} style={styles.cart}  >
                        <Text > Add to cart</Text>
                        <Icon name="add-shopping-cart" size={20} />
                    </TouchableOpacity>

                {/* </View>
                <Text style={{ fontSize: 18, marginTop: 20 }}>Similar Items</Text>



                <View> */}
                    <FooterNavigation />
                </View>
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    imageContainer: {
    },
    Button: {
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: 'orange',
        borderWidth: 2,
        width: 130,
        paddingStart: 14,
        padding: 5,
        gap: 8,
        marginLeft: 17,
        marginTop: 10
    },
    para: {
        fontSize: 16,
        padding: 10,
        fontWeight: '101',
        marginTop: -20,
    },
    text: {

        color: 'orange',
        fontWeight: '900',
        fontSize: 30,
        marginLeft: 146,
        marginTop: -60,
    },
    text1: {

        color: 'orange',
        fontWeight: '900',
        fontSize: 30,
        marginLeft: 146,
        marginTop: -50,
    },
    price: {
        color: 'red',
        fontWeight: '900',
        fontSize: 24,
        // padding: 10,
        marginTop: 30

    },
    image: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 7,
        marginLeft: 10,
        marginTop: 50,
        borderWidth: 2,
        borderColor: 'orange',
        backgroundColor: 'beign',
        elevation: 6,
        shadowOffset: { width: 1, height:3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: '90%',
        height: 380,
    },
    image1:{
      

    },
    increasetex: {
        fontSize: 22
    },
    button1: {
        borderRadius: 36,
        color: 'orange',
        padding: 1,
    },
    circleButton: {
        width: 35,
        height: 35,
        borderRadius: 25,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    decrease: {
        backgroundColor: 'orange',
    },
    buttonText: {
        fontSize: 24,
        color: 'black',
    },
    cart: {
        fontSize: 14,
        color: 'orange',
        width: '33%',
        borderRadius: 15,
        backgroundColor: 'orange',
        marginLeft: '59%',
        padding: 14,
        marginTop: -49,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2
    },
    screen: {
        marginTop: -69
    },
    category:{
        color: 'red',
        fontWeight: '900',
        fontSize: 26,
        padding: 10,
        marginTop: -18
    }

})
