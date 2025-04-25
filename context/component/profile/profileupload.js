import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, TextInput, Text, SafeAreaView, TouchableOpacity,Alert } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';



const ProfileImageUploader = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setname] = useState()
  const [phone, setPhone] = useState('');

  const navigation = useNavigation();
  

  
  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
      });

      if (!result.didCancel && !result.errorCode && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.warn('Image picking failed:', error);
    }
  };


  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <Text style={styles.profile}>Profile</Text>
          <Image
            source={profileImage ? { uri: profileImage } : require('../../../assets/default-profile.png')}
            style={styles.image}

          />
          <View>
            <TouchableOpacity onPress={pickImage}>
              <Icon name="camera" size={24} color="#555" style={styles.camera} />
            </TouchableOpacity>
          </View>

        </View>
        <View>
          <Text style={styles.name1}>{name}</Text>
          <Text style={styles.name2}>Name:</Text>
          <TextInput
            placeholder='Enter your name'
            value={name}
            onChangeText={setname}
            style={styles.nameplaceholder}
          />
        </View>
        <View>
          <Text style={styles.email}>Email:</Text>
          </View>
          <View>
          <TextInput
            placeholder='Enter your Email'
            style={styles.emailplaceholder}
          />
        </View>
        <View>
        </View>
        <View>
          <Text style={styles.phone}>Phone:</Text>
        </View>
        <View>
          <TextInput
            placeholder='Enter your phone no'
            // onChange={handlePhoneChange}
            style={styles.phoneplaceholder}
            keyboardType="numeric"
          />
        </View>

      </View>
    </SafeAreaView>
  );
};


export default ProfileImageUploader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  profile: {
    fontSize: 29,
    marginTop: -39,
    marginBottom: 30,
    color: 'orange',
    fontWeight: '500'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  camera: {
    width: 190,
    padding: 5,
    borderRadius: 50,
    marginTop: -24,
    marginLeft: '55%'

  },
  button1: {

    borderRadius: 60,

  },
  name1: {
    marginLeft: '37%',
    marginTop: 13,
    fontSize: 20,
  fontWeight:'500',
    color:'red'

  },
  name2: {
    marginLeft: '5%',
    marginTop: 40,
    fontSize: 18,
    color:'orange',
    fontWeight:'500',
  },
  nameplaceholder: {
    marginTop: -25,
    fontSize: 18,
    marginLeft: '24%',
   
  },
  email:{
    marginTop:22,
    marginLeft: '5%',
    fontSize:18,
    color:'orange',
    fontWeight:'500'
  },
  emailplaceholder:{
    marginTop: -25,
    marginLeft: '24%',
    fontSize: 18,
  },
  phone:{
    marginLeft: '5%',
    fontSize:18,
    marginTop:17,
    color:'orange',
    fontWeight:'500'
  },
  phoneplaceholder:{
    marginLeft: '24%',
    fontSize:18,
    marginTop: -25,

  }
  


});





