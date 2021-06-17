import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';

const StatusBar = () => {
  const [livre, setLivre] = useState(true)
  const [tripulado, setTripulado] = useState(false)

  function handleLivre() {
    setLivre(true)
    setTripulado(false);
  }

  function handleTripulado() {
    setLivre(false)
    setTripulado(true);
  }

  return (
    <S.Container>
      <S.Box>
        <S.Text size={11}>Distância da PA</S.Text>
        <S.Text size={21}>25.5 km</S.Text>
      </S.Box>
      <S.Box>
        <S.Text size={11}>Posição na fila</S.Text>
        <S.Text size={21}>10º</S.Text>
      </S.Box>
      <S.Button onPress={handleLivre} enabled={livre ? false : true}>
      <S.Text size={11}>Livre</S.Text>
        <Ionicons name="md-car" size={30} color={livre ? '#298B4A' : '#999'} />
      </S.Button>
      <S.Button onPress={handleTripulado} enabled={tripulado ? false : true}>
        <S.Text size={11}>Tripulado</S.Text>
        <Ionicons name="md-car" size={30} color={tripulado ? '#DC4E4E' : '#999'} />
      </S.Button>
    </S.Container>
  )
};

export default StatusBar;
