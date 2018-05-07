import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Avatar } from './style';
import avatar from '../../resources/avatar.png';

export default class Designer extends React.Component {
  render() {
    return (
      <Container>
        <Text>asdf</Text>
        <Avatar
          source={avatar}
          height={100}
          resizeMode="cover"
          borderRadius={10}
        />
        <Image
          source={avatar}
          height={100}
          resizeMode="cover"
          borderRadius={10}
        />
      </Container>
    );
  }
}