import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity, Platform, StyleSheet } from 'react-native';

class Home extends Component {

    constructor(props){
        super(props);
    }

    openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
        number = 'telprompt:${091123456789}';
        }
        else {
        number = 'tel:${091123456789}'; 
        }
       
        Linking.openURL(number);
      };
     
      render() {
        return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.openDialScreen()} 
        >
        <Text style={styles.TextStyle}>Click to Open Dial Screen</Text>
        </TouchableOpacity>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
       
    },
    TextStyle:{
        fontSize:20,
        color:'blue',
        fontWeight:'bold'
    }
});
export default Home;