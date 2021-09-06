import React from "react";
import normalize from "react-native-normalize";

import UserIcon from "../../../../assets/img/user-icon.svg";
import { useAuth } from "../../../contexts/auth";

import * as S from "./styles";

const UserInfoType2 = () => {
  const { user } = useAuth();

  return (
    <S.UserInfo>
      <S.AvatarImageContainer>
        {user.photo ? (
          <S.AvatarImage source={{ uri: user.photo }} />
        ) : (
          <S.UserIconContainer>
            <UserIcon width={normalize(50)} height={normalize(50)} />
          </S.UserIconContainer>
        )}
      </S.AvatarImageContainer>
      <S.UserDetails>
        <S.Username>{user.name}</S.Username>
        <S.SubTitle>Bom trabalho em seu novo ponto!</S.SubTitle>
      </S.UserDetails>
    </S.UserInfo>
  );
};

export default UserInfoType2;
