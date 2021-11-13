import React from "react";
import normalize from "react-native-normalize";

import UserIcon from "../../../../assets/img/user-icon.svg";
import { useAuth } from "../../../contexts/auth";

import * as S from "./styles";

const UserInfoType1 = () => {
  const { user } = useAuth();

  function loadBase64() {
    if (!user.photo.includes("data:image")) {
      return "data:image/png;base64," + user.photo;
    } else {
      return user.photo;
    }
  }

  return (
    <S.UserInfo>
      <S.UserDetailsContainer>
        {user.photo ? (
          <S.AvatarImage source={{ uri: loadBase64() }} />
        ) : (
          <S.UserIconContainer>
            <UserIcon width={normalize(50)} height={normalize(50)} />
          </S.UserIconContainer>
        )}
        <S.UserDetailsMain>
          <S.Username>{user.name}</S.Username>
        </S.UserDetailsMain>
      </S.UserDetailsContainer>
    </S.UserInfo>
  );
};

export default UserInfoType1;
