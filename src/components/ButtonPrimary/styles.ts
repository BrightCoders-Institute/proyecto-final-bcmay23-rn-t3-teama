import { StyleSheet } from "react-native"

    
export const styles = StyleSheet.create({

    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '95%',
        height: 50,
        flexDirection: 'row',
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
    primaryButtonValid: {
        backgroundColor: '#2774D5',
    },
    primaryButtonInvalid: {
        backgroundColor: '#A0A0A0',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonImage: {
        position: 'absolute',
        left: '10%',
        width: 25,
        height: 25,
    },
})