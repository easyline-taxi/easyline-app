import React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import '../../../../Config/ReactotronConfig';
import styles from './styles';
//import StatusBar from './StatusBar';
//import LineCars from './LineCars/cars';


const Send = () => (
  <View style={styles.send}>
    <View style={styles.input}>
      <TextInput style={styles.nome}
        placeholder="Digite sua mensagem..."
        mode='outlined'
        label="Nome" 
        onChangeText={() => console.log('Pressed')}
      />
    </View>
    <View>
      <IconButton style={styles.sendButton} icon="send" color={Colors.grey700} size={35} onPress={() => console.log('Pressed')} />
    </View>
  </View>

);

export default Send;