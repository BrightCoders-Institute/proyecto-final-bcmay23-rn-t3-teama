import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { calendarTheme, styles } from './styles';
import { availableAppointmentTimes } from '../../testData/availableAppointmentTimes';
import { Calendar, DateData } from 'react-native-calendars';
import moment from 'moment';
import Map from '../../components/Map/Map';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import LoadingModal from '../../components/LoadingModal/LoadingModal';


const successCompleted = require('../../assets/img/successDoctorModal.png');
const errorImage = require('../../assets/img/errorDoctorModal.png');


const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isAppointmentSuccessful, setAppointmentSuccessful] = useState(false);

    const currentDate = moment().format('YYYY-MM-DD');

    const filteredAvailableTimes = selectedDate ? availableAppointmentTimes[selectedDate] || [] : [];

    const onDayPress = (day: DateData) => {
        setSelectedDate(day.dateString);
        setSelectedTime(null);
    };
    console.log('Fecha seleccionada: ', selectedDate);

    const selectTime = (time: string) => {
        setSelectedTime(time);
    };

    const markedDates = {
        [selectedDate || '']: { selected: true },
    };

    const renderTimeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => selectTime(item)}
            style={[styles.flatListItemTouchable, { backgroundColor: selectedTime === item ? '#795DEA' : '#f5f5f5' }]}
        >
            <Text style={{ ...styles.flatListItemText, color: selectedTime === item ? 'white' : 'black' }}>{item}</Text>
        </TouchableOpacity>
    );

    const confirmAppointment = () => {

        if ( !selectedDate || !selectedTime ) {
            setModalVisible(true);
            setAppointmentSuccessful(false);
        } else {
            setModalVisible(true);
            setAppointmentSuccessful(true);
        }

    };

    const closeModal = () => {
        setModalVisible(false);
        setAppointmentSuccessful(true);
    };

    return (
        <ScrollView>
            <LoadingModal
                isVisible={isModalVisible}
                isLoading={false}
                successImageUrl={successCompleted}
                errorImageUrl={errorImage}
                title={isAppointmentSuccessful ? 'Booking confirmed' : 'Oops! something went wrong'}
                subtitle={isAppointmentSuccessful ? 'Please atteng your appointment on the agreed day and time' : 'Sorry, the appointment could not be scheduled, please try again later.'}
                isSuccessful={isAppointmentSuccessful}
                onClose={closeModal}
            />
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
            </View>

            {selectedDate && (
                <View>
                    <Text style={styles.subTitle}>Choose the time</Text>
                    {filteredAvailableTimes.length === 0 ? (
                        <Text style={styles.unavailableDate}>Sorry! There are no available appointments on this date.</Text>
                    ) : (
                        <FlatList
                            style={styles.flatList}
                            data={filteredAvailableTimes}
                            renderItem={renderTimeItem}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    )}
                </View>
            )}

            <View>
                <Text style={styles.subTitle}>Location</Text>
                <Map />
            </View>

            <View style={styles.buttonView}>
                <ButtonSecondary title="Confirm Appointment" color="#795DEA" onPress={confirmAppointment} />
            </View>
        </ScrollView>
    );
};

export default BookAppointment;
