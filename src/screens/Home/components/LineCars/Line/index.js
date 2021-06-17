import * as S from "./styles";

import {
  Alert,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
            <TextVtr>{vtr}</TextVtr>
            <Text>{name}</Text>
            <Text>{position}</Text>
          </InfoContainer>
        </LongPressGestureHandler>
      </Container>
    </>
  );
};

export default Line;
