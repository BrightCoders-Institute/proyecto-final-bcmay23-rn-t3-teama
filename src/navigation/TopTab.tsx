import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MySpecialistScreen } from '../screens/MySpecialistScreen/MySpecialistScreen';
import MyInfoScreen from '../screens/MyInfoScreen/MyInfoScreen';

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    return (
        <Tab.Navigator
            style={{ backgroundColor: 'white' }}
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
                tabBarIndicatorStyle: { backgroundColor: '#FF914D' },
                swipeEnabled: true,
                tabBarGap: 10,
            }}
        >
            <Tab.Screen name="MySpecialistScreen" options={{ title: 'My Specialist' }} component={MySpecialistScreen} />
            <Tab.Screen name="MyInfoScreen" options={{ title: 'My Info' }} component={MyInfoScreen} />
        </Tab.Navigator>
    );
}

export default TopTab;
