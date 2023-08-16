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
        margin: 10,
        elevation: 4,
    },
    selectedDateText: {
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
    },
    flatListItemTouchable: {
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        overflow: 'visible',
    },
    flatListItemText: {
        marginHorizontal: 10,
        fontWeight: '600',
    },
    flatList: {
        paddingVertical: 5,
    },
    subTitle: {
        marginVertical: 15,
        fontWeight: '700',
        fontSize: 15,
        color: 'grey',
        width: '40%',
        textAlign: 'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#795DEA',
    },
});
