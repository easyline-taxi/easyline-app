import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  background-color: #e4e4e4;
  flex: 1;
  margin-top: ${normalize(14)}px;
  border-top-right-radius: ${normalize(30)}px;
  border-top-left-radius: ${normalize(30)}px;
`;

export const Header = styled.View`
  height: ${normalize(133)}px;
  align-items: center;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-color: #D8BCF350;
`;

export const TitleContainer = styled.View`
  margin-top: ${normalize(19)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #4d2d85;
  font-size: ${normalize(36)}px;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  color: #4d2d85;
  font-size: ${normalize(18)}px;
`;

export const Main = styled.View``;

export const InputsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextInputsContainer = styled.View`
  width: 85%;
  border-color: #ff0000;
`;

export const CheckBoxInputsContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-color: #fff000;
  margin-top: ${normalize(54)}px;
  width: 100%;
  margin-bottom: ${normalize(25)}px;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CheckBoxTitle = styled.Text`
  color: #792ed2;
  font-size: ${normalize(11)}px;
`;

export const MainButtonsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const RegisterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${normalize(47)}px;
  width: ${normalize(314)}px;
  background-color: #792ed2;
  border-width: 1px;
  border-color: #7021cf;
  border-top-right-radius: ${normalize(24)}px;
  border-top-left-radius: ${normalize(24)}px;
  border-bottom-right-radius: ${normalize(24)}px;
  border-bottom-left-radius: ${normalize(24)}px;
`;

export const RegisterButtonText = styled.Text`
  color: #ffffff;
  font-size: ${normalize(18)}px;
`;
