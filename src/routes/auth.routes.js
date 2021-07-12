import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./splash.routes";
import Login from "./login.routes";
import Welcome from "./welcome.routes";
import CreateAccout from "./createaccount.routes";
import RecoverPassword from "./recoverpassword.routes";
import { initialWindowMetrics } from "react-native-safe-area-context";

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SplashStack" component={Splash} />
      <AuthStack.Screen name="WelcomeStack" component={Welcome} />
      <AuthStack.Screen name="CreateAccoutStack" component={CreateAccout} />
      <AuthStack.Screen name="LoginStack" component={Login} />
      <AuthStack.Screen name="RecoverPasswordStack" component={RecoverPassword} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
