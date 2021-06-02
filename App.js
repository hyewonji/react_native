/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen from './src/home';
import UserScreen from './scr/user';
import LogoTitle from './src/logo';

const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="User"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#a451e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color : '#f3d612'
            }
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Home Screen',
              HeaderTitle: <LogoTitle/>,
              headerRight: () => {
                <Button
                  title="Info"
                  onPress={()=>alert('I am a button!')}
                  color='orange'
                  />
              }
            }}
            />
          <Stack.Screen 
            name="User" 
            component={UserScreen}
            initialParams={{
              userIdx: 50,
              userName: 'Gildong',
              userLastName: 'Go'
            }}
            options={{
              title: 'User Screen',
              headerStyle: {
                backgroundColor: 'pink'
              },
              headerTintColor: 'red',
              headerTitleStyle: {
                fontWeight: 'bold',
                color : 'purple'
              }
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    ); 
  }
}

const styles = StyleSheet.create({});

export default App;
