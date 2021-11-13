import React from "react";
import { ActivityIndicator } from "react-native";

import * as S from "./styles";

const LoadingSpinner = ({ spinColor }) => {
  return (
    <S.Container>
      <ActivityIndicator color={spinColor || "#45108A"} size="large" />
    </S.Container>
  );
};

export default LoadingSpinner;
