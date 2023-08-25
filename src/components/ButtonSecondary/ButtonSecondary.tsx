import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {style} from './styles';
import {ButtonSecondaryProps} from '../../interfaces/interfaces';

export const ButtonSecondary = ({title, onPress, color, fontSize = 20}: ButtonSecondaryProps) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color || '#007bff',
  };

  return (
    <TouchableOpacity
      style={[style.buttonContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={[style.buttonText, {fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};
