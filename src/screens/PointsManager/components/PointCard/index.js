import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import normalize from "react-native-normalize";
import { Alert } from "react-native";

import { useLoadingSpinnerModalManager } from "../../../../contexts/loadingSpinnerModalManager";

import api from "../../../../Services/api";

import * as S from "./styles";

const PointCard = ({ cardPointTitle, CardPointJoinedDate, cardPointOnlineUsersLength, cardPointId }) => {
  const navigation = useNavigation();
  const { enableLoadingSpinnerModal, disableLoadingSpinnerModal } = useLoadingSpinnerModalManager();

  const defaultCardPointTextFontSize = 29;
  const cardPointSignTextCharsLimit = 6;

  const [cardPointSignText, setCardPointSignText] = useState("");
  const [cardPointSignTextFontSize, setCardPointSignTextFontSize] = useState(defaultCardPointTextFontSize);

  useEffect(() => {
    const cardPointTitleEachFirstChar = cardPointTitle
      .split(" ")
      .map((word) => word[0])
      .filter((_el, i) => i < cardPointSignTextCharsLimit);
    setCardPointSignText(cardPointTitleEachFirstChar);

    if (cardPointTitleEachFirstChar.length > 4) {
      setCardPointSignTextFontSize(
        Number(parseInt(defaultCardPointTextFontSize / `2.${cardPointTitleEachFirstChar.length}`))
      );
    } else if (cardPointTitleEachFirstChar.length > 2) {
      setCardPointSignTextFontSize(
        Number(parseInt(defaultCardPointTextFontSize / `1.${cardPointTitleEachFirstChar.length}`))
      );
    }
  }, []);

  async function handleCardPointJoinButton() {
    try {
      enableLoadingSpinnerModal();
      await api("POST", "/point/", { point: cardPointId });
      navigation.navigate("TabStack");
      disableLoadingSpinnerModal();
    } catch (err) {
      disableLoadingSpinnerModal();
      console.log(err)
      Alert.alert("Erro", "Não foi possível entrar no ponto selecionado.");
    }
  }

  return (
    <S.PointCard>
      <S.CardPointDetailsContainer>
        <S.CardPointSign>
          <S.CardPointSignText style={{ fontSize: normalize(cardPointSignTextFontSize) }}>
            {cardPointSignText}
          </S.CardPointSignText>
        </S.CardPointSign>
        <S.CardPointMainDetails>
          <S.CardPointTitleContainer>
            <S.CardPointTitle>{cardPointTitle}</S.CardPointTitle>
            {CardPointJoinedDate ?? <S.CardPointJoinedDate>{CardPointJoinedDate}</S.CardPointJoinedDate>}
          </S.CardPointTitleContainer>
          {cardPointOnlineUsersLength.length > 1 ? (
            <S.CardPointOnlineAmountGreen>{cardPointOnlineUsersLength}</S.CardPointOnlineAmountGreen>
          ) : (
            <S.CardPointOnlineAmountRed>{cardPointOnlineUsersLength} Online</S.CardPointOnlineAmountRed>
          )}
        </S.CardPointMainDetails>
      </S.CardPointDetailsContainer>
      <S.CardPointJoinButton onPress={handleCardPointJoinButton}>
        <S.CardPointJoinButtonText>Entrar</S.CardPointJoinButtonText>
      </S.CardPointJoinButton>
    </S.PointCard>
  );
};

export default PointCard;
