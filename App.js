import React from 'react';
import { View, Text, SafeAreaView ,Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TEST1 from './DEMO/TEST1';
import TEST2 from './DEMO/TEST2';
import TEST3 from './DEMO/TEST3';
import TEST4 from './DEMO/TEST4';
import TEST5 from './DEMO/TEST5';
import TEST6 from './DEMO/TEST6';
import Header_Component from './DEMO/Header_component';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default class APP extends React.Component {
  render()
    {
    return (
      <NavigationContainer>
       
        <Stack.Navigator screenOptions={{
          headerShown: true
        }} >
          
          <Stack.Screen name="WhatsApp" component={TAB_NAVIGATION}
            options={{
              headerTitle: props => <Header_Component onPress={this.fun}/>,
              headerStyle: {
                backgroundColor: 'powdergrey',
                height:170,               
               elevation:0,
                           },
              headerTintColor: 'powdergrey',
              headerTitleStyle: {
                fontWeight: 'bold',
                             },
                }} />

<Stack.Screen name="DRAWER_NAVIGATION" component={DRAWER_NAVIGATION}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  fun=()=>{
    this.props.navigation.openDrawer('DRAWER_NAVIGATION');
    
  }

}

function TAB_NAVIGATION() {
  return (
    <Tab.Navigator
      //  tabBarComponent={ Header_Component}
      tabBarOptions={{
        labelStyle: { fontSize: 20, fontWeight: 'bold' },
        tabStyle: { width: 115 },
        style: { backgroundColor: 'powdergrey' },
        scrollEnabled: true,
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        pressColor: 'pink',
      }}>
      <Tab.Screen name="CAMERA" component={TEST1} />
      <Tab.Screen name="CHATS" component={TEST2} />
      <Tab.Screen name="STATUS" component={TEST3} />
      <Tab.Screen name="CALLS" component={TEST4} />
      <Tab.Screen name="MAP" component={TEST5} />
      <Tab.Screen name="SETTING" component={TEST6} />
    </Tab.Navigator>
  );
}

function DRAWER_NAVIGATION(){
  return(
<Drawer.Navigator>
  
        <Drawer.Screen name="CAMERA" component={TEST1} />
      <Drawer.Screen name="CHATS" component={TEST2} />
      <Drawer.Screen name="STATUS" component={TEST3} />
      <Drawer.Screen name="CALLS" component={TEST4} />
      <Drawer.Screen name="CONT" component={TEST5} />
      <Drawer.Screen name="SETTING" component={TEST6} />
      </Drawer.Navigator>
  )
}

///////
// onPress={ ()=>{ Linking.openURL('https://google.com')}}
//////


//export default TAB_NAVIGATION;


//(BELOW PART IS A VERY IMPORTANT FOR HEEADER DESIGN SOW PLZ CARE THIS)========>>>>>>>

{/* <Stack.Screen name="WhatsApp" component={TAB_NAVIGATION}
options={{
  headerTitle: props => <Header_Component />
 ,
  headerStyle: {
    backgroundColor: 'powdergrey',
    height:200,
    borderWidth:0.001,
    borderColor:'powdergrey',
    borderBottomWidth:0.001,
   shadowColor:'white',
   shadowColor: 'red',
   elevation: 500,
   shadowOffset: {
    height: 0,
    shadowOpacity: 0
}

  },
  headerTintColor: 'powdergrey',
  headerTitleStyle: {
    fontWeight: 'bold',
    
    
  },

}} />
</Stack.Navigator>
</NavigationContainer>
)
}
} */}