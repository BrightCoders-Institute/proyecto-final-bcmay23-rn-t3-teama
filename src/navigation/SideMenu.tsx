import React, { useContext } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, useWindowDimensions, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { AppContext } from '../context/AppContext';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

const SideMenu = () => {
    const { width } = useWindowDimensions();
    const { appState: { isLoggedIn } } = useContext(AppContext);

    return (
        <Drawer.Navigator
            screenOptions={
                {
                    headerShown: false,
                    drawerType: width >= 600 ? 'permanent' : 'front',
                }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            {/* {isLoggedIn ? } */}
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    const { appState: { userData }, logOut } = useContext(AppContext);

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

            {/* Parte del avatar */}
            < View style={styles.avatarContainer} >
                <Image
                    source={{
                        uri: 'https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png',
                    }}
                    style={styles.avatar}
                />
                <Text style={styles.userName}>{userData.name}</Text>
            </ View>


            {/* Opciones de Menú*/}
            < View style={styles.menuContainer} >
                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => {
                        navigation.navigate('StackNavigator', {
                            screen: 'BottomTab',
                            params: {
                                screen: 'HomeScreen',
                            },
                        });
                    }}
                >
                    <Icon name="home" size={25} color={colors.primary} />
                    <Text style={styles.menuText}> Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('Book Appointment')}
                >
                    <Icon name="calendar" size={25} color={colors.primary} />
                    <Text style={styles.menuText}> Book an appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => {
                        navigation.navigate('StackNavigator', {
                            screen: 'BottomTab',
                            params: {
                                screen: 'TopTab',
                                params: {
                                    screen: 'MyInfoScreen',
                                },
                            },
                        });
                    }}
                >
                    <Icon name="person" size={25} color={colors.primary} />
                    <Text style={styles.menuText}> Profile</Text>
                </TouchableOpacity>

            </ View>

            <View style={{ marginTop: '75%' }} >
                <TouchableOpacity
                    onPress={logout}
                >
                    <Text style={styles.logoutButton}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView >
    );
};

export default SideMenu;


export const colors = {
    primary: '#795DEA',

};

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    buttonBig: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginVertical: 10,
    },
    buttonBigText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    userName: {
        color: 'black',
        marginTop: 10,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    menuButton: {
        marginVertical: 10,
    },
    menuText: {
        fontSize: 20,
        color: 'black',
    },
    logoutButton: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        padding: 10,
        borderRadius: 15,
    },
});
