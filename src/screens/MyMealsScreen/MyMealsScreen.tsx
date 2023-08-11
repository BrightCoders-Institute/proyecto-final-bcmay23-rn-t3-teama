import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import { CallendarWeekday } from '../../components/CallendarWeekday/CallendarWeekday';
import BreakfastImg from '../../assets/img/Breakfast.png';
import SnackImg from '../../assets/img/helty-snack.png';
import LunchImg from '../../assets/img/grilledChiken.jpg';
import DinnerImg from '../../assets/img/dinner.jpeg';

const MyMealsScreen = () => {
  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.'
  const calories = 'Recomended 830 - 1170Cal'
  return (
    <View style={ styles.container }>
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
      {/* <MyMealCardR
        title='Breakfast'
        caloriesRecomended={calories}
        description={descriptionMeal}
        imgSource={BreakfastImg}
        onPress={() => navigation.navigate('Recipe')}
        />
        <MyMealCardL
        title='Snack'
        caloriesRecomended={calories}
        description={descriptionMeal}
        imgSource={SnackImg}
        onPress={() => navigation.navigate('Recipe')}
        />
        <MyMealCardR
        title='Lunch'
        caloriesRecomended={calories}
        description={descriptionMeal}
        imgSource={LunchImg}
        onPress={() => navigation.navigate('Recipe')}
        />
        <MyMealCardL
        title='Dinner'
        caloriesRecomended={calories}
        description={descriptionMeal}
        imgSource={DinnerImg}
        onPress={() => navigation.navigate('Recipe')}
      />*/}
    </View>
  );
};

export default MyMealsScreen;
