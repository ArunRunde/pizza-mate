import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, deleteItem, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Cartscreen() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const deleteItem = async (index) => {
        try {
            // Create a copy of the cartItems array
            const updatedCart = [...cartItems];

            // Remove the item from the cart at the given index
            updatedCart.splice(index, 1);

            // Update the cart state with the new array
            setCartItems(updatedCart);

            // Save the updated cart to AsyncStorage
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));

            // Optionally show a success message or handle further logic
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };


    useEffect(() => {
        const loadCart = async () => {
            try {
                const existingCart = await AsyncStorage.getItem('cart');
                if (existingCart !== null) {
                    setCartItems(JSON.parse(existingCart));
                }
            } catch (error) {
                console.error('Error loading cart:', error);
            }
        };

        loadCart();
    }, []);

    return (
        <ScrollView style={{ padding: 20 }}>
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}> My shopping 🛒 Cart</Text>

            {cartItems.length === 10 ? (
                <Text style={{ marginTop: 10 }}>Your cart is empty.</Text>
            ) : (

                cartItems.map((item, index) => (
                    <View key={index} style={{ marginVertical: 10 }}>
                        <View style={styles.image}>
                            <Image
                                source={item.source} style={styles.image}
                            />
                            <View style={styles.name1}>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View style={styles.price1}>
                                <Text style={styles.price}>Price: {item.price}</Text>
                            </View>
                            <View style={styles.quantity1}>
                                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => deleteItem(deleteItem)} style={styles.style}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
                                <Icon name="delete-outline" size={20} color="white" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            )}
</View>
         </ScrollView> 
    );
}
const styles = StyleSheet.create({
    imageContainer: {
    },
    style: {
        marginTop: '-13%',
        backgroundColor: 'red',
        padding: 4,
        // gap:8,
        borderRadius: 10,
        width: 100,
        marginLeft: '70%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        //    marginBottom: 10,
        padding: 8,
        marginTop: '5%',
        flexDirection: 'row',




    },

    icon: {
        marginTop: -18
    },
    name: {
        marginTop: 12,
        marginLeft: 13,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent:'center',
        textAlign: 'center'



    },
    price: {
        marginTop: 45,
        marginLeft: -50,
        // alignItems: 'center',
        //  justifyContent:'center',
        textAlign: 'center'
    },
    quantity: {
        marginTop: 64,
        marginLeft: -85,
        // alignItems: 'center',
        textAlign: 'center',
        //  justifyContent:'center'
    },
    quantity1: {
        textAlign: 'center',
    },
    price1: {
        textAlign: 'center',
    },
    name1: {
        textAlign: 'center',
    }
})
