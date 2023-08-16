import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '95%',
        height: 240,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    clientKey: {
        alignSelf: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        borderColor:'#58D164',
        borderWidth: 3,
        borderRadius: 11,
        height: 45,
        marginTop: 7,
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: '90%',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    keyText: {
        fontSize: 20,
    },
    patientName: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems:'center',
    },
    weighInfo: {
        alignSelf: 'center',

    },
});
