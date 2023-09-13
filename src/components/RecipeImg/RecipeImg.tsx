import React from 'react';
import { Image, View } from 'react-native';
import { RecipeImgProps } from '../../interfaces/interfaces';
import { styles } from './styles';

export const RecipeImg = ( { imgSource }: RecipeImgProps ) => {
  return (
    <View>
      <Image source={{uri: imgSource}} style={styles.image} />
    </View>
  );
};

