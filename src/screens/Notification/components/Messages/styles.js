import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({

    container:{
      backgroundColor: '#CE4848',
        paddingHorizontal: normalize(17),
        paddingVertical: normalize(5),
        borderRadius: normalize(16),
        margin: normalize(4),
    },

    containerFora:{
      backgroundColor: '#fff',
    },


      dataHour:{
        flexDirection: 'row-reverse',
        
        
      },

      hour:{
        fontSize: normalize(11),
        color: '#000',
        paddingHorizontal: normalize(10),

      },

      date:{
        fontSize: normalize(11),
        color: '#000',

      },

      name:{
        fontSize: normalize(17),
        color: '#FFF',
        fontWeight: 'bold',
      },

      message:{
        fontSize: normalize(14),
        color: '#FFF',

      }
});

export default styles;
