import React from 'react';
import { Text, Image } from 'react-native';
import { 
  Container, AvatarImg, TopSpace, 
  FollowBtn, MiddleSpace, DesignerName,
  DesignerDesc, FollowSpace, Fdcomp } from './style';
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
        <MiddleSpace>
          <DesignerName>Louis Smith</DesignerName>
          <DesignerDesc>Art Comes from life and about life.</DesignerDesc>
        </MiddleSpace>
        <FollowSpace>
          <Fdcomp style={{marginRight: 60}} type={0} number={345} />
          <Fdcomp type={1} number={245} />
        </FollowSpace>
      </Container>
    );
  }
}