import { Animated, Image, ScrollView, StyleSheet, Text, View, componentDidMount, Button } from "react-native";
import { BackPage, Container, Texto, TopContainer } from "./styles";
import React, { Component, useEffect, useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";
import Line from "../Line";
import LinearGradient from "react-native-linear-gradient";
import Popup from "../Popup";
import { SwipeListView } from "react-native-swipe-list-view";
import api from "../../../../../Services/api";
import { useWebSocket } from "../../../../../contexts/websocket";

export default function LineCars() {
  const { webSocket, webSocketReadyState } = useWebSocket();
  const [lines, setLines] = useState([]);
  const [listData, setListData] = useState(
    Array(20)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  );
  useEffect(() => {
    // loadData();
  }, []);

  async function loadData() {
    const response = await api("POST", "api/users?page=2");

    const data = response.data.data.map((item, i) => ({
      key: i.toString(),
      id: item.id,
      image: item.avatar,
      position: item.id,
      name: item.first_name,
      vtr: item.last_name,
    }));
    console.log(data);
    setLines(data);
    console.log(data);
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

  const deleteRow = (rowMap, rowKey) => {
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
    <Line key={data.item.key} line={data.item} status={parseInt(data.item.key) < 5} />
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.containerButtons}>
      <View style={styles.tripularview}>
        <TouchableOpacity style={styles.backleftBtn} onPress={() => closeRow(rowMap, data.item.key)}>
          <View style={styles.arrowup}>
            <Text style={styles.backTextred}>Tripular</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowBack}>
        <TouchableOpacity style={styles.backRightBtnLeft} onPress={() => closeRow(rowMap, data.item.key)}>
          <View style={styles.arrowup}>
            <Text style={styles.backTextWhite}>Subir</Text>
            <AntDesign name="arrowup" size={20} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backRightBtnRight} onPress={() => deleteRow(rowMap, data.item.key)}>
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
            {/* <SwipeListView
              style={styles.swipelistview}
              data={lines}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              leftOpenValue={75}
              rightOpenValue={-150}
              previewRowKey={"0"}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              onRowDidOpen={onRowDidOpen}
              onSwipeValueChange={onSwipeValueChange}
            /> */}
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
