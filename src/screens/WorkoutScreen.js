// import * as React from 'react';
// import { View, Text } from 'react-native';



// const Tab3Screen = () =>{
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Tab 3 Screen</Text>

//         </View>

//     )
// }

// export default Tab3Screen;



import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, SafeAreaView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { pixelNormalize } from "../constants/Size";
import { useNavigation } from "@react-navigation/native";


// const DATA = [
//   {
//     id: "1",
//     image1: require("../assets/img/FourthScreen/unsplash.png"),
//     image2: require("../assets/img/FourthScreen/Rectangle.png"),
//     image3: require("../assets/img/FourthScreen/jeroen.png"),
//     image4: require("../assets/img/FourthScreen/Group.png"),
//     text1: "Stphen Lie",
//     text2: "Workout 1",
//   },
//   {
//     id: "2",
//     image11: require("../assets/img/FourthScreen/loganWeaver.png"),
//     image12: require("../assets/img/FourthScreen/RectangleTwo.png"),
//     image13: require("../assets/img/FourthScreen/alex.png"),
//     image14: require("../assets/img/FourthScreen/Group.png"),
//     text11: "John Doe",
//     text12: "Workout 2",
//   },
//   {
//     id: "3",
//     image1: require("../assets/img/FourthScreen/unsplash.png"),
//     image2: require("../assets/img/FourthScreen/Rectangle.png"),
//     image3: require("../assets/img/FourthScreen/jeroen.png"),
//     image4: require("../assets/img/FourthScreen/Group.png"),
//     text1: "Stphen Lie",
//     text2: "Workout",
//   },
//   {
//     id: "4",
//     image1: require("../assets/img/FourthScreen/unsplash.png"),
//     image2: require("../assets/img/FourthScreen/Rectangle.png"),
//     image3: require("../assets/img/FourthScreen/jeroen.png"),
//     image4: require("../assets/img/FourthScreen/Group.png"),
//     text1: "Stphen Lie",
//     text2: "Workout",
//   },
//   {
//     id: "5",
//     image1: require("../assets/img/FourthScreen/unsplash.png"),
//     image2: require("../assets/img/FourthScreen/Rectangle.png"),
//     image3: require("../assets/img/FourthScreen/jeroen.png"),
//     image4: require("../assets/img/FourthScreen/Group.png"),
//     text1: "Stphen Lie",
//     text2: "Workout",
//   },
// ]
const WorkoutScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#1B1B1B", "#1A1A1A"]}
      style={styles.MainContainer}
    >
      <>
        <View style={styles.screen}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("AnlysisScreen", { username: input })
            }
          >
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
          {/* <FlatList 
          data={DATA}
          renderItem={({ item }) => ()}
          keyExtractor={(item) =>item.id}>
          </FlatList> */}
            <>
            <View>
            <TouchableOpacity
             onPress={()=>{
              navigation.push('WorkOut 1');
          }}
            >
              <Image
                style={styles.logan}
                source={require("../../assets/img/FourthScreen/unsplash.png")}
              />
              <Image
                style={styles.rectangleTwo}
                source={require("../../assets/img/FourthScreen/Rectangle.png")}
              />
              <Image
                style={styles.alex}
                source={require("../../assets/img/FourthScreen/jeroen.png")}
              />
              <Image
                style={styles.groupOne}
                source={require("../../assets/img/FourthScreen/Group.png")}
              />
              <View style={styles.stphen}>
                <Text style={styles.doe}>Stphen Lie</Text>
                <Text style={styles.workoutTwo}>Workout 1</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
            onPress={()=>{
              navigation.push('WorkOut 2');
          }}
          >
              <Image
                style={styles.logan}
                source={require("../../assets/img/FourthScreen/loganWeaver.png")}
              />
              <Image
                style={styles.rectangleTwo}
                source={require("../../assets/img/FourthScreen/RectangleTwo.png")}
              />
              <Image
                style={styles.alex}
                source={require("../../assets/img/FourthScreen/alex.png")}
              />
              <Image
                style={styles.groupOne}
                source={require("../../assets/img/FourthScreen/Group.png")}
              />
              <View style={styles.stphen}>
                <Text style={styles.doe}>John Doe</Text>
                <Text style={styles.workoutTwo}>Workout 2</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
             onPress={()=>{
              navigation.push('WorkOut 3');
          }}
            >
              <Image
                style={styles.logan}
                source={require("../../assets/img/FourthScreen/freitas.png")}
              />
              <Image
                style={styles.rectangleTwo}
                source={require("../../assets/img/FourthScreen/Rectangle.png")}
              />
              <Image
                style={styles.alex}
                source={require("../../assets/img/FourthScreen/burriss.png")}
              />
              <Image
                style={styles.groupOne}
                source={require("../../assets/img/FourthScreen/Group.png")}
              />
              <View style={styles.stphen}>
                <Text style={styles.stack}>Jenifer Stack</Text>
                <Text style={styles.workoutThree}>Workout 3</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
             onPress={()=>{
              navigation.push('WorkOut 4');
          }}
          >
              <Image
                style={styles.logan}
                source={require("../../assets/img/FourthScreen/pexels.png")}
              />
              <Image
                style={styles.rectangleTwo}
                source={require("../../assets/img/FourthScreen/Rectangle.png")}
              />
              <Image
                style={styles.alex}
                source={require("../../assets/img/FourthScreen/kimson.png")}
              />
              <Image
                style={styles.groupOne}
                source={require("../../assets/img/FourthScreen/Group.png")}
              />
              <View style={styles.stphen}>
                <Text style={styles.mie}>Jason Mie</Text>
                <Text style={styles.workoutFour}>Workout 4</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
             onPress={()=>{
              navigation.push('WorkOut 5');
          }}
          >
              <Image
                style={styles.logan}
                source={require("../../assets/img/FourthScreen/maragos.png")}
              />
              <Image
                style={styles.rectangleTwo}
                source={require("../../assets/img/FourthScreen/Rectangle.png")}
              />
              <Image
                style={styles.alex}
                source={require("../../assets/img/FourthScreen/lucatero.png")}
              />
              <Image
                style={styles.groupOne}
                source={require("../../assets/img/FourthScreen/Group.png")}
              />
              <View style={styles.stphen}>
                <Text style={styles.jack}>Mark Jack</Text>
                <Text style={styles.workoutFive}>Workout 5</Text>
              </View>
            </TouchableOpacity>
          </View>
          </>
          
          
            
        
          </SafeAreaView>
        </ScrollView>
      </>
    </LinearGradient>
  );
};
export default WorkoutScreen;
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
  appstore: {
    marginTop: pixelNormalize(147),
    marginLeft: pixelNormalize(800),
  },
  unsplash: {
    height: pixelNormalize(340),
    width: pixelNormalize(989),
    marginTop: pixelNormalize(304),
    borderRadius: pixelNormalize(60),
    marginLeft: pixelNormalize(68),
  },
  rectangle: {
    position: "absolute",
    height: pixelNormalize(340),
    width: pixelNormalize(989),
    marginTop: pixelNormalize(304),
    borderRadius: pixelNormalize(60),
    marginLeft: pixelNormalize(68),
  },
  jeroen: {
    position: "absolute",
    marginTop: pixelNormalize(315),
    height: pixelNormalize(160),
    width: pixelNormalize(160),
    marginLeft: pixelNormalize(77),
  },
  group: {
    position: "absolute",
    marginTop: pixelNormalize(311),
    height: pixelNormalize(254),
    width: pixelNormalize(344),
    marginLeft: pixelNormalize(702),
  },
  stphen: {
    flexDirection: "row",
  },
  lie: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(130),
    color: "white",
  },
  workoutOne: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(500),
    color: "white",
  },

  logan: {
    height: pixelNormalize(340),
    width: pixelNormalize(989),
    // marginTop: normalize(2),
    borderRadius: pixelNormalize(60),
    marginLeft: pixelNormalize(68),
  },
  rectangleTwo: {
    position: "absolute",
    height: pixelNormalize(340),
    width: pixelNormalize(989),
    //marginLeft: normalize(1),
    borderRadius: pixelNormalize(60),
    marginLeft: pixelNormalize(68),
  },
  alex: {
    position: "absolute",
    marginTop: pixelNormalize(10),
    height: pixelNormalize(160),
    width: pixelNormalize(160),
    marginLeft: pixelNormalize(77),
  },
  groupOne: {
    position: "absolute",
    marginTop: pixelNormalize(10),
    height: pixelNormalize(254),
    width: pixelNormalize(344),
    marginLeft: pixelNormalize(702),
  },
  doe: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(109),
    color: "white",
  },
  workoutTwo: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(500),
  },
  stack: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(109),
  },
  workoutThree: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(450),
  },
  mie: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(109),
  },
  workoutFour: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(500),
  },
  jack: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(109),
  },
  workoutFive: {
    fontSize: pixelNormalize(40),
    fontFamily: "OpenSansSemibold",
    color: "white",
    bottom: pixelNormalize(100),
    marginLeft: pixelNormalize(500),
  },
});

