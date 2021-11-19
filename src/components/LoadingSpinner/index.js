import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Modal, Animated, Text, View } from "react-native";
import { connect } from "react-redux";

import * as S from "./styles";

const LoadingSpinner = ({ modalEnabled, spinColor, spinType }) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const [modalEnabledState, setModalEnabledState] = useState(false);

  useEffect(() => {
    setModalEnabledState(modalEnabled);
    if (modalEnabled) {
      openLoadingModal();
    } else {
      closeLoadingModal();
    }
  }, [modalEnabled]);

  const fadeIn = () => {
    fadeInAnimation.setValue(0);
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      console.log("Finished FadeIn");
    });
  };

  const fadeOut = () => {
    Animated.timing(fadeInAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      console.log("Finished FadeOut");
    });
  };

  const openLoadingModal = () => {
    fadeIn();
  };

  const closeLoadingModal = () => {
    fadeOut();
  };

  return (
    <S.Container style={spinType !== 1 && { position: "absolute" }}>
      {spinType === 1 ? (
        <ActivityIndicator color={spinColor || "#45108A"} size="large" />
      ) : (
        <Modal transparent={true} visible={modalEnabledState}>
          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0, 0.7)",
                opacity: fadeInAnimation,
                flex: 1,
                width: "100%",
              }}
            >
              <ActivityIndicator color={spinColor || "#45108A"} size="large" />
            </Animated.View>
          </View>
        </Modal>
      )}
    </S.Container>
  );
};

function mapStateToProps(state) {
  return { modalEnabled: state.LoadingSpinnerModalReducer.modalEnabled };
}

export default connect(mapStateToProps)(LoadingSpinner);
