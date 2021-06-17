import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateAccout from '../screens/CreateAccount';


const CreateAccoutStack = createStackNavigator();

function CreateAccoutRoutes() {
  return (
    <CreateAccoutStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <CreateAccoutStack.Screen name="CreateAccout" component={CreateAccout} />
    </CreateAccoutStack.Navigator>
  );
}

export default CreateAccoutRoutes;
