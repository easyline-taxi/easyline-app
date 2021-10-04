import { Provider } from "react-redux";

import * as S from "./styles";

import ContainerPage from "../../components/ContainerPage";
import Conversations from "../../screens/Chat/components/Conversations";
import Header from "../../components/Header";
import React from "react";
import Send from "../../screens/Chat/components/Send";

import store from "../../store";

export default function Chat() {
  return (
    <ContainerPage>
      <Header />
      <Provider store={store}>
        <Conversations />
        <Send />
      </Provider>
    </ContainerPage>
  );
}
