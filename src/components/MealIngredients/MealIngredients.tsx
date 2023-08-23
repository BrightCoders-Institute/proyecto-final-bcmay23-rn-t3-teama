import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SubTitle } from '../SubTitle/SubTitle';
import { recipeData } from '../../testData/ingredients';

export const MealIngredients = () => {
  
    return (
        <View style={ styles.container }>
            <SubTitle text='Ingredients' color='black' fontSize={20} />
            <Text style={styles.ingredientsText}>
                {recipeData.ingredients.map((ingredient, index) => (
                   <Text key={index}>
                        {'\n'}
                        {ingredient}
                   </Text> 
                ))}
            </Text>

        </View>
  )
}
