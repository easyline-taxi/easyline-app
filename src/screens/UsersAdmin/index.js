import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import ListUsers from './components/ListUsers/API';
import SubHeader from './components/SubHeader';


import * as S from './styles';

export default function UsersAdmin() {

  return (
    <ContainerPage>
      <Header title="Ipanema Top Taxi" subTitle="Lista de Usuários" isBack />
      <S.Container>
      <SubHeader />
      <ListUsers />
      </S.Container>
    </ContainerPage>
    
  );
}