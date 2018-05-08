import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Avatar, TopSpace, FollowBtn } from './style';
import avatar from '../../resources/avatar.png';
import RadiusButton from '../../components/RadiusButton';
export default class Designer extends React.Component {
  render() {
    return (
      <Container>
        <TopSpace>
          <Avatar
            source={avatar}
            resizeMode="cover"
            borderRadius={10}
          />
          <RadiusButton>
            <Text>+Follow</Text>
          </RadiusButton>
        </TopSpace>
      </Container>
    );
  }
}