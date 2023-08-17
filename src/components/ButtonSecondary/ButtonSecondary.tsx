import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {style} from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  color?: string;
  fontSize?: number;
}

export const ButtonSecondary = ({title, onPress, color, fontSize = 20}: ButtonProps) => {
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
