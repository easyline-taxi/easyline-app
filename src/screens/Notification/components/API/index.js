import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import {
  Button,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, IconButton, TextInput } from "react-native-paper";
import React, { useEffect, useRef, useState } from "react";

import Constants from "expo-constants";
import Message from "../../components/Messages";
import { Modalize } from "react-native-modalize";
import { Picker } from "@react-native-community/picker";
import styles from "./styles";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const modalizeRef = useRef(null);

  const [selectedValue, setSelectedValue] = useState("java");

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [text, setText] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <ScrollView>
          {notification && (
            <View style={styles.containernotify}>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>
                  {notification && notification.request.content.title}
                </Text>
                <Text style={styles.message}>
                  {notification && notification.request.content.body}
                </Text>
                <View style={styles.dataHour}>
                  <Text>{expoPushToken}</Text>
                  <Text style={styles.date}>
                    {notification && notification.request.content.subtitle}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>

      <Modalize style={styles.modalize} ref={modalizeRef} snapPoint={500}>
        <View style={styles.modal}>
          <Text style={styles.text}>Enviar Notificação</Text>
          <View style={styles.input}>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 330 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Sem Urgência" value="java" />
                <Picker.Item label="Urgente" value="js" />
              </Picker>
            </View>
            <TextInput
              style={styles.mensagem}
              label="Digite a Mensagem"
              onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                await schedulePushNotification(text);
              }}
            >
              <Text style={styles.text}>Enviar Notificação</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>

      <View style={styles.icon}>
        <IconButton
          icon="plus"
          color={Colors.white}
          size={30}
          onPress={onOpen}
        />
      </View>
    </View>
  );
}

async function schedulePushNotification(text) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Sergio Camargo 📣",
      body: text,
      subtitle: Date().toString(),
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Você Deve usar dispositivo físico para notificações push");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
