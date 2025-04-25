import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './context/component/home';
import Itemdetail from './context/component/itemdetail'; 
import Productcircle from './context/component/Categories'
import Cartscreen from './context/component/cart';
import ProfileImageUploader from './context/component/profile/profileupload';
import Splash from './context/component/splashscreen';
import Subcategory from './context/component/subcategory';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="splashscreen" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="itemdetail" component={Itemdetail} />
        <Stack.Screen name="Productcircle" component={Productcircle} />
        <Stack.Screen name="Subcategory" component={Subcategory} />
        <Stack.Screen name="Cart" component={Cartscreen} />
        <Stack.Screen name="profileupload" component={ProfileImageUploader} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
    
   
   
    // <profileScreen/>
   // Your navigation setup


   
  );
}
