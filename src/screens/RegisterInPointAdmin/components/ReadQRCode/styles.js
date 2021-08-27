import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Main = styled.View`
  border-top-right-radius: ${normalize(25)}px;
  border-top-left-radius: ${normalize(25)}px;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  background-color: #e9e9e9;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${normalize(25)}px;
  border-top-left-radius: ${normalize(25)}px;
  border-bottom-right-radius: ${normalize(25)}px;
  border-bottom-left-radius: ${normalize(25)}px;
  background-color: #ffffff;
  padding: ${normalize(40)}px;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: ${normalize(15)}px;
  color: #000000de;
  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  font-size: ${normalize(15)}px;
  color: #616161de;
`;

export const ExampleQRCodeContainer = styled.View`
  height: 200px;
  width: 200px;
  border-width: 2px;
`;

export const ReadQRCodeButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const ReadQRCodeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${normalize(47)}px;
  width: 100%;
  border-top-right-radius: ${normalize(24)}px;
  border-top-left-radius: ${normalize(24)}px;
  border-bottom-right-radius: ${normalize(24)}px;
  border-bottom-left-radius: ${normalize(24)}px;
  border-width: 1px;
  border-color: #7021cf;
`;

export const ReadQRCodeButtonText = styled.Text`
  font-size: ${normalize(18)}px;
  color: #7937cfde;
`;
