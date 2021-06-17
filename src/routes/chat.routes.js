import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../screens/Chat';


const ChatStack = createStackNavigator();

function ChatRoutes() {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

export default ChatRoutes;
