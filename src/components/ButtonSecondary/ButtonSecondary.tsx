import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {style} from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  color?: string;
  borderColor?: string;
}

export const ButtonSecondary = ({title, onPress, color, borderColor}: ButtonProps) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color || '#007bff',
    borderColor: borderColor || '#007bff',
  };

  return (
    <TouchableOpacity
      style={[style.buttonContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={style.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
