import React from 'react';
import { Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';




const SubHeader= () => (
  <S.Container>
    <S.SubContainer>
      <S.Search
      placeholder="Pesquisar..."
      mode='outlined'
      label="Nome" 
      onAccessibilityAction={() => console.log('Pressed')}
      />
    </S.SubContainer>
    <S.icon>
    <Ionicons name="md-search" size={30} color="black" />
    </S.icon>
  </S.Container>

);


export default SubHeader;