import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 16,
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
    container:{
        flexDirection: 'row',
        alignSelf: 'center',
        maxWidth: '100%',
        paddingBottom: 40,
    },
    clientKey: {
        alignSelf: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        borderColor:'#58D164',
        borderWidth: 3,
        borderRadius: 11,
        height: 45,
        marginTop: 20,
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
    generalInfo: {
        width: 120,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    recordMeasures: {
        paddingBottom: 10,
    },
    metricsTitle: {
        marginLeft: 12,
        paddingTop: 12,
    },
    metricsContainer: {
        flexDirection: 'row',
        padding: 12,
    },
    column: {
        width: 160,
        paddingHorizontal: 5,
    },
    containerImc: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        marginBottom: 12,
        backgroundColor: 'white',
        borderRadius: 11,
        paddingLeft: 7,
        marginTop: 2,
        paddingVertical: 16,
        paddingHorizontal: 10,
        width: '100%',
        height: 90,
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
    singleViewContainer: {
        flex: 1,
        borderRadius: 8,
        marginStart: 10,
        backgroundColor: 'lightblue',
        marginVertical: 2,
        paddingHorizontal: 10,
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
    metrics:{
        paddingBottom: 10,
    },
    smallIcons: {
        width: '30%',
        marginRight: 3,
        height: '60%',
        resizeMode: 'contain',
        marginBottom: 3,
    },
    bodyIcon: {
        width: '40%',
        height: '60%',
        resizeMode: 'cover',
        marginBottom: 2,
    },

    metricscontainer: {
        marginLeft: 10,
    },

    imcContainer: {
        marginStart: 3,
    },

    ageContainer: {
        marginStart: 2,
    },
});
