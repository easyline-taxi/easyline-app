import React, { useState } from "react";
import { Buffer } from "buffer";
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
        const b64Example =
          "data:image/jpeg;base64,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";
        const splittedUri = result.uri.split(".");
        const fileType = splittedUri[splittedUri.length - 1].replace("jpg", "jpeg");
        const imageB64Data = `data:image/${fileType};base64,${result.base64}`;

        const decodedB64LengthInKiloBytes = Buffer.from(result.base64, "base64").byteLength;
        const bytesUploadLimit = 1000000;

        if (decodedB64LengthInKiloBytes < bytesUploadLimit) {
          await api("PUT", "/user/", { photo: imageB64Data });
          await updateUserData();

          Alert.alert("Sucesso", "Foto de perfil atualizada com sucesso!");
        } else {
          Alert.alert("Erro", "O limite máximo de upload de arquivos é 1MB.");
        }
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Erro", "Ocorreu um erro ao tentar atualizar a sua foto de perfil.");
    }
  };

  function loadBase64() {
    if (!user.photo.includes("data:image")) {
      return "data:image/png;base64," + user.photo;
    } else {
      return user.photo;
    }
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
