import React from "react";

import UserInfoType1 from "./UserInfoType1";

export default function UserInfo({ type }) {
  return type === 1 ? <UserInfoType1 /> : <React.View></React.View>;
}
