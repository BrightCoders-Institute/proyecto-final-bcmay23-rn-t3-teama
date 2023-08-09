import React from 'react';
import { View } from 'react-native';
import { MyMealCardR } from '../../components/MyMealCardR/MyMealCardR';
import { MyMealCardL } from '../../components/MyMealCardL/MyMealCardL';
import BreakfastImg from '../../assets/img/Breakfast.png';
import SnackImg from '../../assets/img/helty-snack.png';
import LunchImg from '../../assets/img/grilledChiken.jpg';
import DinnerImg from '../../assets/img/dinner.jpeg';



const MyMealsScreen = () => {
  const descriptionMeal = 'Bowl whit fruit, some fruit and more fruit. You can add fruit.'
  const calories = 'Recomended 830 - 1170Cal'
  return (
    <View>
      <MyMealCardR 
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
        />
    </View>
  );
};

export default MyMealsScreen;