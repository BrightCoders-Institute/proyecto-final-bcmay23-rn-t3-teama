import React, { useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import { CallendarWeekday } from '../../components/CallendarWeekday/CallendarWeekday';
import { getCurrentWeekdays, namesDays } from '../../helpers/getCurrentWeekdays';
import { DayObject } from '../../interfaces/interfaces';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { AppContext } from '../../context/AppContext';

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
  const [isLoading, setIsLoading] = useState(false);
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

  // no estoy muy seguro de esto
  useFocusEffect(
    useCallback(() => {
      getRecipeBook();
    }, [])
  );

  useEffect( () => {
    if (recipeBookData) getMealsIds();
  }, [selectedDay, recipeBookData]);

  const getRecipeBook = () => {
    setIsLoading(true);
    const userRef = firestore()
    .collection('recipeBook')
    .where('id_user', '==', userKey);

    userRef.get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const docSnapshot = querySnapshot.docs[0];
          // id del doc
          const docId = docSnapshot.id;
          const data = docSnapshot.data();
          data.id = docId;

          setRecipeBookData(data);
          setIsLoading(false);
          // console.log(data);
        } else {
          console.log(`No se encontraron resultados para id_user: ${userKey}`);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
        setIsLoading(false);
      });
  };

  const getMealsIds = () => {
    const currSelectedDate = `${selectedDay?.day}-${selectedDay?.month}-${selectedDay?.year}`;
    // const currBreakfast = recipeBookData.breakfast.filter(obj => obj.date === currSelectedDate);

    const filteredBreakfast = recipeBookData.breakfast
      .filter(obj => obj.date === currSelectedDate)
      .map(obj => ({ ...obj, recipeBook_id: recipeBookData.id }));

    const filteredLunch = recipeBookData.lunch
      .filter(obj => obj.date === currSelectedDate)
      .map(obj => ({ ...obj, recipeBook_id: recipeBookData.id }));

    const filteredDinner = recipeBookData.dinner
      .filter(obj => obj.date === currSelectedDate)
      .map(obj => ({ ...obj, recipeBook_id: recipeBookData.id }));

    const filteredSnack = recipeBookData.snack
      .filter(obj => obj.date === currSelectedDate)
      .map(obj => ({ ...obj, recipeBook_id: recipeBookData.id }));

    setCurrBreakfastObj(filteredBreakfast.length > 0 ? filteredBreakfast : null);
    setCurrLunchObj(filteredLunch.length > 0 ? filteredLunch : null);
    setCurrDinnerObj(filteredDinner.length > 0 ? filteredDinner : null);
    setCurrSnackObj(filteredSnack.length > 0 ? filteredSnack : null);
  };

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
        { !recipeBookData ? (
          <View style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
            <Text>Meals not found. Please contact your nutritionist.</Text>
          </View>
        ) : (
          <>
            <MyMealCardR
              title="Breakfast"
              caloriesRecomended={calories}
              description={descriptionMeal}
              imgSource={imgType.BreakfastImg}
              mealId={currBreakfastObj}
            />
            <MyMealCardL
              title="Snack"
              caloriesRecomended={calories}
              description={descriptionMeal}
              imgSource={imgType.SnackImg}
              mealId={currSnackObj}
            />
            <MyMealCardR
              title="Lunch"
              caloriesRecomended={calories}
              description={descriptionMeal}
              imgSource={imgType.LunchImg}
              mealId={currLunchObj}
            />
            <MyMealCardL
              title="Dinner"
              caloriesRecomended={calories}
              description={descriptionMeal}
              imgSource={imgType.DinnerImg}
              mealId={currDinnerObj}
            />
          </>
        ) }
      </ScrollView>
    </View>
  );
};

export default MyMealsScreen;
