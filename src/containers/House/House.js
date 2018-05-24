import React from 'react';
import { TouchableOpacity } from 'react-native';
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
  state = {
    images: [
      { key: 0, source: home1, active: false },
      { key: 1, source: home2, active: true },
      { key: 2, source: home4, active: false },
    ]
  }
  pressImage = (key) => {
    console.log('press key', key, this);
    this.setState({
      images: this.state.images.map(d => ({ ...d, active: d.key === key }))
    });
  }
  render() {
    const { images } = this.state;
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
            {
              images.map(
                data => (
                  <TouchableOpacity key={data.key} onPress={() => { this.pressImage(data.key); }}>
                    <ImageBottom source={data.source} pose={data.active ? 'active' : 'inactive'} />
                  </TouchableOpacity>
                )
              )
            }
          </ImagesView>
        </WhiteDrop>
      </HouseContainer>
    );
  }
}