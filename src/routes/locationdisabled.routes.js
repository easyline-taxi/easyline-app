import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';

const LocationDisabledStack = createStackNavigator();

function LocationDisabledRoutes() {
  return (
    <LocationDisabledStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <LocationDisabledStack.Screen name="LocationDisabled" component={Welcome} />
    </LocationDisabledStack.Navigator>
  );
}

export default LocationDisabledRoutes;
