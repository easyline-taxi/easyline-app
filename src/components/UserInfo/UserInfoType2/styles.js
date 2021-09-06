import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const AvatarImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
  border-width: 1px;
  border-color: #ffffff;
  padding: 5px;
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
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

export const AvatarImage = styled.Image`
  height: ${normalize(66)}px;
  width: ${normalize(66)}px;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
`;

export const UserDetails = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export const Username = styled.Text`
  font-size: ${normalize(21)}px;
  color: #ffffffde;
`;

export const SubTitle = styled.Text`
  font-size: ${normalize(10)}px;
  color: #ffffff62;
`;