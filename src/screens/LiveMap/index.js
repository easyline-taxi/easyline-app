import React from 'react';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import Map from '../../screens/LiveMap/Map';
import SubHeader from '../../screens/LiveMap/SubHeader';
import * as S from './styles';

export default function Notification() {

  return (
    <ContainerPage>
      <Header subTitle="Mapa ao vivo" isBack />
      <Map />
    </ContainerPage>
  );
}
 