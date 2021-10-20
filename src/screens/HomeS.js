import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import firebase from "firebase";
import ProfileScreen from "./ProfileScreen";
import Storage from "react-native-storage";
import Fire from "../FIre";
import PostScreen from "./PostScreen";
import RegisterScreen from "./RegisterScreen"
import LoginScreen from "./LoginScreen"
import { useNavigation, DrawerActions } from '@react-navigation/native';

import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";


// temporary data until we pull from Firebase





export default class HomeS extends React.Component {
    
   
    

    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={{uri:post.avatar}} style={styles.avatar}  />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Feather name="more-horizontal" size={24} color="#73788B"  /> 
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source = {{uri:post.image}} style={styles.postImage} resizeMode="cover" />
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity  >
                        <Feather name="heart"  size={24} color="#73788B" style={{marginRight:16}}/>
                        </TouchableOpacity>

                        <TouchableOpacity  >
                        <Ionicons name="chatbox" size={24} color="#73788B"  />
                        </TouchableOpacity>

                    </View>
                    
                        

                        
                      
                    </View>
                </View>
            
        );
    };

    constructor(props){
        super(props);
        this.state=({
            posts:[],
            user: {},
           
            newtext:'',
           
            
            loading:false,
        });
        this.ref = firebase.firestore().collection('posts','users').orderBy("timestamp", "desc");;
       
      
        }
    
    
    componentDidMount() {

        



        this.unsubscribe = this.ref.onSnapshot((querySnapshot => {
            const example = [];
            
            querySnapshot.forEach((doc, index)=>{
                example.push({
                    name: doc.data().name,
                    id: doc.data().id,
                    text: doc.data().text,
                    timestamp: doc.data().timestamp,
                    avatar: doc.data().avatar,
                    image: doc.data().image
                    
                    
                   
                });
            });
            this.setState({
                posts:example,
                loading: false,
            });
        }));
    }
    

    onPressPost = () => {
        this.ref.add({
            textname : this.props.text

        }).then((data)=>{
            console.log(`adding data = ${data}`);
            this.setState({
                newtext:'',
                
                loading:true
            });
        }).catch((error)=>{
            console.log(`error to add doc = ${error}`);
            this.setState({
                newtext:'',
                loading:true
            });
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>מסך הבית</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={this.state.posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        marginLeft:200,
        fontSize: 14,
        color: "#838899",
        
    },
    postImage: {
        width: 240,
        height: 200,
        borderRadius: 5,
        marginVertical: 16
    }
});