import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import * as S from './styles';
import UserInfo from '../../components/UserInfo';
import FreePlan from '../../screens/Plans/PlansPage/FreePlan';
import BasicPlan from '../../screens/Plans/PlansPage/BasicPlan';
import GoldPlan from '../../screens/Plans/PlansPage/GoldPlan';
import PremiumPlan from '../../screens/Plans/PlansPage/PremiumPlan';

export default function Plans() {

  return (
    <ContainerPage>
      <Header title="Ipanema Top Taxi" subTitle="Planos" isBack />
      <UserInfo type="plans"/>
      <FreePlan />
      <ScrollView>
      <BasicPlan />
      <GoldPlan />
      <PremiumPlan />
      </ScrollView>
    </ContainerPage>
    
  );
}