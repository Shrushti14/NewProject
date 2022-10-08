// import * as React from 'react';
// import { View, Text } from 'react-native';



// const Tab2Screen = () =>{
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Tab 2 Screen</Text>

//         </View>

//     )
// }

// export default Tab2Screen;



import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { pixelNormalize } from "../constants/Size";
import { ScrollView } from "react-native-gesture-handler";

const AnalysisScreen = () => {
  return (
    <LinearGradient
      colors={["#1B1B1B", "#1A1A1A"]}
      style={styles.MainContainer}
    >
      <View style={styles.screen}>
        <TouchableOpacity>
          <AntDesign style={styles.left} name="left" size={30} color="#ccc" />
        </TouchableOpacity>
        <AntDesign
          style={styles.appstore}
          name="appstore-o"
          size={30}
          color="red"
        />
      </View>
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text style={styles.card}></Text>
            <Entypo
              style={styles.dots}
              name="dots-three-vertical"
              size={30}
              color="#ccc"
            />
          </View>

          <View style={styles.inner} />
          <View>
            <FontAwesome
              style={styles.heartbeat}
              name="heartbeat"
              size={35}
              color="red"
            />
            <Entypo style={styles.flash} name="flash" size={30} color="#ccc" />

            <Feather
              style={styles.droplet}
              name="droplet"
              size={30}
              color="#ccc"
            />

            <FontAwesome
              style={styles.quarters}
              name="thermometer-three-quarters"
              size={30}
              color="#ccc"
            />
          </View>

          <View>
            <Text style={styles.circle}></Text>
            <Text style={styles.number}>110</Text>
            <Text style={styles.innerText}>bpm</Text>
            <Entypo
              style={styles.singleDot}
              name="dot-single"
              size={60}
              color="red"
            />
          </View>

          <View style={styles.average}>
            <Text style={styles.ausu}>Average</Text>
            <Text style={styles.hours}>HOURS</Text>
            <Text style={styles.days}>DAYS</Text>
          </View>

          <View style={styles.graph}></View>
          <View style={styles.ten}>
            <Text style={styles.one}>120</Text>
          </View>
          <View style={styles.hunderade}>
            <Text style={styles.two}>100</Text>
          </View>
          <View style={styles.twoHunderade}>
            <Text style={styles.three}>30</Text>
          </View>
          <View style={styles.threeHundrade}>
            <Text style={styles.four}>80</Text>
          </View>
          <View style={styles.fourHunderade}>
            <Text style={styles.five}>80</Text>
          </View>
          <View style={styles.fiveHunderade}>
            <Text style={styles.six}>60</Text>
          </View>
          <View style={styles.sixHunderade}>
            <Text style={styles.seven}>90</Text>
          </View>
          <View style={styles.sevenHunderade}>
            <Text style={styles.eight}>100</Text>
          </View>
          <View style={styles.graphpage}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.twenty}>2 pm</Text>
              <Text style={styles.twentyOne}>3 pm</Text>
              <Text style={styles.twentyTwo}>4 pm</Text>
              <Text style={styles.twentyThree}>5 pm</Text>
              <Text style={styles.twentyFour}>6 pm</Text>
              <Text style={styles.twentyFive}>7 pm</Text>
              <Text style={styles.twentySix}>8 pm</Text>
              <Text style={styles.twentySeven}>9 pm</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};
