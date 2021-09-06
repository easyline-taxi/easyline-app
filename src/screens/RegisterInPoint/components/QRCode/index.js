import React from "react";
import { default as QRCodeSVG } from "react-native-qrcode-svg";

import * as S from "./styles";

import UserInfo from "../../../../components/UserInfo";

const QRCode = () => {
  const easyLineLogo = require("../../../../../assets/img/logo-colored.png");

  const user = {
    data: {
      image: "https://thispersondoesnotexist.com/image",
      username: "Next Tesla",
    },
  };

  return (
    <S.Container>
      <S.Header>
        <UserInfo type={2} />
      </S.Header>
      <S.Main>
        <S.QRCodeContainer>
          <S.QRCodeTitleContainer>
            <S.QRCodeTitle>Mostre seu QR Code para o admin do ponto para ser cadastrado</S.QRCodeTitle>
          </S.QRCodeTitleContainer>
          <S.QRCodeBarContainer>
            <S.QRCodeBar>
              <QRCodeSVG value="Teste" logo={easyLineLogo} logoSize={30} size={200} logoMargin={20} />
            </S.QRCodeBar>
          </S.QRCodeBarContainer>
        </S.QRCodeContainer>
      </S.Main>
    </S.Container>
  );
};

export default QRCode;
