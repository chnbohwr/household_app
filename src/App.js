/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';
import Designer from './containers/Designer';
import House from './containers/House';

const APP = StackNavigator({
  Designer: { screen: Designer },
  House: { screen: House },
},{
  initialRouteName: 'Designer',
  navigationOptions: { header: null },
});

// export default APP;

export default class App extends Component {
  async componentDidMount() {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log(`fcmToken:${fcmToken}`)
    } else {
      // user doesn't have a device token yet
    }
  }
  render() {
    return (
      <APP />
    );
  }
}
