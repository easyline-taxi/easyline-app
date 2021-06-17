import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Admin from '../screens/Admin';


const AdminStack = createStackNavigator();

function AdminRoutes() {
  return (
    <AdminStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AdminStack.Screen name="Admin" component={Admin} />
    </AdminStack.Navigator>
  );
}

export default AdminRoutes;
