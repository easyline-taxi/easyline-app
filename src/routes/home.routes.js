import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';


const HomeStack = createStackNavigator();

function HomeRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export default HomeRoutes;
