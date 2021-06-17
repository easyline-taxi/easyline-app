import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { Button, Image, View, Platform, Alert } from "react-native";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
  JosefinSans_300Light,
} from "@expo-google-fonts/josefin-sans";
import * as S from "./styles";
import * as SecureStore from "expo-secure-store";

import api from "../../Services/api";

export default function UserInfo({ type }) {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);

  const [data, setData] = React.useState({});

  const getData = async () => {
    const token = await SecureStore.getItemAsync("token");
    let data1;
    try {
      data1 = await api("GET", "/users/data", null, token);
      await SecureStorage.setItemAsync("dataUser",JSON.stringify(data1.result))
      // const azul = JSON.parse((await SecureStorage.getItemAsync("dataUser")))
      setData(data1.result)
    } catch (err) {
      Alert.alert("ERRO", err)
      await SecureStore.deleteItemAsync("token");
    }
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();

    getData();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  let [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
    JosefinSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <S.Container type={type}>
      <S.AvatarContainer type={type}>
        <S.AvatarImage type={type} source={{ uri: image }} />
      </S.AvatarContainer>
      <S.UserDataContainer type={type}>
        <S.Title type={type} style={{ fontFamily: "JosefinSans_600SemiBold" }}>
          {type === "admin" && `Olá ${data.name}`}
          {type === "plans" && `Olá ${data.name}`}
          {type === "home" && `${data.name}`}
          {type === "user" && `${data.name}`}
          {type === "financeiro" && `${data.name}`}
        </S.Title>
        <S.UserType type={type} style={{ fontFamily: "JosefinSans_300Light" }}>
          {type === "admin" && "ADMINISTRADOR"}
          {type === "user" && `MOTORISTA - VTR ${data.vtr}`}
          {type === "home" && `MOTORISTA - VTR ${data.vtr}`}
          {type === "plans" && "É bom ve-lo(a) aqui novamente!"}
        </S.UserType>
      </S.UserDataContainer>
      {type == "user" && (
        <S.ContainerCam onPress={pickImage}>
          <S.TextCam>Alterar foto</S.TextCam>
          <Entypo name="camera" size={24} color="black" />
        </S.ContainerCam>
      )}

      {type == "admin" && (
        <S.Bottom onPress={() => navigation.navigate("FinanceiroStack")}>
          <S.TextBottom>Finaceiro</S.TextBottom>
        </S.Bottom>
      )}
    </S.Container>
  );
}
