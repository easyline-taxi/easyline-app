import React from "react";
import normalize from "react-native-normalize";

import UserIcon from "../../../../assets/img/user-icon.svg";
import { useAuth } from "../../../contexts/auth";

import * as S from "./styles";

const UserInfoType2 = ({ positionType, borderColorHex }) => {
  const { user } = useAuth();

  return (
    <S.UserInfo>
      <S.UserDetailsContainer style={positionType === "column" && { flexDirection: "column" }}>
        {user.photo ? (
          <S.AvatarImageContainer>
            <S.AvatarImage source={{ uri: user.photo }} />
          </S.AvatarImageContainer>
        ) : (
          <S.AvatarImageContainer style={borderColorHex && { borderColor: borderColorHex }}>
            <S.UserIconContainer>
              <UserIcon width={normalize(50)} height={normalize(50)} />
            </S.UserIconContainer>
          </S.AvatarImageContainer>
        )}
        <S.UserDetailsMain style={positionType === "column" && { alignItems: "center", paddingLeft: 0 }}>
          <S.Username>{user.name}</S.Username>
          <S.SubTitle>Motorista</S.SubTitle>
        </S.UserDetailsMain>
      </S.UserDetailsContainer>
    </S.UserInfo>
  );
};

export default UserInfoType2;
