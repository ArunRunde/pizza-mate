import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import PizzaFlatList from './product';


export default function Subcategory() {
  const subcategory = [
    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹150', categoryid: '1' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹180', categoryid: '1' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250', categoryid: '1' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹100', categoryid: '1' },
    { id: '5', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140', categoryid: '3' },
    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250', categoryid: '6' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹170', categoryid: '7' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140', categoryid: '8' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹120', categoryid: '9' },
    
    
    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹240', categoryid: '3' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹150', categoryid: '3' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹150', categoryid: '3' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹260', categoryid: '3' },
     
    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140', categoryid: '4' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250', categoryid: '4' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹160', categoryid: '4' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹260', categoryid: '4' },

    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140', categoryid: '2' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250', categoryid: '2' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹160', categoryid: '2' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹260', categoryid: '2' },

    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹140', categoryid: '5' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250', categoryid: '5' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹160', categoryid: '5' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹260', categoryid: '5' },

    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹120', categoryid: '6' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹150', categoryid: '6' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹260', categoryid: '6' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹160', categoryid: '6' },

    
    { id: '1', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹150', categoryid: '7' },
    { id: '2', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹250', categoryid: '7' },
    { id: '3', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹160', categoryid: '7' },
    { id: '4', source: require('../../assets/trending1.jpg'), title: 'peri', price: ' ₹130', categoryid: '7' },
    

  ];
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const similarItems = subcategory.filter(
    (pizza) => pizza.categoryid === item.id
  );
  console.log(similarItems, 'similarItems');
  console.log(item, 'item');
  return (
    <View>

      <FlatList
        data={similarItems}
        // horizontal={tr
        renderItem={({ item }) => (
        
            <PizzaFlatList item={item}navigation={navigation} />
         
        )}
        numColumns={2}
              key={2}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: -1,
    padding: 12,
    // flexDirection:'column',


  }
})