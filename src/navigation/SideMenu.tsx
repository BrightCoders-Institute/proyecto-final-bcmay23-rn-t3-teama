import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, useWindowDimensions, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';

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
            <Drawer.Screen name="Tabs" component={StackNavigator} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png',
                    }}
                    style={styles.avatar}
                />
            </View>


            {/* Opciones de Menú*/}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Icon name="home" size={25} color="grey" />
                    <Text style={styles.menuText}> Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name="cog-outline" size={25} color="grey" />
                    <Text style={styles.menuText}> Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
};

export default SideMenu;


export const colors = {
    primary: '#5856d6',

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
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    menuButton: {
        marginVertical: 10,
    },
    menuText: {
        fontSize: 20,

    },
});