export default AnalysisScreen;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    height: pixelNormalize(2436),
    width: pixelNormalize(1125),
  },
  screen: {
    position: "absolute",
    flexDirection: "row",
  },
  left: {
    marginTop: pixelNormalize(147),
    marginLeft: pixelNormalize(68),
    marginRight: pixelNormalize(800),
  },
  appstore: {
    marginTop: pixelNormalize(147),
    marginRight: pixelNormalize(67),
  },
  card: {
    marginTop: pixelNormalize(300),
    //padding: pixelNormalize(220),
    backgroundColor: "#222222",
    borderRadius: pixelNormalize(150),
    position: "absolute",
    marginLeft: pixelNormalize(90),
    width: pixelNormalize(1022),
    height: pixelNormalize(1022),
    transform: [{ rotate: "40deg" }],
  },
  dots: {
    top: pixelNormalize(740),
    marginLeft: pixelNormalize(1060),
    //position: 'absolute'
  },
  inner: {
    marginTop: pixelNormalize(345),
    //padding:  pixelNormalize(100),
    backgroundColor: "black",
    borderRadius: pixelNormalize(150),
    marginLeft: pixelNormalize(210),
    width: pixelNormalize(770),
    height: pixelNormalize(770),
    transform: [{ rotate: "40deg" }],
  },
  heartbeat: {
    bottom: pixelNormalize(800),
    marginLeft: pixelNormalize(520),
  },
  flash: {
    bottom: pixelNormalize(505),
    marginLeft: pixelNormalize(150),
  },
  droplet: {
    bottom: pixelNormalize(645),
    marginLeft: pixelNormalize(950),
  },
  quarters: {
    bottom: pixelNormalize(310),
    marginLeft: pixelNormalize(600),
  },
  circle: {
    backgroundColor: "#1B1B1B",
    borderRadius: pixelNormalize(300),
    borderWidth: pixelNormalize(3),
    borderColor: "#1B1B1B",
    marginLeft: pixelNormalize(400),
    paddingVertical: pixelNormalize(5),
    paddingHorizontal: pixelNormalize(5),
    width: pixelNormalize(388),
    height: pixelNormalize(388),
    bottom: pixelNormalize(920),
  },
  singleDot: {
    bottom: pixelNormalize(1620),
    marginLeft: pixelNormalize(500),
  },
  number: {
    color: "white",
    fontSize: pixelNormalize(120),
    fontFamily: "OpenSansBold",
    bottom: pixelNormalize(1250),
    marginLeft: pixelNormalize(480),
  },
  innerText: {
    color: "#ccc",
    fontSize: pixelNormalize(40),
    fontFamily: "MonsterratRegular",
    bottom: pixelNormalize(1260),
    marginLeft: pixelNormalize(550),
  },
  average: {
    flexDirection: "row",
    bottom: pixelNormalize(100),
  },
  ausu: {
    fontSize: pixelNormalize(52),
    fontFamily: "MonsterratSemiBold",
    fontWeight: "bold",
    color: "#ccc",
    marginLeft: pixelNormalize(69),
    bottom: pixelNormalize(640),
  },
  hours: {
    fontSize: pixelNormalize(52),
    fontFamily: "MonsterratSemiBold",
    color: "white",
    marginLeft: pixelNormalize(420),
    bottom: pixelNormalize(640),
    borderBottomWidth: 3,
    borderColor: "red",
  },
  days: {
    fontSize: pixelNormalize(52),
    fontFamily: "MonsterratSemiBold",
    color: "#ccc",
    marginLeft: pixelNormalize(20),
    bottom: pixelNormalize(640),
  },
  graph: {
    flexDirection: "row",
  },
  ten: {
    marginTop: pixelNormalize(1860),
    //padding: pixelNormalize(9),
    backgroundColor: "red",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(68),
    width: pixelNormalize(100),
    height: pixelNormalize(434),
    transform: [{ rotate: "180deg" }],
  },
  one: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    transform: [{ rotate: "90deg" }],
    marginTop: pixelNormalize(310),
  },
  hunderade: {
    marginTop: pixelNormalize(1901),
    //padding: 9,
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(204),
    width: pixelNormalize(100),
    height: pixelNormalize(389),
    transform: [{ rotate: "180deg" }],
  },
  two: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    transform: [{ rotate: "90deg" }],
    marginTop: pixelNormalize(270),
  },
  twoHunderade: {
    marginTop: pixelNormalize(2132),
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(340),
    width: pixelNormalize(100),
    height: pixelNormalize(158),
    transform: [{ rotate: "180deg" }],
  },
  three: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    transform: [{ rotate: "90deg" }],
    marginTop: pixelNormalize(70),
  },
  threeHundrade: {
    marginTop: pixelNormalize(1951),
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(476),
    width: pixelNormalize(100),
    height: pixelNormalize(339),
    transform: [{ rotate: "180deg" }],
  },
  four: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    marginTop: pixelNormalize(250),
    transform: [{ rotate: "90deg" }],
  },
  fourHunderade: {
    marginTop: pixelNormalize(1951),
    //padding: 9,
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    //right: 95,
    marginLeft: pixelNormalize(612),
    width: pixelNormalize(100),
    height: pixelNormalize(339),
    transform: [{ rotate: "180deg" }],
  },
  five: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    marginTop: pixelNormalize(250),
    transform: [{ rotate: "90deg" }],
  },
  fiveHunderade: {
    marginTop: pixelNormalize(2059),
    //padding: 9,
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    //right: 45,
    marginLeft: pixelNormalize(748),
    width: pixelNormalize(100),
    height: pixelNormalize(231),
    transform: [{ rotate: "180deg" }],
  },
  six: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    transform: [{ rotate: "90deg" }],
    marginTop: pixelNormalize(140),
    //right: 35,
  },
  sixHunderade: {
    marginTop: pixelNormalize(1923),
    //padding: 9,
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(884),
    //righ: 10,
    width: pixelNormalize(100),
    height: pixelNormalize(367),
    transform: [{ rotate: "180deg" }],
  },
  seven: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    transform: [{ rotate: "90deg" }],
    marginTop: pixelNormalize(280),
    //right: 80,
  },
  sevenHunderade: {
    marginTop: pixelNormalize(1901),
    //padding: 9,
    backgroundColor: "#2D2D2D",
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(1020),
    width: pixelNormalize(100),
    height: pixelNormalize(389),
    transform: [{ rotate: "180deg" }],
  },
  eight: {
    fontSize: pixelNormalize(56),
    fontFamily: "OswaldRegular",
    color: "white",
    transform: [{ rotate: "90deg" }],
    marginTop: pixelNormalize(270),
    //right: 90,
  },
  graphpage: {
    flexDirection: "row",
    marginTop: pixelNormalize(2300),
    position: "absolute",
  },
  twenty: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(83),
  },
  twentyOne: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(55),
  },
  twentyTwo: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(60),
  },
  twentyThree: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(60),
  },
  twentyFour: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(55),
  },
  twentyFive: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(60),
  },
  twentySix: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(70),
  },
  twentySeven: {
    fontSize: pixelNormalize(30),
    fontFamily: "OpenSansSemibold",
    color: "#A2A2A2",
    marginLeft: pixelNormalize(70),
  },
});

