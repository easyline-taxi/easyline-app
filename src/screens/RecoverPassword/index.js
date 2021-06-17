import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../../screens/RecoverPassword/Imput';
import * as S from './styles';


export default function RecoverPassword() {

    const navigation = useNavigation()

 
    return (
        <S.Container>
            <KeyboardAwareScrollView>
                <Input />
            </KeyboardAwareScrollView>
        </S.Container>
    );
}