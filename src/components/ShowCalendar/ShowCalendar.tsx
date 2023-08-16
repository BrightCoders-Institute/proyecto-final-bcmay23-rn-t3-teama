import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DayObject } from '../../interfaces/interfaces';
import { CallendarWeekday } from '../CallendarWeekday/CallendarWeekday';
import { styles } from './styles';

export const ShowCalendar = () => {
    const [weekDays, setWeekDays] = useState<DayObject[]>([]);
    const [selectedDay, setSelectedDay] = useState<DayObject | undefined>();

    const namesDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        getCurrentWeekdays();
      }, []);
    
      function getCurrentWeekdays() {
        const results: DayObject[] = [];
    
        const todaysDate = new Date();
    
        const dayCurrWeek = todaysDate.getDay();
    
        const firstWeekDay = -dayCurrWeek;
        const lastWeekDay = 6 - dayCurrWeek;
    
        for (let i = firstWeekDay; i <= lastWeekDay; i++) {
          const date = new Date(todaysDate);
          date.setDate(todaysDate.getDate() + i);
          const nameDay = namesDays[(dayCurrWeek + i + 7) % 7].slice(0, 3).toUpperCase();
          const dayObject = { isSelectedDay: i === 0, weekName: nameDay, completeDay: (namesDays[(dayCurrWeek + i + 7) % 7]), day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear() }
          results.push(dayObject);
          if (i === 0) setSelectedDay(dayObject);
        }
        setWeekDays(results);
        return results;
      }
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
    
  )
}
