import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Title } from '../../components/Title/Title';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import BreakfastImg from '../../assets/img/Breakfast.png';
import { MealIngredients } from '../../components/MealIngredients/MealIngredients';
import { MealInstructions } from '../../components/MealInstructions/MealInstructions';
import { ScrollView } from 'react-native-gesture-handler';

export const RecipeScreen = () => {
  return (
    <View style={ styles.container }>
        <RecipeImg imgSource={BreakfastImg}/>
        <View style={styles.titleContainer}>
          <Title text='Fruit Bowl' />
        </View>
        <ScrollView>
        <MealIngredients />
        <MealInstructions />
        </ScrollView>
    </View>
  )
}
