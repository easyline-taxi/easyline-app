import React, { useEffect } from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import LocationDisabledRoutes from "./locationdisabled.routes";

import { useAuth } from "../contexts/auth";
import { useLocation } from "../contexts/location";
import { useWebSocket } from "../contexts/websocket";

function Routes() {
  const { signed } = useAuth();
  const { location } = useLocation();
  const { webSocket, webSocketReadyState } = useWebSocket();
  const locationTrue = true; // Temporário

  useEffect(() => {
    if (location && webSocketReadyState === 1 && signed) {
      const WebSocketJSONLocation = JSON.stringify({
        action: "SET_LOCALE",
        params: {
          coordinate: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
        },
      });

      try {
        webSocket.send(WebSocketJSONLocation);
      } catch (err) {
        console.log(`Error trying to send location websocket payload to server:\n${err}`);
      }
    }
  }, [location]);

  return (
    <>
      {signed && locationTrue ? (
        <AppRoutes />
      ) : !signed && locationTrue ? (
        <AuthRoutes />
      ) : (
        <LocationDisabledRoutes />
      )}
    </>
  );
}

export default Routes;
