import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Financeiro from '../screens/Financeiro';


const FinanceiroStack = createStackNavigator();

function FinanceiroRoutes() {
  return (
    <FinanceiroStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <FinanceiroStack.Screen name="Financeiro" component={Financeiro} />
    </FinanceiroStack.Navigator>
  );
}

export default FinanceiroRoutes;
