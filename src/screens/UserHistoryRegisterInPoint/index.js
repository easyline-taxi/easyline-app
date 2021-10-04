import React from "react";
import { Provider } from "react-redux";

import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import UserHistory from "./components/UserHistory";

import store from "../../store";

export default function UserHistoryRegisterInPoint() {
  return (
    <ContainerPage>
      <Header title="Easy Line" subTitle="Sistema de gerenciamento" isBack />
      <Provider store={store}>
        <UserHistory />
      </Provider>
    </ContainerPage>
  );
}
