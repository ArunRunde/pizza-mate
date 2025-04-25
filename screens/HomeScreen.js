import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
  ScrollView,
  SectionList,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Child1 from "../components/child1";
import { ThemeContext } from "../context/ThemeContext";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import BottomNavigator from "../components/BottomNavigator";
import Search from "../components/Search";
import App from "../App";

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [sortedProducts, setSortedProducts] = useState('asc');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('guest');
  const data = [
    'Apple',
    'Apply',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Pineapple'
  ];
  const products = [
    { id: 1, name: 'Product A', price: 30 },
    { id: 2, name: 'Product B', price: 10 },
    { id: 3, name: 'Product C', price: 50 },
    { id: 4, name: 'Product D', price: 20 },
  ];

  //const searchReasult = data.filter(item => item.toLowerCase().includes(query.toLowerCase));
  const searchResult = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  
  console.log(searchResult)


  const sortByPrice = (order) => {
    const sorted = [...products].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price; // Ascending order
      } else {
        return b.price - a.price; // Descending order
      }
    });
    setSortedProducts(sorted);
  };


  const handleSignup = async () =>  {
    // For demo purposes, we'll log the data (you can send this to an API or store in a database)
    console.log('User Info:', {  email, password });

    try {
      // Sending POST request to the API endpoint
      const response = await fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Send JSON data
        },
        body: JSON.stringify({ email, password }), // Convert userData to JSON format
      });

      // Check if the response is successful
      if (response.ok) {
       
        console.log('Signup successful:', data);
        Alert.alert('Success', 'Signup successful!'); // Show success alert
        setUsername('');
        setEmail('');
        setPassword('');

      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        Alert.alert('Error', errorData.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Request failed:', error);
      Alert.alert('Error', 'Unable to reach the server. Please try again.');
    }

    // Clear inputs after signup (optional)
    setEmail('');
    setPassword('');

    // Show a success message (this can be replaced with navigation or further logic)
    alert('Signup successful!');
  };
  
  return (


    <View style={styles.container}>

      <Search  setQuery={setQuery} />
      <Button title="Sort by Price" onPress={() => sortByPrice('asc')} />
      <Button title="Sort by Price" onPress={() => sortByPrice('desc')} />
{searchResult.length>0
  ?
  <FlatList
        data={searchResult}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      :
      <Text>No results found</Text>
}
{isLoggedIn ? (
        <>
          <Text>Welcome back, User!</Text>
          <Button title="Log out" onPress={() => setIsLoggedIn(false)} />
        </>
      ) : (
        <>
          <Text>Please log in</Text>
          <Button title="Log in" onPress={() => setIsLoggedIn(true)} />
        </>
      )}

{status === "guest" ? (
        <Text>Welcome, Guest!</Text>
      ) : status === "user" ? (
        <Text>Welcome, User!</Text>
      ) : (
        <Text>Welcome, Admin!</Text>
      )}
     
{searchResult && jhj} {/* Only shows if logged in */}
      <Button
        title={isLoggedIn ? "Log out" : "Log in"}
        onPress={() => setIsLoggedIn(!isLoggedIn)}
      />



<TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  box1: {
    flex: 2,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  box3: {
    flex: 4,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
});
