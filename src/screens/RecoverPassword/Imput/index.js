import React from 'react';
import * as S from './styles';



export default function InputRecover(props) {


  return (
    <S.Container>
        <S.TopContainer>
      <S.ContainerLogo>
        <S.Logo source={require('../../../../assets/img/logo-hor.png')} />
      </S.ContainerLogo>
      <S.ContainerTitle>
        <S.Title>
        Recuperar senha 
        </S.Title>
        <S.SubTitle>
        Digite seu endereço de e-mail logo{'\n'} 
        abaixo e você receberá um e-mail {'\n'} 
                com a sua senha
        </S.SubTitle>
      </S.ContainerTitle>
      <S.ContainerInput>
        <S.ContainerIntroInput>
          <S.TextInputEmail>
            E-mail
          </S.TextInputEmail>
          <S.InputEmail
            mode='outlined'
            label="Nome"
            onChangeText={() => console.log('Pressed')}
          />
          <S.Space />
          <S.ButtonEnter>
            <S.TextButton>
              Recuperar senha
              </S.TextButton>
          </S.ButtonEnter>
        </S.ContainerIntroInput>
      </S.ContainerInput>
      </S.TopContainer>
    </S.Container>
  );
}