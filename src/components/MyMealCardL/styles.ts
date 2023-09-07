import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 10,
        paddingRight: 20,
        width: '95%',
        height: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    buttonText: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'right',
    },
    textContainer: {
        flex: 1,
        marginLeft: '5%',
        alignItems: 'flex-end',
        marginTop: 50,
    },
    titleContainer: {
        position: 'absolute',
        alignItems: 'flex-end',
        top: 0,
        right: 10,
        padding: 10,
        marginTop: 5,
    },
    buttonImage: {
        width: 120,
        height: 160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 0,
    },
});
