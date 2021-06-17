import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

import { View, Text, Image } from 'react-native';


import styles from './styles';



const SubHeader= () => (
  <View style={styles.container}>

    <View style={styles.title}>
      <Text style={styles.textTitle}>Mapa de vtr's ao vivo</Text>
      <Entypo name="location-pin" size={24} style={styles.icon} />
    </View>
    <Divider style={styles.divider} />
  </View>

);


export default SubHeader;