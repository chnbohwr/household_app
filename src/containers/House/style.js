import styled from 'styled-components/native';

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

export const ImageBottom = styled.Image`
  opacity: ${props => props.active ? 1 : 0.6};
  width: ${props => props.active ? '40%': '30%'};
  height: ${props => props.active ? '210px' : '200px'};
`;
