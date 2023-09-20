import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab } from './BottomTab';
import { RecipeScreen } from '../screens/RecipeScreen/RecipeScreen';
import MyMealDetailsScreen from '../screens/MyMealDetailsScreen/MyMealDetailsScreen';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import WorkoutScreen from '../screens/WorkoutScreen/Workout';


const Stack = createStackNavigator();

export const StackNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        options={{
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
        component={MyMealDetailsScreen}
        options={{
          headerBackTitle: 'Diet',
        }}
      />
      <Stack.Screen
        name="Book Appointment"
        component={BookAppointment}
        options={{ 
          cardStyle: { backgroundColor: 'white' },
          headerBackTitle: ''
      }}
      />
      <Stack.Screen
        name="Workout Tips"
        component={WorkoutScreen}
        options={{
           cardStyle: { backgroundColor: 'white' },
          headerBackTitle: '' }}
      />
     
    </Stack.Navigator>
  );
};
