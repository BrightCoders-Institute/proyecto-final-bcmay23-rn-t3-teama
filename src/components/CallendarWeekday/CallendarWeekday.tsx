import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text, View } from 'react-native';

interface DayObject {
  isSelectedDay: boolean;
  weekName: string;
  completeDay: string;
  day: number;
  month: string;
  year: number;
}

interface CallendarWeekdayProps {
  days: DayObject;
  setSelectedDay: React.Dispatch<React.SetStateAction<DayObject | undefined>>;
  weekdays: DayObject[];
  setWeekDays: React.Dispatch<React.SetStateAction<DayObject[]>>;
}

export const CallendarWeekday: React.FC<CallendarWeekdayProps> = ({ days, setSelectedDay, weekdays, setWeekDays }) => {

  const handleOnDayPress = () => {
    // console.log(`${days.completeDay}, ${days.day} ${days.month} ${days.year}`);

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
