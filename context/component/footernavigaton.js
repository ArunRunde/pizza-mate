import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const FooterNavigation = () => {
 const navigation = useNavigation();
  const handlecart=()=>{
    navigation.navigate('Cart')
  }
  const handleprofile =()=>{
    navigation.navigate('profileupload')
  }
  
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="pizza-outline" size={24} color="black" />
        <Text style={styles.label}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={handlecart}>
        <Ionicons name="cart-outline" size={24} color="black" />
        <Text style={styles.label}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={handleprofile}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({
  footer: {
    // position: 'absolute', // Stick to bottom
    top:9,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    zIndex: 999, // Ensure it stays above other content
  },
  navItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
