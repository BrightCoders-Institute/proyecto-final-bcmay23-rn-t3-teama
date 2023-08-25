import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text, View } from 'react-native';
import { CallendarWeekdayProps } from '../../interfaces/interfaces';

export const CallendarWeekday: React.FC<CallendarWeekdayProps> = ({ days, setSelectedDay, weekdays, setWeekDays }) => {

  const handleOnDayPress = () => {

    const newWeekdays = [ ...weekdays ];
    const weekDaysInFalse = newWeekdays.map(day => {
      if (day.isSelectedDay) {
        return { ...day, isSelectedDay: false };
      }
      return day;
    });

    const weekDaysUpdated = weekDaysInFalse.map(day => {
      if (day.day === days.day) {
        return { ...day, isSelectedDay: true };
      }
      return day;
    });

    const newDayObj = { ...days, isSelectedDay: true };
    setSelectedDay(newDayObj);
    setWeekDays(weekDaysUpdated);
  };

  return (
    <TouchableOpacity
      style={[
        styles.weekday,
        days.isSelectedDay
          ? { backgroundColor: '#7B5FEC', borderColor: '#7B5FEC' }
          : { backgroundColor: 'white', borderColor: '#68A76E' },
      ]}
      onPress={ handleOnDayPress }
    >
      <Text
        style={[
          days.isSelectedDay ? { color: 'white', fontWeight: '500' } : { color: '#D8CFCF' },
          { textAlign: 'center' },
        ]}
      >
        {days.weekName}
      </Text>

      <View
        style={ styles.dayContainer }
      >
        <Text style={[ days.isSelectedDay ? { fontWeight: '700' } : { fontWeight: '400' }, styles.dayText ]}>
          {days.day}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
