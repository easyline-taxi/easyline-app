import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import * as Yup from "yup";

import { Form } from "@unform/mobile";
import { CheckBox } from "react-native-elements";

import Input from "../Input";
import { Validator } from "../../../../validators";

import * as S from "./styles";

const PointCreator = () => {
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
    const { pointName, pointCity, pointState } = data;

    const pointValidator = new Validator();

    try {
      formRef.current.setErrors({});

      pointValidator.isString({ name: "pointName", value: pointName, msg: "Campo requerido"  });
      pointValidator.isString({ name: "city",  value: pointCity, msg: "Campo requerido"  });
      pointValidator.isString({ name: "state", value: pointState, msg: "Campo requerido"});

      await pointValidator.isValid();

      Alert.alert("Ponto criado com sucesso! (API não integrada)");
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        console.log(`Ǹão passou ${err}`);
      } else {
        Alert.alert("Erro!", `Ocorreu um erro ao criar o ponto\n${err}`);
        console.log(err);
      }
    }

  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleContainer>
          <S.Title>Criar um ponto</S.Title>
          <S.SubTitle>Crie um ponto para administrar</S.SubTitle>
        </S.TitleContainer>
      </S.Header>
      <S.Main>
        <S.InputsContainer>
          <S.TextInputsContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input label="Nome do ponto" name="pointName" type="text" />
              <Input label="Cidade" name="pointCity" type="text" />
              <Input label="Estado" name="pointState" type="text" />
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
          <S.RegisterButton onPress={() => formRef.current.submitForm()}>
            <S.RegisterButtonText>Cadastrar</S.RegisterButtonText>
          </S.RegisterButton>
        </S.MainButtonsContainer>
      </S.Main>
    </S.Container>
  );
};

export default PointCreator;
