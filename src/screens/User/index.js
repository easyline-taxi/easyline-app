import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import Input from "../../screens/User/components/Input";

import * as S from "./styles";

export default function Home() {
  return (
    <ContainerPage>
      <Header />
      <S.Container>
        <KeyboardAwareScrollView>
          <UserInfo type={2} positionType="column" borderColorHex="#7F0DFF" />
          <Input />
        </KeyboardAwareScrollView>
      </S.Container>
    </ContainerPage>
  );
}
