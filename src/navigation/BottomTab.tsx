import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MyMealsScreen from '../screens/MyMealsScreen/MyMealsScreen';
import { ReportScreen } from '../screens/ReportScreen/ReportScreen';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
     <Tab.Navigator
     screenOptions= { ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
  
          let iconName: string = '';
          switch ( route.name ){
            case 'HomeScreen':
                focused 
                ? iconName = 'home'
                : iconName ='home-outline'
            break;
            case 'MyMealsScreen':
                focused
                ? iconName = 'nutrition'
                : iconName = 'nutrition-outline'
            break;
            case 'ReportScreen':
                focused
                ? iconName = 'pie-chart'
                : iconName = 'pie-chart-outline'
            break;
            case 'ProfileScreen':
                focused
                ? iconName = 'person'
                : iconName = 'person-outline'
            break;
          }
          return (
            <Icon name={ iconName } size={20} color={ color } />
          )
        },
        tabBarActiveTintColor: '#795DEA',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 5,
          },
          tabBarLabelStyle:{
            fontSize : 17,
          }
      })
      }>
      <Tab.Screen name="HomeScreen" options={{ headerShown: false, title: 'Home' }} component={ HomeScreen } />
      <Tab.Screen name="MyMealsScreen" options={{ title:'Diet' }} component={ MyMealsScreen } />
      <Tab.Screen name="ReportScreen" options={{ title: 'Report' }} component={ ReportScreen } />
      <Tab.Screen name="ProfileScreen" options={{ title: 'Profile' }} component={ ProfileScreen } />
    </Tab.Navigator>
  )
}
