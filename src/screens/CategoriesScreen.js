import React from "react";
import { TextBase, TouchableOpacity,Image } from "react-native";
import { Text, StyleSheet, View, Button } from "react-native";
import { color } from "react-native-reanimated";
import { FontAwesome5 , Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';



const CategoriesScreen = ({navigation}) => {
  
  return (
  <View style={styles.container}>


<Image
                    source={require("../../assets/authHeader.png")}
                    style={{ marginTop: -300, marginLeft: -50 }}
                ></Image>
                <Image
                    source={require("../../assets/authFooter.png")}
                    style={{ position: "absolute", bottom: 10, right: -20, size:50 }}
                ></Image>



                <Image source={require('../../assets/loginLogo.png')}
                style={{marginTop:-50, alignSelf:"center"}}></Image>
    
   
    <Text style={{textAlign:'center',fontSize:30,marginTop:-30}}>ברוכים הבאים לקהילה!</Text>

    

    <Text style={{textAlign:'right',fontSize:30,marginTop:10}}>מה ברצונך לבחור?</Text>

     

    
    <TouchableOpacity 
        onPress={() => navigation.navigate("העלאת פוסט")}>
        <Image source={require("../../assets/dinner.png")} style={styles.roundButton1} />
        
      </TouchableOpacity>

      <Text style={{marginRight:38,marginTop:-10,fontWeight: "bold"}}>תרומת מזון</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate("העלאת פוסט")}>
       <FontAwesome5 name="tshirt"  size={70} style={styles.roundButton2} />
      </TouchableOpacity>

      <Text style={{marginRight:35,marginTop:-5,fontWeight: "bold"}}>תרומת ביגוד</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate("העלאת פוסט")}>
        <FontAwesome5 name="box" size={70} color="black" style={styles.roundButton3} />
      </TouchableOpacity>
      <Text style={{marginRight:40,marginTop:0,fontWeight: "bold"}}>תרומת ציוד</Text>
    

      <TouchableOpacity 
        onPress={() => navigation.navigate("העלאת פוסט")}>
        <Image source={require("../../assets/cdequipment.png")} style={styles.roundButton4} />
      </TouchableOpacity>

      

      <Text style={{marginRight:240,marginTop:-25,fontWeight: "bold"}}>קבלת ציוד</Text>
      

      <TouchableOpacity 
        onPress={() => navigation.navigate("העלאת פוסט")}>
        <Image source={require("../../assets/dc.png")} style={styles.roundButton5} />
      </TouchableOpacity>
      

      <Text style={{marginRight:235,marginTop:-165,fontWeight: "bold"}}>קבלת ביגוד</Text>
      
      
      <TouchableOpacity 
        onPress={() => navigation.navigate("העלאת פוסט")}>
        <Image source={require("../../assets/Artboard.png")} style={styles.roundButton6} />
      
      </TouchableOpacity>   
    
      <Text style={{marginRight:240,marginTop:-150,fontWeight: "bold"}}>קבלת מזון</Text>
      
    </View>
      );
    
    
    };
    
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        margin:20,
        fontSize:30,
        alignItems:'flex-end',
       
        
      },
      touchable: {
          marginTop:30
      },

      roundButton1: {
        marginRight:20,
        marginTop:40,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150/2,
        
      },
      roundButton2: {
        marginRight:25,
        marginTop: 20,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150/2,
        
      },

      roundButton3: {
        marginRight:15,
        marginTop: 30,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150/2,
        
      },

      roundButton4: {
        marginRight:225,
        marginTop: -130,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150/2,
        
      },

      roundButton5: {
        marginRight:225,
        marginTop: -250,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150/2,
        
      },

      roundButton6: {
        marginRight:220,
        marginTop: -230,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150/2,
      
      },
      
    });

 
    
    export default CategoriesScreen;
    