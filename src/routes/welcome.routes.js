import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';


const WelcomeStack = createStackNavigator();

function WelcomeRoutes() {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <WelcomeStack.Screen name="Welcome" component={Welcome} />
    </WelcomeStack.Navigator>
  );
}

export default WelcomeRoutes;
