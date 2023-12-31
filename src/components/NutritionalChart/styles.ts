import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '32.5%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        marginHorizontal: 2,
        marginVertical: 10,
    },
    mainContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        maxWidth: '90%',
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
    },
    titlenutrition: {
        paddingTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 6,
        color: 'black',
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

export default style;
