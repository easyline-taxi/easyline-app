import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RecoverPassword from '../screens/RecoverPassword';


const RecoverPasswordStack = createStackNavigator();

function RecoverPasswordRoutes() {
  return (
    <RecoverPasswordStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <RecoverPasswordStack.Screen name="RecoverPassword" component={RecoverPassword} />
    </RecoverPasswordStack.Navigator>
  );
}

export default RecoverPasswordRoutes;
