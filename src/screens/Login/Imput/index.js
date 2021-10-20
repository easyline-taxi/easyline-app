
import React, { useRef } from "react";
import { Alert } from 'react-native';
import * as Yup from "yup";
import * as Application from 'expo-application';

import * as S from "./styles";

import { Form } from "@unform/mobile";
import { useAuth } from "../../../contexts/auth";
import { useWebSocket } from "../../../contexts/websocket";
import { useNavigation } from "@react-navigation/native";
import Input from "../../CreateAccount/Register/components/Input";

export default function login(props) {
  const navigation = useNavigation();

  const formRef = useRef(null);
  const { signIn } = useAuth();
  const { connectWebSocket } = useWebSocket();

  const handleSubmit = async (data) => {
    const { username, password } = data;
    let validationErrors = {};

    try {
      formRef.current.setErrors({});

      let schema;
      schema = Yup.object().shape({
        username: Yup.string().email().required("Campo requerido"),
        password: Yup.string().min(6).required("Campo requerido"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      //Validation pass

      const body = {
        username,
        password,
        deviceid: Application.androidId
      };

      await handleSignIn(body);
      Alert.alert("Sucesso!", "Logado com Sucesso.");
      connectWebSocket();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        //validatoin fail
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        console.log("Não Passou " + err);
      } else {
        Alert.alert("Erro!", "Ocorreu um erro ao logar.\n" + err);
        console.log(err);
      }
    }
  };
  async function handleSignIn(userData) {
    await signIn(userData);
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.ContainerInput>
          <S.ContainerTitle>
            <S.Title>Fazer Login</S.Title>
            <S.SubTitle>Bem Vindo de volta!</S.SubTitle>
          </S.ContainerTitle>
          <S.ContainerIntroInput>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input label="E-mail" name="username" type="email" />
              <S.Space />
              <Input
                label="Senha"
                name="password"
                type="password"
                secureTextEntry={true}
              />
            </Form>

            <S.ButtonForgot
              onPress={() => navigation.navigate("RecoverPasswordStack")}
            >
              <S.TextForgot>Esqueceu a senha?</S.TextForgot>
            </S.ButtonForgot>
            <S.Space />
            <S.ButtonEnter>
              <S.TextButton onPress={() => formRef.current.submitForm()}>
                Login
              </S.TextButton>
            </S.ButtonEnter>
          </S.ContainerIntroInput>
          <S.Space />
          <S.ButtonsEndPage>
            <S.ButtonAntcSum
              onPress={() => navigation.navigate("CreateAccoutStack")}
            >
              <S.TextAntcSum>Não tenho conta</S.TextAntcSum>
            </S.ButtonAntcSum>
            <S.SpaceButtons />
            <S.ButtonAntcSum>
              <S.TextAntcSum>Sou um motorista</S.TextAntcSum>
            </S.ButtonAntcSum>
          </S.ButtonsEndPage>
        </S.ContainerInput>
      </S.TopContainer>
    </S.Container>
  );
}
