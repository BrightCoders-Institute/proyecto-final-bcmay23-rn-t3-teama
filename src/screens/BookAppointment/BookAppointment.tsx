import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { calendarTheme, styles } from './styles';
import moment from 'moment';

const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const currentDate = moment().format('YYYY-MM-DD');

    return (
        <View>
            <Text style={styles.subTitle}>Choose the date</Text>
            <Calendar
                theme={calendarTheme}
                minDate={currentDate}
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: { selected: true },
                }}
            />
        </View>
    );
};

export default BookAppointment;
