import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text, View } from 'react-native';

interface WeekDayProps {
  days: {
    weekName: string;
    day: number;
    month: string;
    year: number;
    isSelectedDay: boolean;
  };
}

export const WeekDay: React.FC<WeekDayProps> = ({ days, setSelectedDay }) => {
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
        const newDayObj = { ...days, isSelectedDay: true};
        setSelectedDay(newDayObj);
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
