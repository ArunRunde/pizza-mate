import React from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet ,Text,TouchableOpacity} from 'react-native';


// Calculate dimensions for 2-column layout
const screenWidth = Dimensions.get('window').width;
const itemMargin = 10;
const itemSize = (screenWidth - itemMargin * 3) / 2;

const PizzaFlatList = ({item,navigation}) => {
  return (
    // <ScrollView>
    
    <View>
  <View>
    <Text style={styles.tending}>Trending Product</Text>
  </View>

  <View style={styles.imageContainer}>
    <View style={styles.borderWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('itemdetail',{ item })}>
        <Image source={item?.source} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{item?.name}</Text>
      <Text style={styles.price}>{item?.price}</Text>
    </View>
  </View>
</View>

  
    // </ScrollView>
  )
}

  const styles = StyleSheet.create({
    imageContainer: {
      width: itemSize,
      margin: itemMargin / 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:22,
      paddingRight:20,
      marginTop:-22,
      marginLeft:14
      
    },
    borderWrapper: {
      borderWidth: 2,
      borderColor: 'orange',
      borderRadius: 16,
      padding: 10, 
      
    //   backgroundColor: 'Beige',

    },
    image: {
      width: itemSize - 40,
      height: itemSize - 60,
      resizeMode: 'cover',
      borderRadius: 40,
      paddingBottom:50,
      paddingVertical:120,
      borderColor:'red',
   
     
    },
 
    text: {
      marginTop: 8,
      fontSize: 15,
      marginLeft:37,
      fontWeight: '800',
      marginTop:5
    },
    price:{
        color:'red',
        fontWeight: '800',
      marginTop:5,
      marginLeft:37,
    },
    tending:{
      fontWeight:'800',
      padding:3,
      fontSize:15
    }
  });
  


export default PizzaFlatList;
