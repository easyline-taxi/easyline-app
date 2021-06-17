import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notification from '../screens/Notification';


const NotificationStack = createStackNavigator();

function NotificationRoutes() {
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <NotificationStack.Screen name="Notification" component={Notification} />
    </NotificationStack.Navigator>
  );
}

export default NotificationRoutes;
