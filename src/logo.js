/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Image } from 'react-native';

import Logo from './assets/pics/home.png';


const Stack = createStackNavigator();

class LogoTitle extends Component {

    render() {
        return (
            <Image
                style={{width: 40, height:40}}
                source={Logo}
            />
        ); 
    }
}

export default LogoTitle;
