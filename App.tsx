import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './src/Signup';
import Login from './src/Login';
import Home from './src/Home';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './src/Search';
import MainContainer from './src/navigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainC" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;