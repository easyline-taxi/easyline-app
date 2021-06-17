import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

import MessageBubble from "../MessageBubble";
import styles from "./styles";

// import { Container } from './styles';

const Conversations = () => {
  const scrollView = useRef(null);

  useEffect(() => {
    scrollView.current.scrollToEnd();
  }, []);

  return (
    <View style={styles.container}>
      <>
        <ScrollView ref={scrollView}>
          <SafeAreaView>
            <MessageBubble
              text="Olá mundooooooooooo 😀😀"
              mine
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao Rodrigues"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="tudo bem com você? 😉 👍"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              mine
              text="Comigo sim, graças a Deus 😍 Comigo sim, graças a Deus 😍 Comigo sim, graças a Deus 😍"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="Que bom fico feliz!"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              text="Olá mundo ❤️😈😘🙉"
              mine
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="tudo bem com você?"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              mine
              text="Comigo sim, graças a Deus"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="Que bom fico feliz!"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              text="Olá mundo"
              mine
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="tudo bem com você?"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              mine
              text="Comigo sim, graças a Deus"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="Que bom fico feliz!"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
            <MessageBubble
              not_mine
              text="Bruno lixoooooooooooooo !"
              image={require("../../../../../assets/man-300x300.png")}
              user="Thiagozao"
              hourdate="20:33 21/05/2020"
            />
          </SafeAreaView>
        </ScrollView>
      </>
    </View>
  );
};

export default Conversations;
