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
`;

export const ExampleQRCodeImage = styled.Image`
  width: 100%;
  height: 100%;
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

export const ModalScannerContainer = styled.View`
  border-width: 5px;
`;

export const ScanTitle = styled.Text`
  font-size: ${normalize(30)}px;
  color: #ffffff;
  position: absolute;
  top: 0;
  margin-top: 20%;
`;

export const ScanSquare = styled.View`
  width: 200px;
  height: 200px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ScanSquareTopLeft = styled.View`
  border-left-width: 6px;
  border-top-width: 6px;
  border-top-left-radius: 25px;
  border-color: #ffffff;
  width: 45px;
  height: 45px;
`;

export const ScanSquareTopRight = styled.View`
  border-right-width: 6px;
  border-top-width: 6px;
  border-top-right-radius: 25px;
  border-color: #ffffff;
  width: 45px;
  height: 45px;
`;

export const ScanSquareBottomLeft = styled.View`
  align-self: flex-end;
  position: absolute;
  border-left-width: 6px;
  border-bottom-width: 6px;
  border-bottom-left-radius: 25px;
  border-color: #ffffff;
  width: 45px;
  height: 45px;
`;

export const ScanSquareBottomRight = styled.View`
  align-self: flex-end;
  position: absolute;
  right: 0;
  border-right-width: 6px;
  border-bottom-width: 6px;
  border-bottom-right-radius: 25px;
  border-color: #ffffff;
  width: 45px;
  height: 45px;
`;
