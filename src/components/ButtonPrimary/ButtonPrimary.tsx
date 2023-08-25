import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ButtonProps} from '../../interfaces/interfaces';

export const ButtonPrimary = ({title, onPress, isDisabled}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.buttonContainer,
        isDisabled ? styles.primaryButtonInvalid : styles.primaryButtonValid,
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
