import styled from 'styled-components/native';
import posed from 'react-native-pose';
import { Dimensions } from 'react-native';

export const HouseContainer = styled.View`
  flex: 1;
`;

export const MainImg = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export const BlackDrop = styled.View`
  width: 100%;
  height: 350px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
`;
export const WhiteDrop = styled.View`
  width: 100%;
  height: 350px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 0;
`

export const TextView = styled.View`
  padding: 25px 25px 0 25px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  margin: 20px 0;
`;
export const Desc = styled.Text`
  color: #ccc;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const ImagesView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

const { width } = Dimensions.get('window');

// export const ImageBottom = styled.Image`
//   width: ${p => p.active ? width * 0.4 : width * 0.3};
//   height: ${p => p.active ? 210 : 200};
//   opacity: ${p => p.active ? 1 : 0.6};
// `;

export const ib = posed.Image({
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0.6,
  },
});


export const ImageBottom = styled(ib)`
  width: ${p => p.pose === 'active' ? width * 0.4 : width * 0.3};
  height: ${p => p.pose === 'active' ? 210 : 200};
`;
