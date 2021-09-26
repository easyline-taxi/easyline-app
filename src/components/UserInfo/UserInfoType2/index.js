import React, { useState } from "react";
import normalize from "react-native-normalize";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import UserIcon from "../../../../assets/img/user-icon.svg";
import { useAuth } from "../../../contexts/auth";

import api from "../../../Services/api";

import * as S from "./styles";

const UserInfoType2 = ({
  positionType,
  borderColorHex,
  enableTogglePhoto,
  titleColor,
  subTitleColor,
  subTitleText,
  subTitleUppercase,
  beforeTitleText,
  afterTitleText,
}) => {
  const { user, updateUserData } = useAuth();

  async function requestImagePermission() {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Erro",
          "Para selecionar uma foto de perfil, a permissão de acesso às imagens precisa estar habilitada."
        );
      }
    }
  }

  const pickImage = async () => {
    try {
      await requestImagePermission();

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      if (!result.cancelled) {
        await api("PUT", "/user/", { photo: result.base64 });
        await updateUserData();

        Alert.alert("Sucesso", "Foto de perfil atualizada com sucesso!");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Erro", "Ocorreu um erro ao tentar atualizar a sua foto de perfil.");
    }
  };

  function loadBase64() {
    return "data:image/png;base64," + user.photo;
  }

  return (
    <S.UserInfo>
      <S.UserDetailsContainer style={positionType === "column" && { flexDirection: "column" }}>
        <S.ImageDetailsContainer>
          {user.photo ? (
            <S.AvatarImageContainer style={borderColorHex && { borderColor: borderColorHex }}>
              <S.AvatarImage source={{ uri: loadBase64() }} />
            </S.AvatarImageContainer>
          ) : (
            <S.AvatarImageContainer style={borderColorHex && { borderColor: borderColorHex }}>
              <S.UserIconContainer>
                <UserIcon width={normalize(50)} height={normalize(50)} />
              </S.UserIconContainer>
            </S.AvatarImageContainer>
          )}
          {positionType === "column" && enableTogglePhoto && (
            <S.CameraIconContainer onPress={pickImage}>
              <Entypo name="camera" size={24} color="black" />
            </S.CameraIconContainer>
          )}
        </S.ImageDetailsContainer>
        <S.UserDetailsMain style={positionType === "column" && { alignItems: "center", paddingLeft: 0 }}>
          <S.Username style={titleColor && { color: titleColor }}>
            {beforeTitleText && beforeTitleText}
            {user.name}
            {afterTitleText && afterTitleText}
          </S.Username>
          <S.SubTitle
            style={{
              ...(subTitleColor && { color: subTitleColor }),
              ...(subTitleUppercase && { textTransform: "uppercase" }),
            }}
          >
            {subTitleText || "Motorista"}
          </S.SubTitle>
        </S.UserDetailsMain>
      </S.UserDetailsContainer>
    </S.UserInfo>
  );
};

export default UserInfoType2;
