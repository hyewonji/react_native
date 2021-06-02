/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View } from 'react-native';

class UserScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button 
                    title="To Home Screen" 
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }} 
                />
            </View>
        );
    }
 }
 
 
export default UserScreen;
 