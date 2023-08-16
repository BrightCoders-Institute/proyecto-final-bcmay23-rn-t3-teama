import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { calendarTheme, styles } from './styles';
import { availableAppointmentTimes } from '../../testData/availableAppointmentTimes';
import { Calendar, DateData } from 'react-native-calendars';
import moment from 'moment';

const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const currentDate = moment().format('YYYY-MM-DD');

    const filteredAvailableTimes = selectedDate ? availableAppointmentTimes[selectedDate] : [];

    const onDayPress = (day: DateData) => {
        setSelectedDate(day.dateString);
        setSelectedTime(null);
    };

    const selectTime = (time: string) => {
        setSelectedTime(time);
    };

    const markedDates = {
        [selectedDate || '']: { selected: true },
    };


    const renderTimeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            onPress={() => selectTime(item)}
            style={[styles.flatListItemTouchable, { backgroundColor: selectedTime === item ? '#795DEA' : '#f5f5f5' }]}
        >
            <Text style={{ ...styles.flatListItemText, color: selectedTime === item ? 'white' : 'grey' }}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView>
            <View>
                <Text style={styles.subTitle}>Choose the date</Text>
                <Calendar
                    style={styles.calendar}
                    theme={calendarTheme}
                    minDate={currentDate}
                    onDayPress={onDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                />
                {selectedDate && (
                    <Text style={styles.selectedDateText}>
                        Fecha seleccionada: {selectedDate}
                    </Text>
                )}
            </View>
            <View>
                <Text style={styles.subTitle}>Choose the time</Text>
                <FlatList
                    style={styles.flatList}
                    data={filteredAvailableTimes}
                    renderItem={renderTimeItem}
                    keyExtractor={(item) => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View>
                <Text style={styles.subTitle}>Location</Text>
            </View>
        </ScrollView>
    );
};

export default BookAppointment;
