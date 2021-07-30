import { StyleSheet, Dimensions } from 'react-native';
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    map: {
      position: "absolute",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height-80,
      marginTop: 85,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    buttonsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      height: normalize(40),
      padding: "4%",
      backgroundColor: "rgba(128,128,128,0.5)",
      marginBottom: normalize(10),
    },
    text: {
      alignItems: "center",
      color: "#000",
    }
  });

  export default styles;