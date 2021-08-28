import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Main = styled.View`
  border-top-right-radius: ${normalize(25)}px;
  border-top-left-radius: ${normalize(25)}px;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  background-color: #ffffff;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Divisor = styled.View`
  width: 95%;
  height: 1px;
  background-color: #1c1c1e55;
  margin: 4%;
`;

export const RegisterNewDriverButton = styled.TouchableOpacity`
  width: 90%;
  height: ${normalize(40)}px;
  align-items: center;
  justify-content: center;
  border-color: #707070;
  border-width: 0.3px;
  border-radius: 9px;
  margin-top: 4%;
`;

export const RegisterNewDriverButtonTexT = styled.Text`
  font-size: ${normalize(20)}px;
  color: #707070;
`;

export const UserInfo = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
`;

export const UserDetailsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AvatarImageContainer = styled.View``;

export const AvatarImage = styled.Image`
  height: ${normalize(106)}px;
  width: ${normalize(108)}px;
  border-radius: 58px;
  border-width: 1px;
  border-color: #34c759;
`;

export const BadgeContainer = styled.View`
  height: ${normalize(36)}px;
  width: ${normalize(36)}px;
  background-color: #fee46b;
  border-color: #ffffff;
  border-width: 3px;
  border-radius: 50px;
  position: absolute;
  right: -8px;
  align-items: center;
  justify-content: center;
`;

export const UserDetailsMain = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Username = styled.Text`
  font-size: ${normalize(31)}px;
  color: #000;
`;

export const UserDetailsSub = styled.View`
  align-items: flex-start;
  align-self: flex-start;
`;

export const SimpleSmallText = styled.Text`
  font-size: ${normalize(16)}px;
  color: #1c1c1e55;
`;

export const MainScrollView = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
}))`
  flex: 1;
  flex-grow: 1;
  width: 100%;
`;

export const PointsInfoContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  flex: 1;
`;

export const PointsInfoTitle = styled.Text`
  font-size: ${normalize(13)}px;
  color: #1c1c1e;
  align-self: flex-start;
`;

export const PointsInfo = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RegisterDriverButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${normalize(47)}px;
  width: 80%;
  background-color: #792ed2;
  border-width: 1px;
  border-color: #7021cf;
  border-radius: 24px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const RegisterDriverButtonText = styled.Text`
  font-size: ${normalize(18)}px;
  color: #ffffffde;
`;
