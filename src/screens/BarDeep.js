import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image,StatusBar, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { pixelNormalize } from "../constants/Size";
import BarExercise from "./BarExercise";

const BarDeep = () => {
  return (
    <>
    <StatusBar style= 'auto' />
    <LinearGradient
      colors={["#1B1B1B",'#1A1A1A']}
      style={styles.MainContainer}
    >
      
        <View style={styles.screen}>
          {/* <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("AnlysisScreen", { username: input })
            }
          >
            <AntDesign style={styles.left} name="left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.innerText}>Squart Round Bar</Text>
          <AntDesign
            style={styles.appstore}
            name="appstore-o"
            size={30}
            color="red"
          /> */}
        </View>
        <ScrollView>
            <SafeAreaView>
        <View style={styles.container}>
        
          <Image
            style={styles.profileImage}
            source={require("../../assets/img/Squart/Squat.gif")}
          />
          <Text style={styles.curls}>
            Squart {"\n"} {"\n"}
            3 sets of 15 to 20</Text>
        </View>

        
        <View style={styles.container}>
        <Text style={styles.curls}>
             Jump Squart{"\n"} {"\n"}
             3 sets of 15 to 20 </Text>
          <Image
            style={styles.profileImage}
            source={require("../../assets/img/Squart/JumpSquat.gif")}
          />
          
        </View>

        
        <View style={styles.container}>
        
          <Image
            style={styles.profileImageOne}
            source={require("../../assets/img/Squart/Surrender.gif")}
          />
          <Text style={styles.benchExercise}>
             Surrender Squart{"\n"} {"\n"}
             3 sets of 15 to 20</Text>
          
        </View>

        <View style={styles.container}>
        <Text style={styles.curls}>
             In and Out Jacks{"\n"} {"\n"}
             3 sets of 15 to 20 </Text>
          <Image
            style={styles.profileImage}
            source={require("../../assets/img/Squart/Jacks.gif")}
          />
          
        </View>


        <View style={styles.container}>
        
        <Image
          style={styles.profileImageOne}
          source={require("../../assets/img/Squart/RollingSquat.gif")}
        />
        <Text style={styles.benchExercise}>
           Rolling Squart{"\n"} {"\n"}
           3 sets of 15 to 20 </Text>
        
      </View>

      </SafeAreaView>
      </ScrollView>
    </LinearGradient>
    </>
  );
};
export default BarDeep;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    height: pixelNormalize(2436),
    width: pixelNormalize(1125),
  },
  screen: {
    flexDirection: "row",
  },
  left: {
    marginTop: pixelNormalize(147),
    marginLeft: pixelNormalize(68),
  },
  innerText: {
    fontFamily: "OpenSansBold",
    fontSize: pixelNormalize(60),
    color: "black",
    marginTop: pixelNormalize(145),
    marginLeft: pixelNormalize(40),
  },
  appstore: {
    marginTop: pixelNormalize(147),
    marginLeft: pixelNormalize(140),
  },
  gif: {
    flexDirection: "column",
  },
  container:{
    flexDirection: 'row',
  },
  profileImage: {
    height: pixelNormalize(400),
    width: pixelNormalize(300),
    marginTop: pixelNormalize(150),
    marginLeft: pixelNormalize(100),
  },
  curls:{
    fontFamily: "OpenSansBold",
    fontSize: pixelNormalize(45),
    marginLeft: pixelNormalize(100),
    marginTop: pixelNormalize(230),
    color: 'white',
  },
  benchExercise:{
  fontFamily: "OpenSansBold",
  fontSize: pixelNormalize(45),
  marginLeft: pixelNormalize(90),
  marginTop: pixelNormalize(230),
  color: 'white',
},
  profileImageOne: {
    height: pixelNormalize(400),
    width: pixelNormalize(300),
    marginTop: pixelNormalize(150),
    marginLeft: pixelNormalize(100),
  },
}
)