import React, { Component, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import List from '../../../components/ListUsers/List';

import * as S from './styles'


export default class ListUsers extends Component {


  state = {
    lists: [
      {
        id: 1,
        image: 'https://thispersondoesnotexist.com/image',
        position: '1º',
        vtr: 'VTR 007',
        name: 'Sergio Camargo',
      },
      {
        id: 2,
        image: 'https://thispersondoesnotexist.com/image',
        position: '2º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 3,
        image: 'https://thispersondoesnotexist.com/image',
        position: '3º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 4,
        image: 'https://thispersondoesnotexist.com/image',
        position: '4º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 5,
        image: 'https://thispersondoesnotexist.com/image',
        position: '5º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 6,
        image: 'https://thispersondoesnotexist.com/image',
        position: '6º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 7,
        image: 'https://thispersondoesnotexist.com/image',
        position: '7º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 8,
        image: 'https://thispersondoesnotexist.com/image',
        position: '8º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 9,
        image: 'https://thispersondoesnotexist.com/image',
        position: '9º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 10,
        image: 'https://thispersondoesnotexist.com/image',
        position: '10º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 11,
        image: 'https://thispersondoesnotexist.com/image',
        position: '11º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 12,
        image: 'https://thispersondoesnotexist.com/image',
        position: '12º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 13,
        image: 'https://thispersondoesnotexist.com/image',
        position: '12º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 14,
        image: 'https://thispersondoesnotexist.com/image',
        position: '12º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 15,
        image: 'https://thispersondoesnotexist.com/image',
        position: '12º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
      {
        id: 16,
        image: 'https://thispersondoesnotexist.com/image',
        position: '12º',
        name: 'Sergio Camargo',
        vtr: 'VTR 007',
      },
    ],
  };

  render() {

    return (
      <S.BackPage>
        <S.TopContainer>
          <S.Container>
            <S.Texto>LISTA DE USUÁRIOS</S.Texto>
            <ScrollView>
              {this.state.lists.map(list => <List key={list.id} list={list} />)}
            </ScrollView>
          </S.Container>
        </S.TopContainer>
      </S.BackPage>
    );
  }
}