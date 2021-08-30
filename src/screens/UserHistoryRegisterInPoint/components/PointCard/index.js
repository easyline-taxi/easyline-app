import React, { useEffect, useState } from "react";
import normalize from "react-native-normalize";

import * as S from "./styles";

const PointCard = ({
  cardPointTitle,
  CardPointJoinedDate,
  cardPointMannedTimes,
  cardPointActiveHours,
  cardPointBannedTimes,
}) => {
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

  return (
    <S.PointCard
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <S.CardPointDetailsContainer>
        <S.CardPointSign>
          <S.CardPointSignText style={{ fontSize: normalize(cardPointSignTextFontSize) }}>
            {cardPointSignText}
          </S.CardPointSignText>
        </S.CardPointSign>
        <S.CardPointMainDetails>
          <S.CardPointTitleContainer>
            <S.CardPointTitle>{cardPointTitle}</S.CardPointTitle>
            <S.CardPointJoinedDate>Esteve nesse ponto por {CardPointJoinedDate}</S.CardPointJoinedDate>
          </S.CardPointTitleContainer>
          {cardPointBannedTimes < 1 ? (
            <S.CardPointBannedTimesGreen>{cardPointBannedTimes} vezes banido</S.CardPointBannedTimesGreen>
          ) : (
            <S.CardPointBannedTimesRed>{cardPointBannedTimes} vezes banido</S.CardPointBannedTimesRed>
          )}
        </S.CardPointMainDetails>
      </S.CardPointDetailsContainer>
      <S.CardPointRightInfos>
        <S.CardPointRightInfoTitle>Infos</S.CardPointRightInfoTitle>
        <S.CardPointRightInfoText>Tripulou {cardPointMannedTimes} vezes</S.CardPointRightInfoText>
        <S.CardPointRightInfoText>Ficou {cardPointActiveHours} horas ativo</S.CardPointRightInfoText>
      </S.CardPointRightInfos>
    </S.PointCard>
  );
};

export default PointCard;
