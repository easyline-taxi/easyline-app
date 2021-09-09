import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import PointCard from "../PointCard";
import UserInfo from "../../../../components/UserInfo";

import api from "../../../../Services/api";
import { useAuth } from "../../../../contexts/auth";

const Points = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [pointsList, setPointsList] = useState([]);

  useEffect(() => {
    fetchPoints();
  }, []);

  async function fetchPoints() {
    const res = await api("GET", "/point/");
    setPointsList(res.points);
  }

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
        <UserInfo type={1} />
      </S.Header>
      <S.Main>
        <S.MainScrollView>
          <S.PointsContainer>
            <S.Points>
              <S.PointsTitle>Pontos que você é motorista</S.PointsTitle>
              <S.PointsCardsContainer>
                {pointsList
                  .filter((point) => point.function === "M")
                  ?.map((point) => {
                    return (
                      <PointCard
                        key={point.id}
                        cardPointTitle={point.name}
                        cardPointOnlineUsersLength={point.onlines}
                      />
                    );
                  })}
              </S.PointsCardsContainer>
            </S.Points>
            <S.Points>
              <S.PointsTitle>Pontos que você administra</S.PointsTitle>
              <S.PointsCardsContainer>
                {pointsList
                  .filter((point) => point.function === "A")
                  ?.map((point) => {
                    return (
                      <PointCard
                        key={point.id}
                        cardPointTitle={point.name}
                        cardPointOnlineUsersLength={point.onlines}
                      />
                    );
                  })}
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
