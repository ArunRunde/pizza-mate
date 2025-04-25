import { StyleSheet } from 'react-native';
import { View, Text, Image, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, } from 'react';
import Categories from './Categories';
import ImageCarousel from './slider';
import PizzaFlatList from './product';
import FooterNavigation from './footernavigaton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



export default function Home() {
  const pizzaImages = [
    { id: '1', source: require('../../assets/trending1.jpg'), name: 'peri', price: ' ₹150',category: 'italian',categoryid:'1' },
    { id: '2', source: require('../../assets/trending5.jpg'), name: 'Margherita', price: ' ₹180',category: 'rolls',categoryid:'2'},
    { id: '3', source: require('../../assets/trending3.jpg'), name: 'Pepperoni', price: ' ₹100' ,category: 'spicy',categoryid:'3'},
    { id: '4', source: require('../../assets/trending4.jpg'), name: 'Veggie', price: ' ₹120',category: 'italian' ,categoryid:'4'},
    { id: '5', source: require('../../assets/trending5.jpg'), name: 'romalla', price: ' ₹150',category: 'rolls' ,categoryid:'5'},
    { id: '6', source: require('../../assets/trending1.jpg'), name: 'BBQ Chicken', price: ' ₹130',category: 'spicy',categoryid:'6' },
    { id: '7', source: require('../../assets/trending4.jpg'), name: 'italian', price: ' ₹199',category: 'italian' ,categoryid:'7'},
    { id: '8', source: require('../../assets/trending3.jpg'), name: 'Barbeq', price: ' ₹110',category: 'rolls',categoryid:'8' },
    { id: '9', source: require('../../assets/trending4.jpg'), name: 'Hawaiian', price: ' ₹99',category: 'spicy',categoryid:'9'},
    { id: '10', source: require('../../assets/trending5.jpg'), name: 'BBQ Chicken', price: ' ₹150',category: 'italian',categoryid:'10' },
  ];

  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([

    { id: '1', source: require('../../assets/trending1.jpg'), name: 'peri', price: ' ₹150' },
    { id: '2', source: require('../../assets/trending5.jpg'), name: 'Margherita', price: ' ₹180' },
    { id: '3', source: require('../../assets/trending3.jpg'), name: 'Pepperoni', price: ' ₹100' },
    { id: '4', source: require('../../assets/trending4.jpg'), name: 'Veggie', price: ' ₹120' },
    { id: '5', source: require('../../assets/trending5.jpg'), name: 'romalla', price: ' ₹150' },
    { id: '1', source: require('../../assets/trending1.jpg'), name: 'BBQ Chicken', price: ' ₹130' },
    { id: '2', source: require('../../assets/trending4.jpg'), name: 'italian', price: ' ₹199' },
    { id: '3', source: require('../../assets/trending3.jpg'), name: 'Barbeq', price: ' ₹110' },
    { id: '4', source: require('../../assets/trending4.jpg'), name: 'Hawaiian', price: ' ₹99' },
    { id: '5', source: require('../../assets/trending5.jpg'), name: 'BBQ Chicken', price: ' ₹150' }
  ]);


  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const isSearching = searchText.trim().length > 0;

  const navigation = useNavigation();




  return (
    <SafeAreaView>

      <ScrollView>
        <View>
          <Text style={styles.welcome}>
            welcome to
          </Text>
          <Text style={styles.quick}> Quickbite</Text>
        </View>
        <View>
          <TextInput
            style={styles.searchBar}
            placeholder="Search your pizza 🍕"
            value={searchText}
            onChangeText={text => setSearchText(text)} />

          {isSearching ? (
            filteredItems.length > 0 ? (
              <FlatList
                data={filteredItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <PizzaFlatList item={item} navigation={navigation}
                  />

                )}
                numColumns={2}
                key={2}

              />

            ) : (
              <Text style={styles.noResultText}>Pizza not found 🍕😢</Text>
            )
          ) : null}


        </View>


 
         
          <View>
            <Categories  pizzaImages={pizzaImages}/>
          </View> 
          

          <View>
            < ImageCarousel />
          </View>

          {/* <View>
           < ProfileImageUploader/>
          </View> */}
          <View>
            <FlatList
              data={pizzaImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <PizzaFlatList item={item} navigation={navigation}
                />
              )}

              numColumns={2}
              key={2}
            />
          </View>
          <View>
            <View>
            {/* <View>
            <FlatList
              data={pizzaImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                // <PizzaFlatList item={item} navigation={navigation}
                // navigation.navigate('Subcategory', { item, pizzadata: pizzaImages }
<TouchableOpacity onPress={() => navigation.navigate('Subcategory', { item, pizzadata: pizzaImages })}>
        <Image source={item.source} style={{ width: 150, height: 150 }} />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </TouchableOpacity>

                // />
              )}

              numColumns={2}
              key={2}
            />
          </View> */}


            </View>
            <View>
              <FooterNavigation />
            </View>
          </View>
      </ScrollView>



    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  background: {
    paddingLeft: 18,
    marginTop: 0
  },
  welcome: {
    fontSize: 15,
    marginLeft: 12,
    marginTop: -6

  },

  quick: {
    fontSize: 32,
    fontWeight: '900',
    marginLeft: 12

  },
  searchBar: {
    marginTop: 26,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
    height: 38,
    // paddingEnd: 15,
    width: '90%',
    borderColor: 'orange',
    marginLeft: 12
  }
});