import styled from 'styled-components/native';
import { BoxShadow } from 'react-native-shadow';
import React from 'react';

const shadowOptImg = {
  width:100,
  height:100,
  color:"#000",
  border:8,
  radius:10,
  opacity:0.2,
  x:0,
  y:2,
};

export const AvatarImg = ({source, resizeMode, borderRadius}) => (
  <BoxShadow setting={shadowOptImg}>
    <Avatar source={source} resizeMode={resizeMode} borderRadius={borderRadius} />
  </BoxShadow>
);

export const Container = styled.View`
  background-color: #41424B;
  width: 100%;
  display: flex;
  flex: 1;
  padding: 25px;
`;

export const TopSpace = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
`;
