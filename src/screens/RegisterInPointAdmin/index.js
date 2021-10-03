import React from "react";
import { Provider } from "react-redux";

import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import ReadQRCode from "./components/ReadQRCode";

import store from "../../store";

export default function RegisterInPointAdmin() {
  return (
    <ContainerPage>
      <Header title="Easy Line" subTitle="Sistema de gerenciamento" isBack />
      <Provider store={store}>
        <ReadQRCode />
      </Provider>
    </ContainerPage>
  );
}
