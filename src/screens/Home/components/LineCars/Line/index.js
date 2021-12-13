import * as S from "./styles";

import { Alert, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Container, InfoContainer, TextVtr } from "./styles";
import { Colors, IconButton } from "react-native-paper";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";
import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import Popup from "../Popup";
import styles from "./styles";

const Line = ({ line, status }) => {
  const { image, position, vtr, name } = line;

  return (
    <>
      <Container>
        <LongPressGestureHandler
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              Alert.alert("Fernando VTR: 015", "Selecione uma opção", [
                {
                  text: "Cancelar",
                },
                {
                  text: "Tripular",
                },
                {
                  text: "Subir",
                },
                {
                  text: "Descer",
                },
              ]);
            }
          }}
        >
          <InfoContainer status={status}>
            <Avatar source={{ uri: image }} />
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                flex: 1,
                paddingHorizontal: "5%",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextVtr>{vtr}</TextVtr>
                <Text style={{ textTransform: "uppercase" }}>{name}</Text>
              </View>
              <Text>{position}</Text>
            </View>
          </InfoContainer>
        </LongPressGestureHandler>
      </Container>
    </>
  );
};

export default Line;
