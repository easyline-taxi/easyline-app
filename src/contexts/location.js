import React, { createContext, useContext, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
    

};

export async function useHandleLocationPermission() {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === "granted") {
    console.log("Location permission granted.");
  } else {
    console.log("Location permission not granted.");
  }
}
