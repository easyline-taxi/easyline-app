import * as S from './styles';

import React, { useContext } from 'react';

import Input from '../../screens/Login/Imput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation()
     
    return (
        <S.Container>
            <KeyboardAwareScrollView>
                <Input />
            </KeyboardAwareScrollView>
        </S.Container>
    );
}