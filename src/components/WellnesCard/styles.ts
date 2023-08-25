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
        height: '19.5%',
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
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 8,
        marginTop: 50,
      },
      icon: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
      },
    buttonImage: {
        width: '33%',
        height: '105%',
    },
});
