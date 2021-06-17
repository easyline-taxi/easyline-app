import React from 'react';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';

const Header = ({
  title = 'Ipanema Top Taxi',
  subTitle = 'sistema de gerenciamento',
  isBack
}) => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <S.BarContainer>
        {isBack ? (
          <S.ActionContainer>
            <Entypo name="chevron-left" size={24} color="white" onPress={() => navigation.goBack()} />
          </S.ActionContainer>
        ) : (
          <S.ActionContainer>
            <AntDesign name="appstore-o" size={25} color="white"  onPress={() => navigation.navigate('AdminStack')} />
          </S.ActionContainer>
        )}
        <S.TitleContainer>
          <S.Title>{title.toUpperCase()}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.TitleContainer>
        <S.ActionContainer>
          <AntDesign name="warning" size={25} color="white" style={{
            marginRight: 10 }} />
            </S.ActionContainer>
            <S.ActionContainer>
          <Feather name="power" size={25} color="white" />
          </S.ActionContainer>
      </S.BarContainer>
    </S.Container>
  )
};
export default Header;
