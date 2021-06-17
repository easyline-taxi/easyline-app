import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/Splash';


const SplashStack = createStackNavigator();

function SplashRoutes() {
  return (
    <SplashStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <SplashStack.Screen name="Splash" component={Splash} />
    </SplashStack.Navigator>
  );
}

export default SplashRoutes;
