import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({

  container:{
    
  },
  bg:{
    width: wp('100%'),
    height: normalize(430),
    
  },
  dobg:{
   width: normalize(10),
   height: normalize(10),
  },
  
  docloud:{
    paddingLeft: normalize(30),
    paddingTop: normalize(30),
    height: normalize(50),
  },
  cloud:{
   width: normalize(129),
   height: normalize(75),
  },
  docar:{
    alignItems: 'center',
  },
  car:{
   width: normalize(220),
   height: normalize(160),
  },

  subcontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: normalize(40),
  },

  image:{
    width: normalize (115),
    height: normalize (154),
    
  },
  textcontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(20),
  },

  text:{
    fontSize: normalize(25),
    fontWeight: 'bold',
  },

  butttons:{
    paddingTop: normalize(10),
  },
  butttons2:{
    paddingTop: normalize(10),
  },
  butttons3:{
    paddingTop: normalize(10),
  },

  bottom:{
    backgroundColor: '#45108A',
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(38),
    width: normalize(166),
  },
  
  textbottom:{
    fontSize: normalize(14),
    color: '#fff',
  },

  bottom2:{
    borderColor: '#45108A',
    borderWidth: 1,
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(38),
    width: normalize(166),
  },

  textbottom2:{
    fontSize: normalize(14),
    color: '#45108A',
  },













});
  export default styles;





















//export const Container = styled.View`
//  align-items: center;
//  justify-content: center;
//  padding-top: 10%;
//
//`;
//
//
//export const ImagemCar = styled.Image`
//  height: 154px;
//  width: 116px;
//`;
//
//export const Teste = styled.View`
//background: rgba(132,73,209,1) 0%, rgba(61,6,95,1) 100%;
//flex: 1;
//  
//`;
//
//export const Title = styled.Text`
//  font-size: 22px;
//  font-weight: bold;
//`;
//export const Buttons = styled.View`
//  padding-top: 20px;
//  align-items: center;
//  justify-content: center;
//`;
//export const ContainerTitle = styled.View`
//  align-items: center;
//  justify-content: center;
//  padding-top: 25%;
//
//`;
//export const ButtonAdmin = styled.TouchableOpacity`
//  height: 38px;
//  width: 166px;
//  border-radius: 5px;
//  background-color: black;
//  justify-content: center;
//  align-items: center;
//`;
//export const TextButton = styled.Text`
//  font-size: 14px;
//  color: white;
//`;
//export const ButtonDriver = styled.TouchableOpacity`
//  height: 38px;
//  width: 166px;
//  border-radius: 5px;
//  border-color: white;
//  border-width: 1px;
//  justify-content: center;
//  align-items: center;
//`;
//export const TextDriver = styled.Text`
//  font-size: 14px;
//  color: white;
//`;
//export const ButtonLogin = styled.TouchableOpacity`
//  height: 38px;
//  width: 166px;
//  border-radius: 5px;
//  border-color: white;
//  border-width: 1px;
//  justify-content: center;
//  align-items: center;
//`;
//export const TextLogin = styled.Text`
//  font-size: 14px;
//  color: white;
//`;
//export const Space = styled.View`
//  padding-top: 10px;
//  padding-bottom: 10px;
//`;