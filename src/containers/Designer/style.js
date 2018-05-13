import styled from 'styled-components/native';
import { BoxShadow } from 'react-native-shadow';
import React from 'react';
import { View } from 'react-native';

const shadowOptImg = {
  width: 100,
  height: 100,
  color: "#000",
  border: 8,
  radius: 10,
  opacity: 0.2,
  x: 0,
  y: 2,
};

export const AvatarImg = ({ source, resizeMode, borderRadius }) => (
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

export const MiddleSpace = styled.View`
  margin: 20px 0;
`;

export const DesignerName = styled.Text`
  color: #FFF;
  font-size: 24px;
`;

export const DesignerDesc = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const FollowSpace = styled.View`
  display: flex;
  flex-direction: row;
`;

const FNumber = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const FDSpace = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Type = styled.View`
  background-color: ${props => props.type === 0 ? '#48c27b' : '#c74c42'} ;
  width: 3px;
  height: 12px;
  margin-right: 10px;
`;

export const Fdcomp = ({ type, number, style }) => (
  <View style={style}>
    <FNumber>{number}</FNumber>
    <FDSpace>
      <Type type={type} /><DesignerDesc>{type === 0 ? 'FOLLOWING' : 'FOLLOWER'}</DesignerDesc>
    </FDSpace>
  </View>
);