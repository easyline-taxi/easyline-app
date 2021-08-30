import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import * as Permissions from "expo-permissions";

import * as S from "./styles";

const ReadQRCode = () => {
  const [scanned, setScanned] = useState(false);
  const [hasCameraPermission, setCameraPermission] = useState(false);
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const QRCodePNG = require("../../../../../assets/img/qr-code.png");

  useEffect(() => {
    handleCameraPermission();
  }, []);

  useEffect(() => {
    if (scanned) {
      console.log(`Dados:\n${scanned}`);
    }
  }, [scanned]);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  async function handleCameraPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      setCameraPermission(true);
    } else {
      setCameraPermission(false);
      Alert.alert("Erro", "Não é possível escanear um QR Code com a permissão de câmera desabilitada.");
    }
  }

  function handleBarCodeScanned({ type, data }) {
    setScanned(data);
    onClose();
    navigation.navigate("UserHistoryRegisterInPointStack");
  }

  function handleReadQRCodeButtonPress() {
    setScanned(false);
    onOpen();
  }

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.Title>Escaneie o QR Code</S.Title>
          <S.SubTitle>Leia o código QR no celular do usuário que deseja cadastrar em seu ponto</S.SubTitle>
        </S.Header>
        <S.ExampleQRCodeContainer>
          <S.ExampleQRCodeImage width={200} height={200} source={QRCodePNG} />
        </S.ExampleQRCodeContainer>
        <S.ReadQRCodeButtonContainer>
          <S.ReadQRCodeButton onPress={handleReadQRCodeButtonPress}>
            <S.ReadQRCodeButtonText>
              <Feather name="camera" size={normalize(18)} color="black" /> Ler QR code
            </S.ReadQRCodeButtonText>
          </S.ReadQRCodeButton>
        </S.ReadQRCodeButtonContainer>
        <Modalize ref={modalizeRef} scrollViewProps={{ contentContainerStyle: { height: "100%" } }}>
          {hasCameraPermission && (
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              type={Camera.Constants.Type.back}
              style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <S.ScanTitle>Escanear QR Code</S.ScanTitle>
              <S.ScanSquare>
                <S.ScanSquareTopLeft />
                <S.ScanSquareTopRight />
                <S.ScanSquareBottomLeft />
                <S.ScanSquareBottomRight />
              </S.ScanSquare>
            </Camera>
          )}
        </Modalize>
      </S.Main>
    </S.Container>
  );
};

export default ReadQRCode;
