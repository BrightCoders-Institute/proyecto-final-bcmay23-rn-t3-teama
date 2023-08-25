import React from 'react';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MySpecialistScreen } from '../screens/MySpecialistScreen/MySpecialistScreen';
import MyInfoScreen from '../screens/MyInfoScreen/MyInfoScreen';

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        borderWidth: 0,
                        shadowColor: 'transparent',
                    },
                    tabBarItemStyle: { height: 70 },
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
        </SafeAreaView>
    );
}

export default TopTab;
