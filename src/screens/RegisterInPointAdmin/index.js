import React from "react";

import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import ReadQRCode from "./components/ReadQRCode";

export default function RegisterInPointAdmin() {
  return (
    <ContainerPage>
      <Header title="Easy Line" subTitle="Sistema de gerenciamento" isBack />
      <ReadQRCode />
    </ContainerPage>
  );
}
