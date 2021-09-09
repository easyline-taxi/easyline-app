import React from 'react';
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold, JosefinSans_300Light,  } from '@expo-google-fonts/josefin-sans';

import * as S from './styles';

export default function TextSlider () {

    let [fontsLoaded, error] = useFonts({
        JosefinSans_400Regular, 
        JosefinSans_600SemiBold,
        JosefinSans_300Light,
      })

        return (

            <S.Container>
                <S.ContainerText>
                    <S.Title style={{fontFamily: 'JosefinSans_600SemiBold'}}>
                        Regule a distância da PA
                </S.Title>
                    <S.SubTitle style={{fontFamily: 'JosefinSans_300Light'}}>
                        distância em metros para o motorista entrar na fila
                </S.SubTitle>
                </S.ContainerText>
            </S.Container>

        );
    }