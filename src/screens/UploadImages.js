import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export default function Add({navigation}) {
  const [galleryPermission, setGalleryPermission] = useState('');
  const [imageUri, setImageUri] = useState('');

  const permisionFunction = async () => {
    // here is how you can get the camera permission

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (imagePermission.status !== 'granted') {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const pick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      
    });

    console.log(result.uri);
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  

  return (
    
    
    
    <View style={styles.container} > 
    
            
        
     
    
        
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />
        
        
        
       
            
        <Text style={{marginTop:550}}></Text>
          <Button 
            title={'אנא העלה תמונה של המוצר'} onPress={pick}
      
       />
       
      
      <Text style={{textAlign:'center',marginTop:0}}></Text>
            
           <Button title={'הבא'}
            onPress={() => navigation.navigate('העלאת פרטי המוצר')}></Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  textBox: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    flex: 1,
    top:0,
    left:-138,
    width: 650,
    height:500,
    position: 'absolute',
    resizeMode: 'contain',
    
  },
  button: {
    position:"absolute"
  }
});


