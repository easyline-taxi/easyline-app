import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    height: 15%;
    background-color: #fff;
`;

export const Box = styled.View`
  background-color: #F2F1F6;
  width: 24%;
  height: 80%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  background-color: #F2F1F6;
  width: 24%;
  height: 80%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${({ size }) => size && `${size}px`};
`;
