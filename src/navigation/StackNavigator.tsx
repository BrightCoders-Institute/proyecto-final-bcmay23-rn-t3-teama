import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { BottomTab } from './BottomTab';
import { RecipeScreen } from '../screens/RecipeScreen/RecipeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>     
      {/* <Stack.Screen
        name="Welcome"
        options={{
          cardStyle: {
            backgroundColor: 'white',
          },
          headerShown: false,
        }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        options={{
          cardStyle: {
            backgroundColor: 'white',
          },
          headerShown: false,
        }}
        component={LoginScreen}
      /> */}
      <Stack.Screen 
        name="BottomTab" 
        options={{ 
          headerShown: false 
        }} 
        component={ BottomTab } 
      />
      <Stack.Screen
      name='Recipe'
      component={RecipeScreen}
      />
    </Stack.Navigator>
  );
};
