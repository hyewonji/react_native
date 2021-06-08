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
  createBottomTabNavigator,
  HeaderTitle,
} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import StackHomeScreen from './src/home';
import UserScreen from './scr/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';
import PictogramHome from './src/assets/pics/home.png';
import SideDrawer from './src/my_drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/*
  Stack Navigator
  - Tab Navigator
    - Tab Screen D
    - Tab Screen E
    - Tab Screen F
  - Stack Screen B
  - Stack Screen C
*/

MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#c6cbef',
        },
        labelPosition: 'beside-icon',
      }}
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  var iconImagePath;

  if (name === 'Home') {
    iconImagePath = require('./src/assets/pics/home.png');
  } else if (name === 'User') {
    iconImagePath = require('./src/assets/pics/home.png');
  } else if (name === 'Message') {
    iconImagePath = require('./src/assets/pics/home.png');
  }

  return (
    <Image
      style={{
        width: focused ? 24 : 20,
        height: focused ? 24 : 20,
      }}
      source={iconImagePath}
    />
  );
};
// CustomDrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('http://www.google.com')}
//         icon={() => <LogoTitle />}
//       />
//       <DrawerItem label="Info" onPress={() => alert('Info Window')} />
//     </DrawerContentScrollView>
//   );
// };

// Drawer Navigator를 이용하면 헤더바가 사라진다.
// 헤더바를 사용하고 싶다면, 직접 생성해야 한다.
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     drawerType="front"
      //     drawerPosition="right"
      //     drawerStyle={{
      //       backgroundColor: '#c6cbef',
      //       width: 200,
      //     }}
      //     //선택된 DrawerItem을 의미
      //     drawerContentOptions={{
      //       activeTintColor: 'red',
      //       activeBackgroundColor: 'skyblue',
      //     }}
      //     // drawerContent를 cumstom하기 위한 옵션
      //     // 4개의 props를 받는다(Default로 ScrollView로 보여진다.)
      //     // 1. DrawerNavigator에 어떤 route들이 있는지 반환하는 state
      //     // 2. 화면 이동을 위한 Navigation
      //     // 3. Drawer.Screen에 Option을 담기 위한 discripters
      //     // 4. Drawer가 열렸는지 닫혔는지 판단하기 위한 progress
      //     drawerContent={props => <SideDrawer {...props} />}>
      //     <Drawer.Screen
      //       name="Home"
      //       component={DrawerHomeScreen}
      //       options={{
      //         drawerIcon: () => (
      //           <Image source={PictogramHome} style={{width: 40, height: 40}} />
      //         ),
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={DrawerUserScreen} />
      //   </Drawer.Navigator>
      // </NavigationContainer>

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
