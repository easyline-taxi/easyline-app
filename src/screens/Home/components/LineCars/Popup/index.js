import {
  Menu,
  MenuContext,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default class Popup extends Component {
  render() {
    return (
      <MenuContext style={styles.container}>
        <Menu>
          <MenuTrigger>
            <Ionicons name="md-more" size={24} color="black" />
          </MenuTrigger>

          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      </MenuContext>
    );
  }
}
