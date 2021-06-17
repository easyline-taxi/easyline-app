import * as S from './styles';

import Header from '../../screens/CreateAccount/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import Register from '../../screens/CreateAccount/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';

export default function CreateAccout(props,{navigation,route}) {
    // const route = useRoute()
    const myuser= props.route.params?.user
    return (
        <S.Container>
            <KeyboardAwareScrollView>
            <Header />
            <Register type={myuser}/>
            </KeyboardAwareScrollView>
        </S.Container>

    );
}