import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Title } from '../../components/Title/Title';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import BreakfastImg from '../../assets/img/Breakfast.png';
import { MealIngredients } from '../../components/MealIngredients/MealIngredients';
import { MealInstructions } from '../../components/MealInstructions/MealInstructions';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

export const RecipeScreen = () => {
  const route = useRoute();
  const { mealData } = route.params;

  return (
    <View style={ styles.container }>
        <RecipeImg imgSource={mealData.image}/>
        <View style={styles.titleContainer}>
          <Title text={mealData.name} />
        </View>
        <ScrollView>
        <MealIngredients ingredients={mealData.ingredients} />
        <MealInstructions instructions={mealData.instructions} />
        </ScrollView>
    </View>
  )
}
