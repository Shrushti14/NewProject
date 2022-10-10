import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import SplashScreen from "../../screens/SplashScreen";
import HomeScreen from "../../screens/FirstScreen";
import BarExercise from "../../screens/BarExercise";
import SquartRound from "../../screens/SquartRound";
import YogaExercise from "../../screens/YogaExercise";
import BarDeep from "../../screens/BarDeep";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Tab1Navigator = () => {
    const navigation = useNavigation();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen
        name="Bar Shoulder Exercise"
        component={BarExercise}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "red" },
        }}
      
      />
    </Stack.Navigator>
  );
};

export default Tab1Navigator;
