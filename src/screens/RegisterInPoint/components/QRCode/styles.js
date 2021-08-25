import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: flex-start;
  justify-content: center;
  width: 85%;
  margin-top: 2%;
  margin-bottom: 5%;
`;

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

export const Main = styled.View`
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${normalize(30)}px;
  border-top-left-radius: ${normalize(30)}px;
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
  flex: 1;
`;

export const QRCodeContainer = styled.View`
  justify-content: flex-start;
  height: 80%;
  width: 90%;
`;

export const QRCodeTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 15%;
`;

export const QRCodeTitle = styled.Text`
  text-align: center;
  font-size: ${normalize(17)}px;
  color: #616161de;
`;

export const QRCodeBarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const QRCodeBar = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 178px;
  width: 178px;
`;
