/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './scr/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './scr/user_drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props}/>
      <DrawerItem
        label="Hello"
        onPress={()=>Linking.openURL('http://www.google.com')}
      />
      <DrawerItem
        label="Info"
        onPress={()=>alert('Info Window')}
      />
    </DrawerContentScrollView>
  )
}

// Drawer Navigator를 이용하면 헤더바가 사라진다.
// 헤더바를 사용하고 싶다면, 직접 생성해야 한다.
class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName = "Home"
          drawerType="front"
          drawerPosition="right"
          drawerStyle={{
            backgroundColor:"#c6cbef",
            width: 200
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue'
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={DrawerHomeScreen} />
          <Drawer.Screen name="User" component={DrawerUserScreen} />
        </Drawer.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="User"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a451e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         HeaderTitle: <LogoTitle />,
      //         headerRight: () => {
      //           <Button
      //             title="Info"
      //             onPress={() => alert('I am a button!')}
      //             color="orange"
      //           />;
      //         },
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go',
      //       }}
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink',
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple',
      //         },
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
