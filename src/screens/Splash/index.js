import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import * as S from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';

const Splash = ({
    navigation,
    }) => {
    
        useEffect ( () => {
            
            setTimeout(async () => {
              const token = await SecureStore.getItemAsync("token");
              if(token) navigation.navigate("TabStack"); else navigation.navigate('WelcomeStack')
                
            }, 2000);
        }, [])

  return (
    <S.Container>
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(69,16,138,100)', 'rgba(61,6,95,100)', 'rgba(61,6,95,100)']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    />
    <S.Logo>
      <S.Imagem source={require('../../../assets/img/logo.png')} />
    </S.Logo>
</S.Container>
  
);
}

export default Splash;