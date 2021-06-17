import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({

    container: {
      backgroundColor: '#fff',
      borderTopLeftRadius: normalize(24),
      borderTopRightRadius: normalize(24),    
             
      },


    title:{
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderColor: '#eee',
      borderWidth: normalize(4),
      margin: normalize(20),
      padding: normalize(10),
      borderRadius: normalize(9),
      flexDirection: 'row-reverse',
    },
    
    textTitle:{
      fontSize: normalize(19),
      color: '#707070',

    },

    icon:{
      color: '#707070',
    },

    divider:{
      borderWidth: 0.3,
      color: '#eee',
      marginHorizontal: normalize(15),
    },

});

export default styles;

