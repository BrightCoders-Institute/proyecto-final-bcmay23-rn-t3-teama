import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  isValid?: boolean;
}

export const ButtonPrimary = ({title, onPress, isValid}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isValid ? styles.primaryButtonValid : styles.primaryButtonInvalid,
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
