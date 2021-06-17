import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerPage from '../../../../components/ContainerPage';
import Header from '../../../../components/Header';
import * as S from './styles';

export default function Financeiro() {

  return (
    <ContainerPage>
      <Header title="Ipanema Top Taxi" subTitle="Financeiro" isBack />
      <S.Container>
          <S.Texto>Financeiro</S.Texto>
      </S.Container>
    </ContainerPage>
    
  );
}