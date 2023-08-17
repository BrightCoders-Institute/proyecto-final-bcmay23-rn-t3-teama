import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { SubTitleProps } from '../../interfaces/interfaces';
import {styles} from './styles';

export const SubTitle = ({ text, fontSize, color } : SubTitleProps) => {

  const subTitleStyle: TextStyle = {
    ...styles.subTitle,
    fontSize: fontSize ?? 20,
    color: color ?? '#A69C9C',
  };

  return (
    <View style={styles.containerSubTitle}>
        <Text style={subTitleStyle}>{ text }</Text>
    </View>
  );
};
