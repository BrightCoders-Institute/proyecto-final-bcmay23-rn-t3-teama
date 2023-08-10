import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import BreakfastImg from '../../assets/img/Breakfast.png';
import SnackImg from '../../assets/img/helty-snack.png';
import LunchImg from '../../assets/img/grilledChiken.jpg';
import DinnerImg from '../../assets/img/dinner.jpeg';

interface Props extends StackScreenProps<any, any> {}

const MyMealsScreen = ({navigation}: Props) => {
  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.'
  const calories = 'Recomended 830 - 1170Cal'
  return (
    <View>
      <MyMealCardR 
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
        />
    </View>
  );
};

export default MyMealsScreen;