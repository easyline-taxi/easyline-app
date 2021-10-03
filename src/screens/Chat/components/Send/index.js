import React, { useState } from "react";
import { View, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { IconButton, Colors } from "react-native-paper";
import { bindActionCreators } from "redux";

import "../../../../Config/ReactotronConfig";
import styles from "./styles";
//import StatusBar from './StatusBar';
//import LineCars from './LineCars/cars';

import * as ChatMessageActions from "../../../../store/actions/chatMessage";

const Send = ({ currentSendingMessages, sendMessageAction }) => {
  const [message, setMessage] = useState("");

  function handleSendMessage(message) {
    setMessage("");
    sendMessageAction(message);
  }

  return (
    <View style={styles.send}>
      <View style={styles.input}>
        <TextInput
          style={styles.nome}
          value={message}
          placeholder="Digite sua mensagem..."
          mode="outlined"
          label="Nome"
          onChangeText={setMessage}
        />
      </View>
      <View>
        <IconButton
          style={styles.sendButton}
          icon="send"
          color={Colors.grey700}
          size={35}
          onPress={() => handleSendMessage(message)}
        />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return { currentSendingMessage: state.chatMessageReducer.currentSendingMessage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChatMessageActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Send);
