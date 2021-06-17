import * as S from "./styles";

import ContainerPage from "../../components/ContainerPage";
import Conversations from "../../screens/Chat/components/Conversations";
import Header from "../../components/Header";
import React from "react";
import Send from "../../screens/Chat/components/Send";

export default function Chat() {
  return (
    <ContainerPage>
      <Header />
      <Conversations />
      <Send />
    </ContainerPage>
  );
}
