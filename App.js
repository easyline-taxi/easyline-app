import { AuthProvider } from "./src/contexts/auth";
import { LocationProvider } from "./src/contexts/location";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <LocationProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LocationProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
