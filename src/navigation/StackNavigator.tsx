import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={ WelcomeScreen } />
      <Stack.Screen name="Login" component={ LoginScreen } options={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
};
