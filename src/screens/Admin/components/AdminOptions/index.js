import React, { useCallback } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons, EvilIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Linking, Alert } from "react-native";

import api from "../../../../Services/api";
import { useLoadingSpinnerModalManager } from "../../../../contexts/loadingSpinnerModalManager";

export default function AdminOptions() {
  const navigation = useNavigation();
  const { enableLoadingSpinnerModal, disableLoadingSpinnerModal } = useLoadingSpinnerModalManager();

  function handleDeletePoint() {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja deletar o ponto atual?",
      [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => {
            try {
              enableLoadingSpinnerModal();
              api("DELETE", "/admin/config");
              navigation.navigate("PointsManagerStack");
              disableLoadingSpinnerModal();
            } catch (err) {
              console.log(`Error trying to delete point:\n${err}`);
            }
          },
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <S.Container>
      <S.TextContainer>
        <S.TextOptions>Administração</S.TextOptions>
      </S.TextContainer>
      <S.OptionsTop>
        <S.Buttom onPress={handleDeletePoint}>
          <S.Btn>
            <EvilIcons name="location" size={30} color="white" />
          </S.Btn>
        </S.Buttom>
        <S.Buttom onPress={() => navigation.navigate("UsersAdminStack")}>
          <S.Btn>
            <Feather name="user" size={30} color="white" />
          </S.Btn>
        </S.Buttom>
        <S.Buttom onPress={() => navigation.navigate("NotificationStack")}>
          <S.Btn>
            <Ionicons name="ios-notifications-outline" size={30} color="white" />
          </S.Btn>
        </S.Buttom>
      </S.OptionsTop>
      <S.ContainerTextBtn>
        <S.Btn>
          <S.TextBtn>Deletar ponto</S.TextBtn>
        </S.Btn>
        <S.Btn>
          <S.TextBtn>Usuários</S.TextBtn>
        </S.Btn>
        <S.Btn>
          <S.TextBtn>Enviar notificações</S.TextBtn>
        </S.Btn>
      </S.ContainerTextBtn>
      <S.OptionsBottom>
        <S.Buttom onPress={() => navigation.navigate("PlansStack")}>
          <S.Btn>
            <EvilIcons name="cart" size={30} color="white" />
          </S.Btn>
        </S.Buttom>
        <S.Buttom
          onPress={() => {
            Linking.openURL(
              "https://api.whatsapp.com/send?l=pt-BR&phone=55021970015936&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20o%20app%20Easy%20Line."
            );
          }}
        >
          <S.Btn>
            <SimpleLineIcons name="question" size={30} color="white" />
          </S.Btn>
        </S.Buttom>
        <S.Buttom onPress={() => navigation.navigate("LiveMapStack")}>
          <S.Btn>
            <SimpleLineIcons name="map" size={30} color="white" />
          </S.Btn>
        </S.Buttom>
      </S.OptionsBottom>
      <S.ContainerTextBtn>
        <S.Btn>
          <S.TextBtn>Mudar de Plano</S.TextBtn>
        </S.Btn>
        <S.Btn>
          <S.TextBtn>Suporte</S.TextBtn>
        </S.Btn>
        <S.Btn>
          <S.TextBtn>Mapa ao vivo</S.TextBtn>
        </S.Btn>
      </S.ContainerTextBtn>
    </S.Container>
  );
}
