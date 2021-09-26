import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const UserInfo = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top-right-radius: ${normalize(32)}px;
  border-top-left-radius: ${normalize(32)}px;
  border-bottom-right-radius: ${normalize(32)}px;
  border-bottom-left-radius: ${normalize(32)}px;
  height: ${normalize(100)}px;
  width: 100%;
`;

export const UserDetailsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const UserIconContainer = styled.View`
  height: ${normalize(79)}px;
  width: ${normalize(79)}px;
  background-color: #C9CCD5;
  background-color: #93B5C6;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
  border-width: 2px;
  border-color: #90ee90;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

export const AvatarImage = styled.Image`
  height: ${normalize(50)}px;
  width: ${normalize(50)}px;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
  border-width: 2px;
  border-color: #90ee90;
`;

export const UserDetailsMain = styled.View`
  flex-direction: column;
  padding-left: ${normalize(5)}px;
`;

export const Username = styled.Text`
  font-size: ${normalize(24)}px;
  color: #000;
`;