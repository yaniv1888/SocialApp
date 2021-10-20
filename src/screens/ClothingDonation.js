import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const ClothingDonation = ({navigation}) => {
    const[Name, setName] = useState('');
    const [number, onChangeNumber] = useState('');
    const[Details, setDetails] = useState('');
    return (
        <View>
             

             

            <Text style={{textAlign:'right',fontSize:30,marginTop:50}}>הכנס שם המוצר:</Text>
            <TextInput 
                style={styles.input}
                fontSize="20"
                autoCapitalize="none"
                autoCorrect={false}
                value={Name}
                onChangeText={newValue => setName(newValue)}
              
               
                />
            <Text style={{textAlign:'right',fontSize:20,marginTop:10}}>שם המוצר : {Name}</Text>

           


            <Text style={{textAlign:'right',fontSize:30,marginTop:30}}>הכנס כמות:</Text>

            <TextInput
                style={styles.input1}
                autoCapitalize="none"
                fontSize="20"
                autoCorrect={false}
                value={number}
               
                onChangeText={newValue => onChangeNumber(newValue)}
                />
            <Text style={{textAlign:'right',fontSize:20,marginTop:10}}> הכמות : {number}</Text>

            <Text style={{textAlign:'right',fontSize:30,marginTop:30}}>תיאור המוצר בקצרה(נא לציין חומרים רגישים):</Text>
            
            <TextInput
                style={styles.input2}
                autoCapitalize="none"
                fontSize="20"
                autoCorrect={false}
                value={Details}
   
                onChangeText={newValue => setDetails(newValue)}
               
            />
            
            <Text style={{textAlign:'right',fontSize:20,marginTop:10}}> תיאור המוצר : {Details}</Text>
           <Text style={{marginTop:150}}></Text>

            

            <Button 
            title="אפשרות להעלאת תמונת המוצר/ים"
            onPress={() => navigation.navigate('העלאת תמונות')}
            ></Button>

            <Button title="הבא"
            onPress={() => navigation.navigate('העלאת פרטי המוצר',{
                Name,
                number,
                Details
            })}></Button>
           
        </View>    
           
    );
    
};

const styles = StyleSheet.create({
    input: {
        
       
        borderColor: 'black',
        borderWidth: 1
        
    },
    input1: {
       
        borderColor: 'black',
        borderWidth: 1
    },
    buttons:{
        
        marginTop:150
    },

    input2: {
  
        
        borderColor: 'black',
        borderWidth: 1
        
    },
    

});


export default ClothingDonation;