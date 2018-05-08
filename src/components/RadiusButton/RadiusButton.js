import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadiusButton extends React.PureComponent {
  render() {
    return (
      <View style={style.buttonView}>
        <TouchableOpacity style={style.button} >
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#34333c',
    alignItems: 'center',
    justifyContent: 'center',
  }, buttonView: {
    borderRadius: 5,
    width: 100,
    height: 40,
    overflow: 'hidden',
  }

});
