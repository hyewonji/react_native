/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

class TabHomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>

        <Button
          title="Go To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home_Stack');
          }}
        />
      </View>
    );
  }
}

export default TabHomeScreen;
