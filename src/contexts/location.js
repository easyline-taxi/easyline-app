import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { Alert } from "react-native";

const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(true);
  const LOCATION_TASK_NAME = "LOCATION_TRACKING";

  useEffect(() => {
    if (!locationServicesEnabled) {
      Alert.alert("Erro", "Habilite o serviço de localização para poder utilizar o app.");
    }
  }, [locationServicesEnabled]);

  useEffect(() => {
    (async () => {
      handleCheckLocationServicesEnabled();
      await initializeLocationTask();
    })();
  }, []);

  const initializeLocationTask = async () => {
    await useHandleLocationPermissions();

    await TaskManager.unregisterAllTasksAsync();
    await handleStartLocationUpdates();
  };

  function handleCheckLocationServicesEnabled() {
    setTimeout(async () => {
      const hasLocationServicesEnabled = await Location.hasServicesEnabledAsync();
      if (!hasLocationServicesEnabled) {
        if (locationServicesEnabled) setLocationServicesEnabled(false);
        setLocation(null);

        if (!(await useHandleLocationPermissions())) {
          Alert.alert(
            "Aviso",
            "Verifique se o serviço de localização está habilitado para você poder utilizar o app."
          );
        }
        await TaskManager.unregisterAllTasksAsync();
        try {
          await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
        } catch (err) {
          console.log(err);
        }
      } else if (!location) {
        await handleStartLocationUpdates();
      }

      if (!(await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME))) {
        await handleStartLocationUpdates();
      }

      handleCheckLocationServicesEnabled();
    }, 5000);
  }

  async function handleStartLocationUpdates() {
    try {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
        foregroundService: {
          notificationTitle: "EasyLine - Serviço de localização.",
          notificationBody: "A localização em tempo real está habilitada.",
        },
      });
    } catch (err) {
      console.log(`Error\n:${err}`);
    }

    TaskManager.defineTask(LOCATION_TASK_NAME, ({ data: { locations }, error }) => {
      if (error) {
        console.log(error);
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
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status === "granted") {
    console.log("Location permission granted.");
    return true;
  } else {
    console.log("Location permission not granted.");
    Alert.alert("Erro", "Não é possível utilizar o app com a permissão de localização desabilitada.");
  }
}
