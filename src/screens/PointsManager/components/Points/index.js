import React from "react";
import { useNavigation } from "@react-navigation/native";
import normalize from "react-native-normalize";

import * as S from "./styles";

import PointCard from "../PointCard";
import UserIcon from "../../../../../assets/img/user-icon.svg";
import { useAuth } from "../../../../contexts/auth";

const Points = () => {
  const navigation = useNavigation();
  const auth = useAuth();

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
            {auth.user.photo ? (
              <S.AvatarImage source={{ uri: auth.user.photo }} />
            ) : (
              <S.UserIconContainer>
                <UserIcon width={normalize(50)} height={normalize(50)} />
              </S.UserIconContainer>
            )}
            <S.UserDetailsMain>
              <S.Username>{auth.user.name}</S.Username>
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
