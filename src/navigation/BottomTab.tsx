import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MyMealsScreen from '../screens/MyMealsScreen/MyMealsScreen';
import { ReportScreen } from '../screens/ReportScreen/ReportScreen';
import TopTab from './TopTab';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle= {{paddingTop: top, backgroundColor: '#FFFF'}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              focused
                ? iconName = 'home'
                : iconName = 'home-outline';
              break;
            case 'MyMealsScreen':
              focused
                ? iconName = 'nutrition'
                : iconName = 'nutrition-outline';
              break;
            case 'ReportScreen':
              focused
                ? iconName = 'pie-chart'
                : iconName = 'pie-chart-outline';
              break;
            case 'TopTab':
              focused
                ? iconName = 'person'
                : iconName = 'person-outline';
              break;
          }
          return (
            <Icon name={iconName} size={20} color={color} />
          );
        },
        tabBarActiveTintColor: '#795DEA',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 17,
        },
        headerTitleAlign: 'center',
        
      })
      }>
      <Tab.Screen name="HomeScreen" options={{ headerShown: false, title: 'Home' }} component={HomeScreen} />
      <Tab.Screen name="MyMealsScreen" options={{ headerShown: false, title: 'Diet' }} component={MyMealsScreen} />
      <Tab.Screen name="ReportScreen" options={{ headerShown: false, title: 'Report' }} component={ReportScreen} />
      <Tab.Screen name="TopTab" options={{ title: 'About', headerShown: false, headerStyle: { borderColor: 'white' } }} component={TopTab} />
    </Tab.Navigator>
  );
};
