import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import api from "../../../../Services/api";

import { useAuth } from "../../../../contexts/auth";
import { useLoadingSpinnerModalManager } from "../../../../contexts/loadingSpinnerModalManager";
import { useWebSocket } from "../../../../contexts/websocket";

import * as S from "./styles";

const StatusBar = () => {
  const [tripulado, setTripulado] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentDistance, setCurrentDistance] = useState(null);
  const { enableLoadingSpinnerModal, disableLoadingSpinnerModal } = useLoadingSpinnerModalManager();
  const { user } = useAuth();
  const { socketMessagesData } = useWebSocket();

  useEffect(() => {
    const currentMannedStatus = tripulado ? "TRI" : "DIS";

    changeMannedStatus(currentMannedStatus);
  }, [tripulado]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (socketMessagesData.event === "POINT_ROW_CHANGED") {
      loadData();
    }
    if (socketMessagesData.detail === "LOCATION_UPDATED") {
      const distanceToPointCenterInKm = (1000 * socketMessagesData.response.distance).toFixed(1);
      setCurrentDistance(distanceToPointCenterInKm);
    }
  }, [socketMessagesData]);

  async function loadData() {
    const { data } = await api("GET", "/point/row/");
    console.log(data);
    setCurrentPosition(data.filter((driver) => driver.user_id === user.user_id).position);
  }

  function handleLivre() {
    setTripulado(false);
  }

  function handleTripulado() {
    setTripulado(true);
  }

  async function changeMannedStatus(mannedStatus) {
    try {
      enableLoadingSpinnerModal();
      await api("PUT", "/user/", { status: mannedStatus });
      disableLoadingSpinnerModal();
    } catch (err) {
      disableLoadingSpinnerModal();
      Alert.alert("Erro", "Ocorreu um erro ao tentar atualizar o seu status de tripulado.");
    }
  }

  return (
    <S.Container>
      <S.Box>
        <S.Text size={11}>Distância da PA</S.Text>
        <S.Text size={21}>{currentDistance || "Calculando..."}km</S.Text>
      </S.Box>
      <S.Box>
        <S.Text size={11}>Posição na fila</S.Text>
        <S.Text size={21}>{currentPosition || "Calculando..."}</S.Text>
      </S.Box>
      <S.Button onPress={handleLivre} enabled={tripulado ? true : false}>
        <S.Text size={11}>Livre</S.Text>
        <Ionicons name="md-car" size={30} color={tripulado ? "#999" : "#298B4A"} />
      </S.Button>
      <S.Button onPress={handleTripulado} enabled={tripulado ? false : true}>
        <S.Text size={11}>Tripulado</S.Text>
        <Ionicons name="md-car" size={30} color={tripulado ? "#DC4E4E" : "#999"} />
      </S.Button>
    </S.Container>
  );
};

export default StatusBar;
