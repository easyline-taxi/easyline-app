import React, { useCallback } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, EvilIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Linking, Alert } from 'react-native';
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold, JosefinSans_300Light,  } from '@expo-google-fonts/josefin-sans';


export default function AdminOptions() {


    const navigation = useNavigation()

    let [fontsLoaded, error] = useFonts({
        JosefinSans_400Regular, 
        JosefinSans_600SemiBold,
        JosefinSans_300Light,
      })
    

    return ( 

        <S.Container>
            <S.TextContainer>
                <S.TextOptions style={{fontFamily: 'JosefinSans_600SemiBold'}}>
                    Administração
                </S.TextOptions>
            </S.TextContainer>
            <S.OptionsTop>
                <S.Buttom onPress={() => console.log('Pressed')}>
                    <S.Btn>
                        <EvilIcons name="location" size={30} color="white" />
                    </S.Btn>
                </S.Buttom>
                <S.Buttom onPress={() => navigation.navigate('UsersAdminStack')}>
                    <S.Btn>
                        <Feather name="user" size={30} color="white" />
                    </S.Btn>
                </S.Buttom>
                <S.Buttom onPress={() => navigation.navigate('NotificationStack')}>
                    <S.Btn>
                        <Ionicons name="ios-notifications-outline" size={30} color="white" />
                    </S.Btn>
                </S.Buttom>
            </S.OptionsTop>
            <S.ContainerTextBtn>
                <S.Btn>
                    <S.TextBtn style={{fontFamily: 'JosefinSans_300Light'}}>
                        Alterar Localização
                </S.TextBtn>
                </S.Btn>
                <S.Btn>
                    <S.TextBtn style={{fontFamily: 'JosefinSans_300Light'}}>
                        Usuários
                </S.TextBtn>
                </S.Btn>
                <S.Btn>
                    <S.TextBtn style={{fontFamily: 'JosefinSans_300Light'}}>
                        Enviar notificações
                </S.TextBtn>
                </S.Btn>
            </S.ContainerTextBtn>
            <S.OptionsBottom>
                <S.Buttom onPress={() => navigation.navigate('PlansStack')}>
                    <S.Btn>
                        <EvilIcons name="cart" size={30} color="white" />
                    </S.Btn>
                </S.Buttom>
                <S.Buttom onPress={ ()=>{ Linking.openURL('https://api.whatsapp.com/send?l=pt-BR&phone=55021970015936&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20o%20app%20Easy%20Line.')}}>
                    <S.Btn>
                        <SimpleLineIcons name="question" size={30} color="white" />
                    </S.Btn>
                </S.Buttom>
                <S.Buttom onPress={() => navigation.navigate('LiveMapStack')}>
                    <S.Btn>
                        <SimpleLineIcons name="map" size={30} color="white" />
                    </S.Btn>
                </S.Buttom>
            </S.OptionsBottom>
            <S.ContainerTextBtn>
                <S.Btn>
                    <S.TextBtn style={{fontFamily: 'JosefinSans_300Light'}}>
                        Mudar de Plano
                </S.TextBtn>
                </S.Btn>
                <S.Btn>
                    <S.TextBtn style={{fontFamily: 'JosefinSans_300Light'}}>
                        Suporte
                </S.TextBtn>
                </S.Btn>
                <S.Btn>
                    <S.TextBtn style={{fontFamily: 'JosefinSans_300Light'}}>
                        Mapa ao vivo
                </S.TextBtn>
                </S.Btn>
            </S.ContainerTextBtn>
        </S.Container>


    );

} 