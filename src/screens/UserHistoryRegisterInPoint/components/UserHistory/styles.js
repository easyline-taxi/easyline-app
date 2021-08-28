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
