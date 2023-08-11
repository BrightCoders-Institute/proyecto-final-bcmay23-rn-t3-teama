import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import { WeekDay } from '../../components/CallendarWeekday/CallendarWeekday';
import BreakfastImg from '../../assets/img/Breakfast.png';
import SnackImg from '../../assets/img/helty-snack.png';
import LunchImg from '../../assets/img/grilledChiken.jpg';
import DinnerImg from '../../assets/img/dinner.jpeg';

const MyMealsScreen = () => {
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState();

  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.'
  const calories = 'Recomended 830 - 1170Cal';

  useEffect(() => {
    getCurrentWeekdays();
  }, []);

  function getCurrentWeekdays() {
    // const namesDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const namesDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
    const results = [];

    // const todaysDate = new Date("2023-10-28T00:00:00");
    const todaysDate = new Date();

    const dayCurrWeek = todaysDate.getDay();
    // setCurrentDay(dayCurrWeek);

    const firstWeekDay = -dayCurrWeek;
    const lastWeekDay = 6 - dayCurrWeek;

    for (let i = firstWeekDay; i <= lastWeekDay; i++) {
      const date = new Date(todaysDate);
      date.setDate(todaysDate.getDate() + i);
      const nameDay = namesDays[(dayCurrWeek + i + 7) % 7].slice(0, 3).toUpperCase();
      const dayObject = { isSelectedDay: ( i === 0 ? true : false ), weekName: nameDay, completeDay: (namesDays[(dayCurrWeek + i + 7) % 7]), day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear() }
      results.push(dayObject);
      if(i === 0) setSelectedDay(dayObject);
    }
    setWeekDays(results);
    return results;
  }

  return (
    <View style={{marginTop: 30}}>
      <View style={{backgroundColor: 'white', height: 160,}}>
        <Text>{`${selectedDay?.completeDay}, ${selectedDay?.day} ${selectedDay?.month} ${selectedDay?.year}`}</Text>
        <FlatList
          data={weekDays}
          // style={{backgroundColor: 'red'}}
          renderItem={({ item }) => <WeekDay days={item} setSelectedDay={setSelectedDay} />}
          // keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
      {/* <MyMealCardR 
        title='Breakfast' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={BreakfastImg}
        />
        <MyMealCardL 
        title='Snack' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={SnackImg}
        />
        <MyMealCardR 
        title='Lunch' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={LunchImg}
        />
        <MyMealCardL 
        title='Dinner' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={DinnerImg}
        /> */}
    </View>
  );
};

export default MyMealsScreen;
