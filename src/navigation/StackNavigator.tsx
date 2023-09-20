import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { BottomTab } from './BottomTab';
import { RecipeScreen } from '../screens/RecipeScreen/RecipeScreen';
import MyMealDetailsScreen from '../screens/MyMealDetailsScreen/MyMealDetailsScreen';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import { AppContext } from '../context/AppContext';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { appState: { isLoggedIn } } = useContext( AppContext );
  console.log(isLoggedIn);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="BottomTab"
            options={{
              headerBackTitle: ' ',
              headerShown: false,
            }}
            component={BottomTab}
          />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
          />
          <Stack.Screen
            name="Meals Details"
            options={{
              headerBackTitle: ' ',
            }}
            component={MyMealDetailsScreen}
          />
          <Stack.Screen
            name="Book Appointment"
            component={BookAppointment}
            options={{ cardStyle: { backgroundColor: 'white' } }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
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
          />
        </>
      )}
    </Stack.Navigator>
  );
};
