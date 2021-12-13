import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  componentDidMount,
  Button,
} from "react-native";
import { BackPage, Container, Texto, TopContainer } from "./styles";
import React, { Component, useEffect, useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";
import Line from "../Line";
import LinearGradient from "react-native-linear-gradient";
import Popup from "../Popup";
import api from "../../../../../Services/api";
import { SwipeListView } from "react-native-swipe-list-view";
import { useLoadingSpinnerModalManager } from "../../../../../contexts/loadingSpinnerModalManager";
import { useWebSocket } from "../../../../../contexts/websocket";
import { useAuth } from "../../../../../contexts/auth";

export default function LineCars() {
  const { socketMessagesData } = useWebSocket();
  const { currentPointFunction } = useAuth();
  const { enableLoadingSpinnerModal, disableLoadingSpinnerModal } = useLoadingSpinnerModalManager();
  const [lines, setLines] = useState([]);
  const [listData, setListData] = useState(
    Array(20)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  );
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (socketMessagesData.event === "POINT_ROW_CHANGED") {
      console.log("POINT ROW CHANGED");
      loadData();
    }
  }, [socketMessagesData]);

  async function loadData() {
    try {
      const { data } = await api("GET", "/point/row/");

      const lineData = data.map((driver, i) => ({
        key: i.toString(),
        id: driver.id,
        position: `${driver.position}°`,
        name: driver.user.name,
        image: driver.user.photo,
        vtr: `VTR ${driver.user.vtr || ""}`,
        user_id: driver.user_id,
      }));

      setLines(lineData);
    } catch (err) {
      console.log(`Error at LineCars API req:\n${err}`);
    }
  }

  async function moveUserRow(userData, positionHeading) {
    try {
      enableLoadingSpinnerModal();
      const currentPos = Number(userData.position.replace(/\D/g, ""));
      const positionForMove = positionHeading == "up" ? currentPos - 1 : currentPos + 1;
      console.log(positionForMove);

      await api("PUT", "/point/row/", {
        user: userData.user_id,
        position: positionForMove,
      });
      disableLoadingSpinnerModal();
    } catch (err) {
      disableLoadingSpinnerModal();
      Alert.alert("Erro", "Ocorreu um erro ao tentar movimentar o usuário na fila.");
    }
  }

  async function manUserRow(userId) {
    try {
      enableLoadingSpinnerModal();
      await api("POST", "/point/row/", { user: userId });
      disableLoadingSpinnerModal();
      Alert.alert("Sucesso!", "Usuário tripulado com sucesso.");
    } catch (err) {
      disableLoadingSpinnerModal();
      console.log(err);
      Alert.alert("Erro", "Ocorreu um erro ao tentar tripular o usuário.");
    }
  }

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const rowSwipeAnimatedValues = {};
  Array(20)
    .fill("")
    .forEach((_, i) => {
      rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });

  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const deleteRow = (rowMap, rowKey, userRowData) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <View>
      <Line key={data.item.key} line={data.item} status={parseInt(data.item.key) < 5} />
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.containerButtons}>
      <View style={styles.tripularview}>
        <TouchableOpacity
          style={styles.backleftBtn}
          onPress={() => {
            closeRow(rowMap, data.item.key);
            manUserRow(data.item.user_id);
          }}
        >
          <View style={styles.arrowup}>
            <Text style={styles.backTextred}>Tripular</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={styles.backRightBtnLeft}
          onPress={() => {
            closeRow(rowMap, data.item.key);
            moveUserRow(data.item, "up");
          }}
        >
          <View style={styles.arrowup}>
            <Text style={styles.backTextWhite}>Subir</Text>
            <AntDesign name="arrowup" size={20} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backRightBtnRight}
          onPress={() => {
            deleteRow(rowMap, data.item.key);
            moveUserRow(data.item, "down");
          }}
        >
          <View style={styles.arrodown}>
            <Text style={styles.backTextWhite}>Descer</Text>
            <AntDesign name="arrowdown" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <BackPage>
      <TopContainer>
        <Container>
          <Texto>FILA DE VTR'S</Texto>
          <View style={styles.container}>
            <SwipeListView
              style={styles.swipelistview}
              data={lines}
              renderItem={renderItem}
              renderHiddenItem={
                currentPointFunction === "A" || currentPointFunction === "P" ? renderHiddenItem : () => {}
              }
              leftOpenValue={75}
              rightOpenValue={-150}
              previewRowKey={"0"}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              onRowDidOpen={onRowDidOpen}
              onSwipeValueChange={onSwipeValueChange}
            />
          </View>
        </Container>
      </TopContainer>
    </BackPage>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  containerButtons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backTextWhite: {
    color: "#fff",
    paddingRight: 5,
  },
  backTextred: {
    color: "#fff",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    backgroundColor: "#fff",

    flexDirection: "row",
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  tripularview: {
    marginLeft: 5,
  },
  arrowup: {
    flexDirection: "row",
  },
  arrodown: {
    flexDirection: "row",
  },
  backleftBtn: {
    backgroundColor: "darkred",
    paddingTop: 13,
    paddingBottom: 13,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 10,
    alignItems: "center",
  },
  backRightBtnLeft: {
    backgroundColor: "#4DCF8B",
    paddingTop: 13,
    paddingBottom: 13,
    marginRight: 1,
    padding: 5,
  },
  backRightBtnRight: {
    backgroundColor: "#F36F6F",
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomRightRadius: 15,
    borderTopEndRadius: 15,
    marginRight: 2,
    padding: 5,
  },
  trash: {
    height: 25,
    width: 25,
  },
});
