import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from '../context/AppContext';
import SideMenu from './SideMenu';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
    const { appState: { isLoggedIn } } = useContext(AppContext);
    console.log(isLoggedIn);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {isLoggedIn ? (
                <Stack.Screen
                    name="SideMenu"
                    component={SideMenu}
                />
            ) : (
                <>
                    <Stack.Screen
                        name="Welcome"
                        options={{
                            cardStyle: {
                                backgroundColor: 'white',
                            },
                        }}
                        component={WelcomeScreen}
                    />
                    <Stack.Screen
                        name="Login"
                        options={{
                            cardStyle: {
                                backgroundColor: 'white',
                            },
                        }}
                        component={LoginScreen}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};
