import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import PointCard from "../PointCard";

const Points = () => {
  const navigation = useNavigation();

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
          pointName: "Ipanema Five Stars At Night Bruh",
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

  function handleCreatePointButton() {
    navigation.navigate("CreatePointsStack");
  }

  function handleRegisterInPointButton() {
    navigation.navigate("RegisterInPointStack");
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderBackground></S.HeaderBackground>
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
      </S.Header>
      <S.Main>
        <S.MainScrollView>
          <S.PointsContainer>
            <S.Points>
              <S.PointsTitle>Pontos que você é motorista</S.PointsTitle>
              <S.PointsCardsContainer>
                {user.data.driverPoints.map((point, i) => (
                  <PointCard
                    key={i}
                    cardPointTitle={point.pointName}
                    CardPointJoinedDate={point.joinedAt}
                    cardPointOnlineUsersLength={point.onlineUsersLength}
                  />
                ))}
              </S.PointsCardsContainer>
            </S.Points>
            <S.Points>
              <S.PointsTitle>Pontos que você administra</S.PointsTitle>
              <S.PointsCardsContainer>
                {user.data.adminPoints.map((point, i) => (
                  <PointCard
                    key={i}
                    cardPointTitle={point.pointName}
                    CardPointJoinedDate={point.joinedAt}
                    cardPointOnlineUsersLength={point.onlineUsersLength}
                  />
                ))}
              </S.PointsCardsContainer>
            </S.Points>
          </S.PointsContainer>
          <S.BottomContainer>
            <S.SimpleButtonContainer>
              <S.SimpleButton onPress={handleRegisterInPointButton}>
                <S.SimpleButtonText>Cadastrar em um ponto</S.SimpleButtonText>
              </S.SimpleButton>
              <S.SimpleButton onPress={handleCreatePointButton}>
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
