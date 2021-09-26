import React from 'react';
import { ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import LastLine from './components/Line/API';
import AdminOptions from './components/AdminOptions';
import TextSlider from './components/TextSlider';
import SliderPage from './components/SliderPage'

import * as S from './styles';

export default function Admin() {

  return (
    <ContainerPage>
      <Header title="Ipanema Top Taxi" subTitle="Administração" isBack />
      <S.Container>
      <ScrollView>
      <UserInfo type={2} borderColorHex="#7F0DFF" subTitleText="Administrador" subTitleUppercase />
      <LastLine />
      <AdminOptions />
      <TextSlider />
      <SliderPage />
      </ScrollView>
      </S.Container>
    </ContainerPage>
    
  );
} 