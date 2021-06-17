import { StyleSheet } from 'react-native';

import normalize from 'react-native-normalize';

const styles = StyleSheet.create({

    send:{
        backgroundColor: '#fff',
        height: normalize(70),
        borderTopWidth: normalize(2),
        borderTopColor: '#ddd',   
        flexDirection: 'row',
        justifyContent: 'space-between',     
        alignItems: 'center',

        
      },

    input:{
        
        flex: 1,
        marginLeft: normalize(20),

      },

      nome:{
        backgroundColor: '#fff',
        borderColor: '#9A9EA4',
        borderWidth: normalize(3),
        height: normalize(50),
        width: normalize(293),
        borderRadius: 23,
        paddingLeft: 10,
      },

      sendButton:{
          marginRight: normalize(10),
      }


    
});

export default styles;
