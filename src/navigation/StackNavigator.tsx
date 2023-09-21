import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab } from './BottomTab';
import { RecipeScreen } from '../screens/RecipeScreen/RecipeScreen';
import MyMealDetailsScreen from '../screens/MyMealDetailsScreen/MyMealDetailsScreen';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import WorkoutScreen from '../screens/WorkoutScreen/Workout';
import { SearchFoodsScreen } from '../screens/SearchFoodsScreen/SearchFoodsScreen';
import { SearchFoodsDetailsScreen } from '../screens/SearchFoodsDetailsScreen/SearchFoodsDetailsScreen';


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
          name="Book Appointment"
          component={BookAppointment}
          options={{ 
            cardStyle: { backgroundColor: 'white' },
            headerBackTitle: ''
        }}
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
        name="Workout Tips"
        component={WorkoutScreen}
        options={{
           cardStyle: { backgroundColor: 'white' },
          headerBackTitle: '' }}
      />
     <Stack.Screen
            name="Search Foods"
            component={SearchFoodsScreen}
            options={{ cardStyle: { backgroundColor: 'white' }, headerBackTitle: ''  }}
          />
    <Stack.Screen
      name="Food Details"
      component={SearchFoodsDetailsScreen}
      options={{ cardStyle: { backgroundColor: 'white' } }}
    />
    </Stack.Navigator>
  );
};
