import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PointsManagerStack from "./pointsmanager.routes";
import TabStack from "./tab.routes";
import AdminStack from "./admin.routes";
import Notification from "./notifications.routes";
import UsersAdmin from "./usersadmin.routes";
import Financeiro from "./financeiro.routes";
import Plans from "./plans.routes";
import QRcode from "./qrcode.routes";
import Splash from "./splash.routes";
import LiveMap from "./livemap.routes";
import { initialWindowMetrics } from "react-native-safe-area-context";

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="SplashStack" component={Splash} />
      <AppStack.Screen name="PointsManagerStack" component={PointsManagerStack} />
      <AppStack.Screen name="TabStack" component={TabStack} />
      <AppStack.Screen name="AdminStack" component={AdminStack} />
      <AppStack.Screen name="NotificationStack" component={Notification} />
      <AppStack.Screen name="UsersAdminStack" component={UsersAdmin} />
      <AppStack.Screen name="FinanceiroStack" component={Financeiro} />
      <AppStack.Screen name="PlansStack" component={Plans} />
      <AppStack.Screen name="QRcodeStack" component={QRcode} />
      <AppStack.Screen name="LiveMapStack" component={LiveMap} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
