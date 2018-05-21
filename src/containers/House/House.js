import React from 'react';
import { Image } from 'react-native';
import {
  HouseContainer, MainImg, BlackDrop,
  Title, WhiteDrop, Desc, ImagesView,
  TextView, ImageBottom,
} from './style';
import home5 from '../../resources/home5.jpg';
import home1 from '../../resources/home1.png';
import home2 from '../../resources/home2.png';
import home4 from '../../resources/home4.png';

export default class House extends React.Component {
  render() {
    return (
      <HouseContainer>
        <MainImg source={home5} resizeMode="cover" />
        <BlackDrop />
        <WhiteDrop>
          <TextView>
            <Title>WHITE AND CLEAN</Title>
            <Desc>Determines how to resize the image when the frame doesn't match the raw image dimensions.</Desc>
          </TextView>
          <ImagesView>
            <ImageBottom source={home1} active={false} />
            <ImageBottom source={home2} active={true} />
            <ImageBottom source={home4} active={false} />
          </ImagesView>
        </WhiteDrop>
      </HouseContainer>
    );
  }
}