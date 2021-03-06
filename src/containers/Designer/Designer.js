import React from 'react';
import { Text, Image, View } from 'react-native';
import {
  Container, ShadowImage, TopSpace,
  FollowBtn, MiddleSpace, DesignerName,
  DesignerDesc, FollowSpace, Fdcomp,
  FavoriteText, ImageContainer, Space,
  Space2,
} from './style';
import avatar from '../../resources/avatar.png';
import home1 from '../../resources/home1.png';
import home2 from '../../resources/home2.png';
import home3 from '../../resources/home3.png';
import home4 from '../../resources/home4.png';
import RadiusButton from '../../components/RadiusButton';

export default class Designer extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <TopSpace>
          <ShadowImage
            source={avatar}
            resizeMode="cover"
            borderRadius={4}
            width={100}
            height={100}
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
          <Fdcomp style={{ marginRight: 60 }} type={0} number={345} />
          <Fdcomp type={1} number={245} />
        </FollowSpace>
        <FavoriteText>Favorite</FavoriteText>
        <ImageContainer horizontal={true}>
          <ShadowImage
            onPress={()=>navigate('House')}
            source={home1}
            resizeMode="cover"
            borderRadius={4}
            width={200}
            height={200}
          />
          <Space2 />
          <ShadowImage
            source={home2}
            resizeMode="cover"
            borderRadius={4}
            width={200}
            height={200}
          />
        </ImageContainer>
        <ImageContainer horizontal={true}>
          <ShadowImage
            source={home3}
            resizeMode="cover"
            borderRadius={4}
            width={200}
            height={200}
          />
          <Space2 />
          <ShadowImage
            source={home4}
            resizeMode="cover"
            borderRadius={4}
            width={200}
            height={200}
          />
        </ImageContainer>
        <Space />
      </Container>
    );
  }
}