import React from "react";

import UserInfoType1 from "./UserInfoType1";
import UserInfoType2 from "./UserInfoType2";

export default function UserInfo({ type }) {
  return type === 1 ? <UserInfoType1 /> : <UserInfoType2 />;
}
