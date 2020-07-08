import React from 'react';
import {View,Text,Linking,TouchableOpacity,StyleSheet} from 'react-native';
export default class TEST5 extends React.Component{
    openLocation=()=>{
        let lat=28.5865;
        let long=77.44;
        let URL="geo:$(lat),$(long)"
        Linking.openURL(URL);
    }

    // openGps = (lat, lng) => {
    //     var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    //     var url = scheme + `${lat},${lng}`;
    //     Linking.openURL(url);
    //     return(28.5865,77.44);
    //   }
    render(){
        return(

            <View style={styles.container}>
                <TouchableOpacity onPress={this.openLocation}>
                <Text style={styles.TextStyle}>
                    open map
                </Text>
                </TouchableOpacity>
            </View>
        )
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
        fontSize:30,
        color:'green',
        fontWeight:'bold'
    }
});