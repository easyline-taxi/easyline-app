import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";

import * as S from "./styles";

import PointCard from "../PointCard";

const UserHistory = ({ memberData }) => {
  const navigation = useNavigation();

  console.log("ScannedMemberData\n\n");
  console.log(memberData);

  const user = {
    data: {
      image: "https://thispersondoesnotexist.com/image",
      accountCreatedAt: "10 meses",
      cpf: "025.878.315-15",
      name: "Hugo Verweij Silva",
      driverPoints: [
        {
          pointName: "Ipanema Top Táxi",
          joinedAt: "22 ago 21",
          mannedTimes: 162,
          activeHours: 498,
          bannedTimes: 0,
        },
        {
          pointName: "LC Táxi",
          joinedAt: "22 ago 21",
          mannedTimes: 7,
          activeHours: 1098,
          bannedTimes: 0,
        },
        {
          pointName: "Almirante Barroso",
          joinedAt: "3 ago 21",
          mannedTimes: 22,
          activeHours: 38,
          bannedTimes: 5,
        },
      ],
    },
  };

  function handleRegisterNewDriverButton() {
    navigation.navigate("RegisterInPointAdminStack");
  }

  function RegisterDriverButton() {}

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.RegisterNewDriverButton onPress={handleRegisterNewDriverButton}>
            <S.RegisterNewDriverButtonTexT>
              <AntDesign name="adduser" size={20} color="black" /> Cadastrar novo motorista
            </S.RegisterNewDriverButtonTexT>
          </S.RegisterNewDriverButton>
          <S.UserInfo>
            <S.UserDetailsContainer>
              <S.AvatarImageContainer>
                <S.AvatarImage source={{ uri: user.data.image }} />
                <S.BadgeContainer>
                  <FontAwesome name="trophy" size={16} color="black" style={{ color: "#00000049" }} />
                </S.BadgeContainer>
              </S.AvatarImageContainer>
              <S.UserDetailsMain>
                <S.Username>{user.data.name}</S.Username>
                <S.UserDetailsSub>
                  <S.SimpleSmallText>CPF: {user.data.cpf}</S.SimpleSmallText>
                  <S.SimpleSmallText>Há {user.data.accountCreatedAt} no app</S.SimpleSmallText>
                </S.UserDetailsSub>
              </S.UserDetailsMain>
            </S.UserDetailsContainer>
          </S.UserInfo>
        </S.Header>
        <S.Divisor />
        <S.MainScrollView>
          <S.PointsInfoContainer>
            <S.PointsInfoTitle>Histórico / Trajetória</S.PointsInfoTitle>
            <S.PointsInfo>
              {user.data.driverPoints.map((point, i) => (
                <PointCard
                  key={i}
                  cardPointTitle={point.pointName}
                  CardPointJoinedDate={point.joinedAt}
                  cardPointBannedTimes={point.bannedTimes}
                  cardPointMannedTimes={point.mannedTimes}
                  cardPointActiveHours={point.activeHours}
                />
              ))}
            </S.PointsInfo>
          </S.PointsInfoContainer>
        </S.MainScrollView>
        <S.RegisterDriverButton onPress={RegisterDriverButton}>
          <S.RegisterDriverButtonText>Cadastrar Motorista</S.RegisterDriverButtonText>
        </S.RegisterDriverButton>
      </S.Main>
    </S.Container>
  );
};

function mapStateToProps(state) {
  return { memberData: state.memberUserInfoReducer.data };
}

export default connect(mapStateToProps)(UserHistory);
