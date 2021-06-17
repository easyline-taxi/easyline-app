import styled from 'styled-components/native';
import Input from './components/Input'


export const Container = styled.View `
  flex:1;
  justify-content: center;
  align-items: center;  
`;
export const TopContainer = styled.View `
  background-color: #E4E4E4;
  border-radius: 24px;
  overflow: hidden;
  padding-bottom: 20px;
  width: 90%;
`;

export const ContainerTitle = styled.View `
  align-items: center;
  padding: 10px;
  border-bottom-color: #D8BCF3;
  border-bottom-width: 1px;
`;

export const Title = styled.Text `
  font-size: 20px;
  font-weight: bold;
  color: #4D2D85;
`;
export const SpaceTitle = styled.Text `
  
`;
export const SubTitle = styled.Text `
  font-size: 14px;
  color: #4D2D85;
`;

export const Error = styled.Text `
  font-size: 14px;
  color: red;
  text-align: center;
`;

export const ContainerInput = styled.View `
  
`;

export const ContainerIntroInput = styled.View `
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;    
`;

export const TextInputEmail = styled.Text `
  padding-left: 10px;
  padding-bottom: 3px;
  color: #4D2D85;
  
`;

export const InputEmail = styled.TextInput `
  border-color: #7021CF;
  border-width: 1px;
  background-color: white;
  border-radius: 14px;
  height: 47px;
  width: 100%;
  padding-left: 5px;
`;
export const Space = styled.View `
  padding-top: 10px;
`;

export const TextInpuSenha = styled.Text `
  padding-left: 10px;
  padding-bottom: 3px;
  color: #4D2D85;
`;

export const InputSenha = styled.TextInput `
  border-color: #7021CF;
  border-width: 1px;
  background-color: white;
  border-radius: 14px;
  height: 47px;
  width: 100%;
  padding-left: 5px;
`;


export const ButtonEnter = styled.TouchableOpacity `
  background-color: #7021CF;
  border-radius: 40px;
  align-items: center;
  justify-content: center; 
  height: 47px;
  margin-top: 20px;
`;

export const TextButton = styled.Text `
  color: white;
  font-size: 16px;
`;
export const ButtonsEndPage = styled.View `
  flex-direction: row;
  padding-bottom: 5px;
  padding-top: 5px;
  justify-content: center;  
  align-items: center;
`;

export const InputCity = styled(Input)
`
  border-color: #7021CF;
  border-width: 1px;
  background-color: white;
  border-radius: 14px;
  height: 47px;
  width: 57%;
  padding-left: 5px;
`;

export const InputCoutry = styled(Input)
`
  border-color: #7021CF;
  border-width: 1px;
  background-color: white;
  border-radius: 14px;
  height: 47px;
  width: 40%;
  padding-left: 5px;
`;

export const ButtonAntcSum = styled.TouchableOpacity `
  border-color: #7021CF;
  border-width: 1px;
  background-color: white;
  border-radius: 25px;
  height: 40px;
  width: 134px;
  justify-content: center;
  align-items: center;
`;
export const SpaceButtons = styled.Text `
  padding-left: 10px;
`;