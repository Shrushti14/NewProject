// import * as React from 'react';
// import {View, Text, Button} from 'react-native';
// import {useNavigation} from "@react-navigation/native";



// const SplashScreen = () =>{

//     const navigation = useNavigation();
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Splash Screen</Text>
//             <Button title={'Click me'} onPress={()=>{
//                 navigation.push('Home');
//             }}></Button>

//         </View>

//     )
// }

// export default SplashScreen;


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { pixelNormalize } from "../constants/Size";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SecondScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar style="light" />
      <ScrollView>
      <SafeAreaView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.victor}
          source={require("../../assets/img/SecondScreen/victor.png")}
        />
        <Image
          style={styles.rectangle}
          source={require("../../assets/img/SecondScreen/Rectangle.png")}
        />
        </View>
        <Image
          style={styles.group}
          source={require("../../assets/img/SecondScreen/Group.png")}
        />
        <View style={styles.lineOne}>
          <Text style={styles.welcome}>WELCOME</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.you}>YOU</Text>
          <Text style={styles.can}>CAN</Text>
          <Text style={styles.reach}>REACH</Text>
          <Text style={styles.your}>YOUR</Text>
          <Text style={styles.goal}>GOAL</Text>
        </View>
        <Image
          style={styles.groupOne}
          source={require("../../assets/img/SecondScreen/GroupOne.png")}
        />

        <View style={styles.card}>
          <TouchableOpacity
            onPress={()=>{
              navigation.navigate('BottomTabNavigator');
          }}
          >
            <Text style={styles.Start}>START YOUR FREE TRIAL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.components}>
          <TouchableOpacity>
            <Text style={styles.join}>JOIN NOW </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}> ── OR ──</Text>

        {/* <View style={styles.iconException}>
        <AntDesign style={styles.icon}
          name="facebook-square"
          size={30}
          color="white"
        /> 
        <AntDesign style={styles.icon2}
          name="twitter" size={30} color="white" 
        />
        <AntDesign style={styles.icon3}
        name="instagram" size={30} color="white" top={10}/>
        </View> */}

        <View style={styles.iconException}>
          <TouchableOpacity>
            <Image
              style={styles.facebookBackground}
              source={require("../../assets/img/SecondScreen/EllipseFacebook.png")}
            />
            <Image
              style={styles.facebookicon}
              source={require("../../assets/img/SecondScreen/facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.twitterBackground}
              source={require("../../assets/img/SecondScreen/EllipseTwitter.png")}
            />
            <Image
              style={styles.twittericon}
              source={require("../../assets/img/SecondScreen/twitter.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.instagramBackground}
              source={require("../../assets/img/SecondScreen/EllipseInstagram.png")}
            />
            <Image
              style={styles.instagramicon}
              source={require("../../assets/img/SecondScreen/instagram.png")}
            />
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
export default SecondScreen;
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    //flex: 1,
    // alignItems: 'center',
  },
  victor: {
    height: pixelNormalize(2436),
    width: pixelNormalize(1125),
  },
  rectangle: {
    position: "absolute",
    height: pixelNormalize(2436),
    width: pixelNormalize(1160),
  },
  group: {
    position: "absolute",
    marginTop: pixelNormalize(140),
    marginLeft: pixelNormalize(71),
    width: pixelNormalize(52),
    height: pixelNormalize(410),
  },
  lineOne:{
    position: 'absolute',
  },
  welcome: {
    fontSize:pixelNormalize(116),
    fontFamily:'OswaldVariableFont',
    color: "white",
    transform: [{ rotate: "-90deg" }],
    marginTop: pixelNormalize(370),
  },
  line: {
    position: "absolute",
    //height: pixelNormalize(900),
    //width: pixelNormalize(742),
    marginTop: pixelNormalize(405)
  },
  you: {
    position: "absolute",
    color: "white",
    marginTop: pixelNormalize(180),
    marginLeft: pixelNormalize(310),
    fontSize: pixelNormalize(130),
    fontFamily: 'OpenSansBold',
  },
  can: {
    position: "absolute",
    color: "#454545",
    marginTop: pixelNormalize(280),
    marginLeft: pixelNormalize(310),
    fontSize: pixelNormalize(150),
   fontFamily: 'OpenSansBold',
  },
  reach: {
    position: "absolute",
    color: "#c2c2c2",
    marginTop: pixelNormalize(410),
    marginLeft: pixelNormalize(310),
    fontSize: pixelNormalize(150),
    fontFamily:'OswaldVariableFont', 
  },
  your: {
    position: "absolute",
    color: "white",
    marginTop: pixelNormalize(560),
    marginLeft: pixelNormalize(310),
    fontSize: pixelNormalize(140),
    fontFamily: 'OpenSansBold',
  },
  goal: {
    position: "absolute",
    color: "white",
    marginTop: pixelNormalize(700),
    marginLeft: pixelNormalize(310),
    fontSize: pixelNormalize(150),
    fontFamily: 'OpenSansBold',
  },
  groupOne: {
    position: "absolute",
    height: pixelNormalize(709),
    width: pixelNormalize(257),
    marginTop: pixelNormalize(793),
    marginLeft: pixelNormalize(68),
  },
  card: {
    marginTop: pixelNormalize(1444),
    padding: 20,
    backgroundColor: "red",
    borderRadius: 100,
    position: "absolute",
    marginLeft: pixelNormalize(121),
    width: pixelNormalize(883),
    height: pixelNormalize (180),
  },
  Start: {
    color: "white",
    textAlign: "center",
    fontFamily: 'OpenSansBold',
    fontSize: pixelNormalize(44),
  },
  components: {
    marginTop: pixelNormalize(1674),
    padding: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 100,
    position: "absolute",
    marginLeft: pixelNormalize(121),
    width: pixelNormalize(883),
    height: pixelNormalize(180),
  },
  join: {
    color: "white",
    textAlign: "center",
    fontFamily: 'OpenSansBold',
    fontSize: pixelNormalize(44),
  },
  text: {
    position: "absolute",
    color: "white",
    marginTop: pixelNormalize(1980),
    marginLeft: pixelNormalize(429),
    fontSize: 18,
    fontFamily: 'OpenSansRegular',
  },
  iconException: {
    position: "absolute",
    marginTop: pixelNormalize(2185),
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  facebookBackground: {
    position: "absolute",
    height: pixelNormalize(180),
    width: pixelNormalize(180),
    marginLeft: pixelNormalize(245),
  },
  facebookicon: {
    position: "absolute",
    height: pixelNormalize(80),
    width: pixelNormalize(40),
    marginLeft: pixelNormalize(315),
    marginTop: pixelNormalize(45),
  },
  twitterBackground: {
    position: "absolute",
    height: pixelNormalize(180),
    width: pixelNormalize(180),
    marginLeft: pixelNormalize(473),
  },
  twittericon: {
    position: "absolute",
    height: pixelNormalize(77),
    width: pixelNormalize(94),
    marginLeft: pixelNormalize(516),
    marginTop: pixelNormalize(45),
  },
  instagramBackground: {
    position: "absolute",
    height: pixelNormalize(180),
    width: pixelNormalize(180),
    marginLeft: pixelNormalize(701),
  },
  instagramicon: {
    position: "absolute",
    height: pixelNormalize(77),
    width: pixelNormalize(77),
    marginLeft: pixelNormalize(752),
    marginTop: pixelNormalize(45),
  },

  //   icon:{
  //     backgroundColor:'#3B5998',
  //     borderRadius: 50,
  //     borderWidth: 3,
  //     borderColor: '#3B5998',
  //     left: 100,
  //     paddingVertical: '2%',
  //     paddingHorizontal: '2%',

  //   },
  //   icon2:{

  //     backgroundColor: '#00ACEE',
  //     borderRadius: 50,
  //     borderWidth: 3,
  //     borderColor: "#00ACEE",
  //     left: 150,
  //     paddingVertical: '2%',
  //     paddingHorizontal: '2%',
  //   },
  //   icon3:{

  //     backgroundColor: '#B14CA7',
  //     borderRadius: 50,
  //     borderWidth: 3,
  //     borderColor: "#B14CA7",
  //     left: 190,
  //     paddingVertical: '2%',
  //     paddingHorizontal: '2%',

  //   },
});

