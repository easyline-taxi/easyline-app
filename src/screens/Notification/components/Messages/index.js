import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles'

const Messages = ({ message: { messageadmin, date, hour, name }, key }) => (

  <View key={key} style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}
      </Text>
      <Text style={styles.message}>{messageadmin}
      </Text>
    </View>
    <View style={styles.dataHour}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.hour}>{hour}</Text>

    </View>
  </View>

);

export default Messages;