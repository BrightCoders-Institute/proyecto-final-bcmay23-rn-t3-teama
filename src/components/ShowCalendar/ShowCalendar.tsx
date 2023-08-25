import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DayObjectProps } from '../../interfaces/interfaces';
import { CallendarWeekday } from '../CallendarWeekday/CallendarWeekday';
import { getCurrentWeekdays, namesDays } from '../../helpers/getCurrentWeekdays';
import { styles } from './styles';

export const ShowCalendar = () => {
  const [weekDays, setWeekDays] = useState<DayObjectProps[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayObjectProps | undefined>();

  useEffect(() => {
    return setWeekDays(getCurrentWeekdays(namesDays, setSelectedDay));
  }, []);

  return (
    <View style={ styles.calendarContainer }>
      <Text style={ styles.dayTitle }>
        <Text style={{color:'#68A76E'}}>{`${ namesDays[new Date().getDay()] === selectedDay?.completeDay ? 'Today' : selectedDay?.completeDay}`}</Text>
        <Text style={{color:'#000000'}}>{`, ${selectedDay?.day} ${selectedDay?.month} ${selectedDay?.year}`}</Text>
      </Text>
      <FlatList
        data={weekDays}
        style={{marginLeft: 25}}
        renderItem={({ item }) => <CallendarWeekday days={item} setSelectedDay={setSelectedDay} weekdays={weekDays} setWeekDays={setWeekDays} />}
        horizontal
      />
    </View>
  );
};
