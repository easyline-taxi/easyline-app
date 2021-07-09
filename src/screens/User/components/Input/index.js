import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as S from "./styles";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

export default function Input() {
  const navigation = useNavigation();
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
              onChangeText={() => console.log("Pressed")}
            />
            <S.Space />
            <S.TextInputName>CPF</S.TextInputName>
            <S.InputName
              editable={false}
              mode="outlined"
              label="CPF"
              onChangeText={() => console.log("Pressed")}
              />
            <S.Space />
            <S.TextInputName>E-mail</S.TextInputName>
            <S.InputName
              editable={false}
              mode="outlined"
              label="E-mail"
              onChangeText={() => console.log("Pressed")}
            />
            <S.Space />
            <S.TextInputName>Senha</S.TextInputName>
            <S.InputVtr
              mode="outlined"
              label="VTR"
              placeholder="Digite sua senha"
              onChangeText={() => console.log("Pressed")}
            />
            <S.Space />
            <S.TextInputName>VTR</S.TextInputName>
            <S.InputVtr
              mode="outlined"
              label="VTR"
              placeholder="Número da viatura"
              onChangeText={() => console.log("Pressed")}
            />
            <S.ContainerBtn>
              <S.Button
                onPress={async () => {
                  await SecureStore.deleteItemAsync("token");
                  navigation.navigate("Welcome");
                }}
              >
                <S.TextSave>Salvar</S.TextSave>
              </S.Button>
            </S.ContainerBtn>
          </S.ContainerInput>
        </S.ContainerText>
      </S.ContainerCard>
    </S.Container>
  );
}
