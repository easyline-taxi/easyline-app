import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreatePoints from "../screens/CreatePoints";

const CreatePointsStack = createStackNavigator();

function CreatePointsRoutes() {
  return (
    <CreatePointsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CreatePointsStack.Screen name="CreatePoints" component={CreatePoints} />
    </CreatePointsStack.Navigator>
  );
}

export default CreatePointsRoutes;
