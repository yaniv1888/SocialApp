import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './src/screens/CategoriesScreen';

import ClothingDonation from "./src/screens/ClothingDonation";
import UploadImages from "./src/screens/UploadImages";
import ClohtsPosts from './src/screens/ClohtsPosts';
import HomeS from './src/screens/HomeS';
import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import MessageScreen from './src/screens/MessageScreen';
import PostScreen from './src/screens/PostScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ProfileScreen from './src/screens/ProfileScreen';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({  tintColor  }) => {
                        

                        if (route.name === 'בית') {
                           
                          return <Ionicons name="ios-home" size={24} color={tintColor}/>;
                          
                                
                        }else if (route.name === 'קטגוריות') {
                            

                          return<MaterialIcons name="category" size={24} color={tintColor} />;
                         
                        }else if(route.name=== 'העלאת פוסט'){

                          return<Ionicons
                          name="ios-add-circle"
                          size={38}
                          color="#E9446A"
                          style={{
                              shadowColor: "#E9446A",
                              shadowOffset: { width: 0, height: 10 },
                              shadowRadius: 10,
                              shadowOpacity: 0.3
                          }}
                      />;

                        }else if(route.name === 'התראות'){
                          return<Ionicons name="ios-notifications" size={24} color={tintColor}/>
                        }else if(route.name === 'פרופיל אישי'){
                          return<Ionicons name="ios-person" size={24}  color={tintColor}/>
                        }
                        

                        // You can return any component that you like here!
                        
                    
                    },
                    
                })}
                tabBarOptions={{
                   
                    inactiveTintColor: 'gray',
                    
                   
                }}

            >
                <Tab.Screen name="בית" component={HomeS} />
                <Tab.Screen name="קטגוריות" component={CategoriesScreen} />
                <Tab.Screen name="העלאת פוסט" component={PostScreen} />
                <Tab.Screen name="התראות" component={NotificationScreen}/>
                <Tab.Screen name="פרופיל אישי" component={ProfileScreen}/>

                
            </Tab.Navigator>
        </NavigationContainer>
    );
}



const firebaseConfig = {
  apiKey: "AIzaSyCtUAUgZgF3r2i6q-sl6t0bBvoJLHGSIOo",
  authDomain: "socialapp-399a1.firebaseapp.com",
  projectId: "socialapp-399a1",
  storageBucket: "socialapp-399a1.appspot.com",
  messagingSenderId: "734103364926",
  appId: "1:734103364926:web:73a4de1a6f3130d6a9786f"
};


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppStack = createStackNavigator({
  Home:HomeS

})




const AuthStack = createStackNavigator({
 
  LoginS: LoginScreen,

  RegisterS: RegisterScreen
 
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: MyTabs,
      Auth: AuthStack

     

    
  },
  {
    initialRouteName:"Loading"
  })
)



/*const navigator = createStackNavigator(
  {
    "מסך הבית": HomeScreen,
    "תרומת מזון": ClothingDonation,
    "העלאת תמונות": UploadImages,
    "העלאת פרטי המוצר": ClohtsPosts,
    
   

   
    
    
  },

  
);




export default createAppContainer(navigator);
*/
