import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  let locationWatch;

  useEffect(() => {
    positionMonitoring();
  }, []);

  const firstTimeoutUseEffectUpdate = useRef(true);
  useEffect(() => {
    /* If the location state doesn't change in x seconds provided in timeout, the location state will receive null value. */
    if (firstTimeoutUseEffectUpdate.current) {
      firstTimeoutUseEffectUpdate.current = false;
      return;
    }
    let locationNotReceivedTimeout = setTimeout(() => {
      locationWatch?.remove();
      useHandleLocationPermission();
      setLocation(null);
      positionMonitoring();
    }, 14000);
    return () => {
      clearTimeout(locationNotReceivedTimeout);
    };
  }, [location]);

  async function positionMonitoring() {
    try {
      locationWatch = await Location.watchPositionAsync(
        { accuracy: 6, timeInterval: 3000, distanceInterval: 0 },
        (newLocation) => {
          const { coords } = newLocation;
          setLocation({ ...coords, timestamp: Date.now() });
        }
      );
    } catch (err) {
      console.log("Error at position monitoring.");
    }
  }

  return (
    <LocationContext.Provider value={{ location, positionMonitoring }}>{children}</LocationContext.Provider>
  );
};

export function useLocation() {
  const context = useContext(LocationContext);

  return context;
}

export async function useHandleLocationPermission() {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === "granted") {
    console.log("Location permission granted.");
  } else {
    console.log("Location permission not granted.");
    Alert.alert("Erro", "Não é possível utilizar o app com a permissão de localização desabilitada.");
  }
}
