import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
  align-items: center; 
`;

export const ContainerCard = styled.View`
  background-color: white;
  border-color: #eee;
  border-width: 2px;
  width: 90%;
  height: auto;
  border-radius: 10px;
`;

export const ContainerText = styled.View`
    align-items: center;
    font-size: 14px;
    color: white;
    margin: 10px;
`;

export const TextAtd = styled.Text`
    font-size: 20px;
    font-weight: normal;
`;

export const ContainerInput = styled.View`
    width: 95%;
    padding-top: 12%;
    padding: 10px;
`;

export const TextInputName = styled.Text`
    font-size: 12px;
    padding-left: 3%;
`;

export const InputName = styled.TextInput`
    height: 30px;
    border-color: #ddd;
    border-width: 1px;
    border-radius: 6px;
    padding-left: 10px;
`;

export const Space = styled.View`
    padding-top: 10px;
`;

export const InputVtr = styled.TextInput`
    height: 30px;
    border-color: #ddd;
    border-width: 1px;
    border-radius: 6px;
    padding-left: 10px;
`;

export const ContainerBtn = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    margin-top: 20px;
    background-color: #7F0DFF;
    justify-content: center;
    border-radius: 20px;
    width: 90px;
`;

export const TextSave = styled.Text`
    font-size: 14px;
    color: white;
    margin: 7px;
`;