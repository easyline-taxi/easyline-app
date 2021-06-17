import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LiveMap from '../screens/LiveMap';


const LiveMapStack = createStackNavigator();

function LiveMapRoutes() {
  return (
    <LiveMapStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <LiveMapStack.Screen name="LiveMap" component={LiveMap} />
    </LiveMapStack.Navigator>
  );
}

export default LiveMapRoutes;
