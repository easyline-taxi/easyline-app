import styled from "styled-components/native";
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
`;

export const Main = styled.View`
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
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  height: 100px;
  width: 100%;
  top: -32px;
`;

export const UserDetailsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const AvatarImage = styled.Image`
  height: 50px;
  width: 50px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-width: 2px;
  border-color: #90ee90;
`;

export const UserDetailsMain = styled.View`
  flex-direction: column;
  padding-left: 5px;
`;

export const Username = styled.Text`
  font-size: 24px;
  color: #000;
`;

export const UserDetailsSub = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletSeparator = styled.Text`
  width: 5px;
  height: 5px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
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
  font-size: 14px;
  color: #000000de;
  text-transform: uppercase;
  margin: 10px;
`;

export const PointsCardsContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const PointCard = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 64px;
  width: 100%;
  background: #fff;
  padding: 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 3px;
`;

export const CardPointDetailsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const CardPointImage = styled.Image`
  height: 45px;
  width: 45px;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 9px;
`;

export const CardPointSign = styled.View`
  height: 45px;
  width: 45px;
  background-color: #9862DE;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 9px;
`;

export const CardPointSignText = styled.Text`
  font-size: ${normalize(29)}px;
  color: #fff;
`;

export const CardPointMainDetails = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 5px;
  height: 50px;
`;

export const CardPointTitleContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const CardPointTitle = styled.Text`
  font-size: 13px;
  color: #010101de;
  line-height: 17px;
  font-weight: 600;
`;

export const CardPointJoinedDate = styled.Text`
  font-size: 6px;
  color: #8d8a8ade;
  line-height: 8px;
`;

export const CardPointOnlineAmountGreen = styled.Text`
  font-size: 6px;
  color: #ffffffde;
  text-align: center;
  text-align-vertical: center;
  background-color: #0c9d11;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 16px;
  width: 38px;
`;

export const CardPointOnlineAmountRed = styled.Text`
  font-size: 6px;
  color: #ffffffde;
  text-align: center;
  text-align-vertical: center;
  background-color: #d21212;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 16px;
  width: 38px;
`;

export const CardPointJoinButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 61px;
  background-color: #0c9d11;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const CardPointJoinButtonText = styled.Text`
  font-size: 8px;
  color: #fff;
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
  height: 50px;
  width: 100%;
  flex-direction: row;
`;

export const SimpleButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 167px;
  border-width: 1px;
  border-color: #3d065f;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SimpleButtonText = styled.Text`
  font-size: 12px;
  color: #3d065f;
`;
