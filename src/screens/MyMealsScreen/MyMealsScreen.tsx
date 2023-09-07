import React, { useContext, useEffect, useState } from 'react';
import { AppContext, appInitialState } from '../../context/AppContext';
import { FlatList, View, Text, ScrollView, Alert } from 'react-native';
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
  
  const { appState } = useContext(AppContext);

  const [weekDays, setWeekDays] = useState<DayObject[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayObject | undefined>();

  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.';
  const calories = 'Recomended 830 - 1170Cal';

  useEffect(() => {
    setWeekDays( getCurrentWeekdays(namesDays, setSelectedDay));
  }, []);

  const handelCardPress = ( title: string) => {
    if (!appState.isCardDisabled[title]) {
    navigation.navigate('Meals Details', { title });
  } else {
    Alert.alert(
      'Meal Completed',
      'This meal is already complete, want to see the recipe?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'destructive',
        },
        { text: 'OK', onPress: () => navigation.navigate('Recipe') },
      ]
    );
  }
  }
 
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
          title='Breakfast'
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.BreakfastImg}
          onPress={ () => handelCardPress( 'Breakfast' )}
          disable={appState.isCardDisabled['Breakfast']}
          />
        <MyMealCardL
          title="Snack"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.SnackImg}
          onPress={ () => handelCardPress( 'Snack')}
          disable={appState.isCardDisabled['Snack']}
        />
        <MyMealCardR
          title="Lunch"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.LunchImg}
          onPress={ () => handelCardPress( 'Lunch' )}
          disable={appState.isCardDisabled['Lunch']}
        />
        <MyMealCardL
          title="Dinner"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.DinnerImg}
          onPress={ () => handelCardPress( 'Dinner')}
          disable={appState.isCardDisabled['Dinner']}
        />
      </ScrollView>
    </View>
  );
};

export default MyMealsScreen;
