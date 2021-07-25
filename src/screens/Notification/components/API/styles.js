import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';


const styles = StyleSheet.create({

    container:{ 
        backgroundColor: '#f8f8fa',
        padding: normalize(6),
        borderRadius: normalize(16),
        marginHorizontal: normalize(8),
        borderColor: '#eee',
        borderWidth: normalize(3),
  


    },

    topContainer:{ 
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: normalize(10),
    },


    icon:{
    backgroundColor: '#6036B3',
    bottom:0,
    right:0,
    width: normalize(50),
    height: normalize(50),
    position: 'absolute',
    borderRadius: normalize(40),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: normalize(10),
    },

    modal:{
        flex: 1,
        paddingTop: normalize(10),
        alignItems: 'center',
        
    },

    modalize:{
        flex: 1,
        zIndex: 3, 
        position: 'relative',
    },

    text:{
        fontSize: normalize(19),
    },

    input:{
        flex: 2,
        paddingTop: normalize(30),
        borderColor: '#eee',
        borderWidth: normalize(3),
        borderRadius: normalize(15),
        width: normalize(350),
        height: normalize(300),
        padding: normalize(10),
        margin: normalize(10),
        backgroundColor: '#F8ECFF',
    },

    picker:{
        backgroundColor: '#fff',
        borderWidth: normalize(3),
        borderColor: '#000',
        borderRadius: normalize(5),
    },  

    
    mensagem:{
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 0.3,
        marginTop: normalize(10),
        height: normalize(110),
        
    },  

    button:{
        alignItems: 'center',
        marginTop: normalize(20),
        backgroundColor: '#7F0DFF',
        justifyContent: 'center',
        borderRadius: normalize(5),
        padding: normalize(5),
        
    },

    text:{
        alignItems: 'center',
        fontSize: normalize(14),
        color: '#fff',
        margin: normalize(7),
    },

    containernotify:{
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
          fontSize: normalize(18),
          color: '#FFF',
          fontWeight: 'bold',
        },
  
        message:{
          fontSize: normalize(16),
          color: '#FFF',
          paddingTop: 5,
        }

});

export default styles;
