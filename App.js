import { AuthProvider } from "./src/contexts/auth";
import { LocationProvider } from "./src/contexts/location";
import { WebSocketProvider } from "./src/contexts/websocket";
import { LoadingSpinnerModalManagerProvider } from "./src/contexts/loadingSpinnerModalManager";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/routes";
import store from "./src/store";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <WebSocketProvider>
        <LocationProvider>
          <Provider store={store}>
            <LoadingSpinnerModalManagerProvider>
              <AuthProvider>
                <Routes />
              </AuthProvider>
            </LoadingSpinnerModalManagerProvider>
          </Provider>
        </LocationProvider>
      </WebSocketProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
