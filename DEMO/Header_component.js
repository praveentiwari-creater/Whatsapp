import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
const Header_Component=(props)=>{
   
    return (
        <View >

            <View style={{ flexDirection: 'row',backgroundColor:'powdergrey'}}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('./ICON/menu.png')} style={{ width: 30, height: 40 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 35, color: 'blue', fontWeight: 'bold', marginLeft: 30 }}>
                    ORDERS
                </Text>
                <TouchableOpacity>
                    <Image source={require('./ICON/notification.png')} 
                    style={{ width: 30, height: 35, marginLeft: 95, marginTop: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./ICON/message.png')}
                     style={{ width: 35, height: 35, marginLeft: 20, marginTop: 10 }} />
                </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 0.5, borderRadius: 10,
                 borderColor: 'grey', width: 380, height: 70, marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity>
                        <Image source={require('./ICON/search.png')} style={{ width: 30, height: 30, margin: 16 }} />
                    </TouchableOpacity>
                    <TextInput placeholder="Search Products,Keyword" style={{ fontSize: 20, color: 'grey' }}>
                    </TextInput>

                    <TouchableOpacity>
                        <Image source={require('./ICON/double_line.png')}
                         style={{ width: 30, height: 30, marginLeft: 35, marginTop: 16 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )    

}
export default Header_Component;

fun = () => {
    this.props.navigation.openDrawer("DRAWER_NAVIGATION");
}
