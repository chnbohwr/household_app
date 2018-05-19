/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Designer from './containers/Designer';

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
      <Designer />
    );
  }
}
