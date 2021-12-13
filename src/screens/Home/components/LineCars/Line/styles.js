import styled from "styled-components/native";

export const Container = styled.View`
  background-color: transparent;
`;

export const InfoContainer = styled.View`
  background-color: ${({ status }) => (status ? "#4DCF8B" : "#F36F6F")};
  padding: 7px;
  padding-left: 18px;
  padding-right: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 17px;
  margin: 1px;
`;

export const Avatar = styled.Image`
  width: 33px;
  height: 33px;
  border-radius: 10px;
  border-color: #fff;
  border-width: 2px;
  background-color: #ccc;
`;

export const TextVtr = styled.Text`
  font-size: 10px;
  padding-right: 10px;
  padding-left: 5%;
  color: #fff;
`;
export const ContainerAlone = styled.View``;
