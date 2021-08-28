import React from "react";

import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import QRCode from "./components/QRCode";

export default function RegisterInPoint() {
  return (
    <ContainerPage>
      <Header title="Easy Line" subTitle="Sistema de gerenciamento" isBack />
      <QRCode />
    </ContainerPage>
  );
}
