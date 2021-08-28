import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterInPoint from "../screens/RegisterInPoint";

const RegisterInPointStack = createStackNavigator();

function RegisterInPointRoutes() {
  return (
    <RegisterInPointStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RegisterInPointStack.Screen name="RegisterInPoint" component={RegisterInPoint} />
    </RegisterInPointStack.Navigator>
  );
}

export default RegisterInPointRoutes;
