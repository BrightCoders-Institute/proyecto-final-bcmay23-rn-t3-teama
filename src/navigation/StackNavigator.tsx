import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { BottomTab } from './BottomTab';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={ WelcomeScreen } />
      <Stack.Screen name="Login" component={ LoginScreen } />
      <Stack.Screen name="BottomTab" options={{ headerShown: false }} component={ BottomTab } />
    </Stack.Navigator>
  )
}
