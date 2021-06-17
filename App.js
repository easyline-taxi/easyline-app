import { AuthProvider } from './src/contexts/auth'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
