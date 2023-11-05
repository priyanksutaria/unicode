import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Search from './Search';
import { darkair } from './Constants';

const Tab = createBottomTabNavigator();

function MainContainer(){
  return (
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn == "Home") {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == "Search") {
              iconName = focused ? 'search' : 'search-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: darkair,
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10},
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />

      </Tab.Navigator>
  );
}

export default MainContainer;