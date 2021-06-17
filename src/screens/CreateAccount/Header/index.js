import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as S from './styles';

export default function CreateAccout() {

    return (
        <S.Container>
            <S.AvatarContainer>
                <S.AvatarImage source={require('../../../../assets/img/logo-hor.png')} />
            </S.AvatarContainer>
        </S.Container>

    );
}