import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import MessageBubble from "../MessageBubble";
import styles from "./styles";

// import { Container } from './styles';

const Conversations = ({ currentSendingMessage }) => {
  const scrollView = useRef(null);
  const [messagesList, setMessagesList] = useState(null);

  useEffect(() => {
    scrollView.current.scrollToEnd();
  }, [currentSendingMessage]);

  const isInitialMountSetMessages = useRef(true);
  useEffect(() => {
    if (isInitialMountSetMessages.current) {
      isInitialMountSetMessages.current = false;
    } else {
      currentSendingMessage && handleSetMessages();
    }
  }, [currentSendingMessage]);

  async function handleSetMessages() {
    setMessagesList([
      ...(messagesList ? messagesList : []),
      {
        text: currentSendingMessage,
        mine: false,
        image: require("../../../../../assets/man-300x300.png"),
        user: "Next",
        hourdate: "20:33 21/05/2020",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <>
        <ScrollView ref={scrollView}>
          <SafeAreaView>
            {messagesList &&
              messagesList.map((message, i) => (
                <MessageBubble
                  key={i}
                  text={message.text}
                  mine={message.mine}
                  image={message.image}
                  user={message.user}
                  hourdate={message.hourdate}
                />
              ))}
          </SafeAreaView>
        </ScrollView>
      </>
    </View>
  );
};

function mapStateToProps(state) {
  return { currentSendingMessage: state.chatMessageReducer.currentSendingMessage };
}

export default connect(mapStateToProps)(Conversations);
