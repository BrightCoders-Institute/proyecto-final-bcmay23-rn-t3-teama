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
        paddingBottom: 30,
        width: '70%',
        height: 'auto',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginVertical: 20,
    },
    activityIndicator: {
        transform: [{ scale: 2 }],
        marginVertical: 25,
    },
    modalInfoContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        width: 100,
        height: 100,
        marginTop: '5%',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    infoText: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        color: '#17AB76',
    },
    infoDetailText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 18,
        borderColor: '#17AB76',
        borderWidth: 2,
        borderRadius: 15,
        padding: '5%',
        marginBottom: '5%',

    },
    authorText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',

    },
});

export default styles;
