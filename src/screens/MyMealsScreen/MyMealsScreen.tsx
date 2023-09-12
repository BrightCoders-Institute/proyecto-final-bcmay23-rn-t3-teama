import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import { CallendarWeekday } from '../../components/CallendarWeekday/CallendarWeekday';
import { getCurrentWeekdays, namesDays } from '../../helpers/getCurrentWeekdays'
import { DayObject } from '../../interfaces/interfaces';

const imgType = {
  BreakfastImg: require('../../assets/img/Breakfast.png'),
  SnackImg: require('../../assets/img/helty-snack.png'),
  LunchImg: require('../../assets/img/grilledChiken.jpg'),
  DinnerImg: require('../../assets/img/dinner.jpeg'),
};

interface Props extends StackScreenProps<any, any> { }

const MyMealsScreen = ({ navigation }: Props) => {
  const [weekDays, setWeekDays] = useState<DayObject[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayObject | undefined>();

  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.';
  const calories = 'Recomended 830 - 1170Cal';

  useEffect(() => {
    setWeekDays( getCurrentWeekdays(namesDays, setSelectedDay));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        stickyHeaderIndices={[0]}
      >
        <View style={styles.calendarContainer}>
          <Text style={styles.dayTitle}>
            <Text style={{ color: '#68A76E' }}>{`${namesDays[new Date().getDay()] === selectedDay?.completeDay ? 'Today' : selectedDay?.completeDay}`}</Text>
            <Text style={{ color: '#000000' }}>{`, ${selectedDay?.day} ${selectedDay?.month} ${selectedDay?.year}`}</Text>
          </Text>
          <FlatList
            data={weekDays}
            style={{ marginLeft: 25 }}
            renderItem={({ item }) => <CallendarWeekday days={item} setSelectedDay={setSelectedDay} weekdays={weekDays} setWeekDays={setWeekDays} />}
            horizontal
          />
        </View>
        <MyMealCardR
          title="Breakfast"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.BreakfastImg}
          onPress={() => navigation.navigate('Meals Details')}
        />
        <MyMealCardL
          title="Snack"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.SnackImg}
          onPress={() => navigation.navigate('Meals Details')}
        />
        <MyMealCardR
          title="Lunch"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.LunchImg}
          onPress={() => navigation.navigate('Meals Details')}
        />
        <MyMealCardL
          title="Dinner"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.DinnerImg}
          onPress={() => navigation.navigate('Meals Details')}
        />
      </ScrollView>
    </View>
  );
};

export default MyMealsScreen;
