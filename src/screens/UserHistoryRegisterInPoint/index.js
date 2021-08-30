import React from "react";

import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import UserHistory from "./components/UserHistory";

export default function UserHistoryRegisterInPoint() {
  return (
    <ContainerPage>
      <Header title="Easy Line" subTitle="Sistema de gerenciamento" isBack />
      <UserHistory />
    </ContainerPage>
  );
}
