import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import { CallendarWeekday } from '../../components/CallendarWeekday/CallendarWeekday';
import { getCurrentWeekdays, namesDays } from '../../helpers/getCurrentWeekdays'
import { DayObject } from '../../interfaces/interfaces';
import { AppContext } from '../../context/AppContext';
import firestore from '@react-native-firebase/firestore';

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
  const [recipeBookData, setRecipeBookData ] = useState(null);
  const [currBreakfastObj, setCurrBreakfastObj] = useState(null);
  const [currLunchObj, setCurrLunchObj] = useState(null);
  const [currDinnerObj, setCurrDinnerObj] = useState(null);
  const [currSnackObj, setCurrSnackObj] = useState(null);
  const { appState: { userData: { userKey } } } = useContext(AppContext);

  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.';
  const calories = 'Recomended 830 - 1170Cal';

  useEffect(() => {
    setWeekDays( getCurrentWeekdays(namesDays, setSelectedDay));
    getRecipeBook();
  }, []);

  useEffect( () => {
    if (recipeBookData) getMealsIds();
  }, [selectedDay, recipeBookData]);

  const getRecipeBook = () => {
    const userRef = firestore()
    .collection('recipeBook')
    .where('id_user', '==', userKey);

    userRef.get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setRecipeBookData(data);
        // console.log(data.breakfast);
      } else {
        console.log(`No se encontraron resultados para id_user: ${userKey}`);
      }
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
  };

  const getMealsIds = () => {
    const currSelectedDate = `${selectedDay?.day}-${selectedDay?.month}-${selectedDay?.year}`;
    // const currBreakfast = recipeBookData.breakfast.filter(obj => obj.date === currSelectedDate);

    setCurrBreakfastObj( recipeBookData.breakfast.filter(obj => obj.date === currSelectedDate) );
    setCurrLunchObj( recipeBookData.lunch.filter(obj => obj.date === currSelectedDate) );
    setCurrDinnerObj( recipeBookData.dinner.filter(obj => obj.date === currSelectedDate) );
    setCurrSnackObj( recipeBookData.snack.filter(obj => obj.date === currSelectedDate) );
  };

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
          mealId={currBreakfastObj}
          onPress={() => navigation.navigate('Meals Details')}
        />
        <MyMealCardL
          title="Snack"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.SnackImg}
          mealId={currSnackObj}
          onPress={() => navigation.navigate('Meals Details')}
        />
        <MyMealCardR
          title="Lunch"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.LunchImg}
          mealId={currLunchObj}
          onPress={() => navigation.navigate('Meals Details')}
        />
        <MyMealCardL
          title="Dinner"
          caloriesRecomended={calories}
          description={descriptionMeal}
          imgSource={imgType.DinnerImg}
          mealId={currDinnerObj}
          onPress={() => navigation.navigate('Meals Details')}
        />
      </ScrollView>
    </View>
  );
};

export default MyMealsScreen;
