import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 120,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginLeft: 3,
        marginVertical: 10,
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFF',
        alignSelf: 'center',
        maxWidth: '98%',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
         },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    progressBar: {
        transform: [{ rotate: '-90deg' }],
        height: 18,
        width: 57,
        backgroundColor: '#EAEAEA',
    },
    infoContainer: {
        alignContent: 'flex-start',
        height: 50,
        width: 80,
        marginTop: 2,
        marginRight: 15,
        marginLeft: -5,
        // backgroundColor: 'red',
    },
    titlenutrition:{
        paddingTop: 10,
        margin: 1,
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 6,
    },
    percentage: {
        fontSize: 13,
        fontWeight: 'bold',
    },

    gramsText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#818181',
    },
});

