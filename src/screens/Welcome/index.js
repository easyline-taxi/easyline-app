import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContainerPage from "../../components/ContainerPage";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Welcome(props) {
  
 

  return (
    <View style={styles.container}>
      <View style={styles.dobg}>
        <Image
          source={require("../../../assets/img/background.png")}
          style={styles.bg}
        />
      </View>
      <View style={styles.subcontainer}>
        <Image
          source={require("../../../assets/img/logo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.docloud}>
        <Image
          source={require("../../../assets/img/sol-nuvens.png")}
          style={styles.cloud}
        />
      </View>

      {/* <View style={styles.docar} >
                    <Image source={require('../../../assets/img/carro-pin.png')} style={styles.car} />
                </View> */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate("TabStack")} // tira isso aqui DEPOIS
      >
        <View style={styles.docar}>
          <Image
            source={require("../../../assets/img/carro-pin.png")}
            style={styles.car}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.textcontainer}>
        <Text style={styles.text}>Seja muito bem vindo!</Text>
        <View style={styles.butttons}>
          <TouchableOpacity
            style={styles.bottom}
            onPress={() => {
              props.navigation.navigate("CreateAccoutStack", {
                screen: "CreateAccout",
                params: { user: "admin" },
              });
            }}
          >
            <Text style={styles.textbottom}>Quero Cadastrar</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.butttons2}>
                    <TouchableOpacity style={styles.bottom2} onPress={() => props.navigation.navigate('TabStack')}>
                        <Text style={styles.textbottom2}>
                            Sou um Motorista
            </Text>
                    </TouchableOpacity>
                </View> */}
        <View style={styles.butttons3}>
          <TouchableOpacity
            style={styles.bottom2}
            onPress={() => props.navigation.navigate("LoginStack")}
          >
            <Text style={styles.textbottom2}>Fazer login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
