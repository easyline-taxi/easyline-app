import React, { Component, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold, JosefinSans_300Light  } from '@expo-google-fonts/josefin-sans';
import { Divider } from 'react-native-paper';
import Line from '../LastLine';
import * as S from './styles';


export default function LastLine () {


  let [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular, 
    JosefinSans_600SemiBold,
    JosefinSans_300Light,
  })

  const [linesList, setLines] = useState({})

  useEffect(() => {
    setLines({
      lines: [
        {
          id: 1,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 2,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 3,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 4,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 5,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 6,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 7,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 8,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 9,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 10,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 11,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
        {
          id: 12,
          image: 'https://thispersondoesnotexist.com/image',
  
        },
      ],
    });
  }, [])

 
    return (
      <S.BackPage>
        <S.Divider>
        <Divider  />
        </S.Divider>
        <S.Container>
          <S.Title style={{fontFamily: 'JosefinSans_600SemiBold'}}>
            Últimos Tripulados
          </S.Title>
          <S.SubTitle style={{fontFamily: 'JosefinSans_300Light'}}>
            Ver todos (14)
          </S.SubTitle>
        </S.Container>
        <ScrollView horizontal={true}>
          {linesList.lines?.map(line => <Line key={line.id} line={line} />)}
        </ScrollView>
      </S.BackPage>
    );
  }
