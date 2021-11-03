import React, { createContext, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const WebSocketContext = createContext({});

export const WebSocketProvider = ({ children }) => {
  const [webSocketReadyState, setWebSocketReadyState] = useState(0);
  const [webSocket, setWebSocket] = useState(null);
  const [socketMessagesData, setSocketMessagesData] = useState({});

  let socket;

  async function connectWebSocket() {
    if (webSocketReadyState === 1) return;

    const token = await SecureStore.getItemAsync("token");
    const socketConnectionURL = encodeURI(`ws://easyline.ml:8000/ws/row/?authorization=Bearer ${token}`);

    socket = new WebSocket(socketConnectionURL);
    setWebSocket(socket);

    socket.onopen = () => {
      console.log("Connected to server via websocket.");
      setWebSocketReadyState(socket.readyState);
    };

    socket.onerror = (e) => {
      console.log(`WS Connection Error: ${e.message}`);
    };

    socket.onclose = (e) => {
      console.log(
        `WS Connection closed. Trying to reconnect in 3 seconds...
        \nClosed due to the followed error:\n${JSON.stringify(e)}`
      );
      if (socket.readyState !== 1) {
        setTimeout(() => {
          setWebSocketReadyState(socket.readyState);
          connectWebSocket();
        }, 3000);
      }
    };

    socket.onmessage = (e) => {
      const receivedData = JSON.parse(JSON.stringify(e.data));
      setSocketMessagesData(receivedData);
    };
  }

  return (
    <WebSocketContext.Provider
      value={{ webSocket, connectWebSocket, webSocketReadyState, socketMessagesData }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export function useWebSocket() {
  const context = useContext(WebSocketContext);

  return context;
}
