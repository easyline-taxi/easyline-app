import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PointsManager from "../screens/PointsManager";

const PointsManagerStack = createStackNavigator();

function PointsManagerRoutes() {
  return (
    <PointsManagerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PointsManagerStack.Screen name="PointsManager" component={PointsManager} />
    </PointsManagerStack.Navigator>
  );
}

export default PointsManagerRoutes;
