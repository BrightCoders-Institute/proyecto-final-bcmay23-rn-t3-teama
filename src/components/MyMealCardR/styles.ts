import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 10,
        paddingLeft: 20,
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
        color: 'black',
        fontSize: 15,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: 50,
        marginRight: 10
      },
      titleContainer: {
        position: 'absolute', 
        top: 0,
        left: 10,
        padding: 10, 
      },
    buttonImage: {
        width: 120,
        height: 160,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 20,
    },
})