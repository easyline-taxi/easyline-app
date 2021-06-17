import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QRcode from '../screens/QRcode';


const QRcodeStack = createStackNavigator();

function QRcodeRoutes() {
  return (
    <QRcodeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <QRcodeStack.Screen name="QRcode" component={QRcode} />
    </QRcodeStack.Navigator>
  );
}

export default QRcodeRoutes;
