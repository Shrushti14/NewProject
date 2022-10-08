
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen';
import AnalysisScreen from "../screens/AnalysisScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import ProfileScreen from "../screens/ProfileScreen";


import { Image,StyleSheet } from "react-native";
import { pixelNormalize } from '../constants/Size';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Tab1Navigator from './tabs/Tab1Navigator';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(<>

        {/* <NavigationContainer> */}
        <Tab.Navigator
             screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'white',
                tabBarLabelStyle: {paddingBottom:10,fontSize:10},
                tabBarStyle: {
                    borderTopWidth:0,
                    height:67,
                     backgroundColor:'#050503',
                    //paddingBottom:2,
                    paddingHorizontal:'6%',
                    
      
      
                },
                style:{


                },
            tabBarShowLabel: false,
            tabBarIconStyle:{},
  
  
        }}

        >
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon:({color}) => ( <Octicons name="home" size={24} color={color} />) ,}}
            />
            <Tab.Screen name="Analysis" component={AnalysisScreen}
             options={{
                headerShown: false,
                tabBarIcon:({color}) => (< AntDesign name="piechart" size={24} color={color} /> ) ,}}
            />
            <Tab.Screen name="Workout" component={WorkoutScreen} 
            options={{
                headerShown: false,
            tabBarIcon:({color}) => ( <FontAwesome5 name="dumbbell" size={24} color={color} />),}}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                headerShown: false,
                tabBarIcon:({color}) => ( <Image 
                style={styles.image}
                source={require("../../assets/img/ThirdScreen/profile.png")}  />),}}
            />
            
        </Tab.Navigator>
        {/* </NavigationContainer> */}
        </>);
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    image:{
      height:pixelNormalize(100),
      width: pixelNormalize(100),
     
    },
})