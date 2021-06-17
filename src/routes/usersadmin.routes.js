import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UsersAdmin from '../screens/UsersAdmin';


const UsersAdminStack = createStackNavigator();

function UsersAdminRoutes() {
  return (
    <UsersAdminStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <UsersAdminStack.Screen name="UsersAdmin" component={UsersAdmin} />
    </UsersAdminStack.Navigator>
  );
}

export default UsersAdminRoutes;
