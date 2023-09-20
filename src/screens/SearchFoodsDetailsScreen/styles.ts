import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // backgroundColor: 'white',
        flexGrow: 1,
        // paddingVertical: '2%',
    },
    imageDetails: {
        width: '40%',
        // backgroundColor: 'red',
        // height: 85,
        // marginLeft: 10,
        // marginRight: 15,
        // borderRadius: 10,
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: '3%',
        marginVertical: 15,
    },
    title: {
        padding: '2%',
    },
    nutritionalContainer: {
        flexDirection: 'row',
    },
    chartContainer: {
        flexDirection: 'row',
    },
    tableContainer: {
        flexDirection: 'row',
    },
});
