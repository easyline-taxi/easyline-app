import React from 'react';

import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import Messages from '../../screens/Notification/components/API';
import SubHeader from '../../screens/Notification/components/SubHeader';
import * as S from './styles';

export default function Notification() {

  return (
    <ContainerPage>
      <Header subTitle="Notificações" isBack />
      <SubHeader />
      <Messages />
    </ContainerPage>
  );
}
 