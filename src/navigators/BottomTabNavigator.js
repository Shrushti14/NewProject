
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/HomeScreen";
import Tab2Screen from "../screens/Tab2Screen";
import Tab3Screen from "../screens/Tab3Screen";
import Tab4Screen from "../screens/Tab4Screen";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(<>
    
        <NavigationContainer>
        <Tab.Navigator >
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
            }}/>
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="Tab3" component={Tab3Screen} />
            <Tab.Screen name="Tab4" component={Tab4Screen} />
        </Tab.Navigator>
        </NavigationContainer>
        </>);
}

export default BottomTabNavigator
