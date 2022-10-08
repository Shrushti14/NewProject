// import * as React from 'react';
// import { View, Text } from 'react-native';



// const Tab1Screen = () =>{
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Tab 1 Screen</Text>

//         </View>

//     )
// }

// export default Tab1Screen;

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import normalize from "react-native-normalize";
import { pixelNormalize } from "../constants/Size";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView>
    
      {/* <Image
        style={styles.rectangle}
        source={require("../assets/img/SecondScreen/Rectangle.png")}
      /> */}
     
    
      <LinearGradient
        colors={["#1B1B1B", "#1A1A1A"]}
        style={styles.container}
      >
        
          <View style={styles.screen}>
            <Text style={styles.john}>Hi John Doe</Text>
            <Text style={styles.doing}>How are you doing?</Text>
            <AntDesign
              style={styles.appstore}
              name="appstore-o"
              size={30}
              color="red"
            />

            {/* <Image
          style={styles.box}
          source={require("../assets/img/ThirdScreen/Box.png")}
          /> */}
          </View>

          <View style={styles.components}>
            <View style={styles.screen}>
              <Text style={styles.calories}>Calories</Text>
              <Text style={styles.trainig}>Trainig</Text>
              <Text style={styles.step}>Avg Step</Text>
            </View>
            <View style={styles.screen}>
              <Text style={styles.six}>22,6K</Text>
              <Text style={styles.two}>2h32m</Text>
              <Text style={styles.one}>1,293</Text>
            </View>

            <Image
              style={styles.graph}
              source={require("../../assets/img/ThirdScreen/Group.png")}
            />
            <Text style={styles.summary}> Weekly Summary</Text>
            <Text style={styles.keepIt}> Your're doing good,Keep it up</Text>
            <View style={styles.circle}>
              <ProgressCircle
                style={styles.circlePercent}
                percent={70}
                radius={20}
                borderWidth={4}
                color="red"
                shadowColor="#999"
                bgColor="#242424"
              >
                <Text style={{ fontSize: 10, color: "white" }}>{"70%"}</Text>
              </ProgressCircle>
            </View>
            <View style={styles.right}>
              <AntDesign
                style={styles.iconColor}
                name="right"
                size={25}
                color="black"
              />
            </View>
          </View>
          <TouchableOpacity 
          //   onPress={()=>{
          //     navigation.navigate('Tab1Navigator');
          // }}
          >
            <View>
              <Image
                style={styles.unsplash}
                source={require("../../assets/img/ThirdScreen/unsplash.png")}
              />

              <Image
                style={styles.rectanglePlash}
                source={require("../../assets/img/ThirdScreen/RectangleOne.png")}
              />

              <Text style={styles.exercise}>Bar Shoulder{"\n"}Exercise</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          //     onPress={()=>{
          //     navigation.push('Tab2Navigator');
          // }}
          >
            <View>
              <Image
                style={styles.dumlao}
                source={require("../../assets/img/ThirdScreen/dumlao.png")}
              />

              <Image
                style={styles.rectangleDumlao}
                source={require("../../assets/img/ThirdScreen/RectangleTwo.png")}
              />

              <Text style={styles.squat}>Squat Round{"\n"}Bar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
        //    onPress={()=>{
        //     navigation.push('Tab3Navigator');
        // }}
        >
          
            <View>
              <Image
                style={styles.taran}
                source={require("../../assets/img/ThirdScreen/oksanaTaran.png")}
              />

              <Image
                style={styles.rectangleTaran}
                source={require("../../assets/img/ThirdScreen/RectangleThree.png")}
              />
              <Text style={styles.yoga}>Yoga{"\n"}Exercise</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          //   onPress={()=>{
          //     navigation.push('Tab4Navigator');
          // }}
          >
            <View>
              <Image
                style={styles.anastase}
                source={require("../../assets/img/ThirdScreen/anastase.png")}
              />

              <Image
                style={styles.rectangleAnastase}
                source={require("../../assets/img/ThirdScreen/RectangleFour.png")}
              />

              <Text style={styles.deep}>Bar deep{"\n"}Exercise</Text>
            </View>
          </TouchableOpacity>
        
      </LinearGradient>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    flex: 1,
    // alignItems: 'center',
  },
  container: {
   height: pixelNormalize(2436)
  },
  rectangle: {
    height: pixelNormalize(2436),
    width: pixelNormalize(1125),
  },
  screen: {
    position: "absolute",
    flexDirection: "row",
  },
  john: {
    fontSize: pixelNormalize(52),
    fontFamily: 'MontserratBold',
    color: "white",
    marginTop: pixelNormalize(148),
    marginLeft: pixelNormalize(52),
  },
  doing: {
    fontSize: pixelNormalize(44),
    fontFamily: 'MontserratBold',
    color: "#777777",
    marginTop: pixelNormalize(221),
    right: pixelNormalize(305),
  },
  appstore: {
    marginTop: pixelNormalize(147),
    marginLeft:  normalize(60),
  },
  // box: {
  //   height: normalize(25),
  //   width:  normalize(25),
  //   marginTop: normalize (55),
  //   marginLeft:  normalize (20),
  // },
  components: {
    marginTop: pixelNormalize(326),
    padding: pixelNormalize(50),
    borderColor: "black",
    backgroundColor: "#242424",
    borderWidth: pixelNormalize(1),
    borderRadius: pixelNormalize(60),
    position: "absolute",
    marginLeft: pixelNormalize(68),
    width: pixelNormalize(989),
    height: pixelNormalize(767),
    position: "absolute",
  },
  calories: {
    fontSize: pixelNormalize(32),
    fontFamily: 'OpenSansSemibold',
    color: "#8C8C8C",
    marginLeft: pixelNormalize(100),
    marginTop: pixelNormalize(100),
  },
  trainig: {
    fontSize: pixelNormalize(32),
    fontFamily: 'OpenSansSemibold',
    color: "#8C8C8C",
    marginLeft: pixelNormalize(200),
    marginTop: pixelNormalize(100),
  },
  step: {
    fontSize: pixelNormalize(32),
    fontFamily: 'OpenSansSemibold',
    color: "#8C8C8C",
    marginLeft: pixelNormalize(230),
    marginTop: pixelNormalize(100),
  },
  six: {
    fontSize: pixelNormalize(60),
    fontFamily: 'OpenSansBold',
    color: "white",
    marginLeft: pixelNormalize(100),
    marginTop: pixelNormalize(150),
  },
  two: {
    fontSize: pixelNormalize(60),
    fontFamily: 'OpenSansBold',
    color: "white",
    marginLeft: pixelNormalize(150),
    marginTop: pixelNormalize(150),
  },
  one: {
    fontSize: pixelNormalize(60),
    fontFamily: 'OpenSansBold',
    color: "white",
    marginLeft: pixelNormalize(130),
    marginTop: pixelNormalize(150),
  },
  graph: {
    position: "absolute",
    marginTop: pixelNormalize(250),
    left: pixelNormalize(50),
    height: pixelNormalize(310),
    width: pixelNormalize(920),
    //borderRadius: pixelNormalize(20),
  },
  circle: {
    marginLeft: pixelNormalize(480),
    top: pixelNormalize(440),
  },
  summary: {
    fontSize: pixelNormalize(40),
    fontFamily: 'OpenSansBold',
    top: pixelNormalize(550),
    color: "white",
  },
  keepIt: {
    fontSize: pixelNormalize(30),
    fontFamily: 'OpenSansSemibold',
    top: pixelNormalize(560),
    color: "#8c8c8c",
  },
  right: {
    marginTop: pixelNormalize(360),
    marginLeft: pixelNormalize(800),
  },
  iconColor: {
    color: "#8C8C8C",
  },
  unsplash: {
    position: "absolute",
    height: pixelNormalize(559),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1148),
    marginLeft: pixelNormalize(68),
    borderRadius: pixelNormalize(50),
  },
  rectanglePlash: {
    position: "absolute",
    height: pixelNormalize(559),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1148),
    marginLeft: pixelNormalize(68),
    borderRadius: pixelNormalize(50),
  },
  exercise: {
    position: "absolute",
    fontSize: pixelNormalize(44),
    fontFamily:  "OpenSanBold",
    color: "white",
    marginTop: pixelNormalize(1564),
    marginLeft: pixelNormalize(114),
  },
  dumlao: {
    position: "absolute",
    height: pixelNormalize(416),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1148),
    marginLeft: pixelNormalize(571),
    borderRadius: pixelNormalize(50),
  },
  rectangleDumlao: {
    position: "absolute",
    height: pixelNormalize(416),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1148),
    marginLeft: pixelNormalize(571),
    borderRadius: pixelNormalize(50),
  },
  squat: {
    position: "absolute",
    fontSize: pixelNormalize(44),
    fontFamily: "OpenSanBold",
    color: "white",
    marginTop: pixelNormalize(1428),
    marginLeft: pixelNormalize(610),
  },
  taran: {
    position: "absolute",
    height: pixelNormalize(559),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1731),
    marginLeft: pixelNormalize(68),
    borderRadius: pixelNormalize(50),
  },
  rectangleTaran: {
    position: "absolute",
    height: pixelNormalize(559),
    width: pixelNormalize(489),
    marginTop: pixelNormalize(1731),
    marginLeft: pixelNormalize(68),
    borderRadius: pixelNormalize(50),
  },
  yoga: {
    position: "absolute",
    fontSize: pixelNormalize(44),
    fontFamily: "OpenSanBold",
    color: "white",
    marginTop: pixelNormalize(2108),
    marginLeft: pixelNormalize(114),
  },
  anastase: {
    position: "absolute",
    height: pixelNormalize(560),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1587),
    marginLeft: pixelNormalize(571),
    borderRadius: pixelNormalize(50),
  },
  rectangleAnastase: {
    position: "absolute",
    height: pixelNormalize(560),
    width: pixelNormalize(486),
    marginTop: pixelNormalize(1587),
    marginLeft: pixelNormalize(571),
    borderRadius: pixelNormalize(50),
  },
  deep: {
    position: "absolute",
    fontSize: pixelNormalize(44),
    fontFamily: "OpenSanBold",
    color: "white",
    marginTop: pixelNormalize(2011),
    marginLeft: pixelNormalize(610),
  },
});