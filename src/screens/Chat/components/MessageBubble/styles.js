import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

import { moderateScale } from 'react-native-size-matters'

const styles = StyleSheet.create({

    message: {
      flexDirection: 'row',
      marginVertical: moderateScale(7,2)
    },
    mine: {
      marginLeft: normalize(9),
      alignItems: 'flex-end',
    },
    not_mine: {
      alignSelf: 'flex-end',
      marginRight: normalize(9),
      alignItems: 'flex-end',
    },
    cloud: {
      maxWidth: moderateScale(200,2),
      paddingHorizontal: moderateScale(10,2),
      paddingTop: moderateScale(5,2),
      paddingBottom: moderateScale(7,2),
      borderRadius: normalize(20),
      marginLeft: normalize(45),
      marginRight: normalize(7),
    },
    text: {
      paddingTop: normalize(4),
      fontSize: normalize(18),
      lineHeight: normalize(23)
    },
    arrow_container: {
      position:'absolute',
      top: normalize(2),
      left:normalize(2),
      right: normalize(2),
      bottom: normalize(2),
      zIndex: -1,
      flex: 1

    },
    arrow_left_container: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',

      
    },
    arrow_right_container: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',

    },
    arrow_left: {
      position: 'absolute',
      left: moderateScale(-6, 0.5)
    },
    arrow_right: {
      right: moderateScale(-6, 0.5)
    },

    avatar_left:{
      position: 'absolute',
      width: normalize(40),
      height: normalize(40),
      borderRadius: normalize(20),
      
      
    },

    avatar_right:{
      width: normalize(40),
      height: normalize(40),
      borderRadius: normalize(20),
      justifyContent: 'center',

    },

    
  
  
  })

  export default styles;