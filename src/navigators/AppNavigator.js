
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="First" component={FirstScreen} 
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen name="Second" component={SecondScreen} 
                options={{
                    headerShown: false,
                }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;