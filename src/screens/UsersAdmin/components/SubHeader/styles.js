import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: #E9E9E9;
   align-items: center;
   flex-direction: row;
   justify-content: center;
   padding: 20px;
`;
export const SubContainer = styled.View`
  border-color: #D4D4D4;
  border-width: 1px;
  border-radius: 30px;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
`;
export const Search = styled.TextInput`
  color: #000;
  padding-right: 10px;
`;
export const icon = styled.View`
  padding-left: 5%;
`;



