import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const PointCard = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: ${normalize(64)}px;
  width: 100%;
  background: #efefef;
  padding: ${normalize(15)}px;
  border-top-right-radius: ${normalize(10)}px;
  border-top-left-radius: ${normalize(10)}px;
  border-bottom-right-radius: ${normalize(10)}px;
  border-bottom-left-radius: ${normalize(10)}px;
  margin: ${normalize(8)}px;
`;

export const CardPointDetailsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const CardPointSign = styled.View`
  height: ${normalize(45)}px;
  width: ${normalize(45)}px;
  background-color: #9862de;
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${normalize(9)}px;
  border-top-left-radius: ${normalize(9)}px;
  border-bottom-right-radius: ${normalize(9)}px;
  border-bottom-left-radius: ${normalize(9)}px;
`;

export const CardPointSignText = styled.Text`
  font-size: ${normalize(29)}px;
  color: #fff;
`;

export const CardPointMainDetails = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  padding-left: ${normalize(5)}px;
  height: ${normalize(50)}px;
`;

export const CardPointTitleContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const CardPointTitle = styled.Text`
  font-size: ${normalize(13)}px;
  color: #010101de;
  line-height: ${normalize(17)}px;
  font-weight: 600;
`;

export const CardPointJoinedDate = styled.Text`
  font-size: ${normalize(6)}px;
  color: #8d8a8ade;
  line-height: ${normalize(8)}px;
`;

export const CardPointBannedTimesGreen = styled.Text`
  font-size: ${normalize(6)}px;
  color: #ffffffde;
  text-align: center;
  text-align-vertical: center;
  background-color: #0c9d11;
  border-top-right-radius: ${normalize(8)}px;
  border-top-left-radius: ${normalize(8)}px;
  border-bottom-right-radius: ${normalize(8)}px;
  border-bottom-left-radius: ${normalize(8)}px;
  height: ${normalize(16)}px;
  width: ${normalize(38)}px;
`;

export const CardPointBannedTimesRed = styled.Text`
  font-size: ${normalize(6)}px;
  color: #ffffffde;
  text-align: center;
  text-align-vertical: center;
  background-color: #d21212;
  border-top-right-radius: ${normalize(8)}px;
  border-top-left-radius: ${normalize(8)}px;
  border-bottom-right-radius: ${normalize(8)}px;
  border-bottom-left-radius: ${normalize(8)}px;
  height: ${normalize(16)}px;
  width: ${normalize(38)}px;
`;

export const CardPointRightInfos = styled.View`
  align-items: center;
  justify-content: center;
`;
export const CardPointRightInfoTitle = styled.Text`
  font-size: ${normalize(8)}px;
  color: #302f2fde;
`;

export const CardPointRightInfoText = styled.Text`
  font-size: ${normalize(8)}px;
  color: #8d8a8ade;
`;
