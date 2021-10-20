import React from "react";
import { TextBase, TouchableOpacity } from "react-native";
import { Text, StyleSheet, View, Button } from "react-native";
import { color } from "react-native-reanimated";

const ClohtsPosts = ({navigation}) => {

    const text =  navigation.getParam('Name');
    const num = navigation.getParam('number');
    const details = navigation.getParam('Details');
   
    
    return (
        <View >
         <Text style={{textAlign:'right',fontSize:20,marginTop:20}}> שם המוצר:</Text>
         <Text style={{textAlign:'right',fontSize:20,marginTop:10}}>{text}</Text>
         <Text style={{textAlign:'right',fontSize:20,marginTop:10}}> כמות:</Text>
         <Text style={{textAlign:'right',fontSize:20,marginTop:10}}>{num}</Text>
         <Text style={{textAlign:'right',fontSize:20,marginTop:10}}>  תיאור חומרים רגישים:</Text>
         <Text style={{textAlign:'right',fontSize:20,marginTop:10}}>{details}</Text>
         <Text style={{marginTop:400}}></Text>

         <Button title = "סיום"
     style={styles.buttun1}></Button>


  
        </View>
        
        
    )
    
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      margin:20,
      fontSize:30,
      alignItems:'flex-end',
    },
    buttun1: {
        flex:1,
        margin:20,
        fontSize:30,
        alignItems:'center',
    }
     
      
    });

    export default ClohtsPosts;