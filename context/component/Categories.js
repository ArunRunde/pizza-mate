import React,{useState} from 'react';
import { View, FlatList, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function Productcircle() {


  const navigation=useNavigation()
  const pizzadata = [
    {
      id: '1',
      title: 'peri',
      source: require('../../assets/barbeq.jpg'),
      category: 'spicy'
    },
    
    {
    
      id: '2',
      title: 'rolla',
      source: require('../../assets/barbeq.jpg'),
      category: 'rolls'
    },
    {
      id: '3',
      title: 'italian',
      source: require('../../assets/barbeq.jpg'), 
      category: 'italian'
    },
    {
      id: '4',
      title: 'barbeq',
      source: require('../../assets/barbeq.jpg'),
      category: 'spicy'
    },
    {
      id: '5',
      title: 'LaTavola',
      source: require('../../assets/barbeq.jpg'),
       category: 'rolls'
    },
    {
      id: '1',
      title: 'periza',
      source: require('../../assets/periza.jpg'),
      category: 'italian'
    },
    {
      id: '2',
      title: 'La tavola silky',
      source: require('../../assets/latavolasliky.jpg'),
       category: 'spicy'
    },
    {
      id: '3',
      title: 'rollachese',
      source: require('../../assets/rollachese.jpg'),
       category: 'rolls'
    },
    {
      id: '4',
      title: 'babeqspan',
      source: require('../../assets/babeqspan.jpg'),
      category: 'italian'
    },
  ];
  

 
 
  return (
    <View style={styles.container}>
      <FlatList
        data={pizzadata}
        keyExtractor={(item) => item?.id}
        horizontal={true}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Subcategory', { item })}>
               <Image source={item?.source} style={styles.image} />
             </TouchableOpacity>
       
          
        )} 
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:-1, 
    padding: 12, 
    // flexDirection:'column',
    
        
  },
  itemContainer: {
    borderRadius: 20,
    alignItems: 'center',
    padding:9,
    // position:'absolute'
  },
  image: {
    width: 60,
    height: 60,
    marginLeft:14,
    borderRadius: 80,
    // marginBottom: 3,
    // flexDirection:'row'
  },
  text:{
    marginLeft:22,
  }
});
