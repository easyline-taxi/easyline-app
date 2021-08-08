import React from "react";

import * as S from "./styles";

const Points = () => {
  const user = {
    data: {
      image: "https://thispersondoesnotexist.com/image",
      vtr: "VTR 007",
      role: "Motorista",
      name: "Sergio Camargo",
      driverPoints: [
        {
          pointName: "Ipanema Top Táxi",
          joinedAt: "22 ago 21",
          onlineUsersLength: 12,
        },
        {
          pointName: "LC Táxi",
          joinedAt: "22 ago 21",
          onlineUsersLength: 12,
        },
        {
          pointName: "Almirante Barroso",
          joinedAt: "3 ago 21",
          onlineUsersLength: 0,
        },
      ],
      adminPoints: [
        {
          pointName: "Ipanema Five Stars",
          joinedAt: "7 ago 21",
          onlineUsersLength: 5,
        },
        {
          pointName: "Bahia Seguro",
          joinedAt: "7 ago 21",
          onlineUsersLength: 5,
        },
        {
          pointName: "Ponto Nordestino",
          joinedAt: "7 ago 21",
          onlineUsersLength: 5,
        },
      ],
    },
  };

  return (
    <S.Container>
      <S.Main>
        <S.UserInfo>
          <S.UserDetailsContainer>
            <S.AvatarImage source={{ uri: user.data.image }} />
            <S.UserDetailsMain>
              <S.Username>{user.data.name}</S.Username>
              <S.UserDetailsSub>
                <S.UserRole>{user.data.role}</S.UserRole>
                <S.BulletSeparator />
                <S.UserVtr>{user.data.vtr}</S.UserVtr>
              </S.UserDetailsSub>
            </S.UserDetailsMain>
          </S.UserDetailsContainer>
        </S.UserInfo>
        <S.MainScrollView>
          <S.PointsContainer>
            <S.Points>
              <S.PointsTitle>Pontos que você é motorista</S.PointsTitle>
              <S.PointsCardsContainer>
                {user.data.driverPoints.map((point, i) => (
                  <S.PointCard key={i}>
                    <S.CardPointDetailsContainer>
                      <S.CardPointSign>
                        <S.CardPointSignText>LT</S.CardPointSignText>
                      </S.CardPointSign>
                      <S.CardPointMainDetails>
                        <S.CardPointTitleContainer>
                          <S.CardPointTitle>{point.pointName}</S.CardPointTitle>
                          <S.CardPointJoinedDate>{point.joinedAt}</S.CardPointJoinedDate>
                        </S.CardPointTitleContainer>
                        <S.CardPointOnlineAmountRed>
                          {point.onlineUsersLength} Online
                        </S.CardPointOnlineAmountRed>
                      </S.CardPointMainDetails>
                    </S.CardPointDetailsContainer>
                    <S.CardPointJoinButton>
                      <S.CardPointJoinButtonText>Entrar</S.CardPointJoinButtonText>
                    </S.CardPointJoinButton>
                  </S.PointCard>
                ))}
              </S.PointsCardsContainer>
            </S.Points>
            <S.Points>
              <S.PointsTitle>Pontos que você administra</S.PointsTitle>
              <S.PointsCardsContainer>
                {user.data.adminPoints.map((point, i) => (
                  <S.PointCard key={i}>
                    <S.CardPointDetailsContainer>
                      <S.CardPointSign>
                        <S.CardPointSignText>LT</S.CardPointSignText>
                      </S.CardPointSign>
                      <S.CardPointMainDetails>
                        <S.CardPointTitleContainer>
                          <S.CardPointTitle>{point.pointName}</S.CardPointTitle>
                          <S.CardPointJoinedDate>{point.joinedAt}</S.CardPointJoinedDate>
                        </S.CardPointTitleContainer>
                        <S.CardPointOnlineAmountRed>
                          {point.onlineUsersLength} Online
                        </S.CardPointOnlineAmountRed>
                      </S.CardPointMainDetails>
                    </S.CardPointDetailsContainer>
                    <S.CardPointJoinButton>
                      <S.CardPointJoinButtonText>Entrar</S.CardPointJoinButtonText>
                    </S.CardPointJoinButton>
                  </S.PointCard>
                ))}
              </S.PointsCardsContainer>
            </S.Points>
          </S.PointsContainer>
          <S.BottomContainer>
            <S.SimpleButtonContainer>
              <S.SimpleButton>
                <S.SimpleButtonText>Cadastrar em um ponto</S.SimpleButtonText>
              </S.SimpleButton>
              <S.SimpleButton>
                <S.SimpleButtonText>Criar um ponto</S.SimpleButtonText>
              </S.SimpleButton>
            </S.SimpleButtonContainer>
          </S.BottomContainer>
        </S.MainScrollView>
      </S.Main>
    </S.Container>
  );
};

export default Points;
