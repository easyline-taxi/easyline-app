import React, { useState } from 'react';
import { Image, Text, View, Modal, TouchableOpacity, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { Container, InfoContainer, Avatar, TextVtr } from './styles'
import { Feather, Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as S from './styles';

const alertBanUser = () => {
  //function to make two option alert
  Alert.alert(
    //title
    'Banir Usuário',
    //body
    'Você tem certeza que deseja BANIR este usuário?',
    [
      {
        text: 'Sim',
        onPress: () => console.log('Yes Pressed')
      },
      {
        text: 'Não',
        onPress: () => console.log('No Pressed'), style: 'cancel'
      },
    ],
    {cancelable: false},
    //clicking out side of alert will not cancel
  );
};

const alertDeleteUser = () => {
  //function to make two option alert
  Alert.alert(
    //title
    'Deletar Usuário',
    //body
    'Você tem certeza que deseja DELETAR este usuário?',
    [
      {
        text: 'Sim',
        onPress: () => console.log('Yes Pressed')
      },
      {
        text: 'Não',
        onPress: () => console.log('No Pressed'), style: 'cancel'
      },
    ],
    {cancelable: false},
    //clicking out side of alert will not cancel
  );
};

const List = ({ list: { image, position, vtr, name } }) => (

  

  
  <Container>
    <InfoContainer>
      <Avatar source={{ uri: image }} />
      <TextVtr>{vtr}</TextVtr>
      <Text>{name}</Text>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text>
          <Octicons name="info" size={18} color="#673AB7" />
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={alertBanUser}>
        <Text>
          <MaterialIcons name="block" size={18} color="#B73A74" />
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={alertDeleteUser}>
        <Text>
          <MaterialCommunityIcons name="delete-forever-outline" size={18} color="#B73A3A" />
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text>
          <Feather name="edit" size={18} color="#609DE2"  />
        </Text>
      </TouchableOpacity>
    </InfoContainer>

  </Container>
)
export default List;