import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import { Form } from "@unform/mobile";
import { CheckBox } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import api from "../../../../Services/api";
import Input from "../Input";
import { Validator } from "../../../../validators";

import * as S from "./styles";

const PointCreator = () => {
  const navigation = useNavigation();
  const formRef = useRef(null);

  const [freePlanToggleCheckBox, setFreePlanTogglePCheckBox] = useState(true);
  const [subscribePlanToggleCheckBox, setSubscribePlanToggleCheckBox] = useState(false);

  function handleToggleCheckBox(checkBoxName) {
    if (checkBoxName === "freePlan") {
      console.log("Free");
      setSubscribePlanToggleCheckBox(false);
      setFreePlanTogglePCheckBox(true);
    } else if (checkBoxName === "subscribePlan") {
      console.log("Paid");
      setFreePlanTogglePCheckBox(false);
      setSubscribePlanToggleCheckBox(true);
    }
  }

  const handleSubmit = async (data) => {
    const { name, city, country } = data;

    const pointValidator = new Validator();

    try {
      formRef.current.setErrors({});

      pointValidator.isString({ name: "name", value: name, msg: "Campo requerido" });
      pointValidator.isString({ name: "city", value: city, msg: "Campo requerido" });
      pointValidator.isString({ name: "country", value: country, msg: "Campo requerido" });

      await pointValidator.isValid();
      await handleCreatePoint(data);

      Alert.alert("Ponto criado com sucesso!");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(`Ǹão passou ${err}`);
      } else {
        Alert.alert("Erro!", `Ocorreu um erro ao criar o ponto\n${err}`);
        console.log(err);
      }
    }
  };

  async function handleCreatePoint(data) {
    return await api("POST", "/point/register/", data);
  }

  function handleRegisterButton() {
    formRef.current.submitForm();
    if (freePlanToggleCheckBox) {
      navigation.navigate("PointsManagerStack");
    } else {
      navigation.navigate("PlansStack");
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleContainer>
          <S.Title>Criar um ponto</S.Title>
          <S.SubTitle>Crie um ponto para administrar</S.SubTitle>
        </S.TitleContainer>
      </S.Header>
      <KeyboardAwareScrollView>
        <S.Main>
          <S.InputsContainer>
            <S.TextInputsContainer>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input label="Nome do ponto" name="name" type="text" />
                <Input label="Cidade" name="city" type="text" />
                <Input label="Estado" name="country" type="text" />
              </Form>
            </S.TextInputsContainer>
            <S.CheckBoxInputsContainer>
              <S.CheckBoxContainer onPress={() => handleToggleCheckBox("freePlan")}>
                <CheckBox
                  size={16}
                  containerStyle={{ width: 0, paddingTop: 0, paddingBottom: 0, marginRight: 2 }}
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={freePlanToggleCheckBox}
                  onPress={() => handleToggleCheckBox("freePlan")}
                />
                <S.CheckBoxTitle>Plano Free</S.CheckBoxTitle>
              </S.CheckBoxContainer>
              <S.CheckBoxContainer onPress={() => handleToggleCheckBox("subscribePlan")}>
                <CheckBox
                  size={16}
                  containerStyle={{ width: 0, paddingTop: 0, paddingBottom: 0, marginRight: 2 }}
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={subscribePlanToggleCheckBox}
                  onPress={() => handleToggleCheckBox("subscribePlan")}
                />
                <S.CheckBoxTitle>Assinar um plano</S.CheckBoxTitle>
              </S.CheckBoxContainer>
            </S.CheckBoxInputsContainer>
          </S.InputsContainer>
          <S.MainButtonsContainer>
            <S.RegisterButton onPress={handleRegisterButton}>
              <S.RegisterButtonText>Cadastrar</S.RegisterButtonText>
            </S.RegisterButton>
          </S.MainButtonsContainer>
        </S.Main>
      </KeyboardAwareScrollView>
    </S.Container>
  );
};

export default PointCreator;
