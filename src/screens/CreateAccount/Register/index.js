import * as S from './styles';
import * as Yup from 'yup';

import { Alert, Button, Image, Text, View, touco } from 'react-native';
import React, { useRef } from 'react';

import { Form } from '@unform/mobile';
import Input from './components/Input'
import api from './../../../Services/api'
import { useNavigation } from '@react-navigation/native';
import * as Application from 'expo-application';

// import { getUniqueId } from 'react-native-device-info';


export default function Register(props) {

  const formRef = useRef(null);
  const navigation = useNavigation();



  async function handleSubmit(data) {
    const { name, cpf, email, password, nameofpoint, city, country, vtr } = data;
    let validationErrors = {};

    try {
      formRef.current.setErrors({});

      let schema; 
      if (props.type == 'admin') {
        schema =  Yup.object().shape({
          name: Yup.string().required('Campo requerido'),
          email: Yup.string().email().required('Campo requerido'),
          password: Yup.string().min(6).required('Campo requerido'),
          vtr: Yup.string().required('Campo requerido'),
          nameofpoint: Yup.string().min(3).required('Compo requerido')
        });
      }
      else{
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo requerido'),
          email: Yup.string().email().required('Campo requerido'),
          password: Yup.string().min(6).required('Campo requerido'),
          vtr: Yup.string().required('Campo requerido'),
        });
      }
      


      await schema.validate(data, {
        abortEarly: false,
      });
      //Validation pass

      const deviceId = Application.androidId

      const body = {
        cpf,
        email,
        deviceId,
        name,
        password,
        nameofpoint,
        vtr,
        city,
        country,
        admin: props.type == 'admin' ? true : false
      };
      const response = await api("POST",'/users/register',body)
      
      Alert.alert("Sucesso!", "Cadastro realizado com sucesso.")

      navigation.navigate('Welcome')

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        //validatoin fail
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        console.log('Não Passou ' + err);
      } else {
        Alert.alert('Erro!', 'Ocorreu um erro ao se cadastrar.\n'+err)
        console.log(err)
      }
    }
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.ContainerTitle>
          <S.Title>
            Bem Vindo!
          </S.Title>

          <S.SubTitle>
            Cadastre-se para ter acesso ao app.
        </S.SubTitle>
        </S.ContainerTitle>
        <S.ContainerInput>
          <S.ContainerIntroInput>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input label="Nome" name="name" />
              <Input label="CPF" name="cpf" keyboardType="numeric" type="text" />

              <Input label="E-mail" name="email" type="email" />
              <Input label="Senha" name="password" type="password" secureTextEntry={true} />
              <Input label="VTR" keyboardType='numeric' maxLength={3} name="vtr" type="text" />
              {props.type === 'admin' &&
                <>
                  <Input label="Nome do ponto" name="nameofpoint" />
                  <S.Space />
                  <S.ButtonsEndPage>
                    <S.InputCoutry autoCapitalize='characters' maxLength={2} placeholder="Estado" name="state" />
                    <S.SpaceButtons />
                    <S.InputCity placeholder="Cidade" name="city" />
                  </S.ButtonsEndPage>
                </>
              }


              <S.ButtonEnter>
                <S.TextButton onPress={() => formRef.current.submitForm()}>
                  Cadastrar
              </S.TextButton>
              </S.ButtonEnter>
            </Form>
          </S.ContainerIntroInput>
        </S.ContainerInput>
      </S.TopContainer>
    </S.Container>

  );
}