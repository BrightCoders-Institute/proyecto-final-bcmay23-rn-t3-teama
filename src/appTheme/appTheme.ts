import { StyleSheet } from 'react-native';


export const colors = {
    primary: '#795DEA',
};

export const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        marginTop: -10,
        backgroundColor: colors.primary,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    userName: {
        color: 'white',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '700',
    },
    userEmail: {
        color: 'white',
        fontSize: 20,
    },
    menuContainer: {
        marginTop: 40,
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },
    menuButton: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    menuText: {
        fontSize: 20,
        color: 'grey',
    },
    buttonContainer: {
        marginTop: '65%',
        paddingVertical: 10,
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
