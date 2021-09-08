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
  margin-top: ${normalize(10)}px;
  margin-bottom: ${normalize(10)}px;
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
  background-color: #c9ccd5;
  background-color: #93b5c6;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

export const AvatarImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
  border-width: 1px;
  border-color: #fff;
  padding: 5px;
`;

export const AvatarImage = styled.Image`
  height: ${normalize(50)}px;
  width: ${normalize(50)}px;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
`;

export const UserDetailsMain = styled.View`
  flex-direction: column;
  padding-left: ${normalize(5)}px;
`;

export const Username = styled.Text`
  font-size: ${normalize(20)}px;
  line-height: ${normalize(32)}px;
  color: #707070;
`;

export const SubTitle = styled.Text`
  font-size: ${normalize(14)}px;
  line-height: ${normalize(17)}px;
  text-transform: uppercase;
  color: #1c1c1e40;
`;
