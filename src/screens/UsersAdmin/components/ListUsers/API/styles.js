import styled from 'styled-components/native';
import normalize from "react-native-normalize";


export const BackPage = styled.View`
  flex: 1;
  
`;


export const TopContainer = styled.View`
    background-color: #E1E1E1;
    padding: 1%;
    padding-top: 2%;
    border-radius: 30px;
    border-color: #D4D4D4; 
    border-width: 1px;
    flex: 1;

`;

export const Container = styled.View`
    background-color: transparent;
    flex: 1;
`;

export const ListTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Texto = styled.Text`
    font-size: 20px;
    padding-left: 5%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: #5B5B5BDE;
`;

export const RegisterDriverButton = styled.TouchableOpacity`
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    margin-right: 4%;
    height: 29px;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #7542AE;
`;

export const RegisterDriverButtonText = styled.Text`
    font-size: ${normalize(10)}px;
    text-transform: uppercase;
    color: #FFFFFFDE;
`;