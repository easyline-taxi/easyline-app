import React from 'react';

import * as S from './styles';

export default function ContainerPage({ children }) {

  return (
    <S.Container>
      {children}
    </S.Container>
  );
}
