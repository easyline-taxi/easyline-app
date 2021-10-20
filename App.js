import { AuthProvider } from "./src/contexts/auth";
import { LocationProvider } from "./src/contexts/location";
import { WebSocketProvider } from "./src/contexts/websocket";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <WebSocketProvider>
        <LocationProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </LocationProvider>
      </WebSocketProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
