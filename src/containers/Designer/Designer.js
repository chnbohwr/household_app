import React from 'react';
import { Text, Image } from 'react-native';
import { Container, AvatarImg, TopSpace, FollowBtn } from './style';
import avatar from '../../resources/avatar.png';
import RadiusButton from '../../components/RadiusButton';



export default class Designer extends React.Component {
  render() {
    return (
      <Container>
        <TopSpace>
          <AvatarImg
            source={avatar}
            resizeMode="cover"
            borderRadius={10}
          />
          <RadiusButton>
            <Text style={{ color: 'white' }}>+Follow</Text>
          </RadiusButton>
        </TopSpace>
      </Container>
    );
  }
}