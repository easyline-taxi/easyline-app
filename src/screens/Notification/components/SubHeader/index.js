import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

import { View, Text, Image } from 'react-native';


import styles from './styles';



const SubHeader= () => (
  <View style={styles.container}>

    <View style={styles.title}>
      <Text style={styles.textTitle}>Mensagens do Administrador</Text>
      <Ionicons name="md-notifications" size={20} style={styles.icon} />
    </View>
    <Divider style={styles.divider} />
  </View>

);


export default SubHeader;