import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as TaskManager from "expo-task-manager";
import { Alert } from "react-native";

const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const LOCATION_TASK_NAME = "LOCATION_TRACKING";

  useEffect(() => {
    (async () => {
      await initializeLocationTask();
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        const hasServicesEnabledRes = await Location.hasServicesEnabledAsync();
        if (!hasServicesEnabledRes) {
          setLocation(null);
          Alert.alert("Erro", "Habilite o serviço de localização e reinicie o app para poder utilizá-lo.");
          await useHandleLocationPermissions();
          await TaskManager.unregisterAllTasksAsync();
        }
        if (!(await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME))) {
          await handleStartLocationUpdates();
        }
      })();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const initializeLocationTask = async () => {
    await useHandleLocationPermissions();

    await TaskManager.unregisterAllTasksAsync();
    await handleStartLocationUpdates();
  };

  async function handleStartLocationUpdates() {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.BestForNavigation,
      foregroundService: {
        notificationTitle: "EasyLine - Serviço de localização.",
        notificationBody: "A localização em tempo real está habilitada.",
      },
    });

    console.log(await TaskManager.isTaskRegisteredAsync(LOCATION_TASK_NAME));

    TaskManager.defineTask(LOCATION_TASK_NAME, ({ data: { locations }, error }) => {
      if (error) {
        setLocation(null);
        return;
      }
      setLocation({ ...locations[0].coords, timestamp: locations[0].timestamp });
    });
  }

  return <LocationContext.Provider value={{ location }}>{children}</LocationContext.Provider>;
};

export function useLocation() {
  const context = useContext(LocationContext);

  return context;
}

export async function useHandleLocationPermissions() {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === "granted") {
    console.log("Location permission granted.");
  } else {
    console.log("Location permission not granted.");
    Alert.alert("Erro", "Não é possível utilizar o app com a permissão de localização desabilitada.");
  }
}
