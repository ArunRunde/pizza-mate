import { StyleSheet } from 'react-native';
import { Image } from "react-native";
import { ImageBackground ,View,Text} from 'react-native';
import { useEffect } from 'react';


export default function Splash({navigation}){
  const Chef =require('../../assets/cheff.png') 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

    return(
      <View>
         <View style={styles.container}>
            <ImageBackground 
            source={require('../../assets/yellow.jpg')}
            resizeMode="cover"
            style={styles.background}
            />
            </View>
            <View style={styles.cheff} >
            <Image source={Chef} 
            resizeMode="contain"
            style={styles.chef}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Slice Into Happiness</Text>
            </View>

            
            </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,                  
                  
    },
background: {
    flex: 1,
    width: '100%',
    height: 1000,
    marginBottom:100
  },
chef:{
   width: 200,
    height: 200 ,
    overflow: 'hidden',
    borderRadius:300,
    flexDirection:'row'
},
cheff:{
  marginTop:'60%',
  justifyContent:'center',
  alignItems:'center'
},
text:{
  alignItems:'center',
  marginTop:20,
},
text1:{
  fontSize:20,
  fontWeight:'bold',
  color:'black',
  fontFamily:'PT Sans'
}
})                                          