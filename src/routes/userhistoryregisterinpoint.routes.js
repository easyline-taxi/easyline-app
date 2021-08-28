import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserHistoryRegisterInPoint from "../screens/UserHistoryRegisterInPoint";

const UserHistoryRegisterInPointStack = createStackNavigator();

function UserHistoryRegisterInPointRoutes() {
  return (
    <UserHistoryRegisterInPointStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <UserHistoryRegisterInPointStack.Screen
        name="UserHistoryRegisterInPoint"
        component={UserHistoryRegisterInPoint}
      />
    </UserHistoryRegisterInPointStack.Navigator>
  );
}

export default UserHistoryRegisterInPointRoutes;