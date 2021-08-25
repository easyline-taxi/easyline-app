import React from "react";

import ContainerPage from "../../components/ContainerPage";
import SubHeader from "./components/SubHeader";
import PointsCreator from "./components/PointCreator";

export default function CreatePoints() {
  return (
    <ContainerPage>
      <SubHeader />
      <PointsCreator />
    </ContainerPage>
  );
}
