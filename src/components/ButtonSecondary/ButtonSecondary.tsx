import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { style } from './styles';
import { ButtonSecondaryProps } from '../../interfaces/interfaces';

export const ButtonSecondary = ({ title, onPress, color, fontSize = 20, isDisabled }: ButtonSecondaryProps) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: isDisabled ? '#A0A0A0' : color || '#007bff',
  };

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[style.buttonContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={[style.buttonText, { fontSize: fontSize }]}>{title}</Text>
    </TouchableOpacity>
  );
};
