import { StyleSheet } from 'react-native';
import { Theme } from 'react-native-calendars/src/types';

export const calendarTheme: Theme = {
    selectedDayBackgroundColor: '#795DEA',
    selectedDayTextColor: '#FFFFFF',
    todayTextColor: '#FF914D',
    arrowColor: '#795DEA',
};

export const styles = StyleSheet.create({
    calendar: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 20,
        elevation: 4,
    },
    selectedDateText: {
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
    },
    unavailableDate: {
        width: '95%',
        marginBottom: 15,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: '#ff4545',
        color: 'white',
        borderRadius: 10,
        paddingVertical: 7.5,
        paddingHorizontal: 2.5,
    },
    flatList: {
        marginBottom: 15,
        marginLeft: '2.5%',
    },
    flatListItemTouchable: {
        marginHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 20,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        overflow: 'visible',
        marginVertical: 10,
    },
    flatListItemText: {
        marginHorizontal: 10,
        fontWeight: '600',
    },
    subTitle: {
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '700',
        fontSize: 17,
        color: 'black',
        width: '40%',
        marginLeft: '2.5%',
    },
    buttonView: {
        marginVertical: 25,
    },
});
