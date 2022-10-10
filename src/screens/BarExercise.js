import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image,StatusBar, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// import { pixelNormalize } from "../Constants/Size";
import { ScrollView } from "react-native-gesture-handler";
import { pixelNormalize } from "../constants/Size";

const BarExercise = () => {
  return (
    <>
    <StatusBar style= 'auto' />
    <LinearGradient
      colors={["#1B1B1B",'#1A1A1A']}
      style={styles.MainContainer}
    >
      
        <View style={styles.screen}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("AnlysisScreen", { username: input })
            }
          >
           
          </TouchableOpacity>
          
          {/* <AntDesign
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
            source={require("../../assets/img/Exercise/BackExercises.gif")}
          />
          <Text style={styles.curls}>
            Decline Seated Bicep Curls{"\n"} {"\n"}
             3 Sets of 10 -15 reps each </Text>
        </View>

        
        <View style={styles.container}>
        <Text style={styles.curls}>
             Lying Bent Over Rows{"\n"} {"\n"}
             4 Sets of 10 -15 reps each </Text>
          <Image
            style={styles.profileImage}
            source={require("../../assets/img/Exercise/ChestPress.gif")}
          />
          
        </View>

        
        <View style={styles.container}>
        
          <Image
            style={styles.profileImageOne}
            source={require("../../assets/img/Exercise/DumbbellBent.gif")}
          />
          <Text style={styles.benchExercise}>
             Bench Press Exercise{"\n"} {"\n"}
             3 Sets of 10 -15 reps each </Text>
          
        </View>

        <View style={styles.container}>
        <Text style={styles.curls}>
             Lying Bent Over Rows{"\n"} {"\n"}
             4 Sets of 10 -15 reps each </Text>
          <Image
            style={styles.profileImage}
            source={require("../../assets/img/Exercise/ConcentrationCurl.gif")}
          />
          
        </View>


        <View style={styles.container}>
        
        <Image
          style={styles.profileImageOne}
          source={require("../../assets/img/Exercise/UprightRows.gif")}
        />
        <Text style={styles.benchExercise}>
           Bench Press Exercise{"\n"} {"\n"}
           3 Sets of 10 -15 reps each </Text>
        
      </View>

       </SafeAreaView>
      </ScrollView>
    </LinearGradient>
    </>
  );
};
export default BarExercise;
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
    color: "white",
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
    marginLeft: pixelNormalize(70),
  },
  curls:{
    fontFamily: "OpenSansBold",
    fontSize: pixelNormalize(45),
    marginLeft: pixelNormalize(90),
    marginTop: pixelNormalize(230),
    color: 'white',
  },
  benchExercise:{
  fontFamily: "OpenSansBold",
  fontSize: pixelNormalize(45),
  marginLeft: pixelNormalize(40),
  marginTop: pixelNormalize(230),
  color: 'white',
},
  profileImageOne: {
    height: pixelNormalize(400),
    width: pixelNormalize(300),
    marginTop: pixelNormalize(150),
    marginLeft: pixelNormalize(100),
  },
//   components: {
//     marginTop: pixelNormalize(370),
//     padding: pixelNormalize(50),
//     borderColor: "black",
//     backgroundColor: "#242424",
//     borderWidth: pixelNormalize(1),
//     //borderRadius: pixelNormalize(60),
//     //position: "absolute",
//     marginLeft: pixelNormalize(430),
//     width: pixelNormalize(650),
//     height: pixelNormalize(480),
//     position: "absolute",
 // },
});
