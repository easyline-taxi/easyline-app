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
