import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ContainerPage from "../../components/ContainerPage";
import SubHeader from "./components/SubHeader";
import PointsCreator from "./components/PointCreator";

export default function CreatePoints() {
  return (
    <ContainerPage>
      <SubHeader />
      <KeyboardAwareScrollView>
        <PointsCreator />
      </KeyboardAwareScrollView>
    </ContainerPage>
  );
}
