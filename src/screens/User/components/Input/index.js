import React, { useState } from "react";
import { Alert } from "react-native";
import * as Yup from "yup";

import * as S from "./styles";

import api from "../../../../Services/api";
import { useAuth } from "../../../../contexts/auth";
import { Validator } from "../../../../validators";

export default function Input() {
  const { updateUserData, user } = useAuth();
  const [userData, setUserData] = useState({});
  const updateDataValidator = new Validator();

  async function handleEditData(data) {
    const { name, password, vtr } = data;
    data = Object.fromEntries(Object.entries(data).filter(([_, v]) => !!v !== false));

    if (Object.entries(data).length < 1)
      return Alert.alert("Erro", "Nenhum dado foi modificado para ser atualizado.");

    try {
      name &&
        updateDataValidator.isString({ name: "name", value: name, max: 300, min: 4, msg: "Campo requerido" });
      password &&
        updateDataValidator.isString({ name: "password", value: password, min: 8, msg: "Campo requerido" });
      vtr && updateDataValidator.isString({ name: "vtr", value: vtr, min: 1, msg: "Campo requerido" });

      await updateDataValidator.isValid();

      await api("PUT", "/user/", data);
      await updateUserData();
      
      Alert.alert("Sucesso", "Dados atualizados com sucesso!");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        Alert.alert("Erro", `Não foi possível atualizar seus dados: \n${err}`);
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao tentar atualizar seus dados.");
      }
    }
  }

  return (
    <S.Container>
      <S.ContainerCard>
        <S.ContainerText>
          <S.TextAtd>Alterar Dados</S.TextAtd>
          <S.ContainerInput>
            <S.TextInputName>Nome</S.TextInputName>
            <S.InputName
              mode="outlined"
              label="Nome"
              placeholder="Digite seu nome"
              onChangeText={(text) => setUserData({ ...userData, name: text })}
            />
            <S.Space />
            <S.TextInputName>CPF</S.TextInputName>
            <S.InputName editable={false} mode="outlined" label="CPF" />
            <S.Space />
            <S.TextInputName>E-mail</S.TextInputName>
            <S.InputName editable={false} mode="outlined" label="E-mail" value={user.email} />
            <S.Space />
            <S.TextInputName>Senha</S.TextInputName>
            <S.InputVtr
              mode="outlined"
              label="Password"
              placeholder="Digite sua senha"
              onChangeText={(text) => setUserData({ ...userData, password: text })}
            />
            <S.Space />
            <S.TextInputName>VTR</S.TextInputName>
            <S.InputVtr
              mode="outlined"
              label="VTR"
              placeholder="Número da viatura"
              onChangeText={(text) => setUserData({ ...userData, vtr: text })}
            />
            <S.ContainerBtn>
              <S.Button onPress={() => handleEditData(userData)}>
                <S.TextSave>Salvar</S.TextSave>
              </S.Button>
            </S.ContainerBtn>
          </S.ContainerInput>
        </S.ContainerText>
      </S.ContainerCard>
    </S.Container>
  );
}
