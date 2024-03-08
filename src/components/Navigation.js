import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/index';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { userInfo, splashLoading ,logout} = useContext(AuthContext);

  if (splashLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.token ? (
          <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen 
    name="Home Haul"
    component={HomeScreen}
    options={{ 
      tabBarIcon: ({ focused }) => (
        <Icon name={focused ? "home" :"home"}
          size={24}
          color={focused ? COLORS.primary : COLORS.gray2}
        />
      )
    }}
  />
  <Tab.Screen 
    name="SearchScreen"
    component={SearchScreen}
    options={{ 
      tabBarIcon: ({ focused }) => (
        <Icon 
          name={focused ? "search-sharp" : "search-outline"}
          size={24}
          color={focused ? COLORS.primary : COLORS.gray2}
        />
      )
    }}
  />
  <Tab.Screen 
    name="Profile"
    component={ProfileScreen}
    options={{ 
      tabBarIcon: ({ focused }) => (
        <Ionicons 
          name={focused ? "person" : "person-outline"}
          size={24}
          color={focused ? COLORS.primary : COLORS.gray2}
        />
      )
    }}
  />
   </Tab.Navigator>
  
  );
};

export default Navigation;