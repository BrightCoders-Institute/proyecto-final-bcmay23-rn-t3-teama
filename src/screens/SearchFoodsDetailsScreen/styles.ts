import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    imageDetails: {
        width: '40%',
    },
    titleContainer:{
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: '10%',
        paddingHorizontal: '6%',
    },
    title: {
        padding: '2%',
    },
    nutritionalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    chartContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tableContainer: {
        flexDirection: 'row',
    },
    miniCircle: {
        width: '10%',
        aspectRatio: 1,
        borderRadius: 999,
    },
    nutritionPercentageText: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        backgroundColor: '#444a54',
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
    table: {
        flexDirection: 'column',
    },
});
