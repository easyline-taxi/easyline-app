import React, { useState } from 'react';
import * as S from './styles';


const Line = ({ line: { image } }) => (

  <S.Container>
    <S.InfoContainer>
      <S.Avatar source={{ uri: image }} />
    </S.InfoContainer>
  </S.Container>
)

export default Line;