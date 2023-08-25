import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        borderRadius: 15,
        backgroundColor: 'white',
        padding: 20,
        width: '70%',
        height: '45%',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    activityIndicator: {
        transform: [{ scale: 2 }],
        marginVertical: 25,
    },
    modalInfoContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        width: 150,
        height: 150,
        marginTop: '5%',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    infoText: {
        marginVertical: '8%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
    infoTextSuccess: {
        color: '#17AB76',
    },
    infoTextError: {
        color: '#E30000',
    },
    infoDetailText: {
        textAlign: 'center',
        color: 'grey',
    },
});

export default styles;