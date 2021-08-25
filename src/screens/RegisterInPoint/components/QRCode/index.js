import React from "react";

import * as S from "./styles";

const QRCode = () => {
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
            <S.QRCodeBar></S.QRCodeBar>
          </S.QRCodeBarContainer>
        </S.QRCodeContainer>
      </S.Main>
    </S.Container>
  );
};

export default QRCode;
