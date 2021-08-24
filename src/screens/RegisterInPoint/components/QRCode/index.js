import React from "react";

import * as S from "./styles";

const QRCode = () => {
  return (
    <S.Container>
      <S.Header></S.Header>
      <S.Main>
        <S.QRCodeContainer>
          <S.QRCodeTitle>Mostre seu QR Code para o admin do ponto para ser cadastrado</S.QRCodeTitle>
          <S.QRCode></S.QRCode>
        </S.QRCodeContainer>
      </S.Main>
    </S.Container>
  );
};
