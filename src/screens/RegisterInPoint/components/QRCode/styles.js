import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Main = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const QRCodeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const QRCodeTitle = styled.Text`
  font-size: ${normalize(17)}px;
  color: #616161de;
`;

export const QRCode = styled.View`
  align-items: center;
  justify-content: center;
  height: 278px;
  width: 278px;
`;
