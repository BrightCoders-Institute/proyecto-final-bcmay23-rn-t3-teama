import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text, View } from 'react-native';

interface CallendarWeekdayProps {
  days: {
    weekName: string;
    day: number;
    month: string;
    year: number;
    isSelectedDay: boolean;
  };
}

export const CallendarWeekday: React.FC<CallendarWeekdayProps> = ({ days, setSelectedDay, weekdays, setWeekDays }) => {
  // console.log(`${days.weekName} ${days.day} current?: ${days.isCurrentDay}`);
  return (
    <TouchableOpacity
      style={[
        styles.weekday,
        days.isSelectedDay
          ? { backgroundColor: '#7B5FEC', borderColor: '#7B5FEC' }
          : { backgroundColor: 'white', borderColor: '#68A76E' },
      ]}
      onPress={() => {
        console.log(`${days.completeDay}, ${days.day} ${days.month} ${days.year}`);

        const newWeekdays = [ ...weekdays ]; //copia del original
        // poner todos los días en false
        const weekDaysInFalse = newWeekdays.map(day => {
          if (day.isSelectedDay) {
            return { ...day, isSelectedDay: false }; // Crear una copia del objeto con isSelectedDay cambiado
          }
          return day; // Mantener el objeto sin cambios
        });
        // poner el seleccionado en true
        const weekDaysUpdated = weekDaysInFalse.map(day => {
          if (day.day === days.day) {
            return { ...day, isSelectedDay: true }; // Crear una copia del objeto con isSelectedDay cambiado
          }
          return day; // Mantener el objeto sin cambios
        });

        const newDayObj = { ...days, isSelectedDay: true };
        setSelectedDay(newDayObj);
        setWeekDays(weekDaysUpdated); // actualizar estado de los días
      }}
    >
      <Text
        style={[
          days.isSelectedDay ? { color: 'white' } : { color: '#D8CFCF' },
          { textAlign: 'center' },
        ]}
      >
        {days.weekName}
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          width: 38,
          height: 30,
          justifyContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', color: 'black' }}>
          {days.day}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
