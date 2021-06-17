import React from "react";

import ContainerPage from "../../components/ContainerPage";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import StatusBar from "./components/StatusBar";
import LineCars from "./components/LineCars/API";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    (async () => {
      const token = await SecureStore.getItemAsync("token");
      if (!token) {
        Alert.alert("Sessão Expirada", "Faça login novamente! " + token);
        navigation.navigate("Welcome");
      }
    })();
  }, []);

  return (
    <ContainerPage>
      <Header />
      <S.Container>
        <UserInfo type="home" />
        <StatusBar />
        <LineCars />
      </S.Container>
    </ContainerPage>
  );
}
