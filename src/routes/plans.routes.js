import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Plans from '../screens/Plans';


const PlansStack = createStackNavigator();

function PlansRoutes() {
  return (
    <PlansStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <PlansStack.Screen name="Plans" component={Plans} />
    </PlansStack.Navigator>
  );
}

export default PlansRoutes;
