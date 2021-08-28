import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterInPointAdmin from "../screens/RegisterInPointAdmin";

const RegisterInPointAdminStack = createStackNavigator();

function RegisterInPointAdminRoutes() {
  return (
    <RegisterInPointAdminStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RegisterInPointAdminStack.Screen name="RegisterInPointAdmin" component={RegisterInPointAdmin} />
    </RegisterInPointAdminStack.Navigator>
  );
}

export default RegisterInPointAdminRoutes;