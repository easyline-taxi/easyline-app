import React from "react";

import { View, Image } from "react-native";

import * as S from "./styles";

const SubHeader = () => (
  <S.Container>
    <S.ImageContainer>
      <S.Logo source={require("../../../../../assets/img/logo-hor.png")} />
    </S.ImageContainer>
  </S.Container>
);

export default SubHeader;
