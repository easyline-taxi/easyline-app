import React from "react";
import { default as QRCodeSVG } from "react-native-qrcode-svg";

import * as S from "./styles";

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
        <S.UserInfo>
          <S.AvatarImageContainer>
            <S.AvatarImage source={{ uri: user.data.image }} />
          </S.AvatarImageContainer>
          <S.UserDetails>
            <S.Username>{user.data.username}</S.Username>
            <S.SubTitle>Bom trabalho em seu novo ponto!</S.SubTitle>
          </S.UserDetails>
        </S.UserInfo>
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
