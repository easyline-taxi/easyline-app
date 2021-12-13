import * as S from "./styles";

import React, { Component } from "react";

import Slider from "react-native-slider";
import { StyleSheet } from "react-native";

export default class SliderPage extends Component {
  state = {
    value: 20,
  };

  render() {
    return (
      <S.Container>
        <S.SubContainer>
          <Slider
            minimumValue={20}
            maximumValue={400}
            minimumTrackTintColor="#8E56FF"
            maximumTrackTintColor="#C98DF1"
            step={20}
            value={20}
            thumbStyle={{
              width: 40,
              height: 40,
              backgroundColor: "transparent",
              paddingBottom: 80,
            }}
            thumbImage={require("../../../../../assets/pin.png")}
            value={this.state.value}
            onValueChange={(value) => this.setState({ value })}
          />

          <S.Value>Ditância: {this.state.value} Mt's</S.Value>
        </S.SubContainer>
      </S.Container>
    );
  }
}
