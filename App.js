// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import {StyleSheet, Text, View} from 'react-native';

import AppNavigator from "./src/navigators/AppNavigator";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import {useFonts} from "expo-font";

export default function App() {
    const [fontsLoaded]=useFonts({
        'OpenSansRegular': require('./assets/font/OpenSansRegular.ttf'),
        'OpenSanBold': require('./assets/font/OpenSansBold.ttf'),
		'OpenSanSemibold': require('./assets/font/OpenSansSemibold.ttf'),
		'OswaldVariableFont': require('./assets/font/OswaldVariableFont.ttf'),
		'OswaldRegular': require('./assets/font/OswaldRegular.ttf'),
		'MonsterratBold': require('./assets/font/MontserratBold.ttf'),
        'MonsterratSemiBold': require('./assets/font/MontserratSemiBold.ttf'),
		'MonsterratRegular': require('./assets/font/MontserratRegular.ttf')
    });
    return (
        <>
        
            <AppNavigator/>
            {/* <BottomTabNavigator/> */}
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});