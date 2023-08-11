import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 120,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 8,
        marginVertical: 30,
    },
    mainContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        maxWidth: '100%',
        backgroundColor: 'white',
    },
    progressBar: {
        transform: [{ rotate: '-90deg' }],
        height: 18,
        width: 55,
        backgroundColor: '#EAEAEA',
    },
    infoContainer: {
        alignContent: 'flex-start',
        height: 50,
        width: 70,
        marginTop: 2,
        marginRight: 15,
    },
    titlenutrition:{
        paddingTop: 10,
        margin: 1,
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 6,
    },
    percentage: {
        fontSize: 12,
    },
});

export default style;
