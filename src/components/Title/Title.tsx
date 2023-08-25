import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { SubTitleProps } from '../../interfaces/interfaces';
import {styles} from './styles';

export const Title = ({ text, fontSize, color } : SubTitleProps) => {
    
    const titleStyle: TextStyle = {
        ...styles.Title,
        fontSize: fontSize ?? 30,
        color: color ?? 'black',
      };
    
  return (
    <View>
        <Text style={titleStyle}>{ text }</Text>
    </View>
  )
}