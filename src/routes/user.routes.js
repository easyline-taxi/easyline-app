import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import User from '../screens/User';


const UserStack = createStackNavigator();

function UserRoutes() {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <UserStack.Screen name="User" component={User} />
    </UserStack.Navigator>
  );
}

export default UserRoutes;
