import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    badgeContainer: {
        width: 120,
        height: 120,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 30,
        backgroundColor: '#F3A939',
    },
    badgeIcon: {
        width: '40%',
        height: '40%',
        resizeMode: 'contain',
        marginBottom: 5,
    },
    badgeInfo: {
        fontSize: 16,
        color: 'white',
    },
});
