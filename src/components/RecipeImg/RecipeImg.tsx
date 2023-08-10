import React from 'react';
import { Image, View } from 'react-native';
import { RecipeImgProps } from '../../interfaces/interfaces';
import { styles } from './styles';

export const RecipeImg = ( { imgSource }: RecipeImgProps ) => {
  return (
    <View>
        {imgSource && <Image source={imgSource} style={styles.image} />}
    </View>
  )
}
