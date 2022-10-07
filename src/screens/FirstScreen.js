// import * as React from 'react';
// import { View, Text } from 'react-native';



// const HomeScreen = () =>{
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>

//         </View>

//     )
// }

// export default HomeScreen;


import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import normalize from "react-native-normalize";
import { SafeAreaView } from "react-navigation";
import {pixelNormalize} from "../constants/Size";
import { useNavigation } from "@react-navigation/native";


const FirstScreen = (props) => {
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar style="light" />
      <ScrollView  style={styles.mainContainer}>
        <SafeAreaView>
        <View style={styles.container} >
          {/* I'm Fitness Image */}
          <Image
            style={styles.pixels}
            source={require("../../assets/img/FirstScreen/pexels.png")}
          />
          {/* I'm Back Image */}
          <Image
            style={styles.image}
            source={require("../../assets/img/FirstScreen/Rectangle.png")}
          />
        </View>

        <Image
          style={styles.pathOne}
          source={require("../../assets/img/FirstScreen/PathOne.png")}
        />
        <Image
          style={styles.pathTwo}
          source={require("../../assets/img/FirstScreen/PathTwo.png")}
        />
        {/* <Text style={styles.Text}>TRAIN WITH </Text> */}
        <Image
          style={styles.pathTree}
          source={require("../../assets/img/FirstScreen/PathThree.png")}
        />
        <Image
          style={styles.Path}
          source={require("../../assets/img/FirstScreen/Path.png")}
        />

        <View style={styles.text}>
          <Text style={styles.train}>TRAIN WITH</Text>
          <Text style={styles.best}>THE BEST{"\n"}FITNESS APP</Text>
        </View>

        <Image
          style={styles.ellipse}
          source={require("../../assets/img/FirstScreen/Ellipse.png")}
        />

        <Image
          style={styles.substraction}
          source={require("../../assets/img/FirstScreen/Subtraction.png")}
        />
        <Image
          style={styles.ellipseOne}
          source={require("../../assets/img/FirstScreen/EllipseONe.png")}
        />

        <View style={styles.text}>
          <TouchableOpacity
            onPress={()=>{
              navigation.push('Second');
          }}
          >
            <Text style={styles.now}>LAUNCH NOW</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.group}
          source={require("../../assets/img/FirstScreen/Group.png")}
        />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
export default FirstScreen;
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
   // flex: 1,
    // alignItems: 'center',
  },
  container:{
    height: pixelNormalize(2436),
  },
  image: {
    height: pixelNormalize(2436), // original 2436
    width: pixelNormalize(1125),

    position: "absolute",
  },
  pixels: {
    width: pixelNormalize(1125),
    height: pixelNormalize(2436), // original 2436
  },
  pathOne: {
    position: "absolute",
    marginLeft: pixelNormalize(315),
    marginTop: pixelNormalize(24),
    width: pixelNormalize(50),
    height: pixelNormalize(50),
  },

  pathTwo: {
    position: "absolute",
    marginTop: pixelNormalize(122),
    marginLeft: pixelNormalize(231),
    width: pixelNormalize(101),
    height: pixelNormalize(101),
  },
  pathTree: {
    position: "absolute",
    marginLeft: pixelNormalize(107),
    marginTop: pixelNormalize(188),
    height: pixelNormalize(101),
    width: pixelNormalize(117),
  },
  Path: {
    position: "absolute",
    marginLeft: pixelNormalize(235),
    marginTop: pixelNormalize(321),
    height: pixelNormalize(49),
    width: pixelNormalize(56),
  },
  Text: {
    //position: 'absolute',
    //color: 'white,'
  },
  text: {
    marginTop: pixelNormalize(403),
    position: "absolute",
  },
  train: {
    fontSize: pixelNormalize(80),
    marginLeft: pixelNormalize(68),
    color: "white",
    fontFamily: "OswaldVariableFont",
  },
  best: {
    fontSize: pixelNormalize(126),
    fontFamily: "OswaldVariableFont",
    marginLeft: pixelNormalize(68),
    color: "white",
    textAlign: "left",
    // height: pixelNormalize(312),
    // width:  pixelNormalize(581),
  },
  ellipse: {
    position: "absolute",
    marginTop: pixelNormalize(840),
    height: pixelNormalize(132),
    width: pixelNormalize(132),
  },
  substraction: {
    position: "absolute",
    marginTop: pixelNormalize(2054),
    right: 190,
    height: pixelNormalize(249),
    width: pixelNormalize(744),
  },
  ellipseOne: {
    position: "absolute",
    marginTop: pixelNormalize(2154),
    marginLeft: pixelNormalize(579),
    height: pixelNormalize(50),
    width: pixelNormalize(50),
  },
  now: {
    fontSize: pixelNormalize(44),
    color: "white",
    fontFamily: "OpenSansRegular",
    marginTop: pixelNormalize(1740),
    marginLeft: pixelNormalize(140),
    // bottom: pixelNormalize(227),
    height: pixelNormalize(60),
    width: pixelNormalize(374),
  },
  group: {
    position: "absolute",
    marginTop: pixelNormalize(2291),
    //bottom: pixelNormalize(140),
    height: pixelNormalize(24),
    width: pixelNormalize(336),
    marginLeft: pixelNormalize(92),
  },
});