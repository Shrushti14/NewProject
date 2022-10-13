import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import HomeScreen from "../screens/HomeScreen";
import BarExercise from "../screens/BarExercise";
import BottomTabNavigator from "./BottomTabNavigator";
import SquartRound from "../screens/SquartRound";
import YogaExercise from "../screens/YogaExercise";
// import { collapsable } from "../sdeprecated-react-native-prop-types/DeprecatedViewPropTypes";
import WorkOutOneScreen from "../screens/WorkOutOneScreen";
import WorkOutTwoScreen from "../screens/WorkOutTwoScreen";
import WorkOutThreeScreen from "../screens/WorkOutThreeScreen";
import WorkOutFourScreen from "../screens/WorkOutFourScreen";
import WorkOutFiveScreen from "../screens/WorkOutFiveScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Bar Shoulder Exercise"
          component={BarExercise}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Squart Round Bar"
          component={SquartRound}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Yoga Exercise"
          component={YogaExercise}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Bar Deep Exercise"
          component={BarExercise}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="WorkOut 1"
          component={WorkOutOneScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="WorkOut 2"
          component={WorkOutTwoScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="WorkOut 3"
          component={WorkOutThreeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="WorkOut 4"
          component={WorkOutFourScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="WorkOut 5"
          component={WorkOutFiveScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1B1B1B",
            },
            headerTintColor: 'white',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
