// import * as React from 'react';
// import { View, Text } from 'react-native';



// const Tab4Screen = () =>{
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Tab 4 Screen</Text>

//         </View>

//     )
// }

// export default Tab4Screen;


import React from "react";
import {Image,Text, View,StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { pixelNormalize } from "../constants/Size";

const ProfileScreen = () => {


    return(
        <LinearGradient colors={["#1B1B1B",'#1A1A1A']} style={styles.MainContainer}>
       
       <View>
        <Text style={styles.profileText}>Profile</Text>
        <Image 
        style={styles.profileImage}
        source={require("../../assets/img/ThirdScreen/profile.png")}
        />
       
       <View style={styles.components}>
          <View style={styles.screen}>
            <Text style={styles.calories}>Name</Text>
            <Text style={styles.trainig}>Gender</Text>
            <Text style={styles.age}>Age</Text>
            <Text style={styles.height}>Height</Text>
            <Text style={styles.weight}>Weight</Text>
          </View>
          <View style={styles.screen}>
            <Text style={styles.one}>John Doe</Text>
            <Text style={styles.two}>Male</Text>
            <Text style={styles.three}>26</Text>
            <Text style={styles.four}>183cm</Text>
            <Text style={styles.five}>82kg</Text>
          </View>
          </View>
       

       </View>
         
      </LinearGradient> 
    );

}
export default ProfileScreen;
const styles = StyleSheet.create({
    MainContainer:{
        flex:1,   
    },
    
    profileImage:{
        alignSelf: 'center',
        marginTop: pixelNormalize(150),  
         
    },
    profileText:{
      fontSize: pixelNormalize(120),
      fontFamily: 'OpenSansBold',
        color: '#ccc',
        marginLeft: pixelNormalize(370),
        marginTop: pixelNormalize(180),

    },
    screen: {
        position: "absolute",
        flexDirection: "column",
      },
    components: {
        marginTop: pixelNormalize(900),
        padding: pixelNormalize(15),
        borderColor: "black",
        backgroundColor: "#242424",
        borderWidth: pixelNormalize(1),
        borderRadius: pixelNormalize(60),
        position: "absolute",
        marginLeft: pixelNormalize(100),
        width: pixelNormalize(950),
        height: pixelNormalize(800),
        position: "absolute",
      },
      calories: {
        fontSize:pixelNormalize(60),
        fontFamily: 'OpenSansSemibold',
        color: "#8C8C8C",
        marginLeft: pixelNormalize(200),
        marginTop: pixelNormalize(70),
      },
      trainig: {
        fontSize:pixelNormalize(60),
        fontFamily: 'OpenSansSemibold',
        color: "#8C8C8C",
        marginLeft: pixelNormalize(200),
        marginTop: pixelNormalize(50),
      },
      age: {
        fontSize:pixelNormalize(60),
        fontFamily: 'OpenSansSemibold',
        color: "#8C8C8C",
        marginLeft: pixelNormalize(200),
        marginTop: pixelNormalize(50),
      },
      height: {
        fontSize:pixelNormalize(60),
        fontFamily: 'OpenSansSemibol',
        color: "#8C8C8C",
        marginLeft: pixelNormalize(200),
        marginTop: pixelNormalize(50),
      },
      weight: {
        fontSize:pixelNormalize(60),
        fontFamily: 'OpenSansSemibold',
        color: "#8C8C8C",
        marginLeft: pixelNormalize(200),
        marginTop: pixelNormalize(50),
      },
      one: {
        fontSize: pixelNormalize(60),
        fontFamily: 'OpenSansBold',
        color: "white",
        marginLeft: pixelNormalize(450),
        marginTop: pixelNormalize(60),
      },
      two: {
        fontSize: pixelNormalize(60),
        fontFamily: 'OpenSansBold',
        color: "white",
        marginLeft: pixelNormalize(450),
        marginTop: pixelNormalize(50),
      },
      three: {
        fontSize: pixelNormalize(60),
        fontFamily: 'OpenSansBold',
        color: "white",
        marginLeft: pixelNormalize(450),
        marginTop: pixelNormalize(50),
      },
      four: {
        fontSize: pixelNormalize(60),
        fontFamily: 'OpenSansBold',
        color: "white",
        marginLeft: pixelNormalize(450),
        marginTop: pixelNormalize(50),
      },
      five: {
        fontSize: pixelNormalize(60),
        fontFamily: 'OpenSansBold',
        color: "white",
        marginLeft: pixelNormalize(450),
        marginTop: pixelNormalize(50),
      },
    
      
     

})
