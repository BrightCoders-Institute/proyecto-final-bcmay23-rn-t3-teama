import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MySpecialistScreen from '../screens/MySpecialistScreen/MySpecialistScreen';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { useWindowDimensions } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    const { top } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{ backgroundColor: 'white', paddingTop: top }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                tabBarStyle: {
                    elevation: 0,
                    borderWidth: 0,
                    shadowColor: 'transparent',
                },
                tabBarLabelStyle: {
                    fontSize: 18, color: '#FF914D',
                    textTransform: 'capitalize',
                },
                tabBarIndicatorStyle: { backgroundColor: '#FF914D' /*maxWidth: '90%', alignSelf: 'center', marginLeft: '7.5%', marginRight: '64%' */ },
                swipeEnabled: true,
                tabBarGap: 10,
            }}
        >
            <Tab.Screen name="MySpecialistScreen" options={{ title: 'My Specialist' }} component={ } />
            <Tab.Screen name="ProfileScreen" options={{ title: 'My Info' }} component={ } />
        </Tab.Navigator>
    );
}

export default TopTab;
