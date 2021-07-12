
import React, { useRef } from "react";
import { Alert, Button, Image, Text, View, touco } from "react-native";
import { Form } from "@unform/mobile";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import * as Application from "expo-application";

import * as S from "./styles";

import Input from "./components/Input";
import { useAuth } from "../../../contexts/auth";
import { Validator } from "../../../validators";

// import { getUniqueId } from 'react-native-device-info';

export default function Register(props) {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const { signUp } = useAuth();

  async function handleSubmit(data) {
    const { name, cpf, email, password, nameofpoint, city, country, vtr } = data;
    let validationErrors = {};
    const registerValidator = new Validator();

    try {
      formRef.current.setErrors({});

      registerValidator.isString({ name: "name" ,value: name, msg: "Campo requerido" });
      registerValidator.isEmail({ name: "email", value: email, msg: "Campo requerido" });
      registerValidator.isString({ name: "password", value: password, min: 6, msg: "Campo requerido" });
      registerValidator.isString({ name: "vtr", value: vtr, msg: "Campo requerido" });

      if (props.type == "admin") {
        registerValidator.isString({ name: "nameofpoint", value: nameofpoint, min: 3, msg: "Campo requerido" });
      }

      await registerValidator.isValid();
      /* Validation pass */

      const deviceId = Application.androidId;

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
        admin: props.type == "admin" ? true : false,
      };

      await handleSignUp(body);
      Alert.alert("Sucesso!", "Cadastro realizado com sucesso.");

      navigation.navigate("Welcome");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current.setErrors(registerValidator.getErrors());
        console.log("Não Passou " + err);
      } else {
        Alert.alert("Erro!", "Ocorreu um erro ao se cadastrar.\n" + err);
        console.log(err);
      }
    }
  }
  async function handleSignUp(userData) {
    await signUp(userData);
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.ContainerTitle>
          <S.Title>Bem Vindo!</S.Title>

          <S.SubTitle>Cadastre-se para ter acesso ao app.</S.SubTitle>
        </S.ContainerTitle>
        <S.ContainerInput>
          <S.ContainerIntroInput>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input label="Nome" name="name" />
              <Input label="CPF" name="cpf" keyboardType="numeric" type="text" />

              <Input label="E-mail" name="email" type="email" />
              <Input label="Senha" name="password" type="password" secureTextEntry={true} />
              <Input label="VTR" keyboardType="numeric" maxLength={3} name="vtr" type="text" />
              {props.type === "admin" && (
                <>
                  <Input label="Nome do ponto" name="nameofpoint" />
                  <S.Space />
                  <S.ButtonsEndPage>
                    <S.InputCoutry
                      autoCapitalize="characters"
                      maxLength={2}
                      placeholder="Estado"
                      name="state"
                    />
                    <S.SpaceButtons />
                    <S.InputCity placeholder="Cidade" name="city" />
                  </S.ButtonsEndPage>
                </>
              )}

              <S.ButtonEnter>
                <S.TextButton onPress={() => formRef.current.submitForm()}>Cadastrar</S.TextButton>
              </S.ButtonEnter>
            </Form>
          </S.ContainerIntroInput>
        </S.ContainerInput>
      </S.TopContainer>
    </S.Container>
  );
}
