import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Title } from '../../components/Title/Title';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import BreakfastImg from '../../assets/img/Breakfast.png';

export const RecipeScreen = () => {
  return (
    <View style={ styles.container }>
        <RecipeImg imgSource={BreakfastImg}/>
        <Title text='Fruit Bowl' />
    </View>
  )
}
