import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  justify-content: flex-end;
  width: 100%;
  margin-top: 14px;
`;

export const HeaderBackground = styled.View`
  background-color: #e9e9e9;
  position: absolute;
  height: 32px;
  width: 100%;
`;

export const Main = styled.View`
  background-color: #e9e9e9;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
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

export const UserInfo = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top-right-radius: ${normalize(32)}px;
  border-top-left-radius: ${normalize(32)}px;
  border-bottom-right-radius: ${normalize(32)}px;
  border-bottom-left-radius: ${normalize(32)}px;
  height: ${normalize(100)}px;
  width: 100%;
`;

export const UserDetailsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const AvatarImage = styled.Image`
  height: ${normalize(50)}px;
  width: ${normalize(50)}px;
  border-top-right-radius: ${normalize(50)}px;
  border-top-left-radius: ${normalize(50)}px;
  border-bottom-right-radius: ${normalize(50)}px;
  border-bottom-left-radius: ${normalize(50)}px;
  border-width: 2px;
  border-color: #90ee90;
`;

export const UserDetailsMain = styled.View`
  flex-direction: column;
  padding-left: ${normalize(5)}px;
`;

export const Username = styled.Text`
  font-size: ${normalize(24)}px;
  color: #000;
`;

export const UserDetailsSub = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletSeparator = styled.Text`
  width: ${normalize(5)}px;
  height: ${normalize(5)}px;
  border-top-right-radius: ${normalize(25)}px;
  border-top-left-radius: ${normalize(25)}px;
  border-bottom-right-radius: ${normalize(25)}px;
  border-bottom-left-radius: ${normalize(25)}px;
  margin-left: ${normalize(5)}px;
  margin-right: ${normalize(5)}px;
  background-color: #878b95;
`;

export const UserRole = styled.Text`
  color: #1c1c1e50;
  text-transform: uppercase;
`;

export const UserVtr = styled.Text`
  color: #34c75975;
  text-transform: uppercase;
`;

export const PointsContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 2;
`;

export const Points = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PointsTitle = styled.Text`
  font-size: ${normalize(14)}px;
  color: #000000de;
  text-transform: uppercase;
  margin: ${normalize(10)}px;
`;

export const PointsCardsContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const BottomContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const SimpleButtonContainer = styled.View`
  align-items: center;
  justify-content: space-evenly;
  height: ${normalize(50)}px;
  width: 100%;
  flex-direction: row;
`;

export const SimpleButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${normalize(38)}px;
  width: ${normalize(167)}px;
  border-width: 1px;
  border-color: #3d065f;
  border-top-right-radius: ${normalize(5)}px;
  border-top-left-radius: ${normalize(5)}px;
  border-bottom-right-radius: ${normalize(5)}px;
  border-bottom-left-radius: ${normalize(5)}px;
`;

export const SimpleButtonText = styled.Text`
  font-size: ${normalize(12)}px;
  color: #3d065f;
`;
