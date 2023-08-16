import { StyleSheet } from 'react-native';
import { Theme } from 'react-native-calendars/src/types';

export const calendarTheme: Theme = {
    selectedDayBackgroundColor: '#795DEA',
    selectedDayTextColor: '#FFFFFF',
    todayTextColor: '#FF914D',
    arrowColor: '#795DEA',
};

export const styles = StyleSheet.create({
    subTitle: {
        margin: 10,
        fontWeight: '700',
        fontSize: 15,
        color: 'grey',
        maxWidth: '40%',
        textAlign: 'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#795DEA',
    },
});
