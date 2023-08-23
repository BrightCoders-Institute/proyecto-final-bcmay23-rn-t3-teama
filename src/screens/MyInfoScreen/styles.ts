import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 16,
        paddingVertical: 10,
        // paddingHorizontal: 20,
        paddingHorizontal: '5%',
        width: '100%',
        // height: 250,
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
        justifyContent: 'center',
        // backgroundColor: 'red',
        // alignSelf: 'center',
        // maxWidth: '100%',
        // paddingBottom: 30,
        paddingBottom: '10%',
        paddingTop: 10,
    },
    clientKey: {
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor:'#58D164',
        borderWidth: 3,
        borderRadius: 11,
        // height: 45,
        height: '20%',
        marginTop: 20,
        // paddingVertical: 8,
        // paddingHorizontal: 10,
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
        fontSize: 18,
    },
    patientName: {
        paddingVertical: 15,
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
        paddingBottom: 5,
        paddingTop: 20,
    },
    titleCards: {
        // marginLeft: 12,
        paddingTop: 12,
        height: '15%',
    },
    metricsContainer: {
        flexDirection: 'row',
        height: '85%', // porque el título tiene 15%
        // backgroundColor: 'yellow',
        // alignContent: 'space-evenly',
        // justifyContent: 'center',
        // alignContent: 'space-between',
        // padding: 12,
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // width: 160,
        width: '40%',
        // flex: 1,
        // backgroundColor: 'blue',
        // height: '100%',
        // paddingHorizontal: 5,
    },
    containerImc: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // marginVertical: 50,
        marginBottom: 12,
        backgroundColor: 'white',
        borderRadius: 11,
        height: '40%',
        // paddingLeft: 7,

        // marginTop: 2,

        padding: 15,
        // paddingVertical: 16,
        // paddingHorizontal: 10,
        // width: '100%',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    singleViewContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        // height: '90%',
        // width: '60%',
        borderRadius: 8,
        marginStart: 10,
        // marginVertical: 2,

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
        flexDirection: 'row',
        alignSelf: 'center',
        height: '90%',
    },
    metrics:{
        // paddingBottom: 10,
        // justifyContent: 'space-between',
        // marginBottom: 4,
    },
    smallIcons: {
        width: '25%',
        // marginRight: 3,
        marginRight: '2%',
        height: '60%',
        resizeMode: 'contain',
        // resizeMode: 'center',
        // marginBottom: 3,
    },
    imageContainer: {
        // backgroundColor: 'blue',
        width: '50%',
        justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
    },
    bodyIcon: {
        // width: '90%',
        height: '80%',

        // width: 140,
        // height: 160,
        resizeMode: 'contain',
        // margin: 20,
        // marginTop: 18,
        // alignItems: 'center',
        // backgroundColor: 'green',
        // right: '20%',
        // flex: 1,
        // justifyContent: 'center',
        alignSelf: 'center',
    },
    metricscontainer: {
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: '5%',
        // marginLeft: '8%',
        // width: '100%',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // marginLeft: 15,
        // alignItems: 'flex-start',
        // height: 40,
        // width: 70,
        // marginTop: 18,
    },
    imcContainer: {
        // marginStart: 8,
        marginStart: '10%',
    },
    ageContainer: {
        // marginStart: 10,
        marginStart: '10%',
    },
    counsellingContainer: {
        backgroundColor: 'white',
        borderRadius: 13,
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    middleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        marginRight: 10,
    },
});
