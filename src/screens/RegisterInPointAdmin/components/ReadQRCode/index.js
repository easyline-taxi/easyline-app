import React from "react";
import normalize from "react-native-normalize";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

const ReadQRCode = () => {
  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.Title>Escaneie o QR Code</S.Title>
          <S.SubTitle>Leia o código QR no celular do usuário que deseja cadastrar em seu ponto</S.SubTitle>
        </S.Header>
        <S.ExampleQRCodeContainer></S.ExampleQRCodeContainer>
        <S.ReadQRCodeButtonContainer>
          <S.ReadQRCodeButton>
            <S.ReadQRCodeButtonText>
              <Feather name="camera" size={normalize(18)} color="black" /> Ler QR code
            </S.ReadQRCodeButtonText>
          </S.ReadQRCodeButton>
        </S.ReadQRCodeButtonContainer>
      </S.Main>
    </S.Container>
  );
};

export default ReadQRCode;
