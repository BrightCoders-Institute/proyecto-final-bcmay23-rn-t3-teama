import { View, Text } from 'react-native';
import React from 'react';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import BreackfastImg from '../../assets/img/Breakfast.png'



const MyMealsScreen = () => {
  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.'
  const calories = 'Recomended 830 - 1170Cal'
  return (
    <View>
      <MyMealCardR 
        title='Breackfast' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={BreackfastImg}
        />
        <MyMealCardL 
        title='Snack' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={BreackfastImg}
        />
        <MyMealCardR 
        title='Breackfast' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={BreackfastImg}
        />
        <MyMealCardL 
        title='Breackfast' 
        caloriesRecomended={calories} 
        description={descriptionMeal}
        imgSource={BreackfastImg}
        />
    </View>
  );
};

export default MyMealsScreen;