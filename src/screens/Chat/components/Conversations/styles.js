import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';




const styles = StyleSheet.create({

    container: {
      paddingTop: normalize(8),
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: normalize(24),
      borderTopRightRadius: normalize(24), 
      flexDirection: 'row',
          
      },
    
});

export default styles;