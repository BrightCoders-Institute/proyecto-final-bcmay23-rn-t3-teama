import React, { useContext, useEffect, useState } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, useWindowDimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { AppContext } from '../context/AppContext';
import auth from '@react-native-firebase/auth';
import TopTab from './TopTab';
import { colors, styles } from '../appTheme/appTheme';

const Drawer = createDrawerNavigator();

const SideMenu = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={
                {
                    headerShown: false,
                    drawerType: width >= 600 ? 'permanent' : 'front',
                }}
            drawerContent={(props) => <MenuInterno {...props} />}

        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="TopTab" component={TopTab} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    const { appState: { userData }, logOut } = useContext(AppContext);
    const [userEmail, setUserEmail] = useState('');

    const getUserEmail = async () => {
        const user = auth().currentUser;
        if (user) {
            setUserEmail(user.email);
        }
    };

    useEffect(() => {
        getUserEmail();
    }, []);

    const logout = () => {
        auth()
            .signOut()
            .then(() => {
                logOut();
                console.log('User signed out!');
            });
    };

    return (
        <DrawerContentScrollView>
            < View style={styles.avatarContainer} >
                <Image
                    source={{
                        uri: userData.image,
                    }}
                    style={styles.avatar}
                />
                <Text style={styles.userName}>{userData.name}</Text>
                <Text style={styles.userEmail}>{userEmail}</Text>
            </ View>


            < View style={styles.menuContainer} >
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => {
                        navigation.navigate('StackNavigator');
                    }}
                >
                    <Icon name="home" size={25} color={colors.primary} />
                    <Text style={styles.menuText}> Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Book Appointment')}
                >
                    <Icon name="calendar" size={25} color={colors.primary} />
                    <Text style={styles.menuText}> Book an appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => {
                        navigation.navigate('TopTab', {
                            screen: 'MyInfoScreen',
                        });
                    }}
                >
                    <Icon name="person" size={25} color={colors.primary} />
                    <Text style={styles.menuText}> Profile</Text>
                </TouchableOpacity>

            </ View>

            <View style={styles.buttonContainer} >
                <TouchableOpacity onPress={logout} >
                    <Text style={styles.logoutButton}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView >
    );
};

export default SideMenu;
