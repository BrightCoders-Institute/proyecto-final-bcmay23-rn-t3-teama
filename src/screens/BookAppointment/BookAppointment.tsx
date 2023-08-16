import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { calendarTheme, styles } from './styles';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    console.log(selectedDate);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const currentDate = moment().format('YYYY-MM-DD');

    return (
        <ScrollView>
            <View>
                <Text style={styles.subTitle}>Choose the date</Text>
                <Calendar
                    style={styles.calendar}
                    theme={calendarTheme}
                    minDate={currentDate}
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true },
                    }}
                />
                {selectedDate && (
                    <Text style={styles.selectedDateText}>
                        Fecha seleccionada: {selectedDate}
                    </Text>
                )}
            </View>
            <View>
                <Text style={styles.subTitle}>Choose the time</Text>
            </View>
        </ScrollView>
    );
};

export default BookAppointment;
