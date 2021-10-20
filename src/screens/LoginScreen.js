import React from "react";
import { Text, StyleSheet, View,TouchableOpacity, TextInput, Button, Image, LayoutAnimation, StatusBar } from "react-native";
import firebase from "firebase";


export default class RegisterScreen extends React.Component{
    static navigationOptions = {
        headerShown: false
    };



    state = {
        email: "",
        password: "",
        errorMessage:null
    };

    handlelogin = () => {
        const {email, password} = this.state

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}));
    }





    render() {
        LayoutAnimation.easeInEaseOut();



        return (
            <View style = {styles.container}>
                
                <StatusBar barStyle="light-content"></StatusBar>
                
                <Image source={require('../../assets/authHeader.png')}
                style={{marginTop:-176, marginLeft:-50}}></Image>

                <Image source={require('../../assets/loginLogo.png')}
                style={{marginTop:-110, alignSelf:"center"}}></Image>
              
                
                
                <Text style = {styles.greeting}>
                    {'שלום,\nברוכים השבים :).'}
                </Text>

                <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}


            </View>

            <View style={styles.form}>
                <View>

                <Text style={styles.InpuTtitle}>אימייל</Text>
                <TextInput style={styles.input} autoCapitalize="none"
                 onChangeText ={email => this.setState({email})}
                 value={this.state.email}></TextInput>

                </View>


                <View style={{marginTop:32}}>

                <Text style={styles.InpuTtitle}> סיסמא</Text>
                <TextInput style={styles.input} secureTextEntry autoCapitalize="none" 
                 onChangeText ={password => this.setState({password})}
                 value={this.state.password}></TextInput>

                </View>

                
            </View>

            <TouchableOpacity style={styles.button} onPress={this.handlelogin}>
                <Text style ={{color:"#FFF", fontWeight:"500"}}>כניסה</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}} onPress={() => this.props.navigation.navigate("RegisterS")}>
                <Text style={{color:"#4141959",fontSize:15}}> חדש אצלנו? <Text style={{color:"#E9446A",fontWeight:"500"}}>הירשם עכשיו! </Text>

                </Text>
            </TouchableOpacity>

            

            </View>
            
           
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     
    },
    greeting : {
        marginTop:-32,
        fontSize:20,
        fontWeight:"400",
        textAlign:"center"
    },
    errorMessage: {
        height:72,
        alignItems:'center',
        justifyContent:"center",
        marginHorizontal:30

    },
    error: {
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },

    form: {
        marginBottom:48,
        marginHorizontal:30
    },
    InpuTtitle: {
        color:"#8A8F9E",
        marginLeft:280,
        fontSize:10,
        textTransform:"uppercase"
    },
    input: {
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button:{
        marginHorizontal:30,
        backgroundColor:"#E9446A",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center"
    }
    });