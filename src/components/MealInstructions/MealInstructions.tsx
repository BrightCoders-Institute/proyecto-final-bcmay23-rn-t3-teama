import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SubTitle } from '../SubTitle/SubTitle';
import { recipeData } from '../../testData/ingredients';

export const MealInstructions = () => {
  
    return (
        <View style={ styles.container }>
            <SubTitle text='Instructions' color='gray' fontSize={20} />
            <Text style={styles.ingredientsText}>
                {recipeData.instructions.map((instuction, index) => (
                   <Text key={index}>
                        {'\n'}
                        {instuction}
                   </Text> 
                ))}
            </Text>

        </View>
  )
}
