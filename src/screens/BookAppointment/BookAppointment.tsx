import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { calendarTheme, styles } from './styles';
import { availableAppointmentTimes } from '../../testData/availableAppointmentTimes';
import { Calendar, DateData } from 'react-native-calendars';
import moment from 'moment';
import Map from '../../components/Map/Map';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import { AppContext } from '../../context/AppContext';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AppointmentData } from '../../interfaces/interfaces';

const successCompleted = require('../../assets/img/successDoctorModal.png');
const errorImage = require('../../assets/img/errorDoctorModal.png');

const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isAppointmentSuccessful, setAppointmentSuccessful] = useState(false);

    const { appState: { userData: { userKey } } } = useContext(AppContext);
    const navigation = useNavigation();

    const currentDate = moment().format('YYYY-MM-DD');

    const filteredAvailableTimes = selectedDate ? availableAppointmentTimes[selectedDate] || [] : [];

    const onDayPress = (day: DateData) => {
        setSelectedDate(day.dateString);
        setSelectedTime(null);
    };

    const markedDates = {
        [selectedDate || '']: { selected: true },
    };

    const renderTimeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelectedTime(item)}
            style={[styles.flatListItemTouchable, { backgroundColor: selectedTime === item ? '#795DEA' : '#f5f5f5' }]}
        >
            <Text style={{ ...styles.flatListItemText, color: selectedTime === item ? 'white' : 'black' }}>{item}</Text>
        </TouchableOpacity>
    );

    const sendToFirestore = async (appointmentToSave: AppointmentData) => {
        try {
            const db = firestore();

            const appointmentsRef = db.collection('appointments');

            await appointmentsRef.add(appointmentToSave);

            console.log('Datos enviados con éxito');
            return true;
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            return false;
        }
    };

    const confirmAppointment = () => {

        if (!selectedDate || !selectedTime) {
            setModalVisible(true);
            setAppointmentSuccessful(false);
        } else {

            const appointmentDetails = {
                date: selectedDate,
                time: selectedTime,
                userKey,
                nutritionistKey: '123456', // Obtener desde el context cuando se tengan datos del nutriologo en firestore
            };

            sendToFirestore(appointmentDetails)
                .then((success) => {
                    setModalVisible(true);
                    setAppointmentSuccessful(success);
                });
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        setAppointmentSuccessful(true);
        navigation.goBack();
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
                    <Text style={{ ...styles.subTitle, marginBottom: 0 }}>Choose the time</Text>
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
                <ButtonSecondary title="Confirm Appointment" color="#795DEA" onPress={confirmAppointment} isDisabled={!selectedDate || !selectedTime} />
            </View>
        </ScrollView>
    );
};

export default BookAppointment;
