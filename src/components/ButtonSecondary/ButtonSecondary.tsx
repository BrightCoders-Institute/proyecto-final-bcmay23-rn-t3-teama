import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {style} from './styles';
import {ButtonSecondaryProps} from '../../interfaces/interfaces';

export const ButtonSecondary = ({title, onPress, color, fontSize = 20, width, height }: ButtonSecondaryProps) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color || '#007bff',
    width: width || '70%',
    height: height || 55,
  };

  return (
    <TouchableOpacity
      style={[style.buttonContainer, buttonStyle, ]} 
      onPress={onPress}>
      <Text style={[style.buttonText, {fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};
