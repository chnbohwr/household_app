import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

export default class RadiusImage extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    borderRadius: PropTypes.number,
  };
  render() {
    const { width, height, borderRadius } = this.props;
    return (
      <View style={{ width, height, borderRadius, overflow: 'hidden' }}>
        <Image style={{ width, height }} />
      </View>
    );
  }
}